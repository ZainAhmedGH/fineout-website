
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Friendly Hero Section */}
      <section className="pt-12 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] bubbly-shadow relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full"></div>
              <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 mb-6 leading-tight">
                  Parking Charges <br/> <span className="text-blue-400 underline decoration-blue-200 decoration-8 underline-offset-8">Sorted.</span>
                </h1>
                <p className="text-xl text-slate-500 font-semibold mb-12 leading-relaxed">
                  Say goodbye to stress. Our bespoke legal service helps you review or contest parking charges with ease.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/choose-your-service" 
                    className="bg-blue-500 text-white px-10 py-5 font-extrabold text-lg pill-btn shadow-xl shadow-blue-200"
                  >
                    Get Started Now
                  </Link>
                  <Link 
                    to="/contact" 
                    className="bg-blue-50 text-blue-600 px-10 py-5 font-extrabold text-lg pill-btn hover:bg-blue-100"
                  >
                    Talk to Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-400 rounded-[3rem] rotate-3 scale-105 opacity-20 group-hover:rotate-1 transition-transform"></div>
              <img 
                src="https://fineout.co.uk/wp-content/uploads/2025/06/curved-parking-central-london-2-1.jpg?w=1024" 
                alt="Parking area" 
                className="rounded-[3rem] shadow-2xl w-full object-cover h-[550px] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fun What We Offer Section */}
      <section className="py-24 bg-white px-4 rounded-[4rem] mx-4 bubbly-shadow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20 items-end">
            <div className="col-span-1 lg:col-span-1">
              <span className="bg-blue-100 text-blue-600 px-6 py-2 font-extrabold text-sm rounded-full uppercase tracking-widest inline-block mb-6">What We Offer</span>
              <h2 className="text-4xl font-extrabold text-blue-900">Friendly Experts at Your Service.</h2>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <p className="text-2xl font-bold text-slate-500 leading-snug">
                We take pride in being bubbly experts committed to saving you hassle. 
                Whether you want to <span className="text-blue-500">Review & Pay</span> or <span className="text-blue-500">Contest Only</span>, we've got the tools to help!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Fine Resolution" 
              icon="✨"
              color="bg-blue-50"
            />
            <ServiceCard 
              title="DVLA Check" 
              icon="🚗"
              color="bg-sky-50"
            />
            <ServiceCard 
              title="3 Step Process" 
              icon="🎯"
              color="bg-indigo-50"
            />
            <ServiceCard 
              title="24/7 Support" 
              icon="💬"
              color="bg-cyan-50"
            />
          </div>
        </div>
      </section>

      {/* Playful How It Works Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="bg-blue-500 text-white px-6 py-2 font-extrabold text-sm rounded-full uppercase tracking-widest inline-block mb-6 shadow-lg shadow-blue-100">Simple Steps</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <StepItem number={1} title="Book Online" desc="Quickly enter your details on our friendly platform!" />
            <StepItem number={2} title="Confirm" desc="Get a friendly nudge via SMS and Email to confirm." />
            <StepItem number={3} title="Approval" desc="We process your application with legal precision." />
            <StepItem number={4} title="Success!" desc="Relax! Your charge is handled and you get a receipt." />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-blue-600 rounded-[3rem] p-10 md:p-20 text-white bubbly-shadow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">A Decade of Excellence.</h1>
              <p className="text-xl text-blue-50 leading-relaxed font-semibold">
                FineOut has spent over 10 years perfecting the art of friendly legal assistance. 
                Our experts use a bubbly approach to solve complex problems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CheckItem text="Expert Team" />
                <CheckItem text="Support 24/7" />
                <CheckItem text="Fair Pricing" />
                <CheckItem text="Fast Results" />
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://fineout.co.uk/wp-content/uploads/2025/10/pexels-pavel-danilyuk-8112172.jpg" 
                alt="Our Team" 
                className="w-full aspect-square object-cover"
              />
            </div>
        </div>
      </section>

      {/* Bubbly Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-blue-900">What Our Friends Say</h2>
              <p className="text-slate-500 mt-4 font-bold uppercase tracking-widest">Happy Customers</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <TestimonialCard 
                text="FineOut is a lifesaver! They sorted my fine in days and the process was so friendly. Highly recommend!"
                name="Hasib A."
                role="Professional Driver"
                avatar="https://fineout.co.uk/wp-content/uploads/2025/06/man.png"
              />
              <TestimonialCard 
                text="I love the bubbly service. They really care about making things easy. Best legal help I've had."
                name="Sam P."
                role="Creative Educator"
                avatar="https://fineout.co.uk/wp-content/uploads/2025/06/woman-2-150x150.png?crop=1"
              />
           </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{title: string, icon: string, color: string}> = ({title, icon, color}) => (
  <div className={`${color} p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:scale-105 transition-all cursor-default bubbly-shadow border border-white/50`}>
    <div className="text-6xl mb-8 filter drop-shadow-md">{icon}</div>
    <h3 className="text-xl font-extrabold text-blue-900 leading-tight">{title}</h3>
  </div>
);

const StepItem: React.FC<{number: number, title: string, desc: string}> = ({number, title, desc}) => (
  <div className="bg-white p-8 rounded-[2.5rem] relative group border border-blue-50 bubbly-shadow">
    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-xl font-extrabold text-white shadow-lg shadow-blue-200 mb-6 group-hover:scale-110 transition-transform">
      {number}
    </div>
    <h3 className="text-2xl font-extrabold text-blue-900 mb-4">{title}</h3>
    <p className="text-slate-500 font-semibold leading-relaxed">{desc}</p>
  </div>
);

const CheckItem: React.FC<{text: string}> = ({text}) => (
  <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
    <span className="text-2xl">✅</span>
    <span className="text-lg font-bold">{text}</span>
  </div>
);

const TestimonialCard: React.FC<{text: string, name: string, role: string, avatar: string}> = ({text, name, role, avatar}) => (
  <div className="bg-white p-10 rounded-[3rem] bubbly-shadow border border-blue-50 relative">
    <div className="absolute top-8 right-12 text-6xl text-blue-100 opacity-50 font-serif">“</div>
    <div className="mb-10">
      <p className="text-xl text-slate-700 font-semibold italic leading-relaxed">"{text}"</p>
    </div>
    <div className="flex items-center gap-6">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover border-4 border-blue-50 shadow-md" />
      <div>
        <p className="font-extrabold text-lg text-blue-900">{name}</p>
        <p className="text-blue-400 font-bold text-sm uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </div>
);

export default HomePage;
