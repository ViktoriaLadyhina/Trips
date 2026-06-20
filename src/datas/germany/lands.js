const datas = [
    {
        id: 10,
        hasInfo: true,
        path: 'nrw',
        translations: {
            ru: {
                name: 'Северный Рейн-Вестфалия',
                discriptRegions:
                {
                    title: "Административные округа в Северном Рейне-Вестфалии",
                    items: [
                        { id: 1, name: 'Арнсберг', hasInfo: true, path: "arnsberg" },
                        { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold" },
                        { id: 3, name: 'Дюссельдорф', hasInfo: true, path: "dusseldorf" },
                        { id: 4, name: "Кёльн", hasInfo: true, path: "koln" },
                        { id: 5, name: 'Мюнстер', hasInfo: false, path: "munster" }
                    ]
                },
                cities: {
                    title: "Свободные города в Северном Рейне-Вестфалии",
                    items: [
                        { id: 28, name: 'Аахен', hasInfo: false, path: "aachen_city" },
                        { id: 6, name: 'Билефельд', hasInfo: false, path: "bielefeld", },
                        { id: 7, name: 'Бонн', hasInfo: false, path: "bonn", },
                        { id: 8, name: 'Боттроп', hasInfo: false, path: "bottrop", },
                        { id: 9, name: 'Бохум', hasInfo: false, path: "bochum", },
                        { id: 10, name: 'Вупперталь', hasInfo: false, path: "wuppertal", },
                        { id: 11, name: 'Гельзенкирхен', hasInfo: false, path: "gelsenkirchen", },
                        { id: 12, name: 'Дортмунд', hasInfo: true, path: "dortmund", },
                        { id: 13, name: 'Дуйсбург', hasInfo: false, path: "duisburg", },
                        { id: 14, name: 'Дюссельдорф', hasInfo: false, path: "duesseldorf_city", },
                        { id: 15, name: 'Золинген', hasInfo: false, path: "solingen", },
                        { id: 16, name: 'Кёльн', hasInfo: true, path: "koln_city", },
                        { id: 17, name: 'Крефельд', hasInfo: false, path: "krefeld", },
                        { id: 18, name: 'Леверкузен', hasInfo: false, path: "leverkusen", },
                        { id: 19, name: 'Мёнхенгладбах', hasInfo: false, path: "moenchengladbach", },
                        { id: 20, name: 'Мюльхайм-на-Руре', hasInfo: false, path: "muelheim" },
                        { id: 21, name: 'Мюнстер', hasInfo: false, path: "muenster", },
                        { id: 22, name: 'Оберхаузен', hasInfo: false, path: "oberhausen", },
                        { id: 23, name: 'Ремшайд', hasInfo: false, path: "remscheid", },
                        { id: 24, name: 'Хаген', hasInfo: false, path: "hagen", },
                        { id: 25, name: 'Хамм', hasInfo: false, path: "hamm", },
                        { id: 26, name: 'Херне', hasInfo: false, path: "herne", },
                        { id: 27, name: 'Эссен', hasInfo: false, path: "essen", }
                    ]
                }
            },
            ua: {
                name: 'Північний Рейн-Вестфалія',
                discriptRegions:
                {
                    title: "Адміністративні округи в Північному Рейні-Вестфалії",
                    items: [
                        { id: 1, name: 'Арнсберг', hasInfo: true, path: "arnsberg" },
                        { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold", },
                        { id: 3, name: 'Дюссельдорф', hasInfo: true, path: "dusseldorf" },
                        { id: 4, name: 'Кельн', hasInfo: true, path: "koln" },
                        { id: 5, name: 'Мюнстер', hasInfo: false, path: "munster" }
                    ]
                },
                cities: {
                    title: "Вільні міста в Північному Рейні-Вестфалії",
                    items: [
                        { id: 28, name: 'Аахен', hasInfo: false, path: "aachen_city" },
                        { id: 6, name: 'Білефельд', hasInfo: false, path: "bielefeld", },
                        { id: 7, name: 'Бонн', hasInfo: false, path: "bonn", },
                        { id: 8, name: 'Боттроп', hasInfo: false, path: "bottrop", },
                        { id: 9, name: 'Бохум', hasInfo: false, path: "bochum", },
                        { id: 10, name: 'Вупперталь', hasInfo: false, path: "wuppertal", },
                        { id: 11, name: 'Гельзенкірхен', hasInfo: false, path: "gelsenkirchen", },
                        { id: 12, name: 'Дортмунд', hasInfo: true, path: "dortmund", },
                        { id: 13, name: 'Дуйсбург', hasInfo: false, path: "duisburg", },
                        { id: 14, name: 'Дюссельдорф', hasInfo: false, path: "duesseldorf_city", },
                        { id: 15, name: 'Золінген', hasInfo: false, path: "solingen", },
                        { id: 16, name: 'Кельн', hasInfo: true, path: "koln_city", },
                        { id: 17, name: 'Крефельд', hasInfo: false, path: "krefeld", },
                        { id: 18, name: 'Леверкузен', hasInfo: false, path: "leverkusen", },
                        { id: 19, name: 'Менхенгладбах', hasInfo: false, path: "moenchengladbach", },
                        { id: 20, name: 'Мюльхайм-на-Рурі', hasInfo: false, path: "muelheim", },
                        { id: 21, name: 'Мюнстер', hasInfo: false, path: "muenster", },
                        { id: 22, name: 'Обергаузен', hasInfo: false, path: "oberhausen", },
                        { id: 23, name: 'Ремшайд', hasInfo: false, path: "remscheid", },
                        { id: 24, name: 'Хаген', hasInfo: false, path: "hagen", },
                        { id: 25, name: 'Хамм', hasInfo: false, path: "hamm", },
                        { id: 26, name: 'Херне', hasInfo: false, path: "herne", },
                        { id: 27, name: 'Ессен', hasInfo: false, path: "essen", }
                    ]
                },
            },
            de: {
                name: 'Nordrhein-Westfalen',
                discriptRegions:
                {
                    title: "Regierungsbezirke in Nordrhein-Westfalen",
                    items: [
                        { id: 1, name: 'Arnsberg', hasInfo: true, path: "arnsberg" },
                        { id: 2, name: 'Detmold', hasInfo: false, path: "detmold" },
                        { id: 3, name: 'Düsseldorf', hasInfo: true, path: "dusseldorf" },
                        { id: 4, name: 'Köln', hasInfo: true, path: "koln" },
                        { id: 5, name: 'Münster', hasInfo: false, path: "munster" }
                    ]
                },
                cities: {
                    title: "Kreisfreie Städte in Nordrhein-Westfalen",
                    items: [
                        { id: 28, name: 'Aachen', hasInfo: false, path: "aachen_city" },
                        { id: 6, name: 'Bielefeld', hasInfo: false, path: "bielefeld", },
                        { id: 7, name: 'Bonn', hasInfo: false, path: "bonn", },
                        { id: 8, name: 'Bottrop', hasInfo: false, path: "bottrop", },
                        { id: 9, name: 'Bochum', hasInfo: false, path: "bochum", },
                        { id: 10, name: 'Wuppertal', hasInfo: false, path: "wuppertal", },
                        { id: 11, name: 'Gelsenkirchen', hasInfo: false, path: "gelsenkirchen", },
                        { id: 12, name: 'Dortmund', hasInfo: true, path: "dortmund", },
                        { id: 13, name: 'Duisburg', hasInfo: false, path: "duisburg", },
                        { id: 14, name: 'Düsseldorf', hasInfo: false, path: "duesseldorf_city", },
                        { id: 15, name: 'Solingen', hasInfo: false, path: "solingen", },
                        { id: 16, name: 'Köln', hasInfo: true, path: "koln_city", },
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
            }
        },
    },
]

export default datas