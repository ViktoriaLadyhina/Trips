export const datas = [
  {
    id: 1,
    path: 'ukraine',
    country: 'Ukraine',
    imagePath: '/ukr/sofiyskiy.jpg',
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
          img: "Ukraine/flag.jpeg"
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
        {
          text: 'Die Geschichte der heutigen Ukraine beginnt mit der Tripolje-Kultur in der Jungsteinzeit. Im 7. Jahrhundert v. Chr. lebten hier die Skythen. Im 9.–10. Jahrhundert entstand die Kiewer Rus. 988–989 fand die Christianisierung der Rus durch Fürst Wladimir den Großen statt. Im 12.–13. Jahrhundert wurde die Kiewer Rus durch innere Konflikte und die mongolisch-tatarische Invasion geschwächt.',
          img: "Ukraine/i2.jpeg"
        },
        { text: 'Im 16.–17. Jahrhundert standen ukrainische Gebiete unter der Herrschaft Polens, Litauens und des Osmanischen Reiches. 1648–1654 führte Bohdan Chmelnyzkyj den nationalen Befreiungskrieg, der zu einer Autonomie in Verbindung mit dem Moskauer Zarenreich führte.' },
        { text: 'Im 20. Jahrhundert erlebte die Ukraine die Revolution von 1917, den Eintritt in die UdSSR, die Hungersnot (Holodomor) 1932–1933, den Zweiten Weltkrieg und den Wiederaufbau. 1986 ereignete sich die Katastrophe im Kernkraftwerk Tschernobyl.' },
        { text: 'Am 24. August 1991 erklärte die Ukraine ihre Unabhängigkeit. 2004 fand die Orange Revolution statt, 2013–2014 die Revolution der Würde. 2014 annektierte Russland die Krim, im Osten begann ein bewaffneter Konflikt. Seit Februar 2022 führt Russland einen groß angelegten Krieg gegen die Ukraine.' },
        { text: 'Die heutige Ukraine ist eine präsidentiell-parlamentarische Republik. Präsident seit 2019 ist Wolodymyr Selenskyj. Die offizielle Währung ist die Hrywnja (UAH). Premierministerin seit Juli 2025 ist Julia Swyrydenko.' }
      ]
    },
    ukraineRegions: {
      title: "Regionen der Ukraine",
      items: [
        { id: 1, name: 'Oblast Winnyzja', path: 'vinnytska', hasInfo: false },
        { id: 2, name: 'Oblast Wolhynien', path: 'volynska', hasInfo: false },
        { id: 3, name: 'Oblast Dnipropetrowsk', path: 'dnepropetrovska', hasInfo: false },
        { id: 4, name: 'Oblast Donezk', path: 'donetska', hasInfo: false },
        { id: 5, name: 'Oblast Schytomyr', path: 'zhytomyrska', hasInfo: false },
        { id: 6, name: 'Oblast Transkarpatien', path: 'zakarpatska', hasInfo: false },
        { id: 7, name: 'Oblast Saporischschja', path: 'zaporizka', hasInfo: false },
        { id: 8, name: 'Oblast Iwano-Frankiwsk', path: 'ivano-frankivska', hasInfo: false },
        { id: 9, name: 'Oblast Kiew', path: 'kyivska', hasInfo: false },
        { id: 10, name: 'Oblast Kirovohrad', path: 'kirovohradska', hasInfo: false },
        { id: 11, name: 'Oblast Luhansk', path: 'luganska', hasInfo: false },
        { id: 12, name: 'Oblast Lwiw', path: 'lvivska', hasInfo: false },
        { id: 13, name: 'Oblast Mykolajiw', path: 'mykolaivska', hasInfo: false },
        { id: 14, name: 'Oblast Odessa', path: 'odeska', hasInfo: false },
        { id: 15, name: 'Oblast Poltawa', path: 'poltavska', hasInfo: false },
        { id: 16, name: 'Oblast Riwne', path: 'rovenska', hasInfo: false },
        { id: 17, name: 'Oblast Sumy', path: 'sumska', hasInfo: false },
        { id: 18, name: 'Oblast Ternopil', path: 'ternopilska', hasInfo: false },
        { id: 19, name: 'Oblast Charkiw', path: 'kharkivska', hasInfo: false },
        { id: 20, name: 'Oblast Cherson', path: 'khersonska', hasInfo: false },
        { id: 21, name: 'Oblast Chmelnyzkyj', path: 'khmelnytska', hasInfo: false },
        { id: 22, name: 'Oblast Tscherkassy', path: 'cherkaska', hasInfo: false },
        { id: 23, name: 'Oblast Tschernihiw', path: 'chernihivska', hasInfo: false },
        { id: 24, name: 'Oblast Tscherniwzi', path: 'chernivetska', hasInfo: false },
        { id: 25, name: 'Kiew (Stadt mit speziellem Status)', path: 'kyiv', hasInfo: false },
        { id: 26, name: 'Sewastopol (Stadt mit speziellem Status)', path: 'sevastopol', hasInfo: false },
        { id: 27, name: 'Autonome Republik Krim', path: 'crimea', hasInfo: false }
      ]
    }
  },
  {
    id: 2,
    path: 'germany',
    country: 'Deutschland',
    imagePath: '/de/Castle_Neuschwanstein.jpg',
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
          img: "Germania/Gerb.gif"
        },
        {
          bold: "Flagge:",
          text: " die Nationalflagge Deutschlands ist ein rechteckiges Tuch mit drei gleich breiten horizontalen Streifen: oben – schwarz, Mitte – rot, unten – gold. Diese Farben haben historische Bedeutung und stehen im Zusammenhang mit den nationalen Befreiungsbewegungen des 19. Jahrhunderts und symbolisieren Einheit und Freiheit des Landes.",
          img: "Germania/Flag.jpg"
        }
      ]
    },
    briefHistory: {
      title: 'Kurze Geschichte',
      items: [
        {
          text: "Die Geschichte Deutschlands reicht über viele Jahrhunderte zurück. Im frühen Mittelalter bildeten germanische Stämme ihre eigenen Staaten, und ab der Zeit der Franken und Karls des Großen begann der christliche Einfluss auf Kultur und Politik.",
          img: "Germania/zamok3.jpg"
        },
        { text: "Im XI–XV Jahrhundert existierte das Heilige Römische Reich Deutscher Nation, in dem der König vom Hochadel gewählt wurde. Städte und Burgen dieser Zeit ziehen noch heute Touristen durch ihre Architektur und Geschichte an." },
        { text: "Ab dem 16. Jahrhundert begann die Reformation: Martin Luther, Ulrich Zwingli und Johannes Calvin brachten revolutionäre Veränderungen in das religiöse Leben, die die heutige religiöse Landschaft Deutschlands und die Tradition offener Glaubensdiskussionen prägten." },
        { text: "Im 18.–19. Jahrhundert entstanden große deutsche Staaten, Kultur und Wirtschaft entwickelten sich weiter. Das Deutsche Reich wurde 1871 nach der Vereinigung der norddeutschen Länder unter der Führung Bismarcks gegründet." },
        { text: "Das 20. Jahrhundert war eine Zeit der Prüfungen: Erster Weltkrieg, Weimarer Republik, nationalsozialistische Diktatur und Zweiter Weltkrieg. Deutschland trägt Verantwortung für diese Ereignisse und bewahrt die Erinnerung durch Museen, Denkmäler und Bildungsprojekte." },
        { text: "Nach dem Krieg wurde das Land in BRD und DDR geteilt. 1990 erfolgte die Wiedervereinigung, und das heutige Deutschland wurde zu einem föderalen Staat mit 16 Bundesländern, reicher Kultur, Wirtschaft und dem Bestreben, die Lehren der Geschichte zu lernen und zu bewahren." }
      ]
    },
    germanStates: {
      title: "Bundesländer Deutschlands",
      items: [
        { id: 1, name: 'Baden-Württemberg', hasInfo: false, path: '/germany/baden-wuerttemberg' },
        { id: 2, name: 'Bayern', hasInfo: false, path: '/germany/bavaria' },
        { id: 3, name: 'Berlin', hasInfo: false, path: '/germany/berlin' },
        { id: 4, name: 'Brandenburg', hasInfo: false, path: '/germany/brandenburg' },
        { id: 5, name: 'Bremen', hasInfo: false, path: '/germany/bremen' },
        { id: 6, name: 'Hamburg', hasInfo: false, path: '/germany/hamburg' },
        { id: 7, name: 'Hessen', hasInfo: false, path: '/germany/hessen' },
        { id: 8, name: 'Mecklenburg-Vorpommern', hasInfo: false, path: '/germany/mecklenburg-vorpommern' },
        { id: 9, name: 'Niedersachsen', hasInfo: false, path: '/germany/lower-saxony' },
        {
          id: 10,
          name: 'Nordrhein-Westfalen',
          hasInfo: true,
          path: '/germany/nrw',
          desc: {
            capital: [
              { bold: 'Hauptstadt:' },
              { text: ' Düsseldorf' }
            ],
            population: [
              { bold: 'Einwohnerzahl:' },
              { text: ' ca. 18,1 Mio. Menschen. Ausländer: ca. 2 Mio. Menschen.' }
            ],
            area: [
              { bold: 'Fläche:' },
              { text: ' 34.000 km². Bevölkerungsdichte: ca. 525 Einwohner pro km².' }
            ],
            geography: [
              { bold: 'Geographie:' },
              { text: ' Nordrhein-Westfalen liegt im Westen Deutschlands und grenzt an Belgien (99 km), die Niederlande (387 km) sowie an die Bundesländer Niedersachsen (583 km), Hessen (269 km) und Rheinland-Pfalz (307 km).' },
              { text: 'Das Land umfasst zwei große Landschaftsregionen: das Norddeutsche Tiefland und das deutsche Mittelgebirge, die sich entlang des Rheins in nordrheinische und westfälische Teile gliedern.' },
              { text: 'Am linken Rheinufer liegen die Eifel-Berge (Eifel) und das Vorland Vennvorland (Aachener Region). Am rechten Rheinufer befinden sich Bergisches Land, Sauerland, Rothaargebirge, Siegerland, Siebengebirge sowie Teile des Westwaldes und Weserberglands. Wälder bedecken etwa 24 % der Fläche.' }
            ],
            history: [
              { bold: 'Namensherkunft:' },
              { text: ' Der Name Nordrhein-Westfalen entstand nach der Anordnung der britischen Militärregierung am 23. August 1946 durch die Vereinigung der Provinz Westfalen (Provinz Westfalen) und der Provinz Nordrhein (Provinz Nordrhein). Am 21. Januar 1947 wurde das Gebiet Lippe (Lippe) hinzugefügt.' }
            ],
            economy: [
              { bold: 'Wirtschaft:' },
              { text: ' Nordrhein-Westfalen ist eines der größten wirtschaftlichen Zentren Deutschlands. Historisch entwickelte Branchen sind Kohle-, Eisen-, Metall-, Stahl- und Textilindustrie.' },
              { text: 'Die Landwirtschaft spielt eine untergeordnete Rolle und versorgt hauptsächlich die Bevölkerung der Großstädte mit Lebensmitteln.' }
            ],
            cities: [
              { bold: 'Große Städte:' },
              { text: ' Köln, Essen, Dortmund, Düsseldorf, Duisburg, Bonn, Münster, Wuppertal, Aachen, Bielefeld, Paderborn, Bochum, Krefeld, Gelsenkirchen, Leverkusen, Mülheim, Remscheid, Solingen, Mönchengladbach, Siegen, Hamm, Recklinghausen.' }
            ],
            rivers: [
              { bold: 'Wichtige Flüsse und Kanäle:' },
              { text: ' Rhein, Lippe, Ruhr, Ems, Weser, Mittellandkanal.' }
            ],
            tourism: [
              { bold: 'Tourismus und Freizeit:' },
              { text: ' Nordrhein-Westfalen ist bekannt für seine reiche Geschichte und Kultur. Zahlreiche historische Gebäude, Museen und Parks laden zu Besuchen ein. Beliebt sind Ausflüge entlang des Rheins und touristische Routen durch die Berge und Waldgebiete.' }
            ]
          },
          symbols: {
            title: "Heraldik",
            items: [
              {
                bold: "Wappen:",
                text: " das Wappen von Nordrhein-Westfalen vereint die Symbole der drei historischen Provinzen, aus denen das Land 1946–1947 gebildet wurde. Der silberne Rheinbalken auf grünem Grund symbolisiert die Rheinprovinz. Das sächsische Pferd auf rotem Grund ist das Symbol Westfalens (im westfälischen Wappen aufbäumend dargestellt). Die rote Rose mit goldenem Herz und Blättern ist das Wappen der Grafen von Lippe, das seit dem 13. Jahrhundert verwendet wird.",
                img: "Germania/Nordrhein/002.gif"
              },
              {
                bold: "Flagge:",
                text: " die Flagge Nordrhein-Westfalens besteht aus den Farben des Wappens: Grün, Weiß und Rot, horizontal angeordnet.",
                img: "Germania/Nordrhein/003.gif"
              }
            ]
          },
          briefHistory: {
            title: 'Kurze Geschichte',
            items: [
              {
                text: "Nach dem Zweiten Weltkrieg lag das Gebiet des heutigen Nordrhein-Westfalen in der britischen Besatzungszone. Das neue Bundesland wurde am 23. August 1946 aus der ehemaligen preußischen Provinz Westfalen und dem nördlichen Teil der Rheinprovinz (Rheinland) durch die britische Besatzungsverwaltung geschaffen. Ziel der Zusammenlegung war die einheitliche Verwaltung des Ruhrgebiets, einer wichtigen Industrieregion."
              },
              {
                text: "1947 wurde das ehemalige Land Lippe gemäß dem Erlass Nr. 77 der britischen Militärverwaltung vom 21. Januar 1947 in Nordrhein-Westfalen eingegliedert. Am 5. November 1948 verabschiedete das Landesparlament das „Gesetz über den Zusammenschluss des Landes Lippe-Detmold mit dem Land Nordrhein-Westfalen“, womit der Vereinigungsprozess offiziell abgeschlossen wurde."
              },
              {
                text: "Am 8. Mai 1949 nahm der Parlamentarische Rat Deutschlands das Grundgesetz der BRD an, und Nordrhein-Westfalen wurde offiziell eines der Bundesländer Deutschlands."
              },
              {
                text: "Am 18. Juni 1950 wurde die Landesverfassung verabschiedet, die die innere Organisation und die Rechte des Landes festlegte."
              }
            ]
          },
          nrwRegions: [
            {
              title: "Regierungsbezirke in Nordrhein-Westfalen",
              items: [
                { id: 1, name: 'Arnsberg', hasInfo: false },
                { id: 2, name: 'Detmold', hasInfo: false },
                { id: 3, name: 'Düsseldorf', hasInfo: false },
                { id: 4, name: 'Köln', hasInfo: false },
                { id: 5, name: 'Münster', hasInfo: false }
              ]
            },
            {
              title: "Kreisfreie Städte in Nordrhein-Westfalen",
              items: [
                { id: 6, name: 'Bielefeld', hasInfo: false },
                { id: 7, name: 'Bonn', hasInfo: false },
                { id: 8, name: 'Bottrop', hasInfo: false },
                { id: 9, name: 'Bochum', hasInfo: false },
                { id: 10, name: 'Wuppertal', hasInfo: false },
                { id: 11, name: 'Gelsenkirchen', hasInfo: false },
                { id: 12, name: 'Dortmund', hasInfo: false },
                { id: 13, name: 'Duisburg', hasInfo: false },
                { id: 14, name: 'Düsseldorf', hasInfo: false },
                { id: 15, name: 'Solingen', hasInfo: false },
                { id: 16, name: 'Köln', hasInfo: false },
                { id: 17, name: 'Krefeld', hasInfo: false },
                { id: 18, name: 'Leverkusen', hasInfo: false },
                { id: 19, name: 'Mönchengladbach', hasInfo: false },
                { id: 20, name: 'Mülheim an der Ruhr', hasInfo: false },
                { id: 21, name: 'Münster', hasInfo: false },
                { id: 22, name: 'Oberhausen', hasInfo: false },
                { id: 23, name: 'Remscheid', hasInfo: false },
                { id: 24, name: 'Hagen', hasInfo: false },
                { id: 25, name: 'Hamm', hasInfo: false },
                { id: 26, name: 'Herne', hasInfo: false },
                { id: 27, name: 'Essen', hasInfo: false }
              ]
            }
          ],
        },
        { id: 11, name: 'Rheinland-Pfalz', hasInfo: false, path: '/germany/rhineland-pfalz' },
        { id: 12, name: 'Saarland', hasInfo: false, path: '/germany/saarland' },
        { id: 13, name: 'Sachsen', hasInfo: false, path: '/germany/saxony' },
        { id: 14, name: 'Sachsen-Anhalt', hasInfo: false, path: '/germany/saxony-anhalt' },
        { id: 15, name: 'Schleswig-Holstein', hasInfo: false, path: '/germany/schleswig-holstein' },
        { id: 16, name: 'Thüringen', hasInfo: false, path: '/germany/thuringia' }
      ]
    }

  }

];