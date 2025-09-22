"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function IndividualLogin() {
  const [file, setFile] = useState<File | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationMode, setVerificationMode] = useState<'valid' | 'invalid'>('valid')
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [showAlert, setShowAlert] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
    }
  }

  const verifyCertificate = async () => {
    if (!file) return

    setIsVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      if (verificationMode === 'valid') {
        setVerificationResult({
          status: 'valid',
          name: 'Rajesh Kumar Sharma',
          course: 'Bachelor of Computer Science',
          institution: 'Indian Institute of Technology Delhi',
          certificateId: 'KLM-IIT-2024-001234',
          kolamStatus: 'Pattern verified successfully',
          kolamDetails: 'Cryptographic hash matches expected pattern'
        })
      } else {
        setVerificationResult({
          status: 'invalid',
          name: 'Rajesh Kumar Sharma',
          course: 'Bachelor of Computer Science',
          institution: 'Indian Institute of Technology Delhi',
          certificateId: 'KLM-IIT-2024-001234',
          kolamStatus: 'Pattern verification failed',
          kolamDetails: 'Kolam decoding shows: "X7#9@mK$2vN!8pQ&4wR" - Gibberish detected',
          issues: [
            'Kolam pattern does not match certificate data',
            'Cryptographic signature invalid',
            'Possible tampering detected'
          ]
        })
        setShowAlert(true)
      }
      setIsVerifying(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Individual Certificate Verification
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Upload your certificate to verify its authenticity using Kolam pattern analysis
              </p>
            </div>

            {/* Prototype Toggle (Subtle) */}
            <div className="mb-8 text-center">
              <div className="inline-flex rounded-lg border border-border p-1 bg-muted/50">
                <button
                  onClick={() => setVerificationMode('valid')}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    verificationMode === 'valid' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Valid Test
                </button>
                <button
                  onClick={() => setVerificationMode('invalid')}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    verificationMode === 'invalid' 
                      ? 'bg-red-100 text-red-800 border border-red-200' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Invalid Test
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Upload Certificate</CardTitle>
                  <CardDescription>
                    Upload your certificate to verify its authenticity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="certificate-upload">Certificate Document</Label>
                    <Input
                      id="certificate-upload"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                    />
                  </div>

                  <Button
                    onClick={verifyCertificate}
                    disabled={!file || isVerifying}
                    className="w-full"
                    size="lg"
                  >
                    {isVerifying ? "Verifying Certificate..." : "Verify Certificate"}
                  </Button>

                  {isVerifying && (
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                        Extracting certificate data...
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                        Analyzing Kolam pattern...
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                        Verifying cryptographic signature...
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Verification Results */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Verification Results</CardTitle>
                  <CardDescription>
                    Certificate authenticity and Kolam pattern analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {verificationResult ? (
                    <div className="space-y-6">
                      {/* Status Badge */}
                      <div className={`p-4 rounded-lg border ${
                        verificationResult.status === 'valid'
                          ? 'bg-green-50 border-green-200'
                          : 'bg-red-50 border-red-200'
                      }`}>
                        <div className={`font-medium ${
                          verificationResult.status === 'valid' ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {verificationResult.status === 'valid' ? '✓ Certificate Valid' : '✗ Certificate Invalid'}
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="space-y-3">
                        <h3 className="font-semibold">Certificate Details:</h3>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div><strong>Name:</strong> {verificationResult.name}</div>
                          <div><strong>Course:</strong> {verificationResult.course}</div>
                          <div><strong>Institution:</strong> {verificationResult.institution}</div>
                          <div><strong>Certificate ID:</strong> {verificationResult.certificateId}</div>
                        </div>
                      </div>

                      {/* Kolam Analysis */}
                      <div className="space-y-3">
                        <h3 className="font-semibold">Kolam Pattern Analysis:</h3>
                        <div className={`p-3 rounded-lg text-sm ${
                          verificationResult.status === 'valid'
                            ? 'bg-green-50 text-green-800'
                            : 'bg-red-50 text-red-800'
                        }`}>
                          <div className="font-medium">{verificationResult.kolamStatus}</div>
                          <div className="mt-1">{verificationResult.kolamDetails}</div>
                        </div>
                      </div>

                      {/* Issues (for invalid certificates) */}
                      {verificationResult.status === 'invalid' && verificationResult.issues && (
                        <div className="space-y-3">
                          <h3 className="font-semibold text-red-800">Issues Detected:</h3>
                          <ul className="space-y-1 text-sm text-red-700">
                            {verificationResult.issues.map((issue: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-2"></span>
                                {issue}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Upload a certificate to begin verification</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Alert for Invalid Certificates */}
            {showAlert && verificationResult?.status === 'invalid' && (
              <Alert className="mt-8 border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">
                  <div className="space-y-2">
                    <div className="font-medium">🚨 Certificate Fraud Detected</div>
                    <div>
                      A notification email has been sent to both you and {verificationResult.institution} 
                      regarding this invalid certificate. You have 30 days to provide corrections or 
                      clarifications, after which this certificate will be permanently marked as invalid 
                      in our system.
                    </div>
                    <div className="text-sm mt-3">
                      <strong>Reference ID:</strong> FRAUD-{Date.now()}
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}