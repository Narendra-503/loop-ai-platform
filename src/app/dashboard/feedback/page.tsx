import FeedbackForm from "@/components/FeedbackForm";
import FeedbackTable from "@/components/FeedbackTable";
import SeedFeedbackButton from "@/components/SeedFeedbackButton";
import AnalyzeFeedbackButton from "@/components/AnalyzeFeedbackButton";
import { MessageSquare, Sparkles } from "lucide-react";

export default function FeedbackPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">
              <MessageSquare size={34} />
            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Feedback Management
              </h1>

              <p className="mt-2 text-blue-100 text-lg">
                Collect, analyze and manage customer feedback using AI-powered insights.
              </p>

            </div>

          </div>

          <div className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">

            <div className="flex items-center gap-3">

              <Sparkles className="text-yellow-300" />

              <div>

                <p className="text-sm text-blue-100">
                  AI Analysis
                </p>

                <h3 className="font-semibold">
                  Ready to Process
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Action Buttons */}
      <section className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200">

        <div className="flex flex-wrap gap-4">

          <SeedFeedbackButton />

          <AnalyzeFeedbackButton />

        </div>

      </section>

      {/* Feedback Form */}
      <section className="rounded-2xl bg-white shadow-lg border border-gray-200">

        <div className="border-b px-6 py-4">

          <h2 className="text-2xl font-bold text-gray-800">
            Add New Feedback
          </h2>

          <p className="mt-1 text-gray-500">
            Submit customer feedback for AI analysis.
          </p>

        </div>

        <div className="p-6">
          <FeedbackForm />
        </div>

      </section>

      {/* Feedback Table */}
      <section className="rounded-2xl bg-white shadow-lg border border-gray-200">

        <div className="border-b px-6 py-4">

          <h2 className="text-2xl font-bold text-gray-800">
            Customer Feedback Records
          </h2>

          <p className="mt-1 text-gray-500">
            Search, filter, export and manage customer feedback.
          </p>

        </div>

        <div className="p-6">
          <FeedbackTable />
        </div>

      </section>

    </div>
  );
}