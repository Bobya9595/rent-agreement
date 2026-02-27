import PublicHeader from "@/components/PublicHeader";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <PublicHeader />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            AI Legal Intelligence
            <br />
            for Indian Agreements
          </h1>

          <p className="text-lg text-gray-600 mb-10">
            Generate rent agreements, affidavits, contracts and more
            in minutes using AI-powered automation.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/signup"
              className="px-8 py-4 bg-black text-white rounded-xl text-lg hover:bg-gray-800 transition"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="px-8 py-4 border border-black rounded-xl text-lg hover:bg-black hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                AI Document Generation
              </h3>
              <p className="text-gray-600">
                Automatically generate legally structured documents
                tailored for Indian law.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                Smart Analysis
              </h3>
              <p className="text-gray-600">
                Analyze contracts and agreements using AI for risks
                and missing clauses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">
                Secure & Cloud-Based
              </h3>
              <p className="text-gray-600">
                All your documents stored securely in the cloud with
                encrypted access.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} LegalFormat. All rights reserved.
        </p>
      </footer>
    </>
  );
}
