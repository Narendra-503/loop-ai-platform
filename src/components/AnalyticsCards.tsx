"use client";

import { useEffect, useState } from "react";

interface Analytics {
  total: number;
  positive: number;
  negative: number;
  neutral: number;
  reviewed: number;
  actioned: number;
  pending: number;
}

export default function AnalyticsCards() {
  const [analytics, setAnalytics] = useState<Analytics>({
    total: 0,
    positive: 0,
    negative: 0,
    neutral: 0,
    reviewed: 0,
    actioned: 0,
    pending: 0,
  });

  useEffect(() => {
    async function loadAnalytics() {
      const res = await fetch("/api/analytics");
      const data = await res.json();
      setAnalytics(data);
    }

    loadAnalytics();
  }, []);

  const cards = [
    {
      title: "Total Feedback",
      value: analytics.total,
      color: "bg-blue-500",
    },
    {
      title: "Positive",
      value: analytics.positive,
      color: "bg-green-500",
    },
    {
      title: "Negative",
      value: analytics.negative,
      color: "bg-red-500",
    },
    {
      title: "Neutral",
      value: analytics.neutral,
      color: "bg-yellow-500",
    },
    {
      title: "Reviewed",
      value: analytics.reviewed,
      color: "bg-indigo-500",
    },
    {
      title: "Actioned",
      value: analytics.actioned,
      color: "bg-purple-500",
    },
    {
      title: "Pending",
      value: analytics.pending,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} rounded-xl p-6 text-white shadow-lg`}
        >
          <h3 className="text-lg font-semibold">{card.title}</h3>

          <p className="mt-4 text-4xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}