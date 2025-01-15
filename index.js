const express = require('express');
const app = express();
const cors = require("cors"); // cors modülünü ekleyin

// Dinamik port ayarı (Railway veya herhangi bir platform için)
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
    description: 'Bakımlı ve yüksek süt verimine sahip bir süt ineği.' 
  },
  { 
    id: 2, 
    name: 'Jersey', 
    age: 4, 
    price: 1000000, 
    type: 'Dairy', 
    latitude: 39.92123, 
    longitude: 32.85654, 
    sellerName: 'Mehmet Demir', 
    contactNumber: '05551234568', 
    description: 'Küçük yapılı ama kaliteli süt üretimiyle bilinen bir süt ineği.' 
  },
  // Diğer inekler...
];

// CORS ayarları
const corsOptions = {
  origin: "*", // Her yerden erişime izin ver
};
app.use(cors(corsOptions)); // CORS middleware'ini kullan

// JSON desteği
app.use(express.json());

// /buy-cow rotası
app.get('/buy-cow', (req, res) => {
  res.json(cows);
});

// /buy-cow/:id rotası (inek detayları için)
app.get('/buy-cow/:id', (req, res) => {
  const cowId = parseInt(req.params.id); // URL'den gelen ID'yi al ve sayıya çevir
  const cow = cows.find((c) => c.id === cowId); // ID'ye göre ineği bul
  if (cow) {  
    res.json(cow); // İnek detaylarını döndür
  } else {
    res.status(404).json({ error: 'İnek bulunamadı.' }); // İnek bulunamazsa hata mesajı döndür
  }
});

// Sunucu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
