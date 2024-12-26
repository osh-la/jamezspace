import { useState } from "react";

const ImageSlider = () => {
  const images:string[] = ["/iphone2.png", "/iphone3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  return (
    <div className="relative w-full h-80 md:h-card">
      <div className="w-full h-full  absolute justify-between items-center inline-flex">
        <div className="md:w-[85.79px] px-7 py-2.5 left-4 top-6 absolute bg-gray-200 rounded-[19.95px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-[#6D7280] text-xs md:text-sm font-bold font-['SF Pro Display'] leading-normal">
            USED
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 w-16 h-16 transform -translate-y-1/2 text-white p-2 rounded-full "
        >
          <img src="/leftarrow.svg" alt="" />
        </button>

        <div className="w-full">
          <img
            className="w-full h-80 md:h-card pImageHeight p-5 object-contain bg-custom-gray rounded-3xl"
            src={images[currentIndex]}
            alt="Slider Image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white  font-bold">
              <div
                className="text-white/30 text-4xl md:text-7xl font-black text-center md:text-start leading-relaxed"
                style={{
                  WebkitTextStroke: "1px white",
                 
                }}
              >
                JamezSpace
              </div>

              <div
                className="text-white/30 md:text-4xl font-bold text-center leading-5"
                style={{
                  WebkitTextStroke: "1px white",
                  
                }}
              >
                Posted by RealOne Gadget
              </div>
            </span>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 w-16 h-16 top-1/2 transform -translate-y-1/2   text-white p-2 rounded-full  "
        >
          <img src="/rightarrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
