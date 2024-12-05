import { Link } from "react-router-dom"
import Search from '/Search.png'
import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
   
    
    function NavBar() {
      const [menuOpen, setMenuOpen] = useState(false);
      const [signIn, setsignIn] = useState(false)  
      const [signup, setSignUp] = useState(false)
      const toggleSignUp =()=>{
        setSignUp(!signup);
      }
       const ToggleSignin = ()=>{
          setsignIn(!signIn);
       }  
      return (
        <section className="">
          {/* Desktop Navbar */}
          <nav className="hidden md:block bg-green-900  text-white">
            <ul className="flex justify-center items-center w-full px-5 py-4 gap-10">
              <li>
                <Link to='/' className="flex items-center">
                  <img src="/logo.png" alt="Logo" />
                  <p>Jamezspace</p>
                </Link>
              </li>
              <div className="relative w-2/5">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 41" fill="none">
                  <path d="M33.3337 33.5518L27.0375 27.2444M30.5266 18.815C30.5266 21.9789 29.2698 25.0133 27.0325 27.2506C24.7952 29.4879 21.7608 30.7448 18.5968 30.7448C15.4328 30.7448 12.3984 29.4879 10.1612 27.2506C7.92388 25.0133 6.66699 21.9789 6.66699 18.815C6.66699 15.651 7.92388 12.6166 10.1612 10.3793C12.3984 8.14202 15.4328 6.88513 18.5968 6.88513C21.7608 6.88513 24.7952 8.14202 27.0325 10.3793C29.2698 12.6166 30.5266 15.651 30.5266 18.815V18.815Z" 
                  stroke="gray" stroke-width="2.5" stroke-linecap="round"/>
                  </svg>
                </span>
                <input type="text" placeholder="Search" className="w-full pl-10 py-2 border rounded-md  text-black focus:outline-none"/>
                </div>
                <button onClick={ToggleSignin} className="text-sm hover:text-gray-500">
                Login
              </button>
              <button onClick={toggleSignUp} className="text-sm hover:text-gray-500">
                Signup
              </button>
              <li className="text-sm hover:text-gray-500">
                <button className="bg-green-600 w-36 py-4 rounded-md">List item</button>
              </li>
            </ul>
          </nav>
    
          {/* Mobile Navbar */}
          <nav className="sm:block md:hidden bg-white">
            <div className="container px-4 py-2 items-center">
              <div className="flex items-center justify-between">
                <Link to='/' className="flex items-center">
                  <img src="/logo.png" alt="Logo" />
                  <p className="font-semibold">Jamezspace</p>
                </Link>
                <div className="flex items-center">
                  
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 41" fill="none">
                    <path d="M33.3337 33.5518L27.0375 27.2444M30.5266 18.815C30.5266 21.9789 29.2698 25.0133 27.0325 27.2506C24.7952 29.4879 21.7608 30.7448 18.5968 30.7448C15.4328 30.7448 12.3984 29.4879 10.1612 27.2506C7.92388 25.0133 6.66699 21.9789 6.66699 18.815C6.66699 15.651 7.92388 12.6166 10.1612 10.3793C12.3984 8.14202 15.4328 6.88513 18.5968 6.88513C21.7608 6.88513 24.7952 8.14202 27.0325 10.3793C29.2698 12.6166 30.5266 15.651 30.5266 18.815V18.815Z" stroke="#080341" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                  </button>
                  <button
                    className="focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="41"
                      viewBox="0 0 40 41"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.5 13.9685H7.5V11.4685H32.5V13.9685Z"
                        fill="#080341"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.5 21.4685H7.5V18.9685H32.5V21.4685Z"
                        fill="#080341"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.5 28.9685H7.5V26.4685H32.5V28.9685Z"
                        fill="#080341"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
    
            {/* Mobile Menu */}
            {menuOpen && (
              <div className="relative top-0 left-0 w-full h-screen bg-green-900 text-white flex flex-col justify-center items-center">
                {/* Close Button */}
                <button
                  className="absolute top-5 right-5 text-white text-3xl"
                  onClick={() => setMenuOpen(false)}
                >
                  &times;
                </button>
    
                {/* Mobile Menu Items */}
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center">
                  <img src="/logo.png" alt="Logo" className="w-20 h-20" />
                  <p className="text-xl font-semibold">JamezSpace</p>
                  </div>
                  <button
                    onClick={ToggleSignin}
                    className="w-full border-2 text-center border-white text-white px-6 py-2 rounded-md"
                  >
                    Login
                  </button>
                  <button
                    onClick={toggleSignUp}
                    className="w-full text-center border-2 border-white text-white px-6 py-2 rounded-md"
                  >
                    Sign Up
                  </button>
                  <button className=" w-full bg-green-600 px-8 py-3 rounded-md text-white">
                    List Item
                  </button>
                </div>
              </div>
            )}
          </nav>
 
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-start bg-black bg-opacity-50 z-50 ${ signIn ? 'block':'hidden'}`}>
            <SignIn toggle ={ToggleSignin}/>
          </div>
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-start bg-black bg-opacity-50 z-50 ${ signup ? 'block':'hidden'}`}>
            <SignUp toggle ={toggleSignUp}/>
          </div>
        </section>
      );
    }
    
    export default NavBar;
    