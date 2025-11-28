import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Package, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export function DashboardActionCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Where
          </CardTitle>
          <CardDescription>Where do people want to go?</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Analyze trending destinations based on social media activity, search trends, and historical booking
            patterns.
          </p>
          <Link href="/dashboard/research/trend-sentiment">
            <Button variant="outline" size="sm" className="w-full">
              View Destination Trends
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            When
          </CardTitle>
          <CardDescription>Best time for value, weather & fewer crowds</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Find the optimal intersection of travel interest, off-peak pricing, favorable weather conditions, and lower
            crowd levels.
          </p>
          <Link href="/dashboard/research/seasonality">
            <Button variant="outline" size="sm" className="w-full">
              Analyze Seasonality
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            What
          </CardTitle>
          <CardDescription>Compare package inclusions across vendors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Make apple-to-apples comparisons of vendor packages, highlighting what's included versus what's not
            included.
          </p>
          <Link href="/dashboard/research/competitor-pricing">
            <Button variant="outline" size="sm" className="w-full">
              Compare Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            How Much
          </CardTitle>
          <CardDescription>Best value pricing across vendors</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Compare pricing and overall value across different vendors and products to identify the best deals for your
            clients.
          </p>
          <Link href="/dashboard/profitability/estimator">
            <Button variant="outline" size="sm" className="w-full">
              Analyze Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
