"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Building2, CheckCircle2 } from "lucide-react";

export default function ClinicPage() {
  const [clinicProgress, setClinicProgress] = useState(65);
  const [graduatesReady, setGraduatesReady] = useState(18);

  useEffect(() => {
    const savedProgress = localStorage.getItem("kacco_clinic_progress");
    const savedGrads = localStorage.getItem("kacco_graduates");
    if (savedProgress) setClinicProgress(Number(savedProgress));
    if (savedGrads) setGraduatesReady(Number(savedGrads));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide">
              <Building2 className="w-4 h-4 text-emerald-600" />
              Flagship Capital Campaign
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              The KACCO Clinic & Pharmacy Project
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Many youth sponsored by KACCO graduate from nursing schools and medical universities but face systemic unemployment in the region. We are building a dedicated community clinic and pharmacy to achieve two critical goals:
            </p>

            <ul className="space-y-3">
              {[
                `Employ ${graduatesReady} KACCO medical and nursing graduates directly.`,
                "Provide subsidized healthcare and essential pharmacy items for sponsored children.",
                "Deliver specialized medical outreach for HIV/AIDS orphaned youth.",
                "Establish a permanent health foundation in Moroto and Napak."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a 
                href="https://wa.me/256772997712?text=I%20want%20to%20contribute%20or%20partner%20on%20the%20KACCO%20Clinic%20%26%20Pharmacy%20project." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-md"
              >
                Fund Clinic Construction
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 p-8 rounded-3xl space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">Project Milestones (Live Admin Synced)</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                  <span>Medical Graduates Recruited</span>
                  <span className="text-emerald-600 font-extrabold">{graduatesReady} Ready</span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                  <span>Construction & Architectural Framework</span>
                  <span className="text-sky-600 font-extrabold">{clinicProgress}% Completed</span>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-sky-500 h-full transition-all duration-500" 
                    style={{ width: `${clinicProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-xs text-sky-800 leading-relaxed font-medium">
              💡 <strong>Donor Note:</strong> Financial contributions or equipment donations to the Clinic Project directly empower our graduating nurses with sustainable jobs while safeguarding children across Karamoja.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
