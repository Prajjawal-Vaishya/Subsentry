"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LayoutDashboard, CreditCard, BarChart3, Settings } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Mobile Top Bar */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 fixed top-0 left-0 right-0 z-40 w-full">
        <span className="text-lg font-bold text-indigo-600">SubSentry</span>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none p-2">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-white p-4">
          <nav className="space-y-4">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-md p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600" onClick={toggleMenu}>
              <LayoutDashboard className="h-5 w-5" /> Overview
            </Link>
            <Link href="/dashboard/subscriptions" className="flex items-center gap-3 rounded-md p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600" onClick={toggleMenu}>
              <CreditCard className="h-5 w-5" /> Subscriptions
            </Link>
            <Link href="/dashboard/analytics" className="flex items-center gap-3 rounded-md p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600" onClick={toggleMenu}>
              <BarChart3 className="h-5 w-5" /> Analytics
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-md p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600" onClick={toggleMenu}>
              <Settings className="h-5 w-5" /> Settings
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}