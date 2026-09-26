import api from './api';

export const getCart = async (token) => {
  const response = await api.get('/cart', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addToCart = async (token, productId, quantity = 1) => {
  const response = await api.post(
    '/cart',
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const updateCartItem = async (token, productId, quantity) => {
  const response = await api.put(
    `/cart/${productId}`,
    { quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const removeCartItem = async (token, productId) => {
  const response = await api.delete(`/cart/${productId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
