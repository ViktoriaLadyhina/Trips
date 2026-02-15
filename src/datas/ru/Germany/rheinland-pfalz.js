const datas = {
    id: 11,
    name: 'Рейнланд-Пфальц',
    hasInfo: true,
    path: 'rheinland-pfalz',
    country: "Германия",
    desc: {
        capital: [
            { bold: 'Столица:' },
            { text: ' Майнц' }
        ],
        population: [
            { bold: 'Население (2024):' },
            { text: ' Население: около 4,1 млн человек. Иностранцев – около 500 тыс. человек.' }
        ],
        area: [
            { bold: 'Площадь:' },
            { text: ' 19 854 км². Плотность населения – около 206 человек на 1 км².' }
        ],
        geography: [
            { bold: 'География:' },
            { text: ' Рейнланд-Пфальц находится на западе Германии. Граничит с Бельгией (133 км), Люксембургом (136 км), Францией (136 км), а также с федеральными землями Северный Рейн-Вестфалия (307 км), Саар (91 км), Гессен (203 км) и Рейнланд-Пфальц (разделяет внутренние границы между округами).' },
            { text: ' Земля включает несколько крупных ландшафтных регионов: Рейнский грабен (Rheingraben), Хунсрюк (Hunsrück), Вестервальд (Westerwald), Эйфель (Eifel) и часть Пфальцского леса (Pfälzerwald). Леса занимают около 42% территории.' },
        ],
        history: [
            { bold: 'Происхождение названия:' },
            { text: ' Название Rheinland-Pfalz появилось после Второй мировой войны в 1946 году, когда британская и французская оккупационные зоны объединили южную часть бывшей Рейнской провинции Пруссии, юг Рейнской земли, а также регион Пфальц.' }
        ],
        economy: [
            { bold: 'Економика:' },
            { text: ' Земля Рейнланд-Пфальц славится сельским хозяйством (виноделие – один из крупнейших регионов Германии), химической промышленностью, машиностроением и энергетикой. Туризм и винные маршруты занимают важное место в экономике.' },
        ],
        cities: [
            { bold: 'Крупные города:' },
            { text: ' Майнц, Кобленц, Трир, Людвигсхафен, Кайзерслаутерн, Бад-Кройцнах, Вормс, Майнц-Кастель, Зайль.' }
        ],
        rivers: [
            { bold: 'Главные реки:' },
            { text: ' Рейн, Мозель, Наэ, Лан, Зайль.' }
        ],
        tourism: [
            { bold: 'Туризм и отдых:' },
            { text: ' Рейнланд-Пфальц известна историческими городами, римскими памятниками, замками, виноградниками и природными парками. Популярны маршруты вдоль Рейна и Мозеля, посещение Трира, Кобленца, Майнца и множества замков.' }
        ]
    },
    symbols: {
        title: "Геральдика",
        items: [
            {
                bold: "Герб:",
                text: " На гербе Рейнланд-Пфальц объединены символы исторических территорий: красный лев на белом фоне (Пфальц), серебряный крест на красном (Майнц), золотой орел на черном (Рейнская провинция).",
                img: "Germany/rheinland-pfalz/gerb.png"
            },
            {
                bold: "Флаг:",
                text: " Флаг Рейнланд-Пфальц состоит из трёх горизонтальных полос: черной, красной и золотой.",
                img: "Germany/rheinland-pfalz/flag.png"
            }
        ]
    },
    briefHistory: {
        title: 'Краткая история',
        items: [
            { text: "Территория современной земли Рейнланд-Пфальц имеет богатую и разнообразную историю. Ещё в древнеримские времена здесь располагались крупные поселения, такие как Трир, один из старейших городов Германии. Во времена Средневековья регион разделялся между различными княжествами, епископствами и имперскими городами. Значительную роль играли архиепископства Майнца и Трира, а также Пфальцские графства." },
            { text: "В XVIII-XIX веках земли подвергались частым изменениям власти: после наполеоновских войн регион вошёл в состав Рейнской провинции Пруссии и других немецких государств. Экономика региона развивалась вокруг сельского хозяйства, виноделия и ремёсел, а города становились важными торговыми центрами." },
            { text: "После Первой мировой войны часть территории была под французской администрацией. Во время Второй мировой войны регион сильно пострадал, но многие исторические памятники были восстановлены после её окончания." },
            { text: "В 1946 году под руководством французской оккупационной администрации была создана земля Рейнланд-Пфальц, объединяющая южную часть Рейнской провинции, Пфальц и некоторые районы бывшей Люксембургской области. В 1947 году был принят первый закон о земле, определивший её административное устройство." },
            { text: "С момента образования земли Рейнланд-Пфальц стала важным культурным, экономическим и политическим регионом Германии, сохранившим богатое историческое наследие и уникальные природные ландшафты. Сегодня Рейнланд-Пфальц известна своими замками, виноградниками, римскими памятниками и историческими городами." },
        ]
    },
    discriptRegions: [
        {
            title: "Районы в Рейнланд-Пфальц",
            items: [
                { id: 1, name: 'Арвайлер', hasInfo: false, path: "ahrweiler" },
                { id: 2, name: 'Альтенкирхен', hasInfo: false, path: "altenkirchen" },
                { id: 3, name: 'Альцай-Вормс', hasInfo: false, path: "alzey-worms" },
                { id: 4, name: 'Бад-Дюркхайм', hasInfo: false, path: "bad-duerkheim" },
                { id: 5, name: 'Бад-Кройцнах', hasInfo: false, path: "bad-kreuznach" },
                { id: 6, name: 'Бернкастель-Виттлих', hasInfo: false, path: "bernkastel-wittlich" },
                { id: 7, name: 'Биркенфельд', hasInfo: false, path: "birkenfeld" },
                { id: 8, name: 'Кохем-Целль', hasInfo: false, path: "cochem-zell" },
                { id: 9, name: 'Доннерсберг', hasInfo: false, path: "donnersbergkreis" },
                { id: 10, name: 'Айфелькрейс Битбург-Прюм', hasInfo: false, path: "eifelkreis-bitburg-pruem" },
                { id: 11, name: 'Гермерсхайм', hasInfo: false, path: "germersheim" },
                { id: 12, name: 'Кайзерслаутерн', hasInfo: false, path: "kaiserslautern" },
                { id: 13, name: 'Кузель', hasInfo: false, path: "kusel" },
                { id: 14, name: 'Майнц-Бинген', hasInfo: false, path: "mainz-bingen" },
                {
                    id: 15,
                    name: 'Майен-Кобленц',
                    title: "Район Майен‑Кобленц",
                    hasInfo: true,
                    path: "mayen-koblenz",
                    desc: {
                        history: [
                            { text: 'Район Майен‑Кобленц (Landkreis Mayen‑Koblenz) – административный район (Kreis) в Германии, входит в землю Рейнланд‑Пфальц. Он расположен в северной части земли вдоль средних течений рек Рейн и Мозель.' },
                            { text: 'Основан в 1970 году путём объединения районов Майен и Кобленц.' },
                            { bold: 'Административный центр:', text: 'город Кобленц, который не входит в состав района и управляется самостоятельно на уровне района (город окружного подчинения).' }
                        ],
                        area: [
                            { bold: 'Площадь:', text: ' около 817 км².' },
                            { bold: 'География:', text: ' район граничит с другими районами земли Рейнланд Пфальц – Аруайллер, Нойвид, Вестервальд, Рейн Лан, Рейн Хунсрюк, Кохем Целль и Вулканайфель? а также окружает город Кобленц. На территории – возвышенности Эйфеля, часть мосельской долины и Рейнская долина.' }
                        ],
                        population: [
                            { bold: 'Население:', text: ' примерно 217 000 человек (2024-2025).' },
                            { bold: 'Плотность населения:', text: ' около 260-270 человек/км².' }
                        ],
                        districts: [{ bold: 'Округа-районы (Kreise):', text: 'Майен (Mayen), Андерах (Andernach), Бендорф (Bendorf), Мандиг (Mendig), Пелленц (Pellenz), Майфельд (Maifeld), Вордерайфель (Vordereifel), Рейн-Мозель (Rhein-Mosel), Вайсентхурм (Weißenthurm)' } ],                        cities: [{ bold: 'Города, не принадлежащие районам (kreisfreie Städte):', text: 'Кобленц (Koblenz)' },                ]
                    },
                    subRegion: [
                        {
                            id: 0,
                            name: "Города окружного подчинения района Майен‑Кобленц",
                            parentDistrict: "Майен-Кобленц",
                            center: [ { text: "Три города входят в район Майен-Кобленц, но управляется самостоятельно на уровне района (города окружного подчинения)." },                        ],
                            communities: [
                                { id: 1, name: "Майен", hasInfo: false },
                                { id: 2, name: "Андерах", hasInfo: false },
                                { id: 3, name: "Бендорф", hasInfo: false }
                            ],

                        },
                        {
                            id: 1,
                            name: "Мендиг",
                            fullName: "Mendig",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " город Мендиг." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 75 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 185 человек/кв.км (по состоянию на 2024 г.)" }],
                            population: [{ bold: "Население:", text: " примерно 13 900 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "5 общин:" }],
                            communities: [
                                { id: 1, name: "Белль", hasInfo: false },
                                { id: 2, name: "Мендиг", hasInfo: false },
                                { id: 3, name: "Риден", hasInfo: false },
                                { id: 4, name: "Тюр", hasInfo: false },
                                { id: 5, name: "Фолькесфельд", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Mendig/gerb.gif"
                        },
                        {
                            id: 2,
                            name: "Пелленц",
                            fullName: "Pellenz",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " город Плайдт." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 63 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 262 человек/кв.км (по состоянию на 2024 г.)" }],
                            population: [{ bold: "Население:", text: " примерно 16 500 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "5 общин:" }],
                            communities: [
                                { id: 1, name: "Крец", hasInfo: false },
                                { id: 2, name: "Круфт", hasInfo: false },
                                { id: 3, name: "Никених", hasInfo: false },
                                { id: 4, name: "Плайдт", hasInfo: false },
                                { id: 5, name: "Заффиг", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Pellenz/gerb.gif"
                        },
                        {
                            id: 3,
                            name: "Валлендар",
                            fullName: "Vallendar",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " Валлендар." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 38 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 400 человек/кв.км (по состоянию на 2024 г.)" }],
                            population: [{ bold: "Население:", text: " примерно 15 200 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "4 общины:" }],
                            communities: [
                                { id: 1, name: "Нидервёрт", hasInfo: false },
                                { id: 2, name: "Урбар", hasInfo: false },
                                { id: 3, name: "Валлендар", hasInfo: false },
                                { id: 4, name: "Вайтерсбург", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif"
                        },
                        {
                            id: 4,
                            name: "Вайсентурм",
                            fullName: "Weißenthurm",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " Вайсентурм." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 52 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 510 человек/кв.км (по состоянию на 2024 г.)" }],
                            population: [{ bold: "Население:", text: " примерно 26 500 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "7 общин:" }],
                            communities: [
                                { id: 1, name: "Бассенхайм", hasInfo: false },
                                { id: 2, name: "Кальтененгерс", hasInfo: false },
                                { id: 3, name: "Кеттиг", hasInfo: false },
                                { id: 4, name: "Мюльхайм-Керлих", hasInfo: false },
                                { id: 5, name: "Санкт-Зебастиан", hasInfo: false },
                                { id: 6, name: "Урмитц", hasInfo: false },
                                { id: 7, name: "Вайсентхурм", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif"
                        },
                        {
                            id: 5,
                            name: "Майфельд",
                            fullName: "Maifeld",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " Полх (Polch)." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 137,5 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 93 человека/кв.км (по состоянию на 2024 г.)" }],
                            population: [{ bold: "Население:", text: " примерно 12 800 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "18 общин:" }],
                            communities: [
                                { id: 1, name: "Айниг", hasInfo: false },
                                { id: 2, name: "Гаппенах", hasInfo: false },
                                { id: 3, name: "Геринг", hasInfo: false },
                                { id: 4, name: "Гиршнах", hasInfo: false },
                                { id: 5, name: "Кальт", hasInfo: false },
                                { id: 6, name: "Кербен", hasInfo: false },
                                { id: 7, name: "Коллиг", hasInfo: false },
                                { id: 8, name: "Лонниг", hasInfo: false },
                                { id: 9, name: "Мертлох", hasInfo: false },
                                { id: 10, name: "Мюнстермайфельд", hasInfo: false },
                                { id: 11, name: "Наунхайм", hasInfo: false },
                                { id: 12, name: "Охтендунг", hasInfo: false },
                                { id: 13, name: "Пиллиг", hasInfo: false },
                                { id: 14, name: "Польх", hasInfo: false },
                                { id: 15, name: "Рюбер", hasInfo: false },
                                { id: 16, name: "Тримбс", hasInfo: false },
                                { id: 17, name: "Веллинг", hasInfo: false },
                                { id: 18, name: "Виршем", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Maifeld/gerb.gif"
                        },
                        {
                            id: 6,
                            name: "Райн-Мозель",
                            fullName: "Rhein-Mosel",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " Коберн-Гондорф (Kobern-Gondorf)." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 128,2 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 194 человека/кв.км (по состоянию на 2024 g.)" }],
                            population: [{ bold: "Население:", text: " примерно 24 900 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "17 общин:" }],
                            communities: [
                                { id: 1, name: "Алькен", hasInfo: false },
                                { id: 2, name: "Брай", hasInfo: false },
                                { id: 3, name: "Броденбах", hasInfo: false },
                                { id: 4, name: "Бурген", hasInfo: false },
                                { id: 5, name: "Диблих", hasInfo: false },
                                { id: 6, name: "Хаценпорт", hasInfo: false },
                                { id: 7, name: "Коберн-Гондорф", hasInfo: false },
                                { id: 8, name: "Лемен", hasInfo: false },
                                { id: 9, name: "Лёф", hasInfo: false },
                                { id: 10, name: "Маккен", hasInfo: false },
                                { id: 11, name: "Нёртерсхаузен", hasInfo: false },
                                { id: 12, name: "Оберфель", hasInfo: false },
                                { id: 13, name: "Ренс", hasInfo: false },
                                { id: 14, name: "Шпай", hasInfo: false },
                                { id: 15, name: "Вальдеш", hasInfo: false },
                                { id: 16, name: "Виннинген", hasInfo: false },
                                { id: 17, name: "Волькен", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Rhein-Mosel/gerb.gif"
                        },
                        {
                            id: 7,
                            name: "Фордерайфель",
                            fullName: "Vordereifel",
                            parentDistrict: "Майен-Кобленц",
                            center: [{ bold: "Административный центр:", text: " Монреаль (Monreal)." }],
                            description: [{ text: "Объединённая община в составе района Майен-Кобленц земли Рейнланд-Пфальц." }],
                            area: [{ bold: "Площадь:", text: " около 215,7 кв. км (по состоянию на 2024 г.)" }],
                            density: [{ bold: "Плотность населения:", text: " примерно 77 человек/кв.км (по состоянию на 2024 г.)" }],
                            population: [{ bold: "Население:", text: " примерно 16 600 чел. (по состоянию на 2024 г.)" }],
                            com: [{ text: "Район подразделяется на " }, { bold: "27 общин:" }],
                            communities: [
                                { id: 1, name: "Ахт", hasInfo: false },
                                { id: 2, name: "Аншау", hasInfo: false },
                                { id: 3, name: "Арфт", hasInfo: false },
                                { id: 4, name: "Баар", hasInfo: false },
                                { id: 5, name: "Бермель", hasInfo: false },
                                { id: 6, name: "Боос", hasInfo: false },
                                { id: 7, name: "Дитшайд", hasInfo: false },
                                { id: 8, name: "Эттринген", hasInfo: false },
                                { id: 9, name: "Хаустен", hasInfo: false },
                                { id: 10, name: "Херресбах", hasInfo: false },
                                { id: 11, name: "Хиртен", hasInfo: false },
                                { id: 12, name: "Кериг", hasInfo: false },
                                { id: 13, name: "Кирхвальд", hasInfo: false },
                                { id: 14, name: "Коттенхайм", hasInfo: false },
                                { id: 15, name: "Лангенфельд", hasInfo: false },
                                { id: 16, name: "Лангшайд", hasInfo: false },
                                { id: 17, name: "Линд", hasInfo: false },
                                { id: 18, name: "Луксем", hasInfo: false },
                                { id: 19, name: "Монреаль", hasInfo: false },
                                { id: 20, name: "Мюнк", hasInfo: false },
                                { id: 21, name: "Нахтсхайм", hasInfo: false },
                                { id: 22, name: "Ройдельстерц", hasInfo: false },
                                { id: 23, name: "Санкт-Йоханн", hasInfo: false },
                                { id: 24, name: "Зибенбах", hasInfo: false },
                                { id: 25, name: "Фирнебург", hasInfo: false },
                                { id: 26, name: "Вайлер", hasInfo: false },
                                { id: 27, name: "Вельшенбах", hasInfo: false }
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vordereifel/gerb.gif"
                        },
                    ]
                },
                { id: 16, name: 'Нойвид', hasInfo: false, path: "neuwied" },
                { id: 17, name: 'Райн-Хунсрюк', hasInfo: false, path: "rhein-hunsrueck-kreis" },
                { id: 18, name: 'Райн-Лан', hasInfo: false, path: "rhein-lahn-kreis" },
                { id: 19, name: 'Райн-Пфальц', hasInfo: false, path: "rhein-pfalz-kreis" },
                { id: 20, name: 'Южный Вайнштрассе', hasInfo: false, path: "suedliche-weinstrasse" },
                { id: 21, name: 'Юго-западный Пфальц', hasInfo: false, path: "suedwestpfalz" },
                { id: 22, name: 'Трир-Саарбург', hasInfo: false, path: "trier-saarburg" },
                { id: 23, name: 'Вулканайфель', hasInfo: false, path: "vulkaneifel" },
                { id: 24, name: 'Вестервальд', hasInfo: false, path: "westerwaldkreis" },
            ]
        },
        {
            title: "Свободные города в Рейнланд-Пфальц",
            items: [
                { id: 25, name: 'Майнц', hasInfo: false, path: "mainz" },
                { id: 26, name: 'Кобленц', hasInfo: false, path: "koblenz" },
                { id: 27, name: 'Людвигсхафен', hasInfo: false, path: "ludwigshafen" },
                { id: 28, name: 'Трир', hasInfo: true, path: "trier" },
                { id: 29, name: 'Кайзерслаутерн', hasInfo: false, path: "kaiserslautern-city" },
                { id: 30, name: 'Вормс', hasInfo: false, path: "worms" },
                { id: 31, name: 'Шпайер', hasInfo: false, path: "speyer" },
                { id: 32, name: 'Франкенталь', hasInfo: false, path: "frankenthal" },
                { id: 33, name: 'Ландау-ин-дер-Пфальц', hasInfo: false, path: "landau" },
                { id: 34, name: 'Нойштадт', hasInfo: false, path: "neustadt" },
                { id: 35, name: 'Пирмазенс', hasInfo: false, path: "pirmasens" },
                { id: 36, name: 'Цвайбрюккен', hasInfo: false, path: "zweibruecken" }
            ]
        }
    ],
    meta: {
        title: "Рейнланд-Пфальц — информация о регионе",
        description: "Рейнланд-Пфальц: города, округа, культура и достопримечательности.",
        ogTitle: "Рейнланд-Пфальц — информация о регионе и округах",
        ogDescription: "Подробная информация о Рейнланд-Пфальц: города, округа, история и интересные факты.",
        ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
    }
}

export default datas