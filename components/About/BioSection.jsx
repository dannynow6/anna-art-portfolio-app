import React from 'react'
import Image from 'next/image'
import AboutImage from '../../assets/about.jpg'

const ImgStyle = {
  height: 'auto'
}

const BioSection = () => {
  return (
    <div className='flex justify-center my-4'>
      <div className='max-w-lg rounded-2xl overflow-hidden shadow-lg my-2'>
        <Image
          className='w-full'
          src={AboutImage}
          alt='bio-image'
          layout='responsive'
          width={475}
          style={ImgStyle}
        />
      </div>
      <div className='px-6 py-4'>
        <div className='flex justify-between'>
          <div className='font-semibold text-2xl mb-2 text-slate-800'>
            About Anna
          </div>
        </div>
        <p className='text-slate-800 text-base leading-8'>
          Artist / Creator / Tattoos / Fine Art
        </p>
        <p className='text-slate-800 text-base leading-8'>
          Here, we'll add some biographical info
        </p>
      </div>
    </div>
  )
}

export default BioSection
