import { ArrowRight, Calendar, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: "Management",
    title: "Les 5 compétences clés du manager en 2026",
    excerpt: "Découvrez les compétences essentielles pour manager efficacement dans un monde en constante évolution.",
    date: "15 mars 2026",
    readTime: "5 min",
    image: "🏆",
  },
  {
    id: 2,
    category: "Digital",
    title: "Intelligence artificielle : quels impacts sur la formation ?",
    excerpt: "Comment l'IA transforme les méthodes de formation et d'apprentissage en entreprise.",
    date: "12 mars 2026",
    readTime: "7 min",
    image: "🤖",
  },
  {
    id: 3,
    category: "RH",
    title: "Réforme de la formation professionnelle : ce qui change",
    excerpt: "Tour d'horizon des dernières évolutions réglementaires en matière de formation continue.",
    date: "8 mars 2026",
    readTime: "4 min",
    image: "📚",
  },
];

export default function Resources() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cegos-dark mb-4">
              Ressources & Actualités
            </h2>
            <p className="text-cegos-gray text-lg max-w-xl">
              Nos articles, livres blancs et webinars pour rester informé
            </p>
          </div>
          <a
            href="/ressources"
            className="inline-flex items-center gap-2 text-cegos-red font-semibold hover:gap-3 transition-all text-sm whitespace-nowrap"
          >
            Voir toutes les ressources
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-cegos-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-cegos-dark to-cegos-dark/80 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl">{article.image}</span>
                <div className="absolute top-4 left-4">
                  <span className="bg-cegos-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-cegos-dark mb-2 group-hover:text-cegos-red transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-cegos-gray text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-cegos-gray">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
