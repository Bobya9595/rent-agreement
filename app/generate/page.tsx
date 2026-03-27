"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [policy, setPolicy] = useState("");

  const formattedPolicy = policy.replace(/\*\*/g, "").replace(/#/g, "");

  const handleGenerate = async () => {
    const res = await fetch("/api/generate-policy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ website }),
    });

    const data = await res.json();
    setPolicy(data.policy);
  };

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.text(`Privacy Policy for ${website}`, 10, 20);

    const lines = doc.splitTextToSize(formattedPolicy, 180);
    doc.text(lines, 10, 30);

    doc.save(`${website}.pdf`);
  };

  const handleWordDownload = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({ text: `Privacy Policy for ${website}` }),
            ...formattedPolicy.split("\n").map(
              (line) => new Paragraph({ text: line })
            ),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${website}.docx`);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        LegalFormat
      </h1>

      <div className="grid grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Generate Policy
          </h2>

          <input
            placeholder="Website Name"
            className="w-full border p-3 rounded mb-4"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Generate
          </button>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Preview
          </h2>

          <div className="h-[300px] overflow-y-auto text-sm text-gray-700 whitespace-pre-wrap">
            {formattedPolicy || "Preview will appear here..."}
          </div>

          {policy && (
            <div className="mt-4 flex gap-2">
              <button
                onClick={handlePDFDownload}
                className="bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                PDF
              </button>

              <button
                onClick={handleWordDownload}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                Word
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
