// About page for Anna's Portfolio
import React from 'react'
import BioSection from '@/components/About/BioSection'
import BtnSection from '@/components/Home/BtnSection'
import ImgSection from '@/components/About/ImgSection'
import Layout from '@/components/Home/Layout'

const AboutPage = () => {
  return (
    <>
      <Layout>
        <BtnSection />
        <BioSection />
        <ImgSection />
      </Layout>
    </>
  )
}

export default AboutPage
