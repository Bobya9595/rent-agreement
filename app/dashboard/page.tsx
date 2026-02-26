export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight">
          LegalFormat
        </h1>

        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-gray-600 hover:text-black transition">
            Pricing
          </a>

          <a
            href="/rent-agreement-auditor"
            className="bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition duration-300"
          >
            Start Free
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-24 max-w-5xl mx-auto space-y-8">

        <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
          AI Legal Compliance SaaS
        </div>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Know If Your Rent Agreement
          <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Is Legally Safe
          </span>
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Detect missing clauses, compliance gaps and legal risks instantly.
          Built specifically for Indian rent agreements.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/rent-agreement-auditor"
            className="bg-black text-white px-8 py-4 rounded-xl text-lg shadow hover:scale-105 transition duration-300"
          >
            Analyze Agreement
          </a>

          <a
            href="#pricing"
            className="border border-gray-300 px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition duration-300"
          >
            View Pricing
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Free basic risk score • No signup required
        </p>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <FeatureCard
          title="Instant Risk Score"
          description="Structured compliance score with severity breakdown."
        />
        <FeatureCard
          title="Clause Detection"
          description="Detect missing indemnity, lock-in, jurisdiction and termination clauses."
        />
        <FeatureCard
          title="State-Aware Checks"
          description="Highlights Maharashtra leave & license and other state compliance gaps."
        />
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 bg-gray-50">
        <div className="max-w-xl mx-auto text-center space-y-10">
          <h3 className="text-4xl font-semibold">
            Simple Pricing
          </h3>

          <div className="bg-white rounded-2xl shadow-lg p-10 border hover:shadow-xl transition duration-300">
            <p className="text-lg font-semibold">Pro Plan</p>

            <p className="text-5xl font-bold mt-4">
              ₹299
              <span className="text-lg font-normal text-gray-500">
                {" "} / month
              </span>
            </p>

            <ul className="space-y-2 text-gray-600 mt-6">
              <li>Unlimited Agreement Analysis</li>
              <li>Full Compliance Report PDF</li>
              <li>AI Corrected Agreement</li>
              <li>Priority Processing</li>
            </ul>

            <a
              href="/rent-agreement-auditor"
              className="block mt-8 bg-black text-white px-6 py-4 rounded-xl hover:scale-105 transition duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} LegalFormat India. All rights reserved.
      </footer>

    </main>
  );
}

function FeatureCard({ title, description }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border hover:-translate-y-1 hover:shadow-xl transition duration-300">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
