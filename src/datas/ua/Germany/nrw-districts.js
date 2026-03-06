const datas = [
    { id: 0, name: "Місто обласного значення",  path: "city" },
    {
        id: 1,
        title: 'Адміністративний округ Арнсберг',
        name: 'Арнсберг',
        hasInfo: true,
        path: "arnsberg",
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
    { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold", },
    { id: 3, name: 'Дюссельдорф', hasInfo: false, path: "dusseldorf" },
    {
        id: 4,
        title: 'Адміністративний округ Кельн',
        name: 'Кельн',
        hasInfo: true,
        path: "koln",
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
    { id: 5, name: 'Мюнстер', hasInfo: false, path: "munster" }
]
export default datas