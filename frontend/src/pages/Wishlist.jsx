import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { wishlist } = useWishlist();

  if (!user) {
    return (
      <div className="page-shell">
        <Navbar />
        <main className="content-page empty-state">
          <h2>Please log in to view your wishlist.</h2>
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
          <h2>Wishlist</h2>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-message">No saved products yet.</div>
        ) : (
          <div className="product-grid">
            {wishlist.map((product) => (
              <article key={product._id} className="product-card">
                <div className="product-card-image" style={{ backgroundImage: `url('${product.image}')` }} onClick={() => navigate(`/product/${product._id}`)} />
                <div className="product-body">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="product-price-row">
                    <span className="product-price">₹ {Number(product.price).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
