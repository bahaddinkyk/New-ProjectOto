const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Yeni kullanıcı oluşturma
router.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password,
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Tüm kullanıcıları listeleme
router.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Tüm kullanıcıları MongoDB'den al
        res.status(200).json(users); // Kullanıcıları JSON olarak döndür
    } catch (error) {
        res.status(500).json({ message: error.message }); // Hata durumunda 500 döndür
    }
});

// Belirli bir kullanıcıyı alma (ID ile)
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // ID ile kullanıcıyı bul
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' }); // Kullanıcı yoksa 404 döndür
        }
        res.status(200).json(user); // Kullanıcıyı JSON olarak döndür
    } catch (error) {
        res.status(500).json({ message: error.message }); // Hata durumunda 500 döndür
    }
});

// Kullanıcı bilgilerini güncelleme (ID ile)
router.put('/users/:id', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, password }, // Güncellenecek alanlar
            { new: true } // Güncellenmiş kullanıcıyı döndür
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' }); // Kullanıcı yoksa 404 döndür
        }

        res.status(200).json(updatedUser); // Güncellenmiş kullanıcıyı döndür
    } catch (error) {
        res.status(500).json({ message: error.message }); // Hata durumunda 500 döndür
    }
});

// Kullanıcı silme (ID ile)
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id); // ID ile kullanıcıyı sil
        if (!deletedUser) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' }); // Kullanıcı yoksa 404 döndür
        }

        res.status(200).json({ message: 'Kullanıcı başarıyla silindi' }); // Başarılı silme mesajı döndür
    } catch (error) {
        res.status(500).json({ message: error.message }); // Hata durumunda 500 döndür
    }
});

module.exports = router;
