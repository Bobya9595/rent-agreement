"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c12] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6">
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-white">Legal</span>
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Format
          </span>
        </h1>

        <div className="flex gap-6 items-center">
          <Link href="/pricing" className="text-gray-400 hover:text-white transition">
            Pricing
          </Link>

          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-8 md:px-16 py-24 max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI Legal Intelligence <br />
            for{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Indian Agreements
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Generate legally compliant documents or analyze existing agreements
            to detect missing clauses, compliance risks & legal gaps instantly.
          </p>

          <div className="flex gap-4">
            <Link
              href="/generate"
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 transition"
            >
              Generate Document
            </Link>

            <Link
              href="/analyze"
              className="border border-gray-600 px-8 py-3 rounded-xl hover:border-purple-500 transition"
            >
              Analyze Agreement
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - AI PREVIEW CARD */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-30 rounded-2xl"></div>

          <div className="relative bg-[#16161d] border border-gray-800 rounded-2xl p-8 shadow-2xl">

            <h3 className="text-lg font-semibold mb-6 text-gray-300">
              AI Risk Analysis Preview
            </h3>

            <div className="mb-6">
              <div className="text-4xl font-bold text-purple-500">
                82<span className="text-gray-400 text-xl">/100</span>
              </div>
              <p className="text-gray-400 text-sm">
                Medium Risk Detected
              </p>
            </div>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-green-400">✓ Rent Clause</span>
                <span className="text-gray-400">Valid</span>
              </div>

              <div className="flex justify-between">
                <span className="text-yellow-400">⚠ Termination Clause</span>
                <span className="text-gray-400">Missing</span>
              </div>

              <div className="flex justify-between">
                <span className="text-red-400">✖ Stamp Duty Clause</span>
                <span className="text-gray-400">Not Mentioned</span>
              </div>

              <div className="flex justify-between">
                <span className="text-green-400">✓ Dispute Resolution</span>
                <span className="text-gray-400">Present</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-8 md:px-16 py-24 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-16">
          Two Powerful AI Engines
        </h3>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800 hover:border-purple-600 transition">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              AI Document Generator
            </h4>
            <p className="text-gray-400 mb-4">
              Create rent agreements, offer letters, NDAs, HR contracts and more in minutes.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✔ Smart clause suggestions</li>
              <li>✔ State compliance ready</li>
              <li>✔ PDF & DOCX export</li>
            </ul>
          </div>

          <div className="bg-[#16161d] p-8 rounded-2xl border border-gray-800 hover:border-blue-600 transition">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              AI Legal Analyzer
            </h4>
            <p className="text-gray-400 mb-4">
              Upload agreements to detect risks, missing clauses and compliance gaps instantly.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>✔ Risk scoring engine</li>
              <li>✔ Missing clause detection</li>
              <li>✔ AI improvement suggestions</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-[#111118]">
        <h3 className="text-4xl font-bold mb-6">
          Upgrade Your Legal Intelligence
        </h3>

        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Start Free Today
        </Link>
      </section>

    </main>
  );
}
