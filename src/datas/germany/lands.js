const datas = [
    {
        id: 10,
        hasInfo: true,
        path: 'nrw',
        translations: {
            ru: {
                name: 'Северный Рейн-Вестфалия',
                desc: {
                    capital: [{ bold: 'Столица:', text: ' Дюссельдорф' }],
                    population: [
                        { bold: 'Население:', text: ' около 18,1 млн человек. Иностранцев – около 2 млн человек.' }],
                    area: [{ bold: 'Площадь:', text: ' 34 000 км². Плотность населения – около 525 человек на 1 км².' }],
                    geography: [
                        { bold: 'География:', text: ' Северный Рейн-Вестфалия находится на западе Германии и граничит с Бельгией (99 км), Нидерландами (387 км), а также с федеральными землями Нижняя Саксония (583 км), Гессен (269 км) и Рейнланд-Пфальц (307 км).' },
                        { text: ' Земля включает два крупных ландшафтных региона: Северная низменность и немецкое среднегорье, которые подразделяются на северорейнскую и вестфальскую части вдоль Рейна.' },
                        { text: ' По левому берегу Рейна находятся горы Айфель (Eifel) и предгорья Vennvorland (Аахенский регион). По правому берегу Рейна – Bergisches Land, Зауерланд (Sauerland), Ротхааргебирге (Rothaargebirge), Зигерланд (Siegerland), Сибенгебирге (Siebengebirge) и части западного леса и Везербергланда (Weserbergland). Леса занимают около 24% территории.' }
                    ],
                    history: [{ bold: 'Происхождение названия:', text: ' Название Nordrhein-Westfalen появилось после постановления британского военного правительства 23 августа 1946 года, объединяющего провинцию Вестфалия (Provinz Westfalen) и провинцию Северный Рейн (Provinz Nordrhein). 21 января 1947 года к ним присоединилась территория Липпе (Lippe).' }],
                    economy: [
                        { bold: 'Економика:', text: ' Северный Рейн-Вестфалия – один из крупнейших экономических центров Германии. Исторически развиты угольная, железная, металлургическая, стальная и текстильная промышленность.' },
                        { text: 'Сельское хозяйство играет вспомогательную роль, обеспечивая продовольствием жителей крупных городов.' }
                    ],
                    cities: [{ bold: 'Крупные города:', text: ' Кёльн, Эссен, Дортмунд, Дюссельдорф, Дюйсбург, Бонн, Мюнстер, Вупперталь, Аахен, Билефельд, Падерборн, Бохум, Крефельд, Гельзенкирхен, Леверкузен, Мюльхайм, Ремшайд, Золинген, Мёнхен-Гладбах, Зиген, Хамм, Реклингхаузен.' }],
                    rivers: [{ bold: 'Главные реки и каналы:', text: ' Рейн, Липпе, Рур, Эмс, Везер, Миттельландканал.' }],
                    tourism: [{ bold: 'Туризм и отдых:', text: ' Северный Рейн-Вестфалия славится богатой историей и культурой. Здесь расположены многочисленные исторические здания, музеи и парки. Популярны экскурсии по Рейну и туристические маршруты по горным и лесным районам.' }]
                },
                symbols: {
                    title: "Геральдика",
                    items: [
                        { bold: "Герб:", text: " на гербе Северной Рейн-Вестфалии объединены символы трёх исторических провинций, из которых была образована земля в 1946-1947 годах. Серебристая полоска Рейна на зелёном фоне символизирует Рейнскую провинцию. Саксонский конь на красном фоне – символ Вестфалии (в вестфальском варианте он вставший на дыбы). Красная роза с золотой сердцевиной и листьями – герб графов фон Липпе, использовавшийся с XIII века.", img: "Germany/nrw/gerb.gif" },
                        { bold: "Флаг:", text: " флаг Северного Рейна-Вестфалии состоит из цветов герба: зелёного, белого и красного, расположенных горизонтальными полосами.", img: "Germany/nrw/flag.gif" }
                    ]
                },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: "После Второй мировой войны территория современной земли Северный Рейн-Вестфалия находилась в британской оккупационной зоне. Новая земля была создана 23 августа 1946 года на основе бывшей прусской провинции Вестфалия и северной части Рейнской провинции (Rheinland) британской оккупационной администрацией. Целью объединения было обеспечение единого управления Рурским бассейном, важного промышленного региона." },
                        { text: "В 1947 году бывшая земля Липпе была включена в состав Северного Рейна-Вестфалии согласно распоряжению британского военного командования № 77 от 21 января 1947 года. 5 ноября 1948 года парламент земли принял «Закон об объединении земли Липпе-Детмольд с землей Северный Рейн-Вестфалия», официально завершив процесс объединения." },
                        { text: "8 мая 1949 года Парламентский совет Германии принял Конституцию ФРГ, и земля Северный Рейн-Вестфалия официально стала одной из земель Германии." },
                        { text: "18 июня 1950 года была принята Конституция самой земли, закрепившая её внутреннее устройство и права." }
                    ]
                },
                discriptRegions:
                {
                    title: "Административные округа в Северном Рейне-Вестфалии",
                    items: [
                        { id: 1, name: 'Арнсберг', hasInfo: true, path: "arnsberg" },
                        { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold" },
                        { id: 3, name: 'Дюссельдорф', hasInfo: true, path: "dusseldorf" },
                        { id: 4, name: "Кёльн", hasInfo: true, path: "koln" },
                        { id: 5, name: 'Мюнстер', hasInfo: false, path: "munster" }
                    ]
                },
                cities: {
                    title: "Свободные города в Северном Рейне-Вестфалии",
                    items: [
                        { id: 28, name: 'Аахен', hasInfo: false, path: "aachen-city" },
                        { id: 6, name: 'Билефельд', hasInfo: false, path: "bielefeld", },
                        { id: 7, name: 'Бонн', hasInfo: false, path: "bonn", },
                        { id: 8, name: 'Боттроп', hasInfo: false, path: "bottrop", },
                        { id: 9, name: 'Бохум', hasInfo: false, path: "bochum", },
                        { id: 10, name: 'Вупперталь', hasInfo: false, path: "wuppertal", },
                        { id: 11, name: 'Гельзенкирхен', hasInfo: false, path: "gelsenkirchen", },
                        { id: 12, name: 'Дортмунд', hasInfo: true, path: "dortmund", },
                        { id: 13, name: 'Дуйсбург', hasInfo: false, path: "duisburg", },
                        { id: 14, name: 'Дюссельдорф', hasInfo: false, path: "duesseldorf_city", },
                        { id: 15, name: 'Золинген', hasInfo: false, path: "solingen", },
                        { id: 16, name: 'Кёльн', hasInfo: true, path: "koln", },
                        { id: 17, name: 'Крефельд', hasInfo: false, path: "krefeld", },
                        { id: 18, name: 'Леверкузен', hasInfo: false, path: "leverkusen", },
                        { id: 19, name: 'Мёнхенгладбах', hasInfo: false, path: "moenchengladbach", },
                        { id: 20, name: 'Мюльхайм-на-Руре', hasInfo: false, path: "muelheim" },
                        { id: 21, name: 'Мюнстер', hasInfo: false, path: "muenster", },
                        { id: 22, name: 'Оберхаузен', hasInfo: false, path: "oberhausen", },
                        { id: 23, name: 'Ремшайд', hasInfo: false, path: "remscheid", },
                        { id: 24, name: 'Хаген', hasInfo: false, path: "hagen", },
                        { id: 25, name: 'Хамм', hasInfo: false, path: "hamm", },
                        { id: 26, name: 'Херне', hasInfo: false, path: "herne", },
                        { id: 27, name: 'Эссен', hasInfo: false, path: "essen", }
                    ]
                },
                meta: {
                    title: "Северный Рейн-Вестфалия – информация о регионе",
                    description: "Северный Рейн-Вестфалия: города, округа, культура и достопримечательности.",
                    ogTitle: "Северный Рейн-Вестфалия – информация о регионе и округах",
                    ogDescription: "Подробная информация о Северном Рейне-Вестфалии: города, округа, история и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/koln-cathedral/001.jpg"
                }
            },
            ua: {
                name: 'Північний Рейн-Вестфалія',
                desc: {
                    capital: [{ bold: 'Столиця:', text: ' Дюссельдорф' }],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' близько 18,1 млн осіб. Іноземців – близько 2 млн осіб.' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' 34 000 км². Щільність населення – близько 525 осіб на 1 км².' }
                    ],
                    geography: [
                        { bold: 'Географія:' },
                        { text: 'Північний Рейн-Вестфалія розташований на заході Німеччини і межує з Бельгією (99 км), Нідерландами (387 км), а також з землями Нижня Саксонія (583 км), Гессен (269 км) та Рейнланд-Пфальц (307 км).' },
                        { text: 'Територія включає два великі ландшафтні регіони: Північна низовина та Німецьке середнегір’я, які поділяються на північно-рейнську та вестфальську частини вздовж Рейну.' },
                        { text: 'На лівому березі Рейну – гори Айфель (Eifel) та передгір’я Vennvorland (Аахенський регіон). На правому березі – Bergisches Land, Зауерланд (Sauerland), Ротхааргебірге (Rothaargebirge), Зігерланд (Siegerland), Сібернгіберге (Siebengebirge) та частини Західного лісу і Везербергланда (Weserbergland). Ліси займають близько 24% території.' }
                    ],
                    history: [
                        { bold: 'Походження назви:' },
                        { text: ' Назва Nordrhein-Westfalen з’явилася після постанови британського військового уряду 23 серпня 1946 року, що об’єднувала провінцію Вестфалія (Provinz Westfalen) та провінцію Північний Рейн (Provinz Nordrhein). 21 січня 1947 року до них приєдналася територія Ліппе (Lippe).' }
                    ],
                    economy: [
                        { bold: 'Економіка:' },
                        { text: ' Північний Рейн-Вестфалія – один із найбільших економічних центрів Німеччини. Історично розвинені вугільна, залізна, металургійна, сталева та текстильна промисловості.' },
                        { text: 'Сільське господарство має допоміжну роль, забезпечуючи продовольством жителів великих міст.' }
                    ],
                    cities: [
                        { bold: 'Великі міста:' },
                        { text: ' Кельн, Ессен, Дортмунд, Дюссельдорф, Дуйсбург, Бонн, Мюнстер, Вупперталь, Аахен, Білефельд, Падерборн, Бохум, Крефельд, Гельзенкірхен, Леверкузен, Мюльгайм, Ремшайд, Золінген, Менхен-Гладбах, Зіген, Хамм, Реклінггаузен.' }
                    ],
                    rivers: [
                        { bold: 'Основні ріки та канали:' },
                        { text: ' Рейн, Ліппе, Рур, Емс, Везер, Міттельландканал.' }
                    ],
                    tourism: [
                        { bold: 'Туризм і відпочинок:' },
                        { text: ' Північний Рейн-Вестфалія славиться багатою історією та культурою. Тут розташовані численні історичні будівлі, музеї та парки. Популярні екскурсії вздовж Рейну та туристичні маршрути гірськими і лісовими районами.' }
                    ]
                },
                symbols: {
                    title: "Геральдика",
                    items: [
                        { bold: "Герб:", text: " на гербі Північного Рейну-Вестфалії об'єднані символи трьох історичних провінцій, з яких була утворена земля у 1946–1947 роках. Срібляста смуга Рейну на зеленому тлі символізує Рейнську провінцію. Саксонський кінь на червоному тлі – символ Вестфалії (у вестфальському варіанті він встав на диби). Червона троянда з золотим серцевиною і листям – герб графів фон Ліппе, що використовувався з XIII століття.", img: "Germany/nrw/gerb.gif" },
                        { bold: "Прапор:", text: " прапор Північного Рейну-Вестфалії складається з кольорів герба: зеленого, білого та червоного, розташованих горизонтальними смугами.", img: "Germany/nrw/flag.gif" }
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        {
                            text: "Після Другої світової війни територія сучасної землі Північний Рейн-Вестфалія знаходилася в британській окупаційній зоні. Нова земля була створена 23 серпня 1946 року на основі колишньої прусської провінції Вестфалія та північної частини Рейнської провінції (Rheinland) британською окупаційною адміністрацією. Метою об'єднання було забезпечення єдиного управління Рурським басейном, важливим промисловим регіоном."
                        },
                        {
                            text: "У 1947 році колишня земля Ліппе була включена до складу Північного Рейну-Вестфалії відповідно до розпорядження британського військового командування № 77 від 21 січня 1947 року. 5 листопада 1948 року парламент землі прийняв «Закон про об’єднання землі Ліппе-Детмольд із землею Північний Рейн-Вестфалія», офіційно завершивши процес об’єднання."
                        },
                        {
                            text: "8 травня 1949 року Парламентська рада Німеччини прийняла Конституцію ФРН, і земля Північний Рейн-Вестфалія офіційно стала однією з земель Німеччини."
                        },
                        {
                            text: "18 червня 1950 року була прийнята Конституція самої землі, що закріпила її внутрішній устрій та права."
                        }
                    ]
                },
                discriptRegions:
                {
                    title: "Адміністративні округи в Північному Рейні-Вестфалії",
                    items: [
                        { id: 1, name: 'Арнсберг', hasInfo: true, path: "arnsberg" },
                        { id: 2, name: 'Детмольд', hasInfo: false, path: "detmold", },
                        { id: 3, name: 'Дюссельдорф', hasInfo: true, path: "dusseldorf" },
                        { id: 4, name: 'Кельн', hasInfo: true, path: "koln" },
                        { id: 5, name: 'Мюнстер', hasInfo: false, path: "munster" }
                    ]
                },
                cities: {
                    title: "Вільні міста в Північному Рейні-Вестфалії",
                    items: [
                        { id: 28, name: 'Аахен', hasInfo: false, path: "aachen-city" },
                        { id: 6, name: 'Білефельд', hasInfo: false, path: "bielefeld", },
                        { id: 7, name: 'Бонн', hasInfo: false, path: "bonn", },
                        { id: 8, name: 'Боттроп', hasInfo: false, path: "bottrop", },
                        { id: 9, name: 'Бохум', hasInfo: false, path: "bochum", },
                        { id: 10, name: 'Вупперталь', hasInfo: false, path: "wuppertal", },
                        { id: 11, name: 'Гельзенкірхен', hasInfo: false, path: "gelsenkirchen", },
                        { id: 12, name: 'Дортмунд', hasInfo: true, path: "dortmund", },
                        { id: 13, name: 'Дуйсбург', hasInfo: false, path: "duisburg", },
                        { id: 14, name: 'Дюссельдорф', hasInfo: false, path: "duesseldorf_city", },
                        { id: 15, name: 'Золінген', hasInfo: false, path: "solingen", },
                        { id: 16, name: 'Кельн', hasInfo: true, path: "koln", },
                        { id: 17, name: 'Крефельд', hasInfo: false, path: "krefeld", },
                        { id: 18, name: 'Леверкузен', hasInfo: false, path: "leverkusen", },
                        { id: 19, name: 'Менхенгладбах', hasInfo: false, path: "moenchengladbach", },
                        { id: 20, name: 'Мюльхайм-на-Рурі', hasInfo: false, path: "muelheim", },
                        { id: 21, name: 'Мюнстер', hasInfo: false, path: "muenster", },
                        { id: 22, name: 'Обергаузен', hasInfo: false, path: "oberhausen", },
                        { id: 23, name: 'Ремшайд', hasInfo: false, path: "remscheid", },
                        { id: 24, name: 'Хаген', hasInfo: false, path: "hagen", },
                        { id: 25, name: 'Хамм', hasInfo: false, path: "hamm", },
                        { id: 26, name: 'Херне', hasInfo: false, path: "herne", },
                        { id: 27, name: 'Ессен', hasInfo: false, path: "essen", }
                    ]
                },
                meta: {
                    title: "Північний Рейн-Вестфалія – інформація про регіон",
                    description: "Північний Рейн-Вестфалія: міста, округи, культура та визначні місця.",
                    ogTitle: "Північний Рейн-Вестфалія – інформація про регіон та округи",
                    ogDescription: "Детальна інформація про Північний Рейн-Вестфалія: міста, округи, історія та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/koln-cathedral/001.jpg"
                }
            },
            de: {
                name: 'Nordrhein-Westfalen',
                desc: {
                    capital: [{ bold: 'Hauptstadt:', text: ' Düsseldorf' }],
                    population: [
                        { bold: 'Einwohnerzahl:' },
                        { text: ' ca. 18,1 Mio. Menschen. Ausländer: ca. 2 Mio. Menschen.' }
                    ],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' 34.000 km². Bevölkerungsdichte: ca. 525 Einwohner pro km².' }
                    ],
                    geography: [
                        { bold: 'Geographie:' },
                        { text: ' Nordrhein-Westfalen liegt im Westen Deutschlands und grenzt an Belgien (99 km), die Niederlande (387 km) sowie an die Bundesländer Niedersachsen (583 km), Hessen (269 km) und Rheinland-Pfalz (307 km).' },
                        { text: 'Das Land umfasst zwei große Landschaftsregionen: das Norddeutsche Tiefland und das deutsche Mittelgebirge, die sich entlang des Rheins in nordrheinische und westfälische Teile gliedern.' },
                        { text: 'Am linken Rheinufer liegen die Eifel-Berge (Eifel) und das Vorland Vennvorland (Aachener Region). Am rechten Rheinufer befinden sich Bergisches Land, Sauerland, Rothaargebirge, Siegerland, Siebengebirge sowie Teile des Westwaldes und Weserberglands. Wälder bedecken etwa 24 % der Fläche.' }
                    ],
                    history: [
                        { bold: 'Namensherkunft:' },
                        { text: ' Der Name Nordrhein-Westfalen entstand nach der Anordnung der britischen Militärregierung am 23. August 1946 durch die Vereinigung der Provinz Westfalen (Provinz Westfalen) und der Provinz Nordrhein (Provinz Nordrhein). Am 21. Januar 1947 wurde das Gebiet Lippe (Lippe) hinzugefügt.' }
                    ],
                    economy: [
                        { bold: 'Wirtschaft:' },
                        { text: ' Nordrhein-Westfalen ist eines der größten wirtschaftlichen Zentren Deutschlands. Historisch entwickelte Branchen sind Kohle-, Eisen-, Metall-, Stahl- und Textilindustrie.' },
                        { text: 'Die Landwirtschaft spielt eine untergeordnete Rolle und versorgt hauptsächlich die Bevölkerung der Großstädte mit Lebensmitteln.' }
                    ],
                    cities: [
                        { bold: 'Große Städte:' },
                        { text: ' Köln, Essen, Dortmund, Düsseldorf, Duisburg, Bonn, Münster, Wuppertal, Aachen, Bielefeld, Paderborn, Bochum, Krefeld, Gelsenkirchen, Leverkusen, Mülheim, Remscheid, Solingen, Mönchengladbach, Siegen, Hamm, Recklinghausen.' }
                    ],
                    rivers: [
                        { bold: 'Wichtige Flüsse und Kanäle:' },
                        { text: ' Rhein, Lippe, Ruhr, Ems, Weser, Mittellandkanal.' }
                    ],
                    tourism: [
                        { bold: 'Tourismus und Freizeit:' },
                        { text: ' Nordrhein-Westfalen ist bekannt für seine reiche Geschichte und Kultur. Zahlreiche historische Gebäude, Museen und Parks laden zu Besuchen ein. Beliebt sind Ausflüge entlang des Rheins und touristische Routen durch die Berge und Waldgebiete.' }
                    ],
                },
                symbols: {
                    title: "Heraldik",
                    items: [
                        { bold: "Wappen:", text: " das Wappen von Nordrhein-Westfalen vereint die Symbole der drei historischen Provinzen, aus denen das Land 1946–1947 gebildet wurde. Der silberne Rheinbalken auf grünem Grund symbolisiert die Rheinprovinz. Das sächsische Pferd auf rotem Grund ist das Symbol Westfalens (im westfälischen Wappen aufbäumend dargestellt). Die rote Rose mit goldenem Herz und Blättern ist das Wappen der Grafen von Lippe, das seit dem 13. Jahrhundert verwendet wird.", img: "Germany/nrw/gerb.gif" },
                        { bold: "Flagge:", text: " die Flagge Nordrhein-Westfalens besteht aus den Farben des Wappens: Grün, Weiß und Rot, horizontal angeordnet.", img: "Germany/nrw/flag.gif" }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: "Nach dem Zweiten Weltkrieg lag das Gebiet des heutigen Nordrhein-Westfalen in der britischen Besatzungszone. Das neue Bundesland wurde am 23. August 1946 aus der ehemaligen preußischen Provinz Westfalen und dem nördlichen Teil der Rheinprovinz (Rheinland) durch die britische Besatzungsverwaltung geschaffen. Ziel der Zusammenlegung war die einheitliche Verwaltung des Ruhrgebiets, einer wichtigen Industrieregion." },
                        { text: "1947 wurde das ehemalige Land Lippe gemäß dem Erlass Nr. 77 der britischen Militärverwaltung vom 21. Januar 1947 in Nordrhein-Westfalen eingegliedert. Am 5. November 1948 verabschiedete das Landesparlament das „Gesetz über den Zusammenschluss des Landes Lippe-Detmold mit dem Land Nordrhein-Westfalen“, womit der Vereinigungsprozess offiziell abgeschlossen wurde." },
                        { text: "Am 8. Mai 1949 nahm der Parlamentarische Rat Deutschlands das Grundgesetz der BRD an, und Nordrhein-Westfalen wurde offiziell eines der Bundesländer Deutschlands." },
                        { text: "Am 18. Juni 1950 wurde die Landesverfassung verabschiedet, die die innere Organisation und die Rechte des Landes festlegte." }
                    ]
                },
                discriptRegions:
                {
                    title: "Regierungsbezirke in Nordrhein-Westfalen",
                    items: [
                        { id: 1, name: 'Arnsberg', hasInfo: true, path: "arnsberg" },
                        { id: 2, name: 'Detmold', hasInfo: false, path: "detmold" },
                        { id: 3, name: 'Düsseldorf', hasInfo: true, path: "dusseldorf" },
                        { id: 4, name: 'Köln', hasInfo: true, path: "koln" },
                        { id: 5, name: 'Münster', hasInfo: false, path: "munster" }
                    ]
                },
                cities: {
                    title: "Kreisfreie Städte in Nordrhein-Westfalen",
                    items: [
                        { id: 28, name: 'Aachen', hasInfo: false, path: "aachen" },
                        { id: 6, name: 'Bielefeld', hasInfo: false, path: "bielefeld", },
                        { id: 7, name: 'Bonn', hasInfo: false, path: "bonn", },
                        { id: 8, name: 'Bottrop', hasInfo: false, path: "bottrop", },
                        { id: 9, name: 'Bochum', hasInfo: false, path: "bochum", },
                        { id: 10, name: 'Wuppertal', hasInfo: false, path: "wuppertal", },
                        { id: 11, name: 'Gelsenkirchen', hasInfo: false, path: "gelsenkirchen", },
                        { id: 12, name: 'Dortmund', hasInfo: true, path: "dortmund", },
                        { id: 13, name: 'Duisburg', hasInfo: false, path: "duisburg", },
                        { id: 14, name: 'Düsseldorf', hasInfo: false, path: "duesseldorf_city", },
                        { id: 15, name: 'Solingen', hasInfo: false, path: "solingen", },
                        { id: 16, name: 'Köln', hasInfo: true, path: "koln", },
                        { id: 17, name: 'Krefeld', hasInfo: false, path: "krefeld", },
                        { id: 18, name: 'Leverkusen', hasInfo: false, path: "leverkusen", },
                        { id: 19, name: 'Mönchengladbach', hasInfo: false, path: "moenchengladbach", },
                        { id: 20, name: 'Mülheim an der Ruhr', hasInfo: false, path: "muelheim", },
                        { id: 21, name: 'Münster', hasInfo: false, path: "muenster", },
                        { id: 22, name: 'Oberhausen', hasInfo: false, path: "oberhausen", },
                        { id: 23, name: 'Remscheid', hasInfo: false, path: "remscheid", },
                        { id: 24, name: 'Hagen', hasInfo: false, path: "hagen", },
                        { id: 25, name: 'Hamm', hasInfo: false, path: "hamm", },
                        { id: 26, name: 'Herne', hasInfo: false, path: "herne", },
                        { id: 27, name: 'Essen', hasInfo: false, path: "essen", }
                    ]
                },
                meta: {
                    title: "Nordrhein-Westfalen – Informationen über die Region",
                    description: "Nordrhein-Westfalen: Städte, Bezirke, Kultur und Sehenswürdigkeiten.",
                    ogTitle: "Nordrhein-Westfalen – Informationen über die Region und Bezirke",
                    ogDescription: "Detaillierte Informationen über Nordrhein-Westfalen: Städte, Bezirke, Geschichte und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/koln-cathedral/001.jpg"
                }
            }
        },
    },
    {
        id: 11,
        hasInfo: true,
        path: 'rheinland_pfalz',
        translations: {
            ru: {
                name: 'Рейнланд-Пфальц',
                desc: {
                    capital: [{ bold: 'Столица:', text: ' Майнц' }],
                    population: [{ bold: 'Население (2024):', text: ' Население: около 4,1 млн человек. Иностранцев – около 500 тыс. человек.' }],
                    area: [
                        { bold: 'Площадь:' },
                        { text: ' 19 854 км². Плотность населения – около 206 человек на 1 км².' }
                    ],
                    geography: [
                        { bold: 'География:' },
                        { text: ' Рейнланд-Пфальц находится на западе Германии. Граничит с Бельгией (133 км), Люксембургом (136 км), Францией (136 км), а также с федеральными землями Северный Рейн-Вестфалия (307 км), Саар (91 км), Гессен (203 км) и Рейнланд-Пфальц (разделяет внутренние границы между округами).' },
                        { text: ' Земля включает несколько крупных ландшафтных регионов: Рейнский грабен (Rheingraben), Хунсрюк (Hunsrück), Вестервальд (Westerwald), Эйфель (Eifel) и часть Пфальцского леса (Pfälzerwald). Леса занимают около 42% территории.' },
                    ],
                    history: [
                        { bold: 'Происхождение названия:' },
                        { text: ' Название Rheinland-Pfalz появилось после Второй мировой войны в 1946 году, когда британская и французская оккупационные зоны объединили южную часть бывшей Рейнской провинции Пруссии, юг Рейнской земли, а также регион Пфальц.' }
                    ],
                    economy: [
                        { bold: 'Економика:' },
                        { text: ' Земля Рейнланд-Пфальц славится сельским хозяйством (виноделие – один из крупнейших регионов Германии), химической промышленностью, машиностроением и энергетикой. Туризм и винные маршруты занимают важное место в экономике.' },
                    ],
                    cities: [
                        { bold: 'Крупные города:' },
                        { text: ' Майнц, Кобленц, Трир, Людвигсхафен, Кайзерслаутерн, Бад-Кройцнах, Вормс, Майнц-Кастель, Зайль.' }
                    ],
                    rivers: [
                        { bold: 'Главные реки:' },
                        { text: ' Рейн, Мозель, Наэ, Лан, Зайль.' }
                    ],
                    tourism: [
                        { bold: 'Туризм и отдых:' },
                        { text: ' Рейнланд-Пфальц известна историческими городами, римскими памятниками, замками, виноградниками и природными парками. Популярны маршруты вдоль Рейна и Мозеля, посещение Трира, Кобленца, Майнца и множества замков.' }
                    ]
                },
                symbols: {
                    title: "Геральдика",
                    items: [
                        {
                            bold: "Герб:",
                            text: " На гербе Рейнланд-Пфальц объединены символы исторических территорий: красный лев на белом фоне (Пфальц), серебряный крест на красном (Майнц), золотой орел на черном (Рейнская провинция).",
                            img: "Germany/rheinland-pfalz/gerb.png"
                        },
                        {
                            bold: "Флаг:",
                            text: " Флаг Рейнланд-Пфальц состоит из трёх горизонтальных полос: черной, красной и золотой.",
                            img: "Germany/rheinland-pfalz/flag.png"
                        }
                    ]
                },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: "Территория современной земли Рейнланд-Пфальц имеет богатую и разнообразную историю. Ещё в древнеримские времена здесь располагались крупные поселения, такие как Трир, один из старейших городов Германии. Во времена Средневековья регион разделялся между различными княжествами, епископствами и имперскими городами. Значительную роль играли архиепископства Майнца и Трира, а также Пфальцские графства." },
                        { text: "В XVIII-XIX веках земли подвергались частым изменениям власти: после наполеоновских войн регион вошёл в состав Рейнской провинции Пруссии и других немецких государств. Экономика региона развивалась вокруг сельского хозяйства, виноделия и ремёсел, а города становились важными торговыми центрами." },
                        { text: "После Первой мировой войны часть территории была под французской администрацией. Во время Второй мировой войны регион сильно пострадал, но многие исторические памятники были восстановлены после её окончания." },
                        { text: "В 1946 году под руководством французской оккупационной администрации была создана земля Рейнланд-Пфальц, объединяющая южную часть Рейнской провинции, Пфальц и некоторые районы бывшей Люксембургской области. В 1947 году был принят первый закон о земле, определивший её административное устройство." },
                        { text: "С момента образования земли Рейнланд-Пфальц стала важным культурным, экономическим и политическим регионом Германии, сохранившим богатое историческое наследие и уникальные природные ландшафты. Сегодня Рейнланд-Пфальц известна своими замками, виноградниками, римскими памятниками и историческими городами." },
                    ]
                },
                discriptRegions:
                {
                    title: "Районы в Рейнланд-Пфальц",
                    items: [
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
                        { id: 15, name: 'Майен-Кобленц', hasInfo: true, path: "mayen_koblenz" },
                        { id: 16, name: 'Нойвид', hasInfo: false, path: "neuwied" },
                        { id: 17, name: 'Райн-Хунсрюк', hasInfo: false, path: "rhein_hunsrueck_kreis" },
                        { id: 18, name: 'Райн-Лан', hasInfo: false, path: "rhein_lahn_kreis" },
                        { id: 19, name: 'Райн-Пфальц', hasInfo: false, path: "rhein_pfalz_kreis" },
                        { id: 20, name: 'Южный Вайнштрассе', hasInfo: false, path: "suedliche_weinstrasse" },
                        { id: 21, name: 'Юго-западный Пфальц', hasInfo: false, path: "suedwestpfalz" },
                        { id: 22, name: 'Трир-Саарбург', hasInfo: true, path: "trier_saarburg" },
                        { id: 23, name: 'Вулканайфель', hasInfo: false, path: "vulkaneifel" },
                        { id: 24, name: 'Вестервальд', hasInfo: false, path: "westerwaldkreis" },
                    ]
                },
                cities: {
                    title: "Свободные города в Рейнланд-Пфальц",
                    items: [
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
                },
                meta: {
                    title: "Рейнланд-Пфальц — информация о регионе",
                    description: "Рейнланд-Пфальц: города, округа, культура и достопримечательности.",
                    ogTitle: "Рейнланд-Пфальц — информация о регионе и округах",
                    ogDescription: "Подробная информация о Рейнланд-Пфальц: города, округа, история и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
                }
            },
            ua: {
                name: 'Рейнланд-Пфальц',
                desc: {
                    capital: [{ bold: 'Столиця:', text: ' Майнц' }],
                    population: [
                        { bold: 'Населення (2024):' },
                        { text: ' Населення: близько 4,1 млн осіб. Іноземців – близько 500 тис. осіб.' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' 19 854 км². Щільність населення – близько 206 осіб на 1 км².' }
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
                        { text: "Територія сучасної землі Рейнланд-Пфальц має багату й різноманітну історію. Ще за часів Стародавнього Риму тут існували великі поселення, такі як Трір – одне з найдавніших міст Німеччини. У Середньовіччі регіон був поділений між різними князівствами, єпископствами та імперськими містами. Важливу роль відігравали архієпископства Майнца і Тріра, а також Пфальцькі графства." },
                        { text: "У XVIII–XIX століттях землі часто змінювали приналежність: після наполеонівських воєн регіон увійшов до складу Рейнської провінції Пруссії та інших німецьких держав. Економіка розвивалася навколо сільського господарства, виноробства та ремесел, а міста ставали важливими торговельними центрами." },
                        { text: "Після Першої світової війни частина території перебувала під французькою адміністрацією. Під час Другої світової війни регіон зазнав значних руйнувань, однак багато історичних пам’яток було відновлено після її завершення." },
                        { text: "У 1946 році під керівництвом французької окупаційної адміністрації була створена земля Рейнланд-Пфальц, що об’єднала південну частину Рейнської провінції, Пфальц і деякі райони колишньої Люксембурзької області. У 1947 році був ухвалений перший земельний закон, який визначив адміністративний устрій." },
                        { text: "З моменту утворення Рейнланд-Пфальц стала важливим культурним, економічним і політичним регіоном Німеччини, зберігши багату історичну спадщину та унікальні природні ландшафти. Сьогодні Рейнланд-Пфальц відома своїми замками, виноградниками, римськими пам’ятками та історичними містами." },
                    ]
                },
                discriptRegions:
                {
                    title: "Адміністративні округи Рейнланд-Пфальц",
                    items: [
                        { id: 1, name: 'Арвайлер', hasInfo: false, path: "ahrweiler" },
                        { id: 2, name: 'Альтенкірхен', hasInfo: false, path: "altenkirchen" },
                        { id: 3, name: 'Альцай-Вормс', hasInfo: false, path: "alzey_worms" },
                        { id: 4, name: 'Бад-Дюркгайм', hasInfo: false, path: "bad_duerkheim" },
                        { id: 5, name: 'Бад-Кройцнах', hasInfo: false, path: "bad_kreuznach" },
                        { id: 6, name: 'Бернкастель-Віттліх', hasInfo: false, path: "bernkastel_wittlich" },
                        { id: 7, name: 'Біркенфельд', hasInfo: false, path: "birkenfeld" },
                        { id: 8, name: 'Кохем-Целль', hasInfo: false, path: "cochem_zell" },
                        { id: 9, name: 'Доннерсберг', hasInfo: false, path: "donnersbergkreis" },
                        { id: 10, name: 'Айфелькрайс Бітбург-Прюм', hasInfo: false, path: "eifelkreis_bitburg_pruem" },
                        { id: 11, name: 'Гермерсгайм', hasInfo: false, path: "germersheim" },
                        { id: 12, name: 'Кайзерслаутерн', hasInfo: false, path: "kaiserslautern" },
                        { id: 13, name: 'Кузель', hasInfo: false, path: "kusel" },
                        { id: 14, name: 'Майнц-Бінген', hasInfo: false, path: "mainz_bingen" },
                        { id: 15, name: 'Маєн-Кобленц', hasInfo: true, path: "mayen_koblenz" },
                        { id: 16, name: 'Нойвід', hasInfo: false, path: "neuwied" },
                        { id: 17, name: 'Райн-Гунсрюк', hasInfo: false, path: "rhein_hunsrueck_kreis" },
                        { id: 18, name: 'Райн-Лан', hasInfo: false, path: "rhein_lahn_kreis" },
                        { id: 19, name: 'Райн-Пфальц', hasInfo: false, path: "rhein_pfalz_kreis" },
                        { id: 20, name: 'Південна Вайнштрассе', hasInfo: false, path: "suedliche_weinstrasse" },
                        { id: 21, name: 'Південно-Західний Пфальц', hasInfo: false, path: "suedwestpfalz" },
                        { id: 22, name: 'Трір-Саарбург', hasInfo: true, path: "trier_saarburg" },
                        { id: 23, name: 'Вулканайфель', hasInfo: false, path: "vulkaneifel" },
                        { id: 24, name: 'Вестервальд', hasInfo: false, path: "westerwaldkreis" },
                    ]
                },
                cities: {
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
                },
                meta: {
                    title: "Рейнланд-Пфальц — інформація про регіон",
                    description: "Рейнланд-Пфальц: міста, округи, культура та пам’ятки.",
                    ogTitle: "Рейнланд-Пфальц — інформація про регіон і округи",
                    ogDescription: "Детальна інформація про Рейнланд-Пфальц: міста, округи, історія та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
                }
            },
            de: {
                name: 'Rheinland-Pfalz',
                desc: {
                    capital: [{ bold: 'Hauptstadt:', text: ' Mainz' }],
                    population: [{ bold: 'Einwohnerzahl (2024):', text: ' Bevölkerung: etwa 4,1 Millionen Menschen. Ausländer – etwa 500.000 Personen.' }],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' 19.854 km². Bevölkerungsdichte – etwa 206 Einwohner pro 1 km².' }
                    ],
                    geography: [
                        { bold: 'Geografie:' },
                        { text: ' Rheinland-Pfalz liegt im Westen Deutschlands. Es grenzt an Belgien (133 km), Luxemburg (136 km), Frankreich (136 km) sowie an die Bundesländer Nordrhein-Westfalen (307 km), Saarland (91 km), Hessen (203 km) und Rheinland-Pfalz selbst (interne Verwaltungsgrenzen zwischen den Landkreisen).' },
                        { text: ' Das Bundesland umfasst mehrere große Landschaftsregionen: den Rheingraben (Rheingraben), den Hunsrück, den Westerwald, die Eifel sowie Teile des Pfälzerwaldes. Wälder bedecken etwa 42 % der Landesfläche.' },
                    ],
                    history: [
                        { bold: 'Herkunft des Namens:' },
                        { text: ' Der Name Rheinland-Pfalz entstand nach dem Zweiten Weltkrieg im Jahr 1946, als die britischen und französischen Besatzungszonen den südlichen Teil der ehemaligen Rheinprovinz Preußens, den Süden des Rheinlands sowie die Region Pfalz zusammenführten.' }
                    ],
                    economy: [
                        { bold: 'Wirtschaft:' },
                        { text: ' Rheinland-Pfalz ist bekannt für seine Landwirtschaft (der Weinbau zählt zu den bedeutendsten Regionen Deutschlands), die chemische Industrie, den Maschinenbau und die Energiewirtschaft. Tourismus und Weinstraßen nehmen einen wichtigen Platz in der Wirtschaft ein.' },
                    ],
                    cities: [
                        { bold: 'Große Städte:' },
                        { text: ' Mainz, Koblenz, Trier, Ludwigshafen, Kaiserslautern, Bad Kreuznach, Worms, Mainz-Kastel, Sülz.' }
                    ],
                    rivers: [
                        { bold: 'Wichtige Flüsse:' },
                        { text: ' Rhein, Mosel, Nahe, Lahn, Sülz.' }
                    ],
                    tourism: [
                        { bold: 'Tourismus und Erholung:' },
                        { text: ' Rheinland-Pfalz ist bekannt für seine historischen Städte, römischen Denkmäler, Burgen, Weinberge und Naturparks. Beliebt sind Routen entlang des Rheins und der Mosel sowie Besuche in Trier, Koblenz, Mainz und zahlreichen Burgen.' }
                    ]
                },
                symbols: {
                    title: "Heraldik",
                    items: [
                        {
                            bold: "Wappen:",
                            text: " Im Wappen von Rheinland-Pfalz sind die Symbole historischer Territorien vereint: der rote Löwe auf weißem Grund (Pfalz), das silberne Kreuz auf rotem Grund (Mainz) sowie der goldene Adler auf schwarzem Grund (Rheinprovinz).",
                            img: "Germany/rheinland-pfalz/gerb.png"
                        },
                        {
                            bold: "Flagge:",
                            text: " Die Flagge von Rheinland-Pfalz besteht aus drei horizontalen Streifen: Schwarz, Rot und Gold.",
                            img: "Germany/rheinland-pfalz/flag.png"
                        }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: "Das Gebiet des heutigen Bundeslandes Rheinland-Pfalz besitzt eine reiche und vielfältige Geschichte. Bereits in der römischen Antike befanden sich hier bedeutende Siedlungen wie Trier, eine der ältesten Städte Deutschlands. Im Mittelalter war die Region zwischen verschiedenen Fürstentümern, Bistümern und Reichsstädten aufgeteilt. Eine bedeutende Rolle spielten die Erzbistümer Mainz und Trier sowie die pfälzischen Grafschaften." },
                        { text: "Im 18. und 19. Jahrhundert erlebten die Gebiete häufige Herrschaftswechsel: Nach den napoleonischen Kriegen wurde die Region Teil der Rheinprovinz Preußens sowie anderer deutscher Staaten. Die Wirtschaft entwickelte sich vor allem durch Landwirtschaft, Weinbau und Handwerk, während die Städte zu wichtigen Handelszentren wurden." },
                        { text: "Nach dem Ersten Weltkrieg stand ein Teil des Gebiets unter französischer Verwaltung. Während des Zweiten Weltkriegs erlitt die Region schwere Zerstörungen, doch viele historische Bauwerke wurden nach Kriegsende wiederaufgebaut." },
                        { text: "Im Jahr 1946 wurde unter der Leitung der französischen Besatzungsverwaltung das Bundesland Rheinland-Pfalz gegründet, das den südlichen Teil der Rheinprovinz, die Pfalz sowie einige Gebiete der ehemaligen luxemburgischen Region vereinte. 1947 wurde das erste Landesgesetz verabschiedet, das die administrative Struktur festlegte." },
                        { text: "Seit seiner Gründung hat sich Rheinland-Pfalz zu einem bedeutenden kulturellen, wirtschaftlichen und politischen Bundesland Deutschlands entwickelt, das sein reiches historisches Erbe und seine einzigartigen Naturlandschaften bewahrt hat. Heute ist Rheinland-Pfalz bekannt für seine Burgen, Weinberge, römischen Denkmäler und historischen Städte." },
                    ]
                },
                discriptRegions:
                {
                    title: "Landkreise in Rheinland-Pfalz",
                    items: [
                        { id: 1, name: 'Ahrweiler', hasInfo: false, path: "ahrweiler" },
                        { id: 2, name: 'Altenkirchen', hasInfo: false, path: "altenkirchen" },
                        { id: 3, name: 'Alzey-Worms', hasInfo: false, path: "alzey_worms" },
                        { id: 4, name: 'Bad Dürkheim', hasInfo: false, path: "bad_duerkheim" },
                        { id: 5, name: 'Bad Kreuznach', hasInfo: false, path: "bad_kreuznach" },
                        { id: 6, name: 'Bernkastel-Wittlich', hasInfo: false, path: "bernkastel_wittlich" },
                        { id: 7, name: 'Birkenfeld', hasInfo: false, path: "birkenfeld" },
                        { id: 8, name: 'Cochem-Zell', hasInfo: false, path: "cochem_zell" },
                        { id: 9, name: 'Donnersbergkreis', hasInfo: false, path: "donnersbergkreis" },
                        { id: 10, name: 'Eifelkreis Bitburg-Prüm', hasInfo: false, path: "eifelkreis_bitburg-pruem" },
                        { id: 11, name: 'Germersheim', hasInfo: false, path: "germersheim" },
                        { id: 12, name: 'Kaiserslautern', hasInfo: false, path: "kaiserslautern" },
                        { id: 13, name: 'Kusel', hasInfo: false, path: "kusel" },
                        { id: 14, name: 'Mainz-Bingen', hasInfo: false, path: "mainz_bingen" },
                        { id: 15, name: 'Mayen-Koblenz', hasInfo: true, path: "mayen_koblenz" },
                        { id: 16, name: 'Neuwied', hasInfo: false, path: "neuwied" },
                        { id: 17, name: 'Rhein-Hunsrück-Kreis', hasInfo: false, path: "rhein_hunsrueck_kreis" },
                        { id: 18, name: 'Rhein-Lahn-Kreis', hasInfo: false, path: "rhein_lahn_kreis" },
                        { id: 19, name: 'Rhein-Pfalz-Kreis', hasInfo: false, path: "rhein_pfalz_kreis" },
                        { id: 20, name: 'Südliche Weinstraße', hasInfo: false, path: "suedliche_weinstrasse" },
                        { id: 21, name: 'Südwestpfalz', hasInfo: false, path: "suedwestpfalz" },
                        { id: 22, name: 'Trier-Saarburg', hasInfo: true, path: "trier_saarburg" },
                        { id: 23, name: 'Vulkaneifel', hasInfo: false, path: "vulkaneifel" },
                        { id: 24, name: 'Westerwaldkreis', hasInfo: false, path: "westerwaldkreis" },
                    ]
                },
                cities: {
                    title: "Kreisfreie Städte in Rheinland-Pfalz",
                    items: [
                        { id: 25, name: 'Mainz', hasInfo: false, path: "mainz" },
                        { id: 26, name: 'Koblenz', hasInfo: false, path: "koblenz" },
                        { id: 27, name: 'Ludwigshafen', hasInfo: false, path: "ludwigshafen" },
                        { id: 28, name: 'Trier', hasInfo: true, path: "trier" },
                        { id: 29, name: 'Kaiserslautern', hasInfo: false, path: "kaiserslautern-city" },
                        { id: 30, name: 'Worms', hasInfo: false, path: "worms" },
                        { id: 31, name: 'Speyer', hasInfo: false, path: "speyer" },
                        { id: 32, name: 'Frankenthal', hasInfo: false, path: "frankenthal" },
                        { id: 33, name: 'Landau in der Pfalz', hasInfo: false, path: "landau" },
                        { id: 34, name: 'Neustadt an der Weinstraße', hasInfo: false, path: "neustadt" },
                        { id: 35, name: 'Pirmasens', hasInfo: false, path: "pirmasens" },
                        { id: 36, name: 'Zweibrücken', hasInfo: false, path: "zweibruecken" }
                    ]
                },
                meta: {
                    title: "Rheinland-Pfalz — Informationen zur Region",
                    description: "Rheinland-Pfalz: Städte, Landkreise, Kultur und Sehenswürdigkeiten.",
                    ogTitle: "Rheinland-Pfalz — Informationen zur Region und zu den Landkreisen",
                    ogDescription: "Detaillierte Informationen zu Rheinland-Pfalz: Städte, Landkreise, Geschichte und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
                }
            }
        },
    }
]

export default datas