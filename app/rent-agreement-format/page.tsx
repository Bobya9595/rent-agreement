"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function RentAgreementPro() {
  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [duration, setDuration] = useState("11");
  const [date, setDate] = useState("");
  const [agreementType, setAgreementType] = useState("Residential");
  const [agreementText, setAgreementText] = useState("");
  const [loading, setLoading] = useState(false);

  const formatDate = (inputDate: string) => {
    if (!inputDate) return "____";
    return new Date(inputDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const generateBasicAgreement = () => {
    const text = `
RENT AGREEMENT (${agreementType})

This Rent Agreement is executed on ${formatDate(date)}.

BETWEEN

Mr./Ms. ${landlord || "Landlord Name"} (LANDLORD)

AND

Mr./Ms. ${tenant || "Tenant Name"} (TENANT)

PROPERTY ADDRESS:
${propertyAddress || "Full Property Address"}

1. TERM:
Tenancy shall commence from ${formatDate(
      date
    )} for a period of ${duration} months.

2. RENT:
Monthly rent shall be ₹${rentAmount || "________"} payable before 5th of every month.

3. SECURITY DEPOSIT:
Tenant has paid ₹${deposit || "________"} refundable security deposit.

4. USE:
Property shall be used for ${agreementType.toLowerCase()} purposes only.

5. TERMINATION:
One month prior written notice required by either party.

Signed on the date mentioned above.
`;

    setAgreementText(text);
  };

  const enhanceWithAI = async () => {
    setLoading(true);

    const response = await fetch("/api/improve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: agreementText }),
    });

    const data = await response.json();
    setAgreementText(data.result);
    setLoading(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(agreementText, 180);
    doc.text(lines, 10, 10);
    doc.save("AI-Rent-Agreement-Pro.pdf");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          AI Rent Agreement Pro (India 2026)
        </h1>

        <div className="grid gap-4 mb-6">
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
            type="text"
            placeholder="Property Address"
            className="border p-3 rounded"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monthly Rent (₹)"
            className="border p-3 rounded"
            value={rentAmount}
            onChange={(e) => setRentAmount(e.target.value)}
          />

          <input
            type="number"
            placeholder="Security Deposit (₹)"
            className="border p-3 rounded"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />

          <select
            className="border p-3 rounded"
            value={agreementType}
            onChange={(e) => setAgreementType(e.target.value)}
          >
            <option>Residential</option>
            <option>Commercial</option>
          </select>

          <input
            type="number"
            placeholder="Duration (Months)"
            className="border p-3 rounded"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <input
            type="date"
            className="border p-3 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={generateBasicAgreement}
            className="bg-gray-700 text-white px-6 py-3 rounded"
          >
            Generate Agreement
          </button>

          <button
            onClick={enhanceWithAI}
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-3 rounded"
          >
            {loading ? "Enhancing..." : "Enhance with AI"}
          </button>

          <button
            onClick={downloadPDF}
            className="bg-green-600 text-white px-6 py-3 rounded"
          >
            Download PDF
          </button>
        </div>

        <div className="border p-6 rounded bg-gray-50 whitespace-pre-line">
          {agreementText}
        </div>
      </div>
    </main>
  );
}
