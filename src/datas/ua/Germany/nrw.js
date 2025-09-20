const datas = {
    id: 10,
    name: 'Північний Рейн-Вестфалія',
    hasInfo: true,
    path: 'nrw',
    currentMap: "Germania/Nordrhein/nrw2.gif",
    desc: {
        capital: [
            { bold: 'Столиця:' },
            { text: ' Дюссельдорф' }
        ],
        population: [
            { bold: 'Населення:' },
            { text: ' близько 18,1 млн осіб. Іноземців — близько 2 млн осіб.' }
        ],
        area: [
            { bold: 'Площа:' },
            { text: ' 34 000 км². Щільність населення — близько 525 осіб на 1 км².' }
        ],
        geography: [
            { bold: 'Географія:' },
            { text: 'Північний Рейн-Вестфалія розташований на заході Німеччини і межує з Бельгією (99 км), Нідерландами (387 км), а також з землями Нижня Саксонія (583 км), Гессен (269 км) та Рейнланд-Пфальц (307 км).' },
            { text: 'Територія включає два великі ландшафтні регіони: Північна низовина та Німецьке середнегір’я, які поділяються на північно-рейнську та вестфальську частини вздовж Рейну.' },
            { text: 'На лівому березі Рейну — гори Айфель (Eifel) та передгір’я Vennvorland (Аахенський регіон). На правому березі — Bergisches Land, Зауерланд (Sauerland), Ротхааргебірге (Rothaargebirge), Зігерланд (Siegerland), Сібернгіберге (Siebengebirge) та частини Західного лісу і Везербергланда (Weserbergland). Ліси займають близько 24% території.' }
        ],
        history: [
            { bold: 'Походження назви:' },
            { text: ' Назва Nordrhein-Westfalen з’явилася після постанови британського військового уряду 23 серпня 1946 року, що об’єднувала провінцію Вестфалія (Provinz Westfalen) та провінцію Північний Рейн (Provinz Nordrhein). 21 січня 1947 року до них приєдналася територія Ліппе (Lippe).' }
        ],
        economy: [
            { bold: 'Економіка:' },
            { text: ' Північний Рейн-Вестфалія — один із найбільших економічних центрів Німеччини. Історично розвинені вугільна, залізна, металургійна, сталева та текстильна промисловості.' },
            { text: 'Сільське господарство має допоміжну роль, забезпечуючи продовольством жителів великих міст.' }
        ],
        cities: [
            { bold: 'Великі міста:' },
            { text: ' Кельн, Ессен, Дортмунд, Дюссельдорф, Дуйсбург, Бонн, Мюнстер, Вупперталь, Аахен, Білефельд, Падерборн, Бохум, Крефельд, Гельзенкірхен, Леверкузен, Мюльгайм, Ремшайд, Золінген, Менхен-Гладбах, Зіген, Хамм, Реклінггаузен.' }
        ],
        rivers: [
            { bold: 'Основні ріки та канали:' },
            { text: ' Рейн, Ліппе, Рур, Емс, Везер, Міттельландканал.' }
        ],
        tourism: [
            { bold: 'Туризм і відпочинок:' },
            { text: ' Північний Рейн-Вестфалія славиться багатою історією та культурою. Тут розташовані численні історичні будівлі, музеї та парки. Популярні екскурсії вздовж Рейну та туристичні маршрути гірськими і лісовими районами.' }
        ]
    },
    symbols: {
        title: "Геральдика",
        items: [
            {
                bold: "Герб:",
                text: " на гербі Північного Рейну-Вестфалії об'єднані символи трьох історичних провінцій, з яких була утворена земля у 1946–1947 роках. Срібляста смуга Рейну на зеленому тлі символізує Рейнську провінцію. Саксонський кінь на червоному тлі — символ Вестфалії (у вестфальському варіанті він встав на диби). Червона троянда з золотим серцевиною і листям — герб графів фон Ліппе, що використовувався з XIII століття.",
                img: "Germania/Nordrhein/002.gif"
            },
            {
                bold: "Прапор:",
                text: " прапор Північного Рейну-Вестфалії складається з кольорів герба: зеленого, білого та червоного, розташованих горизонтальними смугами.",
                img: "Germania/Nordrhein/003.gif"
            }
        ]
    },
    briefHistory: {
        title: 'Коротка історія',
        items: [
            {
                text: "Після Другої світової війни територія сучасної землі Північний Рейн-Вестфалія знаходилася в британській окупаційній зоні. Нова земля була створена 23 серпня 1946 року на основі колишньої прусської провінції Вестфалія та північної частини Рейнської провінції (Rheinland) британською окупаційною адміністрацією. Метою об'єднання було забезпечення єдиного управління Рурським басейном, важливим промисловим регіоном."
            },
            {
                text: "У 1947 році колишня земля Ліппе була включена до складу Північного Рейну-Вестфалії відповідно до розпорядження британського військового командування № 77 від 21 січня 1947 року. 5 листопада 1948 року парламент землі прийняв «Закон про об’єднання землі Ліппе-Детмольд із землею Північний Рейн-Вестфалія», офіційно завершивши процес об’єднання."
            },
            {
                text: "8 травня 1949 року Парламентська рада Німеччини прийняла Конституцію ФРН, і земля Північний Рейн-Вестфалія офіційно стала однією з земель Німеччини."
            },
            {
                text: "18 червня 1950 року була прийнята Конституція самої землі, що закріпила її внутрішній устрій та права."
            }
        ]
    },
    discriptRegions: [
        {
            title: "Адміністративні округи в Північному Рейні-Вестфалії",
            items: [
                { id: 1, name: 'Арнсберг', hasInfo: false, patch: "arnsberg", },
                { id: 2, name: 'Детмольд', hasInfo: false, patch: "detmold", },
                { id: 3, name: 'Дюссельдорф', hasInfo: false, patch: "dusseldorf" },
                {
                    id: 4,
                    title: 'Адміністративний округ Кельн',
                    name: 'Кельн',
                    hasInfo: true,
                    patch: "koln",
                    currentMap: "Germania/Nordrhein/004.gif",
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
                            { text: ' приблизно 4,49 мільйона.' }
                        ],
                        districts: [
                            { bold: 'До складу входять райони (Kreise):' },
                            { text: ' Aachen, Düren, Euskirchen, Heinsberg, Oberbergischer Kreis, Rhein-Erft-Kreis, Rhein-Sieg-Kreis, Rheinisch-Bergischer Kreis.' }
                        ],
                        cities: [
                            { bold: 'Міста, які не належать до районів (kreisfreie Städte):' },
                            { text: ' Aachen, Bonn, Köln, Leverkusen.' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 1,
                            name: "Аахен",
                            fullName: "Kreis Aachen",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Аахен." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 707,15 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 564 444 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " 800 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 34." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "10 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Альсдорф", hasInfo: false },
                                { id: 2, name: "Аахен", hasInfo: false },
                                { id: 3, name: "Бесвайлер", hasInfo: false },
                                { id: 4, name: "Вюрцелен", hasInfo: false },
                                { id: 5, name: "Циммеррат", hasInfo: false },
                                { id: 6, name: "Моншау", hasInfo: false },
                                { id: 7, name: "Рьотген", hasInfo: false },
                                { id: 8, name: "Херцогенрат", hasInfo: false },
                                { id: 9, name: "Штольберг", hasInfo: false },
                                { id: 10, name: "Ешвайлер", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/008.png"
                        },
                        {
                            id: 2,
                            name: "Дюрен",
                            fullName: "Kreis Düren",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Дюрен." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 941,15 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 278 462 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " 300 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 58." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "15 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Альденхофен", hasInfo: false },
                                { id: 2, name: "Дюрен", hasInfo: false },
                                { id: 3, name: "Інден", hasInfo: false },
                                { id: 4, name: "Йюліх", hasInfo: false },
                                { id: 5, name: "Кройцау", hasInfo: false },
                                { id: 6, name: "Лангервеє", hasInfo: false },
                                { id: 7, name: "Лінніх", hasInfo: false },
                                { id: 8, name: "Мерценіх", hasInfo: false },
                                { id: 9, name: "Нёрфених", hasInfo: false },
                                { id: 10, name: "Нідегген", hasInfo: false },
                                { id: 11, name: "Нідерцир", hasInfo: false },
                                { id: 12, name: "Тіц", hasInfo: false },
                                { id: 13, name: "Фетвайс", hasInfo: false },
                                { id: 14, name: "Хаймбах", hasInfo: false },
                                { id: 15, name: "Хюртгенвальд", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/009.png"
                        },
                        {
                            id: 3,
                            name: "Обербергіш",
                            fullName: "Oberbergischer Kreis",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Гуммерсбах." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 918,53 кв. км (станом на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 275 735 осіб (станом на 31 грудня 2023 р.)" }
                            ],
                            density: [
                                { bold: "Густота населення:" },
                                { text: " близько 300 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 74." }
                            ],
                            description: [
                                { text: "Район входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "13 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Бергнойштадт", hasInfo: false },
                                { id: 2, name: "Вальдбрьоль", hasInfo: false },
                                { id: 3, name: "Віль", hasInfo: false },
                                { id: 4, name: "Віпперфюрт", hasInfo: false },
                                { id: 5, name: "Гуммерсбах", hasInfo: false },
                                { id: 6, name: "Ліндлар", hasInfo: false },
                                { id: 7, name: "Марієнхайде", hasInfo: false },
                                { id: 8, name: "Морсбах", hasInfo: false },
                                { id: 9, name: "Нюмбрехт", hasInfo: false },
                                { id: 10, name: "Радеформвальд", hasInfo: false },
                                { id: 11, name: "Рейхсхоф", hasInfo: false },
                                { id: 12, name: "Хюккесваген", hasInfo: false },
                                { id: 13, name: "Енгельскірхен", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/010.png"
                        },
                        {
                            id: 4,
                            name: "Ойскирхен",
                            fullName: "Kreis Euskirchen",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Ойскирхен." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 1 249,2 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 188 773 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " 151,1 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 66." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "11 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Ойскирхен", hasInfo: false },
                                { id: 2, name: "Мехерних", hasInfo: false },
                                { id: 3, name: "Цюльпіх", hasInfo: false },
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
                            name: "Рейн-Зіг",
                            fullName: "Rhein-Sieg-Kreis",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Зігбург (Siegburg)." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 1 153,00 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " ≈ 620 000 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " близько 538 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 82." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "19 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Айторф", hasInfo: false },
                                { id: 2, name: "Альфтер", hasInfo: false },
                                { id: 3, name: "Бад-Хоннеф", hasInfo: false },
                                { id: 4, name: "Борнгхайм", hasInfo: false },
                                { id: 5, name: "Вахтберг", hasInfo: false },
                                { id: 6, name: "Виндецк", hasInfo: false },
                                { id: 7, name: "Зігбург", hasInfo: false },
                                { id: 8, name: "Кьонігсвінтер", hasInfo: false },
                                { id: 9, name: "Ломмар", hasInfo: false },
                                { id: 10, name: "Меккенхайм", hasInfo: false },
                                { id: 11, name: "Мух", hasInfo: false },
                                { id: 12, name: "Нідеркассель", hasInfo: false },
                                { id: 13, name: "Нойнкірхен-Зельшайд", hasInfo: false },
                                { id: 14, name: "Райнбах", hasInfo: false },
                                { id: 15, name: "Руппихтерот", hasInfo: false },
                                { id: 16, name: "Тройсдорф", hasInfo: false },
                                { id: 17, name: "Санкт-Августин", hasInfo: false },
                                { id: 18, name: "Свістталь", hasInfo: false },
                                { id: 19, name: "Хеннеф", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/012.png"
                        },
                        {
                            id: 6,
                            name: "Рейн-Ерфт",
                            fullName: "Rhein-Erft-Kreis",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Бергхайм (Bergheim)." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 704,70 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 480 989 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " близько 679 осіб/кв.км (2022–2023 рр.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 62." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн-Вестфалия, підпорядкований адміністративному округу Кёльн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "10 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Бедбург", hasInfo: false },
                                { id: 2, name: "Бергхайм", hasInfo: false },
                                { id: 3, name: "Брюль", hasInfo: true, patch: "bruehl" },
                                { id: 4, name: "Ельсдорф", hasInfo: false },
                                { id: 5, name: "Ерфтштадт", hasInfo: false },
                                { id: 6, name: "Фрехен", hasInfo: false },
                                { id: 7, name: "Хюрт", hasInfo: false },
                                { id: 8, name: "Керпен", hasInfo: false },
                                { id: 9, name: "Пульхайм", hasInfo: false },
                                { id: 10, name: "Веселлінг", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/013.png"
                        },
                        {
                            id: 7,
                            name: "Рейнiш-Бергiш",
                            fullName: "Rheinisch-Bergischer Kreis",
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Бергиш-Гладбах (Bergisch Gladbach)." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 437,07 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 283 000 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " близько 648 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 78." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн‑Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "8 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Бергиш-Гладбах", hasInfo: false },
                                { id: 2, name: "Буршайд", hasInfo: false },
                                { id: 3, name: "Вермельскірхен", hasInfo: false },
                                { id: 4, name: "Кюртен", hasInfo: false },
                                { id: 5, name: "Лайхлінген", hasInfo: false },
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
                            parentDistrict: "Кельн",
                            center: [
                                { bold: "Центр району:" },
                                { text: " місто Хайнсберг (Heinsberg)." }
                            ],
                            area: [
                                { bold: "Площа:" },
                                { text: " 627,7 кв. км (на 2023 р.)" }
                            ],
                            population: [
                                { bold: "Населення:" },
                                { text: " 250 000 осіб (на 2023 р.)" }
                            ],
                            density: [
                                { bold: "Щільність населення:" },
                                { text: " близько 398 осіб/кв.км (2023 р.)" }
                            ],
                            code: [
                                { bold: "Офіційний код району:" },
                                { text: " 05 3 70." }
                            ],
                            description: [
                                { text: "Район входить до складу землі Північний Рейн‑Вестфалія, підпорядкований адміністративному округу Кельн." }
                            ],
                            com: [
                                { text: "Район поділяється на " },
                                { bold: "10 громад:" }
                            ],
                            communities: [
                                { id: 1, name: "Вальдфойхт", hasInfo: false },
                                { id: 2, name: "Вассенберг", hasInfo: false },
                                { id: 3, name: "Вегберг", hasInfo: false },
                                { id: 4, name: "Гайленкірхен", hasInfo: false },
                                { id: 5, name: "Гангельт", hasInfo: false },
                                { id: 6, name: "Зельфкант", hasInfo: false },
                                { id: 7, name: "Юбах-Паленберг", hasInfo: false },
                                { id: 8, name: "Хайнсберг", hasInfo: false },
                                { id: 9, name: "Хюккельхофен", hasInfo: false },
                                { id: 10, name: "Еркеленц", hasInfo: false }
                            ],
                            gerb: "Germania/Nordrhein/Luden/015.png"
                        }
                    ],
                },
                { id: 5, name: 'Мюнстер', hasInfo: false, patch: "munster" }
            ]
        },
        {
            title: "Вільні міста в Північному Рейні-Вестфалії",
            items: [
                { id: 6, name: 'Білефельд', hasInfo: false, patch: "bielefeld", },
                { id: 7, name: 'Бонн', hasInfo: false, patch: "bonn", },
                { id: 8, name: 'Боттроп', hasInfo: false, patch: "bottrop", },
                { id: 9, name: 'Бохум', hasInfo: false, patch: "bochum", },
                { id: 10, name: 'Вупперталь', hasInfo: false, patch: "wuppertal", },
                { id: 11, name: 'Гельзенкірхен', hasInfo: false, patch: "gelsenkirchen", },
                { id: 12, name: 'Дортмунд', hasInfo: false, patch: "dortmund", },
                { id: 13, name: 'Дуйсбург', hasInfo: false, patch: "duisburg", },
                { id: 14, name: 'Дюссельдорф', hasInfo: false, patch: "duesseldorf", },
                { id: 15, name: 'Золінген', hasInfo: false, patch: "solingen", },
                { id: 16, name: 'Кельн', hasInfo: false, patch: "koeln", },
                { id: 17, name: 'Крефельд', hasInfo: false, patch: "krefeld", },
                { id: 18, name: 'Леверкузен', hasInfo: false, patch: "leverkusen", },
                { id: 19, name: 'Менхенгладбах', hasInfo: false, patch: "moenchengladbach", },
                { id: 20, name: 'Мюльхайм-на-Рурі', hasInfo: false, patch: "muelheim", },
                { id: 21, name: 'Мюнстер', hasInfo: false, patch: "muenster", },
                { id: 22, name: 'Обергаузен', hasInfo: false, patch: "oberhausen", },
                { id: 23, name: 'Ремшайд', hasInfo: false, patch: "remscheid", },
                { id: 24, name: 'Хаген', hasInfo: false, patch: "hagen", },
                { id: 25, name: 'Хамм', hasInfo: false, patch: "hamm", },
                { id: 26, name: 'Херне', hasInfo: false, patch: "herne", },
                { id: 27, name: 'Ессен', hasInfo: false, patch: "essen", }
            ]
        }
    ],
}
export default datas