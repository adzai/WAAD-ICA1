const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Simple route at / sending back HTTP response "Hello world" with status code 200
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
