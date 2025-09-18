import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to begin your kolam journey?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Join thousands of artists who have discovered the beauty and mindfulness of kolam mandala art. Start
            creating today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8 py-3 text-base">
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-base bg-transparent">
              Explore Gallery
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Free trial available • Learn at your own pace • Cultural authenticity guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}
