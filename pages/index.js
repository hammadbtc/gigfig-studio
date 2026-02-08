import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    name: 'LaunchPad',
    description: 'All-in-one SaaS dashboard for startup analytics and growth tracking.',
    image: '/images/project-1.png',
    category: 'Web App',
  },
  {
    id: 6,
    name: 'Glitch',
    description: 'Retro arcade and bar experience with neon vibes and craft drinks.',
    image: '/images/project-6.png',
    category: 'Experience',
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
    id: 3,
    name: 'ScaleUp',
    description: 'Digital product platform for marketing and creative teams.',
    image: '/images/project-3.png',
    category: 'SaaS',
  },
  {
    id: 7,
    name: 'Patch',
    description: 'Sustainable fashion alterations with pickup and delivery service.',
    image: '/images/project-7.png',
    category: 'Service',
  },
  {
    id: 2,
    name: 'VRX',
    description: 'Immersive VR experience platform with 600K+ active users worldwide.',
    image: '/images/project-2.png',
    category: 'Landing Page',
  },
  {
    id: 8,
    name: 'Passport',
    description: 'Curated travel journeys with vintage passport-inspired design.',
    image: '/images/project-8.png',
    category: 'Travel',
  },
];

const cravioImages = [
  '/images/cravio-1.png',
  '/images/cravio-2.png',
  '/images/cravio-3.png',
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [isCravioLightbox, setIsCravioLightbox] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWorks = () => {
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const nextCravio = () => {
    setCravioIndex((prev) => (prev + 1) % cravioImages.length);
  };

  const prevCravio = () => {
    setCravioIndex((prev) => (prev - 1 + cravioImages.length) % cravioImages.length);
  };

  const openLightbox = (image, isCravio = false) => {
    setLightboxImage(image);
    setIsCravioLightbox(isCravio);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    setIsCravioLightbox(false);
    document.body.style.overflow = 'unset';
  };

  const nextCravioLightbox = () => {
    const nextIndex = (cravioIndex + 1) % cravioImages.length;
    setCravioIndex(nextIndex);
    setLightboxImage(cravioImages[nextIndex]);
  };

  const prevCravioLightbox = () => {
    const prevIndex = (cravioIndex - 1 + cravioImages.length) % cravioImages.length;
    setCravioIndex(prevIndex);
    setLightboxImage(cravioImages[prevIndex]);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

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
        select option {
          background-color: #1a1a1a;
          color: white;
        }

        /* Mobile Menu Visibility */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          /* Navigation adjustments */
          .mobile-menu {
            top: 72px !important;
            left: 16px !important;
            right: 16px !important;
            padding: 20px !important;
            z-index: 999 !important;
          }
          .mobile-menu-btn {
            z-index: 1001 !important;
          }

          /* Hero section adjustments */
          .hero-section {
            padding: 100px 16px 80px !important;
            min-height: auto !important;
          }
          .hero-headline {
            font-size: clamp(24px, 7vw, 40px) !important;
            margin-bottom: 20px !important;
            line-height: 1.15 !important;
          }
          .hero-paragraph {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 32px !important;
          }
          .hero-ctas {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }
          .hero-ctas button {
            width: 100% !important;
            justify-content: center !important;
          }

          /* Works section adjustments */
          .works-section {
            padding: 80px 16px !important;
          }
          .works-title {
            font-size: clamp(28px, 7vw, 40px) !important;
            margin-bottom: 12px !important;
          }
          .works-subtitle {
            font-size: 16px !important;
            margin-bottom: 40px !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .project-card {
            border-radius: 16px !important;
          }
          .project-info {
            padding: 20px !important;
          }
          .project-name {
            font-size: 20px !important;
          }
          .project-description {
            font-size: 14px !important;
          }

          /* Contact section adjustments */
          .contact-section {
            padding: 80px 16px !important;
          }

          /* About section adjustments */
          .about-section {
            padding: 80px 16px !important;
          }
          .about-title {
            font-size: clamp(28px, 7vw, 40px) !important;
          }
          .about-subtitle {
            font-size: 16px !important;
          }
          .about-stats {
            gap: 32px !important;
          }
          .contact-title {
            font-size: clamp(28px, 7vw, 40px) !important;
          }
          .contact-subtitle {
            font-size: 16px !important;
          }
          .contact-form {
            padding: 24px !important;
            border-radius: 16px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            margin-bottom: 0 !important;
          }
          .form-group {
            margin-bottom: 20px !important;
          }
          .form-input, .form-select, .form-textarea {
            padding: 12px 14px !important;
            font-size: 16px !important;
          }
          .submit-button {
            padding: 14px 24px !important;
          }

          /* Lightbox adjustments */
          .lightbox {
            padding: 16px !important;
          }
          .lightbox-close {
            top: 16px !important;
            right: 16px !important;
            left: auto !important;
            transform: none !important;
            width: 40px !important;
            height: 40px !important;
          }
          .lightbox-nav-button {
            width: 44px !important;
            height: 44px !important;
          }
          .lightbox-nav-button-left {
            left: 8px !important;
          }
          .lightbox-nav-button-right {
            right: 8px !important;
          }
          .lightbox-image {
            max-width: 100% !important;
            max-height: 70vh !important;
          }

          /* Ticker adjustments */
          .ticker-container {
            padding: 12px 0 !important;
          }
          .ticker-item {
            font-size: 12px !important;
            margin: 0 20px !important;
          }

          /* Footer adjustments */
          .footer {
            padding: 32px 16px !important;
          }
          .footer-content {
            gap: 12px !important;
          }
          .footer-social {
            padding: 8px 16px !important;
            font-size: 13px !important;
          }

          /* Background shapes - smaller on mobile */
          .glass-shape-left, .glass-shape-right {
            width: 200px !important;
            height: 200px !important;
            opacity: 0.4 !important;
          }
        }

        /* Extra small screens (320px) */
        @media (max-width: 375px) {
          .hero-headline {
            font-size: 26px !important;
          }
          .hero-paragraph {
            font-size: 15px !important;
          }
          .works-title, .contact-title {
            font-size: 26px !important;
          }
          .project-name {
            font-size: 18px !important;
          }
          .contact-form {
            padding: 20px 16px !important;
          }
          .mobile-nav-link {
            font-size: 16px !important;
            padding: 10px 0 !important;
          }
        }

        /* Touch device hover handling */
        @media (hover: none) {
          .project-overlay {
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%) !important;
          }
          .project-arrow {
            display: none !important;
          }
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
        <div style={styles.glassShapeLeft} className="glass-shape-left" />
      </motion.div>

      <motion.div 
        style={{...styles.shape, ...styles.rightShape}}
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div style={styles.glassShapeRight} className="glass-shape-right" />
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.nav}
      >
        <div style={styles.logo}>GigFig</div>
        
        <div style={styles.desktopNav} className="desktop-nav">
          <div style={styles.navLinks}>
            <a href="#works" style={styles.navLink}>WORK</a>
            <a href="#about" style={styles.navLink}>ABOUT</a>
            <a href="#contact" style={styles.navLink}>CONTACT</a>
          </div>
          <button style={styles.navButton} onClick={scrollToContact}>Start Project</button>
        </div>

        <button 
          style={styles.mobileMenuButton}
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} color="white" /> : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={styles.mobileMenu}
            className="mobile-menu"
          >
            <a href="#works" style={styles.mobileNavLink} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>WORK</a>
            <a href="#about" style={styles.mobileNavLink} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>ABOUT</a>
            <a href="#contact" style={styles.mobileNavLink} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
            <button 
              style={styles.mobileNavButton} 
              onClick={() => { setMobileMenuOpen(false); scrollToContact(); }}
            >
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <main style={styles.main} className="hero-section">
        <div style={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={styles.headline}
            className="hero-headline"
          >
            We build digital<br />
            experiences that work.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={styles.paragraph}
            className="hero-paragraph"
          >
            Welcome to GigFig Studio. We build custom interfaces and experiences for 
            websites, apps, and beyond, powered by Figma. Check out our work below to see 
            the magic in action, and let&apos;s connect to elevate yours.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={styles.ctas}
            className="hero-ctas"
          >
            <button style={styles.primaryButton} onClick={scrollToWorks}>
              Our Works
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
            <button style={styles.secondaryButton} onClick={scrollToContact}>Get in Touch</button>
          </motion.div>
        </div>
      </main>

      {/* Works Section */}
      <section id="works" style={styles.worksSection} className="works-section">
        <div style={styles.worksContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.worksTitle} className="works-title">Selected Works</h2>
            <p style={styles.worksSubtitle} className="works-subtitle">A few projects we&apos;re proud of</p>
          </motion.div>

          <div style={styles.projectsGrid} className="projects-grid">
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
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  style={styles.projectImageContainer}
                  onClick={() => openLightbox(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      ...styles.projectImage,
                      ...(hoveredProject === project.id ? styles.projectImageHover : {}),
                    }}
                  />
                  <div style={styles.projectOverlay} className="project-overlay">
                    <div style={styles.projectArrow} className="project-arrow">
                      <ArrowUpRight size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div style={styles.projectInfo} className="project-info">
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectName} className="project-name">{project.name}</h3>
                  <p style={styles.projectDescription} className="project-description">{project.description}</p>
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
              className="project-card"
            >
              <div style={styles.carouselContainer}>
                <img
                  src={cravioImages[cravioIndex]}
                  alt="Cravio"
                  style={styles.carouselImage}
                  onClick={() => openLightbox(cravioImages[cravioIndex], true)}
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
              <div style={styles.projectInfo} className="project-info">
                <span style={styles.projectCategory}>Mobile App</span>
                <h3 style={styles.projectName} className="project-name">Cravio</h3>
                <p style={styles.projectDescription} className="project-description">Food delivery app with 60+ screens, warm UI and seamless ordering experience.</p>
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
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  style={styles.projectImageContainer}
                  onClick={() => openLightbox(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      ...styles.projectImage,
                      ...(hoveredProject === project.id ? styles.projectImageHover : {}),
                    }}
                  />
                  <div style={styles.projectOverlay} className="project-overlay">
                    <div style={styles.projectArrow} className="project-arrow">
                      <ArrowUpRight size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div style={styles.projectInfo} className="project-info">
                  <span style={styles.projectCategory}>{project.category}</span>
                  <h3 style={styles.projectName} className="project-name">{project.name}</h3>
                  <p style={styles.projectDescription} className="project-description">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection} className="about-section">
        <div style={styles.aboutContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.aboutHeader}
          >
            <h2 style={styles.aboutTitle} className="about-title">About Us</h2>
            <p style={styles.aboutSubtitle} className="about-subtitle">We are a design studio focused on creating digital experiences that matter.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.aboutContent}
          >
            <p style={styles.aboutText}>
              GigFig Studio was founded with a simple mission: help brands cut through the noise 
              with design that actually works. We believe great design isnt just about looking 
              good—its about solving problems and driving results.
            </p>
            <p style={styles.aboutText}>
              Our team brings together years of experience across UI/UX, brand identity, and 
              web development. We have worked with startups and established brands alike, 
              always bringing the same level of craft and attention to detail.
            </p>
            <div style={styles.aboutStats}>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Projects Delivered</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>4+</span>
                <span style={styles.statLabel}>Years Experience</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statNumber}>100%</span>
                <span style={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection} className="contact-section">
        <div style={styles.contactContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={styles.contactHeader}
          >
            <h2 style={styles.contactTitle} className="contact-title">Let&apos;s Work Together</h2>
            <p style={styles.contactSubtitle} className="contact-subtitle">Have a project in mind? Send us a message and let&apos;s create something amazing.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.contactForm}
            className="contact-form"
            action="https://formspree.io/f/mbdajqog"
            method="POST"
          >
            <div style={styles.formRow} className="form-row">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formLabel}>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  style={styles.formInput}
                  className="form-input"
                  required
                />
              </div>
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  style={styles.formInput}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div style={styles.formGroup} className="form-group">
              <label style={styles.formLabel}>Project Type</label>
              <select name="project_type" style={styles.formSelect} className="form-select">
                <option value="">Select a project type</option>
                <option value="website">Website Design</option>
                <option value="app">Mobile App</option>
                <option value="branding">Branding</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup} className="form-group">
              <label style={styles.formLabel}>Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                style={styles.formTextarea}
                className="form-textarea"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" style={styles.submitButton} className="submit-button">
              Send Message
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Ticker */}
      <div style={styles.tickerContainer} className="ticker-container">
        <div className="ticker" style={styles.ticker}>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={index} style={styles.tickerItem} className="ticker-item">
              <span style={styles.tickerDot}></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.lightbox}
            className="lightbox"
            onClick={closeLightbox}
          >
            <button
              style={styles.lightboxClose}
              className="lightbox-close"
              onClick={closeLightbox}
            >
              <X size={32} color="white" />
            </button>
            {isCravioLightbox && (
              <>
                <button
                  style={{...styles.lightboxNavButton, ...styles.lightboxNavButtonLeft}}
                  className="lightbox-nav-button lightbox-nav-button-left"
                  onClick={(e) => { e.stopPropagation(); prevCravioLightbox(); }}
                >
                  <ChevronLeft size={32} color="white" />
                </button>
                <button
                  style={{...styles.lightboxNavButton, ...styles.lightboxNavButtonRight}}
                  className="lightbox-nav-button lightbox-nav-button-right"
                  onClick={(e) => { e.stopPropagation(); nextCravioLightbox(); }}
                >
                  <ChevronRight size={32} color="white" />
                </button>
              </>
            )}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Full size"
              style={styles.lightboxImage}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer style={styles.footer} className="footer">
        <div style={styles.footerContainer}>
          <div style={styles.footerContent} className="footer-content">
            <div style={styles.footerContact}>
              <p style={styles.footerText}>Contact us at <a href="mailto:gigfigstudio@gmail.com" style={styles.footerLink}>gigfigstudio@gmail.com</a></p>
            </div>
            <a 
              href="https://x.com/gigfigstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.footerSocial}
              className="footer-social"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              @GigFigStudio
              <ArrowUpRight size={16} style={{ marginLeft: '4px' }} />
            </a>
          </div>
          
          <p style={styles.footerCopyright}>© {new Date().getFullYear()} GigFig Studio. All rights reserved.</p>
        </div>
      </footer>
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
    padding: '24px',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: 'blur(10px)',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  },
  mobileMenu: {
    position: 'fixed',
    top: '80px',
    left: '24px',
    right: '24px',
    backgroundColor: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '24px',
    zIndex: 99,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  mobileNavLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 500,
    padding: '12px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  mobileNavButton: {
    backgroundColor: '#8B5CF6',
    color: 'white',
    padding: '14px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    marginTop: '8px',
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
    cursor: 'pointer',
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
  aboutSection: {
    position: 'relative',
    zIndex: 10,
    padding: '120px 24px',
    backgroundColor: '#0A0A0A',
  },
  aboutContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  aboutHeader: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  aboutTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  aboutSubtitle: {
    color: '#9CA3AF',
    fontSize: '18px',
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  aboutText: {
    color: '#D1D5DB',
    fontSize: '16px',
    lineHeight: 1.7,
  },
  aboutStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    marginTop: '32px',
    flexWrap: 'wrap',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  statLabel: {
    fontSize: '14px',
    color: '#9CA3AF',
  },
  contactSection: {
    position: 'relative',
    zIndex: 10,
    padding: '120px 24px',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
  },
  contactContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  contactHeader: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  contactTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  contactSubtitle: {
    color: '#9CA3AF',
    fontSize: '18px',
  },
  contactForm: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '24px',
    padding: '48px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginBottom: '24px',
  },
  formGroup: {
    marginBottom: '24px',
  },
  formLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '8px',
    color: '#D1D5DB',
  },
  formInput: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    fontSize: '16px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  formSelect: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    fontSize: '16px',
    fontFamily: 'inherit',
    outline: 'none',
    cursor: 'pointer',
  },
  formSelectOption: {
    backgroundColor: '#1a1a1a',
    color: 'white',
  },
  formTextarea: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'white',
    fontSize: '16px',
    fontFamily: 'inherit',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#8B5CF6',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s, transform 0.2s',
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    padding: '48px 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },
  footerContact: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  footerText: {
    color: '#9CA3AF',
    fontSize: '14px',
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  footerSocial: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    padding: '10px 20px',
    borderRadius: '9999px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.2s, border-color 0.2s',
  },
  footerCopyright: {
    color: '#6B7280',
    fontSize: '12px',
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  lightboxClose: {
    position: 'absolute',
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
    zIndex: 1001,
  },
  lightboxNavButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
    zIndex: 1001,
  },
  lightboxNavButtonLeft: {
    left: '24px',
  },
  lightboxNavButtonRight: {
    right: '24px',
  },
  lightboxImage: {
    maxWidth: '90%',
    maxHeight: '85vh',
    objectFit: 'contain',
    borderRadius: '12px',
  },
};