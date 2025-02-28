import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const bulkOrders = [
  {
    title: "Tanker Load",
    description:
      "We supply high-quality edible oils in bulk tanker loads, ensuring a seamless and efficient supply chain for large-scale businesses.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479140/Easywell/tanker.png",
  },
  {
    title: "Totes Supply",
    description:
      "Our tote supply option provides a flexible bulk packaging solution, ideal for medium-scale businesses requiring efficient oil storage.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479144/Easywell/totes.png",
  },
  {
    title: "16L - JLB",
    description:
      "Perfect for businesses needing manageable bulk quantities, our 16L - JLB packaging offers convenience and quality in every container.",
    image:
      "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479146/Easywell/jlb.png",
  },
];

const BulkOrder = () => {
  return (
    <>
    <Navbar />
    <section className="py-16 px-6 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-COSgreen"
      >
        Bulk Order Options
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {bulkOrders.map((order, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={order.image}
              alt={order.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{order.title}</h3>
            <p className="mt-2 text-gray-600">{order.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12"
      >
        <Link
          to="/contact"
          className="bg-COSgreen text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
        >
          Contact Us for Inquiries
        </Link>
      </motion.div>
    </section>
    <Footer />
    </>
  );
};

export default BulkOrder;
