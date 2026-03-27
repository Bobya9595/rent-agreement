"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [paid, setPaid] = useState(false);

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
        body: JSON.stringify({ website }),
      });

      const data = await res.json();
      setPolicy(data.policy);

      setTimeout(() => setShowPaywall(true), 1000);
    } catch {
      alert("Error generating policy");
    }

    setLoading(false);
  };

  // 💳 FIXED PAYMENT FUNCTION
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

  const handleDownload = () => {
    const blob = new Blob([policy], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "privacy-policy.txt";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-blue-700">
          LegalFormat
        </h1>

        <a href="/" className="text-sm text-gray-500">
          ← Back
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Generate Privacy Policy
          </h2>

          <input
            type="text"
            placeholder="Enter website name"
            className="w-full border p-3 rounded-xl"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="bg-white p-8 rounded-2xl shadow-md relative">
          <h2 className="text-xl font-semibold mb-4">
            Live Preview
          </h2>

          {!policy && (
            <p className="text-gray-400">
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
            <button
              onClick={handleDownload}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl"
            >
              Download Policy
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
