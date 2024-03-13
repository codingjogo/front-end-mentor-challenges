import React from 'react'

const Card = ({children} : {children: React.ReactNode;}) => {
  return (
    <div className='desktop:w-[384px] mobile:w-full mobile:mx-6 p-6 flex flex-col gap-6 shadow-card-shadow rounded-[12px] border border-black bg-white font-figtree'>
        {children}
    </div>
  )
}

export default Card