"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Sat", deposit: 250, withdraw: 480 },
  { day: "Sun", deposit: 120, withdraw: 340 },
  { day: "Mon", deposit: 260, withdraw: 320 },
  { day: "Tue", deposit: 360, withdraw: 480 },
  { day: "Wed", deposit: 240, withdraw: 150 },
  { day: "Thu", deposit: 230, withdraw: 380 },
  { day: "Fri", deposit: 330, withdraw: 400 },
];

export function WeeklyActivityChart() {
  return (
    <div className="bg-white h-full rounded-2xl w-full p-4 shadow-sm">
      <div className="flex justify-end mb-2 text-sm">
        <div className="flex items-center gap-2 mr-4">
          <span className="w-3 h-3 rounded-full bg-[#16DBCC]"></span>
          <span className="text-[#718EBF]">Deposit</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF82AC]"></span>
          <span className="text-[#718EBF]">Withdraw</span>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
          >
            {/* Horizontal grid lines */}
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#E5E7EB" // Tailwind gray-200
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#718EBF" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#718EBF" }}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{ borderRadius: "8px", border: "none" }}
            />
            <Bar
              dataKey="deposit"
              fill="#1814F3"
              radius={[30, 30, 30, 30]}
              barSize={15}
            />
            <Bar
              dataKey="withdraw"
              fill="#16DBCC"
              radius={[30, 30, 30, 30]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
