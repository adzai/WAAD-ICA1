const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Returns the provided URL query params back in a JSON
app.get("/", (req, res) => {
  res.json({ queryParams: req.query });
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
