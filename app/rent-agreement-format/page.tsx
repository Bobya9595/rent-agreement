"use client";

import { useState } from "react";

export default function RentAgreementPage() {

  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAgreement = async () => {

    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        landlord: "John",
        tenant: "Rahul",
        rent: "15000",
        address: "Mumbai"
      })
    });

    const data = await res.json();

    setDocument(data.document);
    setLoading(false);
  };

  const handlePayment = async () => {

    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    const res = await fetch("/api/checkout", {
      method: "POST"
    });

    const data = await res.json();

    window.location.href = data.url;
  };

  return (

    <div style={{ maxWidth: "800px", margin: "100px auto", color: "white" }}>

      <h1>Rent Agreement Generator</h1>

      <p>Create a legal rent agreement instantly.</p>

      <button
        onClick={generateAgreement}
        style={{
          padding: "10px 20px",
          background: "#7c3aed",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {loading ? "Generating..." : "Generate Agreement"}
      </button>

      {document && (

        <div style={{ marginTop: "30px" }}>

          <h3>Agreement Preview</h3>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              background: "#111",
              padding: "20px",
              borderRadius: "8px"
            }}
          >
            {document}
          </pre>

          <button
            onClick={handlePayment}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Pay ₹10 & Download
          </button>

        </div>

      )}

    </div>
  );
}
