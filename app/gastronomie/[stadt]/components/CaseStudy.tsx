import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

export default function CaseStudy({ city }: Props) {
  const { caseStudy, name } = city;

  return (
    <section
      id="case-study"
      className="section-pad"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Fallstudie aus {name}
          </div>
          <h2 className="section-heading section-heading-center">
            Wie {caseStudy.restaurant} mit KI den Turnaround schaffte
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "stretch",
          }}
          className="case-study-grid"
        >
          {/* Left: Story */}
          <div
            style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              padding: "44px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "10px",
                }}
              >
                Die Herausforderung
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-gray)", lineHeight: 1.7 }}>
                {caseStudy.challenge}
              </p>
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "var(--border-subtle)",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "10px",
                }}
              >
                Unsere Lösung
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-gray)", lineHeight: 1.7 }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Right: Results */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {[caseStudy.result1, caseStudy.result2, caseStudy.result3].map((result, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--accent-dim)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {i === 0 ? "📈" : i === 1 ? "💡" : "🏆"}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--accent)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {result}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--text-gray)", marginTop: "2px" }}>
                    Messbare Verbesserung
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .case-study-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
