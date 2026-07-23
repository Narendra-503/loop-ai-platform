import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex flex-1 flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}