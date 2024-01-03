// Page for Anna's Tattoos
import React from 'react'
import Layout from '@/components/Home/Layout'
import HeroSection from '@/components/Home/HeroSection'
import ContentSection1 from '@/components/Tattoos/ContentSection1'

const TattoosPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <ContentSection1 />
      </Layout>
    </>
  )
}

export default TattoosPage
