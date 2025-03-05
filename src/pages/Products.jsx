import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = [
  'Oils', 'Oats', 'Sugars', 'Organic Products', 'Baby Foods', 'Milks', 'Confectionaries'
];

const products = {
  Oils: [
    { name: 'Easywell Sunflower Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479146/Easywell/tdgc8b2sqkalbwoyvwg8.png' },
    { name: 'Easywell Olive Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479144/Easywell/xbcpx3tyxbnyt5rwqonu.png' },
    { name: 'Easywell Canola Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479140/Easywell/hak6p1ahdpygssw5p1fh.png' },
    { name: 'Easywell Corn Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479139/Easywell/i13zbloadeybu6wtivha.png' },
    { name: 'Easywell Soybean Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479139/Easywell/zliacr8bgcrp0bydb9po.png' },
    { name: 'Easywell Palm Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479135/Easywell/fg2gpvwlz07rif7kbm1u.png' }
  ],
  Oats: [
    { name: 'Easywell Instant Oats', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Rolled Oats', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Steel-cut Oats', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Quick Oats', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Gluten-Free Oats', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Organic Oats', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' }
  ],
  Sugars: [
    { name: 'Easywell White Sugar', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Brown Sugar', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Cane Sugar', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
   
  ],
  'Organic Products': [
    { name: 'Easywell Organic Honey', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Organic Tea', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Organic Spices', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Organic Flour', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },

  ],
  'Baby Foods': [
    { name: 'Easywell Baby Cereal', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Baby Puree', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Baby Formula', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Baby Snacks', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },

  ],
  Milks: [
    { name: 'Easywell Whole Milk', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Skim Milk', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Almond Milk', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Coconut Milk', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },

  ],
  Confectionaries: [
    { name: 'Easywell Chocolate Bar', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Cookies', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Candy', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },
    { name: 'Easywell Pastries', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741217346/Item_coming_soon_pgyqe1.png' },

  ]
};

function Products() {
  const [activeCategory, setActiveCategory] = useState('Oils');

  return (
    <>
    <Navbar />
    {/* Hero Section */}
    <div className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center p-6" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479087/Easywell/h2qp4rlourlgant6cpln.jpg')" }}>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-bold drop-shadow-lg">
          Our Products
        </motion.h1>
      </div>

    <section className="py-16 px-6 text-center">
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${
              activeCategory === category ? 'bg-COSgreen text-white' : 'bg-green-200 hover:bg-green-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {products[activeCategory]?.map((product, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg text-center hover:bg-green-100 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
              View Product
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
    <Footer />
    </>
  );
}

export default Products;
