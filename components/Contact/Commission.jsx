import React from 'react'

const Commission = () => {
  return (
    <div className='md:container md:mx-auto'>
      <div className='flex justify-center'>
        <form className='text-slate-500 my-3'>
          <fieldset className='mb-3'>
            <input
              type='text'
              name='first-name'
              id='first-name'
              required
              minlength='2'
              maxlength='25'
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
              minlength='2'
              maxlength='25'
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
              minlength='2'
              maxlength='25'
              size='28'
              placeholder='Email'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            />
          </fieldset>
          <fieldset className='mb-3'>
            <textarea
              name='comment'
              id='comment'
              required
              rows='3'
              cols='31'
              maxLength={400}
              placeholder='Comment or Message'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            ></textarea>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Commission
