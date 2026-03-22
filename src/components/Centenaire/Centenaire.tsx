export default function Centenaire() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        {/* Bannière 100 ans */}
        <div
          style={{
            backgroundColor: '#3b0088',
            borderRadius: '1rem',
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            overflow: 'hidden',
          }}
        >
          {/* Texte gauche */}
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              100 ans à vos côtés
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.5 }}>
              Partout où l'envie d'apprendre<br />rencontre le besoin d'agir
            </p>
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
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = '#3b0088'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
            >
              Découvrir la vidéo
            </a>
          </div>

          {/* Logo 100 ans droite */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <div style={{ textAlign: 'right' }}>
              {/* Flamme SVG */}
              <svg width="40" height="55" viewBox="0 0 40 55" fill="none" style={{ marginBottom: '-8px' }}>
                <path
                  d="M20 0C20 0 8 12 8 24C8 30.627 13.373 36 20 36C26.627 36 32 30.627 32 24C32 12 20 0 20 0Z"
                  fill="rgba(255,255,255,0.4)"
                />
                <path
                  d="M20 10C20 10 13 19 13 26C13 29.866 16.134 33 20 33C23.866 33 27 29.866 27 26C27 19 20 10 20 10Z"
                  fill="rgba(255,255,255,0.7)"
                />
              </svg>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ color: 'white', fontSize: '5rem', fontWeight: 900, lineHeight: 1, opacity: 0.6 }}>1</span>
                <div style={{ position: 'relative' }}>
                  <span style={{ color: 'white', fontSize: '5rem', fontWeight: 900, lineHeight: 1, opacity: 0.6 }}>OO</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>cegos</span>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', textAlign: 'right' }}>
                  Beyond<br />knowledge
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
