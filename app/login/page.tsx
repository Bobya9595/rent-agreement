"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleLogin = async () => {
    setLoading(true)
    setMessage("")

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://legalformat.in/dashboard",
      },
    })

    if (error) {
      setMessage("Something went wrong.")
    } else {
      setMessage("Check your email for login link.")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login to LegalFormat
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
        >
          {loading ? "Sending..." : "Send Magic Link"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
