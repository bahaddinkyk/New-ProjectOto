import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const PatientForm = ({ onPatientAdded }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/patients', {
        name,
        diagnosis,
        date: new Date().toISOString()
      });
      onPatientAdded(response.data); // Listeyi güncelle
      setName(''); // Formu temizle
      setDiagnosis('');
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <input
        type="text"
        placeholder={t('name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={t('diagnosis')}
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        required
      />
      <button type="submit">{t('add_patient')}</button>
    </form>
  );
};
export default PatientForm;