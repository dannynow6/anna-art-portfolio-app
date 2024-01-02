'use client'
import React from 'react'
import NavSection from './NavSection'
import { usePathname } from 'next/navigation'

const HeroSection = () => {
  const pathname = usePathname()
  return (
    <div className='hero-section'>
      <div className='flex w-full justify-center'>
        {pathname === '/' && <h2 className='page-title'>Anna Saveria</h2>}
        {pathname === '/about' && <h2 className='page-title'>About Anna</h2>}
        {pathname === '/contact' && (
          <h2 className='page-title'>Contact Anna</h2>
        )}
        {pathname === '/oil-painting' && (
          <h2 className='page-title'>Painting</h2>
        )}
        {pathname === '/wood-burning' && (
          <h2 className='page-title'>Pyrography</h2>
        )}
        {pathname === '/tattoos' && <h2 className='page-title'>Tattoos</h2>}
      </div>
      <NavSection />
    </div>
  )
}

export default HeroSection
