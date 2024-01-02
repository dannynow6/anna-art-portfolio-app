// Home page for Anna's Portfolio

import HeroSection from '@/components/Home/HeroSection'
import Content1 from '@/components/Home/Content1'
// import BtnSection from '@/components/Home/BtnSection'
import Layout from '@/components/Home/Layout'

export default function Home () {
  return (
    <Layout>
      <main className='flex flex-col'>
        <HeroSection />
        <Content1 />
      </main>
    </Layout>
  )
}
