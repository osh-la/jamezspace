import React, { useState, useEffect } from 'react';

const Downhero = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const textArray:string[] = [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst torquent,Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst torquent,Lorem ipsum dolor ",
        "adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst torquent,Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst.",

      ];
    
      const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + textArray.length) % textArray.length);
      };
    
      const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % textArray.length);
      };
    
      return (

<section className="bg-green-100  w-full  md:p-10 mt-4">
<div className="flex h-96 items-center justify-center">
  <div className="container md:space-y-10 mx-auto">
    <h1 className="md:text-6xl md:ml-16 text-center text-2xl font-bold text-green-600">Trusted by 1,000+ users!</h1>
    <div className="flex flex-row justify-center items-center mt-4">
      <button
        onClick={handlePrevClick}
        className="bg-green-200 text-gray-500 rounded-full p-4"
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <rect y="0.5" width="32" height="32" rx="16" fill="#BBF7D0"/>
      <path d="M20.0963 25.1755C19.9007 25.1764 19.713 25.0985 19.5756 24.9593L11.7155 17.0993C11.4282 16.8116 11.4282 16.3455 11.7155 16.0578L19.5756 8.19777C19.8659 7.92723 20.3183 7.93521 20.599 8.21583C20.8796 8.49644 20.8876 8.94889 20.617 9.23923L13.2777 16.5786L20.617 23.9179C20.9044 24.2056 20.9044 24.6716 20.617 24.9593C20.4796 25.0985 20.2919 25.1764 20.0963 25.1755Z" fill="#16A34A"/>
      </svg>
      </button>
      <div className="bg-white flex items-start justify-start rounded-lg p-4 md:w-full md:mx-4 shadow-lg">
   
         
     
        <div>
          <div className="flex items-center gap-2">
          <img  className ='w-8 h-8' src="/user.png" alt="" />
          <div className="flex flex-col w-full py-4 md:flex-row md:justify-between">
            <h2 className="font-semibold">Johm Maicoim</h2>
            <span className="text-gray-400 text-xs">24 January 2024</span>
          </div>
          </div>
          
          <p className="text-start text-xs md:text-sm text-gray-400 font-bold">
            {textArray[currentIndex]}
          </p>
        </div>
      </div>
      <button
        onClick={handleNextClick}
        className="bg-green-200 text-gray-500 rounded-full p-4 "
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
      <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 32 0.5)" fill="#BBF7D0"/>
      <path d="M11.9037 25.1755C12.0993 25.1764 12.287 25.0985 12.4244 24.9593L20.2845 17.0993C20.5718 16.8116 20.5718 16.3455 20.2845 16.0578L12.4244 8.19777C12.1341 7.92723 11.6817 7.93521 11.401 8.21583C11.1204 8.49644 11.1124 8.94889 11.383 9.23923L18.7223 16.5786L11.383 23.9179C11.0956 24.2056 11.0956 24.6716 11.383 24.9593C11.5204 25.0985 11.7081 25.1764 11.9037 25.1755Z" fill="#16A34A"/>
      </svg>
      </button>
    </div>
  </div>
</div>

</section>
      );
    }
    

export default Downhero