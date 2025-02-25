import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import FamilyOfBrands from "../src/pages/Brand";
import About from "../src/pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Branches from "./pages/Branches";


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/family-of-brands" element={<FamilyOfBrands />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/branches" element={<Branches />} />
        {/*<Route path="/pulses" element={<Pulses />} />
        
      
        <Route path="/career" element={<Career />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
