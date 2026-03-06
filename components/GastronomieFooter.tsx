import Link from "next/link";
import { cities } from "@/app/gastronomie/[stadt]/cityData";
import { VARIANTEN_SLUGS, variantenMap } from "@/app/gastronomie/[stadt]/variantenData";
import { BRANCHEN } from "@/lib/branchen";
import { LOESUNGEN } from "@/lib/loesungen";

export default function GastronomieFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        {/* ── Gastronomie-spezifische Link-Sektion ── */}
        <div className="gastro-footer-section">
          <div className="gastro-footer-col">
            <h4 className="gastro-footer-heading">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              KI Beratung nach Stadt
            </h4>
            <ul className="gastro-footer-links">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/gastronomie/${c.slug}`}>KI Gastronomie {c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="gastro-footer-col">
            <h4 className="gastro-footer-heading">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
              </svg>
              Nach Betriebstyp
            </h4>
            <ul className="gastro-footer-links">
              {VARIANTEN_SLUGS.map((slug) => {
                const v = variantenMap[slug];
                return (
                  <li key={slug}>
                    <Link href={`/gastronomie/${slug}`}>KI für {v.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="gastro-footer-divider" />

        {/* ── Standard Footer ── */}
        <div className="footer-top footer-top-5col">
          <div>
            <div className="footer-brand">KI <span>Beratung</span></div>
            <p className="footer-desc">
              Professionelle KI Beratung für Unternehmen jeder Größe.
              Von der Strategie bis zur Implementierung — mit messbaren Ergebnissen.
            </p>
          </div>

          <div className="footer-col">
            <h4><Link href="/loesungen" style={{ color: "inherit", textDecoration: "none" }}>Lösungen</Link></h4>
            <ul>
              {LOESUNGEN.slice(0, 8).map((l) => (
                <li key={l.slug}><Link href={`/${l.slug}`}>{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4><Link href="/branchen" style={{ color: "inherit", textDecoration: "none" }}>Branchen</Link></h4>
            <ul>
              {BRANCHEN.map((b) => (
                <li key={b.slug}><Link href={`/${b.slug}`}>{b.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Unternehmen</h4>
            <ul>
              <li><a href="#problem">Über uns</a></li>
              <li><a href="#prozess">Unser Prozess</a></li>
              <li><a href="#referenzen">Referenzen</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="mailto:info@kiberatung.de">info@kiberatung.de</a></li>
              <li><a href="tel:+4930000000">+49 30 000 000</a></li>
              <li><a href="#kontakt">Erstberatung buchen</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} KI Beratung. Alle Rechte vorbehalten.</p>
          <nav className="footer-links" aria-label="Rechtliche Links">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
            <a href="/agb">AGB</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
