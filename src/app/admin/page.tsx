"use client";

import React, { useState, useEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";
import { 
  GraduationCap, 
  ShieldAlert, 
  Stethoscope, 
  Users, 
  Plus, 
  Search,
  X,
  Building2,
  Globe,
  Trash2
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("posts");

  // Persistent State with localStorage
  const [clinicProgress, setClinicProgress] = useState(65);
  const [graduatesReady, setGraduatesReady] = useState(18);
  const [fgmRescued, setFgmRescued] = useState(64);

  const [posts, setPosts] = useState([
    { id: "post-1", title: "Moroto Anti-FGM Community Outreach Success", category: "Advocacy", date: "2026-11-10", status: "Published" },
    { id: "post-2", title: "Term 3 University & Nursing Scholarship Applications Open", category: "Education", date: "2026-11-05", status: "Published" },
    { id: "post-3", title: "KACCO Clinic Foundation Groundbreaking Ceremony", category: "Healthcare", date: "2026-10-28", status: "Draft" }
  ]);

  const [students, setStudents] = useState([
    { id: "KAC-102", name: "Akal Mark", level: "Primary (P6)", district: "Moroto", status: "Sponsored" },
    { id: "KAC-105", name: "Nacap Maria", level: "Secondary (S3)", district: "Napak", status: "Seeking Sponsor" },
    { id: "KAC-109", name: "Lokiru John", level: "Nursing Certificate", district: "Moroto", status: "Graduated / Clinic Candidate" },
    { id: "KAC-112", name: "Chebet Peace", level: "University (Yr 2)", district: "Napak", status: "Sponsored" }
  ]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedStudents = localStorage.getItem("kacco_students");
    const savedPosts = localStorage.getItem("kacco_posts");
    const savedClinic = localStorage.getItem("kacco_clinic_progress");
    const savedGrads = localStorage.getItem("kacco_graduates");
    const savedFgm = localStorage.getItem("kacco_fgm");

    if (savedStudents) setStudents(JSON.parse(savedStudents));
    if (savedPosts) setPosts(JSON.parse(savedPosts));
    if (savedClinic) setClinicProgress(Number(savedClinic));
    if (savedGrads) setGraduatesReady(Number(savedGrads));
    if (savedFgm) setFgmRescued(Number(savedFgm));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("kacco_students", JSON.stringify(students));
    localStorage.setItem("kacco_posts", JSON.stringify(posts));
    localStorage.setItem("kacco_clinic_progress", clinicProgress.toString());
    localStorage.setItem("kacco_graduates", graduatesReady.toString());
    localStorage.setItem("kacco_fgm", fgmRescued.toString());
  }, [students, posts, clinicProgress, graduatesReady, fgmRescued]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);

  // New student form state
  const [newName, setNewName] = useState("");
  const [newLevel, setNewLevel] = useState("Primary (P1-P7)");
  const [newDistrict, setNewDistrict] = useState("Moroto");
  const [newStatus, setNewStatus] = useState("Seeking Sponsor");

  // New post form state
  const [postTitle, setPostTitle] = useState("");
  const [postCategory, setPostCategory] = useState("Advocacy");
  const [postContent, setPostContent] = useState("");

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;
    const newId = `KAC-1${Math.floor(10 + Math.random() * 90)}`;
    setStudents([{ id: newId, name: newName, level: newLevel, district: newDistrict, status: newStatus }, ...students]);
    setNewName("");
    setIsAddModalOpen(false);
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle) return;
    const newPost = {
      id: `post-${Date.now()}`,
      title: postTitle,
      category: postCategory,
      date: new Date().toISOString().split("T")[0],
      status: "Published"
    };
    setPosts([newPost, ...posts]);
    setPostTitle("");
    setPostContent("");
    setIsPostModalOpen(false);
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const handleUpdateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;
    setStudents(students.map(s => s.id === editingStudent.id ? editingStudent : s));
    setEditingStudent(null);
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.district.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row font-sans text-slate-800">
      <AdminSidebar />

      {/* Main Administrative Workspace */}
      <main className="flex-1 p-4 sm:p-8 space-y-8 overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Master Control & Publishing Portal</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Data is automatically persisted locally in your browser storage.
            </p>
          </div>

          <div className="flex bg-slate-200 p-1 rounded-xl text-xs font-semibold overflow-x-auto">
            <button 
              onClick={() => setActiveTab("posts")} 
              className={`px-3 py-2 rounded-lg transition ${activeTab === "posts" ? "bg-white text-sky-700 shadow-sm font-bold" : "text-slate-600"}`}
            >
              News & Posts
            </button>
            <button 
              onClick={() => setActiveTab("students")} 
              className={`px-3 py-2 rounded-lg transition ${activeTab === "students" ? "bg-white text-sky-700 shadow-sm font-bold" : "text-slate-600"}`}
            >
              Students
            </button>
            <button 
              onClick={() => setActiveTab("clinic")} 
              className={`px-3 py-2 rounded-lg transition ${activeTab === "clinic" ? "bg-white text-sky-700 shadow-sm font-bold" : "text-slate-600"}`}
            >
              Clinic & Stats
            </button>
          </div>
        </div>

        {/* TAB 1: SITE POSTS & NEWS MANAGEMENT */}
        {activeTab === "posts" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Live Site Publications & News</h3>
                <p className="text-xs text-slate-500">Create articles and announcements that broadcast directly to visitors.</p>
              </div>
              <button 
                onClick={() => setIsPostModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Post</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
              <div className="space-y-3">
                {posts.map((post) => (
                  <div key={post.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase bg-sky-100 text-sky-800 px-2 py-0.5 rounded-md">
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-400">{post.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base">{post.title}</h4>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {post.status}
                      </span>
                      <button 
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                        title="Delete Post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STUDENTS MANAGEMENT */}
        {activeTab === "students" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Student Sponsorship Roster</h3>
                <p className="text-xs text-slate-500">Manage beneficiaries across Moroto and Napak districts.</p>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Student</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6 space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student or ID..." 
                  className="pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl w-full sm:w-64 focus:outline-none focus:border-sky-500"
                />
              </div>

              {/* Mobile View */}
              <div className="space-y-4 sm:hidden">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sky-700 text-xs">{student.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        student.status === "Sponsored" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                      }`}>
                        {student.status}
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 text-base">{student.name}</div>
                    <div className="text-xs text-slate-600 flex justify-between">
                      <span>Level: <strong>{student.level}</strong></span>
                      <span>District: <strong>{student.district}</strong></span>
                    </div>
                    <div className="pt-2 border-t border-slate-200 flex justify-end">
                      <button onClick={() => setEditingStudent(student)} className="text-xs font-bold text-sky-600">
                        Edit File →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-50 text-xs font-bold text-slate-500 uppercase border-y border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Student ID</th>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Education Level</th>
                      <th className="py-3 px-4">District</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-slate-50 transition">
                        <td className="py-3.5 px-4 font-bold text-sky-700">{student.id}</td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">{student.name}</td>
                        <td className="py-3.5 px-4 text-slate-600">{student.level}</td>
                        <td className="py-3.5 px-4 text-slate-600">{student.district}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            student.status === "Sponsored" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <button 
                            onClick={() => setEditingStudent(student)}
                            className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CLINIC & SITE STATS CONTROLS */}
        {activeTab === "clinic" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Live Site Metrics & Campaign Controls</h3>
              <p className="text-xs text-slate-500">Changes made here instantly update public metrics and progress bars.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-sky-600">
                  <Building2 className="w-6 h-6" />
                  <h4 className="font-bold text-slate-900">Clinic Construction Progress</h4>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">Progress Percentage ({clinicProgress}%)</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={clinicProgress} 
                    onChange={(e) => setClinicProgress(Number(e.target.value))}
                    className="w-full mt-2 accent-sky-600"
                  />
                </div>
                <div className="text-xs text-emerald-600 font-bold">✓ Live on Public Clinic Page</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-emerald-600">
                  <Users className="w-6 h-6" />
                  <h4 className="font-bold text-slate-900">Graduated Nurses (Alumni)</h4>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">Ready for Clinic Employment</label>
                  <input 
                    type="number" 
                    value={graduatesReady} 
                    onChange={(e) => setGraduatesReady(Number(e.target.value))}
                    className="w-full mt-2 p-2.5 text-sm border border-slate-300 rounded-xl font-bold"
                  />
                </div>
                <div className="text-xs text-emerald-600 font-bold">✓ Synced across dashboard</div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-sky-600">
                  <ShieldAlert className="w-6 h-6" />
                  <h4 className="font-bold text-slate-900">Anti-FGM Protected Girls</h4>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">Moroto & Napak Total</label>
                  <input 
                    type="number" 
                    value={fgmRescued} 
                    onChange={(e) => setFgmRescued(Number(e.target.value))}
                    className="w-full mt-2 p-2.5 text-sm border border-slate-300 rounded-xl font-bold"
                  />
                </div>
                <div className="text-xs text-emerald-600 font-bold">✓ Active community counter</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* CREATE POST MODAL */}
      {isPostModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Publish New Site Article / Update</h3>
              <button onClick={() => setIsPostModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Headline / Title</label>
                <input 
                  type="text" 
                  value={postTitle} 
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="e.g. Moroto Youth Skilling Initiative Launch" 
                  required
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                <select 
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value)}
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Advocacy">Advocacy & Anti-FGM</option>
                  <option value="Education">Education & Sponsorship</option>
                  <option value="Healthcare">Healthcare & Clinic</option>
                  <option value="Environment">Eco-Action & Reforestation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Article Body / Description</label>
                <textarea 
                  rows={4}
                  value={postContent} 
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Enter full details of the announcement..." 
                  required
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsPostModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-sm"
                >
                  Publish to Live Site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD STUDENT MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Add New Sponsored Student</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Lok Chapel" 
                  required
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Education Level</label>
                <select 
                  value={newLevel}
                  onChange={(e) => setNewLevel(e.target.value)}
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Primary (P1-P7)">Primary School</option>
                  <option value="Secondary (S1-S4)">Secondary School</option>
                  <option value="Nursing Certificate">Nursing Certificate</option>
                  <option value="University Degree">University Degree</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">District</label>
                <select 
                  value={newDistrict}
                  onChange={(e) => setNewDistrict(e.target.value)}
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Moroto">Moroto</option>
                  <option value="Napak">Napak</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Status</label>
                <select 
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Sponsored">Sponsored</option>
                  <option value="Seeking Sponsor">Seeking Sponsor</option>
                  <option value="Graduated / Clinic Candidate">Graduated / Clinic Candidate</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-xl hover:bg-sky-700 shadow-sm"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT STUDENT MODAL */}
      {editingStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Edit Student Record</h3>
                <span className="text-xs text-sky-600 font-bold">{editingStudent.id}</span>
              </div>
              <button onClick={() => setEditingStudent(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateStudent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={editingStudent.name} 
                  onChange={(e) => setEditingStudent({...editingStudent, name: e.target.value})}
                  required
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Education Level</label>
                <input 
                  type="text" 
                  value={editingStudent.level} 
                  onChange={(e) => setEditingStudent({...editingStudent, level: e.target.value})}
                  required
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">District</label>
                <select 
                  value={editingStudent.district}
                  onChange={(e) => setEditingStudent({...editingStudent, district: e.target.value})}
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Moroto">Moroto</option>
                  <option value="Napak">Napak</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Status</label>
                <select 
                  value={editingStudent.status}
                  onChange={(e) => setEditingStudent({...editingStudent, status: e.target.value})}
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-sky-500 bg-white"
                >
                  <option value="Sponsored">Sponsored</option>
                  <option value="Seeking Sponsor">Seeking Sponsor</option>
                  <option value="Graduated / Clinic Candidate">Graduated / Clinic Candidate</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setEditingStudent(null)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-sm"
                >
                  Update Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
