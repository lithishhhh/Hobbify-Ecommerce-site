import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://hobbify-ecommerce-site-2.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

export default api;
