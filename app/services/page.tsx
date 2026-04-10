import Link from "next/link";

const services = [
  {
    number: "01",
    tag: "Funding Advisory",
    title: "Funding & Bank Loan Consultancy",
    desc: "Get the capital your business deserves – faster and smarter. We handle strategic funding plans, bank loans, debt restructuring, credit enhancement, and investor-ready documentation.",
    result: "Approved funds with minimal hassle",
    cta: "Start Your Funding Journey Now",
    href: "/services/funding-advisory",
  },
  {
    number: "02",
    tag: "Virtual CFO",
    title: "Virtual CFO Services",
    desc: "World-class financial leadership without the full-time cost. Cash flow mastery, budgeting, forecasting, tax planning, and board-ready reporting – all tailored for growing Indian businesses.",
    result: "Strong financial control and smarter decisions",
    cta: "Get Your Dedicated Virtual CFO Now",
    href: "/services/virtual-cfo",
  },
  {
    number: "03",
    tag: "Business Advisory",
    title: "Business Advisory Services",
    desc: "Strategic guidance for growth, operational efficiency, financial optimization, and sustainable practices. From planning and market expansion to process improvement and ESG compliance.",
    result: "Ethical, scalable, and future-ready growth",
    cta: "Get Strategic Guidance Now",
    href: "/services/business-advisory",
  },
  {
    number: "04",
    tag: "Startup Mentoring",
    title: "Startup Mentoring Services",
    desc: "Our proven 10-step Startup Elevation Program takes you from idea validation to scaling and IPO readiness with hands-on mentoring in strategy, operations, branding, and fundraising.",
    result: "Build a sustainable, scalable business faster and smarter",
    cta: "Start Your 10-Step Elevation Journey Now",
    href: "/services/startup-mentoring",
  },
  {
    number: "05",
    tag: "Business Establishment",
    title: "Business Establishment Services",
    desc: "Complete support to launch your business legally and professionally — company registration, trademark & patent filing, startup recognition, contracts, and brand development.",
    result: "Get set up correctly and confidently from day one",
    cta: "Launch Your Business Smoothly",
    href: "/services/business-establishment",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero-grid" />
        <div className="services-hero-glow" />
        <div className="services-container">
          <p className="services-eyebrow">Our Services</p>
          <h1 className="services-hero-title">
            Expert Solutions for <span className="services-gold">Every Business Need</span>
          </h1>
          <p className="services-hero-desc">
            From securing the right funding to running your finances like a Fortune 500 company — we deliver the exact expertise Indian businesses need to thrive. No complexity. Just results.
          </p>
        </div>
      </section>

      {/* ── Services Cards ── */}
      <section className="services-cards-section">
        <div className="services-container">
          <div className="services-cards-grid">
            {services.map((service) => (
              <div key={service.number} className="services-card">
                <div className="services-card-accent" />
                <div className="services-card-number">{service.number}</div>
                <div className="services-card-tag">{service.tag}</div>
                <h2 className="services-card-title">{service.title}</h2>
                <p className="services-card-desc">{service.desc}</p>
                <div className="services-card-result">
                  ✓ Result: {service.result}
                </div>
                <Link href={service.href} className="services-card-btn">
                  {service.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="services-cta-section">
        <div className="services-container">
          <div className="services-cta-box">
            <div className="services-cta-dot-overlay" />
            <div className="services-cta-content">
              <h2 className="services-cta-title">Not Sure Which Service You Need?</h2>
              <p className="services-cta-desc">
                Book a free 30-minute consultation and we'll help you find the right solution for your business.
              </p>
              <div className="services-cta-buttons">
                <Link href="/contact" className="services-cta-btn-primary">
                  Book Free Consultation →
                </Link>
                <Link href="/about" className="services-cta-btn-secondary">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Base ── */
        .services-page { background: #FDF8F3; }
        .services-container { max-width: 1280px; margin: 0 auto; padding: 0 80px; }
        .services-gold { color: #F5A623; }

        /* ── Hero ── */
        .services-hero {
          background: #1B2A6B;
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .services-hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .services-hero-glow {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(245,166,35,0.15), transparent 70%);
          pointer-events: none;
        }
        .services-eyebrow {
          font-size: 11px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
        }
        .services-hero-title {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: var(--font-playfair);
          position: relative;
        }
        .services-hero-desc {
          font-size: clamp(14px, 1.2vw, 16px);
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 640px;
          margin: 0 auto;
          position: relative;
        }

        /* ── Cards ── */
        .services-cards-section {
          background: white;
          padding: 80px 0;
        }
        .services-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .services-card {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 40px 40px 40px 48px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 0 40px;
          align-items: start;
        }
        .services-card:hover {
          border-color: #F5A623;
          box-shadow: 0 12px 40px rgba(245,166,35,0.1);
          transform: translateY(-2px);
        }
        .services-card-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #F5A623, #C17F24);
          border-radius: 4px 0 0 4px;
        }
        .services-card-number {
          font-size: 80px;
          font-weight: 900;
          color: rgba(245,166,35,0.08);
          position: absolute;
          top: 16px;
          right: 32px;
          line-height: 1;
          grid-column: 2;
          grid-row: 1 / 5;
          pointer-events: none;
        }
        .services-card-tag {
          font-size: 10px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
          grid-column: 1;
        }
        .services-card-title {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 800;
          color: #1B2A6B;
          margin-bottom: 12px;
          font-family: var(--font-playfair);
          grid-column: 1;
        }
        .services-card-desc {
          font-size: 14px;
          color: #6B7280;
          line-height: 1.7;
          margin-bottom: 16px;
          grid-column: 1;
          max-width: 680px;
        }
        .services-card-result {
          font-size: 12px;
          color: #C17F24;
          font-weight: 600;
          background: #FFF8EC;
          padding: 8px 16px;
          border-radius: 6px;
          border-left: 3px solid #F5A623;
          margin-bottom: 20px;
          grid-column: 1;
          display: inline-block;
        }
        .services-card-btn {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(to right, #F5A623, #C17F24);
          color: white;
          padding: 12px 24px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          grid-column: 1;
          transition: opacity 0.2s;
          width: fit-content;
        }
        .services-card-btn:hover { opacity: 0.9; }

        /* ── CTA ── */
        .services-cta-section {
          background: #FDF8F3;
          padding: 0 0 80px;
        }
        .services-cta-box {
          background: linear-gradient(135deg, #F5A623 0%, #C17F24 100%);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          padding: 60px 80px;
          text-align: center;
        }
        .services-cta-dot-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }
        .services-cta-content { position: relative; }
        .services-cta-title {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
          font-family: var(--font-playfair);
        }
        .services-cta-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 32px;
          line-height: 1.7;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .services-cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .services-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          background: white;
          color: #C17F24;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
        }
        .services-cta-btn-primary:hover { opacity: 0.9; }
        .services-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: white;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          border: 2px solid rgba(255,255,255,0.6);
        }
        .services-cta-btn-secondary:hover { border-color: white; }

        /* ── MOBILE ── */
        @media (max-width: 1023px) {
          .services-container { padding: 0 20px; }
          .services-hero { padding: 100px 0 48px; }
          .services-cards-section { padding: 40px 0; }
          .services-card {
            padding: 24px 20px 24px 28px;
            grid-template-columns: 1fr;
            gap: 0;
          }
          .services-card:hover { transform: none; }
          .services-card-number { display: none; }
          .services-card-result { display: block; }
          .services-cta-section { padding: 0 0 48px; }
          .services-cta-box { padding: 36px 24px; border-radius: 16px; }
          .services-cta-buttons { flex-direction: column; align-items: center; }
          .services-cta-btn-primary,
          .services-cta-btn-secondary {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
        }
      `}</style>

    </main>
  );
}