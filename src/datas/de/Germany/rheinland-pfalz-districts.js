const datas = [
    { id: 0, name: "Stadt von regionaler Bedeutung", path: "city" },

    { id: 1, name: 'Ahrweiler', hasInfo: false, path: "ahrweiler" },
    { id: 2, name: 'Altenkirchen', hasInfo: false, path: "altenkirchen" },
    { id: 3, name: 'Alzey-Worms', hasInfo: false, path: "alzey_worms" },
    { id: 4, name: 'Bad Dürkheim', hasInfo: false, path: "bad_duerkheim" },
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
        path: "mayen_koblenz",
        country: "Германия", regionsPath: "rheinland-pfalz",
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
export default datas