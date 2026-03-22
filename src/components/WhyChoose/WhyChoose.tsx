import { Award, Users, Globe, BookOpen, HeadphonesIcon, Scale } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Plus de 15 ans d'experience dans le conseil juridique et la formation professionnelle, avec des experts praticiens du droit.",
  },
  {
    icon: Scale,
    title: "Approche juridique pointue",
    description: "Des formations animées par des avocats et juristes en exercice, ancrées dans la pratique réelle du droit.",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Des parcours adaptés à vos besoins spécifiques, que vous soyez cabinet d'avocats, entreprise ou professionnel indépendant.",
  },
  {
    icon: Globe,
    title: "Présence internationale",
    description: "Interventions en Afrique francophone et en Europe pour accompagner vos projets juridiques à l'international.",
  },
  {
    icon: BookOpen,
    title: "Formations certifiantes",
    description: "Des programmes certifiants et éligibles aux financements professionnels pour valoriser vos compétences juridiques.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suivi post-formation",
    description: "Un conseiller dédié vous accompagne après la formation pour ancrer les apprentissages dans votre pratique quotidienne.",
  },
];

export default function WhyChoose() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2044', marginBottom: '0.75rem' }}>
            Pourquoi choisir Fotso Consulting ?
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
            Un partenaire de confiance pour le développement des compétences juridiques et professionnelles
          </p>
        </div>

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
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(15,32,68,0.1)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#c9921a';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                }}
              >
                <div style={{
                  width: '3.25rem', height: '3.25rem',
                  backgroundColor: 'rgba(201,146,26,0.1)',
                  borderRadius: '0.75rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={24} color="#c9921a" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2044', marginBottom: '0.5rem' }}>
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
