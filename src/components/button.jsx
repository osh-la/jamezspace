import React from 'react'

const Button = ({children, bg='bg-green-600', round='rounded-md'} ) => {
  return (
    <button className={`${bg} ${round} w-full  center p-4 text-sm hover:text-gray-100`}>
        {children}
    </button>
  )
}

export default Button