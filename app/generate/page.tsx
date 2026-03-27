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
  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paid, setPaid] = useState(false);

  // CLEAN OUTPUT
  const formattedPolicy = policy
    .replace(/\*\*/g, "")
    .replace(/#/g, "");

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
      body: JSON.stringify({ website }),
    });

    const data = await res.json();
    setPolicy(data.policy);

    setTimeout(() => setShowPaywall(true), 800);
    setLoading(false);
  };

  // PAYMENT
  const handlePayment = async () => {
    const res = await fetch("/api/create-order", { method: "POST" });
    const order = await res.json();

    const rzp = new (window as any).Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,
      handler: () => {
        setPaid(true);
        setShowPaywall(false);
      },
    });

    rzp.open();
  };

  // PDF
  const handlePDFDownload = () => {
    const doc = new jsPDF();
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    let y = 45;
    let page = 1;

    const header = () => {
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, width, 20, "F");
      doc.setTextColor(255, 255, 255);
      doc.text("LegalFormat", 10, 13);
    };

    const footer = () => {
      doc.setTextColor(150);
      doc.setFontSize(10);
      doc.text(`Page ${page}`, width - 20, height - 10);
    };

    header();

    doc.setTextColor(0);
    doc.setFont("Times", "Bold");
    doc.setFontSize(18);
    doc.text(`Privacy Policy for ${website}`, width / 2, 30, {
      align: "center",
    });

    doc.setFontSize(10);
    doc.setFont("Times", "Normal");
    doc.text(
      `This document is customized for ${website}`,
      width / 2,
      36,
      { align: "center" }
    );

    formattedPolicy.split("\n").forEach((line) => {
      if (y > height - 20) {
        footer();
        doc.addPage();
        page++;
        header();
        y = 25;
      }

      if (/^\d+\./.test(line)) {
        doc.setFont("Times", "Bold");
        doc.setFontSize(13);
        y += 4;
      } else {
        doc.setFont("Times", "Normal");
        doc.setFontSize(11);
      }

      const split = doc.splitTextToSize(line, 180);
      doc.text(split, 15, y);
      y += split.length * 6;
    });

    footer();
    doc.save(`${website}-privacy-policy.pdf`);
  };

  // WORD
  const handleWordDownload = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: `Privacy Policy for ${website}`,
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              text: `This document is customized for ${website}`,
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
    saveAs(blob, `${website}-privacy-policy.docx`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-10">

      {/* HEADER */}
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold text-blue-600">
          LegalFormat
        </h1>
        <a href="/" className="text-gray-500">← Back</a>
      </div>

      {/* SOCIAL PROOF */}
      <p className="text-center text-sm text-gray-500 mb-6">
        ⭐ Trusted by 1000+ founders
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="bg-white p-8 rounded-2xl shadow border">

          <h2 className="text-2xl font-bold mb-2">
            Create Your Privacy Policy
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            No legal knowledge needed. Ready in seconds.
          </p>

          <input
            placeholder="Website Name"
            className="w-full border p-3 rounded-xl mb-4"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>

          <p className="text-xs text-gray-400 text-center mt-2">
            No signup required • Instant result
          </p>

          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p>✅ Trusted by 1000+ users</p>
            <p>⚡ Instant generation</p>
            <p>🔒 Secure payment</p>
            <p>📄 PDF & Word download</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-8 rounded-2xl shadow border relative">

          {!policy && (
            <p className="text-gray-400">
              Your policy will appear here...
            </p>
          )}

          {policy && (
            <div className="relative max-h-[500px] overflow-hidden">

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

              {showPaywall && !paid && (
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-white via-white/90 to-transparent text-center p-6">
                  <p className="font-semibold text-lg">
                    🔒 Unlock Full Legal Document
                  </p>
                  <p className="text-sm text-gray-500">
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
