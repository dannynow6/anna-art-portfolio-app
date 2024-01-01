import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import { usePathname } from 'next/navigation'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { IoMenuOutline } from 'react-icons/io5'
import Contact from '../../assets/contact.png'

/*
    Create reusable Nav Section to be included in Hero section for each page of 
    Anna's Portfolio Site 
    - Left hand side: Hamburger Menu to access dropdown for main site navigation 
        - (Home, Pyrography, Painting, Tattoos, About)
    - Center: Social Icons to access Anna's Social Media (Facebook/Instagram) 
    - Right Hand Side: Contact icon to access Contact Page 
*/

const NavSection = () => {
  //const pathname = usePathname()

  return (
    <>
      <nav className='rounded-lg h-12 bg-slate-50 bg-opacity-15 text-white w-full'>
        <div className='flex justify-between mx-3'>
          <IoMenuOutline className='text-4xl mt-1.5 hover:text-cyan-600' />
          <div className='flex justify-around'>
            <Link href='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='social-btn' />
            </Link>
            <Link href='https://www.instagram.com/' target='_blank'>
              <FaInstagram className='social-btn' />
            </Link>
          </div>
          <button className='nav-btn'>
            <Link href='/contact'>
              <Image className='rounded' src={Contact} alt='contact-logo' />
            </Link>
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavSection
