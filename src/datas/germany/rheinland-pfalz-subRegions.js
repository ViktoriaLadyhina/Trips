const datas =
    [
        {
            id: 15_0,
            districtPath: "mayen_koblenz",
            path: "city",
            translations: {
                ru: {
                    name: "Города окружного подчинения района Майен‑Кобленц",
                    center: [{ text: "Три города входят в район Майен-Кобленц, но управляется самостоятельно на уровне района (города окружного подчинения)." },],
                    communities: [
                        { id: 1, name: "Майен", hasInfo: false },
                        { id: 2, name: "Андерах", hasInfo: false },
                        { id: 3, name: "Бендорф", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Міста окружного підпорядкування району Маєн-Кобленц",
                    center: [{ text: "Три міста входять до району Маєн-Кобленц, але управляються самостійно на рівні району (міста окружного підпорядкування)." },],
                    communities: [
                        { id: 1, name: "Маєн", hasInfo: false },
                        { id: 2, name: "Андерах", hasInfo: false },
                        { id: 3, name: "Бендорф", hasInfo: false }
                    ]
                },
                de: {
                    name: "Kreisfreie Städte des Landkreises Mayen-Koblenz",
                    center: [{ text: "Drei Städte gehören zum Landkreis Mayen-Koblenz, werden jedoch auf Kreisebene selbstständig verwaltet (kreisfreie Städte)." }],
                    communities: [
                        { id: 1, name: "Mayen", hasInfo: false },
                        { id: 2, name: "Andernach", hasInfo: false },
                        { id: 3, name: "Bendorf", hasInfo: false }
                    ],
                }
            }
        },
        {
            id: 15_1,
            path: "mendig",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Mendig/gerb.gif",
            translations: {
                ru: {
                    name: "Мендиг",
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
                },
                ua: {
                    name: "Мендіг",
                    center: [{ bold: "Адміністративний центр:", text: " місто Мендіг." }],
                    description: [{ text: "Об’єднана громада у складі району Маєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 75 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 185 осіб/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 13 900 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "5 громад:" }],
                    communities: [
                        { id: 1, name: "Белль", hasInfo: false },
                        { id: 2, name: "Мендіг", hasInfo: false },
                        { id: 3, name: "Ріден", hasInfo: false },
                        { id: 4, name: "Тюр", hasInfo: false },
                        { id: 5, name: "Фолькесфельд", hasInfo: false }
                    ]
                },
                de: {
                    name: "Mendig",
                    center: [{ bold: "Verwaltungszentrum:", text: " Stadt Mendig." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz im Bundesland Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " etwa 75 km² (Stand 2024)" }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " etwa 185 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " etwa 13 900 Einwohner (Stand 2024)" }],
                    com: [{ text: "Der Bezirk ist unterteilt in " }, { bold: "5 Gemeinden:" }],
                    communities: [
                        { id: 1, name: "Bell", hasInfo: false },
                        { id: 2, name: "Mendig", hasInfo: false },
                        { id: 3, name: "Rieden", hasInfo: false },
                        { id: 4, name: "Thür", hasInfo: false },
                        { id: 5, name: "Volkesfeld", hasInfo: false }
                    ]
                }
            }


        },
        {
            id: 15_2,
            path: "pellenz",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Pellenz/gerb.gif",
            translations: {
                ru: {
                    name: "Пелленц",
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
                    ]
                },
                ua: {
                    name: "Пелленц",
                    center: [{ bold: "Адміністративний центр:", text: " місто Плайдт." }],
                    description: [{ text: "Об’єднана громада у складі району Маєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 63 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 262 осіб/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 16 500 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "5 громад:" }],
                    communities: [
                        { id: 1, name: "Крец", hasInfo: false },
                        { id: 2, name: "Круфт", hasInfo: false },
                        { id: 3, name: "Нікеніх", hasInfo: false },
                        { id: 4, name: "Плайдт", hasInfo: false },
                        { id: 5, name: "Заффіг", hasInfo: false }
                    ]
                },
                de: {
                    name: "Pellenz",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Plaidt." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 63 km² (Stand 2024)" }],
                    density: [{ bold: "Einwohnerdichte:", text: " ca. 262 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " ca. 16.500 Einwohner (Stand 2024)" }],
                    com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "5 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Kretz", hasInfo: false },
                        { id: 2, name: "Kruf", hasInfo: false },
                        { id: 3, name: "Nickenich", hasInfo: false },
                        { id: 4, name: "Plaidt", hasInfo: false },
                        { id: 5, name: "Saffig", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 15_3,
            path: "vallendar",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif",
            translations: {
                ru: {
                    name: "Валлендар",
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
                    ]
                },
                ua: {
                    name: "Валлендар",
                    center: [{ bold: "Адміністративний центр:", text: " Валлендар." }],
                    description: [{ text: "Об’єднана громада у складі району Маєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 38 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 400 осіб/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 15 200 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "4 громади:" }],
                    communities: [
                        { id: 1, name: "Нідерверт", hasInfo: false },
                        { id: 2, name: "Урбар", hasInfo: false },
                        { id: 3, name: "Валлендар", hasInfo: false },
                        { id: 4, name: "Вайтерсбург", hasInfo: false }
                    ]
                },
                de: {
                    name: "Vallendar",
                    center: [{ bold: "Verwaltungssitz:", text: " Vallendar." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 38 km² (Stand 2024)" }],
                    density: [{ bold: "Einwohnerdichte:", text: " ca. 400 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " ca. 15.200 Einwohner (Stand 2024)" }],
                    com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "4 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Niederwerth", hasInfo: false },
                        { id: 2, name: "Urbar", hasInfo: false },
                        { id: 3, name: "Vallendar", hasInfo: false },
                        { id: 4, name: "Weitersburg", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 15_4,
            path: "weisenthurm",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif",
            translations: {
                ru: {
                    name: "Вайсентурм",
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
                    ]
                },
                ua: {
                    name: "Вайсентурм",
                    center: [{ bold: "Адміністративний центр:", text: " Вайсентурм." }],
                    description: [{ text: "Об’єднана громада у складі району Маєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 52 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 510 осіб/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 26 500 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "7 громад:" }],
                    communities: [
                        { id: 1, name: "Бассенхайм", hasInfo: false },
                        { id: 2, name: "Кальтененгерс", hasInfo: false },
                        { id: 3, name: "Кеттиг", hasInfo: false },
                        { id: 4, name: "Мюльхайм-Керліх", hasInfo: false },
                        { id: 5, name: "Санкт-Зебастіан", hasInfo: false },
                        { id: 6, name: "Урміц", hasInfo: false },
                        { id: 7, name: "Вайсентхурм", hasInfo: false }
                    ]
                },
                de: {
                    name: "Weißenthurm",
                    center: [{ bold: "Verwaltungssitz:", text: " Weißenthurm." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 52 km² (Stand 2024)" }],
                    density: [{ bold: "Einwohnerdichte:", text: " ca. 510 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " ca. 26.500 Einwohner (Stand 2024)" }],
                    com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "7 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Bassenheim", hasInfo: false },
                        { id: 2, name: "Kaltenengers", hasInfo: false },
                        { id: 3, name: "Kettig", hasInfo: false },
                        { id: 4, name: "Mülheim-Kärlich", hasInfo: false },
                        { id: 5, name: "Sankt Sebastian", hasInfo: false },
                        { id: 6, name: "Urmitz", hasInfo: false },
                        { id: 7, name: "Weißenthurm", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 15_5,
            path: "maifeld",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Maifeld/gerb.gif",
            translations: {
                ru: {
                    name: "Майфельд",
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
                    ]
                },
                ua: {
                    name: "Майфельд",
                    center: [{ bold: "Адміністративний центр:", text: " Полх (Polch)." }],
                    description: [{ text: "Об’єднана громада у складі району Маєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 137,5 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 93 особи/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 12 800 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "18 громад:" }],
                    communities: [
                        { id: 1, name: "Айніг", hasInfo: false },
                        { id: 2, name: "Гаппенах", hasInfo: false },
                        { id: 3, name: "Герінг", hasInfo: false },
                        { id: 4, name: "Гіршнах", hasInfo: false },
                        { id: 5, name: "Кальт", hasInfo: false },
                        { id: 6, name: "Кербен", hasInfo: false },
                        { id: 7, name: "Колліг", hasInfo: false },
                        { id: 8, name: "Лонніг", hasInfo: false },
                        { id: 9, name: "Мертлох", hasInfo: false },
                        { id: 10, name: "Мюнстермайфельд", hasInfo: false },
                        { id: 11, name: "Наунхайм", hasInfo: false },
                        { id: 12, name: "Охтендунг", hasInfo: false },
                        { id: 13, name: "Пілліг", hasInfo: false },
                        { id: 14, name: "Польх", hasInfo: false },
                        { id: 15, name: "Рюбер", hasInfo: false },
                        { id: 16, name: "Тримбс", hasInfo: false },
                        { id: 17, name: "Веллінг", hasInfo: false },
                        { id: 18, name: "Віршем", hasInfo: false }
                    ]
                },
                de: {
                    name: "Maifeld",
                    center: [{ bold: "Verwaltungssitz:", text: " Polch." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 137,5 km² (Stand 2024)" }],
                    density: [{ bold: "Einwohnerdichte:", text: " ca. 93 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " ca. 12.800 Einwohner (Stand 2024)" }],
                    com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "18 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Aynig", hasInfo: false },
                        { id: 2, name: "Gappenach", hasInfo: false },
                        { id: 3, name: "Gering", hasInfo: false },
                        { id: 4, name: "Girshnach", hasInfo: false },
                        { id: 5, name: "Kalt", hasInfo: false },
                        { id: 6, name: "Kerben", hasInfo: false },
                        { id: 7, name: "Collig", hasInfo: false },
                        { id: 8, name: "Lonnig", hasInfo: false },
                        { id: 9, name: "Mertloch", hasInfo: false },
                        { id: 10, name: "Münstermaifeld", hasInfo: false },
                        { id: 11, name: "Nauheim", hasInfo: false },
                        { id: 12, name: "Ochtendung", hasInfo: false },
                        { id: 13, name: "Pillig", hasInfo: false },
                        { id: 14, name: "Polch", hasInfo: false },
                        { id: 15, name: "Rüber", hasInfo: false },
                        { id: 16, name: "Trimbs", hasInfo: false },
                        { id: 17, name: "Welling", hasInfo: false },
                        { id: 18, name: "Wirschem", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 15_6,
            path: "rhein_mosel",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Rhein-Mosel/gerb.gif",
            translations: {
                ru: {
                    name: "Райн-Мозель",
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
                    ]
                },
                ua: {
                    name: "Райн-Мозель",
                    center: [{ bold: "Адміністративний центр:", text: " Коберн-Гондорф (Kobern-Gondorf)." }],
                    description: [{ text: "Об’єднана громада у складі району Маєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 128,2 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 194 особи/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 24 900 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "17 громад:" }],
                    communities: [
                        { id: 1, name: "Алькен", hasInfo: false },
                        { id: 2, name: "Брай", hasInfo: false },
                        { id: 3, name: "Броденбах", hasInfo: false },
                        { id: 4, name: "Бурген", hasInfo: false },
                        { id: 5, name: "Дібліх", hasInfo: false },
                        { id: 6, name: "Хаценпорт", hasInfo: false },
                        { id: 7, name: "Коберн-Гондорф", hasInfo: false },
                        { id: 8, name: "Лемен", hasInfo: false },
                        { id: 9, name: "Льоф", hasInfo: false },
                        { id: 10, name: "Маккен", hasInfo: false },
                        { id: 11, name: "Нертерсгаузен", hasInfo: false },
                        { id: 12, name: "Оберфель", hasInfo: false },
                        { id: 13, name: "Ренс", hasInfo: false },
                        { id: 14, name: "Шпай", hasInfo: false },
                        { id: 15, name: "Вальдеш", hasInfo: false },
                        { id: 16, name: "Віннінген", hasInfo: false },
                        { id: 17, name: "Волькен", hasInfo: false }
                    ]
                },
                de: {
                    name: "Rhein-Mosel",
                    center: [{ bold: "Verwaltungssitz:", text: " Kobern-Gondorf." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 128,2 km² (Stand 2024)" }],
                    density: [{ bold: "Einwohnerdichte:", text: " ca. 194 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " ca. 24.900 Einwohner (Stand 2024)" }],
                    com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "17 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Alken", hasInfo: false },
                        { id: 2, name: "Brey", hasInfo: false },
                        { id: 3, name: "Brodenbach", hasInfo: false },
                        { id: 4, name: "Burgen", hasInfo: false },
                        { id: 5, name: "Diefenbach", hasInfo: false },
                        { id: 6, name: "Hatzenport", hasInfo: false },
                        { id: 7, name: "Kobern-Gondorf", hasInfo: false },
                        { id: 8, name: "Lemern", hasInfo: false },
                        { id: 9, name: "Löf", hasInfo: false },
                        { id: 10, name: "Macken", hasInfo: false },
                        { id: 11, name: "Nörtershausen", hasInfo: false },
                        { id: 12, name: "Oberfell", hasInfo: false },
                        { id: 13, name: "Reinsfeld", hasInfo: false },
                        { id: 14, name: "Spay", hasInfo: false },
                        { id: 15, name: "Waldesch", hasInfo: false },
                        { id: 16, name: "Winningen", hasInfo: false },
                        { id: 17, name: "Volken", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 15_7,
            path: "vordereifel",
            districtPath: "mayen_koblenz",
            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vordereifel/gerb.gif",
            translations: {
                ru: {
                    name: "Фордерайфель",
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
                    ]
                },
                ua: {
                    name: "Фордер-айфель",
                    center: [{ bold: "Адміністративний центр:", text: " Монреаль (Monreal)." }],
                    description: [{ text: "Об'єднана громада в складі району Майєн-Кобленц землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 215,7 кв. км (станом на 2024 р.)" }],
                    density: [{ bold: "Щільність населення:", text: " приблизно 77 осіб/кв.км (станом на 2024 р.)" }],
                    population: [{ bold: "Населення:", text: " приблизно 16 600 осіб (станом на 2024 р.)" }],
                    com: [{ text: "Район поділяється на " }, { bold: "27 громад:" }],
                    communities: [
                        { id: 1, name: "Акт", hasInfo: false },
                        { id: 2, name: "Аншау", hasInfo: false },
                        { id: 3, name: "Арфт", hasInfo: false },
                        { id: 4, name: "Баар", hasInfo: false },
                        { id: 5, name: "Бермель", hasInfo: false },
                        { id: 6, name: "Боос", hasInfo: false },
                        { id: 7, name: "Дітшайд", hasInfo: false },
                        { id: 8, name: "Еттринген", hasInfo: false },
                        { id: 9, name: "Хаустен", hasInfo: false },
                        { id: 10, name: "Херресбах", hasInfo: false },
                        { id: 11, name: "Хіртен", hasInfo: false },
                        { id: 12, name: "Кериг", hasInfo: false },
                        { id: 13, name: "Кірхвальд", hasInfo: false },
                        { id: 14, name: "Коттенгайм", hasInfo: false },
                        { id: 15, name: "Лангенфельд", hasInfo: false },
                        { id: 16, name: "Лангшайд", hasInfo: false },
                        { id: 17, name: "Лінд", hasInfo: false },
                        { id: 18, name: "Луксем", hasInfo: false },
                        { id: 19, name: "Монреаль", hasInfo: false },
                        { id: 20, name: "Мюнк", hasInfo: false },
                        { id: 21, name: "Нахтсгайм", hasInfo: false },
                        { id: 22, name: "Ройдельстерц", hasInfo: false },
                        { id: 23, name: "Санкт-Йоганн", hasInfo: false },
                        { id: 24, name: "Зібенбах", hasInfo: false },
                        { id: 25, name: "Фірнебург", hasInfo: false },
                        { id: 26, name: "Вайлер", hasInfo: false },
                        { id: 27, name: "Вельшенбах", hasInfo: false }
                    ],
                },
                de: {
                    name: "Vordereifel",
                    center: [{ bold: "Verwaltungssitz:", text: " Monreal." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Mayen-Koblenz, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 215,7 km² (Stand 2024)" }],
                    density: [{ bold: "Einwohnerdichte:", text: " ca. 77 Einwohner/km² (Stand 2024)" }],
                    population: [{ bold: "Bevölkerung:", text: " ca. 16.600 Einwohner (Stand 2024)" }],
                    com: [{ text: "Die Verbandsgemeinde gliedert sich in " }, { bold: "27 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Acht", hasInfo: false },
                        { id: 2, name: "Anschau", hasInfo: false },
                        { id: 3, name: "Arft", hasInfo: false },
                        { id: 4, name: "Baar", hasInfo: false },
                        { id: 5, name: "Bermel", hasInfo: false },
                        { id: 6, name: "Boos", hasInfo: false },
                        { id: 7, name: "Ditscheid", hasInfo: false },
                        { id: 8, name: "Ettringen", hasInfo: false },
                        { id: 9, name: "Hausten", hasInfo: false },
                        { id: 10, name: "Herresbach", hasInfo: false },
                        { id: 11, name: "Hirten", hasInfo: false },
                        { id: 12, name: "Kerig", hasInfo: false },
                        { id: 13, name: "Kirchwald", hasInfo: false },
                        { id: 14, name: "Kottenheim", hasInfo: false },
                        { id: 15, name: "Langenfeld", hasInfo: false },
                        { id: 16, name: "Langscheid", hasInfo: false },
                        { id: 17, name: "Lind", hasInfo: false },
                        { id: 18, name: "Luxem", hasInfo: false },
                        { id: 19, name: "Monreal", hasInfo: false },
                        { id: 20, name: "Münk", hasInfo: false },
                        { id: 21, name: "Nachtsheim", hasInfo: false },
                        { id: 22, name: "Reudelsterz", hasInfo: false },
                        { id: 23, name: "Sankt Johann", hasInfo: false },
                        { id: 24, name: "Siebenbach", hasInfo: false },
                        { id: 25, name: "Fährneburg", hasInfo: false },
                        { id: 26, name: "Weiler", hasInfo: false },
                        { id: 27, name: "Welshenbach", hasInfo: false }
                    ]
                }
            }

        },

        {
            id: 22_1,
            path: "hermeskeil",
            districtPath: "trier_saarburg",
            gerb: "Germany/rheinland-pfalz/trier_saarburg/hermeskeil/gerb.png",
            translations: {
                ru: {
                    name: "Хермескайль",
                    center: [{ bold: "Административный центр:", text: " город Хермескайль." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~145,50 км (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~107 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~15 500 чел. (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "13 общин:" }],
                    communities: [
                        { id: 1, name: "Бешайд", hasInfo: false },
                        { id: 2, name: "Бойрен", hasInfo: false },
                        { id: 3, name: "Дамфлос", hasInfo: false },
                        { id: 4, name: "Гайсфельд", hasInfo: false },
                        { id: 5, name: "Гримбург", hasInfo: false },
                        { id: 6, name: "Гузенбург", hasInfo: false },
                        { id: 7, name: "Хермескайль", hasInfo: false },
                        { id: 8, name: "Хинцерт-Пёлерт", hasInfo: false },
                        { id: 9, name: "Наурат", hasInfo: false },
                        { id: 10, name: "Нойхюттен", hasInfo: false },
                        { id: 11, name: "Рашайд", hasInfo: false },
                        { id: 12, name: "Райнсфельд", hasInfo: false },
                        { id: 13, name: "Цюш", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Гермескайль",
                    center: [{ bold: "Адміністративний центр:", text: " місто Гермескайль." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 145,50 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 107 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 15 500 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "13 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Бешайд", hasInfo: false },
                        { id: 2, name: "Бойрен", hasInfo: false },
                        { id: 3, name: "Дамфлос", hasInfo: false },
                        { id: 4, name: "Гайсфельд", hasInfo: false },
                        { id: 5, name: "Гримбург", hasInfo: false },
                        { id: 6, name: "Гузенбург", hasInfo: false },
                        { id: 7, name: "Гермескайль", hasInfo: false },
                        { id: 8, name: "Хинцерт-Пёлерт", hasInfo: false },
                        { id: 9, name: "Наурат", hasInfo: false },
                        { id: 10, name: "Нойхюттен", hasInfo: false },
                        { id: 11, name: "Рашайд", hasInfo: false },
                        { id: 12, name: "Райнсфельд", hasInfo: false },
                        { id: 13, name: "Цюш", hasInfo: false }
                    ]
                },
                de: {
                    districtPath: "trier_saarburg",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Hermeskeil." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 145,50 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 107 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 15 500 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "13 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Bescheid", hasInfo: false },
                        { id: 2, name: "Beuren", hasInfo: false },
                        { id: 3, name: "Dampflos", hasInfo: false },
                        { id: 4, name: "Geisfeld", hasInfo: false },
                        { id: 5, name: "Grimburg", hasInfo: false },
                        { id: 6, name: "Gusenburg", hasInfo: false },
                        { id: 7, name: "Hermeskeil", hasInfo: false },
                        { id: 8, name: "Hinzerath-Pölert", hasInfo: false },
                        { id: 9, name: "Nauraht", hasInfo: false },
                        { id: 10, name: "Neuhütten", hasInfo: false },
                        { id: 11, name: "Rachtig", hasInfo: false },
                        { id: 12, name: "Reinsfeld", hasInfo: false },
                        { id: 13, name: "Trierweiler", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 22_2,
            path: "konz",
            districtPath: "trier_saarburg",
            gerb: "Germany/rheinland-pfalz/trier_saarburg/konz/gerb.png",
            translations: {
                ru: {
                    name: "Конц",
                    center: [{ bold: "Административный центр:", text: " город Конц." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~130,20 км² (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~249 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~32 398 человек (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "12 общин:" }],
                    communities: [
                        { id: 1, name: "Канцем", hasInfo: false },
                        { id: 2, name: "Конц", hasInfo: false },
                        { id: 3, name: "Ниттель", hasInfo: false },
                        { id: 4, name: "Обербиллиг", hasInfo: false },
                        { id: 5, name: "Онсдорф", hasInfo: false },
                        { id: 6, name: "Пеллинген", hasInfo: false },
                        { id: 7, name: "Таверн", hasInfo: false },
                        { id: 8, name: "Теммельс", hasInfo: false },
                        { id: 9, name: "Вассерлиш", hasInfo: false },
                        { id: 10, name: "Ваверн", hasInfo: false },
                        { id: 11, name: "Веллен", hasInfo: false },
                        { id: 12, name: "Вильтинген", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Конц",
                    center: [{ bold: "Адміністративний центр:", text: " місто Конц." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 130,20 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 249 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 32 398 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "12 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Канцем", hasInfo: false },
                        { id: 2, name: "Конц", hasInfo: false },
                        { id: 3, name: "Ниттель", hasInfo: false },
                        { id: 4, name: "Обербиллиг", hasInfo: false },
                        { id: 5, name: "Онсдорф", hasInfo: false },
                        { id: 6, name: "Пеллінген", hasInfo: false },
                        { id: 7, name: "Таверн", hasInfo: false },
                        { id: 8, name: "Теммельс", hasInfo: false },
                        { id: 9, name: "Вассерліш", hasInfo: false },
                        { id: 10, name: "Ваверн", hasInfo: false },
                        { id: 11, name: "Веллен", hasInfo: false },
                        { id: 12, name: "Вільтінген", hasInfo: false }
                    ]
                },
                de: {
                    name: "Konz",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Konz." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 130,20 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 249 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 32 398 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "12 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Kanzem", hasInfo: false },
                        { id: 2, name: "Konz", hasInfo: false },
                        { id: 3, name: "Nittel", hasInfo: false },
                        { id: 4, name: "Oberbillig", hasInfo: false },
                        { id: 5, name: "Onsdorf", hasInfo: false },
                        { id: 6, name: "Pellingen", hasInfo: false },
                        { id: 7, name: "Tawern", hasInfo: false },
                        { id: 8, name: "Temmels", hasInfo: false },
                        { id: 9, name: "Wasserliesch", hasInfo: false },
                        { id: 10, name: "Wawern", hasInfo: false },
                        { id: 11, name: "Wellen", hasInfo: false },
                        { id: 12, name: "Wiltingen", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 22_3,
            path: "ruwer",
            districtPath: "trier_saarburg",
            gerb: "Germany/rheinland-pfalz/trier_saarburg/ruwer/gerb.png",
            translations: {
                ru: {
                    name: "Рувер",
                    center: [{ bold: "Административный центр:", text: " город Осбург." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~126,60 км² (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~146 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~18 469 человек (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "20 общин:" }],
                    communities: [
                        { id: 1, name: "Бонерат", hasInfo: false },
                        { id: 2, name: "Фаршвайлер", hasInfo: false },
                        { id: 3, name: "Густерат", hasInfo: false },
                        { id: 4, name: "Гутвайлер", hasInfo: false },
                        { id: 5, name: "Херль", hasInfo: false },
                        { id: 6, name: "Хинценбург", hasInfo: false },
                        { id: 7, name: "Хольцерат", hasInfo: false },
                        { id: 8, name: "Казель", hasInfo: false },
                        { id: 9, name: "Корлинген", hasInfo: false },
                        { id: 10, name: "Лоршайд", hasInfo: false },
                        { id: 11, name: "Мертесдорф", hasInfo: false },
                        { id: 12, name: "Моршайд", hasInfo: false },
                        { id: 13, name: "Ольмут", hasInfo: false },
                        { id: 14, name: "Осбург", hasInfo: false },
                        { id: 15, name: "Плувиг", hasInfo: false },
                        { id: 16, name: "Риверис", hasInfo: false },
                        { id: 17, name: "Шёндорф", hasInfo: false },
                        { id: 18, name: "Зоммерау", hasInfo: false },
                        { id: 19, name: "Том", hasInfo: false },
                        { id: 20, name: "Вальдрах", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Рувер",
                    center: [{ bold: "Адміністративний центр:", text: " місто Осбург." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 126,60 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 146 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 18 469 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "20 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Бонерат", hasInfo: false },
                        { id: 2, name: "Фаршвайлер", hasInfo: false },
                        { id: 3, name: "Густерат", hasInfo: false },
                        { id: 4, name: "Гутвайлер", hasInfo: false },
                        { id: 5, name: "Херль", hasInfo: false },
                        { id: 6, name: "Хінценбург", hasInfo: false },
                        { id: 7, name: "Хольцерат", hasInfo: false },
                        { id: 8, name: "Казель", hasInfo: false },
                        { id: 9, name: "Корлінген", hasInfo: false },
                        { id: 10, name: "Лоршайд", hasInfo: false },
                        { id: 11, name: "Мертесдорф", hasInfo: false },
                        { id: 12, name: "Моршайд", hasInfo: false },
                        { id: 13, name: "Ольмут", hasInfo: false },
                        { id: 14, name: "Осбург", hasInfo: false },
                        { id: 15, name: "Плувіг", hasInfo: false },
                        { id: 16, name: "Ріверіс", hasInfo: false },
                        { id: 17, name: "Шёндорф", hasInfo: false },
                        { id: 18, name: "Зоммерау", hasInfo: false },
                        { id: 19, name: "Том", hasInfo: false },
                        { id: 20, name: "Вальдрах", hasInfo: false }
                    ]
                },
                de: {
                    name: "Ruwer",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Osburg." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 126,60 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 146 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 18 469 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "20 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Bonerath", hasInfo: false },
                        { id: 2, name: "Farschweiler", hasInfo: false },
                        { id: 3, name: "Gusterath", hasInfo: false },
                        { id: 4, name: "Gutweiler", hasInfo: false },
                        { id: 5, name: "Herl", hasInfo: false },
                        { id: 6, name: "Hinzenburg", hasInfo: false },
                        { id: 7, name: "Holzerath", hasInfo: false },
                        { id: 8, name: "Kasel", hasInfo: false },
                        { id: 9, name: "Korlingen", hasInfo: false },
                        { id: 10, name: "Lorscheid", hasInfo: false },
                        { id: 11, name: "Mertesdorf", hasInfo: false },
                        { id: 12, name: "Morschied", hasInfo: false },
                        { id: 13, name: "Olmuth", hasInfo: false },
                        { id: 14, name: "Osburg", hasInfo: false },
                        { id: 15, name: "Pluwig", hasInfo: false },
                        { id: 16, name: "Riviers", hasInfo: false },
                        { id: 17, name: "Schöndorf", hasInfo: false },
                        { id: 18, name: "Sommerau", hasInfo: false },
                        { id: 19, name: "Thomm", hasInfo: false },
                        { id: 20, name: "Waldrach", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 22_4,
            path: "saarburg_kell",
            districtPath: "trier_saarburg",
            gerb: "Germany/rheinland-pfalz/trier_saarburg/saarburg_kell/gerb.png",
            translations: {
                ru: {
                    name: "Саарбург-Келль",
                    center: [{ bold: "Административный центр:", text: " город Саарбург." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~359,85 км² (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~93 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~33 586 человек (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "29 общины:" }],
                    communities: [
                        { id: 1, name: "Айль", hasInfo: false },
                        { id: 2, name: "Бальдринген", hasInfo: false },
                        { id: 3, name: "Фиш", hasInfo: false },
                        { id: 4, name: "Фройденбург", hasInfo: false },
                        { id: 5, name: "Граймерат", hasInfo: false },
                        { id: 6, name: "Хеддерт", hasInfo: false },
                        { id: 7, name: "Хентерн", hasInfo: false },
                        { id: 8, name: "Ирш", hasInfo: false },
                        { id: 9, name: "Кастель-Штадт", hasInfo: false },
                        { id: 10, name: "Келль-ам-Зее", hasInfo: false },
                        { id: 11, name: "Кирф", hasInfo: false },
                        { id: 12, name: "Лампаден", hasInfo: false },
                        { id: 13, name: "Мандерн", hasInfo: false },
                        { id: 14, name: "Маннебах", hasInfo: false },
                        { id: 15, name: "Мерцкирхен", hasInfo: false },
                        { id: 16, name: "Окфен", hasInfo: false },
                        { id: 17, name: "Пальцем", hasInfo: false },
                        { id: 18, name: "Пашель", hasInfo: false },
                        { id: 19, name: "Саарбург", hasInfo: true, path: "saarburg" },
                        { id: 20, name: "Шиллинген", hasInfo: false },
                        { id: 21, name: "Шоден", hasInfo: false },
                        { id: 22, name: "Шёмерих", hasInfo: false },
                        { id: 23, name: "Зерриг", hasInfo: false },
                        { id: 24, name: "Табен-Родт", hasInfo: false },
                        { id: 25, name: "Трассем", hasInfo: false },
                        { id: 26, name: "Фирхерренборн", hasInfo: false },
                        { id: 27, name: "Вальдвайлер", hasInfo: false },
                        { id: 28, name: "Винхеринген", hasInfo: false },
                        { id: 29, name: "Церф", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Саарбург-Келль",
                    center: [{ bold: "Адміністративний центр:", text: " місто Саарбург." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 359,85 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 93 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 33 586 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "29 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Айль", hasInfo: false },
                        { id: 2, name: "Бальдринген", hasInfo: false },
                        { id: 3, name: "Фіш", hasInfo: false },
                        { id: 4, name: "Фройденбург", hasInfo: false },
                        { id: 5, name: "Граймерат", hasInfo: false },
                        { id: 6, name: "Хеддерт", hasInfo: false },
                        { id: 7, name: "Хентерн", hasInfo: false },
                        { id: 8, name: "Ірш", hasInfo: false },
                        { id: 9, name: "Кастель-Штадт", hasInfo: false },
                        { id: 10, name: "Келль-ам-Зее", hasInfo: false },
                        { id: 11, name: "Кірф", hasInfo: false },
                        { id: 12, name: "Лампаден", hasInfo: false },
                        { id: 13, name: "Мандерн", hasInfo: false },
                        { id: 14, name: "Маннебах", hasInfo: false },
                        { id: 15, name: "Мерцкірхен", hasInfo: false },
                        { id: 16, name: "Окфен", hasInfo: false },
                        { id: 17, name: "Пальцем", hasInfo: false },
                        { id: 18, name: "Пашель", hasInfo: false },
                        { id: 19, name: "Саарбург", hasInfo: true, path: "saarburg" },
                        { id: 20, name: "Шилінген", hasInfo: false },
                        { id: 21, name: "Шоден", hasInfo: false },
                        { id: 22, name: "Шёмеріх", hasInfo: false },
                        { id: 23, name: "Зерриг", hasInfo: false },
                        { id: 24, name: "Табен-Родт", hasInfo: false },
                        { id: 25, name: "Трассем", hasInfo: false },
                        { id: 26, name: "Фірхерренборн", hasInfo: false },
                        { id: 27, name: "Вальдвайлер", hasInfo: false },
                        { id: 28, name: "Вінхеринген", hasInfo: false },
                        { id: 29, name: "Церф", hasInfo: false }
                    ]
                },
                de: {
                    name: "Saarburg-Kell",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Saarburg." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 359,85 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 93 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 33 586 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "29 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Ayl", hasInfo: false },
                        { id: 2, name: "Baldringen", hasInfo: false },
                        { id: 3, name: "Fisch", hasInfo: false },
                        { id: 4, name: "Freudenburg", hasInfo: false },
                        { id: 5, name: "Greimerath", hasInfo: false },
                        { id: 6, name: "Heddert", hasInfo: false },
                        { id: 7, name: "Hentern", hasInfo: false },
                        { id: 8, name: "Irsh", hasInfo: false },
                        { id: 9, name: "Castel-Stadt", hasInfo: false },
                        { id: 10, name: "Kell am See", hasInfo: false },
                        { id: 11, name: "Kirf", hasInfo: false },
                        { id: 12, name: "Lampaden", hasInfo: false },
                        { id: 13, name: "Mandern", hasInfo: false },
                        { id: 14, name: "Mannebach", hasInfo: false },
                        { id: 15, name: "Mertzkirchen", hasInfo: false },
                        { id: 16, name: "Ockfen", hasInfo: false },
                        { id: 17, name: "Palzem", hasInfo: false },
                        { id: 18, name: "Paschel", hasInfo: false },
                        { id: 19, name: "Saarburg", hasInfo: true, path: "saarburg", },
                        { id: 20, name: "Schillingen", hasInfo: false },
                        { id: 21, name: "Schoden", hasInfo: false },
                        { id: 22, name: "Schömerich", hasInfo: false },
                        { id: 23, name: "Serrig", hasInfo: false },
                        { id: 24, name: "Taben-Rodt", hasInfo: false },
                        { id: 25, name: "Tressem", hasInfo: false },
                        { id: 26, name: "Fährherrnborn", hasInfo: false },
                        { id: 27, name: "Waldweiler", hasInfo: false },
                        { id: 28, name: "Wincheringen", hasInfo: false },
                        { id: 29, name: "Zerf", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 22_5,
            path: "schweich",
            districtPath: "trier_saarburg",
            gerb: "Germany/rheinland-pfalz/trier_saarburg/schweich/gerb.png",
            translations: {
                ru: {
                    name: "Швайх-ан-дер-Рёмишен-Вайнштрассе",
                    center: [{ bold: "Административный центр:", text: " город Швайх." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~164,42 км² (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~177 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~29 046 человек (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "18 общин:" }],
                    communities: [
                        { id: 1, name: "Беконд", hasInfo: false },
                        { id: 2, name: "Детцем", hasInfo: false },
                        { id: 3, name: "Энш", hasInfo: false },
                        { id: 4, name: "Фелль", hasInfo: false },
                        { id: 5, name: "Фёрен", hasInfo: false },
                        { id: 6, name: "Кен", hasInfo: false },
                        { id: 7, name: "Клюссерат", hasInfo: false },
                        { id: 8, name: "Кёверих", hasInfo: false },
                        { id: 9, name: "Лайвен", hasInfo: false },
                        { id: 10, name: "Лонген", hasInfo: false },
                        { id: 11, name: "Лонгуйх", hasInfo: false },
                        { id: 12, name: "Меринг", hasInfo: false },
                        { id: 13, name: "Наурат", hasInfo: false },
                        { id: 14, name: "Пёлих", hasInfo: false },
                        { id: 15, name: "Риоль", hasInfo: false },
                        { id: 16, name: "Шлайх", hasInfo: false },
                        { id: 17, name: "Швайх", hasInfo: false },
                        { id: 18, name: "Тёрних", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Швайх-ан-дер-Рёмішен-Вайнштрассе",
                    center: [{ bold: "Адміністративний центр:", text: " місто Швайх." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 164,42 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 177 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 29 046 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "18 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Беконд", hasInfo: false },
                        { id: 2, name: "Детцем", hasInfo: false },
                        { id: 3, name: "Енш", hasInfo: false },
                        { id: 4, name: "Фелль", hasInfo: false },
                        { id: 5, name: "Фёрен", hasInfo: false },
                        { id: 6, name: "Кен", hasInfo: false },
                        { id: 7, name: "Клюссерат", hasInfo: false },
                        { id: 8, name: "Кёверих", hasInfo: false },
                        { id: 9, name: "Лайвен", hasInfo: false },
                        { id: 10, name: "Лонген", hasInfo: false },
                        { id: 11, name: "Лонгуйх", hasInfo: false },
                        { id: 12, name: "Меринг", hasInfo: false },
                        { id: 13, name: "Наурат", hasInfo: false },
                        { id: 14, name: "Пёліх", hasInfo: false },
                        { id: 15, name: "Ріоль", hasInfo: false },
                        { id: 16, name: "Шлайх", hasInfo: false },
                        { id: 17, name: "Швайх", hasInfo: false },
                        { id: 18, name: "Тёрніх", hasInfo: false }
                    ]
                },
                de: {
                    name: "Schweich an der Römischen Weinstraße",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Schweich." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 164,42 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 177 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 29 046 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "18 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Bekond", hasInfo: false },
                        { id: 2, name: "Detzem", hasInfo: false },
                        { id: 3, name: "Ensch", hasInfo: false },
                        { id: 4, name: "Fell", hasInfo: false },
                        { id: 5, name: "Föhren", hasInfo: false },
                        { id: 6, name: "Kehn", hasInfo: false },
                        { id: 7, name: "Klüsserath", hasInfo: false },
                        { id: 8, name: "Köwerich", hasInfo: false },
                        { id: 9, name: "Leiwen", hasInfo: false },
                        { id: 10, name: "Longen", hasInfo: false },
                        { id: 11, name: "Longuich", hasInfo: false },
                        { id: 12, name: "Mehring", hasInfo: false },
                        { id: 13, name: "Nauraht", hasInfo: false },
                        { id: 14, name: "Pölich", hasInfo: false },
                        { id: 15, name: "Riol", hasInfo: false },
                        { id: 16, name: "Schleich", hasInfo: false },
                        { id: 17, name: "Schweich", hasInfo: false },
                        { id: 18, name: "Ternich", hasInfo: false }
                    ]
                }
            }
        },
        {
            id: 22_6,
            path: "trier_land",
            districtPath: "trier_saarburg",
            gerb: "Germany/rheinland-pfalz/trier_saarburg/trier_land/gerb.png",
            translations: {
                ru: {
                    name: "Трир-Ланд",
                    center: [{ bold: "Административный центр:", text: " город Трир." }],
                    description: [{ text: "Объединённая община в составе района Трир-Саарбург земли Рейнланд-Пфальц." }],
                    area: [{ bold: "Площадь:", text: " ~175,49 км² (по состоянию на 2024 г.)" }],
                    density: [{ bold: "Плотность населения:", text: " ~127 человек/км² (по состоянию на 2024 г.)" }],
                    population: [{ bold: "Население:", text: " ~22 197 человек (по состоянию на 2024 г.)" }],
                    com: [{ text: "Район подразделяется на " }, { bold: "11 общин:" }],
                    communities: [
                        { id: 1, name: "Ах", hasInfo: false },
                        { id: 2, name: "Франценхайм", hasInfo: false },
                        { id: 3, name: "Хоквайлер", hasInfo: false },
                        { id: 4, name: "Игель", hasInfo: false },
                        { id: 5, name: "Кордель", hasInfo: false },
                        { id: 6, name: "Лангзур", hasInfo: false },
                        { id: 7, name: "Невель", hasInfo: false },
                        { id: 8, name: "Ралинген", hasInfo: false },
                        { id: 9, name: "Трирвайлер", hasInfo: false },
                        { id: 10, name: "Вельшбиллиг", hasInfo: false },
                        { id: 11, name: "Цеммер", hasInfo: false }
                    ]
                },
                ua: {
                    name: "Трір-Ланд",
                    center: [{ bold: "Адміністративний центр:", text: " місто Трір." }],
                    description: [{ text: "Об’єднана громада у складі району Трір-Саарбург землі Рейнланд-Пфальц." }],
                    area: [{ bold: "Площа:", text: " близько 175,49 км² (станом на 2024 рік)." }],
                    density: [{ bold: "Щільність населення:", text: " близько 127 осіб/км² (станом на 2024 рік)." }],
                    population: [{ bold: "Населення:", text: " близько 22 197 осіб (станом на 2024 рік)." }],
                    com: [{ text: "Громада включає " }, { bold: "11 населених пунктів:" }],
                    communities: [
                        { id: 1, name: "Ах", hasInfo: false },
                        { id: 2, name: "Франценхайм", hasInfo: false },
                        { id: 3, name: "Хоквайлер", hasInfo: false },
                        { id: 4, name: "Ігель", hasInfo: false },
                        { id: 5, name: "Кордель", hasInfo: false },
                        { id: 6, name: "Лангзур", hasInfo: false },
                        { id: 7, name: "Невель", hasInfo: false },
                        { id: 8, name: "Ралінген", hasInfo: false },
                        { id: 9, name: "Трірвайлер", hasInfo: false },
                        { id: 10, name: "Вельшбілліг", hasInfo: false },
                        { id: 11, name: "Цеммер", hasInfo: false }
                    ]
                },
                de: {
                    name: "Trier-Land",
                    path: "trier_land",
                    districtPath: "trier_saarburg",
                    center: [{ bold: "Verwaltungssitz:", text: " Stadt Trier." }],
                    description: [{ text: "Verbandsgemeinde im Landkreis Trier-Saarburg, Rheinland-Pfalz." }],
                    area: [{ bold: "Fläche:", text: " ca. 175,49 km² (Stand 2024)." }],
                    density: [{ bold: "Bevölkerungsdichte:", text: " ca. 127 Einwohner/km² (Stand 2024)." }],
                    population: [{ bold: "Einwohner:", text: " ca. 22 197 (Stand 2024)." }],
                    com: [{ text: "Die Verbandsgemeinde umfasst " }, { bold: "11 Ortsgemeinden:" }],
                    communities: [
                        { id: 1, name: "Aach", hasInfo: false },
                        { id: 2, name: "Franzenheim", hasInfo: false },
                        { id: 3, name: "Hockweiler", hasInfo: false },
                        { id: 4, name: "Igel", hasInfo: false },
                        { id: 5, name: "Kordel", hasInfo: false },
                        { id: 6, name: "Langsur", hasInfo: false },
                        { id: 7, name: "Neumagen-Dhron", hasInfo: false },
                        { id: 8, name: "Ralingen", hasInfo: false },
                        { id: 9, name: "Trierweiler", hasInfo: false },
                        { id: 10, name: "Welschbillig", hasInfo: false },
                        { id: 11, name: "Zemmer", hasInfo: false }
                    ]
                }
            }
        }
    ]

export default datas