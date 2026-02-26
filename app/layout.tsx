import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LegalFormat - AI Rent Agreement Auditor",
  description:
    "AI-powered Indian rent agreement compliance checker. Detect legal risks instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
