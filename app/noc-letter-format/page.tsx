'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function NOC() {
  const [name, setName] = useState('');
  const [purpose, setPurpose] = useState('');

  const nocText = `
NO OBJECTION CERTIFICATE

This is to certify that we have no objection to Mr./Ms. ${
    name || 'Full Name'
  } for ${purpose || 'stated purpose'}.

This certificate is issued upon request.
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(nocText, 180);
    doc.text(lines, 10, 10);
    doc.save('NOC-Letter.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          NOC Letter Format India
        </h1>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Purpose (e.g. Visa, Bank Loan)"
            className="border p-3 rounded"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 whitespace-pre-line mb-6">
          {nocText}
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
