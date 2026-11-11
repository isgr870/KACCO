import Navbar from "../components/Navbar";
import { Mail, PhoneCall, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-sky-600 font-bold uppercase tracking-wider text-xs bg-sky-50 px-3 py-1 rounded-full border border-sky-200">Get in Touch</span>
          <h1 className="text-4xl font-black text-slate-900">Contact KACCO</h1>
          <p className="text-slate-600 text-lg">Reach out to our team for partnerships, sponsorships, and inquiries.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Official Details</h3>
            
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase">Email Address</div>
                <a href="mailto:k.childcare2017@gmail.com" className="font-bold text-sky-600 hover:underline">k.childcare2017@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase">Direct Contact</div>
                <a href="tel:+256772997712" className="font-bold text-emerald-600 hover:underline">+256 772 997712</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase">Location</div>
                <span className="font-bold text-slate-800">Moroto & Napak Districts, Karamoja, Uganda</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center space-y-4">
            <h4 className="font-bold text-xl text-slate-900">Instant WhatsApp Chat</h4>
            <p className="text-sm text-slate-600">Connect directly with the KACCO team on WhatsApp for fast responses.</p>
            <a 
              href="https://wa.me/256772997712?text=Hello,%20I%20would%20like%20to%20support%20KACCO." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition"
            >
              <PhoneCall className="w-5 h-5" />
              Open WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
