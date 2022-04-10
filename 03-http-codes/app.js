const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Data to return
const users = [
  { id: 0, name: "Adam", role: "admin" },
  { id: 1, name: "Bob", role: "user" },
];

// Returns a user from the array above based on the provided id param
app.get("/users/:id", (req, res) => {
  if (Math.random() < 0.3) {
    // Simulating a random server error
    res.status(500).send("Internal server error");
  } else if (req.params.id < 0 || req.params.id >= users.length) {
    // Return 404 if provided id is out of bounds
    res.status(404).send("ID not found");
  } else {
    // Return the user based on id
    res.status(200).json(users[req.params.id]);
  }
});

// Route that redirect the user to the correct path -> users instead of user
app.get("/user/:id", (req, res) => {
  res.redirect(
    301,
    // Retrieve URL and change "/user/" into "/users/"
    req.protocol + "://" + req.get("host") + "/users/" + req.params.id
  );
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
