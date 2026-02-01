
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-4 z-50 mx-4 mt-4 rounded-full bubbly-shadow border border-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">F</div>
              <span className="text-xl font-extrabold text-blue-600 tracking-tight font-brand">FineOut</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="text-slate-500 hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/choose-your-service" className="text-slate-500 hover:text-blue-500 transition-colors">Services</Link>
            <Link to="/contact" className="text-slate-500 hover:text-blue-500 transition-colors">Contact</Link>
            <Link to="/choose-your-service" className="bg-blue-500 text-white px-6 py-2 pill-btn shadow-md shadow-blue-100">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Bubbly Newsletter Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 md:p-16 rounded-[3rem] bubbly-shadow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
          
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100 mb-4">Stay in the loop</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Let's keep you up to date with what's new!</h2>
            <p className="text-xl text-blue-50">Weekly Updates to Our Service!</p>
          </div>
          <div className="relative z-10">
            <form className="space-y-4 bg-white/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-sm">
              <input type="text" placeholder="Name" className="w-full bg-white border-0 p-4 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-blue-300 outline-none" />
              <input type="email" placeholder="Email & Phone" className="w-full bg-white border-0 p-4 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-blue-300 outline-none" />
              <textarea placeholder="Your Message" rows={3} className="w-full bg-white border-0 p-4 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-blue-300 outline-none"></textarea>
              <button className="w-full bg-white text-blue-600 font-extrabold py-4 pill-btn shadow-xl text-lg hover:bg-blue-50">Send Message</button>
            </form>
          </div>
        </div>

        {/* Info Grid */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-4xl font-extrabold text-blue-900 leading-tight">FineOut. <br/><span className="text-blue-500">Trusted, Reliable Legal Services.</span></h1>
            <p className="mt-6 text-slate-500 max-w-md">Taking the stress out of parking charges with a friendly, professional approach since 2014.</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Where we are</p>
            <address className="not-italic text-slate-600 leading-relaxed font-semibold">
              763 High Road<br />
              Ilford, Essex<br />
              IG3 8RW<br />
              United Kingdom
            </address>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Call us</p>
              <p className="text-slate-600 font-bold text-lg">0203 597 0000</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Social</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer shadow-sm">
                    <span className="text-[10px] font-bold">SM</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 font-bold">
          <div className="flex space-x-8 mb-4 md:mb-0 uppercase tracking-widest">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/choose-your-service" className="hover:text-blue-500">Services</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </div>
          <p>© 2024 FineOut • Built for humans</p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f9ff]">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
