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
    <section className="py-12 md:py-16 bg-white" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px', width: '100%', padding: '0 2rem' }}>
        <h2 className="text-2xl md:text-3xl font-bold text-cegos-dark mb-8 md:mb-10" style={{ textAlign: 'center' }}>
          Nos dernières actualités
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href="#"
              className="group flex flex-col bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 flex-grow">
                <h3 className="text-base md:text-lg font-bold text-cegos-dark leading-snug group-hover:text-cegos-red transition-colors">
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
