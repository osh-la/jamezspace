import React from 'react'

const SignUp = ({ toggle }) => {
  return (
    <div className='m-auto bg-white md:w-2/4 round p-4 top-1/2'>
      <div className="flex justify-end mx-10">
        <button className=" text-gray-500 hover:text-gray-700" onClick={toggle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
            <path d="M3.89467 1.41939C3.21124 0.735977 2.10321 0.735977 1.41978 1.41939C0.736374 2.10281 0.736374 3.21084 1.41978 3.89427L11.5255 14L1.41989 24.1057C0.736479 24.7891 0.736479 25.8972 1.41989 26.5806C2.10332 27.2639 3.21135 27.2639 3.89476 26.5806L14.0004 16.4748L24.1061 26.5806C24.7895 27.2639 25.8976 27.2639 26.581 26.5806C27.2643 25.8972 27.2643 24.7891 26.581 24.1057L16.4752 14L26.5811 3.89427C27.2645 3.21084 27.2645 2.10281 26.5811 1.41939C25.8978 0.735977 24.7897 0.735977 24.1063 1.41939L14.0004 11.5251L3.89467 1.41939Z" fill="#1F2937" />
          </svg>
        </button>
      </div>
      <div className="text-center py-4">
        <h1 className='text-3xl font-bold text-green-600'>Join JamezSpace Today!</h1>
        <p className="text-gray-600">Create an Account to Start Buying And Selling With Ease.</p>
      </div>
      <form className=" space-y-3 mx-10" action="">
        <div className="">
          <label className='' htmlFor="email">Full Name</label>
          <input className='focus:outline-none w-full rounded-md p-2 border border-gray-200' type="email" placeholder='Enter Full Name' />
        </div>
        <div className="">
          <label className='' htmlFor="Password">Email Address</label>
          <input className='focus:outline-none w-full rounded-md p-2 border border-gray-200' type="text" placeholder='Enter Email Address' />
        </div>
        <div className="">
          <label htmlFor="Password">Phone Number</label>
          <input className='focus:outline-none w-full rounded-md p-2 border border-gray-200' type="text" placeholder='Enter Phone Number' />

        </div>
        <div className="">
          <label htmlFor="Password">Enter Password</label>
          <input className='focus:outline-none w-full rounded-md p-2 border border-gray-200' type="password" placeholder='••••••••' />
        </div>
        <div className="">
          <label htmlFor="Password">Confirm Password</label>
          <input className='focus:outline-none w-full rounded-md p-2 border border-gray-200' type="password" placeholder='••••••••' />
        </div>
        <button className='w-full bg-green-600 text-white rounded-md p-2 ' type="submit">Sign Up</button>
        <p className="text-center text-gray-400 mt-2">or</p>
        <button className='bg-black p-2 rounded-md text-white w-full mt-2'>Continue With Google</button>
      </form>
      <div className="mt-2">
        <p className="text-center">New to Jamezspace? <span className="text-green-600"><a href="">Create An Account</a></span></p>
        <p className="text-center text-gray-400">By Signing in you Agree with Jamezspace Terms and Condition</p>
      </div>

    </div>
  )
}

export default SignUp