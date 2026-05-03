"use client";

import React, { useState } from 'react';
import { BrainCircuit, Mail, Lock, ChevronRight, Github } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        
        {/* Logo & Header */}
        <div className="text-center">
          <div className="inline-flex p-3 bg-emerald-500/10 rounded-2xl mb-4">
            <BrainCircuit className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">Welcome back</h2>
          <p className="text-slate-400 mt-2">Log in to your AI training dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-slate-950 border border-slate-800 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none text-white transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-950 border border-slate-800 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none text-white transition-all"
                />
              </div>
            </div>

            <button className="w-full py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group">
              Sign In <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-2 text-slate-500">Or continue with</span></div>
          </div>

          <button className="w-full py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-3 font-medium">
            <Github className="w-5 h-5" /> GitHub
          </button>
        </div>

        <p className="text-center text-slate-500 text-sm">
          Don't have an account? <a href="/onboarding" className="text-emerald-400 hover:underline">Start Assessment</a>
        </p>
      </div>
    </div>
  );
}
