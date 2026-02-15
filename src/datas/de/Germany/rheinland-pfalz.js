const datas = {
    id: 10,
    name: 'Rheinland-Pfalz',
    hasInfo: true,
    path: 'rheinland-pfalz',
    country: "Deutschland",
    desc: {
        capital: [
            { bold: 'Hauptstadt:' },
            { text: ' Mainz' }
        ],
        population: [
            { bold: 'Einwohnerzahl (2024):' },
            { text: ' Bevölkerung: etwa 4,1 Millionen Menschen. Ausländer – etwa 500.000 Personen.' }
        ],
        area: [
            { bold: 'Fläche:' },
            { text: ' 19.854 km². Bevölkerungsdichte – etwa 206 Einwohner pro 1 km².' }
        ],
        geography: [
            { bold: 'Geografie:' },
            { text: ' Rheinland-Pfalz liegt im Westen Deutschlands. Es grenzt an Belgien (133 km), Luxemburg (136 km), Frankreich (136 km) sowie an die Bundesländer Nordrhein-Westfalen (307 km), Saarland (91 km), Hessen (203 km) und Rheinland-Pfalz selbst (interne Verwaltungsgrenzen zwischen den Landkreisen).' },
            { text: ' Das Bundesland umfasst mehrere große Landschaftsregionen: den Rheingraben (Rheingraben), den Hunsrück, den Westerwald, die Eifel sowie Teile des Pfälzerwaldes. Wälder bedecken etwa 42 % der Landesfläche.' },
        ],
        history: [
            { bold: 'Herkunft des Namens:' },
            { text: ' Der Name Rheinland-Pfalz entstand nach dem Zweiten Weltkrieg im Jahr 1946, als die britischen und französischen Besatzungszonen den südlichen Teil der ehemaligen Rheinprovinz Preußens, den Süden des Rheinlands sowie die Region Pfalz zusammenführten.' }
        ],
        economy: [
            { bold: 'Wirtschaft:' },
            { text: ' Rheinland-Pfalz ist bekannt für seine Landwirtschaft (der Weinbau zählt zu den bedeutendsten Regionen Deutschlands), die chemische Industrie, den Maschinenbau und die Energiewirtschaft. Tourismus und Weinstraßen nehmen einen wichtigen Platz in der Wirtschaft ein.' },
        ],
        cities: [
            { bold: 'Große Städte:' },
            { text: ' Mainz, Koblenz, Trier, Ludwigshafen, Kaiserslautern, Bad Kreuznach, Worms, Mainz-Kastel, Sülz.' }
        ],
        rivers: [
            { bold: 'Wichtige Flüsse:' },
            { text: ' Rhein, Mosel, Nahe, Lahn, Sülz.' }
        ],
        tourism: [
            { bold: 'Tourismus und Erholung:' },
            { text: ' Rheinland-Pfalz ist bekannt für seine historischen Städte, römischen Denkmäler, Burgen, Weinberge und Naturparks. Beliebt sind Routen entlang des Rheins und der Mosel sowie Besuche in Trier, Koblenz, Mainz und zahlreichen Burgen.' }
        ]
    },
    symbols: {
        title: "Heraldik",
        items: [
            {
                bold: "Wappen:",
                text: " Im Wappen von Rheinland-Pfalz sind die Symbole historischer Territorien vereint: der rote Löwe auf weißem Grund (Pfalz), das silberne Kreuz auf rotem Grund (Mainz) sowie der goldene Adler auf schwarzem Grund (Rheinprovinz).",
                img: "Germany/rheinland-pfalz/gerb.png"
            },
            {
                bold: "Flagge:",
                text: " Die Flagge von Rheinland-Pfalz besteht aus drei horizontalen Streifen: Schwarz, Rot und Gold.",
                img: "Germany/rheinland-pfalz/flag.png"
            }
        ]
    },
    briefHistory: {
        title: 'Kurze Geschichte',
        items: [
            { text: "Das Gebiet des heutigen Bundeslandes Rheinland-Pfalz besitzt eine reiche und vielfältige Geschichte. Bereits in der römischen Antike befanden sich hier bedeutende Siedlungen wie Trier, eine der ältesten Städte Deutschlands. Im Mittelalter war die Region zwischen verschiedenen Fürstentümern, Bistümern und Reichsstädten aufgeteilt. Eine bedeutende Rolle spielten die Erzbistümer Mainz und Trier sowie die pfälzischen Grafschaften." },
            { text: "Im 18. und 19. Jahrhundert erlebten die Gebiete häufige Herrschaftswechsel: Nach den napoleonischen Kriegen wurde die Region Teil der Rheinprovinz Preußens sowie anderer deutscher Staaten. Die Wirtschaft entwickelte sich vor allem durch Landwirtschaft, Weinbau und Handwerk, während die Städte zu wichtigen Handelszentren wurden." },
            { text: "Nach dem Ersten Weltkrieg stand ein Teil des Gebiets unter französischer Verwaltung. Während des Zweiten Weltkriegs erlitt die Region schwere Zerstörungen, doch viele historische Bauwerke wurden nach Kriegsende wiederaufgebaut." },
            { text: "Im Jahr 1946 wurde unter der Leitung der französischen Besatzungsverwaltung das Bundesland Rheinland-Pfalz gegründet, das den südlichen Teil der Rheinprovinz, die Pfalz sowie einige Gebiete der ehemaligen luxemburgischen Region vereinte. 1947 wurde das erste Landesgesetz verabschiedet, das die administrative Struktur festlegte." },
            { text: "Seit seiner Gründung hat sich Rheinland-Pfalz zu einem bedeutenden kulturellen, wirtschaftlichen und politischen Bundesland Deutschlands entwickelt, das sein reiches historisches Erbe und seine einzigartigen Naturlandschaften bewahrt hat. Heute ist Rheinland-Pfalz bekannt für seine Burgen, Weinberge, römischen Denkmäler und historischen Städte." },
        ]
    },
    discriptRegions: [
        {
            title: "Landkreise in Rheinland-Pfalz",
            items: [
                { id: 1, name: 'Ahrweiler', hasInfo: false, path: "ahrweiler" },
                { id: 2, name: 'Altenkirchen', hasInfo: false, path: "altenkirchen" },
                { id: 3, name: 'Alzey-Worms', hasInfo: false, path: "alzey-worms" },
                { id: 4, name: 'Bad Dürkheim', hasInfo: false, path: "bad-duerkheim" },
                { id: 5, name: 'Bad Kreuznach', hasInfo: false, path: "bad-kreuznach" },
                { id: 6, name: 'Bernkastel-Wittlich', hasInfo: false, path: "bernkastel-wittlich" },
                { id: 7, name: 'Birkenfeld', hasInfo: false, path: "birkenfeld" },
                { id: 8, name: 'Cochem-Zell', hasInfo: false, path: "cochem-zell" },
                { id: 9, name: 'Donnersbergkreis', hasInfo: false, path: "donnersbergkreis" },
                { id: 10, name: 'Eifelkreis Bitburg-Prüm', hasInfo: false, path: "eifelkreis-bitburg-pruem" },
                { id: 11, name: 'Germersheim', hasInfo: false, path: "germersheim" },
                { id: 12, name: 'Kaiserslautern', hasInfo: false, path: "kaiserslautern" },
                { id: 13, name: 'Kusel', hasInfo: false, path: "kusel" },
                { id: 14, name: 'Mainz-Bingen', hasInfo: false, path: "mainz-bingen" },
                {
                    id: 15,
                    name: 'Mayen-Koblenz',
                    title: "Landkreis Mayen-Koblenz",
                    hasInfo: true,
                    path: "mayen-koblenz",
                    desc: {
                        history: [
                            { text: 'Der Landkreis Mayen-Koblenz (Landkreis Mayen-Koblenz) ist ein Verwaltungsbezirk (Kreis) in Deutschland und gehört zum Bundesland Rheinland-Pfalz. Er liegt im nördlichen Teil des Landes entlang der mittleren Läufe der Flüsse Rhein und Mosel.' },
                            { text: 'Gegründet im Jahr 1970 durch Zusammenschluss der Kreise Mayen und Koblenz.' },
                            { bold: 'Verwaltungszentrum:', text: 'die Stadt Koblenz, die nicht zum Landkreis gehört und auf Kreisebene selbstständig verwaltet wird (kreisfreie Stadt).' }
                        ],
                        area: [
                            { bold: 'Fläche:', text: ' etwa 817 km².' },
                            { bold: 'Geographie:', text: ' der Landkreis grenzt an andere Landkreise von Rheinland Pfalz – Ahrweiler, Neuwied, Westerwald, Rhein Lahn, Rhein Hunsrück, Cochem Zell und Vulkaneifel? sowie umschließt die Stadt Koblenz. Auf dem Gebiet – Höhen der Eifel, ein Teil des Moseltals und das Rheintal.' }
                        ],
                        population: [
                            { bold: 'Bevölkerung:', text: ' etwa 217 000 Einwohner (2024-2025).' },
                            { bold: 'Bevölkerungsdichte:', text: ' etwa 260-270 Einwohner/km².' }
                        ],
                        districts: [
                            { bold: 'Kreise-Bezirke (Kreise):' },
                            { text: 'Mayen (Mayen), Andernach (Andernach), Bendorf (Bendorf), Mendig (Mendig), Pellenz (Pellenz), Maifeld (Maifeld), Vordereifel (Vordereifel), Rhein-Mosel (Rhein-Mosel), Weißenthurm (Weißenthurm)' }
                        ],
                        cities: [
                            { bold: 'Städte, die keinem Kreis angehören (kreisfreie Städte):' },
                            { text: 'Koblenz (Koblenz)' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 0,
                            name: "Kreisfreie Städte des Landkreises Mayen-Koblenz",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ text: "Drei Städte gehören zum Landkreis Mayen-Koblenz, werden jedoch auf Kreisebene selbstständig verwaltet (kreisfreie Städte)." }],
                            communities: [
                                { id: 1, name: "Mayen", hasInfo: false },
                                { id: 2, name: "Andernach", hasInfo: false },
                                { id: 3, name: "Bendorf", hasInfo: false }
                            ],
                        },
                        {
                            id: 1,
                            name: "Mendig",
                            fullName: "Mendig",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungszentrum:", text: " Stadt Mendig." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz im Bundesland Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " etwa 75 km² (Stand 2024)" }],
                            density: [{ bold: "Bevölkerungsdichte:", text: " etwa 185 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " etwa 13 900 Einwohner (Stand 2024)" }],
                            com: [{ text: "Der Bezirk ist unterteilt in " }, { bold: "5 Gemeinden:" }],
                            communities: [
                                { id: 1, name: "Bell", hasInfo: false },
                                { id: 2, name: "Mendig", hasInfo: false },
                                { id: 3, name: "Rieden", hasInfo: false },
                                { id: 4, name: "Thür", hasInfo: false },
                                { id: 5, name: "Volkesfeld", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Mendig/gerb.gif"
                        },
                        {
                            id: 2,
                            name: "Pellenz",
                            fullName: "Pellenz",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungssitz:", text: " Stadt Plaidt." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " ca. 63 km² (Stand 2024)" }],
                            density: [{ bold: "Einwohnerdichte:", text: " ca. 262 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " ca. 16.500 Einwohner (Stand 2024)" }],
                            com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "5 Ortsgemeinden:" }],
                            communities: [
                                { id: 1, name: "Kretz", hasInfo: false },
                                { id: 2, name: "Kruf", hasInfo: false },
                                { id: 3, name: "Nickenich", hasInfo: false },
                                { id: 4, name: "Plaidt", hasInfo: false },
                                { id: 5, name: "Saffig", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Pellenz/gerb.gif"
                        },
                        {
                            id: 3,
                            name: "Vallendar",
                            fullName: "Vallendar",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungssitz:", text: " Vallendar." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " ca. 38 km² (Stand 2024)" }],
                            density: [{ bold: "Einwohnerdichte:", text: " ca. 400 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " ca. 15.200 Einwohner (Stand 2024)" }],
                            com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "4 Ortsgemeinden:" }],
                            communities: [
                                { id: 1, name: "Niederwerth", hasInfo: false },
                                { id: 2, name: "Urbar", hasInfo: false },
                                { id: 3, name: "Vallendar", hasInfo: false },
                                { id: 4, name: "Weitersburg", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif"
                        },
                        {
                            id: 4,
                            name: "Weißenthurm",
                            fullName: "Weißenthurm",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungssitz:", text: " Weißenthurm." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " ca. 52 km² (Stand 2024)" }],
                            density: [{ bold: "Einwohnerdichte:", text: " ca. 510 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " ca. 26.500 Einwohner (Stand 2024)" }],
                            com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "7 Ortsgemeinden:" }],
                            communities: [
                                { id: 1, name: "Bassenheim", hasInfo: false },
                                { id: 2, name: "Kaltenengers", hasInfo: false },
                                { id: 3, name: "Kettig", hasInfo: false },
                                { id: 4, name: "Mülheim-Kärlich", hasInfo: false },
                                { id: 5, name: "Sankt Sebastian", hasInfo: false },
                                { id: 6, name: "Urmitz", hasInfo: false },
                                { id: 7, name: "Weißenthurm", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif"
                        },
                        {
                            id: 5,
                            name: "Maifeld",
                            fullName: "Maifeld",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungssitz:", text: " Polch." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " ca. 137,5 km² (Stand 2024)" }],
                            density: [{ bold: "Einwohnerdichte:", text: " ca. 93 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " ca. 12.800 Einwohner (Stand 2024)" }],
                            com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "18 Ortsgemeinden:" }],
                            communities: [
                                { id: 1, name: "Aynig", hasInfo: false },
                                { id: 2, name: "Gappenach", hasInfo: false },
                                { id: 3, name: "Gering", hasInfo: false },
                                { id: 4, name: "Girshnach", hasInfo: false },
                                { id: 5, name: "Kalt", hasInfo: false },
                                { id: 6, name: "Kerben", hasInfo: false },
                                { id: 7, name: "Collig", hasInfo: false },
                                { id: 8, name: "Lonnig", hasInfo: false },
                                { id: 9, name: "Mertloch", hasInfo: false },
                                { id: 10, name: "Münstermaifeld", hasInfo: false },
                                { id: 11, name: "Nauheim", hasInfo: false },
                                { id: 12, name: "Ochtendung", hasInfo: false },
                                { id: 13, name: "Pillig", hasInfo: false },
                                { id: 14, name: "Polch", hasInfo: false },
                                { id: 15, name: "Rüber", hasInfo: false },
                                { id: 16, name: "Trimbs", hasInfo: false },
                                { id: 17, name: "Welling", hasInfo: false },
                                { id: 18, name: "Wirschem", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Maifeld/gerb.gif"
                        },
                        {
                            id: 6,
                            name: "Rhein-Mosel",
                            fullName: "Rhein-Mosel",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungssitz:", text: " Kobern-Gondorf." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " ca. 128,2 km² (Stand 2024)" }],
                            density: [{ bold: "Einwohnerdichte:", text: " ca. 194 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " ca. 24.900 Einwohner (Stand 2024)" }],
                            com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "17 Ortsgemeinden:" }],
                            communities: [
                                { id: 1, name: "Alken", hasInfo: false },
                                { id: 2, name: "Brey", hasInfo: false },
                                { id: 3, name: "Brodenbach", hasInfo: false },
                                { id: 4, name: "Burgen", hasInfo: false },
                                { id: 5, name: "Diefenbach", hasInfo: false },
                                { id: 6, name: "Hatzenport", hasInfo: false },
                                { id: 7, name: "Kobern-Gondorf", hasInfo: false },
                                { id: 8, name: "Lemern", hasInfo: false },
                                { id: 9, name: "Löf", hasInfo: false },
                                { id: 10, name: "Macken", hasInfo: false },
                                { id: 11, name: "Nörtershausen", hasInfo: false },
                                { id: 12, name: "Oberfell", hasInfo: false },
                                { id: 13, name: "Reinsfeld", hasInfo: false },
                                { id: 14, name: "Spay", hasInfo: false },
                                { id: 15, name: "Waldesch", hasInfo: false },
                                { id: 16, name: "Winningen", hasInfo: false },
                                { id: 17, name: "Volken", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Rhein-Mosel/gerb.gif"
                        },
                        {
                            id: 7,
                            name: "Vordereifel",
                            fullName: "Vordereifel",
                            parentDistrict: "Mayen-Koblenz",
                            center: [{ bold: "Verwaltungssitz:", text: " Monreal." }],
                            description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                            area: [{ bold: "Fläche:", text: " ca. 215,7 km² (Stand 2024)" }],
                            density: [{ bold: "Einwohnerdichte:", text: " ca. 77 Einwohner/km² (Stand 2024)" }],
                            population: [{ bold: "Bevölkerung:", text: " ca. 16.600 Einwohner (Stand 2024)" }],
                            com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "27 Ortsgemeinden:" }],
                            communities: [
                                { id: 1, name: "Acht", hasInfo: false },
                                { id: 2, name: "Anschau", hasInfo: false },
                                { id: 3, name: "Arft", hasInfo: false },
                                { id: 4, name: "Baar", hasInfo: false },
                                { id: 5, name: "Bermel", hasInfo: false },
                                { id: 6, name: "Boos", hasInfo: false },
                                { id: 7, name: "Ditscheid", hasInfo: false },
                                { id: 8, name: "Ettringen", hasInfo: false },
                                { id: 9, name: "Hausten", hasInfo: false },
                                { id: 10, name: "Herresbach", hasInfo: false },
                                { id: 11, name: "Hirten", hasInfo: false },
                                { id: 12, name: "Kerig", hasInfo: false },
                                { id: 13, name: "Kirchwald", hasInfo: false },
                                { id: 14, name: "Kottenheim", hasInfo: false },
                                { id: 15, name: "Langenfeld", hasInfo: false },
                                { id: 16, name: "Langscheid", hasInfo: false },
                                { id: 17, name: "Lind", hasInfo: false },
                                { id: 18, name: "Luxem", hasInfo: false },
                                { id: 19, name: "Monreal", hasInfo: false },
                                { id: 20, name: "Münk", hasInfo: false },
                                { id: 21, name: "Nachtsheim", hasInfo: false },
                                { id: 22, name: "Reudelsterz", hasInfo: false },
                                { id: 23, name: "Sankt Johann", hasInfo: false },
                                { id: 24, name: "Siebenbach", hasInfo: false },
                                { id: 25, name: "Fährneburg", hasInfo: false },
                                { id: 26, name: "Weiler", hasInfo: false },
                                { id: 27, name: "Welshenbach", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vordereifel/gerb.gif"
                        }
                    ],
                },
                { id: 16, name: 'Neuwied', hasInfo: false, path: "neuwied" },
                { id: 17, name: 'Rhein-Hunsrück-Kreis', hasInfo: false, path: "rhein-hunsrueck-kreis" },
                { id: 18, name: 'Rhein-Lahn-Kreis', hasInfo: false, path: "rhein-lahn-kreis" },
                { id: 19, name: 'Rhein-Pfalz-Kreis', hasInfo: false, path: "rhein-pfalz-kreis" },
                { id: 20, name: 'Südliche Weinstraße', hasInfo: false, path: "suedliche-weinstrasse" },
                { id: 21, name: 'Südwestpfalz', hasInfo: false, path: "suedwestpfalz" },
                { id: 22, name: 'Trier-Saarburg', hasInfo: false, path: "trier-saarburg" },
                { id: 23, name: 'Vulkaneifel', hasInfo: false, path: "vulkaneifel" },
                { id: 24, name: 'Westerwaldkreis', hasInfo: false, path: "westerwaldkreis" },
            ]
        },
        {
            title: "Kreisfreie Städte in Rheinland-Pfalz",
            items: [
                { id: 25, name: 'Mainz', hasInfo: false, path: "mainz" },
                { id: 26, name: 'Koblenz', hasInfo: false, path: "koblenz" },
                { id: 27, name: 'Ludwigshafen', hasInfo: false, path: "ludwigshafen" },
                { id: 28, name: 'Trier', hasInfo: true, path: "trier" },
                { id: 29, name: 'Kaiserslautern', hasInfo: false, path: "kaiserslautern-city" },
                { id: 30, name: 'Worms', hasInfo: false, path: "worms" },
                { id: 31, name: 'Speyer', hasInfo: false, path: "speyer" },
                { id: 32, name: 'Frankenthal', hasInfo: false, path: "frankenthal" },
                { id: 33, name: 'Landau in der Pfalz', hasInfo: false, path: "landau" },
                { id: 34, name: 'Neustadt an der Weinstraße', hasInfo: false, path: "neustadt" },
                { id: 35, name: 'Pirmasens', hasInfo: false, path: "pirmasens" },
                { id: 36, name: 'Zweibrücken', hasInfo: false, path: "zweibruecken" }
            ]
        }
    ],
    meta: {
        title: "Rheinland-Pfalz — Informationen zur Region",
        description: "Rheinland-Pfalz: Städte, Landkreise, Kultur und Sehenswürdigkeiten.",
        ogTitle: "Rheinland-Pfalz — Informationen zur Region und zu den Landkreisen",
        ogDescription: "Detaillierte Informationen zu Rheinland-Pfalz: Städte, Landkreise, Geschichte und interessante Fakten.",
        ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
    }
}

export default datas