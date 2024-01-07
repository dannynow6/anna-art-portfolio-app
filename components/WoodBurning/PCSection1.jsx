import React from 'react'
import Image from 'next/image'
import Wb1 from '../../assets/b2.jpg'

const ImgStyle = {
  maxHeight: '750px',
  maxWidth: '500px'
}

const PCSection1 = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center m-2.5 text-slate-500'>
        {/* Container for Image and Text */}
        <div className='flex flex-row items-center justify-center space-x-4 mt-3'>
          <div className='w-1/2'>
            <Image
              className='rounded-lg ml-3'
              src={Wb1}
              alt='Tattoo Ink'
              width={425}
              style={ImgStyle}
            />
          </div>
          <div className='w-1/2 text-left'>
            <h2 className='text-2xl font-bold mb-4'>The Pyrography Process</h2>
            <p className='leading-7'>
              We can add text describing the Pyrography process and what
              designing a piece requires. Perhaps something else as well. For
              now, this text is just filler anyway.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PCSection1
