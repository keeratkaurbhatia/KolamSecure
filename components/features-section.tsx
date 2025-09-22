import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Kambi Kolam Engine",
      description:
        "Advanced pattern generator converts certificate data into mathematically unique Kolam patterns using peer-reviewed geometry and cryptographic principles.",
      icon: "❉",
    },
    {
      title: "SHA-256 Integration",
      description:
        "Advanced steganography ties each certificate to cryptographic hashes, making documents tamper-proof and self-verifying artifacts.",
      icon: "❉",
    },
    {
      title: "Offline Verification",
      description:
        "Python-powered system with Flask, ReportLab, PIL, and matplotlib enables secure authentication without internet connectivity.",
      icon: "❉",
    },
    {
      title: "Cultural Security",
      description:
        "Blends 3000-year-old Indian art tradition with cutting-edge cryptography, creating a uniquely Indian approach to digital trust.",
      icon: "❉",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Revolutionary Security Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Comprehensive cryptographic solution that transforms traditional art into next-generation document security.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
