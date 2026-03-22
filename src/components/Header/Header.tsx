import { useState } from 'react';
import { Search, Menu, X, ChevronRight, User, Phone, Mail } from 'lucide-react';

const formationDomains = {
  col1: [
    "Droit des affaires", "Droit du travail", "Droit pénal des affaires",
    "Droit immobilier", "Droit de la propriété intellectuelle",
    "Droit des contrats", "Droit bancaire",
  ],
  col2: [
    "Compliance & RGPD", "Fiscalité des entreprises", "Droit social",
    "Ressources Humaines", "Management juridique",
    "Communication juridique", "Legaltech & IA juridique",
  ],
  col3: [
    "Formation des avocats", "Formation des juristes d'entreprise",
    "Développement personnel", "Leadership & Management",
    "Prise de parole", "Négociation juridique",
    "Médiation & Arbitrage",
  ],
  col4: [
    { label: "Cycles certifiants", highlight: false },
    { label: "Formations CPF éligibles", highlight: false },
    { label: "Formations à distance", highlight: false },
    { label: "Formations intra-entreprise", highlight: false },
    { label: "Formations sur-mesure", highlight: false },
    { label: "▶ Nouveautés 2026", highlight: true },
  ],
};

const navItems = [
  { label: "Nos formations", href: "/formations", hasMegaMenu: true },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "À propos", href: "/a-propos", hasDropdown: false },
  { label: "Blog / Ressources", href: "/blog", hasDropdown: false },
  { label: "Témoignages", href: "/temoignages", hasDropdown: false },
  { label: "Contact", href: "/contact", isMag: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ====== Promo banner ====== */}
      {promoVisible && (
        <div style={{ position: 'relative', background: 'linear-gradient(90deg, #0f2044 0%, #1a3a6e 50%, #0f2044 100%)', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.875rem', gap: '0.25rem' }}>
            <span>Bénéficiez de</span>
            <span style={{ color: '#c9921a', fontWeight: 800, fontSize: '1.1rem', margin: '0 0.25rem' }}>10% de remise</span>
            <span>sur votre 1<sup style={{ fontSize: '9px' }}>ère</sup> formation*</span>
            <a href="#" style={{ marginLeft: '1.25rem', border: '1px solid white', color: 'white', padding: '0.35rem 1.25rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
              J'en profite
            </a>
          </div>
          <button onClick={() => setPromoVisible(false)} style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>
      )}

      {/* ====== Main header row ====== */}
      <div className="border-b border-cegos-border">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[80px] gap-6">
          {/* Logo + nom */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', flexShrink: 0 }}>
            {/* Logo FCT */}
            <div style={{ width: '48px', height: '48px', backgroundColor: '#0f2044', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#c9921a', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-1px' }}>FCT</span>
            </div>
            <div className="hidden md:block">
              <div style={{ fontWeight: 800, fontSize: '1rem', color: '#0f2044', lineHeight: 1.2 }}>Fotso Consulting</div>
              <div style={{ fontWeight: 600, fontSize: '0.8rem', color: '#c9921a', lineHeight: 1.2 }}>and Training</div>
            </div>
          </a>

          {/* Search bar */}
          <div className="hidden lg:flex items-center gap-2">
            <input
              type="text"
              placeholder="Rechercher une formation"
              className="w-[230px] px-4 py-2.5 border-2 border-cegos-dark/20 rounded-md text-sm focus:outline-none focus:border-cegos-dark transition-colors"
            />
            <button className="w-11 h-11 bg-cegos-dark text-white rounded-full flex items-center justify-center hover:bg-cegos-red transition-colors flex-shrink-0 shadow-md">
              <Search size={18} />
            </button>
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-5 text-sm flex-shrink-0">
            <a href="tel:+237600000000" className="flex items-center gap-2 text-cegos-dark hover:text-cegos-red transition-colors">
              <Phone size={16} />
              <span className="font-medium">+237 6 00 00 00 00</span>
            </a>
            <a href="/contact" className="flex items-center gap-2 text-cegos-dark hover:text-cegos-red transition-colors">
              <Mail size={16} />
              <span className="font-medium">Nous contacter</span>
            </a>
            <a href="/espace-client" className="flex items-center gap-2 text-cegos-dark hover:text-cegos-red transition-colors">
              <User size={16} />
              <span className="font-medium">Espace client</span>
            </a>
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ====== Navigation bar ====== */}
      <nav className="hidden lg:block border-b border-cegos-border bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-end gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setMegaMenuOpen(true)}
                onMouseLeave={() => item.hasMegaMenu && setMegaMenuOpen(false)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors whitespace-nowrap ${
                    item.isMag
                      ? 'bg-cegos-dark text-white rounded-full px-7 py-2.5 text-[14px] font-bold hover:bg-cegos-red border-2 border-cegos-dark hover:border-cegos-red shadow-sm'
                      : 'text-cegos-dark hover:text-cegos-red py-4 underline-offset-4 hover:underline'
                  }`}
                >
                  {item.label}
                  {(item.hasDropdown || item.hasMegaMenu) && <ChevronRight size={14} className="mt-0.5" />}
                </a>

                {/* Mega menu */}
                {item.hasMegaMenu && megaMenuOpen && (
                  <div
                    className="fixed left-0 right-0 bg-cegos-dark text-white shadow-2xl z-50"
                    style={{ top: 'auto' }}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <div className="max-w-[1280px] mx-auto px-10 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {[formationDomains.col1, formationDomains.col2, formationDomains.col3].map((col, i) => (
                          <div key={i} className="space-y-2.5">
                            {col.map((d) => (
                              <a key={d} href="#" className="block text-[13px] text-gray-300 hover:text-white hover:translate-x-1 transition-all">{d}</a>
                            ))}
                          </div>
                        ))}
                        <div className="space-y-2.5">
                          {formationDomains.col4.map((d) => (
                            <a key={d.label} href="#" className={`block text-[13px] transition-all hover:translate-x-1 ${d.highlight ? 'text-cegos-red font-semibold' : 'text-gray-300 hover:text-white'}`}>{d.label}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* ====== Mobile menu ====== */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cegos-border max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 border-b border-cegos-border">
            <div className="flex items-center border border-cegos-border rounded-md">
              <input type="text" placeholder="Rechercher une formation" className="flex-1 px-4 py-2.5 text-sm outline-none" />
              <button className="px-3 py-2.5 bg-cegos-dark text-white rounded-r-md"><Search size={18} /></button>
            </div>
          </div>
          <div className="flex items-center justify-around py-3 border-b border-cegos-border text-xs text-cegos-dark">
            <a href="tel:+237600000000" className="flex flex-col items-center gap-1"><Phone size={16} /><span>Appeler</span></a>
            <a href="/contact" className="flex flex-col items-center gap-1"><Mail size={16} /><span>Contact</span></a>
            <a href="/espace-client" className="flex flex-col items-center gap-1"><User size={16} /><span>Mon espace</span></a>
          </div>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={`block px-4 py-3.5 text-sm font-medium border-b border-cegos-border ${item.isMag ? 'bg-cegos-dark text-white' : 'text-cegos-dark hover:bg-cegos-light'}`}>
              <span className="flex items-center justify-between">
                {item.label}
                {(item.hasDropdown || item.hasMegaMenu) && <ChevronRight size={16} />}
              </span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
