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
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-xl">
        {/* Titre */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#162354' }}>
            Pourquoi choisir Fotso Consulting ?
          </h2>
          <p className="text-sm sm:text-base max-w-lg mx-auto" style={{ color: '#6b7280' }}>
            Un partenaire de confiance pour le développement des compétences juridiques et professionnelles
          </p>
        </div>

        {/* ── Mobile : scroll horizontal ── */}
        <div
          className="flex sm:hidden gap-4 pb-4"
          style={{ overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 rounded-2xl p-5 flex flex-col"
                style={{
                  width: '72vw',
                  maxWidth: '280px',
                  backgroundColor: 'white',
                  border: '1.5px solid #e5e7eb',
                  scrollSnapAlign: 'start',
                  boxShadow: '0 2px 12px rgba(22,35,84,0.07)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: 'rgba(184,134,30,0.1)' }}
                >
                  <Icon size={22} color="#b8861e" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#162354' }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
          {/* Spacer fin de scroll */}
          <div className="flex-shrink-0 w-4" />
        </div>

        {/* Indicateurs de scroll mobile */}
        <div className="flex sm:hidden justify-center gap-1.5 mt-3">
          {reasons.map((_, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{ width: i === 0 ? '1.5rem' : '0.4rem', height: '0.4rem', backgroundColor: i === 0 ? '#b8861e' : '#d1d5db', transition: 'all 0.3s' }}
            />
          ))}
        </div>

        {/* ── Desktop : grille 3 colonnes ── */}
        <div className="hidden sm:grid grid-auto-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="rounded-2xl p-6 cursor-pointer"
                style={{ backgroundColor: 'white', border: '1.5px solid #e5e7eb', transition: 'all 0.2s' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(22,35,84,0.1)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#b8861e';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#e5e7eb';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(184,134,30,0.1)' }}
                >
                  <Icon size={26} color="#b8861e" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#162354' }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
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
