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

  // CLEAN TEXT
  const cleanPolicy = (text: string) =>
    text.replace(/\*\*/g, "").replace(/#/g, "");

  const formattedPolicy = cleanPolicy(policy);

  // GENERATE
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

    setTimeout(() => setShowPaywall(true), 800);
    setLoading(false);
  };

  // PAYMENT
  const handlePayment = async () => {
    if (!(window as any).Razorpay) {
      alert("Refresh page");
      return;
    }

    const res = await fetch("/api/create-order", { method: "POST" });
    const order = await res.json();

    const rzp = new (window as any).Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      handler: () => {
        setShowPaywall(false);
        setPaid(true);
      },
    });

    rzp.open();
  };

  // PDF
  const handlePDFDownload = () => {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.getWidth();

    doc.setFillColor(0, 0, 0);
    doc.rect(0, 0, width, 20, "F");

    doc.setTextColor(255, 255, 255);
    doc.text("LegalFormat", 10, 13);

    doc.setTextColor(0, 0, 0);
    doc.setFont("Times", "Bold");
    doc.text("PRIVACY POLICY", width / 2, 30, { align: "center" });

    let y = 40;

    formattedPolicy.split("\n").forEach((line) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }

      if (/^\d+\./.test(line)) {
        doc.setFont("Times", "Bold");
      } else {
        doc.setFont("Times", "Normal");
      }

      const split = doc.splitTextToSize(line, 180);
      doc.text(split, 10, y);
      y += split.length * 6;
    });

    doc.save("policy.pdf");
  };

  // WORD
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
            ...formattedPolicy.split("\n").map((line) =>
              /^\d+\./.test(line)
                ? new Paragraph({
                    text: line,
                    heading: HeadingLevel.HEADING_2,
                  })
                : new Paragraph({ text: line })
            ),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "policy.docx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600">LegalFormat</h1>
        <a href="/" className="text-gray-500">← Back</a>
      </div>

      {/* SOCIAL PROOF */}
      <div className="text-center mb-6 text-sm text-gray-500">
        ⭐ Rated 4.8 by 1000+ founders
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border">

          <h2 className="text-2xl font-bold mb-2">
            Create Your Privacy Policy
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            No legal knowledge needed. Ready in seconds.
          </p>

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

          <p className="text-xs text-gray-400 text-center mt-2">
            No signup required • Instant result
          </p>

          {/* TRUST */}
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>✅ Trusted by 1000+ users</p>
            <p>⚡ Instant generation</p>
            <p>🔒 Secure payment</p>
            <p>📄 PDF & Word download</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border relative">

          {!formattedPolicy && (
            <p className="text-gray-400">Preview will appear here...</p>
          )}

          {formattedPolicy && (
            <div className="relative max-h-[500px] overflow-hidden">

              {/* CONTENT */}
              <div className={showPaywall && !paid ? "blur-sm" : ""}>
                {formattedPolicy.split("\n").map((line, i) =>
                  /^\d+\./.test(line) ? (
                    <p key={i} className="font-semibold text-lg mt-4">
                      {line}
                    </p>
                  ) : (
                    <p key={i} className="text-sm text-gray-700 mt-2">
                      {line}
                    </p>
                  )
                )}
              </div>

              {/* PAYWALL */}
              {showPaywall && !paid && (
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent text-center p-6">

                  <p className="font-semibold text-lg">
                    🔒 Unlock Full Legal Document
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    One-time payment. Instant download.
                  </p>

                  <button
                    onClick={handlePayment}
                    className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg"
                  >
                    Unlock for ₹149
                  </button>
                </div>
              )}
            </div>
          )}

          {/* DOWNLOAD */}
          {paid && (
            <div className="mt-6 flex gap-4">
              <button onClick={handlePDFDownload} className="w-full bg-green-600 text-white py-3 rounded-xl">
                Download PDF
              </button>
              <button onClick={handleWordDownload} className="w-full bg-blue-600 text-white py-3 rounded-xl">
                Download Word
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
