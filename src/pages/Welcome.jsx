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

      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <p className="page-eyebrow">{t.signatureEyebrow}</p>
            <h2>{t.signatureHeading}</h2>
            <p className="section-copy">{t.signatureCopy}</p>
          </div>
          <div className="features-grid">
            {t.highlightServices.map(({ title, copy }) => (
              <article key={title} className="feature-card">
                <div className="feature-icon"></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
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

      <section className="cta-section">
        <div className="cta-container">
          <div>
            <p className="page-eyebrow">{t.ctaEyebrow}</p>
            <h2>{t.ctaHeading}</h2>
            <p>{t.ctaCopy}</p>
          </div>
          <div className="cta-actions">
            <Link to="/catalog" className="btn btn-large">
              {t.ctaPrimary}
            </Link>
            <a href="tel:+919876543210" className="cta-link">
              {t.ctaLink}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
