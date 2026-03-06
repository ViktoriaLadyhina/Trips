const datas = [
    { id: 0, name: "Город обласного значения", path: "city" },

    { id: 1, name: 'Арвайлер', hasInfo: false, path: "ahrweiler" },
    { id: 2, name: 'Альтенкирхен', hasInfo: false, path: "altenkirchen" },
    { id: 3, name: 'Альцай-Вормс', hasInfo: false, path: "alzey_worms" },
    { id: 4, name: 'Бад-Дюркхайм', hasInfo: false, path: "bad_duerkheim" },
    { id: 5, name: 'Бад-Кройцнах', hasInfo: false, path: "bad_kreuznach" },
    { id: 6, name: 'Бернкастель-Виттлих', hasInfo: false, path: "bernkastel_wittlich" },
    { id: 7, name: 'Биркенфельд', hasInfo: false, path: "birkenfeld" },
    { id: 8, name: 'Кохем-Целль', hasInfo: false, path: "cochem_zell" },
    { id: 9, name: 'Доннерсберг', hasInfo: false, path: "donnersbergkreis" },
    { id: 10, name: 'Айфелькрейс Битбург-Прюм', hasInfo: false, path: "eifelkreis_bitburg_pruem" },
    { id: 11, name: 'Гермерсхайм', hasInfo: false, path: "germersheim" },
    { id: 12, name: 'Кайзерслаутерн', hasInfo: false, path: "kaiserslautern" },
    { id: 13, name: 'Кузель', hasInfo: false, path: "kusel" },
    { id: 14, name: 'Майнц-Бинген', hasInfo: false, path: "mainz_bingen" },
    {
        id: 15,
        name: 'Майен-Кобленц',
        title: "Район Майен‑Кобленц",
        hasInfo: true,
        path: "mayen_koblenz",
        country: "Германия", regionsPath: "rheinland-pfalz",
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
            districts: [{ bold: 'Округа-районы (Kreise):', text: 'Майен (Mayen), Андерах (Andernach), Бендорф (Bendorf), Мандиг (Mendig), Пелленц (Pellenz), Майфельд (Maifeld), Вордерайфель (Vordereifel), Рейн-Мозель (Rhein-Mosel), Вайсентхурм (Weißenthurm)' }], cities: [{ bold: 'Города, не принадлежащие районам (kreisfreie Städte):', text: 'Кобленц (Koblenz)' },]
        }
    },
    { id: 16, name: 'Нойвид', hasInfo: false, path: "neuwied" },
    { id: 17, name: 'Райн-Хунсрюк', hasInfo: false, path: "rhein_hunsrueck_kreis" },
    { id: 18, name: 'Райн-Лан', hasInfo: false, path: "rhein_lahn_kreis" },
    { id: 19, name: 'Райн-Пфальц', hasInfo: false, path: "rhein_pfalz_kreis" },
    { id: 20, name: 'Южный Вайнштрассе', hasInfo: false, path: "suedliche_weinstrasse" },
    { id: 21, name: 'Юго-западный Пфальц', hasInfo: false, path: "suedwestpfalz" },
    { id: 22, name: 'Трир-Саарбург', hasInfo: false, path: "trier_saarburg" },
    { id: 23, name: 'Вулканайфель', hasInfo: false, path: "vulkaneifel" },
    { id: 24, name: 'Вестервальд', hasInfo: false, path: "westerwaldkreis" },
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

export default datas