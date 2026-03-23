import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const placeholders = [
  "Conseils juridiques",
  "Représentation judiciaire",
  "Création d'entreprise",
  "Formation des acteurs judiciaires",
  "Ingénierie juridique",
];

export default function Hero() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    if (isTyping) {
      if (displayText.length < currentPlaceholder.length) {
        const timeout = setTimeout(() => setDisplayText(currentPlaceholder.slice(0, displayText.length + 1)), 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
        return () => clearTimeout(timeout);
      } else {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, placeholderIndex]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: 'clamp(420px, 60vh, 580px)' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Consulting juridique"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(22,35,84,0.92) 0%,rgba(22,35,84,0.75) 50%,rgba(22,35,84,0.35) 100%)' }} />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Titre */}
        <h1 className="font-extrabold text-white leading-tight mb-8 max-w-xl"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)', lineHeight: 1.2 }}>
          Cabinet d'expertise juridique{' '}
          <span style={{ color: '#b8861e' }}>au Cameroun et à l'international</span>
        </h1>

        {/* Barre de recherche */}
        <div className="w-full max-w-[640px]">
          {/* Ligne input + bouton */}
          <div className="flex items-center bg-white rounded-xl shadow-2xl" style={{ padding: '0.3rem', gap: '0.25rem' }}>
            <Search size={18} className="ml-3 flex-shrink-0 text-gray-400" />
            <input
              type="text"
              placeholder={displayText + '|'}
              className="flex-1 py-3 px-2 text-sm outline-none bg-transparent"
              style={{ color: '#162354', minWidth: 0 }}
            />
            <button
              className="flex-shrink-0 text-white font-bold rounded-lg transition-opacity hover:opacity-90"
              style={{
                backgroundColor: '#b8861e',
                padding: '0.7rem 0.75rem',
                fontSize: 'clamp(0.75rem, 2.5vw, 0.9rem)',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="hidden sm:inline">Rechercher</span>
              <Search size={18} className="sm:hidden" />
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Conseils juridiques', 'Représentation', 'Création entreprise', 'Formation'].map((tag) => (
              <a
                key={tag}
                href="#"
                className="text-white text-xs sm:text-sm px-3 py-1.5 rounded-full transition-all hover:bg-white/30"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.35)' }}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
