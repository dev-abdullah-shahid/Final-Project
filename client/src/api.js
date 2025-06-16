// client/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust the URL if necessary

export const signup = async (userData) => {
    return await axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData) => {
    return await axios.post(`${API_URL}/login`, userData);
};