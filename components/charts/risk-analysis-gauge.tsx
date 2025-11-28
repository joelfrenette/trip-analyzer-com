"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Low Risk", value: 70 },
  { name: "Medium Risk", value: 20 },
  { name: "High Risk", value: 10 },
]

const COLORS = ["#4ade80", "#facc15", "#f87171"]

export function RiskAnalysisGauge() {
  return (
    <div className="relative h-[200px] w-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            startAngle={180}
            endAngle={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">Low</div>
        <div className="text-sm text-muted-foreground">Risk Level</div>
      </div>
    </div>
  )
}
