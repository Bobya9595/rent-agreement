"use client";

import Link from "next/link";

export default function PublicHeader() {
  return (
    <header className="w-full border-b border-gray-800 bg-[#020617]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link href="/" className="text-lg font-bold">
          Legal<span className="text-purple-500">Format</span>
        </Link>

        <Link
          href="/"
          className="text-gray-300 hover:text-white text-sm"
        >
          Back to Home
        </Link>

      </div>
    </header>
  );
}
