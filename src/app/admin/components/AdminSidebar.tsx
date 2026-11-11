"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  GraduationCap, 
  Stethoscope, 
  ShieldAlert, 
  Users, 
  LogOut,
  ChevronRight
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen p-6 flex flex-col justify-between hidden md:flex shrink-0">
      <div className="space-y-8">
        {/* Brand */}
        <div className="flex items-center gap-3 border-b border-slate-800 pb-5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white font-black text-lg shadow-md">
            K
          </div>
          <div>
            <span className="font-extrabold text-white text-base tracking-tight block leading-tight">
              KACCO Admin
            </span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
              Management Portal
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5 text-sm font-medium">
          <Link 
            href="/admin" 
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-sky-600 text-white shadow-sm font-semibold"
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </div>
            <ChevronRight className="w-4 h-4 text-sky-200" />
          </Link>

          <Link 
            href="/admin/students" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition"
          >
            <GraduationCap className="w-4 h-4 text-sky-400" />
            <span>Sponsorships</span>
          </Link>

          <Link 
            href="/admin/clinic" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition"
          >
            <Stethoscope className="w-4 h-4 text-emerald-400" />
            <span>Clinic Project</span>
          </Link>

          <Link 
            href="/admin/advocacy" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition"
          >
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>Anti-FGM Logs</span>
          </Link>

          <Link 
            href="/admin/donors" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition"
          >
            <Users className="w-4 h-4 text-sky-400" />
            <span>Donors & Inquiries</span>
          </Link>
        </nav>
      </div>

      {/* Return to Public Site */}
      <div className="border-t border-slate-800 pt-4">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition text-sm font-medium"
        >
          <LogOut className="w-4 h-4 text-rose-400" />
          <span>Exit to Public Site</span>
        </Link>
      </div>
    </aside>
  );
}
