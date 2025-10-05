"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import InvestmentsShowcase from "@/components/investments-showcase"

export default function ShaderShowcase() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <InvestmentsShowcase />
      <PulsingCircle />
    </ShaderBackground>
  )
}
