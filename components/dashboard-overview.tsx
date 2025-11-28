"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendAnalysisChart } from "@/components/charts/trend-analysis-chart"
import { ProfitabilityMatrix } from "@/components/charts/profitability-matrix"
import { AudienceInterestChart } from "@/components/charts/audience-interest-chart"
import { TripComparisonTable } from "@/components/trip-comparison-table"
import { RiskAnalysisGauge } from "@/components/charts/risk-analysis-gauge"
import { RecentScrapedData } from "@/components/recent-scraped-data"
import { TrendingDestinations } from "@/components/trending-destinations"

export function DashboardOverview() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="research">Research & Analysis</TabsTrigger>
        <TabsTrigger value="profitability">Profitability</TabsTrigger>
        <TabsTrigger value="audience">Audience Interest</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Trending Destinations</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 new destinations this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Profit Margin</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.3%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Audience Engagement</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+18.2%</div>
              <p className="text-xs text-muted-foreground">+4.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Assessment</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Low</div>
              <p className="text-xs text-muted-foreground">For top 5 destinations</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Trend Analysis</CardTitle>
              <CardDescription>Destination interest over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <TrendAnalysisChart />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Profitability Matrix</CardTitle>
              <CardDescription>Margin vs. Audience Interest</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfitabilityMatrix />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Trending Destinations</CardTitle>
              <CardDescription>Based on social media and search trends</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendingDestinations />
            </CardContent>
          </Card>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Trip Comparison</CardTitle>
              <CardDescription>Compare potential trip packages side by side</CardDescription>
            </CardHeader>
            <CardContent>
              <TripComparisonTable />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="research" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Web Scraper Status</CardTitle>
              <CardDescription>Latest data collection activity</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentScrapedData />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Risk Analysis</CardTitle>
              <CardDescription>Political, economic, and climate risks</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <RiskAnalysisGauge />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Seasonality Finder</CardTitle>
              <CardDescription>Off-peak opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Bali</span>
                  <span className="text-sm text-green-600">April-May</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Greece</span>
                  <span className="text-sm text-green-600">May, September</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Costa Rica</span>
                  <span className="text-sm text-green-600">May-June</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Japan</span>
                  <span className="text-sm text-green-600">Late Nov</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="profitability" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Margin & Profit Estimator</CardTitle>
              <CardDescription>Projected profitability by destination</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Maldives Luxury Package</span>
                    <span className="text-sm font-medium text-green-600">32%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "32%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">European River Cruise</span>
                    <span className="text-sm font-medium text-green-600">28%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "28%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Thailand Adventure</span>
                    <span className="text-sm font-medium text-green-600">24%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "24%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">African Safari</span>
                    <span className="text-sm font-medium text-green-600">22%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "22%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Marketing ROI Predictor</CardTitle>
              <CardDescription>Projected return on marketing investment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email Campaign</span>
                    <span className="text-sm font-medium text-green-600">420%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Social Media Ads</span>
                    <span className="text-sm font-medium text-green-600">280%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Content Marketing</span>
                    <span className="text-sm font-medium text-green-600">320%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Referral Program</span>
                    <span className="text-sm font-medium text-green-600">380%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="audience" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Audience Interest</CardTitle>
              <CardDescription>Interest by travel theme and demographic</CardDescription>
            </CardHeader>
            <CardContent>
              <AudienceInterestChart />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Social Listening</CardTitle>
              <CardDescription>Trending hashtags and mentions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">#SustainableTravel</span>
                  <span className="ml-auto text-sm text-muted-foreground">+24%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">#LuxuryEscape</span>
                  <span className="ml-auto text-sm text-muted-foreground">+18%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                  <span className="text-sm font-medium">#AdventureAwaits</span>
                  <span className="ml-auto text-sm text-muted-foreground">+15%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  <span className="text-sm font-medium">#FamilyVacation</span>
                  <span className="ml-auto text-sm text-muted-foreground">+12%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium">#DigitalNomad</span>
                  <span className="ml-auto text-sm text-muted-foreground">+28%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}
