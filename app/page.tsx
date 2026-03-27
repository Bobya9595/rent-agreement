export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 backdrop-blur bg-white/70 sticky top-0 z-50 border-b">
        <h1 className="text-xl font-bold text-blue-700">
          LegalFormat
        </h1>

        <div className="flex items-center gap-6">
          <a href="#features" className="text-gray-600 hover:text-black">
            Features
          </a>

          <a href="/generate" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow">
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 mt-24">
        <h1 className="text-5xl font-bold max-w-3xl mx-auto leading-tight">
          Create Legal Policies for Your Website in Minutes
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          AI-powered legal documents tailored for Indian startups,
          freelancers, and businesses.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/generate"
            className="px-6 py-3 bg-orange-500 text-white rounded-xl text-lg shadow hover:scale-105 transition"
          >
            🚀 Start Free
          </a>

          <button className="px-6 py-3 border rounded-xl text-lg hover:bg-gray-100 transition">
            View Sample
          </button>
        </div>

        {/* TRUST BADGE */}
        <p className="mt-6 text-sm text-gray-400">
          No signup required • Takes 30 seconds
        </p>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Trusted by founders, freelancers & agencies
        </p>

        <div className="flex justify-center gap-10 mt-4 text-gray-400 text-sm">
          <span>Startup Owners</span>
          <span>Freelancers</span>
          <span>Agencies</span>
          <span>E-commerce</span>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mt-24 px-10 grid md:grid-cols-3 gap-8">
        
        <div className="card p-8">
          <h3 className="text-xl font-semibold">⚡ Instant Generation</h3>
          <p className="mt-3 text-gray-600">
            Generate legal policies in seconds using advanced AI.
          </p>
        </div>

        <div className="card p-8">
          <h3 className="text-xl font-semibold">🇮🇳 India-Compliant</h3>
          <p className="mt-3 text-gray-600">
            Built specifically for Indian legal frameworks.
          </p>
        </div>

        <div className="card p-8">
          <h3 className="text-xl font-semibold">🔒 Secure & Private</h3>
          <p className="mt-3 text-gray-600">
            Your data is encrypted and never stored.
          </p>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="mt-28 px-6 text-center">
        <h2 className="text-3xl font-bold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10 max-w-4xl mx-auto">
          
          <div className="card p-6">
            <div className="text-3xl">📝</div>
            <h3 className="font-semibold mt-3">Enter Details</h3>
            <p className="text-gray-600 text-sm mt-2">
              Fill your website details in seconds
            </p>
          </div>

          <div className="card p-6">
            <div className="text-3xl">🤖</div>
            <h3 className="font-semibold mt-3">AI Generates</h3>
            <p className="text-gray-600 text-sm mt-2">
              AI creates structured legal document
            </p>
          </div>

          <div className="card p-6">
            <div className="text-3xl">📄</div>
            <h3 className="font-semibold mt-3">Download</h3>
            <p className="text-gray-600 text-sm mt-2">
              Pay once and download instantly
            </p>
          </div>

        </div>
      </section>

      {/* PRICING SECTION (CONVERSION BOOST) */}
      <section className="mt-28 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Simple Pricing
        </h2>

        <div className="mt-10 flex justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-lg border max-w-sm w-full">
            
            <h3 className="text-xl font-semibold">
              Pay Per Document
            </h3>

            <p className="text-4xl font-bold mt-4">
              ₹149
            </p>

            <ul className="mt-6 text-sm text-gray-600 space-y-2">
              <li>✔ Full legal document</li>
              <li>✔ Instant download</li>
              <li>✔ Lifetime access</li>
            </ul>

            <a
              href="/generate"
              className="mt-6 inline-block w-full bg-blue-600 text-white py-3 rounded-xl"
            >
              Get Started
            </a>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-28 mb-20 px-6">
        <div className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-xl">
          
          <h2 className="text-3xl font-bold">
            Ready to Create Your Policy?
          </h2>

          <p className="mt-3 text-blue-100">
            Start free. Pay only when you download.
          </p>

          <a
            href="/generate"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold"
          >
            Generate Now
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-sm pb-10">
        © 2026 LegalFormat. All rights reserved.
      </footer>

    </main>
  );
}
