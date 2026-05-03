"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Dumbbell, Target, Zap, Activity, Trophy, Loader2 } from 'lucide-react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    level: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // THIS IS THE NEW AI CONNECTION FUNCTION
  const triggerAIAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData: formData }),
      });
      const data = await response.json();
      setAiMessage(data.message);
    } catch (err) {
      setAiMessage("AI Analysis complete. Ready to build your plan.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Watch for the final step to trigger the AI
  useEffect(() => {
    if (step === 4) {
      triggerAIAnalysis();
    }
  }, [step]);

  const SelectionCard = ({ title, desc, icon: Icon, value, field }) => (
    <button 
      onClick={() => { setFormData({...formData, [field]: value}); nextStep(); }}
      className={`w-full p-6 bg-slate-900 border ${formData[field] === value ? 'border-emerald-400 bg-emerald-400/5' : 'border-slate-800'} rounded-2xl hover:border-emerald-400 text-left transition-all group`}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <p className="text-slate-400 text-sm">{desc}</p>
        </div>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-900 h-2 rounded-full mb-12 flex overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-full transition-all duration-500 ${step >= i ? 'bg-emerald-400' : 'bg-slate-800'} border-r border-slate-950`} style={{ width: '25%' }} />
        ))}
      </div>

      <div className="w-full max-w-2xl">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl font-black mb-2">Let's get started.</h2>
            <p className="text-slate-400 text-xl">What should the AI coach call you?</p>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-slate-800 p-6 rounded-2xl focus:ring-2 focus:ring-emerald-400 outline-none text-2xl"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              onKeyPress={(e) => e.key === 'Enter' && nextStep()}
            />
            <button onClick={nextStep} className="w-full py-5 bg-emerald-500 text-slate-950 font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
              Continue <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What is your main objective?</h2>
            <div className="grid gap-4">
              <SelectionCard field="goal" value="Muscle" title="Build Muscle" desc="Hypertrophy focused training" icon={Dumbbell} />
              <SelectionCard field="goal" value="Fat" title="Lose Body Fat" desc="High intensity & metabolic focus" icon={Target} />
              <SelectionCard field="goal" value="Strength" title="Pure Strength" desc="Powerlifting & heavy compounds" icon={Trophy} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Experience level?</h2>
            <div className="grid gap-4">
              <SelectionCard field="level" value="Beginner" title="Newbie" desc="0-6 months experience" icon={Activity} />
              <SelectionCard field="level" value="Intermediate" title="Intermediate" desc="1-3 years experience" icon={Zap} />
              <SelectionCard field="level" value="Advanced" title="Advanced" desc="3+ years experience" icon={BrainCircuit} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-8 text-center animate-in zoom-in duration-700">
            {isAnalyzing ? (
              <div className="flex flex-col items-center gap-4 py-12">
                <Loader2 className="w-12 h-12 text-emerald-400 animate-spin" />
                <p className="text-emerald-400 font-mono text-lg animate-pulse">SYNAPSING DATA...</p>
              </div>
            ) : (
              <>
                <div className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                  <BrainCircuit className="w-12 h-12 text-emerald-400" />
                </div>
                <h2 className="text-4xl font-black">AI Analysis Complete</h2>
                <div className="bg-slate-900 border border-emerald-500/20 p-6 rounded-2xl italic text-slate-300">
                  "{aiMessage}"
                </div>
                <div className="pt-8">
                  <a href="/login" className="block w-full py-5 bg-white text-slate-950 font-bold rounded-2xl hover:bg-slate-200 transition-all text-lg">
                    Claim My Personalized Plan
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
