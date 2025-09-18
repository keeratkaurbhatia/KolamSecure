import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This Kolam-based verification system has revolutionized our certificate authentication process. We've eliminated 95% of fraudulent documents in our education department.",
      author: "Dr. Rajesh Kumar",
      role: "Director of Education",
      company: "Tamil Nadu Government",
    },
    {
      quote:
        "The offline verification capability is game-changing for rural areas. Our health workers can now authenticate medical certificates without internet connectivity.",
      author: "Meera Nair",
      role: "Digital Health Initiative Lead",
      company: "Ministry of Health",
    },
    {
      quote:
        "Combining our cultural heritage with cutting-edge cryptography is brilliant. This sets a new global standard for document security that's uniquely Indian.",
      author: "Arjun Patel",
      role: "Chief Technology Officer",
      company: "National Informatics Centre",
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by Government and Enterprise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {
              "See how our Kolam cryptographic security is transforming document verification across India's most critical sectors."
            }
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="p-6">
                <blockquote className="text-card-foreground leading-relaxed">{`"${testimonial.quote}"`}</blockquote>
                <div className="mt-6">
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
