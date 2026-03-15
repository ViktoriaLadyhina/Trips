const datas = [
{
    id: 10,
    name: 'Nordrhein-Westfalen',
    hasInfo: true,
    path: 'nrw',
    country: "Deutschland",
    desc: {
        capital: [{ bold: 'Hauptstadt:', text: ' Düsseldorf' }],
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
                { id: 1, name: 'Arnsberg', hasInfo: true,   path: "arnsberg" },
                { id: 2, name: 'Detmold', hasInfo: false, path: "detmold" },
                { id: 3, name: 'Düsseldorf', hasInfo: false, path: "dusseldorf" },
                { id: 4, name: 'Köln', hasInfo: true,  path: "koln" },
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
                { id: 12, name: 'Dortmund', hasInfo: true, path: "dortmund", },
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
        ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/koln-cathedral/001.jpg"
    }
},
{
    id: 11,
    name: 'Rheinland-Pfalz',
    hasInfo: true,
    path: 'rheinland-pfalz',
    country: "Deutschland",
    desc: {
        capital: [{ bold: 'Hauptstadt:', text: ' Mainz' }],
        population: [{ bold: 'Einwohnerzahl (2024):', text: ' Bevölkerung: etwa 4,1 Millionen Menschen. Ausländer – etwa 500.000 Personen.' }],
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
                { id: 3, name: 'Alzey-Worms', hasInfo: false, path: "alzey_worms" },
                { id: 4, name: 'Bad Dürkheim', hasInfo: false, path: "bad_duerkheim" },
                { id: 5, name: 'Bad Kreuznach', hasInfo: false, path: "bad_kreuznach" },
                { id: 6, name: 'Bernkastel-Wittlich', hasInfo: false, path: "bernkastel_wittlich" },
                { id: 7, name: 'Birkenfeld', hasInfo: false, path: "birkenfeld" },
                { id: 8, name: 'Cochem-Zell', hasInfo: false, path: "cochem_zell" },
                { id: 9, name: 'Donnersbergkreis', hasInfo: false, path: "donnersbergkreis" },
                { id: 10, name: 'Eifelkreis Bitburg-Prüm', hasInfo: false, path: "eifelkreis_bitburg-pruem" },
                { id: 11, name: 'Germersheim', hasInfo: false, path: "germersheim" },
                { id: 12, name: 'Kaiserslautern', hasInfo: false, path: "kaiserslautern" },
                { id: 13, name: 'Kusel', hasInfo: false, path: "kusel" },
                { id: 14, name: 'Mainz-Bingen', hasInfo: false, path: "mainz_bingen" },
                { id: 15, name: 'Mayen-Koblenz', hasInfo: true, path: "mayen_koblenz" },
                { id: 16, name: 'Neuwied', hasInfo: false, path: "neuwied" },
                { id: 17, name: 'Rhein-Hunsrück-Kreis', hasInfo: false, path: "rhein_hunsrueck_kreis" },
                { id: 18, name: 'Rhein-Lahn-Kreis', hasInfo: false, path: "rhein_lahn_kreis" },
                { id: 19, name: 'Rhein-Pfalz-Kreis', hasInfo: false, path: "rhein_pfalz_kreis" },
                { id: 20, name: 'Südliche Weinstraße', hasInfo: false, path: "suedliche_weinstrasse" },
                { id: 21, name: 'Südwestpfalz', hasInfo: false, path: "suedwestpfalz" },
                { id: 22, name: 'Trier-Saarburg', hasInfo: true, path: "trier_saarburg" },
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
]
export default datas