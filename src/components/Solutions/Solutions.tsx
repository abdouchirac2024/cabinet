const solutions = [
  {
    id: 1,
    title: 'Formation inter',
    description: '1000 formations métier, transverses ou sectorielles dispensées dans les centres de formation Cegos et à distance pour répondre aux besoins individuels de vos collaborateurs.',
    color: '#e6233a',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="10" stroke="#e6233a" strokeWidth="2.5" fill="none"/>
        <path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="#e6233a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Formation intra entreprise',
    description: 'La formation de votre choix, à la date de votre choix, dispensée dans votre organisation pour vos collaborateurs. 1 000 formations disponibles.',
    color: '#1a6fa8',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="22" cy="20" r="9" stroke="#1a6fa8" strokeWidth="2.5" fill="none"/>
        <circle cx="42" cy="20" r="9" stroke="#1a6fa8" strokeWidth="2.5" fill="none"/>
        <path d="M4 54c0-10.5 8.06-19 18-19" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M42 35c9.94 0 18 8.5 18 19" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M22 35c5.52 0 10 4.48 10 10" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M42 35c-5.52 0-10 4.48-10 10" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Formation sur-mesure',
    description: 'Avec 20 000 entreprises clientes, 12 000 missions sur-mesure par an et 300 projets internationaux déployés dans 50 pays, quelque soit votre enjeu compétences, Cegos vous accompagne.',
    color: '#7c3aed',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="20" height="20" rx="3" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
        <circle cx="18" cy="18" r="5" stroke="#7c3aed" strokeWidth="2" fill="none"/>
        <rect x="36" y="8" width="20" height="20" rx="3" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
        <path d="M42 18h8M46 14v8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
        <rect x="8" y="36" width="20" height="20" rx="3" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
        <path d="M12 42l4 4 8-8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="36" y="36" width="20" height="20" rx="3" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
        <path d="M40 46h12M40 42h12" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Formation certifiante et diplômante',
    description: 'Afin de répondre aux besoins croissants des individus et des entreprises pour une reconnaissance officielle des compétences, nous proposons près de 150 formations certifiantes et diplômantes.',
    color: '#059669',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M32 8L8 20v4c0 16 10 28 24 32 14-4 24-16 24-32v-4L32 8z" stroke="#059669" strokeWidth="2.5" fill="none"/>
        <path d="M22 32l7 7 13-13" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Formation e-learning',
    description: "Cegos vous propose une offre de formation variée multi-supports, multi-formats et multilingues pour un apprentissage encore plus efficace, à coût optimisé et accessible à tous.",
    color: '#db2777',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M32 8C32 8 20 18 20 30c0 6.627 5.373 12 12 12s12-5.373 12-12C44 18 32 8 32 8z" stroke="#db2777" strokeWidth="2.5" fill="none"/>
        <path d="M32 42v14" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 56h16" stroke="#db2777" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 30l4-6 6 4 4-8" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Digital learning & Innovation',
    description: "Découvrir nos solutions d'apprentissage digital avec nos modules e-learning, classes virtuelles, vidéos, et les nouveautés en présentiel.",
    color: '#ffffff',
    dark: true,
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="28" r="14" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" fill="none"/>
        <path d="M18 42c-4 2-6 6-4 10" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M46 42c4 2 6 6 4 10" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 52h36" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M28 22l6 6-6 6" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 28h8" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1D0000', marginBottom: '2rem' }}>
          Nos solutions
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {solutions.map((sol) => (
            <a
              key={sol.id}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                padding: '1.75rem',
                borderRadius: '0.75rem',
                backgroundColor: sol.dark ? '#0d5c5c' : '#f5f5f5',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ flexShrink: 0 }}>{sol.icon}</div>
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: sol.dark ? '#ffffff' : sol.color,
                  marginBottom: '0.5rem',
                }}>
                  {sol.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: sol.dark ? 'rgba(255,255,255,0.85)' : '#4b5563',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {sol.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
