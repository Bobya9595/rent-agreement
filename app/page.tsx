import Link from "next/link";

export default function HomePage() {
  const tools = [
    {
      title: "Rent Agreement Format",
      description: "Create and download rent agreement instantly.",
      href: "/rent-agreement-format",
    },
    {
      title: "Affidavit Format",
      description: "Generate affidavit document easily.",
      href: "/affidavit-format",
    },
    {
      title: "Salary Certificate Format",
      description: "Generate professional salary certificate.",
      href: "/salary-certificate-format",
    },
    {
      title: "Experience Letter Format",
      description: "Create experience letter instantly.",
      href: "/experience-letter-format",
    },
    {
      title: "NOC Letter Format",
      description: "Generate No Objection Certificate easily.",
      href: "/noc-letter-format",
    },
    {
      title: "Leave & License Agreement",
      description: "Create Leave & License agreement online.",
      href: "/leave-license-agreement-format",
    },
    {
      title: "Offer Letter Format",
      description: "Generate professional offer letter.",
      href: "/offer-letter-format",
    },
    {
      title: "Resignation Letter Format",
      description: "Create resignation letter instantly.",
      href: "/resignation-letter-format",
    },
    {
      title: "Relieving Letter Format",
      description: "Generate professional relieving letter.",
      href: "/relieving-letter-format",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-6">
          Legal Format India
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Generate professional legal documents online for free.
          Download instantly as PDF. Fast, simple and secure.
        </p>

        <Link
          href="/all-tools"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          View All Tools
        </Link>
      </section>

      {/* TOOLS GRID */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Legal Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gray-900 text-white text-center py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">
          Start Creating Documents Today
        </h3>
        <p className="mb-6">
          100% Free. No signup required.
        </p>

        <Link
          href="/all-tools"
          className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Explore All Tools
        </Link>
      </section>

    </main>
  );
}
