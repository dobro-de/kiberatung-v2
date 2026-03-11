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
    slug: "muenchen",
    name: "München",
    layout: 1,
    metaTitle: "KI Beratung für Arztpraxen in München | kiberatung.de",
    metaDescription: "KI-Lösungen für Münchner Arztpraxen & Kliniken: Terminmanagement, Dokumentation, Patientenservice. DSGVO-konform. Kostenlose Beratung.",
    h1: "KI Beratung für das Gesundheitswesen in München",
    intro: "München ist einer der größten Gesundheitsstandorte Deutschlands — mit über 8.000 niedergelassenen Ärzten, 5 Universitätskliniken und einem der dichtesten Versorgungsnetze Europas. KI hilft Münchner Praxen und Kliniken, die steigende Nachfrage zu bewältigen, ohne mehr Personal einstellen zu müssen.",
    stats: { betriebe: "8.000+", mitarbeiter: "120.000", markttrend: "+14,5 %", label1: "Niedergelassene Ärzte in München", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Adoption im Gesundheitswesen" },
    caseStudy: {
      restaurant: "HNO-Praxis Dr. Bernstein — München-Schwabing",
      challenge: "Die HNO-Praxis hatte 3 Monate Wartezeit. Patienten riefen trotzdem täglich an, um ihren Status zu erfragen — das blockierte den Empfang.",
      solution: "KI-Wartelistenbot: Beantwortet Statusanfragen automatisch per WhatsApp, sendet Updates bei Terminänderungen und bucht freigewordene Slots sofort nach.",
      result1: "Statusanfragen −85 %",
      result2: "Freigewordene Slots zu 100 % besetzt",
      result3: "Empfang wieder arbeitsfähig",
    },
    faqs: [
      { question: "Welche Münchner Praxen nutzen schon KI?", answer: "Besonders große Gemeinschaftspraxen, MVZ und Zahnarztpraxen sind Vorreiter. Aber auch Einzelpraxen profitieren — gerade beim Telefonmanagement und der Dokumentation." },
      { question: "Gibt es Förderung für KI in bayerischen Arztpraxen?", answer: "Ja. Der Digitalbonus Bayern fördert KMU mit bis zu 10.000 € (50 % Zuschuss). Praxen gelten als KMU und können davon profitieren." },
      { question: "Wie starten Münchner Praxen am besten mit KI?", answer: "Mit dem Telefonassistenten. Der größte Schmerzpunkt in Münchner Praxen ist das Telefon — und genau da bringt KI den schnellsten ROI." },
    ],
  },
  {
    slug: "berlin",
    name: "Berlin",
    layout: 2,
    metaTitle: "KI Beratung für Arztpraxen in Berlin | kiberatung.de",
    metaDescription: "KI für Berliner Arztpraxen: Terminbuchung, Dokumentation, mehrsprachige Patientenkommunikation. DSGVO-konform.",
    h1: "KI Beratung für das Gesundheitswesen in Berlin",
    intro: "Berlin hat über 12.000 niedergelassene Ärzte und eine der diversesten Patientenpopulationen Deutschlands. Mehrsprachigkeit, lange Wartezeiten und der Fachkräftemangel am Empfang machen KI zum idealen Partner für Berliner Praxen.",
    stats: { betriebe: "12.000+", mitarbeiter: "180.000", markttrend: "+13,8 %", label1: "Niedergelassene Ärzte in Berlin", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Adoption im Gesundheitswesen" },
    caseStudy: {
      restaurant: "Gemeinschaftspraxis Neukölln — Berlin",
      challenge: "60 % der Patienten sprachen kein fließendes Deutsch. Verständigungsprobleme führten zu Fehlbuchungen und Missverständnissen.",
      solution: "Mehrsprachiger KI-Terminbot: Buchung und Kommunikation auf Deutsch, Türkisch, Arabisch, Englisch und Russisch — automatisch erkannt.",
      result1: "Fehlbuchungen −70 %",
      result2: "Patientenzufriedenheit +45 %",
      result3: "Neue Patientengruppen erschlossen",
    },
    faqs: [
      { question: "Kann KI mehrsprachig kommunizieren?", answer: "Ja. Unsere KI erkennt die Sprache des Patienten automatisch und antwortet in über 20 Sprachen — per Chat, WhatsApp und Telefon. Besonders relevant für Berliner Praxen." },
      { question: "Wie hilft KI bei der Ärztemangel-Situation in Berlin?", answer: "KI ersetzt keine Ärzte, aber entlastet das Praxisteam um 2–4 Stunden pro Tag. Das ermöglicht mehr Patientenkontakte ohne zusätzliches Personal." },
      { question: "Gibt es Berliner Förderprogramme für Praxis-Digitalisierung?", answer: "Berlin bietet über den Digitalbonus Berlin Zuschüsse für Digitalisierung. Auch die KV Berlin unterstützt Praxen bei der digitalen Transformation." },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    layout: 3,
    metaTitle: "KI Beratung für Arztpraxen in Hamburg | kiberatung.de",
    metaDescription: "KI für Hamburger Praxen: Terminmanagement, KI-Dokumentation, Patientenservice automatisieren. Kostenlose Erstberatung.",
    h1: "KI Beratung für das Gesundheitswesen in Hamburg",
    intro: "Hamburg hat über 6.000 niedergelassene Ärzte und eine anspruchsvolle Patientenklientel. Hamburger erwarten digitalen Service — Online-Buchung, schnelle Kommunikation, transparente Wartezeiten. KI hilft Hamburger Praxen, diese Erwartungen zu erfüllen.",
    stats: { betriebe: "6.000+", mitarbeiter: "95.000", markttrend: "+12,1 %", label1: "Niedergelassene Ärzte in Hamburg", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Adoption in Hamburg" },
    caseStudy: {
      restaurant: "Orthopädie-Praxis Dr. Martens — Hamburg-Eppendorf",
      challenge: "MRT-Termine mussten extern koordiniert werden. Patienten warteten oft 6 Wochen und riefen regelmäßig nach.",
      solution: "KI-Zuweisungsmanagement: Automatische Koordination mit Radiologie-Praxen, Terminbestätigung an Patienten, Befundnachverfolgung.",
      result1: "MRT-Wartezeit −40 %",
      result2: "Nachfrage-Anrufe −75 %",
      result3: "Befunde schneller beim Arzt",
    },
    faqs: [
      { question: "Kann KI die Koordination mit anderen Praxen verbessern?", answer: "Ja. KI automatisiert Überweisungen, Terminkoordination und Befundaustausch zwischen Praxen. Das spart beiden Seiten Zeit und dem Patienten Wartezeit." },
      { question: "Wie sicher ist die KI-Kommunikation zwischen Praxen?", answer: "Ende-zu-Ende-verschlüsselt, KIM-kompatibel (Kommunikation im Medizinwesen). Alle Daten bleiben im deutschen Gesundheitsnetz." },
      { question: "Was kostet ein KI-Terminmanagement für eine Hamburger Praxis?", answer: "Ab 299 €/Monat für Einzelpraxen, ab 799 €/Monat für Gemeinschaftspraxen. Amortisiert sich durch eingesparte MFA-Stunden innerhalb von 4–6 Wochen." },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    layout: 1,
    metaTitle: "KI Beratung für Arztpraxen in Köln | kiberatung.de",
    metaDescription: "KI für Kölner Praxen & MVZ: Terminbuchung, Dokumentation, Abrechnung optimieren. DSGVO-konform. Kostenlose Beratung.",
    h1: "KI Beratung für das Gesundheitswesen in Köln",
    intro: "Köln mit über 5.000 niedergelassenen Ärzten ist ein medizinisches Zentrum am Rhein. Von der Hausarztpraxis in Ehrenfeld bis zum MVZ am Neumarkt — KI hilft Kölner Gesundheitseinrichtungen, effizienter zu arbeiten und Patienten besser zu versorgen.",
    stats: { betriebe: "5.000+", mitarbeiter: "78.000", markttrend: "+11,5 %", label1: "Niedergelassene Ärzte in Köln", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in NRW" },
    caseStudy: {
      restaurant: "Hausarztpraxis Am Chlodwigplatz — Köln-Südstadt",
      challenge: "Die Praxis wollte auf Online-Terminbuchung umsteigen, aber ältere Patienten kamen damit nicht zurecht.",
      solution: "Hybrid-Lösung: KI-Telefonassistent für ältere Patienten (natürliche Sprache, keine Menüs) + Online-Buchung für jüngere. Beide Kanäle synchronisiert.",
      result1: "95 % Erreichbarkeit",
      result2: "Alle Altersgruppen bedient",
      result3: "MFA-Entlastung 3h/Tag",
    },
    faqs: [
      { question: "Funktioniert KI auch für ältere Patienten?", answer: "Ja. Unser KI-Telefonassistent spricht natürliche Sprache — keine Menüs, kein 'Drücken Sie die 1'. Ältere Patienten sprechen einfach ihr Anliegen aus und die KI versteht." },
      { question: "Gibt es NRW-Förderung für Praxis-Digitalisierung?", answer: "Ja. NRW fördert über 'Mittelstand Innovativ & Digital' mit bis zu 15.000 € und über das BAFA-Programm 'Digital Jetzt' mit bis zu 50.000 € Zuschuss." },
      { question: "Wie integriert sich KI mit meinem Praxisverwaltungssystem?", answer: "Wir verbinden uns mit CGM, CompuGroup, medatixx, Dampsoft und anderen PVS. Termine, Patientendaten und Befunde fließen automatisch." },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    layout: 2,
    metaTitle: "KI Beratung für Arztpraxen in Frankfurt | kiberatung.de",
    metaDescription: "KI für Frankfurter Praxen: Privatpatienten-Management, Terminplanung, KI-Dokumentation. DSGVO-konform.",
    h1: "KI Beratung für das Gesundheitswesen in Frankfurt",
    intro: "Frankfurt am Main hat einen überdurchschnittlich hohen Privatpatientenanteil — und damit besondere Anforderungen an Service und Kommunikation. KI hilft Frankfurter Praxen, Premium-Service zu bieten: schnelle Termine, individuelle Kommunikation, lückenlose Dokumentation.",
    stats: { betriebe: "4.500+", mitarbeiter: "68.000", markttrend: "+13,2 %", label1: "Niedergelassene Ärzte in Frankfurt", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in Hessen" },
    caseStudy: {
      restaurant: "Internistische Privatpraxis — Frankfurt-Westend",
      challenge: "Privatpatienten erwarteten Termine innerhalb von 48 Stunden und persönliche Betreuung. Das Praxisteam war überfordert.",
      solution: "KI-Concierge: Erkennt Privatpatienten automatisch, bietet bevorzugte Terminslots, sendet personalisierte Vorbereitungshinweise und Nachsorge-Empfehlungen.",
      result1: "Privatpatienten-Termin <24h",
      result2: "Wiedervorstellungsrate +35 %",
      result3: "Google-Bewertung 4,9/5",
    },
    faqs: [
      { question: "Kann KI zwischen Kassen- und Privatpatienten unterscheiden?", answer: "Ja. Die KI erkennt den Versicherungsstatus und passt Terminvergabe, Kommunikation und Service-Level automatisch an — ohne Diskriminierung, aber mit differenziertem Service." },
      { question: "Wie hilft KI bei der Privatabrechnung?", answer: "KI schlägt GOÄ-Ziffern basierend auf Diagnose und Behandlung vor, prüft Abrechnungslogik und erstellt Rechnungsentwürfe. Der Arzt gibt nur noch frei." },
      { question: "Gibt es hessische Förderprogramme?", answer: "Ja. Hessen bietet über 'Distr@l' Fördermittel für Digitalisierungsprojekte — auch für Arztpraxen und medizinische Einrichtungen." },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    layout: 3,
    metaTitle: "KI Beratung für Arztpraxen in Stuttgart | kiberatung.de",
    metaDescription: "KI für Stuttgarter Praxen: Terminplanung, Dokumentation, Patientenkommunikation. Baden-Württemberg Förderung nutzen.",
    h1: "KI Beratung für das Gesundheitswesen in Stuttgart",
    intro: "Stuttgart und die Region sind ein starker Gesundheitsstandort mit über 4.000 niedergelassenen Ärzten. Die schwäbische Mentalität — effizient, qualitätsbewusst, bodenständig — passt perfekt zu KI: maximaler Output bei minimalem Aufwand.",
    stats: { betriebe: "4.000+", mitarbeiter: "62.000", markttrend: "+11,8 %", label1: "Niedergelassene Ärzte in Stuttgart", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in BaWü" },
    caseStudy: {
      restaurant: "Kinderarztpraxis Dr. Lenz — Stuttgart-West",
      challenge: "Kinderarztpraxen haben besonders viele kurzfristige Akuttermine (Fieber, Ohrenschmerzen). Die telefonische Triage war chaotisch.",
      solution: "KI-Akut-Triage per App: Eltern beschreiben Symptome, KI bewertet Dringlichkeit (sofort/heute/morgen/Regeltermin) und bucht passend.",
      result1: "Korrekte Triage in 95 % der Fälle",
      result2: "Wartezeit für Akutfälle −50 %",
      result3: "Eltern-Zufriedenheit 4,9/5",
    },
    faqs: [
      { question: "Ist KI-Triage sicher für Kinderarztpraxen?", answer: "Die KI trifft keine medizinischen Entscheidungen — sie priorisiert. Bei Warnsymptomen (hohes Fieber, Atemnot) wird sofort an den Arzt eskaliert. Die finale Entscheidung bleibt immer beim Mediziner." },
      { question: "Kann KI Impferinnerungen für Kinder senden?", answer: "Ja. Basierend auf dem STIKO-Impfkalender erinnert die KI automatisch an fällige Impfungen — altersgerecht und mit Terminbuchungsmöglichkeit." },
      { question: "Wie nutze ich die Digitalprämie Baden-Württemberg?", answer: "Die Digitalisierungsprämie Plus fördert bis zu 10.000 € (50 % Zuschuss). Wir helfen beim Antrag — dauert ca. 30 Minuten." },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    layout: 1,
    metaTitle: "KI Beratung für Arztpraxen in Düsseldorf | kiberatung.de",
    metaDescription: "KI für Düsseldorfer Praxen: Terminmanagement, Recall-System, KI-Dokumentation. NRW-Förderung nutzen.",
    h1: "KI Beratung für das Gesundheitswesen in Düsseldorf",
    intro: "Düsseldorf als Landeshauptstadt hat einen hohen Anteil an Fachärzten und Privatpraxen. Über 3.500 niedergelassene Ärzte konkurrieren um Patienten — wer digital aufgestellt ist, gewinnt. KI macht den Unterschied zwischen der Praxis, die in 30 Sekunden antwortet, und der, die 10 Minuten in der Warteschleife hängt.",
    stats: { betriebe: "3.500+", mitarbeiter: "52.000", markttrend: "+12,3 %", label1: "Niedergelassene Ärzte in Düsseldorf", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in NRW" },
    caseStudy: {
      restaurant: "Dermatologische Praxis Dr. Richter — Düsseldorf-Oberkassel",
      challenge: "Die Hautarztpraxis wollte ein Online-Vorsorge-Screening anbieten, hatte aber keine Kapazität für die Nachbearbeitung.",
      solution: "KI-Hautscreening-Triage: Patienten laden Fotos von Hautveränderungen hoch, KI priorisiert nach Verdachtsdiagnose. Dringende Fälle bekommen sofort einen Termin.",
      result1: "Dringende Fälle in <48h gesehen",
      result2: "Screening-Volumen 3× höher",
      result3: "Früherkennung deutlich verbessert",
    },
    faqs: [
      { question: "Kann KI Hautbilder analysieren?", answer: "KI kann Hautbilder nach Auffälligkeiten kategorisieren und eine Dringlichkeitseinschätzung geben. Keine Diagnose — aber eine fundierte Triage, die der Arzt nutzen kann." },
      { question: "Wie schützt die KI Patientenfotos?", answer: "Ende-zu-Ende-Verschlüsselung, deutsche Server, automatische Löschung nach Befundung. Kein Cloud-Speicher, keine Weitergabe. Vollständig DSGVO-konform." },
      { question: "Welche NRW-Förderung gibt es für Praxen?", answer: "NRW bietet 'Mittelstand Innovativ & Digital' (bis 15.000 €) und 'Digital Jetzt' (BAFA, bis 50.000 €). Wir unterstützen beim Antrag." },
    ],
  },
  {
    slug: "hannover",
    name: "Hannover",
    layout: 2,
    metaTitle: "KI Beratung für Arztpraxen in Hannover | kiberatung.de",
    metaDescription: "KI für Hannoveraner Praxen: Terminbuchung, Dokumentation, Patientenkommunikation automatisieren. Kostenlose Beratung.",
    h1: "KI Beratung für das Gesundheitswesen in Hannover",
    intro: "Hannover mit der Medizinischen Hochschule (MHH) ist ein wichtiger Gesundheitsstandort in Niedersachsen. Über 3.000 niedergelassene Ärzte und zahlreiche Kliniken können mit KI ihre Prozesse optimieren und die Versorgungsqualität steigern.",
    stats: { betriebe: "3.000+", mitarbeiter: "48.000", markttrend: "+10,5 %", label1: "Niedergelassene Ärzte in Hannover", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in Niedersachsen" },
    caseStudy: {
      restaurant: "Augenarztpraxis Sehkraft — Hannover-Mitte",
      challenge: "OCT- und Gesichtsfelduntersuchungen erforderten aufwendige Befundschreibung. Der Arzt saß abends noch 2 Stunden an Berichten.",
      solution: "KI-Befundassistent: Analysiert OCT-Bilder, erstellt strukturierten Vorbefund mit Messwerten und Verlaufsvergleich. Arzt prüft und ergänzt nur noch.",
      result1: "Befundzeit −60 %",
      result2: "Feierabend 2h früher",
      result3: "Befundqualität gleichbleibend hoch",
    },
    faqs: [
      { question: "Kann KI medizinische Bilder auswerten?", answer: "KI kann bei standardisierten Untersuchungen (OCT, Röntgen, Dermatoskopie) Vorbefunde erstellen und Auffälligkeiten markieren. Die ärztliche Befundung bleibt — aber der Vorarbeit-Aufwand sinkt enorm." },
      { question: "Gibt es Förderung in Niedersachsen?", answer: "Ja. Niedersachsen bietet über 'Niedersachsen Digital aufgeLaden' und den Digitalbonus Zuschüsse für Digitalisierungsprojekte in Praxen." },
      { question: "Wie starte ich am besten?", answer: "Kostenloses 30-Minuten-Gespräch. Wir analysieren Ihre Praxisprozesse, identifizieren den größten Hebel und starten mit einem Pilotprojekt — risikolos." },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    layout: 3,
    metaTitle: "KI Beratung für Arztpraxen in Nürnberg | kiberatung.de",
    metaDescription: "KI für Nürnberger Arztpraxen: Terminmanagement, Dokumentation, Recall-System. Digitalbonus Bayern nutzen.",
    h1: "KI Beratung für das Gesundheitswesen in Nürnberg",
    intro: "Nürnberg und die Metropolregion Franken haben über 3.500 niedergelassene Ärzte. Die Region verbindet medizinische Tradition mit Tech-Affinität. KI-Lösungen passen perfekt zu fränkischen Praxen: effizient, zuverlässig und auf Ergebnisse fokussiert.",
    stats: { betriebe: "3.500+", mitarbeiter: "55.000", markttrend: "+11,2 %", label1: "Niedergelassene Ärzte in Nürnberg", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in Franken" },
    caseStudy: {
      restaurant: "Zahnarztpraxis Dr. Meier — Nürnberg-St. Johannis",
      challenge: "Das Recall-System lief über Postkarten — teuer, unzuverlässig und ohne Tracking. 35 % der Patienten kamen nicht zur Prophylaxe.",
      solution: "KI-Recall per WhatsApp: Personalisierte Erinnerungen mit direktem Buchungslink. Follow-up bei Nicht-Reaktion nach 7 Tagen.",
      result1: "Recall-Rate 82 %",
      result2: "Postkarten-Kosten entfallen",
      result3: "Prophylaxe-Umsatz +28 %",
    },
    faqs: [
      { question: "Ist WhatsApp für Arztpraxen DSGVO-konform?", answer: "Wir nutzen die WhatsApp Business API — nicht die normale App. Damit ist DSGVO-konforme Kommunikation möglich. Alternativ bieten wir SMS und eigene App-Benachrichtigungen." },
      { question: "Wie nutze ich den Digitalbonus Bayern?", answer: "Antrag über die LfA Förderbank Bayern. Bis zu 10.000 € (50 % Zuschuss) für Digitalisierung — inklusive KI. Wir füllen den Antrag gemeinsam aus, dauert 30 Minuten." },
      { question: "Kann KI auch Laborergebnisse an Patienten senden?", answer: "Ja. Unauffällige Laborergebnisse können automatisch per sicherem Kanal an Patienten gesendet werden — mit verständlicher Erklärung. Auffällige Befunde lösen einen Rückruf aus." },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    layout: 1,
    metaTitle: "KI Beratung für Arztpraxen in Leipzig | kiberatung.de",
    metaDescription: "KI für Leipziger Praxen: Terminbuchung, Dokumentation, Patientenservice. Sächsische Förderung nutzen.",
    h1: "KI Beratung für das Gesundheitswesen in Leipzig",
    intro: "Leipzig wächst — und die medizinische Versorgung muss mithalten. Über 2.500 niedergelassene Ärzte versorgen die boomende Stadt. KI hilft Leipziger Praxen, die steigende Nachfrage effizient zu bewältigen.",
    stats: { betriebe: "2.500+", mitarbeiter: "40.000", markttrend: "+13,5 %", label1: "Niedergelassene Ärzte in Leipzig", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in Sachsen" },
    caseStudy: {
      restaurant: "Physiotherapie Zentrum — Leipzig-Südvorstadt",
      challenge: "8 Therapeuten, 200 Termine pro Woche, 1 Empfangskraft. Terminabsagen führten zu Leerlauf, weil Nachbesetzung nicht schnell genug ging.",
      solution: "KI-Warteliste: Bei Absagen werden automatisch passende Patienten von der Warteliste kontaktiert. Innerhalb von 30 Minuten ist der Slot wieder besetzt.",
      result1: "Slot-Auslastung 97 %",
      result2: "Leerlauf praktisch eliminiert",
      result3: "Umsatzsteigerung +12 %",
    },
    faqs: [
      { question: "Funktioniert KI auch für Physiotherapie-Praxen?", answer: "Ja. Terminmanagement, Übungspläne und Verlaufsdokumentation sind klassische KI-Anwendungen für Physiotherapeuten." },
      { question: "Gibt es sächsische Förderprogramme?", answer: "Sachsen fördert über 'E-Business' und 'GRW' Digitalisierungsprojekte. Zuschüsse bis zu 50 % sind möglich." },
      { question: "Wie schnell sehe ich Ergebnisse?", answer: "Den KI-Terminassistenten merken Sie ab Tag 1. Die volle Wirkung (weniger No-Shows, höhere Auslastung) zeigt sich nach 4–6 Wochen." },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    layout: 2,
    metaTitle: "KI Beratung für Arztpraxen in Dresden | kiberatung.de",
    metaDescription: "KI für Dresdner Arztpraxen: Terminmanagement, Befunddokumentation, Patientenkommunikation. DSGVO-konform.",
    h1: "KI Beratung für das Gesundheitswesen in Dresden",
    intro: "Dresden verbindet medizinische Exzellenz (Uniklinikum Carl Gustav Carus) mit innovativem Mittelstand. Über 2.000 niedergelassene Ärzte können von KI profitieren — bei Dokumentation, Terminplanung und Patientenservice.",
    stats: { betriebe: "2.000+", mitarbeiter: "35.000", markttrend: "+12,8 %", label1: "Niedergelassene Ärzte in Dresden", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in Sachsen" },
    caseStudy: {
      restaurant: "Kardiologische Praxis Dr. Hartmann — Dresden-Blasewitz",
      challenge: "Langzeit-EKG und Blutdruck-Monitoring erzeugten riesige Datenmengen. Die Auswertung dauerte pro Patient 45 Minuten.",
      solution: "KI-Befundassistent: Analysiert Monitoring-Daten, markiert Auffälligkeiten und erstellt Vorbefund. Arzt prüft nur noch die markierten Stellen.",
      result1: "Auswertungszeit −65 %",
      result2: "Keine Auffälligkeit übersehen",
      result3: "Mehr Patienten pro Tag",
    },
    faqs: [
      { question: "Kann KI EKG-Daten auswerten?", answer: "KI kann Langzeit-EKG-Daten screenen und Auffälligkeiten (Arrhythmien, ST-Hebungen, Pausen) markieren. Die ärztliche Befundung wird dadurch schneller und gründlicher." },
      { question: "Ist das medizinprodukterechtlich zulässig?", answer: "Unsere KI ist als Unterstützungstool klassifiziert — sie stellt keine Diagnosen, sondern priorisiert und markiert. Die medizinische Entscheidung bleibt beim Arzt." },
      { question: "Was kostet ein KI-Befundassistent?", answer: "Ab 499 €/Monat für Fachpraxen mit Diagnostik-Schwerpunkt. Amortisiert sich durch die Zeitersparnis innerhalb von 3–4 Wochen." },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    layout: 3,
    metaTitle: "KI Beratung für Arztpraxen in Bremen | kiberatung.de",
    metaDescription: "KI für Bremer Praxen: Terminplanung, Dokumentation, Patientenservice automatisieren. Kostenlose Erstberatung.",
    h1: "KI Beratung für das Gesundheitswesen in Bremen",
    intro: "Bremen hat über 1.500 niedergelassene Ärzte und steht vor den gleichen Herausforderungen wie der Rest Deutschlands: Fachkräftemangel, Bürokratie und steigende Patientenzahlen. KI bietet Bremer Praxen eine Lösung, die sofort wirkt.",
    stats: { betriebe: "1.500+", mitarbeiter: "25.000", markttrend: "+10,8 %", label1: "Niedergelassene Ärzte in Bremen", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in Bremen" },
    caseStudy: {
      restaurant: "Allgemeinmedizin Dr. Bruns — Bremen-Schwachhausen",
      challenge: "Die Hausarztpraxis hatte keine MFA mehr gefunden. Der Arzt machte alles alleine — Empfang, Telefon, Behandlung, Dokumentation.",
      solution: "Komplett-Automatisierung: KI-Telefonassistent, Online-Buchung, automatische Dokumentation per Spracheingabe und digitale Rezeptbestellung.",
      result1: "Praxis läuft ohne MFA",
      result2: "Gleiche Patientenzahl wie vorher",
      result3: "Work-Life-Balance zurück",
    },
    faqs: [
      { question: "Kann eine Praxis wirklich ohne MFA laufen?", answer: "In eingeschränktem Umfang: ja. KI übernimmt Telefon, Termine, Dokumentation und Rezepte. Labortätigkeit und Assistenz bei Untersuchungen brauchen weiterhin Personal — aber der Empfang kann vollständig digital laufen." },
      { question: "Was kostet die Komplettlösung?", answer: "Die Komplett-Automatisierung (Telefon + Termine + Dokumentation + Rezepte) liegt bei 799–1.299 €/Monat. Deutlich günstiger als eine MFA-Stelle." },
      { question: "Wie reagieren Patienten auf KI-Kommunikation?", answer: "Überraschend gut. 85 % der Patienten bevorzugen die schnelle KI-Antwort gegenüber 10 Minuten Warteschleife. Besonders jüngere Patienten lieben die WhatsApp-Buchung." },
    ],
  },
  {
    slug: "mannheim",
    name: "Mannheim",
    layout: 1,
    metaTitle: "KI Beratung für Arztpraxen in Mannheim | kiberatung.de",
    metaDescription: "KI für Mannheimer Praxen: Terminmanagement, Dokumentation, Patientenkommunikation. DSGVO-konform. Kostenlose Beratung.",
    h1: "KI Beratung für das Gesundheitswesen in Mannheim",
    intro: "Mannheim und die Metropolregion Rhein-Neckar bieten eine starke Gesundheitsinfrastruktur mit dem Universitätsklinikum und über 2.000 niedergelassenen Ärzten. KI hilft Mannheimer Praxen, die Brücke zwischen universitärer Spitzenmedizin und effizientem Praxisalltag zu schlagen.",
    stats: { betriebe: "2.000+", mitarbeiter: "32.000", markttrend: "+11,0 %", label1: "Niedergelassene Ärzte in Mannheim", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum in BaWü" },
    caseStudy: {
      restaurant: "MVZ Rhein-Neckar — Mannheim-Zentrum",
      challenge: "Das MVZ mit 8 Ärzten hatte 4 verschiedene Buchungssysteme. Patienten mussten für verschiedene Fachrichtungen separat buchen.",
      solution: "Einheitliche KI-Terminplattform: Ein Zugang für alle Fachrichtungen, KI weist automatisch zu, koordiniert Folgetermine fachübergreifend.",
      result1: "Eine Buchung für alles",
      result2: "Folgetermine automatisch geplant",
      result3: "Patientenzufriedenheit +40 %",
    },
    faqs: [
      { question: "Kann KI verschiedene Buchungssysteme vereinen?", answer: "Ja. Die KI fungiert als einheitliche Schicht über verschiedenen PVS. Patienten buchen über einen Kanal, die KI verteilt an die richtigen Systeme." },
      { question: "Funktioniert das auch standortübergreifend?", answer: "Ja. Gerade für MVZ mit mehreren Standorten: KI koordiniert Termine und Patienten über alle Standorte hinweg." },
      { question: "Wie lange dauert die Einrichtung für ein MVZ?", answer: "4–6 Wochen für die Komplettintegration. In der ersten Woche laufen bereits die Basisfunktionen (Terminbuchung, Erinnerungen)." },
    ],
  },
  {
    slug: "essen",
    name: "Essen",
    layout: 2,
    metaTitle: "KI Beratung für Arztpraxen in Essen | kiberatung.de",
    metaDescription: "KI für Essener Praxen & Kliniken: Terminplanung, Dokumentation, Abrechnung. NRW-Förderung nutzen.",
    h1: "KI Beratung für das Gesundheitswesen in Essen",
    intro: "Essen ist mit dem Universitätsklinikum und über 2.000 niedergelassenen Ärzten ein wichtiger Gesundheitsstandort im Ruhrgebiet. KI hilft Essener Praxen, trotz Fachkräftemangel exzellenten Service zu bieten.",
    stats: { betriebe: "2.000+", mitarbeiter: "35.000", markttrend: "+10,2 %", label1: "Niedergelassene Ärzte in Essen", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum im Ruhrgebiet" },
    caseStudy: {
      restaurant: "Gemeinschaftspraxis für Gynäkologie — Essen-Rüttenscheid",
      challenge: "Vorsorge-Erinnerungen für 3.000 Patientinnen manuell zu managen war unmöglich. Viele verpassten wichtige Screening-Termine.",
      solution: "KI-Vorsorge-Manager: Erinnert automatisch an fällige Vorsorgen (Pap-Abstrich, Mammographie, Schwangerschaftsvorsorge) basierend auf Alter und Anamnese.",
      result1: "Vorsorge-Teilnahme +48 %",
      result2: "Automatisch & individualisiert",
      result3: "Früherkennung verbessert",
    },
    faqs: [
      { question: "Kann KI individualisierte Vorsorge-Erinnerungen senden?", answer: "Ja. Basierend auf Alter, Geschlecht, Vorerkrankungen und letztem Termin berechnet die KI, welche Vorsorge fällig ist und erinnert automatisch — individuell für jede Patientin." },
      { question: "Ist das mit dem Datenschutz vereinbar?", answer: "Ja. Die KI verarbeitet nur die nötigsten Daten (Geburtsdatum, letzter Termin, Vorsorgeart). Keine Diagnosen, keine Befunde. Alles DSGVO-konform auf deutschen Servern." },
      { question: "Was kostet ein Vorsorge-Manager?", answer: "Ab 199 €/Monat. Bei 3.000 Patientinnen und einer Steigerung der Vorsorge-Teilnahme um 48 % rechnet sich das schnell — medizinisch und wirtschaftlich." },
    ],
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    layout: 3,
    metaTitle: "KI Beratung für Arztpraxen in Dortmund | kiberatung.de",
    metaDescription: "KI für Dortmunder Praxen: Terminbuchung, Rezeptbestellung, Dokumentation automatisieren. Kostenlose Erstberatung.",
    h1: "KI Beratung für das Gesundheitswesen in Dortmund",
    intro: "Dortmund mit über 2.000 niedergelassenen Ärzten steht exemplarisch für die Herausforderungen im Ruhrgebiet: eine alternde Bevölkerung, viele chronisch Kranke und gleichzeitig Nachwuchsmangel bei MFAs. KI ist die Antwort.",
    stats: { betriebe: "2.000+", mitarbeiter: "30.000", markttrend: "+9,8 %", label1: "Niedergelassene Ärzte in Dortmund", label2: "Beschäftigte im Gesundheitswesen", label3: "KI-Wachstum im Ruhrgebiet" },
    caseStudy: {
      restaurant: "Diabetologische Schwerpunktpraxis — Dortmund-Mitte",
      challenge: "400 Diabetiker benötigten regelmäßige HbA1c-Kontrollen, Fußuntersuchungen und Ernährungsberatung. Die Koordination lief über Excel-Listen.",
      solution: "KI-Chronic-Care-Manager: Plant automatisch Kontrolltermine nach Leitlinien, erinnert Patienten an Blutzucker-Tagebücher und koordiniert mit Ernährungsberatung und Podologen.",
      result1: "Leitlinien-Adhärenz 94 %",
      result2: "HbA1c-Werte im Schnitt −0,8 %",
      result3: "Kein Patient mehr vergessen",
    },
    faqs: [
      { question: "Kann KI chronisch Kranke systematisch betreuen?", answer: "Ja. KI plant Kontrolltermine nach Leitlinien, erinnert an Medikamente und Messungen, koordiniert mit Mitbehandlern und alarmiert bei Grenzwertüberschreitungen." },
      { question: "Funktioniert das auch für DMP-Programme?", answer: "Perfekt sogar. KI stellt sicher, dass alle DMP-Dokumentationen fristgerecht erstellt werden und keine Kontrolle vergessen wird." },
      { question: "Wie integriert sich das mit meinem PVS?", answer: "Wir verbinden uns mit allen gängigen Praxisverwaltungssystemen. Daten fließen bidirektional — keine Doppeleingabe." },
    ],
  },
];

export const cityMap: Record<string, CityData> = {};
cities.forEach((c) => { cityMap[c.slug] = c; });

export function generateStaticParamsList() {
  return cities.map((c) => ({ stadt: c.slug }));
}
