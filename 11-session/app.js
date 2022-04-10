const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000; // Port the server will listen on

// Initialize session
app.use(
  session({
    secret: "42",
    saveUninitialized: true,
    resave: true,
  })
);

// Needed for POST request
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming request object if object, with nested objects, or generally any type

// Variable holding info about the current session (it's in a var only for demonstration purposes)
let currentSession = {};

// Accepts a username and saves it in the session
app.post("/user", (req, res) => {
  currentSession = req.session;
  currentSession.username = req.body.username;
  res.send('Username "' + req.body.username + '" was saved');
});

// Displays a username if in a session
app.get("/user", (req, res) => {
  if (currentSession.username) {
    res.send("Saved username: " + currentSession.username);
  } else {
    res.send("No username in current session");
  }
});

// Deletes the username from session
app.delete("/user", (req, res) => {
  if (currentSession.username) {
    delete req.session.username;
    currentSession = {};
    res.send("Username was deleted");
  }
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
