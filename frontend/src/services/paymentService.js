import api from './api';

export const createPaymentOrder = async (token, amount) => {
  const response = await api.post('/payments/create-order', { amount }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const verifyPayment = async (token, payload) => {
  const response = await api.post('/payments/verify', payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
