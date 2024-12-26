import React, { useState } from "react";
import { Range } from "react-range";

const PriceRangeFilter = () => {
  const [priceRange, setPriceRange] = useState([1000, 1000000]); 
  const MIN = 1000;
  const MAX = 10000000;

  const handleInputChange = (value:string, index:number) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
  };

  return (
    <div className="">
      <h1 className="catheader mb-2">Price, ₦</h1>
      <div className="flex justify-between items-center gap-2 py-2 mb-4">
        <div className="w-full">
          <p className="text-gray-400">From</p>
          <input
          type="number"
          value={priceRange[0]}
          min={MIN}
          max={MAX}
          onChange={(e) => handleInputChange(e.target.value, 0)}
          className="border border-gray-300 p-2 w-full"
          placeholder="From"
        />
        </div>
        <div className="w-full">
          <p className="text-end text-gray-400">To</p>
        <input
          type="number"
          value={priceRange[1]}
          min={MIN}
          max={MAX}
          onChange={(e) => handleInputChange(e.target.value, 1)}
          className="border border-gray-300 p-2 w-full"
          placeholder="To"
        />
        </div>
      </div>
      <Range
        step={100}
        min={MIN}
        max={MAX}
        values={priceRange}
        onChange={(values) => setPriceRange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: `linear-gradient(to right, #16a34a ${
                ((priceRange[0] - MIN) / (MAX - MIN)) * 100
              }%, #16a34a ${
                ((priceRange[1] - MIN) / (MAX - MIN)) * 100
              }%, #d1d5db ${
                ((priceRange[1] - MIN) / (MAX - MIN)) * 100
              }%)`,
              borderRadius: "4px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              backgroundColor: isDragged ? "#16a34a" : "#ffffff",
              border: "2px solid #16a34a",
              borderRadius: "50%",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            }}
          />
        )}
      />
    </div>
  );
};

export default PriceRangeFilter;
