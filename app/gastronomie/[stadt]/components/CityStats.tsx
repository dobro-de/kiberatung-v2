import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CityStats({ city }: Props) {
  const { stats, name } = city;
  const items = [
    { value: stats.betriebe, label: stats.label1, icon: "🍽️" },
    { value: stats.mitarbeiter, label: stats.label2, icon: "👥" },
    { value: stats.markttrend, label: stats.label3, icon: "📈" },
  ];

  return (
    <section
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding: "80px 24px",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Gastronomie in {name}
          </div>
          <h2 className="section-heading section-heading-center">
            Der Markt in {name} — Zahlen &amp; Fakten
          </h2>
          <p className="section-sub section-sub-center">
            Verstehen Sie das Marktumfeld, in dem KI-Lösungen den größten Hebel entfalten.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bento-card"
              style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
                padding: "40px 32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{item.icon}</div>
              <div
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {item.value}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-gray)",
                  lineHeight: 1.5,
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
