"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SecretBehindKolamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                The Secret Behind Kolam
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover how ancient Indian art meets modern cryptography through mathematical precision, 
                sacred geometry, and cutting-edge security technology.
              </p>
            </div>

            {/* 3D AR Kolam Section */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">
                    Experience Kolam in 3D AR
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Witness the magic of traditional Kolam patterns brought to life through 
                    Augmented Reality. Our 3D visualization technology allows you to see how 
                    these ancient geometric patterns exist in three-dimensional space, revealing 
                    hidden mathematical relationships and cryptographic properties.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Interactive 3D Models</h4>
                        <p className="text-sm text-muted-foreground">Rotate, zoom, and explore Kolam patterns from every angle</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">AR Visualization</h4>
                        <p className="text-sm text-muted-foreground">Project Kolam patterns into your real environment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Mathematical Analysis</h4>
                        <p className="text-sm text-muted-foreground">See the geometric principles and symmetries in action</p>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="mt-6">
                    Launch AR Experience
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border">
                    {/* AR Kolam Demo Image */}
                    <div className="relative w-full h-full">
                      <img
                        src="/ar-kolam-demo.jpeg"
                        alt="3D AR Kolam Pattern Visualization"
                        className="w-full h-full object-contain rounded-lg"
                      />
                      {/* AR UI Elements Overlay */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                          <span>View in 3D</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3D</span>
                        </div>
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">SD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-1 -right-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium justify-center flex items-center space-x-2 shadow-lg">
                    AR Enabled
                  </div>
                </div>
              </div>
            </section>

            {/* Mathematical Foundations */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Mathematical Foundations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Sacred Geometry</CardTitle>
                    <CardDescription>
                      Ancient mathematical principles encoded in art
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span>Golden ratio proportions in pattern construction</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span>Fibonacci sequences in dot arrangements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span>Fractal geometry and self-similarity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                        <span>Symmetry groups and transformations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Cryptographic Integration</CardTitle>
                    <CardDescription>
                      Modern security through traditional patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                        <span>SHA-256 hash mapping to geometric coordinates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                        <span>Pattern complexity scaling with data entropy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                        <span>Tamper detection through pattern verification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                        <span>Steganographic data embedding</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl">Cultural Significance</CardTitle>
                    <CardDescription>
                      Preserving heritage through technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                        <span>3000+ years of artistic tradition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                        <span>Regional variations across South India</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                        <span>Spiritual and mathematical symbolism</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></span>
                        <span>Digital preservation of cultural knowledge</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Technical Deep Dive */}
            <section className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Technical Implementation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Kolam cryptographic system combines traditional geometric principles 
                    with modern security algorithms to create a unique verification method 
                    that is both culturally meaningful and mathematically robust.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold">Pattern Generation Algorithm</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Certificate data is processed through SHA-256 hashing, then mapped to 
                        geometric coordinates using traditional Kolam construction rules.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-semibold">Verification Process</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Pattern integrity is verified by reconstructing the Kolam from certificate 
                        data and comparing against the embedded pattern.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Security Features</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Multiple layers of security including pattern complexity analysis, 
                        geometric validation, and cryptographic signature verification.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold mb-4">Algorithm Workflow</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <span>Extract certificate metadata</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span>Generate SHA-256 hash</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <span>Map hash to geometric parameters</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">4</div>
                        <span>Apply traditional Kolam rules</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">5</div>
                        <span>Generate unique pattern</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">6</div>
                        <span>Additional Steganographic layer, then embed in certificate</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border border-border">
                    <img
                      src="/intricate-geometric-kolam-pattern-with-mathematica.jpg"
                      alt="Mathematical Kolam Analysis"
                      className="w-full h-48 object-contain rounded-lg mb-4"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      Mathematical analysis of Kolam geometric properties
                    </p>
                  </div>
                </div>
              </div>
            </section>

            

            {/* Research & Development */}
            <section className="mb-20">
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Research & Development</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Research Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Pattern Variations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Regional Styles</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-border">
                <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Experience the fusion of ancient wisdom and modern technology. 
                  Start creating your own secure Kolam patterns today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/kolam-tool">
                    <Button size="lg" className="px-8">
                      Launch Kolam Generator
                    </Button>
                  </Link>
                  <Link href="/organisation-login">
                    <Button variant="outline" size="lg" className="px-8">
                      Get it to your Organisation
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}