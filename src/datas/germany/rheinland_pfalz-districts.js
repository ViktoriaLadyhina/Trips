const datas = [
    {
        id: 0,
        path: "city",
        translations: {
            ru: { name: "Город областного значения" },
            ua: { name: "Місто облатного значення" },
            de: { name: "Stadt von regionaler Bedeutung" }
        }
    },
    {
        id: 1,
        hasInfo: false,
        path: "ahrweiler",
        translations: {
            ru: { name: 'Арвайлер' },
            ua: { name: 'Арвайлер' },
            de: { name: 'Ahrweiler' }
        }
    },
    {
        id: 2,
        hasInfo: false,
        path: "altenkirchen",
        translations: {
            ru: { name: 'Альтенкирхен' },
            ua: { name: 'Альтенкірхен' },
            de: { name: 'Altenkirchen' }
        }
    },
    {
        id: 3,
        hasInfo: false,
        path: "alzey_worms",
        translations: {
            ru: { name: 'Альцай-Вормс' },
            ua: { name: 'Альцай-Вормс' },
            de: { name: 'Alzey-Worms' }
        }
    },
    {
        id: 4,
        hasInfo: false,
        path: "bad_duerkheim",
        translations: {
            ru: { name: 'Бад-Дюркхайм' },
            ua: { name: 'Бад-Дюркгайм' },
            de: { name: 'Bad Dürkheim' }
        }
    },
    {
        id: 5,
        hasInfo: false,
        path: "bad_kreuznach",
        translations: {
            ru: { name: 'Бад-Кройцнах' },
            ua: { name: 'Бад-Кройцнах' },
            de: { name: 'Bad Kreuznach' }
        }
    },
    {
        id: 6,
        hasInfo: false,
        path: "bernkastel_wittlich",
        translations: {
            ru: { name: 'Бернкастель-Виттлих' },
            ua: { name: 'Бернкастель-Віттліх' },
            de: { name: 'Bernkastel-Wittlich' }
        }
    },
    {
        id: 7,
        hasInfo: false,
        path: "birkenfeld",
        translations: {
            ru: { name: 'Биркенфельд' },
            ua: { name: 'Біркенфельд' },
            de: { name: 'Birkenfeld' }
        }
    },
    {
        id: 8,
        hasInfo: false,
        path: "cochem_zell",
        translations: {
            ru: { name: 'Кохем-Целль' },
            ua: { name: 'Кохем-Целль' },
            de: { name: 'Cochem-Zell' }
        }
    },
    {
        id: 9,
        hasInfo: false,
        path: "donnersbergkreis",
        translations: {
            ru: { name: 'Доннерсберг' },
            ua: { name: 'Доннерсберг' },
            de: { name: 'Donnersbergkreis' }
        }
    },
    {
        id: 10,
        hasInfo: false,
        path: "eifelkreis_bitburg_pruem",
        translations: {
            ru: { name: 'Айфелькрайс Бітбург-Прюм' },
            ua: { name: 'Айфелькрайс Бітбург-Прюм' },
            de: { name: 'Eifelkreis Bitburg-Prüm' }
        }
    },
    {
        id: 11,
        hasInfo: false,
        path: "germersheim",
        translations: {
            ru: { name: 'Гермерсхайм' },
            ua: { name: 'Гермерсгайм' },
            de: { name: 'Germersheim' }
        }
    },
    {
        id: 12,
        hasInfo: false,
        path: "kaiserslautern",
        translations: {
            ru: { name: 'Кайзерслаутерн' },
            ua: { name: 'Кайзерслаутерн' },
            de: { name: 'Kaiserslautern' }
        }
    },
    {
        id: 13,
        hasInfo: false,
        path: "kusel",
        translations: {
            ru: { name: 'Кузель' },
            ua: { name: 'Кузель' },
            de: { name: 'Kusel' }
        }
    },
    {
        id: 14,
        hasInfo: false,
        path: "mainz_bingen",
        translations: {
            ru: { name: 'Майнц-Бинген' },
            ua: { name: 'Майнц-Бінген' },
            de: { name: 'Mainz-Bingen' }
        }
    },
    {
        id: 15,
        hasInfo: true,
        path: "mayen_koblenz",
        regionsPath: "rheinland_pfalz",
        gerb: "Germany/rheinland-pfalz/mayen-koblenz/gerb.png",
        translations: {
            ru: {
                name: 'Майен-Кобленц',
                title: "Район Майен‑Кобленц",
                countryName: "Германия", regionName: "Рейнланд-Пфальц",
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
                },
            },
            ua: {
                name: 'Маєн-Кобленц',
                title: "Район Маєн-Кобленц",
                countryName: "Німеччина", regionName: "Рейнланд-Пфальц",
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
            },
            de: {
                name: 'Mayen-Koblenz',
                title: "Landkreis Mayen-Koblenz",
                countryName: "Deutschland", regionName: "Rheinland-Pfalz",
                desc: {
                    history: [
                        { text: 'Der Landkreis Mayen-Koblenz (Landkreis Mayen-Koblenz) ist ein Verwaltungsbezirk (Kreis) in Deutschland und gehört zum Bundesland Rheinland-Pfalz. Er liegt im nördlichen Teil des Landes entlang der mittleren Läufe der Flüsse Rhein und Mosel.' },
                        { text: 'Gegründet im Jahr 1970 durch Zusammenschluss der Kreise Mayen und Koblenz.' },
                        { bold: 'Verwaltungszentrum:', text: 'die Stadt Koblenz, die nicht zum Landkreis gehört und auf Kreisebene selbstständig verwaltet wird (kreisfreie Stadt).' }
                    ],
                    area: [
                        { bold: 'Fläche:', text: ' etwa 817 km².' },
                        { bold: 'Geographie:', text: ' der Landkreis grenzt an andere Landkreise von Rheinland Pfalz – Ahrweiler, Neuwied, Westerwald, Rhein Lahn, Rhein Hunsrück, Cochem Zell und Vulkaneifel? sowie umschließt die Stadt Koblenz. Auf dem Gebiet – Höhen der Eifel, ein Teil des Moseltals und das Rheintal.' }
                    ],
                    population: [
                        { bold: 'Bevölkerung:', text: ' etwa 217 000 Einwohner (2024-2025).' },
                        { bold: 'Bevölkerungsdichte:', text: ' etwa 260-270 Einwohner/km².' }
                    ],
                    districts: [
                        { bold: 'Kreise-Bezirke (Kreise):' },
                        { text: 'Mayen (Mayen), Andernach (Andernach), Bendorf (Bendorf), Mendig (Mendig), Pellenz (Pellenz), Maifeld (Maifeld), Vordereifel (Vordereifel), Rhein-Mosel (Rhein-Mosel), Weißenthurm (Weißenthurm)' }
                    ],
                    cities: [
                        { bold: 'Städte, die keinem Kreis angehören (kreisfreie Städte):' },
                        { text: 'Koblenz (Koblenz)' }
                    ]
                }
            }
        },
    },
    {
        id: 16,
        hasInfo: false,
        path: "neuwied",
        translations: {
            ru: { name: 'Нойвид' },
            ua: { name: 'Нойвід' },
            de: { name: 'Neuwied' }
        }
    },
    {
        id: 17,
        hasInfo: false,
        path: "rhein_hunsrueck_kreis",
        translations: {
            ru: { name: 'Райн-Хунсрюк' },
            ua: { name: 'Райн-Гунсрюк' },
            de: { name: 'Rhein-Hunsrück-Kreis' }
        }
    },
    {
        id: 18,
        hasInfo: false,
        path: "rhein_lahn_kreis",
        translations: {
            ru: { name: 'Райн-Лан' },
            ua: { name: 'Райн-Лан' },
            de: { name: 'Rhein-Lahn-Kreis' }
        }
    },
    {
        id: 19,
        hasInfo: false,
        path: "rhein_pfalz_kreis",
        translations: {
            ru: { name: 'Райн-Пфальц' },
            ua: { name: 'Райн-Пфальц' },
            de: { name: 'Rhein-Pfalz-Kreis' }
        }
    },
    {
        id: 20,
        hasInfo: false,
        path: "suedliche_weinstrasse",
        translations: {
            ru: { name: 'Южный Вайнштрассе' },
            ua: { name: 'Південна Вайнштрассе' },
            de: { name: 'Südliche Weinstrasse' }
        }
    },
    {
        id: 21,
        hasInfo: false,
        path: "suedwestpfalz",
        translations: {
            ru: { name: 'Юго-западный Пфальц' },
            ua: { name: 'Південно-Західний Пфальц' },
            de: { name: 'Südwestpfalz' }
        }
    },
    {
        id: 22,
        hasInfo: true,
        path: "trier_saarburg",
        regionsPath: "rheinland_pfalz",
        gerb: "Germany/rheinland-pfalz/trier_saarburg/gerb.png",
        translations: {
            ru: {
                name: 'Трир-Саарбург',
                title: "Район Трир-Саарбург",
                countryName: "Германия", regionName: "Рейнланд-Пфальц",
                desc: {
                    history: [
                        { text: 'Район Трир-Саарбург (Landkreis Trier-Saarburg) расположен на юго-западе Германии в земле Рейнланд-Пфальц, на границе с Люксембургом. Территория района лежит в долинах рек Мозель, Саар и Рувер и считается одним из старейших культурных регионов страны.' },
                        { text: 'Ещё в античности эти земли входили в состав Римской империи. Рядом находится город Трир – один из древнейших городов Германии, основанный римлянами в I веке до н.э. как Augusta Treverorum. Регион играл важную роль как торговый и административный центр Римской Галлии.' },
                        { text: 'В Средние века большая часть территории находилась под властью Курфюршества Трир – одного из важнейших церковных княжеств Священной Римской империи. От этого периода сохранилось множество замков, монастырей и исторических винодельческих деревень в долине Мозеля.' },
                        { text: 'В конце XVIII века регион был занят Францией во время революционных войн и на некоторое время вошёл в состав Французской республики. После Венского конгресса 1815 года территория перешла к Пруссии и стала частью Рейнской провинции.' },
                        { text: 'Современный район Трир-Саарбург был образован в 1969 году в ходе административной реформы путём объединения прежних районов Трир и Саарбург.' },
                        { bold: 'Административный центр:', text: 'город Трир, однако он не входит в состав района и имеет статус самостоятельного города окружного подчинения (kreisfreie Stadt).' }
                    ],
                    area: [
                        { bold: 'Площадь:', text: ' около 1 102 км².' },
                        { bold: 'География:', text: ' район расположен в юго-западной части земли Рейнланд-Пфальц. Ландшафт формируют долины рек Мозель, Саар и Рувер, а также возвышенности Хунсрюка, Сааргау и Южного Эйфеля. Регион известен винодельческими районами вдоль Мозеля и Саара.' }
                    ],
                    population: [
                        { bold: 'Население:', text: ' примерно 149 000–154 000 человек (2023–2025).' },
                        { bold: 'Плотность населения:', text: ' около 135–140 человек/км².' }
                    ],
                    districts: [
                        { bold: 'Объединённые муниципалитеты (Verbandsgemeinden):', text: 'Гермескайль (Hermeskeil), Конц (Konz), Рувер (Ruwer), Саарбург-Келль (Saarburg-Kell), Швайх-ан-дер-Рёммерштрассе (Schweich an der Römischen Weinstraße), Трир-Ланд (Trier-Land).' }
                    ],
                    cities: [
                        { bold: 'Крупнейшие города района:', text: 'Саарбург (Saarburg), Конц (Konz), Швайх (Schweich), Гермескайль (Hermeskeil).' },
                        { bold: 'Город, не входящий в район (kreisfreie Stadt):', text: 'Трир (Trier).' }
                    ]
                },
            },
            ua: {
                name: 'Трір-Саарбург',
                title: "Район Трір-Саарбург",
                countryName: "Німеччина", regionName: "Рейнланд-Пфальц",
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
            },
            de: {
                name: 'Trier-Saarburg',
                title: "Landkreis Trier-Saarburg",
                countryName: "Deutschland", regionName: "Rheinland-Pfalz",
                desc: {
                    history: [
                        { text: 'Der Landkreis Trier-Saarburg liegt im Südwesten Deutschlands in Rheinland-Pfalz, an der Grenze zu Luxemburg. Das Gebiet des Landkreises erstreckt sich über die Täler der Flüsse Mosel, Saar und Ruwer und gilt als eine der ältesten Kulturlandschaften des Landes.' },
                        { text: 'Bereits in der Antike gehörten diese Gebiete zum Römischen Reich. In der Nähe liegt die Stadt Trier – eine der ältesten Städte Deutschlands, von den Römern im 1. Jahrhundert v. Chr. als Augusta Treverorum gegründet. Die Region spielte eine wichtige Rolle als Handels- und Verwaltungszentrum der römischen Provinz Gallien.' },
                        { text: 'Im Mittelalter stand der größte Teil des Gebiets unter der Herrschaft des Kurfürstentums Trier – eines der bedeutendsten geistlichen Fürstentümer im Heiligen Römischen Reich. Aus dieser Zeit sind zahlreiche Burgen, Klöster und historische Weindörfer im Moseltal erhalten geblieben.' },
                        { text: 'Ende des 18. Jahrhunderts wurde die Region während der Revolutionskriege von Frankreich besetzt und gehörte zeitweise zur Französischen Republik. Nach dem Wiener Kongress 1815 ging das Gebiet an Preußen und wurde Teil der Rheinprovinz.' },
                        { text: 'Der heutige Landkreis Trier-Saarburg entstand 1969 im Rahmen der Verwaltungsreform durch die Zusammenlegung der ehemaligen Landkreise Trier und Saarburg.' },
                        { bold: 'Verwaltungssitz:', text: ' die Stadt Trier, die jedoch nicht zum Landkreis gehört und den Status einer kreisfreien Stadt hat (kreisfreie Stadt).' }
                    ],
                    area: [
                        { bold: 'Fläche:', text: ' etwa 1.102 km².' },
                        { bold: 'Geografie:', text: ' Der Landkreis liegt im Südwesten von Rheinland-Pfalz. Die Landschaft wird durch die Täler der Flüsse Mosel, Saar und Ruwer sowie die Höhenzüge Hunsrück, Saargau und Süd-Eifel geprägt. Die Region ist bekannt für ihre Weinbaugebiete entlang der Mosel und der Saar.' }
                    ],
                    population: [
                        { bold: 'Einwohner:', text: ' etwa 149.000–154.000 Personen (2023–2025).' },
                        { bold: 'Bevölkerungsdichte:', text: ' ca. 135–140 Einwohner/km².' }
                    ],
                    districts: [
                        { bold: 'Verbandsgemeinden:', text: 'Hermeskeil, Konz, Ruwer, Saarburg-Kell, Schweich an der Römischen Weinstraße, Trier-Land.' }
                    ],
                    cities: [
                        { bold: 'Größte Städte des Landkreises:', text: 'Saarburg, Konz, Schweich, Hermeskeil.' },
                        { bold: 'Stadt, die nicht zum Landkreis gehört (kreisfreie Stadt):', text: 'Trier.' }
                    ]
                },
            }
        }
    },
    { id: 23, 
        hasInfo: false, 
        path: "vulkaneifel",
        translations: {
            ru: { name: 'Вулканайфель' },
            ua: { name: 'Вулканайфель' },
            de: { name: 'Vulkaneifel' }
        }
    },
    { id: 24, 
        hasInfo: false, 
        path: "westerwaldkreis",
        translations: {
            ru: { name: 'Вестервальд' },
            ua: { name: 'Вестервальд' },
            de: { name: 'Westerwaldkreis' }
        }
    },
    { id: 25, 
        hasInfo: false, 
        path: "mainz",
        translations: {
            ru: { name: 'Майнц' },
            ua: { name: 'Майнц' },
            de: { name: 'Mainz' }
        }
    },
    { id: 26, 
        hasInfo: false, 
        path: "koblenz",
        translations: {
            ru: { name: 'Кобленц' },
            ua: { name: 'Кобленц' },
            de: { name: 'Koblenz' }
        }
    },
    { id: 27, 
        hasInfo: false, 
        path: "ludwigshafen",
        translations: {
            ru: { name: 'Людвигсхафен' },
            ua: { name: 'Людвігсгафен' },
            de: { name: 'Ludwigshafen' }
        }
    },
    { id: 28, 
        hasInfo: true, 
        path: "trier",
        translations: {
            ru: { name: 'Трир' },
            ua: { name: 'Трір' },
            de: { name: 'Trier' }
        }
    },
    { id: 29, 
        hasInfo: false, 
        path: "kaiserslautern-city",
        translations: {
            ru: { name: 'Кайзерслаутерн' },
            ua: { name: 'Кайзерслаутерн' },
            de: { name: 'Kaiserslautern' }
        }
    },
    { id: 30,         
        hasInfo: false, 
        path: "worms",
        translations: {
            ru: { name: 'Вормс' },
            ua: { name: 'Вормс' },
            de: { name: 'Worms' }
        }
     },
    { id: 31, 
        hasInfo: false, 
        path: "speyer",
        translations: {
            ru: { name: 'Шпайер' },
            ua: { name: 'Шпаєр' },
            de: { name: 'Speyer' }
        }
     },
    { id: 32, 
        hasInfo: false, 
        path: "frankenthal",
        translations: {
            ru: { name: 'Франкенталь' },
            ua: { name: 'Франкенталь' },
            de: { name: 'Frankenthal' }
        }
    },
    { id: 33, 
        hasInfo: false, 
        path: "landau",
        translations: {
            ru: { name: 'Ландау-ин-дер-Пфальц' },
            ua: { name: 'Ландау-ин-дер-Пфальц' },
            de: { name: 'Landau in der Pfalz' }
        }
    },
    { id: 34, 
        hasInfo: false, 
        path: "neustadt",
        translations: {
            ru: { name: 'Нойштадт' },
            ua: { name: 'Нойштадт' },
            de: { name: 'Neustadt an der Weinstraße' }
        }
    },
    { id: 35, 
        hasInfo: false, 
        path: "pirmasens",
        translations: {
            ru: { name: 'Пирмазенс' },
            ua: { name: 'Пірмазенс' },
            de: { name: 'Pirmasens' }
        }
    },
    { id: 36, 
        hasInfo: false, 
        path: "zweibruecken",
        translations: {
            ru: { name: 'Цвайбрюккен' },
            ua: { name: 'Цвайбрюккен' },
            de: { name: 'Zweibrücken' }
        }
     }
]

export default datas