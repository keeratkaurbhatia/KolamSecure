import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { VerificationDemo } from "@/components/verification-demo"
import { TestimonialsSection } from "@/components/testimonials-section"
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
        <VerificationDemo />
        <div className="section-divider"></div>
        <TestimonialsSection />
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
