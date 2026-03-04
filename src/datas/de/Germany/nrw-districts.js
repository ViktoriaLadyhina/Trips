const datas = [
    { id: 0, name: "Stadt von regionaler Bedeutung", path: "city" },
    {
        id: 1,
        title: 'Regierungsbezirk Arnsberg',
        name: 'Arnsberg',
        hasInfo: true,
        path: "arnsberg",
        country: "Германия", regionsPath: "nrw",
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
        meta: {
            title: "Arnsberg — Verwaltungsbezirk Nordrhein-Westfalens",
            description: "Detaillierte Informationen über Arnsberg: Kultur, Geschichte, Sehenswürdigkeiten des Bezirks.",
            ogTitle: "Arnsberg — Bezirk NRW",
            ogDescription: "Köln: Verwaltungsbezirk in Nordrhein-Westfalen, Städte, Geschichte und interessante Fakten.",
            ogImage: "/nrw/arnsberg.jpg"
        }
    },
    { id: 2, name: 'Detmold', hasInfo: false, path: "detmold" },
    { id: 3, name: 'Düsseldorf', hasInfo: false, path: "dusseldorf" },
    {
        id: 4,
        title: 'Regierungsbezirk Köln',
        name: 'Köln',
        hasInfo: true,
        path: "koln",
        country: "Германия", regionsPath: "nrw",
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
export default datas