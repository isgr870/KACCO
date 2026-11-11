"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart, Shield, Stethoscope, BookOpen, Home } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-lg shadow-md group-hover:bg-sky-700 transition">
            K
          </div>
          <div>
            <div className="font-black text-slate-900 text-base sm:text-lg tracking-tight">KACCO</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Karamoja Child Care Org</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-sky-600 transition">Home</Link>
          <Link href="/programs" className="hover:text-sky-600 transition">Programs</Link>
          <Link href="/clinic" className="hover:text-sky-600 transition flex items-center gap-1.5">
            <Stethoscope className="w-4 h-4 text-emerald-600" /> Clinic Project
          </Link>
          <Link href="/environment" className="hover:text-sky-600 transition">Safeguarding & Eco</Link>
          <Link href="/admin" className="text-slate-400 hover:text-sky-600 transition text-xs font-semibold">[ Admin ]</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/clinic" 
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition shadow-sm flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Donate / WhatsApp</span>
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm font-bold text-slate-800 p-2 rounded-lg hover:bg-slate-50">
            <Home className="w-4 h-4 text-sky-600" /> Home
          </Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm font-bold text-slate-800 p-2 rounded-lg hover:bg-slate-50">
            <BookOpen className="w-4 h-4 text-sky-600" /> Programs & Education
          </Link>
          <Link href="/clinic" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm font-bold text-slate-800 p-2 rounded-lg hover:bg-slate-50">
            <Stethoscope className="w-4 h-4 text-emerald-600" /> Clinic & Pharmacy Project
          </Link>
          <Link href="/environment" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-sm font-bold text-slate-800 p-2 rounded-lg hover:bg-slate-50">
            <Shield className="w-4 h-4 text-indigo-600" /> Safeguarding & Environment
          </Link>
          <Link href="/admin" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-xs font-bold text-slate-500 p-2 rounded-lg hover:bg-slate-50">
            [ Admin Control Portal ]
          </Link>

          <div className="pt-4 border-t border-slate-100">
            <Link href="/clinic" onClick={() => setIsOpen(false)} className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm">
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate / WhatsApp Support</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
