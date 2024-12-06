import React from 'react'
import Warn from '../components/warning';
import { Link } from 'react-router-dom'
import CategoryList from '../components/categories'
import Topdeals from '../components/topDeals'
import Downhero from '../components/downHero'
import Banner from '../components/banner'
import { useState } from 'react';

const Homepage = () => {
  const [location, setLocation] = useState(false);

  const toggleLocation = () => {
    setLocation(!location);
  }
  return (
    <section>

      <section className=" font-family:'SF_Pro_Display-Bold',Helvetica] p-2 md:mx-20">
        <div className='text-center py-5 md:py-0 md:m-10'>
          <h1 className='text-green-600 font-bold text-2xl md:text-6xl'>
            Discover amazing deals
          </h1>


          <p className='text-gray-600 text-sm mb-5 m-2'>Currently showing items available at <span className="text-black font-semibold">Abuja, Nigeria.</span> To change your location, please use the drop-down menu below.</p>
          <div className="flex justify-center">
            <div class="relative  w-64">
              <button onClick={toggleLocation} class="appearance-none focus:outline-none w-full py-2 px-4 pr-10 text-sm md:text-base rounded-md border border-green-400 bg-white text-green-600 font-semibold p-2 text-center">
                Abuja Nigeria
              </button>
              <span class="absolute top-1/2 left-2/3 transform -translate-y-1/2 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>

            </div>
          </div>
          <div className="">
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-start bg-black bg-opacity-50 z-50 ${location ? 'block' : 'hidden'}`}>
              <div className='m-auto bg-white md:w-1/2 round p-10 '>
                <div className="flex justify-between items-center">
                  <div className="">
                    <h1 className='text-3xl font-bold' >Select your location</h1>
                    <p className="text-gray-500 font-medium">Select your location in Nigeria</p>
                  </div>
                  <button className=" text-gray-500 hover:text-gray-700" onClick={toggleLocation}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                      <path d="M3.89467 1.41939C3.21124 0.735977 2.10321 0.735977 1.41978 1.41939C0.736374 2.10281 0.736374 3.21084 1.41978 3.89427L11.5255 14L1.41989 24.1057C0.736479 24.7891 0.736479 25.8972 1.41989 26.5806C2.10332 27.2639 3.21135 27.2639 3.89476 26.5806L14.0004 16.4748L24.1061 26.5806C24.7895 27.2639 25.8976 27.2639 26.581 26.5806C27.2643 25.8972 27.2643 24.7891 26.581 24.1057L16.4752 14L26.5811 3.89427C27.2645 3.21084 27.2645 2.10281 26.5811 1.41939C25.8978 0.735977 24.7897 0.735977 24.1063 1.41939L14.0004 11.5251L3.89467 1.41939Z" fill="#1F2937" />
                    </svg>
                  </button>
                </div>

                <form className='py-4' action="">
                  <div className="my-4">
                    <label className='font-semibold' htmlFor="state">State</label>
                    <select className='focus:outline-none w-full rounded-md p-2 border border-gray-200' name="" id="">
                      <option value="Abuja, Nigeria">Abuja, Nigeria</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <label className='font-semibold' htmlFor="state">City</label>
                    <select className='focus:outline-none w-full rounded-md p-2 border border-gray-200' name="" id="">
                      <option value="wuse">Wuse</option>
                    </select>
                  </div>
                  <button className='my-3 w-full bg-green-600 text-white rounded-md p-2'>Done</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Banner />
        <section className='md:grid md:grid-cols-3 gap-2'>


          <div className="col-span-1 rounded-lg md:bg-gray-100 p-4 md:shadow-custom mt-4 ">
            <h1 className='hidden md:block font-bold text-lg'>Select Item Type</h1>
            <CategoryList />
          </div>
          <div className="col-span-2">
            <div className="container mx-auto px-4 md:p-4">
              <Link to="./productcat" className="hidden md:block text-large md:text-2xl font-bold mb-4">
                Top Deals
              </Link>

              <Warn />
              <Topdeals />
            </div>
          </div>
        </section>

      </section>
      <Downhero />
    </section>
  )
}

export default Homepage