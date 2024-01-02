'use client'
import React from 'react'
import Image from 'next/image'
import CouchImg from '../../assets/b-couch.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import WB1 from '../../assets/b1.jpg'
import WB2 from '../../assets/about.jpg'

// Make carousel images pulled from DB
// For now, map from list of image objects

const ImgSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <>
      <h2 className='text-slate-400 font-semibold text-start ml-6 text-4xl my-2'>
        Featured
      </h2>

      <div className='flex justify-around'>
        <div className='embla' ref={emblaRef}>
          <div className='embla_container'>
            <div className='embla_slide'>
              <Image
                className='rounded-lg'
                src={CouchImg}
                alt='example-pyrography'
                width={500}
                height={334}
              />
            </div>
            <div className='embla_slide'>
              <Image
                className='rounded-lg'
                src={WB1}
                alt='example-pyrography'
                width={500}
                height={334}
              />
            </div>
            <div className='embla_slide'>
              <Image
                className='rounded-lg'
                src={WB2}
                alt='example-pyrography'
                width={500}
                height={334}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImgSection
