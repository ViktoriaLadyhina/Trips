const datas = {
    id: 10,
    name: 'Северный Рейн-Вестфалия',
    hasInfo: true,
    path: 'nrw',
    currentMap: "Germania/Nordrhein/nrw2.gif",
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
                img: "Germania/Nordrhein/002.gif"
            },
            {
                bold: "Флаг:",
                text: " флаг Северного Рейна-Вестфалии состоит из цветов герба: зелёного, белого и красного, расположенных горизонтальными полосами.",
                img: "Germania/Nordrhein/003.gif"
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
                { id: 1, name: 'Арнсберг', hasInfo: false, patch: "arnsberg" },
                { id: 2, name: 'Детмольд', hasInfo: false, patch: "detmold" },
                { id: 3, name: 'Дюссельдорф', hasInfo: false, patch: "dusseldorf" },
                {
                    id: 4,
                    title: "Административный округ Кёльн",
                    name: "Кёльн",
                    hasInfo: true,
                    patch: "koln",
                    currentMap: "Germania/Nordrhein/004.gif",
                    desc: {
                        history: [
                            { text: 'Административный округ Кёльн — один из пяти административных округов земли Северный Рейн-Вестфалия. Он расположен в юго-западной части земли.' },
                            { text: 'Основан в 1815 году.' }
                        ],
                        area: [
                            { bold: 'Площадь:' },
                            { text: ' около 7 365 км².' }
                        ],
                        population: [
                            { bold: 'Население:' },
                            { text: ' около 4,49 миллиона.' }
                        ],
                        districts: [
                            { bold: 'Округа-районы (Kreise):' },
                            { text: ' Aachen, Düren, Euskirchen, Heinsberg, Oberbergischer Kreis, Rhein-Erft-Kreis, Rhein-Sieg-Kreis, Rheinisch-Bergischer Kreis.' }
                        ],
                        cities: [
                            { bold: 'Города, не принадлежащие районам (kreisfreie Städte):' },
                            { text: ' Aachen, Bonn, Köln, Leverkusen.' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 1,
                            name: "Аахен",
                            fullName: "Kreis Aachen",
                            parentDistrict: "Кёльн",
                            center: [
                                { bold: "Центр района:" },
                                { text: " город Аахен." }
                            ],
                            area: [
                                { bold: "Площадь:" },
                                { text: " 707,15 кв. км (по состоянию на 2023 г.)" }
                            ],
                            population: [
                                { bold: "Население:" },
                                { text: " 564 444 чел. (по состоянию на 2023 г.)" }
                            ],
                            density: [
                                { bold: "Плотность населения:" },
                                { text: " 800 человек/кв.км (2023 г.)" }
                            ],
                            code: [
                                { bold: "Официальный код района:" },
                                { text: " 05 3 34." }
                            ],
                            description: [
                                { text: "Район входит в землю Северный Рейн – Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "10 общин:" }
                            ],
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
                            gerb: "Germania/Nordrhein/Luden/008.png"
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
                                { text: "Район входит в землю Северный Рейн – Вестфалия, подчинён административному округу Кёльн." }
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
                            gerb: "Germania/Nordrhein/Luden/009.png"
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
                                { text: "Район входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
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
                            gerb: "Germania/Nordrhein/Luden/010.png"
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
                                { text: "Район входит в землю Северный Рейн – Вестфалия, подчинён административному округу Кёльн." }
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
                            gerb: "Germania/Nordrhein/Luden/011.png"
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
                                { text: "Район входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "19 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Айторф (Eitorf)", hasInfo: false },
                                { id: 2, name: "Альфтер (Alfter)", hasInfo: false },
                                { id: 3, name: "Бад-Хоннеф (Bad Honnef)", hasInfo: false },
                                { id: 4, name: "Борнхайм (Bornheim)", hasInfo: false },
                                { id: 5, name: "Вахтберг (Wachtberg)", hasInfo: false },
                                { id: 6, name: "Виндек (Windeck)", hasInfo: false },
                                { id: 7, name: "Зигбург (Siegburg)", hasInfo: false },
                                { id: 8, name: "Кёнигсвинтер (Königswinter)", hasInfo: false },
                                { id: 9, name: "Ломар (Lohmar)", hasInfo: false },
                                { id: 10, name: "Меккенхайм (Meckenheim)", hasInfo: false },
                                { id: 11, name: "Мух (Much)", hasInfo: false },
                                { id: 12, name: "Нидеркассель (Niederkassel)", hasInfo: false },
                                { id: 13, name: "Нойнкирхен-Зельшайд (Neunkirchen-Seelscheid)", hasInfo: false },
                                { id: 14, name: "Райнбах (Rheinbach)", hasInfo: false },
                                { id: 15, name: "Руппихтерот (Ruppichteroth)", hasInfo: false },
                                { id: 16, name: "Тройсдорф (Troisdorf)", hasInfo: false },
                                { id: 17, name: "Санкт-Августин (Sankt Augustin)", hasInfo: false },
                                { id: 18, name: "Свистталь (Swisttal)", hasInfo: false },
                                { id: 19, name: "Хеннеф (Hennef)", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/012.png"
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
                                { text: "Район входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район подразделяется на " },
                                { bold: "10 общин:" }
                            ],
                            communities: [
                                { id: 1, name: "Бедбург", hasInfo: false },
                                { id: 2, name: "Бергхайм", hasInfo: false },
                                { id: 3, name: "Брюль", hasInfo: true, patch: "bruehl" },
                                { id: 4, name: "Эльсдорф", hasInfo: false },
                                { id: 5, name: "Эрфтштадт", hasInfo: false },
                                { id: 6, name: "Фрехен", hasInfo: false },
                                { id: 7, name: "Хюрт", hasInfo: false },
                                { id: 8, name: "Керпен", hasInfo: false },
                                { id: 9, name: "Пульхайм", hasInfo: false },
                                { id: 10, name: "Весселинг", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/013.png"
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
                                { text: "Район входит в землю Северный Рейн‑Вестфалия, подчинён административному округу Кёльн." }
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
                            gerb: "Germania/Nordrhein/Luden/014.png"
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
                                { text: "Район входит в землю Северный Рейн‑Вестфалия, подчинён административному округу Кёльн." }
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
                            gerb: "Germania/Nordrhein/Luden/015.png"
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
                { id: 5, name: 'Мюнстер', hasInfo: false, patch: "munster" }
            ]
        },
        {
            title: "Свободные города в Северном Рейне-Вестфалии",
            items: [
                { id: 6, name: 'Билефельд', hasInfo: false, patch: "bielefeld", },
                { id: 7, name: 'Бонн', hasInfo: false, patch: "bonn", },
                { id: 8, name: 'Боттроп', hasInfo: false, patch: "bottrop", },
                { id: 9, name: 'Бохум', hasInfo: false, patch: "bochum", },
                { id: 10, name: 'Вупперталь', hasInfo: false, patch: "wuppertal", },
                { id: 11, name: 'Гельзенкирхен', hasInfo: false, patch: "gelsenkirchen", },
                { id: 12, name: 'Дортмунд', hasInfo: false, patch: "dortmund", },
                { id: 13, name: 'Дуйсбург', hasInfo: false, patch: "duisburg", },
                { id: 14, name: 'Дюссельдорф', hasInfo: false, patch: "duesseldorf", },
                { id: 15, name: 'Золинген', hasInfo: false, patch: "solingen", },
                { id: 16, name: 'Кёльн', hasInfo: true, patch: "koeln", },
                { id: 17, name: 'Крефельд', hasInfo: false, patch: "krefeld", },
                { id: 18, name: 'Леверкузен', hasInfo: false, patch: "leverkusen", },
                { id: 19, name: 'Мёнхенгладбах', hasInfo: false, patch: "moenchengladbach", },
                { id: 20, name: 'Мюльхайм-на-Руре', hasInfo: false, patch: "muelheim" },
                { id: 21, name: 'Мюнстер', hasInfo: false, patch: "muenster", },
                { id: 22, name: 'Оберхаузен', hasInfo: false, patch: "oberhausen", },
                { id: 23, name: 'Ремшайд', hasInfo: false, patch: "remscheid", },
                { id: 24, name: 'Хаген', hasInfo: false, patch: "hagen", },
                { id: 25, name: 'Хамм', hasInfo: false, patch: "hamm", },
                { id: 26, name: 'Херне', hasInfo: false, patch: "herne", },
                { id: 27, name: 'Эссен', hasInfo: false, patch: "essen", }
            ]
        }
    ],
    meta: {
        title: "Северный Рейн-Вестфалия — информация о регионе",
        description: "Северный Рейн-Вестфалия: города, округа, культура и достопримечательности.",
        ogTitle: "Северный Рейн-Вестфалия — информация о регионе и округах",
        ogDescription: "Подробная информация о Северном Рейне-Вестфалии: города, округа, история и интересные факты.",
        ogImage: "/nrw/nrw-map.jpg"
    }

}
export default datas