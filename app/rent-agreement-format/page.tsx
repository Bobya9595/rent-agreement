"use client";

import { db } from "../../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import DocumentViewer from "../../components/DocumentViewer";

import jsPDF from "jspdf";

import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

import { Document, Packer, Paragraph } from "docx";
import { saveAs } from "file-saver";

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

  // Save document if user logged in
  if (user) {

    await addDoc(collection(db, "documents"), {
      userId: user.uid,
      type: "rent-agreement",
      content: data.document,
      createdAt: serverTimestamp()
    });

  }

  setLoading(false);

};

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

  const copyDocument = () => {
    navigator.clipboard.writeText(document);
    alert("Document copied!");
  };

  const downloadPDF = () => {

    if (!user) {
      router.push("/login");
      return;
    }

    const pdf = new jsPDF({
      unit: "pt",
      format: "a4"
    });

    const margin = 60;
    const pageWidth = 480;

    pdf.setFont("Times", "Normal");
    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(document, pageWidth);

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

  const downloadDOCX = async () => {

    if (!user) {
      router.push("/login");
      return;
    }

    const lines = document.split("\n");

    const paragraphs = lines.map(
      (line) =>
        new Paragraph({
          text: line,
          spacing: {
            after: 200
          }
        })
    );

    const doc = new Document({
      sections: [
        {
          children: paragraphs
        }
      ]
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, "rent-agreement.docx");
  };

  return (

    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-center mb-12">
          Rent Agreement Generator
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM PANEL */}

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

          {/* DOCUMENT PANEL */}

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

            {document ? (

              <>
                <DocumentViewer content={document} />

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

                  <button
                    onClick={downloadDOCX}
                    className="bg-blue-600 px-4 py-2 rounded"
                  >
                    Download DOCX
                  </button>

                </div>
              </>

            ) : (

              <p className="text-gray-500">
                Generate an agreement to preview the document.
              </p>

            )}

          </div>

        </div>

      </div>

    </main>
  );
}

