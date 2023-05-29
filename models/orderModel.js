const { Schema, model } = require("mongoose");

const orderModel = new Schema(
  {
    cart: {
      type: Array,
      required: [true, "Set cart"],
    },
    cartTotal: {
      type: Number,
      required: [true, "Set cart total"],
    },

    name: {
      type: String,
      required: [true, "Set user name"],
    },
    email: {
      type: String,
      required: [true, "Set user email"],
    },
    phone: {
      type: String,
      required: [true, "Set user phone"],
    },
    address: {
      type: String,
      required: [true, "Set user address"],
    },
  },

  { versionKey: false, timestamps: true }
);

const Order = model("order", orderModel);

module.exports = { Order };
