"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "New Analysis", href: "/analyze" },
    { name: "Generate Document", href: "/generate" },
    { name: "Reports", href: "/dashboard/reports" },
    { name: "Billing", href: "/pricing" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0c0c12] text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#111118] border-r border-gray-800 flex flex-col">

        {/* LOGO + BACK */}
        <div className="px-6 py-6 border-b border-gray-800">
          <h1 className="text-xl font-semibold tracking-wide">
            <span className="text-white">Legal</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Format
            </span>
          </h1>

          <p className="text-xs text-gray-500 mt-1">
            AI Legal Intelligence
          </p>

          <Link
            href="/"
            className="text-xs text-gray-500 hover:text-white mt-3 inline-block"
          >
            ← Back to Website
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                    : "text-gray-400 hover:bg-[#1a1a23] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* PLAN CARD */}
        <div className="p-4 border-t border-gray-800">
          <div className="bg-[#16161d] p-4 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-400 mb-2">Current Plan</p>

            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-semibold">
                Free
              </span>

              <Link
                href="/pricing"
                className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 rounded-lg hover:opacity-90"
              >
                Upgrade
              </Link>
            </div>
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">
        {children}
      </main>

    </div>
  );
}
