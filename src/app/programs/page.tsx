import Navbar from "../components/Navbar";
import { GraduationCap, ShieldAlert, Stethoscope, Heart, Trees, Award } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Comprehensive Student Sponsorship",
      subtitle: "Primary, Secondary, Nursing & University",
      desc: "Providing full tuition, learning material, and holistic mentorship to children and youth across Karamoja.",
      icon: GraduationCap,
      color: "bg-sky-500",
    },
    {
      title: "Anti-FGM & Tepeth Girls Empowerment",
      subtitle: "Moroto & Napak District Focus",
      desc: "Eradicating female genital mutilation, early forced marriage, and child trafficking through community action, rescue shelters, and psychosocial guidance.",
      icon: ShieldAlert,
      color: "bg-emerald-600",
    },
    {
      title: "Out-of-School Youth Skilling",
      subtitle: "Vocational & Practical Tools",
      desc: "Equipping dropouts and unschooled youth with hands-on technical trades, entrepreneurship tools, and economic independence.",
      icon: Award,
      color: "bg-emerald-500",
    },
    {
      title: "HIV/AIDS Orphaned Children Care",
      subtitle: "Housing, Nutrition & Stigma Reduction",
      desc: "Offering safe housing, medical adherence support, and emotional counseling for orphaned children living with HIV/AIDS.",
      icon: Heart,
      color: "bg-sky-700",
    },
    {
      title: "Karamoja Eco-Action & Reforestation",
      subtitle: "Tree Planting & Climate Sensitization",
      desc: "Engaging students and parents in tree planting drives, environmental rehabilitation, and climate resilience workshops.",
      icon: Trees,
      color: "bg-emerald-700",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">Our Initiatives</span>
          <h1 className="text-4xl font-black text-slate-900">Transformative Action Across Karamoja</h1>
          <p className="text-slate-600 text-lg">Explore our core community programs designed to empower and protect the next generation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${p.color} text-white flex items-center justify-center shadow-md mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{p.title}</h3>
                  <div className="text-xs font-semibold text-emerald-600 mt-1 mb-3">{p.subtitle}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
