import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from './AuthContext';
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from '../services/wishlistService';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshWishlist = async () => {
    if (!token || !user) {
      setWishlist([]);
      return;
    }

    setLoading(true);
    try {
      const data = await getWishlist(token);
      setWishlist(data.products || []);
    } catch (error) {
      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshWishlist();
  }, [token, user]);

  const toggleWishlist = async (productId) => {
    if (!token) {
      return { message: 'Login required' };
    }

    const isAlreadySaved = wishlist.some((id) => id?._id === productId || id === productId);

    if (isAlreadySaved) {
      const data = await removeFromWishlist(token, productId);
      setWishlist(data.products || []);
      return data;
    }

    const data = await addToWishlist(token, productId);
    setWishlist(data.products || []);
    return data;
  };

  const isFavourite = (productId) => {
    return wishlist.some((product) => {
      const currentId = typeof product === 'string' ? product : product?._id;
      return String(currentId) === String(productId);
    });
  };

  const value = useMemo(
    () => ({ wishlist, wishlistCount: wishlist.length, loading, toggleWishlist, isFavourite, refreshWishlist }),
    [wishlist, loading]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};
