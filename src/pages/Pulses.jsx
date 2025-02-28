import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const categories = [
  {
    title: "Spices",
    description:
      "Sourced from the best farms, our high-quality spices add exceptional flavor and aroma to your meals.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740747028/rs_w_388_h_194_cg_true_1_icsmtl.webp",
  },
  {
    title: "Chickpeas",
    description:
      "Our premium chickpeas are rich in protein and perfect for a variety of dishes, from hummus to curries.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740747028/rs_w_388_h_194_cg_true_2_u9mknf.webp",
  },
  {
    title: "Lentils",
    description:
      "Nutritious and versatile, our lentils come in various types, including red, green, and brown.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740747028/rs_w_388_h_194_cg_true_3_yxo1j2.webp",
  },
  {
    title: "Edible Beans",
    description:
      "We offer a variety of edible beans, such as black beans, kidney beans, and white beans, perfect for diverse cuisines.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740747028/rs_w_388_h_194_cg_true_bclhhy.webp",
  },
  {
    title: "Peas",
    description:
      "Our selection includes green peas, yellow peas, and dunn peas, sourced from the best farms.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740747079/rs_w_388_h_194_cg_true_5_sdqywk.webp",
  },
  {
    title: "Grains & Seeds",
    description:
      "We provide high-quality grains and specialty seeds, including durum wheat, sunflower seeds, and more.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740747028/rs_w_388_h_194_cg_true_4_migj0u.webp",
  },
];

const Pulses = () => {
  return (
    <>
    <Navbar/>
    <section className="py-16 px-6 bg-gray-100">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center "
      >
        <h2 className="text-3xl font-bold text-COSgreen mb-6">Pulses & Plant-Based Products</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Easywell Canada is a global supplier of high-quality, one hundred percent plant-based Pulses and other ingredients. 
          Our 10 years of experience in exporting commodities has given us an added advantage, especially in the logistics requirements of your export needs.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          We trade in a variety of plant-based food products and specialty pulses, including red lentils, green lentils, kabuli chickpeas, green peas, yellow peas, dunn peas, 
          maple peas, a variety of beans, durum, and specialty seeds.
        </p>
      </motion.div>

      {/* Product Categories Section */}
      <div className="max-w-6xl mx-auto mt-12 space-y-16">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row bg-green-100" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 px-6 ">
              <h3 className="text-xl font-semibold ">{item.title}</h3>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Pulses;
