'use client'
import React from 'react'

const ContactSelect = ({ onOptionChange }) => {
  const handleChange = e => {
    onOptionChange(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <>
      <div className='text-slate-600'>
        <div className='flex justify-center'>
          <fieldset className='flex space-x-4 ml-8 mt-5'>
            <p className='font-semibold text-cyan-700'>Contact Type:</p>
            <div>
              <input
                type='radio'
                id='pyrography'
                name='contact-type'
                value='pyrography'
                onChange={handleChange}
                className='accent-cyan-700'
              />
              <label className='pl-1' htmlFor='pyrography'>
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
                className='accent-cyan-700'
              />
              <label className='pl-1' htmlFor='painting'>
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
                className='accent-cyan-700'
              />
              <label className='pl-1' htmlFor='tattoo'>
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
                className='accent-cyan-700'
              />
              <label className='pl-1' htmlFor='other'>
                Other
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  )
}

export default ContactSelect
