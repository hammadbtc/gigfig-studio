import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'LaunchPad',
    description: 'All-in-one SaaS dashboard for startup analytics and growth tracking.',
    image: '/images/project-1.png',
    category: 'Web App',
  },
  {
    id: 2,
    name: 'VRX',
    description: 'Immersive VR experience platform with 600K+ active users worldwide.',
    image: '/images/project-2.png',
    category: 'Landing Page',
  },
  {
    id: 4,
    name: 'Drift',
    description: 'Streetwear brand storefront with limited drops and bold visuals.',
    image: '/images/project-4.png',
    category: 'E-commerce',
  },
  {
    id: 5,
    name: 'Moss & Co.',
    description: 'Rare plants e-commerce for modern spaces with organic aesthetics.',
    image: '/images/project-5.png',
    category: 'E-commerce',
  },
  {
    id: 6,
    name: 'Glitch',
    description: 'Retro arcade and bar experience with neon vibes and craft drinks.',
    image: '/images/project-6.png',
    category: 'Experience',
  },
  {
    id: 7,
    name: 'Patch',
    description: 'Sustainable fashion alterations with pickup and delivery service.',
    image: '/images/project-7.png',
    category: 'Service',
  },
  {
    id: 8,
    name: 'Passport',
    description: 'Curated travel journeys with vintage passport-inspired design.',
    image: '/images/project-8.png',
    category: 'Travel',
  },
  {
    id: 3,
    name: 'ScaleUp',
    description: 'Digital product platform for marketing and creative teams.',
    image: '/images/project-3.png',
    category: 'SaaS',
  },
];

const cravioImages = [
  '/images/cravio-1.png',
  '/images/cravio-2.png',
];

export default function Home() {
  const tickerItems = [
    'Figma Experts',
    'UI/UX Design',
    'Web Apps',
    'Brand Identity',
  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const [cravioIndex, setCravioIndex] = useState(0);

  const scrollToWorks = () => {
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
  };

  const nextCravio = () => {
    setCravioIndex((prev) => (prev + 1) % cravioImages.length);
  };

  const prevCravio = () => {
    setCravioIndex((prev) => (prev - 1 + cravioImages.length) % cravioImages.length);
  };

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
        html {
          scroll-behavior: smooth;
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
          <a href="#works" style={styles.navLink}>WORK</a>
          <a href="#about" style={styles.navLink}>ABOUT</a>
          <a href="#contact" style={styles.navLink}>CONTACT</a>
        </div>

        <button style={styles.navButton}>Start Project</button>
      </motion.nav>

      {/* Hero Content */}
      <main style={styles.main}>
        <div style={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.headline}
          >
            We build digital<br />
            experiences that work.
          </motion.h1>

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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={styles.ctas}
          >
            <button style={styles.primaryButton} onClick={scrollToWorks}>
              Our Works
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button style={styles.secondaryButton}>Get in Touch</button>
          </motion.div>
        </div>
      </main>

      {/* Works Section */}
      <section id="works" style={styles.worksSection}>
        <div style={styles.worksContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.worksTitle}>Selected Works</h2>
            <p style={styles.worksSubtitle}>A few projects we&apos;re proud of</p>
          </motion.div>

          <div style={styles.projectsGrid}>
            {/* First 2 projects: LaunchPad, VRX */}
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  ...styles.projectCard,
                  ...(hoveredProject === project.id ? styles.projectCardHover : {}),
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div style={styles.projectImageContainer}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      ...styles.projectImage,
                      ...(hoveredProject === project.id ? styles.projectImageHover : {}),
                    }}
                  />
                  <div style={styles.projectOverlay}>
                    <div style={styles.projectArrow}>
                      <ArrowUpRight size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div style={styles.projectInfo}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectName}>{project.name}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Cravio App - Carousel (position 3) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={styles.projectCard}
            >
              <div style={styles.carouselContainer}>
                <img
                  src={cravioImages[cravioIndex]}
                  alt="Cravio"
                  style={styles.carouselImage}
                />
                <button onClick={prevCravio} style={{...styles.carouselButton, ...styles.carouselButtonLeft}}>
                  <ChevronLeft size={20} color="white" />
                </button>
                <button onClick={nextCravio} style={{...styles.carouselButton, ...styles.carouselButtonRight}}>
                  <ChevronRight size={20} color="white" />
                </button>
                <div style={styles.carouselDots}>
                  {cravioImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCravioIndex(idx)}
                      style={{
                        ...styles.carouselDot,
                        ...(idx === cravioIndex ? styles.carouselDotActive : {}),
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={styles.projectInfo}>
                <span style={styles.projectCategory}>Mobile App</span>
                <h3 style={styles.projectName}>Cravio</h3>
                <p style={styles.projectDescription}>Food delivery app with 60+ screens, warm UI and seamless ordering experience.</p>
              </div>
            </motion.div>

            {/* Remaining projects: Drift through ScaleUp */}
            {projects.slice(2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                style={{
                  ...styles.projectCard,
                  ...(hoveredProject === project.id ? styles.projectCardHover : {}),
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div style={styles.projectImageContainer}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      ...styles.projectImage,
                      ...(hoveredProject === project.id ? styles.projectImageHover : {}),
                    }}
                  />
                  <div style={styles.projectOverlay}>
                    <div style={styles.projectArrow}>
                      <ArrowUpRight size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div style={styles.projectInfo}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectName}>{project.name}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    overflowX: 'hidden',
    position: 'relative',
  },
  bgGradient: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.15) 30%, transparent 70%)',
    pointerEvents: 'none',
  },
  shape: {
    position: 'fixed',
    opacity: 0.6,
    pointerEvents: 'none',
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
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 64px',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(10px)',
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
    minHeight: '100vh',
    padding: '120px 24px',
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
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '9999px',
    fontSize: '16px',
    fontWeight: 500,
    border: '1px solid rgba(255, 255, 100, 0.3)',
    cursor: 'pointer',
    transition: 'background-color 0.2s, border-color 0.2s',
  },
  worksSection: {
    position: 'relative',
    zIndex: 10,
    padding: '120px 24px',
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
  },
  worksContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  worksTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
  },
  worksSubtitle: {
    color: '#9CA3AF',
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '64px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px',
  },
  projectCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s, border-color 0.3s',
  },
  projectCardHover: {
    transform: 'translateY(-8px)',
    borderColor: 'rgba(139, 92, 246, 0.5)',
  },
  projectImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    aspectRatio: '16/10',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  },
  projectImageHover: {
    transform: 'scale(1.05)',
  },
  projectOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  projectArrow: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'rgba(139, 92, 246, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectInfo: {
    padding: '24px',
  },
  projectCategory: {
    fontSize: '12px',
    color: '#8B5CF6',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '8px',
    display: 'block',
  },
  projectName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  projectDescription: {
    color: '#9CA3AF',
    fontSize: '14px',
    lineHeight: 1.6,
  },
  carouselContainer: {
    position: 'relative',
    aspectRatio: '16/10',
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  carouselButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
  carouselButtonLeft: {
    left: '12px',
  },
  carouselButtonRight: {
    right: '12px',
  },
  carouselDots: {
    position: 'absolute',
    bottom: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
  },
  carouselDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  carouselDotActive: {
    backgroundColor: '#8B5CF6',
  },
  tickerContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
    padding: '16px 0',
    zIndex: 100,
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