import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import Contact from '../../assets/contact.png'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='flex flex-row w-full justify-center'>
        <h2 className='text-slate-50 font-sans text-6xl z-10'>
          Anna Bissinger
        </h2>
      </div>
      <div className='flex flex-row w-full'>
        <div className='flex justify-between'>
          <TfiMenu />
          <div className='flex justify-around'>
            <FaFacebook />
            <FaInstagram />
          </div>
          <button className='nav-btn'>
            <Link href='/contact'>
              <Image className='rounded' src={Contact} alt='contact-logo' />
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
