"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function VerificationDemo() {
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<{
    status: "valid" | "invalid" | null
    details?: string
  }>({ status: null })

  const handleVerification = async () => {
    if (!certificateId.trim()) return

    setIsVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      const isValid = certificateId.length > 5 // Simple demo logic
      setVerificationResult({
        status: isValid ? "valid" : "invalid",
        details: isValid
          ? "Certificate verified successfully. Kolam pattern matches cryptographic hash."
          : "Invalid certificate. Pattern does not match expected cryptographic signature.",
      })
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Try Certificate Verification
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Experience our Kolam-powered verification system in action
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Verification Interface */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Verify Certificate</CardTitle>
                <CardDescription>
                  Enter a certificate ID to verify its authenticity using our Kolam cryptographic system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="certificate-id">Certificate ID</Label>
                  <Input
                    id="certificate-id"
                    placeholder="Enter certificate ID (e.g., KLM-2024-001234)"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                  />
                </div>

                <Button
                  onClick={handleVerification}
                  disabled={isVerifying || !certificateId.trim()}
                  className="w-full"
                  size="lg"
                >
                  {isVerifying ? "Verifying..." : "Verify Certificate"}
                </Button>

                {verificationResult.status && (
                  <div
                    className={`p-4 rounded-lg border ${
                      verificationResult.status === "valid"
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-800"
                    }`}
                  >
                    <div className="font-medium">
                      {verificationResult.status === "valid" ? "✓ Valid Certificate" : "✗ Invalid Certificate"}
                    </div>
                    <div className="text-sm mt-1">{verificationResult.details}</div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Visual Demo */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Generated Kolam Pattern</CardTitle>
                  <CardDescription>Each certificate generates a unique mathematical pattern</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 border border-border">
                    <img
                      src="/intricate-geometric-kolam-pattern-with-mathematica.jpg"
                      alt="Generated Kolam pattern for certificate verification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  Download Sample
                </Button>
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  API Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
