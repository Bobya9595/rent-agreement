"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">LegalFormat</h1>

          <nav className="space-y-4">
            <button className="block w-full text-left hover:text-gray-300">
              Dashboard
            </button>
            <button className="block w-full text-left hover:text-gray-300">
              My Documents
            </button>
            <button className="block w-full text-left hover:text-gray-300">
              Create Document
            </button>
            <button className="block w-full text-left hover:text-gray-300">
              Settings
            </button>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="bg-white text-black py-2 rounded-lg mt-6 hover:bg-gray-200 transition"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Topbar */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-semibold">
              Welcome back 👋
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-gray-200 px-4 py-1 rounded-full text-sm">
              Free Plan
            </span>

            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Upgrade
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Documents Created</h3>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">AI Generations</h3>
            <p className="text-3xl font-bold mt-2">8</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Current Plan</h3>
            <p className="text-3xl font-bold mt-2">Free</p>
          </div>
        </div>

        {/* Recent Documents */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Documents</h3>

          <div className="space-y-3">
            <div className="flex justify-between p-3 border rounded-lg hover:bg-gray-50 transition">
              <span>Rent Agreement - Mumbai</span>
              <span className="text-gray-400 text-sm">2 days ago</span>
            </div>

            <div className="flex justify-between p-3 border rounded-lg hover:bg-gray-50 transition">
              <span>Affidavit Format</span>
              <span className="text-gray-400 text-sm">5 days ago</span>
            </div>

            <div className="flex justify-between p-3 border rounded-lg hover:bg-gray-50 transition">
              <span>Employment Contract</span>
              <span className="text-gray-400 text-sm">1 week ago</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
