"use client";

import {
  User,
  Shield,
  Bell,
  Palette,
  Database,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Settings
            </h1>

            <p className="mt-3 text-slate-300 text-lg">
              Manage your account and application preferences.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <User size={40} />
          </div>
        </div>
      </section>

      {/* Settings Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <User className="text-blue-600" />
            <h2 className="text-xl font-bold">Profile</h2>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <Shield className="text-green-600" />
            <h2 className="text-xl font-bold">Security</h2>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <Bell className="text-yellow-500" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </label>

            <label className="flex items-center justify-between">
              <span>AI Analysis Alerts</span>
              <input type="checkbox" defaultChecked className="h-5 w-5" />
            </label>

            <label className="flex items-center justify-between">
              <span>Weekly Reports</span>
              <input type="checkbox" className="h-5 w-5" />
            </label>
          </div>
        </div>

        {/* Preferences */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
            <Palette className="text-purple-600" />
            <h2 className="text-xl font-bold">Preferences</h2>
          </div>

          <div className="space-y-4">
            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option>Light Theme</option>
              <option>Dark Theme</option>
              <option>System Default</option>
            </select>

            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>

      {/* Database Info */}
      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center gap-3">
          <Database className="text-indigo-600" />
          <h2 className="text-xl font-bold">Application Information</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm text-gray-500">Version</p>
            <p className="font-semibold">1.0.0</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Database</p>
            <p className="font-semibold">PostgreSQL</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Framework</p>
            <p className="font-semibold">Next.js + Prisma</p>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg">
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
}