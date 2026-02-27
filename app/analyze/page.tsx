"use client";

import { useState } from "react";

export default function AnalyzePage() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c12] text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        AI Legal Analyzer
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Upload Section */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">

          <label className="block text-gray-400 mb-4">
            Upload Agreement (PDF or DOCX)
          </label>

          <div className="border-2 border-dashed border-gray-700 rounded-2xl p-10 text-center">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />

            <label
              htmlFor="fileUpload"
              className="cursor-pointer text-purple-400 hover:text-purple-300"
            >
              Click to upload
            </label>

            <p className="text-gray-500 text-sm mt-4">
              {fileName ? `Selected: ${fileName}` : "No file selected"}
            </p>
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition">
            Analyze Agreement with AI
          </button>

        </div>

        {/* Result Preview */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">
            Risk Analysis Result
          </h2>

          <div className="text-gray-400 text-sm space-y-3">
            <p>Risk Score: —</p>
            <p>Missing Clauses: —</p>
            <p>Compliance Issues: —</p>
          </div>
        </div>

      </div>

    </div>
  );
}
