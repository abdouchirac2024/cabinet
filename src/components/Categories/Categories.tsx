import {
  Scale, ClipboardList, Handshake, Users, Landmark,
  Coins, ShieldCheck, Building2, MessageSquare,
  GraduationCap, Target, Laptop,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { categories } from '../../data/formations';

const iconMap: Record<string, LucideIcon> = {
  Scale, ClipboardList, Handshake, Users, Landmark,
  Coins, ShieldCheck, Building2, MessageSquare,
  GraduationCap, Target, Laptop,
};

export default function Categories() {
  return (
    <section className="section-pad" style={{ backgroundColor: 'white' }}>
      <div className="container-xl">
        <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#162354' }}>
          Retrouver tous nos domaines de formation
        </h2>

        <div
          className="rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #162354 0%, #1e3a7a 100%)',
            padding: '2rem 1.5rem 1.5rem',
          }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] ?? Scale;
              return (
                <a
                  key={cat.id}
                  href={`/formations/${cat.slug}`}
                  className="flex items-center gap-2 rounded-full text-white font-medium"
                  style={{
                    padding: '0.5rem 1.1rem',
                    fontSize: 'clamp(0.78rem, 2vw, 0.875rem)',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(184,134,30,0.3)';
                    e.currentTarget.style.borderColor = '#b8861e';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={15} style={{ color: '#b8861e', flexShrink: 0 }} />
                  {cat.name}
                </a>
              );
            })}
          </div>

          <div className="text-center mt-5">
            <a
              href="/formations"
              style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', fontSize: '0.875rem', fontWeight: 500 }}
            >
              Tous les domaines →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
