import React, { useState, useEffect } from "react";

function Banner() {

 const banner: { image: string; text: string; button: string }[] = [
    {
      image: "/banner/bannerFirst.png",
      text: "Reach thousands of buyers with ease on JamezSpace.",
      button: "Start Shopping"
    },
    {
      image: "/banner/bannerSecond.png",
      text: "Start conversations and arrange convenient meetups near you",
      button: "Find Out How"
    },
    {
      image: "/banner/bannerLast.png",
      text: "Explore More with JamezSpace Premium Plans",
      button: "Explore Plans"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + banner.length) % banner.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % banner.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>

      <div className="hidden md:block relative">
        <img
          src={banner[currentIndex].image}
          alt="Desktop Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex">
          <button
            onClick={handlePrevClick}
            className="p-2 rounded-full md:px-8"
          >
            <img
              className="md:w-full md:h-full h-10 w-10"
              src="/leftarrow.svg"
              alt="Previous"
            />
          </button>
          <div className="md:space-y-4">
            <h1 className="font-family:'SF_Pro_Display-Bold',Helvetica] w-4/5 text-base md:w-[709px] left-8 tracking-0 md:top-11 font-semibold md:font-bold leading-[normal] md:text-4xl text-white">
              {banner[currentIndex].text}
            </h1>
            <button className="text-white border hover:text-gray-100 border-white md:py-2 px-4 text-sm rounded-md">
              {banner[currentIndex].button}
            </button>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0">
          <button
            onClick={handleNextClick}
            className="p-2 rounded-full md:px-8"
          >
            <img
              className="md:w-full md:h-full h-8 w-8"
              src="/rightarrow.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>

      {/* Mobile Banner */}
      <div
        className="block md:hidden rounded-md relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${banner[currentIndex].image})`,
          height: "110px",
          borderRadius: "10px",

        }}
      >
        <div className="absolute inset-0 rounded-md " />
        <div className="absolute inset-0 flex items-center justify-between px-4">

          <button onClick={handlePrevClick} className="p-2 z-10">
            <img src="/leftarrow.svg" alt="Previous" className="w-6 h-6" />
          </button>


          <div className="text-left flex-1 z-10">
            <h1 className="text-white font-bold text-sm leading-2">
              {banner[currentIndex].text}
            </h1>
            <button className="mt-2 border border-white text-white py-1 px-4 text-xs rounded-md">
              {banner[currentIndex].button}
            </button>
          </div>

          {/* Right Arrow */}
          <button onClick={handleNextClick} className="p-2 z-10">
            <img src="/rightarrow.svg" alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Banner;
