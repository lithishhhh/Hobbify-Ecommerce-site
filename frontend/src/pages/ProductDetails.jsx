import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { getProductById } from '../services/productService';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isFavourite } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="empty-message">Loading product details...</div>;
  }

  if (!product) {
    return <div className="empty-message">Product unavailable.</div>;
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="product-details-page">
        <button className="back-link" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="product-detail-layout">
          <div className="product-detail-image" style={{ backgroundImage: `url('${product.image}')` }} />

          <div className="product-detail-info">
            <div className="product-detail-tag">{product.tag}</div>
            <h2>{product.name}</h2>
            <div className="product-rating">
              <span className="star">★</span>
              <span>
                {Number(product.rating || 0).toFixed(1)} ({product.reviews || 0} reviews)
              </span>
            </div>
            <p className="product-price">₹ {Number(product.price).toLocaleString('en-IN')}</p>
            <p className="product-detail-description">{product.description || 'Premium quality hobby product crafted for enthusiasts.'}</p>
            <div className="detail-meta-row">
              <span>Hobby: {product.hobby?.name || 'General'}</span>
              <span>Stock: {product.stock || 0}</span>
            </div>

            <div className="detail-actions">
              <button className="primary-btn" onClick={() => addToCart(product._id)}>
                Add to Cart
              </button>
              <button className="secondary-btn" onClick={() => toggleWishlist(product._id)}>
                {isFavourite(product._id) ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
