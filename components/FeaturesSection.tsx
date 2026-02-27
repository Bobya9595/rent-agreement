"use client";

import {
  FileText,
  ShieldCheck,
  Zap,
  Globe,
  Lock,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Legal Drafting",
    description:
      "Generate rent agreements, affidavits, NDAs & contracts instantly with AI precision."
  },
  {
    icon: ShieldCheck,
    title: "Legally Verified Formats",
    description:
      "Drafts aligned with Indian legal structure & formatting standards."
  },
  {
    icon: Zap,
    title: "Instant PDF Export",
    description:
      "One-click premium PDF generation with proper alignment and spacing."
  },
  {
    icon: Globe,
    title: "India-Compliant",
    description:
      "Built specifically for Indian documentation and compliance."
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your legal data stays encrypted and secure."
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description:
      "Track generated documents, usage & subscription insights."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-black via-[#0d0d0f] to-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Premium Legal Automation Platform
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Designed for professionals, startups & legal consultants across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 
                         backdrop-blur-xl p-8 rounded-3xl 
                         hover:border-purple-500/40 
                         transition-all duration-300 
                         hover:scale-[1.03]"
            >
              <div className="mb-6">
                <feature.icon className="h-10 w-10 text-purple-500 group-hover:text-purple-400 transition" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Soft Glow */}
              <div className="absolute inset-0 rounded-3xl 
                              bg-purple-600/5 opacity-0 
                              group-hover:opacity-100 
                              transition duration-500 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
