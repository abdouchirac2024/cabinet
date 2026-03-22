const solutions = [
  {
    id: 1,
    title: 'Consulting juridique',
    description: "Accompagnement stratégique et opérationnel dans vos problématiques juridiques : contrats, litiges, conformité, restructuration et développement d'activité.",
    color: '#c9921a',
    icon: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <path d="M32 8L8 20v4c0 16 10 28 24 32 14-4 24-16 24-32v-4L32 8z" stroke="#c9921a" strokeWidth="2.5" fill="none"/>
        <path d="M22 32l7 7 13-13" stroke="#c9921a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Formation inter-entreprises',
    description: 'Formations juridiques et professionnelles en groupes, animées par des experts praticiens, dans nos locaux ou à distance, pour enrichir vos compétences.',
    color: '#1a6fa8',
    icon: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <circle cx="22" cy="20" r="9" stroke="#1a6fa8" strokeWidth="2.5" fill="none"/>
        <circle cx="42" cy="20" r="9" stroke="#1a6fa8" strokeWidth="2.5" fill="none"/>
        <path d="M4 54c0-10.5 8.06-19 18-19M42 35c9.94 0 18 8.5 18 19" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M32 35c5.52 0 10 4.48 10 10M22 35c-5.52 0-10 4.48-10 10" stroke="#1a6fa8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Formation intra-entreprise',
    description: "Formation dispensée directement au sein de votre organisation, adaptée à vos enjeux spécifiques et à votre secteur d'activité.",
    color: '#7c3aed',
    icon: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="20" width="48" height="32" rx="4" stroke="#7c3aed" strokeWidth="2.5" fill="none"/>
        <path d="M20 20V16a12 12 0 0124 0v4" stroke="#7c3aed" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="32" cy="36" r="5" stroke="#7c3aed" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Formation sur-mesure',
    description: 'Conception et déploiement de parcours pédagogiques entièrement personnalisés selon vos besoins, votre secteur et vos objectifs stratégiques.',
    color: '#059669',
    icon: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="20" height="20" rx="3" stroke="#059669" strokeWidth="2.5" fill="none"/>
        <rect x="36" y="8" width="20" height="20" rx="3" stroke="#059669" strokeWidth="2.5" fill="none"/>
        <rect x="8" y="36" width="20" height="20" rx="3" stroke="#059669" strokeWidth="2.5" fill="none"/>
        <rect x="36" y="36" width="20" height="20" rx="3" stroke="#059669" strokeWidth="2.5" fill="none"/>
        <path d="M12 42l4 4 8-8" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Accompagnement RH',
    description: 'Audit social, gestion prévisionnelle des emplois, recrutement, politique de rémunération et accompagnement dans vos transformations organisationnelles.',
    color: '#db2777',
    icon: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="20" r="10" stroke="#db2777" strokeWidth="2.5" fill="none"/>
        <path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="#db2777" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M44 34l4 4-4 4M20 34l-4 4 4 4" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Digital & Legaltech',
    description: 'Intégration des outils numériques dans votre pratique juridique : logiciels de gestion, IA juridique, dématérialisation et transformation digitale.',
    color: '#ffffff',
    dark: true,
    icon: (
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="14" width="48" height="32" rx="4" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" fill="none"/>
        <path d="M22 46v4M42 46v4M16 50h32" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 26l6 6 6-6 6 6" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f2044', marginBottom: '2rem' }}>
          Nos services
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
                backgroundColor: sol.dark ? '#0f2044' : '#f5f7fa',
                textDecoration: 'none',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,32,68,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ flexShrink: 0 }}>{sol.icon}</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: sol.dark ? '#ffffff' : sol.color, marginBottom: '0.5rem' }}>
                  {sol.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: sol.dark ? 'rgba(255,255,255,0.8)' : '#4b5563', lineHeight: 1.6, margin: 0 }}>
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
