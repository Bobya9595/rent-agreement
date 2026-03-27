"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [businessType, setBusinessType] = useState("SaaS");
  const [country, setCountry] = useState("India");
  const [collectsData, setCollectsData] = useState("Yes");
  const [usesCookies, setUsesCookies] = useState("Yes");
  const [thirdParty, setThirdParty] = useState("Google Analytics");

  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paid, setPaid] = useState(false);

  // 🔥 Generate Policy
  const handleGenerate = async () => {
    if (!website) return alert("Enter website name");

    setLoading(true);
    setPolicy("");
    setShowPaywall(false);
    setPaid(false);

    try {
      const res = await fetch("/api/generate-policy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website,
          businessType,
          country,
          collectsData,
          usesCookies,
          thirdParty,
        }),
      });

      const data = await res.json();
      setPolicy(data.policy);

      setTimeout(() => setShowPaywall(true), 1000);
    } catch {
      alert("Error generating policy");
    }

    setLoading(false);
  };

  // 💳 Payment
  const handlePayment = async () => {
    if (!(window as any).Razorpay) {
      alert("Payment system not loaded. Refresh page.");
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
      description: "Download Policy",
      order_id: order.id,

      handler: function () {
        alert("Payment Successful 🎉");
        setShowPaywall(false);
        setPaid(true);
      },

      theme: {
        color: "#2563eb",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  // 📄 PDF Download
  const handlePDFDownload = () => {
    const doc = new jsPDF();

    doc.setFont("Times", "Bold");
    doc.setFontSize(18);
    doc.text("Privacy Policy", 10, 15);

    doc.setFont("Times", "Normal");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(policy, 180);
    doc.text(lines, 10, 30);

    doc.save("LegalFormat-Policy.pdf");
  };

  // 📄 Word Download
  const handleWordDownload = async () => {
    const doc = new Document({
      sections: [
        {
          children: policy
            .split("\n")
            .map((line) => new Paragraph(line)),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "LegalFormat-Policy.docx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-blue-700">
          LegalFormat
        </h1>

        <a href="/" className="text-sm text-gray-500 hover:text-black">
          ← Back
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Generate Privacy Policy
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Fill details to generate a customized policy
          </p>

          <input
            type="text"
            placeholder="Website Name"
            className="w-full border p-3 rounded-xl"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          {/* NEW INPUTS */}
          <select
            className="w-full border p-3 rounded-xl mt-3"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option>SaaS</option>
            <option>E-commerce</option>
            <option>Blog</option>
            <option>Portfolio</option>
          </select>

          <select
            className="w-full border p-3 rounded-xl mt-3"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>India</option>
            <option>USA</option>
            <option>Global</option>
          </select>

          <select
            className="w-full border p-3 rounded-xl mt-3"
            value={collectsData}
            onChange={(e) => setCollectsData(e.target.value)}
          >
            <option>Collects Personal Data: Yes</option>
            <option>Collects Personal Data: No</option>
          </select>

          <select
            className="w-full border p-3 rounded-xl mt-3"
            value={usesCookies}
            onChange={(e) => setUsesCookies(e.target.value)}
          >
            <option>Uses Cookies: Yes</option>
            <option>Uses Cookies: No</option>
          </select>

          <input
            type="text"
            placeholder="Third-party services (e.g. Google Analytics)"
            className="w-full border p-3 rounded-xl mt-3"
            value={thirdParty}
            onChange={(e) => setThirdParty(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-white p-8 rounded-2xl shadow-md relative">
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
              <pre className="whitespace-pre-wrap text-sm text-gray-800">
                {policy}
              </pre>

              {/* PAYWALL */}
              {showPaywall && !paid && (
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent flex items-end justify-center">
                  <div className="bg-white p-5 rounded-xl shadow-xl text-center mb-4 border">
                    <p className="font-semibold text-lg">
                      🔒 Unlock Full Policy
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
