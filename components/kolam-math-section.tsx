"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function KolamCTA() {
  const router = useRouter()
  return (
    <Button onClick={() => router.push('/kolam-tool')} size="lg" className="px-8">
      See how we do it
    </Button>
  )
}

export function KolamMathSection() {
  return (
    <section id= "kolam-tool" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              The Secret Behind Kolam
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Discover how ancient Indian art meets modern cryptography
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Sacred Geometry</CardTitle>
                  <CardDescription>
                    Kolam patterns are based on mathematical principles of symmetry, fractals, and geometric progression
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span>Each pattern follows strict mathematical rules ensuring uniqueness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span>Geometric transformations create infinite variations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                      <span>Symmetry groups ensure pattern integrity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Cryptographic Integration</CardTitle>
                  <CardDescription>
                    How we transform certificate data into secure Kolam patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span>SHA-256 hash converted to geometric coordinates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span>Pattern complexity scales with data entropy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2"></span>
                      <span>Tamper detection through pattern verification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border border-border">
                <img
                  src="/intricate-geometric-kolam-pattern-with-mathematica.jpg"
                  alt="Mathematical Kolam pattern showing geometric principles"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              <div className="text-center">
                <div className="space-y-4">
                  <KolamCTA />
                  <div className="text-xs text-muted-foreground">
                    Interactive Kolam Generator & Analyzer
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Convert text into kolam geometry and explore mathematical patterns with our comprehensive tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}