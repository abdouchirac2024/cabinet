import { Scale, Gavel, Briefcase, GraduationCap, Landmark, Cog, BadgeDollarSign } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Scale,
    title: 'Conseils juridiques',
    description: 'Accompagnement et conseil dans tous les domaines du droit : civil, commercial, administratif, contractuel, droit des affaires et bien plus.',
    color: '#b8861e',
  },
  {
    id: 2,
    icon: Gavel,
    title: 'Représentation judiciaire',
    description: 'Assistance et/ou représentation devant les tribunaux camerounais, dans le strict respect des règles déontologiques du Barreau et des lois en vigueur.',
    color: '#1a6fa8',
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Services aux entreprises',
    items: [
      'Aide à la création d\'entreprise',
      'Négociation et rédaction de contrats',
      'Recrutement et gestion des ressources humaines',
      'Obtention de documents administratifs',
      'Représentation devant les notaires',
    ],
    color: '#7c3aed',
  },
  {
    id: 4,
    icon: GraduationCap,
    title: 'Formation judiciaire',
    description: 'Formation des acteurs et actrices judiciaires dans différents domaines liés à l\'accès à la justice, au droit et à la pratique professionnelle.',
    color: '#059669',
  },
  {
    id: 5,
    icon: Landmark,
    title: 'Réforme judiciaire',
    description: 'Accompagnement dans les projets de réforme judiciaire et de réforme des services de sécurité, en partenariat avec les institutions publiques.',
    color: '#db2777',
  },
  {
    id: 6,
    icon: Cog,
    title: 'Ingénierie juridique',
    description: 'Conception et mise en œuvre de solutions juridiques complexes, structuration de projets et montages juridiques adaptés à vos besoins spécifiques.',
    color: '#162354',
    dark: true,
  },
];

export default function Solutions() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-xl">
        {/* Titre */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#162354', marginBottom: '0.5rem' }}>
            Quels sont nos services ?
          </h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '700px', lineHeight: 1.6 }}>
            Cabinet d'expertise juridique intervenant au Cameroun et à l'international — conseils, représentation, formation et ingénierie juridique.
          </p>
        </div>

        {/* Grille services */}
        <div className="solutions-grid">
          {services.map((svc) => {
            const Icon = svc.icon;
            const isDark = svc.dark;
            return (
              <div
                key={svc.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.75rem',
                  borderRadius: '0.75rem',
                  backgroundColor: isDark ? '#162354' : '#f5f7fa',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,32,68,0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '0.75rem',
                    backgroundColor: isDark ? 'rgba(184,134,30,0.2)' : `${svc.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={26} color={isDark ? '#b8861e' : svc.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: isDark ? '#ffffff' : svc.color, marginBottom: '0.5rem' }}>
                    {svc.title}
                  </h3>
                  {svc.items ? (
                    <ul style={{ margin: 0, paddingLeft: '1.1rem', listStyle: 'disc' }}>
                      {svc.items.map((item, i) => (
                        <li key={i} style={{ fontSize: '0.85rem', color: isDark ? 'rgba(255,255,255,0.8)' : '#4b5563', lineHeight: 1.7 }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '0.875rem', color: isDark ? 'rgba(255,255,255,0.8)' : '#4b5563', lineHeight: 1.6, margin: 0 }}>
                      {svc.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mention tarifaire */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1.25rem 2rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #162354 0%, #1e3a7a 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <BadgeDollarSign size={28} color="#b8861e" style={{ flexShrink: 0 }} />
          <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, margin: 0, textAlign: 'center' }}>
            Nos prix sont imbattables
          </p>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', margin: 0 }}>
            — Contactez-nous pour un devis personnalisé
          </span>
        </div>
      </div>
    </section>
  );
}
