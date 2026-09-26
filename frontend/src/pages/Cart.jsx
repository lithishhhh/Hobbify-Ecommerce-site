import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { createOrder } from '../services/orderService';
import { createPaymentOrder, verifyPayment } from '../services/paymentService';

const Cart = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { cartItems, subtotal, removeItem, updateQuantity, clearCart } = useCart();
  const [paymentError, setPaymentError] = useState('');

  const handleCheckout = async () => {
    if (!user || !token) {
      navigate('/login');
      return;
    }

    const payload = {
      items: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
        price: Number(item.product.price),
      })),
      totalAmount: subtotal,
    };

    try {
      setPaymentError('');
      const paymentOrder = await createPaymentOrder(token, subtotal + 99);
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => openPayment(paymentOrder, payload);
        script.onerror = () => setPaymentError('Unable to load Razorpay checkout. Please try again.');
        document.body.appendChild(script);
        return;
      }
      openPayment(paymentOrder, payload);
    } catch (error) {
      setPaymentError(error.response?.data?.message || 'Unable to start payment. Please try again.');
    }
  };

  const openPayment = (paymentOrder, payload) => {
    const payment = new window.Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: paymentOrder.amount,
      currency: paymentOrder.currency,
      name: 'Hobbify',
      description: `${user?.name || 'Customer'} Transaction`,
      order_id: paymentOrder.id,
      handler: async (response) => {
        try {
          await verifyPayment(token, response);
          const order = await createOrder(token, payload);
          clearCart();
          navigate('/account', {
            state: {
              orderConfirmation: {
                orderId: order._id,
              },
            },
          });
        } catch (error) {
          setPaymentError(
            error.response?.data?.message
              || 'Payment was received, but we could not confirm your order. Please contact support.'
          );
        }
      },
    });
    payment.on('payment.failed', (response) => {
      setPaymentError(response.error?.description || 'Payment could not be completed. Try a supported test payment method.');
    });
    payment.open();
  };

  if (!user) {
    return (
      <div className="page-shell">
        <Navbar />
        <main className="content-page empty-state">
          <h2>Please log in to view your cart.</h2>
          <button className="primary-btn" onClick={() => navigate('/login')}>Login</button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="content-page cart-page">
        <div className="inner-page-header">
          <h2>Your Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-message">Your cart is empty.</div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.product._id} className="cart-item">
                  <img src={item.product.image} alt={item.product.name} />
                  <div className="cart-item-content">
                    <h4>{item.product.name}</h4>
                    <p>₹ {Number(item.product.price).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.product._id, Math.max(1, item.quantity - 1))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product._id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.product._id)}>Remove</button>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h3>Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹ {subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>₹ 99</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>₹ {(subtotal + 99).toLocaleString('en-IN')}</span>
              </div>
              <button className="primary-btn full-width" onClick={handleCheckout}>Proceed to Checkout</button>
              {paymentError && <p className="payment-error" role="alert">{paymentError}</p>}
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
