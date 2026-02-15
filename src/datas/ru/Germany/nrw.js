const datas = {
    id: 10,
    name: 'Северный Рейн-Вестфалия',
    hasInfo: true,
    path: 'nrw',
    country: "Германия",
    desc: {
        capital: [
            { bold: 'Столица:' },
            { text: ' Дюссельдорф' }
        ],
        population: [
            { bold: 'Население:' },
            { text: ' около 18,1 млн человек. Иностранцев — около 2 млн человек.' }
        ],
        area: [
            { bold: 'Площадь:' },
            { text: ' 34 000 км². Плотность населения — около 525 человек на 1 км².' }
        ],
        geography: [
            { bold: 'География:' },
            { text: ' Северный Рейн-Вестфалия находится на западе Германии и граничит с Бельгией (99 км), Нидерландами (387 км), а также с федеральными землями Нижняя Саксония (583 км), Гессен (269 км) и Рейнланд-Пфальц (307 км).' },
            { text: ' Земля включает два крупных ландшафтных региона: Северная низменность и немецкое среднегорье, которые подразделяются на северорейнскую и вестфальскую части вдоль Рейна.' },
            { text: ' По левому берегу Рейна находятся горы Айфель (Eifel) и предгорья Vennvorland (Аахенский регион). По правому берегу Рейна — Bergisches Land, Зауерланд (Sauerland), Ротхааргебирге (Rothaargebirge), Зигерланд (Siegerland), Сибенгебирге (Siebengebirge) и части западного леса и Везербергланда (Weserbergland). Леса занимают около 24% территории.' }
        ],
        history: [
            { bold: 'Происхождение названия:' },
            { text: ' Название Nordrhein-Westfalen появилось после постановления британского военного правительства 23 августа 1946 года, объединяющего провинцию Вестфалия (Provinz Westfalen) и провинцию Северный Рейн (Provinz Nordrhein). 21 января 1947 года к ним присоединилась территория Липпе (Lippe).' }
        ],
        economy: [
            { bold: 'Економика:' },
            { text: ' Северный Рейн-Вестфалия — один из крупнейших экономических центров Германии. Исторически развиты угольная, железная, металлургическая, стальная и текстильная промышленность.' },
            { text: 'Сельское хозяйство играет вспомогательную роль, обеспечивая продовольствием жителей крупных городов.' }
        ],
        cities: [
            { bold: 'Крупные города:' },
            { text: ' Кёльн, Эссен, Дортмунд, Дюссельдорф, Дюйсбург, Бонн, Мюнстер, Вупперталь, Аахен, Билефельд, Падерборн, Бохум, Крефельд, Гельзенкирхен, Леверкузен, Мюльхайм, Ремшайд, Золинген, Мёнхен-Гладбах, Зиген, Хамм, Реклингхаузен.' }
        ],
        rivers: [
            { bold: 'Главные реки и каналы:' },
            { text: ' Рейн, Липпе, Рур, Эмс, Везер, Миттельландканал.' }
        ],
        tourism: [
            { bold: 'Туризм и отдых:' },
            { text: ' Северный Рейн-Вестфалия славится богатой историей и культурой. Здесь расположены многочисленные исторические здания, музеи и парки. Популярны экскурсии по Рейну и туристические маршруты по горным и лесным районам.' }
        ]
    },
    symbols: {
        title: "Геральдика",
        items: [
            {
                bold: "Герб:",
                text: " на гербе Северной Рейн-Вестфалии объединены символы трёх исторических провинций, из которых была образована земля в 1946–1947 годах. Серебристая полоска Рейна на зелёном фоне символизирует Рейнскую провинцию. Саксонский конь на красном фоне — символ Вестфалии (в вестфальском варианте он вставший на дыбы). Красная роза с золотой сердцевиной и листьями — герб графов фон Липпе, использовавшийся с XIII века.",
                img: "Germany/nrw/gerb.gif"
            },
            {
                bold: "Флаг:",
                text: " флаг Северного Рейна-Вестфалии состоит из цветов герба: зелёного, белого и красного, расположенных горизонтальными полосами.",
                img: "Germany/nrw/flag.gif"
            }
        ]
    },
    briefHistory: {
        title: 'Краткая история',
        items: [
            { text: "После Второй мировой войны территория современной земли Северный Рейн-Вестфалия находилась в британской оккупационной зоне. Новая земля была создана 23 августа 1946 года на основе бывшей прусской провинции Вестфалия и северной части Рейнской провинции (Rheinland) британской оккупационной администрацией. Целью объединения было обеспечение единого управления Рурским бассейном, важного промышленного региона." },
            { text: "В 1947 году бывшая земля Липпе была включена в состав Северного Рейна-Вестфалии согласно распоряжению британского военного командования № 77 от 21 января 1947 года. 5 ноября 1948 года парламент земли принял «Закон об объединении земли Липпе-Детмольд с землей Северный Рейн-Вестфалия», официально завершив процесс объединения." },
            { text: "8 мая 1949 года Парламентский совет Германии принял Конституцию ФРГ, и земля Северный Рейн-Вестфалия официально стала одной из земель Германии." },
            { text: "18 июня 1950 года была принята Конституция самой земли, закрепившая её внутреннее устройство и права." }
        ]
    },
    discriptRegions: [
        {
            title: "Административные округа в Северном Рейне-Вестфалии",
            items: [
                {
                    id: 1,
                    title: "Административный округ Арнсберг",
                    name: 'Арнсберг',
                    hasInfo: true,
                    path: "arnsberg",
                    desc: {
                        history: [
                            { text: 'Административный округ Арнсберг — один из пяти административных округов земли Северный Рейн-Вестфалия. Он расположен в юго-восточной части земли.' },
                            { text: 'Основан 30 апреля 1815 года.' }
                        ],
                        area: [
                            { bold: 'Площадь:' },
                            { text: ' около 8 003 км².' }
                        ],
                        population: [
                            { bold: 'Население:' },
                            { text: ' около 3 573 137 человек (по состоянию на 2024 г.).' }
                        ],
                        districts: [
                            { bold: 'Округа-районы (Kreise):' },
                            { text: 'Эннепе-Рур (Ennepe-Ruhr-Kreis), Меркиш (Märkischer Kreis), Хохзауэрланд (Hochsauerlandkreis), Ольпе (Olpe), Зиген-Виттгенштайн (Siegen-Wittgenstein), Зост (Soest), Унна (Unna)' }
                        ],
                        cities: [
                            { bold: 'Города, не принадлежащие районам (kreisfreie Städte):' },
                            { text: 'Бохум (Bochum), Дортмунд (Dortmund), Хаген (Hagen), Хамм (Hamm), Херне (Herne)' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 1,
                            name: "Зиген-Виттгенштайн",
                            fullName: "Kreis Siegen-Wittgenstein",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Зиген." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 1 132,9 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 274 379 человек (по состоянию на 31.12.2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 242,7 человек/кв. км (по состоянию на 2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 70." }
                            ],
                            description: [
                                { text: "Район Зиген-Виттгенштайн входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "11 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бад-Берлебург", hasInfo: false },
                                { id: 2, name: "Бад-Ласфе", hasInfo: false },
                                { id: 3, name: "Бурбах", hasInfo: false },
                                { id: 4, name: "Вильнсдорф", hasInfo: false },
                                { id: 5, name: "Зиген", hasInfo: false },
                                { id: 6, name: "Кройцталь", hasInfo: false },
                                { id: 7, name: "Нетфен", hasInfo: false },
                                { id: 8, name: "Фройденберг", hasInfo: false },
                                { id: 9, name: "Нойнкирхен", hasInfo: false },
                                { id: 10, name: "Хильхенбах", hasInfo: false },
                                { id: 11, name: "Эрндтебрюк", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Siegen-Wittgenstein/gerb.png"
                        },
                        {
                            id: 2,
                            name: "Зост",
                            fullName: "Kreis Soest",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Зост." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 1 328,6 км² (по состоянию на 2023 г.)." }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " около 300 297 человек (по состоянию на 2023 г.)." }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 226 человек/км²." }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 74." }
                            ],
                            description: [
                                { text: "Район Зост входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "14 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Анрёхте", hasInfo: false },
                                { id: 2, name: "Бад-Зассендорф", hasInfo: false },
                                { id: 3, name: "Варштайн", hasInfo: false },
                                { id: 4, name: "Вельфер", hasInfo: false },
                                { id: 5, name: "Верль", hasInfo: false },
                                { id: 6, name: "Виккеде", hasInfo: false },
                                { id: 7, name: "Гезеке", hasInfo: false },
                                { id: 8, name: "Зост", hasInfo: false },
                                { id: 9, name: "Липпеталь", hasInfo: false },
                                { id: 10, name: "Липпштадт", hasInfo: false },
                                { id: 11, name: "Мёнезее", hasInfo: false },
                                { id: 12, name: "Рютен", hasInfo: false },
                                { id: 13, name: "Энзе", hasInfo: false },
                                { id: 14, name: "Эрвитте", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Soest/gerb.png"
                        },
                        {
                            id: 3,
                            name: "Меркиш",
                            fullName: "Märkischer Kreis",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Люденшайд." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 1 058,95 км² (по состоянию на 2023 г.)." }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 408 899 человек (по состоянию на 31 декабря 2023 г.)." }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 390 человек/км²." }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 62." }
                            ],
                            description: [
                                { text: "Район Меркиш входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "15 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Альтена", hasInfo: false },
                                { id: 2, name: "Бальфе", hasInfo: false },
                                { id: 3, name: "Вердоль", hasInfo: false },
                                { id: 4, name: "Изерлон", hasInfo: false },
                                { id: 5, name: "Кирспе", hasInfo: false },
                                { id: 6, name: "Люденшайд", hasInfo: true, path: 'luedenscheid' },
                                { id: 7, name: "Майнерцхаген", hasInfo: false },
                                { id: 8, name: "Менден", hasInfo: false },
                                { id: 9, name: "Нахродт-Виблингверде", hasInfo: false },
                                { id: 10, name: "Нойенраде", hasInfo: false },
                                { id: 11, name: "Плеттенберг", hasInfo: false },
                                { id: 12, name: "Хальфер", hasInfo: false },
                                { id: 13, name: "Хершайд", hasInfo: false },
                                { id: 14, name: "Хемер", hasInfo: false },
                                { id: 15, name: "Шальксмюле", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Märkischer-Kreis/gerb.png"
                        },
                        {
                            id: 4,
                            name: "Ольпе",
                            fullName: "Kreis Olpe",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Ольпе." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 710,7 км² (по состоянию на 2023 г.)." }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 134 439 человек (по состоянию на 31 декабря 2022 г.)." }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 188,8 человек/км²." }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 66." }
                            ],
                            description: [
                                { text: "Район Ольпе входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "7 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Аттендорн", hasInfo: false },
                                { id: 2, name: "Венден", hasInfo: false },
                                { id: 3, name: "Дрольсхаген", hasInfo: false },
                                { id: 4, name: "Кирххундем", hasInfo: false },
                                { id: 5, name: "Леннештадт", hasInfo: false },
                                { id: 6, name: "Ольпе", hasInfo: false },
                                { id: 7, name: "Финнентроп", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Olpe/gerb.png"
                        },
                        {
                            id: 5,
                            name: "Унна",
                            fullName: "Kreis Unna",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Унна." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 543,2 км² (по состоянию на 31 декабря 2023 г.)." }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 396 283 человек (по состоянию на 31 декабря 2023 г.)." }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 730,3 человек/км²." }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 78." }
                            ],
                            description: [
                                { text: "Район Унна входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "10 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бёнен", hasInfo: false },
                                { id: 2, name: "Бергкамен", hasInfo: false },
                                { id: 3, name: "Верне", hasInfo: false },
                                { id: 4, name: "Зельм", hasInfo: false },
                                { id: 5, name: "Камен", hasInfo: false },
                                { id: 6, name: "Люнен", hasInfo: false },
                                { id: 7, name: "Унна", hasInfo: false },
                                { id: 8, name: "Фрёнденберг", hasInfo: false },
                                { id: 9, name: "Хольцвиккеде", hasInfo: false },
                                { id: 10, name: "Шверте", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Unna/gerb.png"
                        },
                        {
                            id: 6,
                            name: "Хохзауэрланд",
                            fullName: "Hochsauerlandkreis",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Мешеде." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 1 960,2 км² (по состоянию на 31 декабря 2023 г.)." }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 261 193 человека (по состоянию на 31 декабря 2023 г.)." }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 133,2 человека/км²." }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 58." }
                            ],
                            description: [
                                { text: "Район Хохзауэрланд входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "12 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Арнсберг", hasInfo: false },
                                { id: 2, name: "Бествиг", hasInfo: false },
                                { id: 3, name: "Брилон", hasInfo: false },
                                { id: 4, name: "Винтерберг", hasInfo: false },
                                { id: 5, name: "Зундерн", hasInfo: false },
                                { id: 6, name: "Марсберг", hasInfo: false },
                                { id: 7, name: "Медебах", hasInfo: false },
                                { id: 8, name: "Мешеде", hasInfo: false },
                                { id: 9, name: "Ольсберг", hasInfo: false },
                                { id: 10, name: "Халленберг", hasInfo: false },
                                { id: 11, name: "Шмалленберг", hasInfo: false },
                                { id: 12, name: "Эслоэ", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Hochsauerlandkreis/gerb.png"
                        },
                        {
                            id: 7,
                            name: "Эннепе-Рур",
                            fullName: "Ennepe-Ruhr-Kreis",
                            parentDistrict: "Арнсберг",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Швельм." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 408,44 км² (по состоянию на 31 декабря 2023 г.)." }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 314 167 человек (по состоянию на 31 декабря 2024 г.)." }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 766,9 человек/км²." }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 9 54." }
                            ],
                            description: [
                                { text: "Район Эннепе-Рур входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "9 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бреккерфельд", hasInfo: false },
                                { id: 2, name: "Эннепеталь", hasInfo: false },
                                { id: 3, name: "Гевельсберг", hasInfo: false },
                                { id: 4, name: "Хаттинген", hasInfo: false },
                                { id: 5, name: "Хердека", hasInfo: false },
                                { id: 6, name: "Швельм", hasInfo: false },
                                { id: 7, name: "Шпрокхёфель", hasInfo: false },
                                { id: 8, name: "Веттер (Рур)", hasInfo: false },
                                { id: 9, name: "Виттен", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/arnsberg/Ennepe-Ruhr-Kreis/gerb.png"
                        }
                    ]
                },
                { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold" },
                { id: 3, name: 'Дюссельдорф', hasInfo: false, path: "dusseldorf" },
                {
                    id: 4,
                    title: "Административный округ Кёльн",
                    name: "Кёльн",
                    hasInfo: true,
                    path: "koln",
                    desc: {
                        history: [
                            { text: 'Административный округ Кёльн – один из пяти административных округов земли Северный Рейн-Вестфалия. Он расположен в юго-западной части земли.' },
                            { text: 'Основан в 1815 году.' }
                        ],
                        area: [ { bold: 'Площадь:', text: ' около 7 365 км².' }   ],
                        population: [  { bold: 'Население:', text: ' около 4,49 миллиона (по состоянию на 2021 г.).' }                        ],
                        districts: [ { bold: 'Округа-районы (Kreise):', text: 'Аахен (Aachen), Дюрен (Düren), Ойскирхен (Euskirchen), Хайнсберг (Heinsberg), Обербергиш (Oberbergischer Kreis), Рейн-Эрфт (Rhein-Erft-Kreis), Рейн-Зиг (Rhein-Sieg-Kreis), Рейниш-Бергиш (Rheinisch-Bergischer Kreis)' }                        ],
                        cities: [{ bold: 'Города, не принадлежащие районам (kreisfreie Städte):', text: 'Аахен (Aachen), Бонн (Bonn), Кёльн (Köln), Леверкузен (Leverkusen)' }                        ]
                    },
                    subRegion: [
                        {
                            id: 1,
                            name: "Аахен",
                            fullName: "Kreis Aachen",
                            parentDistrict: "Кёльн",
                            center: [{ bold: "Центр района:", text: " город Аахен." }],
                            area: [ { bold: "Площадь:", text: " 707,15 кв. км (по состоянию на 2023 г.)" }],
                            population: [{ bold: "Население:", text: " 564 444 чел. (по состоянию на 2023 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " 800 человек/кв.км (2023 г.)" }],
                            code: [{ bold: "Официальный код района:", text: " 05 3 34." } ],
                            description: [
                                { text: "Район Аахен входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [{ text: "Район подразделяется на " }, { bold: "10 общин:" } ],
                            communities: [
                                { id: 1, name: "Альсдорф", hasInfo: false },
                                { id: 2, name: "Аахен", hasInfo: false },
                                { id: 3, name: "Бесвайлер", hasInfo: false },
                                { id: 4, name: "Вюрцелен", hasInfo: false },
                                { id: 5, name: "Циммеррат", hasInfo: false },
                                { id: 6, name: "Моншау", hasInfo: false },
                                { id: 7, name: "Рётген", hasInfo: false },
                                { id: 8, name: "Херцогенрат", hasInfo: false },
                                { id: 9, name: "Штольберг", hasInfo: false },
                                { id: 10, name: "Эшвайлер", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Aachen/gerb.png"
                        },
                        {
                            id: 2,
                            name: "Дюрен",
                            fullName: "Kreis Düren",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Дюрен." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 941,15 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 278 462 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 300 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 58." }
                            ],
                            description: [
                                { text: "Район Дюрен входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "15 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Альденхофен", hasInfo: false },
                                { id: 2, name: "Дюрен", hasInfo: false },
                                { id: 3, name: "Инден", hasInfo: false },
                                { id: 4, name: "Йюлих", hasInfo: false },
                                { id: 5, name: "Кройцау", hasInfo: false },
                                { id: 6, name: "Лангервеэ", hasInfo: false },
                                { id: 7, name: "Линних", hasInfo: false },
                                { id: 8, name: "Мерцених", hasInfo: false },
                                { id: 9, name: "Нёрфених", hasInfo: false },
                                { id: 10, name: "Нидегген", hasInfo: false },
                                { id: 11, name: "Нидерцир", hasInfo: false },
                                { id: 12, name: "Тиц", hasInfo: false },
                                { id: 13, name: "Фетвайс", hasInfo: false },
                                { id: 14, name: "Хаймбах", hasInfo: false },
                                { id: 15, name: "Хюртгенвальд", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Düren/gerb.png"
                        },
                        {
                            id: 3,
                            name: "Обербергиш",
                            fullName: "Oberbergischer Kreis",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Гуммерсбах." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 918,53 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 275 735 чел. (по состоянию на 31 декабря 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " около 300 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 74." }
                            ],
                            description: [
                                { text: "Район Обербергиш входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "13 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бергнойштадт", hasInfo: false },
                                { id: 2, name: "Вальдбрёль", hasInfo: false },
                                { id: 3, name: "Виль", hasInfo: false },
                                { id: 4, name: "Випперфюрт", hasInfo: false },
                                { id: 5, name: "Гуммерсбах", hasInfo: false },
                                { id: 6, name: "Линдлар", hasInfo: false },
                                { id: 7, name: "Мариенхайде", hasInfo: false },
                                { id: 8, name: "Морсбах", hasInfo: false },
                                { id: 9, name: "Нюмбрехт", hasInfo: false },
                                { id: 10, name: "Радеформвальд", hasInfo: false },
                                { id: 11, name: "Рейхсхоф", hasInfo: false },
                                { id: 12, name: "Хюккесваген", hasInfo: false },
                                { id: 13, name: "Энгельскирхен", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Oberbergischer/gerb.png"
                        },
                        {
                            id: 4,
                            name: "Ойскирхен",
                            fullName: "Kreis Euskirchen",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Ойскирхен." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 1 249,2 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 188 773 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 151,1 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 66." }
                            ],
                            description: [
                                { text: "Район Ойскирхен входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "11 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Ойскирхен", hasInfo: false },
                                { id: 2, name: "Мехерних", hasInfo: false },
                                { id: 3, name: "Цюльпих", hasInfo: false },
                                { id: 4, name: "Бад-Мюнстерайфель", hasInfo: false },
                                { id: 5, name: "Вайлерсвист", hasInfo: false },
                                { id: 6, name: "Шлайден", hasInfo: false },
                                { id: 7, name: "Калль", hasInfo: false },
                                { id: 8, name: "Бланкенхайм", hasInfo: false },
                                { id: 9, name: "Хелленталь", hasInfo: false },
                                { id: 10, name: "Неттерсхайм", hasInfo: false },
                                { id: 11, name: "Далем", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Euskirchen/gerb.png"
                        },
                        {
                            id: 5,
                            name: "Рейн-Зиг",
                            fullName: "Rhein-Sieg-Kreis",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Зигбург (Siegburg)." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 1 153,00 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " ≈ 620 000 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " около 538 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 82." }
                            ],
                            description: [
                                { text: "Район Рейн-Зиг входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "19 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Айторф", hasInfo: false },
                                { id: 2, name: "Альфтер", hasInfo: false },
                                { id: 3, name: "Бад-Хоннеф", hasInfo: false },
                                { id: 4, name: "Борнхайм", hasInfo: false },
                                { id: 5, name: "Вахтберг", hasInfo: false },
                                { id: 6, name: "Виндек", hasInfo: false },
                                { id: 7, name: "Зигбург", hasInfo: false },
                                { id: 8, name: "Кёнигсвинтер", hasInfo: true, path: "konigswinter" },
                                { id: 9, name: "Ломар", hasInfo: false },
                                { id: 10, name: "Меккенхайм", hasInfo: false },
                                { id: 11, name: "Мух", hasInfo: false },
                                { id: 12, name: "Нидеркассель", hasInfo: false },
                                { id: 13, name: "Нойнкирхен-Зельшайд", hasInfo: false },
                                { id: 14, name: "Райнбах", hasInfo: false },
                                { id: 15, name: "Руппихтерот", hasInfo: false },
                                { id: 16, name: "Тройсдорф", hasInfo: false },
                                { id: 17, name: "Санкт-Августин", hasInfo: false },
                                { id: 18, name: "Свистталь", hasInfo: false },
                                { id: 19, name: "Хеннеф", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Rhein-Sieg-Kreis/gerb.png"
                        },
                        {
                            id: 6,
                            name: "Рейн-Эрфт",
                            fullName: "Rhein-Erft-Kreis",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Бергхайм (Bergheim)." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 704,70 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 480 989 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " около 679 человек/кв.км (2022–2023 гг.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 62." }
                            ],
                            description: [
                                { text: "Район Рейн-Эрфт входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "10 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бедбург", hasInfo: false },
                                { id: 2, name: "Бергхайм", hasInfo: false },
                                { id: 3, name: "Брюль", hasInfo: true, path: "bruhl" },
                                { id: 4, name: "Эльсдорф", hasInfo: false },
                                { id: 5, name: "Эрфтштадт", hasInfo: false },
                                { id: 6, name: "Фрехен", hasInfo: true, path: 'frechen' },
                                { id: 7, name: "Хюрт", hasInfo: false },
                                { id: 8, name: "Керпен", hasInfo: false },
                                { id: 9, name: "Пульхайм", hasInfo: false },
                                { id: 10, name: "Весселинг", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Rhein-Erft-Kreis/gerb.png"
                        },
                        {
                            id: 7,
                            name: "Рейниш-Бергиш",
                            fullName: "Rheinisch-Bergischer Kreis",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Бергиш-Гладбах (Bergisch Gladbach)." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 437,07 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 283 000 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " около 648 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 78." }
                            ],
                            description: [
                                { text: "Район Рейниш-Бергиш входит в землю Северный Рейн‑Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "8 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бергиш-Гладбах", hasInfo: false },
                                { id: 2, name: "Буршайд", hasInfo: false },
                                { id: 3, name: "Вермельскирхен", hasInfo: false },
                                { id: 4, name: "Кюртен", hasInfo: false },
                                { id: 5, name: "Лайхлинген", hasInfo: false },
                                { id: 6, name: "Оверат", hasInfo: false },
                                { id: 7, name: "Оденаль", hasInfo: false },
                                { id: 8, name: "Рёсрат", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Rheinisch-Bergischer/gerb.png"
                        },
                        {
                            id: 8,
                            name: "Хайнсберг",
                            fullName: "Kreis Heinsberg",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Хайнсберг (Heinsberg)." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 627,7 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 250 000 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " около 398 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 70." }
                            ],
                            description: [
                                { text: "Район Хайнсберг входит в землю Северный Рейн‑Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "10 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Вальдфойхт", hasInfo: false },
                                { id: 2, name: "Вассенберг", hasInfo: false },
                                { id: 3, name: "Вегберг", hasInfo: false },
                                { id: 4, name: "Гайленкирхен", hasInfo: false },
                                { id: 5, name: "Гангельт", hasInfo: false },
                                { id: 6, name: "Зельфкант", hasInfo: false },
                                { id: 7, name: "Юбах-Паленберг", hasInfo: false },
                                { id: 8, name: "Хайнсберг", hasInfo: false },
                                { id: 9, name: "Хюккельхофен", hasInfo: false },
                                { id: 10, name: "Эркеленц", hasInfo: false }
                            ],
                            gerb: "Germany/nrw/koln/Heinsberg/gerb.png"
                        }
                    ],
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
        },
        {
            title: "Свободные города в Северном Рейне-Вестфалии",
            items: [
                { id: 28, name: 'Аахен', hasInfo: false, path: "aachen" },
                { id: 6, name: 'Билефельд', hasInfo: false, path: "bielefeld", },
                { id: 7, name: 'Бонн', hasInfo: false, path: "bonn", },
                { id: 8, name: 'Боттроп', hasInfo: false, path: "bottrop", },
                { id: 9, name: 'Бохум', hasInfo: false, path: "bochum", },
                { id: 10, name: 'Вупперталь', hasInfo: false, path: "wuppertal", },
                { id: 11, name: 'Гельзенкирхен', hasInfo: false, path: "gelsenkirchen", },
                { id: 12, name: 'Дортмунд', hasInfo: false, path: "dortmund", },
                { id: 13, name: 'Дуйсбург', hasInfo: false, path: "duisburg", },
                { id: 14, name: 'Дюссельдорф', hasInfo: false, path: "duesseldorf", },
                { id: 15, name: 'Золинген', hasInfo: false, path: "solingen", },
                { id: 16, name: 'Кёльн', hasInfo: true, path: "koln", },
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
    ],
    meta: {
        title: "Северный Рейн-Вестфалия — информация о регионе",
        description: "Северный Рейн-Вестфалия: города, округа, культура и достопримечательности.",
        ogTitle: "Северный Рейн-Вестфалия — информация о регионе и округах",
        ogDescription: "Подробная информация о Северном Рейне-Вестфалии: города, округа, история и интересные факты.",
        ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/koln-cathedral/001.jpg"
    }

}
export default datas