import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Shield, LineChart, BarChart3, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <Link href="https://tripanalyzer.vercel.app" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">TRIP-ANALYZER.COM</span>
        </Link>
        <Link href="/login">
          <Button>Admin Login</Button>
        </Link>
      </header>

      {/* Rest of the component remains unchanged */}
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8">
        <section className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">TRIP-ANALYZER.COM</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatically scrape and analyze travel packages from major websites. Identify the most profitable
            opportunities and maximize your success with data-driven package selection.
          </p>
          <div className="mt-10">
            <Link href="/login">
              <Button size="lg" className="px-8">
                Access Dashboard
              </Button>
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">How We Help You Pick Winners</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Identify Trending Destinations</CardTitle>
                <CardDescription>Discover hot destinations before they become mainstream</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Real-time trend analysis from multiple data sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Social media sentiment tracking across platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Early detection of emerging destination interest</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Automated Package Scraping & Analysis</CardTitle>
                <CardDescription>Scrape and compare packages from major travel websites automatically</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Auto-scrape from Expedia, TripAdvisor, Viator, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Side-by-side comparison of hundreds of packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Identify which packages have the highest success potential</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Minimize Risk</CardTitle>
                <CardDescription>Negotiate win-win contracts with minimal downside</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Risk assessment for political and economic factors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Contract clause recommendations for better terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Seasonality analysis to avoid peak pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Automated Package Intelligence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform continuously scrapes travel packages from major websites, giving you instant access to
              comprehensive market intelligence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Multi-Source Scraping</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatically collect packages from Expedia, Booking.com, TripAdvisor, Viator, and 20+ other major
                travel platforms.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Smart Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered analysis identifies which packages align with current trends, offer the best margins, and
                have the highest success probability.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">Maximize Success</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Focus your marketing efforts on packages with proven demand, optimal timing, and competitive pricing—all
                backed by real-time data.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Make Data-Driven Decisions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform combines web scraping, AI analysis, and market intelligence to help you:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Scrape & Analyze Packages</p>
                    <p className="text-muted-foreground">
                      Automatically collect and analyze packages from 20+ major travel sites
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Spot Market Opportunities</p>
                    <p className="text-muted-foreground">Identify underserved destinations with growing demand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Negotiate Better Contracts</p>
                    <p className="text-muted-foreground">Get AI-powered insights on contract terms and clauses</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <div className="aspect-video rounded-md bg-background shadow-sm flex items-center justify-center">
                <div className="text-center p-6">
                  <LineChart className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Dashboard Preview</h3>
                  <p className="text-muted-foreground">
                    Access 30+ specialized modules for comprehensive travel market analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Travel Business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our platform is designed exclusively for travel agency administrators looking to make smarter, more
            profitable decisions for the next two years.
          </p>
          <Link href="/login">
            <Button size="lg" className="px-8">
              Access Admin Dashboard
            </Button>
          </Link>
        </section>
      </main>

      <footer className="border-t py-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2023 Travel Package Intelligence Platform. All rights reserved.</p>
          <p className="mt-1">For authorized travel agency administrators only.</p>
        </div>
      </footer>
    </div>
  )
}
