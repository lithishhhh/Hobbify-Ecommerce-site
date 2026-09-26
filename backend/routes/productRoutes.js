const express = require('express');
const { protectWithFirebase, requireAdmin } = require('../middleware/firebaseAuth');
const {
  getProducts,
  getProductById,
  getProductsByHobby,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.get('/', getProducts);
router.get('/hobby/:hobbyId', getProductsByHobby);
router.get('/:id', getProductById);
router.post('/', protectWithFirebase, requireAdmin, createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
