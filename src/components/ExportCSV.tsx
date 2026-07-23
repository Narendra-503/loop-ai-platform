"use client";

import { saveAs } from "file-saver";

interface Feedback {
  customer: string;
  message: string;
  sentiment: string;
}

interface Props {
  feedbacks: Feedback[];
}

export default function ExportCSV({ feedbacks }: Props) {
  function exportCSV() {
    const headers = ["Customer", "Feedback", "Sentiment"];

    const rows = feedbacks.map((item) => [
      item.customer,
      item.message,
      item.sentiment,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "feedback_report.csv");
  }

  return (
    <button
      onClick={exportCSV}
      className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      Export CSV
    </button>
  );
}