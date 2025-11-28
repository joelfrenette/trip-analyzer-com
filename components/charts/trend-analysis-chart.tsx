"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    month: "Jan",
    Bali: 2500,
    Greece: 1800,
    Japan: 3200,
    "Costa Rica": 2100,
  },
  {
    month: "Feb",
    Bali: 2700,
    Greece: 2000,
    Japan: 3000,
    "Costa Rica": 2300,
  },
  {
    month: "Mar",
    Bali: 2900,
    Greece: 2300,
    Japan: 2800,
    "Costa Rica": 2500,
  },
  {
    month: "Apr",
    Bali: 3400,
    Greece: 2600,
    Japan: 2600,
    "Costa Rica": 2700,
  },
  {
    month: "May",
    Bali: 3200,
    Greece: 3100,
    Japan: 2400,
    "Costa Rica": 2900,
  },
  {
    month: "Jun",
    Bali: 3000,
    Greece: 3500,
    Japan: 2200,
    "Costa Rica": 2800,
  },
  {
    month: "Jul",
    Bali: 2800,
    Greece: 3800,
    Japan: 2000,
    "Costa Rica": 2600,
  },
  {
    month: "Aug",
    Bali: 2600,
    Greece: 3600,
    Japan: 2100,
    "Costa Rica": 2400,
  },
  {
    month: "Sep",
    Bali: 2400,
    Greece: 3300,
    Japan: 2300,
    "Costa Rica": 2200,
  },
  {
    month: "Oct",
    Bali: 2200,
    Greece: 2800,
    Japan: 2600,
    "Costa Rica": 2000,
  },
  {
    month: "Nov",
    Bali: 2000,
    Greece: 2400,
    Japan: 3100,
    "Costa Rica": 1900,
  },
  {
    month: "Dec",
    Bali: 2300,
    Greece: 2100,
    Japan: 3400,
    "Costa Rica": 2200,
  },
]

export function TrendAnalysisChart() {
  return (
    <ChartContainer
      config={{
        Bali: {
          label: "Bali",
          color: "hsl(var(--chart-1))",
        },
        Greece: {
          label: "Greece",
          color: "hsl(var(--chart-2))",
        },
        Japan: {
          label: "Japan",
          color: "hsl(var(--chart-3))",
        },
        "Costa Rica": {
          label: "Costa Rica",
          color: "hsl(var(--chart-4))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="Bali"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Bali)", opacity: 0.8 },
            }}
            stroke="var(--color-Bali)"
          />
          <Line
            type="monotone"
            dataKey="Greece"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Greece)", opacity: 0.8 },
            }}
            stroke="var(--color-Greece)"
          />
          <Line
            type="monotone"
            dataKey="Japan"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Japan)", opacity: 0.8 },
            }}
            stroke="var(--color-Japan)"
          />
          <Line
            type="monotone"
            dataKey="Costa Rica"
            strokeWidth={2}
            activeDot={{
              r: 6,
              style: { fill: "var(--color-Costa Rica)", opacity: 0.8 },
            }}
            stroke="var(--color-Costa Rica)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
