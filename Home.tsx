import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Map, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import { highSchoolRoadmaps, degreeRoadmaps } from "@/data/roadmaps";

export default function Home() {
  const [, navigate] = useLocation();
  const [userName, setUserName] = useState("");
  const [signInOpen, setSignInOpen] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    setUserName(nameInput.trim());
    setSignInOpen(false);
    setShowWelcome(true);
    setTimeout(() => setShowWelcome(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden dark-scroll">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(74,222,128,0.06)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(16,185,129,0.04)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(74,222,128,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-green-900/30 bg-black/50 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center"
              style={{ boxShadow: "0 0 20px rgba(74,222,128,0.35)" }}>
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              Skill<span className="text-green-400">Bridge</span>
            </span>
          </div>
          {userName ? (
            <div className="flex items-center gap-2 bg-green-900/20 border border-green-800/40 rounded-full px-4 py-1.5">
              <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 font-bold text-sm">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-green-300 text-sm font-medium hidden sm:block">{userName}</span>
            </div>
          ) : (
            <button
              onClick={() => setSignInOpen(true)}
              className="border border-green-700/40 text-green-400 hover:bg-green-500/10 hover:border-green-500/60 transition-all px-4 py-2 rounded-lg text-sm font-medium"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {/* Welcome toast */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 whitespace-nowrap"
            style={{ boxShadow: "0 0 30px rgba(74,222,128,0.5)" }}
          >
            <Sparkles className="w-4 h-4" />
            Welcome, {userName}! 🎓
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 pb-32 space-y-20">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center pt-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 border border-green-800/50 bg-green-900/15 text-green-400 text-sm font-medium px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            AI-Powered Academic Guidance for Indian Students
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Your path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              success
            </span>
            <br className="hidden md:block" /> starts here.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Click any roadmap below to get a personalized, AI-generated step-by-step guide —
            from 10th board prep to college degrees and career paths.
          </p>
        </motion.section>

        {/* High School & Entrance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-900/25 border border-green-800/40 flex items-center justify-center">
              <Map className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">High School & Entrance Exams</h2>
              <p className="text-gray-500 text-sm">10th, 12th boards + JEE, NEET, MHT-CET preparation</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {highSchoolRoadmaps.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/roadmap/${item.id}`)}
                className="group w-full flex items-center justify-between gap-2 px-4 py-4 rounded-xl bg-[#0d1a0d] border border-green-900/40 hover:border-green-500/60 hover:bg-green-900/15 transition-all duration-200 text-left"
              >
                <span className="text-sm font-semibold text-green-300 group-hover:text-green-200">
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-green-800 group-hover:text-green-400 transition-colors shrink-0" />
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* College Degrees */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-900/25 border border-green-800/40 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">College Degree Roadmaps</h2>
              <p className="text-gray-500 text-sm">B.E., B.Tech, BCA, BBA, B.Com, B.Sc and more</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {degreeRoadmaps.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/roadmap/${item.id}`)} **…**

_This snippet is truncated. If you want, I can provide the rest of the code for the `Home.tsx` file._