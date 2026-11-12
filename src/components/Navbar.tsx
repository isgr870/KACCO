"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 font-sans shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-sky-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition">
              K
            </div>
            <div>
              <span className="font-black text-slate-900 text-lg tracking-tight block">KACCO</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Karamoja Child Care</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
            <Link href="/" className="hover:text-sky-600 transition">Home</Link>
            <Link href="/about" className="hover:text-sky-600 transition">About Us</Link>
            <Link href="/programs" className="hover:text-sky-600 transition">Programs</Link>
            <Link href="/clinic" className="hover:text-sky-600 transition">Clinic & Nursing</Link>
            <Link href="/environment" className="hover:text-sky-600 transition">Safeguarding</Link>
            <Link href="/admin" className="hover:text-sky-600 transition text-emerald-700">Admin Portal</Link>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/256774817858"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition shadow-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp (0774817858)
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-bold text-slate-700">
            <Link href="/" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-sky-600">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-sky-600">About Us & History</Link>
            <Link href="/programs" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-sky-600">Programs & Sponsorship</Link>
            <Link href="/clinic" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-sky-600">Clinic & Nursing</Link>
            <Link href="/environment" onClick={() => setIsOpen(false)} className="py-2 border-b border-slate-100 hover:text-sky-600">Safeguarding & Environment</Link>
            <Link href="/admin" onClick={() => setIsOpen(false)} className="py-2 text-emerald-700">Admin Portal (CMS)</Link>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/256774817858"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us (0774817858)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
