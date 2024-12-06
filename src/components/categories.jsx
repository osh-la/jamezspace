import React, { useState } from 'react';
import { Link } from "react-router-dom"

const CategoryItem = ({ image, title, count, subcategories }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-center justify-between cursor-pointer" >
        <Link to={'/productcat'} className="flex items-center">
          <img src={image} alt={title} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-gray-700 text-base font-bold font-['SF Pro Display'] leading-snug tracking-wide">{title}</h3>
            <p className="text-gray-500 text-base font-medium font-['SF Pro Display'] leading-normal tracking-wide">{count} Items</p>
          </div>
        </Link>
        <svg onClick={toggleExpand} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <ul className={`${isExpanded ? 'block' : 'hidden'}`}>
        {subcategories.map((subcategory, index) => (
          <li key={index} className=" pl-14 flex items-center justify-start space-y-2 ">
            <img src={subcategory.image} alt={subcategory.title} className="w-9 h-9 rounded-full mr-4" />
            <div>
              <p className="text-gray-700 text-base font-bold font-['SF Pro Display'] leading-snug tracking-wide">{subcategory.title}</p>
              <p className="text-gray-500 text-base font-medium font-['SF Pro Display'] leading-normal tracking-wide">{subcategory.count} Items</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function CategoryList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const categories = [
    {
      title: 'Mobile phones & tablets',
      count: 2823833,
      image: '/categories/cat14.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat1.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat2.png' },
      ],
    },
    {
      title: 'Vehicles',
      count: 483944,
      image: '/categories/cat1.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat3.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat5.png' },
      ],
    },
    {
      title: 'Properties',
      count: 483944,
      image: '/categories/cat3.png',
      subcategories: [
        { title: 'New builds', count: 567834, image: '/categories/cat1.png' },
        { title: 'Rent', count: 678923, image: '/categories/cat2.png' },
        { title: 'Houses for sale', count: 385722, image: '/categories/cat3.png' },
        { title: 'land for sale', count: 384102, image: '/categories/cat4.png' },
        { title: 'Event Centers', count: 288241, image: '/categories/cat5.png' },

      ],
    },
    {
      title: 'Electronics',
      count: 483944,
      image: '/categories/cat9.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat7.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat8.png' },
      ],
    },
    {
      title: 'Home, Forniture & Appliences',
      count: 483944,
      image: '/categories/cat8.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat9.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat10.png' },
      ],
    },
    {
      title: 'Health & beauty',
      count: 483944,
      image: '/categories/cat11.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat11.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat12.png' },
      ],
    },
    {
      title: 'Fashion',
      count: 483944,
      image: '/categories/cat12.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat13.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat14.png' },
      ],
    },
    {
      title: 'Sport, Art & Outdoor',
      count: 483944,
      image: '/categories/cat13.png',
      subcategories: [
        { title: 'Cars', count: 200000, image: '/categories/cat1.png' },
        { title: 'Motorcycles', count: 100000, image: '/categories/cat2.png' },
      ],
    },
  ];


  return (
    <div>

      <div className="hidden md:block w-full max-w-sm mx-auto rounded-lg p-4">

        {categories.map((category) => (
          <CategoryItem key={category.title} {...category} />
        ))}
      </div>

      {/* Mobile View */}
      <div className=" md:hidden flex items-center justify-between">
        <Link to="./productcat" className=" text-large md:text-2xl font-bold">Top Deals</Link>
        <button className="flex items-center gap-2 text-green-600 focus:outline-none" onClick={toggleMenu}>
          Select Categories <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M0.292787 13.6947C0.105316 13.5072 0 13.2529 0 12.9877C0 12.7225 0.105316 12.4682 0.292787 12.2807L5.58579 6.98771L0.292787 1.69471C0.110629 1.50611 0.0098342 1.25351 0.0121126 0.991311C0.014391 0.729114 0.11956 0.478302 0.304968 0.292894C0.490376 0.107485 0.741189 0.00231622 1.00339 3.78025e-05C1.26558 -0.00224062 1.51818 0.0985542 1.70679 0.280712L7.70679 6.28071C7.89426 6.46824 7.99957 6.72255 7.99957 6.98771C7.99957 7.25288 7.89426 7.50718 7.70679 7.69471L1.70679 13.6947C1.51926 13.8822 1.26495 13.9875 0.999786 13.9875C0.734622 13.9875 0.480314 13.8822 0.292787 13.6947Z" fill="#16A34A" />
          </svg>
        </button>
      </div>
      <div className="md:hidden flex justify-end">
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-gray-100 w-full max-w-sm mx-auto rounded-lg p-10">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6    h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Your category list here */}
            {categories.map((category) => (
              <CategoryItem key={category.title} {...category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;

