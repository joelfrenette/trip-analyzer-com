"use client"

import { TrendingUp, TrendingDown } from "lucide-react"

export function TrendingDestinations() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">Bali, Indonesia</span>
        </div>
        <span className="text-sm text-green-600">+24%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">Santorini, Greece</span>
        </div>
        <span className="text-sm text-green-600">+18%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">Kyoto, Japan</span>
        </div>
        <span className="text-sm text-green-600">+15%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingDown className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium">Barcelona, Spain</span>
        </div>
        <span className="text-sm text-red-600">-8%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium">Costa Rica</span>
        </div>
        <span className="text-sm text-green-600">+12%</span>
      </div>
    </div>
  )
}
