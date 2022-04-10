const express = require("express");
const apiRouter = require("./api/routes.js"); // Require router for /api
const adminRouter = require("./admin/routes.js"); // Require router for /admin
const app = express();
const port = 3000; // Port the server will listen on

// It is possible to route using the app constant
// Handles GET HTTP method for /
app.get("/", (req, res) => {
  res.send("Home get request");
});

// Handles POST HTTP method for /
app.post("/", (req, res) => {
  res.send("Home post request");
});

// Handles all HTTP methods for /test
app.all("/test", (req, res) => {
  res.send("Standard test route!");
});

// But it is also possible to create multiple routers and use those,
// can be useful to handle routes behind a prefix e.g. /api/...
app.use("/api", apiRouter);
app.use("/admin", adminRouter);

// Make the server listen on the defined port and log it
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
