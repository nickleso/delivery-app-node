const { Order } = require("../models/orderModel");

const getAllOrders = async (req, res, next) => {
  try {
    const result = await Order.find({});

    return res.status(200).json({
      message: "list of all orders",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllOrders };
