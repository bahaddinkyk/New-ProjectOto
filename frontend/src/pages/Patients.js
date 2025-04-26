import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

const Patients = () => {
  // ... mevcut state ve fonksiyonlarınız AYNI KALACAK ...

  return (
    <div>
      {/* Arama Inputu (Değişmedi) */}
      <input
        type="text"
        placeholder={t('search_placeholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* YENİ MATERIAL-UI TABLO */}
      <h2>{t('patient_list')}</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="hasta tablosu">
          <TableHead>
            <TableRow>
              <TableCell><strong>{t('name')}</strong></TableCell>
              <TableCell><strong>{t('diagnosis')}</strong></TableCell>
              <TableCell><strong>{t('date')}</strong></TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow
                key={patient.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.diagnosis}</TableCell>
                <TableCell>
                  {new Date(patient.date).toLocaleDateString(i18n.language)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination (Değişmedi) */}
      <div className="pagination">
        {/* ... mevcut pagination kodunuz ... */}
      </div>
    </div>
  );
};

export default Patients;    