import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendAnalysisChart } from "@/components/charts/trend-analysis-chart"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendSentimentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Trend & Sentiment Analyzer</h1>
      <p className="text-muted-foreground">Detect and explain destination interest levels and sentiment</p>

      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
          <TabsTrigger value="spikes">Trend Spikes</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Destination Interest Trends</CardTitle>
              <CardDescription>Interest level over time for top destinations</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendAnalysisChart />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>AI-generated insights on destination trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>Bali</Badge>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        Rising
                      </Badge>
                    </div>
                    <p className="text-sm">
                      Bali is showing a consistent upward trend with a 24% increase in search interest over the past 3
                      months. This is likely due to eased travel restrictions and increased flight capacity to the
                      region.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>Greece</Badge>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        Seasonal Peak
                      </Badge>
                    </div>
                    <p className="text-sm">
                      Greece is entering its seasonal peak with interest rising 18% month-over-month. The trend is
                      stronger than the same period last year, suggesting pent-up demand for Mediterranean destinations.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>Japan</Badge>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                        Fluctuating
                      </Badge>
                    </div>
                    <p className="text-sm">
                      Japan shows a fluctuating pattern with strong interest during cherry blossom season (March-April)
                      and autumn foliage (November). Current interest is 15% above baseline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Google Trends Data</CardTitle>
                <CardDescription>Search volume trends for travel-related terms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">"Bali vacation"</span>
                      <span className="text-sm text-green-600">+32%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">"Greek islands cruise"</span>
                      <span className="text-sm text-green-600">+28%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">"Japan cherry blossom tour"</span>
                      <span className="text-sm text-green-600">+45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">"Costa Rica adventure"</span>
                      <span className="text-sm text-green-600">+18%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-green-500" style={{ width: "55%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Analysis</CardTitle>
                <CardDescription>Positive/negative sentiment by destination</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bali</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-green-600">78%</span>
                        <span className="text-sm text-yellow-600">15%</span>
                        <span className="text-sm text-red-600">7%</span>
                      </div>
                    </div>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 bg-green-500" style={{ width: "78%" }}></div>
                      <div className="h-2 bg-yellow-500" style={{ width: "15%" }}></div>
                      <div className="h-2 bg-red-500" style={{ width: "7%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Greece</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-green-600">85%</span>
                        <span className="text-sm text-yellow-600">10%</span>
                        <span className="text-sm text-red-600">5%</span>
                      </div>
                    </div>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 bg-green-500" style={{ width: "85%" }}></div>
                      <div className="h-2 bg-yellow-500" style={{ width: "10%" }}></div>
                      <div className="h-2 bg-red-500" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Japan</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-green-600">82%</span>
                        <span className="text-sm text-yellow-600">12%</span>
                        <span className="text-sm text-red-600">6%</span>
                      </div>
                    </div>
                    <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-2 bg-green-500" style={{ width: "82%" }}></div>
                      <div className="h-2 bg-yellow-500" style={{ width: "12%" }}></div>
                      <div className="h-2 bg-red-500" style={{ width: "6%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sentiment Drivers</CardTitle>
                <CardDescription>Key factors influencing sentiment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>Bali</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600">+</span>
                        <span className="text-sm">Beautiful beaches and resorts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600">+</span>
                        <span className="text-sm">Cultural experiences and temples</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-red-600">-</span>
                        <span className="text-sm">Concerns about overcrowding</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge>Greece</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600">+</span>
                        <span className="text-sm">Stunning island views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-600">+</span>
                        <span className="text-sm">Food and hospitality</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-red-600">-</span>
                        <span className="text-sm">High prices during peak season</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="spikes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trend Spike Alert System</CardTitle>
              <CardDescription>Sudden increases in destination interest</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-900 dark:bg-yellow-950">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    >
                      Alert
                    </Badge>
                    <span className="font-medium">Significant spike detected for Japan</span>
                  </div>
                  <p className="mt-2 text-sm">
                    Interest in Japan has increased by 45% in the last 7 days, primarily driven by viral TikTok content
                    featuring cherry blossom season and recent currency fluctuations making travel more affordable.
                  </p>
                </div>

                <div className="rounded-md border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-green-500 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    >
                      Opportunity
                    </Badge>
                    <span className="font-medium">Emerging trend for Costa Rica</span>
                  </div>
                  <p className="mt-2 text-sm">
                    Costa Rica is showing early signs of increased interest (+18% over 14 days), with particular focus
                    on eco-tourism and adventure activities. This presents an opportunity to develop packages ahead of
                    competitors.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Recent Trend Spikes</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Maldives</span>
                        <Badge variant="outline" className="text-xs">
                          2 days ago
                        </Badge>
                      </div>
                      <span className="text-sm text-green-600">+32%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Portugal</span>
                        <Badge variant="outline" className="text-xs">
                          5 days ago
                        </Badge>
                      </div>
                      <span className="text-sm text-green-600">+28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Morocco</span>
                        <Badge variant="outline" className="text-xs">
                          1 week ago
                        </Badge>
                      </div>
                      <span className="text-sm text-green-600">+22%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
