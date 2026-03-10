"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-[#020617]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">Legal</span>
          <span className="text-purple-500">Format</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/templates" className="hover:text-white transition">
            Templates
          </Link>

          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/templates"
            className="text-sm bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}
