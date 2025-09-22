import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="government-header text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">KolamSecure</h1>
              <p className="text-xs text-blue-100">Government of India Initiative</p>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Technology
              </a>
              <a
                href="#testimonials"
                className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#pricing"
                className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-blue-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-blue-100 hover:text-white hover:bg-blue-600">
              Sign In
            </Button>
            <Button className="government-button">Request Demo</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
