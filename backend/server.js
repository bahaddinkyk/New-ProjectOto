const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost:27017/medical-app');

const PatientSchema = new mongoose.Schema({
  name: String,
  diagnosis: String,
  date: Date
});

const Patient = mongoose.model('Patient', PatientSchema);

app.use(cors());
app.use(express.json());

// Hasta Listesi
app.get('/patients', async (req, res) => {
  const patients = await Patient.find().sort({ date: -1 });
  res.json(patients);
});

// Yeni Hasta Ekleme
app.post('/patients', async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.status(201).json(newPatient);
});

app.listen(3001, () => console.log('Backend çalışıyor!'));