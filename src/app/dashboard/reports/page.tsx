"use client";

import {
  FileText,
  Download,
  Calendar,
  BrainCircuit,
  TrendingUp,
  FileBarChart,
} from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              AI Reports
            </h1>

            <p className="mt-3 text-indigo-100 text-lg">
              View and download AI-generated customer feedback reports.
            </p>
          </div>

          <div className="rounded-2xl bg-white/20 p-5 backdrop-blur">
            <FileBarChart size={42} />
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <FileText className="mb-4 text-blue-600" size={32} />

          <h2 className="text-3xl font-bold">
            Reports
          </h2>

          <p className="mt-2 text-gray-500">
            Generate detailed AI reports from customer feedback.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <BrainCircuit className="mb-4 text-purple-600" size={32} />

          <h2 className="text-3xl font-bold">
            AI Insights
          </h2>

          <p className="mt-2 text-gray-500">
            Automatically summarize customer sentiment and themes.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <TrendingUp className="mb-4 text-green-600" size={32} />

          <h2 className="text-3xl font-bold">
            Trends
          </h2>

          <p className="mt-2 text-gray-500">
            Track satisfaction trends across your feedback history.
          </p>
        </div>
      </section>

      {/* Recent Reports */}
      <section className="rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Recent Reports
          </h2>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700">
            <Download size={18} />
            Download All
          </button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((report) => (
            <div
              key={report}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-5 transition hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3">
                  <FileText className="text-blue-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Customer Feedback Report #{report}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    Generated Today
                  </div>
                </div>
              </div>

              <button className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white">
                Download
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AI Summary */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          AI Executive Summary
        </h2>

        <p className="leading-8 text-gray-600">
          The AI report summarizes customer feedback by identifying positive,
          negative, and neutral sentiment, highlighting recurring themes, and
          recommending areas for improvement. This helps organizations quickly
          understand customer satisfaction and prioritize actions based on
          real-time feedback analysis.
        </p>
      </section>
    </div>
  );
}