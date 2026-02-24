import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://legalformat.in"),

  title: {
    default: "Legal Format India - Free Legal Documents Online",
    template: "%s | Legal Format India",
  },

  description:
    "Generate free legal documents online in India. Create rent agreements, affidavits, salary certificates, resignation letters and more instantly.",

  keywords: [
    "legal documents india",
    "rent agreement format india",
    "affidavit format india",
    "salary certificate format",
    "resignation letter format",
    "experience letter format india",
    "noc letter format india",
  ],

  authors: [{ name: "Legal Format India" }],

  openGraph: {
    title: "Legal Format India - Free Legal Documents Online",
    description:
      "Free online legal document generator for India. Download ready-to-use professional legal formats instantly.",
    url: "https://legalformat.in",
    siteName: "Legal Format India",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Format India",
    description:
      "Create professional legal documents online for free in India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        {/* Navbar */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-700">
              Legal Format India
            </Link>

            <nav className="space-x-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/all-tools" className="hover:text-blue-600">All Tools</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            © {new Date().getFullYear()} Legal Format India. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
