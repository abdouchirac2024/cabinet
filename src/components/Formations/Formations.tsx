import { ArrowRight } from 'lucide-react';
import { formations } from '../../data/formations';
import FormationCard from './FormationCard';

export default function Formations() {
  return (
    <section className="py-16 md:py-24 bg-cegos-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cegos-dark mb-4">
              Formations les plus populaires
            </h2>
            <p className="text-cegos-gray text-lg max-w-xl">
              Découvrez les formations plébiscitées par nos clients
            </p>
          </div>
          <a
            href="/formations"
            className="inline-flex items-center gap-2 text-cegos-red font-semibold hover:gap-3 transition-all text-sm whitespace-nowrap"
          >
            Voir toutes les formations
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {formations.map((f) => (
            <FormationCard key={f.id} formation={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
