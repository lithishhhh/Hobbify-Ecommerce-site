const crypto = require('crypto');
const Razorpay = require('razorpay');

const getRazorpay = () => new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const createPaymentOrder = async (req, res) => {
  try {
    const amount = Number(req.body.amount);
    if (!amount || amount <= 0) return res.status(400).json({ message: 'Invalid amount' });

    const order = await getRazorpay().orders.create({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `hobbify_${Date.now()}`,
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Payment order failed' });
  }
};

const verifyPayment = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (expected !== razorpay_signature) return res.status(400).json({ message: 'Payment verification failed' });
  res.json({ verified: true });
};

module.exports = { createPaymentOrder, verifyPayment };
