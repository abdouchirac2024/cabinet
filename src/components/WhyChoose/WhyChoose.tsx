import { Award, Users, Globe, Laptop, BookOpen, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    color: '#e6233a',
    title: "Expertise reconnue",
    description: "Plus de 50 ans d'expérience dans la formation professionnelle, avec des formateurs experts dans leur domaine.",
  },
  {
    icon: Users,
    color: '#e6233a',
    title: "Approche personnalisée",
    description: "Des parcours adaptés à vos besoins spécifiques, en format inter ou intra-entreprise.",
  },
  {
    icon: Globe,
    color: '#e6233a',
    title: "Présence internationale",
    description: "Présent dans plus de 50 pays, nous accompagnons vos projets de formation à l'international.",
  },
  {
    icon: Laptop,
    color: '#e6233a',
    title: "Digital Learning",
    description: "Des solutions de formation digitales innovantes : e-learning, classes virtuelles, blended learning.",
  },
  {
    icon: BookOpen,
    color: '#e6233a',
    title: "Certifications",
    description: "Des formations certifiantes et éligibles au CPF pour valoriser vos compétences.",
  },
  {
    icon: HeadphonesIcon,
    color: '#e6233a',
    title: "Accompagnement",
    description: "Un conseiller dédié vous accompagne dans la construction de votre plan de formation.",
  },
];

export default function WhyChoose() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        {/* Titre centré */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1D0000', marginBottom: '0.75rem' }}>
            Pourquoi choisir Cegos ?
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
            Un partenaire de confiance pour le développement des compétences de vos collaborateurs
          </p>
        </div>

        {/* Grille 3 colonnes centrée */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(230,35,58,0.12)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(230,35,58,0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                }}
              >
                <div style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  backgroundColor: 'rgba(230,35,58,0.1)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={24} color="#e6233a" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1D0000', marginBottom: '0.5rem' }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
