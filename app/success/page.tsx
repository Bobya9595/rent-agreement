"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [agreement, setAgreement] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("agreement");
    if (data) setAgreement(data);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">

        <h1 className="text-3xl mb-4">Payment Successful 🎉</h1>

        <div className="flex gap-4 justify-center">

          <a
            href={`/api/download?text=${encodeURIComponent(agreement)}`}
            className="bg-purple-600 px-6 py-3 rounded"
          >
            Download PDF
          </a>

          <a
            href={`/api/download?type=word&text=${encodeURIComponent(agreement)}`}
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Download Word
          </a>

        </div>

      </div>
    </div>
  );
}
