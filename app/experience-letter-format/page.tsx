'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ExperienceLetter() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [company, setCompany] = useState('');
  const [duration, setDuration] = useState('');

  const letterText = `
EXPERIENCE LETTER

This is to certify that Mr./Ms. ${name || 'Employee Name'} was employed with ${
    company || 'Company Name'
  } as ${designation || 'Designation'} for a period of ${
    duration || 'Employment Duration'
  }.

During their tenure, they demonstrated professionalism, dedication, and sincerity in performing their duties.

We wish them all the best in their future endeavors.
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(letterText, 180);
    doc.text(lines, 10, 10);
    doc.save('Experience-Letter.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Experience Letter Format India
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
            type="text"
            placeholder="Designation"
            className="border p-3 rounded"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />

          <input
            type="text"
            placeholder="Employment Duration (e.g. Jan 2023 - Feb 2026)"
            className="border p-3 rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
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
