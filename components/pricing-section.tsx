import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  const plans = [
    {
      name: "For Educational Institutions",
      price: "",
      period: "",
      description: "Securing Academic Credentials",
      features: [
        "Degrees, Diplomas, and Mark Sheets",
        "Tamper-Proof Digital Credentials",
        "SHA-256 Cryptographic Integrity",
        "Instant Online & Offline Verification",
        "Guided Onboarding Support",
      ],
      popular: false,
      buttonText: "Request a Demo",
    },
    {
      name: "For State & Public Sector",
      price: "",
      period: "",
      description: "Departmental & State-Level Deployments",
      features: [
        
        "Licenses, Permits, and Official Records",
        "Custom Kolam Patterns for Departmental Identity",
        "Support for All Regional Languages",
        "Seamless Integration with Existing Digital Infrastructure",
    
      ],
      popular: true,
      buttonText: "Explore Solutions",
    },
    {
      name: "For National Initiatives",
      price: "",
      period: "",
      description: "Strategic e-Governance Projects",
      features: [
        
        "Nation-Scale Document Issuance",
        
        "Secure On-Premise or Government Cloud Deployment",
        "Strategic Consultation and Comprehensive Training",
        "Guaranteed Performance with Service Level Agreements (SLAs)",
      ],
      popular: false,
      buttonText: "Initiate Consultation",
    },
  ]

  return (
    <section id="plans" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Empowering Governance with Verifiable Digital Trust
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
