import { MapPin } from 'lucide-react';

export default function Centenaire() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <div
          className="centenaire-inner"
          style={{
            background: 'linear-gradient(135deg, #162354 0%, #1e3a7a 100%)',
            borderRadius: '1rem',
            padding: '3rem',
          }}
        >
          {/* Texte gauche */}
          <div style={{ flex: 1, minWidth: '280px' }}>
            <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              Cabinet d'expertise juridique
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              Conseils juridiques &amp; stratégiques, représentation,<br />ingénierie juridique et formation judiciaire
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
              <MapPin size={18} color="#b8861e" />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                Cameroun et à l'international
              </span>
            </div>
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
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#b8861e'; e.currentTarget.style.borderColor = '#b8861e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'white'; }}
            >
              Découvrir notre cabinet
            </a>
          </div>

          {/* Chiffre clé droite */}
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ color: '#b8861e', fontSize: '5rem', fontWeight: 900, lineHeight: 1 }}>15+</div>
            <div style={{ color: 'white', fontSize: '1rem', fontWeight: 500, marginTop: '0.25rem' }}>années d'expertise</div>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '0.5rem' }}>au service des professionnels</div>
          </div>
        </div>
      </div>
    </section>
  );
}
