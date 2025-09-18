import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "Startup",
      price: "₹50,000",
      period: "per month",
      description: "Perfect for small organizations and pilot programs",
      features: [
        "Up to 1,000 certificates/month",
        "Basic Kolam pattern generation",
        "SHA-256 cryptographic security",
        "Offline verification support",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      price: "₹2,50,000",
      period: "per month",
      description: "Ideal for large organizations and state departments",
      features: [
        "Up to 50,000 certificates/month",
        "Advanced pattern customization",
        "Multi-language support",
        "API integration",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      popular: true,
    },
    {
      name: "Government",
      price: "Custom",
      period: "pricing",
      description: "For national and state-level implementations",
      features: [
        "Unlimited certificate generation",
        "Custom Kolam pattern library",
        "Blockchain integration ready",
        "Zero-knowledge proof support",
        "On-premise deployment",
        "Training and consultation",
        "SLA guarantees",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Secure Your Documents at Scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose the right plan to protect your organization from document fraud. All plans include our revolutionary
            Kolam cryptographic technology.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className={`border-border bg-card relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-card-foreground">
                      <svg className="h-5 w-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                  {plan.name === "Government" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
