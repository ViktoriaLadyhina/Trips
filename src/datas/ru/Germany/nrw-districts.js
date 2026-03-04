const datas = [
    { id: 0, name: "Город областного значения", path: "city"},
    {
        id: 1,
        title: "Административный округ Арнсберг",
        name: 'Арнсберг',
        hasInfo: true,
        path: "arnsberg",
        country: "Германия", regionsPath: "nrw",
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
            description: "Подробная информация об Арнсберге: культура, история, достопримечательности округа.",
            ogTitle: "Арнсберг — административный округ Северного Рейна-Вестфалия",
            ogDescription: "Кёльн: административный округ Северного Рейна-Вестфалии, города, история и интересные факты.",
            ogImage: "/nrw/arnsberg.jpg"
        }
    },
    { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold" },
    { id: 3, name: 'Дюссельдорф', hasInfo: false, path: "dusseldorf" },
    {
        id: 4,
        title: "Административный округ Кёльн",
        name: "Кёльн",
        hasInfo: true,
        path: "koln",
        country: "Германия", regionsPath: "nrw",
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
            description: "Подробная информация о Кёльне: культура, история, достопримечательности округа.",
            ogTitle: "Кёльн — административный округ Северного Рейна-Вестфалия",
            ogDescription: "Кёльн: административный округ Северного Рейна-Вестфалии, города, история и интересные факты.",
            ogImage: "/nrw/koeln.jpg"
        }
    },
    { id: 5, name: 'Мюнстер', hasInfo: false, path: "munster" }
]

export default datas