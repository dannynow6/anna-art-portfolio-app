import React from 'react'
import Image from 'next/image'
import B2Image from '../../assets/b2.jpg'

const BioSection = () => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-sm rounded-lg overflow-hidden shadow-lg my-2'>
        <Image
          className='w-full'
          src={B2Image}
          alt='bio-image'
          layout='responsive'
          width={300}
          height={450}
        />
      </div>
    </div>
  )
}

export default BioSection
