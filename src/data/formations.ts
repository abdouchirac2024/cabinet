export interface Formation {
  id: number;
  title: string;
  category: string;
  duration: string;
  format: string;
  rating: number;
  reviews: number;
  price: string;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export const categories: Category[] = [
  { id: 1, name: "Droit des affaires", icon: "Scale", count: 40, slug: "droit-des-affaires" },
  { id: 2, name: "Droit du travail", icon: "ClipboardList", count: 35, slug: "droit-du-travail" },
  { id: 3, name: "Ressources Humaines", icon: "Handshake", count: 30, slug: "ressources-humaines" },
  { id: 4, name: "Management & Leadership", icon: "Users", count: 25, slug: "management-leadership" },
  { id: 5, name: "Droit pénal des affaires", icon: "Landmark", count: 20, slug: "droit-penal-affaires" },
  { id: 6, name: "Fiscalité & Finance", icon: "Coins", count: 28, slug: "fiscalite-finance" },
  { id: 7, name: "Compliance & RGPD", icon: "ShieldCheck", count: 22, slug: "compliance-rgpd" },
  { id: 8, name: "Droit immobilier", icon: "Building2", count: 18, slug: "droit-immobilier" },
  { id: 9, name: "Communication juridique", icon: "MessageSquare", count: 15, slug: "communication-juridique" },
  { id: 10, name: "Formation des avocats", icon: "GraduationCap", count: 20, slug: "formation-avocats" },
  { id: 11, name: "Développement Personnel", icon: "Target", count: 15, slug: "developpement-personnel" },
  { id: 12, name: "Digital & Legaltech", icon: "Laptop", count: 12, slug: "digital-legaltech" },
];

export const formations: Formation[] = [
  {
    id: 1,
    title: "Les fondamentaux du droit des affaires",
    category: "Droit des affaires",
    duration: "3 jours",
    format: "Présentiel / À distance",
    rating: 4.8,
    reviews: 142,
    price: "1 990 €",
    isBestseller: true,
  },
  {
    id: 2,
    title: "Droit du travail pour non-juristes",
    category: "Droit du travail",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.7,
    reviews: 98,
    price: "1 490 €",
    badge: "CPF",
  },
  {
    id: 3,
    title: "Compliance et conformité en entreprise",
    category: "Compliance & RGPD",
    duration: "2 jours",
    format: "Présentiel",
    rating: 4.6,
    reviews: 76,
    price: "1 690 €",
    isBestseller: true,
  },
  {
    id: 4,
    title: "Gestion du stress pour les juristes",
    category: "Développement Personnel",
    duration: "1 jour",
    format: "Présentiel / À distance",
    rating: 4.9,
    reviews: 88,
    price: "890 €",
  },
  {
    id: 5,
    title: "RGPD : mise en conformité pratique",
    category: "Compliance & RGPD",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.7,
    reviews: 112,
    price: "1 290 €",
    badge: "CPF",
  },
  {
    id: 6,
    title: "Fiscalité des entreprises",
    category: "Fiscalité & Finance",
    duration: "3 jours",
    format: "Présentiel",
    rating: 4.8,
    reviews: 94,
    price: "2 090 €",
    badge: "CPF",
    isNew: true,
  },
  {
    id: 7,
    title: "Legaltech et outils numériques du juriste",
    category: "Digital & Legaltech",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.6,
    reviews: 65,
    price: "1 390 €",
    isNew: true,
  },
  {
    id: 8,
    title: "Droit immobilier : fondamentaux",
    category: "Droit immobilier",
    duration: "2 jours",
    format: "Présentiel",
    rating: 4.7,
    reviews: 58,
    price: "1 490 €",
    badge: "CPF",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maître Jean Kamga",
    role: "Avocat associé",
    company: "Cabinet Kamga & Associés",
    text: "Fotso Consulting and Training nous accompagne dans la montée en compétences de nos collaborateurs. La qualité pédagogique et l'expertise des formateurs sont remarquables.",
    avatar: "JK",
  },
  {
    id: 2,
    name: "Nathalie Essomba",
    role: "Directrice Juridique",
    company: "Groupe Afriland",
    text: "Les formations Fotso ont permis à notre équipe juridique de se mettre à jour sur les évolutions réglementaires. Le format à distance est particulièrement adapté à nos contraintes.",
    avatar: "NE",
  },
  {
    id: 3,
    name: "Paul Tchamba",
    role: "DRH",
    company: "Orange Cameroun",
    text: "Un partenaire de confiance pour nos projets de formation. Les solutions sur-mesure proposées répondent parfaitement aux besoins de nos équipes juridiques et RH.",
    avatar: "PT",
  },
];

export const stats = [
  { value: "500+", label: "professionnels formés" },
  { value: "80+", label: "formations disponibles" },
  { value: "97%", label: "de taux de satisfaction" },
  { value: "15+", label: "années d'expertise" },
];
