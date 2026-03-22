import { Quote } from 'lucide-react';
import { testimonials } from '../../data/formations';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cegos-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cegos-dark mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-cegos-gray text-lg max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients et participants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote size={32} className="text-cegos-red/20 absolute top-6 right-6" />
              <p className="text-cegos-dark text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-cegos-border pt-4">
                <div className="w-12 h-12 bg-cegos-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-cegos-dark text-sm">{t.name}</div>
                  <div className="text-cegos-gray text-xs">{t.role} - {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
