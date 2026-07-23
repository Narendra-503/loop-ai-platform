"use client";

import { useEffect, useState } from "react";
import DashboardCard from "@/components/DashboardCard";
import LogoutButton from "@/components/LogoutButton";
import SentimentChart from "@/components/SentimentChart";

interface Feedback {
  id: string;
  sentiment: string;
}

interface Analytics {
  total: number;
  positive: number;
  negative: number;
  neutral: number;
  reviewed: number;
  actioned: number;
  pending: number;
}

export default function DashboardPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
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
    async function loadDashboard() {
      try {
        const feedbackRes = await fetch("/api/feedback?page=1&limit=5");
        const feedbackData = await feedbackRes.json();
        setFeedbacks(feedbackData.feedbacks);

        const analyticsRes = await fetch("/api/analytics");
        const analyticsData = await analyticsRes.json();
        setAnalytics(analyticsData);
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <main className="space-y-8">

      {/* Welcome Banner */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-2 text-blue-100 text-lg">
              Monitor customer feedback, sentiment analysis, and AI insights in one place.
            </p>
          </div>

          <LogoutButton />
        </div>
      </section>

      {/* Dashboard Cards */}
      <section>
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          <DashboardCard title="Total Feedback" value={analytics.total} />

          <DashboardCard title="Positive" value={analytics.positive} />

          <DashboardCard title="Negative" value={analytics.negative} />

          <DashboardCard title="Neutral" value={analytics.neutral} />

          <DashboardCard title="Reviewed" value={analytics.reviewed} />

          <DashboardCard title="Actioned" value={analytics.actioned} />

          <DashboardCard title="Pending" value={analytics.pending} />

        </div>
      </section>

      {/* Chart + Quick Stats */}
      <section className="grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Sentiment Overview
          </h2>

          <SentimentChart
            positive={analytics.positive}
            negative={analytics.negative}
            neutral={analytics.neutral}
          />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            Quick Summary
          </h2>

          <div className="space-y-4">

            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm text-gray-500">
                Positive Feedback
              </p>

              <p className="mt-2 text-3xl font-bold text-green-600">
                {analytics.positive}
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-4">
              <p className="text-sm text-gray-500">
                Negative Feedback
              </p>

              <p className="mt-2 text-3xl font-bold text-red-600">
                {analytics.negative}
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-4">
              <p className="text-sm text-gray-500">
                Pending Reviews
              </p>

              <p className="mt-2 text-3xl font-bold text-yellow-600">
                {analytics.pending}
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Recent Feedback */}
      <section className="rounded-2xl bg-white p-6 shadow-lg">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Recent Feedback
          </h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Latest 5
          </span>
        </div>

        {feedbacks.length === 0 ? (
          <div className="rounded-xl bg-gray-50 py-10 text-center text-gray-500">
            No feedback available yet.
          </div>
        ) : (
          <div className="space-y-4">

            {feedbacks.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition hover:shadow-md"
              >
                <div>
                  <h3 className="font-semibold">
                    Feedback #{index + 1}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Customer Feedback Record
                  </p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    item.sentiment === "POSITIVE"
                      ? "bg-green-100 text-green-700"
                      : item.sentiment === "NEGATIVE"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.sentiment}
                </span>
              </div>
            ))}

          </div>
        )}
      </section>

    </main>
  );
}