const { Schema, model } = require("mongoose");

const goodsModel = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set item title"],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, "Set item price"],
    },
    category: {
      type: String,
      required: [true, "Set category"],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Set item description"],
    },
    quantity: {
      type: Number,
      default: 1,
      required: [true, "Set item quantity"],
    },
    totalPrice: {
      type: Number,
      default: 0,
      required: [true, "Set item total price"],
    },
  },

  { versionKey: false, timestamps: true }
);

const Goods = model("goods", goodsModel);

module.exports = { Goods };
