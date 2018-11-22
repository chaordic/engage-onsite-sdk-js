import axios from 'axios';
import config from './config.json';

const api = axios.create({
  baseURL: config.onsite.baseURL,
});

const { error } = console;

export const getPageRecommendations = async (params = {}) => {
  try {
    const response = await api.get('/pages/recommendations', {
      params,
    });

    return response.data;
  } catch (e) {
    error(e.message);
    return {};
  }
};
