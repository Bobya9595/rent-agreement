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
  const [utilities, setUtilities] = useState("");
  const [date, setDate] = useState("");
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

  const generateAgreement = () => {
    const text = `
                             RENT AGREEMENT

This Rent Agreement is made and executed on this ${formatDate(date)} at ___________.

BETWEEN

Mr./Ms. ${landlord || "Landlord Name"}, hereinafter referred to as the "LANDLORD"
(which expression shall mean and include his/her heirs, legal representatives and assigns)

AND

Mr./Ms. ${tenant || "Tenant Name"}, hereinafter referred to as the "TENANT"
(which expression shall mean and include his/her heirs, legal representatives and assigns).

WHEREAS the Landlord is the lawful owner of the property situated at:

${propertyAddress || "Full Property Address"}

NOW THIS AGREEMENT WITNESSETH AS FOLLOWS:

1. TERM
The tenancy shall commence from ${formatDate(date)} for a period of ${duration} months.

2. RENT
The Tenant agrees to pay a monthly rent of ₹${rentAmount || "______"} payable on or before the 5th day of every month.

3. SECURITY DEPOSIT
The Tenant has paid a refundable security deposit of ₹${deposit || "______"}.

4. UTILITIES
All utility charges including ${utilities || "electricity, water, gas"} shall be borne by the Tenant.

5. USE OF PREMISES
The premises shall be used strictly for residential purposes.

6. MAINTENANCE
The Tenant shall maintain the premises in good condition.

7. TERMINATION
Either party may terminate this agreement by giving one month's prior written notice.

8. GOVERNING LAW
This Agreement shall be governed by the laws of India.

IN WITNESS WHEREOF, the parties have signed this agreement.

----------------------------              ----------------------------
LANDLORD SIGNATURE                        TENANT SIGNATURE

Witnesses:
1. ______________________
2. ______________________
`;

    setAgreementText(text);
  };

  const enhanceWithAI = async () => {
    if (!agreementText) return alert("Generate agreement first");

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
    const doc = new jsPDF("p", "mm", "a4");
    doc.setFont("Times", "Roman");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(agreementText, 180);
    doc.text(lines, 15, 20);

    doc.save("Rent-Agreement-India-2026.pdf");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          AI Rent Agreement Pro (India 2026)
        </h1>

        <div className="grid gap-4 mb-6">
          <input placeholder="Landlord Name" className="border p-3 rounded" value={landlord} onChange={(e) => setLandlord(e.target.value)} />
          <input placeholder="Tenant Name" className="border p-3 rounded" value={tenant} onChange={(e) => setTenant(e.target.value)} />
          <input placeholder="Property Address" className="border p-3 rounded" value={propertyAddress} onChange={(e) => setPropertyAddress(e.target.value)} />
          <input placeholder="Monthly Rent (₹)" type="number" className="border p-3 rounded" value={rentAmount} onChange={(e) => setRentAmount(e.target.value)} />
          <input placeholder="Security Deposit (₹)" type="number" className="border p-3 rounded" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
          <input placeholder="Agreement Duration (Months)" type="number" className="border p-3 rounded" value={duration} onChange={(e) => setDuration(e.target.value)} />
          <input placeholder="Utilities (Electricity, Water, etc.)" className="border p-3 rounded" value={utilities} onChange={(e) => setUtilities(e.target.value)} />
          <input type="date" className="border p-3 rounded" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="flex gap-4 mb-6">
          <button onClick={generateAgreement} className="bg-gray-700 text-white px-6 py-3 rounded">
            Generate Agreement
          </button>

          <button onClick={enhanceWithAI} className="bg-purple-600 text-white px-6 py-3 rounded">
            {loading ? "Enhancing..." : "Enhance with AI"}
          </button>

          <button onClick={downloadPDF} className="bg-green-600 text-white px-6 py-3 rounded">
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
