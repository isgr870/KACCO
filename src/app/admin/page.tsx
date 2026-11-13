"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Save, CheckCircle2, DollarSign, Users, FileText, Plus, Trash2, Edit3, Image as ImageIcon } from "lucide-react";

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [activeTab, setActiveTab] = useState<"stats" | "articles" | "pages">("stats");
  const [savedMessage, setSavedMessage] = useState("");

  // Stats & Financials state
  const [stats, setStats] = useState({
    primaryPupils: "24",
    secondaryStudents: "23",
    nursingStudents: "19",
    residentChildren: "18",
    primaryAnnualFee: "750,000",
    secondaryAnnualFee: "1,950,000",
    monthlyFeedingBudget: "2,000,000",
    clinicStatus: "Proposed Capital Construction Plan (Seeking Donors)"
  });

  // Dynamic Blog / Articles state
  const [articles, setArticles] = useState([
    {
      id: "1",
      title: "Longole Abraham: From KACCO Scholarship to Matany Hospital",
      date: "November 2026",
      category: "Success Story",
      content: "Longole Abraham is a proud KACCO scholarship alumnus who completed his medical training and is now actively serving patients at Matany Hospital, providing essential healthcare and healing to the people of Karamoja.",
      image: "/IMG-20261111-WA0043.jpg"
    }
  ]);

  const [newArticle, setNewArticle] = useState({
    title: "",
    category: "News & Updates",
    content: "",
    image: ""
  });

  // Page Content state (About & History)
  const [pageContent, setPageContent] = useState({
    aboutHeading: "Empowering Karamoja's Children & Communities Since 2006",
    aboutText: "Established in 2006 in Kangole Parish, Ngoleriet Sub-county, Napak District, KACCO arose in response to severe insecurity, cattle rustling, HIV/AIDS devastation, and extreme poverty that left many children orphaned. We provide holistic support, formal education, healthcare training, and child safeguarding."
  });

  useEffect(() => {
    const storedStats = localStorage.getItem("kacco_admin_stats");
    if (storedStats) try { setStats(JSON.parse(storedStats)); } catch (e) { console.error(e); }

    const storedArticles = localStorage.getItem("kacco_admin_articles");
    if (storedArticles) try { setArticles(JSON.parse(storedArticles)); } catch (e) { console.error(e); }

    const storedPages = localStorage.getItem("kacco_admin_pages");
    if (storedPages) try { setPageContent(JSON.parse(storedPages)); } catch (e) { console.error(e); }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "KACCO2026") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid administrative passcode.");
    }
  };

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("kacco_admin_stats", JSON.stringify(stats));
    localStorage.setItem("kacco_admin_articles", JSON.stringify(articles));
    localStorage.setItem("kacco_admin_pages", JSON.stringify(pageContent));
    setSavedMessage("All site records, articles, and page contents successfully published live!");
    setTimeout(() => setSavedMessage(""), 4000);
  };

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArticle.title || !newArticle.content) {
      alert("Please fill in article title and content.");
      return;
    }
    const item = {
      id: Date.now().toString(),
      title: newArticle.title,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      category: newArticle.category,
      content: newArticle.content,
      image: newArticle.image || "/IMG-20261111-WA0050.jpg"
    };
    const updated = [item, ...articles];
    setArticles(updated);
    localStorage.setItem("kacco_admin_articles", JSON.stringify(updated));
    setNewArticle({ title: "", category: "News & Updates", content: "", image: "" });
    setSavedMessage("New article published successfully!");
    setTimeout(() => setSavedMessage(""), 4000);
  };

  const handleDeleteArticle = (id: string) => {
    const updated = articles.filter(a => a.id !== id);
    setArticles(updated);
    localStorage.setItem("kacco_admin_articles", JSON.stringify(updated));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isNew: boolean) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isNew) {
          setNewArticle(prev => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 max-w-md w-full shadow-sm space-y-6 text-center">
            <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-black text-slate-900">Restricted Admin CMS</h1>
              <p className="text-xs text-slate-500">Enter secure administrative passcode (KACCO2026).</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-center font-bold tracking-widest"
              />
              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md"
              >
                Authenticate
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 w-full">
        {/* Header & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> Secure Admin CMS Active
            </div>
            <h1 className="text-3xl font-black text-slate-900 mt-2">KACCO Control & Publication Desk</h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition"
          >
            Lock Dashboard
          </button>
        </div>

        {savedMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-3 text-xs font-bold shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            {savedMessage}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition ${activeTab === "stats" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"}`}
          >
            📊 Statistics & Financials
          </button>
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition ${activeTab === "articles" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"}`}
          >
            ✍️ Blog, Stories & News ({articles.length})
          </button>
          <button
            onClick={() => setActiveTab("pages")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition ${activeTab === "pages" ? "bg-slate-900 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"}`}
          >
            📄 About & Page Content
          </button>
        </div>

        {/* TAB 1: STATS & FINANCIALS */}
        {activeTab === "stats" && (
          <form onSubmit={handleSaveAll} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-600" /> Beneficiary Enrolment Numbers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Primary Pupils</label>
                  <input type="text" value={stats.primaryPupils} onChange={(e) => setStats({...stats, primaryPupils: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Secondary Students</label>
                  <input type="text" value={stats.secondaryStudents} onChange={(e) => setStats({...stats, secondaryStudents: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nursing Scholars</label>
                  <input type="text" value={stats.nursingStudents} onChange={(e) => setStats({...stats, nursingStudents: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Resident Children</label>
                  <input type="text" value={stats.residentChildren} onChange={(e) => setStats({...stats, residentChildren: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-4">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-600" /> Financials & Clinic Status
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Primary Annual Fee (UGX)</label>
                  <input type="text" value={stats.primaryAnnualFee} onChange={(e) => setStats({...stats, primaryAnnualFee: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Secondary Annual Fee (UGX)</label>
                  <input type="text" value={stats.secondaryAnnualFee} onChange={(e) => setStats({...stats, secondaryAnnualFee: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Clinic Project Status Notice</label>
                  <input type="text" value={stats.clinicStatus} onChange={(e) => setStats({...stats, clinicStatus: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button type="submit" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Statistics & Financials
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: ARTICLES & SUCCESS STORIES */}
        {activeTab === "articles" && (
          <div className="space-y-8">
            {/* Create New Article Form */}
            <form onSubmit={handleAddArticle} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Plus className="w-5 h-5 text-sky-600" /> Publish New Blog Post or Success Story
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Article Title</label>
                  <input type="text" placeholder="e.g. Alumnus Spotlight: Nursing Graduate Serving in Moroto" value={newArticle.title} onChange={(e) => setNewArticle({...newArticle, title: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Category</label>
                  <select value={newArticle.category} onChange={(e) => setNewArticle({...newArticle, category: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50">
                    <option value="Success Story">Success Story</option>
                    <option value="News & Updates">News & Updates</option>
                    <option value="Community Outreach">Community Outreach</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Upload Photo from Device</label>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, true)} className="w-full p-2 rounded-xl border border-slate-200 text-xs bg-slate-50 file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-sky-600 file:text-white" />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700">Full Article Content & Story</label>
                  <textarea rows={4} placeholder="Write the complete story, update, or report here..." value={newArticle.content} onChange={(e) => setNewArticle({...newArticle, content: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-sm flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Publish Article Live
                </button>
              </div>
            </form>

            {/* Existing Articles List */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" /> Published Articles & Stories ({articles.length})
              </h2>
              <div className="space-y-4">
                {articles.map((art) => (
                  <div key={art.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                        <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">{art.category}</span>
                        <h3 className="font-extrabold text-slate-900 text-sm">{art.title}</h3>
                        <p className="text-xs text-slate-500">{art.date}</p>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteArticle(art.id)} className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5 shrink-0">
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PAGE CONTENT EDITOR */}
        {activeTab === "pages" && (
          <form onSubmit={handleSaveAll} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-amber-600" /> Edit About Page & History Content
            </h2>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">About Page Main Heading</label>
                <input type="text" value={pageContent.aboutHeading} onChange={(e) => setPageContent({...pageContent, aboutHeading: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">About & Historical Background Full Text</label>
                <textarea rows={6} value={pageContent.aboutText} onChange={(e) => setPageContent({...pageContent, aboutText: e.target.value})} className="w-full p-3 rounded-xl border border-slate-200 text-sm font-bold bg-slate-50" />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button type="submit" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-md flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Page Contents
              </button>
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
