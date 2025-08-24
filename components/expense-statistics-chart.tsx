"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Entertainment", value: 30, color: "hsl(var(--chart-1))" },
  { name: "Bill Expense", value: 15, color: "hsl(var(--chart-2))" },
  { name: "Investment", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Others", value: 35, color: "hsl(var(--chart-4))" },
]

const chartConfig = {
  entertainment: {
    label: "Entertainment",
    color: "hsl(var(--chart-1))",
  },
  billExpense: {
    label: "Bill Expense",
    color: "hsl(var(--chart-2))",
  },
  investment: {
    label: "Investment",
    color: "hsl(var(--chart-3))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-4))",
  },
}

export function ExpenseStatisticsChart() {
  return (
    <div className="h-64">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value, entry) => (
                <span style={{ color: entry.color }}>
                  {value} {entry.payload.value}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
