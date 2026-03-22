import { stats } from '../../data/formations';

export default function Stats() {
  return (
    <section style={{
      backgroundColor: '#1D0000',
      padding: '4rem 0',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blurs */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '18rem', height: '18rem', background: 'rgba(230,35,58,0.1)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '24rem', height: '24rem', background: 'rgba(230,35,58,0.05)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Titre centré */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>
            Les chiffres clés Cegos
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
            Un acteur de référence de la formation professionnelle depuis plus de 50 ans
          </p>
        </div>

        {/* Stats grid centré */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#e6233a', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
