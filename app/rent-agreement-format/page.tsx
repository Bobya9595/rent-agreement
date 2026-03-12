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

This Rent Agreement is made between:

Landlord: ${landlord}
Tenant: ${tenant}

Property Address:
${address}

Monthly Rent: ₹${rent}

Both parties agree to the terms and conditions mentioned above.

Generated using LegalFormat
`;

    setAgreement(text);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* SEO TITLE */}

        <h1 className="text-4xl font-bold mb-6">
          Rent Agreement Format India (Free Generator)
        </h1>

        {/* SEO CONTENT */}

        <p className="text-gray-400 mb-10">
          A rent agreement is a legal document used between a landlord and tenant
          when renting property. This agreement defines rent amount, property
          details, responsibilities, and duration of stay.
        </p>

        {/* GENERATOR TOOL */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}

          <div className="space-y-4">

            <h2 className="text-2xl font-semibold mb-4">
              Generate Rent Agreement
            </h2>

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

          {/* PREVIEW */}

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

        {/* SEO SECTION */}

        <div className="mt-20 space-y-6 text-gray-400">

          <h2 className="text-2xl font-semibold text-white">
            What is a Rent Agreement?
          </h2>

          <p>
            A rent agreement is a legal contract between a landlord and tenant
            that outlines the terms of renting property. It includes information
            such as rent amount, payment schedule, property address, and
            responsibilities of both parties.
          </p>

          <h2 className="text-2xl font-semibold text-white">
            Why is a Rent Agreement Important?
          </h2>

          <p>
            A written rent agreement protects both the landlord and tenant from
            legal disputes. It clearly defines rent payment terms, property use,
            and responsibilities.
          </p>

        </div>

      </div>

    </main>
  );
}
