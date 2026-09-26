import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Hobbies from './pages/Hobbies';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Support from './pages/Support';
import Wishlist from './pages/Wishlist';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<Account />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default App;
