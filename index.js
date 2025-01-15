const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

// Dinamik port (Railway veya lokal için)
const port = process.env.PORT || 3001;

// COW Listesi
const cows = [
  {
    id: 1,
    name: 'Holstein',
    age: 3,
    price: 160000,
    type: 'Dairy',
    latitude: 39.92077,
    longitude: 32.85411,
    sellerName: 'Ahmet Yılmaz',
    contactNumber: '05551234567',
    description: 'Bakımlı ve yüksek süt verimine sahip bir süt ineği.',
  },
  {
    id: 2,
    name: 'Jersey',
    age: 4,
    price: 100000,
    type: 'Dairy',
    latitude: 39.92123,
    longitude: 32.85654,
    sellerName: 'Mehmet Demir',
    contactNumber: '05551234568',
    description: 'Küçük yapılı ama kaliteli süt üretimiyle bilinen bir süt ineği.',
  },
];

// CORS ayarları
app.use(
  cors({
    origin: '*', // Her yerden erişime izin ver
  })
);

// JSON Middleware
app.use(express.json());

// /buy-cow rotası
app.get('/buy-cow', (req, res) => {
  res.json(cows);
});

// /buy-cow/:id rotası (inek detayları için)
app.get('/buy-cow/:id', (req, res) => {
  const cowId = parseInt(req.params.id);
  const cow = cows.find((c) => c.id === cowId);
  if (cow) {
    res.json(cow);
  } else {
    res.status(404).json({ error: 'İnek bulunamadı.' });
  }
});

// Örnek: Kendine İstek Atma (Kendi API'sine)
app.get('/self-check', async (req, res) => {
  try {
    // Kendine istek atan URL'yi oluştur
    const selfUrl = `http://localhost:${port}/buy-cow`;

    // Kendine bir istek atar ve inek listesini alır
    const response = await axios.get(selfUrl);

    res.json({
      message: 'Kendi API isteği başarılı!',
      data: response.data,
    });
  } catch (error) {
    console.error('Kendi isteğinde hata oluştu:', error.message);
    res.status(500).json({ error: 'Kendi isteği başarısız oldu.' });
  }
});

// Sunucu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
