import React from 'react'
import Image from 'next/image'
import CouchImg from '../../assets/b-couch.jpg'

const ImgSection = () => {
  return (
    <>
      <h2 className='text-slate-400 font-semibold text-start ml-6 text-4xl my-2'>
        Featured
      </h2>

      <div className='flex justify-around'>
        <Image
          className='max-w-xl rounded-xl p-2'
          src={CouchImg}
          alt='example-wood-burning'
          layout='responsive'
          width={750}
          height={501}
        />
      </div>
    </>
  )
}

export default ImgSection
