const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // Port the server will listen on

const secretCookie = "cookie=secret-cookie";

// Checks if the cookie in headers matches the secretCookie variable
// and responds accordingly
app.post("/secret", (req, res) => {
  let cookie = req.headers.cookie; // Retrieves request cookie
  secretCookie === cookie
    ? res.send("You got the secret!")
    : res.send("Wrong cookie!");
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
