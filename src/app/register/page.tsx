"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      alert(data.message);

      if (res.ok) {
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 px-4">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center text-white">

          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">

            <UserPlus size={38} />

          </div>

          <h1 className="text-4xl font-bold">
            Project LOOP
          </h1>

          <p className="mt-2 text-blue-100">
            AI Customer Feedback Intelligence Platform
          </p>

        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/20 bg-white/95 p-8 shadow-2xl backdrop-blur">

          <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">
            Create Account
          </h2>

          <p className="mb-8 text-center text-gray-500">
            Register to start managing customer feedback.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="relative">

              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>

            {/* Email */}
            <div className="relative">

              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            {/* Password */}
            <div className="relative">

              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-12 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-600">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}