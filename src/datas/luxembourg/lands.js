const datas = [
    {
        id: 1,
        hasInfo: true,
        path: 'capellen',
        translations: {
            ru: {
                name: 'Кантон Капеллен',
                desc: {
                    capital: [{ bold: 'Административный центр:', text: ' город Капеллен (Capellen)' }],
                    population: [
                        { bold: 'Население:', text: ' около 50 000 человек.' }
                    ],
                    area: [{ bold: 'Площадь:', text: ' около 185 км².' }],
                    geography: [
                        { bold: 'География:', text: ' Капеллен расположен на юго-западе Люксембурга и граничит с Бельгией. Регион характеризуется холмистым рельефом, сельскохозяйственными угодьями и небольшими лесными массивами.' },
                        { text: ' Территория кантона является переходной зоной между более урбанизированным югом страны и сельскими районами запада.' }
                    ],
                    history: [
                        { bold: 'История:', text: ' Капеллен сформировался как административный кантон после реформ XIX века. Исторически регион был связан с сельским хозяйством и приграничной торговлей с Бельгией.' }
                    ],
                    economy: [
                        { bold: 'Экономика:', text: ' Экономика региона сочетает сельское хозяйство, малый бизнес и растущий сектор услуг.' },
                        { text: ' Благодаря близости к городу Люксембург, многие жители работают в столице, что делает регион частью её экономической агломерации.' }
                    ],
                    cities: [
                        { bold: 'Основные населённые пункты:', text: ' Капеллен, Мамер, Керих, Копсталь, Штрассен.' }
                    ],
                    rivers: [
                        { bold: 'Реки:', text: ' Альзетт и её притоки.' }
                    ],
                    tourism: [
                        { bold: 'Туризм и отдых:', text: ' Регион привлекает спокойной атмосферой, природными ландшафтами и близостью к столице. Здесь можно найти исторические усадьбы, замки и прогулочные маршруты.' }
                    ]
                },
                // symbols: {
                //     title: "Геральдика",
                //     items: [
                //         {
                //             bold: "Герб:",
                //             text: " кантон Капеллен использует традиционные символы, отражающие исторические связи региона с Люксембургом и соседними территориями. (Факт не проверен)",
                //             img: "Luxembourg/capellen/gerb.png"
                //         },
                //         {
                //             bold: "Флаг:",
                //             text: " официальный флаг кантона не всегда используется отдельно, чаще применяется национальная символика Люксембурга. (Факт не проверен)",
                //             img: "Luxembourg/capellen/flag.png"
                //         }
                //     ]
                // },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: "Территория современного кантона Капеллен исторически входила в различные феодальные владения и находилась под влиянием Люксембургского графства." },
                        { text: "После наполеоновских войн и последующих административных реформ регион был включён в современную систему кантонов Люксембурга." },
                        { text: "С развитием транспортной инфраструктуры и близостью к столице кантон постепенно стал частью экономической зоны города Люксембург." }
                    ]
                },
                cities: {
                    title: "Основные населённые пункты",
                    items: [
                        { id: 1, name: 'Капеллен', hasInfo: false, path: "capellen" },
                        { id: 2, name: 'Мамер', hasInfo: false, path: "mamer" },
                        { id: 3, name: 'Штрассен', hasInfo: false, path: "strassen" },
                        { id: 4, name: 'Керих', hasInfo: true, path: "koerich" },
                        { id: 5, name: 'Копсталь', hasInfo: false, path: "kopstal" },
                        { id: 6, name: 'Штайнфорт', hasInfo: false, path: "steinfort" },
                        { id: 7, name: 'Диппах', hasInfo: false, path: "dippach" },
                        { id: 8, name: 'Гарних', hasInfo: false, path: "garnich" }
                    ]
                },
                meta: {
                    title: "Капеллен – информация о регионе Люксембурга",
                    description: "Капеллен: коммуны, география, история и особенности региона Люксембурга.",
                    ogTitle: "Капеллен – кантон Люксембурга",
                    ogDescription: "Подробная информация о кантоне Капеллен: население, география, история и населённые пункты.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/capellen/001.jpg"
                }
            },
            ua: {
                name: 'Кантон Капеллен',
                desc: {
                    capital: [{ bold: 'Адміністративний центр:', text: ' місто Капеллен (Capellen)' }],
                    population: [
                        { bold: 'Населення:', text: ' близько 50 000 осіб.' }
                    ],
                    area: [{ bold: 'Площа:', text: ' близько 185 км².' }],
                    geography: [
                        { bold: 'Географія:', text: ' Капеллен розташований на південному заході Люксембургу та межує з Бельгією. Регіон характеризується пагорбистим рельєфом, сільськогосподарськими угіддями та невеликими лісовими масивами.' },
                        { text: ' Територія кантону є перехідною зоною між більш урбанізованим півднем країни та сільськими районами заходу.' }
                    ],
                    history: [
                        { bold: 'Історія:', text: ' Капеллен сформувався як адміністративний кантон після реформ XIX століття. Історично регіон був пов’язаний із сільським господарством та прикордонною торгівлею з Бельгією.' }
                    ],
                    economy: [
                        { bold: 'Економіка:', text: ' Економіка регіону поєднує сільське господарство, малий бізнес і зростаючий сектор послуг.' },
                        { text: ' Завдяки близькості до міста Люксембург багато мешканців працюють у столиці, що робить регіон частиною її економічної агломерації.' }
                    ],
                    cities: [
                        { bold: 'Основні населені пункти:', text: ' Капеллен, Мамер, Керих, Копсталь, Штрассен.' }
                    ],
                    rivers: [
                        { bold: 'Річки:', text: ' Альзетт та її притоки.' }
                    ],
                    tourism: [
                        { bold: 'Туризм і відпочинок:', text: ' Регіон приваблює спокійною атмосферою, природними ландшафтами та близькістю до столиці. Тут можна знайти історичні садиби, замки та прогулянкові маршрути.' }
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        { text: "Територія сучасного кантону Капеллен історично входила до різних феодальних володінь і перебувала під впливом Люксембурзького графства." },
                        { text: "Після наполеонівських воєн та подальших адміністративних реформ регіон було включено до сучасної системи кантонів Люксембургу." },
                        { text: "З розвитком транспортної інфраструктури та близькістю до столиці кантон поступово став частиною економічної зони міста Люксембург." }
                    ]
                },
                cities: {
                    title: "Основні населені пункти",
                    items: [
                        { id: 1, name: 'Капеллен', hasInfo: false, path: "capellen" },
                        { id: 2, name: 'Мамер', hasInfo: false, path: "mamer" },
                        { id: 3, name: 'Штрассен', hasInfo: false, path: "strassen" },
                        { id: 4, name: 'Керих', hasInfo: true, path: "koerich" },
                        { id: 5, name: 'Копсталь', hasInfo: false, path: "kopstal" },
                        { id: 6, name: 'Штайнфорт', hasInfo: false, path: "steinfort" },
                        { id: 7, name: 'Діппах', hasInfo: false, path: "dippach" },
                        { id: 8, name: 'Гарніх', hasInfo: false, path: "garnich" }
                    ]
                },
                meta: {
                    title: "Капеллен – інформація про регіон Люксембургу",
                    description: "Капеллен: громади, географія, історія та особливості регіону Люксембургу.",
                    ogTitle: "Капеллен – кантон Люксембургу",
                    ogDescription: "Детальна інформація про кантон Капеллен: населення, географія, історія та населені пункти.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/capellen/001.jpg"
                }
            },
            de: {
                name: 'Kanton Capellen',
                desc: {
                    capital: [{ bold: 'Verwaltungszentrum:', text: ' Stadt Capellen (Capellen)' }],
                    population: [
                        { bold: 'Bevölkerung:', text: ' etwa 50.000 Einwohner.' }
                    ],
                    area: [{ bold: 'Fläche:', text: ' etwa 185 km².' }],
                    geography: [
                        { bold: 'Geographie:', text: ' Capellen liegt im Südwesten Luxemburgs und grenzt an Belgien. Die Region ist geprägt von hügeligem Relief, landwirtschaftlichen Flächen und kleinen Waldgebieten.' },
                        { text: ' Das Gebiet des Kantons ist eine Übergangszone zwischen dem stärker urbanisierten Süden des Landes und den ländlichen Regionen im Westen.' }
                    ],
                    history: [
                        { bold: 'Geschichte:', text: ' Capellen entstand als Verwaltungskanton nach den Reformen des 19. Jahrhunderts. Historisch war die Region mit der Landwirtschaft und dem grenzüberschreitenden Handel mit Belgien verbunden.' }
                    ],
                    economy: [
                        { bold: 'Wirtschaft:', text: ' Die Wirtschaft der Region kombiniert Landwirtschaft, kleine Unternehmen und einen wachsenden Dienstleistungssektor.' },
                        { text: ' Aufgrund der Nähe zur Stadt Luxemburg arbeiten viele Einwohner in der Hauptstadt, wodurch die Region Teil ihrer wirtschaftlichen Agglomeration ist.' }
                    ],
                    cities: [
                        { bold: 'Wichtige Ortschaften:', text: ' Capellen, Mamer, Kehlen, Kopstal, Strassen.' }
                    ],
                    rivers: [
                        { bold: 'Flüsse:', text: ' Alzette und ihre Nebenflüsse.' }
                    ],
                    tourism: [
                        { bold: 'Tourismus und Erholung:', text: ' Die Region zieht Besucher durch ihre ruhige Atmosphäre, Naturlandschaften und die Nähe zur Hauptstadt an. Hier findet man historische Anwesen, Schlösser und Spazierwege.' }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: "Das Gebiet des heutigen Kantons Capellen gehörte historisch zu verschiedenen feudalen Herrschaften und stand unter dem Einfluss der Grafschaft Luxemburg." },
                        { text: "Nach den Napoleonischen Kriegen und den anschließenden Verwaltungsreformen wurde die Region in das moderne Kantonsystem Luxemburgs eingegliedert." },
                        { text: "Mit der Entwicklung der Verkehrsinfrastruktur und der Nähe zur Hauptstadt wurde der Kanton zunehmend Teil der wirtschaftlichen Zone der Stadt Luxemburg." }
                    ]
                },
                cities: {
                    title: "Wichtige Ortschaften",
                    items: [
                        { id: 1, name: 'Capellen', hasInfo: false, path: "capellen" },
                        { id: 2, name: 'Mamer', hasInfo: false, path: "mamer" },
                        { id: 3, name: 'Strassen', hasInfo: false, path: "strassen" },
                        { id: 4, name: 'Koerich', hasInfo: true, path: "koerich" },
                        { id: 5, name: 'Kopstal', hasInfo: false, path: "kopstal" },
                        { id: 6, name: 'Steinfort', hasInfo: false, path: "steinfort" },
                        { id: 7, name: 'Dippach', hasInfo: false, path: "dippach" },
                        { id: 8, name: 'Garnich', hasInfo: false, path: "garnich" }
                    ]
                },
                meta: {
                    title: "Capellen – Informationen über die Region Luxemburgs",
                    description: "Capellen: Gemeinden, Geographie, Geschichte und Besonderheiten der Region Luxemburgs.",
                    ogTitle: "Capellen – Kanton Luxemburg",
                    ogDescription: "Detaillierte Informationen über den Kanton Capellen: Bevölkerung, Geographie, Geschichte und Ortschaften.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/capellen/001.jpg"
                }
            }
        }
    },
    {
        id: 7,
        hasInfo: true,
        path: 'luxembourg_canton',
        translations: {
            ru: {
                name: 'Кантон Люксембург',
                desc: {
                    capital: [{ bold: 'Административный центр:', text: ' город Люксембург' }],
                    population: [
                        { bold: 'Население:', text: ' около 200 000 человек.' }
                    ],
                    area: [{ bold: 'Площадь:', text: ' около 240 км².' }],
                    geography: [
                        { bold: 'География:', text: ' Кантон Люксембург расположен в центральной части страны и является наиболее урбанизированным регионом Люксембурга.' },
                        { text: ' Ландшафт сочетает долины рек Альзетт и Петрюсс, холмистую местность и развитую городскую инфраструктуру. Регион играет ключевую роль как политический, экономический и транспортный центр страны.' }
                    ],
                    history: [
                        { bold: 'История:', text: ' История кантона тесно связана с развитием города Люксембург, который с X века являлся важной крепостью и политическим центром региона.' }
                    ],
                    economy: [
                        { bold: 'Экономика:', text: ' Кантон Люксембург является главным экономическим центром страны. Здесь сосредоточены финансовые учреждения, международные компании и органы Европейского союза.' },
                        { text: ' Основные отрасли — банковский сектор, IT, услуги и международная торговля.' }
                    ],
                    cities: [
                        { bold: 'Основные населённые пункты:', text: ' Люксембург, Штрассен, Бертранж, Хеспер, Вальферданж, Нидернанвен.' }
                    ],
                    rivers: [
                        { bold: 'Реки:', text: ' Альзетт, Петрюсс.' }
                    ],
                    tourism: [
                        { bold: 'Туризм и отдых:', text: ' Регион известен историческим центром города Люксембург, включённым в список объектов Всемирного наследия ЮНЕСКО, крепостями, мостами и панорамными видами.' }
                    ]
                },
                // symbols: {
                //     title: "Геральдика",
                //     items: [
                //         {
                //             bold: "Герб:",
                //             text: " используется символика, связанная с гербом города Люксембург и национальными элементами. (Факт не проверен)",
                //             img: "Luxembourg/luxembourg-canton/gerb.png"
                //         },
                //         {
                //             bold: "Флаг:",
                //             text: " официального отдельного флага кантона не выделяется, чаще используется национальный флаг Люксембурга. (Факт не проверен)",
                //             img: "Luxembourg/luxembourg-canton/flag.png"
                //         }
                //     ]
                // },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: "В 963 году граф Зигфрид приобрёл скалу Бок, что стало началом основания города Люксембург и дальнейшего развития региона." },
                        { text: "В средние века город превратился в одну из самых мощных крепостей Европы благодаря стратегическому расположению." },
                        { text: "После разрушения крепости в XIX веке Люксембург начал развиваться как административный и финансовый центр." },
                        { text: "Сегодня кантон является ядром государства и важным международным центром Европы." }
                    ]
                },
                cities: {
                    title: "Основные населённые пункты",
                    items: [
                        { id: 1, name: 'Люксембург', hasInfo: true, path: "luxembourg_city" },
                        { id: 2, name: 'Штрассен', hasInfo: false, path: "strassen" },
                        { id: 3, name: 'Бертранж', hasInfo: false, path: "bertrange" },
                        { id: 4, name: 'Хеспер', hasInfo: false, path: "hesperange" },
                        { id: 5, name: 'Вальферданж', hasInfo: false, path: "walferdange" },
                        { id: 6, name: 'Нидернанвен', hasInfo: false, path: "niederanven" },
                        { id: 7, name: 'Зандвайлер', hasInfo: false, path: "sandweiler" },
                        { id: 8, name: 'Шуттранж', hasInfo: false, path: "schuttrange" }
                    ]
                },
                meta: {
                    title: "Кантон Люксембург – информация о регионе",
                    description: "Кантон Люксембург: столица, экономика, история и населённые пункты.",
                    ogTitle: "Кантон Люксембург – центр страны",
                    ogDescription: "Подробная информация о кантоне Люксембург: города, экономика, история и достопримечательности.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/luxembourg-city/001.jpg"
                }
            },
            ua: {
                name: 'Кантон Люксембург',
                desc: {
                    capital: [{ bold: 'Адміністративний центр:', text: ' місто Люксембург' }],
                    population: [
                        { bold: 'Населення:', text: ' близько 200 000 осіб.' }
                    ],
                    area: [{ bold: 'Площа:', text: ' близько 240 км².' }]
                    ,
                    geography: [
                        { bold: 'Географія:', text: ' Кантон Люксембург розташований у центральній частині країни та є найбільш урбанізованим регіоном Люксембургу.' },
                        { text: ' Ландшафт поєднує долини річок Альзетт і Петрюсс, пагорбисту місцевість та розвинену міську інфраструктуру. Регіон відіграє ключову роль як політичний, економічний і транспортний центр країни.' }
                    ],
                    history: [
                        { bold: 'Історія:', text: ' Історія кантону тісно пов’язана з розвитком міста Люксембург, яке з X століття було важливою фортецею та політичним центром регіону.' }
                    ],
                    economy: [
                        { bold: 'Економіка:', text: ' Кантон Люксембург є головним економічним центром країни. Тут розташовані фінансові установи, міжнародні компанії та органи Європейського Союзу.' },
                        { text: ' Основні галузі — банківський сектор, IT, послуги та міжнародна торгівля.' }
                    ],
                    cities: [
                        { bold: 'Основні населені пункти:', text: ' Люксембург, Штрассен, Бертранж, Геспер, Вальферданж, Нідеранвен.' }
                    ],
                    rivers: [
                        { bold: 'Річки:', text: ' Альзетт, Петрюсс.' }
                    ],
                    tourism: [
                        { bold: 'Туризм і відпочинок:', text: ' Регіон відомий історичним центром міста Люксембург, який входить до списку Світової спадщини ЮНЕСКО, фортецями, мостами та панорамними видами.' }
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        { text: "У 963 році граф Зиґфрід придбав скелю Бок, що стало початком заснування міста Люксембург та подальшого розвитку регіону." },
                        { text: "У середньовіччі місто перетворилося на одну з найпотужніших фортець Європи завдяки стратегічному розташуванню." },
                        { text: "Після руйнування фортеці у XIX столітті Люксембург почав розвиватися як адміністративний і фінансовий центр." },
                        { text: "Сьогодні кантон є ядром держави та важливим міжнародним центром Європи." }
                    ]
                },
                cities: {
                    title: "Основні населені пункти",
                    items: [
                        { id: 1, name: 'Люксембург', hasInfo: true, path: "luxembourg_city" },
                        { id: 2, name: 'Штрассен', hasInfo: false, path: "strassen" },
                        { id: 3, name: 'Бертранж', hasInfo: false, path: "bertrange" },
                        { id: 4, name: 'Геспер', hasInfo: false, path: "hesperange" },
                        { id: 5, name: 'Вальферданж', hasInfo: false, path: "walferdange" },
                        { id: 6, name: 'Нідеранвен', hasInfo: false, path: "niederanven" },
                        { id: 7, name: 'Зандвайлер', hasInfo: false, path: "sandweiler" },
                        { id: 8, name: 'Шуттранж', hasInfo: false, path: "schuttrange" }
                    ]
                },
                meta: {
                    title: "Кантон Люксембург – інформація про регіон",
                    description: "Кантон Люксембург: столиця, економіка, історія та населені пункти.",
                    ogTitle: "Кантон Люксембург – центр країни",
                    ogDescription: "Детальна інформація про кантон Люксембург: міста, економіка, історія та пам’ятки.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/luxembourg-city/001.jpg"
                }
            },
            de: {
                name: 'Kanton Luxemburg',
                desc: {
                    capital: [{ bold: 'Verwaltungszentrum:', text: ' Stadt Luxemburg' }],
                    population: [
                        { bold: 'Bevölkerung:', text: ' etwa 200.000 Einwohner.' }
                    ],
                    area: [{ bold: 'Fläche:', text: ' etwa 240 km².' }]
                    ,
                    geography: [
                        { bold: 'Geographie:', text: ' Der Kanton Luxemburg liegt im zentralen Teil des Landes und ist die am stärksten urbanisierte Region Luxemburgs.' },
                        { text: ' Die Landschaft vereint die Täler der Flüsse Alzette und Pétrusse, hügeliges Gelände und eine stark entwickelte städtische Infrastruktur. Die Region spielt eine Schlüsselrolle als politisches, wirtschaftliches und verkehrstechnisches Zentrum des Landes.' }
                    ],
                    history: [
                        { bold: 'Geschichte:', text: ' Die Geschichte des Kantons ist eng mit der Entwicklung der Stadt Luxemburg verbunden, die seit dem 10. Jahrhundert eine wichtige Festung und ein politisches Zentrum der Region war.' }
                    ],
                    economy: [
                        { bold: 'Wirtschaft:', text: ' Der Kanton Luxemburg ist das wichtigste wirtschaftliche Zentrum des Landes. Hier befinden sich Finanzinstitutionen, internationale Unternehmen und Einrichtungen der Europäischen Union.' },
                        { text: ' Die Hauptsektoren sind das Bankwesen, IT, Dienstleistungen und der internationale Handel.' }
                    ],
                    cities: [
                        { bold: 'Wichtige Ortschaften:', text: ' Luxemburg, Strassen, Bertrange, Hesperingen, Walferdingen, Niederanven.' }
                    ],
                    rivers: [
                        { bold: 'Flüsse:', text: ' Alzette, Pétrusse.' }
                    ],
                    tourism: [
                        { bold: 'Tourismus und Erholung:', text: ' Die Region ist bekannt für das historische Zentrum der Stadt Luxemburg, das zum UNESCO-Weltkulturerbe gehört, sowie für Festungen, Brücken und Panoramablicke.' }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: "Im Jahr 963 erwarb Graf Siegfried den Bockfelsen, was den Beginn der Stadt Luxemburg und der weiteren Entwicklung der Region markierte." },
                        { text: "Im Mittelalter entwickelte sich die Stadt dank ihrer strategischen Lage zu einer der stärksten Festungen Europas." },
                        { text: "Nach der Zerstörung der Festung im 19. Jahrhundert entwickelte sich Luxemburg zu einem Verwaltungs- und Finanzzentrum." },
                        { text: "Heute ist der Kanton das Zentrum des Staates und ein wichtiger internationaler Standort Europas." }
                    ]
                },
                cities: {
                    title: "Wichtige Ortschaften",
                    items: [
                        { id: 1, name: 'Luxemburg', hasInfo: true, path: "luxembourg_city" },
                        { id: 2, name: 'Strassen', hasInfo: false, path: "strassen" },
                        { id: 3, name: 'Bertrange', hasInfo: false, path: "bertrange" },
                        { id: 4, name: 'Hesperingen', hasInfo: false, path: "hesperange" },
                        { id: 5, name: 'Walferdingen', hasInfo: false, path: "walferdange" },
                        { id: 6, name: 'Niederanven', hasInfo: false, path: "niederanven" },
                        { id: 7, name: 'Sandweiler', hasInfo: false, path: "sandweiler" },
                        { id: 8, name: 'Schuttrange', hasInfo: false, path: "schuttrange" }
                    ]
                },
                meta: {
                    title: "Kanton Luxemburg – Informationen über die Region",
                    description: "Kanton Luxemburg: Hauptstadt, Wirtschaft, Geschichte und Ortschaften.",
                    ogTitle: "Kanton Luxemburg – Zentrum des Landes",
                    ogDescription: "Detaillierte Informationen über den Kanton Luxemburg: Städte, Wirtschaft, Geschichte und Sehenswürdigkeiten.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/luxembourg-city/001.jpg"
                }
            }
        }
    },
    {
        id: 8,
        hasInfo: true,
        path: 'mersch',
        translations: {
            ru: {
                name: 'Кантон Мерш',
                desc: {
                    capital: [{ bold: 'Административный центр:', text: ' город Мерш (Mersch)' }],
                    population: [
                        { bold: 'Население:', text: ' около 30 000–35 000 человек (Факт не проверен).' }
                    ],
                    area: [{ bold: 'Площадь:', text: ' около 233 км² (Факт не проверен).' }],
                    geography: [
                        { bold: 'География:', text: ' Мерш расположен в центральной части Люксембурга. Территория характеризуется холмистым рельефом, долинами рек и сельскохозяйственными угодьями.' },
                        { text: ' Регион считается географическим центром страны и включает как лесные массивы, так и небольшие населённые пункты.' }
                    ],
                    history: [
                        { bold: 'История:', text: ' Регион исторически был важным пересечением торговых путей в центральном Люксембурге. В Средние века здесь развивались феодальные владения и замковые комплексы.' },
                        { text: ' Одним из исторических центров является замок Мерш, который играл административную и оборонительную роль.' }
                    ],
                    economy: [
                        { bold: 'Экономика:', text: ' Экономика сочетает сельское хозяйство, малый бизнес и сферу услуг.' },
                        { text: ' Благодаря центральному расположению многие жители работают в столице и других крупных городах страны.' }
                    ],
                    cities: [
                        { bold: 'Основные населённые пункты:', text: ' Мерш, Линтген, Ларошетт, Фишбах, Хелпернапа (Helperknapp), Хеффинген, Номмерн.' }
                    ],
                    rivers: [
                        { bold: 'Реки:', text: ' Альзетт, Вайс-Эрнц и их притоки.' }
                    ],
                    tourism: [
                        { bold: 'Туризм и отдых:', text: ' Регион известен замками, природными маршрутами и спокойной сельской атмосферой. Особенно популярен замок Мерш и окрестные долины.' }
                    ]
                },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: "Территория кантона Мерш с древности была важным пересечением путей в центральной части Люксембурга." },
                        { text: "В Средние века здесь формировались феодальные владения и укреплённые поселения." },
                        { text: "После административных реформ кантон вошёл в современную структуру Люксембурга и сохранил значение центрального региона." }
                    ]
                },
                cities: {
                    title: "Основные населённые пункты",
                    items: [
                        { id: 1, name: 'Мерш', hasInfo: false, path: "mersch" },
                        { id: 2, name: 'Линтген', hasInfo: false, path: "lintgen" },
                        { id: 3, name: 'Ларошетт', hasInfo: false, path: "larochette" },
                        { id: 4, name: 'Фишбах', hasInfo: false, path: "fischbach" },
                        { id: 5, name: 'Хелперкнапп', hasInfo: false, path: "helperknapp" },
                        { id: 6, name: 'Хеффинген', hasInfo: false, path: "heffingen" },
                        { id: 7, name: 'Номмерн', hasInfo: false, path: "nommern" },
                        { id: 8, name: 'Ансембург', hasInfo: true, path: "ansembourg" }
                    ]
                },
                meta: {
                    title: "Мерш – информация о регионе Люксембурга",
                    description: "Мерш: коммуны, география, история и особенности центрального региона Люксембурга.",
                    ogTitle: "Мерш – кантон Люксембурга",
                    ogDescription: "Подробная информация о кантоне Мерш: население, география, история и населённые пункты.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/ansembourg_castle/001.jpg"
                }
            },
            ua: {
                name: 'Кантон Мерш',
                desc: {
                    capital: [{ bold: 'Адміністративний центр:', text: ' місто Мерш (Mersch)' }],
                    population: [
                        { bold: 'Населення:', text: ' близько 30 000–35 000 осіб (Факт не перевірений).' }
                    ],
                    area: [{ bold: 'Площа:', text: ' близько 233 км² (Факт не перевірений).' }],
                    geography: [
                        { bold: 'Географія:', text: ' Мерш розташований у центральній частині Люксембургу. Регіон має пагорбистий рельєф, річкові долини та сільськогосподарські території.' },
                        { text: ' Вважається географічним центром країни.' }
                    ],
                    history: [
                        { bold: 'Історія:', text: ' Територія здавна була важливим перехрестям торгових шляхів у центрі країни. У середньовіччі тут існували феодальні володіння та замки.' },
                        { text: ' Замок Мерш мав адміністративне та оборонне значення.' }
                    ],
                    economy: [
                        { bold: 'Економіка:', text: ' Поєднує сільське господарство, малий бізнес і сферу послуг.' },
                        { text: ' Багато мешканців працюють у столиці завдяки центральному розташуванню.' }
                    ],
                    cities: [
                        { bold: 'Основні населені пункти:', text: ' Мерш, Лінтген, Ларошетт, Фішбах, Хелпернапа, Хеффінген, Номмерн.' }
                    ],
                    rivers: [
                        { bold: 'Річки:', text: ' Альзетт, Вайс-Ернц та їх притоки.' }
                    ],
                    tourism: [
                        { bold: 'Туризм і відпочинок:', text: ' Регіон відомий замками, природними маршрутами та спокійною атмосферою. Особливо популярний замок Мерш.' }
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        { text: "Територія кантона здавна була важливим транспортним вузлом у центрі Люксембургу." },
                        { text: "У середньовіччі тут формувалися замки та феодальні структури." },
                        { text: "Після реформ регіон увійшов до сучасної адміністративної системи країни." }
                    ]
                },
                cities: {
                    title: "Основні населені пункти",
                    items: [
                        { id: 1, name: 'Мерш', hasInfo: false, path: "mersch" },
                        { id: 2, name: 'Лінтген', hasInfo: false, path: "lintgen" },
                        { id: 3, name: 'Ларошетт', hasInfo: false, path: "larochette" },
                        { id: 4, name: 'Фішбах', hasInfo: false, path: "fischbach" },
                        { id: 5, name: 'Хелперкнапп', hasInfo: false, path: "helperknapp" },
                        { id: 6, name: 'Хеффінген', hasInfo: false, path: "heffingen" },
                        { id: 7, name: 'Номмерн', hasInfo: false, path: "nommern" },
                        { id: 8, name: 'Ансембург', hasInfo: true, path: "ansembourg" }
                    ]
                },
                meta: {
                    title: "Мерш – інформація про регіон Люксембургу",
                    description: "Мерш: громади, географія, історія та особливості центрального регіону Люксембургу.",
                    ogTitle: "Мерш – кантон Люксембургу",
                    ogDescription: "Детальна інформація про кантон Мерш: населення, географія, історія та населені пункти.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/ansembourg_castle/001.jpg"
                }
            },
            de: {
                name: 'Kanton Mersch',
                desc: {
                    capital: [{ bold: 'Verwaltungszentrum:', text: ' Stadt Mersch (Mersch)' }],
                    population: [
                        { bold: 'Bevölkerung:', text: ' etwa 30.000–35.000 Einwohner (nicht geprüft).' }
                    ],
                    area: [{ bold: 'Fläche:', text: ' etwa 233 km² (nicht geprüft).' }],
                    geography: [
                        { bold: 'Geographie:', text: ' Mersch liegt im Zentrum Luxemburgs. Die Region ist geprägt von Hügeln, Flusstälern und landwirtschaftlichen Flächen.' },
                        { text: ' Sie gilt als geografisches Zentrum des Landes.' }
                    ],
                    history: [
                        { bold: 'Geschichte:', text: ' Das Gebiet war seit der Antike ein wichtiger Knotenpunkt zentraler Handelswege.' },
                        { text: ' Im Mittelalter entstanden hier Burgen und feudale Strukturen, darunter die Burg Mersch.' }
                    ],
                    economy: [
                        { bold: 'Wirtschaft:', text: ' Mischung aus Landwirtschaft, kleinen Unternehmen und Dienstleistungen.' },
                        { text: ' Viele Einwohner pendeln aufgrund der zentralen Lage in die Hauptstadt.' }
                    ],
                    cities: [
                        { bold: 'Wichtige Ortschaften:', text: ' Mersch, Lintgen, Larochette, Fischbach, Helperknapp, Heffingen, Nommern.' }
                    ],
                    rivers: [
                        { bold: 'Flüsse:', text: ' Alzette, Weißer Ernz und Nebenflüsse.' }
                    ],
                    tourism: [
                        { bold: 'Tourismus und Erholung:', text: ' Bekannt für Burgen, Naturwege und ruhige Landschaften. Besonders hervorzuheben ist die Burg Mersch.' }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: "Die Region war historisch ein wichtiger Verkehrsknotenpunkt im Zentrum Luxemburgs." },
                        { text: "Im Mittelalter entstanden hier befestigte Siedlungen und Burgen." },
                        { text: "Nach Verwaltungsreformen wurde der Kanton Teil der modernen Struktur Luxemburgs." }
                    ]
                },
                cities: {
                    title: "Wichtige Ortschaften",
                    items: [
                        { id: 1, name: 'Mersch', hasInfo: false, path: "mersch" },
                        { id: 2, name: 'Lintgen', hasInfo: false, path: "lintgen" },
                        { id: 3, name: 'Larochette', hasInfo: false, path: "larochette" },
                        { id: 4, name: 'Fischbach', hasInfo: false, path: "fischbach" },
                        { id: 5, name: 'Helperknapp', hasInfo: false, path: "helperknapp" },
                        { id: 6, name: 'Heffingen', hasInfo: false, path: "heffingen" },
                        { id: 7, name: 'Nommern', hasInfo: false, path: "nommern" },
                        { id: 8, name: 'Ansemburg', hasInfo: true, path: "ansembourg" }
                    ]
                },
                meta: {
                    title: "Mersch – Informationen über die Region Luxemburgs",
                    description: "Mersch: Gemeinden, Geographie, Geschichte und Besonderheiten der zentralen Region Luxemburgs.",
                    ogTitle: "Mersch – Kanton Luxemburg",
                    ogDescription: "Detaillierte Informationen über den Kanton Mersch: Bevölkerung, Geographie, Geschichte und Ortschaften.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/ansembourg_castle/001.jpg"
                }
            }
        }
    }

]

export default datas