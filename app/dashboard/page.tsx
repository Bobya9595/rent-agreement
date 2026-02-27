"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [plan, setPlan] = useState("free");
  const [documentCount, setDocumentCount] = useState(0);
  const [aiUsage, setAiUsage] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);

        // Fetch Firestore user profile
        const userRef = doc(db, "users", u.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setPlan(data.plan || "free");
          setDocumentCount(data.documentCount || 0);
          setAiUsage(data.aiUsage || 0);
        }

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
        <p>Loading dashboard...</p>
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
          className="bg-white text-black py-2 rounded-lg mt-6"
        >
          Logout
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-semibold">
              Welcome back 👋
            </h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-gray-200 px-4 py-1 rounded-full text-sm capitalize">
              {plan} Plan
            </span>

            {plan === "free" && (
              <button className="bg-black text-white px-6 py-2 rounded-lg">
                Upgrade
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Documents Created</h3>
            <p className="text-3xl font-bold mt-2">{documentCount}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">AI Generations</h3>
            <p className="text-3xl font-bold mt-2">{aiUsage}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Current Plan</h3>
            <p className="text-3xl font-bold mt-2 capitalize">{plan}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
