"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrganisationLogin() {
  const [selectedInstitute, setSelectedInstitute] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [certificateData, setCertificateData] = useState<any>(null)
  const [kolamGenerated, setKolamGenerated] = useState(false)

  const institutes = [
    "Indian Institute of Technology Delhi",
    "Indian Institute of Technology Mumbai",
    "Indian Institute of Science Bangalore",
    "Jawaharlal Nehru University",
    "University of Delhi",
    "Anna University",
    "Banaras Hindu University",
    "Aligarh Muslim University"
  ]

  const handleLogin = () => {
    if (selectedInstitute && password) {
      // Simple authentication check
      if (password === "admin123") {
        setIsAuthenticated(true)
      } else {
        alert("Invalid password. Please try 'admin123' for demo purposes.")
      }
    } else {
      alert("Please select an institute and enter password")
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
    }
  }

  const processCertificate = async () => {
    if (!file) return

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      // Mock extracted data
      const mockData = {
        name: "Rajesh Kumar Sharma",
        course: "Bachelor of Computer Science",
        institution: selectedInstitute,
        graduationDate: "May 15, 2024",
        grade: "First Class with Distinction",
        registrationNumber: "IIT-CSE-2024-001234",
        certificateId: "KLM-IIT-2024-001234"
      }
      
      setCertificateData(mockData)
      setIsProcessing(false)
    }, 2000)
  }

  const generateKolam = async () => {
    setIsProcessing(true)
    
    // Simulate Kolam generation
    setTimeout(() => {
      setKolamGenerated(true)
      setIsProcessing(false)
    }, 3000)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Organisation Login
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Select your organisation and enter credentials
                </p>
              </div>

              <Card className="government-card">
                <CardHeader>
                  <CardTitle>Authentication Required</CardTitle>
                  <CardDescription>
                    Please select your organisation and provide authentication
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="institute-select">Select Organisation</Label>
                    <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your organisation" />
                      </SelectTrigger>
                      <SelectContent>
                        {institutes.map((institute) => (
                          <SelectItem key={institute} value={institute}>
                            {institute}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                    <p className="text-xs text-muted-foreground">
                      Demo password: admin123
                    </p>
                  </div>

                  <Button
                    onClick={handleLogin}
                    className="w-full government-button"
                    size="lg"
                  >
                    Login to Organisation Portal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Organisation Certificate Portal
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Welcome, {selectedInstitute}
              </p>
              <p className="text-sm text-muted-foreground">
                Upload certificates to generate secure Kolam cryptographic patterns
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card className="government-card">
                <CardHeader>
                  <CardTitle>Upload Certificate</CardTitle>
                  <CardDescription>
                    Upload a certificate document to extract details and generate Kolam pattern
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
                    onClick={processCertificate}
                    disabled={!file || isProcessing}
                    className="w-full government-button"
                    size="lg"
                  >
                    {isProcessing ? "Processing..." : "Extract Certificate Data"}
                  </Button>

                  {certificateData && (
                    <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold">Extracted Details:</h3>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div><strong>Name:</strong> {certificateData.name}</div>
                        <div><strong>Course:</strong> {certificateData.course}</div>
                        <div><strong>Institution:</strong> {certificateData.institution}</div>
                        <div><strong>Date:</strong> {certificateData.graduationDate}</div>
                        <div><strong>Grade:</strong> {certificateData.grade}</div>
                        <div><strong>Reg. No:</strong> {certificateData.registrationNumber}</div>
                        <div><strong>Certificate ID:</strong> {certificateData.certificateId}</div>
                      </div>
                      
                      <Button
                        onClick={generateKolam}
                        disabled={isProcessing}
                        className="w-full mt-4 government-button"
                      >
                        {isProcessing ? "Generating Kolam..." : "Generate Kolam Pattern"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Generated Certificate */}
              <Card className="government-card">
                <CardHeader>
                  <CardTitle>Secure Certificate</CardTitle>
                  <CardDescription>
                    Certificate with embedded Kolam cryptographic pattern
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {kolamGenerated && certificateData ? (
                    <div className="space-y-4">
                      <div className="border-2 border-primary/20 rounded-lg p-6 bg-white text-black relative">
                        {/* Kolam Pattern in Top Right Corner */}
                        <div className="absolute top-4 right-4 w-12 h-12 opacity-60">
                          <img
                            src="/traditional-indian-kolam-mandala-pattern-with-geom.jpg"
                            alt="Kolam security pattern"
                            className="w-full h-full object-contain rounded"
                          />
                        </div>
                        
                        <div className="text-center mb-6 pr-16">
                          <div className="flex items-center justify-center mb-2">
                            <div className="w-8 h-8 bg-blue-600 rounded mr-2"></div>
                            <h2 className="text-xl font-bold text-primary">Certificate of Graduation</h2>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{certificateData.institution}</p>
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <p>This is to certify that</p>
                          <p className="text-lg font-semibold text-center">{certificateData.name}</p>
                          <p>has successfully completed the course of</p>
                          <p className="font-semibold text-center">{certificateData.course}</p>
                          <p>with {certificateData.grade}</p>
                          <p>on {certificateData.graduationDate}</p>
                          
                          <div className="mt-6 pt-4 border-t border-gray-300">
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Reg. No: {certificateData.registrationNumber}</span>
                              <span>Cert. ID: {certificateData.certificateId}</span>
                            </div>
                            <div className="mt-2 text-xs text-blue-600">
                              <span>🔒 Secured with KolamSecure Technology</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Download PDF
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Share Certificate
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <svg className="mx-auto h-12 w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p>Upload and process a certificate to generate secure Kolam pattern</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}