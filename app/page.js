// Home page for Anna's Portfolio

import HeroSection from '@/components/Home/HeroSection'
import BtnSection from '@/components/Home/BtnSection'
import Footer from '@/components/Home/Footer'

export default function Home () {
  return (
    <main className='flex flex-col'>
      <HeroSection />
      <BtnSection />
      <Footer />
    </main>
  )
}
