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
        regionPath: "nrw",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/burg/001.jpg"
                }
            },
            ua: {
                title: 'Адміністративний округ Арнсберг',
                name: 'Арнсберг',
                countryName: "Германия", regionName: "Північний Рейн-Вестфалія",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/burg/001.jpg"
                }
            },
            de: {
                title: 'Regierungsbezirk Arnsberg',
                name: 'Arnsberg',
                countryName: "Германия", regionName: "Nordrhein-Westfalen",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/burg/001.jpg"
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
        hasInfo: true,
        path: "dusseldorf",
        regionPath: "nrw",
        translations: {
            ru: {
                title: "Административный округ Дюссельдорф",
                name: "Дюссельдорф",
                countryName: "Германия", regionName: "Северный Рейн-Вестфалия",
                desc: {
                    history: [
                        { text: "Административный округ Дюссельдорф – один из пяти административных округов земли Северный Рейн-Вестфалия. Он расположен в западной части региона вдоль Рейна." },
                        { text: "Был создан в 1815 году в ходе административных реформ Пруссии." }
                    ],
                    area: [
                        { bold: "Площадь:", text: " около 5 300 км²." }
                    ],
                    population: [
                        { bold: "Население:", text: " около 5,2 миллиона человек." }
                    ],
                    districts: [
                        { bold: "Округа-районы (Kreise):", text: "Клеве (Kleve), Мёрс / Везель (Kreis Wesel), Вирзен (Viersen), Меттман (Mettmann), Рейн-Нойс (Rhein-Kreis Neuss)." }
                    ],
                    cities: [
                        { bold: "Города, не принадлежащие районам (kreisfreie Städte):", text: "Дюссельдорф (Düsseldorf), Дуйсбург (Duisburg), Эссен (Essen), Крефельд (Krefeld), Мёнхенгладбах (Mönchengladbach), Мюльхайм-ан-дер-Рур (Mülheim an der Ruhr), Оберхаузен (Oberhausen), Ремшайд (Remscheid), Золинген (Solingen), Вупперталь (Wuppertal)." }
                    ]
                },
                meta: {
                    title: "Дюссельдорф – административный округ Северного Рейна-Вестфалия",
                    description: "Подробная информация об административном округе Дюссельдорф: структура, города, история и особенности региона.",
                    ogTitle: "Дюссельдорф – административный округ Северного Рейна-Вестфалия",
                    ogDescription: "Административный округ Дюссельдорф: крупнейшие города, районы и исторический контекст.",
                    ogImage: "/nrw/duesseldorf.jpg"
                }
            },
            ua: {
                title: "Адміністративний округ Дюссельдорф",
                name: "Дюссельдорф",
                countryName: "Німеччина",
                regionName: "Північний Рейн-Вестфалія",
                desc: {
                    history: [
                        { text: "Адміністративний округ Дюссельдорф – один із п’яти адміністративних округів землі Північний Рейн-Вестфалія. Він розташований у західній частині регіону вздовж Рейну." },
                        { text: "Був створений у 1815 році в ході адміністративних реформ Пруссії." }
                    ],
                    area: [
                        { bold: "Площа:", text: " близько 5 300 км²." }
                    ],
                    population: [
                        { bold: "Населення:", text: " близько 5,2 мільйона осіб." }
                    ],
                    districts: [
                        { bold: "Округи-райони (Kreise):", text: "Клеве (Kleve), Мерс / Везель (Kreis Wesel), Вірзен (Viersen), Меттман (Mettmann), Рейн-Ноєс (Rhein-Kreis Neuss)." }
                    ],
                    cities: [
                        { bold: "Міста, що не належать до районів (kreisfreie Städte):", text: "Дюссельдорф (Düsseldorf), Дуйсбург (Duisburg), Ессен (Essen), Крефельд (Krefeld), Мюнхенгладбах (Mönchengladbach), Мюльгайм-на-Рурі (Mülheim an der Ruhr), Обергаузен (Oberhausen), Ремшайд (Remscheid), Золінген (Solingen), Вупперталь (Wuppertal)." }
                    ]
                },
                meta: {
                    title: "Дюссельдорф – адміністративний округ Північного Рейну-Вестфалії",
                    description: "Детальна інформація про адміністративний округ Дюссельдорф: структура, міста, історія та особливості регіону.",
                    ogTitle: "Дюссельдорф – адміністративний округ Північного Рейну-Вестфалії",
                    ogDescription: "Адміністративний округ Дюссельдорф: найбільші міста, райони та історичний контекст.",
                    ogImage: "/nrw/duesseldorf.jpg"
                }
            },
            de: {
                title: "Regierungsbezirk Düsseldorf",
                name: "Düsseldorf",
                countryName: "Deutschland",
                regionName: "Nordrhein-Westfalen",
                desc: {
                    history: [
                        { text: "Der Regierungsbezirk Düsseldorf ist einer von fünf Regierungsbezirken des Landes Nordrhein-Westfalen. Er liegt im westlichen Teil der Region entlang des Rheins." },
                        { text: "Er wurde im Jahr 1815 im Rahmen der preußischen Verwaltungsreformen gegründet." }
                    ],
                    area: [
                        { bold: "Fläche:", text: " etwa 5.300 km²." }
                    ],
                    population: [
                        { bold: "Bevölkerung:", text: " etwa 5,2 Millionen Menschen." }
                    ],
                    districts: [
                        { bold: "Kreise:", text: "Kleve, Kreis Wesel (Moers / Wesel), Viersen, Mettmann, Rhein-Kreis Neuss." }
                    ],
                    cities: [
                        { bold: "Kreisfreie Städte:", text: "Düsseldorf, Duisburg, Essen, Krefeld, Mönchengladbach, Mülheim an der Ruhr, Oberhausen, Remscheid, Solingen, Wuppertal." }
                    ]
                },
                meta: {
                    title: "Regierungsbezirk Düsseldorf – Nordrhein-Westfalen",
                    description: "Detaillierte Informationen über den Regierungsbezirk Düsseldorf: Struktur, Städte, Geschichte und Besonderheiten der Region.",
                    ogTitle: "Regierungsbezirk Düsseldorf – Nordrhein-Westfalen",
                    ogDescription: "Regierungsbezirk Düsseldorf: größte Städte, Kreise und historischer Kontext.",
                    ogImage: "/nrw/duesseldorf.jpg"
                }
            }
        }
    },
    {
        id: 4,
        hasInfo: true,
        path: "koln", regionPath: "nrw",
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
                    title: "Кёльн – административный округ Северного Рейна-Вестфалия",
                    description: "Подробная информация об административном округе Кёльне: культура, история, достопримечательности округа.",
                    ogTitle: "Кёльн – административный округ Северного Рейна-Вестфалия",
                    ogDescription: "Кёльн: административный округ Северного Рейна-Вестфалии, города, история и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/001.jpg"
                }
            },
            ua: {
                title: 'Адміністративний округ Кельн',
                name: 'Кельн',
                countryName: "Германия", regionName: "Північний Рейн-Вестфалія",
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
                    title: "Кельн – адміністративний округ Північного Рейну-Вестфалія",
                    description: "Детальна інформація про Кельн: культура, історія, визначні місця округу.",
                    ogTitle: "Кельн – адміністративний округ Північного Рейну-Вестфалія",
                    ogDescription: "Кельн: адміністративний округ Північного Рейну-Вестфалія, міста, історія та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/001.jpg"
                }
            },
            de: {
                title: 'Regierungsbezirk Köln',
                name: 'Köln',
                countryName: "Германия", regionName: "Nordrhein-Westfalen",
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
                    title: "Köln – Verwaltungsbezirk Nordrhein-Westfalens",
                    description: "Detaillierte Informationen über Köln: Kultur, Geschichte, Sehenswürdigkeiten des Bezirks.",
                    ogTitle: "Köln – Bezirk NRW",
                    ogDescription: "Köln: Verwaltungsbezirk in Nordrhein-Westfalen, Städte, Geschichte und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/001.jpg"
                }
            }
        }
    },
    {
        id: 5,
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