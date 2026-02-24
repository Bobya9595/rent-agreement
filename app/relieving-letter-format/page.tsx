'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function RelievingLetter() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [lastDate, setLastDate] = useState('');

  const letterText = `
RELIEVING LETTER

This is to certify that Mr./Ms. ${
    name || 'Employee Name'
  } has been relieved from their duties at ${
    company || 'Company Name'
  } effective from ${lastDate || 'Last Working Date'}.

We thank them for their contribution and wish them success in future endeavors.
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(letterText, 180);
    doc.text(lines, 10, 10);
    doc.save('Relieving-Letter.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Relieving Letter Format India
        </h1>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Employee Name"
            className="border p-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Company Name"
            className="border p-3 rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded"
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 whitespace-pre-line mb-6">
          {letterText}
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
