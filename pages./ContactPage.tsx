
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-24 text-center">
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-2 scale-105"></div>
          <img 
            src="https://fineout.co.uk/wp-content/uploads/2025/06/curved-parking-central-london-2-1.jpg" 
            alt="Contact" 
            className="w-full max-w-5xl h-[300px] object-cover rounded-[3rem] shadow-2xl relative z-10 brightness-90 grayscale-[20%]"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
             <h1 className="bg-white/95 backdrop-blur-md text-blue-600 text-4xl md:text-6xl font-extrabold px-16 py-8 rounded-full shadow-2xl border-4 border-blue-100">
               Hello! 👋
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-20">
        <div className="space-y-12">
          <div className="bg-white p-10 rounded-[3rem] bubbly-shadow border border-blue-50">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6 leading-tight">We're here to help you smile.</h2>
            <p className="text-xl text-slate-500 font-semibold leading-relaxed">
              Have questions? Our bubbly team is waiting for your message. We usually respond in under 2 hours!
            </p>
          </div>

          <div className="space-y-6">
            <ContactBubble 
              title="Visit Us" 
              text="763 High Road, Ilford, Essex" 
              icon="📍"
            />
            <ContactBubble 
              title="Call Us" 
              text="0203 597 0000" 
              icon="📞"
            />
            <ContactBubble 
              title="Email Us" 
              text="hello@fineout.co.uk" 
              icon="✉️"
            />
          </div>
        </div>

        <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-blue-50 bubbly-shadow">
          <form className="space-y-8">
            <ContactInput label="Name" placeholder="Your friendly name" />
            <ContactInput label="Email" placeholder="Your email address" type="email" />
            
            <div className="space-y-3">
              <label className="block text-sm font-extrabold text-blue-400 uppercase tracking-widest px-4">How did you find us?</label>
              <select className="w-full p-5 bg-blue-50 border-0 rounded-[1.5rem] font-bold text-blue-900 focus:ring-4 focus:ring-blue-200 outline-none">
                <option>A Happy Friend</option>
                <option>Social Media</option>
                <option>Google Search</option>
                <option>Radio Ad</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-extrabold text-blue-400 uppercase tracking-widest px-4">Message</label>
              <textarea rows={4} placeholder="How can we help?" className="w-full p-5 bg-blue-50 border-0 rounded-[2rem] font-bold text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-blue-200 outline-none"></textarea>
            </div>
            
            <button className="w-full bg-blue-500 text-white font-extrabold py-6 rounded-full hover:bg-blue-600 transition-all text-xl shadow-xl shadow-blue-100 pill-btn">
              Send Message ✨
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactBubble: React.FC<{title: string, text: string, icon: string}> = ({title, text, icon}) => (
  <div className="flex gap-6 items-center bg-white p-6 rounded-[2rem] bubbly-shadow border border-blue-50">
    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
      <span className="text-2xl">{icon}</span>
    </div>
    <div>
      <h3 className="font-extrabold text-blue-900 text-lg">{title}</h3>
      <p className="text-slate-500 font-semibold">{text}</p>
    </div>
  </div>
);

const ContactInput: React.FC<{label: string, placeholder: string, type?: string}> = ({label, placeholder, type = "text"}) => (
  <div className="space-y-3">
    <label className="block text-sm font-extrabold text-blue-400 uppercase tracking-widest px-4">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="w-full p-5 bg-blue-50 border-0 rounded-[1.5rem] font-bold text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-blue-200 outline-none" 
    />
  </div>
);

export default ContactPage;
