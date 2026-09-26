import api from './api';

export const submitUserQuery = async (query) => {
  const response = await api.post('/userqueries', query);
  return response.data;
};
