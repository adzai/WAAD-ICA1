const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // Port the server will listen on
const pub = path.join(__dirname, "public"); // __dirname returns the path of the folder where the current js file resides,
// then it's joined with "public" to create the full path to that folder

// Serves static assets from provided root directory
app.use(express.static("public"));

// Home route that returns a 200
app.get("/", (req, res) => {
  res.send();
});

// Serves the pcu html file
app.get("/pcu", (req, res) => {
  res.sendFile(path.join(pub, "pcu.html"));
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
