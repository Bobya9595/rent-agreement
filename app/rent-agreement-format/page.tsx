"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function RentAgreementPage() {

  const [landlord, setLandlord] = useState("");
  const [tenant, setTenant] = useState("");
  const [rent, setRent] = useState("");
  const [address, setAddress] = useState("");
  const [agreement, setAgreement] = useState("");

  const generateAgreement = () => {

    const text = `
RENT AGREEMENT

This agreement is made between:

Landlord: ${landlord}
Tenant: ${tenant}

Property Address:
${address}

Monthly Rent: ₹${rent}

Both parties agree to the terms and conditions mentioned above.
`;

    setAgreement(text);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 py-20 px-6">

        {/* LEFT FORM */}

        <div>

          <h1 className="text-3xl font-bold mb-6">
            Rent Agreement Generator
          </h1>

          <div className="space-y-4">

            <input
              placeholder="Landlord Name"
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
              onChange={(e)=>setLandlord(e.target.value)}
            />

            <input
              placeholder="Tenant Name"
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
              onChange={(e)=>setTenant(e.target.value)}
            />

            <input
              placeholder="Monthly Rent"
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
              onChange={(e)=>setRent(e.target.value)}
            />

            <textarea
              placeholder="Property Address"
              className="w-full p-3 rounded bg-gray-900 border border-gray-700"
              onChange={(e)=>setAddress(e.target.value)}
            />

            <button
              onClick={generateAgreement}
              className="w-full bg-purple-600 py-3 rounded-lg"
            >
              Generate Agreement
            </button>

          </div>

        </div>

        {/* RIGHT PREVIEW */}

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

          <h2 className="text-xl font-semibold mb-4">
            Agreement Preview
          </h2>

          {agreement ? (
            <pre className="whitespace-pre-wrap text-gray-300">
              {agreement}
            </pre>
          ) : (
            <p className="text-gray-500">
              Your agreement will appear here after generation.
            </p>
          )}

        </div>

      </div>

    </main>
  );
}
