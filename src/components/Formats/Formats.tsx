import { Monitor, Users, Laptop, Smartphone } from 'lucide-react';

const formats = [
  {
    icon: Users,
    title: "Présentiel",
    description: "Formations en salle avec un formateur expert, favorisant les échanges et la pratique.",
    color: "bg-blue-500",
  },
  {
    icon: Monitor,
    title: "Classe virtuelle",
    description: "Formations à distance en temps réel avec un formateur, interaction garantie.",
    color: "bg-green-500",
  },
  {
    icon: Laptop,
    title: "E-learning",
    description: "Modules digitaux accessibles 24/7, à votre rythme et selon vos disponibilités.",
    color: "bg-purple-500",
  },
  {
    icon: Smartphone,
    title: "Blended Learning",
    description: "Un parcours combinant présentiel, digital et accompagnement personnalisé.",
    color: "bg-amber-500",
  },
];

export default function Formats() {
  return (
    <section className="py-16 md:py-24 bg-cegos-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cegos-dark mb-4">
            Des formats adaptés à vos besoins
          </h2>
          <p className="text-cegos-gray text-lg max-w-2xl mx-auto">
            Choisissez le format de formation qui correspond le mieux à vos contraintes et objectifs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map((format, index) => {
            const Icon = format.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-cegos-border hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${format.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-cegos-dark mb-3">{format.title}</h3>
                <p className="text-cegos-gray text-sm leading-relaxed">{format.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
