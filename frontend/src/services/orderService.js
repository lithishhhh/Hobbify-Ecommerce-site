import api from './api';

export const createOrder = async (token, payload) => {
  const response = await api.post('/orders', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getOrders = async (token) => {
  const response = await api.get('/orders', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
