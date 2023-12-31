// Page for Anna's Painting
import React from 'react'
import Layout from '@/components/Home/Layout'
import HeroSection from '@/components/Home/HeroSection'
import OPCSection1 from '@/components/OilPainting/OPCSection1'
import OPCSection2 from '@/components/OilPainting/OPCSection2'
import OPCSection3 from '@/components/OilPainting/OPCSection3'

const PaintingPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <OPCSection1 />
        <OPCSection2 />
        <OPCSection3 />
      </Layout>
    </>
  )
}

export default PaintingPage
