"use client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0c0c12] text-white">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="text-sm text-gray-400">
          Free Plan
        </div>
      </div>

      {/* Content */}
      <div className="p-8 grid md:grid-cols-3 gap-8">

        {/* Usage Card */}
        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">AI Analyses Used</h2>
          <div className="text-4xl font-bold text-purple-500">1 / 5</div>
          <p className="text-gray-400 text-sm mt-2">
            Upgrade to increase limit
          </p>
        </div>

        {/* Documents Generated */}
        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">Documents Generated</h2>
          <div className="text-4xl font-bold text-blue-500">3</div>
          <p className="text-gray-400 text-sm mt-2">
            Total created this month
          </p>
        </div>

        {/* Risk Score Avg */}
        <div className="bg-[#16161d] p-6 rounded-2xl border border-gray-800">
          <h2 className="text-lg font-semibold mb-4">Average Risk Score</h2>
          <div className="text-4xl font-bold text-green-400">78</div>
          <p className="text-gray-400 text-sm mt-2">
            Based on analyzed agreements
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="px-8 pb-12">
        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>

        <div className="flex gap-4">
          <a
            href="/generate"
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            Generate Document
          </a>

          <a
            href="/analyze"
            className="border border-gray-600 px-6 py-3 rounded-xl hover:border-purple-500 transition"
          >
            Analyze Agreement
          </a>
        </div>
      </div>

    </div>
  );
}
