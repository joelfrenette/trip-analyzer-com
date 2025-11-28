import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentScrapedData } from "@/components/recent-scraped-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function WebScraperPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Web Scraper Engine</h1>
      <p className="text-muted-foreground">Configure and monitor web scraping activities across travel sites</p>

      <Tabs defaultValue="status" className="space-y-4">
        <TabsList>
          <TabsTrigger value="status">Status</TabsTrigger>
          <TabsTrigger value="configure">Configure</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>

        <TabsContent value="status" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Scraping Activity</CardTitle>
                <CardDescription>Latest data collection from travel sites</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentScrapedData />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scraping Statistics</CardTitle>
                <CardDescription>Overview of scraping performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Total Sites Scraped</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Success Rate</span>
                    <span className="text-sm font-medium text-green-600">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Points Collected</span>
                    <span className="text-sm font-medium">4,328</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Last Full Run</span>
                    <span className="text-sm font-medium">2 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage scraping operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button>Run Full Scrape</Button>
                  <Button variant="outline">Scrape Single Site</Button>
                  <Button variant="outline">View Raw Data</Button>
                  <Button variant="outline">Export Data</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="configure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configure Scraper Sources</CardTitle>
              <CardDescription>Add or modify websites to scrape</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="site-url">Site URL</Label>
                    <Input id="site-url" placeholder="https://example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-category">Category</Label>
                    <Input id="site-category" placeholder="OTA, Review, Forum" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="selectors">CSS Selectors (JSON)</Label>
                  <Input id="selectors" placeholder='{"price": ".price-class", "title": ".title-class"}' />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Scraping Frequency</Label>
                  <Input id="frequency" placeholder="Daily, Hourly, Weekly" />
                </div>
                <div className="flex justify-end">
                  <Button>Add Source</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scraping Schedule</CardTitle>
              <CardDescription>Configure when scraping jobs run</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>TripAdvisor</Label>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Every 6 hours" />
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Expedia</Label>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Daily at 2:00 AM" />
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Reddit Travel</Label>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Every 12 hours" />
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Viator</Label>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Daily at 4:00 AM" />
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scraped Data Preview</CardTitle>
              <CardDescription>View and export collected data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="p-4">
                    <pre className="text-xs overflow-auto max-h-[300px]">
                      {JSON.stringify(
                        {
                          source: "TripAdvisor",
                          timestamp: "2023-04-12T14:32:00Z",
                          data: [
                            {
                              destination: "Bali, Indonesia",
                              rating: 4.5,
                              reviewCount: 12453,
                              priceRange: "$80-$500 per night",
                              popularActivities: ["Beach", "Temples", "Surfing"],
                              sentiment: {
                                positive: 0.78,
                                neutral: 0.15,
                                negative: 0.07,
                              },
                            },
                            {
                              destination: "Santorini, Greece",
                              rating: 4.7,
                              reviewCount: 9876,
                              priceRange: "$120-$800 per night",
                              popularActivities: ["Sunset Views", "Wine Tours", "Beaches"],
                              sentiment: {
                                positive: 0.85,
                                neutral: 0.1,
                                negative: 0.05,
                              },
                            },
                          ],
                        },
                        null,
                        2,
                      )}
                    </pre>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Export CSV</Button>
                  <Button variant="outline">Export JSON</Button>
                  <Button>Process Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
