import { Monitor, Users, Laptop, Smartphone } from 'lucide-react';

const formats = [
  { icon: Users, title: "Présentiel", description: "Formations en salle avec un formateur expert, favorisant les échanges et la pratique.", bg: '#162354' },
  { icon: Monitor, title: "Classe virtuelle", description: "Formations à distance en temps réel avec un formateur, interaction garantie.", bg: '#1a6fa8' },
  { icon: Laptop, title: "E-learning", description: "Modules digitaux accessibles 24/7, à votre rythme et selon vos disponibilités.", bg: '#b8861e' },
  { icon: Smartphone, title: "Blended Learning", description: "Un parcours combinant présentiel, digital et accompagnement personnalisé.", bg: '#2e7d32' },
];

export default function Formats() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#f5f7fa' }}>
      <div className="container-xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#162354' }}>
            Des formats adaptés à vos besoins
          </h2>
          <p className="text-sm sm:text-base max-w-lg mx-auto" style={{ color: '#6b7280' }}>
            Choisissez le format qui correspond le mieux à vos contraintes et objectifs
          </p>
        </div>

        <div className="grid-auto-4">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <div
                key={index}
                className="rounded-xl p-6 text-center cursor-pointer"
                style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(22,35,84,0.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: format.bg }}>
                  <Icon size={24} color="white" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#162354' }}>{format.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{format.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
