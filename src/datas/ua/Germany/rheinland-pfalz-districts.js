const datas = [
    { id: 0, name: "Місто обласного значеення", path: "city" },
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
        path: "mayen_koblenz",
        country: "Германия", regionsPath: "rheinland-pfalz",
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
        }
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

export default datas