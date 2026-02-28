import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ============================================================
   Data Types & Arrays
   ============================================================ */
interface Feature {
  icon: string
  title: string
  body: string
}

interface Step {
  title: string
  body: string
  visual: string
}

interface Stat {
  countTo: number
  prefix: string
  suffix: string
  label: string
  decimals: number
}

interface UseCase {
  icon: string
  title: string
  body: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

const FEATURES: Feature[] = [
  {
    icon: '🧠',
    title: 'Neural Signal Decoding',
    body: 'Our proprietary AI model interprets raw cortical signals with sub-millisecond latency, translating thought patterns into precise digital commands.',
  },
  {
    icon: '⚡',
    title: 'Real-Time LLM Co-Pilot',
    body: 'An embedded large language model (LLM) amplifies intent — autocompleting ideas, drafting messages, and navigating interfaces before you finish thinking.',
  },
  {
    icon: '🔒',
    title: 'On-Device Privacy',
    body: 'All neural data is processed locally on the BrainWave chip. Nothing leaves your head without explicit consent. Zero cloud dependency.',
  },
]

const STEPS: Step[] = [
  {
    title: 'Calibrate in Minutes',
    body: 'Wear the BrainWave headband and run the 5-minute guided calibration. The AI maps your unique neural signature — no surgery, no adhesives.',
    visual: '📡',
  },
  {
    title: 'Think Your Command',
    body: 'Form a clear intention. BrainWave\'s sensor array captures the associated neural oscillations across 256 electrode channels at 30 kHz.',
    visual: '💭',
  },
  {
    title: 'AI Interprets Intent',
    body: 'The on-device transformer model decodes signal patterns, predicts your intent with 98.7% accuracy, and generates the corresponding action.',
    visual: '🤖',
  },
  {
    title: 'Seamless Execution',
    body: 'Commands are executed across your devices, apps, and smart environment — all in under 50 ms. Thought becomes action, invisibly.',
    visual: '✨',
  },
]

const STATS: Stat[] = [
  { countTo: 40000, prefix: '',  suffix: '+',    label: 'Pioneers on Waitlist', decimals: 0 },
  { countTo: 98.7,  prefix: '',  suffix: '%',    label: 'Intent Accuracy',      decimals: 1 },
  { countTo: 50,    prefix: '<', suffix: ' ms',  label: 'Thought-to-Action',    decimals: 0 },
  { countTo: 5,     prefix: '',  suffix: ' min', label: 'Calibration Time',     decimals: 0 },
]

const USE_CASES: UseCase[] = [
  {
    icon: '✍️',
    title: 'Compose Without Typing',
    body: 'Draft emails, messages, and documents by simply thinking them. BrainWave transcribes at up to 180 words per minute — faster than most people type.',
  },
  {
    icon: '🏠',
    title: 'Command Your Space',
    body: 'Dim lights, lock doors, play music, adjust temperature — your smart home responds the moment you think it. No voice, no touch, no delay.',
  },
  {
    icon: '🎮',
    title: 'Dominate in Gaming',
    body: 'Sub-50 ms neural inputs eliminate controller lag entirely. React faster, execute with pinpoint precision — hardware can\'t keep up with you anymore.',
  },
  {
    icon: '♿',
    title: 'Restore Independence',
    body: 'For people with mobility challenges, BrainWave restores full digital agency. Communicate, create, and navigate the web — with thought alone.',
  },
  {
    icon: '🎨',
    title: 'Capture Creative Flow',
    body: 'Ideas vanish in the gap between thought and keyboard. BrainWave captures them the instant they spark — so your creativity arrives exactly as imagined.',
  },
  {
    icon: '🩺',
    title: 'Hands-Free Operation',
    body: 'Surgeons, pilots, and field engineers can access information, log data, and control systems without breaking sterile or safety protocols.',
  },
]

const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'I composed a 600-word report on my commute without touching my phone. It felt like having a superpower I didn\'t know I was missing.',
    name: 'Marcus T.',
    role: 'Beta Tester · Software Engineer',
    initials: 'MT',
  },
  {
    quote: 'As someone with ALS, BrainWave gave me back a kind of communication I thought I\'d lost. I can\'t overstate what that means to my family and me.',
    name: 'Sarah K.',
    role: 'Early Access · Accessibility Advocate',
    initials: 'SK',
  },
  {
    quote: 'Calibration took 4 minutes. By minute 5 I was controlling my entire smart home from the couch — just by thinking. I laughed out loud.',
    name: 'James R.',
    role: 'Beta Tester · Product Designer',
    initials: 'JR',
  },
]

/* ============================================================
   Scroll-Reveal Hook
   ============================================================ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ============================================================
   Stat Counter — animates number on scroll-in
   ============================================================ */
function StatCounter({ countTo, prefix, suffix, label, decimals }: Stat) {
  const [displayValue, setDisplayValue] = useState(decimals > 0 ? '0.0' : '0')
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1600
          const startTime = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * countTo
            setDisplayValue(
              decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString()
            )
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [countTo, decimals])

  return (
    <div className="stats-bar__item" ref={ref}>
      <span
        className="stats-bar__value"
        aria-label={`${prefix}${countTo}${suffix}`}
      >
        {prefix}{displayValue}{suffix}
      </span>
      <span className="stats-bar__label">{label}</span>
    </div>
  )
}

/* ============================================================
   NavBar
   ============================================================ */
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="container navbar__inner">
        <span className="navbar__logo gradient-text" aria-label="BrainWave AI">BrainWave AI 😊</span>
        <ul className="navbar__links" role="list">
          <li><a href="#features">Features</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#preorder">Pre-Order</a></li>
        </ul>
        <div className="navbar__actions">
          <a
            href="#preorder"
            className="btn-filled navbar__reserve"
            aria-label="Reserve your BrainWave device"
          >
            Reserve Yours
          </a>
          <button
            className={`navbar__hamburger${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          <li><a href="#features"     onClick={closeMenu}>Features</a></li>
          <li><a href="#use-cases"    onClick={closeMenu}>Use Cases</a></li>
          <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
          <li><a href="#preorder"     onClick={closeMenu}>Pre-Order</a></li>
        </ul>
      </div>
    </nav>
  )
}

/* ============================================================
   Hero Section
   ============================================================ */
function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      <div className="hero__bg-video" aria-hidden="true">
        <iframe
          src="https://www.youtube.com/embed/5fpGTE3aIw0?autoplay=1&mute=1&loop=1&playlist=5fpGTE3aIw0&controls=0&disablekb=1&playsinline=1&rel=0"
          title="Decorative neural network animation background"
          allow="autoplay; encrypted-media"
          tabIndex={-1}
        />
      </div>
      <div className="hero__content container">
        <span className="hero__eyebrow" aria-label="Next-Gen Brain-Computer Interface">
          Next-Gen Brain-Computer Interface
        </span>
        <h1 className="hero__headline" id="hero-headline">
          <span className="gradient-text">Think it.</span>
          <br />
          Do it.
        </h1>
        <p className="hero__tagline">
          BrainWave AI turns your thoughts into actions — controlling devices, writing messages,
          and navigating digital worlds at the speed of imagination.
        </p>
        <div className="hero__actions">
          <div className="hero__cta-wrapper">
            <a
              href="#preorder"
              className="btn-filled"
              aria-label="Pre-order BrainWave AI now"
            >
              Pre-Order Now
            </a>
          </div>
          <a href="#how-it-works" className="btn-outlined">See How It Works</a>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Stats Bar
   ============================================================ */
function StatsBar() {
  return (
    <div className="stats-bar" role="region" aria-label="Key product metrics">
      <div className="container">
        <div className="stats-bar__grid">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Features Section
   ============================================================ */
function FeaturesSection() {
  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title" id="features-title">
            Intelligence at the<br />
            <span className="gradient-text">Speed of Thought</span>
          </h2>
          <p className="section-subtitle">
            Three breakthrough technologies converge in a single wearable.
          </p>
        </div>
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div
              className="feature-card reveal"
              key={feature.title}
              tabIndex={0}
              role="article"
              aria-label={feature.title}
            >
              <span className="feature-card__icon" aria-hidden="true">{feature.icon}</span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__body">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Use Cases Section
   ============================================================ */
function UseCasesSection() {
  return (
    <section className="use-cases" id="use-cases" aria-labelledby="use-cases-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">What You Can Do</span>
          <h2 className="section-title" id="use-cases-title">
            What Will You<br />
            <span className="gradient-text">Think Next?</span>
          </h2>
          <p className="section-subtitle">
            From the mundane to the miraculous — BrainWave reshapes every human-computer interaction.
          </p>
        </div>
        <div className="use-cases__grid">
          {USE_CASES.map((useCase) => (
            <div
              className="use-case-card reveal"
              key={useCase.title}
              tabIndex={0}
              role="article"
              aria-label={useCase.title}
            >
              <span className="use-case-card__icon" aria-hidden="true">{useCase.icon}</span>
              <h3 className="use-case-card__title">{useCase.title}</h3>
              <p className="use-case-card__body">{useCase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   How It Works — Vertical Timeline
   ============================================================ */
function HowItWorksSection() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">The Process</span>
          <h2 className="section-title" id="how-it-works-title">
            From Synapse to<br />
            <span className="gradient-text">Screen in 50 ms</span>
          </h2>
        </div>
        <ol className="timeline" aria-label="BrainWave AI four-step process">
          {STEPS.map((step, index) => (
            <li className="timeline__item reveal" key={step.title}>
              <div className="timeline__badge" aria-hidden="true">0{index + 1}</div>
              <div className="timeline__content">
                <div className="timeline__visual" aria-hidden="true">{step.visual}</div>
                <h3 className="timeline__title">{step.title}</h3>
                <p className="timeline__body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ============================================================
   Testimonials Section
   ============================================================ */
function TestimonialsSection() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Early Access</span>
          <h2 className="section-title" id="testimonials-title">
            Heard From Our<br />
            <span className="gradient-text">Pioneers</span>
          </h2>
        </div>
        <div className="testimonials__grid" role="list">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card reveal" key={t.name} role="listitem">
              <span className="testimonial-card__quote-mark" aria-hidden="true">"</span>
              <blockquote className="testimonial-card__quote">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">{t.initials}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Pre-Order CTA Section
   ============================================================ */
function PreOrderSection() {
  return (
    <section className="preorder" id="preorder" aria-labelledby="preorder-title">
      <div className="preorder__orb preorder__orb--left" aria-hidden="true" />
      <div className="preorder__orb preorder__orb--right" aria-hidden="true" />
      <div className="preorder__content">
        <h2 className="preorder__title reveal" id="preorder-title">
          Be the First to<br />
          <span className="gradient-text">Think Beyond</span>
        </h2>
        <p className="preorder__subtitle reveal">
          Join 40,000+ pioneers on the waitlist. Early access ships Q3 2026.
          Founders pricing locked in at reservation.
        </p>
        <a
          href="#"
          className="btn-filled reveal"
          aria-label="Reserve your BrainWave device — free cancellation, $99 refundable deposit"
        >
          Reserve Your BrainWave
        </a>
        <p className="preorder__note">Free cancellation · Ships Q3 2026 · $99 fully refundable deposit</p>
      </div>
    </section>
  )
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo gradient-text" aria-label="BrainWave AI">BrainWave AI</span>
        <p className="footer__copy">© 2026 BrainWave AI, Inc. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul className="footer__links">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="footer__social">
          <a
            href="#"
            className="footer__social-link"
            aria-label="Follow BrainWave AI on X (formerly Twitter)"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            className="footer__social-link"
            aria-label="Connect with BrainWave AI on LinkedIn"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ============================================================
   App
   ============================================================ */
function App() {
  useScrollReveal()

  return (
    <>
      <NavBar />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PreOrderSection />
      </main>
      <Footer />
    </>
  )
}

export default App
