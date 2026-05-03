"use client";

import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Dumbbell, 
  Utensils, 
  Activity, 
  ChevronRight, 
  Menu, 
  X,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <BrainCircuit className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xl font-bold tracking-tight">Synapse<span className="text-emerald-400">Fit</span></span>
            </a>

            {/* Desktop Menu - Now pointing to different pages */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/workouts" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Workouts</a>
              <a href="/nutrition" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Nutrition</a>
              <a href="/methodology" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">AI Methodology</a>
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-800">
                <a href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log In</a>
                <a href="/onboarding" className="px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Get Started
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-400 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 absolute w-full">
            <div className="flex flex-col space-y-4">
              <a href="/workouts" className="text-slate-300 hover:text-white px-2 py-1">Workouts</a>
              <a href="/nutrition" className="text-slate-300 hover:text-white px-2 py-1">Nutrition</a>
              <a href="/methodology" className="text-slate-300 hover:text-white px-2 py-1">AI Methodology</a>
              <hr className="border-slate-800" />
              <a href="/login" className="text-slate-300 hover:text-white px-2 py-1">Log In</a>
              <a href="/onboarding" className="w-full text-center px-5 py-3 font-semibold bg-emerald-500 text-slate-950 rounded-xl hover:bg-emerald-400 transition-colors">
                Start Free Assessment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm font-medium text-emerald-300 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Powered by Gemini AI Engine</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Stop guessing. <br />
            Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Architecting.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            The first fitness platform that adapts to your biology in real-time. Whether you want to build muscle or lose fat, our AI dynamically adjusts your weights, volume, and macros every single day.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/onboarding" className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              Build My AI Program <ChevronRight className="w-5 h-5" />
            </a>
            <a href="/dashboard" className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors border border-slate-700 text-center">
              Go to Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">100k+</div>
              <div className="text-sm text-slate-400">Workouts Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Dynamic</div>
              <div className="text-sm text-slate-400">Progressive Overload</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">Zero</div>
              <div className="text-sm text-slate-400">Static Spreadsheets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-slate-400">Macro Recalculation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Overview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Brain for Your Brawn</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We replaced static PDF routines with an intelligent loop that learns how your body responds to fatigue, nutrition, and stress.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors flex flex-col">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Dumbbell className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Adaptive Training</h3>
            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
              If you hit 10 reps easily today, the AI automatically bumps your weight by 5 lbs for next week.
            </p>
            <a href="/workouts" className="text-emerald-400 font-medium hover:text-emerald-300 flex items-center gap-1 mt-auto">
              Explore Workouts <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors flex flex-col">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Utensils className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Nutrition</h3>
            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
              Tell the AI what you ate, and it dynamically adjusts your remaining macros for the day.
            </p>
            <a href="/nutrition" className="text-cyan-400 font-medium hover:text-cyan-300 flex items-center gap-1 mt-auto">
              Explore Nutrition <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors flex flex-col">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fatigue Management</h3>
            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
              The engine uses advanced algorithms to prescribe 'Deload' days automatically.
            </p>
            <a href="/methodology" className="text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-1 mt-auto">
              Read Methodology <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to stop guessing?</h2>
          <p className="text-xl text-slate-400 mb-10">Create your account today and get 3 months of premium AI coaching for free.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/onboarding" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-emerald-400" />
            <span className="font-bold tracking-tight">SynapseFit</span>
          </a>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="/privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-300">Terms of Service</a>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Data Secured locally
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
