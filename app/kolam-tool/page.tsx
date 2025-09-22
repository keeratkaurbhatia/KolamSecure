"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

function hashToNumber(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0
  }
  return h
}

// We no longer generate kolam SVGs in-page. Instead, allow users to preview
// clean kambi kolam images by pasting an online image URL. Defaults use the
// repository's public kolam images as fallbacks.

const examples = [
  {
    text: "அம்மா வாழ்த்து",
    lang: "Tamil",
    state: "Tamil Nadu",
    occasion: "Pongal / Daily ritual",
    complexity: "Medium",
    image: "/intricate-geometric-kolam-pattern-with-mathematica.jpg",
  },
  {
    text: "సుభాకాంక్షలు",
    lang: "Telugu",
    state: "Andhra Pradesh / Telangana",
    occasion: "Festivals",
    complexity: "High",
    image: "/traditional-indian-kolam-mandala-pattern-with-geom.jpg",
  },
  {
    text: "শুভ বার্তা",
    lang: "Bengali",
    state: "West Bengal",
    occasion: "Weddings",
    complexity: "Medium",
    image: "/360_F_458645723_0tf7qxfkw9CMHhhHVcyR2zqq08hWuJeA.jpg",
  },
  {
    text: "ಶುಭಾಶಯಗಳು",
    lang: "Kannada",
    state: "Karnataka",
    occasion: "Housewarming",
    complexity: "Low",
    image: "/Flower-Kolam93Color.jpg",
  },
  {
    text: "शुभेच्छा",
    lang: "Hindi",
    state: "Pan-Indian",
    occasion: "Festivals",
    complexity: "High",
    image: "/istockphoto-1385684394-612x612.jpg",
  },
]

export default function KolamToolPage() {
  const [input, setInput] = useState("Hello Kolam")
  const seed = useMemo(() => hashToNumber(input || ""), [input])

  // If the input looks like an url or an absolute path, show it as image preview
  const isImageUrl = (s: string) => {
    if (!s) return false
    return s.startsWith("http://") || s.startsWith("https://") || s.startsWith("/")
  }

  // previewSrc shows only after user clicks Generate
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)

  function chooseFallbackForText(text: string) {
    // deterministic fallback: pick one of the example images using seed
    const idx = hashToNumber(text || "") % examples.length
    return examples[idx].image || "/traditional-indian-kolam-mandala-pattern-with-geom.jpg"
  }

  function handleGenerate() {
    if (isImageUrl(input)) {
      setPreviewSrc(input)
      return
    }
    setPreviewSrc(chooseFallbackForText(input))
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Kolam Maker & Analyser</h1>
          <p className="text-muted-foreground mt-2">
            Type text below to see a kolam generated from the encoded data. This demo shows how we map compact inputs into geometry. The analyser provides example kolams with language mappings, likely state, occasion and complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
            <div className="md:col-span-2 space-y-4">
            <label className="block text-sm font-medium">Input text / image URL / encoded data</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              className="w-full rounded-md border p-3"
              placeholder="Type a short message"
            />

            <div className="flex items-center gap-3">
              <button onClick={handleGenerate} className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white">Generate</button>
              <button onClick={() => { setInput(''); setPreviewSrc(null) }} className="inline-flex items-center px-3 py-2 rounded-md border">Clear</button>
            </div>

            <div className="mt-2 text-sm text-muted-foreground">
              Click Generate to preview a kolam image based on your input.
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 flex flex-col items-center">
            {previewSrc ? (
              <img src={previewSrc} alt="Kolam preview" className="w-full h-auto rounded-md object-contain" />
            ) : (
              <div className="w-full h-48 flex items-center justify-center rounded-md bg-muted/10">
                <div className="text-sm text-muted-foreground">No preview yet — click Generate to show a kolam</div>
              </div>
            )}
            <div className="mt-3 text-sm text-muted-foreground">Kolam preview </div>
            <Link href="/" className="mt-3 text-xs text-primary underline">Back to home</Link>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What are Kolams?</h2>
          <p className="text-sm text-muted-foreground">
            Kolams are intricate line-based floor drawings traditionally created by women in South India. They combine geometry, symmetry and repetition — often drawn daily using rice flour. Beyond their aesthetic beauty, kolams encode cultural meaning and sometimes act as mnemonic or cryptographic representations.
          </p>

          <h3 className="mt-4 font-medium">Our vision</h3>
          <p className="text-sm text-muted-foreground">
            We aim to preserve and modernize kolam design by providing tools that translate digital data into traditional geometry. By combining mathematical rules with cultural context, we create verifiable, beautiful patterns that respect tradition while enabling new applications.
          </p>

          <h3 className="mt-4 font-medium">Mathematics & design</h3>
          <p className="text-sm text-muted-foreground">
            The underlying mathematics leverages symmetry groups, lattice point mapping, and controlled randomness to ensure both variety and reproducibility. Complexity metrics help balance visual richness with legibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Analyser — Example Kolams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex, i) => {
              const src = ex.image || "/traditional-indian-kolam-mandala-pattern-with-geom.jpg"
              return (
                <div key={i} className="border border-border rounded-lg p-4 bg-card">
                  <div className="w-full flex justify-center mb-3">
                    <img src={src} alt={`${ex.lang} kolam`} className="rounded-md object-contain w-48 h-48" />
                  </div>
                  <div className="text-sm font-medium">{ex.lang} — {ex.state}</div>
                  <div className="text-xs text-muted-foreground">Text: {ex.text}</div>
                  <div className="mt-2 text-xs">
                    <div><strong>Occasion:</strong> {ex.occasion}</div>
                    <div><strong>Complexity:</strong> {ex.complexity}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </div>
  )
}
