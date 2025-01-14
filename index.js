const express = require('express');
const app = express();
const cors = require("cors"); // cors modülünü ekleyin
const port = 3000;

const API = process.env.REACT_APP_API;

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
  { 
    id: 3, 
    name: 'Angus', 
    age: 2, 
    price: 155000, 
    type: 'Beef', 
    latitude: 39.92234, 
    longitude: 32.85876, 
    sellerName: 'Fatma Kaya', 
    contactNumber: '05551234569', 
    description: 'Hızlı kilo alma ve kaliteli et üretimi için ideal bir besi hayvanı.' 
  },
  { 
    id: 4, 
    name: 'Guernsey', 
    age: 5, 
    price: 135000, 
    type: 'Dairy', 
    latitude: 39.92345, 
    longitude: 32.86012, 
    sellerName: 'Hüseyin Çelik', 
    contactNumber: '05551234570', 
    description: 'Orta düzeyde süt üretimiyle dengeli bir süt ineği.' 
  },
  { 
    id: 5, 
    name: 'Hereford', 
    age: 3, 
    price: 150000, 
    type: 'Beef', 
    latitude: 39.92456, 
    longitude: 32.86245, 
    sellerName: 'Zeynep Kara', 
    contactNumber: '05551234571', 
    description: 'Dayanıklı ve yüksek kaliteli et üretimiyle bilinen bir besi hayvanı.' 
  },
  { 
    id: 6, 
    name: 'Charolais', 
    age: 6, 
    price: 145000, 
    type: 'Beef', 
    latitude: 39.92567, 
    longitude: 32.86478, 
    sellerName: 'Ali Güneş', 
    contactNumber: '05551234572', 
    description: 'Besiye uygun, hızlı büyüme ve kaliteli et için tercih edilen bir tür.' 
  },
  { 
    id: 7, 
    name: 'Simmental', 
    age: 4, 
    price: 120000, 
    type: 'Dairy', 
    latitude: 39.92678, 
    longitude: 32.86789, 
    sellerName: 'Ayşe Şahin', 
    contactNumber: '05551234573', 
    description: 'Hem süt hem de et üretiminde çift amaçlı kullanılabilen bir hayvan.' 
  },
  { 
    id: 8, 
    name: 'Brahman', 
    age: 7, 
    price: 136000, 
    type: 'Beef', 
    latitude: 39.92789, 
    longitude: 32.86990, 
    sellerName: 'Osman Koç', 
    contactNumber: '05551234574', 
    description: 'Sıcak iklimlere dayanıklı, besi hayvanı olarak ideal bir seçenek.' 
  },
  { 
    id: 9, 
    name: 'Brown Swiss', 
    age: 5, 
    price: 115000, 
    type: 'Dairy', 
    latitude: 39.92890, 
    longitude: 32.87112, 
    sellerName: 'Elif Yıldız', 
    contactNumber: '05551234575', 
    description: 'Orta süt verimi ve dayanıklılığı ile bilinen bir süt ineği.' 
  },
  { 
    id: 10, 
    name: 'Limousin', 
    age: 4, 
    price: 1580000, 
    type: 'Beef', 
    latitude: 39.92912, 
    longitude: 32.87345, 
    sellerName: 'Veli Demir', 
    contactNumber: '05551234576', 
    description: 'Kas yapısı güçlü, yüksek et kalitesi sunan bir besi hayvanı.' 
  },
];

// CORS ayarları
const corsOptions = {
  origin: `${API}`, // Sadece frontend adresine izin ver
};
app.use(cors(corsOptions)); // CORS middleware'ini kullan

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
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
