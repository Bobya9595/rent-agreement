"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [businessType, setBusinessType] = useState("SaaS");
  const [country, setCountry] = useState("India");

  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paid, setPaid] = useState(false);

  // Generate
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

  // Payment
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

  // Premium PDF
  const handlePDFDownload = () => {
    const doc = new jsPDF();

    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, 210, 25, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("LegalFormat", 10, 15);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text("Privacy Policy", 10, 35);

    doc.setFontSize(11);
    const lines = doc.splitTextToSize(policy, 180);
    doc.text(lines, 10, 45);

    doc.save("LegalFormat-Policy.pdf");
  };

  // Word
  const handleWordDownload = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Privacy Policy",
              heading: "Heading1",
            }),
            ...policy.split("\n").map((line) => new Paragraph({ text: line })),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "LegalFormat-Policy.docx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          LegalFormat
        </h1>

        <a href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border">

          <h2 className="text-xl font-semibold mb-4">
            Generate Privacy Policy
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Takes less than 30 seconds ⚡
          </p>

          <input
            type="text"
            placeholder="Website Name"
            className="w-full border p-3 rounded-xl mb-3 focus:ring-2 focus:ring-blue-500"
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
            <option>Blog</option>
          </select>

          <select
            className="w-full border p-3 rounded-xl mb-3"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>India</option>
            <option>USA</option>
          </select>

          <button
            onClick={handleGenerate}
            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border relative">

          <h2 className="text-xl font-semibold mb-4">
            Live Preview
          </h2>

          {!policy && (
            <p className="text-gray-400 text-sm">
              Your policy will appear here...
            </p>
          )}

          {policy && (
            <div className="relative max-h-[500px] overflow-hidden">

              <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                {policy}
              </div>

              {/* PAYWALL */}
              {showPaywall && !paid && (
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center">

                  <div className="bg-white p-6 rounded-2xl shadow-xl text-center border">
                    <p className="font-semibold text-lg">
                      🔒 Unlock Full Policy
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Pay once & download
                    </p>

                    <button
                      onClick={handlePayment}
                      className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg"
                    >
                      Pay ₹149
                    </button>
                  </div>

                </div>
              )}
            </div>
          )}

          {/* DOWNLOAD */}
          {paid && (
            <div className="mt-6 flex gap-4">
              <button
                onClick={handlePDFDownload}
                className="w-full bg-green-600 text-white py-3 rounded-xl"
              >
                Download PDF
              </button>

              <button
                onClick={handleWordDownload}
                className="w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                Download Word
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
