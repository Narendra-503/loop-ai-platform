import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Customer Feedback Intelligence
        </h1>

        <p className="text-gray-500 mt-1">
          AI-powered customer analytics dashboard
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-xl w-64 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <button className="relative rounded-xl border p-2 hover:bg-gray-100 transition">

          <Bell size={22} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-blue-600"
          />

          <div>

            <h4 className="font-semibold">
              Welcome
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}