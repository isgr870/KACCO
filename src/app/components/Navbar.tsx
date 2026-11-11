"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white font-black text-lg shadow-md shrink-0">
            K
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 block leading-tight">
              KACCO
            </span>
            <span className="text-[9px] sm:text-[10px] text-emerald-600 font-semibold tracking-wide uppercase">
              Karamoja Child Care Org
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-sky-600 transition">Home</Link>
          <Link href="/about" className="hover:text-sky-600 transition">About</Link>
          <Link href="/programs" className="hover:text-sky-600 transition">Programs</Link>
          <Link href="/clinic" className="hover:text-sky-600 transition">Clinic Project</Link>
          <Link href="/donors" className="hover:text-sky-600 transition text-emerald-600 font-bold">Donors & Impact</Link>
          <Link href="/contact" className="hover:text-sky-600 transition">Contact</Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="https://wa.me/256772997712?text=Hello%20KACCO%20team,%20I%20would%20like%20to%20support%20your%20programs." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition flex items-center gap-2 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Donate / WhatsApp</span>
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 font-semibold text-slate-800 text-base shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-100 hover:text-sky-600">🏠 Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-100 hover:text-sky-600">📖 About KACCO</Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-100 hover:text-sky-600">🎓 Programs & Advocacy</Link>
          <Link href="/clinic" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-100 hover:text-sky-600">🏥 Clinic & Pharmacy Project</Link>
          <Link href="/donors" onClick={() => setIsOpen(false)} className="block py-2 border-b border-slate-100 hover:text-sky-600 text-emerald-600 font-bold">⭐ Donors, Impact & Students</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-sky-600">📞 Contact & Support</Link>
        </div>
      )}
    </header>
  );
}
