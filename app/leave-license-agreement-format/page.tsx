'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function LeaveLicense() {
  const [owner, setOwner] = useState('');
  const [licensee, setLicensee] = useState('');

  const text = `
LEAVE AND LICENSE AGREEMENT

This agreement is made between ${owner || 'Owner Name'} and ${
    licensee || 'Licensee Name'
  }.

The owner hereby grants leave and license to use the premises for residential purposes.
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);
    doc.save('Leave-License.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Leave & License Agreement Format
        </h1>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Owner Name"
            className="border p-3 rounded"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />

          <input
            type="text"
            placeholder="Licensee Name"
            className="border p-3 rounded"
            value={licensee}
            onChange={(e) => setLicensee(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 whitespace-pre-line mb-6">
          {text}
        </div>

        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Download PDF
        </button>
      </div>
    </main>
  );
}
