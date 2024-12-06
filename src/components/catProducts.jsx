
import { useState } from 'react';
import productsData from './products.json';
const ProductList = () => {
  const [viewMode, setViewMode] = useState('list');
  const [sortBy, setSortBy] = useState('recommended');
  const products = productsData.slice(0, 2);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };


  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <div className="container md:mx-auto md:px-4">
      <div className=" flex justify-between mb-4">
        <div className="hidden md:flex space-x-4">

          <button className={` p-2 flex items-center  font-semibold ${viewMode === 'list' ? 'text-black' : ''}`} onClick={() => handleViewModeChange('grid')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clip-path="url(#clip0_4742_1450)">
                <path d="M27.5 16.2487V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H16.25V16.2487H27.5ZM13.75 16.2487V26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V16.2487H13.75ZM13.75 3.75V13.7487H2.5V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H13.75ZM26.25 3.75C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V13.7487H16.25V3.75H26.25Z" fill="#6D7280" />
              </g>
              <defs>
                <clipPath id="clip0_4742_1450">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            View in grid</button>

          <button className={` p-2 font-semibold flex items-center ${viewMode === 'grid' ? 'text-black' : ''}`} onClick={() => handleViewModeChange('list')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1875 9.6875H8.4375V7.1875H27.1875V9.6875ZM27.1875 16.25H8.4375V13.75H27.1875V16.25ZM27.1875 22.8125H8.4375V20.3125H27.1875V22.8125Z" fill="#16A34A" />
              <path d="M5.625 7.5H3.75V9.375H5.625V7.5Z" fill="#16A34A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 7.5C2.8125 6.98223 3.23223 6.5625 3.75 6.5625H5.625C6.14277 6.5625 6.5625 6.98223 6.5625 7.5V9.375C6.5625 9.89277 6.14277 10.3125 5.625 10.3125H3.75C3.23223 10.3125 2.8125 9.89277 2.8125 9.375V7.5Z" fill="#16A34A" />
              <path d="M5.625 14.0625H3.75V15.9375H5.625V14.0625Z" fill="#16A34A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 14.0625C2.8125 13.5447 3.23223 13.125 3.75 13.125H5.625C6.14277 13.125 6.5625 13.5447 6.5625 14.0625V15.9375C6.5625 16.4553 6.14277 16.875 5.625 16.875H3.75C3.23223 16.875 2.8125 16.4553 2.8125 15.9375V14.0625Z" fill="#16A34A" />
              <path d="M5.625 20.625H3.75V22.5H5.625V20.625Z" fill="#16A34A" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 20.625C2.8125 20.1072 3.23223 19.6875 3.75 19.6875H5.625C6.14277 19.6875 6.5625 20.1072 6.5625 20.625V22.5C6.5625 23.0178 6.14277 23.4375 5.625 23.4375H3.75C3.23223 23.4375 2.8125 23.0178 2.8125 22.5V20.625Z" fill="#16A34A" />
            </svg>

            View in list</button>
        </div>
        <div className='flex items-center px-5 md:px-0 gap-4 md:gap-2 text-sm md:text-base'>
          <div className="flex items-center">
            <p>Sort By</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <g clip-path="url(#clip0_5296_4289)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.11385 5.03949C8.444 4.70934 8.97928 4.70934 9.30943 5.03949L13.8182 9.54831C14.1484 9.87846 14.1484 10.4137 13.8182 10.7439C13.4881 11.074 12.9528 11.074 12.6227 10.7439L9.55704 7.67826V21.4181C9.55704 21.885 9.17854 22.2635 8.71164 22.2635C8.24474 22.2635 7.86624 21.885 7.86624 21.4181V7.67826L4.80062 10.7439C4.47046 11.074 3.93519 11.074 3.60503 10.7439C3.27488 10.4137 3.27488 9.87846 3.60503 9.54831L8.11385 5.03949ZM19.9837 4.79188C20.4506 4.79188 20.8291 5.17038 20.8291 5.63728V19.3772L23.8947 16.3115C24.2249 15.9814 24.7601 15.9814 25.0903 16.3115C25.4204 16.6417 25.4204 17.177 25.0903 17.5071L20.5815 22.0159C20.2513 22.3461 19.716 22.3461 19.3859 22.0159L14.8771 17.5071C14.5469 17.177 14.5469 16.6417 14.8771 16.3115C15.2072 15.9814 15.7425 15.9814 16.0727 16.3115L19.1383 19.3772V5.63728C19.1383 5.17038 19.5168 4.79188 19.9837 4.79188Z" fill="#16A34A" />
              </g>
              <defs>
                <clipPath id="clip0_5296_4289">
                  <rect width="27.0529" height="27.0529" fill="white" transform="translate(0.821289 0.00125885)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-center">
            <select className="appearance-none focus:outline-none bg-white" onChange={(e) => handleSortByChange(e.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#16A34A" className='w-5 h-5'>
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <p className="">2823833 Items</p>
        </div>
      </div>

      <div className={`grid gap-4 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {products.sort((a, b) => {
          if (sortBy === 'price-asc') {
            return a.price.localeCompare(b.price);
          } else if (sortBy === 'price-desc') {
            return b.price.localeCompare(a.price);
          } else {
            return 0;
          }
        }).map((product) => (

          <div className="relative shadow-sm product-card bg-gray-100 p-4 py-10 rounded-lg text-center">
            <div className="flex items-center jusitfy-between">
              {product.condition == 'used' ?
                <p className="absolute top-2 left-2 bg-gray-300 rounded-full text-black py-2 px-4">{product.condition}</p> :
                <p className="absolute top-2 left-4 bg-orange-100 rounded-full text-orange-600 py-2 px-4">{product.condition}</p>
              }


              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleFavorite}
              >
                {isFavorite ? (

                  <svg width="30" height="30" viewBox="0 0 32 32" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <g id="Favorite_duotone">
                      <path id="Vector 15" d="M5.93439 18.5443L15.3155 27.3568C15.6399 27.6616 15.8021 27.814 16.0002 27.814C16.1982 27.814 16.3604 27.6616 16.6848 27.3568L26.0659 18.5443C28.6742 16.0941 28.9909 12.0621 26.7972 9.23477L26.3848 8.70313C23.7605 5.32078 18.493 5.88803 16.6491 9.75154C16.3886 10.2973 15.6117 10.2973 15.3513 9.75154C13.5073 5.88803 8.23979 5.32078 5.61556 8.70313L5.20308 9.23477C3.00943 12.0621 3.32616 16.0941 5.93439 18.5443Z" stroke="red" stroke-opacity="0.77" stroke-width="1.4" />
                    </g>
                  </svg>

                ) : (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Favorite_duotone">
                      <path id="Vector 15" d="M5.93439 18.5443L15.3155 27.3568C15.6399 27.6616 15.8021 27.814 16.0002 27.814C16.1982 27.814 16.3604 27.6616 16.6848 27.3568L26.0659 18.5443C28.6742 16.0941 28.9909 12.0621 26.7972 9.23477L26.3848 8.70313C23.7605 5.32078 18.493 5.88803 16.6491 9.75154C16.3886 10.2973 15.6117 10.2973 15.3513 9.75154C13.5073 5.88803 8.23979 5.32078 5.61556 8.70313L5.20308 9.23477C3.00943 12.0621 3.32616 16.0941 5.93439 18.5443Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4" />
                    </g>
                  </svg>

                )}
              </button>
            </div>
            <div className={`${viewMode === 'list' ? 'md:grid grid-cols-3 gap-2 md:items-center md:space-y-6 md:text-start' : 'grid  grid-cols-1'}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full col-span-1 h-48 object-contain rounded-lg mb-4"
              />

              <div className="col-span-2">
                <h3 className="text-base font-semibold">{product.title}</h3>
                <p className="text-gray-900 text-2xl font-bold">{product.price}</p>
                <button className="bg-green-600 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  <a href="/product">View Item</a>
                </button>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default ProductList;

