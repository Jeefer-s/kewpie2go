import apiClient from './apiclient';

const baseUrl = '/api/category';

export const getAllCategories = () => {
  const request = apiClient.get(baseUrl);
  return request.then((response) => response.data);
};
