{
  selectedOption === 'pyrography' && (
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
  )
}
{
  selectedOption === 'painting' && (
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
  )
}
{
  selectedOption === 'tattoo' && (
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
  )
}
{
  selectedOption === 'other' && (
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
  )
}

const ConditionalFields = ({ selectedOption }) => {
  switch (selectedOption) {
    case 'pyrography':
      return (
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
              minLength='2'
              maxLength='25'
              size='28'
              placeholder='size of request'
              className='p-1 text-slate-700 border border-sky-800 rounded hover:border-blue-300'
            />
          </fieldset>
        </>
      )

    case 'painting':
      return (
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
      )

    case 'tattoo':
      return (
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
      )

    case 'other':
      return (
        <>
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
        </>
      )

    default:
      return <></>
  }
}
