const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = express();
const port = 3000

app.use(session({
    secret: '42',
    saveUninitialized: true,
    resave: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let currentSession = {};

app.post('/user', (req,res) => {
    currentSession = req.session;
    currentSession.username = req.body.username;
    res.send('Username "' + req.body.username + '" was saved');
});

app.get('/user',(req,res) => {
    if(currentSession.username) {
        res.send("Saved username: " + currentSession.username);
    }
    else {
        res.send("No username in current session");
    }
});

app.delete('/user',(req,res) => {
    if (currentSession.username){
        delete req.session.username
        currentSession = {}
        res.send("Username was deleted")
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
