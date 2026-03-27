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
      <section className="relative px-6 mt-24 text-center">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <h1 className="text-6xl font-bold max-w-4xl mx-auto leading-tight">
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

      {/* HERO MOCK CARD */}
      <section className="mt-20 flex justify-center px-6">
        <div className="bg-white border shadow-2xl rounded-3xl p-6 w-full max-w-4xl backdrop-blur-lg">

          <div className="flex justify-between mb-4 text-sm text-gray-500">
            <span>Privacy Policy Preview</span>
            <span>AI Generated</span>
          </div>

          <div className="h-[200px] bg-gradient-to-b from-gray-100 to-white rounded-xl flex items-center justify-center text-gray-400">
            Document Preview UI
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-32 px-10 grid md:grid-cols-3 gap-10">

        <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 border shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">⚡ Instant AI Generation</h3>
          <p className="mt-3 text-gray-600">
            Generate policies in seconds with AI automation.
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

      {/* STATS (PREMIUM TOUCH) */}
      <section className="mt-28 text-center">
        <div className="flex justify-center gap-12 text-gray-700">
          <div>
            <p className="text-3xl font-bold">10K+</p>
            <p className="text-sm text-gray-500">Policies Generated</p>
          </div>

          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-gray-500">Active Users</p>
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
