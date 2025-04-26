const mongoose = require('mongoose');

// MongoDB bağlantısı için fonksiyon
const connectDB = async () => {
  try {
    // .env dosyasındaki MONGO_URI'yi al
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB'ye bağlanıldı: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB Bağlantı Hatası:', error.message);
    process.exit(1); // Bağlantı hatasında uygulamayı sonlandır
  }
};

module.exports = connectDB;
