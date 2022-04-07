const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')


app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

let pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpass,
    database: process.env.db
});

// Ensure test_table exists on start up
let initSQL = "CREATE TABLE IF NOT EXISTS test_table (id int NOT NULL, name varchar(255), value int,PRIMARY KEY (id))";
pool.query(initSQL, (err, data) => {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

app.get('/users/:id', function (req, res) {
    var sql = "SELECT * FROM test_table where id=?";
    pool.query(sql, [req.params.id], (err, data) => {
        if (err) {
            res.status(404).json({error: "ID not found"});
        }
        else {
            res.send(data);
        }
    });
})

app.post('/users', function (req, res) {
    pool.query("INSERT INTO test_table(id,name,value) VALUES(?, ?, ?)", [req.body.id, req.body.name, req.body.value], (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({error: "Couldn't insert into the database: " + err.sqlMessage})
        } else {
            res.send("Success");
        }
    });
})

app.delete('/users/:id', function (req, res) {
    pool.query("DELETE FROM test_table WHERE id=?", [req.params.id], (err, data) => {
        if (err) {
            res.status(404).json({error: "ID not found"})
        } else {
        res.send("Success");
        }
    });
})

app.patch('/users/:id', function (req, res) {
    pool.query("UPDATE test_table SET name=? WHERE id=?", [req.body.name, req.params.id], (err, data) => {
        if (err) {
            res.status(404).json({error: "ID not found"})

        } else {
            res.send("Success");
        }
    });
})

app.put('/users/:id', function (req, res) {
    pool.query("UPDATE test_table SET id=?, name=?, value=? WHERE id=?", [req.body.id, req.body.name, req.body.value, req.params.id], (err, data) => {
        if (err) {
            res.status(404).json({error: "ID not found"})

        } else {
            res.send("Success");
        }
    });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
