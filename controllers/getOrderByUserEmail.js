const { Order } = require("../models/orderModel");

const getOrderByUserEmail = async (req, res, next) => {
  const { email } = req.params;
  const pattern = email;

  try {
    const result = await Order.find({
      email: { $regex: pattern, $options: "i" },
    });

    return res.status(200).json({
      message: "order by user email",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrderByUserEmail };
