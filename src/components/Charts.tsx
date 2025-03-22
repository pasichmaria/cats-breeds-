import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

export type ChartData = {
  name: string;
  value: number;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#FFBB28'];

export function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="h-[400px]">{children}</div>
    </div>
  );
}

export function BarChartComponent({ data, color }: { data: ChartData[]; color: string }) {
  return (
    <ResponsiveContainer>
      <BarChart margin={{ top: 50, bottom: 100 }} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis angle={-45} textAnchor={'end'} dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PieChartComponent({ data }: { data: ChartData[] }) {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ marginTop: '20px', fontSize: '12px', fontWeight: 'lighter' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
