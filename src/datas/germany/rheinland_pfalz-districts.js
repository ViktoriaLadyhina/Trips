const datas = [
    {
        id: 0,
        path: "city",
        translations: {
            ru: { name: "Город областного значения" },
            uk: { name: "Місто облатного значення" },
            de: { name: "Stadt von regionaler Bedeutung" }
        }
    },
    {
        id: 1,
        path: "ahrweiler", // 100
    },
    {
        id: 2,
        path: "altenkirchen", // 101
    },
    {
        id: 3,
        path: "alzey_worms", // 102
    },
    {
        id: 4,
        path: "bad_duerkheim", // 103
    },
    {
        id: 5,
        path: "bad_kreuznach", // 104
    },
    {
        id: 6,
        path: "bernkastel_wittlich", // 105
    },
    {
        id: 7,
        path: "birkenfeld", // 106
    },
    {
        id: 8,
        path: "cochem_zell", // 107
    },
    {
        id: 9,
        path: "donnersbergkreis", // 108
    },
    {
        id: 10,
        path: "eifelkreis_bitburg_pruem", // 109
    },
    {
        id: 11,
        path: "germersheim", // 110
    },
    {
        id: 12,
        path: "kaiserslautern", // 111
    },
    {
        id: 13,
        path: "kusel", // 112
    },
    {
        id: 14,
        path: "mainz_bingen", // 113
    },
    {
        id: 15,
        hasInfo: true,
        path: "mayen_koblenz", // 114
        gerb: "Germany/rheinland-pfalz/mayen-koblenz/gerb.png",
    },
    {
        id: 16,
        hasInfo: false,
        path: "neuwied", // 115
        translations: {
            ru: { name: 'Нойвид' },
            uk: { name: 'Нойвід' },
            de: { name: 'Neuwied' }
        }
    },
    {
        id: 17,
        hasInfo: false,
        path: "rhein_hunsrueck_kreis", // 116
        translations: {
            ru: { name: 'Райн-Хунсрюк' },
            uk: { name: 'Райн-Гунсрюк' },
            de: { name: 'Rhein-Hunsrück-Kreis' }
        }
    },
    {
        id: 18,
        hasInfo: false,
        path: "rhein_lahn_kreis", // 117
        translations: {
            ru: { name: 'Райн-Лан' },
            uk: { name: 'Райн-Лан' },
            de: { name: 'Rhein-Lahn-Kreis' }
        }
    },
    {
        id: 19,
        hasInfo: false,
        path: "rhein_pfalz_kreis", // 118
        translations: {
            ru: { name: 'Райн-Пфальц' },
            uk: { name: 'Райн-Пфальц' },
            de: { name: 'Rhein-Pfalz-Kreis' }
        }
    },
    {
        id: 20,
        hasInfo: false,
        path: "suedliche_weinstrasse", // 119
        translations: {
            ru: { name: 'Южный Вайнштрассе' },
            uk: { name: 'Південна Вайнштрассе' },
            de: { name: 'Südliche Weinstrasse' }
        }
    },
    {
        id: 21,
        hasInfo: false,
        path: "suedwestpfalz", // 120
        translations: {
            ru: { name: 'Юго-западный Пфальц' },
            uk: { name: 'Південно-Західний Пфальц' },
            de: { name: 'Südwestpfalz' }
        }
    },
        // 4 capital
// 5 geography
// 6 area
// 7 population
// 8 districts
// 9 cities
    {
        id: 22,
        hasInfo: true,
        path: "trier_saarburg", // 121
        gerb: "Germany/rheinland-pfalz/trier_saarburg/gerb.png",
    },
    { id: 23, 
        hasInfo: false, 
        path: "vulkaneifel", // 122
        translations: {
            ru: { name: 'Вулканайфель' },
            uk: { name: 'Вулканайфель' },
            de: { name: 'Vulkaneifel' }
        }
    },
    { id: 24, 
        hasInfo: false, 
        path: "westerwaldkreis", // 123
        translations: {
            ru: { name: 'Вестервальд' },
            uk: { name: 'Вестервальд' },
            de: { name: 'Westerwaldkreis' }
        }
    },
    { id: 25, 
        hasInfo: false, 
        path: "mainz", // 88
        translations: {
            ru: { name: 'Майнц' },
            uk: { name: 'Майнц' },
            de: { name: 'Mainz' }
        }
    },
    { id: 26, 
        hasInfo: false, 
        path: "koblenz", // 89
        translations: {
            ru: { name: 'Кобленц' },
            uk: { name: 'Кобленц' },
            de: { name: 'Koblenz' }
        }
    },
    { id: 27, 
        hasInfo: false, 
        path: "ludwigshafen", // 90
        translations: {
            ru: { name: 'Людвигсхафен' },
            uk: { name: 'Людвігсгафен' },
            de: { name: 'Ludwigshafen' }
        }
    },
    { id: 28, 
        hasInfo: true, 
        path: "trier", // 91
        translations: {
            ru: { name: 'Трир' },
            uk: { name: 'Трір' },
            de: { name: 'Trier' }
        }
    },
    { id: 29, 
        hasInfo: false, 
        path: "kaiserslautern_city", // 92
        translations: {
            ru: { name: 'Кайзерслаутерн' },
            uk: { name: 'Кайзерслаутерн' },
            de: { name: 'Kaiserslautern' }
        }
    },
    { id: 30,         
        hasInfo: false, 
        path: "worms", // 93
        translations: {
            ru: { name: 'Вормс' },
            uk: { name: 'Вормс' },
            de: { name: 'Worms' }
        }
     },
    { id: 31, 
        hasInfo: false, 
        path: "speyer", // 94
        translations: {
            ru: { name: 'Шпайер' },
            uk: { name: 'Шпаєр' },
            de: { name: 'Speyer' }
        }
     },
    { id: 32, 
        hasInfo: false, 
        path: "frankenthal", // 95
        translations: {
            ru: { name: 'Франкенталь' },
            uk: { name: 'Франкенталь' },
            de: { name: 'Frankenthal' }
        }
    },
    { id: 33, 
        hasInfo: false, 
        path: "landau", // 96
        translations: {
            ru: { name: 'Ландау-ин-дер-Пфальц' },
            uk: { name: 'Ландау-ин-дер-Пфальц' },
            de: { name: 'Landau in der Pfalz' }
        }
    },
    { id: 34, 
        hasInfo: false, 
        path: "neustadt", // 97
        translations: {
            ru: { name: 'Нойштадт' },
            uk: { name: 'Нойштадт' },
            de: { name: 'Neustadt an der Weinstraße' }
        }
    },
    { id: 35, 
        hasInfo: false, 
        path: "pirmasens", // 98
        translations: {
            ru: { name: 'Пирмазенс' },
            uk: { name: 'Пірмазенс' },
            de: { name: 'Pirmasens' }
        }
    },
    { id: 36, 
        hasInfo: false, 
        path: "zweibruecken", // 99
        translations: {
            ru: { name: 'Цвайбрюккен' },
            uk: { name: 'Цвайбрюккен' },
            de: { name: 'Zweibrücken' }
        }
     }
]

export default datas