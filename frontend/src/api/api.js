// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001' // JSON Server URL
});

export const getPatients = () => api.get('/patients');
export const createPatient = (patientData) => api.post('/patients', patientData);