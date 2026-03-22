import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const placeholders = [
  "Formation droit des affaires",
  "Compliance et RGPD",
  "Droit du travail pour managers",
  "Formation juristes d'entreprise",
  "Legaltech et outils numériques",
];

export default function Hero() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];
    if (isTyping) {
      if (displayText.length < currentPlaceholder.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentPlaceholder.slice(0, displayText.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, placeholderIndex]);

  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Consulting juridique et formation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2044]/90 via-[#0f2044]/60 to-[#0f2044]/20" />
      </div>

      <div style={{ position: 'relative', maxWidth: '1200px', width: '100%', padding: '4rem 2rem', margin: '0 auto' }}>
        <div style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: 'white', lineHeight: 1.25, marginBottom: '2.5rem' }}>
            Expertise juridique &<br />
            formation professionnelle<br />
            <span style={{ color: '#c9921a' }}>adaptées à vos besoins</span>
          </h1>
        </div>

        {/* Barre de recherche */}
        <div style={{ maxWidth: '680px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '0.75rem', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <Search size={22} color="#6b7280" style={{ marginLeft: '1rem', marginRight: '0.75rem', flexShrink: 0 }} />
            <input
              type="text"
              placeholder={displayText + '|'}
              style={{ flex: 1, padding: '0.875rem 0', fontSize: '1rem', color: '#0f2044', outline: 'none', background: 'transparent' }}
            />
            <button style={{ backgroundColor: '#c9921a', color: 'white', padding: '0.875rem 1.75rem', borderRadius: '0.5rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              Rechercher
            </button>
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['Droit des affaires', 'RGPD', 'Droit du travail', 'Compliance'].map((tag) => (
              <a key={tag} href="#" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '0.35rem 0.9rem', borderRadius: '9999px', fontSize: '0.8rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
