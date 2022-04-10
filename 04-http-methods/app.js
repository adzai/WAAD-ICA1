const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Examples of HTTP methods

app.get("/users/:id", (req, res) => {
  // Used for retrieving some data, e.g. user from db based on id
  res.send("GET");
});

app.post("/users/:id", (req, res) => {
  // Used for creating a record, e.g. inserting a new user in the db
  res.send("POST");
});

app.delete("/users/:id", (req, res) => {
  // Used for deleting a record e.g. delete a user from db based on id
  res.send("DELETE");
});

app.patch("/users/:id", (req, res) => {
  // Used for updating fields of a particular record e.g. user's email
  res.send("PATCH");
});

app.put("/users/:id", (req, res) => {
  // Used for updating a whole record e.g. row of a user in a db
  res.send("PUT");
});

app.options("/users/:id", (req, res) => {
  // Can be used for pre flight check on CORS requests for example
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.send();
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
