"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, ArrowLeft, Calendar, Tag } from "lucide-react";

export default function PostDetail() {
  const params = useParams();
  const id = params?.id;

  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // Default fallback posts if not found in localStorage
    const defaultPosts = [
      { 
        id: "post-1", 
        title: "Moroto Anti-FGM Community Outreach Success", 
        category: "Advocacy", 
        date: "2026-11-10", 
        status: "Published",
        content: "KACCO teams successfully conducted community dialogue sessions across Moroto district, engaging elders, mothers, and local youth leaders. Through intensive human rights advocacy and community education, families pledged total commitment to abandoning female genital mutilation (FGM) and protecting young girls across Karamoja."
      },
      { 
        id: "post-2", 
        title: "Term 3 University & Nursing Scholarship Applications Open", 
        category: "Education", 
        date: "2026-11-05", 
        status: "Published",
        content: "Applications for the Term 3 scholarship cycle are officially open for deserving students across Moroto and Napak districts. Priority is given to young women entering our nursing certificate pipeline to support the upcoming KACCO community clinic."
      },
      { 
        id: "post-3", 
        title: "KACCO Clinic Foundation Groundbreaking Ceremony", 
        category: "Healthcare", 
        date: "2026-10-28", 
        status: "Draft",
        content: "Preparations are underway for the physical groundbreaking of the KACCO Community Clinic and Pharmacy. Alumni nurses trained through our vocational programs will spearhead operations."
      }
    ];

    const savedPosts = localStorage.getItem("kacco_posts");
    const allPosts = savedPosts ? JSON.parse(savedPosts) : defaultPosts;
    const found = allPosts.find((p: any) => p.id === id);
    
    if (found) {
      setPost(found);
    } else {
      setPost(allPosts[0]); // fallback
    }
  }, [id]);

  if (!post) return <div className="min-h-screen flex items-center justify-center font-sans">Loading article...</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 w-full">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold uppercase bg-sky-100 text-sky-800 px-3 py-1 rounded-md flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" /> {post.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>{post.content || "Detailed community field report published directly by the KACCO administrative desk."}</p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
              <Globe className="w-4 h-4" /> Official KACCO Publication
            </span>
            <span>Verified Record</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
