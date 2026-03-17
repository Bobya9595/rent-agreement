"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";

export default function RentAgreementPage() {
  const router = useRouter();

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [rules, setRules] = useState("");

  const [agreement, setAgreement] = useState("");
  const [loading, setLoading] = useState(false);

  /* ✅ GENERATE AGREEMENT */
  const generateAgreement = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/generate-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ landlord, tenant, rent, rules }),
      });

      const data = await res.json();
      setAgreement(data.document);
    } catch (err) {
      alert("Error generating agreement");
    }

    setLoading(false);
  };

  /* ✅ PAYMENT */
  const handlePayment = async () => {
    console.log("CLICKED PAY BUTTON"); // debug

    if (!auth.currentUser) {
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      const data = await res.json();
      console.log("Stripe response:", data);

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Payment failed");
      }
    } catch (err) {
      console.error(err);
      alert("Payment error");
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white px-10 py-12">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-10">
        Legal<span className="text-purple-500">Format</span>
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6">
            Rent Agreement Details
          </h2>

          <div className="flex flex-col gap-4">

            <input
              placeholder="Landlord Name"
              className="p-3 rounded bg-gray-800 border border-gray-700"
              onChange={(e) => setLandlord(e.target.value)}
            />

            <input
              placeholder="Tenant Name"
              className="p-3 rounded bg-gray-800 border border-gray-700"
              onChange={(e) => setTenant(e.target.value)}
            />

            <input
              placeholder="Monthly Rent (₹)"
              className="p-3 rounded bg-gray-800 border border-gray-700"
              onChange={(e) => setRent(e.target.value)}
            />

            <textarea
              placeholder="Optional rules"
              className="p-3 rounded bg-gray-800 border border-gray-700 h-24"
              onChange={(e) => setRules(e.target.value)}
            />

            <button
              onClick={generateAgreement}
              className="bg-gradient-to-r from-purple-500 to-purple-700 py-3 rounded-lg font-semibold"
            >
              {loading ? "Generating..." : "Generate Agreement"}
            </button>

          </div>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="relative bg-white text-black rounded-xl shadow-xl overflow-hidden">

          {/* HEADER */}
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Agreement Preview</h2>
          </div>

          {agreement ? (
            <div className="relative">

              {/* DOCUMENT */}
              <div className="p-6 blur-sm select-none">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                  {agreement}
                </pre>
              </div>

              {/* PAYWALL */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">

                <div className="bg-[#0f172a] text-white p-8 rounded-xl text-center shadow-2xl w-[300px]">

                  <p className="mb-4 text-lg font-semibold">
                    Unlock full agreement
                  </p>

                  <p className="mb-6 text-sm text-gray-300">
                    Pay ₹10 to download
                  </p>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-3 rounded-lg font-semibold hover:scale-105 transition"
                  >
                    Pay ₹10 & Download
                  </button>

                </div>

              </div>

            </div>
          ) : (
            <p className="p-6 text-gray-500">
              Generate the agreement to preview the document.
            </p>
          )}

        </div>

      </div>
    </main>
  );
}
