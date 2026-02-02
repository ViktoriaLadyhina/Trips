const datas = {
    id: 10,
    name: 'Rheinland-Pfalz',
    hasInfo: true,
    path: 'rhineland-pfalz',
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
                img: "Germany/rhineland-pfalz/gerb.png"
            },
            {
                bold: "Flagge:",
                text: " Die Flagge von Rheinland-Pfalz besteht aus drei horizontalen Streifen: Schwarz, Rot und Gold.",
                img: "Germany/rhineland-pfalz/flag.png"
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
                { id: 15, name: 'Mayen-Koblenz', hasInfo: false, path: "mayen-koblenz" },
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
                { id: 28, name: 'Trier', hasInfo: false, path: "trier" },
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
        ogImage: "/rhineland-pfalz/rp-map.jpg"
    }
}

export default datas