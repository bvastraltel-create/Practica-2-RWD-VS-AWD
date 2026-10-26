const express = require('express');
const useragent = require('express-useragent');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuracion
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(useragent.express());

// Productos
const products = [
  {
    id: 1,
    name: "NVIDIA GeForce RTX 4090",
    specs: { vram: "24 GB GDDR6X", bus: "384-bit", cuda: "16384 Cores", tdp: "450W" },
    price: "$1,599 USD",
    image: "/images/rtx4090"
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 4080 Super",
    specs: { vram: "16 GB GDDR6X", bus: "256-bit", cuda: "10240 Cores", tdp: "320W" },
    price: "$999 USD",
    image: "/images/rtx4080S"
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 4070 Ti Super",
    specs: { vram: "16 GB GDDR6X", bus: "256-bit", cuda: "8448 Cores", tdp: "285W" },
    price: "$799 USD",
    image: "/images/rtx4070tis"
  },
  {
    id: 4,
    name: "NVIDIA GeForce RTX 4070 Super",
    specs: { vram: "12 GB GDDR6X", bus: "192-bit", cuda: "7168 Cores", tdp: "220W" },
    price: "$599 USD",
    image: "/images/rtx4070s"
  },
  {
    id: 5,
    name: "NVIDIA GeForce RTX 4070",
    specs: { vram: "12 GB GDDR6X", bus: "192-bit", cuda: "5888 Cores", tdp: "200W" },
    price: "$549 USD",
    image: "/images/rtx4070"
  },
  {
    id: 6,
    name: "NVIDIA GeForce RTX 4060 Ti 16GB",
    specs: { vram: "16 GB GDDR6", bus: "128-bit", cuda: "4352 Cores", tdp: "165W" },
    price: "$449 USD",
    image: "/images/rtx4060ti16"
  },
  {
    id: 7,
    name: "NVIDIA GeForce RTX 4060 Ti 8GB",
    specs: { vram: "8 GB GDDR6", bus: "128-bit", cuda: "4352 Cores", tdp: "160W" },
    price: "$399 USD",
    image: "/images/rtx4060ti8"
  },
  {
    id: 8,
    name: "NVIDIA GeForce RTX 4060",
    specs: { vram: "8 GB GDDR6", bus: "128-bit", cuda: "3072 Cores", tdp: "115W" },
    price: "$299 USD",
    image: "/images/rtx4060"
  },
  {
    id: 9,
    name: "NVIDIA GeForce RTX 3090 Ti",
    specs: { vram: "24 GB GDDR6X", bus: "384-bit", cuda: "10752 Cores", tdp: "450W" },
    price: "$1,099 USD",
    image: "/images/rtx3090ti"
  },
  {
    id: 10,
    name: "NVIDIA GeForce RTX 3080 Ti",
    specs: { vram: "12 GB GDDR6X", bus: "384-bit", cuda: "10240 Cores", tdp: "350W" },
    price: "$899 USD",
    image: "/images/rtx3080ti"
  },
  {
    id: 11,
    name: "NVIDIA GeForce RTX 3070 Ti",
    specs: { vram: "8 GB GDDR6X", bus: "256-bit", cuda: "6144 Cores", tdp: "290W" },
    price: "$599 USD",
    image: "/images/rtx3070ti"
  },
  {
    id: 12,
    name: "NVIDIA GeForce RTX 3060 Ti",
    specs: { vram: "8 GB GDDR6", bus: "256-bit", cuda: "4864 Cores", tdp: "200W" },
    price: "$349 USD",
    image: "/images/rtx3060ti"
  }
];

// Responsive Web Design (RWD)
// El mismo codigo para todos los usuarios
app.get('/responsive', (req, res) => {
  res.render('responsive', { products });
});

// Adaptive Web Design (AWD)
// El codigo se entrega dependiendo el usuario
app.get('/adaptive', (req, res) => {
  const isMobile = req.useragent.isMobile || req.useragent.isPhone;

  if (isMobile) {
    // Telefonos
    res.render('adaptive-mobile', { products });
  } else {
    // Escritorio
    res.render('adaptive-desktop', { products });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`- RWD: http://localhost:${PORT}/responsive`);
  console.log(`- AWD: http://localhost:${PORT}/adaptive`);
});