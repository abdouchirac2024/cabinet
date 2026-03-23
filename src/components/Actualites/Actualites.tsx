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
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: '#162354' }}>
          Nos dernières actualités
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textDecoration: 'none', transition: 'box-shadow 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 20px rgba(15,32,68,0.15)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'; }}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                />
              </div>
              <div style={{ padding: '1.25rem 1.5rem', flexGrow: 1, backgroundColor: '#f9f9f9' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#162354', lineHeight: 1.4, margin: 0 }}>
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
