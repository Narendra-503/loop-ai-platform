"use client";

import { useEffect, useState } from "react";
import ExportCSV from "./ExportCSV";
import GeneratePDFButton from "./GeneratePDFButton";

interface Feedback {
  id: string;
  customer: string;
  message: string;
  sentiment: string;
  status: string;
}

export default function FeedbackTable() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function loadFeedback(currentPage = page) {
    const res = await fetch(
      `/api/feedback?page=${currentPage}&limit=10`
    );

    const data = await res.json();

    setFeedbacks(data.feedbacks);
    setTotalPages(data.totalPages);
  }

  useEffect(() => {
    loadFeedback(page);
  }, [page]);

  async function deleteFeedback(id: string) {
    const confirmDelete = confirm("Delete this feedback?");

    if (!confirmDelete) return;

    await fetch("/api/feedback", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadFeedback(page);
  }

  async function updateStatus(id: string, status: string) {
    await fetch("/api/feedback", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    loadFeedback(page);
  }

  const filteredFeedback = feedbacks.filter((item) => {
    const matchesSearch =
      item.customer.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "ALL" || item.sentiment === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mt-8 rounded-lg bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Customer Feedback
      </h2>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search customer or feedback..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded border p-2"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded border p-2"
        >
          <option value="ALL">All</option>
          <option value="POSITIVE">Positive</option>
          <option value="NEGATIVE">Negative</option>
          <option value="NEUTRAL">Neutral</option>
        </select>
      </div>

      {/* Export Buttons */}
      <div className="mb-5 flex flex-wrap justify-end gap-3">
        <ExportCSV feedbacks={filteredFeedback} />
        <GeneratePDFButton feedbacks={filteredFeedback} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3">Customer</th>
              <th className="border p-3">Feedback</th>
              <th className="border p-3">Sentiment</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredFeedback.length > 0 ? (
              filteredFeedback.map((item) => (
                <tr key={item.id}>
                  <td className="border p-3">{item.customer}</td>

                  <td className="border p-3">
                    {item.message}
                  </td>

                  <td
                    className={`border p-3 font-semibold ${
                      item.sentiment === "POSITIVE"
                        ? "text-green-600"
                        : item.sentiment === "NEGATIVE"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {item.sentiment}
                  </td>

                  <td className="border p-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateStatus(item.id, e.target.value)
                      }
                      className="rounded border p-2"
                    >
                      <option value="NEW">NEW</option>
                      <option value="REVIEWED">REVIEWED</option>
                      <option value="ACTIONED">ACTIONED</option>
                    </select>
                  </td>

                  <td className="border p-3">
                    <button
                      onClick={() =>
                        deleteFeedback(item.id)
                      }
                      className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-4 text-center text-gray-500"
                >
                  No feedback found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:bg-gray-400"
        >
          Previous
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}