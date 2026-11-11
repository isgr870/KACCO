import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Target, ShieldCheck, HeartHandshake, Mail, PhoneCall } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            About KACCO
          </span>
          <h1 className="text-4xl font-black text-slate-900">Karamoja Child Care Organization</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We are a registered Community Based Organization (CBO) committed to uplifting vulnerable children, youth, and families across the Karamoja sub-region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission & Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide comprehensive education sponsorship from primary through university and nursing levels, while offering guidance, counseling, and economic empowerment to families and out-of-school youth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Eradicating Harmful Practices</h3>
            <p className="text-slate-600 leading-relaxed">
              We focus heavily on eradicating Female Genital Mutilation (FGM) among the Tepeth girls in Moroto and Napak districts, combating early child marriages, and protecting victims of child trafficking.
            </p>
          </div>
        </div>

        <div className="bg-sky-50 border border-sky-200 rounded-3xl p-8 sm:p-12 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">Get in Touch with Our Team</h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Have questions or want to partner with KACCO? Reach out to us directly through our official email or phone contact.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="mailto:k.childcare2017@gmail.com" className="flex items-center gap-2 font-bold text-sky-700 bg-white px-4 py-3 rounded-xl border border-sky-200 shadow-sm">
              <Mail className="w-5 h-5 text-sky-600" />
              k.childcare2017@gmail.com
            </a>
            <a href="tel:+256772997712" className="flex items-center gap-2 font-bold text-emerald-700 bg-white px-4 py-3 rounded-xl border border-emerald-200 shadow-sm">
              <PhoneCall className="w-5 h-5 text-emerald-600" />
              0772997712
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
