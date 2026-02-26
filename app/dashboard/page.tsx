"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">
          Overview of your agreement analyses.
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Analyses" value="3" />
        <StatCard title="High Risk Agreements" value="1" />
        <StatCard title="Subscription" value="Free Plan" />
      </div>

      {/* RECENT REPORTS */}
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h2 className="text-xl font-semibold mb-4">
          Recent Reports
        </h2>

        <p className="text-gray-500">
          No reports yet. Start a new analysis.
        </p>
      </div>
    </div>
  );
}

function StatCard({ title, value }: any) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-2xl shadow border"
    >
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </motion.div>
  );
}
