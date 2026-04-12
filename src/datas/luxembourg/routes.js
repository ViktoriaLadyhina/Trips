const datas = [
    {
        id: "mullerthal_trail",
        type: ["nature"], rating: "popular",
        path: "mullerthal_trail",
        countryPath: "luxembourg",
        fotoCard: "Luxembourg/mullerthal/001.jpg",
        plan: "Luxembourg/mullerthal/plan.jpg",
        coord: { lat: 51.36556, lng: 7.64472 },
        translations: {
            ru: {
                name: "Мюллертальская тропа",
                countryName: "Люксембург",
                location: "Люксембург, регион Мюллерталь",
                routeLength: "Около 112 км, разделена на несколько маршрутов",
                short_description: "Мюллертальская тропа – одна из самых живописных пешеходных троп Люксембурга, проходящая через «Маленькую Швейцарию» с лесными ущельями, скальными образованиями и загадочными пещерами. Маршрут сочетает легкие и сложные участки, позволяя каждому найти подходящую тропинку и насладиться красотой природы.",
                full_description: {
                    title: "Описание",
                    items: [
                        { bold: "Мюллертальская тропа", text: "протянулась через холмы и долины региона Мюллерталь, известного своими уникальными скальными формами и густыми лесами. Маршрут разделен на несколько этапов общей протяжённостью около 112 км, но для туристов доступны и короткие дневные походы." },
                        { text: "Легкие участки подходят даже для семей с детьми: широкие тропинки, удобные мостики через ручьи, аккуратно проложенные ступени и чёткие указатели делают прогулку комфортной и безопасной. На этих тропах можно неспешно наслаждаться видами на лесные долины, журчание ручьёв и зелень вокруг." },
                        { text: "Для любителей приключений есть более сложные маршруты: крутые подъемы, скальные участки, где придётся использовать руки для лазания, узкие тропинки вдоль скал и каменные мостики. Эти участки дарят ощущение настоящего треккинга, открывают панорамы, недоступные с обычных маршрутов, и позволяют почувствовать дикую красоту региона." },
                        { text: "Особое внимание заслуживают многочисленные пещеры, спрятанные в скалах, и каскады небольших водопадов. Все маршруты хорошо ухожены, с чёткими указателями, что позволяет ориентироваться без навигатора, а вдоль троп можно встретить исторические объекты – старые мельницы, мостики и каменные стены." }
                    ]
                },
                practicalInfo: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Trail 1 (Малый маршрут / Small loop):", text: "<ul><li>Старт: Echternach, GPS 49.8121, 6.4185</li><li>Длина: 37 км</li><li>Сложность: средняя, есть скальные участки</li><li>Время: 2-3 дня для полного прохождения или отдельные дневные участки</li><li>Снаряжение: удобная обувь для трекинга, вода, перекус</li><li>Как добраться: на авто парковка у начала маршрута, пешком – ближайшая станция Echternach</li></ul>" },
                        { bold: "Trail 2 (Средний маршрут / Medium loop)", text: "<ul><li>Старт: Berdorf/Echternach, GPS 49.8121, 6.4185 / 49.8075, 6.3208</li><li>Длина: 38 км</li><li>Сложность: средняя/сложная, есть крутые подъёмы и скалы</li><li>Время: 2-3 дня или дневные участки</li><li>Снаряжение: обувь для трекинга, палки, вода, перекус</li><li>Как добраться: на авто парковка у начала маршрута, пешком – ближайшая станция Berdorf</li></ul>" },
                        { bold: "Trail 3 (Большой маршрут / Large loop)", text: "<ul><li>Старт: Müllerthal/Consdorf, GPS 49.8075, 6.3208 / 49.7796, 6.33745</li><li>Длина: 37 км</li><li>Сложность: лёгкая/средняя, подходит для семей с детьми</li><li>Время: 1-2 дня или дневные участки</li><li>Снаряжение: удобная обувь, лёгкая одежда, вода</li><li>Как добраться: на авто парковка у начала маршрута, пешком – ближайшая станция Consdorf</li></ul>" },
                        { bold: "Совет:", text: "Лучше посещать весной или осенью для комфортной погоды и красочных пейзажей. Маршруты подходят как для начинающих, так и для опытных туристов." }
                    ]
                },
                features: {
                    title: "Особенности",
                    isList: true,
                    items: [
                        { bold: "Возраст леса:", text: "Более 200 лет" },
                        { bold: "Длина тропы:", text: "Около 112 км, разделена на несколько маршрутов" },
                        { bold: "Уникальность:", text: "Скалистые каньоны и множество скрытых пещер, водопады и журчащие ручьи" },
                        { bold: "Разный уровень сложности:", text: "от лёгких семейных троп до экстремальных подъёмов по скалам" },
                        { text: "Ухоженные тропы с удобными мостиками и указателями" },
                        { text: "Исторические сооружения вдоль маршрута" },
                    ]
                },
                recommendations: {
                    title: "Рекомендации",
                    isList: true,
                    items: [
                        { text: "Лучшее время: весна и осень для комфортной погоды и красочных пейзажей" },
                        { text: "Удобная обувь для пеших прогулок и трекинговая одежда" },
                        { text: "Доступно для начинающих и опытных туристов, есть как короткие, так и длинные маршруты" },
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    items: [
                        { text: "Пещера расположена в самом известном пещерном районе Германии – Grüner Tal (Грюне Тал). " },
                        { text: "Dechenhöhle – единственная пещера в Германии с собственной железнодорожной остановкой. " },
                        { text: "Общая протяжённость известных ходов превышает 20 км, хотя для посетителей открыто около 400 м. " },
                        { text: "Внутри регулярно проходят событийные экскурсии: «Пещерные огни», концерты, рождественские прогулки, мастер классы. " }
                    ]
                },
                meta: {
                    title: "Мюллертальская тропа (Mullerthal Trail), Люксембург – пешеходные маршруты, пещеры и каньоны",
                    description: "Прогуляйтесь по Мюллертальской тропе в Люксембурге: от лёгких тропинок для детей до сложных скалистых маршрутов. Уникальные пещеры, каньоны, мостики и ухоженные тропы ждут вас.",
                    ogTitle: "Mullerthal Trail – приключения и природная красота Люксембурга",
                    ogDescription: "Откройте для себя Мюллертальскую тропу: живописные леса, скалы, пещеры, красивые мостики и маршруты разной сложности для всей семьи.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/mullerthal/001.jpg"
                }
            },
            ua: {
                name: "Мюллертальська стежка",
                countryName: "Люксембург",
                location: "Люксембург, регіон Мюллерталь",
                routeLength: "Близько 112 км, поділена на кілька маршрутів",
                short_description: "Мюллертальська стежка – одна з найживописніших пішохідних стежок Люксембургу, що проходить через «Малу Швейцарію» з лісовими ущелинами, скельними утвореннями та загадковими печерами. Маршрут поєднує легкі та складні ділянки, дозволяючи кожному знайти підходящу стежку та насолодитися красою природи.",
                full_description: {
                    title: "Опис",
                    items: [
                        { bold: "Мюллертальська стежка", text: "простяглася через пагорби та долини регіону Мюллерталь, відомого своїми унікальними скельними формами та густими лісами. Маршрут поділений на кілька етапів загальною довжиною близько 112 км, але для туристів доступні й короткі денні походи." },
                        { text: "Легкі ділянки підходять навіть для сімей з дітьми: широкі стежки, зручні містки через струмки, акуратно прокладені сходи та чіткі вказівники роблять прогулянку комфортною та безпечною. На цих стежках можна неспішно насолоджуватися видами лісових долин, шумом струмків і зеленню навколо." },
                        { text: "Для любителів пригод є більш складні маршрути: круті підйоми, скельні ділянки, де доведеться використовувати руки для лазання, вузькі стежки вздовж скель та кам'яні містки. Ці ділянки дарують відчуття справжнього трекінгу, відкривають панорами, недоступні на звичайних маршрутах, і дозволяють відчути дику красу регіону." },
                        { text: "Особливу увагу заслуговують численні печери, сховані в скелях, та каскади невеликих водоспадів. Всі маршрути добре доглянуті, з чіткими вказівниками, що дозволяє орієнтуватися без навігатора, а вздовж стежок можна зустріти історичні об’єкти – старі млини, містки та кам’яні стіни." }
                    ]
                },
                practicalInfo: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Trail 1 (Малий маршрут / Small loop):", text: "<ul><li>Старт: Echternach, GPS 49.8121, 6.4185</li><li>Довжина: 37 км</li><li>Складність: середня, є скельні ділянки</li><li>Час: 2-3 дні для повного проходження або окремі денні ділянки</li><li>Снарядження: зручне взуття для трекінгу, вода, перекус</li><li>Як добратися: на авто – парковка біля старту, пішки – найближча станція Echternach</li></ul>" },
                        { bold: "Trail 2 (Середній маршрут / Medium loop):", text: "<ul><li>Старт: Berdorf/Echternach, GPS 49.8121, 6.4185 / 49.8075, 6.3208</li><li>Довжина: 38 км</li><li>Складність: середня/складна, є круті підйоми та скелі</li><li>Час: 2-3 дні або денні ділянки</li><li>Снарядження: взуття для трекінгу, палиці, вода, перекус</li><li>Як добратися: на авто – парковка біля старту, пішки – найближча станція Berdorf</li></ul>" },
                        { bold: "Trail 3 (Великий маршрут / Large loop):", text: "<ul><li>Старт: Müllerthal/Consdorf, GPS 49.8075, 6.3208 / 49.7796, 6.33745</li><li>Довжина: 37 км</li><li>Складність: легка/середня, підходить для сімей з дітьми</li><li>Час: 1-2 дні або денні ділянки</li><li>Снарядження: зручне взуття, легкий одяг, вода</li><li>Як добратися: на авто – парковка біля старту, пішки – найближча станція Consdorf</li></ul>" },
                        { bold: "Порада:", text: "Краще відвідувати навесні або восени для комфортної погоди та яскравих пейзажів. Маршрути підходять як для початківців, так і для досвідчених туристів." }
                    ]
                },
                features: {
                    title: "Особливості",
                    isList: true,
                    items: [
                        { bold: "Вік лісу:", text: "Понад 200 років" },
                        { bold: "Довжина стежки:", text: "Близько 112 км, поділена на кілька маршрутів" },
                        { bold: "Унікальність:", text: "Скельні каньйони та багато прихованих печер, водоспади та шумні струмки" },
                        { bold: "Різний рівень складності:", text: "від легких сімейних стежок до екстремальних підйомів по скелях" },
                        { text: "Доглянуті стежки з зручними містками та вказівниками" },
                        { text: "Історичні споруди вздовж маршруту" },
                    ]
                },
                recommendations: {
                    title: "Рекомендації",
                    isList: true,
                    items: [
                        { text: "Найкращий час: весна та осінь для комфортної погоди та яскравих пейзажів" },
                        { text: "Зручне взуття для пішохідних прогулянок та трекінговий одяг" },
                        { text: "Доступно для початківців та досвідчених туристів, є як короткі, так і довгі маршрути" },
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    items: [
                        { text: "Печера розташована в найвідомішому печерному районі Німеччини – Grüner Tal (Грюне Тал)." },
                        { text: "Dechenhöhle – єдина печера в Німеччині з власною залізничною зупинкою." },
                        { text: "Загальна протяжність відомих ходів перевищує 20 км, хоча для відвідувачів відкрито близько 400 м." },
                        { text: "Всередині регулярно проходять тематичні екскурсії: «Печерні вогні», концерти, різдвяні прогулянки, майстер-класи." }
                    ]
                },
                meta: {
                    title: "Мюллертальська стежка (Mullerthal Trail), Люксембург – пішохідні маршрути, печери та каньйони",
                    description: "Прогуляйтеся Мюллертальською стежкою в Люксембурзі: від легких стежок для дітей до складних скельних маршрутів. Унікальні печери, каньйони, містки та доглянуті стежки чекають на вас.",
                    ogTitle: "Mullerthal Trail – пригоди та природна краса Люксембургу",
                    ogDescription: "Відкрийте для себе Мюллертальську стежку: живописні ліси, скелі, печери, красиві містки та маршрути різної складності для всієї родини.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/mullerthal/001.jpg"
                }
            },
            de: {
                name: "Mullerthal Trail",
                countryName: "Luxemburg",
                location: "Luxemburg, Region Mullerthal",
                routeLength: "Ca. 112 km, aufgeteilt in mehrere Routen",
                short_description: "Der Mullerthal Trail ist einer der malerischsten Wanderwege Luxemburgs und führt durch die „Kleine Schweiz“ mit Waldschluchten, Felsformationen und geheimnisvollen Höhlen. Die Strecke kombiniert leichte und anspruchsvolle Abschnitte, sodass jeder den passenden Pfad finden und die Schönheit der Natur genießen kann.",
                full_description: {
                    title: "Beschreibung",
                    items: [
                        { bold: "Der Mullerthal Trail", text: "zieht sich durch die Hügel und Täler der Region Mullerthal, die für ihre einzigartigen Felsformationen und dichten Wälder bekannt ist. Die Route ist in mehrere Etappen mit einer Gesamtlänge von etwa 112 km unterteilt, aber für Wanderer sind auch kurze Tageswanderungen möglich." },
                        { text: "Leichte Abschnitte eignen sich auch für Familien mit Kindern: breite Pfade, bequeme Brücken über Bäche, sorgfältig angelegte Treppen und klare Wegweiser machen den Spaziergang komfortabel und sicher. Auf diesen Pfaden kann man entspannt die Aussicht auf Waldtäler, das Plätschern der Bäche und das Grün der Umgebung genießen." },
                        { text: "Für Abenteuerlustige gibt es anspruchsvollere Routen: steile Anstiege, Felsabschnitte, bei denen man die Hände zum Klettern einsetzen muss, schmale Pfade entlang der Felsen und steinerne Brücken. Diese Abschnitte vermitteln echtes Trekkinggefühl, eröffnen Panoramen, die auf normalen Routen nicht zugänglich sind, und lassen die wilde Schönheit der Region erleben." },
                        { text: "Besondere Aufmerksamkeit verdienen die zahlreichen in den Felsen verborgenen Höhlen und die Kaskaden kleiner Wasserfälle. Alle Wege sind gut gepflegt und mit klaren Wegweisern versehen, sodass man sich ohne Navigator orientieren kann, und entlang der Wege trifft man historische Objekte – alte Mühlen, Brücken und Steinmauern." }
                    ]
                },
                practicalInfo: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Trail 1 (Kleine Runde / Small loop):", text: "<ul><li>Start: Echternach, GPS 49.8121, 6.4185</li><li>Länge: 37 km</li><li>Schwierigkeit: mittel, mit Felsabschnitten</li><li>Zeit: 2-3 Tage für die gesamte Strecke oder einzelne Tagesabschnitte</li><li>Ausrüstung: bequeme Wanderschuhe, Wasser, Snacks</li><li>Anreise: Auto – Parkplatz am Start, zu Fuß – nächster Bahnhof Echternach</li></ul>" },
                        { bold: "Trail 2 (Mittlere Runde / Medium loop):", text: "<ul><li>Start: Berdorf/Echternach, GPS 49.8121, 6.4185 / 49.8075, 6.3208</li><li>Länge: 38 km</li><li>Schwierigkeit: mittel/schwierig, steile Anstiege und Felsen</li><li>Zeit: 2-3 Tage oder Tagesabschnitte</li><li>Ausrüstung: Wanderschuhe, Stöcke, Wasser, Snacks</li><li>Anreise: Auto – Parkplatz am Start, zu Fuß – nächster Bahnhof Berdorf</li></ul>" },
                        { bold: "Trail 3 (Große Runde / Large loop):", text: "<ul><li>Start: Müllerthal/Consdorf, GPS 49.8075, 6.3208 / 49.7796, 6.33745</li><li>Länge: 37 km</li><li>Schwierigkeit: leicht/mittel, geeignet für Familien mit Kindern</li><li>Zeit: 1-2 Tage oder Tagesabschnitte</li><li>Ausrüstung: bequeme Schuhe, leichte Kleidung, Wasser</li><li>Anreise: Auto – Parkplatz am Start, zu Fuß – nächster Bahnhof Consdorf</li></ul>" },
                        { bold: "Tipp:", text: "Am besten im Frühling oder Herbst besuchen für angenehmes Wetter und farbenfrohe Landschaften. Die Routen sind sowohl für Anfänger als auch erfahrene Wanderer geeignet." }
                    ]
                },
                features: {
                    title: "Besonderheiten",
                    isList: true,
                    items: [
                        { bold: "Alter des Waldes:", text: "Über 200 Jahre" },
                        { bold: "Länge des Trails:", text: "Ca. 112 km, aufgeteilt in mehrere Routen" },
                        { bold: "Einzigartigkeit:", text: "Felsige Schluchten und zahlreiche verborgene Höhlen, Wasserfälle und plätschernde Bäche" },
                        { bold: "Verschiedene Schwierigkeitsgrade:", text: "von leichten Familienpfaden bis zu extremen Kletterpassagen" },
                        { text: "Gut gepflegte Wege mit bequemen Brücken und Wegweisern" },
                        { text: "Historische Bauwerke entlang der Route" },
                    ]
                },
                recommendations: {
                    title: "Empfehlungen",
                    isList: true,
                    items: [
                        { text: "Beste Zeit: Frühling und Herbst für angenehmes Wetter und farbenfrohe Landschaften" },
                        { text: "Bequeme Schuhe für Wanderungen und Trekkingkleidung" },
                        { text: "Geeignet für Anfänger und erfahrene Wanderer, es gibt sowohl kurze als auch lange Routen" },
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    items: [
                        { text: "Die Höhle liegt in der bekanntesten Höhlenregion Deutschlands – Grüner Tal." },
                        { text: "Dechenhöhle – die einzige Höhle in Deutschland mit eigenem Bahnhof." },
                        { text: "Die Gesamtlänge der bekannten Gänge übersteigt 20 km, für Besucher sind jedoch etwa 400 m zugänglich." },
                        { text: "Regelmäßig finden dort Veranstaltungen statt: „Höhlenlichter“, Konzerte, Weihnachtswanderungen, Workshops." }
                    ]
                },
                meta: {
                    title: "Mullerthal Trail, Luxemburg – Wanderwege, Höhlen und Schluchten",
                    description: "Wandern Sie auf dem Mullerthal Trail in Luxemburg: von leichten Pfaden für Kinder bis zu anspruchsvollen Felsrouten. Einzigartige Höhlen, Schluchten, Brücken und gepflegte Wege erwarten Sie.",
                    ogTitle: "Mullerthal Trail – Abenteuer und Naturerlebnis in Luxemburg",
                    ogDescription: "Entdecken Sie den Mullerthal Trail: malerische Wälder, Felsen, Höhlen, schöne Brücken und Routen unterschiedlicher Schwierigkeit für die ganze Familie.",
                    ogImage: "https://our-travels.info/foto/Luxembourg/mullerthal/001.jpg"
                }
            }
        }
    },
    {
        id: "seven_castles",
        type: ["nature", "history"],
        rating: "popular",
        path: "seven_castles",
        countryPath: "luxembourg",
        fotoCard: "Luxembourg/seven_castles/ansembourg_castle/009.jpg",
        plan: "Luxembourg/seven_castles/plan.jpg",
        coord: { lat: 49.7025, lng: 6.0000 },
        map: "lux_castles",
        translations: {
            ru: {
                name: "Долина семи замков",
                countryName: "Люксембург",
                location: "Люксембург, долина реки Айш",
                routeLength: "Около 24 км",
                short_description: "Долина семи замков – один из самых живописных маршрутов Люксембурга, проходящий через зелёные холмы и старинные деревни вдоль реки Айш. Маршрут соединяет семь исторических замков, создавая уникальное сочетание природы, архитектуры и средневековой атмосферы.",
                full_description: {
                    title: "Описание",
                    items: [
                        { bold: "Долина семи замков", text: "расположена в центральной части Люксембурга и считается одним из самых атмосферных туристических маршрутов страны. Он проходит вдоль извилистой реки Айш, окружённой холмами, лесами и небольшими деревнями." },
                        { text: "Маршрут протяжённостью около 24 км соединяет семь замков, построенных в разное время – от средневековых крепостей до более поздних резиденций. Некоторые из них хорошо сохранились, другие частично разрушены, что добавляет маршруту особую историческую глубину." },
                        { text: "Путешествие по долине позволяет увидеть не только архитектуру, но и насладиться спокойной природой Люксембурга: зелёные поля, густые леса, тихие деревни и живописные виды вдоль реки делают маршрут особенно привлекательным для прогулок и поездок на автомобиле или велосипеде." },
                        { text: "Большинство замков можно осмотреть снаружи, а некоторые доступны для посещения. Даже без входа внутрь маршрут остаётся насыщенным благодаря разнообразию пейзажей и смене исторических эпох вдоль пути." }
                    ]
                },
                practicalInfo: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Формат маршрута:", text: "<ul><li>🚗 На автомобиле – самый удобный вариант (весь маршрут за 1 день)</li><li>🚴 Велосипед – популярный вариант для активных туристов</li><li>🚶 Пешком – возможен частями, но редко проходят полностью</li></ul>" },
                        { bold: "Старт маршрута:", text: "<ul><li>Mersch или Koerich</li><li>GPS примерно: 49.748 / 6.106</li></ul>" },
                        { bold: "Длительность:", text: "<ul><li>На машине: 1 день</li><li>На велосипеде: 1-2 дня</li><li>Пешком: несколько этапов</li></ul>" },
                        { bold: "Что учитывать:", text: "<ul><li>Не все замки открыты для посещения</li><li>Часть объектов – руины или частная собственность</li><li>Лучше заранее проверить доступность</li></ul>" },
                        { bold: "Совет:", text: "Лучшее время для поездки – весна и осень, когда природа особенно живописна, а погода комфортная для прогулок." }
                    ]
                },
                features: {
                    title: "Особенности",
                    isList: true,
                    items: [
                        { bold: "Длина маршрута:", text: "Около 24 км" },
                        { bold: "Уникальность:", text: "Сразу семь замков на одном маршруте" },
                        { bold: "Комбинация:", text: "Природа + архитектура + история" },
                        { text: "Живописная долина реки Айш" },
                        { text: "Подходит для поездок на авто и велосипеде" },
                        { text: "Разные эпохи строительства замков" }
                    ]
                },
                recommendations: {
                    title: "Рекомендации",
                    isList: true,
                    items: [
                        { text: "Лучше планировать маршрут заранее и выбрать ключевые остановки" },
                        { text: "Иметь с собой воду и перекус, особенно при поездке на велосипеде" },
                        { text: "Удобная обувь для прогулок вокруг замков" },
                        { text: "Проверять доступность замков перед посещением" }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Не все семь замков относятся к одному историческому периоду – они строились на протяжении нескольких веков." },
                        { text: "Некоторые замки были перестроены из оборонительных крепостей в жилые резиденции." },
                        { text: "Маршрут считается одним из самых фотогеничных в Люксембурге." },
                        { text: "Долина Айш исторически играла важную роль в защите и развитии региона." }
                    ]
                },
                meta: {
                    title: "Долина семи замков, Люксембург – маршрут по средневековым замкам",
                    description: "Откройте для себя Долину семи замков в Люксембурге: живописный маршрут вдоль реки Айш с историческими замками, природой и красивыми пейзажами.",
                    ogTitle: "Valley of the Seven Castles – путешествие по замкам Люксембурга",
                    ogDescription: "Исследуйте семь замков Люксембурга на одном маршруте: природа, история и средневековая атмосфера в одном путешествии.",
                    keywords: "Долина семи замков, Люксембург, Seven Castles Valley, Valley of the Seven Castles, маршрут семи замков, замки Люксембурга, замки Европы, средневековые замки, исторические замки, Mersch Castle, Schoenfels Castle, Hollenfels Castle, Koerich Castle, Ansembourg Castle, туристический маршрут Люксембург, что посмотреть в Люксембурге, Luxembourg Sehenswürdigkeiten, Aisch Valley, долина реки Айш, замковый маршрут, castle route Luxembourg",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/001.jpg"
                }
            },
            ua: {
                name: "Долина семи замків",
                countryName: "Люксембург",
                location: "Люксембург, долина річки Ейш",
                routeLength: "Близько 24 км",
                short_description: "Долина семи замків – один із наймальовничіших маршрутів Люксембургу, що проходить через зелені пагорби та старовинні села вздовж річки Ейш. Маршрут поєднує сім історичних замків, створюючи унікальне поєднання природи, архітектури та середньовічної атмосфери.",
                full_description: {
                    title: "Опис",
                    items: [
                        { bold: "Долина семи замків", text: "розташована в центральній частині Люксембургу та вважається одним із найатмосферніших туристичних маршрутів країни. Вона проходить уздовж звивистої річки Ейш, оточеної пагорбами, лісами та невеликими селами." },
                        { text: "Маршрут протяжністю близько 24 км з’єднує сім замків, збудованих у різні епохи – від середньовічних фортець до пізніших резиденцій. Деякі з них добре збереглися, інші частково зруйновані, що додає маршруту особливої історичної глибини." },
                        { text: "Подорож долиною дозволяє побачити не лише архітектуру, а й насолодитися спокійною природою Люксембургу: зелені поля, густі ліси, тихі села та мальовничі краєвиди вздовж річки роблять маршрут особливо привабливим для прогулянок і поїздок автомобілем або велосипедом." },
                        { text: "Більшість замків можна оглянути зовні, а деякі доступні для відвідування. Навіть без входу всередину маршрут залишається насиченим завдяки різноманіттю пейзажів і зміні історичних епох уздовж шляху." }
                    ]
                },
                practicalInfo: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Формат маршруту:", text: "<ul><li>🚗 Автомобілем – найзручніший варіант (увесь маршрут за 1 день)</li><li>🚴 Велосипедом – популярний варіант для активних туристів</li><li>🚶 Пішки – можливий частинами, але рідко проходять повністю</li></ul>" },
                        { bold: "Початок маршруту:", text: "<ul><li>Mersch або Koerich</li><li>GPS приблизно: 49.748 / 6.106</li></ul>" },
                        { bold: "Тривалість:", text: "<ul><li>Автомобілем: 1 день</li><li>Велосипедом: 1–2 дні</li><li>Пішки: кілька етапів</li></ul>" },
                        { bold: "Що врахувати:", text: "<ul><li>Не всі замки відкриті для відвідування</li><li>Частина об’єктів – руїни або приватна власність</li><li>Краще заздалегідь перевірити доступність</li></ul>" },
                        { bold: "Порада:", text: "Найкращий час для подорожі – весна та осінь, коли природа особливо мальовнича, а погода комфортна для прогулянок." }
                    ]
                },
                features: {
                    title: "Особливості",
                    isList: true,
                    items: [
                        { bold: "Довжина маршруту:", text: "Близько 24 км" },
                        { bold: "Унікальність:", text: "Одразу сім замків на одному маршруті" },
                        { bold: "Поєднання:", text: "Природа + архітектура + історія" },
                        { text: "Мальовнича долина річки Ейш" },
                        { text: "Підходить для поїздок автомобілем і велосипедом" },
                        { text: "Різні епохи будівництва замків" }
                    ]
                },
                recommendations: {
                    title: "Рекомендації",
                    isList: true,
                    items: [
                        { text: "Краще планувати маршрут заздалегідь і обрати ключові зупинки" },
                        { text: "Мати з собою воду та перекус, особливо під час поїздки велосипедом" },
                        { text: "Зручне взуття для прогулянок навколо замків" },
                        { text: "Перевіряти доступність замків перед відвідуванням" }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Не всі сім замків належать до одного історичного періоду – вони будувалися протягом кількох століть." },
                        { text: "Деякі замки були перебудовані з оборонних фортець у житлові резиденції." },
                        { text: "Маршрут вважається одним із найфотогенічніших у Люксембурзі." },
                        { text: "Долина Ейш історично відігравала важливу роль у захисті та розвитку регіону." }
                    ]
                },
                meta: {
                    title: "Долина семи замків, Люксембург – маршрут середньовічними замками",
                    description: "Відкрийте для себе Долину семи замків у Люксембурзі: мальовничий маршрут уздовж річки Ейш з історичними замками, природою та красивими краєвидами.",
                    ogTitle: "Valley of the Seven Castles – подорож замками Люксембургу",
                    ogDescription: "Дослідіть сім замків Люксембургу на одному маршруті: природа, історія та середньовічна атмосфера в одній подорожі.",
                    keywords: "Долина семи замків, Люксембург, Seven Castles Valley, Valley of the Seven Castles, маршрут семи замків, замки Люксембургу, замки Європи, середньовічні замки, історичні замки, Mersch Castle, Schoenfels Castle, Hollenfels Castle, Koerich Castle, Ansembourg Castle, туристичний маршрут Люксембург, що подивитися в Люксембурзі, Luxembourg Sehenswürdigkeiten, Aisch Valley, долина річки Ейш, замковий маршрут, castle route Luxembourg",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/001.jpg"
                }
            },
            de: {
                name: "Tal der sieben Schlösser",
                countryName: "Luxemburg",
                location: "Luxemburg, Tal der Eisch",
                routeLength: "Etwa 24 km",
                short_description: "Das Tal der sieben Schlösser ist eine der landschaftlich schönsten Routen Luxemburgs, die durch grüne Hügel und alte Dörfer entlang der Eisch führt. Die Route verbindet sieben historische Schlösser und schafft eine einzigartige Kombination aus Natur, Architektur und mittelalterlicher Atmosphäre.",
                full_description: {
                    title: "Beschreibung",
                    items: [
                        { bold: "Das Tal der sieben Schlösser", text: "liegt im Zentrum Luxemburgs und gilt als eine der atmosphärischsten Touristenrouten des Landes. Es verläuft entlang des gewundenen Flusses Eisch, umgeben von Hügeln, Wäldern und kleinen Dörfern." },
                        { text: "Die etwa 24 km lange Route verbindet sieben Schlösser, die in verschiedenen Epochen erbaut wurden – von mittelalterlichen Festungen bis hin zu späteren Residenzen. Einige sind gut erhalten, andere teilweise zerstört, was der Route eine besondere historische Tiefe verleiht." },
                        { text: "Die Reise durch das Tal ermöglicht es, nicht nur Architektur zu sehen, sondern auch die ruhige Natur Luxemburgs zu genießen: grüne Felder, dichte Wälder, stille Dörfer und malerische Landschaften entlang des Flusses machen die Route besonders attraktiv für Spaziergänge sowie Auto- oder Fahrradtouren." },
                        { text: "Die meisten Schlösser können von außen besichtigt werden, einige sind auch zugänglich. Selbst ohne Innenbesichtigung bleibt die Route durch die Vielfalt der Landschaften und den Wechsel historischer Epochen sehr abwechslungsreich." }
                    ]
                },
                practicalInfo: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Routenformat:", text: "<ul><li>🚗 Mit dem Auto – die bequemste Option (komplette Route an einem Tag)</li><li>🚴 Mit dem Fahrrad – beliebt bei aktiven Reisenden</li><li>🚶 Zu Fuß – nur abschnittsweise möglich</li></ul>" },
                        { bold: "Startpunkt:", text: "<ul><li>Mersch oder Koerich</li><li>GPS ungefähr: 49.748 / 6.106</li></ul>" },
                        { bold: "Dauer:", text: "<ul><li>Mit dem Auto: 1 Tag</li><li>Mit dem Fahrrad: 1–2 Tage</li><li>Zu Fuß: mehrere Etappen</li></ul>" },
                        { bold: "Wichtige Hinweise:", text: "<ul><li>Nicht alle Schlösser sind zugänglich</li><li>Einige Objekte sind Ruinen oder Privatbesitz</li><li>Zugang vorher prüfen</li></ul>" },
                        { bold: "Tipp:", text: "Die beste Reisezeit ist Frühling und Herbst, wenn die Natur besonders schön ist und das Wetter angenehm bleibt." }
                    ]
                },
                features: {
                    title: "Besonderheiten",
                    isList: true,
                    items: [
                        { bold: "Länge der Route:", text: "Etwa 24 km" },
                        { bold: "Einzigartigkeit:", text: "Sieben Schlösser auf einer Route" },
                        { bold: "Kombination:", text: "Natur + Architektur + Geschichte" },
                        { text: "Malersiches Tal der Eisch" },
                        { text: "Geeignet für Auto- und Radtouren" },
                        { text: "Verschiedene Bauperioden der Schlösser" }
                    ]
                },
                recommendations: {
                    title: "Empfehlungen",
                    isList: true,
                    items: [
                        { text: "Route im Voraus planen und wichtige Stopps auswählen" },
                        { text: "Wasser und Snacks mitnehmen, besonders beim Radfahren" },
                        { text: "Bequemes Schuhwerk für Spaziergänge um die Schlösser" },
                        { text: "Zugänglichkeit der Schlösser vorher prüfen" }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Nicht alle sieben Schlösser stammen aus derselben Epoche – sie wurden über mehrere Jahrhunderte gebaut." },
                        { text: "Einige Schlösser wurden von Festungen zu Wohnresidenzen umgebaut." },
                        { text: "Die Route gilt als eine der fotogensten in Luxemburg." },
                        { text: "Das Eisch-Tal spielte historisch eine wichtige Rolle in der Region." }
                    ]
                },
                meta: {
                    title: "Tal der sieben Schlösser, Luxemburg – Route durch mittelalterliche Schlösser",
                    description: "Entdecken Sie das Tal der sieben Schlösser in Luxemburg: eine malerische Route entlang der Eisch mit historischen Schlössern, Natur und wunderschönen Landschaften.",
                    ogTitle: "Valley of the Seven Castles – Reise durch Luxemburgs Schlösser",
                    ogDescription: "Entdecken Sie sieben Schlösser Luxemburgs auf einer Route: Natur, Geschichte und mittelalterliche Atmosphäre in einer Reise.",
                    keywords: "Tal der sieben Schlösser, Luxemburg, Seven Castles Valley, Valley of the Seven Castles, Schlösserroute, Schlösser Luxemburgs, europäische Schlösser, mittelalterliche Schlösser, historische Schlösser, Mersch Castle, Schoenfels Castle, Hollenfels Castle, Koerich Castle, Ansembourg Castle, Touristenroute Luxemburg, Sehenswürdigkeiten Luxemburg, Eisch-Tal, Tal der Eisch, Schlossroute, castle route Luxembourg",
                    ogImage: "https://our-travels.info/foto/Luxembourg/seven_castles/001.jpg"
                }
            }
        }
    }

]
export default datas;