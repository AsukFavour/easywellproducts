import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pt4 from "../assets/Pictures/pt5.jpg";

const products = [
    {
        name: "Easywell Oil",
        description: "A nutritious and quick breakfast option, rich in fiber and essential nutrients.",
        image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479137/Easywell/bnzpus9e16mdfus1qhnx.png", 
      },
  {
    name: "Easywell QUICK COOKING OATS",
    description: "A nutritious and quick breakfast option, rich in fiber and essential nutrients.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740508043/pexels-jeshoots-216951_qvaus0.jpg", // Replace with actual image path
  },
  {
    name: "Easywell Sugar",
    description: "Pure and refined sugar perfect for all your cooking and baking needs.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740507745/pexels-rdne-8580752_ka71se.jpg",
  },
  {
    name: "Easywell Baby Food",
    description: "Specially formulated baby food to support healthy growth and development.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740507744/pexels-binyaminmellish-108291_iodxjw.jpg",
  },
  {
    name: "Easywell Confectionaries",
    description: "Delicious baked goods, chocolates, and treats to satisfy your sweet tooth.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740507745/pexels-cup-of-couple-8015146_xnyz3v.jpg",
  },
  {
    name: "Easywell Organic Products",
    description: "Fresh, natural, and organic products for a healthier lifestyle.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740507745/pexels-alejandro-barron-21404-96769_c692ch.jpg",
  },
  {
    name: "Easywell Powdered Milk",
    description: "High-quality milk powder, ideal for tea, coffee, and baking.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740507744/pexels-towfiqu-barbhuiya-3440682-11501481_pmvtbm.jpg",
  },
  {
    name: "Easywell Tomato Paste",
    description: "Rich and thick tomato paste made from the finest tomatoes.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740507745/pexels-mlkbnl-19702503_iehxj6.jpg",
  },
];

const Brand = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Dark Overlay */}
      <div className="relative h-72 flex items-center justify-center text-white ">
        <div 
          className="absolute inset-0 bg-black bg-opacity-60 " // Dark overlay
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479098/Easywell/kn9pthuaddegsx3n9aux.jpg)` }} 
        ></div>
        <h1 className="relative text-4xl font-bold z-10">Family of Brands</h1>
      </div>

      {/* Products Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={product.image} alt={product.name} className="mx-auto h-40" />
              <h3 className="text-xl font-semibold mt-4 text-COSgreen">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Brand;
