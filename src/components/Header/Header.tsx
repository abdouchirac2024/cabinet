import { useState } from 'react';
import { Search, Menu, X, ChevronRight, User, Phone, Mail, ShoppingCart } from 'lucide-react';

const formationDomains = {
  col1: [
    "Achats", "Assistant(e)", "Banque", "Bureautique - PAO/CAO", "Changement",
    "Coaching - Accompagnement", "Commercial - Vente", "Communication",
    "Comptabilité - Fiscalité", "Contrôle de gestion", "Création d'entreprise",
    "Développement personnel", "Digital",
  ],
  col2: [
    "Direction de l'entreprise", "Droit des affaires", "Droit social",
    "Efficacité professionnelle", "Finance - Trésorerie", "Formation de formateurs",
    "Gestion du temps", "Immo & Services généraux", "Informatique - SI",
    "Innovation - Créativité", "IA - Intelligence Artificielle", "International",
    "Logistique - Supply chain",
  ],
  col3: [
    "Management", "Marketing", "Organisation - Audit", "Paie/Admin. du personnel",
    "Production - Lean", "Projet", "Qualité-Santé-Sécurité-Env", "QVCT",
    "Relation client", "Ressources Humaines", "RSE - Développement durable",
    "Secteur public", "Soft skills",
  ],
  col4: [
    { label: "Cycles certifiants", highlight: false },
    { label: "Formations Adaptive Learning", highlight: false },
    { label: "Formations à distance", highlight: false },
    { label: "Formations Best", highlight: false },
    { label: "Formations éligibles CPF", highlight: false },
    { label: "Formations en anglais", highlight: false },
    { label: "Formations obligatoires", highlight: false },
    { label: "Formations PME", highlight: false },
    { label: "Mastères spécialisés", highlight: false },
    { label: "▶ Nouveautés 2026", highlight: true },
  ],
};

const navItems = [
  { label: "Domaines de formation", href: "/formations", hasMegaMenu: true },
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Vous êtes", href: "/vous-etes", hasDropdown: true },
  { label: "CPF | Financements", href: "/cpf", hasDropdown: true },
  { label: "Ressources", href: "/ressources", hasDropdown: true },
  { label: "Le Mag", href: "/mag", isMag: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* ====== Promo banner ====== */}
      {promoVisible && (
        <div className="relative bg-gradient-to-r from-[#6b0f3a] via-[#8b1a4a] to-[#c2185b] overflow-hidden">
          {/* Decorative curves */}
          <svg className="absolute right-32 top-0 h-full w-72 opacity-20" viewBox="0 0 300 70" preserveAspectRatio="none">
            <path d="M50,0 C120,20 100,50 50,70" stroke="white" strokeWidth="3" fill="none" />
            <path d="M100,0 C170,25 150,45 100,70" stroke="white" strokeWidth="2" fill="none" />
            <path d="M150,0 C220,30 180,40 130,70" stroke="white" strokeWidth="2" fill="none" />
          </svg>
          <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex items-center justify-center text-white text-sm gap-1">
            <span>Profitez de</span>
            <span className="text-orange-300 font-extrabold text-xl mx-1">20% de remise</span>
            <span>sur votre 1<sup className="text-[9px]">ère</sup> formation*</span>
            <a
              href="#"
              className="ml-5 border border-white text-white px-5 py-1.5 rounded-full text-xs font-semibold hover:bg-white hover:text-[#8b1a4a] transition-colors"
            >
              J'en profite
            </a>
          </div>
          <button
            onClick={() => setPromoVisible(false)}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* ====== Main header row ====== */}
      <div className="border-b border-cegos-border">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[80px] gap-6">
          {/* Logo + tagline */}
          <a href="/" className="flex items-center gap-4 flex-shrink-0">
            {/* Cegos logo SVG */}
            <svg width="150" height="65" viewBox="0 0 300 130" className="flex-shrink-0">
              <g fill="#1D0000">
                {/* Stylized symbol above - loops like "io" */}
                <path d="M45,35 C45,15 25,5 15,20 C5,35 20,45 30,40" stroke="#1D0000" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M30,40 C40,35 55,25 50,15 C45,5 30,10 35,25" stroke="#1D0000" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <circle cx="42" cy="8" r="3" fill="#1D0000"/>
                {/* "cegos" text */}
                <text x="10" y="100" fontFamily="'Raleway', sans-serif" fontSize="62" fontWeight="800" letterSpacing="-2" fill="#1D0000">cegos</text>
              </g>
            </svg>
            {/* Separator + tagline */}
            <div className="hidden md:flex items-center gap-4">
              <div className="w-px h-12 bg-cegos-border"></div>
              <div className="text-[12px] text-cegos-dark leading-[1.4]">
                <div className="font-bold">Leader international</div>
                <div>de la formation</div>
                <div>professionnelle</div>
                <div>et continue</div>
              </div>
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
          <div className="hidden md:flex items-center gap-6 text-sm flex-shrink-0">
            <a href="tel:+33155009595" className="flex items-center gap-2 text-cegos-dark hover:text-cegos-red transition-colors">
              <Phone size={16} />
              <span className="font-medium">01 55 00 95 95</span>
            </a>
            <a href="/contact" className="flex items-center gap-2 text-cegos-dark hover:text-cegos-red transition-colors">
              <Mail size={16} />
              <span className="font-medium">Nous contacter</span>
            </a>
            <a href="/espace-client" className="flex items-center gap-2 text-cegos-dark hover:text-cegos-red transition-colors">
              <User size={16} />
              <span className="font-medium">Espace client</span>
            </a>
            <a href="/panier" className="relative text-cegos-dark hover:text-cegos-red transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2.5 bg-cegos-red text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                0
              </span>
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
                        <div className="space-y-2.5">
                          {formationDomains.col1.map((d) => (
                            <a key={d} href="#" className="block text-[13px] text-gray-300 hover:text-white hover:translate-x-1 transition-all">{d}</a>
                          ))}
                        </div>
                        <div className="space-y-2.5">
                          {formationDomains.col2.map((d) => (
                            <a key={d} href="#" className="block text-[13px] text-gray-300 hover:text-white hover:translate-x-1 transition-all">{d}</a>
                          ))}
                        </div>
                        <div className="space-y-2.5">
                          {formationDomains.col3.map((d) => (
                            <a key={d} href="#" className="block text-[13px] text-gray-300 hover:text-white hover:translate-x-1 transition-all">{d}</a>
                          ))}
                        </div>
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
            <a href="tel:+33155009595" className="flex flex-col items-center gap-1"><Phone size={16} /><span>Appeler</span></a>
            <a href="/contact" className="flex flex-col items-center gap-1"><Mail size={16} /><span>Contact</span></a>
            <a href="/espace-client" className="flex flex-col items-center gap-1"><User size={16} /><span>Espace client</span></a>
            <a href="/panier" className="flex flex-col items-center gap-1"><ShoppingCart size={16} /><span>Panier</span></a>
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
