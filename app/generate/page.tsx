"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  AlignmentType,
} from "docx";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [businessType, setBusinessType] = useState("SaaS");
  const [country, setCountry] = useState("India");

  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paid, setPaid] = useState(false);

  // 🔥 Clean markdown
  const cleanPolicy = (text: string) => {
    return text.replace(/\*\*/g, "").replace(/#/g, "");
  };

  const formattedPolicy = cleanPolicy(policy);

  // 🔥 Generate
  const handleGenerate = async () => {
    if (!website) return alert("Enter website name");

    setLoading(true);
    setPolicy("");
    setShowPaywall(false);
    setPaid(false);

    const res = await fetch("/api/generate-policy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ website, businessType, country }),
    });

    const data = await res.json();
    setPolicy(data.policy);

    setTimeout(() => setShowPaywall(true), 1000);
    setLoading(false);
  };

  // 💳 Payment
  const handlePayment = async () => {
    if (!(window as any).Razorpay) {
      alert("Refresh page");
      return;
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "LegalFormat",
      description: "Policy Download",
      order_id: order.id,
      handler: function () {
        setShowPaywall(false);
        setPaid(true);
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  // 📄 PDF (LAWYER STYLE)
  const handlePDFDownload = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header
    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, pageWidth, 20, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("LegalFormat", 10, 13);

    // Title
    doc.setTextColor(0, 0, 0);
    doc.setFont("Times", "Bold");
    doc.setFontSize(18);
    doc.text("PRIVACY POLICY", pageWidth / 2, 30, { align: "center" });

    let y = 40;

    formattedPolicy.split("\n").forEach((line) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }

      if (/^\d+\./.test(line)) {
        doc.setFont("Times", "Bold");
        doc.setFontSize(13);
      } else {
        doc.setFont("Times", "Normal");
        doc.setFontSize(11);
      }

      const split = doc.splitTextToSize(line, 180);
      doc.text(split, 10, y);
      y += split.length * 6;
    });

    // Footer
    const pageCount = doc.getNumberOfPages();

    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.text(`Page ${i}`, pageWidth - 20, 290);
    }

    doc.save("LegalFormat-Privacy-Policy.pdf");
  };

  // 📄 WORD (LAWYER STYLE)
  const handleWordDownload = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "PRIVACY POLICY",
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),

            ...formattedPolicy.split("\n").map((line) => {
              if (/^\d+\./.test(line)) {
                return new Paragraph({
                  text: line,
                  heading: HeadingLevel.HEADING_2,
                });
              }

              return new Paragraph({
                text: line,
                spacing: { after: 200 },
              });
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "LegalFormat-Privacy-Policy.docx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-blue-600">
          LegalFormat
        </h1>
        <a href="/" className="text-gray-500">← Back</a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border">
          <h2 className="text-xl font-semibold mb-4">
            Generate Privacy Policy
          </h2>

          <input
            className="w-full border p-3 rounded-xl mb-3"
            placeholder="Website Name"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <select
            className="w-full border p-3 rounded-xl mb-3"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option>SaaS</option>
            <option>E-commerce</option>
          </select>

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border relative">

          {formattedPolicy.split("\n").map((line, i) => {
            if (/^\d+\./.test(line)) {
              return (
                <p key={i} className="font-semibold mt-4">
                  {line}
                </p>
              );
            }

            return (
              <p key={i} className="text-sm text-gray-700 mt-2">
                {line}
              </p>
            );
          })}

          {showPaywall && !paid && (
            <div className="absolute bottom-0 w-full bg-white p-6 text-center">
              <button onClick={handlePayment} className="bg-orange-500 text-white px-6 py-2 rounded-lg">
                Pay ₹149
              </button>
            </div>
          )}

          {paid && (
            <div className="mt-6 flex gap-4">
              <button onClick={handlePDFDownload} className="w-full bg-green-600 text-white py-3 rounded-xl">
                PDF
              </button>
              <button onClick={handleWordDownload} className="w-full bg-blue-600 text-white py-3 rounded-xl">
                Word
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
