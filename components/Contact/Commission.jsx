'use client'
import React from 'react'

const Commission = ({ selectedOption }) => {
  return (
    <div className='md:container md:mx-auto'>
      <div className='flex justify-center mt-3'>
        <form className='text-slate-500 my-3'>
          {/* Always visible Form Fields */}
          <fieldset className='mb-3'>
            <input
              type='text'
              name='first-name'
              id='first-name'
              required
              minLength='2'
              maxLength='25'
              size='28'
              placeholder='First Name'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            />
          </fieldset>
          <fieldset className='mb-3'>
            <input
              type='text'
              name='last-name'
              id='last-name'
              required
              minLength='2'
              maxLength='25'
              size='28'
              placeholder='Last Name'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            />
          </fieldset>
          <fieldset className='mb-3'>
            <input
              type='email'
              name='email'
              id='email'
              required
              minLength='2'
              maxLength='25'
              size='28'
              placeholder='Email'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            />
          </fieldset>
          <fieldset className='mb-3'>
            <input
              type='tel'
              name='phone'
              id='phone'
              required
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              placeholder='Phone'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            />
          </fieldset>
          <fieldset className='mb-3'>
            <legend className='text-slate-600 font-semibold'>
              Contact Preference:
            </legend>
            <div>
              <input
                type='checkbox'
                name='by-email'
                id='by-email'
                className='accent-cyan-700'
              />
              <label
                htmlFor='by-email'
                className='pl-2 hover:font-semibold hover:text-cyan-700'
              >
                Email
              </label>
            </div>
            <div>
              <input
                type='checkbox'
                name='text-msg'
                id='text-msg'
                className='accent-cyan-700'
              />
              <label
                htmlFor='text-msg'
                className='pl-2 hover:font-semibold hover:text-cyan-700'
              >
                Text
              </label>
            </div>
          </fieldset>
          {/* Conditional fields based on selectedOption */}
          {selectedOption === 'pyrography' && (
            <>
              <fieldset className='mb-3'>
                <textarea
                  name='pyrography-request'
                  id='pyrography-request'
                  required
                  rows='3'
                  cols='31'
                  maxLength={400}
                  placeholder='Describe Pyrography Commission'
                  className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
                ></textarea>
              </fieldset>
              <fieldset className='mb-3'>
                <input
                  type='text'
                  name='size'
                  id='size'
                  required
                  minlength='2'
                  maxlength='25'
                  size='28'
                  placeholder='size of request'
                  className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
                />
              </fieldset>
            </>
          )}
          {selectedOption === 'painting' && (
            <>
              <fieldset className='mb-3'>
                <textarea
                  name='painting-request'
                  id='painting-request'
                  required
                  rows='3'
                  cols='31'
                  maxLength={400}
                  placeholder='Describe Painting Commission'
                  className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
                ></textarea>
              </fieldset>
            </>
          )}
          {selectedOption === 'tattoo' && (
            <>
              <fieldset className='mb-3'>
                <textarea
                  name='tattoo-request'
                  id='tattoo-request'
                  required
                  rows='3'
                  cols='31'
                  maxLength={400}
                  placeholder='Describe Tattoo Request'
                  className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
                ></textarea>
              </fieldset>
            </>
          )}
          {selectedOption === 'other' && (
            <fieldset className='mb-3'>
              <textarea
                name='comment'
                id='comment'
                required
                rows='3'
                cols='31'
                maxLength={400}
                placeholder='Comment or Question'
                className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
              ></textarea>
            </fieldset>
          )}
        </form>
      </div>
    </div>
  )
}

export default Commission
