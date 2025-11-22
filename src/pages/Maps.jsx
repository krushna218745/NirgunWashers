import { useState } from 'react'
import './Maps.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Maps() {
  const [mapType, setMapType] = useState('2d')
  const { language } = useLanguage()
  const t = translations[language].maps

  const businessLocation = {
    lat: 28.7041,
    lng: 77.1025,
    name: t.locationName,
    address: t.addressLine
  }

  return (
    <main className="maps">
      <section className="maps-hero">
        <h1>{t.heroHeading}</h1>
        <p>{t.heroCopy}</p>
      </section>

      <section className="maps-content">
        <div className="maps-container">
          <div className="map-selector">
            <button 
              className={`map-btn ${mapType === '2d' ? 'active' : ''}`}
              onClick={() => setMapType('2d')}
            >
              {t.buttons['2d']}
            </button>
            <button 
              className={`map-btn ${mapType === '3d' ? 'active' : ''}`}
              onClick={() => setMapType('3d')}
            >
              {t.buttons['3d']}
            </button>
          </div>

          {mapType === '2d' ? (
            <div className="map-wrapper">
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.546179159834!2d${businessLocation.lng}!3d${businessLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNirgun+Washers!5e0!3m2!1sen!2sin!4v1234567890`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ) : (
            <div className="map-wrapper">
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.546179159834!2d${businessLocation.lng}!3d${businessLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNirgun+Washers!5e0!3m2!1sen!2sin!4v1234567890`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="map-note">{t.mapNote}</p>
            </div>
          )}

          <div className="location-info">
            <h2>{businessLocation.name}</h2>
            
            <div className="address-section">
              <div className="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4>Address</h4>
                <p>{businessLocation.address}</p>
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.phoneLabel}</h4>
                  <p><a href="tel:+917770099299">{t.contact.phoneValue}</a></p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.emailLabel}</h4>
                  <p><a href="mailto:nirgunwashers@gmail.com">{t.contact.emailValue}</a></p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.hoursLabel}</h4>
                  <p>{t.contact.hoursValue}</p>
                </div>
              </div>
            </div>

            <div className="directions-btn">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-directions"
              >
                {t.directions}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="map-features">
        <div className="features-container">
          <h2>{t.featuresHeading}</h2>
          <div className="features-grid">
            {t.features.map((feature) => (
              <div className="feature" key={feature.title}>
                <div className="feature-icon"></div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
