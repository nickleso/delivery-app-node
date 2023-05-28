const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const ordersRouter = require("./routes/api/ordersRouter");

const {
  noDataByIdError,
  duplicateError,
  serverError,
} = require("./helpers/errorHandlers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/orders", ordersRouter);
// app.use("/shops", shopsRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: "Use api on routes: /api",
    data: "Not found",
  });
});

app.use((err, req, res, next) => {
  // objectId error handler
  if (err.message.includes("Cast to ObjectId failed")) {
    return noDataByIdError(res);
  }

  if (err.message.includes("duplicate")) {
    return duplicateError(res);
  }

  serverError(err, res);
});

module.exports = app;
