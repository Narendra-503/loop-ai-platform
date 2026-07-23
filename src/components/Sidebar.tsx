"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload",
    href: "/dashboard/upload",
    icon: Upload,
  },
  {
    title: "Feedback",
    href: "/dashboard/feedback",
    icon: MessageSquare,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-2xl">
      <div className="px-8 py-8 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold tracking-wide">
          LOOP AI
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Customer Intelligence
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300
                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-6">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-sm text-slate-400">
            Logged in as
          </p>

          <h3 className="font-semibold mt-1">
            Admin User
          </h3>
        </div>
      </div>
    </aside>
  );
}