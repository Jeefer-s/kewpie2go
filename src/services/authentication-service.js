import axios from 'axios';

const baseUrl = `/auth`;

export const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};
