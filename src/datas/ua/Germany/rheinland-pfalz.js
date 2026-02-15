const datas = {
    id: 11,
    name: 'Рейнланд-Пфальц',
    hasInfo: true,
    path: 'rheinland-pfalz',
    country: "Німеччина",
    desc: {
        capital: [
            { bold: 'Столиця:' },
            { text: ' Майнц' }
        ],
        population: [
            { bold: 'Населення (2024):' },
            { text: ' Населення: близько 4,1 млн осіб. Іноземців — близько 500 тис. осіб.' }
        ],
        area: [
            { bold: 'Площа:' },
            { text: ' 19 854 км². Щільність населення — близько 206 осіб на 1 км².' }
        ],
        geography: [
            { bold: 'Географія:' },
            { text: ' Рейнланд-Пфальц розташована на заході Німеччини. Межує з Бельгією (133 км), Люксембургом (136 км), Францією (136 км), а також із федеральними землями Північний Рейн-Вестфалія (307 км), Саар (91 км), Гессен (203 км) та Рейнланд-Пфальц (утворює внутрішні межі між округами).' },
            { text: ' Земля охоплює кілька великих ландшафтних регіонів: Рейнський грабен (Rheingraben), Гунсрюк (Hunsrück), Вестервальд (Westerwald), Айфель (Eifel) і частину Пфальцького лісу (Pfälzerwald). Ліси займають близько 42% території.' },
        ],
        history: [
            { bold: 'Походження назви:' },
            { text: ' Назва Rheinland-Pfalz з’явилася після Другої світової війни у 1946 році, коли британська та французька окупаційні зони об’єднали південну частину колишньої Рейнської провінції Пруссії, південь Рейнської області, а також регіон Пфальц.' }
        ],
        economy: [
            { bold: 'Економіка:' },
            { text: ' Земля Рейнланд-Пфальц відома сільським господарством (виноробство — один із найбільших регіонів Німеччини), хімічною промисловістю, машинобудуванням та енергетикою. Туризм і винні маршрути займають важливе місце в економіці.' },
        ],
        cities: [
            { bold: 'Великі міста:' },
            { text: ' Майнц, Кобленц, Трір, Людвігсгафен, Кайзерслаутерн, Бад-Кройцнах, Вормс, Майнц-Кастель, Зайль.' }
        ],
        rivers: [
            { bold: 'Головні річки:' },
            { text: ' Рейн, Мозель, Нае, Лан, Зайль.' }
        ],
        tourism: [
            { bold: 'Туризм і відпочинок:' },
            { text: ' Рейнланд-Пфальц відома історичними містами, римськими пам’ятками, замками, виноградниками та природними парками. Популярні маршрути вздовж Рейну та Мозеля, відвідування Тріра, Кобленца, Майнца та численних замків.' }
        ]
    },
    symbols: {
        title: "Геральдика",
        items: [
            {
                bold: "Герб:",
                text: " На гербі Рейнланд-Пфальц поєднані символи історичних територій: червоний лев на білому тлі (Пфальц), срібний хрест на червоному (Майнц), золотий орел на чорному (Рейнська провінція).",
                img: "Germany/rheinland-pfalz/gerb.png"
            },
            {
                bold: "Прапор:",
                text: " Прапор Рейнланд-Пфальц складається з трьох горизонтальних смуг: чорної, червоної та золотої.",
                img: "Germany/rheinland-pfalz/flag.png"
            }
        ]
    },
    briefHistory: {
        title: 'Коротка історія',
        items: [
            { text: "Територія сучасної землі Рейнланд-Пфальц має багату й різноманітну історію. Ще за часів Стародавнього Риму тут існували великі поселення, такі як Трір — одне з найдавніших міст Німеччини. У Середньовіччі регіон був поділений між різними князівствами, єпископствами та імперськими містами. Важливу роль відігравали архієпископства Майнца і Тріра, а також Пфальцькі графства." },
            { text: "У XVIII–XIX століттях землі часто змінювали приналежність: після наполеонівських воєн регіон увійшов до складу Рейнської провінції Пруссії та інших німецьких держав. Економіка розвивалася навколо сільського господарства, виноробства та ремесел, а міста ставали важливими торговельними центрами." },
            { text: "Після Першої світової війни частина території перебувала під французькою адміністрацією. Під час Другої світової війни регіон зазнав значних руйнувань, однак багато історичних пам’яток було відновлено після її завершення." },
            { text: "У 1946 році під керівництвом французької окупаційної адміністрації була створена земля Рейнланд-Пфальц, що об’єднала південну частину Рейнської провінції, Пфальц і деякі райони колишньої Люксембурзької області. У 1947 році був ухвалений перший земельний закон, який визначив адміністративний устрій." },
            { text: "З моменту утворення Рейнланд-Пфальц стала важливим культурним, економічним і політичним регіоном Німеччини, зберігши багату історичну спадщину та унікальні природні ландшафти. Сьогодні Рейнланд-Пфальц відома своїми замками, виноградниками, римськими пам’ятками та історичними містами." },
        ]
    },
    discriptRegions: [
        {
            title: "Адміністративні округи Рейнланд-Пфальц",
            items: [
                { id: 1, name: 'Арвайлер', hasInfo: false, path: "ahrweiler" },
                { id: 2, name: 'Альтенкірхен', hasInfo: false, path: "altenkirchen" },
                { id: 3, name: 'Альцай-Вормс', hasInfo: false, path: "alzey-worms" },
                { id: 4, name: 'Бад-Дюркгайм', hasInfo: false, path: "bad-duerkheim" },
                { id: 5, name: 'Бад-Кройцнах', hasInfo: false, path: "bad-kreuznach" },
                { id: 6, name: 'Бернкастель-Віттліх', hasInfo: false, path: "bernkastel-wittlich" },
                { id: 7, name: 'Біркенфельд', hasInfo: false, path: "birkenfeld" },
                { id: 8, name: 'Кохем-Целль', hasInfo: false, path: "cochem-zell" },
                { id: 9, name: 'Доннерсберг', hasInfo: false, path: "donnersbergkreis" },
                { id: 10, name: 'Айфелькрайс Бітбург-Прюм', hasInfo: false, path: "eifelkreis-bitburg-pruem" },
                { id: 11, name: 'Гермерсгайм', hasInfo: false, path: "germersheim" },
                { id: 12, name: 'Кайзерслаутерн', hasInfo: false, path: "kaiserslautern" },
                { id: 13, name: 'Кузель', hasInfo: false, path: "kusel" },
                { id: 14, name: 'Майнц-Бінген', hasInfo: false, path: "mainz-bingen" },
                {
                    id: 15,
                    name: 'Маєн-Кобленц',
                    title: "Район Маєн-Кобленц",
                    hasInfo: true,
                    path: "mayen-koblenz",
                    desc: {
                        history: [
                            { text: 'Район Маєн-Кобленц (Landkreis Mayen-Koblenz) – адміністративний район (Kreis) у Німеччині, входить до землі Рейнланд-Пфальц. Він розташований у північній частині землі вздовж середніх течій річок Рейн і Мозель.' },
                            { text: 'Заснований у 1970 році шляхом об’єднання районів Маєн і Кобленц.' },
                            { bold: 'Адміністративний центр:', text: 'місто Кобленц, яке не входить до складу району і управляється самостійно на рівні району (місто окружного підпорядкування).' }
                        ],
                        area: [
                            { bold: 'Площа:', text: ' близько 817 км².' },
                            { bold: 'Географія:', text: ' район межує з іншими районами землі Рейнланд Пфальц – Арувайлер, Нойвід, Вестервальд, Рейн Лан, Рейн Хунсрюк, Кохем Целль і Вулканайфель? а також оточує місто Кобленц. На території – підвищення Айфеля, частина мозельської долини та Рейнська долина.' }
                        ],
                        population: [
                            { bold: 'Населення:', text: ' приблизно 217 000 осіб (2024-2025).' },
                            { bold: 'Щільність населення:', text: ' близько 260-270 осіб/км².' }
                        ],
                        districts: [
                            { bold: 'Округи-райони (Kreise):' },
                            { text: 'Маєн (Mayen), Андерах (Andernach), Бендорф (Bendorf), Мендіг (Mendig), Пелленц (Pellenz), Майфельд (Maifeld), Фордерейфель (Vordereifel), Рейн-Мозель (Rhein-Mosel), Вайсентхурм (Weißenthurm)' }
                        ],
                        cities: [
                            { bold: 'Міста, що не належать районам (kreisfreie Städte):' },
                            { text: 'Кобленц (Koblenz)' }
                        ]
                    },
                    subRegion: [
                        {
                            id: 0,
                            name: "Міста окружного підпорядкування району Маєн-Кобленц",
                            parentDistrict: "Маєн-Кобленц",
                            center: [ { text: "Три міста входять до району Маєн-Кобленц, але управляються самостійно на рівні району (міста окружного підпорядкування)." },                            ],
                            communities: [
                                { id: 1, name: "Маєн", hasInfo: false },
                                { id: 2, name: "Андерах", hasInfo: false },
                                { id: 3, name: "Бендорф", hasInfo: false }
                            ],

                        },
                        {
                            id: 1,
                            name: "Мендіг",
                            fullName: "Mendig",
                            parentDistrict: "Маєн-Кобленц",
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
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Mendig/gerb.gif"
                        },
                        {
                            id: 2,
                            name: "Пелленц",
                            fullName: "Pellenz",
                            parentDistrict: "Маєн-Кобленц",
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
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Pellenz/gerb.gif"
                        },
                        {
                            id: 3,
                            name: "Валлендар",
                            fullName: "Vallendar",
                            parentDistrict: "Маєн-Кобленц",
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
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif"
                        },
                        {
                            id: 4,
                            name: "Вайсентурм",
                            fullName: "Weißenthurm",
                            parentDistrict: "Маєн-Кобленц",
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
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vallendar/gerb.gif"
                        },
                        {
                            id: 5,
                            name: "Майфельд",
                            fullName: "Maifeld",
                            parentDistrict: "Маєн-Кобленц",
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
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Maifeld/gerb.gif"
                        },
                        {
                            id: 6,
                            name: "Райн-Мозель",
                            fullName: "Rhein-Mosel",
                            parentDistrict: "Маєн-Кобленц",
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
                            ],
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Rhein-Mosel/gerb.gif"
                        },
                        {
                            id: 7,
                            name: "Фордер-айфель",
                            fullName: "Vordereifel",
                            parentDistrict: "Майєн-Кобленц",
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
                            gerb: "Germany/rheinland-pfalz/mayen-koblenz/Vordereifel/gerb.gif"
                        }
                    ]
                },
                { id: 16, name: 'Нойвід', hasInfo: false, path: "neuwied" },
                { id: 17, name: 'Райн-Гунсрюк', hasInfo: false, path: "rhein-hunsrueck-kreis" },
                { id: 18, name: 'Райн-Лан', hasInfo: false, path: "rhein-lahn-kreis" },
                { id: 19, name: 'Райн-Пфальц', hasInfo: false, path: "rhein-pfalz-kreis" },
                { id: 20, name: 'Південна Вайнштрассе', hasInfo: false, path: "suedliche-weinstrasse" },
                { id: 21, name: 'Південно-Західний Пфальц', hasInfo: false, path: "suedwestpfalz" },
                { id: 22, name: 'Трір-Саарбург', hasInfo: false, path: "trier-saarburg" },
                { id: 23, name: 'Вулканайфель', hasInfo: false, path: "vulkaneifel" },
                { id: 24, name: 'Вестервальд', hasInfo: false, path: "westerwaldkreis" },
            ]
        },
        {
            title: "Міста з особливим статусом у Рейнланд-Пфальц",
            items: [
                { id: 25, name: 'Майнц', hasInfo: false, path: "mainz" },
                { id: 26, name: 'Кобленц', hasInfo: false, path: "koblenz" },
                { id: 27, name: 'Людвігсгафен', hasInfo: false, path: "ludwigshafen" },
                { id: 28, name: 'Трір', hasInfo: true, path: "trier" },
                { id: 29, name: 'Кайзерслаутерн', hasInfo: false, path: "kaiserslautern-city" },
                { id: 30, name: 'Вормс', hasInfo: false, path: "worms" },
                { id: 31, name: 'Шпаєр', hasInfo: false, path: "speyer" },
                { id: 32, name: 'Франкенталь', hasInfo: false, path: "frankenthal" },
                { id: 33, name: 'Ландау-ін-дер-Пфальц', hasInfo: false, path: "landau" },
                { id: 34, name: 'Нойштадт', hasInfo: false, path: "neustadt" },
                { id: 35, name: 'Пірмазенс', hasInfo: false, path: "pirmasens" },
                { id: 36, name: 'Цвайбрюккен', hasInfo: false, path: "zweibruecken" }
            ]
        }
    ],
    meta: {
        title: "Рейнланд-Пфальц — інформація про регіон",
        description: "Рейнланд-Пфальц: міста, округи, культура та пам’ятки.",
        ogTitle: "Рейнланд-Пфальц — інформація про регіон і округи",
        ogDescription: "Детальна інформація про Рейнланд-Пфальц: міста, округи, історія та цікаві факти.",
        ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
    }
}

export default datas