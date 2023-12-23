import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'; 

const BtnSection = () => {
  return (
    <div className='flex flex-row justify-around my-2 font-sans'>
      <button className='box-border h-14 w-20 px-2 py-2 rounded-r-lg mx-1 bg-slate-500 hover:bg-amber-800 hover:font-bold text-white'>
        Wood Burning
      </button>
      <button className='box-border h-14 w-20 px-2 py-2 rounded-lg mx-1 bg-slate-500 hover:bg-cyan-800 hover:font-bold text-white'>
        Oil Painting
      </button>
      <button className='box-border h-14 w-20 px-2 py-2 rounded-lg mx-1 bg-slate-500 hover:bg-slate-900 hover:font-bold text-white'>
        Tattoos
      </button>
      <div className='flex justify-between my-1.5'>
        <FaFacebook className='text-5xl pr-2 hover:text-sky-400' />
        <FaInstagram className='text-5xl pl-2 hover:text-sky-400' />
      </div>
      <button className='box-border h-14 w-20 px-2 py-2 rounded-lg mx-1 bg-slate-500 hover:bg-slate-800 hover:font-bold text-white'>
        About
      </button>
      <button className='box-border h-14 w-20 px-2 py-2 mx-1 rounded-l-lg bg-slate-500 hover:bg-slate-800 hover:font-bold text-white'>
        Contact
      </button>
    </div>
  )
}

export default BtnSection
