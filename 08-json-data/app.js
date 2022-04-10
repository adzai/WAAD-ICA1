const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Needed for POST request
app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming request object if object, with nested objects, or generally any type

// Accepts a JSON payload and logs it. 200 is returned back
app.post("/", (req, res) => {
  console.log("Received JSON: " + JSON.stringify(req.body));
  res.send();
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
