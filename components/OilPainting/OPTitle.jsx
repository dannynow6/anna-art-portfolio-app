import React from 'react'
import Image from 'next/image'
import Brush from '../../assets/brush.jpg'

const OPTitle = () => {
  return (
    <>
      <div className='flex justify-between mt-4'>
        <h2 className='text-slate-500 font-semibold text-start ml-8 text-6xl my-3'>
          Oil Painting
        </h2>
        <Image
          className='rounded mr-8'
          src={Brush}
          alt='paint brushes'
          width={100}
          height={68}
        />
      </div>
    </>
  )
}

export default OPTitle
