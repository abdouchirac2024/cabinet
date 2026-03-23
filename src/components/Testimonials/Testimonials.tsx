import { testimonials } from '../../data/formations';

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#f5f7fa' }}>
      <div className="container-xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#162354' }}>
            Ils nous font confiance
          </h2>
          <p className="text-sm sm:text-base max-w-md mx-auto" style={{ color: '#6b7280' }}>
            Découvrez les témoignages de nos clients et participants
          </p>
        </div>

        <div className="grid-auto-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative"
              style={{ backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', transition: 'box-shadow 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(22,35,84,0.12)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.07)'; }}
            >
              <div className="absolute top-5 right-6 text-6xl leading-none select-none font-serif font-black" style={{ color: 'rgba(184,134,30,0.15)' }}>"</div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 relative z-10" style={{ color: '#374151' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #e5e7eb' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#162354' }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#162354' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>{t.role} — {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
