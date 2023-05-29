const express = require("express");
const goodsRouter = express.Router();

const { ctrlWrapper } = require("../../middlewares/ctrlWrapper");
const { getGoodsByCategory } = require("../../controllers/getGoodsByCategory");

goodsRouter.get("/:category", ctrlWrapper(getGoodsByCategory));

module.exports = goodsRouter;
