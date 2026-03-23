export default function CTABanner() {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #162354 0%, #1e3a7a 100%)',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '-5rem', right: '-3rem', width: '22rem', height: '22rem', backgroundColor: 'rgba(201,146,26,0.08)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-4rem', left: '-3rem', width: '16rem', height: '16rem', backgroundColor: 'rgba(201,146,26,0.05)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
          Vous avez un projet de formation ou de consulting ?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Nos experts vous accompagnent dans la construction de votre plan de développement des compétences juridiques et professionnelles. Contactez-nous pour un devis personnalisé.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#b8861e', color: 'white', padding: '0.85rem 2rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '2px solid #b8861e', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#9d7519'; e.currentTarget.style.borderColor = '#9d7519'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#b8861e'; e.currentTarget.style.borderColor = '#b8861e'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Demander un devis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a
            href="tel:+237600000000"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: 'white', padding: '0.85rem 2rem', borderRadius: '9999px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 3.18 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +237 6 00 00 00 00
          </a>
        </div>
      </div>
    </section>
  );
}
