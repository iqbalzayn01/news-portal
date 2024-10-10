import axios from 'axios';
import config from '../config';

const API_KEY = config.api_key;
const BASE_URL = config.base_url;

export const getNews = async (query) => {
  if (!query) {
    return [];
  }

  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
        pageSize: 10,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
