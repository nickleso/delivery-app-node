const { Order } = require("../models/orderModel");

const createOrder = async (req, res, next) => {
  const order = req.body;
  console.log(order);

  try {
    const result = new Order(order);
    await result.save();

    return res.status(201).json({
      message: "order created",
      code: 201,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };
