const Cart = require('../models/Cart');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate({
      path: 'items.product',
      model: 'Product',
    });

    if (!cart) {
      return res.json({ items: [] });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch cart' });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    if (existingItem) {
      existingItem.quantity += Number(quantity);
    } else {
      cart.items.push({ product: productId, quantity: Number(quantity) });
    }

    await cart.save();
    const populatedCart = await cart.populate({ path: 'items.product', model: 'Product' });
    res.status(201).json(populatedCart);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to add to cart' });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find((entry) => entry.product.toString() === req.params.productId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = Number(quantity);
    await cart.save();
    const populatedCart = await cart.populate({ path: 'items.product', model: 'Product' });
    res.json(populatedCart);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to update cart' });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter((entry) => entry.product.toString() !== req.params.productId);
    await cart.save();
    const populatedCart = await cart.populate({ path: 'items.product', model: 'Product' });
    res.json(populatedCart);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to remove cart item' });
  }
};

module.exports = { getCart, addToCart, updateCartItem, removeCartItem };
