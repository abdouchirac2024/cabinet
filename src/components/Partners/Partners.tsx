const partners = [
  "Renault", "BNP Paribas", "L'Oréal", "SNCF", "Orange",
  "Total", "Airbus", "Danone", "Michelin", "Schneider Electric",
];

export default function Partners() {
  return (
    <section className="py-12 bg-white border-y border-cegos-border">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-cegos-gray text-sm mb-8 font-medium uppercase tracking-wider">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-cegos-gray/40 font-bold text-xl md:text-2xl hover:text-cegos-dark transition-colors cursor-default tracking-tight"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
