import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const programs = [
  {
    title: "Community Exercise",
    description: "Encouraging a healthier lifestyle with group workouts and fitness sessions.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750887/pexels-rui-dias-469842-1472887_akvmyg.jpg",
  },
  {
    title: "Health Education",
    description: "Providing valuable health tips and medical guidance to improve well-being.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750888/pexels-thirdman-7659880_j09dou.jpg",
  },
  {
    title: "Scholarship Programs",
    description: "Empowering students with scholarships to support their education.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750885/pexels-yankrukov-8199602_lfazgu.jpg",
  },
  {
    title: "Food Bank Program",
    description: "Helping families in need with food assistance and support.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750877/pexels-cottonbro-6591154_bv8bvv.jpg",
  },
  {
    title: "Share the Big News",
    description: "Celebrating important community achievements and milestones.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750875/pexels-busranur-aydin-3800407-14091139_q4qswy.jpg",
  },
  {
    title: "Mentors",
    description: "Connecting experienced professionals with young individuals for guidance.",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750878/pexels-zhuhehuai-716276_ltun8q.jpg",
  },
];

const events = [
  {
    title: "Annual Health Fair",
    date: "March 15, 2025",
    location: "Toronto, Canada",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750874/pexels-mehmet-balci-166052147-30367056_lejbvv.jpg",
  },
  {
    title: "Scholarship Award Night",
    date: "June 10, 2025",
    location: "New York, USA",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750874/pexels-rdne-7713189_xoz3rx.jpg",
  },
  {
    title: "Food Bank Drive",
    date: "August 25, 2025",
    location: "Cape Town, South Africa",
    image: "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750874/pexels-rdne-6647121_h5b3ab.jpg",
  },
];

const gallery = [
  "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750890/pexels-magapls-2149937712-30865266_lgjntq.jpg",
  "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750886/pexels-max-fischer-5212695_yy6wvb.jpg",
  "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750878/pexels-zhuhehuai-716276_ltun8q.jpg",
  "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740750877/pexels-cottonbro-6591154_bv8bvv.jpg",
];

const CommunitySupport = () => {
  return (
    <>
    <Navbar />
    <section className="pb-16  bg-gray-100">
      {/* Header */}
      <div className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center p-6" 
              style={{ backgroundImage: "url('https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479087/Easywell/h2qp4rlourlgant6cpln.jpg')" }}>
              <motion.h1 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                className="text-5xl font-bold drop-shadow-lg">
                Community Support Programs
              </motion.h1>
            </div>

       {/* Programs Section */}
       <div className="max-w-6xl mx-auto space-y-16 mt-10">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 px-6">
              <h3 className="text-xl font-semibold text-COSgreen">{program.title}</h3>
              <p className="mt-4 text-gray-600">{program.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Events Section */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-COSgreen mt-16 mb-10"
      >
        Upcoming Events
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="mt-2 text-gray-600">{event.date} - {event.location}</p>
          </motion.div>
        ))}
      </div>

      {/* Gallery Section */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-COSgreen mt-16 mb-10"
      >
        Community Gallery
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {gallery.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-40 object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default CommunitySupport;
