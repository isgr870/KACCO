"use client";

import React from "react";
import { Images } from "lucide-react";

const GALLERY_ITEMS = [
  {
    src: "/IMG-20261111-WA0021.jpg",
    title: "Nursing Students & Director Mama Esther Aleper",
    description: "Nursing scholarship recipients with the District Health Officer and KACCO Director Mama Esther Aleper.",
  },
  {
    src: "/IMG-20261111-WA0043.jpg",
    title: "Longole Abraham — Matany Hospital",
    description: "KACCO scholarship alumnus now serving patients professionally at Matany Hospital.",
  },
  {
    src: "/IMG-20261111-WA0044.jpg",
    title: "Hospital Clinical Practice",
    description: "Sponsored nursing students gaining hands-on clinical experience in hospital wards.",
  },
  {
    src: "/IMG-20261111-WA0045.jpg",
    title: "Ward Documentation & Patient Care",
    description: "Nursing trainees completing medical records and clinical rotations.",
  },
  {
    src: "/IMG-20261111-WA0046.jpg",
    title: "Student Welfare & Mentorship Lunch",
    description: "Sponsored students sharing lunch and discussing progress with Director Mama Esther Aleper.",
  },
  {
    src: "/IMG-20261111-WA0047.jpg",
    title: "KACCO Youth & Children Cohort",
    description: "Beneficiaries across primary, secondary, and vocational tiers in Moroto and Napak.",
  },
  {
    src: "/IMG-20261111-WA0049.jpg",
    title: "Community & Parent Engagement",
    description: "Grassroots outreach supporting families and safeguarding children across Karamoja.",
  },
  {
    src: "/IMG-20261111-WA0050.jpg",
    title: "Annual Student Retreat & Excursion",
    description: "Sponsored children and youth travelling together for annual mentorship camps.",
  },
  {
    src: "/IMG-20261111-WA0051.jpg",
    title: "Educational Excursion — Source of the Nile",
    description: "KACCO students and mentors during an educational field trip in Jinja.",
  },
];

export default function PhotoGallery() {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold">
          <Images className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-slate-900">KACCO Community & Student Gallery</h3>
          <p className="text-xs text-slate-500">
            Snapshots of our nursing students, residential care, alumni, and community outreach in Moroto & Napak.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.src}
            className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm group flex flex-col"
          >
            <div className="h-60 overflow-hidden bg-slate-200 relative">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4 space-y-1 flex-1">
              <div className="font-extrabold text-slate-900 text-sm">{item.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
