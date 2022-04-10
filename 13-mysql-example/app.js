const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000; // Port the server will listen on

// Needed for POST request
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming request object if object, with nested objects, or generally any type

// Initializes a connection pool with up to 100 connections,
// credentials are taken from environment variables
let pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.dbhost,
  user: process.env.dbuser,
  password: process.env.dbpass,
  database: process.env.db,
});

// Ensure test_table exists on start up
let initSQL =
  "CREATE TABLE IF NOT EXISTS test_table (id int NOT NULL, name varchar(255), value int,PRIMARY KEY (id))";
pool.query(initSQL, (err, data) => {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

// Returns all data about the user based on the id
// If id is not found, returns a 404
app.get("/users/:id", function (req, res) {
  var sql = "SELECT * FROM test_table where id=?";
  pool.query(sql, [req.params.id], (err, data) => {
    if (err) {
      res.status(404).json({ error: "ID not found" });
    } else {
      res.send(data);
    }
  });
});

// Inserts a new user to the test_table.
// POST params are: id, name, value
// Returns the sql error message if there was a problem inserting
app.post("/users", function (req, res) {
  pool.query(
    "INSERT INTO test_table(id,name,value) VALUES(?, ?, ?)",
    [req.body.id, req.body.name, req.body.value],
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: "Couldn't insert into the database: " + err.sqlMessage,
        });
      } else {
        res.send("Success");
      }
    }
  );
});

// Deletes a user from the test_table based on provided id.
// Returns a 404 if id not found.
app.delete("/users/:id", function (req, res) {
  pool.query(
    "DELETE FROM test_table WHERE id=?",
    [req.params.id],
    (err, data) => {
      if (err) {
        res.status(404).json({ error: "ID not found" });
      } else {
        res.send("Success");
      }
    }
  );
});

// Updates a user's name in the test_table based on provided id.
// PATCH params are: name, id
// Returns a 404 if id not found.
app.patch("/users/:id", function (req, res) {
  pool.query(
    "UPDATE test_table SET name=? WHERE id=?",
    [req.body.name, req.params.id],
    (err, data) => {
      if (err) {
        res.status(404).json({ error: "ID not found" });
      } else {
        res.send("Success");
      }
    }
  );
});

// Updates all user's information in the test_table.
// PUT params are: id, name, value
// Returns a 404 if id not found.
app.put("/users/:id", function (req, res) {
  pool.query(
    "UPDATE test_table SET id=?, name=?, value=? WHERE id=?",
    [req.body.id, req.body.name, req.body.value, req.params.id],
    (err, data) => {
      if (err) {
        res.status(404).json({ error: "ID not found" });
      } else {
        res.send("Success");
      }
    }
  );
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
