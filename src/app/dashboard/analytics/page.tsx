"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Smile,
  Frown,
  Meh,
  Activity,
} from "lucide-react";

interface Analytics {
  total: number;
  positive: number;
  negative: number;
  neutral: number;
  reviewed: number;
  actioned: number;
  pending: number;
}

export default function AnalyticsPage() {
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

  return (
    <div className="space-y-8">

      {/* Hero Section */}
      <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold">
              Analytics Dashboard
            </h1>

            <p className="mt-3 text-blue-100 text-lg">
              AI-powered insights from customer feedback.
            </p>
          </div>

          <div className="rounded-2xl bg-white/20 p-5 backdrop-blur">
            <BarChart3 size={42} />
          </div>

        </div>

      </section>

      {/* KPI Cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Total Feedback</h3>
            <Activity className="text-blue-600" />
          </div>

          <h2 className="mt-4 text-4xl font-bold">
            {analytics.total}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Positive</h3>
            <Smile className="text-green-600" />
          </div>

          <h2 className="mt-4 text-4xl font-bold text-green-600">
            {analytics.positive}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Negative</h3>
            <Frown className="text-red-600" />
          </div>

          <h2 className="mt-4 text-4xl font-bold text-red-600">
            {analytics.negative}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Neutral</h3>
            <Meh className="text-yellow-500" />
          </div>

          <h2 className="mt-4 text-4xl font-bold text-yellow-600">
            {analytics.neutral}
          </h2>
        </div>

      </section>

      {/* Status Summary */}
      <section className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-2xl bg-green-50 p-6 shadow">

          <h3 className="text-lg font-semibold text-green-700">
            Reviewed
          </h3>

          <p className="mt-4 text-5xl font-bold text-green-600">
            {analytics.reviewed}
          </p>

        </div>

        <div className="rounded-2xl bg-purple-50 p-6 shadow">

          <h3 className="text-lg font-semibold text-purple-700">
            Actioned
          </h3>

          <p className="mt-4 text-5xl font-bold text-purple-600">
            {analytics.actioned}
          </p>

        </div>

        <div className="rounded-2xl bg-orange-50 p-6 shadow">

          <h3 className="text-lg font-semibold text-orange-700">
            Pending
          </h3>

          <p className="mt-4 text-5xl font-bold text-orange-600">
            {analytics.pending}
          </p>

        </div>

      </section>

      {/* AI Insights */}
      <section className="rounded-2xl bg-white p-8 shadow-lg">

        <div className="flex items-center gap-3">

          <TrendingUp className="text-blue-600" />

          <h2 className="text-2xl font-bold">
            AI Insights
          </h2>

        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">
              Customer Satisfaction
            </h3>

            <p className="mt-2 text-gray-600">
              Positive feedback is increasing, indicating better customer experience.
            </p>
          </div>

          <div className="rounded-xl bg-red-50 p-5">
            <h3 className="font-semibold text-red-700">
              Areas to Improve
            </h3>

            <p className="mt-2 text-gray-600">
              Review negative feedback to identify recurring customer issues.
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-5">
            <h3 className="font-semibold text-green-700">
              Recommendation
            </h3>

            <p className="mt-2 text-gray-600">
              Continue monitoring trends and resolve pending feedback quickly.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}