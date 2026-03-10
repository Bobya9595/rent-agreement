import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#020617] min-h-screen text-white">
      
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-5xl font-bold leading-tight">
          AI Legal Intelligence
          <span className="block bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">
            for Indian Agreements
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl">
          Generate rent agreements, affidavits, contracts and more in minutes using AI-powered automation.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="/templates"
            className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-lg font-medium"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="border border-white/20 px-6 py-3 rounded-lg"
          >
            Login
          </a>
        </div>

      </section>

    </main>
  );
}
