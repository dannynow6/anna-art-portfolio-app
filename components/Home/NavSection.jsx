'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { IoMenuOutline } from 'react-icons/io5'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const NavSection = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='h-12 text-white w-full'>
        <div className='flex justify-between mx-3'>
          {/* working on dropdown menu and functionality */}
          <div className='relative bg-gray-950 bg-opacity-45 rounded-xl p-2.5'>
            <IoMenuOutline
              className='text-4xl hover:text-cyan-600 hover:cursor-pointer'
              onClick={toggleMenu}
            />
            {/* Dropdown Menu */}
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } absolute text-slate-100 pt-1 bg-gray-950 bg-opacity-65 rounded-lg`}
            >
              {pathname !== '/' && (
                <Link href='/' className='dropdown-nav'>
                  Home
                </Link>
              )}
              <Link href='/about' className='dropdown-nav'>
                About
              </Link>
              <Link href='/pyrography' className='dropdown-nav'>
                Pyrography
              </Link>
              <Link href='/painting' className='dropdown-nav'>
                Painting
              </Link>
              <Link href='/tattoos' className='dropdown-nav'>
                Tattoos
              </Link>
            </div>
          </div>
          <div className='flex justify-around bg-gray-950 bg-opacity-45 rounded-lg p-2'>
            <Link href='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='social-btn' />
            </Link>
            <Link href='https://www.instagram.com/' target='_blank'>
              <FaInstagram className='social-btn' />
            </Link>
          </div>
          <button className='h-14 w-14 rounded-lg grayscale bg-gray-950 bg-opacity-45 sm:h-6 sm:w-6 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-12 xl:w-12 hover:grayscale-0 hover:cursor-pointer'>
            <Link href='/contact'>
              <IoIosInformationCircleOutline className='social-btn' />
            </Link>
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavSection
