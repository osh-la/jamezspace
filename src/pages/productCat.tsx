import Warn from "../components/warning";
import Card from "../components/card";
import Button from "../components/button";
import ProductList from "../components/productCatProducts";
import Banner from "../components/banner";
import PriceRangeFilter from "../components/priceRangeFilter";
import React, { useState } from 'react';
const Productcat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>

    <section className="font-family:'SF_Pro_Display-Bold',Helvetica] p-2 md:mx-20">

      <div className="md:mt-10">
        <Banner/>
        </div>
        <div className="flex items-center py-4 md:py-0 justify-between">
        <h1 className="md:text-2xl md:p-0 md:mt-10 md:mb-4 font-bold ">Mobile Phones and tablets</h1>
        <div className="md:hidden">
        <button className=" md:hidden flex items-center text-green-600 text-sm" onClick={toggleMenu}>
          Filter items 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8.29279 18.6947C8.10532 18.5072 8 18.2529 8 17.9877C8 17.7225 8.10532 17.4682 8.29279 17.2807L13.5858 11.9877L8.29279 6.69471C8.11063 6.50611 8.00983 6.25351 8.01211 5.99131C8.01439 5.72911 8.11956 5.4783 8.30497 5.29289C8.49038 5.10749 8.74119 5.00232 9.00339 5.00004C9.26558 4.99776 9.51818 5.09855 9.70679 5.28071L15.7068 11.2807C15.8943 11.4682 15.9996 11.7225 15.9996 11.9877C15.9996 12.2529 15.8943 12.5072 15.7068 12.6947L9.70679 18.6947C9.51926 18.8822 9.26495 18.9875 8.99979 18.9875C8.73462 18.9875 8.48031 18.8822 8.29279 18.6947Z" fill="#16A34A"/>
          </svg>
        </button>
        <button className="hidden md:block text-green-600 text-sm" onClick={toggleMenu}>
          Select Categories
        </button>
        </div>
        </div>
        
        <Warn/>
        <section className="grid md:grid-cols-3 gap-2">
         
         <section className=" hidden md:block col-span-1">
            <Card>
              <h1 className=" catheader">Categories</h1>
              <h2 className="font-semibold">mobile phones & tablets</h2>
              <Button><p className="text-white">Mobile phones</p></Button>
              <Button bg='bg-white'>Accesories for phones</Button>
              <Button bg='bg-white'>Smart watches & trackers</Button>
              <Button bg="bg-white">Tablets</Button>

            </Card>
            <Card>
              <h1 className=" catheader">Location</h1>
              
              <div className="w-full flex text-white bg-green-600 rounded-md text-center p-4 m-2" >
                <img src="/icons/heart.svg" alt="target" />
                <select className="bg-green-600 "name="" id="">
                  <option value="">Abuja Nigeria</option>
                  <option value="">Jos Nigeria</option>
                  <option value="">Nassarawa Nigeria</option>
                  
                </select>
              </div>
              
            </Card>
            <Card>
      
                <PriceRangeFilter/>
            
            </Card>
            <Card>
              <h1 className="catheader">Discount</h1>
              <form className="p-2">
                <input className="radio" type="radio" id="all" name="gender" value="male" checked />
                <label htmlFor="all"> Show all</label><br />

                <input className="radio" type="radio" id="discount" name="gender" value="female" />
                <label  htmlFor="discount"> With discount</label><br />

                <input className="radio" type="radio" id="noDiscount" name="gender" value="other" />
                <label htmlFor="noDiscount"> Without discount</label>
            </form>

            </Card>
            <Card>
              <h1 className=" catheader">Verified Sellers</h1>
                <form className="p-2">

                    <input className="radio" type="radio" name="gender" value="male" checked /> Show all<br/>
                    <input className="radio" type="radio" name="gender" value="female" /> Verified Sellers<br/>
                    <input className="radio" type="radio" name="gender" value="other"/> Unverified seller

                  </form>

            </Card>
          </section>

      {/* Mobile View */}
      <div className="md:hidden">
        
        <div className={`fixed inset-0 top-8 z-50 text-sm overflow-y-scroll scrollbar-hide ${isMenuOpen ? 'block' : 'hidden'}`}>
       
          <div className="bg-gray-100 w-full max-w-sm mx-auto rounded-lg p-5">
            <button className="absolute top-2 right-8 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6    h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>   

            
            <section className="grid grid-cols-1 gap-4">
            <h1 className="text-xl font-bold">Select item type</h1>
            <Card>
              <h1 className=" catheader">Categories</h1>
              <h2 className="font-semibold">mobile phones & tablets</h2>
              <Button><p className="text-white">Mobile phones</p></Button>
              <Button bg='bg-white'>Accesories for phones</Button>
              <Button bg='bg-white'>Smart watches & trackers</Button>
              <Button bg="bg-white">Tablets</Button>

            </Card>
            <Card>
              <h1 className=" catheader">Location</h1>
              
              <div className="w-full text-white bg-green-600 rounded-md text-center p-4 m-2" >
                <img src="" alt="" />
                <select className="bg-green-600 "name="" id="">
                  <option value="">Abuja Nigeria</option>
                  <option value="">Jos Nigeria</option>
                  <option value="">Nassarawa Nigeria</option>
                  
                </select>
              </div>
              
            </Card>
            <Card>
      
                <PriceRangeFilter/>
            
            </Card>
            <Card>
              <h1 className="catheader">Discount</h1>
              <form className="p-2">
                <input className="radio" type="radio" id="all" name="gender" value="male" checked />
                <label htmlFor="all"> Show all</label><br />

                <input className="radio" type="radio" id="discount" name="gender" value="female" />
                <label  htmlFor="discount"> With discount</label><br />

                <input className="radio" type="radio" id="noDiscount" name="gender" value="other" />
                <label htmlFor="noDiscount"> Without discount</label>
            </form>

            </Card>
            <Card>
              <h1 className=" catheader">Verified Sellers</h1>
                <form className="p-2">

                    <input className="radio" type="radio" name="gender" value="male" checked /> Show all<br/>
                    <input className="radio" type="radio" name="gender" value="female" /> Verified Sellers<br/>
                    <input className="radio" type="radio" name="gender" value="other"/> Unverified seller

                  </form>

            </Card>
            </section>
          </div>
        </div>
      </div>
          
          <section className="col-span-2">
            <section>
              <ProductList/>
            </section>
          </section>
        </section>

    </section>
    </>
  )
}

export default Productcat