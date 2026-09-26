import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import SearchBar from './SearchBar';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support' },
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  return (
    <header className="topbar">
      <Link to="/" className="brand-wrap" aria-label="Hobbify home">
        <div className="brand-mark" aria-label="Hobbify logo">
          <span className="brand-mark-inner" />
        </div>
        <div className="brand-copy">
          <div className="brand-name">Hobbify</div>
          <div className="brand-tag">Find your hobby. Build your passion.</div>
        </div>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-tools">
        <SearchBar />

        <button className="icon-btn" aria-label="Account" onClick={() => navigate(user ? '/account' : '/login')}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H5z" />
          </svg>
        </button>

        <button className="icon-btn" aria-label="Wishlist" onClick={() => navigate('/wishlist')}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 016.5 4c1.74 0 3.41.81 4.5 2.09A6.12 6.12 0 0115.5 4 4.5 4.5 0 0120 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35z" />
          </svg>
          {wishlistCount > 0 && <span className="mini-count">{wishlistCount}</span>}
        </button>

        <button className="cart-btn" aria-label="Cart" onClick={() => navigate('/cart')}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 18a2 2 0 110 4 2 2 0 010-4zm10 0a2 2 0 110 4 2 2 0 010-4zM6.2 6h14.04l-1.38 7.36A2 2 0 0116.9 15H9.23a2 2 0 01-1.96-1.58L5.2 3H2V1h4.1l.66 3.1H20v2H6.2zm2.4 8h8.2l.88-4.8H8.5l.1 4.8z" />
          </svg>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>

        {user && (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
