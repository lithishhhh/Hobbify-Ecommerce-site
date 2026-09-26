const express = require('express');
const { createPaymentOrder, verifyPayment } = require('../controllers/paymentController');
const { protectWithFirebase } = require('../middleware/firebaseAuth');

const router = express.Router();
router.use(protectWithFirebase);
router.post('/create-order', createPaymentOrder);
router.post('/verify', verifyPayment);

module.exports = router;
