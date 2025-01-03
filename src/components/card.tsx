import React, {ReactNode} from 'react'
interface cardProps{
  children:ReactNode;
}

const Card:React.FC<cardProps> = ({children}) => {
  return (
    <div className='bg-gray-100 md:border border-gray-200 md:shadow-custom md:border-none rounded-lg space-y-4 p-4 mt-4'>
        {children}
    </div>
  )
}

export default Card