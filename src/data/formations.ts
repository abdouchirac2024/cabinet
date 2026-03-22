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
  { id: 1, name: "Management & Leadership", icon: "👥", count: 120, slug: "management-et-leadership" },
  { id: 2, name: "Commercial & Ventes", icon: "📈", count: 85, slug: "commercial-ventes" },
  { id: 3, name: "Ressources Humaines", icon: "🤝", count: 95, slug: "ressources-humaines" },
  { id: 4, name: "Comptabilité & Finance", icon: "💰", count: 70, slug: "comptabilite-finance" },
  { id: 5, name: "Marketing Digital", icon: "📱", count: 60, slug: "marketing-digital" },
  { id: 6, name: "Développement Personnel", icon: "🎯", count: 110, slug: "developpement-personnel" },
  { id: 7, name: "Gestion de Projet", icon: "📋", count: 55, slug: "gestion-de-projet" },
  { id: 8, name: "Digital & IT", icon: "💻", count: 80, slug: "digital" },
  { id: 9, name: "Droit & Juridique", icon: "⚖️", count: 45, slug: "droit-juridique" },
  { id: 10, name: "Qualité, Sécurité, Environnement", icon: "🛡️", count: 50, slug: "qualite-securite-environnement" },
  { id: 11, name: "Communication", icon: "💬", count: 65, slug: "communication" },
  { id: 12, name: "Direction d'Entreprise", icon: "🏢", count: 40, slug: "direction-entreprise" },
];

export const formations: Formation[] = [
  {
    id: 1,
    title: "Les fondamentaux du management",
    category: "Management & Leadership",
    duration: "3 jours",
    format: "Présentiel / À distance",
    rating: 4.7,
    reviews: 342,
    price: "1 990 €",
    isBestseller: true,
  },
  {
    id: 2,
    title: "Manager une équipe pour la première fois",
    category: "Management & Leadership",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.8,
    reviews: 256,
    price: "1 490 €",
    badge: "CPF",
  },
  {
    id: 3,
    title: "Techniques de vente - Niveau 1",
    category: "Commercial & Ventes",
    duration: "3 jours",
    format: "Présentiel",
    rating: 4.6,
    reviews: 189,
    price: "1 890 €",
    isBestseller: true,
  },
  {
    id: 4,
    title: "Gestion du stress et des émotions",
    category: "Développement Personnel",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.9,
    reviews: 412,
    price: "1 390 €",
  },
  {
    id: 5,
    title: "Excel - Perfectionnement",
    category: "Digital & IT",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.5,
    reviews: 567,
    price: "990 €",
    badge: "CPF",
  },
  {
    id: 6,
    title: "Conduire et piloter un projet",
    category: "Gestion de Projet",
    duration: "4 jours",
    format: "Présentiel",
    rating: 4.7,
    reviews: 298,
    price: "2 490 €",
    badge: "CPF",
    isNew: true,
  },
  {
    id: 7,
    title: "Marketing digital : les fondamentaux",
    category: "Marketing Digital",
    duration: "2 jours",
    format: "Présentiel / À distance",
    rating: 4.6,
    reviews: 178,
    price: "1 490 €",
    isNew: true,
  },
  {
    id: 8,
    title: "Paie : les fondamentaux",
    category: "Ressources Humaines",
    duration: "3 jours",
    format: "Présentiel",
    rating: 4.8,
    reviews: 234,
    price: "1 990 €",
    badge: "CPF",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Directrice RH",
    company: "Groupe Renault",
    text: "Cegos nous accompagne depuis plus de 10 ans dans la formation de nos collaborateurs. La qualité pédagogique et l'expertise des formateurs sont remarquables.",
    avatar: "MD",
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Responsable Formation",
    company: "BNP Paribas",
    text: "Les formations Cegos ont permis à nos équipes de monter en compétences rapidement. Le format blended learning est particulièrement adapté à nos contraintes.",
    avatar: "PM",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    role: "DRH",
    company: "L'Oréal",
    text: "Un partenaire de confiance pour nos projets de transformation. Les solutions sur-mesure proposées par Cegos répondent parfaitement à nos besoins.",
    avatar: "SB",
  },
];

export const stats = [
  { value: "250 000", label: "personnes formées par an" },
  { value: "1 200", label: "formations disponibles" },
  { value: "98%", label: "de taux de satisfaction" },
  { value: "50+", label: "années d'expertise" },
];
