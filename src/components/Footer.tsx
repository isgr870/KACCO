import React from "react";
import Link from "next/link";
import { MapPin, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black">
              K
            </div>
            <span className="font-black text-white text-lg tracking-tight">KACCO</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Karamoja Child Care Organization empowers children, youth, and communities across Moroto and Napak districts[span_0](start_span)[span_0](end_span).
          </p>
          <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Child Safeguarding Policy Active
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2 text-xs font-medium">
            <li><Link href="/" className="hover:text-sky-400 transition">Homepage</Link></li>
            <li><Link href="/programs" className="hover:text-sky-400 transition">Education & Programs</Link></li>
            <li><Link href="/clinic" className="hover:text-sky-400 transition">Clinic & Pharmacy Project</Link></li>
            <li><Link href="/environment" className="hover:text-sky-400 transition">Safeguarding & Environment</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">Operational Hubs</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sky-400" /> Moroto District Office</li>
            <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-sky-400" /> Napak District Community Center</li>
            <li className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-emerald-400" /> Karamoja Region, Uganda</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">Support & Partnership</h4>
          <p className="text-xs text-slate-400">
            To sponsor a child, support the clinic, or partner with our programs, contact our administrative desk.
          </p>
          <div className="pt-2">
            <Link href="/admin" className="inline-block px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition border border-slate-700">
              Admin Portal Login →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} Karamoja Child Care Organization (KACCO). All rights reserved.
      </div>
    </footer>
  );
}
