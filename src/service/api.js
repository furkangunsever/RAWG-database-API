import axios from 'axios';

const API_KEY = '164594ee00f344b5893f8dcf5779e013';
const BASE_URL = 'https://api.rawg.io/api/games';

export const fetchGames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
