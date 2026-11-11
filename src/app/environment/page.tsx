"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldAlert, CheckCircle2, Trees, Lock, Users, Award } from "lucide-react";

export default function EnvironmentSafeguarding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" /> Core Organizational Mandate
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Child Protection & Environmental Safeguarding
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Protecting the fundamental rights of children in Moroto and Napak while preserving our pastoralist ecosystem.
          </p>
        </div>

        {/* Child Protection Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-sky-600">
            <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center font-bold">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Child Safeguarding Policy</h2>
              <p className="text-xs text-slate-500">Zero tolerance for exploitation, early forced marriages, and FGM.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Written Consent
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict written consent is required before publishing any story or photograph of a child. Full anonymity and protection of minors is guaranteed[span_1](start_span)[span_1](end_span).
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Anti-FGM Hubs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active safe shelters and community dialogue groups in Moroto and Napak protect young girls and support trauma rehabilitation.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Community Guardians
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local elders, youth leaders, and women's associations partner with KACCO to monitor and report child rights violations instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Safeguarding Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-emerald-600">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center font-bold">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Environmental Conservation</h2>
              <p className="text-xs text-slate-500">Promoting sustainable land use and community tree planting across Karamoja.</p>
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            As a pastoralist community, safeguarding the environment is vital for sustainable livelihoods. KACCO integrates climate resilience education into our youth skilling programs, combating deforestation and promoting water resource management.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
