'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
//import { FaHome } from 'react-icons/fa'
import Oil from '../../assets/OP.png'
import WoodB from '../../assets/WB.png'
import Tattoo from '../../assets/T.png'
import Contact from '../../assets/contact.png'
import Info from '../../assets/Info.png'
import Home from '../../assets/home-icon.png'

const BtnSection = () => {
  const pathname = usePathname()
  return (
    <div className='flex flex-row justify-between rounded my-1 mx-2 font-sans text-xs bg-gradient-to-b from-slate-100 via-sky-100 to-slate-100 p-2.5'>
      <div className='flex justify-between'>
        {/* Conditionally render link to Home if pathname !== '/' */}
        {pathname !== '/' && (
          <Link href='/'>
            <Image className='nav-btn' src={Home} alt='home-icon' />
          </Link>
        )}
        <button className='nav-btn'>
          <Image className='rounded' src={WoodB} alt='Wood-Burning-Btn' />
        </button>
        <button className='nav-btn'>
          <Image className='rounded' src={Oil} alt='oil-painting-btn' />
        </button>
        <button className='nav-btn'>
          <Image className='rounded' src={Tattoo} alt='tattoo-btn' />
        </button>
        <button className='nav-btn'>
          <Link href='/about'>
            <Image className='rounded' src={Info} alt='info-logo' />
          </Link>
        </button>
        <button className='nav-btn'>
          <Link href='/contact'>
            <Image className='rounded' src={Contact} alt='contact-logo' />
          </Link>
        </button>
      </div>

      <div className='flex justify-between my-1.5'>
        <Link
          href='https://www.facebook.com/'
          target='_blank'
          className='hover:font-semibold hover:text-white'
        >
          <FaFacebook className='social-btn' />
        </Link>
        <Link
          href='https://www.instagram.com/'
          target='_blank'
          className='hover:font-semibold hover:text-white'
        >
          <FaInstagram className='social-btn' />
        </Link>
      </div>
    </div>
  )
}

export default BtnSection
