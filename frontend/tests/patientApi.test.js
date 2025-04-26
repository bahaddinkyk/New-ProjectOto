// tests/patientApi.test.js
import { getPatients } from '../services/api';

test('Hasta listesi başarıyla çekilmeli', async () => {
  const response = await getPatients();
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
});