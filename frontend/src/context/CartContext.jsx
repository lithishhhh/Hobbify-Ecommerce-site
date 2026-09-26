import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { addToCart as addCartItem, getCart, removeCartItem, updateCartItem } from '../services/cartService';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshCart = async () => {
    if (!token || !user) {
      setCartItems([]);
      return;
    }

    setLoading(true);
    try {
      const data = await getCart(token);
      setCartItems(data.items || []);
    } catch (error) {
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCart();
  }, [token, user]);

  const addToCart = async (productId, quantity = 1) => {
    if (!token) {
      return { message: 'Login required' };
    }

    const data = await addCartItem(token, productId, quantity);
    setCartItems(data.items || []);
    return data;
  };

  const updateQuantity = async (productId, quantity) => {
    if (!token) return;
    const data = await updateCartItem(token, productId, quantity);
    setCartItems(data.items || []);
  };

  const removeItem = async (productId) => {
    if (!token) return;
    const data = await removeCartItem(token, productId);
    setCartItems(data.items || []);
  };

  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const subtotal = cartItems.reduce((total, item) => total + Number(item.product?.price || 0) * Number(item.quantity || 1), 0);

  const value = useMemo(
    () => ({ cartItems, cartCount, subtotal, loading, addToCart, removeItem, updateQuantity, refreshCart }),
    [cartItems, cartCount, subtotal, loading]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
