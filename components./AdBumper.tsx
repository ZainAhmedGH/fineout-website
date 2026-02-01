
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RefreshCcw, ArrowRight } from 'lucide-react';

interface AdBumperProps {
  onComplete: () => void;
}

export const AdBumper: React.FC<AdBumperProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'intro' | 'falling' | 'button' | 'solving' | 'slogan' | 'end'>('intro');
  const [isShaking, setIsShaking] = useState(false);
  const ticketControls = useAnimation();

  const triggerExplosion = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 100 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 200);

    confetti({
      particleCount: 300,
      spread: 140,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#fbbf24', '#ffffff'],
      gravity: 0.6,
      drift: 0,
      scalar: 2
    });

    setPhase('slogan');
    setTimeout(() => setPhase('end'), 3500);
  };

  const startAd = async () => {
    setPhase('intro');
    ticketControls.set({ y: -600, rotate: -20 });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    setPhase('falling');
    
    await ticketControls.start({
      y: 0,
      rotate: 0,
      transition: { 
        type: 'spring', 
        damping: 20, 
        stiffness: 100,
        mass: 1.5
      }
    });
    
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    setPhase('button');

    await new Promise(resolve => setTimeout(resolve, 2000));
    setPhase('solving');
    triggerExplosion();
  };

  useEffect(() => {
    startAd();
  }, []);

  return (
    <motion.div 
      animate={isShaking ? { x: [-15, 15, -10, 10, -5, 5, 0] } : {}}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] w-full h-full bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div 
        animate={{ 
          backgroundColor: phase === 'slogan' ? '#f8fafc' : phase === 'end' ? '#2563eb' : '#ffffff' 
        }}
        className="absolute inset-0 transition-colors duration-1000"
      />

      <AnimatePresence mode="wait">
        {(phase === 'intro' || phase === 'falling' || phase === 'button' || phase === 'solving') && (
          <motion.div
            key="ticket-phase"
            exit={{ scale: 1.8, opacity: 0, filter: 'blur(30px)' }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex flex-col items-center w-full px-8"
          >
            <motion.div
              animate={ticketControls}
              className="w-full aspect-[3/4] max-w-[220px] bg-yellow-400 rounded-2xl shadow-2xl border-[6px] border-slate-900 flex flex-col p-6 text-slate-900 mb-12"
            >
              <div className="border-b-4 border-slate-900/10 pb-4 mb-4">
                 <div className="font-black text-xl leading-none uppercase tracking-tighter italic">Parking<br/>Charge</div>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-slate-900/10 rounded-full"></div>
                <div className="h-3 w-4/5 bg-slate-900/10 rounded-full"></div>
                <div className="h-3 w-full bg-slate-900/10 rounded-full"></div>
              </div>
              <div className="mt-auto font-black text-4xl text-center bg-slate-900 text-yellow-400 py-3 rounded-xl shadow-lg">
                £100
              </div>
            </motion.div>

            {(phase === 'button' || phase === 'solving') && (
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-full flex flex-col items-center"
              >
                <motion.div
                  animate={phase === 'solving' ? { scale: 0.85, y: 10 } : {}}
                  className="relative w-full max-w-sm py-6 bg-blue-600 text-white bubbly-font text-4xl font-bold rounded-[3rem] shadow-[0_12px_0_rgb(30,64,175)] text-center"
                >
                  FineOut
                  <motion.div
                      animate={phase === 'solving' 
                        ? { y: 20, opacity: 0 } 
                        : { y: [0, -10, 0] }
                      }
                      transition={{ 
                        y: { repeat: phase === 'solving' ? 0 : Infinity, duration: 1 },
                        opacity: { duration: 0.3 }
                      }}
                      className="absolute -bottom-4 -right-2 text-5xl"
                  >
                      ☝️
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}

        {phase === 'slogan' && (
          <motion.div 
            key="slogan-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="z-30 flex flex-col items-center text-center px-6"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-3xl text-slate-900 font-normal">Let us help you</span>
              <motion.span 
                initial={{ scale: 0.5, rotate: -5 }}
                animate={{ scale: 1.2, rotate: 0 }}
                className="text-8xl font-black text-blue-600 bubbly-font drop-shadow-md"
              >
                FINE
              </motion.span>
              <span className="text-3xl text-slate-900 font-normal">a way</span>
              <motion.span 
                initial={{ scale: 0.5, rotate: 5 }}
                animate={{ scale: 1.3, rotate: 0 }}
                transition={{ delay: 0.4 }}
                className="text-9xl font-black text-blue-600 bubbly-font drop-shadow-md"
              >
                OUT.
              </motion.span>
            </div>
          </motion.div>
        )}

        {phase === 'end' && (
          <motion.div 
            key="end-phase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-30 flex flex-col items-center text-center px-8"
          >
            <div className="w-28 h-28 bg-white rounded-[3rem] flex items-center justify-center text-blue-600 font-black text-5xl mb-8 shadow-2xl">
              FO
            </div>
            <h2 className="text-5xl font-black text-white mb-4 bubbly-font tracking-tight">FineOut</h2>
            <p className="text-2xl text-blue-100 mb-10 font-bold">Dispute. Finance. Relax.</p>
            
            <div className="bg-yellow-400 text-slate-900 px-10 py-6 rounded-[2rem] font-black text-3xl shadow-xl transform -rotate-2 mb-12">
              50% OFF
              <div className="text-xs uppercase tracking-widest font-black opacity-60">First Dispute</div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => onComplete()}
                className="bg-white text-blue-600 px-12 py-6 rounded-full font-black text-3xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-4 group"
              >
                Enter Website
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>

              <button 
                onClick={startAd}
                className="flex items-center gap-2 text-white/60 font-bold hover:text-white transition-colors p-4"
              >
                <RefreshCcw size={18} /> Replay Ad
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {(phase === 'intro' || phase === 'falling' || phase === 'button' || phase === 'solving') && (
        <div className="absolute bottom-8 left-0 w-full text-center">
           <div className="text-slate-900 font-black text-xl uppercase tracking-tighter opacity-60">
             Dispute or Finance
           </div>
        </div>
      )}
    </motion.div>
  );
};
