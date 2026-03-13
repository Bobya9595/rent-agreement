"use client";

import { useState } from "react";

export default function RentAgreementPage() {

  const [document, setDocument] = useState("");

  const generateAgreement = async () => {

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

    <div style={{ maxWidth: "800px", margin: "auto" }}>

      <h1>Rent Agreement Generator</h1>

      <button onClick={generateAgreement}>
        Generate Agreement
      </button>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {document}
      </pre>

      {document && (

        <button onClick={handlePayment}>
          Pay ₹10 & Download
        </button>

      )}

    </div>

  );
}
