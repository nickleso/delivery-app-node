const { Order } = require("../models/orderModel");

const getAllOrders = async (userId, page, limit) => {
  const skip = (page - 1) * limit;
  const events = await Order.find({ owner: userId }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id title description startDate endDate");
  return events;
};

const getOrderByUserName = async (userId, page, limit) => {
  const skip = (page - 1) * limit;
  const events = await Order.find({ owner: userId }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id title description startDate endDate");
  return events;
};

const getOrderByUserEmail = async (userId, page, limit) => {
  const skip = (page - 1) * limit;
  const events = await Order.find({ owner: userId }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id title description startDate endDate");
  return events;
};

const addOrder = async ({ title, description, startDate, endDate }, userId) => {
  const event = new Order({
    title,
    description,
    startDate,
    endDate,
    owner: userId,
  });

  await event.save();

  const eventsTotal = await Order.estimatedDocumentCount({ owner: userId });
  await User.findByIdAndUpdate({ _id: userId }, { eventsCount: eventsTotal });

  return event;
};

module.exports = {
  getAllOrders,
  getOrderByUserName,
  getOrderByUserEmail,
  addOrder,
};
