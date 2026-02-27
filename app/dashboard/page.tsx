"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex-1 min-h-screen bg-[#0c0c12] text-white">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="text-sm text-gray-400">
          Welcome back 👋
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-10">

        {/* METRICS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400 mb-3">AI Analyses Used</h3>
            <div className="text-4xl font-bold text-purple-500">
              1 / 5
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Upgrade to increase limit
            </p>
          </div>

          <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400 mb-3">Documents Generated</h3>
            <div className="text-4xl font-bold text-blue-500">
              3
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Total this month
            </p>
          </div>

          <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-gray-400 mb-3">Average Risk Score</h3>
            <div className="text-4xl font-bold text-green-400">
              78
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Based on analyzed agreements
            </p>
          </div>

        </div>

        {/* QUICK ACTIONS */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>

          <div className="flex gap-4">
            <Link
              href="/generate"
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Generate Document
            </Link>

            <Link
              href="/analyze"
              className="border border-gray-600 px-6 py-3 rounded-xl hover:border-purple-500 transition"
            >
              Analyze Agreement
            </Link>
          </div>
        </div>

        {/* UPGRADE */}
        <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-3">
            Unlock Full AI Legal Intelligence
          </h3>

          <p className="text-gray-400 mb-6">
            Upgrade to Pro for unlimited generation, advanced AI risk analysis,
            clause recommendations and priority processing.
          </p>

          <Link
            href="/pricing"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Upgrade to Pro
          </Link>
        </div>

      </div>
    </div>
  );
}
