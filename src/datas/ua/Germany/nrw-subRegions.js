const datas = [
    {
        id: 1_1,
        name: "Зіген-Віттгенштайн",
        path: "siegen_Wittgenstein",
        districtPath: "arnsberg",
        center: [{ bold: "Центр району:", text: " місто Зіген." }],
        area: [{ bold: "Площа:", text: " 1 132,9 км² (станом на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 274 379 осіб (станом на 31.12.2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 242,7 осіб/км² (станом на 2023 р.)" }],
        code: [{ bold: "Офіційний код району:", text: " 05 9 70." }],
        description: [
            { text: "Район Зіген-Віттгенштайн входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "11 громад:" }],
        communities: [
            { id: 1, name: "Бад-Берлебург", hasInfo: false },
            { id: 2, name: "Бад-Ласфе", hasInfo: false },
            { id: 3, name: "Бурбах", hasInfo: false },
            { id: 4, name: "Вільнсдорф", hasInfo: false },
            { id: 5, name: "Зіген", hasInfo: false },
            { id: 6, name: "Кройцталь", hasInfo: false },
            { id: 7, name: "Нетфен", hasInfo: false },
            { id: 8, name: "Фройденберг", hasInfo: false },
            { id: 9, name: "Нойнкірхен", hasInfo: false },
            { id: 10, name: "Хільхенбах", hasInfo: false },
            { id: 11, name: "Ерндтебрюк", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Siegen-Wittgenstein/gerb.png"
    },
    {
        id: 1_2,
        name: "Зост",
        path: "soest",
        districtPath: "arnsberg",
        center: [{ bold: "Центр району:", text: " місто Зост." }],
        area: [{ bold: "Площа:", text: " 1 328,6 км² (станом на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " близько 300 297 осіб (станом на 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 226 осіб/км²." }],
        code: [{ bold: "Офіційний код району:", text: " 05 9 74." }],
        description: [
            { text: "Район Зост входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "14 громад:" }],
        communities: [
            { id: 1, name: "Анрьохте", hasInfo: false },
            { id: 2, name: "Бад-Зассендорф", hasInfo: false },
            { id: 3, name: "Варштайн", hasInfo: false },
            { id: 4, name: "Вельфер", hasInfo: false },
            { id: 5, name: "Верль", hasInfo: false },
            { id: 6, name: "Віккеде", hasInfo: false },
            { id: 7, name: "Гезеке", hasInfo: false },
            { id: 8, name: "Зост", hasInfo: false },
            { id: 9, name: "Ліппеталь", hasInfo: false },
            { id: 10, name: "Ліппштадт", hasInfo: false },
            { id: 11, name: "Мьонезее", hasInfo: false },
            { id: 12, name: "Рютен", hasInfo: false },
            { id: 13, name: "Ензе", hasInfo: false },
            { id: 14, name: "Ервитте", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Soest/gerb.png"
    },
    {
        id: 1_3,
        name: "Меркіш",
        districtPath: "arnsberg",
        path: "merkischer",
        center: [{ bold: "Центр району:", text: " місто Люденшайд." }],
        area: [{ bold: "Площа:", text: " 1 058,95 км² (станом на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 408 899 осіб (станом на 31 грудня 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 390 осіб/км²." }],
        code: [{ bold: "Офіційний код району:", text: " 05 9 62." }],
        description: [
            { text: "Район Меркіш входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "15 громад:" }],
        communities: [
            { id: 1, name: "Альтена", hasInfo: false },
            { id: 2, name: "Бальфе", hasInfo: false },
            { id: 3, name: "Вердоль", hasInfo: false },
            { id: 4, name: "Ізерлон", hasInfo: false },
            { id: 5, name: "Кірспе", hasInfo: false },
            { id: 6, name: "Люденшайд", hasInfo: true, path: 'luedenscheid' },
            { id: 7, name: "Майнерцхаген", hasInfo: false },
            { id: 8, name: "Менден", hasInfo: false },
            { id: 9, name: "Нахродт-Віблінгверде", hasInfo: false },
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
        id: 1_4,
        name: "Ольпе",
        path: "olpe",
        districtPath: "arnsberg",
        center: [{ bold: "Центр району:", text: " місто Ольпе." }],
        area: [{ bold: "Площа:", text: " 710,7 км² (станом на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 134 439 осіб (станом на 31 грудня 2022 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 188,8 осіб/км²." }],
        code: [{ bold: "Офіційний код району:", text: " 05 9 66." }],
        description: [
            { text: "Район Ольпе входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "7 громад:" }],
        communities: [
            { id: 1, name: "Аттендорн", hasInfo: false },
            { id: 2, name: "Венден", hasInfo: false },
            { id: 3, name: "Дрольсхаген", hasInfo: false },
            { id: 4, name: "Кірххундем", hasInfo: false },
            { id: 5, name: "Леннештадт", hasInfo: false },
            { id: 6, name: "Ольпе", hasInfo: false },
            { id: 7, name: "Фіннентроп", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Olpe/gerb.png"
    },
    {
        id: 1_5,
        name: "Унна",
        path: "unna",
        districtPath: "arnsberg",
        center: [{ bold: "Центр району:", text: " місто Унна." }],
        area: [{ bold: "Площа:", text: " 543,2 км² (станом на 31 грудня 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 396 283 осіб (станом на 31 грудня 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 730,3 осіб/км²." }],
        code: [{ bold: "Офіційний код району:", text: " 05 9 78." }],
        description: [
            { text: "Район Унна входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "10 громад:" }],
        communities: [
            { id: 1, name: "Бёнен", hasInfo: false },
            { id: 2, name: "Бергкамен", hasInfo: false },
            { id: 3, name: "Верне", hasInfo: false },
            { id: 4, name: "Зельм", hasInfo: false },
            { id: 5, name: "Камен", hasInfo: false },
            { id: 6, name: "Люнен", hasInfo: false },
            { id: 7, name: "Унна", hasInfo: false },
            { id: 8, name: "Фрёнденберг", hasInfo: false },
            { id: 9, name: "Хольцвіккеде", hasInfo: false },
            { id: 10, name: "Шверте", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Unna/gerb.png"
    },
    {
        id: 1_6,
        name: "Хохзауерланд",
        path: "hochsauerland",
        districtPath: "arnsberg",
        center: [{ bold: "Центр району:", text: " місто Мешеде." }],
        area: [{ bold: "Площа:", text: " 1 960,2 км² (станом на 31 грудня 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 261 193 особи (станом на 31 грудня 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 133,2 осіб/км²." }],
        code: [{ bold: "Офіційний код району:", text: " 05 9 58." }],
        description: [
            { text: "Район Хохзауерланд входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "12 громад:" }],
        communities: [
            { id: 1, name: "Арнсберг", hasInfo: false },
            { id: 2, name: "Бествіг", hasInfo: false },
            { id: 3, name: "Брілон", hasInfo: false },
            { id: 4, name: "Вінтерберг", hasInfo: false },
            { id: 5, name: "Зундерн", hasInfo: false },
            { id: 6, name: "Марсберг", hasInfo: false },
            { id: 7, name: "Медебах", hasInfo: false },
            { id: 8, name: "Мешеде", hasInfo: false },
            { id: 9, name: "Ольсберг", hasInfo: false },
            { id: 10, name: "Халленберг", hasInfo: false },
            { id: 11, name: "Шмалленберг", hasInfo: false },
            { id: 12, name: "Еслоє", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Hochsauerlandkreis/gerb.png"
    },
    {
        id: 1_7,
        name: "Еннепе-Рур",
        path: "ennepe_ruhr",
        districtPath: "arnsberg",
        center: [
            { bold: "Центр району:" },
            { text: " місто Швельм." }
        ],
        area: [
            { bold: "Площа:" },
            { text: " 408,44 км² (станом на 31 грудня 2023 р.)" }
        ],
        population: [
            { bold: "Населення:" },
            { text: " 314 167 осіб (станом на 31 грудня 2024 р.)" }
        ],
        density: [
            { bold: "Щільність населення:" },
            { text: " 766,9 осіб/км²." }
        ],
        code: [
            { bold: "Офіційний код району:" },
            { text: " 05 9 54." }
        ],
        description: [
            { text: "Район Еннепе-Рур входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Арнсберг." }
        ],
        com: [
            { text: "Район поділяється на " },
            { bold: "9 громад:" }
        ],
        communities: [
            { id: 1, name: "Бреккерфельд", hasInfo: false },
            { id: 2, name: "Еннепеталь", hasInfo: false },
            { id: 3, name: "Гевельсберг", hasInfo: false },
            { id: 4, name: "Хаттінген", hasInfo: false },
            { id: 5, name: "Хердека", hasInfo: false },
            { id: 6, name: "Швельм", hasInfo: false },
            { id: 7, name: "Шпрокхьофель", hasInfo: false },
            { id: 8, name: "Веттер (Рур)", hasInfo: false },
            { id: 9, name: "Віттен", hasInfo: false }
        ],
        gerb: "Germany/nrw/arnsberg/Ennepe-Ruhr-Kreis/gerb.png"
    },

    {
        id: 4_1,
        name: "Аахен",
        path: "aachen",
        districtPath: "koln",
        center: [{ bold: "Центр району:", text: " місто Аахен." }],
        area: [{ bold: "Площа:", text: " 707,15 кв. км (на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 564 444 осіб (на 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 800 осіб/кв.км (2023 р.)" }],
        code: [{ bold: "Офіційний код району:", text: " 05 3 34." }],
        description: [{ text: "Район Аахен входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }],
        com: [{ text: "Район поділяється на " }, { bold: "10 громад:" }],
        communities: [
            { id: 1, name: "Альсдорф", hasInfo: false },
            { id: 2, name: "Аахен", hasInfo: false },
            { id: 3, name: "Бесвайлер", hasInfo: false },
            { id: 4, name: "Вюрцелен", hasInfo: false },
            { id: 5, name: "Циммеррат", hasInfo: false },
            { id: 6, name: "Моншау", hasInfo: true, path: 'monschau' },
            { id: 7, name: "Рьотген", hasInfo: false },
            { id: 8, name: "Херцогенрат", hasInfo: false },
            { id: 9, name: "Штольберг", hasInfo: false },
            { id: 10, name: "Ешвайлер", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Aachen/gerb.png"
    },
    {
        id: 4_2,
        name: "Дюрен",
        path: "duren",
        districtPath: "koln",
        center: [{ bold: "Центр району:", text: " місто Дюрен." }],
        area: [{ bold: "Площа:", text: " 941,15 кв. км (на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 278 462 осіб (на 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " 300 осіб/кв.км (2023 р.)" }],
        code: [{ bold: "Офіційний код району:", text: " 05 3 58." }],
        description: [
            { text: "Район Дюрен входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "15 громад:" }],
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
        gerb: "Germany/nrw/koln/Düren/gerb.png"
    },
    {
        id: 4_3,
        name: "Обербергіш",
        path: "oberbergischer",
        districtPath: "koln",
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
            { text: "Район Обербергіш входить до землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
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
        gerb: "Germany/nrw/koln/Oberbergischer/gerb.png"
    },
    {
        id: 4_4,
        name: "Ойскирхен",
        path: "euskirchen",
        districtPath: "koln",
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
            { text: "Район Ойскирхен входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
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
        gerb: "Germany/nrw/koln/Euskirchen/gerb.png"
    },
    {
        id: 4_5,
        name: "Рейн-Зіг",
        path: "rhein_sieg",
        districtPath: "koln",
        center: [{ bold: "Центр району:", text: " місто Зігбург (Siegburg)." }],
        area: [{ bold: "Площа:", text: " 1 153,00 кв. км (на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " ≈ 620 000 осіб (на 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " близько 538 осіб/кв.км (2023 р.)" }],
        code: [{ bold: "Офіційний код району:", text: " 05 3 82." }],
        description: [
            { text: "Район Рейн-Зіг входить до складу землі Північний Рейн-Вестфалія, підпорядкований адміністративному округу Кельн." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "19 громад:" }],
        communities: [
            { id: 1, name: "Айторф", hasInfo: false },
            { id: 2, name: "Альфтер", hasInfo: false },
            { id: 3, name: "Бад-Хоннеф", hasInfo: false },
            { id: 4, name: "Борнгхайм", hasInfo: false },
            { id: 5, name: "Вахтберг", hasInfo: false },
            { id: 6, name: "Виндецк", hasInfo: false },
            { id: 7, name: "Зігбург", hasInfo: false },
            { id: 8, name: "Кенігсвінтер", hasInfo: true, path: "konigswinter" },
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
        gerb: "Germany/nrw/koln/Rhein-Sieg-Kreis/gerb.png"
    },
    {
        id: 4_6,
        name: "Рейн-Ерфт",
        path: "rhein_erft",
        districtPath: "koln",
        center: [{ bold: "Центр району:", text: " місто Бергхайм (Bergheim)." }],
        area: [{ bold: "Площа:", text: " 704,70 кв. км (на 2023 р.)" }],
        population: [{ bold: "Населення:", text: " 480 989 осіб (на 2023 р.)" }],
        density: [{ bold: "Щільність населення:", text: " близько 679 осіб/кв.км (2022–2023 рр.)" }],
        code: [{ bold: "Офіційний код району:", text: " 05 3 62." }],
        description: [
            { text: "Район Рейн-Ерфт входить до складу землі Північний Рейн-Вестфалия, підпорядкований адміністративному округу Кёльн." }
        ],
        com: [{ text: "Район поділяється на " }, { bold: "10 громад:" }],
        communities: [
            { id: 1, name: "Бедбург", hasInfo: false },
            { id: 2, name: "Бергхайм", hasInfo: false },
            { id: 3, name: "Брюль", hasInfo: true, path: "bruhl" },
            { id: 4, name: "Ельсдорф", hasInfo: false },
            { id: 5, name: "Ерфтштадт", hasInfo: false },
            { id: 6, name: "Фрехен", hasInfo: true, path: 'frechen' },
            { id: 7, name: "Хюрт", hasInfo: false },
            { id: 8, name: "Керпен", hasInfo: false },
            { id: 9, name: "Пульхайм", hasInfo: false },
            { id: 10, name: "Веселлінг", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Rhein-Erft-Kreis/gerb.png"
    },
    {
        id: 4_7,
        name: "Рейнiш-Бергiш",
        path: "rheinisch_bergischer",
        districtPath: "koln",
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
            { text: "Район Рейнiш-Бергiш входить до складу землі Північний Рейн‑Вестфалія, підпорядкований адміністративному округу Кельн." }
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
        gerb: "Germany/nrw/koln/Rheinisch-Bergischer/gerb.png"
    },
    {
        id: 4_8,
        name: "Хайнсберг",
        path: "heinsberg",
        districtPath: "koln",
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
            { text: "Район Хайнсберг входить до складу землі Північний Рейн‑Вестфалія, підпорядкований адміністративному округу Кельн." }
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
        gerb: "Germany/nrw/koln/Heinsberg/gerb.png"
    }
]
export default datas