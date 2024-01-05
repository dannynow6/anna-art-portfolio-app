'use client'
import React, { useState } from 'react'

const ContactSelect = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = e => {
    setSelectedOption(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <>
      <div className='text-slate-600'>
        <fieldset className='flex space-x-4 ml-8 mt-5'>
          <p className='font-semibold text-sky-700'>Contact Type:</p>
          <div>
            <input
              type='radio'
              id='pyrography'
              name='contact-type'
              value='pyrography'
              onChange={handleChange}
              className='accent-sky-600'
            />
            <label className='pl-1' for='pyrography'>
              Pyrography
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='painting'
              name='contact-type'
              value='painting'
              onChange={handleChange}
              className='accent-sky-600'
            />
            <label className='pl-1' for='painting'>
              Painting
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='tattoo'
              name='contact-type'
              value='tattoo'
              onChange={handleChange}
              className='accent-sky-600'
            />
            <label className='pl-1' for='tattoo'>
              Tattoo
            </label>
          </div>
          <div>
            <input
              type='radio'
              id='other'
              name='contact-type'
              value='other'
              onChange={handleChange}
              className='accent-sky-600'
            />
            <label className='pl-1' for='other'>
              Other
            </label>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default ContactSelect
