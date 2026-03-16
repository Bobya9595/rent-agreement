
"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

export default function RentAgreementPage() {

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");

  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const generateAgreement = async () => {

    setLoading(true);

    const res = await fetch("/api/generate-document", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        landlord,
        tenant,
        rent
      })
    });

    const data = await res.json();

    setAgreement(data.document);

    setLoading(false);

  };

  const startPayment = async () => {

    const res = await fetch("/api/create-checkout-session", {
      method: "POST"
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    }

  };

  const downloadPDF = () => {

    const pdf = new jsPDF();

    pdf.text(agreement, 10, 10);

    pdf.save("rent-agreement.pdf");

  };

  const downloadDOCX = async () => {

    const doc = new Document({
      sections: [
        {
          children: agreement.split("\n").map(
            (line) => new Paragraph(line)
          )
        }
      ]
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, "rent-agreement.docx");

  };

  return (

    <main className="min-h-screen bg-gradient-to-br from-[#020617] to-[#0f172a] text-white flex flex-col items-center py-16 px-6">

      {/* HEADER */}

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold mb-4">
          Rent Agreement Generator
        </h1>

        <p className="text-gray-400 text-lg">
          Create legally structured rent agreements instantly with AI.
        </p>

      </div>

      {/* FORM CARD */}

      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 w-[420px] shadow-xl">

        <div className="flex flex-col gap-4">

          <input
            placeholder="Landlord Name"
            className="p-3 rounded bg-gray-800 border border-gray-700"
            onChange={(e)=>setLandlord(e.target.value)}
          />

          <input
            placeholder="Tenant Name"
            className="p-3 rounded bg-gray-800 border border-gray-700"
            onChange={(e)=>setTenant(e.target.value)}
          />

          <input
            placeholder="Monthly Rent (₹)"
            className="p-3 rounded bg-gray-800 border border-gray-700"
            onChange={(e)=>setRent(e.target.value)}
          />

          <button
            onClick={generateAgreement}
            className="bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold"
          >
            {loading ? "Generating..." : "Generate Agreement"}
          </button>

        </div>

      </div>

      {/* AGREEMENT PREVIEW */}

      {agreement && (

        <div className="mt-12 bg-white text-black p-10 rounded-xl shadow-xl w-[800px] relative">

          <h2 className="text-xl font-bold mb-6 text-center">
            Rent Agreement Preview
          </h2>

          {/* BLUR PREVIEW */}

          <div className={paid ? "" : "blur-md select-none pointer-events-none"}>

            <pre className="whitespace-pre-wrap leading-relaxed text-sm">
              {agreement}
            </pre>

          </div>

          {/* PAYWALL */}

          {!paid && (

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-xl">

              <p className="text-white text-lg mb-4">
                Unlock full agreement for ₹10
              </p>

              <button
                onClick={startPayment}
                className="bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold"
              >
                Pay ₹10 to Unlock
              </button>

            </div>

          )}

          {/* DOWNLOAD BUTTONS */}

          {paid && (

            <div className="flex gap-4 justify-center mt-8">

              <button
                onClick={downloadPDF}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Download PDF
              </button>

              <button
                onClick={downloadDOCX}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Download Word
              </button>

            </div>

          )}

        </div>

      )}

    </main>

  );

}

