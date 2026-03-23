import { Award, Users, Globe, BookOpen, HeadphonesIcon, Scale, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 4s on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActiveIndex((i) => (i - 1 + reasons.length) % reasons.length);
  const next = () => setActiveIndex((i) => (i + 1) % reasons.length);

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

        {/* ── Mobile : carousel une seule card visible ── */}
        <div className="why-carousel relative">
          {/* Card active */}
          <div style={{ minHeight: '200px' }}>
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  data-carousel-slide-to={index}
                  style={{
                    display: index === activeIndex ? 'block' : 'none',
                    animation: index === activeIndex ? 'fadeIn 0.4s ease' : 'none',
                  }}
                >
                  <div
                    className="rounded-2xl p-5 flex flex-col mx-auto"
                    style={{
                      maxWidth: '340px',
                      backgroundColor: 'white',
                      border: '1.5px solid #e5e7eb',
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
                </div>
              );
            })}
          </div>

          {/* Flèches */}
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full shadow-md"
            style={{ width: '2rem', height: '2rem', backgroundColor: 'white', border: '1.5px solid #e5e7eb', zIndex: 10 }}
            aria-label="Précédent"
          >
            <ChevronLeft size={16} color="#162354" />
          </button>
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full shadow-md"
            style={{ width: '2rem', height: '2rem', backgroundColor: 'white', border: '1.5px solid #e5e7eb', zIndex: 10 }}
            aria-label="Suivant"
          >
            <ChevronRight size={16} color="#162354" />
          </button>

          {/* Indicateurs cliquables */}
          <div className="flex justify-center gap-2 mt-4">
            {reasons.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                data-carousel-slide-to={i}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === activeIndex ? '1.5rem' : '0.5rem',
                  height: '0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: i === activeIndex ? '#b8861e' : '#d1d5db',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop : grille 3 colonnes ── */}
        <div className="why-grid">
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
