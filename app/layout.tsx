'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* ================= NAVBAR ================= */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-blue-700">
              Legal Format India
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium relative">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setToolsOpen(!toolsOpen)}
                  className="hover:text-blue-600"
                >
                  All Tools ▾
                </button>

                {toolsOpen && (
                  <div className="absolute right-0 mt-3 bg-white border rounded-lg shadow-lg w-64 py-2">
                    {[
                      ['Rent Agreement', '/rent-agreement-format'],
                      ['Affidavit', '/affidavit-format'],
                      ['Salary Certificate', '/salary-certificate-format'],
                      ['Experience Letter', '/experience-letter-format'],
                      ['NOC Letter', '/noc-letter-format'],
                      ['Resignation Letter', '/resignation-letter-format'],
                      ['Relieving Letter', '/relieving-letter-format'],
                    ].map(([label, link]) => (
                      <Link
                        key={link}
                        href={link}
                        onClick={() => setToolsOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>

              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          {mobileOpen && (
            <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 space-y-4 text-sm">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Home
              </Link>

              <Link
                href="/rent-agreement-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Rent Agreement
              </Link>

              <Link
                href="/affidavit-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Affidavit
              </Link>

              <Link
                href="/salary-certificate-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Salary Certificate
              </Link>

              <Link
                href="/experience-letter-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Experience Letter
              </Link>

              <Link
                href="/noc-letter-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                NOC Letter
              </Link>

              <Link
                href="/resignation-letter-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Resignation Letter
              </Link>

              <Link
                href="/relieving-letter-format"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Relieving Letter
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                Contact
              </Link>
            </div>
          )}
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="min-h-screen">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            © {new Date().getFullYear()} Legal Format India. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
