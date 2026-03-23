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
  { label: "À propos", href: "/a-propos" },
  { label: "Blog / Ressources", href: "/blog" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Contact", href: "/contact", isMag: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      {/* ── Promo banner ── */}
      {promoVisible && (
        <div className="relative overflow-hidden" style={{ background: 'linear-gradient(90deg,#162354,#1e3a7a,#162354)' }}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-10 py-2.5 text-white text-sm text-center">
            <span>Bénéficiez de</span>
            <span className="font-extrabold text-base" style={{ color: '#b8861e' }}>10% de remise</span>
            <span>sur votre 1<sup className="text-[9px]">ère</sup> formation*</span>
            <a href="#" className="ml-2 border border-white/60 hover:bg-white/20 px-4 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap">
              J'en profite
            </a>
          </div>
          <button onClick={() => setPromoVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
            <X size={18} />
          </button>
        </div>
      )}

      {/* ── Main header ── */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4" style={{ minHeight: '80px' }}>

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/logo/logo.jpeg"
              alt="Fotso Consulting and Training"
              className="h-14 sm:h-16 md:h-[72px] w-auto object-contain"
            />
          </a>

          {/* Search — desktop */}
          <div className="hidden lg:flex flex-1 max-w-sm items-center gap-2">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une formation…"
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:border-[#162354] transition-all"
              />
            </div>
            <button className="px-4 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#162354' }}>
              Chercher
            </button>
          </div>

          {/* Right actions — desktop */}
          <div className="hidden md:flex items-center gap-5 text-sm flex-shrink-0">
            <a href="tel:+237600000000" className="flex items-center gap-1.5 font-medium transition-colors hover:opacity-80" style={{ color: '#162354' }}>
              <Phone size={15} />
              <span className="hidden lg:inline">+237 6 00 00 00 00</span>
            </a>
            <a href="/contact" className="flex items-center gap-1.5 font-medium transition-colors hover:opacity-80" style={{ color: '#162354' }}>
              <Mail size={15} />
              <span className="hidden lg:inline">Contact</span>
            </a>
            <a href="/espace-client" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-bold transition-all hover:opacity-90" style={{ backgroundColor: '#b8861e' }}>
              <User size={14} />
              Espace client
            </a>
          </div>

          {/* Burger */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} className="text-[#162354]" /> : <Menu size={26} className="text-[#162354]" />}
          </button>
        </div>
      </div>

      {/* ── Desktop nav ── */}
      <nav className="hidden lg:block border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-end gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasMegaMenu && setMegaMenuOpen(true)}
              onMouseLeave={() => item.hasMegaMenu && setMegaMenuOpen(false)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 text-[14px] font-semibold whitespace-nowrap transition-all ${
                  item.isMag
                    ? 'ml-2 text-white px-6 py-2 rounded-full text-[13px]'
                    : 'text-[#162354] hover:text-[#b8861e] py-4 px-3 border-b-2 border-transparent hover:border-[#b8861e]'
                }`}
                style={item.isMag ? { backgroundColor: '#162354' } : {}}
                onMouseEnter={(e) => { if (item.isMag) e.currentTarget.style.backgroundColor = '#b8861e'; }}
                onMouseLeave={(e) => { if (item.isMag) e.currentTarget.style.backgroundColor = '#162354'; }}
              >
                {item.label}
                {(item.hasDropdown || item.hasMegaMenu) && <ChevronRight size={13} />}
              </a>

              {/* Mega menu */}
              {item.hasMegaMenu && megaMenuOpen && (
                <div
                  className="fixed left-0 right-0 text-white shadow-2xl z-50"
                  style={{ top: 'auto', backgroundColor: '#162354' }}
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <div className="max-w-[1280px] mx-auto px-10 py-8 grid grid-cols-4 gap-8">
                    {[formationDomains.col1, formationDomains.col2, formationDomains.col3].map((col, i) => (
                      <div key={i} className="space-y-2.5">
                        {col.map((d) => (
                          <a key={d} href="#" className="block text-[13px] text-gray-300 hover:text-white hover:translate-x-1 transition-all">{d}</a>
                        ))}
                      </div>
                    ))}
                    <div className="space-y-2.5">
                      {formationDomains.col4.map((d) => (
                        <a key={d.label} href="#" className={`block text-[13px] hover:translate-x-1 transition-all ${d.highlight ? 'font-semibold' : 'text-gray-300 hover:text-white'}`} style={d.highlight ? { color: '#b8861e' } : {}}>{d.label}</a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 overflow-y-auto" style={{ maxHeight: '85vh' }}>
          {/* Search mobile */}
          <div className="px-4 py-4 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 shadow-sm">
              <Search size={18} className="text-gray-400 flex-shrink-0" />
              <input type="text" placeholder="Rechercher une formation…" className="flex-1 text-sm outline-none text-[#162354]" />
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-3 border-b border-gray-100">
            {[
              { icon: Phone, label: 'Appeler', href: 'tel:+237600000000', color: '#162354' },
              { icon: Mail, label: 'Contact', href: '/contact', color: '#162354' },
              { icon: User, label: 'Mon espace', href: '/espace-client', color: '#b8861e' },
            ].map(({ icon: Icon, label, href, color }) => (
              <a key={label} href={href} className="flex flex-col items-center gap-2 py-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: color }}>
                  <Icon size={18} />
                </div>
                <span className="text-xs font-semibold text-gray-600">{label}</span>
              </a>
            ))}
          </div>

          {/* Nav items */}
          <div className="py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-5 py-4 text-[15px] font-semibold border-b border-gray-50 transition-colors"
                style={item.isMag
                  ? { backgroundColor: '#162354', color: 'white', margin: '1rem', borderRadius: '0.75rem', border: 'none' }
                  : { color: '#162354' }}
                onMouseEnter={(e) => { if (!item.isMag) e.currentTarget.style.backgroundColor = '#f5f7fa'; }}
                onMouseLeave={(e) => { if (!item.isMag) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                {item.label}
                {(item.hasDropdown || item.hasMegaMenu) && <ChevronRight size={17} className="opacity-40" />}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
