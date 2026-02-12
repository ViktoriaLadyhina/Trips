const datas = {
    id: 10,
    name: 'Nordrhein-Westfalen',
    country: "Deutschland",
    hasInfo: true,
    path: 'nrw',
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
                img: "Germany/nrw/gerb.gif"
            },
            {
                bold: "Flagge:",
                text: " die Flagge Nordrhein-Westfalens besteht aus den Farben des Wappens: Grün, Weiß und Rot, horizontal angeordnet.",
                img: "Germany/nrw/flag.gif"
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
                {
                    id: 1,
                    title: 'Regierungsbezirk Arnsberg',
                    name: 'Arnsberg',
                    hasInfo: true,
                    path: "arnsberg",
                    desc: {
                        history: [
                            { text: 'Der Regierungsbezirk Arnsberg ist einer von fünf Regierungsbezirken des Bundeslandes Nordrhein-Westfalen. Er liegt im Südosten des Landes.' },
                            { text: 'Gegründet am 30. April 1815.' }
                        ],
                        area: [
                            { bold: 'Fläche:' },
                            { text: ' etwa 8.003 km².' }
                        ],
                        population: [
                            { bold: 'Bevölkerung:' },
                            { text: ' etwa 3.573.137 Einwohner (Stand 2024).' }
                        ],
                        districts: [
                            { bold: 'Kreise:' },
                            { text: 'Ennepe-Ruhr-Kreis, Märkischer Kreis, Hochsauerlandkreis, Olpe, Siegen-Wittgenstein, Soest, Unna' }
                        ],
                        cities: [
                            { bold: 'Kreisfreie Städte:' },
                            { text: 'Bochum, Dortmund, Hagen, Hamm, Herne' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 1,
                            name: "Siegen-Wittgenstein",
                            fullName: "Kreis Siegen-Wittgenstein",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Siegen." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 1.132,9 km² (Stand 2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " 274.379 Personen (Stand 31.12.2023)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 242,7 Personen/km² (Stand 2023)." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 70." }
                            ],
                            description: [
                                { text: "Der Kreis Siegen-Wittgenstein gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "11 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Bad Berleburg", hasInfo: false },
                                { id: 2, name: "Bad Laasphe", hasInfo: false },
                                { id: 3, name: "Burbach", hasInfo: false },
                                { id: 4, name: "Wilnsdorf", hasInfo: false },
                                { id: 5, name: "Siegen", hasInfo: false },
                                { id: 6, name: "Kreuztal", hasInfo: false },
                                { id: 7, name: "Netphen", hasInfo: false },
                                { id: 8, name: "Freudenberg", hasInfo: false },
                                { id: 9, name: "Neunkirchen", hasInfo: false },
                                { id: 10, name: "Hilchenbach", hasInfo: false },
                                { id: 11, name: "Erndtebrück", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Siegen-Wittgenstein/gerb.png"
                        },
                        {
                            id: 2,
                            name: "Soest",
                            fullName: "Kreis Soest",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Soest." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 1.328,6 km² (Stand 2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " etwa 300.297 Personen (Stand 2023)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 226 Personen/km²." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 74." }
                            ],
                            description: [
                                { text: "Der Kreis Soest gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "14 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Anröchte", hasInfo: false },
                                { id: 2, name: "Bad Sassendorf", hasInfo: false },
                                { id: 3, name: "Warstein", hasInfo: false },
                                { id: 4, name: "Welver", hasInfo: false },
                                { id: 5, name: "Werl", hasInfo: false },
                                { id: 6, name: "Wickede", hasInfo: false },
                                { id: 7, name: "Geseke", hasInfo: false },
                                { id: 8, name: "Soest", hasInfo: false },
                                { id: 9, name: "Lippetal", hasInfo: false },
                                { id: 10, name: "Lippstadt", hasInfo: false },
                                { id: 11, name: "Möhnesee", hasInfo: false },
                                { id: 12, name: "Rüthen", hasInfo: false },
                                { id: 13, name: "Ense", hasInfo: false },
                                { id: 14, name: "Erwitte", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Soest/gerb.png"
                        },
                        {
                            id: 3,
                            name: "Märkischer Kreis",
                            fullName: "Märkischer Kreis",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Lüdenscheid." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 1.058,95 km² (Stand 2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " 408.899 Personen (Stand 31.12.2023)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 390 Personen/km²." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 62." }
                            ],
                            description: [
                                { text: "Der Märkische Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "15 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Altena", hasInfo: false },
                                { id: 2, name: "Balve", hasInfo: false },
                                { id: 3, name: "Werdohl", hasInfo: false },
                                { id: 4, name: "Iserlohn", hasInfo: false },
                                { id: 5, name: "Kierspe", hasInfo: false },
                                { id: 6, name: "Lüdenscheid", hasInfo: true, path: 'luedenscheid' },
                                { id: 7, name: "Meinerzhagen", hasInfo: false },
                                { id: 8, name: "Menden", hasInfo: false },
                                { id: 9, name: "Nachrodt-Wiblingwerde", hasInfo: false },
                                { id: 10, name: "Neuenrade", hasInfo: false },
                                { id: 11, name: "Plettenberg", hasInfo: false },
                                { id: 12, name: "Halver", hasInfo: false },
                                { id: 13, name: "Herscheid", hasInfo: false },
                                { id: 14, name: "Hemer", hasInfo: false },
                                { id: 15, name: "Schalksmühle", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Märkischer-Kreis/gerb.png"
                        },
                        {
                            id: 4,
                            name: "Olpe",
                            fullName: "Kreis Olpe",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Olpe." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 710,7 km² (Stand 2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " 134.439 Personen (Stand 31.12.2022)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 188,8 Personen/km²." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 66." }
                            ],
                            description: [
                                { text: "Der Kreis Olpe gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "7 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Attendorn", hasInfo: false },
                                { id: 2, name: "Wenden", hasInfo: false },
                                { id: 3, name: "Drolshagen", hasInfo: false },
                                { id: 4, name: "Kirchhundem", hasInfo: false },
                                { id: 5, name: "Lennestadt", hasInfo: false },
                                { id: 6, name: "Olpe", hasInfo: false },
                                { id: 7, name: "Finnentrop", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Olpe/gerb.png"
                        },
                        {
                            id: 5,
                            name: "Unna",
                            fullName: "Kreis Unna",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Unna." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 543,2 km² (Stand 31.12.2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " 396.283 Personen (Stand 31.12.2023)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 730,3 Personen/km²." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 78." }
                            ],
                            description: [
                                { text: "Der Kreis Unna gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "10 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Bönen", hasInfo: false },
                                { id: 2, name: "Bergkamen", hasInfo: false },
                                { id: 3, name: "Werne", hasInfo: false },
                                { id: 4, name: "Selm", hasInfo: false },
                                { id: 5, name: "Kamen", hasInfo: false },
                                { id: 6, name: "Lünen", hasInfo: false },
                                { id: 7, name: "Unna", hasInfo: false },
                                { id: 8, name: "Fröndenberg", hasInfo: false },
                                { id: 9, name: "Holzwickede", hasInfo: false },
                                { id: 10, name: "Schwerte", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Unna/gerb.png"
                        },
                        {
                            id: 6,
                            name: "Hochsauerlandkreis",
                            fullName: "Hochsauerlandkreis",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Meschede." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 1.960,2 km² (Stand 31.12.2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " 261.193 Personen (Stand 31.12.2023)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 133,2 Personen/km²." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 58." }
                            ],
                            description: [
                                { text: "Der Hochsauerlandkreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "12 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Arnsberg", hasInfo: false },
                                { id: 2, name: "Bestwig", hasInfo: false },
                                { id: 3, name: "Brilon", hasInfo: false },
                                { id: 4, name: "Winterberg", hasInfo: false },
                                { id: 5, name: "Sundern", hasInfo: false },
                                { id: 6, name: "Marsberg", hasInfo: false },
                                { id: 7, name: "Medebach", hasInfo: false },
                                { id: 8, name: "Meschede", hasInfo: false },
                                { id: 9, name: "Olsberg", hasInfo: false },
                                { id: 10, name: "Hallenberg", hasInfo: false },
                                { id: 11, name: "Schmallenberg", hasInfo: false },
                                { id: 12, name: "Eslohe", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Hochsauerlandkreis/gerb.png"
                        },
                        {
                            id: 7,
                            name: "Ennepe-Ruhr-Kreis",
                            fullName: "Ennepe-Ruhr-Kreis",
                            parentDistrict: "Arnsberg",
                            center: [
                                { bold: "Kreisstadt:" },
                                { text: " Stadt Schwelm." }
                            ],
                            area: [
                                { bold: "Fläche:" },
                                { text: " 408,44 km² (Stand 31.12.2023)." }
                            ],
                            population: [
                                { bold: "Einwohnerzahl:" },
                                { text: " 314.167 Personen (Stand 31.12.2024)." }
                            ],
                            density: [
                                { bold: "Bevölkerungsdichte:" },
                                { text: " 766,9 Personen/km²." }
                            ],
                            code: [
                                { bold: "Amtlicher Regionalschlüssel:" },
                                { text: " 05 9 54." }
                            ],
                            description: [
                                { text: "Der Ennepe-Ruhr-Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Arnsberg." }
                            ],
                            com: [
                                { text: "Der Kreis ist unterteilt in " },
                                { bold: "9 Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Breckerfeld", hasInfo: false },
                                { id: 2, name: "Ennepetal", hasInfo: false },
                                { id: 3, name: "Gevelsberg", hasInfo: false },
                                { id: 4, name: "Hattingen", hasInfo: false },
                                { id: 5, name: "Herdecke", hasInfo: false },
                                { id: 6, name: "Schwelm", hasInfo: false },
                                { id: 7, name: "Sprockhövel", hasInfo: false },
                                { id: 8, name: "Wetter (Ruhr)", hasInfo: false },
                                { id: 9, name: "Witten", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Ennepe-Ruhr-Kreis/gerb.png"
                        }
                    ]
                },
                { id: 2, name: 'Detmold', hasInfo: false, path: "detmold" },
                { id: 3, name: 'Düsseldorf', hasInfo: false, path: "dusseldorf" },
                {
                    id: 4,
                    title: 'Regierungsbezirk Köln',
                    name: 'Köln',
                    hasInfo: true,
                    path: "koln",
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
                                { text: "Der Bezirk Aachen gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                            gerb: "Germany/nrw/koln/Aachen/gerb.png"
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
                                { text: "Der Bezirk Düren gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                            gerb: "Germany/nrw/koln/Düren/gerb.png"
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
                                { text: "Oberbergischer Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                            gerb: "Germany/nrw/koln/Oberbergischer/gerb.png"
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
                                { text: "Der Bezirk uskirchen gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                            gerb: "Germany/nrw/koln/Euskirchen/gerb.png"
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
                                { text: "Rhein-Sieg-Kreis gehört zum Bundesland Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                                { id: 8, name: "Königswinter", hasInfo: true, path: "konigswinter" },
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
                            gerb: "Germany/nrw/koln/Rhein-Sieg-Kreis/gerb.png"
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
                                { text: "Rhein-Erft-Kreis gehört zum Land Nordrhein-Westfalen und untersteht dem Regierungsbezirk Köln." }
                            ],
                            com: [
                                { text: "Der Kreis gliedert sich in " },
                                { bold: "10 Städte / Gemeinden:" }
                            ],
                            communities: [
                                { id: 1, name: "Bedburg", hasInfo: false },
                                { id: 2, name: "Bergheim", hasInfo: false },
                                { id: 3, name: "Brühl", hasInfo: true, path: "bruhl" },
                                { id: 4, name: "Elsdorf", hasInfo: false },
                                { id: 5, name: "Erftstadt", hasInfo: false },
                                { id: 6, name: "Frechen", hasInfo: true, path: 'frechen' },
                                { id: 7, name: "Hürth", hasInfo: false },
                                { id: 8, name: "Kerpen", hasInfo: false },
                                { id: 9, name: "Pulheim", hasInfo: false },
                                { id: 10, name: "Wesseling", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Rhein-Erft-Kreis/gerb.png"
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
                                { text: "Rheinisch-Bergischer Kreis gehört zum Bundesland Nordrhein‑Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                            gerb: "Germany/nrw/koln/Rheinisch-Bergischer/gerb.png"
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
                                { text: "Kreis Heinsberg gehört zum Bundesland Nordrhein‑Westfalen und untersteht dem Regierungsbezirk Köln." }
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
                            gerb: "Germany/nrw/koln/Heinsberg/gerb.png"
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
                { id: 28, name: 'Aachen', hasInfo: false, path: "aachen" },
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
                { id: 16, name: 'Köln', hasInfo: true, path: "koln", },
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
        ogImage: "https://our-travels.info/new/foto/Germany/nrw/koln/koln-city/koln-cathedral/001.jpg"
    }
}
export default datas