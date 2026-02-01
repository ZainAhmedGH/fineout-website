
import React, { useState } from 'react';
import { ShieldCheck, CreditCard, Clock, CheckCircle2 } from 'lucide-react';

const ServicePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('review');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-20 text-center">
        <div className="relative inline-block mb-12 group">
          <div className="absolute inset-0 bg-blue-400 rounded-[3rem] rotate-1 scale-105 opacity-10"></div>
          <img 
            src="https://fineout.co.uk/wp-content/uploads/2025/06/curved-parking-central-london-2-1.jpg?w=1024" 
            alt="Parking" 
            className="w-full max-w-5xl h-[350px] object-cover rounded-[3rem] shadow-2xl relative z-10" 
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 max-w-2xl mx-auto leading-tight bubbly-font">
          Select Your Legal Solution
        </h2>
        <p className="text-slate-500 mt-4 font-semibold">Fast. Secure. Professional.</p>
      </div>

      {/* Service Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div 
          onClick={() => setSelectedService('review')}
          className={`p-8 rounded-[3rem] cursor-pointer transition-all border-4 ${selectedService === 'review' ? 'border-blue-500 bg-white shadow-2xl scale-105' : 'border-transparent bg-white/50 opacity-70 hover:opacity-100'}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
              <ShieldCheck size={32} />
            </div>
            {selectedService === 'review' && <CheckCircle2 className="text-blue-500" size={32} />}
          </div>
          <h3 className="text-3xl font-black text-blue-900 mb-2 bubbly-font">Review & Pay</h3>
          <p className="text-slate-600 font-semibold mb-6">We review the charge against legal codes and handle the payment for you.</p>
          <div className="text-4xl font-black text-blue-600">Fine + £5 <span className="text-sm text-slate-400 font-bold uppercase">Processing</span></div>
        </div>

        <div 
          onClick={() => setSelectedService('contest')}
          className={`p-8 rounded-[3rem] cursor-pointer transition-all border-4 ${selectedService === 'contest' ? 'border-blue-500 bg-white shadow-2xl scale-105' : 'border-transparent bg-white/50 opacity-70 hover:opacity-100'}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
              <Clock size={32} />
            </div>
            {selectedService === 'contest' && <CheckCircle2 className="text-blue-500" size={32} />}
          </div>
          <h3 className="text-3xl font-black text-blue-900 mb-2 bubbly-font">Contest Only</h3>
          <p className="text-slate-600 font-semibold mb-6">Expert representatives contest your charge within the 28-day window.</p>
          <div className="text-4xl font-black text-blue-600">£10 <span className="text-sm text-slate-400 font-bold uppercase">Flat Fee</span></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[4rem] border border-blue-50 bubbly-shadow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <h2 className="text-3xl font-extrabold mb-12 text-blue-900 text-center">Case Details</h2>
        
        <form className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput label="First Name" type="text" placeholder="John" />
            <FormInput label="Last Name" type="text" placeholder="Doe" />
          </div>
          <FormInput label="PCN/Charge Number" type="text" placeholder="e.g. ZA12345678" />
          <FormInput label="Vehicle Registration" type="text" placeholder="e.g. AB12 CDE" />
          
          <button className="w-full bg-blue-600 text-white font-extrabold py-6 rounded-full hover:bg-blue-700 transition-all text-xl shadow-xl shadow-blue-100 mt-8 pill-btn flex items-center justify-center gap-3">
            <CreditCard /> Proceed to Secure Payment
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <div className="flex items-center gap-2 font-black text-slate-400 italic">STRIPE</div>
            <div className="flex items-center gap-2 font-black text-slate-400 italic">VISA</div>
            <div className="flex items-center gap-2 font-black text-slate-400 italic">MASTERCARD</div>
            <div className="flex items-center gap-2 font-black text-slate-400 italic">SSL SECURE</div>
        </div>
      </div>
    </div>
  );
};

const FormInput: React.FC<{label: string, type: string, placeholder: string}> = ({label, type, placeholder}) => (
  <div className="space-y-3">
    <label className="block text-sm font-extrabold text-blue-400 uppercase tracking-widest px-4">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full p-5 bg-blue-50 border-0 rounded-[1.5rem] font-bold text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-blue-200 outline-none transition-all" 
    />
  </div>
);

export default ServicePage;
