import axios from 'axios';

const baseUrl = `/auth`;

export const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${baseUrl}/logout`);
  return response.data;
};
