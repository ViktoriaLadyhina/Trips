const datas = [
    {
        id: "castles_rhine_valley",
        type: ["nature", "history"], rating: "unesco",
        path: "castles_rhine_valley",
        countryPath: "germany",
        fotoCard: "Germany/rheinland-pfalz/koblenz/ehrenbreitstein/001.jpg",
        coord: { lat: 50.2045, lng: 7.6046 },
        map: "castles_rhine_valley",
        location: "Рейнланд-Пфальц и Гессен, Германия",
        translations: {
            ru: {
                name: "Долина Среднего Рейна",
                countryName: "Германия",
                routeLength: "Около 67 км",
                location: "Германия, долина Рейна между Кобленцем и Бингеном",
                unesco_status: {
                    included: true,
                    year: 2002,
                    type: "Культурный ландшафт",
                    criteria: "ii, iv, v",
                    epoch: "Античность – Средневековье – Новое время"
                },
                short_description: "Долина Среднего Рейна – один из самых живописных и исторически насыщенных регионов Германии, включённый в список всемирного наследия ЮНЕСКО. Маршрут проходит вдоль извилистого Рейна, среди виноградников, средневековых замков и небольших городков.",
                full_description: {
                    title: "Описание",
                    items: [
                        { bold: "Долина Среднего Рейна", text: "– исторический участок реки Рейн между Кобленцем и Бингеном, который на протяжении веков был одной из важнейших торговых и транспортных артерий Европы. Благодаря сочетанию природного ландшафта, средневековой архитектуры и культурного значения регион в 2002 году был включён в список Всемирного наследия ЮНЕСКО как культурный ландшафт." },
                        { text: "Узкая речная долина с крутыми сланцевыми склонами сформировалась миллионы лет назад, а уже в римскую эпоху здесь появились первые укрепления и поселения. В Средние века Рейн стал ключевым торговым путём Священной Римской империи: вдоль берегов строились крепости, замки и сторожевые башни, контролировавшие движение судов и сбор пошлин. Многие из этих укреплений сохранились до наших дней и считаются символами региона." },
                        { text: "Долина особенно известна своими виноградниками, расположенными на террасах крутых склонов. Виноделие здесь развивается более тысячи лет, а местные рислинги считаются одними из самых известных немецких вин. Небольшие города и деревни вдоль реки – Бахарах, Обервезель, Санкт-Гоар и другие – сохранили средневековую планировку, старинные фахверковые дома и городские стены." },
                        { text: "Одной из самых известных природных достопримечательностей региона является скала Лорелей. Согласно легенде, русалка Лорелея своим пением заманивала корабли на опасные рифы, из-за чего это место стало частью немецкого фольклора и романтической литературы XIX века." },
                        { text: "В XIX столетии долина Рейна превратилась в символ романтизма. Художники, поэты и путешественники со всей Европы приезжали сюда ради живописных видов, руин замков и атмосферы средневековой Германии. Именно в этот период многие крепости были восстановлены или перестроены." },
                        { text: "Сегодня Долина Среднего Рейна остаётся одним из самых известных туристических маршрутов Германии. Путешествие по реке позволяет увидеть десятки замков и крепостей, старинные города, винодельческие деревни и панорамы, которые считаются одними из самых узнаваемых пейзажей страны." },
                    ]
                },
                practicalInfo: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Формат маршрута:", text: "<ul><li>🚆 Поезд вдоль Рейна – самый удобный вариант</li><li>🚗 Автомобиль – гибкий маршрут с остановками</li><li>🚢 Круиз по Рейну – туристический вариант</li><li>🚴 Велосипед – популярный длинный маршрут</li></ul>" },
                        { bold: "Старт маршрута:", text: "<ul><li>Кобленц или Бинген</li><li>GPS примерно: 50.2045 / 7.6046</li></ul>" },
                        { bold: "Длительность:", text: "<ul><li>1–2 дня для основных точек</li><li>3–5 дней для полного исследования</li></ul>" },
                        { bold: "Что учитывать:", text: "<ul><li>Некоторые замки находятся на высоте и требуют подъёма</li><li>Лучшие виды часто открываются с противоположного берега</li><li>Популярный туристический регион – летом много людей</li></ul>" },
                        { bold: "Совет:", text: "Лучшее время – май–октябрь, особенно период винодельческих фестивалей." }
                    ]
                },
                features: {
                    title: "Особенности",
                    isList: true,
                    items: [
                        { bold: "Статус:", text: "Объект Всемирного наследия ЮНЕСКО" },
                        { bold: "Протяжённость:", text: "Около 67 км" },
                        { bold: "Известность:", text: "Около 40–60 замков и крепостей на участке между Кобленцем и Бингеном" },
                        { text: "Винодельческий регион мирового уровня" },
                        { text: "Легенда о Лорелей" },
                        { text: "Живописные города и набережные" }
                    ]
                },
                recommendations: {
                    title: "Рекомендации",
                    isList: true,
                    items: [
                        { text: "Обязательно делать остановки в маленьких городах вдоль Рейна" },
                        { text: "Использовать поезд для перемещений между точками" },
                        { text: "Подняться хотя бы к одному замку на высоте" },
                        { text: "Попробовать местное рейнское вино" }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "В долине находится одна из самых плотных концентраций замков в мире." },
                        { text: "Скала Лорелей связана с древней легендой о речной нимфе." },
                        { text: "Регион формировался как важный торговый и оборонительный коридор Европы." },
                        { text: "ЮНЕСКО признало долину за уникальное сочетание природы и культуры." }
                    ]
                },
                meta: {
                    title: "Долина Среднего Рейна – маршрут по замкам и виноградникам Германии",
                    description: "Откройте для себя Долину Среднего Рейна в Германии – маршрут ЮНЕСКО с замками, виноградниками и живописными городами вдоль реки Рейн.",
                    ogTitle: "Middle Rhine Valley – путешествие по Рейну",
                    ogDescription: "ЮНЕСКО маршрут вдоль Рейна: замки, винодельни и средневековые города Германии.",
                    keywords: "Средний Рейн, Mittelrheintal, Rhine Valley, Германия, ЮНЕСКО Рейн, замки Рейна, Лорелей, Bacharach, St. Goar, Oberwesel, туристический маршрут Германия",
                    ogImage: "https://our-travels.info/foto/Germany/middle_rhine_valley/001.jpg"
                }
            },
            uk: {
                name: "Долина Середнього Рейну",
                countryName: "Німеччина",
                location: "Рейнланд-Пфальц і Гессен, Німеччина",
                unesco_status: {
                    included: true,
                    year: 2002,
                    type: "Культурний ландшафт",
                    criteria: "ii, iv, v",
                    epoch: "Античність – Середньовіччя – Новий час"
                },
                routeLength: "Близько 67 км",
                short_description: "Долина Середнього Рейну – один із наймальовничіших та найбільш історично насичених регіонів Німеччини, внесений до списку Світової спадщини ЮНЕСКО. Маршрут проходить уздовж звивистого Рейну, серед виноградників, середньовічних замків і невеликих міст.",
                full_description: {
                    title: "Опис",
                    items: [
                        { bold: "Долина Середнього Рейну", text: "– історична ділянка річки Рейн між Кобленцом і Бінгеном, яка протягом століть була однією з найважливіших торговельних і транспортних артерій Європи. Завдяки поєднанню природного ландшафту, середньовічної архітектури та культурного значення регіон у 2002 році був включений до списку Світової спадщини ЮНЕСКО як культурний ландшафт." },
                        { text: "Вузька річкова долина з крутими сланцевими схилами сформувалася мільйони років тому, а вже в римську епоху тут з’явилися перші укріплення та поселення. У Середньовіччі Рейн став ключовим торговельним шляхом Священної Римської імперії: уздовж берегів будувалися фортеці, замки та сторожові вежі, які контролювали рух суден і збір мит. Багато з цих укріплень збереглися до наших днів і вважаються символами регіону." },
                        { text: "Долина особливо відома своїми виноградниками, розташованими на терасах крутих схилів. Виноробство тут розвивається понад тисячу років, а місцеві рислінги вважаються одними з найвідоміших німецьких вин. Невеликі міста та села вздовж річки – Бахарах, Обервезель, Санкт-Гоар та інші – зберегли середньовічне планування, старовинні фахверкові будинки та міські мури." },
                        { text: "Однією з найвідоміших природних пам’яток регіону є скеля Лорелей. Згідно з легендою, русалка Лорелея своїм співом заманювала кораблі на небезпечні рифи, через що це місце стало частиною німецького фольклору та романтичної літератури XIX століття." },
                        { text: "У XIX столітті долина Рейну перетворилася на символ романтизму. Художники, поети та мандрівники з усієї Європи приїжджали сюди заради мальовничих краєвидів, руїн замків і атмосфери середньовічної Німеччини. Саме в цей період багато фортець були відновлені або перебудовані." },
                        { text: "Сьогодні Долина Середнього Рейну залишається одним із найвідоміших туристичних маршрутів Німеччини. Подорож річкою дозволяє побачити десятки замків і фортець, старовинні міста, виноробні села та панорами, які вважаються одними з найвідоміших пейзажів країни." },
                    ]
                },
                practicalInfo: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Формат маршруту:", text: "<ul><li>🚆 Потяг уздовж Рейну – найзручніший варіант</li><li>🚗 Автомобіль – гнучкий маршрут із зупинками</li><li>🚢 Круїз Рейном – туристичний варіант</li><li>🚴 Велосипед – популярний довгий маршрут</li></ul>" },
                        { bold: "Початок маршруту:", text: "<ul><li>Кобленц або Бінген</li><li>GPS приблизно: 50.2045 / 7.6046</li></ul>" },
                        { bold: "Тривалість:", text: "<ul><li>1–2 дні для основних точок</li><li>3–5 днів для повного дослідження</li></ul>" },
                        { bold: "Що варто врахувати:", text: "<ul><li>Деякі замки розташовані на висоті та потребують підйому</li><li>Найкращі краєвиди часто відкриваються з протилежного берега</li><li>Популярний туристичний регіон – влітку багато людей</li></ul>" },
                        { bold: "Порада:", text: "Найкращий час – травень–жовтень, особливо період виноробних фестивалів." }
                    ]
                },
                features: {
                    title: "Особливості",
                    isList: true,
                    items: [
                        { bold: "Статус:", text: "Об’єкт Світової спадщини ЮНЕСКО" },
                        { bold: "Протяжність:", text: "Близько 67 км" },
                        { bold: "Відомість:", text: "Близько 40–60 замків і фортець на ділянці між Кобленцом і Бінгеном" },
                        { text: "Виноробний регіон світового рівня" },
                        { text: "Легенда про Лорелей" },
                        { text: "Мальовничі міста та набережні" }
                    ]
                },
                recommendations: {
                    title: "Рекомендації",
                    isList: true,
                    items: [
                        { text: "Обов’язково робити зупинки в маленьких містах уздовж Рейну" },
                        { text: "Використовувати потяг для переміщення між точками" },
                        { text: "Піднятися хоча б до одного замку на висоті" },
                        { text: "Спробувати місцеве рейнське вино" }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "У долині знаходиться одна з найщільніших концентрацій замків у світі." },
                        { text: "Скеля Лорелей пов’язана зі стародавньою легендою про річкову німфу." },
                        { text: "Регіон формувався як важливий торговий та оборонний коридор Європи." },
                        { text: "ЮНЕСКО визнало долину за унікальне поєднання природи та культури." }
                    ]
                },
                meta: {
                    title: "Долина Середнього Рейну – маршрут замками та виноградниками Німеччини",
                    description: "Відкрийте для себе Долину Середнього Рейну в Німеччині — маршрут ЮНЕСКО із замками, виноградниками та мальовничими містами вздовж річки Рейн.",
                    ogTitle: "Middle Rhine Valley – подорож Рейном",
                    ogDescription: "Маршрут ЮНЕСКО вздовж Рейну: замки, виноробні та середньовічні міста Німеччини.",
                    keywords: "Середній Рейн, Mittelrheintal, Rhine Valley, Німеччина, ЮНЕСКО Рейн, замки Рейну, Лорелей, Bacharach, St. Goar, Oberwesel, туристичний маршрут Німеччина",
                    ogImage: "https://our-travels.info/foto/Germany/middle_rhine_valley/001.jpg"
                }
            },
            de: {
                name: "Mittelrheintal",
                countryName: "Deutschland",
                location: "Rheinland-Pfalz und Hessen, Deutschland",
                unesco_status: {
                    included: true,
                    year: 2002,
                    type: "Kulturlandschaft",
                    criteria: "ii, iv, v",
                    epoch: "Antike – Mittelalter – Neuzeit"
                },
                routeLength: "Etwa 67 km",
                short_description: "Das Mittelrheintal gehört zu den malerischsten und geschichtsträchtigsten Regionen Deutschlands und ist Teil des UNESCO-Welterbes. Die Route verläuft entlang des kurvenreichen Rheins zwischen Weinbergen, mittelalterlichen Burgen und kleinen historischen Städten.",
                full_description: {
                    title: "Beschreibung",
                    items: [
                        { bold: "Das Mittelrheintal", text: "– ist ein historischer Abschnitt des Rheins zwischen Koblenz und Bingen, der über Jahrhunderte hinweg zu den wichtigsten Handels- und Verkehrsadern Europas gehörte. Aufgrund der einzigartigen Verbindung aus Naturlandschaft, mittelalterlicher Architektur und kultureller Bedeutung wurde die Region im Jahr 2002 als Kulturlandschaft in die UNESCO-Welterbeliste aufgenommen." },
                        { text: "Das enge Flusstal mit seinen steilen Schieferhängen entstand vor Millionen von Jahren, und bereits in der Römerzeit entstanden hier die ersten Befestigungen und Siedlungen. Im Mittelalter wurde der Rhein zu einem zentralen Handelsweg des Heiligen Römischen Reiches: Entlang der Ufer wurden Burgen, Schlösser und Wachtürme errichtet, die den Schiffsverkehr und die Erhebung von Zöllen kontrollierten. Viele dieser Bauwerke sind bis heute erhalten geblieben und gelten als Wahrzeichen der Region." },
                        { text: "Das Tal ist besonders für seine Weinberge bekannt, die auf Terrassen an den steilen Hängen angelegt wurden. Der Weinbau wird hier seit über tausend Jahren betrieben, und die lokalen Rieslinge zählen zu den bekanntesten deutschen Weinen. Kleine Städte und Dörfer entlang des Rheins – darunter Bacharach, Oberwesel und Sankt Goar – haben ihre mittelalterliche Struktur, historische Fachwerkhäuser und Stadtmauern bewahrt." },
                        { text: "Zu den bekanntesten Natursehenswürdigkeiten der Region gehört der Loreley-Felsen. Der Legende nach lockte die Nixe Loreley mit ihrem Gesang Schiffe auf gefährliche Riffe, wodurch dieser Ort Teil der deutschen Folklore und der romantischen Literatur des 19. Jahrhunderts wurde." },
                        { text: "Im 19. Jahrhundert entwickelte sich das Rheintal zu einem Symbol der Romantik. Künstler, Dichter und Reisende aus ganz Europa kamen hierher, um die malerischen Landschaften, Burgruinen und die Atmosphäre des mittelalterlichen Deutschlands zu erleben. In dieser Zeit wurden viele Burgen restauriert oder neu aufgebaut." },
                        { text: "Heute gehört das Mittelrheintal zu den bekanntesten touristischen Routen Deutschlands. Eine Reise entlang des Rheins ermöglicht es, zahlreiche Burgen und Festungen, historische Städte, Weinbaudörfer und Panoramen zu entdecken, die zu den bekanntesten Landschaftsbildern des Landes zählen." },
                    ]
                },
                practicalInfo: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Reiseformat:", text: "<ul><li>🚆 Zug entlang des Rheins – die bequemste Variante</li><li>🚗 Auto – flexible Route mit Stopps</li><li>🚢 Rheinkreuzfahrt – touristische Variante</li><li>🚴 Fahrrad – beliebte Langstrecke</li></ul>" },
                        { bold: "Startpunkt der Route:", text: "<ul><li>Koblenz oder Bingen</li><li>GPS ungefähr: 50.2045 / 7.6046</li></ul>" },
                        { bold: "Dauer:", text: "<ul><li>1–2 Tage für die wichtigsten Orte</li><li>3–5 Tage für eine vollständige Erkundung</li></ul>" },
                        { bold: "Worauf man achten sollte:", text: "<ul><li>Einige Burgen liegen erhöht und erfordern einen Aufstieg</li><li>Die schönsten Ausblicke bieten sich oft vom gegenüberliegenden Rheinufer</li><li>Beliebte Touristenregion – im Sommer häufig sehr voll</li></ul>" },
                        { bold: "Tipp:", text: "Die beste Reisezeit ist von Mai bis Oktober, besonders während der Weinfeste." }
                    ]
                },
                features: {
                    title: "Besonderheiten",
                    isList: true,
                    items: [
                        { bold: "Status:", text: "UNESCO-Welterbe" },
                        { bold: "Länge:", text: "Etwa 67 km" },
                        { bold: "Bekanntheit:", text: "Etwa 40–60 Burgen und Festungen zwischen Koblenz und Bingen" },
                        { text: "Weinregion von internationalem Ruf" },
                        { text: "Die Loreley-Legende" },
                        { text: "Malerische Städte und Uferpromenaden" }
                    ]
                },
                recommendations: {
                    title: "Empfehlungen",
                    isList: true,
                    items: [
                        { text: "Unbedingt Stopps in kleinen Städten entlang des Rheins einlegen" },
                        { text: "Für Fahrten zwischen den Orten den Zug nutzen" },
                        { text: "Mindestens eine hochgelegene Burg besuchen" },
                        { text: "Den regionalen Rheinwein probieren" }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Im Tal befindet sich eine der höchsten Burgendichten der Welt." },
                        { text: "Der Loreleyfelsen ist mit einer alten Sage über eine Rheinnymphe verbunden." },
                        { text: "Die Region entwickelte sich zu einem wichtigen Handels- und Verteidigungskorridor Europas." },
                        { text: "Die UNESCO zeichnete das Tal für die einzigartige Verbindung von Natur und Kultur aus." }
                    ]
                },
                meta: {
                    title: "Mittelrheintal – Route durch Burgen und Weinberge Deutschlands",
                    description: "Entdecken Sie das Mittelrheintal in Deutschland – eine UNESCO-Route mit Burgen, Weinbergen und malerischen Städten entlang des Rheins.",
                    ogTitle: "Middle Rhine Valley – Reise entlang des Rheins",
                    ogDescription: "UNESCO-Route entlang des Rheins: Burgen, Weingüter und mittelalterliche Städte Deutschlands.",
                    keywords: "Mittelrhein, Mittelrheintal, Rhine Valley, Deutschland, UNESCO Rhein, Rheinburgen, Loreley, Bacharach, St. Goar, Oberwesel, Reiseroute Deutschland",
                    ogImage: "https://our-travels.info/foto/Germany/middle_rhine_valley/001.jpg"
                }
            }
        }
    }

]
export default datas;