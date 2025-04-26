// dotenv'i başta yükleyin
require('dotenv').config();  // .env dosyasındaki değişkenleri yükler

const mongoose = require('mongoose');

// MongoDB'ye bağlantıyı gerçekleştirecek fonksiyon
const connectDB = async () => {
    try {
        // MONGO_URI'nin doğru şekilde yüklendiğini kontrol edin
        console.log('Mongo URI:', process.env.MONGO_URI); // Debug amacıyla çıktıyı kontrol edin
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Bağlantısı Başarılı');
    } catch (err) {
        console.error('MongoDB Bağlantı Hatası:', err.message);
        process.exit(1);  // Bağlantı hatası durumunda uygulamayı kapat
    }
};

module.exports = connectDB;
