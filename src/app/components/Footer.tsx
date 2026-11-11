"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand & Mission */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center text-white font-black text-base shadow-md shrink-0">
              K
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">KACCO</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Karamoja Child Care Organization (KACCO) empowers children, youth, and communities across Moroto and Napak districts through education sponsorship, healthcare, and anti-FGM advocacy.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-400 transition">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-sky-400 transition">Programs & Skilling</Link></li>
            <li><Link href="/clinic" className="hover:text-sky-400 transition">Clinic & Pharmacy Project</Link></li>
            <li><Link href="/donors" className="hover:text-sky-400 transition">Donors, Impact & Students</Link></li>
          </ul>
        </div>

        {/* Districts of Operation */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm uppercase tracking-wider">Operational Hubs</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Moroto District, Karamoja</li>
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Napak District, Karamoja</li>
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" /> Kampala Liaison Office</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-sm uppercase tracking-wider">Get in Touch</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> +256 772 997712</li>
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" /> info@kacco.org</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 py-4 border-t border-slate-800 text-center text-[11px] text-slate-500">
        © {currentYear} Karamoja Child Care Organization (KACCO). All rights reserved.
      </div>
    </footer>
  );
}
