// Make a nav component to use with all hero sections for each page

// import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='flex flex-row w-full justify-center'>
        <h2 className='text-slate-50 font-sans text-6xl z-10'>
          Anna Bissinger
        </h2>
      </div>
    </div>
  )
}

export default HeroSection
