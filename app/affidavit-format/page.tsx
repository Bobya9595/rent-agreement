'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function Affidavit() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const affidavitText = `
AFFIDAVIT

I, ${name || 'Full Name'}, residing at ${
    address || 'Full Address'
  }, do hereby solemnly affirm and declare as under:

1. That the information provided herein is true and correct.
2. That this affidavit is made for lawful purposes.

Signed and affirmed on this day.
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(affidavitText, 180);
    doc.text(lines, 10, 10);
    doc.save('Affidavit.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Affidavit Format India
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
            placeholder="Full Address"
            className="border p-3 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 whitespace-pre-line mb-6">
          {affidavitText}
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
