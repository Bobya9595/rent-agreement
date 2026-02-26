export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">LegalFormat</h1>

        <div className="flex items-center gap-6">
          <a href="#pricing" className="text-gray-600 hover:text-black">
            Pricing
          </a>
          <a
            href="/rent-agreement-auditor"
            className="bg-black text-white px-5 py-2 rounded-lg"
          >
            Start Free
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-32 max-w-5xl mx-auto space-y-8">
        <h2 className="text-5xl font-bold">
          Know If Your Rent Agreement Is Legally Safe
        </h2>

        <p className="text-xl text-gray-600">
          Detect missing clauses, compliance gaps and legal risks instantly.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/rent-agreement-auditor"
            className="bg-black text-white px-8 py-4 rounded-xl"
          >
            Analyze Agreement
          </a>

          <a
            href="#pricing"
            className="border border-gray-300 px-8 py-4 rounded-xl"
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} LegalFormat India
      </footer>

    </main>
  );
}

