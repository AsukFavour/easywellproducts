import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center p-6" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479087/Easywell/h2qp4rlourlgant6cpln.jpg')" }}>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-bold drop-shadow-lg">
          About Us
        </motion.h1>
      </div>
      
      {/* Sections */}
      <div className="container-fluid max-w-6xl mx-auto p-8">
        {/* Value Proposition */}
        <motion.div className="flex flex-col md:flex-row items-center my-12 gap-8" 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}>
          <img src="https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479078/Easywell/knc25xct0vp5uoug6gvi.jpg" width={500} height={300} alt="Our Values" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-semibold">Our Value Proposition</h2>
           <p className="mt-4 text-lg">
                At Easywell, we understand that great food starts with the
                highest quality ingredients. That's why we provide food makers
                with premium cooking oils that enhance flavor, optimize cooking
                performance, and support healthy culinary practices.
              </p>
              <p>
                Our carefully sourced oils ensure consistency and quality in
                every dish, allowing chefs and home cooks alike to elevate their
                creations effortlessly.{" "}
              </p>
          </div>
        </motion.div>

        {/* Our Brand is Easy */}
        <motion.div className="flex flex-col md:flex-row-reverse items-center my-12 gap-8" 
          initial={{ opacity: 0, x: 100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}>
          <img src="https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479086/Easywell/cojj5nwrnmcugsb9hcoy.jpg" width={500} height={300} alt="Our Brand" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-semibold">Our Brand is Easy</h2>
            <p className="mt-4 text-lg">
                Easywell constitutes a solid brand of processed food products.
                Using the best product research approaches, advanced production
                and distribution technologies, we are able to deliver products
                that are fulfilling. 
              </p>
              <p>We focus on bringing to many households,
                organic products, as our focus is on products with good health
                benefits. You should find Easy Product Brands in the shelf of
                many retail stores across the world.</p>
          </div>
        </motion.div>

        {/* Our Vision */}
        <motion.div className="text-center my-12 bg-green-100 w-full" 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}>
          <h2 className="text-3xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-lg italic">
              "Our vision is to produce, package and deliver high quality, healthy and energetic food and beverage products to many households across the world."
            </p>
        </motion.div>

        {/* For Exports */}
        <motion.div className="flex flex-col md:flex-row items-center my-12 gap-8" 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}>
           <img
              src="https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740500091/pexels-tima-miroshnichenko-6169056_zgriey.jpg"
              width={500}
              height={300}
              alt="Our Brand"
              className="rounded-lg shadow-lg"
            />
          <div>
            <h2 className="text-3xl font-semibold">For Exports</h2>
            <p className="mt-4 text-lg">Our products are truly Canadian made, and distributed locally and exported to many countries  including, UK, Germany, South Africa, Ghana, Nigeria, Zambia, Jamaica, Uruguay, Cameroun, Ethiopia, and many more countries.</p>

            <h2 className="text-3xl font-semibold">Bulk Orders</h2>
            <p className="mt-4 text-lg"> Easywell Inc provides bulk order services on requests. depending on clients specifications. We deliver to the location of your choice.</p>
            <a href="/bulkorders" className="text-COSgreen"> Link to view our options</a>
          </div>
        </motion.div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default AboutUs;
