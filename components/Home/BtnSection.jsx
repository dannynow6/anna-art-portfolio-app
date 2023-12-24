import React from 'react'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const BtnSection = () => {
  return (
    <div className='flex flex-row justify-around rounded my-2 font-sans text-xs bg-gradient-to-b from-teal-200 via-sky-400 to-white p-2.5'>
      <button className='box-border h-14 w-20 rounded-r-lg bg-slate-500 hover:bg-amber-800 hover:font-bold text-white'>
        Wood Burning
      </button>
      <button className='box-border h-14 w-20 p-1 rounded-lg mx-1 bg-slate-500 hover:bg-cyan-800 hover:font-bold text-white'>
        Oil Painting
      </button>
      <button className='box-border h-14 w-20 px-2 py-2 rounded-lg mx-1 bg-slate-500 hover:bg-slate-900 hover:font-bold text-white'>
        Tattoos
      </button>
      <div className='flex justify-between my-1.5'>
        <Link
          href='https://www.facebook.com/'
          target='_blank'
          className='hover:font-semibold hover:text-white'
        >
          <FaFacebook className='text-5xl pr-2 hover:text-amber-700' />
        </Link>
        <Link
          href='https://www.instagram.com/'
          target='_blank'
          className='hover:font-semibold hover:text-white'
        >
          <FaInstagram className='text-5xl pl-2 hover:text-amber-700' />
        </Link>
      </div>
      <button className='box-border h-14 w-20 px-2 py-2 rounded-lg mx-1 bg-slate-500 hover:bg-slate-800 hover:font-bold text-white'>
        <Link href='/about'>About</Link>
      </button>
      <button className='box-border h-14 w-20 px-2 py-2 mx-1 rounded-l-lg bg-slate-500 hover:bg-slate-800 hover:font-bold text-white'>
        Contact
      </button>
    </div>
  )
}

export default BtnSection
