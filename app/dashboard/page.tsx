"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardPage() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "New Analysis", href: "/analyze" },
    { name: "Generate Document", href: "/generate" },
    { name: "Reports", href: "#" },
    { name: "Billing", href: "/pricing" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0c0c12] text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#111118] border-r border-gray-800 flex flex-col">

        {/* Logo */}
        <div className="px-6 py-6 border-b border-gray-800">
          <h1 className="text-xl font-semibold tracking-wide">
            <span className="text-white">Legal</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Format
            </span>
          </h1>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 rounded-xl transition ${
                pathname === item.href
                  ? "bg-gradient-to-r from-purple-600 to-blue-600"
                  : "text-gray-400 hover:bg-[#1a1a23] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-800 text-sm text-gray-400">
          Free Plan
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* TOP BAR */}
        <div className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="text-sm text-gray-400">
            Welcome back 👋
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-10">

          {/* METRIC CARDS */}
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

          {/* UPGRADE SECTION */}
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
    </div>
  );
}
