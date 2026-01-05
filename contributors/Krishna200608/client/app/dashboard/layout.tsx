import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import MobileNav from "../components/dashboard/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Header */}
      <MobileNav />

      {/* Main Content Area */}
      <main className="transition-all duration-300 md:ml-64 pt-16 md:pt-0">
        <div className="container mx-auto p-4 md:p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}