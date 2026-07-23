"use client";

import { useState } from "react";

export default function UploadBox() {
  const [file, setFile] = useState<File | null>(null);

  async function handleUpload() {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    alert(data.message);
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-3xl font-bold mb-5">
        Upload CSV / Excel
      </h1>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <button
        onClick={handleUpload}
        className="ml-5 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </div>
  );
}