// import Image from "next/image";
import React from 'react'
// import { FaInstagram } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <h2 className='text-slate-50 font-sans text-6xl self-start inline-block align-text-top z-10'>
        Anna Bissinger
      </h2>
      <div className='min-w-full h-20 flex justify-around'>
        <button className='box-border h-14 w-20 px-2 py-2 rounded-xl mx-1 bg-slate-100 text-slate-500 hover:bg-slate-800 text-white'>
          A button
        </button>
      </div>
    </div>
  )
}

export default HeroSection
