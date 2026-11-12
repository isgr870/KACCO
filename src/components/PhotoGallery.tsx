"use client";

import React from "react";
import { Images, ShieldCheck } from "lucide-react";

export default function PhotoGallery() {
  // Automatically grab images in public/ folder or list them
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold">
          <Images className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-slate-900">KACCO Community & Student Gallery</h3>
          <p className="text-xs text-slate-500">Snapshots of our nursing students, residential care, and community outreach in Moroto & Napak.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* We map files copied into public/ */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm group">
          <div className="h-56 overflow-hidden bg-slate-200 relative">
            <img 
              src="/abraham.jpg" 
              alt="Longole Abraham at Matany Hospital" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              onError={(e) => {
                // Fallback if filename differs
                e.currentTarget.src = "/1001272226.jpg";
              }}
            />
          </div>
          <div className="p-4 space-y-1">
            <div className="font-extrabold text-slate-900 text-sm">Longole Abraham</div>
            <p className="text-xs text-slate-600">Scholarship beneficiary actively working and healing patients at Matany Hospital.</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm group">
          <div className="h-56 overflow-hidden bg-slate-200 relative">
            <img 
              src="/1001272229.jpg" 
              alt="Nursing Students & Director Mama Esther Aleper" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-4 space-y-1">
            <div className="font-extrabold text-slate-900 text-sm">Director Mama Esther Aleper & Students</div>
            <p className="text-xs text-slate-600">Gathered with sponsored youth and community leaders in Karamoja.</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm group">
          <div className="h-56 overflow-hidden bg-slate-200 relative">
            <img 
              src="/1001272223.jpg" 
              alt="Students dining and interacting" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="p-4 space-y-1">
            <div className="font-extrabold text-slate-900 text-sm">Student Life & Welfare</div>
            <p className="text-xs text-slate-600">Sponsored beneficiaries enjoying meals and discussions at KACCO facilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
