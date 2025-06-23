import React, { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
const AboutSection = lazy(() => import('../components/AboutSection'));
const TopDestinations = lazy(() => import('../components/TopDestinations'));
const BentoCard = lazy(() => import('../components/BentoCard'));
const Footer = lazy(() => import('../components/Footer'));
const MapSection = lazy(() => import('../components/MapSection'));


const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <TopDestinations />
        <AboutSection />
        <BentoCard />
        <MapSection />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Home