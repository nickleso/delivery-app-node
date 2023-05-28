const { Schema, model } = require("mongoose");

const orderModel = new Schema(
  {
    // title: {
    //   type: String,
    //   required: [true, "Set item title"],
    // },
    // price: {
    //   type: Number,
    //   default: 0,
    //   required: [true, "Set item price"],
    // },
    // category: {
    //   type: String,
    //   required: [true, "Set category"],
    // },
    // image: {
    //   type: String,
    // },
    // description: {
    //   type: String,
    //   required: [true, "Set item description"],
    // },
    // quantity: {
    //   type: Number,
    //   default: 1,
    //   required: [true, "Set item quantity"],
    // },
    // totalPrice: {
    //   type: Number,
    //   default: 0,
    //   required: [true, "Set item totalPrice"],
    // },

    cart: {
      type: Array,
      required: [true, "Set cart"],
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
