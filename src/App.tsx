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
        <div className="hero__video">
          <iframe
            src="https://www.youtube.com/embed/5fpGTE3aIw0"
            title="BrainWave AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
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
        <FeaturesSection />
        <HowItWorksSection />
        <PreOrderSection />
      </main>
      <Footer />
    </>
  )
}

export default App
