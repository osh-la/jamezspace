import React from 'react'

const SignUp = ({ toggle }) => {
  return (

    <>
    <div className="fixed inset-0 flex flex-col items-center justify-center text-start bg-black bg-opacity-70 z-50">

    </div>
      <form method='' action='/' className="md:fixed md:inset-0 z-50 m-6 text-xs md:text-base md:w-2/4 mx-auto bg-white rounded-2xl  shadow-custom p-20  overflow-y-scroll scrollbar-hide">

        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 28 28" fill="none">
              <path d="M3.89467 1.41939C3.21124 0.735977 2.10321 0.735977 1.41978 1.41939C0.736374 2.10281 0.736374 3.21084 1.41978 3.89427L11.5255 14L1.41989 24.1057C0.736479 24.7891 0.736479 25.8972 1.41989 26.5806C2.10332 27.2639 3.21135 27.2639 3.89476 26.5806L14.0004 16.4748L24.1061 26.5806C24.7895 27.2639 25.8976 27.2639 26.581 26.5806C27.2643 25.8972 27.2643 24.7891 26.581 24.1057L16.4752 14L26.5811 3.89427C27.2645 3.21084 27.2645 2.10281 26.5811 1.41939C25.8978 0.735977 24.7897 0.735977 24.1063 1.41939L14.0004 11.5251L3.89467 1.41939Z" fill="#1F2937" />
            </svg>
          </button>
        </div>

        <div className="text-center space-y-16">
          <h1 className="text-green-600 text-lg  md:text-3xl font-bold ">Join JamezSpace Today!</h1>
          <p className="text-gray-600 text-sm md:text-lg">Create an account to start buying and selling with ease.</p>
        </div>

        <div className="md:mt-2 space-y-4">
          {['Full Name', 'Email Address', 'Phone Number'].map((label, idx) => (
            <div className="" key={idx}>
              
              <label className="block text-gray-700 md:text-sm font-medium">{label}</label>
              <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                <input
                  type={label.toLowerCase().includes('password') ? 'password' : 'text'}
                  placeholder={`Enter ${label}`}
                  className="w-full text-gray-400 focus:outline-none"
                />
              </div>
              
            </div>
            
          ))}
          <div flex flex-col>

          <label className=" text-gray-700 md:text-sm font-medium">Enter Password</label>
              <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                    <input
                        type="password"
                        placeholder="*******"
                        className="w-full text-gray-400 text-base focus:outline-none"
                    />
                    <button className="text-gray-500">
                     
                      <img className='w-6 h-6'src="/icons/Frame.png" alt="" />
                    </button>
                </div>
          </div>

                <div className=" flex flex-col">

                <label className=" text-gray-700 md:text-sm font-medium ">Confirm Password</label>
                <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg">
                    <input
                        type="password"
                        placeholder="*******"
                        className="w-full text-gray-400 text-base focus:outline-none"
                    />
                    <button className="text-gray-500">
                     
                      <img className='w-6 h-6'src="/icons/Frame.png" alt="" />
                    </button>
                </div>
                </div>

                
        </div>


        <div className="md:mt-2">
          <button className="w-full bg-green-600 text-white py-3 rounded-lg tmd:ext-base font-medium hover:bg-green-700">
            Sign Up
          </button>
        </div>


        <div className="flex items-center justify-center gap-2 md:mt-2">
          <img className="w-40" src="/icons/vector1.png" alt="" />
          <span className="text-gray-400 text-sm font-medium">OR</span>
          <img className="w-40" src="/icons/vector1.png" alt="" />
        </div>

        <div className="md:mt-2">
          <button className="w-full flex items-center justify-center bg-black text-white py-3 rounded-lg gap-2 hover:bg-gray-800">
            <span className="w-6 h-6">
              <img src="/icons/Google.png" alt="google" />
            </span>
            <span>Continue with Google</span>
          </button>
        </div>


        <div className="mt-2 md:mt-4 text-center space-y-1">
          <p>
            <span className="text-gray-700 md:text-sm">Already a JamezSpace user? </span>
            <a href="#" className="text-green-600 md:text-sm font-medium hover:underline">
              Sign In
            </a>
          </p>
          <p className="text-gray-400 md:text-sm">
            By signing in you agree to JamezSpace's{' '}
            <a href="#" className="text-green-600 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </form>
      </>


  )
}

export default SignUp