'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ResignationLetter() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const text = `
RESIGNATION LETTER

Dear Sir/Madam,

I, ${name || 'Your Name'}, hereby resign from my position at ${
    company || 'Company Name'
  }.

Thank you for the opportunity and support provided during my tenure.

Sincerely,
${name || 'Your Name'}
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);
    doc.save('Resignation-Letter.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Resignation Letter Format India
        </h1>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Your Name"
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
