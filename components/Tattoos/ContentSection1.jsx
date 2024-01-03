import React from 'react'
import Image from 'next/image'
import Ink from '../../assets/ink.jpg'

const ImgStyle = {
  height: 'auto'
}

const ContentSection1 = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center m-2.5'>
        {/* Container for Image and Text */}
        <div className='flex flex-row items-center justify-center space-x-4 mt-3'>
          <div className='w-1/2'>
            <Image
              className='rounded-lg ml-3'
              src={Ink}
              alt='Tattoo Ink'
              width={500}
              height={334}
              style={ImgStyle}
            />
          </div>
          <div className='w-1/2 text-left'>
            <h2 className='text-2xl font-bold mb-4'>
              Creating a Tattoo Design
            </h2>
            <p>
              Here you can add some information relating to whatever this
              section will focus on. Maybe the process of tattooing or
              something.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSection1
