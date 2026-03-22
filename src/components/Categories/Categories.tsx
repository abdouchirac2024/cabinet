import { categories } from '../../data/formations';

export default function Categories() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1D0000', marginBottom: '1.5rem' }}>
          Retrouver tous nos domaines de formation
        </h2>

        <div
          style={{
            background: 'linear-gradient(135deg, #0d5c5c 0%, #0a7a6e 50%, #0d5c5c 100%)',
            borderRadius: '1rem',
            padding: '2rem 2.5rem 1.5rem',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem' }}>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`/formations/${cat.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  backgroundColor: 'transparent',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
              href="/formations"
              style={{ color: 'white', textDecoration: 'underline', fontSize: '0.9rem', fontWeight: 500 }}
            >
              Tous les domaines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
