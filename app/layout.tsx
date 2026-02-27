import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "LegalFormat",
  description: "AI Legal Intelligence for Indian Agreements",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
