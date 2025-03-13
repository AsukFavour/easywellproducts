import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-COSgreen bg-opacity-90 border-b-2 border-green-300 px-6 py-3 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dqfzpmiiw/image/upload/v1741213903/easywell_logo_zzegrt.png"
            alt="logo"
            className="w-24 h-auto"
          />
        </a>

        {/* Desktop Menu (Centered Links) */}
        <ul className="hidden lg:flex items-center space-x-8 text-white font-medium text-lg tracking-wide mx-auto">
          {[
            { name: "Home", path: "/" },
            { name: "Family of Brands", path: "/family-of-brands" },
            { name: "Products", path: "/products" },
            { name: "Bulk Order", path: "/bulk-order" },
            { name: "Pulses", path: "/pulses" },
            { name: "About", path: "/about" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="relative pt-4 mt-2 transition duration-300 hover:text-green-300"
              >
                {item.name}
                {/* Underline Effect */}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile & Tablet Menu Button */}
        <button
          className="lg:hidden flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">Menu</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-gray-900 shadow-lg rounded-lg lg:hidden transition-all duration-300">
          <ul className="p-4">
            {[
              { name: "Home", path: "/" },
              { name: "Family of Brands", path: "/family-of-brands" },
              { name: "Branches", path: "/branches" },
              { name: "About", path: "/about" },
              { name: "Contact Us", path: "/contact" }
            ].map((item) => (
              <li key={item.name} className="py-2">
                <Link
                  to={item.path}
                  className="block px-4 py-2 hover:bg-green-100 hover:text-green-600 rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Products Dropdown in Mobile & Tablet View */}
            <li className="py-2">
              <button
                className="w-full flex justify-between px-4 py-2 hover:bg-green-100 hover:text-green-600 rounded transition"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <ul className="mt-2 pl-4 space-y-1">
                  {[
                    { name: " Easywell Products", path: "/products" },
                    { name: "Pulses", path: "/pulses" },
                    { name: "Bulk Order", path: "/bulk-order" }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600 rounded transition"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
