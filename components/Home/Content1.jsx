import React from 'react'
import Image from 'next/image'
import WBImage from '../../assets/wb-1.jpg'
import WB2 from '../../assets/b2.jpg'
import WB3 from '../../assets/b1.jpg'

const Content1 = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center my-1.5'>
        {/* Container for Image and Text */}
        <div className='flex flex-row items-center justify-center space-x-4'>
          <div className='w-1/2'>
            <Image
              className='rounded-lg ml-3'
              src={WBImage}
              alt='Image of Wood Burning'
              width={350}
              height={700}
            />
          </div>
          <div className='w-1/2 text-left'>
            <h2 className='text-2xl font-bold mb-4'>Project Title</h2>
            <p>
              This is the block of text that will be displayed on the right
              side. Customize the text, font size, and other styles as needed
              using Tailwind's utility classes.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center my-1.5'>
        <div className='w-1/2 text-right'>
          <h2 className='text-2xl font-bold mb-4'>Project 2 Title</h2>
          <p>
            This is the block of text that will be displayed on the right side.
            Customize the text, font size, and other styles as needed using
            Tailwind's utility classes.
          </p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-4'>
          <div className='w-1/2'>
            <Image
              className='rounded-lg mr-3'
              src={WB2}
              alt='Image 2 of Wood Burning'
              width={500}
              height={700}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Content1
