// Page for Anna's Tattoos
import React from 'react'
import Layout from '@/components/Home/Layout'
import HeroSection from '@/components/Home/HeroSection'
import TCSection1 from '@/components/Tattoos/TCSection1'
import TCSection2 from '@/components/Tattoos/TCSection2'
import TCSection3 from '@/components/Tattoos/TCSection3'

const TattoosPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <TCSection1 />
        <TCSection2 />
        <TCSection3 />
      </Layout>
    </>
  )
}

export default TattoosPage
