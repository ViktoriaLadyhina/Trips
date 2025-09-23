const datas = {
    id: 10,
    name: 'Nordrhein-Westfalen',
    hasInfo: true,
    path: 'nrw',
    currentMap: "Germania/Nordrhein/nrw2.gif",
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
        ],
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
            { text: "Nach dem Zweiten Weltkrieg lag das Gebiet des heutigen Nordrhein-Westfalen in der britischen Besatzungszone. Das neue Bundesland wurde am 23. August 1946 aus der ehemaligen preußischen Provinz Westfalen und dem nördlichen Teil der Rheinprovinz (Rheinland) durch die britische Besatzungsverwaltung geschaffen. Ziel der Zusammenlegung war die einheitliche Verwaltung des Ruhrgebiets, einer wichtigen Industrieregion." },
            { text: "1947 wurde das ehemalige Land Lippe gemäß dem Erlass Nr. 77 der britischen Militärverwaltung vom 21. Januar 1947 in Nordrhein-Westfalen eingegliedert. Am 5. November 1948 verabschiedete das Landesparlament das „Gesetz über den Zusammenschluss des Landes Lippe-Detmold mit dem Land Nordrhein-Westfalen“, womit der Vereinigungsprozess offiziell abgeschlossen wurde." },
            { text: "Am 8. Mai 1949 nahm der Parlamentarische Rat Deutschlands das Grundgesetz der BRD an, und Nordrhein-Westfalen wurde offiziell eines der Bundesländer Deutschlands." },
            { text: "Am 18. Juni 1950 wurde die Landesverfassung verabschiedet, die die innere Organisation und die Rechte des Landes festlegte." }
        ]
    },
    discriptRegions: [
        {
            title: "Regierungsbezirke in Nordrhein-Westfalen",
            items: [
                { id: 1, name: 'Arnsberg', hasInfo: false, path: "arnsberg" },
                { id: 2, name: 'Detmold', hasInfo: false, path: "detmold" },
                { id: 3, name: 'Düsseldorf', hasInfo: false, path: "dusseldorf" },
                {
                    id: 4,
                    title: 'Regierungsbezirk Köln',
                    name: 'Köln',
                    hasInfo: true,
                    path: "koln",
                    currentMap: "Germania/Nordrhein/004.gif",
                    desc: {
                        history: [
                            { text: 'Regierungsbezirk Köln ist einer der fünf Regierungsbezirke in Nordrhein-Westfalen. Er liegt im Südwesten des Bundeslandes.' },
                            { text: 'Gegründet 1815.' }
                        ],
                        area: [
                            { bold: 'Fläche:' },
                            { text: ' ca. 7.365 km².' }
                        ],
                        population: [
                            { bold: 'Einwohnerzahl:' },
                            { text: ' rund 4,49 Millionen (Ende 2024).' }
                        ],
                        districts: [
                            { bold: 'Zugehörige Kreise (Landkreise):' },
                            { text: ' Aachen, Düren, Euskirchen, Heinsberg, Oberbergischer Kreis, Rhein-Erft-Kreis, Rhein-Sieg-Kreis, Rheinisch-Bergischer Kreis.' }
                        ],
                        cities: [
                            { bold: 'Kreisfreie Städte:' },
                            { text: ' Aachen, Bonn, Köln, Leverkusen.' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 1,
                            name: "Aachen",
                            fullName: "Kreis Aachen",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Zentrum des Bezirks:" },
                                { text: " Stadt Aachen." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 707,15 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Bevölkerung:" },
                                { text: " 564 444 Einwohner (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 800 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Offizieller Bezirkscode:" },
                                { text: " 05 3 34." }
                            ],
                            description: [
                                { text: "Der Bezirk gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Bezirk ist unterteilt in " },
                                { bold: "10 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Alsdorf", hasInfo: false },
                                { id: 2, name: "Aachen", hasInfo: false },
                                { id: 3, name: "Baesweiler", hasInfo: false },
                                { id: 4, name: "Würselen", hasInfo: false },
                                { id: 5, name: "Simmerath", hasInfo: false },
                                { id: 6, name: "Monschau", hasInfo: false },
                                { id: 7, name: "Roetgen", hasInfo: false },
                                { id: 8, name: "Herzogenrath", hasInfo: false },
                                { id: 9, name: "Stolberg", hasInfo: false },
                                { id: 10, name: "Eschweiler", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/008.png"
                        },
                        {
                            id: 2,
                            name: "Düren",
                            fullName: "Kreis Düren",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Zentrum des Bezirks:" },
                                { text: " Stadt Düren." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 941,15 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Bevölkerung:" },
                                { text: " 278 462 Einwohner (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 300 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Offizieller Bezirkscode:" },
                                { text: " 05 3 58." }
                            ],
                            description: [
                                { text: "Der Bezirk gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Bezirk ist unterteilt in " },
                                { bold: "15 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Aldenhoven", hasInfo: false },
                                { id: 2, name: "Düren", hasInfo: false },
                                { id: 3, name: "Inden", hasInfo: false },
                                { id: 4, name: "Jülich", hasInfo: false },
                                { id: 5, name: "Kreuzau", hasInfo: false },
                                { id: 6, name: "Langerwehe", hasInfo: false },
                                { id: 7, name: "Linnich", hasInfo: false },
                                { id: 8, name: "Merzenich", hasInfo: false },
                                { id: 9, name: "Nörvenich", hasInfo: false },
                                { id: 10, name: "Nideggen", hasInfo: false },
                                { id: 11, name: "Niederzier", hasInfo: false },
                                { id: 12, name: "Titz", hasInfo: false },
                                { id: 13, name: "Vettweiß", hasInfo: false },
                                { id: 14, name: "Heimbach", hasInfo: false },
                                { id: 15, name: "Hürtgenwald", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/009.png"
                        },
                        {
                            id: 3,
                            name: "Oberbergischer Kreis",
                            fullName: "Oberbergischer Kreis",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Gummersbach." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 918,53 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Einwohner:" },
                                { text: " 275.735 (Stand: 31. Dezember 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " ca. 300 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Amtlicher Kreisschlüssel:" },
                                { text: " 05 3 74." }
                            ],
                            description: [
                                { text: "Der Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Kreis gliedert sich in " },
                                { bold: "13 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Bergneustadt", hasInfo: false },
                                { id: 2, name: "Waldbröl", hasInfo: false },
                                { id: 3, name: "Wiehl", hasInfo: false },
                                { id: 4, name: "Wipperfürth", hasInfo: false },
                                { id: 5, name: "Gummersbach", hasInfo: false },
                                { id: 6, name: "Lindlar", hasInfo: false },
                                { id: 7, name: "Marienheide", hasInfo: false },
                                { id: 8, name: "Morsbach", hasInfo: false },
                                { id: 9, name: "Nümbrecht", hasInfo: false },
                                { id: 10, name: "Radevormwald", hasInfo: false },
                                { id: 11, name: "Reichshof", hasInfo: false },
                                { id: 12, name: "Hückeswagen", hasInfo: false },
                                { id: 13, name: "Engelskirchen", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/010.png"
                        },
                        {
                            id: 4,
                            name: "Euskirchen",
                            fullName: "Kreis Euskirchen",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Zentrum des Bezirks:" },
                                { text: " Stadt Euskirchen." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 1.249,2 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Bevölkerung:" },
                                { text: " 188.773 Einwohner (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 151,1 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Offizieller Bezirkscode:" },
                                { text: " 05 3 66." }
                            ],
                            description: [
                                { text: "Der Bezirk gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Bezirk ist unterteilt in " },
                                { bold: "11 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Euskirchen", hasInfo: false },
                                { id: 2, name: "Mechernich", hasInfo: false },
                                { id: 3, name: "Zülpich", hasInfo: false },
                                { id: 4, name: "Bad Münstereifel", hasInfo: false },
                                { id: 5, name: "Weilerswist", hasInfo: false },
                                { id: 6, name: "Schleiden", hasInfo: false },
                                { id: 7, name: "Kall", hasInfo: false },
                                { id: 8, name: "Blankenheim", hasInfo: false },
                                { id: 9, name: "Hellenthal", hasInfo: false },
                                { id: 10, name: "Nettersheim", hasInfo: false },
                                { id: 11, name: "Dahlem", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/011.png"
                        },
                        {
                            id: 5,
                            name: "Rhein-Sieg-Kreis",
                            fullName: "Rhein-Sieg-Kreis",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Siegburg." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 1.153,00 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Einwohner:" },
                                { text: " ca. 620.000 (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " ca. 538 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Amtlicher Kreisschlüssel:" },
                                { text: " 05 3 82." }
                            ],
                            description: [
                                { text: "Der Kreis gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Kreis gliedert sich in " },
                                { bold: "19 Städte und Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Eitorf", hasInfo: false },
                                { id: 2, name: "Alfter", hasInfo: false },
                                { id: 3, name: "Bad Honnef", hasInfo: false },
                                { id: 4, name: "Bornheim", hasInfo: false },
                                { id: 5, name: "Wachtberg", hasInfo: false },
                                { id: 6, name: "Windeck", hasInfo: false },
                                { id: 7, name: "Siegburg", hasInfo: false },
                                { id: 8, name: "Königswinter", hasInfo: false },
                                { id: 9, name: "Lohmar", hasInfo: false },
                                { id: 10, name: "Meckenheim", hasInfo: false },
                                { id: 11, name: "Much", hasInfo: false },
                                { id: 12, name: "Niederkassel", hasInfo: false },
                                { id: 13, name: "Neunkirchen-Seelscheid", hasInfo: false },
                                { id: 14, name: "Rheinbach", hasInfo: false },
                                { id: 15, name: "Ruppichteroth", hasInfo: false },
                                { id: 16, name: "Troisdorf", hasInfo: false },
                                { id: 17, name: "Sankt Augustin", hasInfo: false },
                                { id: 18, name: "Swisttal", hasInfo: false },
                                { id: 19, name: "Hennef (Sieg)", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/012.png"
                        },
                        {
                            id: 6,
                            name: "Rhein-Erft-Kreis",
                            fullName: "Rhein-Erft-Kreis",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Bergheim." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 704,70 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Einwohner:" },
                                { text: " 480.989 Einwohner (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " ca. 679 Einwohner/km² (2022–2023)" }
                            ],
                            code: [
                                { bold: "Amtlicher Kreisschlüssel:" },
                                { text: " 05 3 62." }
                            ],
                            description: [
                                { text: "Der Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Kreis gliedert sich in " },
                                { bold: "10 Städte / Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Bedburg", hasInfo: false },
                                { id: 2, name: "Bergheim", hasInfo: false },
                                { id: 3, name: "Brühl", hasInfo: true, path: "bruehl" },
                                { id: 4, name: "Elsdorf", hasInfo: false },
                                { id: 5, name: "Erftstadt", hasInfo: false },
                                { id: 6, name: "Frechen", hasInfo: false },
                                { id: 7, name: "Hürth", hasInfo: false },
                                { id: 8, name: "Kerpen", hasInfo: false },
                                { id: 9, name: "Pulheim", hasInfo: false },
                                { id: 10, name: "Wesseling", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/013.png"
                        },
                        {
                            id: 7,
                            name: "Rheinisch-Bergischer Kreis",
                            fullName: "Rheinisch-Bergischer Kreis",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Bergisch Gladbach." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 437,07 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Einwohner:" },
                                { text: " 283.000 (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " ca. 648 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Amtlicher Kreisschlüssel:" },
                                { text: " 05 3 78." }
                            ],
                            description: [
                                { text: "Der Kreis gehört zum Bundesland Nordrhein‑Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Kreis gliedert sich in " },
                                { bold: "8 Städte / Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Bergisch Gladbach", hasInfo: false },
                                { id: 2, name: "Burscheid", hasInfo: false },
                                { id: 3, name: "Wermelskirchen", hasInfo: false },
                                { id: 4, name: "Kürten", hasInfo: false },
                                { id: 5, name: "Leichlingen", hasInfo: false },
                                { id: 6, name: "Overath", hasInfo: false },
                                { id: 7, name: "Odenthal", hasInfo: false },
                                { id: 8, name: "Rösrath", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/014.png"
                        },
                        {
                            id: 8,
                            name: "Kreis Heinsberg",
                            fullName: "Kreis Heinsberg",
                            parentDistrict: "Köln",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Heinsberg." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 627,7 km² (Stand 2023)" }
                            ],
                            population: [
                                { bold: "Einwohner:" },
                                { text: " 250.000 (Stand 2023)" }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " ca. 398 Einwohner/km² (2023)" }
                            ],
                            code: [
                                { bold: "Amtlicher Kreisschlüssel:" },
                                { text: " 05 3 70." }
                            ],
                            description: [
                                { text: "Der Kreis gehört zum Bundesland Nordrhein‑Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Kreis gliedert sich in " },
                                { bold: "10 Städte / Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Waldfeucht", hasInfo: false },
                                { id: 2, name: "Wassenberg", hasInfo: false },
                                { id: 3, name: "Wegberg", hasInfo: false },
                                { id: 4, name: "Geilenkirchen", hasInfo: false },
                                { id: 5, name: "Gangelt", hasInfo: false },
                                { id: 6, name: "Selfkant", hasInfo: false },
                                { id: 7, name: "Übach-Palenberg", hasInfo: false },
                                { id: 8, name: "Heinsberg", hasInfo: false },
                                { id: 9, name: "Hückelhoven", hasInfo: false },
                                { id: 10, name: "Erkelenz", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/015.png"
                        }
                    ],
                    meta: {
                        title: "Köln — Verwaltungsbezirk Nordrhein-Westfalens",
                        description: "Detaillierte Informationen über Köln: Kultur, Geschichte, Sehenswürdigkeiten des Bezirks.",
                        ogTitle: "Köln — Bezirk NRW",
                        ogDescription: "Köln: Verwaltungsbezirk in Nordrhein-Westfalen, Städte, Geschichte und interessante Fakten.",
                        ogImage: "/nrw/koeln.jpg"
                    }

                },
                { id: 5, name: 'Münster', hasInfo: false, path: "munster" }
            ]
        },
        {
            title: "Kreisfreie Städte in Nordrhein-Westfalen",
            items: [
                { id: 6, name: 'Bielefeld', hasInfo: false, path: "bielefeld", },
                { id: 7, name: 'Bonn', hasInfo: false, path: "bonn", },
                { id: 8, name: 'Bottrop', hasInfo: false, path: "bottrop", },
                { id: 9, name: 'Bochum', hasInfo: false, path: "bochum", },
                { id: 10, name: 'Wuppertal', hasInfo: false, path: "wuppertal", },
                { id: 11, name: 'Gelsenkirchen', hasInfo: false, path: "gelsenkirchen", },
                { id: 12, name: 'Dortmund', hasInfo: false, path: "dortmund", },
                { id: 13, name: 'Duisburg', hasInfo: false, path: "duisburg", },
                { id: 14, name: 'Düsseldorf', hasInfo: false, path: "duesseldorf", },
                { id: 15, name: 'Solingen', hasInfo: false, path: "solingen", },
                { id: 16, name: 'Köln', hasInfo: true, path: "koeln", },
                { id: 17, name: 'Krefeld', hasInfo: false, path: "krefeld", },
                { id: 18, name: 'Leverkusen', hasInfo: false, path: "leverkusen", },
                { id: 19, name: 'Mönchengladbach', hasInfo: false, path: "moenchengladbach", },
                { id: 20, name: 'Mülheim an der Ruhr', hasInfo: false, path: "muelheim", },
                { id: 21, name: 'Münster', hasInfo: false, path: "muenster", },
                { id: 22, name: 'Oberhausen', hasInfo: false, path: "oberhausen", },
                { id: 23, name: 'Remscheid', hasInfo: false, path: "remscheid", },
                { id: 24, name: 'Hagen', hasInfo: false, path: "hagen", },
                { id: 25, name: 'Hamm', hasInfo: false, path: "hamm", },
                { id: 26, name: 'Herne', hasInfo: false, path: "herne", },
                { id: 27, name: 'Essen', hasInfo: false, path: "essen", }
            ]
        }
    ],
    meta: {
        title: "Nordrhein-Westfalen — Informationen über die Region",
        description: "Nordrhein-Westfalen: Städte, Bezirke, Kultur und Sehenswürdigkeiten.",
        ogTitle: "Nordrhein-Westfalen — Informationen über die Region und Bezirke",
        ogDescription: "Detaillierte Informationen über Nordrhein-Westfalen: Städte, Bezirke, Geschichte und interessante Fakten.",
        ogImage: "/nrw/nrw-map.jpg"
    }
}
export default datas