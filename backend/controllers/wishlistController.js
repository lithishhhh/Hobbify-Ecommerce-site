const Wishlist = require('../models/Wishlist');

const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products');
    if (!wishlist) {
      return res.json({ products: [] });
    }

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch wishlist' });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user._id, products: [] });
    }

    if (wishlist.products.some((id) => id.toString() === productId)) {
      return res.status(200).json(wishlist);
    }

    wishlist.products.push(productId);
    await wishlist.save();
    const populatedWishlist = await wishlist.populate('products');
    res.status(201).json(populatedWishlist);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to add to wishlist' });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id });

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    wishlist.products = wishlist.products.filter((id) => id.toString() !== req.params.productId);
    await wishlist.save();
    const populatedWishlist = await wishlist.populate('products');
    res.json(populatedWishlist);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to remove from wishlist' });
  }
};

module.exports = { getWishlist, addToWishlist, removeFromWishlist };
