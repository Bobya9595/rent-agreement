import { formats } from "../../../data/formats";
import Navbar from "../../../components/Navbar";

export default function FormatPage({ params }: any) {

  const format = formats.find((f) => f.slug === params.slug);

  if (!format) {
    return <div>Page not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-6">
          {format.title}
        </h1>

        <p className="text-gray-400 mb-10">
          {format.description}
        </p>

        {/* TOOL CTA */}

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">

          <h2 className="text-2xl font-semibold mb-4">
            Generate {format.title}
          </h2>

          <p className="text-gray-400">
            Use our AI generator to instantly create this legal document.
          </p>

          <button className="mt-6 bg-purple-600 px-6 py-3 rounded-lg">
            Generate Document
          </button>

        </div>

        {/* SEO CONTENT */}

        <div className="mt-16 space-y-6 text-gray-400">

          <h2 className="text-2xl text-white font-semibold">
            What is {format.title}?
          </h2>

          <p>
            {format.title} is a legal document used to define agreements
            between parties. It protects both sides by clearly stating
            responsibilities and terms.
          </p>

          <h2 className="text-2xl text-white font-semibold">
            Why is it important?
          </h2>

          <p>
            A properly written legal document prevents disputes and
            ensures both parties follow agreed terms.
          </p>

        </div>

      </div>

    </main>
  );
}
