const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Returns a JSON response with a random value
app.get("/", (req, res) => {
  res.json({ testJSONVal: Math.random() });
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
