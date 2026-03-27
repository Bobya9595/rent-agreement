"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [policy, setPolicy] = useState("");
  const [showPaywall, setShowPaywall] = useState(false);

  const handleGenerate = async () => {
    if (!website) return alert("Enter website name");

    setLoading(true);
    setPolicy("");
    setShowPaywall(false);

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

      setTimeout(() => {
        setShowPaywall(true);
      }, 1200);
    } catch (err) {
      alert("Error generating policy");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-blue-700">
          LegalFormat
        </h1>

        <a
          href="/"
          className="text-sm text-gray-500 hover:text-black"
        >
          ← Back
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT: FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-md transition hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Generate Privacy Policy
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Takes less than 30 seconds ⚡
          </p>

          <input
            type="text"
            placeholder="Enter your website name (example.com)"
            className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition transform hover:scale-[1.02]"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="bg-white p-8 rounded-2xl shadow-md relative transition hover:shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Live Preview
          </h2>

          {!policy && (
            <p className="text-gray-400 text-sm">
              Your policy will appear here...
            </p>
          )}

          {policy && (
            <div className="relative max-h-[500px] overflow-hidden animate-fadeIn">
              
              {/* TEXT */}
              <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
                {policy}
              </pre>

              {/* PAYWALL */}
              {showPaywall && (
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center animate-slideUp">
                  
                  <div className="bg-white p-5 rounded-xl shadow-xl text-center mb-4 border">
                    <p className="font-semibold text-lg">
                      🔒 Unlock Full Policy
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      Get complete document instantly
                    </p>

                    <button className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition">
                      Pay ₹149
                    </button>
                  </div>

                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
