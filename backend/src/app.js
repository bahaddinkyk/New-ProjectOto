const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Veritabanı bağlantısını başlatacak fonksiyon
const userRoutes = require('./routes/userRoutes'); // Kullanıcılar için route

dotenv.config(); // .env dosyasındaki ortam değişkenlerini yükler

// MongoDB bağlantısını başlat
connectDB();

const app = express();

// Middleware
app.use(express.json()); // JSON verisi alabilmek için middleware

// API rotaları
app.use('/api/users', userRoutes); // Kullanıcı rotalarını "/api/users" ile bağla

// Ana rota
app.get('/', (req, res) => {
    res.send('API Çalışıyor!');
});

// 404 Hatası için Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: 'Rota bulunamadı!' });
});

// Hata yakalama için genel Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Sunucuda bir hata oluştu!' });
});

// Sunucu başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
