"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Stethoscope, Heart, Award, Users, CheckCircle2, MessageSquare } from "lucide-react";

export default function ClinicPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-4 h-4" /> Healthcare & Nursing Cadre
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Clinic Project & Alumni Success Stories
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Empowering youth through healthcare education and witnessing alumni give back to Karamoja.
          </p>
        </div>

        {/* Featured Alumnus: Longole Abraham */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="w-full h-72 bg-slate-200 rounded-2xl overflow-hidden shadow-md flex items-center justify-center font-bold text-slate-500">
              {/* Note: You can replace or point src to Abraham's uploaded photo */}
              <span className="text-xs text-center p-4">Longole Abraham at Matany Hospital</span>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              ★ KACCO Alumnus Success Story
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Longole Abraham</h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Longole Abraham is one of KACCO's outstanding scholarship beneficiaries who successfully completed his medical training. Today, he is professionally stationed and <strong>working at Matany Hospital</strong>, providing vital medical care and healing to patients across the Karamoja sub-region.
            </p>
            <div className="text-xs font-bold text-emerald-600">✓ Giving back to the community through professional healthcare</div>
          </div>
        </div>

        {/* Arnderschous Foundation Partnership Banner */}
        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                🇩🇰 International Partnership • Denmark
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                19 Sponsored Nursing Students
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

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Supported by the <strong>Arnderschous Foundation in Denmark</strong>, 19 Karamoja youth have received full scholarships for nursing and medical schools under the leadership of Director <strong>Mama ESTHER ALEPER</strong> and in coordination with local District Health Officers.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
