"use client";

import { useState } from "react";
import { MessageSquareText, User, Send } from "lucide-react";

export default function FeedbackForm() {
  const [customer, setCustomer] = useState("");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer,
        feedback,
      }),
    });

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      setCustomer("");
      setFeedback("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <MessageSquareText className="text-blue-600" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Add Customer Feedback
          </h2>

          <p className="text-sm text-gray-500">
            Submit customer feedback for AI sentiment analysis.
          </p>
        </div>
      </div>

      {/* Customer Name */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Customer Name
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Enter customer name"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Feedback */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Customer Feedback
        </label>

        <textarea
          placeholder="Write customer feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          rows={6}
          className="w-full resize-none rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
      >
        <Send size={18} />
        Submit Feedback
      </button>
    </form>
  );
}