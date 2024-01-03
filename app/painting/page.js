// Page for Anna's Painting
import React from 'react'
import Layout from '@/components/Home/Layout'
import HeroSection from '@/components/Home/HeroSection'
import OPCSection1 from '@/components/OilPainting/OPCSection1'

const PaintingPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <OPCSection1 />
      </Layout>
    </>
  )
}

export default PaintingPage
