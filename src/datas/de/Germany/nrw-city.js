const datas = [
    {
        id: 1,
        name: 'Brühl',
        patch: "bruehl",
        desc: {
            general: [
                { text: 'Stadt im Bundesland Nordrhein-Westfalen' }
            ],
            population: [
                { bold: 'Einwohnerzahl:' },
                { text: ' 44.260 Menschen (2010)' }
            ],
            area: [
                { bold: 'Fläche:' },
                { text: ' 36,12 km²' }
            ],
            postalCode: [
                { bold: 'Postleitzahl:' },
                { text: ' 50321' }
            ],
            phone: [
                { bold: 'Telefonvorwahl:' },
                { text: ' +49 2232' }
            ],
            officialSite: [
                { bold: 'Offizielle Website von Brühl', link: 'https://www.bruehl.de' }
            ],
        },
        interestingFacts: {
            title: 'Interessante Fakten',
            items: [
                { text: 'Brühl wird „Brühl bei Köln“ genannt, da die Stadt nur 15 km von Köln entfernt liegt.' },
                { text: 'Gute Erreichbarkeit: Die Straßenbahn Nr. 18 und Regionalzüge verbinden Brühl mit Köln und Bonn.' },
                { text: 'Phantasialand — einer der größten Freizeitparks Deutschlands, befindet sich in Brühl.' }
            ]
        },
        notablePeople: {
            title: 'Bekannte Persönlichkeiten',
            items: {
                1: [
                    { bold: 'Steffi Graf' },
                    { text: ' berühmte Tennisspielerin, geboren in Brühl. 1988 wurde sie Ehrenbürgerin der Stadt.' },
                ],
                2: [
                    { bold: 'Max Ernst' },
                    { text: ' surrealistischer Maler, der in Brühl geboren wurde.' },
                ]
            }
        },
        briefHistory: {
            title: 'Kurze Geschichte',
            items: [
                { text: 'Die erste Erwähnung von Brühl stammt aus dem Jahr 1180, als der Kölner Erzbischof Philipp von Heinsberg ein Herrenhaus errichtete.' },
                { text: 'Im Jahr 1285 erhielt die Stadt Stadtrechte vom Erzbischof Siegfried von Westerburg.' },
                { text: 'Ab 1469 wurde Brühl für mehr als 150 Jahre zur offiziellen Residenz der Kölner Erzbischöfe.' }
            ]
        },
        meta: {
            title: "Brühl — Stadt in Nordrhein-Westfalen",
            description: "Brühl: Geschichte, Sehenswürdigkeiten, berühmte Persönlichkeiten und interessante Fakten der Stadt.",
            ogTitle: "Brühl — Informationen zur Stadt",
            ogDescription: "Detaillierte Informationen über Brühl: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
            ogImage: "/nrw/bruehl.jpg"
        }
    }
]

export default datas
