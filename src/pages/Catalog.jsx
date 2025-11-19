import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Catalog.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const { language } = useLanguage()
  const t = translations[language].catalog

  const services = t.services
  const filteredServices =
    selectedCategory === 'all' ? services : services.filter((s) => s.category === selectedCategory)

  return (
    <main className="catalog">
      <section className="catalog-hero">
        <h1>{t.heroHeading}</h1>
        <p>{t.heroCopy}</p>
      </section>

      <section className="catalog-content">
        <div className="catalog-container">
          <div className="category-filter">
            <button
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t.filters.all}
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'general' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('general')}
            >
              {t.filters.general}
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'ironing' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('ironing')}
            >
              {t.filters.ironing}
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'dry-clean' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('dry-clean')}
            >
              {t.filters.dryClean}
            </button>
            <button
              className={`filter-btn ${selectedCategory === 'special' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('special')}
            >
              {t.filters.special}
            </button>
          </div>

          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <h3>{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-price">
                  <span className="price">₹{service.price}</span>
                  <span className="unit">/{service.unit}</span>
                </div>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature">
                      <span className="checkmark"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="service-btn">
                  {t.requestButton}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-info">
        <div className="pricing-container">
          <h2>{t.infoHeading}</h2>
          <div className="info-grid">
            {t.infoCards.map((card) => (
              <div key={card.title} className="info-card">
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
