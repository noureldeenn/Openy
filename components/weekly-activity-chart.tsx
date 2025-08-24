"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Sat", deposit: 200, withdraw: 100 },
  { day: "Sun", deposit: 300, withdraw: 150 },
  { day: "Mon", deposit: 400, withdraw: 200 },
  { day: "Tue", deposit: 350, withdraw: 180 },
  { day: "Wed", deposit: 250, withdraw: 120 },
  { day: "Thu", deposit: 300, withdraw: 160 },
  { day: "Fri", deposit: 450, withdraw: 220 },
]

const chartConfig = {
  deposit: {
    label: "Deposit",
    color: "hsl(var(--chart-1))",
  },
  withdraw: {
    label: "Withdraw",
    color: "hsl(var(--chart-2))",
  },
}

export function WeeklyActivityChart() {
  return (
    <div className="h-80">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="deposit" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} name="Deposit" />
            <Bar dataKey="withdraw" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} name="Withdraw" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
