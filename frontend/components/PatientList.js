// components/PatientList.js
import React from 'react';

const PatientList = ({ patients }) => {
  return (
    <div className="patient-table">
      <table>
        <thead>
          <tr>
            <th>Hasta ID</th>
            <th>Adı</th>
            <th>Test Sonucu</th>
            <th>Tarih</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.testResult}</td>
              <td>{new Date(patient.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;