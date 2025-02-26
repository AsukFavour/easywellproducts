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
    { name: 'Easywell Instant Oats', image: '/images/oat1.png' },
    { name: 'Easywell Rolled Oats', image: '/images/oat2.png' },
    { name: 'Easywell Steel-cut Oats', image: '/images/oat3.png' },
    { name: 'Easywell Quick Oats', image: '/images/oat4.png' },
    { name: 'Easywell Gluten-Free Oats', image: '/images/oat5.png' },
    { name: 'Easywell Organic Oats', image: '/images/oat6.png' }
  ],
  Sugars: [
    { name: 'Easywell White Sugar', image: '/images/sugar1.png' },
    { name: 'Easywell Brown Sugar', image: '/images/sugar2.png' },
    { name: 'Easywell Cane Sugar', image: '/images/sugar3.png' },
    { name: 'Easywell Powdered Sugar', image: '/images/sugar4.png' },
    { name: 'Easywell Coconut Sugar', image: '/images/sugar5.png' },
    { name: 'Easywell Organic Sugar', image: '/images/sugar6.png' }
  ],
  'Organic Products': [
    { name: 'Easywell Organic Honey', image: '/images/organic1.png' },
    { name: 'Easywell Organic Tea', image: '/images/organic2.png' },
    { name: 'Easywell Organic Spices', image: '/images/organic3.png' },
    { name: 'Easywell Organic Flour', image: '/images/organic4.png' },
    { name: 'Easywell Organic Nuts', image: '/images/organic5.png' },
    { name: 'Easywell Organic Seeds', image: '/images/organic6.png' }
  ],
  'Baby Foods': [
    { name: 'Easywell Baby Cereal', image: '/images/baby1.png' },
    { name: 'Easywell Baby Puree', image: '/images/baby2.png' },
    { name: 'Easywell Baby Formula', image: '/images/baby3.png' },
    { name: 'Easywell Baby Snacks', image: '/images/baby4.png' },
    { name: 'Easywell Baby Porridge', image: '/images/baby5.png' },
    { name: 'Easywell Baby Biscuits', image: '/images/baby6.png' }
  ],
  Milks: [
    { name: 'Easywell Whole Milk', image: '/images/milk1.png' },
    { name: 'Easywell Skim Milk', image: '/images/milk2.png' },
    { name: 'Easywell Almond Milk', image: '/images/milk3.png' },
    { name: 'Easywell Coconut Milk', image: '/images/milk4.png' },
    { name: 'Easywell Oat Milk', image: '/images/milk5.png' },
    { name: 'Easywell Soy Milk', image: '/images/milk6.png' }
  ],
  Confectionaries: [
    { name: 'Easywell Chocolate Bar', image: '/images/confect1.png' },
    { name: 'Easywell Cookies', image: '/images/confect2.png' },
    { name: 'Easywell Candy', image: '/images/confect3.png' },
    { name: 'Easywell Pastries', image: '/images/confect4.png' },
    { name: 'Easywell Gummies', image: '/images/confect5.png' },
    { name: 'Easywell Marshmallows', image: '/images/confect6.png' }
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
