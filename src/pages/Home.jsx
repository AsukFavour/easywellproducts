import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pt1 from '../assets/Pictures/pt1.jpg';
import pt3 from '../assets/Pictures/pt3.jpg';
import bg from '../assets/Pictures/bg.png';
import ProductShowcase from '../components/ProductShowcase';
import Footer from '../components/Footer';



function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      {/* About Section */}
      <section
        className="relative bg-cover bg-center py-16 px-6"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <img src='https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479078/Easywell/knc25xct0vp5uoug6gvi.jpg' alt="About Us" className="rounded-lg shadow-lg" />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 md:pl-10 text-black"
          >
            <h2 className="text-3xl font-bold my-4">About Us</h2>
            <p className="mb-4">
              Welcome to Exclusive Brands! Your one-stop-shop for novelty food, beverage, and nutritional products. We are a proud Canadian-based consumer product distribution company that delivers unique products for every household. The company is involved in branding, packaging of consumer products for local distribution as well as for exports. Since 2011, the company has kept building consumer trust by offering a positive and consistent product experience.
            </p>
            <p className="mb-6">
              Easywell has consistently built on this trust with meaningful innovation and maintaining a perception of strong value.
            </p>
            <Link to="/about" className="bg-COSgreen text-white px-8 py-4 rounded-full shadow-md hover:bg-COSgreen hover:text-black transition">
              Read More
            </Link>
          </motion.div>
        </div>
      </section>

       {/* Our Brand Section */}
       <section
        className="relative bg-cover bg-center py-16 px-6 bg-green-100"
        
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <img src='https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479086/Easywell/cojj5nwrnmcugsb9hcoy.jpg' alt="Our Brand" className="rounded-lg shadow-lg" />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 md:pr-10 text-black"
          >
            <h2 className="text-3xl font-bold mb-4">Our Brand is Easy</h2>
            <p className="mb-4">
              Easywell constitutes a solid brand of processed food products. Using the best product research approaches, advanced production and distribution technologies, we are able to deliver products that are fulfilling. We focus on bringing to many households, organic products, as our focus is on products with good health benefits.
            </p>
            <p className="mb-4">
              You should find Easy Product Brands in the shelf of many retail stores across the world.
            </p>
          </motion.div>
        </div>
      </section>
      <ProductShowcase />
      {/* Newsletter Section */}
      <section className="bg-green-100 text-black py-12 px-6">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Subscribe to Our Newsletter</h2>
          <p className="text-black-400 mt-2">Stay updated with the latest news, offers, and promotions.</p>

          <form className="mt-6 flex flex-col md:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 lg:w-1/2 px-4 py-3 rounded-lg text-black bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-COSgreen hover:bg-green-900 px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
