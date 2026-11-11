"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" /> 4 Educational Tiers
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Education Pipeline
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Sponsoring children and youth from early primary school all the way through university and professional nursing certification.
          </p>
        </div>

        {/* 4 Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Primary Education (P1 - P7)</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Providing school fees, uniforms, scholastic materials, and midday meals for children in Moroto and Napak, laying a solid foundational base for future academic success.
            </p>
            <div className="text-xs font-bold text-sky-600">✓ Active across Moroto & Napak primary schools</div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Secondary Education (S1 - S4)</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Supporting teenagers through O-Level education while providing mentorship and anti-FGM safeguarding guidance to prevent early dropouts and forced marriages.
            </p>
            <div className="text-xs font-bold text-emerald-600">✓ Mentorship & Tuition Support</div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Vocational & Nursing Certification</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Equipping unschooled youth and young women with vocational technical skills and nursing diplomas. Graduates directly staff the KACCO community clinic project.
            </p>
            <div className="text-xs font-bold text-indigo-600">✓ Direct Pipeline to Clinic Employment</div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">University Degree Programs</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Funding higher education scholarships for exceptional students pursuing degrees in education, public health, social work, and community development.
            </p>
            <div className="text-xs font-bold text-amber-700">✓ Higher Education Scholarships</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-sky-900 to-emerald-900 rounded-3xl p-8 text-white text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black">Ready to Sponsor a Student?</h3>
          <p className="text-slate-200 text-sm max-w-xl mx-auto">
            Your support changes generations. Access the admin portal or contact our desk to sponsor a child's education today.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/clinic" 
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md"
            >
              Contact & Donate
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
