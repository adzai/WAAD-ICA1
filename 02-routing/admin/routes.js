const express = require("express");
const app = express();

const adminRouter = express.Router();

adminRouter.get("/test", (req, res) => {
  res.send("Hello from the admin router test route!");
});

module.exports = adminRouter;
