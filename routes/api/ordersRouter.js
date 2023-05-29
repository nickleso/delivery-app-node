const express = require("express");
const ordersRouter = express.Router();

const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const {
  getAllOrders,
  getOrderByUserName,
  getOrderByUserEmail,
  createOrder,
} = require("../../controllers");

ordersRouter.get("/", ctrlWrapper(getAllOrders));

ordersRouter.get("/name/:name", ctrlWrapper(getOrderByUserName));

ordersRouter.get("/email/:email", ctrlWrapper(getOrderByUserEmail));

ordersRouter.post("/create", ctrlWrapper(createOrder));

module.exports = ordersRouter;
