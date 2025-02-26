import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const jobCategories = ['Engineering', 'Marketing', 'Sales', 'Customer Support'];
const jobs = {
  Engineering: [
    { title: 'Frontend Developer', location: 'Remote', type: 'Full-time' },
    { title: 'Backend Developer', location: 'USA', type: 'Full-time' },
  ],
  Marketing: [
    { title: 'Social Media Manager', location: 'Canada', type: 'Part-time' },
  ],
  Sales: [
    { title: 'Sales Executive', location: 'South Africa', type: 'Full-time' },
  ],
  'Customer Support': [
    { title: 'Support Specialist', location: 'Malaysia', type: 'Remote' },
  ],
};

const Careers = () => {
  const [activeCategory, setActiveCategory] = useState('Engineering');

  return (
    <>
    <Navbar />
    <div className="py-16 px-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-COSgreen">Join Easywell</h1>
        <p className="mt-2 text-gray-600 text-lg">Build your career with us and make an impact!</p>
      </motion.div>

      {/* Job Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {jobCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category ? 'bg-COSgreen text-white' : 'bg-green-200'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {jobs[activeCategory]?.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-500">{job.location} - {job.type}</p>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
              Apply Now
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Join Us */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Why Work at Easywell?</h2>
        <p className="text-gray-600 mt-2">We offer a great work environment, growth opportunities, and amazing benefits.</p>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default Careers;
