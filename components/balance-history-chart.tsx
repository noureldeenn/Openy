"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 600 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 500 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 900 },
]

const chartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
}

export function BalanceHistoryChart() {
  return (
    <div className="h-64">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="var(--color-chart-1)"
              strokeWidth={3}
              dot={{ fill: "var(--color-chart-1)", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "var(--color-chart-1)", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
