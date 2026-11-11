"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  ShieldAlert, 
  Stethoscope, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Globe,
  MapPin,
  Users
} from "lucide-react";

export default function Home() {
  const [posts, setPosts] = useState([
    { id: "post-1", title: "Moroto Anti-FGM Community Outreach Success", category: "Advocacy", date: "2026-11-10", status: "Published" },
    { id: "post-2", title: "Term 3 University & Nursing Scholarship Applications Open", category: "Education", date: "2026-11-05", status: "Published" },
    { id: "post-3", title: "KACCO Clinic Foundation Groundbreaking Ceremony", category: "Healthcare", date: "2026-10-28", status: "Draft" }
  ]);

  const [clinicProgress, setClinicProgress] = useState(65);
  const [graduatesReady, setGraduatesReady] = useState(18);
  const [fgmRescued, setFgmRescued] = useState(64);

  useEffect(() => {
    const savedPosts = localStorage.getItem("kacco_posts");
    const savedClinic = localStorage.getItem("kacco_clinic_progress");
    const savedGrads = localStorage.getItem("kacco_graduates");
    const savedFgm = localStorage.getItem("kacco_fgm");

    if (savedPosts) setPosts(JSON.parse(savedPosts));
    if (savedClinic) setClinicProgress(Number(savedClinic));
    if (savedGrads) setGraduatesReady(Number(savedGrads));
    if (savedFgm) setFgmRescued(Number(savedFgm));
  }, []);

  const publishedPosts = posts.filter(p => p.status === "Published");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-emerald-950 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Moroto & Napak Districts, Karamoja, Uganda
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              Empowering Children, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Youth & Communities</span> in Karamoja.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Sponsoring education from Primary to University, defending girls against FGM, equipping unschooled youth with vocational skills, and building medical futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/programs" 
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition shadow-lg text-center flex items-center justify-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/clinic" 
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition text-center flex items-center justify-center gap-2"
              >
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                <span>Clinic & Pharmacy Project</span>
              </Link>
            </div>
          </div>

          {/* Impact Quick Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">4 Levels</div>
                <div className="text-xs text-slate-400">Primary, Secondary, Nursing & University</div>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{fgmRescued}+ Girls</div>
                <div className="text-xs text-slate-400">Moroto & Napak Anti-FGM & Child Protection Hubs</div>
              </div>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{clinicProgress}% Built</div>
                <div className="text-xs text-slate-400">Community Clinic & Pharmacy Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE NEWS & ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-1">Live Field Updates</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Latest News & Announcements</h2>
          </div>
          <Link href="/admin" className="text-xs font-bold text-slate-500 hover:text-sky-600 transition">
            [ Admin Portal ]
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publishedPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/posts/${post.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase bg-sky-100 text-sky-800 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg group-hover:text-sky-600 transition leading-snug">
                  {post.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> Published by KACCO Admin Desk
                </span>
                <span className="group-hover:translate-x-1 transition">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Our Core Pillars of Impact</h2>
            <p className="text-slate-600 text-sm">
              Addressing systemic challenges through community-led education, healthcare infrastructure, and child safeguarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Education & Sponsorship</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Paying tuition, providing scholastic materials, and mentoring students from primary level up to university and professional nursing school.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Anti-FGM & Child Protection</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Rescuing vulnerable young girls from early forced marriages and female genital mutilation, offering safe shelter and trauma rehabilitation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-bold">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Clinic & Healthcare</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Establishing local medical access points staffed by our graduated nurses to serve remote pastoralist communities in Moroto and Napak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
