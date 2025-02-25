import React, { useState } from 'react';
import p1 from '../assets/Product/1.png';
import p2 from '../assets/Product/2.png';
import p3 from '../assets/Product/3.png';
import p4 from '../assets/Product/4.png';
import p5 from '../assets/Product/5.png';

const categories = [
  'Oils', 'Oats', 'BabyFoods', 'Milk', 'Sugar', 'TomatoPaste'
];

const products = {
  Oils: [
    { name: 'Easywell Oil', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479146/Easywell/tdgc8b2sqkalbwoyvwg8.png' },
    { name: 'Easywell ', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479144/Easywell/xbcpx3tyxbnyt5rwqonu.png' },
    { name: 'Easywell', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479140/Easywell/hak6p1ahdpygssw5p1fh.png' },
    { name: 'Easywell', image: 'https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479139/Easywell/i13zbloadeybu6wtivha.png' }
  ],

  Oats: [
    { name: 'Easywell Oil', image: p5 },
    { name: 'Easywell ', image: '/images/spaghettini.png' },
    { name: 'Easywell', image: '/images/twist.png' },
    { name: 'Easywell', image: '/images/macaroni.png' }
  ],

  BabyFoods: [
    { name: 'Easywell Oil', image: '/images/spaghetti.png' },
    { name: 'Easywell ', image: '/images/spaghettini.png' },
    { name: 'Easywell', image: '/images/twist.png' },
    { name: 'Easywell', image: '/images/macaroni.png' }
  ],
  Milk: [
    { name: 'Easywell Oil', image: '/images/spaghetti.png' },
    { name: 'Easywell ', image: '/images/spaghettini.png' },
    { name: 'Easywell', image: '/images/twist.png' },
    { name: 'Easywell', image: '/images/macaroni.png' }
  ],
  Sugar: [
    { name: 'Easywell Oil', image: '/images/spaghetti.png' },
    { name: 'Easywell ', image: '/images/spaghettini.png' },
    { name: 'Easywell', image: '/images/twist.png' },
    { name: 'Easywell', image: '/images/macaroni.png' }
  ],

  TomatoPaste: [
    { name: 'Easywell Oil', image: '/images/spaghetti.png' },
    { name: 'Easywell ', image: '/images/spaghettini.png' },
    { name: 'Easywell', image: '/images/twist.png' },
    { name: 'Easywell', image: '/images/macaroni.png' }
  ],
  // Add products for other categories here
};

function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('Oils');

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Brands</h2>
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm sm:text-base rounded-full transition-all ${
              activeCategory === category ? 'bg-COSgreen text-white' : 'bg-green-200 hover:bg-green-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products[activeCategory]?.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
              View Product
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
