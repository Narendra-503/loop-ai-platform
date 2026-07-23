"use client";

import { useState } from "react";

export default function SeedFeedbackButton() {
  const [loading, setLoading] = useState(false);

  async function seedData() {
    setLoading(true);

    try {
      const res = await fetch("/api/seed-feedback", {
        method: "POST",
      });

      const data = await res.json();

      alert(data.message);

      // Refresh page so new feedback appears
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to import demo feedback.");
    }

    setLoading(false);
  }

  return (
    <button
      onClick={seedData}
      disabled={loading}
      className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
    >
      {loading ? "Importing..." : "Load Demo Feedback"}
    </button>
  );
}