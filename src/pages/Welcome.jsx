import { Link } from 'react-router-dom'
import './Welcome.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Welcome() {
  const { language } = useLanguage()
  const t = translations[language].welcome

  return (
    <main className="welcome">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-eyebrow page-eyebrow">{t.eyebrow}</p>
            <h1>
              {t.heroTitleMain}
              <span> {t.heroTitleHighlight}</span>
            </h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <div className="hero-buttons">
              <Link to="/catalog" className="btn btn-primary">
                {t.primaryCta}
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                {t.secondaryCta}
              </Link>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-badges">
                {t.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <div className="hero-stats">
                {t.stats.map(({ value, label }) => (
                  <article key={label} className="stat-card">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-pill hero-pill--primary">Dry & Steam Expertise</div>
            <div className="hero-showcase">
              <div className="hero-glass hero-glass--primary">
                <p>Hydrocarbon Dry Studio</p>
                <strong>Delicate couture workflow</strong>
              </div>
              <div className="hero-glass hero-glass--secondary">
                <p>Weekly Laundry Pods</p>
                <strong>Subscription-ready plans</strong>
              </div>
              <div className="hero-avatar-row">
                <div className="avatar-stack">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <p className="avatar-label">6,400+ garments revived</p>
                  <small>Across hospitality & fashion</small>
                </div>
              </div>
            </div>
            <div className="hero-pill hero-pill--secondary">Eco-certified chemistry</div>
          </div>
        </div>
      </section>

      <section className="service-flow">
        <div className="service-flow-container">
          <h2 className="service-flow-heading">How It Works</h2>
          <div className="service-flow-steps">
            <div className="flow-step">
              <div className="flow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M6 12H2M22 12h-4M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/>
                  <path d="M12 8 L8 12 L12 16 L16 12 Z"/>
                </svg>
              </div>
              <div className="flow-number">1</div>
              <h3>Visit Us</h3>
              <p>Bring your garments to our facility at your convenience.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 19c0-3.5 2-6 6-6s6 2.5 6 6"/>
                  <path d="M12 13V8"/>
                  <path d="M9 8c0-1.5 1.5-3 3-3s3 1.5 3 3"/>
                </svg>
              </div>
              <div className="flow-number">2</div>
              <h3>Expert Cleaning</h3>
              <p>Handled by certified textile & couture specialists with care.</p>
            </div>
            <div className="flow-step">
              <div className="flow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L4 6v6c0 5 8 10 8 10s8-5 8-10V6l-8-4z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div className="flow-number">3</div>
              <h3>Delivery</h3>
              <p>Fresh, crisp, ready-to-wear clothing delivered to you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <div className="section-header compact">
            <p className="page-eyebrow">{t.journeyEyebrow}</p>
            <h2>{t.journeyHeading}</h2>
            <p className="section-copy">{t.journeyCopy}</p>
          </div>
          <div className="process-grid">
            {t.journeySteps.map(({ title, text }, index) => (
              <article key={title} className="process-card">
                <div className="process-index">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-preview">
        <div className="pricing-preview-container">
          <h2>Starting Prices</h2>
          <div className="pricing-grid">
            <div className="price-item">
              <div className="price-label">Wash & Iron</div>
              <div className="price-value">₹99<span className="price-unit">/kg</span></div>
            </div>
            <div className="price-item">
              <div className="price-label">Dry Cleaning</div>
              <div className="price-value">₹80</div>
            </div>
            <div className="price-item">
              <div className="price-label">Saree Cleaning</div>
              <div className="price-value">₹220</div>
            </div>
            <div className="price-item">
              <div className="price-label">Bedding</div>
              <div className="price-value">₹120<span className="price-unit">/kg</span></div>
            </div>
          </div>
          <Link to="/catalog" className="pricing-link">
            View Full Pricing →
          </Link>
        </div>
      </section>
    </main>
  )
}
