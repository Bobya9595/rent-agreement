export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white/80 backdrop-blur sticky top-0 z-50 border-b">
        <h1 className="text-xl font-bold text-blue-700">
          LegalFormat
        </h1>

        <div className="flex gap-4">
          <a href="/generate" className="text-gray-600 hover:text-black">
            Generate
          </a>

          <a
            href="/generate"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-sm"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h1 className="text-5xl font-bold max-w-3xl leading-tight">
          Create Legal Policies for Your Website in Minutes
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          AI-powered legal documents tailored for Indian startups,
          freelancers, and businesses.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/generate"
            className="px-6 py-3 bg-orange-500 text-white rounded-xl text-lg shadow-md"
          >
            🚀 Start Free
          </a>

          <button className="px-6 py-3 border rounded-xl text-lg">
            View Sample
          </button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="mt-20 text-center">
        <p className="text-gray-500 text-sm">
          Trusted by startups and creators across India
        </p>

        <div className="flex justify-center gap-10 mt-4 text-gray-400">
          <span>Startup</span>
          <span>Freelancers</span>
          <span>Agencies</span>
          <span>E-commerce</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-24 px-10 grid md:grid-cols-3 gap-8">
        
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">⚡ Instant Generation</h3>
          <p className="mt-3 text-gray-600">
            Generate legal policies in seconds using advanced AI.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🇮🇳 India-Compliant</h3>
          <p className="mt-3 text-gray-600">
            Built specifically for Indian legal frameworks and needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">🔒 Secure & Reliable</h3>
          <p className="mt-3 text-gray-600">
            Your data is encrypted and never shared.
          </p>
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="mt-24 text-center px-6">
        <h2 className="text-3xl font-bold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          
          <div>
            <div className="text-3xl">📝</div>
            <h3 className="font-semibold mt-3">Enter Details</h3>
            <p className="text-gray-600 mt-2">
              Fill basic information about your website.
            </p>
          </div>

          <div>
            <div className="text-3xl">🤖</div>
            <h3 className="font-semibold mt-3">AI Generates</h3>
            <p className="text-gray-600 mt-2">
              Our AI creates a structured legal document.
            </p>
          </div>

          <div>
            <div className="text-3xl">📄</div>
            <h3 className="font-semibold mt-3">Download</h3>
            <p className="text-gray-600 mt-2">
              Pay once and download your document instantly.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mt-28 mb-20 px-6">
        <div className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-lg">
          
          <h2 className="text-3xl font-bold">
            Ready to Generate Your Policy?
          </h2>

          <p className="mt-3 text-blue-100">
            Start for free. Pay only when you download.
          </p>

          <a
            href="/generate"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold"
          >
            Get Started Now
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm pb-10">
        © 2026 LegalFormat. All rights reserved.
      </footer>

    </main>
  );
}
