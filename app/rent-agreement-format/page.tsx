"use client";

import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import RentAgreementPDF from "@/components/RentAgreementPDF";

export default function RentAgreementPage() {
  const [formData, setFormData] = useState({
    date: "",
    landlord: "",
    tenant: "",
    address: "",
    rent: "",
    rules: "",
  });

  const [generated, setGenerated] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      
      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        Legal<span className="text-purple-500">Format</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT FORM */}
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800 shadow-xl">
          <h2 className="text-lg font-semibold mb-4">
            Rent Agreement Details
          </h2>

          <input
            name="date"
            placeholder="Agreement Date"
            onChange={handleChange}
            className="w-full mb-3 p-3 rounded bg-[#1e293b] outline-none"
          />

          <input
            name="landlord"
            placeholder="Landlord Name"
            onChange={handleChange}
            className="w-full mb-3 p-3 rounded bg-[#1e293b] outline-none"
          />

          <input
            name="tenant"
            placeholder="Tenant Name"
            onChange={handleChange}
            className="w-full mb-3 p-3 rounded bg-[#1e293b] outline-none"
          />

          <input
            name="address"
            placeholder="Property Address"
            onChange={handleChange}
            className="w-full mb-3 p-3 rounded bg-[#1e293b] outline-none"
          />

          <input
            name="rent"
            placeholder="Monthly Rent"
            onChange={handleChange}
            className="w-full mb-3 p-3 rounded bg-[#1e293b] outline-none"
          />

          <textarea
            name="rules"
            placeholder="Rules (optional)"
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded bg-[#1e293b] outline-none"
          />

          {/* GENERATE BUTTON */}
          <button
            onClick={handleGenerate}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition"
          >
            Generate Agreement
          </button>

          {/* DOWNLOAD BUTTON (FIXED TS ERROR) */}
          {generated && (
            <div className="mt-4">
              <PDFDownloadLink
                document={<RentAgreementPDF data={formData} />}
                fileName="rent-agreement.pdf"
                className="block text-center py-3 rounded-lg bg-green-600 hover:bg-green-700 transition"
              >
                <span>Download PDF</span>
              </PDFDownloadLink>
            </div>
          )}
        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-3 border-b border-gray-800 text-sm text-gray-400">
            Agreement Preview
          </div>

          {/* SCROLLABLE PREVIEW */}
          <div className="h-[600px] overflow-y-auto p-6 bg-white text-black">

            {!generated ? (
              <p className="text-gray-400">
                Fill details and click Generate...
              </p>
            ) : (
              <div className="space-y-4 text-sm leading-6">

                <h2 className="text-center text-lg font-bold">
                  RENT AGREEMENT
                </h2>

                <p>
                  This Rent Agreement is made on{" "}
                  <b>{formData.date}</b>.
                </p>

                <p>
                  Between <b>{formData.landlord}</b> (Landlord)
                </p>

                <p>
                  And <b>{formData.tenant}</b> (Tenant)
                </p>

                <p>
                  Property Address: <b>{formData.address}</b>
                </p>

                <p>
                  Monthly Rent: ₹{formData.rent}
                </p>

                {formData.rules && (
                  <p>
                    Rules: <b>{formData.rules}</b>
                  </p>
                )}

                <p>
                  Both parties agree to the terms mentioned above.
                </p>

                {/* SIGNATURE */}
                <div className="flex justify-between mt-16">
                  <div className="text-center">
                    <div className="border-t w-40 mx-auto"></div>
                    <p>Landlord</p>
                  </div>

                  <div className="text-center">
                    <div className="border-t w-40 mx-auto"></div>
                    <p>Tenant</p>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
