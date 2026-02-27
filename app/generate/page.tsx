"use client";

import { useState } from "react";
import Link from "next/link";

export default function GeneratePage() {
  const [docType, setDocType] = useState("Rent Agreement");
  const [partyOne, setPartyOne] = useState("");
  const [partyTwo, setPartyTwo] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!partyOne || !partyTwo) {
      return alert("Please fill required fields");
    }

    setLoading(true);
    setGeneratedDoc(null);

    setTimeout(() => {
      setGeneratedDoc(`
${docType}

This agreement is made between ${partyOne} and ${partyTwo}.

${details || "Standard terms and conditions apply."}

This document is generated using AI Legal Intelligence.
      `);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0c12] text-white p-10">

      {/* BACK BUTTON */}
      <Link
        href="/dashboard"
        className="text-sm text-gray-400 hover:text-white mb-6 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold mb-8">
        AI Document Generator
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM SECTION */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800 space-y-6">

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Document Type
            </label>
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            >
              <option>Rent Agreement</option>
              <option>Offer Letter</option>
              <option>NDA</option>
              <option>Service Agreement</option>
            </select>
          </div>

          <input
            value={partyOne}
            onChange={(e) => setPartyOne(e.target.value)}
            className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            placeholder="Party 1 (e.g. Landlord / Employer)"
          />

          <input
            value={partyTwo}
            onChange={(e) => setPartyTwo(e.target.value)}
            className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            placeholder="Party 2 (e.g. Tenant / Employee)"
          />

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full bg-[#1a1a23] border border-gray-700 rounded-xl p-3 focus:outline-none focus:border-purple-500"
            rows={4}
            placeholder="Additional details..."
          />

          <button
            onClick={handleGenerate}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl hover:scale-105 transition"
          >
            {loading ? "Generating..." : "Generate with AI"}
          </button>

        </div>

        {/* RESULT SECTION */}
        <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800">

          <h2 className="text-lg font-semibold mb-4">
            Generated Document
          </h2>

          {loading && (
            <p className="text-purple-400">
              AI is drafting your document...
            </p>
          )}

          {!loading && generatedDoc && (
            <pre className="whitespace-pre-wrap text-sm text-gray-300">
              {generatedDoc}
            </pre>
          )}

          {!loading && !generatedDoc && (
            <p className="text-gray-500">
              Fill the form and generate document.
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
