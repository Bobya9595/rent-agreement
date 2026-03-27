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

      // Trigger paywall after generation
      setTimeout(() => {
        setShowPaywall(true);
      }, 1000);
    } catch (err) {
      alert("Error generating policy");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        Privacy Policy Generator
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* LEFT: FORM */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">
            Enter Details
          </h2>

          <input
            type="text"
            placeholder="Website Name (e.g. mysite.com)"
            className="w-full border p-3 rounded-lg"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Generating..." : "Generate Policy"}
          </button>
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="bg-white p-6 rounded-xl shadow-sm relative">
          <h2 className="text-lg font-semibold mb-4">
            Preview
          </h2>

          {!policy && (
            <p className="text-gray-500">
              Your generated policy will appear here...
            </p>
          )}

          {policy && (
            <div className="relative max-h-[500px] overflow-hidden">
              
              {/* TEXT */}
              <pre className="whitespace-pre-wrap text-sm text-gray-800">
                {policy}
              </pre>

              {/* BLUR PAYWALL */}
              {showPaywall && (
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center">
                  
                  <div className="bg-white p-4 rounded-lg shadow-md text-center mb-4">
                    <p className="font-semibold">
                      🔒 Unlock Full Policy
                    </p>

                    <p className="text-sm text-gray-600 mt-1">
                      Download complete document
                    </p>

                    <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg">
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
