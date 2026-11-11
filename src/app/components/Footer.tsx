import Link from 'next/link';
import { Mail, PhoneCall, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-emerald-400 flex items-center justify-center text-slate-900 font-black text-sm">
              K
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">KACCO</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Karamoja Child Care Organization sponsors education from primary to university, combats FGM in Moroto & Napak, equips out-of-school youth, and builds sustainable health infrastructure.
          </p>
        </div>

        <div className="lg:col-span-4 space-y-2">
          <h4 className="text-sm font-bold text-white mb-1">Direct Field Contacts</h4>
          <div className="flex items-center gap-2.5 text-slate-300 text-xs">
            <Mail className="w-4 h-4 text-sky-400 shrink-0" />
            <a href="mailto:k.childcare2017@gmail.com" className="hover:underline">k.childcare2017@gmail.com</a>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300 text-xs">
            <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
            <a href="tel:+256772997712" className="hover:underline">0772997712 / +256 772 997712</a>
          </div>
          <div className="flex items-start gap-2.5 text-slate-300 text-xs">
            <Users className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>Moroto & Napak Districts, Karamoja, Uganda</span>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-sm font-bold text-white">Quick Navigation</h4>
          <div className="flex flex-col space-y-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About Organization</Link>
            <Link href="/programs" className="hover:text-white">Programs & Advocacy</Link>
            <Link href="/clinic" className="hover:text-white">Clinic & Pharmacy Project</Link>
            <Link href="/contact" className="hover:text-white">Contact & Support</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-4 border-t border-slate-800 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Karamoja Child Care Organization (KACCO). All rights reserved.
      </div>
    </footer>
  );
}
