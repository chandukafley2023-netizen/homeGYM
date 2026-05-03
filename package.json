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
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <BrainCircuit className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-xl font-bold tracking-tight">Synapse<span className="text-emerald-400">Fit</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">How it Works</a>
              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log In</button>
                <button className="px-5 py-2.5 text-sm font-semibold bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Get Started
                </button>
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
              <a href="#features" className="text-slate-300 hover:text-white px-2 py-1">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white px-2 py-1">How it Works</a>
              <hr className="border-slate-800" />
              <button className="text-left text-slate-300 hover:text-white px-2 py-1">Log In</button>
              <button className="w-full px-5 py-3 font-semibold bg-emerald-500 text-slate-950 rounded-xl">
                Start Free Assessment
              </button>
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
            <button className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              Build My AI Program <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-base font-bold bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors border border-slate-700">
              View Demo Workout
            </button>
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

      {/* Core Features */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Brain for Your Brawn</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We replaced static PDF routines with an intelligent loop that learns how your body responds to fatigue, nutrition, and stress.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Dumbbell className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Adaptive Training</h3>
            <p className="text-slate-400 leading-relaxed">
              If you hit 10 reps easily today, the AI automatically bumps your weight by 5 lbs for next week. If you report poor sleep, it intelligently reduces volume to prevent injury.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Utensils className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Nutrition</h3>
            <p className="text-slate-400 leading-relaxed">
              More than a calorie tracker. Tell the AI what you ate, and it dynamically adjusts your remaining macros for the day to ensure you stay in a perfect surplus or deficit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fatigue Management</h3>
            <p className="text-slate-400 leading-relaxed">
              Log your daily readiness score. The engine uses advanced algorithms to prescribe 'Deload' days automatically, maximizing muscle protein synthesis while mitigating CNS burnout.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Showcase */}
      <section id="how-it-works" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">The Continuous Growth Loop</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/30">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Provide Context</h4>
                    <p className="text-slate-400">Tell us your age, weight, goal (cut/bulk), and gym equipment. We generate your baseline.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/30">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Train & Log</h4>
                    <p className="text-slate-400">Follow the app's rep and weight targets. Log your Perceived Exertion (RPE) after every set.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/30">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">AI Recalibration</h4>
                    <p className="text-slate-400">The engine analyzes your performance and literally rewrites tomorrow's workout to perfectly match your new strength level.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup UI Panel */}
            <div className="flex-1 w-full max-w-md mx-auto">
              <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-slate-400">Today's Protocol</span>
                    <span className="px-2 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">AI Optimized</span>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Mock Exercise 1 */}
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold">Barbell Bench Press</div>
                        <div className="text-sm text-cyan-400">+5 lbs from last week</div>
                      </div>
                      <div className="text-slate-400 text-sm">3 sets x 8-10 reps @ 185 lbs</div>
                    </div>

                    {/* Mock Exercise 2 */}
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 relative overflow-hidden">
                       <div className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-500" />
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-bold">Incline Dumbbell Fly</div>
                        <div className="text-sm text-indigo-400">Volume Reduced</div>
                      </div>
                      <div className="text-slate-400 text-sm mb-2">2 sets x 12 reps @ 40 lbs</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <BrainCircuit className="w-3 h-3" /> Based on high chest fatigue yesterday
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl">
                    Start Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to stop guessing?</h2>
          <p className="text-xl text-slate-400 mb-10">Join the waitlist today and get 3 months of premium AI coaching for free.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 bg-slate-900 border border-slate-700 rounded-full focus:outline-none focus:border-emerald-500 w-full sm:w-80"
            />
            <button className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-emerald-400" />
            <span className="font-bold tracking-tight">SynapseFit</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Data Secured locally
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
