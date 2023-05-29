const { Goods } = require("../models/goodsModel");

const getGoodsByCategory = async (req, res, next) => {
  const { category } = req.params;

  try {
    const result = await Goods.find({ category: category });

    return res.status(200).json({
      message: "goods by category",
      code: 200,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getGoodsByCategory };
