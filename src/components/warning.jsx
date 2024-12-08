const Warn = () => {
  return (
    <div className="bg-green-100 flex items-center gap-1 mb-4 p-2 rounded-md">
      <img className="h-5" src="/icons/info.png" alt="" />

      <div >
        <span className="text-green-600 text-xs md:text-sm font-normal font-['SF Pro Display'] leading-normal">
          For your safety, please only buy from and sell to people in your city.
          Always arrange meetups in public places.{" "}
        </span>
        <span className="hover:text-green-800 text-green-600 text-xs md:text-sm font-normal font-['SF Pro Display'] underline leading-normal">
          Read More
        </span>
        </div>


     
    </div>
  );
};

export default Warn;
