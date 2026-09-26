const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  removeCartItem,
} = require('../controllers/cartController');
const { protectWithFirebase } = require('../middleware/firebaseAuth');

const router = express.Router();

router.use(protectWithFirebase);
router.get('/', getCart);
router.post('/', addToCart);
router.put('/:productId', updateCartItem);
router.delete('/:productId', removeCartItem);

module.exports = router;
