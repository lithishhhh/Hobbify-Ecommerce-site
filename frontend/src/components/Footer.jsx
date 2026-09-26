import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link to="/" className="footer-brand-name">Hobbify</Link>
        <span>Find your hobby. Build your passion.</span>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/shop">Shop</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/about">About</Link>
        <Link to="/support">Support</Link>
      </nav>
      <span className="footer-copyright">© {new Date().getFullYear()} Hobbify</span>
    </footer>
  );
};

export default Footer;
