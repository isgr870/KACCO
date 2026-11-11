"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Heart, Users, Home, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" /> Beneficiary Enrolment & Sponsorship Rates
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Education Pipelines & Child Care
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Sponsoring 24 Primary pupils and 23 Secondary students across Moroto and Napak districts.
          </p>
        </div>

        {/* Current Enrolment Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-black text-sky-600">24</div>
            <div className="text-xs font-extrabold text-slate-900 uppercase">Primary School Pupils</div>
            <div className="text-[11px] text-slate-500">Boarding & Scholastic Care</div>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-black text-emerald-600">23</div>
            <div className="text-xs font-extrabold text-slate-900 uppercase">Secondary Students</div>
            <div className="text-[11px] text-slate-500">O-Level & Mentorship</div>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center space-y-2 shadow-sm">
            <div className="text-4xl font-black text-indigo-600">18</div>
            <div className="text-xs font-extrabold text-slate-900 uppercase">Housed Resident Children</div>
            <div className="text-[11px] text-slate-500">Full Nutrition & Shelter</div>
          </div>
        </div>

        {/* Sponsorship Cost Breakdown Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-slate-900">Direct Child Sponsorship Fees</h2>
            <p className="text-xs sm:text-sm text-slate-600">Transparent cost schedule for supporting a student's education in Karamoja.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Primary Boarding School</h3>
                  <div className="text-xs text-sky-600 font-bold">P1 - P7 Beneficiaries</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-slate-900">UGX 750,000</div>
                  <div className="text-[11px] text-slate-500">Per Year (3 Terms)</div>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3 text-xs text-slate-600 space-y-2">
                <div className="flex justify-between"><span>Per Term Rate:</span> <strong>UGX 250,000</strong></div>
                <div className="flex justify-between"><span>Includes:</span> <strong>Tuition, Boarding & Scholastic Materials</strong></div>
              </div>
            </div>

            {/* Secondary */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Secondary Education</h3>
                  <div className="text-xs text-emerald-600 font-bold">S1 - S4 Beneficiaries</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-slate-900">UGX 1,950,000</div>
                  <div className="text-[11px] text-slate-500">Per Year (3 Terms)</div>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3 text-xs text-slate-600 space-y-2">
                <div className="flex justify-between"><span>Per Term Rate:</span> <strong>UGX 650,000</strong></div>
                <div className="flex justify-between"><span>Includes:</span> <strong>Tuition, Books, Uniforms & Mentorship</strong></div>
              </div>
            </div>
          </div>
        </div>

        {/* Housed Children Nutrition & Care */}
        <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-500/20 text-sky-300 rounded-xl flex items-center justify-center font-bold">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-black">Resident Children Housing & Nutrition Care</h2>
              <div className="text-xs text-sky-300">Supporting 18 Housed Children at KACCO Home</div>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            The total monthly feeding and welfare cost for our 18 resident children is approximately <strong>UGX 2,000,000</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/10 p-4 rounded-xl space-y-1">
              <div className="text-xs text-slate-400">Daily Cost / Child</div>
              <div className="text-lg font-black text-emerald-400">~ UGX 4,000</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl space-y-1">
              <div className="text-xs text-slate-400">Weekly Cost / Child</div>
              <div className="text-lg font-black text-emerald-400">~ UGX 28,000</div>
            </div>
            <div className="bg-white/10 p-4 rounded-xl space-y-1">
              <div className="text-xs text-slate-400">Monthly Cost / Child</div>
              <div className="text-lg font-black text-emerald-400">~ UGX 112,000</div>
            </div>
          </div>

          <div className="bg-sky-900/40 p-4 rounded-xl border border-sky-800 text-xs text-slate-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <strong>Financial Note:</strong> Operational prices are approximate estimates and subject to local market fluctuations. With additional partner support, KACCO can expand feeding and shelter to welcome more vulnerable children in Karamoja.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
