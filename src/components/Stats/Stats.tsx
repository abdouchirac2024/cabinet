import { stats } from '../../data/formations';

export default function Stats() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ backgroundColor: '#162354' }}>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'rgba(184,134,30,0.08)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'rgba(184,134,30,0.05)', filter: 'blur(80px)' }} />

      <div className="container-xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Les chiffres clés FCT
          </h2>
          <p className="text-sm sm:text-base" style={{ color: '#9ca3af' }}>
            Votre partenaire de confiance en consulting juridique et formation professionnelle
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2 py-4">
              <div className="text-4xl sm:text-5xl font-extrabold leading-none" style={{ color: '#b8861e' }}>
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-center" style={{ color: '#d1d5db' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
