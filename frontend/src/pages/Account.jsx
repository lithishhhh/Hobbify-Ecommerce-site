import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { getOrders } from '../services/orderService';

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const orderConfirmation = location.state?.orderConfirmation;

  useEffect(() => {
    if (!user || !token) return;

    getOrders(token)
      .then((data) => setOrders(data))
      .catch(() => setOrders([]));
  }, [user, token]);

  if (!user) {
    return (
      <div className="page-shell">
        <Navbar />
        <main className="content-page empty-state">
          <h2>Login required</h2>
          <button className="primary-btn" onClick={() => navigate('/login')}>Login</button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="content-page">
        <div className="inner-page-header">
          <h2>Account</h2>
        </div>

        {orderConfirmation && (
          <div className="order-confirmation" role="status">
            <strong>Order placed successfully!</strong>
            {orderConfirmation.orderId && <span>Order #{orderConfirmation.orderId.slice(-6)}</span>}
          </div>
        )}

        <div className="account-box">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>

        <div className="account-section">
          <h3>Recent Orders</h3>
          {orders.length === 0 ? (
            <div className="empty-message">No orders yet.</div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id} className="order-card">
                  <div>
                    <strong>Order #{order._id.slice(-6)}</strong>
                  </div>
                  <div>{order.status}</div>
                  <div>₹ {Number(order.totalAmount).toLocaleString('en-IN')}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
