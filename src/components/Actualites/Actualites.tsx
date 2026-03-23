const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
    title: "Les nouvelles obligations de compliance pour les entreprises en 2026",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    title: "RGPD : comment mettre en conformité votre cabinet juridique",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    title: "Legaltech : les outils numériques qui transforment la pratique du droit",
  },
];

export default function Actualites() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{ color: '#162354' }}>
          Nos dernières actualités
        </h2>
        <div className="grid-auto-3">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="flex flex-col rounded-lg overflow-hidden"
              style={{ backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(22,35,84,0.15)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" style={{ transition: 'transform 0.4s' }} />
              </div>
              <div className="p-4 sm:p-5 flex-grow" style={{ backgroundColor: '#f9f9f9' }}>
                <h3 className="text-sm sm:text-base font-bold leading-snug" style={{ color: '#162354' }}>
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
