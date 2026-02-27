"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import PublicHeader from "../../components/PublicHeader";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <PublicHeader />

      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-[400px] bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-5">
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border rounded-xl"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border rounded-xl"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
