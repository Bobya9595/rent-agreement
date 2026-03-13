
"use client";

import { useState, useEffect } from "react";
import jsPDF from "jspdf";

import Navbar from "@/components/Navbar";
import DocumentViewer from "@/components/DocumentViewer";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function RentAgreementPage() {

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [address, setAddress] = useState("");

  const [documentText, setDocumentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  /* Generate Agreement */

  const generateDocument = async () => {

    if (!landlord || !tenant || !rent || !address) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {

      const res = await fetch("/api/generate-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          landlord,
          tenant,
          rent,
          address
        })
      });

      const data = await res.json();

      setDocumentText(data.document);

    } catch (error) {
      console.error(error);
      alert("Error generating document");
    }

    setLoading(false);

  };

  /* Copy document */

  const copyDocument = () => {
    navigator.clipboard.writeText(documentText);
    alert("Copied to clipboard");
  };

  /* Start Stripe Payment */

  const startPayment = async () => {

    if (!user) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    try {

      const res = await fetch("/api/create-checkout-session", {
        method: "POST"
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Payment session failed");
      }

    } catch (error) {

      console.error(error);
      alert("Payment error");

    }

  };

  /* Download PDF */

  const downloadPDF = () => {

    const pdf = new jsPDF({
      unit: "pt",
      format: "a4"
    });

    const margin = 60;
    const width = 480;

    pdf.setFont("Times", "Normal");
    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(documentText, width);

    let y = 80;

    lines.forEach((line: string) => {

      if (y > 750) {
        pdf.addPage();
        y = 80;
      }

      pdf.text(line, margin, y);
      y += 18;

    });

    pdf.save("rent-agreement.pdf");

  };

  return (

    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Rent Agreement Generator
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

            <h2 className="text-xl font-semibold mb-6">
              Agreement Details
            </h2>

            <div className="space-y-4">

              <input
                placeholder="Landlord Name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setLandlord(e.target.value)}
              />

              <input
                placeholder="Tenant Name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setTenant(e.target.value)}
              />

              <input
                placeholder="Monthly Rent"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setRent(e.target.value)}
              />

              <textarea
                placeholder="Property Address"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700"
                onChange={(e)=>setAddress(e.target.value)}
              />

              <button
                onClick={generateDocument}
                className="w-full bg-purple-600 py-3 rounded-lg"
              >
                {loading ? "Generating..." : "Generate Agreement"}
              </button>

            </div>

          </div>

          {/* DOCUMENT PREVIEW */}

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

            {documentText ? (

              <>
                <DocumentViewer content={documentText} />

                <div className="flex gap-4 mt-6 flex-wrap">

                  <button
                    onClick={copyDocument}
                    className="bg-gray-700 px-4 py-2 rounded"
                  >
                    Copy
                  </button>

                  <button
                    onClick={startPayment}
                    className="bg-purple-600 px-4 py-2 rounded"
                  >
                    Pay ₹10 & Download
                  </button>

                  <button
                    onClick={downloadPDF}
                    className="bg-green-600 px-4 py-2 rounded"
                  >
                    Download PDF
                  </button>

                </div>
              </>

            ) : (

              <p className="text-gray-400">
                Generate an agreement to preview the document.
              </p>

            )}

          </div>

        </div>

      </div>

    </main>

  );
}

