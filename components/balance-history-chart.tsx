"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 400 },
  { month: "Sep", balance: 600 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 500 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 650 },
];

const chartConfig = {
  balance: {
    label: "Balance",
    color: "#0047FF", // اللون الأساسي
  },
};

export function BalanceHistoryChart() {
  return (
    <div className="h-88 w-full bg-white rounded-xl p-4 shadow-sm">
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            {/* Gradient fill under line */}
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0047FF" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#0047FF" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* خطوط الشبكة المتقطعة */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              horizontal={true}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />

            <ChartTooltip content={<ChartTooltipContent />} />

            {/* ✅ تظليل تحت المنحنى */}
            <Area
              type="monotone"
              dataKey="balance"
              stroke="none"
              fill="url(#colorBalance)"
            />

            {/* المنحنى الأزرق */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#0047FF"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 5, stroke: "#0047FF", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
