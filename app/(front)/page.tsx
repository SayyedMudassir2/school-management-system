import { DashboardPreview } from '@/components/frontend/dashboard-preview'
import { GridFeatures } from '@/components/frontend/grid-features'
import HeroSection from '@/components/frontend/hero-section'
import LogoMarquee from '@/components/frontend/logo-marquee'
import React from 'react'

export default function Home() {
  return (
    <>
    <HeroSection />
    <LogoMarquee />
    <DashboardPreview />
    <GridFeatures />
    </>
  )
}
