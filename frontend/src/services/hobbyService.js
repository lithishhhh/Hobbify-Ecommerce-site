import api from './api';

export const getHobbies = async (search = '') => {
  const response = await api.get('/hobbies', {
    params: search ? { search } : {},
  });
  return response.data;
};

export const getHobbyById = async (id) => {
  const response = await api.get(`/hobbies/${id}`);
  return response.data;
};
