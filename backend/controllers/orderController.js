const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order must include at least one item' });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      totalAmount,
      status: 'Processing',
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to create order' });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('items.product')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch orders' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch order' });
  }
};

module.exports = { createOrder, getOrders, getOrderById };
