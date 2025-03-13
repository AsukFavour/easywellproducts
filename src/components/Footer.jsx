import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Disclaimer Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Disclaimer</h3>
              <p className="text-sm opacity-75">
                Do not honor any request for payment to any personal account. Contact us if you suspect any fraudulent activity or intention.
              </p>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Reach Us</h3>
              <p className="text-sm">International: +1-(289)-805-9448</p>
              <p className="text-sm">USA/CANADA(Toll free) :1-888-963-0030 </p>
              <p className="text-sm">FAX: +1(905)-606-0911 </p>
            </div>
  
            {/* Email Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-COSgreen">
              info@easywellproducts.com
              </p>
            </div>
  
            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="space-y-1">
                <li><Link  to={"/"} className="text-sm hover:text-COSgreen">Home </Link></li>
                <li><Link  to={"/bulk-order"} className="text-sm hover:text-COSgreen">Bulk Orders</Link></li>
                <li><Link  to={"/family-of-brands"} className="text-sm hover:text-COSgreen">Family of Brand</Link></li>
                <li><Link  to={"/contact"} className="text-sm hover:text-COSgreen">Contact Us</Link></li>
                <li><Link  to={"/career"} className="text-sm hover:text-COSgreen">Careers</Link></li>
                <li><Link  to={"/community-support"} className="text-sm hover:text-COSgreen">Community Support</Link></li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm opacity-75">
          Copyright © 2025 Easywell Consumer Products Inc. - All Rights Reserved. | 
            <a href="#" className="hover:text-COSgreen"> Privacy Policy</a> | 
            <a href="#" className="hover:text-COSgreen"> Cookies Policy</a> | 
            <a href="#" className="hover:text-COSgreen"> Events Terms & Conditions</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  