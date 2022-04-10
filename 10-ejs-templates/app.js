const express = require("express");
const app = express();
const port = 3000; // Port the server will listen on

// Loads the ejs view engine
app.set("view engine", "ejs");

// Serves the index ejs file. Accepts a query param 'name'
app.get("/", (req, res) => {
  let name = req.query.name || "Anonymous";
  const user = {
    name: name,
    admin: name.toLowerCase() === "adam", // Sets admin to true if provided name is adam
  };
  // Renders index.ejs and gives it the user object
  res.render("pages/index", {
    user,
  });
});

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
