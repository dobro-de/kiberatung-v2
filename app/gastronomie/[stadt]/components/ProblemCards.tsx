import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const problems = [
  {
    icon: "⚠️",
    title: "Steigende Personalkosten",
    desc: "Fachkräftemangel und Mindestlohnsteigerungen fressen Margen. Manuelle Prozesse vervielfachen den Aufwand — KI automatisiert, wo Routinetätigkeiten dominieren.",
  },
  {
    icon: "📉",
    title: "Lebensmittelverschwendung",
    desc: "Fehlkalkulationen beim Einkauf führen zu bis zu 15 % Abfall. KI-Prognosemodelle berechnen den exakten Bedarf auf Basis von Reservierungen und historischen Daten.",
  },
  {
    icon: "🔄",
    title: "Ineffiziente Abläufe",
    desc: "Bestellprozesse, Tischmanagement und Kommunikation zwischen Küche und Service kosten täglich wertvolle Zeit. KI-Automatisierung schafft nahtlose Workflows.",
  },
  {
    icon: "📊",
    title: "Fehlende Datengrundlage",
    desc: "Ohne Echtzeit-Analytics bleiben Entscheidungen Bauchgefühl. KI-Dashboards liefern sofort actionable Insights zu Umsatz, Foodcost und Gästezufriedenheit.",
  },
  {
    icon: "🗓️",
    title: "Unplanbare Schwankungen",
    desc: "Saisonale Peaks, Events und Schlechtwettertage überraschen immer wieder. KI-Prognosen geben bis zu 8 Wochen im Voraus Planungssicherheit.",
  },
  {
    icon: "⭐",
    title: "Sinkende Gästebindung",
    desc: "Ohne personalisierte Kundenkommunikation verlieren Restaurants Stammgäste an die Konkurrenz. KI-Loyalty-Systeme halten Gäste nachhaltig gebunden.",
  },
];

export default function ProblemCards({ city }: Props) {
  return (
    <section className="problem-section">
      <div className="container">
        <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Die größten Herausforderungen</div>
          <h2 className="section-heading">
            Was Gastronomen in {city.name} heute wirklich bremst
          </h2>
          <p className="section-sub">
            Wir kennen die typischen Pain Points der {city.name}er Gastronomie — und haben für jeden
            eine KI-gestützte Antwort.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <div key={i} className="problem-card">
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{p.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  marginBottom: "10px",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-gray)", lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
