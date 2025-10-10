export const datas = [
  {
    id: 1,
    path: 'ukraine',
    country: 'Ukraine',
    desc: {
      capital: [
        { bold: 'Hauptstadt:' },
        { text: ' Kiew' }
      ],
      geography: [
        { text: 'Die Ukraine ist ein Staat in Osteuropa. Im Osten und Norden grenzt sie an Russland, im Nordwesten an Belarus, im Westen an Polen, die Slowakei, Ungarn und Rumänien. Im Süden wird sie vom Schwarzen Meer, im Südosten vom Asowschen Meer umspült.' }
      ],
      population: [
        { bold: 'Einwohnerzahl:' },
        { text: ' etwa 39 Millionen Menschen (2025), bezogen auf die von der ukrainischen Regierung kontrollierten Gebiete. Die Mehrheit lebt in Städten.' }
      ],
      languages: [
        { bold: 'Sprachen:' },
        { text: ' Ukrainisch (Amtssprache) sowie Sprachen nationaler Minderheiten — Krimtatarisch, Ungarisch, Rumänisch, Polnisch u.a.' }
      ],
      cuisine: [
        { bold: 'Küche:' },
        { text: ' Das kulinarische Aushängeschild ist der Borschtsch mit Pampuschki, dazu verschiedene Koteletts, Schmorgerichte, Kohlrouladen, Schaschlik und Speck. ' },
      ],
      entry: [
        { bold: 'Einreise in die Ukraine:' },
        { text: ' Ausländische Staatsbürger durchlaufen Pass- und Zollkontrolle. Für die meisten Länder ist ein Visum oder ein anderes Einreisedokument gemäß den geltenden Vorschriften erforderlich.' }
      ]
    },
    symbols: {
      title: "Heraldik",
      items: [
        {
          bold: 'Wappen:',
          text: ' am 28. Juni 1996 wurde durch Artikel 20 der ukrainischen Verfassung das kleine Wappen des Staates – ein goldener Dreizack auf blauem Hintergrund – offiziell bestätigt. Der Dreizack war einst das Staatssymbol der Kiewer Rus zur Zeit der Herrschaft der Rurikiden. Es gibt mehrere Theorien zur Herkunft des Symbols: Einige Forscher verbinden es mit Poseidon, dem Meeresgott der griechischen Mythologie. Ähnliche Embleme traten in Byzanz, Skandinavien und bei den Sarmaten auf. Der Dreizack wurde als religiöses, staatliches, militärisches oder heraldisches Symbol verwendet, manchmal auch nur als dekoratives Element. Späte Exemplare des Dreizacks (1. Jahrtausend n. Chr.) wurden auf dem Gebiet der Ukraine gefunden. Das kleine Wappen ist Teil des großen Wappens.',
          img: "Ukraine/gerb.gif"
        },
        {
          bold: 'Flagge:',
          text: ' am 28. Januar 1992 beschloss die Werchowna Rada der Ukraine die nationale Flagge: ein rechteckiges Tuch mit zwei gleich breiten horizontalen Streifen – oben blau, unten gelb.',
          img: "Ukraine/Flag.svg"
        }
      ]
    },
    holidays: {
      title: "Feiertage",
      items: [
        { bold: "1. Januar", text: " – Neujahr" },
        { bold: "25. Dezember", text: " – Weihnachten (nach neuem Stil)" },
        { bold: "8. März", text: " – Internationaler Frauentag" },
        { bold: "Ostern", text: " – wird an einem Tag zwischen 4. April und 8. Mai gefeiert (bewegliches Datum)" },
        { bold: "1. Mai", text: " – Tag der Arbeit" },
        { bold: "9. Mai", text: " – Tag des Sieges über den Nationalsozialismus im Zweiten Weltkrieg" },
        { bold: "28. Juni", text: " – Tag der Verfassung der Ukraine" },
        { bold: "15. Juli", text: " – Tag der ukrainischen Staatlichkeit" },
        { bold: "1. Oktober", text: " – Tag der Verteidigerinnen und Verteidiger der Ukraine" },
        { bold: "24. August", text: " – Unabhängigkeitstag der Ukraine" }
      ]
    },
    briefHistory: {
      title: 'Kurze Geschichte',
      items: [
        { text: 'Die Geschichte der heutigen Ukraine beginnt mit der Tripolje-Kultur in der Jungsteinzeit. Im 7. Jahrhundert v. Chr. lebten hier die Skythen. Im 9.–10. Jahrhundert entstand die Kiewer Rus. 988–989 fand die Christianisierung der Rus durch Fürst Wladimir den Großen statt. Im 12.–13. Jahrhundert wurde die Kiewer Rus durch innere Konflikte und die mongolisch-tatarische Invasion geschwächt.' },
        { text: 'Im 16.–17. Jahrhundert standen ukrainische Gebiete unter der Herrschaft Polens, Litauens und des Osmanischen Reiches. 1648–1654 führte Bohdan Chmelnyzkyj den nationalen Befreiungskrieg, der zu einer Autonomie in Verbindung mit dem Moskauer Zarenreich führte.' },
        { text: 'Im 20. Jahrhundert erlebte die Ukraine die Revolution von 1917, den Eintritt in die UdSSR, die Hungersnot (Holodomor) 1932–1933, den Zweiten Weltkrieg und den Wiederaufbau. 1986 ereignete sich die Katastrophe im Kernkraftwerk Tschernobyl.' },
        { text: 'Am 24. August 1991 erklärte die Ukraine ihre Unabhängigkeit. 2004 fand die Orange Revolution statt, 2013–2014 die Revolution der Würde. 2014 annektierte Russland die Krim, im Osten begann ein bewaffneter Konflikt. Seit Februar 2022 führt Russland einen groß angelegten Krieg gegen die Ukraine.' },
        { text: 'Die heutige Ukraine ist eine präsidentiell-parlamentarische Republik. Präsident seit 2019 ist Wolodymyr Selenskyj. Die offizielle Währung ist die Hrywnja (UAH). Premierministerin seit Juli 2025 ist Julia Swyrydenko.' }
      ]
    },
    regions: {
      title: "Regionen der Ukraine",
      items: [
        { id: 1, name: 'Oblast Winnyzja', path: 'vinnytska', hasInfo: false, svgId: "vinnytsia" },
        { id: 2, name: 'Oblast Wolhynien', path: 'volynska', hasInfo: false, svgId: "volyn" },
        { id: 3, name: 'Oblast Dnipropetrowsk', path: 'dnepropetrovska', hasInfo: false, svgId: "dnipropetrovsk" },
        { id: 4, name: 'Oblast Donezk', path: 'donetska', hasInfo: false, svgId: "donetsk" },
        { id: 5, name: 'Oblast Schytomyr', path: 'zhytomyrska', hasInfo: false, svgId: "zhytomyr" },
        { id: 6, name: 'Oblast Transkarpatien', path: 'zakarpatska', hasInfo: false, svgId: "zakarpattia" },
        { id: 7, name: 'Oblast Saporischschja', path: 'zaporizka', hasInfo: false, svgId: "zaporizhia" },
        { id: 8, name: 'Oblast Iwano-Frankiwsk', path: 'ivano-frankivska', hasInfo: false, svgId: "ivano-frankivsk" },
        { id: 9, name: 'Oblast Kiew', path: 'kyivska', hasInfo: false, svgId: "kyiv" },
        { id: 10, name: 'Oblast Kirovohrad', path: 'kirovohradska', hasInfo: false, svgId: "kirovohrad" },
        { id: 11, name: 'Oblast Luhansk', path: 'luganska', hasInfo: false, svgId: "luhansk" },
        { id: 12, name: 'Oblast Lwiw', path: 'lvivska', hasInfo: false, svgId: "lviv" },
        { id: 13, name: 'Oblast Mykolajiw', path: 'mykolaivska', hasInfo: false, svgId: "mykolaiv" },
        { id: 14, name: 'Oblast Odessa', path: 'odeska', hasInfo: false, svgId: "odessa" },
        { id: 15, name: 'Oblast Poltawa', path: 'poltavska', hasInfo: false, svgId: "poltava" },
        { id: 16, name: 'Oblast Riwne', path: 'rovenska', hasInfo: false, svgId: "rivne" },
        { id: 17, name: 'Oblast Sumy', path: 'sumska', hasInfo: true, svgId: "sumy" },
        { id: 18, name: 'Oblast Ternopil', path: 'ternopilska', hasInfo: false, svgId: "ternopil" },
        { id: 19, name: 'Oblast Charkiw', path: 'kharkivska', hasInfo: false, svgId: "kharkiv" },
        { id: 20, name: 'Oblast Cherson', path: 'khersonska', hasInfo: false, svgId: "kherson" },
        { id: 21, name: 'Oblast Chmelnyzkyj', path: 'khmelnytska', hasInfo: false, svgId: "khmelnytskyi" },
        { id: 22, name: 'Oblast Tscherkassy', path: 'cherkaska', hasInfo: false, svgId: "cherkasy" },
        { id: 23, name: 'Oblast Tschernihiw', path: 'chernihivska', hasInfo: false, svgId: "chernihiv" },
        { id: 24, name: 'Oblast Tscherniwzi', path: 'chernivetska', hasInfo: false, svgId: "chernivtsi" },
        { id: 25, name: 'Kiew', path: 'kyiv', hasInfo: false, svgId: "kyiv-city" },
        { id: 26, name: 'Sewastopol', path: 'sevastopol', hasInfo: false, svgId: "sevastopol" },
        { id: 27, name: 'Autonome Republik Krim', path: 'crimea', hasInfo: false, svgId: "crimea" }
      ]
    },
    meta: {
      title: "Ukraine — Informationen über das Land, Sehenswürdigkeiten und Kultur",
      description: "Alles über das Land Ukraine: Hauptstadt Kiew, Geografie, Bevölkerung, Sprachen, Küche, Feiertage und kurze Geschichte.",
      ogTitle: "Ukraine — Informationen über das Land und Sehenswürdigkeiten",
      ogDescription: "Detaillierte Informationen über die Ukraine: Kultur, Symbole, Geschichte, Regionen und interessante Fakten.",
      ogImage: "Ukraine/Flag.svg"
    }

  },
  {
    id: 2,
    path: 'germany',
    country: 'Deutschland',
    desc: {
      capital: [
        { bold: 'Hauptstadt:' },
        { text: ' Berlin' }
      ],
      geography: [
        { text: 'Die Bundesrepublik Deutschland liegt im Zentrum Europas. Nach der Vereinigung der beiden deutschen Staaten im Jahr 1990 grenzt das Land an neun Staaten: Frankreich, die Schweiz, Österreich, Tschechien, Polen, Dänemark, die Niederlande, Belgien und Luxemburg.' },
        { text: 'Die Fläche Deutschlands beträgt etwa 357.000 km², die Nord-Süd-Ausdehnung etwa 876 km, die West-Ost-Ausdehnung etwa 640 km. Deutschland wird von der Nord- und Ostsee umspült.' },
        { text: 'Deutschland ist Mitglied der Europäischen Union.' }
      ],
      population: [
        { bold: 'Bevölkerung:' },
        { text: ' etwa 83 Mio. Menschen. Ethnische Zusammensetzung: Deutsche, Türken, Italiener sowie weitere ethnische Gruppen und ausländische Staatsangehörige. Zu den offiziell anerkannten nationalen Minderheiten zählen Sorben, Dänen, Friesen und Sinti und Roma.' }
      ],
      languages: [
        { bold: 'Sprache:' },
        { text: ' Deutsch (Amtssprache).' }
      ],
      administrative: [
        { bold: 'Verwaltungsgliederung:' },
        { text: ' Deutschland besteht aus 16 Bundesländern, von denen jedes eine eigene Verfassung, ein Parlament und eine Regierung hat.' }
      ],
      government: [
        { bold: 'Staatsform:' },
        { text: ' Offizieller Name — Bundesrepublik Deutschland. Staatsoberhaupt ist der Bundespräsident, gewählt für eine Amtszeit von 5 Jahren. Regierungschef ist der Bundeskanzler. Die gesetzgebende Gewalt wird durch das Parlament ausgeübt, das aus zwei Kammern besteht: Bundestag und Bundesrat.' }
      ],
      currency: [
        { bold: 'Währung:' },
        { text: ' Euro (EUR), unterteilt in 100 Cent.' }
      ],
      transport: [
        { bold: 'Verkehr:' },
        { text: ' In den deutschen Städten ist der öffentliche Nahverkehr gut ausgebaut: Busse, Straßenbahnen, U-Bahn und S-Bahn. Fahrkarten gelten für alle Verkehrsmittel mit Umstieg. Es gibt spezielle Abos und Touristentickets, die bei häufigen Fahrten Kosten sparen.' }
      ],
      climate: [
        { bold: 'Klima:' },
        { text: ' gemäßigt. Im Norden herrscht Seeklima, im übrigen Land ein Übergang vom See- zum Kontinentalklima. Meistens wehen Westwinde, im Winter und Herbst treten Zyklone auf, Sommer und Frühherbst können von atlantischem Einfluss geprägt sein. Durchschnittstemperatur im Januar etwa 0°C, im Juli etwa 17–20°C. Niederschläge sind im Süden höher, im Norden geringer.' }
      ],
      tourism: [
        { bold: 'Tourismus und Freizeit:' },
        { text: ' Deutschland ist bekannt für seine reiche Geschichte und Architektur. Fast jede Stadt ist eine Sehenswürdigkeit: alte Gebäude stehen neben modernen Vierteln, alte Straßen sind gepflegt. Für Radsport, Wandern, Skisport, Segeln und Windsurfen gibt es zahlreiche Möglichkeiten. Beliebt sind Rheinkreuzfahrten und touristische Routen durch malerische Regionen wie den Schwarzwald und die Bayerischen Alpen.' },
        { text: ' Das beliebteste Souvenir ist der Nussknacker, der in spezialisierten Werkstätten hergestellt wird.' }
      ]
    },
    symbols: {
      title: "Heraldik",
      items: [
        {
          bold: "Wappen:",
          text: " das kleine Wappen Deutschlands zeigt einen schwarzen Adler auf goldenem Hintergrund. Der Adler ist seit der Zeit des Heiligen Römischen Reiches ein Symbol von Macht und Staatlichkeit. Er tauchte in der Heraldik verschiedener deutscher Fürstentümer und Städte über Jahrhunderte auf und diente als Zeichen staatlicher und militärischer Autorität. Der heutige Adler wurde nach der Wiedervereinigung Deutschlands in den 1950er Jahren offiziell eingeführt und bildet die Grundlage des großen Wappens.",
          img: "Germany/Gerb.gif"
        },
        {
          bold: "Flagge:",
          text: " die Nationalflagge Deutschlands ist ein rechteckiges Tuch mit drei gleich breiten horizontalen Streifen: oben – schwarz, Mitte – rot, unten – gold. Diese Farben haben historische Bedeutung und stehen im Zusammenhang mit den nationalen Befreiungsbewegungen des 19. Jahrhunderts und symbolisieren Einheit und Freiheit des Landes.",
          img: "Germany/Flag.jpg"
        }
      ]
    },
    briefHistory: {
      title: 'Kurze Geschichte',
      items: [
        { text: "Die Geschichte Deutschlands reicht über viele Jahrhunderte zurück. Im frühen Mittelalter bildeten germanische Stämme ihre eigenen Staaten, und ab der Zeit der Franken und Karls des Großen begann der christliche Einfluss auf Kultur und Politik." },
        { text: "Im XI–XV Jahrhundert existierte das Heilige Römische Reich Deutscher Nation, in dem der König vom Hochadel gewählt wurde. Städte und Burgen dieser Zeit ziehen noch heute Touristen durch ihre Architektur und Geschichte an." },
        { text: "Ab dem 16. Jahrhundert begann die Reformation: Martin Luther, Ulrich Zwingli und Johannes Calvin brachten revolutionäre Veränderungen in das religiöse Leben, die die heutige religiöse Landschaft Deutschlands und die Tradition offener Glaubensdiskussionen prägten." },
        { text: "Im 18.–19. Jahrhundert entstanden große deutsche Staaten, Kultur und Wirtschaft entwickelten sich weiter. Das Deutsche Reich wurde 1871 nach der Vereinigung der norddeutschen Länder unter der Führung Bismarcks gegründet." },
        { text: "Das 20. Jahrhundert war eine Zeit der Prüfungen: Erster Weltkrieg, Weimarer Republik, nationalsozialistische Diktatur und Zweiter Weltkrieg. Deutschland trägt Verantwortung für diese Ereignisse und bewahrt die Erinnerung durch Museen, Denkmäler und Bildungsprojekte." },
        { text: "Nach dem Krieg wurde das Land in BRD und DDR geteilt. 1990 erfolgte die Wiedervereinigung, und das heutige Deutschland wurde zu einem föderalen Staat mit 16 Bundesländern, reicher Kultur, Wirtschaft und dem Bestreben, die Lehren der Geschichte zu lernen und zu bewahren." }
      ]
    },
    regions: {
      title: "Bundesländer Deutschlands",
      items: [
        { id: 1, name: 'Baden-Württemberg', hasInfo: false, path: 'baden-wuerttemberg', svgId: 'bw' },
        { id: 2, name: 'Bayern', hasInfo: false, path: 'bavaria', svgId: 'by' },
        { id: 3, name: 'Berlin', hasInfo: false, path: 'berlin', svgId: 'be' },
        { id: 4, name: 'Brandenburg', hasInfo: false, path: 'brandenburg', svgId: 'bb' },
        { id: 5, name: 'Bremen', hasInfo: false, path: 'bremen', svgId: 'hb' },
        { id: 6, name: 'Hamburg', hasInfo: false, path: 'hamburg', svgId: 'hh' },
        { id: 7, name: 'Hessen', hasInfo: false, path: 'hessen', svgId: 'he' },
        { id: 8, name: 'Mecklenburg-Vorpommern', hasInfo: false, path: 'mecklenburg-vorpommern', svgId: 'mv' },
        { id: 9, name: 'Niedersachsen', hasInfo: false, path: 'lower-saxony', svgId: 'ni' },
        { id: 10, name: 'Nordrhein-Westfalen', hasInfo: true, path: 'nrw', svgId: 'nw' },
        { id: 11, name: 'Rheinland-Pfalz', hasInfo: false, path: 'rhineland-pfalz', svgId: 'rp' },
        { id: 12, name: 'Saarland', hasInfo: false, path: 'saarland', svgId: 'sl' },
        { id: 13, name: 'Sachsen', hasInfo: false, path: 'saxony', svgId: 'sn' },
        { id: 14, name: 'Sachsen-Anhalt', hasInfo: false, path: 'saxony-anhalt', svgId: 'st' },
        { id: 15, name: 'Schleswig-Holstein', hasInfo: false, path: 'schleswig-holstein', svgId: 'sh' },
        { id: 16, name: 'Thüringen', hasInfo: false, path: 'thuringia', svgId: 'th' }
      ]
    },
    meta: {
      title: "Deutschland — Informationen über das Land, Sehenswürdigkeiten und Kultur",
      description: "Alles über Deutschland: Hauptstadt Berlin, Geografie, Bevölkerung, Sprachen, Küche, Symbole, Geschichte und Regionen.",
      ogTitle: "Deutschland — Informationen über das Land und Sehenswürdigkeiten",
      ogDescription: "Detaillierte Informationen über Deutschland: Kultur, Symbole, Geschichte, Regionen und interessante Fakten.",
      ogImage: "Germany/Flag.jpg"
    }
  }

];