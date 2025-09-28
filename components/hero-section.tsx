import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-5xl text-balance">
                Tradition Secures Tomorrow
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
                {
                  "Fake certificates cost India billions every year. We transform 3000-year-old Kolam art into next-generation security protocol, converting certificate data into mathematically unique, tamper-proof patterns tied to SHA-256 cryptographic hashes."
                }
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link href="/secret-behind-kolam">
                  <Button size="lg" className="px-8 py-3 text-base">
                    Open Kolam Generator and Analyzer
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-border">
                <img
                  src="/traditional-indian-kolam-mandala-pattern-with-geom.jpg"
                  alt="Traditional Kolam pattern transformed into cryptographic security"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="absolute -bottom-10 -right-0 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
                Cryptographically Secured
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">400M+</div>
              <div className="text-sm text-muted-foreground">Indians in low connectivity areas supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Millions</div>
              <div className="text-sm text-muted-foreground">Fake certificates tackled annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Offline</div>
              <div className="text-sm text-muted-foreground">Multilingual verification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
