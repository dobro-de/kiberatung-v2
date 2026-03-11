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
  arztpraxis: {
    slug: "arztpraxis",
    name: "Arztpraxen (Allgemeinmedizin)",
    metaTitle: "KI Beratung für Arztpraxen | kiberatung.de",
    metaDescription: "KI-Lösungen für Arztpraxen: Terminmanagement, KI-Dokumentation, Patientenkommunikation — DSGVO-konform. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Arztpraxen",
    intro: "Über 55.000 Hausarztpraxen in Deutschland stehen unter enormem Druck: steigende Patientenzahlen, Dokumentationspflichten und chronischer Personalmangel am Empfang. KI-Lösungen entlasten Praxisteams bei Terminvergabe, Dokumentation und Patientenkommunikation — damit mehr Zeit für die Medizin bleibt.",
    stats: { betriebe: "55.000+", mitarbeiter: "280.000", markttrend: "+12,5 %", label1: "Hausarztpraxen in Deutschland", label2: "MFA und Praxispersonal", label3: "KI-Adoption im Gesundheitswesen" },
    caseStudy: {
      restaurant: "Hausarztpraxis Dr. Weber — München",
      challenge: "Das Praxistelefon klingelte 120× am Tag. 2 MFA waren nur mit Terminvergabe beschäftigt — für Patienten vor Ort blieb kaum Zeit.",
      solution: "KI-Telefonassistent: Nimmt Anrufe entgegen, bucht Termine, beantwortet Routinefragen (Öffnungszeiten, Rezeptbestellungen) und leitet nur dringende Fälle weiter.",
      result1: "Telefonanrufe −75 %",
      result2: "MFA-Zufriedenheit +80 %",
      result3: "Patientenzufriedenheit 4,8/5",
    },
    faqs: [
      { question: "Ist KI in der Arztpraxis DSGVO-konform?", answer: "Ja. Alle unsere Lösungen laufen auf deutschen Servern, sind nach DSGVO zertifiziert und erfüllen die Vorgaben der Kassenärztlichen Vereinigung. Patientendaten verlassen nie den EU-Raum." },
      { question: "Kann KI Arztbriefe schreiben?", answer: "Ja. Sie diktieren die Befunde, die KI erstellt einen strukturierten Arztbrief mit ICD-Codes, Diagnosen und Therapieempfehlungen. Prüfung und Freigabe bleiben beim Arzt." },
      { question: "Wie schnell ist ein KI-Telefonassistent eingerichtet?", answer: "In 1–2 Wochen. Wir trainieren die KI auf Ihre Praxis: Öffnungszeiten, Sprechstunden, häufige Fragen, Termintypen. Danach läuft es automatisch." },
    ],
  },
  zahnarzt: {
    slug: "zahnarzt",
    name: "Zahnarztpraxen",
    metaTitle: "KI Beratung für Zahnarztpraxen | kiberatung.de",
    metaDescription: "KI für Zahnarztpraxen: Terminbuchung, Recall-System, Heil- und Kostenplan-Erstellung automatisieren. DSGVO-konform.",
    h1: "KI Automatisierung für Zahnarztpraxen",
    intro: "Über 45.000 Zahnarztpraxen in Deutschland kämpfen mit vollen Wartezimmern, No-Shows und dem bürokratischen Aufwand von Heil- und Kostenplänen. KI automatisiert die Terminvergabe, erinnert Patienten an Recalls und hilft bei der Erstellung von HKPs — damit der Zahnarzt behandeln kann statt zu verwalten.",
    stats: { betriebe: "45.000+", mitarbeiter: "340.000", markttrend: "+9,8 %", label1: "Zahnarztpraxen in Deutschland", label2: "ZFA und Praxispersonal", label3: "KI-Wachstum in der Zahnmedizin" },
    caseStudy: {
      restaurant: "Zahnarztpraxis Dr. Schulz — Hamburg",
      challenge: "30 % der Prophylaxe-Termine fielen aus. Das Recall-System per Postkarte war teuer und ineffektiv.",
      solution: "KI-Recall: Automatische SMS/WhatsApp-Erinnerungen mit direkter Online-Buchung. Bei No-Show wird der Slot sofort an Warteliste-Patienten vergeben.",
      result1: "No-Shows −65 %",
      result2: "Recall-Kosten −90 %",
      result3: "Prophylaxe-Umsatz +22 %",
    },
    faqs: [
      { question: "Kann KI Heil- und Kostenpläne erstellen?", answer: "KI erstellt HKP-Entwürfe basierend auf Befund und Standardtherapie. Der Zahnarzt prüft, passt an und gibt frei. Das spart 15–30 Minuten pro HKP." },
      { question: "Wie funktioniert das KI-Recall-System?", answer: "Die KI erinnert Patienten automatisch per SMS oder WhatsApp an fällige Prophylaxe, PZR oder Kontrolltermine. Der Patient kann direkt online buchen — kein Anruf nötig." },
      { question: "Ist KI auch für Überweiser-Management geeignet?", answer: "Ja. KI kann automatisch Befunde an überweisende Kollegen senden, Rückmeldungen tracken und bei ausbleibender Antwort nachfassen." },
    ],
  },
  physiotherapie: {
    slug: "physiotherapie",
    name: "Physiotherapie-Praxen",
    metaTitle: "KI Beratung für Physiotherapie-Praxen | kiberatung.de",
    metaDescription: "KI für Physiotherapeuten: Terminbuchung, Übungspläne, Dokumentation automatisieren. Mehr Therapiezeit, weniger Verwaltung.",
    h1: "KI Automatisierung für Physiotherapie-Praxen",
    intro: "Physiotherapeuten verbringen bis zu 40 % ihrer Arbeitszeit mit Verwaltung statt Behandlung. Über 40.000 Praxen in Deutschland könnten mit KI den Dokumentationsaufwand halbieren und mehr Patienten behandeln. Automatische Terminplanung, digitale Übungspläne und KI-gestützte Verlaufsdokumentation machen es möglich.",
    stats: { betriebe: "40.000+", mitarbeiter: "210.000", markttrend: "+11,3 %", label1: "Physiotherapie-Praxen in DE", label2: "Therapeuten und Praxispersonal", label3: "Digitalisierungswachstum" },
    caseStudy: {
      restaurant: "PhysioPlus — Köln",
      challenge: "3 Therapeuten, 1 Empfangskraft — und 80 Anrufe am Tag. Die Empfangskraft kam nicht hinterher, Patienten hingen in der Warteschleife.",
      solution: "KI-Terminbuchung per Website und WhatsApp. Patienten buchen selbst, KI berücksichtigt Therapeuten-Verfügbarkeit und Behandlungsdauer.",
      result1: "Online-Buchungen 70 %",
      result2: "Telefonanrufe −60 %",
      result3: "2 zusätzliche Patienten/Tag",
    },
    faqs: [
      { question: "Kann KI Übungspläne für Patienten erstellen?", answer: "Ja. Basierend auf Diagnose und Therapieverlauf erstellt die KI individuelle Übungspläne mit Video-Anleitungen. Patienten erhalten sie per App oder PDF." },
      { question: "Wie hilft KI bei der Verlaufsdokumentation?", answer: "Per Spracheingabe nach der Behandlung: KI erstellt einen strukturierten Bericht mit Befund, Therapie und Empfehlung. Spart 10–15 Minuten pro Patient." },
      { question: "Funktioniert das auch mit meiner Praxissoftware?", answer: "Wir integrieren mit gängigen Systemen wie Theorg, MediFox, Starke Praxis und anderen. Daten fließen automatisch." },
    ],
  },
  pflege: {
    slug: "pflege",
    name: "Pflegedienste & Pflegeheime",
    metaTitle: "KI Beratung für Pflegedienste | kiberatung.de",
    metaDescription: "KI für Pflegedienste: Tourenplanung, Pflegedokumentation, Dienstplanung, Angehörigenkommunikation automatisieren. DSGVO-konform.",
    h1: "KI Automatisierung für Pflegedienste & Pflegeheime",
    intro: "Die Pflegebranche ist chronisch unterbesetzt — und die Dokumentationspflichten wachsen. Über 15.000 ambulante Pflegedienste und 16.000 stationäre Einrichtungen in Deutschland brauchen jede Minute Entlastung. KI optimiert Tourenplanung, automatisiert Pflegedokumentation und hält Angehörige auf dem Laufenden.",
    stats: { betriebe: "31.000+", mitarbeiter: "1,2 Mio", markttrend: "+14,2 %", label1: "Pflegedienste und -heime in DE", label2: "Beschäftigte in der Pflege", label3: "KI-Wachstum in der Pflege" },
    caseStudy: {
      restaurant: "Pflegedienst Herz & Hand — Berlin",
      challenge: "12 Pflegekräfte, 180 Patienten, 600 Einsätze pro Woche. Die Tourenplanung dauerte jeden Sonntag 4 Stunden.",
      solution: "KI-Tourenplanung: Optimiert Routen unter Berücksichtigung von Pflegegrad, Zeitfenstern, Qualifikation der Pflegekraft und Verkehrslage.",
      result1: "Tourenplanung in 15 Minuten",
      result2: "Fahrzeit −30 %",
      result3: "4 zusätzliche Einsätze/Tag",
    },
    faqs: [
      { question: "Kann KI Pflegedokumentation vereinfachen?", answer: "Ja. Pflegekräfte diktieren kurze Notizen, die KI erstellt daraus strukturierte Pflegeberichte nach SIS-Standard. Das spart 30–45 Minuten pro Schicht." },
      { question: "Ist KI-Dokumentation MDK-konform?", answer: "Ja. Die KI erstellt Dokumentation nach den Vorgaben des Medizinischen Dienstes. Pflegegrade, Maßnahmenplanung und Verlaufsberichte entsprechen den Prüfstandards." },
      { question: "Wie werden Angehörige informiert?", answer: "Automatische Statusupdates per App oder WhatsApp: Wann war die Pflegekraft da, was wurde gemacht, wie geht es dem Angehörigen. Transparent und vertrauensbildend." },
    ],
  },
  apotheke: {
    slug: "apotheke",
    name: "Apotheken",
    metaTitle: "KI Beratung für Apotheken | kiberatung.de",
    metaDescription: "KI für Apotheken: Bestandsmanagement, eRezept-Automatisierung, Kundenberatung, Warenwirtschaft. DSGVO-konform.",
    h1: "KI Automatisierung für Apotheken",
    intro: "Apotheken stehen vor einem Umbruch: eRezept, Versandhandel-Konkurrenz und wachsende Beratungsanforderungen. Über 18.000 Apotheken in Deutschland können mit KI ihr Bestandsmanagement optimieren, Routineberatungen automatisieren und die persönliche Beratung stärken.",
    stats: { betriebe: "18.000+", mitarbeiter: "160.000", markttrend: "+7,5 %", label1: "Apotheken in Deutschland", label2: "Beschäftigte in Apotheken", label3: "KI-Wachstum im Apothekenmarkt" },
    caseStudy: {
      restaurant: "Linden-Apotheke — Frankfurt",
      challenge: "Überbestände bei 200 Artikeln, Fehlbestände bei 50. Bestellungen liefen manuell — ineffizient und fehleranfällig.",
      solution: "KI-Warenwirtschaft: Analysiert Abverkaufsdaten, saisonale Trends und Verfallsdaten. Bestellvorschläge werden automatisch generiert.",
      result1: "Überbestände −40 %",
      result2: "Fehlbestände −85 %",
      result3: "Kapitalbindung −25.000 €/Jahr",
    },
    faqs: [
      { question: "Kann KI bei der eRezept-Verarbeitung helfen?", answer: "Ja. KI automatisiert die Prüfung eingehender eRezepte, gleicht mit Bestand ab, prüft Wechselwirkungen und bereitet die Ausgabe vor. Das spart 30 Sekunden pro Rezept." },
      { question: "Wie hilft KI bei der Kundenberatung?", answer: "Ein KI-Assistent für PTA/PKA: Bei Kundenfragen zu Wechselwirkungen, Nebenwirkungen oder Alternativen liefert die KI sofort fundierte Antworten aus Fachdatenbanken." },
      { question: "Funktioniert KI mit meiner Warenwirtschaft?", answer: "Ja. Wir integrieren mit LAUER-FISCHER, Pharmatechnik, ADG und anderen gängigen Systemen. Die KI lernt aus Ihren bestehenden Daten." },
    ],
  },
  mvz: {
    slug: "mvz",
    name: "MVZ (Medizinische Versorgungszentren)",
    metaTitle: "KI Beratung für MVZ | kiberatung.de",
    metaDescription: "KI für MVZ: Praxisübergreifende Terminkoordination, Zuweisermanagement, Abrechnung automatisieren. Kostenlose Beratung.",
    h1: "KI Automatisierung für Medizinische Versorgungszentren",
    intro: "MVZ koordinieren mehrere Fachrichtungen unter einem Dach — das macht sie komplex in der Verwaltung. KI hilft bei der fachübergreifenden Terminplanung, optimiert Patientenströme und automatisiert die Abrechnung über mehrere Leistungserbringer hinweg.",
    stats: { betriebe: "4.700+", mitarbeiter: "85.000", markttrend: "+18,5 %", label1: "MVZ in Deutschland", label2: "Beschäftigte in MVZ", label3: "Wachstum MVZ-Gründungen" },
    caseStudy: {
      restaurant: "MVZ Am Stadtpark — Düsseldorf",
      challenge: "5 Fachrichtungen, 12 Ärzte, ein Empfang. Die Terminkoordination war chaotisch, Patienten wurden falsch zugewiesen.",
      solution: "KI-Terminmanagement: Analysiert Symptome, weist der richtigen Fachrichtung zu und plant Termine so, dass Wartezeiten minimiert werden.",
      result1: "Fehlzuweisungen −90 %",
      result2: "Wartezeit −35 %",
      result3: "Patientendurchlauf +20 %",
    },
    faqs: [
      { question: "Kann KI Patienten der richtigen Fachrichtung zuweisen?", answer: "Ja. Basierend auf Symptombeschreibung und Anamnese schlägt die KI die passende Fachrichtung vor und bucht direkt beim verfügbaren Arzt — ohne Umweg über den Empfang." },
      { question: "Wie hilft KI bei der MVZ-Abrechnung?", answer: "KI prüft automatisch, ob alle Leistungen korrekt codiert sind, identifiziert fehlende Ziffern und optimiert die Abrechnungslogik — je nach KV-Bezirk." },
      { question: "Funktioniert das bei mehreren Standorten?", answer: "Ja. KI koordiniert Termine standortübergreifend, gleicht Verfügbarkeiten ab und schlägt dem Patienten den nächsten freien Termin am günstigsten Standort vor." },
    ],
  },
  psychotherapie: {
    slug: "psychotherapie",
    name: "Psychotherapie-Praxen",
    metaTitle: "KI Beratung für Psychotherapie-Praxen | kiberatung.de",
    metaDescription: "KI für Psychotherapeuten: Wartelistenmanagement, Sitzungsdokumentation, Therapieberichte automatisieren. DSGVO-konform.",
    h1: "KI Automatisierung für Psychotherapie-Praxen",
    intro: "Psychotherapeuten haben die längsten Wartelisten im Gesundheitswesen — 6 Monate Wartezeit sind keine Seltenheit. Gleichzeitig frisst die Dokumentation wertvolle Therapiezeit. KI hilft bei Wartelistenmanagement, automatisiert Therapieberichte und entlastet bei der Antragsstellung.",
    stats: { betriebe: "35.000+", mitarbeiter: "48.000", markttrend: "+15,2 %", label1: "Psychotherapeuten in Deutschland", label2: "Psychotherapeutische Praxen", label3: "KI-Adoption in der Psychotherapie" },
    caseStudy: {
      restaurant: "Praxis für Psychotherapie Hoffmann — Berlin",
      challenge: "Warteliste mit 180 Patienten, keine Übersicht. Regelmäßig fielen Patienten durchs Raster oder sprangen ab.",
      solution: "KI-Wartelistenmanagement: Automatischer Kontakt mit Wartenden (Statusupdate, Kurzinterventionen), Priorisierung nach Dringlichkeit, sofortige Nachbesetzung bei Absagen.",
      result1: "Kein Patient vergessen",
      result2: "Absagen sofort nachbesetzt",
      result3: "Therapieplatz-Auslastung 98 %",
    },
    faqs: [
      { question: "Kann KI Therapieberichte für die Krankenkasse schreiben?", answer: "KI erstellt Entwürfe für Therapieberichte nach PTV-Formular. Sie diktieren Ihre Einschätzung, die KI strukturiert, formatiert und fügt relevante ICD-Codes ein. Prüfung bleibt bei Ihnen." },
      { question: "Ist KI-Dokumentation in der Psychotherapie datenschutzkonform?", answer: "Höchste Priorität. Alle Daten bleiben auf deutschen Servern, Ende-zu-Ende-verschlüsselt. Keine Weitergabe an Dritte, kein Cloud-Logging. Wir erfüllen die strengsten Anforderungen der Berufsordnung." },
      { question: "Wie funktioniert das Wartelistenmanagement?", answer: "Die KI hält automatisch Kontakt zu Wartenden: monatliche Statusupdates, Einschätzung der Dringlichkeit, Verweis auf Krisenhotlines bei akutem Bedarf. Bei freiem Platz wird der dringendste Patient sofort kontaktiert." },
    ],
  },
  tierarzt: {
    slug: "tierarzt",
    name: "Tierarztpraxen",
    metaTitle: "KI Beratung für Tierarztpraxen | kiberatung.de",
    metaDescription: "KI für Tierärzte: Terminbuchung, Impferinnerungen, Befunddokumentation, Abrechnungshilfe. DSGVO-konform.",
    h1: "KI Automatisierung für Tierarztpraxen",
    intro: "Tierarztpraxen erleben einen Boom — mehr Haustiere, höhere Ansprüche der Besitzer, steigende Behandlungskosten. Über 12.000 Praxen und Kliniken in Deutschland können mit KI die Terminvergabe automatisieren, Impferinnerungen versenden und Befunde schneller dokumentieren.",
    stats: { betriebe: "12.000+", mitarbeiter: "65.000", markttrend: "+9,3 %", label1: "Tierarztpraxen in Deutschland", label2: "Beschäftigte (TFA, Tierärzte)", label3: "Umsatzwachstum im Veterinärmarkt" },
    caseStudy: {
      restaurant: "Kleintierpraxis Am Park — Stuttgart",
      challenge: "Impferinnerungen per Postkarte: teuer, oft ignoriert, keine Terminbuchung möglich. 40 % der Impfungen wurden verpasst.",
      solution: "KI-Impf-Recall per WhatsApp: Automatische Erinnerung mit Impfstatus, direkter Terminlink und Follow-up bei Nicht-Reaktion.",
      result1: "Impf-Compliance +55 %",
      result2: "Recall-Kosten −80 %",
      result3: "Wiederkehrender Umsatz +18 %",
    },
    faqs: [
      { question: "Kann KI Befunde für Tierärzte dokumentieren?", answer: "Ja. Per Spracheingabe während der Behandlung: KI erstellt strukturierte Befunde mit Anamnese, Diagnose, Therapie und Medikation. GOT-konforme Dokumentation." },
      { question: "Wie funktioniert das KI-Impf-Recall?", answer: "Die KI kennt den Impfstatus jedes Tieres und erinnert Besitzer automatisch per SMS/WhatsApp — inklusive direkter Terminbuchung. Kein manuelles Nachhalten mehr." },
      { question: "Funktioniert KI mit Tierarztsoftware?", answer: "Wir integrieren mit easyVET, VetInf, Vetera und anderen. Impfdaten, Patientenakten und Termine werden automatisch synchronisiert." },
    ],
  },
  krankenhaus: {
    slug: "krankenhaus",
    name: "Krankenhäuser & Kliniken",
    metaTitle: "KI Beratung für Krankenhäuser | kiberatung.de",
    metaDescription: "KI für Kliniken: Bettenbelegung, OP-Planung, Entlassmanagement, Befundübermittlung automatisieren. Enterprise-Lösungen.",
    h1: "KI Automatisierung für Krankenhäuser & Kliniken",
    intro: "Krankenhäuser stehen unter enormem Kosten- und Effizienzdruck. KI hilft bei der Optimierung von Bettenbelegung, OP-Planung, Entlassmanagement und der Kommunikation zwischen Stationen. Große Einsparpotenziale bei gleichzeitig besserer Versorgungsqualität.",
    stats: { betriebe: "1.900+", mitarbeiter: "1,3 Mio", markttrend: "+16,7 %", label1: "Krankenhäuser in Deutschland", label2: "Beschäftigte in Kliniken", label3: "KI-Investitionswachstum" },
    caseStudy: {
      restaurant: "Klinikum Mitte — Bremen",
      challenge: "OP-Säle waren nur zu 62 % ausgelastet. Kurzfristige Absagen und ineffiziente Planung kosteten hunderttausende Euro pro Jahr.",
      solution: "KI-OP-Planung: Prognostiziert Absagen, optimiert Reihenfolge nach OP-Dauer und Ressourcen, füllt Lücken automatisch mit Warteliste-Patienten.",
      result1: "OP-Auslastung 81 %",
      result2: "Wartezeit für Patienten −40 %",
      result3: "Einsparung 320.000 €/Jahr",
    },
    faqs: [
      { question: "Wie optimiert KI die Bettenbelegung?", answer: "KI prognostiziert Aufnahmen und Entlassungen, identifiziert Engpässe frühzeitig und schlägt optimale Belegungen vor. Das reduziert Überbelegung und Leerstände gleichzeitig." },
      { question: "Kann KI bei der Entlassung helfen?", answer: "Ja. KI erstellt automatisch Entlassbriefe, koordiniert Nachsorge (Reha, Pflege, Hausarzt) und sendet Medikationspläne an den Patienten — strukturiert und verständlich." },
      { question: "Wie sicher ist KI im Krankenhaus?", answer: "Enterprise-Grade-Sicherheit: On-Premise oder Private Cloud, zertifiziert nach ISO 27001, BSI-Grundschutz. Volle Kontrolle über alle Daten — keine externen Zugriffe." },
    ],
  },
};

export const VARIANTEN_SLUGS = Object.keys(variantenMap);

export function getVariantBySlug(slug: string): VariantData | undefined {
  return variantenMap[slug];
}
