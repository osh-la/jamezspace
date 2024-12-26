import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode; 
  bg?: string;         
  round?: string;      
}

const Button: React.FC<ButtonProps> = ({ children, bg = 'bg-green-600', round = 'rounded-md' }) => {
  return (
    <button className={`${bg} ${round} w-full  center p-4 text-sm hover:text-gray-100`}>
        {children}
    </button>
  )
}

export default Button