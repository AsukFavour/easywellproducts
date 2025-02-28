import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <><Navbar/>
    <div className="bg-gray-100 ">
    <div className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center p-6" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479087/Easywell/h2qp4rlourlgant6cpln.jpg')" }}>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-bold drop-shadow-lg">
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Details */}
      <div className=" mx-auto  p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-green-100">
        <div className="flex flex-col items-center">
          <MapPin size={32} className="text-orange-500" />
          <h3 className="font-bold mt-2">Locations</h3>
          <p><b>Canada Facility:</b> 1247A Kamato Road, Mississauga, Ontario. L4W2M2.</p>
           <p><b>Canada Facility 2:</b>855 Matheson Blvd East, Unit 11Mississauga, Ontario, L4W6L4.</p>
          <p><b>USA Office:</b> 11111 Katy Fwy, Suite 910, Houston, TX.  77079.</p>
        </div>
        <div className="flex flex-col items-center">
          <Phone size={32} className="text-orange-500" />
          <h3 className="font-bold mt-2">Call</h3>
          <p>+1(289)-805-9448, 1-888-963-0030</p>
          <p>Fax: +1(905)-629-2628</p>
          <p>WhatsApp: +1(647)-656-9404</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail size={32} className="text-orange-500" />
          <h3 className="font-bold mt-2">Email</h3>
          <p>info@easywellproducts.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto mt-12 mb-8 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-center text-xl font-semibold mb-6">Get In Touch</h3>
        <form action="https://formsubmit.co/info@easywellproducts.com" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input type="text" name="name" placeholder="Name *" className="border p-3 rounded w-full" required />
  <input type="email" name="email" placeholder="Email *" className="border p-3 rounded w-full" required />
  <input type="tel" name="phone" placeholder="Phone Number" className="border p-3 rounded w-full" />
  <select name="subject" className="border p-3 rounded w-full">
     <option>Bulk Orders</option>
    <option>Enquiries</option>
    <option>Support</option>
    <option>Feedback</option>
  </select>
  <textarea name="message" placeholder="Message" className="border p-3 rounded w-full md:col-span-2" rows="4" required></textarea>
  <input type="hidden" name="_captcha" value="false" />
  <button type="submit" className="bg-COSgreen text-white p-3 rounded w-full md:col-span-2 hover:bg-green-700 transition">
    Submit
  </button>
</form>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
