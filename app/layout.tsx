import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "LegalFormat",
  description: "AI Legal Document SaaS",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
