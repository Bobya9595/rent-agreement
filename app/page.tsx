export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          LegalFormat
        </h1>

        <a
          href="/generate"
          className="px-5 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
        >
          Get Started
        </a>
      </nav>

      {/* HERO */}
      <section className="relative px-6 mt-20 text-center">

        {/* GLOW BACKGROUND */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[650px] h-[650px] bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight">
          Generate Legal Policies
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            in Seconds with AI
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
          Built for Indian startups, freelancers, and businesses.
          No legal knowledge required.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/generate"
            className="px-7 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:scale-105 transition"
          >
            🚀 Start Free
          </a>

          <button className="px-7 py-3 border rounded-2xl hover:bg-gray-100 transition">
            Live Demo
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Takes 30 seconds • No signup required
        </p>
      </section>

      {/* PRODUCT PREVIEW (KEY SECTION) */}
      <section className="mt-16 flex justify-center px-6">
        <div className="bg-white border shadow-2xl rounded-3xl p-6 w-full max-w-4xl">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Privacy Policy Preview
            </span>

            <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
              AI Generated
            </span>
          </div>

          {/* DOCUMENT PREVIEW */}
          <div className="h-[260px] overflow-hidden rounded-xl border bg-white p-4 text-left text-sm text-gray-700 relative">

            <p className="font-semibold text-gray-900">
              Privacy Policy
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Effective Date: June 2024
            </p>

            <hr className="my-2" />

            <p className="font-semibold">1. Introduction</p>
            <p className="text-gray-600 mt-1">
              We value your privacy and are committed to protecting your personal
              information in accordance with applicable Indian laws.
            </p>

            <p className="font-semibold mt-3">2. Information We Collect</p>
            <p className="text-gray-600 mt-1">
              We may collect personal data such as name, email, and usage data
              when you interact with our website.
            </p>

            <p className="font-semibold mt-3">3. Use of Information</p>
            <p className="text-gray-600 mt-1">
              The collected data is used to improve services and enhance user experience.
            </p>

            {/* FADE */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-28 px-10 grid md:grid-cols-3 gap-10">

        <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 border shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">⚡ Instant AI Generation</h3>
          <p className="mt-3 text-gray-600">
            Generate policies in seconds using AI automation.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 border shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">🇮🇳 Built for India</h3>
          <p className="mt-3 text-gray-600">
            Designed for Indian compliance and businesses.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 border shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">🔒 Secure & Private</h3>
          <p className="mt-3 text-gray-600">
            Your data is safe and never stored.
          </p>
        </div>

      </section>

      {/* TRUST / STATS */}
      <section className="mt-28 text-center">
        <div className="flex justify-center gap-12 text-gray-700">
          <div>
            <p className="text-3xl font-bold">10K+</p>
            <p className="text-sm text-gray-500">Policies Generated</p>
          </div>

          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-gray-500">Users</p>
          </div>

          <div>
            <p className="text-3xl font-bold">2 min</p>
            <p className="text-sm text-gray-500">Avg Time</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mt-28 flex justify-center px-6">
        <div className="bg-white border shadow-2xl rounded-3xl p-10 max-w-md w-full text-center">

          <h3 className="text-xl font-semibold">Simple Pricing</h3>

          <p className="text-5xl font-bold mt-4">
            ₹149
          </p>

          <p className="text-gray-500 mt-2">per document</p>

          <ul className="mt-6 text-gray-600 space-y-2 text-sm">
            <li>✔ Full policy</li>
            <li>✔ Instant download</li>
            <li>✔ Lifetime access</li>
          </ul>

          <a
            href="/generate"
            className="mt-6 block bg-blue-600 text-white py-3 rounded-xl hover:scale-105 transition"
          >
            Get Started
          </a>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-32 mb-20 px-6 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-xl">
          
          <h2 className="text-3xl font-bold">
            Start Generating Your Policy Today
          </h2>

          <p className="mt-3 text-blue-100">
            No signup. No complexity. Just results.
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
      <footer className="text-center text-gray-400 pb-10 text-sm">
        © 2026 LegalFormat
      </footer>

    </main>
  );
}
