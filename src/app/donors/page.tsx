"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GraduationCap, ShieldAlert, Award, PhoneCall } from "lucide-react";

export default function DonorsPage() {
  const [students, setStudents] = useState([
    { id: "KAC-102", name: "Akal Mark", level: "Primary (P6)", district: "Moroto", status: "Sponsored" },
    { id: "KAC-105", name: "Nacap Maria", level: "Secondary (S3)", district: "Napak", status: "Seeking Sponsor" },
    { id: "KAC-109", name: "Lokiru John", level: "Nursing Certificate", district: "Moroto", status: "Graduated / Clinic Candidate" },
    { id: "KAC-112", name: "Chebet Peace", level: "University (Yr 2)", district: "Napak", status: "Sponsored" }
  ]);

  useEffect(() => {
    const savedStudents = localStorage.getItem("kacco_students");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-grow">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Donor Portal & Impact
          </span>
          <h1 className="text-4xl font-black text-slate-900">Accomplishments, Testimonies & Students</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            See how your partnerships and donations directly empower children, protect vulnerable girls, and create sustainable careers across Karamoja.
          </p>
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-center">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3 font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-slate-900">{students.length + 144}+</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Students Sponsored</div>
            <p className="text-xs text-slate-600 pt-1">From primary level up to university and nursing colleges across Moroto and Napak.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 font-bold">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-slate-900">64</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Anti-FGM Protections</div>
            <p className="text-xs text-slate-600 pt-1">Tepeth girls successfully rescued, sheltered, and enrolled in formal education.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-center">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3 font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-slate-900">18</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Medical Graduates</div>
            <p className="text-xs text-slate-600 pt-1">Nursing alumni ready for direct employment in our upcoming community clinic.</p>
          </div>
        </div>

        {/* Testimonies & Success Stories */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 border-b border-slate-200 pb-3">Testimonies & Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
                  LJ
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Lokiru John</h4>
                  <span className="text-xs text-emerald-600 font-semibold">Nursing Certificate Graduate • Moroto District</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "Without KACCO's scholarship program, I would have dropped out of school due to financial hardship. Today, I have graduated with my nursing certificate and am proud to be part of the upcoming KACCO Clinic team to serve my community."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center">
                  CP
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Chebet Peace</h4>
                  <span className="text-xs text-sky-600 font-semibold">University Student (Year 2) • Napak District</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                "KACCO didn't just pay my tuition; they provided mentorship and safe shelter. Being a sponsored student has given me the confidence to advocate for girls' rights against FGM across Karamoja."
              </p>
            </div>
          </div>
        </div>

        {/* Live Student Beneficiary Roster */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Sponsored Students & Beneficiary Roster</h2>
              <p className="text-xs text-slate-500">Synced in real time with the KACCO admin database.</p>
            </div>
            <span className="text-xs font-bold bg-sky-100 text-sky-800 px-3 py-1 rounded-full self-start">
              Total Records: {students.length}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-4">Student ID</th>
                    <th className="py-3.5 px-4">Name</th>
                    <th className="py-3.5 px-4">Education Level</th>
                    <th className="py-3.5 px-4">District</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {students.map((student: any) => (
                    <tr key={student.id} className="hover:bg-slate-50 transition">
                      <td className="py-3.5 px-4 font-bold text-sky-700">{student.id}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">{student.name}</td>
                      <td className="py-3.5 px-4 text-slate-600">{student.level}</td>
                      <td className="py-3.5 px-4 text-slate-600">{student.district}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          student.status === "Sponsored" 
                            ? "bg-emerald-100 text-emerald-800" 
                            : student.status.includes("Candidate")
                            ? "bg-sky-100 text-sky-800"
                            : "bg-amber-100 text-amber-800"
                        }`}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Partner / Donate CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-lg">
          <h3 className="text-3xl font-black">Partner with KACCO Today</h3>
          <p className="text-sky-50 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether you want to sponsor a student through university or support our clinic construction project, your contribution creates generational impact in Moroto and Napak.
          </p>
          <div>
            <a 
              href="https://wa.me/256772997712?text=Hello%20KACCO%20team,%20I%20would%20like%20to%20become%20a%20donor%20or%20sponsor%20a%20student." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-sky-50 font-extrabold px-8 py-4 rounded-xl transition shadow-md"
            >
              <PhoneCall className="w-5 h-5" />
              Connect via WhatsApp to Donate
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
