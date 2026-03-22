import { testimonials } from '../../data/formations';

export default function Testimonials() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        {/* Titre centré */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1D0000', marginBottom: '0.75rem' }}>
            Ils nous font confiance
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Découvrez les témoignages de nos clients et participants
          </p>
        </div>

        {/* Grille 3 colonnes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                transition: 'box-shadow 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)'; }}
            >
              {/* Guillemet décoratif */}
              <div style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                fontSize: '4rem',
                lineHeight: 1,
                color: 'rgba(230,35,58,0.12)',
                fontFamily: 'Georgia, serif',
                fontWeight: 900,
                userSelect: 'none',
              }}>
                "
              </div>

              {/* Citation */}
              <p style={{
                fontSize: '0.9rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1,
              }}>
                "{t.text}"
              </p>

              {/* Auteur */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #e5e7eb',
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#e6233a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1D0000', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.78rem' }}>{t.role} — {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
