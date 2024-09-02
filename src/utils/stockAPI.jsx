import axios from 'axios';

const API_URL = 'https://api.example.com/stocks'; // Replace with the actual API endpoint

export const fetchStockData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};