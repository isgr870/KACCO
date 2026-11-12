"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Save, CheckCircle2, DollarSign, Users, Home, Award, Image as ImageIcon } from "lucide-react";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const [data, setData] = useState({
    primaryPupils: "24",
    secondaryStudents: "23",
    nursingStudents: "19",
    residentChildren: "18",
    primaryAnnualFee: "750,000",
    secondaryAnnualFee: "1,950,000",
    monthlyFeedingBudget: "2,000,000",
    clinicStatus: "Proposed Capital Construction Plan (Seeking Donors)",
    featuredAlumnusName: "Longole Abraham",
    featuredAlumnusRole: "Matany Hospital Healthcare Worker",
    featuredAlumnusStory: "Longole Abraham is a proud KACCO scholarship alumnus who completed his medical training and is now actively serving patients at Matany Hospital, providing essential healthcare and healing to the people of Karamoja.",
    featuredAlumnusImage: "/IMG-20261111-WA0043.jpg"
  });

  useEffect(() => {
    const stored = localStorage.getItem("kacco_admin_cms");
    if (stored) {
      try {
        setData(JSON.parse(stored));
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(prev => ({ ...prev, featuredAlumnusImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("kacco_admin_cms", JSON.stringify(data));
    setSavedMessage("All site records, statistics, and success stories updated successfully!");
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
            <h1 className="text-3xl font-black text-slate-900 mt-2">KACCO Content Management System</h1>
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
                  value={data.primaryPupils}
                  onChange={(e) => setData({...data, primaryPupils: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Secondary Students</label>
                <input
                  type="text"
                  value={data.secondaryStudents}
                  onChange={(e) => setData({...data, secondaryStudents: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Nursing Scholars</label>
                <input
                  type="text"
                  value={data.nursingStudents}
                  onChange={(e) => setData({...data, nursingStudents: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Resident Children</label>
                <input
                  type="text"
                  value={data.residentChildren}
                  onChange={(e) => setData({...data, residentChildren: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" /> Featured Success Story & Alumnus (Longole Abraham)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Success Story Name</label>
                <input
                  type="text"
                  value={data.featuredAlumnusName}
                  onChange={(e) => setData({...data, featuredAlumnusName: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Professional Role / Placement</label>
                <input
                  type="text"
                  value={data.featuredAlumnusRole}
                  onChange={(e) => setData({...data, featuredAlumnusRole: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700">Success Story Bio & Description</label>
                <textarea
                  rows={3}
                  value={data.featuredAlumnusStory}
                  onChange={(e) => setData({...data, featuredAlumnusStory: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <ImageIcon className="w-4 h-4 text-sky-600" /> Upload Success Story Photo from Local Storage
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-3 rounded-xl border border-slate-200 text-xs bg-slate-50 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-sky-600 file:text-white hover:file:bg-sky-700"
                />
                {data.featuredAlumnusImage && (
                  <div className="mt-2 w-32 h-32 rounded-xl overflow-hidden border border-slate-200">
                    <img src={data.featuredAlumnusImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" /> Financials & Clinic Status
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Primary Annual Fee (UGX)</label>
                <input
                  type="text"
                  value={data.primaryAnnualFee}
                  onChange={(e) => setData({...data, primaryAnnualFee: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Secondary Annual Fee (UGX)</label>
                <input
                  type="text"
                  value={data.secondaryAnnualFee}
                  onChange={(e) => setData({...data, secondaryAnnualFee: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
              <div className="space-y-1 sm:col-span-2">
                <label className="text-xs font-bold text-slate-700">Clinic Project Status Notice</label>
                <input
                  type="text"
                  value={data.clinicStatus}
                  onChange={(e) => setData({...data, clinicStatus: e.target.value})}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save & Publish Live Records
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
