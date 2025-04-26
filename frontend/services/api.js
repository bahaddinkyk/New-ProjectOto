// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_AUTH_KEY}`
  }
});

export const getPatients = () => api.get('/patients');
export const addTestResult = (data) => api.post('/tests', data);