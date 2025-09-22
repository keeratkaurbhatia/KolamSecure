import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { LoginOptions } from "@/components/login-options"
import { KolamMathSection } from "@/components/kolam-math-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div className="section-divider"></div>
        <FeaturesSection />
        <div className="section-divider"></div>
        <LoginOptions />
        <div className="section-divider"></div>
        <KolamMathSection />
        <div className="section-divider"></div>
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
