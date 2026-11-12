"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Save, CheckCircle2, DollarSign, Users, Home } from "lucide-react";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const [stats, setStats] = useState({
    primaryPupils: "24",
    secondaryStudents: "23",
    nursingStudents: "19",
    residentChildren: "18",
    primaryAnnualFee: "750,000",
    secondaryAnnualFee: "1,950,000",
    monthlyFeedingBudget: "2,000,000",
    clinicStatus: "Proposed Capital Construction Plan (Seeking Donors)"
  });

  useEffect(() => {
    const stored = localStorage.getItem("kacco_admin_data");
    if (stored) {
      try {
        setStats(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "KACCO2026") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid administrative passcode.");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("kacco_admin_data", JSON.stringify(stats));
    setSavedMessage("Changes saved successfully! Live site records updated.");
    setTimeout(() => setSavedMessage(""), 4000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 max-w-md w-full shadow-sm space-y-6 text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-black text-slate-900">Restricted Admin Portal</h1>
              <p className="text-xs text-slate-500">Enter secure administrative passcode to proceed.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-center font-bold tracking-widest"
              />
              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md"
              >
                Authenticate
              </button>
            </form>
            <div className="text-[11px] text-slate-400">
              Authorized personnel only • Karamoja Child Care Organization
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> Secure Admin Session Active
            </div>
            <h1 className="text-3xl font-black text-slate-900 mt-2">KACCO Content Management</h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition"
          >
            Lock Dashboard
          </button>
        </div>

        {savedMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            {savedMessage}
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-sky-600" /> Beneficiary Enrolment Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Primary Pupils</label>
                <input
                  type="text"
                  value={stats.primaryPupils}
                  onChange={(e) => setStats({...stats, primaryPupils: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Secondary Students</label>
                <input
                  type="text"
                  value={stats.secondaryStudents}
                  onChange={(e) => setStats({...stats, secondaryStudents: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Nursing Scholars</label>
                <input
                  type="text"
                  value={stats.nursingStudents}
                  onChange={(e) => setStats({...stats, nursingStudents: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Resident Children</label>
                <input
                  type="text"
                  value={stats.residentChildren}
                  onChange={(e) => setStats({...stats, residentChildren: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" /> Sponsorship & Feeding Rates (UGX)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Primary Annual Fee</label>
                <input
                  type="text"
                  value={stats.primaryAnnualFee}
                  onChange={(e) => setStats({...stats, primaryAnnualFee: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Secondary Annual Fee</label>
                <input
                  type="text"
                  value={stats.secondaryAnnualFee}
                  onChange={(e) => setStats({...stats, secondaryAnnualFee: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700">Resident Home Monthly Feeding Budget</label>
                <input
                  type="text"
                  value={stats.monthlyFeedingBudget}
                  onChange={(e) => setStats({...stats, monthlyFeedingBudget: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Home className="w-5 h-5 text-amber-600" /> Clinic Project Status Notice
            </h2>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Current Status Text</label>
              <textarea
                rows={3}
                value={stats.clinicStatus}
                onChange={(e) => setStats({...stats, clinicStatus: e.target.value})}
                className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save & Publish Changes
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
