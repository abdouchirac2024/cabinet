import { Award, Users, Globe, Laptop, BookOpen, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Plus de 50 ans d'expérience dans la formation professionnelle, avec des formateurs experts dans leur domaine.",
  },
  {
    icon: Users,
    title: "Approche personnalisée",
    description: "Des parcours adaptés à vos besoins spécifiques, en format inter ou intra-entreprise.",
  },
  {
    icon: Globe,
    title: "Présence internationale",
    description: "Présent dans plus de 50 pays, nous accompagnons vos projets de formation à l'international.",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description: "Des solutions de formation digitales innovantes : e-learning, classes virtuelles, blended learning.",
  },
  {
    icon: BookOpen,
    title: "Certifications",
    description: "Des formations certifiantes et éligibles au CPF pour valoriser vos compétences.",
  },
  {
    icon: HeadphonesIcon,
    title: "Accompagnement",
    description: "Un conseiller dédié vous accompagne dans la construction de votre plan de formation.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cegos-dark mb-4">
            Pourquoi choisir Cegos ?
          </h2>
          <p className="text-cegos-gray text-lg max-w-2xl mx-auto">
            Un partenaire de confiance pour le développement des compétences de vos collaborateurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-cegos-border hover:border-cegos-red/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cegos-red/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-cegos-red group-hover:scale-110 transition-all duration-300">
                  <Icon size={24} className="text-cegos-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-cegos-dark mb-3">{reason.title}</h3>
                <p className="text-cegos-gray text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
