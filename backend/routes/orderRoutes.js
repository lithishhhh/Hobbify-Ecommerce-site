const express = require('express');
const { createOrder, getOrders, getOrderById } = require('../controllers/orderController');
const { protectWithFirebase } = require('../middleware/firebaseAuth');

const router = express.Router();

router.use(protectWithFirebase);
router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);

module.exports = router;
