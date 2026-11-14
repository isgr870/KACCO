import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteData } from "@/actions/cms";
import { Stethoscope, Building, MessageSquare, Award } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ClinicPage() {
  const { stats, articles } = await getSiteData();
  const successStories = articles.filter((a) => a.category === "Success Story");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full">
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

        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 flex items-start gap-4 shadow-sm">
          <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center shrink-0">
            <Building className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-slate-700">
            <h3 className="font-extrabold text-amber-900 text-base">Project Status: Proposed Construction Plan</h3>
            <p>{stats.clinicStatus}</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                Arnderschous Foundation • Denmark Partnership
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                {stats.nursingStudents} Active Nursing Scholarship Students
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
            While physical construction is in planning, <strong>{stats.nursingStudents} Karamoja youth</strong> are actively sponsored in nursing institutions thanks to the <strong>Arnderschous Foundation in Denmark</strong>, under Director <strong>Mama ESTHER ALEPER</strong>. These students undergo rigorous clinical hospital rotations to staff the future clinic.
          </p>
        </div>

        {/* Dynamic Success Stories from Database */}
        {successStories.length > 0 ? (
          <div className="space-y-6">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-full h-80 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                    <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Award className="w-4 h-4" /> {story.category}
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">{story.title}</h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{story.content}</p>
                  <div className="text-xs font-bold text-emerald-600">KACCO Verified Record</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="w-full h-80 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                <img src="/IMG-20261111-WA0043.jpg" alt="Longole Abraham at Matany Hospital" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
                <Award className="w-4 h-4" /> Featured Alumnus Success Story
              </div>
              <h2 className="text-2xl font-black text-slate-900">Longole Abraham — Matany Hospital Healthcare Worker</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Longole Abraham is a proud KACCO scholarship alumnus who completed his medical training and is now actively serving patients at Matany Hospital, providing essential healthcare and healing to the people of Karamoja.
              </p>
              <div className="text-xs font-bold text-emerald-600">KACCO Scholarship Beneficiary in Active Medical Practice</div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900">Clinical Training & Ward Rotations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
              <div className="h-64 overflow-hidden bg-slate-100">
                <img src="/IMG-20261111-WA0044.jpg" alt="Clinical Practice" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-extrabold text-slate-900 text-sm">Hospital Ward Practice</h3>
                <p className="text-xs text-slate-600">Sponsored nursing students gaining hands-on clinical experience in regional hospitals.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm group">
              <div className="h-64 overflow-hidden bg-slate-100">
                <img src="/IMG-20261111-WA0045.jpg" alt="Ward Documentation" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-extrabold text-slate-900 text-sm">Patient Care & Records</h3>
                <p className="text-xs text-slate-600">Nursing trainees completing medical documentation and patient management rotations.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
