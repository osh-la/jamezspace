import React, { useState } from 'react';
import productsData from './products.json';
import { Link } from 'react-router-dom';

interface productProp{
  product:any
}

  const ProductCard:React.FC<productProp> = ( {product}) => {

    const [liked, setLiked] = useState(product.isFavorite);
  
  
    const toggleLike = () => setLiked(!liked);
  
    return (
      <div className="w-full h-[25.5rem] px-4 py-6 bg-gray-100 rounded-lg flex flex-col justify-start items-center gap-4 shadow-custom">
        <div className="w-full flex justify-end items-center gap-2">
          <div className="w-8 h-8 flex justify-center items-center">
            <div className="w-8 h-8 flex flex-col justify-start items-start relative">
  
              <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
           
                {liked ? (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <g id="Favorite_duotone">
                      <path id="Vector 15" d="M5.93439 18.5443L15.3155 27.3568C15.6399 27.6616 15.8021 27.814 16.0002 27.814C16.1982 27.814 16.3604 27.6616 16.6848 27.3568L26.0659 18.5443C28.6742 16.0941 28.9909 12.0621 26.7972 9.23477L26.3848 8.70313C23.7605 5.32078 18.493 5.88803 16.6491 9.75154C16.3886 10.2973 15.6117 10.2973 15.3513 9.75154C13.5073 5.88803 8.23979 5.32078 5.61556 8.70313L5.20308 9.23477C3.00943 12.0621 3.32616 16.0941 5.93439 18.5443Z" stroke="red" stroke-opacity="0.77" stroke-width="1.4"></path>
                    </g>
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Favorite_duotone">
                      <path id="Vector 15" d="M5.93439 18.5443L15.3155 27.3568C15.6399 27.6616 15.8021 27.814 16.0002 27.814C16.1982 27.814 16.3604 27.6616 16.6848 27.3568L26.0659 18.5443C28.6742 16.0941 28.9909 12.0621 26.7972 9.23477L26.3848 8.70313C23.7605 5.32078 18.493 5.88803 16.6491 9.75154C16.3886 10.2973 15.6117 10.2973 15.3513 9.75154C13.5073 5.88803 8.23979 5.32078 5.61556 8.70313L5.20308 9.23477C3.00943 12.0621 3.32616 16.0941 5.93439 18.5443Z" stroke="#919191" stroke-opacity="0.77" stroke-width="1.4"></path>
                    </g>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        <img className="w-40 h-40" src={product.image} />
        <div className="w-full h-[8.5rem] flex flex-col justify-start items-center gap-6">
          <div className="w-full h-16 flex flex-col justify-start items-start gap-4">
            <div className="w-full text-center text-black text-xl font-medium leading-normal">{product.title}</div>
            <div className="w-full text-center text-black text-2xl font-bold leading-normal tracking-wide">{product.price}</div>
          </div>
          <div className="w-full px-16 py-3 bg-green-600 rounded-lg flex justify-center items-center gap-2">
            <Link to='/product' className="text-center text-white text-sm font-medium leading-normal">View Item</Link>
          </div>
        </div>
      </div>
    );
  }
  
interface productDataProps{
  maxItems:any;
  grid:string
}

const Topdeals:React.FC<productDataProps> = ({ maxItems, grid = 'grid-cols-3' }) => {
  const displayedProducts = maxItems ? productsData.slice(0, maxItems) : productsData;


  return (
    <div className={` grid grid-cols-1 md:${grid} gap-2`}>
      {displayedProducts.map((product:any ) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Topdeals;
