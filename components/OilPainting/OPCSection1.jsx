import React from 'react'
import Image from 'next/image'
import DC from '../../assets/dogcat.png'

const ImgStyle = {
  height: 'auto'
}

const OPCSection1 = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center m-2.5 text-slate-500'>
        {/* Container for Image and Text */}
        <div className='flex flex-row items-center justify-center space-x-4 mt-3'>
          <div className='w-1/2'>
            <Image
              className='rounded-lg ml-3'
              src={DC}
              alt='Dog & Cat'
              width={425}
              style={ImgStyle}
            />
          </div>
          <div className='w-1/2 text-left'>
            <h2 className='text-2xl font-bold mb-4'>The Painting Process</h2>
            <p className='leading-7'>
              Here you can add information about how you paint, or how you
              determine composition, or some third thing. Use this space to
              convey info to user.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OPCSection1
