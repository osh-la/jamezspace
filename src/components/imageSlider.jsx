import { useState } from "react";

const ImageSlider = () => {
  const images = [
    "/iphone2.png",
    "/iphone3.png",
  ]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  return (
    <div className="relative  gap-2 w-full">
    
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full "
      >
        <img className="w-full h-full" src="/leftarrow.svg" alt="" />
      </button>

      <div className="w-full">
        <img
          className="w-full h-80 md:h-100 pImageHeight object-contain bg-gray-200 rounded-xl"
          src={images[currentIndex]}
          alt="Slider Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white md:text-2xl font-bold">
          <div class="text-white/30 md:text-5xl font-black text-center md:text-start leading-relaxed">JamezSpace</div>
            <div class="text-white/30 md:text-2xl font-bold leading-5">Posted by RealOne Gadget</div>

          </span>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full "
      >
       <img className="w-full h-full" src="/rightarrow.svg" alt="" />
      </button>
    </div>
  );
};

export default ImageSlider;
