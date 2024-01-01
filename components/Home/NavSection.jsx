import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import { usePathname } from 'next/navigation'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { IoMenuOutline } from 'react-icons/io5'
import Contact from '../../assets/contact.png'

/*
    Work on Getting Dropdown menu working and functional - See below IoMenuOutline
*/

const NavSection = () => {
  //const pathname = usePathname()

  return (
    <>
      <nav className='rounded-lg h-12 bg-slate-50 bg-opacity-15 text-white w-full'>
        <div className='flex justify-between mx-3'>
          {/* working on dropdown menu and functionality */}
          <div className='relative'>
            <IoMenuOutline
              className='text-4xl mt-1.5 hover:text-cyan-600'
              id='nav-dropdown'
            />
          </div>
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
