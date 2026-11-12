"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { Stethoscope, Building, MessageSquare } from "lucide-react";

export default function ClinicPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4" /> Healthcare Initiative & Alumni
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Proposed Clinic Project & Nursing Cadre
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Preparing medical personnel and seeking capital partners to construct the KACCO Community Clinic.
          </p>
        </div>

        {/* Status Notice: Proposed Construction */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-slate-700">
            <h3 className="font-extrabold text-amber-900 text-base">Project Status: Proposed Construction Plan</h3>
            <p>
              Physical construction of the KACCO Community Clinic and Pharmacy has not yet commenced. It stands as a major proposed capital development project. We are seeking donors and capital partners to acquire land and construct the facility to serve Moroto and Napak districts.
            </p>
          </div>
        </div>

        {/* Active Nursing Students Banner */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                🇩🇰 Arnderschous Foundation • Denmark Partnership
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                19 Nursing Scholarship Students Active
              </h2>
            </div>
            <a 
              href="https://wa.me/256774817858" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us (0774817858)
            </a>
          </div>

          <p className="text-slate-200 text-sm leading-relaxed">
            While physical construction is in planning, <strong>19 Karamoja youth</strong> are actively sponsored in nursing institutions thanks to the <strong>Arnderschous Foundation in Denmark</strong>, under Director <strong>Mama ESTHER ALEPER</strong>. These students are undergoing hospital practicals to be ready to staff the clinic upon construction.
          </p>
        </div>

        {/* Featured Alumnus: Longole Abraham */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="w-full h-72 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-md">
              <img 
                src="/IMG-20261111-WA0043.jpg" 
                alt="Longole Abraham at Matany Hospital" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              ★ Beneficiary Success Story
            </div>
            <h2 className="text-2xl font-black text-slate-900">Longole Abraham — Matany Hospital</h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Longole Abraham is a proud KACCO scholarship alumnus who completed his medical training and is now actively serving patients at <strong>Matany Hospital</strong>, providing essential healthcare and healing to the people of Karamoja.
            </p>
            <div className="text-xs font-bold text-emerald-600">✓ KACCO Scholarship Beneficiary in Active Medical Practice</div>
          </div>
        </div>

        {/* Full Photo Gallery */}
        <PhotoGallery />
      </main>

      <Footer />
    </div>
  );
}
