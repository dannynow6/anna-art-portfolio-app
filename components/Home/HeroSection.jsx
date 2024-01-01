// Make a nav component to use with all hero sections for each page

// import Image from 'next/image'
import React from 'react'
import NavSection from './NavSection'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='flex w-full justify-center'>
        <h2 className='text-slate-50 font-sans py-2 px-1.5 text-6xl mt-6 z-10 rounded-lg max-h-28 bg-slate-50 bg-opacity-15 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl'>
          Anna Saveria
        </h2>
      </div>
      <NavSection />
    </div>
  )
}

export default HeroSection
