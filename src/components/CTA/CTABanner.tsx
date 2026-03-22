export default function CTABanner() {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #e6233a 0%, #c0182d 100%)',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Cercles décoratifs */}
      <div style={{ position: 'absolute', top: '-5rem', right: '-3rem', width: '22rem', height: '22rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-4rem', left: '-3rem', width: '16rem', height: '16rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
          Vous avez un projet de formation ?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Nos conseillers vous accompagnent dans la construction de votre plan de développement des compétences. Contactez-nous pour un devis personnalisé.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {/* Bouton Devis */}
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'white',
              color: '#e6233a',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
              border: '2px solid white',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f9f9f9'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Demander un devis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Bouton Téléphone */}
          <a
            href="tel:+33155001210"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              padding: '0.85rem 2rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.6)',
              transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 3.18 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            01 55 00 12 10
          </a>
        </div>
      </div>
    </section>
  );
}
