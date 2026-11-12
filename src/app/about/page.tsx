"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Eye, Target, History, HeartHandshake, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Established 2006 • Napak & Moroto
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our History, Vision & Mission
          </h1>
          <p className="text-slate-600 text-base">
            Rooted in resilience, founded to protect vulnerable children across the Karamoja sub-region.
          </p>
        </div>

        {/* Historical Background Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center font-bold">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Historical Background & Justification</h2>
              <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Kangole Parish, Ngoleriet Sub-county, Napak District (Est. 2006)
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Karamoja Child Care Organization (KACCO) was born in 2006 in Kangole Parish, Ngoleriet Sub-county, Napak District, at the height of severe insecurity and cattle rustling which was the order of the day. During this turbulent period, many people lost their lives—mostly men involved in pastoral conflicts. As a result, countless orphans were left stranded and homeless without anybody to care for them.
            </p>
            <p>
              Another compounding crisis that accelerated KACCO's formation was the prevalence of HIV/AIDS, which devastated the region and left many children orphaned. Furthermore, the loss of livestock—the economic backbone and source of survival for the Karimojong—left families in extreme poverty without any economic activity to depend on.
            </p>
            <p>
              Consequently, many children became victims of acute vulnerability, losing their rights to food, education, health, and shelter. This urgent reality compelled the founders of Karamoja Child Care Organization to establish an alternative pathway of hope, ensuring that vulnerable children find an opportunity to live a meaningful life and thrive toward a better future.
            </p>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900">ARTICLE 5: VISION</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              "To enhance inclusive education for all vulnerable children in Karamoja."
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-900">ARTICLE 6: MISSION STATEMENT</h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              "To create a conducive socio-economic learning environment for all vulnerable children in Karamoja by ensuring that children access inclusive education without prejudice."
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-slate-900">7.3 Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">1. Child-Centredness</h3>
              <p className="text-xs text-slate-600">Upholding the best interests of the child in all planning, decisions, and implementation.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">2. Justice</h3>
              <p className="text-xs text-slate-600">Promoting inclusion for all children in education without discrimination.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">3. Partnership</h3>
              <p className="text-xs text-slate-600">Working collaboratively with donors, government, local institutions, and communities.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">4. Teamwork</h3>
              <p className="text-xs text-slate-600">Promoting full participation in planning, implementation, and decision-making.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">5. Integrity & Accountability</h3>
              <p className="text-xs text-slate-600">Upholding open, transparent, and honest conduct and financial management.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
