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
        },
        gerb: "Germany/rheinland-pfalz/mayen-koblenz/gerb.png"
    },
    { id: 16, name: 'Нойвід', hasInfo: false, path: "neuwied" },
    { id: 17, name: 'Райн-Гунсрюк', hasInfo: false, path: "rhein-hunsrueck-kreis" },
    { id: 18, name: 'Райн-Лан', hasInfo: false, path: "rhein-lahn-kreis" },
    { id: 19, name: 'Райн-Пфальц', hasInfo: false, path: "rhein-pfalz-kreis" },
    { id: 20, name: 'Південна Вайнштрассе', hasInfo: false, path: "suedliche-weinstrasse" },
    { id: 21, name: 'Південно-Західний Пфальц', hasInfo: false, path: "suedwestpfalz" },
    {
        id: 22,
        name: 'Трір-Саарбург',
        title: "Район Трір-Саарбург",
        hasInfo: true,
        path: "trier_saarburg",
        country: "Німеччина", regionsPath: "rheinland-pfalz",
        desc: {
            history: [
                { text: 'Район Трір-Саарбург (Landkreis Trier-Saarburg) розташований на південному заході Німеччини в землі Рейнланд-Пфальц, на кордоні з Люксембургом. Територія району лежить у долинах річок Мозель, Саар і Рувер і вважається одним із найстаріших культурних регіонів країни.' },
                { text: 'Ще в античні часи ці землі входили до складу Римської імперії. Поруч розташоване місто Трір – одне з найдавніших міст Німеччини, засноване римлянами у I столітті до н.е. як Augusta Treverorum. Регіон відігравав важливу роль як торговельний та адміністративний центр Римської Галлії.' },
                { text: 'У середні віки більша частина території належала Курфюршеству Трір – одному з найважливіших церковних князівств Священної Римської імперії. Від того періоду збереглося багато замків, монастирів та історичних виноробних сіл у долині Мозеля.' },
                { text: 'Наприкінці XVIII століття регіон був зайнятий Францією під час революційних воєн і на деякий час увійшов до складу Французької республіки. Після Віденського конгресу 1815 року територія перейшла до Пруссії і стала частиною Рейнської провінції.' },
                { text: 'Сучасний район Трір-Саарбург був утворений у 1969 році в ході адміністративної реформи шляхом об’єднання колишніх районів Трір і Саарбург.' },
                { bold: 'Адміністративний центр:', text: ' місто Трір, проте воно не входить до складу району і має статус самостійного міста окружного підпорядкування (kreisfreie Stadt).' }
            ],
            area: [
                { bold: 'Площа:', text: ' близько 1 102 км².' },
                { bold: 'Географія:', text: ' район розташований у південно-західній частині землі Рейнланд-Пфальц. Ландшафт формують долини річок Мозель, Саар і Рувер, а також височини Хунсрюку, Сааргау та Південного Ейфелю. Регіон відомий виноробними районами вздовж Мозеля та Саара.' }
            ],
            population: [
                { bold: 'Населення:', text: ' близько 149 000–154 000 осіб (2023–2025).' },
                { bold: 'Щільність населення:', text: ' приблизно 135–140 осіб/км².' }
            ],
            districts: [
                { bold: 'Об’єднані муніципалітети (Verbandsgemeinden):', text: 'Гермескайль (Hermeskeil), Конц (Konz), Рувер (Ruwer), Саарбург-Келль (Saarburg-Kell), Швайх-ан-дер-Рьомішен-Вайнштрассе (Schweich an der Römischen Weinstraße), Трір-Ланд (Trier-Land).' }
            ],
            cities: [
                { bold: 'Найбільші міста району:', text: 'Саарбург (Saarburg), Конц (Konz), Швайх (Schweich), Гермескайль (Hermeskeil).' },
                { bold: 'Місто, що не входить до району (kreisfreie Stadt):', text: 'Трір (Trier).' }
            ]
        },
        gerb: "Germany/rheinland-pfalz/trier_saarburg/gerb.png"
    },
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