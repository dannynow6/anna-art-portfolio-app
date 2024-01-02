'use client'
import React from 'react'
import Image from 'next/image'
import CouchImg from '../../assets/b-couch.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import WB1 from '../../assets/b1.jpg'
import WB2 from '../../assets/about.jpg'

const featured = [
  {
    id: 1,
    image: CouchImg,
    title: 'Pyrography Anime Couch'
  },
  {
    id: 2,
    image: WB1,
    title: 'Pyrography Anime Example 1'
  },
  {
    id: 3,
    image: WB2,
    title: 'Pyrography Anime Example 2'
  }
]

const ImgSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500 })
  ])

  return (
    <>
      <h2 className='text-slate-400 font-semibold text-start ml-6 text-4xl my-2'>
        Featured
      </h2>

      <div className='flex justify-around'>
        <div className='embla' ref={emblaRef}>
          <div className='embla_container'>
            {featured.map(feature => (
              <div className='embla_slide' key={feature.id}>
                <Image
                  className='rounded-lg'
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={334}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ImgSection
