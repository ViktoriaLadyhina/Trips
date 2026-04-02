const datas = [
    {
        id: 0,
        path: "city",
        translations: {
            ru: { name: "Город областного значения" },
            ua: { name: "Місто облатного значення" },
            de: { name: "Stadt von regionaler Bedeutung" }
        }
    },
    {
        id: 1,
        hasInfo: true,
        path: "arnsberg",
        regionsPath: "nrw",
        translations: {
            ru: {
                title: "Административный округ Арнсберг",
                name: 'Арнсберг',
                countryName: "Германия", regionName: "Северный Рейн-Вестфалия",
                desc: {
                    history: [
                        { text: 'Административный округ Арнсберг — один из пяти административных округов земли Северный Рейн-Вестфалия. Он расположен в юго-восточной части земли.' },
                        { text: 'Основан 30 апреля 1815 года.' }
                    ],
                    area: [{ bold: 'Площадь:', text: ' около 8 003 км².' }],
                    population: [{ bold: 'Население:', text: ' около 3 573 137 человек (по состоянию на 2024 г.).' }],
                    districts: [{ bold: 'Округа-районы (Kreise):', text: 'Эннепе-Рур (Ennepe-Ruhr-Kreis), Меркиш (Märkischer Kreis), Хохзауэрланд (Hochsauerlandkreis), Ольпе (Olpe), Зиген-Виттгенштайн (Siegen-Wittgenstein), Зост (Soest), Унна (Unna)' }],
                    cities: [{ bold: 'Города, не принадлежащие районам (kreisfreie Städte):', text: 'Бохум (Bochum), Дортмунд (Dortmund), Хаген (Hagen), Хамм (Hamm), Херне (Herne)' }]
                },
                meta: {
                    title: "Арнсберг — административный округ Северного Рейна-Вестфалия",
                    description: "Подробная информация об административном округе Арнсберге: культура, история, достопримечательности округа.",
                    ogTitle: "Арнсберг — административный округ Северного Рейна-Вестфалия",
                    ogDescription: "Кёльн: административный округ Северного Рейна-Вестфалии, города, история и интересные факты.",
                    ogImage: "/nrw/arnsberg.jpg"
                }
            },
            ua: {
                title: 'Адміністративний округ Арнсберг',
                name: 'Арнсберг',
                countryName: "Германия",
                desc: {
                    history: [
                        { text: 'Адміністративний округ Арнсберг — один із п\'яти адміністративних округів землі Північний Рейн-Вестфалія. Він розташований на південному сході землі.' },
                        { text: 'Заснований 30 квітня 1815 року.' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' близько 8 003 км².' }
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' близько 3 573 137 осіб (станом на 2024 р.).' }
                    ],
                    districts: [
                        { bold: 'Округа-райони (Kreise):' },
                        { text: 'Еннепе-Рур (Ennepe-Ruhr-Kreis), Меркіш (Märkischer Kreis), Хохзауерланд (Hochsauerlandkreis), Ольпе (Olpe), Зіген-Віттгенштайн (Siegen-Wittgenstein), Зост (Soest), Унна (Unna)' }
                    ],
                    cities: [
                        { bold: 'Міста, що не належать районам (kreisfreie Städte):' },
                        { text: 'Бохум (Bochum), Дортмунд (Dortmund), Хаґен (Hagen), Гамм (Hamm), Херне (Herne)' }
                    ]
                },
                meta: {
                    title: "Арнсберг — адміністративний округ Північного Рейну-Вестфалія",
                    description: "Детальна інформація про Арнсберг: культура, історія, визначні місця округу.",
                    ogTitle: "Арнсберг — адміністративний округ Північного Рейну-Вестфалія",
                    ogDescription: "Кельн: адміністративний округ Північного Рейну-Вестфалія, міста, історія та цікаві факти.",
                    ogImage: "/nrw/arnsberg.jpg"
                }
            },
            de: {
                title: 'Regierungsbezirk Arnsberg',
                name: 'Arnsberg',
                countryName: "Германия",
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
            }
        },

    },
    {
        id: 2,
        hasInfo: false,
        path: "detmold",
        translations: {
            ru: { name: 'Детмольд' },
            ua: { name: 'Детмольд' },
            de: { name: 'Detmold' }
        }
    },
    {
        id: 3,
        hasInfo: false,
        path: "dusseldorf",
        translations: {
            ru: { name: 'Дюссельдорф' },
            ua: { name: 'Дюссельдорф' },
            de: { name: 'Düsseldorf' }
        }
    },
    {
        id: 4,
        hasInfo: true,
        path: "koln", regionsPath: "nrw",
        translations: {
            ru: {
                title: "Административный округ Кёльн",
                name: "Кёльн",
                countryName: "Германия", regionName: "Северный Рейн-Вестфалия",
                desc: {
                    history: [
                        { text: 'Административный округ Кёльн – один из пяти административных округов земли Северный Рейн-Вестфалия. Он расположен в юго-западной части земли.' },
                        { text: 'Основан в 1815 году.' }
                    ],
                    area: [{ bold: 'Площадь:', text: ' около 7 365 км².' }],
                    population: [{ bold: 'Население:', text: ' около 4,49 миллиона (по состоянию на 2021 г.).' }],
                    districts: [{ bold: 'Округа-районы (Kreise):', text: 'Аахен (Aachen), Дюрен (Düren), Ойскирхен (Euskirchen), Хайнсберг (Heinsberg), Обербергиш (Oberbergischer Kreis), Рейн-Эрфт (Rhein-Erft-Kreis), Рейн-Зиг (Rhein-Sieg-Kreis), Рейниш-Бергиш (Rheinisch-Bergischer Kreis)' }],
                    cities: [{ bold: 'Города, не принадлежащие районам (kreisfreie Städte):', text: 'Аахен (Aachen), Бонн (Bonn), Кёльн (Köln), Леверкузен (Leverkusen)' }]
                },
                meta: {
                    title: "Кёльн — административный округ Северного Рейна-Вестфалия",
                    description: "Подробная информация об административном округе Кёльне: культура, история, достопримечательности округа.",
                    ogTitle: "Кёльн — административный округ Северного Рейна-Вестфалия",
                    ogDescription: "Кёльн: административный округ Северного Рейна-Вестфалии, города, история и интересные факты.",
                    ogImage: "/nrw/koeln.jpg"
                }
            },
            ua: {
                title: 'Адміністративний округ Кельн',
                name: 'Кельн',
                countryName: "Германия",
                desc: {
                    history: [
                        { text: 'Адміністративний округ Кельн — один із п’яти адміністративних округів землі Північний Рейн-Вестфалія. Розташований у південно-західній частині землі.' },
                        { text: 'Заснований у 1815 році.' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' приблизно 7 365 км².' }
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' приблизно 4,49 мільйона (на 2021 р.).' }
                    ],
                    districts: [
                        { bold: 'До складу входять райони (Kreise):' },
                        { text: 'Аахен (Aachen), Дюрен (Düren), Ойскирхен (Euskirchen), Хайнсберг (Heinsberg), Обербергиш (Oberbergischer Kreis), Рейн-Эрфт (Rhein-Erft-Kreis), Рейн-Зиг (Rhein-Sieg-Kreis), Рейниш-Бергиш (Rheinisch-Bergischer Kreis)' }
                    ],
                    cities: [
                        { bold: 'Міста, які не належать до районів (kreisfreie Städte):' },
                        { text: 'Аахен (Aachen), Бонн (Bonn), Кёльн (Köln), Леверкузен (Leverkusen)' }
                    ]
                },
                meta: {
                    title: "Кельн — адміністративний округ Північного Рейну-Вестфалія",
                    description: "Детальна інформація про Кельн: культура, історія, визначні місця округу.",
                    ogTitle: "Кельн — адміністративний округ Північного Рейну-Вестфалія",
                    ogDescription: "Кельн: адміністративний округ Північного Рейну-Вестфалія, міста, історія та цікаві факти.",
                    ogImage: "/nrw/koeln.jpg"
                }
            },
            de: {
                title: 'Regierungsbezirk Köln',
                name: 'Köln',
                countryName: "Германия",
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
            }
        }
    },
    { id: 5,  
        hasInfo: false, 
        path: "munster",
        translations: {
            ru: { name: 'Мюнстер' },
            ua: { name: 'Мюнстер' },
            de: { name: 'Münster' }
        }
    }
]

export default datas