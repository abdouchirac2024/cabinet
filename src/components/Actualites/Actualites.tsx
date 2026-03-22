const articles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    title: "Du management au leadership transversal",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    title: "Manager avec l'IA : comment garder discernement, sens et performance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    title: "Du management au leadership transversal",
  },
];

export default function Actualites() {
  return (
    <section style={{ padding: '3rem 0', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', color: '#1D0000' }}>
          Nos dernières actualités
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.1)', textDecoration: 'none' }}
            >
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '1.25rem 1.5rem', flexGrow: 1, backgroundColor: '#f9f9f9' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1D0000', lineHeight: 1.4, margin: 0 }}>
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
