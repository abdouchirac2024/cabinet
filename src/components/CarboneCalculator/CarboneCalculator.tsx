export default function CarboneCalculator() {
  return (
    <section style={{ padding: '0 0 3rem', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <div
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '280px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            alt="Consultation juridique"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,32,68,0.65)' }} />
          <div style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
            <h2 style={{ color: 'white', fontSize: '1.6rem', fontWeight: 700, maxWidth: '520px', lineHeight: 1.4, marginBottom: '2rem' }}>
              Prenez rendez-vous pour une consultation juridique personnalisée
            </h2>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                border: '2px solid white',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c9921a'; e.currentTarget.style.borderColor = '#c9921a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'white'; }}
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
