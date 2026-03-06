const datas = [
    {
        id: 1_1,
        name: "Зиген-Виттгенштайн",
        path: "siegen_Wittgenstein",
        districtPath: "arnsberg",
        center: [{ bold: "Центр района:", text: " город Зиген." }],
        area: [{ bold: "Площадь:", text: " 1 132,9 кв. км (по состоянию на 2023 г.)" }],
        population: [{ bold: "Население:", text: " 274 379 человек (по состоянию на 31.12.2023 г.)" }],
        density: [{ bold: "Плотность населения:", text: " 242,7 человек/кв. км (по состоянию на 2023 г.)" }],
        code: [{ bold: "Официальный код района:", text: " 05 9 70." }],
        description: [
            { text: "Район Зиген-Виттгенштайн входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
        ],
        com: [{ text: "Район подразделяется на " }, { bold: "11 общин:" }],
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
        id: 1_2,
        name: "Зост",
        path: "soest",
        districtPath: "arnsberg",
        center: [ { bold: "Центр района:", text: " город Зост." }],
        area: [ { bold: "Площадь:", text: " 1 328,6 км² (по состоянию на 2023 г.)." } ],
        population: [{ bold: "Население:", text: " около 300 297 человек (по состоянию на 2023 г.)." } ],
        density: [{ bold: "Плотность населения:", text: " 226 человек/км²." } ],
        code: [ { bold: "Официальный код района:", text: " 05 9 74." } ],
        description: [
            { text: "Район Зост входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
        ],
        com: [ { text: "Район подразделяется на " }, { bold: "14 общин:" } ],
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
        id: 1_3,
        name: "Меркиш",
        districtPath: "arnsberg",
        path: "merkischer",
        center: [ { bold: "Центр района:", text: " город Люденшайд." } ],
        area: [ { bold: "Площадь:", text: " 1 058,95 км² (по состоянию на 2023 г.)." }],
        population: [ { bold: "Население:", text: " 408 899 человек (по состоянию на 31 декабря 2023 г.)." }],
        density: [ { bold: "Плотность населения:", text: " 390 человек/км²." }],
        code: [ { bold: "Официальный код района:", text: " 05 9 62." } ],
        description: [
            { text: "Район Меркиш входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
        ],
        com: [ { text: "Район подразделяется на " }, { bold: "15 общин:" } ],
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
        id: 1_4,
        name: "Ольпе",
        path: "olpe",
        districtPath: "arnsberg",
        center: [ { bold: "Центр района:", text: " город Ольпе." } ],
        area: [{ bold: "Площадь:", text: " 710,7 км² (по состоянию на 2023 г.)." }],
        population: [ { bold: "Население:", text: " 134 439 человек (по состоянию на 31 декабря 2022 г.)." }],
        density: [ { bold: "Плотность населения:", text: " 188,8 человек/км²." }],
        code: [ { bold: "Официальный код района:", text: " 05 9 66." } ],
        description: [
            { text: "Район Ольпе входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
        ],
        com: [ { text: "Район подразделяется на " }, { bold: "7 общин:" } ],
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
        id: 1_5,
        name: "Унна",
        path: "unna",
        districtPath: "arnsberg",
        center: [{ bold: "Центр района:", text: " город Унна." } ],
        area: [{ bold: "Площадь:", text: " 543,2 км² (по состоянию на 31 декабря 2023 г.)." } ],
        population: [{ bold: "Население:", text: " 396 283 человек (по состоянию на 31 декабря 2023 г.)." } ],
        density: [{ bold: "Плотность населения:", text: " 730,3 человек/км²." }],
        code: [{ bold: "Официальный код района:", text: " 05 9 78." }],
        description: [
            { text: "Район Унна входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
        ],
        com: [{ text: "Район подразделяется на " }, { bold: "10 общин:" }],
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
        id: 1_6,
        name: "Хохзауэрланд",
        path: "hochsauerland",
        districtPath: "arnsberg",
        center: [{ bold: "Центр района:", text: " город Мешеде." }],
        area: [{ bold: "Площадь:", text: " 1 960,2 км² (по состоянию на 31 декабря 2023 г.)." }],
        population: [{ bold: "Население:", text: " 261 193 человека (по состоянию на 31 декабря 2023 г.)." }],
        density: [{ bold: "Плотность населения:", text: " 133,2 человека/км²." }],
        code: [{ bold: "Официальный код района:", text: " 05 9 58." }],
        description: [
            { text: "Район Хохзауэрланд входит в землю Северный Рейн-Вестфалия, подчинён административному округу Арнсберг." }
        ],
        com: [{ text: "Район подразделяется на " }, { bold: "12 общин:" }],
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
        id: 1_7,
        name: "Эннепе-Рур",
        path: "ennepe_ruhr",
        districtPath: "arnsberg",
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
    },
    {
        id: 4_1,
        name: "Аахен",
        path: "aachen",
        districtPath: "koln",
        center: [{ bold: "Центр района:", text: " город Аахен." }],
        area: [{ bold: "Площадь:", text: " 707,15 кв. км (по состоянию на 2023 г.)" }],
        population: [{ bold: "Население:", text: " 564 444 чел. (по состоянию на 2023 г.)" }],
        density: [{ bold: "Плотность населения:", text: " 800 человек/кв.км (2023 г.)" }],
        code: [{ bold: "Официальный код района:", text: " 05 3 34." }],
        description: [
            { text: "Район Аахен входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
        ],
        com: [{ text: "Район подразделяется на " }, { bold: "10 общин:" }],
        communities: [
            { id: 1, name: "Альсдорф", hasInfo: false },
            { id: 2, name: "Аахен", hasInfo: false },
            { id: 3, name: "Бесвайлер", hasInfo: false },
            { id: 4, name: "Вюрцелен", hasInfo: false },
            { id: 5, name: "Циммеррат", hasInfo: false },
            { id: 6, name: "Моншау", hasInfo: true, path: 'monschau' },
            { id: 7, name: "Рётген", hasInfo: false },
            { id: 8, name: "Херцогенрат", hasInfo: false },
            { id: 9, name: "Штольберг", hasInfo: false },
            { id: 10, name: "Эшвайлер", hasInfo: false }
        ],
        gerb: "Germany/nrw/koln/Aachen/gerb.png"
    },
    {
        id: 4_2,
        name: "Дюрен",
        path: "duren",
        districtPath: "koln",
        center: [{ bold: "Центр района:", text: " город Дюрен." }],
        area: [{ bold: "Площадь:", text: " 941,15 кв. км (по состоянию на 2023 г.)" }],
        population: [{ bold: "Население:", text: " 278 462 чел. (по состоянию на 2023 г.)" }],
        density: [{ bold: "Плотность населения:", text: " 300 человек/кв.км (2023 г.)" }],
        code: [{ bold: "Официальный код района:", text: " 05 3 58." }],
        description: [
            { text: "Район Дюрен входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
        ],
        com: [{ text: "Район подразделяется на " }, { bold: "15 общин:" }],
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
        id: 4_3,
        name: "Обербергиш",
        path: "oberbergischer",
        districtPath: "koln",
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
        id: 4_4,
        name: "Ойскирхен",
        path: "euskirchen",
        districtPath: "koln",
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
        id: 4_5,
        name: "Рейн-Зиг",
        path: "rhein_sieg",
        districtPath: "koln",
        center: [{ bold: "Центр района:", text: " город Зигбург (Siegburg)." }],
        area: [{ bold: "Площадь:", text: " 1 153,00 кв. км (по состоянию на 2023 г.)" }],
        population: [{ bold: "Население:", text: " ≈ 620 000 чел. (по состоянию на 2023 г.)" }],
        density: [{ bold: "Плотность населения:", text: " около 538 человек/кв.км (2023 г.)" }],
        code: [{ bold: "Официальный код района:", text: " 05 3 82." }],
        description: [
            { text: "Район Рейн-Зиг входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }
        ],
        com: [{ text: "Район подразделяется на " }, { bold: "19 общин:" }],
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
        id: 4_6,
        name: "Рейн-Эрфт",
        path: "rhein_erft",
        districtPath: "koln",
        center: [{ bold: "Центр района:", text: " город Бергхайм (Bergheim)." }],
        area: [{ bold: "Площадь:", text: " 704,70 кв. км (по состоянию на 2023 г.)" }],
        population: [{ bold: "Население:", text: " 480 989 чел. (по состоянию на 2023 г.)" }],
        density: [{ bold: "Плотность населения:", text: " около 679 человек/кв.км (2022–2023 гг.)" }],
        code: [{ bold: "Официальный код района:", text: " 05 3 62." }],
        description: [{ text: "Район Рейн-Эрфт входит в землю Северный Рейн-Вестфалия, подчинён административному округу Кёльн." }],
        com: [{ text: "Район подразделяется на " }, { bold: "10 общин:" }],
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
        id: 4_7,
        name: "Рейниш-Бергиш",
        path: "rheinisch_bergischer",
        districtPath: "koln",
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
        id: 4_8,
        name: "Хайнсберг",
        path: "heinsberg",
        districtPath: "koln",
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
]
export default datas