const datas = [
    {
        id: "ansembourg_castle",
        type: ["palace_or_castle"], rating: "popular",
        path: "ansembourg_castle",
        countryPath: "luxembourg", regionPath: "mersch", districtPath: "city", cityPath: "ansembourg",
        fotoCard: "Luxembourg/seven_castles/ansembourg_castle/001.jpg",
        coord: { lat: 49.700543521986624, lng: 6.0462722984064365 },
        routes: "seven_castles", showMore: true,
        translations: {
            ru: {
                name: "Замок-дворец Ансембург",
                location: "Ансембург, Люксембург",
                short_description: "Замок Ансембург (Château d’Ansembourg) – исторический замок в Люксембурге, расположенный в долине реки Эйш. Комплекс известен своей барочной архитектурой, ухоженными садами и атмосферой загородной аристократической резиденции. Замок часто воспринимается как один из наиболее живописных частных исторических ансамблей страны.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Замок Ансембург (Château d’Ansembourg)", text: "представляет собой классическую усадебную резиденцию с элементами барокко, окружённую террасными садами и лесистыми холмами. Архитектурный облик формировался постепенно, и сегодня комплекс включает как жилые, так и хозяйственные постройки, объединённые в единый ансамбль." },
                        { text: "Особое внимание привлекают сады в стиле барокко – с геометрической планировкой, лестницами, скульптурами и декоративными элементами. Они считаются одной из главных ценностей объекта и создают эффект «дворцового сада» в миниатюре." },
                        { text: "Замок не является классическим музейным комплексом с постоянными экспозициями внутри всех зданий, поэтому доступ может быть ограничен (часть территории может находиться в частной собственности или использоваться для мероприятий)." },
                        { bold: "История", text: "История замка связана с семьёй Маршан д’Ансембур  (Marchant d’Ansembourg), которая сыграла важную роль в его развитии и преобразовании. Основной этап формирования ансамбля относится к XVII–XVIII векам, когда резиденция приобрела свой барочный характер." },
                        { text: "Позднее территория и здания неоднократно перестраивались и дополнялись, особенно в части садов и декоративных элементов. Именно в этот период замок получил тот облик, который во многом сохранился до наших дней." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "10, Rue de la Vallée, L-7411 Ansembourg, Luxembourg" },
                        { bold: "Доступ: ", text: "ограниченный, возможны посещения сада или территории в определённые периоды (зависит от текущего статуса)" }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Сады замка считаются одним из наиболее ярких примеров барочного садового искусства в Люксембурге " },
                        { text: "Архитектурный ансамбль формировался более одного века " },
                        { text: "Замок часто используется как пример «живой» аристократической резиденции, а не музейного объекта " },
                        { text: "Расположение в долине делает его особенно живописным с панорамных точек " }
                    ]
                },
                construction_period: "XVII–XVIII века ",
                founder: "Связан с дворянской семьёй Маршан д’Ансембур  (Marchant d’Ansembourg)",
                meta: {
                    title: "Замок-дворец Ансембург в Люксембурге – Château d’Ansembourg, барочный замок и сады",
                    description: "Замок-дворец Ансембург в Люксембурге – историческая аристократическая резиденция XVII–XVIII века с барочными садами и живописной долиной реки Эйш. Информация, история и особенности.",
                    ogTitle: "Замок-дворец Ансембург – барочная жемчужина Люксембурга",
                    ogDescription: "Живописный замок Ансембург в долине Эйш: история, барочные сады и атмосфера старинной европейской резиденции.",
                    keywords: "замок Ансембург, дворец, замки, дворцы, Шато д’Ансембург, Château d’Ansembourg, замки Люксембурга, достопримечательности Люксембурга, барочный замок, барочные сады Люксембург, исторические замки Европы, дворянская резиденция Люксембург, Marchant d’Ansembourg (Маршан д’Ансембур), долина реки Эйш, Ansembourg castle, Luxembourg castles, baroque gardens Luxembourg, historic estates Luxembourg, Luxembourg attractions",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/ansembourg_castle/001.jpg"
                }
            },
            ua: {
                name: "Палац-замок Ансембурґ",
                location: "Ансембург, Люксембург",
                short_description: "Замок Ансембург (Château d’Ansembourg) – історичний замок у Люксембурзі, розташований у долині річки Ейш. Комплекс відомий своєю бароковою архітектурою, доглянутими садами та атмосферою заміської аристократичної резиденції. Замок часто сприймається як один із наймальовничіших приватних історичних ансамблів країни.",
                full_description: {
                    title: "Опис і історія",
                    items: [
                        { bold: "Замок Ансембург (Château d’Ansembourg)", text: "є класичною маєтковою резиденцією з елементами бароко, оточеною терасними садами та лісистими пагорбами. Архітектурний вигляд формувався поступово, і сьогодні комплекс включає як житлові, так і господарські будівлі, об’єднані в єдиний ансамбль." },
                        { text: "Особливу увагу привертають сади в стилі бароко – з геометричним плануванням, сходами, скульптурами та декоративними елементами. Вони вважаються однією з головних цінностей об’єкта і створюють ефект «палацового саду» в мініатюрі." },
                        { text: "Замок не є класичним музейним комплексом із постійними експозиціями всередині всіх будівель, тому доступ може бути обмеженим (частина території може перебувати у приватній власності або використовуватися для заходів)." },
                        { bold: "Історія", text: "Історія замку пов’язана з родиною Маршан д’Ансембур (Marchant d’Ansembourg), яка відіграла важливу роль у його розвитку та перетворенні. Основний етап формування ансамблю припадає на XVII–XVIII століття, коли резиденція набула свого барокового характеру." },
                        { text: "Згодом територія та будівлі неодноразово перебудовувалися та доповнювалися, особливо в частині садів і декоративних елементів. Саме в цей період замок отримав той вигляд, який значною мірою зберігся до сьогодні." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "10, Rue de la Vallée, L-7411 Ansembourg, Luxembourg" },
                        { bold: "Доступ:", text: "обмежений, можливі відвідини саду або території в певні періоди (залежно від поточного статусу)" }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Сади замку вважаються одним із найяскравіших прикладів барокового садового мистецтва в Люксембурзі" },
                        { text: "Архітектурний ансамбль формувався понад одне століття" },
                        { text: "Замок часто використовується як приклад «живої» аристократичної резиденції, а не музейного об’єкта" },
                        { text: "Розташування в долині робить його особливо мальовничим із панорамних точок" }
                    ]
                },
                construction_period: "XVII–XVIII століття",
                founder: "Пов’язаний із дворянською родиною Маршан д’Ансембур (Marchant d’Ansembourg)",
                meta: {
                    title: "Замок Ансембург у Люксембурзі – Château d’Ansembourg, бароковий замок і сади",
                    description: "Замок Ансембург у Люксембурзі – історична аристократична резиденція XVII–XVIII століття з бароковими садами та мальовничою долиною річки Ейш. Інформація, історія та особливості.",
                    ogTitle: "Замок Ансембург – барокова перлина Люксембургу",
                    ogDescription: "Мальовничий замок Ансембург у долині Ейш: історія, барокові сади та атмосфера старовинної європейської резиденції.",
                    keywords: "замок Ансембург, Château d’Ansembourg, замки Люксембургу, визначні місця Люксембургу, бароковий замок, барокові сади Люксембург, історичні замки Європи, дворянська резиденція Люксембург, Marchant d’Ansembourg (Маршан д’Ансембур), долина річки Ейш, Luxembourg castles, baroque gardens Luxembourg, historic estates Luxembourg, Luxembourg attractions",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/ansembourg_castle/001.jpg"
                }
            },
            de: {
                name: "Schloss Ansembourg",
                location: "Ansembourg, Luxemburg",
                short_description: "Schloss Ansembourg (Château d’Ansembourg) ist ein historisches Schloss in Luxemburg, gelegen im Tal der Eisch. Der Komplex ist bekannt für seine barocke Architektur, gepflegten Gärten und die Atmosphäre einer ländlichen aristokratischen Residenz. Das Schloss gilt als eines der malerischsten privaten historischen Ensembles des Landes.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Schloss Ansembourg (Château d’Ansembourg)", text: "ist eine klassische herrschaftliche Residenz mit barocken Elementen, umgeben von Terrassengärten und bewaldeten Hügeln. Das architektonische Erscheinungsbild entwickelte sich schrittweise, und heute umfasst der Komplex sowohl Wohn- als auch Wirtschaftsgebäude, die zu einem einheitlichen Ensemble verbunden sind." },
                        { text: "Besonders hervorzuheben sind die barocken Gärten mit geometrischer Gestaltung, Treppen, Skulpturen und dekorativen Elementen. Sie gelten als einer der wichtigsten Bestandteile des Ensembles und schaffen den Eindruck eines „miniaturisierten Schlossgartens“." },
                        { text: "Das Schloss ist kein klassischer Museumsbetrieb mit dauerhaft zugänglichen Innenausstellungen, daher kann der Zugang eingeschränkt sein (ein Teil des Geländes befindet sich möglicherweise in Privatbesitz oder wird für Veranstaltungen genutzt)." },
                        { bold: "Geschichte", text: "Die Geschichte des Schlosses ist mit der Familie Marchant d’Ansembourg verbunden, die eine wichtige Rolle in seiner Entwicklung und Umgestaltung spielte. Die Hauptphase der Entstehung des Ensembles fällt in das 17.–18. Jahrhundert, als die Residenz ihren barocken Charakter erhielt." },
                        { text: "Später wurden das Gelände und die Gebäude mehrfach umgebaut und erweitert, insbesondere im Bereich der Gärten und dekorativen Elemente. In dieser Zeit erhielt das Schloss sein heutiges Erscheinungsbild, das weitgehend erhalten geblieben ist." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "10, Rue de la Vallée, L-7411 Ansembourg, Luxemburg" },
                        { bold: "Zugang:", text: "eingeschränkt, Besuche der Gärten oder des Geländes sind zu bestimmten Zeiten möglich (abhängig vom aktuellen Status)" }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Die Gärten des Schlosses gelten als eines der bedeutendsten Beispiele barocker Gartenkunst in Luxemburg" },
                        { text: "Das architektonische Ensemble entwickelte sich über mehr als ein Jahrhundert" },
                        { text: "Das Schloss wird oft als Beispiel einer „lebendigen“ aristokratischen Residenz und nicht als klassisches Museum betrachtet" },
                        { text: "Die Lage im Tal macht es besonders malerisch von Panoramapunkten aus" }
                    ]
                },
                construction_period: "17.–18. Jahrhundert",
                founder: "Verbunden mit der Adelsfamilie Marchant d’Ansembourg",
                meta: {
                    title: "Schloss Ansembourg in Luxemburg – Château d’Ansembourg, barockes Schloss und Gärten",
                    description: "Schloss Ansembourg in Luxemburg – historische aristokratische Residenz aus dem 17.–18. Jahrhundert mit barocken Gärten und dem malerischen Eisch-Tal. Informationen, Geschichte und Besonderheiten.",
                    ogTitle: "Schloss Ansembourg – barockes Juwel Luxemburgs",
                    ogDescription: "Malerisches Schloss Ansembourg im Eisch-Tal: Geschichte, barocke Gärten und Atmosphäre einer alten europäischen Residenz.",
                    keywords: "Schloss Ansembourg, Château d’Ansembourg, Schlösser in Luxemburg, Sehenswürdigkeiten Luxemburgs, barockes Schloss, barocke Gärten Luxemburg, historische Schlösser Europa, Adelsresidenz Luxemburg, Marchant d’Ansembourg (Маршан д’Ансембур), Eisch-Tal, Luxembourg castles, baroque gardens Luxembourg, historic estates Luxembourg, Luxembourg attractions",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/ansembourg_castle/001.jpg"
                }
            }
        }
    },
]

export default datas;