import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import FamilyOfBrands from "../src/pages/Brand";
import About from "../src/pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Branches from "./pages/Branches";
import Careers from "./pages/Careers";
import Products from "./pages/Products";
import BulkOrder from "./pages/BulkOrder";
import CommunitySupport from "./pages/CommunitySupport";
import Pulses from "./pages/Pulses";



function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/family-of-brands" element={<FamilyOfBrands />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/branches" element={<Branches />} />
           <Route path="/career" element={<Careers />} />
           <Route path="/products" element={<Products />} />
           <Route path="/bulk-order" element={<BulkOrder />} />
           <Route path="/community-support" element={<CommunitySupport />} />
          <Route path="/pulses" element={<Pulses />} />
        
      
         
      </Routes>
    </Router>
  );
}

export default App;
