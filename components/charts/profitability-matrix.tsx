"use client"

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ZAxis } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"

const data = [
  { name: "Bali Beach Resort", x: 28, y: 85, z: 150 },
  { name: "Greek Islands Cruise", x: 32, y: 78, z: 180 },
  { name: "Japan Cherry Blossom Tour", x: 24, y: 92, z: 120 },
  { name: "Costa Rica Adventure", x: 22, y: 88, z: 140 },
  { name: "African Safari", x: 35, y: 72, z: 200 },
  { name: "European River Cruise", x: 30, y: 68, z: 160 },
  { name: "Thailand Cultural Tour", x: 20, y: 82, z: 130 },
  { name: "Australian Outback", x: 26, y: 65, z: 110 },
  { name: "Maldives Luxury Package", x: 38, y: 75, z: 220 },
]

export function ProfitabilityMatrix() {
  return (
    <ChartContainer
      config={{
        scatter: {
          label: "Destinations",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="x"
            name="Profit Margin %"
            domain={[15, 40]}
            label={{ value: "Profit Margin %", position: "bottom" }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Audience Interest"
            domain={[60, 100]}
            label={{ value: "Audience Interest", angle: -90, position: "left" }}
          />
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="Package Value" />
          <ChartTooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="font-medium">{payload[0].payload.name}</div>
                    <div className="text-sm text-muted-foreground">Profit Margin: {payload[0].value}%</div>
                    <div className="text-sm text-muted-foreground">Audience Interest: {payload[1].value}/100</div>
                    <div className="text-sm text-muted-foreground">Package Value: ${payload[2].value * 10}</div>
                  </div>
                )
              }
              return null
            }}
          />
          <Scatter name="Destinations" data={data} fill="var(--color-scatter)" />
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
