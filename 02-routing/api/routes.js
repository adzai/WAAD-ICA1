const express = require("express");
const app = express();

const apiRouter = express.Router();

apiRouter.get("/test", (req, res) => {
  res.send("Hello from the API router test route!");
});
module.exports = apiRouter;
