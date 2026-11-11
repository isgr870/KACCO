"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GraduationCap, ShieldAlert, Stethoscope, Heart, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [livePosts, setLivePosts] = useState([
    { id: "post-1", title: "Moroto Anti-FGM Community Outreach Success", category: "Advocacy", date: "2026-11-10", status: "Published" },
    { id: "post-2", title: "Term 3 University & Nursing Scholarship Applications Open", category: "Education", date: "2026-11-05", status: "Published" }
  ]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("kacco_posts");
    if (savedPosts) {
      const parsed = JSON.parse(savedPosts);
      setLivePosts(parsed.filter((p: any) => p.status === "Published"));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-600 via-sky-500 to-emerald-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white border border-white/30">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
              Karamoja Child Care Organization (KACCO)
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Empowering Children, Youth & Communities in Karamoja.
            </h1>
            <p className="text-lg text-sky-50 leading-relaxed font-normal">
              Sponsoring education from Primary to University, defending girls against FGM in Moroto & Napak, equipping unschooled youth, and building medical futures.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href="/programs" 
                className="bg-white text-sky-700 hover:bg-sky-50 font-bold px-6 py-3.5 rounded-xl transition shadow-lg flex items-center gap-2"
              >
                Explore Programs
                <ChevronRight className="w-5 h-5 text-sky-600" />
              </Link>
              <Link 
                href="/clinic" 
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md transition border border-emerald-400/30 flex items-center gap-2"
              >
                <Stethoscope className="w-5 h-5 text-emerald-300" />
                Clinic & Pharmacy Project
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
              <GraduationCap className="w-8 h-8 text-sky-200 mb-2" />
              <div className="text-3xl font-extrabold text-white">4 Levels</div>
              <div className="text-xs text-sky-100 mt-1 font-medium">Primary, Secondary, Nursing & University</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
              <ShieldAlert className="w-8 h-8 text-emerald-200 mb-2" />
              <div className="text-3xl font-extrabold text-white">Moroto & Napak</div>
              <div className="text-xs text-sky-100 mt-1 font-medium">Anti-FGM & Child Protection Hubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Admin Broadcast Feed */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Live Field Updates</span>
              <h2 className="text-2xl font-black text-slate-900 mt-2">Latest News & Announcements</h2>
            </div>
            <Link href="/admin" className="text-xs font-bold text-sky-600 hover:underline">
              [ Admin Portal ]
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {livePosts.map((post: any) => (
              <div key={post.id} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3 hover:shadow-md transition">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase bg-sky-100 text-sky-800 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-snug">{post.title}</h3>
                <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" /> Published by KACCO Admin Desk
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
