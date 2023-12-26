import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import Oil from '../../assets/OP.png'
import WoodB from '../../assets/WB.png'
import Tattoo from '../../assets/T.png'
import Contact from '../../assets/contact.png'
import Info from '../../assets/Info.png'

const BtnSection = () => {
  return (
    <div className='flex flex-row justify-around rounded my-2 font-sans text-xs bg-gradient-to-b from-slate-100 via-sky-100 to-white p-2.5'>
      <button className='box-border h-16 w-16 rounded mx-1 bg-slate-500 hover:bg-amber-800'>
        <Image className='rounded' src={WoodB} alt='Wood-Burning-Btn' />
      </button>
      <button className='box-border h-16 w-16 rounded mx-1 bg-slate-500 hover:bg-cyan-800 hover:font-bold text-white'>
        <Image className='rounded' src={Oil} alt='oil-painting-btn' />
      </button>
      <button className='box-border h-16 w-16 rounded mx-1 bg-slate-500 hover:bg-slate-900 hover:font-bold text-white'>
        <Image className='rounded' src={Tattoo} alt='tattoo-btn' />
      </button>
      <div className='flex justify-between my-1.5'>
        <Link
          href='https://www.facebook.com/'
          target='_blank'
          className='hover:font-semibold hover:text-white'
        >
          <FaFacebook className='text-4xl pr-2 hover:text-sky-700' />
        </Link>
        <Link
          href='https://www.instagram.com/'
          target='_blank'
          className='hover:font-semibold hover:text-white'
        >
          <FaInstagram className='text-4xl pl-2 hover:text-sky-700' />
        </Link>
      </div>
      <button className='box-border h-16 w-16 rounded mx-1 bg-slate-500 hover:bg-slate-800 hover:font-bold text-white'>
        <Link href='/about'>
          <Image className='rounded' src={Info} alt='info-logo' />
        </Link>
      </button>
      <button className='box-border h-16 w-16 mx-1 rounded bg-slate-500 hover:bg-slate-800 hover:font-bold text-white'>
        <Link href='/contact'>
          <Image className='rounded' src={Contact} alt='contact-logo' />
        </Link>
      </button>
    </div>
  )
}

export default BtnSection
