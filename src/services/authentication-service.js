import apiClient from './apiclient';

const baseUrl = `/auth`;

export const login = async (credentials) => {
  const response = await apiClient.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post(`${baseUrl}/logout`);
  return response.data;
};

export const refreshToken = async () => {
  const response = await apiClient.post(`${baseUrl}/refresh`);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await apiClient.post(`${baseUrl}/register`, user);
  return response.data;
};

export const updateProfile = async (updatedProfile) => {
  console.log('Post ', updatedProfile);
  return await apiClient.post(`${baseUrl}/update`, updatedProfile);
};

export const updatePassword = async (password) => {
  return await apiClient.post(`${baseUrl}/update/password`, password);
};
