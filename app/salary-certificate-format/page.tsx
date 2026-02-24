'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function SalaryCertificate() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

  const certificateText = `
SALARY CERTIFICATE

This is to certify that Mr./Ms. ${
    name || 'Employee Name'
  } is working with our organization as ${designation || 'Designation'}.

His/Her monthly salary is ₹${salary || '____'}.

This certificate is issued for official purposes upon request.
`;

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(certificateText, 180);
    doc.text(lines, 10, 10);
    doc.save('Salary-Certificate.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Salary Certificate Format India
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
            placeholder="Designation"
            className="border p-3 rounded"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monthly Salary"
            className="border p-3 rounded"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 whitespace-pre-line mb-6">
          {certificateText}
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
