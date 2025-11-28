"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MapPin, Calendar, Package, DollarSign } from "lucide-react"

export function DashboardActionButtons() {
  return (
    <div className="w-full bg-background border-b px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 h-auto py-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Where</div>
                  <div className="text-xs text-muted-foreground">Where do people want to go?</div>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-md">
              <p>Discover trending destinations based on social media, search trends, and booking patterns</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 h-auto py-2">
                <Calendar className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">When</div>
                  <div className="text-xs text-muted-foreground">Best time for value, weather & fewer crowds</div>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-md">
              <p>Find the optimal intersection of interest, off-peak pricing, favorable weather, and lower crowds</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 h-auto py-2">
                <Package className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">What</div>
                  <div className="text-xs text-muted-foreground">Compare package inclusions across vendors</div>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-md">
              <p>Apple-to-apples comparison of vendor packages, highlighting what's included vs. what's not</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 h-auto py-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <div className="font-medium">How Much</div>
                  <div className="text-xs text-muted-foreground">Best value pricing across vendors</div>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="max-w-md">
              <p>Compare pricing and value across different vendors and products to find the best deals</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
