import { ArrowRight, Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-cegos-red to-red-700 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Vous avez un projet de formation ?
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Nos conseillers vous accompagnent dans la construction de votre plan de développement des compétences.
          Contactez-nous pour un devis personnalisé.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-cegos-red px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm"
          >
            Demander un devis
            <ArrowRight size={16} />
          </a>
          <a
            href="tel:+33155001210"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-sm"
          >
            <Phone size={16} />
            01 55 00 12 10
          </a>
        </div>
      </div>
    </section>
  );
}
