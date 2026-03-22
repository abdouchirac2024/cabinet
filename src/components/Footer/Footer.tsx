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
    <footer style={{ backgroundColor: '#1D0000', color: 'white' }}>

      {/* Newsletter */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%', padding: '3rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>
                Restez informé
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', maxWidth: '400px' }}>
                Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres de formation
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flex: '1', maxWidth: '480px', minWidth: '280px' }}>
              <input
                type="email"
                placeholder="Votre adresse email"
                style={{
                  flex: 1,
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#e6233a'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              />
              <button
                style={{
                  backgroundColor: '#e6233a',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c0182d'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#e6233a'; }}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Liens */}
      <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1200px', width: '100%', padding: '3rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem', color: 'white' }}>
                  {section.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#e6233a'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
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
      </div>

      {/* Contact + Réseaux sociaux */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%', padding: '1.75rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                { icon: Phone, label: '01 55 00 12 10', href: 'tel:+33155001210' },
                { icon: Mail, label: 'contact@cegos.fr', href: 'mailto:contact@cegos.fr' },
                { icon: MapPin, label: 'Paris, France', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#e6233a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  style={{ width: '2.25rem', height: '2.25rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', textDecoration: 'none', color: 'white' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e6233a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1200px', width: '100%', padding: '1.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '2rem', height: '2rem', backgroundColor: '#e6233a', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>C</span>
              </div>
              <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>© 2026 Cegos. Tous droits réservés.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              {['Mentions légales', 'Politique de confidentialité', 'Conditions générales', 'Cookies', 'Plan du site'].map((item) => (
                <a key={item} href="#"
                  style={{ color: '#6b7280', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#e6233a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280'; }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
