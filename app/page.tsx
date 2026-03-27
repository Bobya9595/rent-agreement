"use client";

import { motion } from "framer-motion";

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
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-6 mt-20 text-center"
      >

        {/* GLOW */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[650px] h-[650px] bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
        >
          Generate Legal Policies
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            in Seconds with AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg text-gray-600 max-w-xl mx-auto"
        >
          Built for Indian startups, freelancers, and businesses.
          No legal knowledge required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="/generate"
            className="px-7 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:scale-105 transition"
          >
            🚀 Start Free
          </a>

          <button className="px-7 py-3 border rounded-2xl hover:bg-gray-100 transition">
            Live Demo
          </button>
        </motion.div>

        <p className="mt-4 text-sm text-gray-400">
          Takes 30 seconds • No signup required
        </p>
      </motion.section>

      {/* PRODUCT PREVIEW */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center px-6"
      >
        <div className="bg-white border shadow-2xl rounded-3xl p-6 w-full max-w-4xl">

          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Privacy Policy Preview
            </span>

            <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
              AI Generated
            </span>
          </div>

          <div className="h-[260px] overflow-hidden rounded-xl border bg-white p-4 text-sm text-gray-700 relative">

            <p className="font-semibold text-gray-900">Privacy Policy</p>
            <p className="text-xs text-gray-400 mt-1">
              Effective Date: June 2024
            </p>

            <hr className="my-2" />

            <p className="font-semibold">1. Introduction</p>
            <p className="text-gray-600 mt-1">
              We value your privacy and are committed to protecting your personal
              information in accordance with applicable laws.
            </p>

            <p className="font-semibold mt-3">2. Information We Collect</p>
            <p className="text-gray-600 mt-1">
              We may collect personal data such as name, email, and usage data.
            </p>

            <p className="font-semibold mt-3">3. Use of Information</p>
            <p className="text-gray-600 mt-1">
              The collected data is used to improve services.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
          </div>

        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="mt-28 px-10 grid md:grid-cols-3 gap-10">
        {[
          "⚡ Instant AI Generation",
          "🇮🇳 Built for India",
          "🔒 Secure & Private"
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 border shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="mt-3 text-gray-600">
              Generate policies instantly with AI-powered automation.
            </p>
          </motion.div>
        ))}
      </section>

      {/* STATS */}
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

          <p className="text-5xl font-bold mt-4">₹149</p>

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

      {/* CTA */}
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
