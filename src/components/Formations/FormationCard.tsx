import { Star, Clock, Monitor } from 'lucide-react';
import type { Formation } from '../../data/formations';

interface Props {
  formation: Formation;
}

export default function FormationCard({ formation }: Props) {
  return (
    <div className="group bg-white rounded-2xl border border-cegos-border hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Top color bar */}
      <div className="h-1.5 bg-cegos-red group-hover:h-2 transition-all" />

      <div className="p-6 flex flex-col flex-1">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3">
          {formation.isBestseller && (
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Bestseller
            </span>
          )}
          {formation.isNew && (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Nouveau
            </span>
          )}
          {formation.badge && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {formation.badge}
            </span>
          )}
        </div>

        {/* Category */}
        <span className="text-cegos-red text-xs font-semibold uppercase tracking-wider mb-2">
          {formation.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-cegos-dark mb-3 group-hover:text-cegos-red transition-colors leading-snug">
          {formation.title}
        </h3>

        {/* Info */}
        <div className="flex flex-col gap-2 text-sm text-cegos-gray mb-4">
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{formation.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor size={14} />
            <span>{formation.format}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <Star size={14} className="text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold text-cegos-dark">{formation.rating}</span>
          <span className="text-sm text-cegos-gray">({formation.reviews} avis)</span>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-cegos-border">
          <span className="text-xl font-bold text-cegos-dark">{formation.price}</span>
          <button className="bg-cegos-red text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-cegos-red-hover transition-colors">
            En savoir +
          </button>
        </div>
      </div>
    </div>
  );
}
