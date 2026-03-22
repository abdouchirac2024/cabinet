import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/formations';

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cegos-dark mb-4">
            Nos domaines de formation
          </h2>
          <p className="text-cegos-gray text-lg max-w-2xl mx-auto">
            Explorez nos 1 200 formations réparties dans plus de 40 domaines d'expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/formations/${cat.slug}`}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-cegos-border hover:border-cegos-red hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-cegos-light rounded-xl flex items-center justify-center text-2xl group-hover:bg-cegos-red/10 transition-colors flex-shrink-0">
                {cat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-cegos-dark text-sm group-hover:text-cegos-red transition-colors">
                  {cat.name}
                </h3>
                <p className="text-cegos-gray text-xs mt-0.5">{cat.count} formations</p>
              </div>
              <ArrowRight
                size={16}
                className="text-cegos-gray group-hover:text-cegos-red group-hover:translate-x-1 transition-all flex-shrink-0"
              />
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/formations"
            className="inline-flex items-center gap-2 bg-cegos-dark text-white px-8 py-3.5 rounded-full font-semibold hover:bg-cegos-dark/90 transition-colors text-sm"
          >
            Voir tous les domaines
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
