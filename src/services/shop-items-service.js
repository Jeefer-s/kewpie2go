import axios from 'axios';

const baseUrl = '/api/category';

export const getAllCategories = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
