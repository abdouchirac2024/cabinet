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
          {/* Image de fond */}
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80"
            alt="nature"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Overlay sombre */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.45)',
            }}
          />
          {/* Contenu */}
          <div style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
            <h2
              style={{
                color: 'white',
                fontSize: '1.6rem',
                fontWeight: 700,
                maxWidth: '520px',
                lineHeight: 1.4,
                marginBottom: '2rem',
              }}
            >
              Mesurez l'impact environnemental de votre formation grâce à notre calculatrice carbone
            </h2>
            <a
              href="#"
              style={{
                display: 'inline-block',
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                border: '2px solid white',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: 'transparent',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#1D0000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
            >
              Accéder à la calculatrice
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
