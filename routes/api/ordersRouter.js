const express = require("express");
const ordersRouter = express.Router();

const {
  addUsersValidation,
} = require("../../middlewares/usersValidationMdlwr");
const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");

const {
  getAllOrders,
  getOrderByUserName,
  getOrderByUserEmail,
  createOrder,
} = require("../../controllers");

ordersRouter.get("/", ctrlWrapper(getAllOrders));

ordersRouter.get("/:name", ctrlWrapper(getOrderByUserName));

ordersRouter.get("/:email", ctrlWrapper(getOrderByUserEmail));

ordersRouter.post("/orders", addUsersValidation, ctrlWrapper(createOrder));

module.exports = ordersRouter;
