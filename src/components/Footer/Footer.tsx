import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  formations: {
    title: "Nos formations",
    links: [
      "Management & Leadership",
      "Commercial & Ventes",
      "Ressources Humaines",
      "Comptabilité & Finance",
      "Marketing Digital",
      "Développement Personnel",
      "Gestion de Projet",
      "Digital & IT",
    ],
  },
  solutions: {
    title: "Nos solutions",
    links: [
      "Formation sur-mesure",
      "Digital Learning",
      "Blended Learning",
      "Formation à l'international",
      "Conseil en formation",
      "Externalisation de la formation",
    ],
  },
  cegos: {
    title: "Cegos",
    links: [
      "Qui sommes-nous",
      "Nos références clients",
      "Nos experts",
      "Rejoignez-nous",
      "Espace presse",
      "RSE",
    ],
  },
  services: {
    title: "Services",
    links: [
      "Espace client",
      "Financer sa formation",
      "CPF",
      "Calendrier des formations",
      "Catalogue PDF",
      "Accessibilité",
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-cegos-dark text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
              <p className="text-gray-400">
                Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres de formation
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 lg:w-80 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cegos-red"
              />
              <button className="bg-cegos-red text-white px-6 py-3 rounded-full font-semibold hover:bg-cegos-red-hover transition-colors text-sm whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-sm mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-cegos-red transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact + Social */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <a href="tel:+33155001210" className="flex items-center gap-2 hover:text-cegos-red transition-colors">
                <Phone size={16} />
                01 55 00 12 10
              </a>
              <a href="mailto:contact@cegos.fr" className="flex items-center gap-2 hover:text-cegos-red transition-colors">
                <Mail size={16} />
                contact@cegos.fr
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Paris, France
              </span>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cegos-red transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cegos-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span>© 2026 Cegos. Tous droits réservés.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="hover:text-cegos-red transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-cegos-red transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-cegos-red transition-colors">Conditions générales</a>
              <a href="#" className="hover:text-cegos-red transition-colors">Cookies</a>
              <a href="#" className="hover:text-cegos-red transition-colors">Plan du site</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
