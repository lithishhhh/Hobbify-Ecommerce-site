import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isFavourite } = useWishlist();

  return (
    <article className="product-card">
      <div className="product-card-image" style={{ backgroundImage: `url('${product.image}')` }} onClick={() => navigate(`/product/${product._id}`)}>
        <span className={`product-tag ${product.tag === 'New' || product.tag === 'Fresh' ? 'new' : ''}`}>
          {product.tag}
        </span>
      </div>
      <div className="product-body">
        <div className="product-meta">
          <h4 className="product-name">{product.name}</h4>
        </div>
        <div className="product-rating">
          <span className="star">★</span>
          <span>
            {Number(product.rating || 0).toFixed(1)} ({product.reviews || 0})
          </span>
        </div>
        <div className="product-price-row">
          <span className="product-price">₹ {Number(product.price).toLocaleString('en-IN')}</span>
          <div className="product-actions">
            <button aria-label="Add to wishlist" onClick={() => toggleWishlist(product._id)}>
              {isFavourite(product._id) ? '♥' : '♡'}
            </button>
            <button aria-label="Add to cart" onClick={() => addToCart(product._id)}>
              🛒
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
