export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          AI Rent Agreement Compliance Auditor
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Analyze your rent agreement for legal risks, missing clauses, and
          compliance gaps in India. Get instant risk score and professional
          compliance report.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/rent-agreement-auditor"
            className="bg-black text-white px-8 py-3 rounded text-lg"
          >
            Start Free Analysis
          </a>

          <a
            href="#pricing"
            className="border px-8 py-3 rounded text-lg"
          >
            View Pricing
          </a>
        </div>

        <p className="text-sm text-gray-500">
          No signup required for basic risk score
        </p>
      </section>

      {/* TRUST */}
      <section className="text-center space-y-4">
        <p className="text-gray-500">
          Trusted by landlords, tenants and property consultants across India
        </p>
      </section>

      {/* PROBLEM */}
      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold">
          Most Rent Agreements Have Hidden Legal Risks
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Missing clauses, unclear termination terms, improper jurisdiction,
          weak lock-in conditions, or incorrect stamp duty references can
          expose you to disputes and financial loss.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded">
          <h3 className="font-semibold text-lg mb-2">
            Risk Score
          </h3>
          <p className="text-gray-600">
            Get a clear compliance score out of 100 with risk severity levels.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-semibold text-lg mb-2">
            Clause Detection
          </h3>
          <p className="text-gray-600">
            Detect missing or weak clauses like indemnity, lock-in, jurisdiction and inspection rights.
          </p>
        </div>

        <div className="p-6 border rounded">
          <h3 className="font-semibold text-lg mb-2">
            State-Aware Analysis
          </h3>
          <p className="text-gray-600">
            Highlights compliance gaps specific to Indian states including Maharashtra leave & license rules.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-10 text-center">
        <h2 className="text-3xl font-semibold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold">1. Paste Agreement</h3>
            <p className="text-gray-600">
              Paste your rent agreement securely.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. AI Compliance Scan</h3>
            <p className="text-gray-600">
              Our engine scans against structured legal checklist.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Get Report</h3>
            <p className="text-gray-600">
              Download full compliance breakdown and corrected version.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="text-center space-y-8">
        <h2 className="text-3xl font-semibold">
          Simple Pricing
        </h2>

        <div className="max-w-md mx-auto border rounded p-8 space-y-4">
          <p className="text-lg font-semibold">Pro Plan</p>
          <p className="text-4xl font-bold">₹299<span className="text-base font-normal">/month</span></p>

          <ul className="text-gray-600 space-y-2">
            <li>Unlimited Agreement Analysis</li>
            <li>Full Compliance Report PDF</li>
            <li>AI Corrected Agreement</li>
            <li>Priority Processing</li>
          </ul>

          <a
            href="/rent-agreement-auditor"
            className="block bg-black text-white px-6 py-3 rounded"
          >
            Start Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h2>

        <div>
          <p className="font-semibold">
            Is my agreement stored?
          </p>
          <p className="text-gray-600">
            No. Agreements are processed securely and not permanently stored.
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Does this replace a lawyer?
          </p>
          <p className="text-gray-600">
            No. This tool provides structured compliance insights but does not replace professional legal advice.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Ready to Check Your Rent Agreement?
        </h2>

        <a
          href="/rent-agreement-auditor"
          className="bg-black text-white px-8 py-3 rounded text-lg"
        >
          Analyze Now
        </a>
      </section>

    </main>
  );
}
