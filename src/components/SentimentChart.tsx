"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { PieChart } from "lucide-react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface Props {
  positive: number;
  negative: number;
  neutral: number;
}

export default function SentimentChart({
  positive,
  negative,
  neutral,
}: Props) {
  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [positive, negative, neutral],
        backgroundColor: [
          "#22C55E",
          "#EF4444",
          "#FACC15",
        ],
        borderColor: "#ffffff",
        borderWidth: 3,
        hoverOffset: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 14,
            weight: "bold" as const,
          },
        },
      },
      tooltip: {
        backgroundColor: "#1E293B",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
      },
    },
  };

  const total = positive + negative + neutral;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Sentiment Analytics
          </h2>

          <p className="mt-1 text-gray-500">
            Distribution of customer feedback
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 p-3">
          <PieChart
            className="text-blue-600"
            size={24}
          />
        </div>

      </div>

      <div className="h-[340px]">
        <Pie
          data={data}
          options={options}
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-green-50 p-4 text-center">

          <p className="text-sm text-gray-500">
            Positive
          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">
            {positive}
          </h3>

        </div>

        <div className="rounded-xl bg-red-50 p-4 text-center">

          <p className="text-sm text-gray-500">
            Negative
          </p>

          <h3 className="mt-2 text-2xl font-bold text-red-600">
            {negative}
          </h3>

        </div>

        <div className="rounded-xl bg-yellow-50 p-4 text-center">

          <p className="text-sm text-gray-500">
            Neutral
          </p>

          <h3 className="mt-2 text-2xl font-bold text-yellow-600">
            {neutral}
          </h3>

        </div>

      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">

        <div className="flex items-center justify-between">

          <span className="text-gray-600 font-medium">
            Total Feedback
          </span>

          <span className="text-2xl font-bold text-slate-800">
            {total}
          </span>

        </div>

      </div>

    </div>
  );
}