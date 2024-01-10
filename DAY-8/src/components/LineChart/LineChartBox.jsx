import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Sep", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Oct", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Nov", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Dec", uv: 1890, pv: 4800, amt: 5000 },
];

// create custom content for tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="rounded shadow">
        <p className="font-bold mb-2">{`Month: ${label}`}</p>
        <p className="text-sm">{`Users: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineChartBox = () => {
  return (
    <div className="flex flex-col justify-between space-y-5 relative">
      <div className="space-y-2">
        <h1 className="text-2xl">Total User</h1>
        <h1 className="text-2xl">11.234</h1>
      </div>
      <div className="hidden md:block lg:block">
        <ResponsiveContainer width={"100%"} height={50}>
          <LineChart data={data}>
            <Tooltip content={<CustomTooltip />} />
            <Line dot={false} type="monotone" dataKey="pv" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-center">
        <Link href="#" className="text-gray-500">
          View All
        </Link>
        <div className="flex flex-col text-end">
          <p className="text-emerald-300">45%</p>
          <small className="text-gray-500">this month</small>
        </div>
      </div>
    </div>
  );
};

export default LineChartBox;
