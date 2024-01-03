// Page for Anna's Tattoos
import React from 'react'
import Layout from '@/components/Home/Layout'
import HeroSection from '@/components/Home/HeroSection'
import TCSection1 from '@/components/Tattoos/TCSection1'

const TattoosPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <TCSection1 />
      </Layout>
    </>
  )
}

export default TattoosPage
