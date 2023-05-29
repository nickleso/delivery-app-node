const { Order } = require("../models/orderModel");

const getOrderByUserName = async (req, res, next) => {
  const { name } = req.params;
  const pattern = name;

  try {
    const result = await Order.find({
      name: { $regex: pattern, $options: "i" },
    });

    return res.status(200).json({
      message: "order by user name",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrderByUserName };
