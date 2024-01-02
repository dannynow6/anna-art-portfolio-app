// About page for Anna's Portfolio
import React from 'react'
import BioSection from '@/components/About/BioSection'
import HeroSection from '@/components/Home/HeroSection'
import ImgSection from '@/components/About/ImgSection'
import Layout from '@/components/Home/Layout'

const AboutPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <BioSection />
        <ImgSection />
      </Layout>
    </>
  )
}

export default AboutPage
