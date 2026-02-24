'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function RentAgreement() {
  const [landlord, setLandlord] = useState('');
  const [tenant, setTenant] = useState('');
  const [date, setDate] = useState('');

  const formatDate = (inputDate: string) => {
    if (!inputDate) return '____';
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return new Date(inputDate).toLocaleDateString('en-IN', options);
  };

  const agreementText = `
RENT AGREEMENT

This Rent Agreement is made on ${formatDate(date)} between ${
    landlord || 'Landlord Name'
  } (hereinafter referred to as the "Landlord") and ${
    tenant || 'Tenant Name'
  } (hereinafter referred to as the "Tenant").

1. The Landlord hereby agrees to rent the property to the Tenant.
2. The Tenant agrees to pay the monthly rent as mutually decided.
3. The Tenant shall maintain the property in good condition.
4. The agreement shall remain valid unless terminated by either party.

IN WITNESS WHEREOF, both parties have signed this agreement.
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(agreementText);
    alert('Copied to clipboard!');
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(agreementText, 180);
    doc.text(lines, 10, 10);
    doc.save('Rent-Agreement.pdf');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Rent Agreement Format India
        </h1>

        <div className="grid gap-4 mb-8">
          <input
            type="text"
            placeholder="Landlord Name"
            className="border p-3 rounded"
            value={landlord}
            onChange={(e) => setLandlord(e.target.value)}
          />

          <input
            type="text"
            placeholder="Tenant Name"
            className="border p-3 rounded"
            value={tenant}
            onChange={(e) => setTenant(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="border p-6 rounded bg-gray-50 text-gray-800 whitespace-pre-line mb-6">
          {agreementText}
        </div>

        <div className="flex gap-4">
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Copy Agreement
          </button>

          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
