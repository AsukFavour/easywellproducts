import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-COSgreen bg-opacity-80 p-4 flex items-center justify-between relative ">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741213903/easywell_logo_zzegrt.png" 
            alt="logo" 
            className="w-28 h-auto" // Adjusted size (width: 7rem)
          />
        </a>
      </div>

      {/* Menu Button with Pill Shape */}
      <button 
        className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-md" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">Menu</span>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-4 bg-white text-gray-900 shadow-md rounded-lg p-4 w-48 z-20">
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "Family of Brands", path: "/family-of-brands" },
              { name: "Pulses", path: "/pulses" },
              { name: "Products", path: "/products" },
              { name: "Branches", path: "/branches" },
              { name: "About", path: "/about" },
              { name: "Bulk Order", path: "/bulk-order" },
              { name: "Contact Us", path: "/contact" }
            ].map((item) => (
              <li key={item.name} className="py-2">
                <Link
                  to={item.path}
                  className="block px-4 py-2 hover:bg-COSgreen hover:text-white rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
