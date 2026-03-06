export interface VariantData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stats: {
    betriebe: string;
    mitarbeiter: string;
    markttrend: string;
    label1: string;
    label2: string;
    label3: string;
  };
  caseStudy: {
    restaurant: string;
    challenge: string;
    solution: string;
    result1: string;
    result2: string;
    result3: string;
  };
  faqs: { question: string; answer: string }[];
}

export const variantenMap: Record<string, VariantData> = {
  restaurant: {
    slug: "restaurant",
    name: "Restaurant",
    metaTitle: "KI Beratung für Restaurants | kiberatung.de",
    metaDescription: "KI-Lösungen für Restaurants: Reservierungsbot, automatische Bewertungsantworten, Speisekarten-KI und Personalplanung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Restaurants",
    intro: "In Deutschland gibt es über 40.000 Restaurants — vom Fine-Dining-Restaurant bis zum Familienrestaurant. Der Wettbewerb ist intensiv: steigende Personalkosten, hohe Ansprüche der Gäste und wachsende Online-Konkurrenz. KI-Lösungen helfen Restaurants, effizienter zu arbeiten, mehr Gäste zu begeistern und die Marge zu steigern — ohne mehr Personal.",
    stats: { betriebe: "40.000+", mitarbeiter: "280.000", markttrend: "+8,2 %", label1: "Restaurants in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Zur Alten Mühle — Stuttgart",
      challenge: "Das gehobene Restaurant kämpfte mit inkonsistenten No-Shows und einem manuellen Reservierungssystem, das Tischkapazitäten ineffizient nutzte.",
      solution: "KI-Reservierungssystem mit Auslastungsoptimierung, automatischen Erinnerungs-SMS und dynamischer Tischzuweisung.",
      result1: "Tischumsatz +31 %",
      result2: "No-Show-Rate −72 %",
      result3: "Personalkosten −16 %",
    },
    faqs: [
      { question: "Welche KI-Lösungen eignen sich besonders für Restaurants?", answer: "Reservierungsautomatisierung, KI-Bewertungsmanagement, Speisekarten-Übersetzung und Personalplanung bringen den schnellsten ROI für Restaurants." },
      { question: "Wie schnell ist KI im Restaurant implementiert?", answer: "Einfache Lösungen wie ein Reservierungsbot oder Bewertungsmanagement sind in 1–2 Wochen live. Komplexere Systeme wie Personalplanung brauchen 4–6 Wochen." },
      { question: "Was kostet KI-Beratung für ein Restaurant?", answer: "Das hängt vom Umfang ab. Viele Restaurants starten mit einem Pilot für 500–1.500 € und skalieren dann. Das erste Gespräch ist kostenlos." },
    ],
  },
  bar: {
    slug: "bar",
    name: "Bar",
    metaTitle: "KI Beratung für Bars & Cocktailbars | kiberatung.de",
    metaDescription: "KI-Lösungen für Bars: Reservierungsbot, Social-Media-Automatisierung, Bewertungsmanagement und Einkaufsplanung. Mehr Gäste, weniger Aufwand.",
    h1: "KI Automatisierung für Bars & Cocktailbars",
    intro: "Bars stehen vor einzigartigen Herausforderungen: hohe Personalfluktuation, saisonale Schwankungen, Social-Media-Druck und die Notwendigkeit, sich von Tausenden Mitbewerbern abzuheben. KI-Lösungen helfen Bars, Reservierungen zu automatisieren, Social Media effizient zu bespielen und Einkaufskosten zu senken.",
    stats: { betriebe: "18.000+", mitarbeiter: "90.000", markttrend: "+11,4 %", label1: "Bars & Cocktailbars in DE", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "The Negroni Lab — Hamburg",
      challenge: "Die Cocktailbar verlor Stammgäste an neue Mitbewerber und schaffte es nicht, ihre Social-Media-Präsenz konsistent zu bespielen.",
      solution: "KI-Content-Kalender für Instagram und TikTok, automatisches Bewertungsmanagement und Tischreservierungssystem.",
      result1: "Instagram-Follower +340 %",
      result2: "Bewertungsantwortrate 100 %",
      result3: "Stammgäste +28 %",
    },
    faqs: [
      { question: "Wie hilft KI einer Bar konkret?", answer: "Social-Media-Content automatisieren, Reservierungen verwalten, Bewertungen beantworten und Getränkeeinkauf optimieren — das sind die vier häufigsten Einsatzfelder." },
      { question: "Kann KI auch für Events in der Bar genutzt werden?", answer: "Ja. KI kann Event-Announcements automatisch erstellen, Gästelisten verwalten und Follow-up-Nachrichten nach Events versenden." },
      { question: "Lohnt sich KI für eine kleine Bar?", answer: "Ja — besonders Social-Media-Automatisierung und Bewertungsmanagement rentieren sich auch für kleine Betriebe schnell." },
    ],
  },
  cafe: {
    slug: "cafe",
    name: "Café",
    metaTitle: "KI Beratung für Cafés & Coffeeshops | kiberatung.de",
    metaDescription: "KI-Lösungen für Cafés: Stammkundenbindung, automatische Social-Media-Posts, Einkaufsoptimierung und Personalplanung.",
    h1: "KI Automatisierung für Cafés & Coffeeshops",
    intro: "Cafés leben von Stammkunden, Atmosphäre und Social Media. In einem zunehmend wettbewerbsintensiven Markt — mit Kaffee-Ketten als Konkurrenz — müssen Cafés smarter werden. KI hilft dabei: von der automatisierten Kundenbindung bis zur optimierten Einkaufsplanung für Kaffeebohnen und Backwaren.",
    stats: { betriebe: "25.000+", mitarbeiter: "120.000", markttrend: "+7,8 %", label1: "Cafés in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Kaffeesatz — München Schwabing",
      challenge: "Das Café hatte eine treue Stammkundschaft, schaffte es aber nicht, neue Gäste über Social Media zu gewinnen und verlor gegen größere Ketten.",
      solution: "KI-Social-Media-Kalender, automatische Google-Bewertungsantworten und Einkaufsoptimierung für Kaffeebohnen und Backwaren.",
      result1: "Google-Rating 4,9 ⭐",
      result2: "Social-Reichweite +220 %",
      result3: "Wareneinsatz −19 %",
    },
    faqs: [
      { question: "Welche KI-Lösung bringt einem Café den größten Nutzen?", answer: "Social-Media-Automatisierung und Google-Bewertungsmanagement sind die häufigsten Einstiegspunkte mit schnellstem ROI für Cafés." },
      { question: "Kann KI helfen, einen Loyalty-Effekt zu erzeugen?", answer: "Ja — automatisierte Geburtstagsangebote, Stammkunden-Segmentierung und personalisierte Newsletter binden Gäste nachhaltig." },
      { question: "Wie funktioniert die Einkaufsoptimierung für ein Café?", answer: "KI analysiert Verkaufsdaten und prognostiziert den Bedarf an Kaffee, Milch und Backwaren — und reduziert Überbestellungen und Abfall." },
    ],
  },
  "sushi-bar": {
    slug: "sushi-bar",
    name: "Sushi Bar",
    metaTitle: "KI Beratung für Sushi Bars & Japanische Restaurants | kiberatung.de",
    metaDescription: "KI-Lösungen für Sushi Bars: mehrsprachige Speisekarte, Allergen-KI, Reservierungsbot und Bewertungsmanagement.",
    h1: "KI Automatisierung für Sushi Bars",
    intro: "Sushi Bars stehen vor besonderen Herausforderungen: internationale Gäste mit Sprachbarrieren, komplexe Allergenkennzeichnungen, frische Zutaten mit kurzer Haltbarkeit und hohe Anforderungen an die Präsentation. KI löst diese Herausforderungen — von der mehrsprachigen Speisekarte bis zur Frischeprognose.",
    stats: { betriebe: "4.200+", mitarbeiter: "22.000", markttrend: "+18,5 %", label1: "Sushi Bars in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Sakura Sushi — Frankfurt Sachsenhausen",
      challenge: "Die Sushi Bar hatte viele internationale Gäste, konnte aber keine mehrsprachigen Speisekarten pflegen und verlor durch mangelhafte Allergenkennzeichnung Gäste.",
      solution: "KI-gestützte Speisekarte in 6 Sprachen mit automatischer Allergen-Kennzeichnung und Reservierungsbot für mehrsprachige Anfragen.",
      result1: "Gästezufriedenheit +44 %",
      result2: "Speisekarte in 6 Sprachen",
      result3: "Allergenbeschwerden −100 %",
    },
    faqs: [
      { question: "Kann KI die Speisekarte automatisch übersetzen?", answer: "Ja — KI übersetzt Ihre Speisekarte in Echtzeit in bis zu 6 Sprachen und pflegt Allergeninformationen automatisch." },
      { question: "Wie hilft KI bei der Frischeplanung in einer Sushi Bar?", answer: "KI prognostiziert den täglichen Fischeinkauf auf Basis von Reservierungen und historischen Verkaufsdaten — und reduziert Abfall um bis zu 35 %." },
      { question: "Kann KI auch bei der Rezeptur und Portionierung helfen?", answer: "Ja — KI-gestützte Rezepturverwaltung standardisiert Portionen und berechnet den exakten Materialbedarf pro Tag." },
    ],
  },
  pizzeria: {
    slug: "pizzeria",
    name: "Pizzeria",
    metaTitle: "KI Beratung für Pizzerien | kiberatung.de",
    metaDescription: "KI-Lösungen für Pizzerien: automatische Online-Bestellungen, Lieferrouten-Optimierung, Bewertungsmanagement und Einkaufsplanung.",
    h1: "KI Automatisierung für Pizzerien",
    intro: "Pizzerien sind das umsatzstärkste Segment der deutschen Gastronomie — mit über 16.000 Betrieben. Deliveroo und Lieferando setzen die Margen unter Druck, während Personalkosten steigen. KI hilft Pizzerien, Bestellprozesse zu automatisieren, Lieferrouten zu optimieren und Bewertungen professionell zu managen.",
    stats: { betriebe: "16.000+", mitarbeiter: "95.000", markttrend: "+13,2 %", label1: "Pizzerien in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Napoli Express — Köln",
      challenge: "Die Pizzeria verlor zunehmend Bestellungen an größere Lieferketten und schaffte es nicht, Lieferzeiten zu optimieren.",
      solution: "Eigenes Online-Bestellsystem mit KI-Lieferrouten-Optimierung, automatischen Bestätigungen und Bewertungsmanagement.",
      result1: "Lieferzeit −22 Min.",
      result2: "Lieferando-Kosten −40 %",
      result3: "Stammkunden-Anteil +35 %",
    },
    faqs: [
      { question: "Kann KI dabei helfen, unabhängig von Lieferando zu werden?", answer: "Ja — ein eigenes KI-gestütztes Bestellsystem macht Pizzerien unabhängiger von teuren Plattformen und steigert die Marge erheblich." },
      { question: "Wie optimiert KI Lieferrouten?", answer: "KI analysiert Bestellpositionen in Echtzeit, bündelt Lieferungen clever und berechnet die kürzeste Route — das reduziert Lieferzeiten um durchschnittlich 20 Minuten." },
      { question: "Was kostet ein eigenes Bestellsystem?", answer: "Das hängt vom Umfang ab. In einem ersten Gespräch analysieren wir kostenlos, welche Lösung für Ihre Pizzeria am sinnvollsten ist." },
    ],
  },
  "hotel-restaurant": {
    slug: "hotel-restaurant",
    name: "Hotel & Restaurant",
    metaTitle: "KI Beratung für Hotel-Restaurants | kiberatung.de",
    metaDescription: "KI-Lösungen für Hotel-Restaurants: Revenue Management, Frühstücksbuffet-Planung, Gäste-Kommunikation und Bewertungsmanagement.",
    h1: "KI Automatisierung für Hotel-Restaurants",
    intro: "Hotel-Restaurants bedienen täglich Frühstücksgäste, Tagungs-Catering und À-la-carte-Abendgäste — mit völlig unterschiedlichen Anforderungen. KI optimiert Buffettpläne, prognostiziert Gästezahlen und koordiniert die Kommunikation zwischen Hotel und Restaurant nahtlos.",
    stats: { betriebe: "8.500+", mitarbeiter: "75.000", markttrend: "+9,8 %", label1: "Hotel-Restaurants in DE", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Hotel Bergkristall — Garmisch",
      challenge: "Das Hotel-Restaurant verschwendete täglich 30–40 kg Lebensmittel am Frühstücksbuffet durch Überplanung und konnte Gästezahlen nicht präzise prognostizieren.",
      solution: "KI-gestützte Buffetplanung auf Basis von Check-ins, Buchungsmustern und Wetterdaten.",
      result1: "Lebensmittelabfall −58 %",
      result2: "Foodcost −22 %",
      result3: "Gästezufriedenheit +19 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Frühstücksbuffet-Planung?", answer: "KI analysiert Check-in-Daten, historische Verbrauchsmuster und aktuelle Buchungen — und kalkuliert präzise, wie viel von jedem Produkt benötigt wird." },
      { question: "Kann KI Hotel und Restaurant-System verbinden?", answer: "Ja — KI-Integrationen verbinden PMS (Hotel-Management) und Restaurant-Software, sodass Gastdaten automatisch übertragen werden." },
      { question: "Wie verbessert KI das Revenue Management für Hotel-Restaurants?", answer: "KI passt F&B-Preise und Angebote an Belegung, Events und Saisonalität an — und maximiert so den Umsatz pro Hotelgast." },
    ],
  },
  imbiss: {
    slug: "imbiss",
    name: "Imbiss & Schnellrestaurant",
    metaTitle: "KI Beratung für Imbiss & Schnellrestaurants | kiberatung.de",
    metaDescription: "KI-Lösungen für Imbisse und Schnellrestaurants: digitale Bestellsysteme, Einkaufsoptimierung und Bewertungsmanagement.",
    h1: "KI Automatisierung für Imbiss & Schnellrestaurants",
    intro: "Imbisse und Schnellrestaurants arbeiten mit minimalen Margen und maximaler Effizienz. KI-Lösungen helfen dabei, Bestellprozesse zu digitalisieren, Stoßzeiten besser zu planen und Lebensmittelabfall zu reduzieren — ohne großes IT-Budget.",
    stats: { betriebe: "35.000+", mitarbeiter: "185.000", markttrend: "+6,4 %", label1: "Imbisse in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Döner König — Berlin Mitte",
      challenge: "Lange Warteschlangen zu Stoßzeiten, hoher Lebensmittelabfall am Abend und keine Möglichkeit, Stammkunden zu binden.",
      solution: "Digitales Bestellsystem mit QR-Code, KI-Stoßzeitenprognose und automatische Loyalty-Nachrichten per WhatsApp.",
      result1: "Wartezeit −12 Min.",
      result2: "Abendabfall −42 %",
      result3: "Stammkundenkäufe +37 %",
    },
    faqs: [
      { question: "Lohnt sich KI für einen kleinen Imbiss?", answer: "Ja — besonders ein digitales Bestellsystem und Einkaufsoptimierung amortisieren sich schnell. Das erste Gespräch ist kostenlos." },
      { question: "Kann KI Stoßzeiten für einen Imbiss vorhersagen?", answer: "Ja — KI analysiert historische Verkaufsdaten, Wochentage, Wetter und lokale Events und gibt täglich eine Prognose für die erwarteten Kundenzahlen." },
      { question: "Wie kann ein Imbiss Stammkunden über KI binden?", answer: "WhatsApp-Aktionen, Punkte-Systeme und automatische Geburtstags-Rabatte — alles vollautomatisch, ohne manuellen Aufwand." },
    ],
  },
  catering: {
    slug: "catering",
    name: "Catering & Events",
    metaTitle: "KI Beratung für Catering-Unternehmen | kiberatung.de",
    metaDescription: "KI-Lösungen für Catering: Angebotserstellung, Einkaufsoptimierung, Personalplanung und automatisierte Kundenkommunikation.",
    h1: "KI Automatisierung für Catering & Events",
    intro: "Catering-Unternehmen jonglieren mit hunderten Details pro Event: Menüplanung, Einkauf, Personalplanung, Logistik und Kundenkommunikation — alles gleichzeitig. KI macht Cateringunternehmen skalierbarer: mehr Events betreuen, ohne mehr Verwaltungsaufwand.",
    stats: { betriebe: "6.800+", mitarbeiter: "48.000", markttrend: "+15,2 %", label1: "Catering-Betriebe in DE", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "EventCuisine GmbH — Düsseldorf",
      challenge: "Das Catering-Unternehmen betreute 50+ Events pro Monat, verlor aber Zeit durch manuelle Angebotserstellung und Einkaufsplanung.",
      solution: "KI-Angebotsgenerator, automatische Einkaufslisten pro Event und Personalplanungs-Tool.",
      result1: "Angebotszeit −75 %",
      result2: "Wareneinsatz −18 %",
      result3: "Events-Kapazität +40 %",
    },
    faqs: [
      { question: "Wie beschleunigt KI die Angebotserstellung im Catering?", answer: "KI generiert kalkulierte Angebote auf Basis von Personenzahl, Menüauswahl und historischen Kostenstrukturen — in Minuten statt Stunden." },
      { question: "Kann KI die Personalplanung für Events übernehmen?", answer: "KI plant Personalbedarfe pro Event, koordiniert mit verfügbaren Mitarbeitern und versendet automatisch Einsatzpläne." },
      { question: "Wie hilft KI bei der Einkaufsoptimierung im Catering?", answer: "KI erstellt automatisch Einkaufslisten pro Event und Menü — mit exakten Mengen auf Basis von Personenzahl und Rezeptur." },
    ],
  },
  biergarten: {
    slug: "biergarten",
    name: "Biergarten",
    metaTitle: "KI Beratung für Biergärten | kiberatung.de",
    metaDescription: "KI-Lösungen für Biergärten: Wetterbasierte Prognosen, Personalplanung, Social Media und Bewertungsmanagement.",
    h1: "KI Automatisierung für Biergärten",
    intro: "Biergärten sind wetterabhängig wie kein anderes Gastronomiensegment. Zu viel Personal und Einkauf bei schlechtem Wetter kostet Marge — zu wenig bei Sonnenschein kostet Umsatz. KI-Prognosen auf Basis von Wetterdaten revolutionieren die Biergarten-Planung.",
    stats: { betriebe: "3.200+", mitarbeiter: "28.000", markttrend: "+12,7 %", label1: "Biergärten in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum bei Schönwetter" },
    caseStudy: {
      restaurant: "Waldlichtung Biergarten — München",
      challenge: "Der Biergarten verschwendete an schlechten Wochentagen massive Ressourcen und war an Spitzentagen hoffnungslos unterbesetzt.",
      solution: "KI-Prognosemodell auf Basis von Wetter, Wochentag und lokalen Events — mit automatischen Einkaufs- und Personalempfehlungen.",
      result1: "Personalkosten −26 %",
      result2: "Wareneinsatz −31 %",
      result3: "Umsatz Spitzentage +22 %",
    },
    faqs: [
      { question: "Wie genau kann KI das Wetter in die Planung einbeziehen?", answer: "KI verbindet Wetterdaten mit historischen Gästezahlen und gibt täglich eine Prognose für Personal- und Einkaufsbedarf — bis zu 5 Tage im Voraus." },
      { question: "Kann KI auch kurzfristige Wetteränderungen abfangen?", answer: "Ja — bei Wetteränderungen unter 24 Stunden schickt das System automatisch aktualisierte Empfehlungen ans Team." },
      { question: "Wie kann ein Biergarten Social Media mit KI bespielen?", answer: "KI erstellt bei Sonnenschein automatisch Social-Media-Posts und Angebote — und passt den Content je nach Wetterlage an." },
    ],
  },
  "food-truck": {
    slug: "food-truck",
    name: "Food Truck",
    metaTitle: "KI Beratung für Food Trucks | kiberatung.de",
    metaDescription: "KI-Lösungen für Food Trucks: Standortanalyse, Social Media, Online-Bestellsystem und Einkaufsoptimierung.",
    h1: "KI Automatisierung für Food Trucks",
    intro: "Food Trucks sind agil, kreativ und wachsen schnell — stehen aber vor einzigartigen Herausforderungen: Standortwahl, Social-Media-Kommunikation und tagesaktuelle Einkaufsplanung. KI macht Food Trucks professioneller und profitabler.",
    stats: { betriebe: "5.500+", mitarbeiter: "12.000", markttrend: "+22,4 %", label1: "Food Trucks in Deutschland", label2: "Beschäftigte im Segment", label3: "Marktwachstum pro Jahr" },
    caseStudy: {
      restaurant: "Burger Cartel — Berlin",
      challenge: "Der Food Truck wusste nie genau, welche Standorte die höchsten Umsätze brachten und verlor Stammkunden, weil die Social-Media-Kommunikation unregelmäßig war.",
      solution: "KI-Standortanalyse mit Eventdaten, automatischer Social-Media-Kalender und WhatsApp-Channel für Standort-Updates.",
      result1: "Umsatz pro Tag +44 %",
      result2: "WhatsApp-Follower 2.400",
      result3: "Social-Reach +510 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Standortwahl für Food Trucks?", answer: "KI analysiert Events, Fußgängerfrequenzen, Wetterdaten und historische Umsätze — und empfiehlt täglich den profitabelsten Standort." },
      { question: "Kann KI einen WhatsApp-Channel für Standort-Updates aufbauen?", answer: "Ja — automatische Standort-Updates, Tagesmenüs und Sonderangebote werden per KI an Abonnenten versendet — ohne manuellen Aufwand." },
      { question: "Wie hilft KI bei der täglichen Einkaufsplanung?", answer: "KI kombiniert geplante Standorte, historische Verkaufsdaten und Kapazitäten — und erstellt täglich eine präzise Einkaufsliste." },
    ],
  },
};

export function getVariantBySlug(slug: string): VariantData | undefined {
  return variantenMap[slug];
}

export const VARIANTEN_SLUGS = Object.keys(variantenMap);
