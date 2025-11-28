"use client"

import { Badge } from "@/components/ui/badge"

export function RecentScrapedData() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">TripAdvisor</span>
          <Badge variant="outline" className="border-green-500 text-green-600">
            Success
          </Badge>
        </div>
        <div className="text-xs text-muted-foreground">Last updated: 2 hours ago</div>
        <div className="text-xs">Scraped 120 reviews, 15 destinations</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Expedia</span>
          <Badge variant="outline" className="border-green-500 text-green-600">
            Success
          </Badge>
        </div>
        <div className="text-xs text-muted-foreground">Last updated: 4 hours ago</div>
        <div className="text-xs">Scraped 85 packages, 12 destinations</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Reddit Travel</span>
          <Badge variant="outline" className="border-green-500 text-green-600">
            Success
          </Badge>
        </div>
        <div className="text-xs text-muted-foreground">Last updated: 6 hours ago</div>
        <div className="text-xs">Scraped 200 posts, 18 destinations</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Viator</span>
          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
            Partial
          </Badge>
        </div>
        <div className="text-xs text-muted-foreground">Last updated: 8 hours ago</div>
        <div className="text-xs">Scraped 65 activities, 8 destinations</div>
      </div>
    </div>
  )
}
