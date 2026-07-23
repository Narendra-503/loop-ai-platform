"use client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Feedback {
  customer: string;
  message: string;
  sentiment: string;
  status: string;
}

interface Props {
  feedbacks: Feedback[];
}

export default function GeneratePDFButton({ feedbacks }: Props) {
  function generatePDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Project LOOP - Customer Feedback Report", 14, 20);

    doc.setFontSize(11);
    doc.text(
      `Generated on: ${new Date().toLocaleString()}`,
      14,
      30
    );

    autoTable(doc, {
      startY: 40,
      head: [["Customer", "Feedback", "Sentiment", "Status"]],
      body: feedbacks.map((item) => [
        item.customer,
        item.message,
        item.sentiment,
        item.status,
      ]),
    });

    doc.save("Feedback_Report.pdf");
  }

  return (
    <button
      onClick={generatePDF}
      className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      Download PDF Report
    </button>
  );
}