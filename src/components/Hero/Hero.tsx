import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const placeholders = [
  "Comment financer ma formation Excel",
  "Formation management d'équipe",
  "Gestion de projet agile",
  "Formation leadership",
  "Développement personnel",
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
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
          alt="Formation professionnelle"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cegos-dark leading-tight mb-10">
            Trouvez la solution de
            <br />
            formation adaptée à
            <br />
            vos besoins
          </h1>
        </div>

        {/* Big centered search bar */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-2 flex items-center">
            <Search size={24} className="text-cegos-gray ml-4 mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder={displayText + '|'}
              className="flex-1 py-4 text-base md:text-lg text-cegos-dark outline-none bg-transparent placeholder-cegos-gray/70"
            />
            <button className="bg-cegos-red text-white px-6 md:px-8 py-4 rounded-lg font-semibold hover:bg-cegos-red-hover transition-colors text-sm whitespace-nowrap hidden sm:block">
              Rechercher
            </button>
            <button className="bg-cegos-red text-white p-4 rounded-lg hover:bg-cegos-red-hover transition-colors sm:hidden">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
