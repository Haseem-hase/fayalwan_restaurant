import React from 'react'
import MenuCarousel from '@/components/MenuCarousel'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Header />
      <MenuCarousel />
      <Footer />
    </main>
  )
}

export default page