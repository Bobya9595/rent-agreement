"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-[#020617]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href="/" className="text-xl font-bold">
          Legal<span className="text-purple-500">Format</span>
        </Link>

        <div className="flex gap-6 items-center text-sm">

          <Link href="/templates" className="text-gray-300 hover:text-white">
            Templates
          </Link>

          <Link href="/pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>

          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>

          <Link
            href="/templates"
            className="bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-md text-white"
          >
            Get Started
          </Link>

        </div>
      </div>
    </header>
  );
}
