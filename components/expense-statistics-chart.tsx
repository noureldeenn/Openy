"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { name: "Entertainment", value: 30, color: "#4A5568" },
  { name: "Bill Expense", value: 15, color: "#FF7A00" },
  { name: "Investment", value: 20, color: "#FF00FF" },
  { name: "Others", value: 35, color: "#0047FF" },
];

const chartConfig = {
  entertainment: { label: "Entertainment", color: "#4A5568" },
  billExpense: { label: "Bill Expense", color: "#FF7A00" },
  investment: { label: "Investment", color: "#FF00FF" },
  others: { label: "Others", color: "#0047FF" },
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function ExpenseStatisticsChart() {
  return (
    <div className="h-full py-auto w-full rounded-2xl   bg-white">
      <ChartContainer config={chartConfig} className="h-full my-auto w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
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
                  {value} {entry?.payload?.value}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
