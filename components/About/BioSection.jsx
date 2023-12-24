import React from 'react'
import Image from 'next/image'
import AboutImage from '../../assets/about.jpg'

const BioSection = () => {
  return (
    <div className='flex justify-center my-4'>
      <div className='max-w-lg rounded-lg overflow-hidden shadow-lg my-2'>
        <Image
          className='w-full'
          src={AboutImage}
          alt='bio-image'
          layout='responsive'
          width={475}
          height={317}
        />
      </div>
      <div className='px-6 py-4'>
        <div className='flex justify-between'>
          <div className='font-bold text-xl mb-2'>About Anna</div>
        </div>
        <p className='text-gray-700 text-base'>
          Artist / Creator / Tattoos / Fine Art
        </p>
        <p className='text-slate-800 text-base'>
          Here, we'll add some biographical info
        </p>
      </div>
    </div>
  )
}

export default BioSection
