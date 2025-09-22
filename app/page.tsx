import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { LoginOptions } from "@/components/login-options"
import { KolamMathSection } from "@/components/kolam-math-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background mandala-bg">
      <Header />
      <main>
        <div className="hero-mandala">
          <HeroSection />
        </div>
        <div className="section-divider"></div>
        <div className="kolam-pattern">
          <FeaturesSection />
        </div>
        <div className="section-divider"></div>
        <LoginOptions />
        <div className="section-divider"></div>
        <KolamMathSection />
        <div className="section-divider"></div>
        <div className="kolam-pattern">
          <PricingSection />
        </div>
        <div className="section-divider"></div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
