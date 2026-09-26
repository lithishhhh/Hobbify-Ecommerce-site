const Product = require('../models/Product');
const Hobby = require('../models/Hobby');

const getProducts = async (req, res) => {
  try {
    const { search = '', hobby, limit } = req.query;
    const normalizedSearch = String(search).trim();
    const normalizedLimit = Number(limit);

    let filter = {};

    if (hobby) {
      const hobbyValue = String(hobby).trim();
      if (hobbyValue.length === 24) {
        filter.hobby = hobbyValue;
      } else {
        const hobbyDoc = await Hobby.findOne({ name: { $regex: hobbyValue, $options: 'i' } }).lean();
        if (hobbyDoc) {
          filter.hobby = hobbyDoc._id;
        } else {
          filter.hobby = null;
        }
      }
    }

    let products = await Product.find(filter.hobby === null ? { _id: null } : filter)
      .populate('hobby', 'name emoji image')
      .sort({ createdAt: -1 });

    if (normalizedSearch) {
      const query = normalizedSearch.toLowerCase();
      products = products.filter((product) => {
        const productName = (product.name || '').toLowerCase();
        const hobbyName = (product.hobby?.name || '').toLowerCase();
        return productName.includes(query) || hobbyName.includes(query);
      });
    }

    if (!Number.isNaN(normalizedLimit) && normalizedLimit > 0) {
      products = products.slice(0, normalizedLimit);
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('hobby', 'name emoji image');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch product' });
  }
};

const getProductsByHobby = async (req, res) => {
  try {
    const products = await Product.find({ hobby: req.params.hobbyId })
      .populate('hobby', 'name emoji image')
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch hobby products' });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to create product' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to update product' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to delete product' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductsByHobby,
  createProduct,
  updateProduct,
  deleteProduct,
};
