import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Branches() {
    const branches = [
        { country: "Canada", address: "1247A Kamato Road Mississauga, Ontario, L4W2M2" },
        { country: "Canada", address: "855 Matheson Blvd East,Unit 11Mississauga, Ontario, L4W6L4" },
        { country: "USA", address: "11111 Katy Fwy, Suite 910, Houston, TX, 77079 USA" },
        { country: "South Africa" },
        { country: "Malaysia" },
        { country: "Ukraine" },
        { country: "Turkey" },
      ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6 bg-green-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Global Branches</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => (
          <div key={index} className="p-4 shadow-lg rounded-lg bg-white">
            <h3 className="text-xl font-semibold">{branch.country}</h3>
            <p className="text-gray-600">{branch.address}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center mb-4">Find Us on the Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096674!2d144.95565131531864!3d-37.81732397975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57760e3dd1a4d00!2sExample%20Branch!5e0!3m2!1sen!2sus!4v1641837597045!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Branches