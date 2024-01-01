import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { TBMenu2 } from 'react-icons/tb'

/*
    Create reusable Nav Section to be included in Hero section for each page of 
    Anna's Portfolio Site 
    - Left hand side: Hamburger Menu to access dropdown for main site navigation 
        - (Home, Pyrography, Painting, Tattoos, About)
    - Center: Social Icons to access Anna's Social Media (Facebook/Instagram) 
    - Right Hand Side: Contact icon to access Contact Page 
*/

const NavSection = () => {
  const pathname = usePathname()

  return (
    <>
      <div className='flex justify-between'></div>
    </>
  )
}

export default NavSection
