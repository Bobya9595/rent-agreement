"use client";

export default function Success() {
  const downloadPDF = () => {
    const text = localStorage.getItem("agreement");
    const blob = new Blob([text || ""], { type: "application/pdf" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "agreement.pdf";
    link.click();
  };

  const downloadWord = () => {
    const text = localStorage.getItem("agreement");
    const blob = new Blob([text || ""], { type: "application/msword" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "agreement.doc";
    link.click();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white gap-4">
      <h1 className="text-3xl">Payment Successful 🎉</h1>

      <button onClick={downloadPDF} className="bg-purple-600 px-6 py-2 rounded">
        Download PDF
      </button>

      <button onClick={downloadWord} className="bg-blue-600 px-6 py-2 rounded">
        Download Word
      </button>
    </div>
  );
}
