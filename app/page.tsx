export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-700">
          LegalFormat
        </h1>

        <a
          href="/generate"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Get Started
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl font-bold max-w-2xl">
          Generate Legal Policies in 2 Minutes
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl">
          AI-powered legal documents tailored for Indian businesses.
          No legal knowledge required.
        </p>

        <a
          href="/generate"
          className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg text-lg"
        >
          Start Free
        </a>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 mt-20 px-10">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">⚡ Instant Generation</h3>
          <p className="text-gray-600 mt-2">
            Generate policies in seconds using AI
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">🇮🇳 India Compliant</h3>
          <p className="text-gray-600 mt-2">
            Designed for Indian legal requirements
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-lg">🔒 Secure & Reliable</h3>
          <p className="text-gray-600 mt-2">
            Your data is safe and private
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-2xl font-bold">How It Works</h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
          <div>
            <p className="text-lg font-semibold">1️⃣ Fill Details</p>
          </div>

          <div>
            <p className="text-lg font-semibold">2️⃣ AI Generates</p>
          </div>

          <div>
            <p className="text-lg font-semibold">3️⃣ Download Policy</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center mb-20">
        <h2 className="text-2xl font-bold">
          Create Your Policy Now
        </h2>

        <a
          href="/generate"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Start Free
        </a>
      </section>

    </main>
  );
}
