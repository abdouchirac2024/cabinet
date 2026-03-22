export default function Centenaire() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <div
          style={{
            background: 'linear-gradient(135deg, #0f2044 0%, #1a3a6e 100%)',
            borderRadius: '1rem',
            padding: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Texte gauche */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Votre partenaire juridique
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Partout où l'expertise juridique<br />rencontre la performance professionnelle
            </p>
            <a
              href="/a-propos"
              style={{
                display: 'inline-block',
                padding: '0.65rem 1.5rem',
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
              Découvrir notre cabinet
            </a>
          </div>

          {/* Chiffre clé droite */}
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ color: '#c9921a', fontSize: '5rem', fontWeight: 900, lineHeight: 1 }}>15+</div>
            <div style={{ color: 'white', fontSize: '1rem', fontWeight: 500, marginTop: '0.25rem' }}>années d'expertise</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.5rem' }}>au service des professionnels</div>
          </div>
        </div>
      </div>
    </section>
  );
}
