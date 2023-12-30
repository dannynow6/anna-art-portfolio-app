// Home page for Anna's Portfolio

import HeroSection from '@/components/Home/HeroSection'
import Content1 from '@/components/Home/Content1'
import BtnSection from '@/components/Home/BtnSection'
import Footer from '@/components/Home/Footer'

export default function Home () {
  return (
    <main className='flex flex-col'>
      <HeroSection />
      <BtnSection />
      <Content1 />
      <Footer />
    </main>
  )
}
