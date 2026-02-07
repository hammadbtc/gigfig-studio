import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const tickerItems = [
    'Figma Experts',
    'UI/UX Design',
    'Web Apps',
    'Brand Identity',
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      <Head>
        <title>GigFig Studio - Digital Experiences</title>
        <meta name="description" content="We build digital experiences that work" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/30 via-purple-900/20 to-transparent" 
           style={{ 
             background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.15) 30%, transparent 70%)'
           }} 
      />

      {/* 3D Glass Shapes */}
      {/* Left Shape */}
      <motion.div 
        className="absolute left-[-5%] top-[20%] w-[300px] h-[300px] opacity-60"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 backdrop-blur-xl border border-white/10 shadow-2xl"
             style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)' }}
        />
      </motion.div>

      {/* Right Shape */}
      <motion.div 
        className="absolute right-[-5%] top-[30%] w-[250px] h-[350px] opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-600/10 backdrop-blur-xl border border-white/10 shadow-2xl"
             style={{ transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)' }}
        />
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between px-8 lg:px-16 py-6"
      >
        <div className="text-2xl font-bold tracking-tight">
          GigFig
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-gray-300 hover:text-white transition-colors tracking-wide">WORK</a>
          <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors tracking-wide">ABOUT</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors tracking-wide">CONTACT</a>
        </div>

        <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform">
          Start Project
        </button>
      </motion.nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="max-w-4xl text-center">
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          >
            We build digital<br />
            experiences that work.
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Welcome to GigFig Studio. We Build custom interfaces and experiences for 
            websites, apps, and beyond—powered by Figma. With years of industry experience, 
            we turn concepts into polished, user-loving interfaces every time. Check out 
            our work below to see the magic in action, and let's connect to elevate yours.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full text-base font-medium flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all">
              Our Works
              <ArrowRight size={18} />
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 hover:border-white/50 transition-all">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </main>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden py-4">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={index} className="mx-8 text-sm text-gray-400 font-mono tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}