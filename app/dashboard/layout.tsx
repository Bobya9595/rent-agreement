export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 bg-white border-r flex-col p-6">
        <h2 className="text-xl font-bold mb-10">
          LegalFormat
        </h2>

        <nav className="space-y-4 text-gray-600">
          <a href="/dashboard" className="block hover:text-black transition">
            Dashboard
          </a>

          <a href="/rent-agreement-auditor" className="block hover:text-black transition">
            New Analysis
          </a>

          <a href="#" className="block hover:text-black transition">
            Reports
          </a>

          <a href="#" className="block hover:text-black transition">
            Billing
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}
