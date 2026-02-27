"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0d0d0f] text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-purple-500 mb-10">
            LegalFormat
          </h1>

          <nav className="space-y-3 text-gray-300">
            <Link
              href="/dashboard"
              className="block px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Dashboard Overview
            </Link>

            <Link
              href="/dashboard/documents"
              className="block px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Documents
            </Link>

            <Link
              href="/dashboard/billing"
              className="block px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Billing
            </Link>

            <Link
              href="/dashboard/settings"
              className="block px-4 py-3 rounded-xl hover:bg-white/5 transition"
            >
              Settings
            </Link>
          </nav>
        </div>

        <button className="px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 transition text-left">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-gradient-to-br from-[#0d0d0f] via-black to-[#111]">
        {children}
      </main>
    </div>
  );
}
