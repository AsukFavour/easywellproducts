import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const images = [
    "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479082/Easywell/rwnxfkymmr64gbqhflcg.jpg",
    "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479085/Easywell/iwzaw7i3vetknlguocgx.jpg",
    "https://res.cloudinary.com/dqfzpmiiw/image/upload/v1740479091/Easywell/pessn4r1srvhtkxmwsq5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-COSgreen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 bg-COSgreen bg-opacity-70 text-white p-2 rounded-full transition-transform hover:scale-110"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 bg-COSgreen bg-opacity-70 text-white p-2 rounded-full transition-transform hover:scale-110"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSection;
