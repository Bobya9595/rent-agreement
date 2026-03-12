"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import jsPDF from "jspdf";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function RentAgreementPage() {

  const router = useRouter();

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [address, setAddress] = useState("");

  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsubscribe();
  }, []);

  const generateDocument = async () => {

    setLoading(true);

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

    setDocument(data.document);

    setLoading(false);
  };

  const downloadPDF = () => {

    if (!user) {
      router.push("/login");
      return;
    }

    const pdf = new jsPDF();

    const lines = pdf.splitTextToSize(document, 180);

    pdf.text(lines, 10, 20);

    pdf.save("rent-agreement.pdf");
  };

  const copyDocument = () => {
    navigator.clipboard.writeText(document);
    alert("Document copied!");
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          AI Rent Agreement Generator
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
                placeholder="Monthly Rent (₹)"
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

          {/* PREVIEW */}

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

            <h2 className="text-xl font-semibold mb-6">
              Agreement Preview
            </h2>

            {document ? (
              <>
                <div className="whitespace-pre-wrap text-gray-300 leading-relaxed max-h-[500px] overflow-y-auto">
                  {document}
                </div>

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={copyDocument}
                    className="bg-gray-700 px-4 py-2 rounded"
                  >
                    Copy
                  </button>

                  <button
                    onClick={downloadPDF}
                    className="bg-purple-600 px-4 py-2 rounded"
                  >
                    Download PDF
                  </button>

                </div>
              </>
            ) : (
              <p className="text-gray-500">
                Your generated agreement will appear here.
              </p>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}
