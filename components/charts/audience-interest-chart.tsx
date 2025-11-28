"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    category: "Adventure",
    "18-24": 65,
    "25-34": 80,
    "35-44": 70,
    "45-54": 55,
    "55+": 40,
  },
  {
    category: "Beach",
    "18-24": 75,
    "25-34": 70,
    "35-44": 65,
    "45-54": 60,
    "55+": 55,
  },
  {
    category: "Cultural",
    "18-24": 50,
    "25-34": 60,
    "35-44": 75,
    "45-54": 85,
    "55+": 80,
  },
  {
    category: "Luxury",
    "18-24": 40,
    "25-34": 55,
    "35-44": 70,
    "45-54": 80,
    "55+": 75,
  },
  {
    category: "Family",
    "18-24": 30,
    "25-34": 70,
    "35-44": 85,
    "45-54": 75,
    "55+": 50,
  },
  {
    category: "Cruise",
    "18-24": 35,
    "25-34": 45,
    "35-44": 60,
    "45-54": 75,
    "55+": 85,
  },
]

export function AudienceInterestChart() {
  return (
    <ChartContainer
      config={{
        "18-24": {
          label: "18-24",
          color: "hsl(var(--chart-1))",
        },
        "25-34": {
          label: "25-34",
          color: "hsl(var(--chart-2))",
        },
        "35-44": {
          label: "35-44",
          color: "hsl(var(--chart-3))",
        },
        "45-54": {
          label: "45-54",
          color: "hsl(var(--chart-4))",
        },
        "55+": {
          label: "55+",
          color: "hsl(var(--chart-5))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <XAxis dataKey="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="18-24" fill="var(--color-18-24)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="25-34" fill="var(--color-25-34)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="35-44" fill="var(--color-35-44)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="45-54" fill="var(--color-45-54)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="55+" fill="var(--color-55+)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
