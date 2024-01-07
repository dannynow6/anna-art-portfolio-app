import React from 'react'
import Image from 'next/image'
import Anna from '../../assets/anna-pic.jpg'

const ImgStyle = {
  maxHeight: '750px',
  maxWidth: '500px'
}

const TCSection3 = () => {
  return (
    <>
      <div className='flex flex-row items-center justify-center m-2.5 text-slate-500'>
        <div className='w-1/2 text-right'>
          <h2 className='text-2xl font-semibold mb-4'>Section Title</h2>
          <p className='leading-7'>
            This is the block of text that will be displayed on the right side.
            Customize the text, font size, and other styles as needed using
            Tailwind's utility classes.
          </p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-4'>
          <div className='w-1/2'>
            <Image
              className='rounded-lg mr-3'
              src={Anna}
              alt='Picture of Anna from Tattoo Convention'
              width={425}
              style={ImgStyle}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default TCSection3
