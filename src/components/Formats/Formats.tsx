import { Monitor, Users, Laptop, Smartphone } from 'lucide-react';

const formats = [
  {
    icon: Users,
    title: "Présentiel",
    description: "Formations en salle avec un formateur expert, favorisant les échanges et la pratique.",
    bg: '#3b82f6',
  },
  {
    icon: Monitor,
    title: "Classe virtuelle",
    description: "Formations à distance en temps réel avec un formateur, interaction garantie.",
    bg: '#22c55e',
  },
  {
    icon: Laptop,
    title: "E-learning",
    description: "Modules digitaux accessibles 24/7, à votre rythme et selon vos disponibilités.",
    bg: '#a855f7',
  },
  {
    icon: Smartphone,
    title: "Blended Learning",
    description: "Un parcours combinant présentiel, digital et accompagnement personnalisé.",
    bg: '#f59e0b',
  },
];

export default function Formats() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        {/* Titre centré */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1D0000', marginBottom: '0.75rem' }}>
            Des formats adaptés à vos besoins
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
            Choisissez le format de formation qui correspond le mieux à vos contraintes et objectifs
          </p>
        </div>

        {/* Grille 4 colonnes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '1rem',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid #e5e7eb',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: format.bg,
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  <Icon size={26} color="white" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1D0000', marginBottom: '0.5rem' }}>
                  {format.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  {format.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
