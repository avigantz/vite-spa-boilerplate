import './App.css'

/* ============================================================
   Data
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

const FEATURES: Feature[] = [
  {
    icon: '🧠',
    title: 'Neural Signal Decoding',
    body: 'Our proprietary AI model interprets raw cortical signals with sub-millisecond latency, translating thought patterns into precise digital commands.',
  },
  {
    icon: '⚡',
    title: 'Real-Time LLM Co-Pilot',
    body: 'An embedded large language model amplifies intent — autocompleting ideas, drafting messages, and navigating interfaces before you finish thinking.',
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

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '40,000+', label: 'Pioneers on Waitlist' },
  { value: '98.7%',   label: 'Intent Accuracy' },
  { value: '<50 ms',  label: 'Thought-to-Action' },
  { value: '5 min',   label: 'Calibration Time' },
]

interface UseCase {
  icon: string
  title: string
  body: string
}

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

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

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
   NavBar
   ============================================================ */
function NavBar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <span className="navbar__logo gradient-text">BrainWave AI</span>
        <ul className="navbar__links">
          <li><a href="#features">Features</a></li>
          <li><a href="#use-cases">Use Cases</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#preorder">Pre-Order</a></li>
        </ul>
        <div className="navbar__cta">
          <a href="#preorder" className="btn-filled">Reserve Yours</a>
        </div>
      </div>
    </nav>
  )
}

/* ============================================================
   Hero Section
   ============================================================ */
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg-video">
        <iframe
          src="https://www.youtube.com/embed/5fpGTE3aIw0?autoplay=1&mute=1&loop=1&playlist=5fpGTE3aIw0&controls=0&disablekb=1&playsinline=1&rel=0"
          title="BrainWave AI Background Video"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="hero__content container">
        <span className="hero__eyebrow">Next-Gen Brain-Computer Interface</span>
        <h1 className="hero__headline">
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
            <a href="#preorder" className="btn-filled">Pre-Order Now</a>
          </div>
          <a href="#how-it-works" className="btn-outlined">See How It Works</a>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   Features Section
   ============================================================ */
function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">
            Intelligence at the<br />
            <span className="gradient-text">Speed of Thought</span>
          </h2>
          <p className="section-subtitle">
            Three breakthrough technologies converge in a single wearable.
          </p>
        </div>
        <div className="features__grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <span className="feature-card__icon">{feature.icon}</span>
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
   How It Works Section
   ============================================================ */
function HowItWorksSection() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">The Process</span>
          <h2 className="section-title">
            From Synapse to<br />
            <span className="gradient-text">Screen in 50 ms</span>
          </h2>
        </div>
        <div className="steps-list">
          {STEPS.map((step, index) => (
            <div
              className={`step${index % 2 === 1 ? ' step--reverse' : ''}`}
              key={step.title}
            >
              <div className="step__text">
                <span className="step__number">0{index + 1}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </div>
              <div className="step__visual">
                <span>{step.visual}</span>
              </div>
            </div>
          ))}
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
    <div className="stats-bar">
      <div className="container">
        <div className="stats-bar__grid">
          {STATS.map((stat) => (
            <div className="stats-bar__item" key={stat.label}>
              <span className="stats-bar__value">{stat.value}</span>
              <span className="stats-bar__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   Use Cases Section
   ============================================================ */
function UseCasesSection() {
  return (
    <section className="use-cases" id="use-cases">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What You Can Do</span>
          <h2 className="section-title">
            What Will You<br />
            <span className="gradient-text">Think Next?</span>
          </h2>
          <p className="section-subtitle">
            From the mundane to the miraculous — BrainWave reshapes every human-computer interaction.
          </p>
        </div>
        <div className="use-cases__grid">
          {USE_CASES.map((useCase) => (
            <div className="use-case-card" key={useCase.title}>
              <span className="use-case-card__icon">{useCase.icon}</span>
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
   Testimonials Section
   ============================================================ */
function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Early Access</span>
          <h2 className="section-title">
            Heard From Our<br />
            <span className="gradient-text">Pioneers</span>
          </h2>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <span className="testimonial-card__quote-mark">"</span>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
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
    <section className="preorder" id="preorder">
      <div className="preorder__orb preorder__orb--left" />
      <div className="preorder__orb preorder__orb--right" />
      <div className="preorder__content">
        <h2 className="preorder__title">
          Be the First to<br />
          <span className="gradient-text">Think Beyond</span>
        </h2>
        <p className="preorder__subtitle">
          Join 40,000+ pioneers on the waitlist. Early access ships Q3 2026.
          Founders pricing locked in at reservation.
        </p>
        <a href="#" className="btn-filled">Reserve Your BrainWave</a>
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
        <span className="footer__logo gradient-text">BrainWave AI</span>
        <p className="footer__copy">© 2026 BrainWave AI, Inc. All rights reserved.</p>
        <ul className="footer__links">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

/* ============================================================
   App
   ============================================================ */
function App() {
  return (
    <>
      <NavBar />
      <main>
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
