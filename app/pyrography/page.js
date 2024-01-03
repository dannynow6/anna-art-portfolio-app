// Page for showcasing Anna Pyrography Projects
import React from 'react'
import Layout from '@/components/Home/Layout'
import HeroSection from '@/components/Home/HeroSection'
import PCSection1 from '@/components/WoodBurning/PCSection1'
import PCSection2 from '@/components/WoodBurning/PCSection2'

const PyrographyPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <PCSection1 />
        <PCSection2 />
      </Layout>
    </>
  )
}

export default PyrographyPage
