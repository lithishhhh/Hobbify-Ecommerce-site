import api from './api';

export const getProducts = async (params = {}) => {
  const response = await api.get('/products', { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getProductsByHobby = async (hobbyId) => {
  const response = await api.get(`/products/hobby/${hobbyId}`);
  return response.data;
};

export const createProduct = async (product, token) => {
  const response = await api.post('/products', product, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
