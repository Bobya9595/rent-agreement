import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 bg-white border-r p-6 flex-col">

        <h2 className="text-xl font-bold mb-10">
          LegalFormat
        </h2>

        <nav className="space-y-4 text-gray-600">

          <Link
            href="/dashboard"
            className="block hover:text-black transition"
          >
            Dashboard
          </Link>

          <Link
            href="/rent-agreement-auditor"
            className="block hover:text-black transition"
          >
            New Analysis
          </Link>

          <Link
            href="#"
            className="block hover:text-black transition"
          >
            Reports
          </Link>

          <Link
            href="#"
            className="block hover:text-black transition"
          >
            Billing
          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}
