import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const features = [
  {
    icon: "🤖",
    title: "KI-Reservierungsmanagement",
    desc: "Automatische Tischoptimierung, No-Show-Prognosen und personalisierte Gästekommunikation — rund um die Uhr.",
    highlight: "bis zu 65 % weniger No-Shows",
  },
  {
    icon: "📦",
    title: "Intelligente Einkaufsplanung",
    desc: "KI berechnet den exakten Warenbedarf auf Basis von Buchungen, Wetter und Events — und sendet automatische Bestellungen.",
    highlight: "bis zu 34 % weniger Lebensmittelabfall",
  },
  {
    icon: "👥",
    title: "KI-Personalplanung",
    desc: "Umsatzprognose-gekoppelte Schichtplanung eliminiert Über- und Unterbesetzung — mit fairer Mitarbeiterrotation.",
    highlight: "bis zu 22 % Personalkostensenkung",
  },
  {
    icon: "💬",
    title: "KI-Gäste-Assistent",
    desc: "Mehrsprachiger Chatbot für Reservierungen, Speisekarten-Fragen und Allergenkommunikation — 24/7 ohne Personalaufwand.",
    highlight: "24/7 verfügbar, 30+ Sprachen",
  },
  {
    icon: "📊",
    title: "Echtzeit-Analytics",
    desc: "Live-Dashboards für Umsatz, Foodcost, Tischdurchsatz und Gästebewertungen — mit KI-gestützten Handlungsempfehlungen.",
    highlight: "datengesteuerte Entscheidungen",
  },
  {
    icon: "⚡",
    title: "Dynamische Preisgestaltung",
    desc: "KI-Revenue-Management passt Preise in Echtzeit an Auslastung, Wettbewerb und Nachfrage an — wie in der Hotellerie.",
    highlight: "bis zu 18 % mehr Umsatz pro Tisch",
  },
];

export default function FeatureGrid({ city }: Props) {
  return (
    <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Unsere KI-Lösungen für {city.name}
          </div>
          <h2 className="section-heading section-heading-center">
            KI-Tools, die Ihre Gastronomie in {city.name} transformieren
          </h2>
          <p className="section-sub section-sub-center">
            Maßgeschneiderte KI-Lösungen für die spezifischen Anforderungen des {city.name}er
            Gastronomiemarkts.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-card)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.3s ease",
              }}
            >
              <div style={{ fontSize: "36px" }}>{f.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-gray)", lineHeight: 1.65, flex: 1 }}>
                {f.desc}
              </p>
              <div
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  alignSelf: "flex-start",
                }}
              >
                {f.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
