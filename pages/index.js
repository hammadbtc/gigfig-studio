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
    <div style={styles.container}>
      <Head>
        <title>GigFig Studio - Digital Experiences</title>
        <meta name="description" content="We build digital experiences that work" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker {
          animation: ticker 30s linear infinite;
        }
      `}</style>

      {/* Background Gradient */}
      <div style={styles.bgGradient} />

      {/* 3D Glass Shapes */}
      <motion.div 
        style={{...styles.shape, ...styles.leftShape}}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div style={styles.glassShapeLeft} />
      </motion.div>

      <motion.div 
        style={{...styles.shape, ...styles.rightShape}}
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div style={styles.glassShapeRight} />
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.nav}
      >
        <div style={styles.logo}>GigFig</div>
        
        <div style={styles.navLinks}>
          <a href="#work" style={styles.navLink}>WORK</a>
          <a href="#about" style={styles.navLink}>ABOUT</a>
          <a href="#contact" style={styles.navLink}>CONTACT</a>
        </div>

        <button style={styles.navButton}>Start Project</button>
      </motion.nav>

      {/* Hero Content */}
      <main style={styles.main}>
        <div style={styles.heroContent}>
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.headline}
          >
            We build digital<br />
            experiences that work.
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={styles.paragraph}
          >
            Welcome to GigFig Studio. We Build custom interfaces and experiences for 
            websites, apps, and beyond—powered by Figma. With years of industry experience, 
            we turn concepts into polished, user-loving interfaces every time. Check out 
            our work below to see the magic in action, and let&apos;s connect to elevate yours.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={styles.ctas}
          >
            <button style={styles.primaryButton}>
              Our Works
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button style={styles.secondaryButton}>Get in Touch</button>
          </motion.div>
        </div>
      </main>

      {/* Ticker */}
      <div style={styles.tickerContainer}>
        <div className="ticker" style={styles.ticker}>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={index} style={styles.tickerItem}>
              <span style={styles.tickerDot}></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0A0A0A',
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
  },
  bgGradient: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.15) 30%, transparent 70%)',
  },
  shape: {
    position: 'absolute',
    opacity: 0.6,
  },
  leftShape: {
    left: '-5%',
    top: '20%',
    width: '300px',
    height: '300px',
  },
  rightShape: {
    right: '-5%',
    top: '30%',
    width: '250px',
    height: '350px',
  },
  glassShapeLeft: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 100%)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)',
  },
  glassShapeRight: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)',
  },
  nav: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 64px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    fontSize: '14px',
    color: '#D1D5DB',
    textDecoration: 'none',
    transition: 'color 0.2s',
    letterSpacing: '0.025em',
  },
  navButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 24px',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
  },
  main: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 200px)',
    padding: '0 24px',
  },
  heroContent: {
    maxWidth: '896px',
    textAlign: 'center',
  },
  headline: {
    fontSize: 'clamp(40px, 6vw, 72px)',
    fontWeight: 'bold',
    lineHeight: 1.1,
    marginBottom: '32px',
  },
  paragraph: {
    color: '#9CA3AF',
    fontSize: '18px',
    lineHeight: 1.7,
    maxWidth: '768px',
    margin: '0 auto 48px',
  },
  ctas: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: 'white',
    color: 'black',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontSize: '16px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontSize: '16px',
    fontWeight: 500,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    cursor: 'pointer',
  },
  tickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    overflow: 'hidden',
    padding: '16px 0',
  },
  ticker: {
    display: 'flex',
    whiteSpace: 'nowrap',
  },
  tickerItem: {
    margin: '0 32px',
    fontSize: '14px',
    color: '#9CA3AF',
    fontFamily: 'monospace',
    letterSpacing: '0.025em',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  tickerDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#8B5CF6',
  },
};