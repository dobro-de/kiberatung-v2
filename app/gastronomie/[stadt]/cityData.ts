export type LayoutVariant = 1 | 2 | 3;

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  layout: LayoutVariant;
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
  faqs: CityFaq[];
}

export const cities: CityData[] = [
  {
    slug: "berlin",
    name: "Berlin",
    layout: 1,
    metaTitle: "KI Automatisierung für Berliner Restaurants | KI Beratung für Gastronomie Berlin",
    metaDescription: "KI Beratung Gastronomie Berlin: Prozesse automatisieren, Kosten senken, Umsatz steigern. Jetzt kostenlose Erstberatung sichern.",
    h1: "KI Automatisierung für Berliner Restaurants & Gastrobetriebe",
    intro: "Berlin ist Deutschlands größte Gastronomie-Metropole mit über 8.000 Betrieben — von Spitzentrestaurants im Mitte bis zu Kiez-Cafés in Neukölln. In dieser wettbewerbsintensiven Umgebung brauchen Gastronomen smarte Lösungen, um Margen zu verteidigen und Gäste zu begeistern. KI-gestützte Systeme helfen Berliner Betrieben, von der Reservierungsverwaltung bis zur dynamischen Preisgestaltung effizienter zu werden.",
    stats: {
      betriebe: "8.200+",
      mitarbeiter: "62.000",
      markttrend: "+9,4 %",
      label1: "Gastronomiebetriebe in Berlin",
      label2: "Beschäftigte im Berliner Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Spree Kitchen – Berlin-Mitte",
      challenge: "Das Bistro kämpfte mit inkonsistenten Reservierungsausfällen und einem manuellen Bestellprozess, der bis zu 40 % der Stoßzeiten blockierte.",
      solution: "Implementierung eines KI-basierten Reservierungssystems mit automatischer Auslastungsoptimierung und einem digitalen Bestell-Assistenten.",
      result1: "Tischumsatz +28 %",
      result2: "No-Show-Rate −65 %",
      result3: "Personalkosten −18 %",
    },
    faqs: [
      {
        question: "Welche KI-Tools eignen sich speziell für Berliner Streetfood-Märkte?",
        answer: "Für dynamische Märkte wie den Markthalle Neun empfehlen wir KI-gestützte Lagerverwaltung und Nachfrageprognosen, die wetterbedingte Schwankungen und Eventkalender automatisch einkalkulieren.",
      },
      {
        question: "Wie hilft KI bei saisonalen Schwankungen im Berliner Tourismus?",
        answer: "KI-Systeme analysieren historische Buchungsdaten, Messekalender und Veranstaltungen wie die Berlinale, um Einkauf, Personalplanung und Preise automatisch anzupassen.",
      },
      {
        question: "Lohnt sich KI-Beratung für kleine Berliner Spätis und Cafés?",
        answer: "Absolut – auch kleine Betriebe profitieren von KI-gestützter Kassensystemintegration und automatisierter Buchhaltung. Die ROI-Schwelle liegt oft bei unter 3 Monaten.",
      },
    ],
  },
  {
    slug: "muenchen",
    name: "München",
    layout: 2,
    metaTitle: "Gastro-KI für die bayerische Hauptstadt | KI Beratung für Gastronomie München",
    metaDescription: "KI Beratung Gastronomie München: Oktoberfest-Saisons meistern, Kosten optimieren, Gasterlebnis verbessern. Jetzt anfragen.",
    h1: "Gastro-KI für München: Mehr Effizienz vom Biergarten bis zur Sterneküche",
    intro: "München vereint traditionelle Wirtshauskultur mit internationaler Spitzengastronomie — und zieht jährlich Millionen Touristen an. Ob Augustinerkeller, moderne Fusion-Küche oder klassisches Wirtshaus: KI-Lösungen helfen Münchner Gastronomen, Auslastungsspitzen rund um den Oktoberfest zu meistern und ganzjährig rentabel zu bleiben.",
    stats: {
      betriebe: "5.800+",
      mitarbeiter: "49.000",
      markttrend: "+11,2 %",
      label1: "Gastronomiebetriebe in München",
      label2: "Beschäftigte im Münchner Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Isarblick Brasserie – München-Schwabing",
      challenge: "Das Restaurant erlebte jährlich massive Überauslastung im Oktober und Unterauslastung von Januar bis März, ohne systematische Kapazitätssteuerung.",
      solution: "KI-Prognosemodell für saisonale Auslastung, automatische Personalplanung und dynamische Menüpreisgestaltung basierend auf Echtzeitdaten.",
      result1: "Jahresumsatz +22 %",
      result2: "Lebensmittelabfall −34 %",
      result3: "Mitarbeiterzufriedenheit +41 %",
    },
    faqs: [
      {
        question: "Wie kann KI helfen, den Oktoberfest-Ansturm besser zu managen?",
        answer: "KI-Systeme prognostizieren Gästezahlen auf Basis historischer Daten, Wetterbedingungen und Buchungsverläufen, sodass Personal, Einkauf und Logistik frühzeitig optimiert werden können.",
      },
      {
        question: "Eignet sich KI auch für traditionelle bayerische Wirtshäuser?",
        answer: "Ja — gerade klassische Betriebe profitieren von KI-gestützter Speisekarten-Analyse und Gästefrequenz-Prognosen, ohne ihren Charakter zu verlieren.",
      },
      {
        question: "Wie integriert sich KI in bestehende Münchner Reservierungssysteme?",
        answer: "Unsere Lösungen sind kompatibel mit gängigen Systemen wie OpenTable, ReservationDashboard und eigenentwickelten Buchungstools. Die Integration dauert in der Regel 2–4 Wochen.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    layout: 3,
    metaTitle: "KI-Lösungen für Hamburgs Hafenrestaurants & Gastro | KI Beratung für Gastronomie Hamburg",
    metaDescription: "KI Beratung Gastronomie Hamburg: Fischmarkt bis HafenCity — KI optimiert Ihre Gastronomieprozesse. Jetzt kostenlos beraten lassen.",
    h1: "KI-Beratung für Hamburgs Gastronomie: Von der HafenCity bis zum Fischmarkt",
    intro: "Hamburg ist Norddeutschlands kulinarisches Zentrum — mit einer Gastroszene so vielfältig wie der Hafen selbst. Von Fischrestaurants an den Landungsbrücken bis zu trendigen Bars in der Schanze setzt die Hansestadt auf Innovation. KI-gestützte Betriebsführung hilft Hamburger Gastronomen, in einem der teuersten Stadtgebiete Deutschlands wettbewerbsfähig zu bleiben.",
    stats: {
      betriebe: "6.400+",
      mitarbeiter: "54.000",
      markttrend: "+8,7 %",
      label1: "Gastronomiebetriebe in Hamburg",
      label2: "Beschäftigte im Hamburger Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Alster Dock Seafood – Hamburg-Altona",
      challenge: "Das Fischrestaurant litt unter Lieferkettenproblemen und fehlender Transparenz bei den tagesfrischen Einkaufspreisen — mit hohem manuellen Aufwand.",
      solution: "KI-basierte Einkaufsoptimierung mit tagesaktuellem Preisvergleich, automatischer Lieferantenauswahl und Frischeprognose.",
      result1: "Wareneinsatz −24 %",
      result2: "Frischereklamationen −81 %",
      result3: "Bestellzeit −70 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Hamburger Fischrestaurants beim tagesaktuellen Einkauf?",
        answer: "KI-Systeme vergleichen Lieferantenpreise in Echtzeit, prognostizieren Gästezahlen und berechnen automatisch optimale Bestellmengen — um Frische zu gewährleisten und Abfall zu minimieren.",
      },
      {
        question: "Kann KI bei der Verwaltung von Außenterrassen am Hamburger Hafen helfen?",
        answer: "Ja — wetterbasierte Nachfrageprognosen ermöglichen präzise Personalplanung und Bestandsmanagement für Terrassen-Saisons, inklusive Windstärke und Niederschlag als Variablen.",
      },
      {
        question: "Welche Förderprogramme gibt es für KI-Investitionen in Hamburger Gastrobetrieben?",
        answer: "Die Hamburgische Investitions- und Förderbank (IFB) bietet Digitalisierungszuschüsse, die auch KI-Implementierungsprojekte abdecken. Wir begleiten Sie gerne bei der Antragsstellung.",
      },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    layout: 1,
    metaTitle: "Kölner Gastronomie mit KI modernisieren | KI Beratung für Gastronomie Köln",
    metaDescription: "KI Beratung Gastronomie Köln: Karneval-Peaks managen, Kölsch-Gaststätten digitalisieren, Kosten senken. Anfragen.",
    h1: "Gastronomie Köln mit KI revolutionieren: Kölsch trifft künstliche Intelligenz",
    intro: "Köln ist nicht nur die Stadt des Karnevals — es ist eine der gastronomisch aktivsten Städte Deutschlands, mit tausenden Kneipen, Brauhäusern und Restaurants. Kölsche Gastronomen stehen vor einzigartigen Herausforderungen: saisonale Extremschwankungen, Brauhaus-Traditionen und ein wachsender Tourismus. KI macht diese Herausforderungen steuerbar.",
    stats: {
      betriebe: "5.200+",
      mitarbeiter: "43.000",
      markttrend: "+7,8 %",
      label1: "Gastronomiebetriebe in Köln",
      label2: "Beschäftigte im Kölner Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Rheinblick Brauhaus – Köln-Deutz",
      challenge: "Das traditionelle Brauhaus verlor in ruhigen Monaten bis zu 45 % Umsatz und konnte während des Karnevals die Kapazitäten nicht ausreichend skalieren.",
      solution: "KI-Kapazitätsplanung mit Event-Kalenderintegration, automatisches Umsell-System für Stammtische und KI-basierte Lageroptimierung.",
      result1: "Auslastung +31 % (Nebensaison)",
      result2: "Karneval-Umsatz +47 %",
      result3: "Lebensmittelabfall −29 %",
    },
    faqs: [
      {
        question: "Wie kann KI Kölner Brauereigaststätten bei Karneval-Peaks helfen?",
        answer: "Durch Vorhersagemodelle, die auf Vorjahresumsätzen, Veranstaltungskalendern und Social-Media-Daten basieren, kann Personal und Wareneinkauf bis zu 6 Wochen im Voraus optimiert werden.",
      },
      {
        question: "Eignet sich KI auch für kleine Kölsche Kneipen?",
        answer: "Ja — schon einfache KI-Kassensysteme mit Trendanalyse helfen kleinen Kneipen, Renner und Flop-Produkte zu identifizieren und die Karte gewinnoptimiert zu gestalten.",
      },
      {
        question: "Wie wird Datenschutz bei KI-Gästedaten in Köln gehandhabt?",
        answer: "Alle unsere Lösungen sind DSGVO-konform und werden ausschließlich auf deutschen Servern betrieben. Kundendaten werden anonymisiert verarbeitet und nie an Dritte weitergegeben.",
      },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    layout: 2,
    metaTitle: "Gastronomie-KI für Frankfurts Finanzmetrople | KI Beratung für Gastronomie Frankfurt",
    metaDescription: "KI Beratung Gastronomie Frankfurt: Business-Lunch-Betriebe optimieren, Messe-Peaks steuern, smarter skalieren. Jetzt anfragen.",
    h1: "KI für Frankfurts Gastronomie: Smarte Lösungen für die europäische Finanzmetropole",
    intro: "Frankfurt am Main beherbergt die größte Messedichte Europas und Zehntausende tägliche Business-Gäste — eine einzigartige Kombination für die Gastronomie. Restaurants rund um den Kaiserlei und im Bankenviertel müssen Hochbetrieb und ruhige Phasen flexibel managen. KI-Systeme sind der entscheidende Hebel.",
    stats: {
      betriebe: "4.100+",
      mitarbeiter: "37.000",
      markttrend: "+10,3 %",
      label1: "Gastronomiebetriebe in Frankfurt",
      label2: "Beschäftigte im Frankfurter Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Main Tower Bistro – Frankfurt-Sachsenhausen",
      challenge: "Das Business-Restaurant hatte extreme Auslastungsspitzen zur Mittagszeit und fast keine Abendgäste — mit starren Prozessen und hohem Personaleinsatz.",
      solution: "KI-gesteuertes Shift-Management, automatische Messe-Kalenderintegration und ein KI-Chatbot für Business-Reservierungen.",
      result1: "Personalkosten −22 %",
      result2: "Mittagsumsatz +35 %",
      result3: "Messe-Auslastung +58 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Frankfurter Restaurants rund um Messeveranstaltungen?",
        answer: "KI-Systeme integrieren den Messekalender der Messe Frankfurt und passen Personalplanung, Einkauf und Reservierungskapazitäten automatisch an — bis zu 8 Wochen im Voraus.",
      },
      {
        question: "Kann KI mehrsprachige Gäste in Frankfurter Restaurants besser betreuen?",
        answer: "Ja — KI-Assistenten kommunizieren automatisch in der Sprache des Gastes (Englisch, Französisch, Japanisch u.v.m.) und übersetzen Speisekarten in Echtzeit.",
      },
      {
        question: "Welche ROI kann ein Frankfurter Business-Restaurant mit KI erwarten?",
        answer: "Business-Restaurants erzielen durch Effizienzgewinne bei Personal und Wareneinkauf typischerweise einen ROI von 180–320 % im ersten Jahr — abhängig von Größe und Konzept.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    layout: 3,
    metaTitle: "KI-Gastronomieberatung für die Modestadt | KI Beratung für Gastronomie Düsseldorf",
    metaDescription: "KI Beratung Gastronomie Düsseldorf: Altstadt-Kneipen & Luxusrestaurants digital optimieren. Kostenlose Erstberatung.",
    h1: "Gastronomie Düsseldorf neu denken: KI für die längste Theke der Welt",
    intro: "Düsseldorf vereint die längste Theke der Welt in der Altstadt mit High-End-Gastronomie entlang der Königsallee. Diese Gegensätze spiegeln sich in der Vielfalt der Herausforderungen wider — von Massenabfertigung im Bierpub bis zur anspruchsvollen Gasterfahrung im Gourmet-Restaurant. KI-Lösungen passen sich jeder Gastronomieform an.",
    stats: {
      betriebe: "3.800+",
      mitarbeiter: "32.000",
      markttrend: "+9,1 %",
      label1: "Gastronomiebetriebe in Düsseldorf",
      label2: "Beschäftigte im Düsseldorfer Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Altbier & Co. – Düsseldorf-Altstadt",
      challenge: "Die Kneipe verlor an Wochenenden durch unstrukturierte Abläufe und veraltete Bestellprozesse signifikant an Umsatz bei hohem Gästeaufkommen.",
      solution: "Mobiles KI-Bestellsystem mit Durchlaufzeitoptimierung, automatischer Nachbestellung und Echtzeitanalyse der meistverkauften Produkte.",
      result1: "Durchlaufzeit −38 %",
      result2: "Umsatz/Gast +19 %",
      result3: "Fehlbestellungen −72 %",
    },
    faqs: [
      {
        question: "Wie kann KI die Altstadtgastronomie in Düsseldorf effizienter machen?",
        answer: "Gerade bei Massenbetrieb profitieren Betriebe von KI-gestützter Tischrotation, automatischen Nachbestellprozessen und Echtzeit-Analysen, die Engpässe am Tresen sofort sichtbar machen.",
      },
      {
        question: "Eignet sich KI auch für japanische Restaurants in der Düsseldorfer Little Tokyo?",
        answer: "Absolut — KI-Systeme lassen sich auf spezifische Cuisine-Typen trainieren und unterstützen mehrsprachige Kommunikation, was in Düsseldorfs internationaler Gastroszene entscheidend ist.",
      },
      {
        question: "Welche Fördermittel stehen Düsseldorfer Gastronomen für KI-Investitionen zur Verfügung?",
        answer: "NRW.INVEST und das Bundesdigitalisierungsministerium bieten Förderprogramme für Digitalisierung in KMU. Wir analysieren Ihre Förderfähigkeit kostenlos im Rahmen der Erstberatung.",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    layout: 1,
    metaTitle: "KI für Stuttgarts Weinberg-Gastronomie | KI Beratung für Gastronomie Stuttgart",
    metaDescription: "KI Beratung Gastronomie Stuttgart: Weingüter, Vespersstuben & moderne Restaurants mit KI optimieren. Anfragen.",
    h1: "Weinkultur trifft KI: Gastronomieberatung für Stuttgart & die Region",
    intro: "Stuttgart ist das Herz des deutschen Weinbaus — umgeben von Weinbergen und mit einer Gastrolandschaft, die von der traditionellen Besenwirtschaft bis zum modernen Foodtruck reicht. Die schwäbische Kombination aus Qualitätsanspruch und Sparsamkeit macht KI-Effizienzlösungen besonders attraktiv für Stuttgarter Betriebe.",
    stats: {
      betriebe: "3.200+",
      mitarbeiter: "28.000",
      markttrend: "+7,5 %",
      label1: "Gastronomiebetriebe in Stuttgart",
      label2: "Beschäftigte im Stuttgarter Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Schlossberg Weinstube – Stuttgart-Rotenberg",
      challenge: "Die Weinstube litt unter ineffizienter Weinkellerverwaltung, fehlenden Umsatzdaten nach Weinsorte und manuellem Reservierungsmanagement.",
      solution: "KI-Weinkellerverwaltung mit automatischer Lagerbewertung, Gäste-Präferenzanalyse und digitalem Reservierungssystem mit Weinempfehlungs-Funktion.",
      result1: "Weinumsatz +26 %",
      result2: "Lagerverluste −44 %",
      result3: "Stammgastquote +33 %",
    },
    faqs: [
      {
        question: "Kann KI bei der Weinauswahl und -empfehlung in Stuttgarter Weinlokalen helfen?",
        answer: "Ja — KI-Systeme analysieren Gästepräferenzen, Wettertrends (warm/kalt) und aktuelle Lagerbestände, um personalisierte Weinempfehlungen in Echtzeit zu generieren.",
      },
      {
        question: "Wie können Stuttgarter Besenwirtschaften von KI profitieren?",
        answer: "Kleine saisonale Betriebe profitieren besonders von KI-gestützter Reservierungsverwaltung und Kapazitätsoptimierung, die den manuellen Aufwand in Hochsaison erheblich reduziert.",
      },
      {
        question: "Gibt es Förderprogramme für Digitalisierung in der Stuttgarter Gastronomie?",
        answer: "Das Land Baden-Württemberg bietet über die L-Bank Digitalisierungsförderprogramme für Handwerk und Gastgewerbe. Die Beantragung dauert typischerweise 4–8 Wochen.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    layout: 2,
    metaTitle: "Gastronomie Leipzig zukunftsfähig machen | KI Beratung für Gastronomie Leipzig",
    metaDescription: "KI Beratung Gastronomie Leipzig: Wachstumsdynamik nutzen, Prozesse automatisieren, Kosten optimieren. Jetzt anfragen.",
    h1: "Leipzig wächst — lässt Ihre Gastronomie die KI-Revolution miterleben?",
    intro: "Leipzig boomt: Mit dem stärksten Bevölkerungswachstum Ostdeutschlands und einer explodierenden Kreativszene rund um den Karl-Heine-Kanal entstehen täglich neue gastronomische Konzepte. Aber auch etablierte Betriebe spüren den Druck — steigende Mietkosten, Fachkräftemangel und wachsender Wettbewerb. KI ist der Schlüssel zur nachhaltigen Effizienz.",
    stats: {
      betriebe: "2.800+",
      mitarbeiter: "22.000",
      markttrend: "+14,2 %",
      label1: "Gastronomiebetriebe in Leipzig",
      label2: "Beschäftigte im Leipziger Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr — stärkster Zuwachs in Ostdeutschland",
    },
    caseStudy: {
      restaurant: "Plagwitzer Küchenlab – Leipzig-Plagwitz",
      challenge: "Das aufstrebende Restaurantkonzept skalierte schnell, verlor aber die Kostenkontrolle: Personalkosten stiegen auf 42 % des Umsatzes.",
      solution: "KI-Personalplanung mit Umsatzprognose-Kopplung, automatische Kostentracking-Dashboards und KI-basiertes Menü-Pricing.",
      result1: "Personalkosten auf 31 % gesenkt",
      result2: "Foodcost −17 %",
      result3: "EBITDA-Marge +8 Punkte",
    },
    faqs: [
      {
        question: "Wie hilft KI Startups und neue Gastronomiekonzepte in Leipzig?",
        answer: "KI-Datenanalyse hilft bei der Standortwahl, Zielgruppenidentifikation und Preisfindung — Faktoren, die über Erfolg oder Misserfolg neuer Gastronomiekonzepte in Leipzig entscheiden.",
      },
      {
        question: "Kann KI bei der schnellen Skalierung eines Restaurantkonzepts helfen?",
        answer: "Ja — von standardisierten Prozessen über automatische Qualitätssicherung bis zu Franchisesystem-Dashboards: KI sorgt dafür, dass Qualität und Profitabilität beim Wachstum nicht verloren gehen.",
      },
      {
        question: "Welche spezifischen Herausforderungen hat die Gastronomie in Leipzig-Connewitz?",
        answer: "Der Stadtbezirk Connewitz zeichnet sich durch eine junge, preissensible Zielgruppe aus. KI hilft, Preise dynamisch anzupassen, Trendgetränke frühzeitig zu identifizieren und Social-Media-Feedback zu nutzen.",
      },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    layout: 3,
    metaTitle: "KI-Gastronomieberatung für die Elbmetropole | KI Beratung für Gastronomie Dresden",
    metaDescription: "KI Beratung Gastronomie Dresden: Tourismuspeaks rund um Semperoper & Zwinger mit KI smart managen. Jetzt beraten lassen.",
    h1: "Dresdner Gastronomie im digitalen Wandel: KI für die Stadt an der Elbe",
    intro: "Dresden lockt Millionen Kulturreisende jährlich an — die Semperoper, der Zwinger und die Frauenkirche sind Magnete für anspruchsvolle Gäste mit Gastronomieanspruch. Dresdner Restaurateure stehen vor der Herausforderung, Qualität zu skalieren, ohne das historische Flair zu verlieren. KI-Beratung liefert die Werkzeuge dafür.",
    stats: {
      betriebe: "2.400+",
      mitarbeiter: "19.000",
      markttrend: "+8,9 %",
      label1: "Gastronomiebetriebe in Dresden",
      label2: "Beschäftigte im Dresdner Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Elbufer Tafelrunde – Dresden-Neustadt",
      challenge: "Das Restaurant mit Elbblick hatte starke saisonale Schwankungen und konnte Spitzenzeiten nach Opernpremieren nicht effizient abdecken.",
      solution: "KI-Integration des Semperoper-Veranstaltungskalenders mit automatischer Personaleinsatzplanung und Vorab-Reservierungssystem für Kulturbesucher.",
      result1: "Kulturabend-Umsatz +41 %",
      result2: "Personaleffizienz +29 %",
      result3: "Gästebewertungen ⌀ 4,7/5",
    },
    faqs: [
      {
        question: "Wie können Dresdner Restaurants vom Kulturtourismus profitieren?",
        answer: "KI-Systeme synchronisieren sich mit Veranstaltungskalendern (Semperoper, Staatsschauspiel, Dresdner Musikfestspiele) und optimieren Kapazitäten, Menüs und Personal automatisch für Kulturabende.",
      },
      {
        question: "Helfen KI-Tools auch beim Management von Reisegruppen in Dresdner Restaurants?",
        answer: "Ja — KI-gestützte Gruppenreservierungssysteme, automatische Menüvorkonfiguration und Zahlungsabwicklung machen das Management großer Reisegruppen deutlich effizienter.",
      },
      {
        question: "Gibt es in Dresden besondere Förderprogramme für gastronomische Digitalisierung?",
        answer: "Der Freistaat Sachsen bietet über die SAB (Sächsische Aufbaubank) Förderprogramme für KMU-Digitalisierung. Wir prüfen Ihre Förderfähigkeit kostenlos im Erstgespräch.",
      },
    ],
  },
  {
    slug: "hannover",
    name: "Hannover",
    layout: 1,
    metaTitle: "Hannoveraner Gastronomie mit KI optimieren | KI Beratung für Gastronomie Hannover",
    metaDescription: "KI Beratung Gastronomie Hannover: Messe-Saison, CeBIT-Erbe & Alltagsgastronomie mit KI skalieren. Anfragen.",
    h1: "Messestadt trifft KI: Gastronomieberatung für Hannover",
    intro: "Hannover ist die Messestadt Deutschlands — mit der Hannover Messe, der IFA und Dutzenden weiteren Großveranstaltungen kommen jährlich Millionen Besucher. Gastronomische Betriebe stehen vor extremen Schwankungen: Ausverkaufte Wochen wechseln mit ruhigen Phasen. KI bringt Planungssicherheit in diesen Rhythmus.",
    stats: {
      betriebe: "2.600+",
      mitarbeiter: "21.000",
      markttrend: "+7,2 %",
      label1: "Gastronomiebetriebe in Hannover",
      label2: "Beschäftigte im Hannoverschen Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Leibniz Stube – Hannover-Mitte",
      challenge: "Das Restaurant erzielte während der Hannover Messe das Dreifache des Normalumsatzes, war aber nicht in der Lage, Kapazitäten und Personal rechtzeitig zu skalieren.",
      solution: "KI-Veranstaltungskalender-Integration mit automatischer Kapazitätserweiterungsplanung, Saisonpersonalmanagement und Echtzeit-Auslastungsanzeige.",
      result1: "Messewoche-Umsatz +52 %",
      result2: "Personalengpässe −89 %",
      result3: "Kundenzufriedenheit +37 %",
    },
    faqs: [
      {
        question: "Wie plant KI den Personalbedarf rund um die Hannover Messe?",
        answer: "KI-Systeme analysieren historische Auslastungsdaten, aktuelle Anmeldezahlen der Messe und lokale Wetterprognosen, um den Personalbedarf bis zu 12 Wochen im Voraus präzise zu berechnen.",
      },
      {
        question: "Kann KI internationale Messegäste in Hannover besser bedienen?",
        answer: "Ja — KI-Menüübersetzung, mehrsprachige digitale Speisekarten und internationale Zahlungsoptionen helfen Hannoveraner Restaurants, internationale Gäste optimal zu betreuen.",
      },
      {
        question: "Lohnt sich KI-Beratung auch in ruhigen Perioden zwischen den Messen?",
        answer: "Besonders dann! KI-Analysen identifizieren lokale Nachfragepotenziale, die außerhalb der Messezeiten oft unterschätzt werden, und helfen, Stammkundenstrategien zu entwickeln.",
      },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    layout: 2,
    metaTitle: "KI für Nürnbergs Bratwurst- & Gastrokultur | KI Beratung für Gastronomie Nürnberg",
    metaDescription: "KI Beratung Gastronomie Nürnberg: Christkindlesmarkt-Saison & Jahresbetrieb mit KI effizienter gestalten. Anfragen.",
    h1: "Nürnberger Gastro-KI: Von der Bratwurst-Bude bis zum modernen Restaurant",
    intro: "Nürnberg vereint Tradition und Innovation: Weltberühmt für den Christkindlesmarkt und die Nürnberger Bratwurst, entwickelt sich die Stadt gleichzeitig zu einem innovativen Technologie- und Kreativstandort. Gastronomische Betriebe in Nürnberg müssen saisonale Hochphasen meistern und ganzjährig wettbewerbsfähig bleiben — KI ist dabei unverzichtbar.",
    stats: {
      betriebe: "2.900+",
      mitarbeiter: "24.000",
      markttrend: "+8,1 %",
      label1: "Gastronomiebetriebe in Nürnberg",
      label2: "Beschäftigte im Nürnberger Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Kaiserburg Keller – Nürnberg-Altstadt",
      challenge: "Das historische Restaurant hatte im Dezember dreifachen Umsatz, aber im Januar–Februar kaum Gäste — mit hohen Fixkosten und starren Prozessen.",
      solution: "KI-Saisonplanung mit automatischer Januar-Kampagne, dynamische Preisanpassung und KI-gestützte Stammkundenbindung über digitale Loyalty-Programme.",
      result1: "Januar-Umsatz +48 %",
      result2: "Deckungsbeitrag Jahresdurchschnitt +23 %",
      result3: "Stammgäste +61 %",
    },
    faqs: [
      {
        question: "Wie bereitet KI Nürnberger Restaurants auf den Christkindlesmarkt vor?",
        answer: "KI-Systeme planen Personal, Wareneinkauf und Kapazitäten auf Basis von Besucherzahlenprognosen des Christkindlesmarkts — mit automatischen Alerts bei unerwarteten Schwankungen.",
      },
      {
        question: "Kann KI bei der Verwaltung von To-Go- und Liefergeschäft in Nürnberg helfen?",
        answer: "Ja — KI optimiert Lieferrouten, Verpackungsmengen und Bestellfrequenzen. Besonders für Betriebe mit kombiniertem Restaurant- und To-Go-Konzept lassen sich so erhebliche Kosten sparen.",
      },
      {
        question: "Welche KI-Trends sind in der Nürnberger Gastrobranche aktuell besonders relevant?",
        answer: "Voice-Ordering für Spezialitäten-Restaurants, KI-gestützte Allergenkennzeichnung und automatisiertes Kundenfeedback-Management sind derzeit die gefragtesten Lösungen in Nürnberg.",
      },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    layout: 3,
    metaTitle: "KI-Gastronomieberatung für die Hansestadt Bremen | KI Beratung für Gastronomie Bremen",
    metaDescription: "KI Beratung Gastronomie Bremen: Böttcherstraße, Schnoor & Weser-Terrassen mit KI digital optimieren. Anfragen.",
    h1: "Hansestadt Bremen: KI-Beratung für eine stolze Gastrotradition",
    intro: "Bremen ist mehr als Stadtmusikanten und Beck's Bier — die Hansestadt hat eine reiche Gastrotradition mit Restaurants in der historischen Böttcherstraße, Bremer Spezialitäten im Schnoor und modernen Konzepten am Osterdeich. KI-Lösungen helfen Bremer Gastronomen, diese Tradition profitabler zu gestalten.",
    stats: {
      betriebe: "1.900+",
      mitarbeiter: "16.000",
      markttrend: "+6,8 %",
      label1: "Gastronomiebetriebe in Bremen",
      label2: "Beschäftigte im Bremer Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Weser Welle – Bremen-Osterdeich",
      challenge: "Das Restaurant mit Blick auf die Weser verlor durch manuelle Reservierungsverwaltung und fehlende Umsatzanalysen jährlich etwa 15 % potenzielle Einnahmen.",
      solution: "KI-Reservierungssystem mit Tischrotationsoptimierung, automatische Revenue-Analyse und KI-gesteuertes Upselling-System für Getränke und Desserts.",
      result1: "Revenue-per-Seat +21 %",
      result2: "Upselling-Quote +44 %",
      result3: "Online-Bewertung ⌀ +0,6 Sterne",
    },
    faqs: [
      {
        question: "Wie hilft KI bei der Verwaltung von Restaurantterrassen an der Weser?",
        answer: "Wetterbasierte Nachfrageprognosen ermöglichen präzise Personalplanung für Außenbereiche. KI berücksichtigt dabei Tide, Windstärke und lokale Wetteranomalien.",
      },
      {
        question: "Kann KI Bremer Spezialitäten-Restaurants bei der Zutatenbeschaffung helfen?",
        answer: "Ja — KI-Einkaufssysteme analysieren regionale Lieferanten, Saisonalität und Preisschwankungen von Spezialzutaten wie Bremer Pinkel, Labskaus oder frischen Nordsee-Fisch.",
      },
      {
        question: "Gibt es Förderungen für digitale Transformation in Bremer Gastrobetrieben?",
        answer: "Die WFB Wirtschaftsförderung Bremen bietet Förderprogramme für KMU-Digitalisierung. Wir helfen Ihnen, die passenden Fördertöpfe zu identifizieren und Anträge zu stellen.",
      },
    ],
  },
  {
    slug: "essen",
    name: "Essen",
    layout: 1,
    metaTitle: "KI für Essens Gastronomie im Strukturwandel | KI Beratung für Gastronomie Essen",
    metaDescription: "KI Beratung Gastronomie Essen: Zechen-Erbe trifft digitale Zukunft — KI macht Ihre Gastronomie fit. Jetzt anfragen.",
    h1: "Vom Ruhrgebiet in die digitale Zukunft: KI-Beratung für Essens Gastronomen",
    intro: "Essen hat den Strukturwandel vom Kohle- zum Kulturzentrum gemeistert — und ist heute Kulturhauptstadt Europas mit einer blühenden Gastronomieszene rund um das Zollverein-Quartier. Die Mischung aus Industriekultur-Tourismus und lokaler Bevölkerung schafft einzigartige Chancen für KI-optimierte Gastronomiebetriebe.",
    stats: {
      betriebe: "2.200+",
      mitarbeiter: "18.000",
      markttrend: "+6,3 %",
      label1: "Gastronomiebetriebe in Essen",
      label2: "Beschäftigte im Essener Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Zeche Bistro – Essen-Katernberg",
      challenge: "Das Restaurant im umgenutzten Industriegebäude hatte hohe Energiekosten und ineffiziente Einkaufsprozesse — bei gleichzeitig wachsender Gästenachfrage.",
      solution: "KI-Energiemanagementsystem, intelligente Einkaufsoptimierung und automatisches Gäste-Feedback-System zur Qualitätssicherung.",
      result1: "Energiekosten −31 %",
      result2: "Wareneinsatz −19 %",
      result3: "Wiederkehrrate +27 %",
    },
    faqs: [
      {
        question: "Wie kann KI Essener Restaurants im Zollverein-Quartier unterstützen?",
        answer: "KI-Systeme synchronisieren sich mit dem Veranstaltungskalender des UNESCO-Welterbes Zeche Zollverein und optimieren Kapazitäten, Menüs und Öffnungszeiten für Ausstellungen und Events.",
      },
      {
        question: "Hilft KI auch bei der Energieoptimierung für große Restaurantflächen?",
        answer: "Ja — KI-Energiemanagementsysteme analysieren Verbrauchsmuster und passen Heizung, Kühlung und Beleuchtung automatisch an die aktuelle Auslastung an. Typische Einsparung: 25–35 %.",
      },
      {
        question: "Gibt es spezielle KI-Lösungen für Gastronomie in Industriedenkmälern?",
        answer: "Wir haben Erfahrung mit Betrieben in denkmalgeschützten Gebäuden, wo technische Einschränkungen kreative KI-Lösungen erfordern, die in bestehende Strukturen integriert werden können.",
      },
    ],
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    layout: 2,
    metaTitle: "Fußballstadt Dortmund: KI für Stadion-Gastronomie | KI Beratung für Gastronomie Dortmund",
    metaDescription: "KI Beratung Gastronomie Dortmund: BVB-Spieltage & Alltag mit KI optimal managen. Kostenlose Erstberatung.",
    h1: "Gastronomie Dortmund: KI für die Stadt der 80.000 — und darüber hinaus",
    intro: "Dortmund hat mit dem Signal-Iduna-Park das größte Fußballstadion Deutschlands — und eine Gastrobranche, die zu Spieltagen vor einzigartigen Herausforderungen steht. Aber auch außerhalb der BVB-Spiele bietet Dortmunds wachsende Kreativszene rund um die Nordstadt enormes Potenzial für KI-optimierte Gastronomiekonzepte.",
    stats: {
      betriebe: "2.500+",
      mitarbeiter: "20.000",
      markttrend: "+7,9 %",
      label1: "Gastronomiebetriebe in Dortmund",
      label2: "Beschäftigte im Dortmunder Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Westfalentor Gastropub – Dortmund-Innenstadt",
      challenge: "Der Gastropub hatte zu BVB-Heimspielen dreifachen Ansturm, war aber technisch und personell nicht in der Lage, alle Gäste zeitnah zu bedienen.",
      solution: "KI-Spieltagsprognose mit automatischer Personalplanung, digitales Vorbestellsystem für Matchday-Pakete und KI-Auslastungsampel in Echtzeit.",
      result1: "Spieltagumsatz +58 %",
      result2: "Wartezeit −51 %",
      result3: "Personaleffizienz +33 %",
    },
    faqs: [
      {
        question: "Wie kann KI Dortmunder Betriebe zu BVB-Spieltagen optimal vorbereiten?",
        answer: "KI-Systeme analysieren Spieltagskalender, Gegnerattraktivität, TV-Übertragungen und historische Auslastungsdaten, um Personal, Wareneinkauf und Reservierungskapazitäten automatisch anzupassen.",
      },
      {
        question: "Hilft KI auch Restaurants außerhalb des Stadionumfelds in Dortmund?",
        answer: "Absolut — KI-Lösungen für Menüoptimierung, Lieferkette und Kundenbindung sind unabhängig von Spieltagen effektiv und steigern die Profitabilität ganzjährig.",
      },
      {
        question: "Kann KI Lieferkonzepte für Dortmunder Gastronomie verbessern?",
        answer: "Ja — KI optimiert Lieferradius, Bestellspitzen-Management und automatische Routenplanung, was gerade in einer weitläufigen Stadtstruktur wie Dortmund entscheidend für Profitabilität ist.",
      },
    ],
  },
  {
    slug: "bochum",
    name: "Bochum",
    layout: 3,
    metaTitle: "KI-Gastronomieberatung für die Universitätsstadt | KI Beratung für Gastronomie Bochum",
    metaDescription: "KI Beratung Gastronomie Bochum: Studenten-Gastronomie & Stadtkultur mit KI optimieren. Jetzt beraten lassen.",
    h1: "Bochum neu gastieren: KI-Beratung für eine Uni-Stadt im Aufbruch",
    intro: "Bochum ist Studentenstadt und Kulturmetropole des Ruhrgebiets in einem — mit über 40.000 Studierenden, dem Schauspielhaus Bochum und einer wachsenden Gastroszene rund ums Bermuda3Eck. Diese Mischung aus preisbewusstem Studentenpublikum und kulturaffinen Stadtbesuchern stellt Gastronomen vor besondere Herausforderungen, die KI effizient löst.",
    stats: {
      betriebe: "1.700+",
      mitarbeiter: "14.000",
      markttrend: "+6,5 %",
      label1: "Gastronomiebetriebe in Bochum",
      label2: "Beschäftigte im Bochumer Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Bermudadreieck Tapas – Bochum-Innenstadt",
      challenge: "Die Tapasbar kämpfte mit unregelmäßigen Bestellmustern und hohem Abfall durch schlecht abgestimmte Einkaufsmengen bei der studentischen Zielgruppe.",
      solution: "KI-Nachfrageprognose auf Basis von Semesterkalender, Campusevents und Wochentag-Mustern mit automatischer Bestandsoptimierung.",
      result1: "Lebensmittelabfall −53 %",
      result2: "Umsatz Semesterzeit +29 %",
      result3: "Wareneinsatzquote −11 %",
    },
    faqs: [
      {
        question: "Wie berücksichtigt KI die Semesterrhythmen der Bochumer Studentengastronomie?",
        answer: "KI-Systeme lernen aus historischen Daten, wann Prüfungsphasen, Semesterstart und -ende, sowie Hochschulveranstaltungen die Gastronomienachfrage beeinflussen — und planen automatisch voraus.",
      },
      {
        question: "Kann KI helfen, Bochumer Studenten als Stammgäste zu binden?",
        answer: "Ja — KI-gestützte Loyalty-Programme mit personalisierten Angeboten, studentengerechten Preispunkten und Semesterpässen helfen dabei, aus Einmalbesuchern treue Gäste zu machen.",
      },
      {
        question: "Welche KI-Lösungen eignen sich besonders für preisgünstige Gastronomie in Bochum?",
        answer: "Für preissensible Konzepte empfehlen wir KI-Einkaufsoptimierung, automatisierte Bestellprozesse und KI-Menüplanung, die Foodcost unter 28 % hält — ohne Qualitätsverlust.",
      },
    ],
  },
  {
    slug: "wuppertal",
    name: "Wuppertal",
    layout: 1,
    metaTitle: "Gastronomie Wuppertal mit KI modernisieren | KI Beratung für Gastronomie Wuppertal",
    metaDescription: "KI Beratung Gastronomie Wuppertal: Bergisches Land trifft digitale Innovation — KI für Ihre Gastronomie. Anfragen.",
    h1: "Schwebebahn-Stadt Wuppertal: KI hebt Ihre Gastronomie auf ein neues Level",
    intro: "Wuppertal ist bekannt für die historische Schwebebahn und liegt inmitten des Bergischen Landes — eine Stadt mit eigenem Charakter und einer Gastronomieszene, die zwischen bergischer Tradition und urbanem Lebensstil pendelt. KI-Lösungen helfen Wuppertaler Gastronomen, effizienter zu wirtschaften und neue Kundenschichten zu erschließen.",
    stats: {
      betriebe: "1.400+",
      mitarbeiter: "11.500",
      markttrend: "+5,9 %",
      label1: "Gastronomiebetriebe in Wuppertal",
      label2: "Beschäftigte im Wuppertaler Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Bergisches Wirtshaus – Wuppertal-Barmen",
      challenge: "Das traditionelle Wirtshaus verlor Stammkunden an modernere Konzepte und hatte keine digitale Infrastruktur für Reservierungen oder Kundenbindung.",
      solution: "KI-gestützte Modernisierungsstrategie: digitales Reservierungssystem, KI-Kundenbindungsprogramm und automatisierte Social-Media-Kommunikation.",
      result1: "Neue Zielgruppe (25–40 J.) +38 %",
      result2: "Online-Reservierungen +210 %",
      result3: "Stammkundenumsatz +16 %",
    },
    faqs: [
      {
        question: "Wie kann KI Wuppertaler Traditionsrestaurants helfen, jüngere Zielgruppen anzusprechen?",
        answer: "KI-Marketinganalysen identifizieren die Präferenzen jüngerer Gäste und generieren personalisierte Angebote, Social-Media-Inhalte und digitale Kommunikation, die diese Zielgruppe anspricht.",
      },
      {
        question: "Eignet sich KI für kleine Gastronomiebetriebe in Wuppertaler Stadtteilen?",
        answer: "Besonders kleine Betriebe in Stadtteilen wie Barmen, Elberfeld oder Cronenberg profitieren von KI-gestützten Stammdaten-Analysen und einfachen Automatisierungen, die schnell ROI liefern.",
      },
      {
        question: "Kann KI bei der Vermarktung bergischer Spezialitäten in Wuppertal helfen?",
        answer: "Ja — KI-Content-Tools erstellen automatisch ansprechende Beschreibungen und Marketingmaterialien für regionale Spezialitäten wie Bergisches Waffeln, die lokale Identität und digitale Reichweite verbinden.",
      },
    ],
  },
  {
    slug: "bielefeld",
    name: "Bielefeld",
    layout: 2,
    metaTitle: "Die gibt's — und zwar mit KI: Gastro Bielefeld | KI Beratung für Gastronomie Bielefeld",
    metaDescription: "KI Beratung Gastronomie Bielefeld: Universitätsstadt & Handelsmetropole — KI optimiert Ihre Gastroprozesse. Anfragen.",
    h1: "Bielefeld gibt's — und Ihre Gastronomie wird mit KI noch besser",
    intro: "Bielefeld ist mit über 340.000 Einwohnern eine der größten Städte Nordrhein-Westfalens — ein wirtschaftlich starker Standort mit Universität, Mittelstandsunternehmen und einer wachsenden Gastronomieszene rund um den Alten Markt. KI-Lösungen sind ideal, um Bielefelds Gastronomen in diesem Wachstumsumfeld zu unterstützen.",
    stats: {
      betriebe: "1.500+",
      mitarbeiter: "12.000",
      markttrend: "+7,1 %",
      label1: "Gastronomiebetriebe in Bielefeld",
      label2: "Beschäftigte im Bielefelder Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Sparrenburg Lounge – Bielefeld-Altstadt",
      challenge: "Die Gastronomie im historischen Stadtkern kämpfte mit unstrukturierten Buchungsabläufen und hohem Personalaufwand bei Events und Firmenfeiern.",
      solution: "KI-Event-Management-System mit automatischer Kapazitätsplanung, digitalem Angebotsgenerator für Business-Events und KI-Staffing-Prognose.",
      result1: "Event-Buchungen +67 %",
      result2: "Planungsaufwand −55 %",
      result3: "Event-Umsatz +43 %",
    },
    faqs: [
      {
        question: "Wie können Bielefelder Restaurants Events und Firmenfeiern effizienter managen?",
        answer: "KI-Event-Management-Systeme automatisieren Anfragenbearbeitung, Angebotsstellung und Kapazitätsplanung — von der ersten Anfrage bis zur Abrechnung ohne manuellen Mehraufwand.",
      },
      {
        question: "Hilft KI auch bei der Verwaltung mehrerer Standorte einer Bielefelder Gastronomiekette?",
        answer: "Ja — Multi-Location-KI-Dashboards ermöglichen zentrale Steuerung von Einkauf, Personal und Menüs über alle Standorte hinweg, mit Einzelstandort-Analyse für gezielte Optimierungen.",
      },
      {
        question: "Wie schnell ist KI-Beratung in Bielefeld einsatzbereit?",
        answer: "Je nach Systemkomplexität sind erste KI-Lösungen in 2–6 Wochen einsatzbereit. Wir beginnen immer mit Quick-Wins, die sofortigen ROI liefern, bevor wir komplexere Systeme einführen.",
      },
    ],
  },
  {
    slug: "bonn",
    name: "Bonn",
    layout: 3,
    metaTitle: "Beethoven-Stadt Bonn: KI für Ihre Gastronomie | KI Beratung für Gastronomie Bonn",
    metaDescription: "KI Beratung Gastronomie Bonn: Diplomatenstadtviertel, Uni-Gastronomie & Tourismus mit KI effizient managen. Anfragen.",
    h1: "Bonn: Wo Beethoven Geschichte schrieb und KI Ihre Gastronomie neu schreibt",
    intro: "Bonn ist mehr als ehemalige Bundeshauptstadt — es ist eine lebendige Universitätsstadt mit internationaler Bevölkerung, zahlreichen UN-Behörden und dem Beethoven-Tourismus als Konstante. Diese einzigartige Mischung aus Bildung, Diplomatie und Kultur macht Bonner Gastronomie besonders und KI-Unterstützung besonders wertvoll.",
    stats: {
      betriebe: "1.600+",
      mitarbeiter: "13.000",
      markttrend: "+8,4 %",
      label1: "Gastronomiebetriebe in Bonn",
      label2: "Beschäftigte im Bonner Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Rheinaue Terrasse – Bonn-Beuel",
      challenge: "Das Restaurant mit Rheinblick hatte durch die internationale Gästeklientel besondere Anforderungen an mehrsprachigen Service und internationale Speisekartenkommunikation.",
      solution: "KI-Übersetzungssystem für digitale Speisekarten in 8 Sprachen, KI-Reservierungsassistent mit mehrsprachigem Chatbot und automatisches Gäste-Feedback-System.",
      result1: "Internationale Buchungen +84 %",
      result2: "Servicefehler durch Sprachbarrieren −91 %",
      result3: "Gästebewertungen ⌀ 4,8/5",
    },
    faqs: [
      {
        question: "Wie hilft KI bei der Betreuung internationaler Gäste in Bonner Restaurants?",
        answer: "KI-Übersetzungssysteme bieten Speisekarten in bis zu 30 Sprachen, inklusive Allergenkennzeichnung und kulturell angepassten Empfehlungen — ideal für Bonns internationale Gemeinschaft.",
      },
      {
        question: "Kann KI Bonner Gastronomie beim Beethoven-Jubiläumsjahr unterstützen?",
        answer: "Ja — KI synchronisiert Restaurantkapazitäten und -angebote mit dem Kulturkalender (Beethovenfest, UN-Events) und ermöglicht gezielte Vermarktung an Kulturtouristen.",
      },
      {
        question: "Eignet sich KI für die Gastronomie rund um Bonner Hochschulen?",
        answer: "Besonders gut — KI-Systeme analysieren Semesterkalender, Hochschulveranstaltungen und studentische Budgets, um Angebote, Preise und Kapazitäten optimal anzupassen.",
      },
    ],
  },
  {
    slug: "muenster",
    name: "Münster",
    layout: 1,
    metaTitle: "Fahrradstadt Münster: KI für Ihre Gastro | KI Beratung für Gastronomie Münster",
    metaDescription: "KI Beratung Gastronomie Münster: Studentenstadt & Kulturzentrum Westfalens — KI optimiert Ihre Betriebe. Anfragen.",
    h1: "Münster radelt voran — und KI macht Ihre Gastronomie noch schneller",
    intro: "Münster ist Deutschlands Fahrradhauptstadt und eine der beliebtesten Universitätsstädte — mit über 60.000 Studierenden und einem Stadtbild geprägt von Fahrrädern, Aasee und historischer Altstadt. Die Gastrolandschaft Münsters ist lebhaft und vielfältig, von studentischen Cafés bis zur gehobenen Küche am Prinzipalmarkt. KI bringt Ordnung in diese Vielfalt.",
    stats: {
      betriebe: "1.800+",
      mitarbeiter: "14.500",
      markttrend: "+9,7 %",
      label1: "Gastronomiebetriebe in Münster",
      label2: "Beschäftigte im Münsteraner Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr — stärkstes Wachstum in Westfalen",
    },
    caseStudy: {
      restaurant: "Prinzipalmarkt Bistro – Münster-Innenstadt",
      challenge: "Das zentral gelegene Bistro hatte zu Stoßzeiten (Mittagessen, Wochenmärkte) massiven Andrang, konnte aber keine präzisen Prognosen für Einkauf und Personal erstellen.",
      solution: "KI-Prognosemodell basierend auf Wochenmarktkalender, Semesterplan und Wetterdaten mit automatischer Personaleinsatzplanung und Einkaufsoptimierung.",
      result1: "Stoßzeit-Wartezeit −44 %",
      result2: "Wareneinsatz −15 %",
      result3: "Umsatz/Arbeitsstunde +32 %",
    },
    faqs: [
      {
        question: "Wie berücksichtigt KI den Wochenmarkt und Fahrradtourismus in Münster?",
        answer: "KI-Systeme integrieren den Münsteraner Marktkalender, saisonale Fahrradrouten-Daten und Touristikstatistiken, um Nachfrageprognosen zu erstellen und Einkauf sowie Personal anzupassen.",
      },
      {
        question: "Kann KI Münsteraner Gastronomen bei Catering für Hochschulevents helfen?",
        answer: "Ja — von der automatischen Anfragebearbeitung über Kapazitätsplanung bis zur Nachkalkulation bietet KI eine vollständige Cateringlösung für Hochschulveranstaltungen jeder Größe.",
      },
      {
        question: "Welche Vorteile hat KI-Einsatz speziell für Café-Kultur in Münster?",
        answer: "Münsters lebendige Café-Kultur profitiert von KI-gestützter Barista-Bestellprognose, automatischer Kaffeebohnen-Disposition und KI-basierter Social-Media-Strategie für lokale Communitys.",
      },
    ],
  },
  {
    slug: "karlsruhe",
    name: "Karlsruhe",
    layout: 2,
    metaTitle: "KIT-Stadt Karlsruhe: KI für smarte Gastronomie | KI Beratung für Gastronomie Karlsruhe",
    metaDescription: "KI Beratung Gastronomie Karlsruhe: Technologiestadt trifft Gastroexzellenz — KI optimiert Ihre Betriebe. Anfragen.",
    h1: "Karlsruhe: Wo Technologie zu Hause ist — auch in Ihrer Gastronomie",
    intro: "Karlsruhe ist Deutschlands Technologiehauptstadt — Heimat des KIT (Karlsruher Institut für Technologie), des Bundesgerichtshofs und einer innovationsgetriebenen Wirtschaft. Gastronomische Betriebe in Karlsruhe haben ein besonders technikaffines Publikum und profitieren daher besonders stark von KI-Lösungen, die Gäste begeistern und Kosten senken.",
    stats: {
      betriebe: "1.700+",
      mitarbeiter: "13.500",
      markttrend: "+10,8 %",
      label1: "Gastronomiebetriebe in Karlsruhe",
      label2: "Beschäftigte im Karlsruher Gastgewerbe",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "KIT Corner Bistro – Karlsruhe-Südstadt",
      challenge: "Das Technik-Café nahe dem Campus hatte stark schwankende Auslastung je nach Vorlesungszeiten und Prüfungsperioden, ohne systematische Anpassung der Abläufe.",
      solution: "KI-Campus-Kalender-Integration mit automatischer Kapazitätsanpassung, digitalem Self-Order-System für technikaffine Gäste und KI-Kundenbindungsprogramm.",
      result1: "Prüfungszeit-Umsatz +47 %",
      result2: "Self-Order-Anteil 68 %",
      result3: "Kundenzufriedenheit ⌀ 4,9/5",
    },
    faqs: [
      {
        question: "Wie profitiert Karlsruher Technologie-Gastronomie von KI-Self-Order-Systemen?",
        answer: "Technikaffines Publikum wie KIT-Studenten und Technologiemitarbeiter bevorzugen digitale Bestellprozesse. KI-Self-Order-Systeme reduzieren Wartezeiten, Bestellfehler und Personalkosten gleichzeitig.",
      },
      {
        question: "Kann KI Karlsruher Start-ups bei der Eröffnung neuer Gastronomiekonzepte helfen?",
        answer: "Absolut — KI-Standortanalyse, Zielgruppenprofiling und Preisfindungsmodelle sind ideale Werkzeuge für Gastronomiegründer in Karlsruhe, das eine der höchsten Start-up-Dichten Baden-Württembergs hat.",
      },
      {
        question: "Welche KI-Innovationen sind für Karlsruher Gastronomen besonders interessant?",
        answer: "Als Technologiestandort ist Karlsruhe ideal für Pionier-KI-Konzepte wie Roboterbestellung, KI-Küchenassistenten und vollautomatische Abrechnungssysteme — wir implementieren heute, was andere morgen einführen.",
      },
    ],
  },
];

export const cityMap = Object.fromEntries(cities.map((c) => [c.slug, c]));

export function generateStaticParamsList() {
  return cities.map((c) => ({ stadt: c.slug }));
}
