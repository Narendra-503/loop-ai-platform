"use client";

export default function AnalyzeFeedbackButton() {
  async function analyze() {
    const res = await fetch("/api/analyze-feedback", {
      method: "POST",
    });

    const data = await res.json();

    alert(data.message);
  }

  return (
    <button
      onClick={analyze}
      className="rounded bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
    >
      Analyze Feedback
    </button>
  );
}