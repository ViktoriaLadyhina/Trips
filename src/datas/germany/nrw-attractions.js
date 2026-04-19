const datas = [
    // arnsberg округ
    // Märkischer Kreis
    //altena
    {
        id: "lutherkirche_altena",
        type: ["cathedral"], rating: "local",
        path: "lutherkirche_altena",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", cityPath: "altena",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/altena/lutherkirche/001.jpg",
        coord: { lat: 51.29620, lng: 7.67407 },
        translations: {
            ru: {
                name: "Евангелическо-лютеранская церковь Лютера",
                location: "Альтена, Германия",
                short_description: "Евангелическо-лютеранская церковь Лютера (Lutherkirche Altena) – историческая городская церковь в центре города Альтена. Первоначально как церковь Святой Екатерины построена в начале XIV века, после Реформации стала центральной протестантской церковью города. Барочный интерьер, богатая история и роль в жизни сообщества делают её одной из ключевых архитектурных достопримечательностей города.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Евангелическо-лютеранская церковь Лютера (Lutherkirche Altena)", text: "– важный архитектурный памятник в центре Альтена. Современное барочное здание с галерейным интерьером, крестовыми сводами и характерной башней с барочным шлемом сохраняет элементы старой церкви. Внутри выделяются богатая алтарно-канзельная композиция и декоративные детали XVIII века." },
                        { text: "Церковь активно используется для богослужений, концертов и культурных мероприятий, оставаясь центром духовной и общественной жизни города. Благодаря удобному расположению в историческом центре она является популярной точкой для прогулок и туристических маршрутов." },
                        { bold: "История.", text: "Первая церковь на этом месте – церковь Святой Екатерины, была построена примерно в 1318 году, а её башня сохранилась до наших дней и включена в нынешний комплекс. Эту церковь долго использовали как городскую приходскую: она имела пасторскую, крещальную и похоронную юрисдикцию." },
                        { text: "С 1535 года началось распространение Реформации в городе, и к 1624 году храм окончательно стал лютеранским – в результате более чем века религиозных споров между лютеранами и реформатами." },
                        { text: "В начале XVIII века старое здание стало ветхим из за пожаров и сырости, а также уже не вмещало растущее население города. Поэтому в 1719 году было принято решение о масштабной перестройке, средства для которой собирали через аукционы церковных мест, пожертвования по всей Вестфалии и государственную субсидию от короля Пруссии." },
                        { text: "В 1738 году был заложен фундамент для нового барочного здания на прежнем месте, с включением старой башни. Главное пространство возведено как галерейная (Emporen ) церковь с почти квадратным интерьером, колоннами и крестовыми сводами. Боковые лавки галереи давали много сидячих мест, а на башню поставлен барочный шлем. Архитектором, вероятно, был Иоганн Михаэль Мозер." },
                        { text: "В ХХ веке интерьер украшали росписи сводов (1938), а в 2015 году церковь частично пострадала от пожара и была полностью отреставрирована к 2017 году, когда состоялось торжественное повторное освящение и открытие для богослужений и культурных мероприятий." },
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес: ", text: "An der Kirche 1-4, 58762 Altena, Германия." },
                        { bold: "Вход:", text: "свободный, доступ во время богослужений и открытых часов." },
                        { bold: "Часы посещения:", text: "<br>Церковь обычно открыта во время богослужений (например, воскресные службы) и особых мероприятий. <br>В летний сезон (с Пасхи до осенних каникул) дополнительные часы: четверг–воскресенье 10:00–18:00 (частично до стеклянного вестибюля), а также четверг 10:00–12:00 с короткой программой (чтение, лекция, органная музыка). <br>Прочие часы и экскурсии возможны по запросу/по договорённости через приход." },
                        { text: "Церковь действует как приходский центр с регулярными службами, концертами и культурными событиями." },
                    ]
                },
                relics: {
                    title: "Реликвии и художественные элементы",
                    items: [
                        { text: "Внутри церкви Лютера особенно выделяются художественные и литургические элементы, придающие храму уникальную атмосферу." },
                        { text: "Центральным элементом интерьера является <b>барочная композиция алтаря, канзеля и органа</b>, типичная для протестантской традиции, где слово, служение и музыка объединены в одном ансамбле." },
                        { bold: "Орган,", text: "установленный в 1974 году фирмой Alfred Führer (Wilhelmshaven), занимает важное место в оформлении храма и используется как во время богослужений, так и при музыкальных концертах. Его звучание подчёркивает акустику барочного пространства." },
                        { bold: "Тауфштейн (крестильный камень),", text: "был создан в середине XX века местной художницей Уллой Купманн и гармонично вписан в интерьер по цвету и стилю." },
                        { bold: "Декоративное убранство сводов и стен", text: "включает росписи с ангелами и символами евангелистов, выполненные в традиционной палитре белого, синего и золотого, что усиливает ощущение духовности и света." },
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Башня церкви сохранилась со времён XIV века, даже после перестройки XVIII века." },
                        { text: "В интерьере сохранилась богатая барочная алтарно канзельная композиция, символизирующая связь слова, музыки и литургии." },
                        { text: "После пожара 2015 года орган и другие элементы были реставрированы, а церковь получила награду от Denkmalpflege Westfalen Lippe за сохранение культурного наследия." },
                    ]
                },
                construction_period: "≈ 1318 год (как церковь Святой Екатерины); нынешнее барочное здание – 1738 год начало фундаментных работ.",
                architects: "Возможно Johann Michael Moser – автор проекта перестройки XVIII века.",
                meta: {
                    title: "Евангелическо-лютеранская церковь Лютера (Lutherkirche Altena) – историческая лютеранская церковь и архитектурный памятник XVIII века",
                    description: "Евангелическо-лютеранская церковь Лютера в Альтена (Lutherkirche Altena) – историческое здание XIV-XVIII веков с уникальным барочным интерьером. Действующая приходская церковь, реставрированная после пожара 2015 года.",
                    ogTitle: "Евангелическо-лютеранская церковь Лютера (Lutherkirche Altena) – барочная городская церковь и центр протестантской общины",
                    ogDescription: "Узнайте историю Евангелическо-лютеранской церкви Лютера (Lutherkirche Altena) – от средневековой церкви Святой Екатерины до барочной лютеранской церкви с богатым интерьером и культурными событиями",
                    keywords: "церковь, достопримечательность, архитектура, историческое место, туризм, интересные места",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/lutherkirche/001.jpg"
                }
            },
            ua: {
                name: "Євангелічно-лютеранська церква Лютера",
                location: "Альтена, Німеччина",
                short_description: "Євангелічно-лютеранська церква Лютера (Lutherkirche Altena) – історична міська церква в центрі міста Альтена. Спочатку як церква Святої Катерини побудована на початку XIV століття, після Реформації стала центральною протестантською церквою міста. Бароковий інтер'єр, багата історія та роль у житті громади роблять її однією з ключових архітектурних пам'яток міста.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Євангелічно-лютеранська церква Лютера (Lutherkirche Altena)", text: "– важливий архітектурний пам'ятник у центрі Альтена. Сучасна барокова будівля з галерейним інтер'єром, хрестовими склепіннями та характерною вежею з бароковим шоломом зберігає елементи старої церкви. Всередині виділяються багата композиція вівтаря та кафедри та декоративні деталі XVIII століття." },
                        { text: "Церква активно використовується для богослужінь, концертів та культурних заходів, залишаючись центром духовного та суспільного життя міста. Завдяки зручному розташуванню в історичному центрі вона є популярною точкою для прогулянок та туристичних маршрутів." },
                        { bold: "Історія.", text: "Перша церква на цьому місці – церква Святої Катерини, була побудована приблизно в 1318 році, а її вежа збереглася до наших днів і включена в нинішній комплекс. Цю церкву довго використовували як міську парафіяльну: вона мала пасторську, хрестильну та похоронну юрисдикцію." },
                        { text: "З 1535 року почалося поширення Реформації в місті, і до 1624 року храм остаточно став лютеранським – у результаті більш ніж столітніх релігійних суперечок між лютеранами та реформатами." },
                        { text: "На початку XVIII століття стара будівля стала аварійною через пожежі та вогкість, а також уже не вміщала зростаюче населення міста. Тому в 1719 році було прийнято рішення про масштабну перебудову, кошти для якої збирали через аукціони церковних місць, пожертви по всій Вестфалії та державну субсидію від короля Пруссії." },
                        { text: "У 1738 році було закладено фундамент для нової барокової будівлі на колишньому місці, з включенням старої вежі. Основний простір зведено як галерейна (Emporen) церква з майже квадратним інтер'єром, колонами та хрестовими склепіннями. Бокові лавки галереї давали багато сидячих місць, а на вежу поставлено бароковий шолом. Архітектором, ймовірно, був Йоганн Міхаель Мозер." },
                        { text: "У XX столітті інтер'єр прикрашали розписи склепінь (1938), а у 2015 році церква частково постраждала від пожежі і була повністю відреставрована до 2017 року, коли відбулося урочисте повторне освячення та відкриття для богослужінь і культурних заходів." },
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса: ", text: "An der Kirche 1-4, 58762 Altena, Німеччина." },
                        { bold: "Вхід:", text: "вільний, доступ під час богослужінь та відкритих годин." },
                        { bold: "Часи відвідування:", text: "<br>Церква зазвичай відкрита під час богослужінь (наприклад, недільні служби) та особливих заходів. <br>У літній сезон (з Великодня до осінніх канікул) додаткові години: четвер–неділя 10:00–18:00 (частково до скляного вестибюля), а також четвер 10:00–12:00 з короткою програмою (читання, лекція, органна музика). <br>Інші години та екскурсії можливі за запитом/за домовленістю через парафію." },
                        { text: "Церква діє як парафіяльний центр з регулярними службами, концертами та культурними подіями." },
                    ]
                },
                relics: {
                    title: "Реліквії та художні елементи",
                    items: [
                        { text: "Всередині церкви Лютера особливо виділяються художні та літургійні елементи, що надають храму унікальної атмосфери." },
                        { text: "Центральним елементом інтер'єру є <b>барокова композиція вівтаря, кафедри та органа</b>, типова для протестантської традиції, де слово, служіння та музика об'єднані в одному ансамблі." },
                        { bold: "Орган,", text: "встановлений у 1974 році фірмою Alfred Führer (Wilhelmshaven), займає важливе місце в оформленні храму і використовується як під час богослужінь, так і під час музичних концертів. Його звучання підкреслює акустику барокового простору." },
                        { bold: "Тауфштейн (хрестильний камінь),", text: "був створений у середині XX століття місцевою художницею Уллою Купманн і гармонійно вписаний в інтер'єр за кольором і стилем." },
                        { bold: "Декоративне оздоблення склепінь та стін", text: "включає розписи з ангелами та символами євангелістів, виконані у традиційній палітрі білого, синього та золотого, що підсилює відчуття духовності та світла." },
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Вежа церкви збереглася з XIV століття, навіть після перебудови XVIII століття." },
                        { text: "В інтер'єрі збереглася багата барокова композиція вівтаря та кафедри, символізуючи зв'язок слова, музики та літургії." },
                        { text: "Після пожежі 2015 року орган та інші елементи були відреставровані, а церква отримала нагороду від Denkmalpflege Westfalen Lippe за збереження культурної спадщини." },
                    ]
                },
                construction_period: "≈ 1318 рік (як церква Святої Катерини); сучасна барокова будівля – 1738 рік початок фундаментних робіт.",
                architects: "Ймовірно Johann Michael Moser – автор проекту перебудови XVIII століття.",
                meta: {
                    title: "Євангелічно-лютеранська церква Лютера (Lutherkirche Altena) – історична лютеранська церква та архітектурний пам'ятник XVIII століття",
                    description: "Євангелічно-лютеранська церква Лютера в Альтена (Lutherkirche Altena) – історична будівля XIV–XVIII століть з унікальним бароковим інтер'єром. Діюча парафіяльна церква, відреставрована після пожежі 2015 року.",
                    ogTitle: "Євангелічно-лютеранська церква Лютера (Lutherkirche Altena) – барокова міська церква та центр протестантської громади",
                    ogDescription: "Дізнайтеся історію Євангелічно-лютеранської церкви Лютера (Lutherkirche Altena) – від середньовічної церкви Святої Катерини до барокової лютеранської церкви з багатим інтер'єром та культурними подіями",
                    keywords: "церква, пам’ятка, архітектура, історичне місце, туризм, цікаві місця",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/lutherkirche/001.jpg"
                }
            },
            de: {
                name: "Lutherkirche Altena",
                location: "Altena, Deutschland",
                short_description: "Die Lutherkirche Altena ist eine historische Stadtkirche im Zentrum von Altena. Ursprünglich als St.-Katharinen-Kirche im frühen 14. Jahrhundert erbaut, wurde sie nach der Reformation zur zentralen protestantischen Kirche der Stadt. Das barocke Interieur, die reiche Geschichte und ihre Rolle im Gemeindeleben machen sie zu einer der wichtigsten architektonischen Sehenswürdigkeiten der Stadt.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Lutherkirche Altena", text: "– ein bedeutendes architektonisches Denkmal im Zentrum von Altena. Das heutige barocke Gebäude mit Galerien, Kreuzgewölben und charakteristischem Turm mit barocker Haube bewahrt Elemente der alten Kirche. Im Inneren hervorzuheben sind die reich ausgestattete Altar-Kanzel-Komposition und dekorative Details aus dem 18. Jahrhundert." },
                        { text: "Die Kirche wird aktiv für Gottesdienste, Konzerte und kulturelle Veranstaltungen genutzt und bleibt ein Zentrum des geistlichen und öffentlichen Lebens der Stadt. Dank ihrer günstigen Lage im historischen Zentrum ist sie ein beliebter Punkt für Spaziergänge und touristische Routen." },
                        { bold: "Geschichte.", text: "Die erste Kirche an diesem Standort – die St.-Katharinen-Kirche – wurde etwa 1318 erbaut, ihr Turm blieb bis heute erhalten und ist in das heutige Gebäude integriert. Die Kirche diente lange als Stadtkirche: Sie hatte pastorale, Tauf- und Bestattungsjurisdiktion." },
                        { text: "Ab 1535 begann die Verbreitung der Reformation in der Stadt, und bis 1624 wurde die Kirche endgültig lutherisch – nach über hundert Jahren religiöser Auseinandersetzungen zwischen Lutheranern und Reformierten." },
                        { text: "Anfang des 18. Jahrhunderts war das alte Gebäude aufgrund von Bränden und Feuchtigkeit baufällig und bot nicht mehr genügend Platz für die wachsende Stadtbevölkerung. Daher wurde 1719 eine umfassende Umgestaltung beschlossen, die Mittel wurden durch Kirchenplatzauktionen, Spenden in ganz Westfalen und staatliche Subventionen des preußischen Königs gesammelt." },
                        { text: "1738 wurde das Fundament für das neue barocke Gebäude am alten Standort gelegt, einschließlich des alten Turms. Der Hauptbereich wurde als Emporenkirche mit fast quadratischem Innenraum, Säulen und Kreuzgewölben errichtet. Die seitlichen Emporenbänke boten viele Sitzplätze, und auf dem Turm wurde eine barocke Haube aufgesetzt. Der Architekt war vermutlich Johann Michael Moser." },
                        { text: "Im 20. Jahrhundert wurde das Interieur mit Deckengemälden (1938) geschmückt, und 2015 wurde die Kirche teilweise durch einen Brand beschädigt und bis 2017 vollständig restauriert, als die feierliche Wiedereinweihung und Öffnung für Gottesdienste und kulturelle Veranstaltungen stattfand." },
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse: ", text: "An der Kirche 1-4, 58762 Altena, Deutschland." },
                        { bold: "Eintritt:", text: "frei, Zugang während der Gottesdienste und geöffneten Zeiten." },
                        { bold: "Öffnungszeiten:", text: "<br>Die Kirche ist in der Regel während der Gottesdienste (z. B. Sonntagsgottesdienste) und besonderen Veranstaltungen geöffnet. <br>In der Sommersaison (von Ostern bis zu den Herbstferien) zusätzliche Öffnungszeiten: Donnerstag–Sonntag 10:00–18:00 (teilweise bis zum Glashaus-Vestibül), sowie Donnerstag 10:00–12:00 mit kurzem Programm (Lesung, Vortrag, Orgelmusik). <br>Weitere Öffnungszeiten und Führungen nach Anfrage/Absprache über die Gemeinde möglich." },
                        { text: "Die Kirche dient als Gemeindzentrum mit regelmäßigen Gottesdiensten, Konzerten und kulturellen Veranstaltungen." },
                    ]
                },
                relics: {
                    title: "Reliquien und künstlerische Elemente",
                    items: [
                        { text: "Im Inneren der Lutherkirche fallen besonders die künstlerischen und liturgischen Elemente auf, die der Kirche eine einzigartige Atmosphäre verleihen." },
                        { text: "Zentrales Element des Interieurs ist die <b>barocke Komposition von Altar, Kanzel und Orgel</b>, typisch für die protestantische Tradition, in der Wort, Dienst und Musik in einem Ensemble vereint sind." },
                        { bold: "Orgel,", text: "errichtet 1974 von der Firma Alfred Führer (Wilhelmshaven), nimmt einen bedeutenden Platz in der Ausstattung der Kirche ein und wird sowohl während der Gottesdienste als auch bei Konzerten genutzt. Ihr Klang unterstreicht die Akustik des barocken Raumes." },
                        { bold: "Taufstein,", text: "geschaffen Mitte des 20. Jahrhunderts von der lokalen Künstlerin Ulla Kupmann und harmonisch in das Interieur integriert, sowohl farblich als auch stilistisch." },
                        { bold: "Dekorative Ausgestaltung von Gewölben und Wänden", text: "enthält Gemälde mit Engeln und Symbolen der Evangelisten, ausgeführt in der traditionellen Farbpalette von Weiß, Blau und Gold, wodurch ein Gefühl von Spiritualität und Licht verstärkt wird." },
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Der Turm der Kirche ist seit dem 14. Jahrhundert erhalten, selbst nach dem Umbau im 18. Jahrhundert." },
                        { text: "Im Inneren ist die reich ausgestattete barocke Altar-Kanzel-Komposition erhalten, die die Verbindung von Wort, Musik und Liturgie symbolisiert." },
                        { text: "Nach dem Brand 2015 wurden die Orgel und andere Elemente restauriert, und die Kirche erhielt eine Auszeichnung von der Denkmalpflege Westfalen Lippe für den Erhalt des kulturellen Erbes." },
                    ]
                },
                construction_period: "≈ 1318 (als St.-Katharinen-Kirche); heutiges barockes Gebäude – 1738 Beginn der Fundamentarbeiten.",
                architects: "Wahrscheinlich Johann Michael Moser – Architekt der Umbauplanung im 18. Jahrhundert.",
                meta: {
                    title: "Lutherkirche Altena – historische lutherische Kirche und architektonisches Denkmal des 18. Jahrhunderts",
                    description: "Die Lutherkirche Altena – historisches Gebäude aus dem 14.–18. Jahrhundert mit einzigartigem barockem Interieur. Aktive Gemeindekirche, restauriert nach dem Brand 2015.",
                    ogTitle: "Lutherkirche Altena – barocke Stadtkirche und Zentrum der protestantischen Gemeinde",
                    ogDescription: "Erfahren Sie die Geschichte der Lutherkirche Altena – von der mittelalterlichen St.-Katharinen-Kirche bis zur barocken lutherischen Kirche mit reichhaltigem Interieur und kulturellen Veranstaltungen",
                    keywords: "Kirche, Sehenswürdigkeit, Architektur, historischer Ort, Tourismus, interessante Orte",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/lutherkirche/001.jpg"
                }
            },
        }
    },
    {
        id: "st_matthaeus_church_altena",
        type: ["cathedral"], rating: "local",
        path: "st_matthaeus_church_altena",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", cityPath: "altena",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/altena/st_matthaeus_church/001.jpg",
        coord: { lat: 51.28883691322431, lng: 7.677972331654175 },
        translations: {
            ru: {
                name: "Приходская церковь Святого Матфея",
                location: "Альтена, Германия",
                short_description: "Католическая приходская церковь Святого Матфея – один из заметных архитектурных объектов города Альтена, построенный в конце XIX века. Храм выполнен в неоготическом стиле с элементами романской архитектуры и отличается массивными каменными стенами и высокой башней. Внутри сохранились исторические алтари и декоративные элементы, создающие атмосферу уюта и традиции. Церковь остаётся действующим приходом и важной частью городской жизни.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Приходская церковь Святого Матфея (Katholische Pfarrkirche St. Matthäus Altena)", text: "в Альтене представляет собой выразительный пример неоготической архитектуры, характерной для Германии конца XIX века. Здание выполнено из кирпича и отличается вертикально устремлёнными формами, стрельчатыми арками и высокой башней, доминирующей в городском силуэте." },
                        { text: "Внутреннее пространство храма организовано с чёткой симметрией и продуманной структурой. Интерьер украшен резными элементами, витражами и несколькими алтарями, что создаёт цельное художественное пространство и подчёркивает сакральный характер здания." },
                        { bold: "История.", text: "Церковь была построена в период с 1896 по 1899 годы в связи с ростом католической общины в Альтене. Проект разработал архитектор Иоганнес Францискус Кломп (Johannes Franziskus Klomp), известный своими работами в стиле неоготики." },
                        { text: "В XX веке церковь пережила несколько этапов реставрации, в ходе которых удалось сохранить исторический облик интерьера. Орган, установленный в конце XX века, был привезён из южной Германии и остаётся важной частью музыкальной жизни прихода." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес: ", text: "Lindenstraße 41, 58762 Altena, Германия" },
                        { bold: "Конфессия:", text: "Римско-католическая " }
                    ]
                },
                sub_objects: {
                    title: "Реликвии и интерьер",
                    items: [
                        { bold: "Главный алтарь", text: " оформлен в неоготическом стиле и представляет страсти Христовы, как центральную тему изображения – сцены из последних дней и смерти Иисуса служат духовным и художественным центром интерьера." },
                        { bold: "Боковые алтари", text: "Помимо главного, в церкви находятся боковые алтари, в том числе <b>Мариенaltar (алтарь Божией Матери)</b>, который датируется серединой XIX века (ок. 1849) и перенесён из предшествовавшего зданию храма. Так же <b>изображение Девы Марии с младенцем</b> выполнено в классическом стиле, а рамка украшена деревянной резьбой с растительными мотивами – это ценный исторический объект, сохранившийся с прежней церкви." },
                        { bold: "Резные декоративные элементы", text: "Интерьер церкви оформлен богатой резьбой: резные элементы алтарей имеют фьяли и декоративные шпили, типичные для неоготической стилизации; оформление включает тонкую деревянную резьбу и орнаменты, подчёркивающие вертикальные линии и структуру пространства." },
                        { bold: "Орган", text: "церкви имеет интересную историю и конструкцию. Первая органная установка появилась в 1924-1926 годах, построенная фирмой Eggerth / Anton Feith из Падерборна. В 1996 году на основе прежних труб было создано новое механическое устройство фирмой Gebr. Link (Giengen). Инструмент имеет 27 регистров, два мануала и педаль, а механические клавиши дополняются электрической системой регистров." },
                        { bold: "Витражи", text: "Церковь украшена витражами разных периодов: первые витражи храма были созданы ещё в момент постройки в конце XIX века немецкой мастерской Gassen & Blaschke и расположены в хорах; после 1945 года новые витражи для Капеллы воинов создал художник Marius de Leeuw (возможно через мастерскую Derix); витражи боковых окон в нефе датируются сер. 1950 х и были разработаны Walter Klocke из Гельзенкирхена. Эти окна изображают различных святых, включая, например, святую Екатерину и самого святого Матфея как покровителя церкви." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Церковь построена в период активного распространения неоготики в Германии. " },
                        { text: "Архитектор Кломп специализировался именно на церковной архитектуре. " },
                        { text: "Интерьер частично сохранил оригинальное оформление XIX века. " },
                        { text: "Орган был установлен значительно позже строительства здания. " }
                    ]
                },
                construction_period: "1896-1899",
                architects: "Иоганнес Францискус Кломп (Johannes Franziskus Klomp)",
                founder: "католическая община Альтены ",
                meta: {
                    title: "Приходская церковь Святого Матфея в Альтене – история и описание",
                    description: "Церковь Святого Матфея в Альтене – неоготический храм конца XIX века. История, архитектура, интерьер и интересные факты.",
                    ogTitle: "Церковь Святого Матфея в Альтене ",
                    ogDescription: "Неоготическая церковь XIX века в Альтене с историческим интерьером и атмосферой старого города.",
                    keywords: "церковь, достопримечательность, архитектура, историческое место, туризм, интересные места",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/st_matthaeus_church/001.jpg"
                }
            },
            ua: {
                name: "Парафіяльна церква Святого Матвія",
                location: "Альтена, Німеччина",
                short_description: "Католицька парафіяльна церква Святого Матвія – одна з помітних архітектурних пам'яток міста Альтена, побудована наприкінці XIX століття. Храм виконаний у неоготичному стилі з елементами романської архітектури та вирізняється масивними кам'яними стінами та високою вежею. Всередині збережені історичні вівтарі та декоративні елементи, що створюють атмосферу затишку та традицій. Церква залишається діючою парафією та важливою частиною міського життя.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Парафіяльна церква Святого Матвія (Katholische Pfarrkirche St. Matthäus Altena)", text: "в Альтені є виразним прикладом неоготичної архітектури, характерної для Німеччини кінця XIX століття. Будівля виконана з цегли та вирізняється вертикально спрямованими формами, стрілчастими арками та високою вежею, що домінує в міському силуеті." },
                        { text: "Внутрішній простір храму організований з чіткою симетрією та продуманою структурою. Інтер'єр прикрашений різьбленими елементами, вітражами та кількома вівтарями, що створює цілісне художнє середовище та підкреслює сакральний характер будівлі." },
                        { bold: "Історія.", text: "Церква була побудована у період з 1896 по 1899 роки у зв'язку з ростом католицької громади Альтени. Проєкт розробив архітектор Йоганнес Францискус Кломп (Johannes Franziskus Klomp), відомий своїми роботами у стилі неоготики." },
                        { text: "У XX столітті церква пройшла кілька етапів реставрації, під час яких вдалося зберегти історичний вигляд інтер'єру. Орган, встановлений наприкінці XX століття, був привезений з південної Німеччини та залишається важливою частиною музичного життя парафії." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса: ", text: "Lindenstraße 41, 58762 Altena, Німеччина" },
                        { bold: "Конфесія:", text: "Римо-католицька" }
                    ]
                },
                sub_objects: {
                    title: "Реліквії та інтер'єр",
                    items: [
                        { bold: "Головний вівтар", text: "оформлений у неоготичному стилі та представляє Страсті Христові як центральну тему зображень – сцени останніх днів та смерті Ісуса служать духовним і художнім центром інтер'єру." },
                        { bold: "Бокові вівтарі", text: "Окрім головного, у церкві знаходяться бокові вівтарі, зокрема Мариенальтар (вівтар Божої Матері), датований серединою XIX століття (близько 1849 року) і перенесений з попередньої будівлі храму. Зображення Діви Марії з немовлям виконане у класичному стилі, а рамка прикрашена дерев'яною різьбою з рослинними мотивами – цінний історичний об'єкт, що зберігся з попередньої церкви." },
                        { bold: "Різьблені декоративні елементи", text: "Інтер'єр церкви оформлений багатою різьбою: різьблені елементи вівтарів мають фіалі та декоративні шпилі, типові для неоготичної стилізації; оформлення включає тонку дерев'яну різьбу та орнаменти, що підкреслюють вертикальні лінії та структуру простору." },
                        { bold: "Орган", text: "церкви має цікаву історію та конструкцію. Перша органна установка з'явилася у 1924-1926 роках, побудована фірмою Eggerth / Anton Feith з Падерборна. У 1996 році на основі попередніх труб створено новий механічний пристрій фірмою Gebr. Link (Giengen). Інструмент має 27 регістрів, два мануали та педаль, а механічні клавіші доповнені електричною системою регістрів." },
                        { bold: "Вітражі", text: "Церква прикрашена вітражами різних періодів: перші вітражі храму були створені ще під час будівництва наприкінці XIX століття німецькою майстернею Gassen & Blaschke та розташовані в хорах; після 1945 року нові вітражі для Каплиці воїнів створив художник Marius de Leeuw (можливо через майстерню Derix); вітражі бокових вікон у нефі датуються серединой 1950-х років і були розроблені Walter Klocke з Гельзенкірхена. Ці вікна зображають різних святих, включно зі святою Катериною та самим святим Матвієм як покровителем церкви." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Церква побудована в період активного поширення неоготики в Німеччині." },
                        { text: "Архітектор Кломп спеціалізувався саме на церковній архітектурі." },
                        { text: "Інтер'єр частково зберіг оригінальне оформлення XIX століття." },
                        { text: "Орган був встановлений значно пізніше за будівництво храму." }
                    ]
                },
                construction_period: "1896-1899",
                architects: "Йоганнес Францискус Кломп (Johannes Franziskus Klomp)",
                founder: "католицька громада Альтени",
                meta: {
                    title: "Парафіяльна церква Святого Матвія в Альтені – історія та опис",
                    description: "Церква Святого Матвія в Альтені – неоготичний храм кінця XIX століття. Історія, архітектура, інтер'єр та цікаві факти.",
                    ogTitle: "Церква Святого Матвія в Альтені",
                    ogDescription: "Неоготична церква XIX століття в Альтені з історичним інтер'єром та атмосферою старого міста.",
                    keywords: "церква, пам’ятка, архітектура, історичне місце, туризм, цікаві місця",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/st_matthaeus_church/001.jpg"
                }
            },
            de: {
                name: "Katholische Pfarrkirche St. Matthäus",
                location: "Altena, Deutschland",
                short_description: "Die katholische Pfarrkirche St. Matthäus ist eines der markanten architektonischen Bauwerke der Stadt Altena, erbaut Ende des 19. Jahrhunderts. Die Kirche ist im neugotischen Stil mit Elementen der Romanik gestaltet und zeichnet sich durch massive Steinmauern und einen hohen Turm aus. Im Inneren sind historische Altäre und dekorative Elemente erhalten, die eine Atmosphäre von Gemütlichkeit und Tradition schaffen. Die Kirche bleibt eine aktive Pfarrei und ein wichtiger Bestandteil des städtischen Lebens.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Katholische Pfarrkirche St. Matthäus Altena", text: "in Altena ist ein eindrucksvolles Beispiel neugotischer Architektur, typisch für Deutschland Ende des 19. Jahrhunderts. Das Gebäude ist aus Ziegeln gebaut und zeichnet sich durch vertikal ausgerichtete Formen, spitzbogige Fenster und einen hohen Turm aus, der das Stadtbild dominiert." },
                        { text: "Der Innenraum der Kirche ist klar symmetrisch und strukturiert organisiert. Das Interieur ist mit Schnitzereien, Glasmalereien und mehreren Altären geschmückt, was einen harmonischen künstlerischen Raum schafft und den sakralen Charakter des Gebäudes betont." },
                        { bold: "Geschichte.", text: "Die Kirche wurde in der Zeit von 1896 bis 1899 aufgrund des Wachstums der katholischen Gemeinde in Altena erbaut. Das Projekt wurde vom Architekten Johannes Franziskus Klomp entworfen, bekannt für seine Arbeiten im neugotischen Stil." },
                        { text: "Im 20. Jahrhundert durchlief die Kirche mehrere Restaurierungsphasen, in deren Verlauf es gelungen ist, das historische Erscheinungsbild des Interieurs zu bewahren. Die Orgel, die Ende des 20. Jahrhunderts installiert wurde, wurde aus Süddeutschland gebracht und bleibt ein wichtiger Bestandteil des musikalischen Lebens der Pfarrei." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse: ", text: "Lindenstraße 41, 58762 Altena, Deutschland" },
                        { bold: "Konfession:", text: "Römisch-katholisch" }
                    ]
                },
                sub_objects: {
                    title: "Reliquien und Innenraum",
                    items: [
                        { bold: "Hauptaltar", text: "ist im neugotischen Stil gestaltet und stellt die Passion Christi als zentrales Motiv dar – Szenen aus den letzten Tagen und dem Tod Jesu dienen als geistiges und künstlerisches Zentrum des Innenraums." },
                        { bold: "Seitenaltäre", text: "Neben dem Hauptaltar befinden sich in der Kirche Seitenaltäre, darunter der Marienaltar (Altar der Heiligen Maria), datiert auf die Mitte des 19. Jahrhunderts (ca. 1849) und aus der vorherigen Kirchenanlage übernommen. Die Darstellung der Jungfrau Maria mit dem Kind ist im klassischen Stil ausgeführt, der Rahmen ist mit Holzschnitzereien mit Pflanzenmotiven verziert – ein wertvolles historisches Objekt, das aus der vorherigen Kirche erhalten blieb." },
                        { bold: "Schnitzereien und dekorative Elemente", text: "Der Kircheninnenraum ist reich mit Schnitzereien gestaltet: Die Schnitzereien der Altäre besitzen Fialen und dekorative Spitzen, typisch für die neugotische Stilistik; die Ausstattung umfasst feine Holzschnitzereien und Ornamente, die die vertikalen Linien und die Struktur des Raums betonen." },
                        { bold: "Orgel", text: "der Kirche hat eine interessante Geschichte und Konstruktion. Die erste Orgelinstallation entstand in den Jahren 1924-1926, gebaut von der Firma Eggerth / Anton Feith aus Paderborn. 1996 wurde auf Grundlage der vorherigen Pfeifen ein neues mechanisches Werk von Gebr. Link (Giengen) erstellt. Das Instrument verfügt über 27 Register, zwei Manuale und ein Pedal, die mechanischen Tasten werden durch ein elektrisches Registersystem ergänzt." },
                        { bold: "Glasfenster", text: "Die Kirche ist mit Glasfenstern verschiedener Epochen geschmückt: Die ersten Kirchenfenster wurden noch während der Bauzeit Ende des 19. Jahrhunderts von der deutschen Werkstatt Gassen & Blaschke erstellt und befinden sich im Chor; nach 1945 schuf der Künstler Marius de Leeuw neue Fenster für die Kriegerkapelle (möglicherweise über die Werkstatt Derix); die Glasfenster der Seitenschiffe stammen aus den 1950er Jahren und wurden von Walter Klocke aus Gelsenkirchen entworfen. Diese Fenster zeigen verschiedene Heilige, darunter z.B. die Heilige Katharina und den Heiligen Matthäus als Schutzpatron der Kirche." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Die Kirche wurde in einer Zeit der aktiven Verbreitung der Neugotik in Deutschland erbaut." },
                        { text: "Der Architekt Klomp spezialisierte sich auf Kirchenarchitektur." },
                        { text: "Das Interieur hat teilweise die ursprüngliche Ausstattung des 19. Jahrhunderts bewahrt." },
                        { text: "Die Orgel wurde deutlich später als das Kirchengebäude installiert." }
                    ]
                },
                construction_period: "1896-1899",
                architects: "Johannes Franziskus Klomp",
                founder: "katholische Gemeinde Altena",
                meta: {
                    title: "Katholische Pfarrkirche St. Matthäus in Altena – Geschichte und Beschreibung",
                    description: "Die Kirche St. Matthäus in Altena – neugotisches Bauwerk des späten 19. Jahrhunderts. Geschichte, Architektur, Innenraum und interessante Fakten.",
                    ogTitle: "Katholische Pfarrkirche St. Matthäus in Altena",
                    ogDescription: "Neugotische Kirche des 19. Jahrhunderts in Altena mit historischem Innenraum und Atmosphäre der Altstadt.",
                    keywords: "Kirche, Sehenswürdigkeit, Architektur, historischer Ort, Tourismus, interessante Orte",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/st_matthaeus_church/001.jpg"
                }
            }
        }
    },
    {
        id: "gustav_selve_altena",
        type: ["monument_or_fountain"], rating: "local",
        path: "gustav_selve_altena",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", cityPath: "altena",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/altena/gustav_selve/001.jpg",
        coord: { lat: 51.28765, lng: 7.67662 },
        translations: {
            ru: {
                name: "Памятник Густаву Сельве",
                location: "Альтена, Германия",
                short_description: "Памятник Густаву Сельве – известному немецкому промышленнику XIX-XX вв. – установлен на возвышении между долинами рек Ленне и Рахмедеталь в городе Альтена. Монумент возвышается над городом и служит музейно памятным объектом, сочетая художественную скульптуру с историческим мемориалом. ",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Памятник Густаву Сельве (Gustav-Selve-Denkmal)", text: "находится на скалистом холме над рекой Ленне и является популярной обзорной точкой с видом на город и окрестности. Композиция включает бронзовую статую Сельве в натуральную величину на высоком каменном постаменте, полукруглую колоннаду позади и декоративные элементы в стиле модерн, в том числе фигуры львов по бокам. На постаменте размещена мемориальная надпись с именем и годами жизни промышленника, а на обратной стороне – его девиз «Treue um Treue» («верность за верность»)." },
                        { text: "Монумент был создан как дань уважения к деятельности Сельве и его вкладу в развитие города и трудовых отношений. В народе памятник часто называют «Stiller Gustav» («Тихий Густав»). Бесплатный доступ делает его удобным пунктом остановки для туристов и любителей пеших прогулок в окрестностях Альтены." },
                        { bold: "Густав Сельве", text: "(1842-1909) был одним из наиболее влиятельных предпринимателей Германии конца XIX века. Он развил семейное предприятие Basse & Selve в крупную промышленную компанию с тысячами сотрудников и множеством заводов, в том числе в Альтене. Сельве был известен не только как успешный бизнесмен, но и как новатор социальных практик: он внедрял улучшенные условия труда, строил рабочие дома, школы, учреждения поддержки для своих служащих и направлял существенную часть прибыли на социальные инициативы задолго до официального введения социальных законов." },
                        { text: "После его смерти в 1909 году коллектив работников и служащих компании собрал средства для установки памятника в его честь. Монумент был открыт в 1911 году, через два года после ухода Сельве, и с тех пор стоит как символ благодарности и исторической памяти о его влиянии на промышленное и социальное развитие региона." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес: ", text: "Am Selvedenkmal, 58762 Altena, Nordrhein Westfalen, Германия. " }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "В народе памятник называют «Der stille Gustav» («Тихий Густав»). " },
                        { text: "Он расположен на месте, откуда был виден как его жилой дом, так и предприятия, которыми он руководил. " },
                        { text: "Комплекс памятника включает архитектурные элементы, отражающие влияние модерна (Jugendstil). " }
                    ]
                },
                construction_period: "1911 год (открыт через 2 года после смерти Г. Сельве).",
                architects: "Скульптура: Клеменс Бушер (Clemens Buscher), немецкий скульптор из Дюссельдорфа (1855-1916). Бронзовый отлив: мастерская Бернхард Фёрстер (Bernhard Förster Kunstgewerbliche Werkstätten), Дюссельдорф",
                meta: {
                    title: "Памятник Густаву Сельве – исторический мемориал в Альтене",
                    description: "Узнайте о памятнике Густаву Сельве в Альтене – мемориальном монументе выдающемуся промышленнику XIX-XX вв. с историей, фактами посещения и практической информацией. Бесплатный доступ, виды на Ленне и история социальной индустрии Германии.",
                    ogTitle: "Памятник Густаву Сельве в Альтене – исторический взгляд",
                    ogDescription: "Памятник знаменитому промышленнику Густаву Сельве с панорамами Альтены и интересными историческими фактами.",
                    keywords: "памятник, достопримечательность, скульптура, историческое место, туризм, интересные места",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/gustav_selve/001.jpg"
                }
            },
            ua: {
                name: "Пам’ятник Густаву Сельве",
                location: "Альтена, Німеччина",
                short_description: "Пам’ятник Густаву Сельве – відомому німецькому промисловцю XIX–XX століть – встановлено на підвищенні між долинами річок Ленне та Рахмедеталь у місті Альтена. Монумент височіє над містом і слугує музейно-пам’ятним об’єктом, поєднуючи художню скульптуру з історичним меморіалом.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Пам’ятник Густаву Сельве (Gustav-Selve-Denkmal)", text: "розташований на скелястому пагорбі над річкою Ленне та є популярною оглядовою точкою з видом на місто та околиці. Композиція включає бронзову статую Сельве у натуральну величину на високому кам’яному постаменті, півкруглу колоннаду позаду та декоративні елементи у стилі модерн, зокрема фігури левів по боках. На постаменті розміщено меморіальний напис із іменем та роками життя промисловця, а на зворотному боці – його девіз «Treue um Treue» («вірність за вірність»)." },
                        { text: "Монумент створено як данину поваги до діяльності Сельве та його внеску у розвиток міста та трудові відносини. У народі пам’ятник часто називають «Stiller Gustav» («Тихий Густав»). Вільний доступ робить його зручним пунктом зупинки для туристів та любителів пішохідних прогулянок у околицях Альтени." },
                        { bold: "Густав Сельве", text: "(1842–1909) був одним із найбільш впливових підприємців Німеччини кінця XIX століття. Він розвинув сімейне підприємство Basse & Selve у велику промислову компанію з тисячами працівників і численними заводами, у тому числі в Альтені. Сельве був відомий не лише як успішний бізнесмен, а й як новатор соціальних практик: він впроваджував покращені умови праці, будував робітничі будинки, школи, заклади підтримки для своїх працівників і направляв значну частину прибутку на соціальні ініціативи задовго до офіційного запровадження соціальних законів." },
                        { text: "Після його смерті у 1909 році колектив працівників та службовців компанії зібрав кошти для встановлення пам’ятника на його честь. Монумент було відкрито у 1911 році, через два роки після смерті Сельве, і відтоді він стоїть як символ подяки та історичної пам’яті про його вплив на промисловий та соціальний розвиток регіону." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса: ", text: "Am Selvedenkmal, 58762 Altena, Nordrhein Westfalen, Німеччина." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "У народі пам’ятник називають «Der stille Gustav» («Тихий Густав»)." },
                        { text: "Він розташований на місці, звідки було видно як його житловий будинок, так і підприємства, якими він керував." },
                        { text: "Комплекс пам’ятника включає архітектурні елементи, що відображають вплив модерну (Jugendstil)." }
                    ]
                },
                construction_period: "1911 рік (відкрито через 2 роки після смерті Г. Сельве).",
                architects: "Скульптура: Клеменс Бушер (Clemens Buscher), німецький скульптор із Дюссельдорфа (1855–1916). Бронзовий відлив: майстерня Бернхард Ферстер (Bernhard Förster Kunstgewerbliche Werkstätten), Дюссельдорф",
                meta: {
                    title: "Пам’ятник Густаву Сельве – історичний меморіал в Альтені",
                    description: "Дізнайтеся про пам’ятник Густаву Сельве в Альтені – меморіальний монумент видатному промисловцю XIX–XX ст. з історією, фактами відвідування та практичною інформацією. Вільний доступ, види на Ленне та історія соціальної індустрії Німеччини.",
                    ogTitle: "Пам’ятник Густаву Сельве в Альтені – історичний погляд",
                    ogDescription: "Пам’ятник відомому промисловцю Густаву Сельве з панорамами Альтени та цікавими історичними фактами.",
                    keywords: "пам’ятник, пам’ятка, скульптура, історичне місце, туризм, цікаві місця",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/gustav_selve/001.jpg"
                }
            },
            de: {
                name: "Gustav-Selve-Denkmal",
                location: "Altena, Deutschland",
                short_description: "Das Gustav-Selve-Denkmal, errichtet zu Ehren des bekannten deutschen Industriellen des 19.–20. Jahrhunderts, befindet sich auf einer Anhöhe zwischen den Tälern der Flüsse Lenne und Rahmedetal in Altena. Das Denkmal erhebt sich über die Stadt und dient als museales Gedenkobjekt, das künstlerische Skulptur mit historischem Mahnmal verbindet.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Gustav-Selve-Denkmal", text: "liegt auf einem felsigen Hügel über dem Fluss Lenne und ist ein beliebter Aussichtspunkt mit Blick auf die Stadt und Umgebung. Die Komposition umfasst eine bronzene Statue von Selve in Lebensgröße auf einem hohen steinernen Sockel, eine halbkreisförmige Kolonnade dahinter und dekorative Elemente im Jugendstil, darunter Löwenfiguren an den Seiten. Auf dem Sockel befindet sich eine Gedenkinschrift mit Name und Lebensdaten des Industriellen, auf der Rückseite sein Motto «Treue um Treue»." },
                        { text: "Das Denkmal wurde als Zeichen der Anerkennung für Selves Wirken und seinen Beitrag zur Entwicklung der Stadt und der Arbeitsbeziehungen geschaffen. In der Bevölkerung wird das Denkmal oft «Stiller Gustav» genannt. Der kostenlose Zugang macht es zu einem bequemen Zwischenstopp für Touristen und Spaziergänger in der Umgebung von Altena." },
                        { bold: "Gustav Selve", text: "(1842–1909) war einer der einflussreichsten Unternehmer Deutschlands Ende des 19. Jahrhunderts. Er entwickelte das Familienunternehmen Basse & Selve zu einem großen Industrieunternehmen mit Tausenden von Mitarbeitern und zahlreichen Fabriken, unter anderem in Altena. Selve war nicht nur als erfolgreicher Geschäftsmann bekannt, sondern auch als Innovator sozialer Praktiken: er führte verbesserte Arbeitsbedingungen ein, errichtete Arbeiterhäuser, Schulen und Unterstützungsinstitutionen für seine Angestellten und leitete einen erheblichen Teil seines Gewinns auf soziale Initiativen lange vor der offiziellen Einführung von Sozialgesetzen." },
                        { text: "Nach seinem Tod im Jahr 1909 sammelte die Belegschaft des Unternehmens Mittel zur Errichtung des Denkmals zu seinen Ehren. Das Denkmal wurde 1911, zwei Jahre nach Selves Tod, eröffnet und steht seitdem als Symbol des Dankes und des historischen Andenkens an seinen Einfluss auf die industrielle und soziale Entwicklung der Region." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse: ", text: "Am Selvedenkmal, 58762 Altena, Nordrhein-Westfalen, Deutschland." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "In der Bevölkerung wird das Denkmal «Der stille Gustav» genannt." },
                        { text: "Es befindet sich an einem Ort, von dem sowohl sein Wohnhaus als auch die von ihm geleiteten Betriebe sichtbar waren." },
                        { text: "Der Denkmalkomplex umfasst architektonische Elemente, die den Einfluss des Jugendstils widerspiegeln." }
                    ]
                },
                construction_period: "1911 (eröffnet zwei Jahre nach Selves Tod).",
                architects: "Skulptur: Clemens Buscher (1855–1916), deutscher Bildhauer aus Düsseldorf. Bronzeguss: Werkstatt Bernhard Förster Kunstgewerbliche Werkstätten, Düsseldorf",
                meta: {
                    title: "Gustav-Selve-Denkmal – historisches Mahnmal in Altena",
                    description: "Erfahren Sie mehr über das Gustav-Selve-Denkmal in Altena – ein Gedenkmonument für den herausragenden Industriellen des 19.–20. Jahrhunderts mit Geschichte, Besuchsfakten und praktischen Informationen. Kostenloser Zugang, Ausblicke auf die Lenne und die Geschichte der sozialen Industrie Deutschlands.",
                    ogTitle: "Gustav-Selve-Denkmal in Altena – historischer Blick",
                    ogDescription: "Denkmal für den bekannten Industriellen Gustav Selve mit Panoramen von Altena und interessanten historischen Fakten.",
                    keywords: "Denkmal, Sehenswürdigkeit, Skulptur, historischer Ort, Tourismus, interessante Orte",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/gustav_selve/001.jpg"
                }
            }
        }
    },

    //Lüdenscheid
    {
        id: "schloss_neuenhof_luedenscheid",
        type: ["palace_or_castle"], rating: "local",
        path: "schloss_neuenhof_luedenscheid",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", cityPath: "luedenscheid",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/neuenhof/001.jpg",
        coord: { lat: 51.198624, lng: 7.6292577 },
        translations: {
            ru: {
                name: "Замок Нойенхоф",
                location: "Люденшайд, Германия",
                short_description: "Окружённый водяным рвом замок Нойенхоф – один из значимых исторических архитектурных памятников города Люденшайд. Комплекс сочетает жилую усадьбу, хозяйственные постройки и оформленный внутренний двор.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Замок Нойенхоф ", text: "представляет собой трёхэтажное прямоугольное здание с двускатной крышей, расположенное на острове, окружённом рвом с водой. Со стороны внутреннего двора фасад украшен двумя башнями, между которыми находится фонтан с гербом." },
                        { text: "Перед основным зданием находится хозяйственный двор с постройками XVIII-XIX веков. Восточную часть комплекса украшают декоративные кованые ворота, подчёркивающие статус бывшего дворянского имения." },
                        { text: "Замок находится в частной собственности и закрыт для посещения. Осмотр возможен только снаружи. Несмотря на закрытый доступ, замок остаётся одним из немногих хорошо сохранившихся водных замков региона Зауэрланд." },
                        { bold: "История", text: "Первые документальные упоминания о замке Нойенхоф относятся к 1326 году. Изначально он служил укреплённой усадьбой и резиденцией местного дворянского рода." },
                        { text: "Позднее комплекс неоднократно перестраивался и расширялся, особенно в XVIII-XIX веках, когда были добавлены хозяйственные здания и внутренний двор с декоративным оформлением. Замок оставался жилым имением и не утратил своей функции резиденции." },
                        { text: "Замок Нойенхоф является родовым гнездом дворянского рода фон Нойхофф, к которому принадлежал Теодор фон Нойхофф — известный как король Корсики." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "Neuenhofer Straße 54, 58515 Lüdenscheid, Германия" },
                        { bold: "Доступ: ", text: "только внешний осмотр. Вход закрыт для посещения" }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Замок относится к типу водных замков (Wasserschloss) – редкий формат для региона." },
                        { text: "Комплекс сохранил историческую планировку усадьбы." },
                        { text: "Герб во дворе – копия оригинала." },
                        { text: "До сих пор используется как частная резиденция." }
                    ]
                },
                construction_period: "примерно 1326 год",
                meta: {
                    title: "Замок Нойенхоф в Люденшайде – история, описание, фото",
                    description: "Замок Нойенхоф – водный замок XIV века в Люденшайде. История, архитектура, интересные факты, фото и практическая информация для туристов.",
                    ogTitle: "Замок Нойенхоф – средневековая усадьба со рвом в Германии",
                    ogDescription: "Старинный замок Нойенхоф в Люденшайде: водный ров, дворянская история и атмосферная архитектура.",
                    keywords: "замок Нойенхоф, Люденшайд, водный замок, Schloss Neuenhof, достопримечательности Германии, замки Германии, исторические здания, архитектура, туризм Германия",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/neuenhof/001.jpg"
                }
            },
            ua: {
                name: "Замок Нойенхоф",
                location: "Люденшайд, Німеччина",
                short_description: "Оточений водяним ровом замок Нойенхоф — один із значущих історичних архітектурних пам’яток міста Люденшайд. Комплекс поєднує житлову садибу, господарські будівлі та внутрішній двір з декоративним оформленням.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Замок Нойенхоф ", text: "є триповерховою прямокутною будівлею з двосхилим дахом, розташованою на острові, оточеному водяним ровом. З боку внутрішнього двору фасад прикрашений двома вежами, між якими розташований фонтан із гербом." },
                        { text: "Перед основною будівлею знаходиться господарський двір із спорудами XVIII–XIX століть. Східну частину комплексу прикрашають декоративні ковані ворота, що підкреслюють статус колишнього дворянського маєтку." },
                        { text: "Замок перебуває у приватній власності та закритий для відвідування. Огляд можливий лише ззовні. Незважаючи на обмежений доступ, замок залишається одним із небагатьох добре збережених водних замків регіону Зауерланд." },
                        { bold: "Історія", text: "Перші документальні згадки про замок Нойенхоф датуються 1326 роком. Спочатку він слугував укріпленою садибою та резиденцією місцевого дворянського роду." },
                        { text: "Пізніше комплекс неодноразово перебудовувався та розширювався, особливо у XVIII-XIX століттях, коли були додані господарські будівлі та сформований внутрішній двір із декоративним оформленням. Замок залишався житловим маєтком і не втратив своєї функції резиденції." },
                        { text: "Замок Нойенхоф є родовим гніздом дворянського роду фон Нойхофф, до якого належав Теодор фон Нойхофф – відомий як король Корсики." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "Neuenhofer Straße 54, 58515 Lüdenscheid, Німеччина" },
                        { bold: "Доступ: ", text: "лише зовнішній огляд. Вхід закритий для відвідування" }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Замок належить до типу водних замків (Wasserschloss) — рідкісний формат для регіону." },
                        { text: "Комплекс зберіг історичне планування садиби." },
                        { text: "Герб у дворі – копія оригіналу." },
                        { text: "Досі використовується як приватна резиденція." }
                    ]
                },
                construction_period: "приблизно 1326 рік",
                meta: {
                    title: "Замок Нойенхоф у Люденшайді – історія, опис, фото",
                    description: "Замок Нойенхоф – водний замок XIV століття у Люденшайді. Історія, архітектура, цікаві факти, фото та практична інформація для туристів.",
                    ogTitle: "Замок Нойенхоф – середньовічна садиба з ровом у Німеччині",
                    ogDescription: "Старовинний замок Нойенхоф у Люденшайді: водяний рів, дворянська історія та атмосферна архітектура.",
                    keywords: "замок Нойенхоф, Люденшайд, водний замок, Schloss Neuenhof, пам’ятки Німеччини, замки Німеччини, історичні будівлі, архітектура, туризм Німеччина",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/neuenhof/001.jpg"
                }
            },
            de: {
                name: "Schloss Neuenhof",
                location: "Lüdenscheid, Deutschland",
                short_description: "Das von einem Wassergraben umgebene Schloss Neuenhof gehört zu den bedeutenden historischen Architekturdenkmälern der Stadt Lüdenscheid. Die Anlage vereint ein Wohnanwesen, Wirtschaftsgebäude und einen Innenhof mit dekorativer Gestaltung.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Schloss Neuenhof ", text: "ist ein dreigeschossiges, rechteckiges Gebäude mit Satteldach, das auf einer von Wasser umgebenen Insel steht. Zur Hofseite hin ist die Fassade mit zwei Türmen geschmückt, zwischen denen sich ein Brunnen mit Wappen befindet." },
                        { text: "Vor dem Hauptgebäude befindet sich ein Wirtschaftshof mit Bauten aus dem 18. und 19. Jahrhundert. Den östlichen Teil der Anlage schmücken dekorative schmiedeeiserne Tore, die den Status des ehemaligen Adelsgutes unterstreichen." },
                        { text: "Das Schloss befindet sich in Privatbesitz und ist für Besucher geschlossen. Eine Besichtigung ist nur von außen möglich. Trotz des eingeschränkten Zugangs zählt das Schloss zu den wenigen gut erhaltenen Wasserschlössern der Region Sauerland." },
                        { bold: "Geschichte", text: "Die erste urkundliche Erwähnung von Schloss Neuenhof stammt aus dem Jahr 1326. Ursprünglich diente es als befestigter Gutshof und Residenz eines lokalen Adelsgeschlechts." },
                        { text: "Später wurde die Anlage mehrfach umgebaut und erweitert, insbesondere im 18. und 19. Jahrhundert, als Wirtschaftsgebäude hinzugefügt und der Innenhof mit dekorativer Gestaltung ausgebaut wurde. Das Schloss blieb ein Wohnsitz und hat seine Funktion als Residenz bis heute nicht verloren." },
                        { text: "Schloss Neuenhof ist der Stammsitz des Adelsgeschlechts von Neuhoff, zu dem auch Theodor von Neuhoff gehörte – bekannt als König von Korsika." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "Neuenhofer Straße 54, 58515 Lüdenscheid, Deutschland" },
                        { bold: "Zugang: ", text: "nur Außenbesichtigung. Der Zutritt ist für Besucher nicht möglich" }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Das Schloss gehört zum Typ der Wasserschlösser (Wasserschloss) – eine eher seltene Bauform in der Region." },
                        { text: "Die Anlage hat ihre historische Struktur bewahrt." },
                        { text: "Das Wappen im Innenhof ist eine Kopie des Originals." },
                        { text: "Bis heute wird das Anwesen als private Residenz genutzt." }
                    ]
                },
                construction_period: "um 1326",
                meta: {
                    title: "Schloss Neuenhof in Lüdenscheid – Geschichte, Beschreibung, Fotos",
                    description: "Schloss Neuenhof ist ein Wasserschloss aus dem 14. Jahrhundert in Lüdenscheid. Geschichte, Architektur, interessante Fakten, Fotos und praktische Informationen für Besucher.",
                    ogTitle: "Schloss Neuenhof – mittelalterliches Anwesen mit Wassergraben in Deutschland",
                    ogDescription: "Das historische Schloss Neuenhof in Lüdenscheid: Wassergraben, Adelsgeschichte und eindrucksvolle Architektur.",
                    keywords: "Schloss Neuenhof, Lüdenscheid, Wasserschloss, Sehenswürdigkeiten Deutschland, Schlösser Deutschland, historische Gebäude, Architektur, Tourismus Deutschland",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/neuenhof/001.jpg"
                }
            }
        }
    },
    {
        id: "schloss_oedenthal_luedenscheid",
        type: ["palace_or_castle"], rating: "local",
        path: "schloss_oedenthal_luedenscheid",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", cityPath: "luedenscheid",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/schloss_oedenthal/001.jpg",
        coord: { lat: 51.232895, lng: 7.583583 },
        translations: {
            ru: {
                name: "Усадьба Оеденталь",
                location: "Люденшайд, Германия",
                short_description: "Историческая усадьба в Люденшайде, перестроенная в XIX веке в неоготическом стиле и сохранившая атмосферу загородного имения.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Усадьба Оеденталь (Schloss Oedenthal)", text: "находится в северо-западной части Люденшайда, на естественном возвышении между долинами небольших рек. Место отличается живописным ландшафтом и исторической застройкой, формирующей характерный вид района Grebbecketal." },
                        { text: "Современный облик усадьбы сформировался после пожара около 1865 года, когда прежние постройки были утрачены. В результате реконструкции здание приобрело черты неоготики и английского стиля Tudor: асимметричные корпуса, центральную башню и декоративные архитектурные элементы." },
                        { text: "Важную роль в истории усадьбы сыграла семья фон Хольцбринк (von Holtzbrinck), владевшая имением на протяжении длительного времени. Представители семьи занимали значимые административные и государственные должности в Пруссии, а само место использовалось как загородная резиденция." },
                        { bold: "История", text: "Первые упоминания о поселении и владении в этой местности относятся к XII веку (около 1160 года). В последующие столетия усадьба неоднократно переходила между владельцами, сохраняя значение сельского имения региона." },
                        { text: "Примерно в 1865 году произошёл пожар, уничтоживший старые постройки. После этого был возведён новый комплекс в неоготическом стиле, который сохранился до настоящего времени. С XX века усадьба находится в частной собственности и используется как жилая резиденция, доступ на территорию ограничен." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "Oedenthaler Straße 105–107, 58515 Lüdenscheid" },
                        { bold: "Доступ:", text: "ограничен (частная территория). Осмотр возможен только снаружи." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "История усадьбы насчитывает более 800 лет – первое упоминание относится к XII веку." },
                        { text: "Несмотря на название Schloss, это не классический замок, а дворянская усадьба (Herrenhaus) без оборонительных функций." },
                        { text: "Архитектура выполнена в стиле английской неоготики (Tudor), что необычно для региона Зауэрланд." },
                        { text: "У подножия усадьбы находилась водяная мельница, связанная с хозяйством бывшего поместья." }
                    ]
                },
                construction_period: "Около 1160 года (первое упоминание), современное здание – после 1865 года",
                meta: {
                    title: "Усадьба Оеденталь (Schloss Oedenthal) в Люденшайде – история и архитектур",
                    description: "Историческая усадьба в Люденшайде с корнями в XII веке и архитектурой XIX века в стиле неоготики. Частная территория, доступ ограничен.",
                    ogTitle: "Усадьба Оеденталь в Люденшайде",
                    ogDescription: "Неоготическая усадьба с многовековой историей в Люденшайде, расположенная в живописной долине.",
                    keywords: "усадьба Оеденталь, Schloss Oedenthal, Люденшайд достопримечательности, замки NRW, исторические усадьбы Германия, Sauerland Sehenswürdigkeiten, Oedenthal Lüdenscheid, что посмотреть в Люденшайде, Herrenhaus, Sauerland, Grebbecketal",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/schloss_oedenthal/001.jpg"
                }
            },
            ua: {
                name: "Садиба Оеденталь",
                location: "Люденшайд, Німеччина",
                short_description: "Історична садиба в Люденшайді, перебудована в XIX столітті в неоготичному стилі та збережена як атмосферне заміське маєткове господарство.",
                full_description: {
                    title: "Опис і історія",
                    items: [
                        { bold: "Садиба Оеденталь (Schloss Oedenthal)", text: "розташована в північно-західній частині Люденшайда, на природному підвищенні між долинами невеликих річок. Місце вирізняється мальовничим ландшафтом і історичною забудовою, яка формує характерний вигляд району Grebbecketal." },
                        { text: "Сучасний вигляд садиби сформувався після пожежі приблизно 1865 року, коли попередні споруди були знищені. У результаті реконструкції будівля набула рис неоготики та англійського стилю Tudor: асиметричні корпуси, центральна башта та декоративні архітектурні елементи." },
                        { text: "Важливу роль в історії садиби відіграла родина фон Хольцбрінк (von Holtzbrinck), яка тривалий час володіла маєтком. Представники родини займали значні адміністративні та державні посади в Пруссії, а саме місце використовувалося як заміська резиденція." },
                        { bold: "Історія", text: "Перші згадки про поселення та володіння на цій території відносяться до XII століття (приблизно 1160 рік). У наступні століття садиба неодноразово змінювала власників, зберігаючи значення сільського маєтку регіону." },
                        { text: "Приблизно у 1865 році сталася пожежа, яка знищила старі споруди. Після цього було зведено новий комплекс у неоготичному стилі, який зберігся до сьогодні. З XX століття садиба перебуває у приватній власності та використовується як житлова резиденція, доступ на територію обмежений." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "Oedenthaler Straße 105–107, 58515 Lüdenscheid" },
                        { bold: "Доступ:", text: "обмежений (приватна територія). Огляд можливий лише ззовні." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Історія садиби налічує понад 800 років – перша згадка відноситься до XII століття." },
                        { text: "Попри назву Schloss, це не класичний замок, а дворянська садиба (Herrenhaus) без оборонних функцій." },
                        { text: "Архітектура виконана в стилі англійської неоготики (Tudor), що є нетиповим для регіону Зауерланд." },
                        { text: "Під садибою знаходився водяний млин, пов’язаний із господарством колишнього маєтку." }
                    ]
                },
                construction_period: "Близько 1160 року (перша згадка), сучасна будівля – після 1865 року",
                meta: {
                    title: "Садиба Оеденталь (Schloss Oedenthal) у Люденшайді – історія та архітектура",
                    description: "Історична садиба в Люденшайді з корінням у XII столітті та архітектурою XIX століття в неоготичному стилі. Приватна територія, доступ обмежений.",
                    ogTitle: "Садиба Оеденталь у Люденшайді",
                    ogDescription: "Неоготична садиба з багатовіковою історією в Люденшайді, розташована в мальовничій долині.",
                    keywords: "садиба Оеденталь, Schloss Oedenthal, Люденшайд пам’ятки, замки NRW, історичні садиби Німеччина, Sauerland Sehenswürdigkeiten, Oedenthal Lüdenscheid, що подивитися в Люденшайді, Herrenhaus, Sauerland, Grebbecketal",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/schloss_oedenthal/001.jpg"
                }
            },
            de: {
                name: "Schloss Oedenthal",
                location: "Lüdenscheid, Deutschland",
                short_description: "Historisches Gut in Lüdenscheid, das im 19. Jahrhundert im neugotischen Stil umgebaut wurde und die Atmosphäre eines traditionellen Landguts bewahrt hat.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Schloss Oedenthal", text: "liegt im nordwestlichen Teil von Lüdenscheid auf einer natürlichen Anhöhe zwischen den Tälern kleiner Flüsse. Der Ort zeichnet sich durch eine malerische Landschaft und historische Bebauung aus, die das typische Erscheinungsbild der Region Grebbecketal prägt." },
                        { text: "Das heutige Erscheinungsbild des Gutes entstand nach einem Brand um 1865, bei dem die früheren Gebäude zerstört wurden. Im Zuge des Wiederaufbaus erhielt das Gebäude Merkmale der Neugotik und des englischen Tudorstils: asymmetrische Baukörper, ein zentraler Turm und dekorative architektonische Elemente." },
                        { text: "Eine wichtige Rolle in der Geschichte des Gutes spielte die Familie von Holtzbrinck, die das Anwesen über einen langen Zeitraum besaß. Mitglieder der Familie hatten bedeutende Verwaltungs- und Staatsämter in Preußen inne, und das Anwesen wurde als Sommerresidenz genutzt." },
                        { bold: "Geschichte", text: "Die ersten Erwähnungen der Siedlung und des Besitzes in diesem Gebiet gehen auf das 12. Jahrhundert zurück (um 1160). In den folgenden Jahrhunderten wechselte das Gut mehrfach den Besitzer und behielt seine Bedeutung als landwirtschaftliches Anwesen der Region." },
                        { text: "Um 1865 zerstörte ein Brand die alten Gebäude. Danach wurde ein neuer Komplex im neugotischen Stil errichtet, der bis heute erhalten ist. Seit dem 20. Jahrhundert befindet sich das Gut in Privatbesitz und wird als Wohnsitz genutzt, der Zugang ist eingeschränkt." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "Oedenthaler Straße 105–107, 58515 Lüdenscheid" },
                        { bold: "Zugang:", text: "eingeschränkt (Privatgelände). Besichtigung nur von außen möglich." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Die Geschichte des Gutes reicht über 800 Jahre zurück – die erste Erwähnung stammt aus dem 12. Jahrhundert." },
                        { text: "Trotz des Namens Schloss handelt es sich nicht um eine klassische Burg, sondern um ein Herrenhaus ohne Verteidigungsfunktion." },
                        { text: "Die Architektur ist im englischen Tudorstil gehalten, was in der Region Sauerland ungewöhnlich ist." },
                        { text: "Am Fuße des Gutes befand sich eine Wassermühle, die zum wirtschaftlichen Betrieb des ehemaligen Anwesens gehörte." }
                    ]
                },
                construction_period: "Um 1160 (erste Erwähnung), heutiges Gebäude nach 1865",
                meta: {
                    title: "Schloss Oedenthal in Lüdenscheid – Geschichte und Architektur",
                    description: "Historisches Gut in Lüdenscheid mit Wurzeln im 12. Jahrhundert und Architektur des 19. Jahrhunderts im neugotischen Stil. Privatgelände, nicht zugänglich.",
                    ogTitle: "Schloss Oedenthal in Lüdenscheid",
                    ogDescription: "Neugotisches Schloss mit jahrhundertealter Geschichte in einer malerischen Talsenke bei Lüdenscheid.",
                    keywords: "Gut Oedenthal, Schloss Oedenthal, Lüdenscheid Sehenswürdigkeiten, Burgen NRW, historische Güter Deutschland, Sauerland Sehenswürdigkeiten, Oedenthal Lüdenscheid, Herrenhaus, Grebbecketal, Geschichte Lüdenscheid",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/schloss_oedenthal/001.jpg"
                }
            }
        }
    },

    //iserlohn
    {
        id: "dechenhohle_iserlohn",
        type: ["nature"], rating: "popular",
        path: "dechenhohle_iserlohn",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", cityPath: "iserlohn",
        fotoCard: "Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg",
        coord: { lat: 51.36556, lng: 7.64472 },
        translations: {
            ru: {
                name: "Пещера Дехенхёле",
                location: "Изерлон, Германия",
                officialSite: [{ bold: "Официальный сайт", link: "https://www.dechenhoehle.de/" }],
                short_description: "Пещера Дехенхёле (Dechenhöhle) – одна из самых красивых и посещаемых сталактитовых пещер Германии, расположенная в северной части Зауэрланда в районе Изерлон Грюне (Северный Рейн Вестфалия). Пещера впечатляет обилием сталактитов и сталагмитов и предлагает посетителям 400 м специально устроенного маршрута по освещённым залам с удивительными природными образованиями. ",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Пещера Дехенхёле (Dechenhöhle) ", text: "находится в карстовых известняках Рейнского массива и является частью большого подземного комплекса длиной более 20 км. Внутри можно увидеть сложные образования – от «Органной залы» до «Пальмовой колонны», высотой около 3 м. Пещера освещена электричеством, с 2015 года применяется LED подсветка для лучшего восприятия цвета и структуры сталактитов. " },
                        { text: "Пещера доступна только в составе экскурсии: это около 400 м благоустроенного маршрута с объяснениями гида. Температура внутри стабильна и около 10 °C, что делает посещение интересным в любое время года. " },
                        { text: "С момента открытия пещера Дехенхёле быстро стала популярной: уже в том же 1868 году её посетили тысячи людей. Названа пещера в честь геолога Heinrich von Dechen (1800–1889), признанного за вклад в изучение геологии Рейна и Вестфалии.  " },
                        { text: "До 1983 года пещера находилась в собственности железнодорожных компаний из за своего обнаружения во время строительства путей; затем управление перешло к региональным туристическим и муниципальным организациям. " }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес: ", text: "Dechenhöhle 5, 58644 Iserlohn Grüne, Германия." },
                        { bold: "Как добраться: ", text: "пешком или автобусом от остановки Dechenhöhle; имеется свой железнодорожный остановочный пункт Letmathe Dechenhöhle на региональных маршрутах RE16 / RB91. " },
                        { bold: "Экскурсии и часы: ", text: "экскурсии с марта по ноябрь регулярно, зимой – в выходные и праздничные дни. Отдельные специальные мероприятия доступны по запросу." },
                        { bold: "Стоимость: ", text: "<br>взрослые ≈ 10 €, <br>дети 3-15 лет ≈ 6,50-6 €, <br>льготные цены для групп. " }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Пещера расположена в самом известном пещерном районе Германии – Grüner Tal (Грюне Тал). " },
                        { text: "Dechenhöhle – единственная пещера в Германии с собственной железнодорожной остановкой. " },
                        { text: "Общая протяжённость известных ходов превышает 20 км, хотя для посетителей открыто около 400 м. " },
                        { text: "Внутри регулярно проходят событийные экскурсии: «Пещерные огни», концерты, рождественские прогулки, мастер классы. " }
                    ]
                },
                construction_period: "Пещеру обнаружили 10 июня 1868 года во время работ по строительству железной дороги. Двое железнодорожных рабочих, потеряв молот, забрались в узкую скалистую трещину, которая привела к пространству с уникальными сталактитовыми образованиями. ",
                meta: {
                    title: "Пещера Дехенхёле (Dechenhöhle), Iserlohn – сталактитовые образования, экскурсии в Германии",
                    description: "Посетите Dechenhöhle – одну из красивейших сталактитовых пещер Германии в Изерлоне. Узнайте об истории открытия, уникальных образованиях, музейных экспозициях и экскурсиях. Великолепный природный туризм для всей семьи.",
                    ogTitle: "Dechenhöhle – подземное чудо Sauerland",
                    ogDescription: "Откройте для себя мистическую Dechenhöhle в Германии: сталактиты, истории ледниковых животных, музей и пещерные экскурсии для всех возрастов.",
                    keywords: "пещера, достопримечательность, природное место, геология, туризм, интересные места",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            },
            ua: {
                name: "Печера Дехенхёле",
                location: "Ізерлон, Німеччина",
                officialSite: [{ bold: "Офіційний сайт", link: "https://www.dechenhoehle.de/" }],
                short_description: "Печера Дехенхёле (Dechenhöhle) – одна з найкрасивіших та найвідвідуваніших сталактитових печер Німеччини, розташована в північній частині Саарланду в районі Ізерлон-Грюне (Північний Рейн-Вестфалія). Печера вражає багатством сталактитів та сталагмітів і пропонує відвідувачам 400 м спеціально облаштованого маршруту по освітлених залах з унікальними природними утвореннями.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Печера Дехенхёле (Dechenhöhle) ", text: "розташована в карстових вапняках Рейнського масиву і є частиною великого підземного комплексу довжиною понад 20 км. Усередині можна побачити складні утворення – від «Органного залу» до «Пальмової колони», висотою близько 3 м. Печера освітлюється електрикою, з 2015 року використовується LED-підсвітка для кращого сприйняття кольору та структури сталактитів." },
                        { text: "Печера доступна лише в складі екскурсії: близько 400 м облаштованого маршруту з поясненнями гіда. Температура всередині стабільна і близько 10 °C, що робить відвідування цікавим у будь-яку пору року." },
                        { text: "З моменту відкриття печера Дехенхёле швидко стала популярною: вже в 1868 році її відвідали тисячі людей. Печера названа на честь геолога Heinrich von Dechen (1800–1889), визнаного за внесок у вивчення геології Рейну та Вестфалії." },
                        { text: "До 1983 року печера перебувала у власності залізничних компаній через її відкриття під час будівництва колій; згодом управління перейшло до регіональних туристичних та муніципальних організацій." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса: ", text: "Dechenhöhle 5, 58644 Iserlohn Grüne, Німеччина." },
                        { bold: "Як дістатися: ", text: "пішки або автобусом від зупинки Dechenhöhle; є власна залізнична зупинка Letmathe Dechenhöhle на регіональних маршрутах RE16 / RB91." },
                        { bold: "Екскурсії та години роботи: ", text: "екскурсії регулярно з березня по листопад, взимку – у вихідні та святкові дні. Окремі спеціальні заходи доступні за запитом." },
                        { bold: "Вартість: ", text: "<br>дорослі ≈ 10 €, <br>діти 3–15 років ≈ 6,50–6 €, <br>пільгові ціни для груп." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Печера розташована в найвідомішому печерному районі Німеччини – Grüner Tal (Грюне Тал)." },
                        { text: "Dechenhöhle – єдина печера в Німеччині з власною залізничною зупинкою." },
                        { text: "Загальна протяжність відомих ходів перевищує 20 км, хоча для відвідувачів відкрито близько 400 м." },
                        { text: "Всередині регулярно проводяться тематичні екскурсії: «Печерні вогні», концерти, різдвяні прогулянки, майстер-класи." }
                    ]
                },
                construction_period: "Печеру відкрили 10 червня 1868 року під час робіт з будівництва залізниці. Двоє залізничних робітників, втративши молоток, забралися у вузьку скелясту тріщину, яка привела до простору з унікальними сталактитовими утвореннями.",
                meta: {
                    title: "Печера Дехенхёле (Dechenhöhle), Ізерлон – сталактитові утворення, екскурсії в Німеччині",
                    description: "Відвідайте Dechenhöhle – одну з найкрасивіших сталактитових печер Німеччини в Ізерлоні. Дізнайтеся про історію відкриття, унікальні утворення, музейні експозиції та екскурсії. Чудовий природний туризм для всієї родини.",
                    ogTitle: "Dechenhöhle – підземне диво Sauerland",
                    ogDescription: "Відкрийте для себе містичну Dechenhöhle в Німеччині: сталактити, історії льодовикових тварин, музей та печерні екскурсії для всіх вікових груп.",
                    keywords: "печера, пам’ятка, природне місце, геологія, туризм, цікаві місця",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            },
            de: {
                name: "Dechenhöhle",
                location: "Iserlohn, Deutschland",
                officialSite: [{ bold: "Offizielle Webseite", link: "https://www.dechenhoehle.de/" }],
                short_description: "Die Dechenhöhle ist eine der schönsten und meistbesuchten Tropfsteinhöhlen Deutschlands, gelegen im nördlichen Sauerland im Gebiet Iserlohn-Grüne (Nordrhein-Westfalen). Die Höhle beeindruckt durch ihre Vielzahl an Stalaktiten und Stalagmiten und bietet den Besuchern einen 400 m langen, speziell angelegten Rundgang durch beleuchtete Hallen mit einzigartigen Naturformationen.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Die Dechenhöhle ", text: "liegt in den Karstkalken des Rheinischen Schiefergebirges und ist Teil eines großen unterirdischen Komplexes von über 20 km Länge. Im Inneren sind komplexe Formationen zu sehen – von der „Orgelhalle“ bis zur „Palmen-Säule“, ca. 3 m hoch. Die Höhle ist elektrisch beleuchtet, seit 2015 wird LED-Beleuchtung verwendet, um Farbe und Struktur der Tropfsteine besser zur Geltung zu bringen." },
                        { text: "Die Höhle ist nur im Rahmen einer Führung zugänglich: etwa 400 m ausgebauter Weg mit Erläuterungen des Guides. Die Temperatur im Inneren ist stabil bei ca. 10 °C, was den Besuch zu jeder Jahreszeit interessant macht." },
                        { text: "Seit ihrer Entdeckung wurde die Dechenhöhle schnell populär: bereits 1868 besuchten Tausende von Menschen die Höhle. Sie ist nach dem Geologen Heinrich von Dechen (1800–1889) benannt, der für seine Beiträge zur Geologie des Rheins und Westfalens anerkannt wurde." },
                        { text: "Bis 1983 gehörte die Höhle den Eisenbahnunternehmen aufgrund ihrer Entdeckung während des Gleisbaus; anschließend ging die Verwaltung an regionale Tourismus- und kommunale Organisationen über." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse: ", text: "Dechenhöhle 5, 58644 Iserlohn Grüne, Deutschland." },
                        { bold: "Anfahrt: ", text: "zu Fuß oder mit dem Bus von der Haltestelle Dechenhöhle; eigene Bahnstation Letmathe Dechenhöhle an den Regionalstrecken RE16 / RB91." },
                        { bold: "Führungen und Öffnungszeiten: ", text: "Führungen regelmäßig von März bis November, im Winter an Wochenenden und Feiertagen. Einzelne Sonderveranstaltungen auf Anfrage." },
                        { bold: "Eintrittspreise: ", text: "<br>Erwachsene ≈ 10 €, <br>Kinder 3–15 Jahre ≈ 6,50–6 €, <br>ermäßigte Preise für Gruppen." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Die Höhle liegt in der bekanntesten Höhlenregion Deutschlands – Grüner Tal." },
                        { text: "Die Dechenhöhle ist die einzige Höhle in Deutschland mit eigenem Bahnanschluss." },
                        { text: "Die Gesamtlänge der bekannten Gänge beträgt über 20 km, für Besucher sind etwa 400 m zugänglich." },
                        { text: "Regelmäßig finden thematische Führungen statt: „Höhlenlichter“, Konzerte, Weihnachtsführungen, Workshops." }
                    ]
                },
                construction_period: "Die Höhle wurde am 10. Juni 1868 während des Eisenbahnbaus entdeckt. Zwei Eisenbahnarbeiter, die einen Hammer verloren hatten, kletterten in einen engen Felsenriss, der zu einem Raum mit einzigartigen Tropfsteinformationen führte.",
                meta: {
                    title: "Dechenhöhle, Iserlohn – Tropfsteinformationen, Führungen in Deutschland",
                    description: "Besuchen Sie die Dechenhöhle – eine der schönsten Tropfsteinhöhlen Deutschlands in Iserlohn. Erfahren Sie mehr über die Entdeckungsgeschichte, einzigartige Formationen, Museumsausstellungen und Führungen. Hervorragender Naturtourismus für die ganze Familie.",
                    ogTitle: "Dechenhöhle – unterirdisches Wunder im Sauerland",
                    ogDescription: "Entdecken Sie die mystische Dechenhöhle in Deutschland: Stalaktiten, Geschichten von eiszeitlichen Tieren, Museum und Höhlenführungen für alle Altersgruppen.",
                    keywords: "Höhle, Sehenswürdigkeit, Natur, Geologie, Tourismus, interessante Orte",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            }
        }
    },

    // округ dusseldorf 
    // край mettmann 
    // velbert
    {
        id: "langenberg_altstadt_velbert",
        type: ["historical_area"], rating: "popular",
        path: "langenberg_altstadt_velbert",
        countryPath: "germany", regionPath: "nrw", districtPath: "dusseldorf", cityPath: "velbert",
        subObjects: ["langenberg_alte_kirche_velbert"],
        fotoCard: "Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/006.jpg",
        translations: {
            ru: {
                name: "Старый город Лангенберг",
                location: "Фельберт-Лангенберг, Германия",
                short_description: "Старый город Лангенберг – один из наиболее хорошо сохранившихся исторических центров региона, известный фахверковой архитектурой, узкими улочками и атмосферой старинного торгово-ремесленного города.",
                short_description_subObjects: {
                    text: "В старом городе Лангенберга расположены такие достопримечательности:",
                    items: [
                        { bold: "Старая церковь Лангеберг", text: "– историческая евангелическая церковь XVIII века в районе Лангенберг города Фельберт, сочетающая элементы барочной архитектуры и сохранившиеся части средневекового храма." },
                    ]
                },
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Старый город Лангенберг (Velbert-Langenberg Altstadt)", text: "расположен на склоне холма и представляет собой компактный исторический центр с плотной застройкой фахверковых домов. Узкие, извилистые улочки формируют характерный облик, который сохранил планировку и застройку XVII-XIX веков." },
                        { text: "Главной архитектурной доминантой является старая церковь (Alte Kirche Langenberg) – исторический центр района, вокруг которой формировалось поселение. Благодаря перепадам высот и сохранённой планировке район выглядит особенно живописно и напоминает небольшой старинный город." },
                        { text: "Сегодня Лангенберг считается одним из самых атмосферных старых городов в южной части Рура и популярен для прогулок и фототуризма." },
                        { bold: "История", text: "Поселение Лангенберг сформировалось в средние века как торгово-ремесленный центр на пересечении региональных путей. Первые упоминания относятся к XIII веку, когда здесь уже существовала церковная община." },
                        { text: "В течение последующих столетий город развивался как самостоятельный ремесленный центр, сохраняя компактную структуру. Основное строительство, сформировавшее современный облик старого города, относится к XVII-XIX векам." },
                        { text: "Несмотря на индустриализацию региона Рура, Лангенберг избежал масштабной перестройки, благодаря чему историческая структура центра сохранилась почти полностью." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Лангенберг часто называют “городом на склоне” из-за перепадов высот " },
                        { text: "Многие дома сохранили оригинальные фахверковые конструкции " },
                        { text: "Центр визуально почти не менялся более 100 лет " },
                        { text: "Застройка сочетает фахверк и сланцевые фасады – характерную особенность региона Bergisches Land" },
                        { text: "Несмотря на “старинный” вид, это живой жилой район " }
                    ]
                },
                construction_period: "XIII век (первые упоминания поселения и церковной общины)",
                meta: {
                    title: "Старый город Лангенберг – исторический старый город в Германии",
                    description: "Старый город Лангенберг – исторический центр Velbert-Langenberg с фахверковыми домами, узкими улочками и церковью, основанной в XIII веке. Один из самых аутентичных старых городов региона Северный Рейн-Вестфалия.",
                    ogTitle: "Старый город Лангенберг – исторический старый город Германии",
                    ogDescription: "Фахверковые дома, узкие улочки и атмосфера настоящего старого немецкого города в Velbert-Langenberg.",
                    keywords: "Velbert Langenberg, Altstadt, старый город Германия, фахверк, NRW, исторический центр, Alte Kirche Langenberg, Ruhrgebiet, historic town Germany, Лангенберг, достопримечательность",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/006.jpg"
                }
            },
            ua: {
                name: "Старе місто Лангенберг",
                location: "Фельберт-Лангенберг, Німеччина",
                short_description: "Старе місто Лангенберг – один із найкраще збережених історичних центрів регіону, відомий фахверковою архітектурою, вузькими вуличками та атмосферою старовинного торговельно-ремісничого міста.",
                short_description_subObjects: {
                    text: "У старому місті Лангенберга розташовані такі пам’ятки:",
                    items: [
                        { bold: "Стара церква Лангенберг", text: "– історична євангелічна церква XVIII століття в районі Лангенберг міста Фельберт, що поєднує елементи барокової архітектури та збережені частини середньовічного храму." },
                    ]
                },
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Старе місто Лангенберг (Velbert-Langenberg Altstadt)", text: "розташоване на схилі пагорба та являє собою компактний історичний центр із щільною забудовою фахверкових будинків. Вузькі, звивисті вулички формують характерний вигляд, який зберіг планування та забудову XVII–XIX століть." },
                        { text: "Головною архітектурною домінантою є стара церква (Alte Kirche Langenberg) – історичний центр району, навколо якої формувалося поселення. Завдяки перепадам висот і збереженому плануванню район виглядає особливо мальовничо та нагадує невелике старовинне місто." },
                        { text: "Сьогодні Лангенберг вважається одним із найатмосферніших старих міст у південній частині Руру та популярний для прогулянок і фототуризму." },
                        { bold: "Історія", text: "Поселення Лангенберг сформувалося в середні віки як торговельно-ремісничий центр на перетині регіональних шляхів. Перші згадки відносяться до XIII століття, коли тут уже існувала церковна громада." },
                        { text: "Протягом наступних століть місто розвивалося як самостійний ремісничий центр, зберігаючи компактну структуру. Основна забудова, що сформувала сучасний вигляд старого міста, відноситься до XVII–XIX століть." },
                        { text: "Незважаючи на індустріалізацію регіону Руру, Лангенберг уникнув масштабної перебудови, завдяки чому історична структура центру збереглася майже повністю." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Лангенберг часто називають “містом на схилі” через перепади висот" },
                        { text: "Багато будинків зберегли оригінальні фахверкові конструкції" },
                        { text: "Центр візуально майже не змінювався понад 100 років" },
                        { text: "Забудова поєднує фахверк і сланцеві фасади – характерну особливість регіону Bergisches Land" },
                        { text: "Незважаючи на “старовинний” вигляд, це живий житловий район" }
                    ]
                },
                construction_period: "XIII століття (перші згадки про поселення та церковну громаду)",
                meta: {
                    title: "Старе місто Лангенберг – історичне старе місто в Німеччині",
                    description: "Старе місто Лангенберг – історичний центр Velbert-Langenberg із фахверковими будинками, вузькими вуличками та церквою, заснованою у XIII столітті. Один із найавтентичніших старих центрів регіону Північний Рейн-Вестфалія.",
                    ogTitle: "Старе місто Лангенберг – історичне старе місто Німеччини",
                    ogDescription: "Фахверкові будинки, вузькі вулички та атмосфера справжнього старого німецького міста у Velbert-Langenberg.",
                    keywords: "Velbert Langenberg, Altstadt, старе місто Німеччина, фахверк, NRW, історичний центр, Alte Kirche Langenberg, Ruhrgebiet, historic town Germany, Лангенберг, пам’ятка",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/006.jpg"
                }
            },
            de: {
                name: "Altstadt Langenberg",
                location: "Velbert-Langenberg, Deutschland",
                short_description: "Die Altstadt Langenberg gehört zu den am besten erhaltenen historischen Zentren der Region und ist bekannt für ihre Fachwerkarchitektur, engen Gassen und die Atmosphäre einer historischen Handels- und Handwerkerstadt.",
                short_description_subObjects: {
                    text: "In der Altstadt von Langenberg befinden sich folgende Sehenswürdigkeiten:",
                    items: [
                        { bold: "Alte Kirche Langenberg", text: "– historische evangelische Kirche aus dem 18. Jahrhundert im Stadtteil Langenberg der Stadt Velbert, die Elemente der barocken Architektur mit erhaltenen Teilen einer mittelalterlichen Kirche verbindet." },
                    ]
                },
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Altstadt Langenberg (Velbert-Langenberg Altstadt)", text: "liegt an einem Hang und stellt ein kompaktes historisches Zentrum mit dichter Fachwerkbebauung dar. Die engen, verwinkelten Gassen prägen das charakteristische Stadtbild, das die Struktur und Bebauung des 17.–19. Jahrhunderts bewahrt hat." },
                        { text: "Die wichtigste architektonische Dominante ist die alte Kirche (Alte Kirche Langenberg) – das historische Zentrum des Stadtteils, um die sich die Siedlung entwickelte. Durch die Höhenunterschiede und die erhaltene Struktur wirkt das Viertel besonders malerisch und erinnert an eine kleine historische Stadt." },
                        { text: "Heute gilt Langenberg als eine der atmosphärischsten Altstädte im südlichen Ruhrgebiet und ist ein beliebtes Ziel für Spaziergänge und Fototourismus." },
                        { bold: "Geschichte", text: "Die Siedlung Langenberg entstand im Mittelalter als Handels- und Handwerkszentrum an der Kreuzung regionaler Wege. Die ersten Erwähnungen stammen aus dem 13. Jahrhundert, als hier bereits eine kirchliche Gemeinschaft existierte." },
                        { text: "In den folgenden Jahrhunderten entwickelte sich die Stadt als eigenständiges Handwerkszentrum und bewahrte ihre kompakte Struktur. Die Bebauung, die das heutige Erscheinungsbild prägt, stammt überwiegend aus dem 17.–19. Jahrhundert." },
                        { text: "Trotz der Industrialisierung des Ruhrgebiets blieb Langenberg von großflächigen Umgestaltungen verschont, sodass die historische Struktur des Zentrums weitgehend erhalten blieb." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Langenberg wird aufgrund der Höhenunterschiede oft als „Stadt am Hang“ bezeichnet" },
                        { text: "Viele Häuser haben ihre ursprünglichen Fachwerkkonstruktionen bewahrt" },
                        { text: "Das Zentrum hat sich optisch seit über 100 Jahren kaum verändert" },
                        { text: "Die Bebauung kombiniert Fachwerk und Schieferfassaden – ein typisches Merkmal des Bergischen Landes" },
                        { text: "Trotz seines historischen Erscheinungsbildes ist es ein lebendiges Wohnviertel" }
                    ]
                },
                construction_period: "13. Jahrhundert (erste Erwähnungen der Siedlung und der kirchlichen Gemeinschaft)",
                meta: {
                    title: "Altstadt Langenberg – historisches Stadtzentrum in Deutschland",
                    description: "Die Altstadt Langenberg ist das historische Zentrum von Velbert-Langenberg mit Fachwerkhäusern, engen Gassen und einer im 13. Jahrhundert gegründeten Kirche. Eine der authentischsten Altstädte in Nordrhein-Westfalen.",
                    ogTitle: "Altstadt Langenberg – historisches Stadtzentrum Deutschlands",
                    ogDescription: "Fachwerkhäuser, enge Gassen und die Atmosphäre einer echten historischen deutschen Stadt in Velbert-Langenberg.",
                    keywords: "Velbert Langenberg, Altstadt, historische Stadt Deutschland, Fachwerk, NRW, historisches Zentrum, Alte Kirche Langenberg, Ruhrgebiet, historic town Germany, Langenberg, Sehenswürdigkeit",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/006.jpg"
                }
            }
        }
    },
    {
        id: "langenberg_alte_kirche_velbert",
        type: ["cathedral"], rating: "local",
        path: "langenberg_alte_kirche_velbert",
        countryPath: "germany", regionPath: "nrw", districtPath: "dusseldorf", cityPath: "velbert",
        hiddenFromList: true, showMore: true,
        fotoCard: "Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/alte_kirche/001.jpg",
        coord: { lat: 51.35185840568045, lng: 7.1216848369537304 },
        translations: {
            ru: {
                name: "Старая церковь Лангеберг",
                location: "Фельберт-Лангенберг, Германия",
                officialSite: [
                    { bold: "Официальный сайт", link: "https://ekgla.de/?utm_source=chatgpt.com" }
                ],
                short_description: "Старая церковь Лангеберг – историческая евангелическая церковь в районе Лангенберг города Фельберт, построенная в 1725-1726 годах. Она частично включает элементы более ранней готической постройки и является важным архитектурным акцентом старого города. Сегодня церковь остаётся действующим храмом и значимым памятником региональной истории.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Старая церковь Лангеберг (Alte Kirche Langenberg)", text: " – историческая евангелическая церковь в районе Лангенберг города Фельберт. Она расположена в центре старого города и формирует одну из ключевых архитектурных доминант района." },
                        { text: "Здание выполнено в стиле бергского барокко и представляет собой зальную церковь с лаконичным интерьером, характерным для протестантской традиции. Центральным художественным элементом является богато оформленная деревянная кафедра, которая играет важную роль в пространственной композиции интерьера." },
                        { bold: "История", text: "церкви начинается со средневекового периода: на этом месте существовала более ранняя приходская церковь, связанная с общиной, известной с XIII–XIV веков. Часть готического хора той постройки сохранилась и была включена в современное здание." },
                        { text: "Современная церковь была построена в 1725-1726 годах по проекту архитектора Иоганна Михаэля Мозера. Новое здание заменило старую постройку из-за её ветхого состояния и роста прихода. Первое богослужение в новой церкви состоялось 22 декабря 1726 года." },
                        { text: "В XVIII-XIX веках церковь была дополнена ключевыми элементами: в 1731 году была создана кафедра мастером Арнольдом Вильгельмом Бекманном, в 1751 году завершено строительство башни с характерной крышей, а в 1839 году установлен орган." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "Hauptstraße 64 42555 Velbert Германия" },
                        { bold: "Конфессия:", text: "Протестантская – Евангелическая" }
                    ]
                },
                relics: {
                    title: "Реликвии и ценности",
                    items: [
                        { text: "Резная кафедра (1731) – ключевой художественный объект" },
                        { text: "Орган с барочным фасадом (1839, обновлён в 1983) " },
                        { text: "Сохранившиеся элементы готического хора " }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Часть стен церкви – это оригинальная кладка средневековой капеллы (~1300 г.) " },
                        { text: "Кафедра считается настолько выразительной, что её называют «проповедью в дереве» " },
                        { text: "Церковь отражает переход региона к протестантизму (с конца XVI века) " },
                        { text: "Расположена в центре одного из лучше всего сохранившихся исторических городских ядер NRW " }
                    ]
                },
                construction_period: "Средневековая предшествующая церковь: до XIV века. Современное здание: 1725-1726",
                architects: "Иоганн Михаэль Мозера (Johann Michael Moser)",
                founder: "Евангелическая община Лангенберга. Поддержка: местные власти и пожертвования, включая короля Пруссии Фридриха Вильгельма I",
                meta: {
                    title: "Старая церковь Лангеберг (Alte Kirche Langenberg Velbert) – история, описание, фото",
                    description: "Старая церковь Лангеберг – историческая протестантская церковь в районе Лангенберг. Узнайте историю, архитектуру и интересные факты.",
                    ogTitle: "Старая церковь Лангеберг (Alte Kirche Langenberg) – историческая церковь в Фельберт",
                    ogDescription: "Старинная церковь в Лангенберге (Фельберт), важная достопримечательность региона с богатой историей и атмосферной архитектурой.",
                    keywords: "достопримечательности, евангелическая, протестантская церковь Лангенберг, старый город Фельберт, Северный Рейн Вестфалия церкви Германия, история, старинная церковь Лангенберг, архитектура барокко Германия церкви, что посмотреть в Фельберт, интересные места Северный Рейн Вестфалия, путешествие по Германии церкви, церковь в районе Лангенберг Фельберт",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/alte_kirche/001.jpg"
                }
            },
            ua: {
                name: "Стара церква Лангенберг",
                location: "Фельберт-Лангенберг, Німеччина",
                officialSite: [
                    { bold: "Офіційний сайт", link: "https://ekgla.de/?utm_source=chatgpt.com" }
                ],
                short_description: "Стара церква Лангенберг – історична євангелічна церква в районі Лангенберг міста Фельберт, побудована у 1725–1726 роках. Вона частково включає елементи більш ранньої готичної споруди і є важливим архітектурним акцентом старого міста. Сьогодні церква залишається діючим храмом і значною пам’яткою регіональної історії.",
                full_description: {
                    title: "Опис і історія",
                    items: [
                        { bold: "Стара церква Лангенберг (Alte Kirche Langenberg)", text: " – історична євангелічна церква в районі Лангенберг міста Фельберт. Вона розташована в центрі старого міста і формує одну з ключових архітектурних домінант району." },
                        { text: "Будівля виконана в стилі берзького бароко і являє собою зальну церкву з лаконічним інтер’єром, характерним для протестантської традиції. Центральним художнім елементом є багато оздоблена дерев’яна кафедра, яка відіграє важливу роль у просторовій композиції інтер’єру." },
                        { bold: "Історія", text: "церкви починається із середньовічного періоду: на цьому місці існувала більш рання парафіяльна церква, пов’язана з громадою, відомою щонайменше з XIII–XIV століть. Частина готичного хору тієї споруди збереглася і була включена до сучасної будівлі." },
                        { text: "Сучасна церква була збудована у 1725–1726 роках за проєктом архітектора Йоганна Міхаеля Мозера. Нова будівля замінила стару через її аварійний стан і зростання парафії. Перше богослужіння в новій церкві відбулося 22 грудня 1726 року." },
                        { text: "У XVIII–XIX століттях церква була доповнена ключовими елементами: у 1731 році була створена кафедра майстром Арнольдом Вільгельмом Бекманном, у 1751 році завершено будівництво вежі з характерним дахом, а у 1839 році встановлено орган." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "Hauptstraße 64 42555 Velbert Німеччина" },
                        { bold: "Конфесія:", text: "Протестантська – Євангелічна" }
                    ]
                },
                relics: {
                    title: "Реліквії та цінності",
                    items: [
                        { text: "Різьблена кафедра (1731) – ключовий художній об’єкт" },
                        { text: "Орган з бароковим фасадом (1839, оновлений у 1983)" },
                        { text: "Збережені елементи готичного хору" }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Частина стін церкви – це оригінальна кладка середньовічної каплиці (~1300 р.)" },
                        { text: "Кафедру настільки виразну, що її називають «проповіддю в дереві»" },
                        { text: "Церква відображає перехід регіону до протестантизму (з кінця XVI століття)" },
                        { text: "Розташована в центрі одного з найкраще збережених історичних міських ядер NRW" }
                    ]
                },
                construction_period: "Середньовічна попередня церква: до XIV століття. Сучасна будівля: 1725–1726",
                architects: "Йоганн Міхаель Мозер (Johann Michael Moser)",
                founder: "Євангелічна громада Лангенберга. Підтримка: місцева влада та пожертви, включаючи короля Пруссії Фрідріха Вільгельма I",
                meta: {
                    title: "Стара церква Лангенберг (Alte Kirche Langenberg Velbert) – історія, опис, фото",
                    description: "Стара церква Лангенберг – історична протестантська церква в районі Лангенберг. Дізнайтеся історію, архітектуру та цікаві факти.",
                    ogTitle: "Стара церква Лангенберг (Alte Kirche Langenberg) – історична церква у Фельберт",
                    ogDescription: "Старовинна церква в Лангенберзі (Фельберт), важлива пам’ятка регіону з багатою історією та атмосферною архітектурою.",
                    keywords: "пам'ятки, євангелічна, протестантська церква Лангенберг, старе місто Фельберт, Північний Рейн Вестфалія церкви Німеччина, історія, старовинна церква Лангенберг, архітектура бароко Німеччина церкви, що подивитися у Фельберт, цікаві місця Північний Рейн Вестфалія, подорож Німеччиною церкви, церква в районі Лангенберг Фельберт",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/alte_kirche/001.jpg"
                }
            },
            de: {
                name: "Alte Kirche Langenberg",
                location: "Velbert-Langenberg, Deutschland",
                officialSite: [
                    { bold: "Offizielle Website", link: "https://ekgla.de/?utm_source=chatgpt.com" }
                ],
                short_description: "Die Alte Kirche Langenberg ist eine historische evangelische Kirche im Stadtteil Langenberg der Stadt Velbert, die 1725–1726 erbaut wurde. Sie enthält teilweise Elemente eines früheren gotischen Bauwerks und ist ein bedeutender architektonischer Akzent der Altstadt. Heute ist die Kirche weiterhin ein aktives Gotteshaus und ein wichtiges Denkmal der regionalen Geschichte.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Alte Kirche Langenberg", text: " – historische evangelische Kirche im Stadtteil Langenberg der Stadt Velbert. Sie liegt im Zentrum der Altstadt und bildet eine der wichtigsten architektonischen Dominanten des Viertels." },
                        { text: "Das Gebäude ist im bergischen Barockstil errichtet und представляет eine Saalkirche mit einem schlichten, für die protestantische Tradition typischen Innenraum. Das zentrale künstlerische Element ist die reich verzierte hölzerne Kanzel, die eine wichtige Rolle in der Raumkomposition spielt." },
                        { bold: "Geschichte", text: "der Kirche beginnt im Mittelalter: An dieser Stelle befand sich eine frühere Pfarrkirche, die einer Gemeinde zugeordnet war, die mindestens seit dem 13.–14. Jahrhundert bekannt ist. Teile des gotischen Chors dieses Bauwerks sind erhalten geblieben und in das heutige Gebäude integriert worden." },
                        { text: "Die heutige Kirche wurde 1725–1726 nach Plänen des Architekten Johann Michael Moser errichtet. Der Neubau ersetzte das alte Gebäude aufgrund seines schlechten Zustands und des wachsenden Gemeindebedarfs. Der erste Gottesdienst fand am 22. Dezember 1726 statt." },
                        { text: "Im 18.–19. Jahrhundert wurde die Kirche erweitert: 1731 entstand die Kanzel durch den Meister Arnold Wilhelm Beckmann, 1751 wurde der Turm mit seiner charakteristischen Haube vollendet und 1839 die Orgel installiert." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "Hauptstraße 64 42555 Velbert Deutschland" },
                        { bold: "Konfession:", text: "Evangelisch – Protestantisch" }
                    ]
                },
                relics: {
                    title: "Relikte und Werte",
                    items: [
                        { text: "Schnitzkanzel (1731) – zentrales Kunstobjekt" },
                        { text: "Orgel mit barockem Prospekt (1839, 1983 restauriert)" },
                        { text: "Erhaltene Teile des gotischen Chors" }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Teile der Mauern stammen aus einer mittelalterlichen Kapelle (~1300)" },
                        { text: "Die Kanzel wird oft als „Predigt aus Holz“ bezeichnet" },
                        { text: "Die Kirche spiegelt den Übergang der Region zum Protestantismus wider (seit dem späten 16. Jahrhundert)" },
                        { text: "Sie liegt im Zentrum eines der am besten erhaltenen historischen Stadtkerne in NRW" }
                    ]
                },
                construction_period: "Mittelalterliche Vorgängerkirche: bis 14. Jahrhundert. Heutiger Bau: 1725–1726",
                architects: "Johann Michael Moser",
                founder: "Evangelische Gemeinde Langenberg. Unterstützung durch lokale Behörden und Spenden, einschließlich König Friedrich Wilhelm I. von Preußen",
                meta: {
                    title: "Alte Kirche Langenberg (Velbert) – Geschichte, Beschreibung, Fotos",
                    description: "Die Alte Kirche Langenberg ist eine historische evangelische Kirche im Stadtteil Langenberg. Erfahren Sie mehr über Geschichte, Architektur und Fakten.",
                    ogTitle: "Alte Kirche Langenberg – historische Kirche in Velbert",
                    ogDescription: "Historische Kirche in Langenberg (Velbert), ein bedeutendes Denkmal der Region mit reicher Geschichte und Atmosphäre.",
                    keywords: "Sehenswürdigkeiten, evangelische Kirche Langenberg, Altstadt Velbert, Kirchen Nordrhein-Westfalen, Geschichte, barocke Kirche Deutschland, historische Kirche Langenberg, Architektur Barock Deutschland, Langenberg Kirche, Velbert Sehenswürdigkeiten, Bergisches Land Kirchen, Kirche 18. Jahrhundert Deutschland",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/langenberg_altstadt/alte_kirche/001.jpg"
                }
            }
        }
    },
    {
        id: "langenberg_burgerhaus_velbert",
        type: ["historical_building"], rating: "local",
        path: "langenberg_burgerhaus_velbert",
        countryPath: "germany", regionPath: "nrw", districtPath: "dusseldorf", cityPath: "velbert",
        fotoCard: "Germany/nrw/dusseldorf/mettmann/velbert/burgerhaus/001.jpg",
        coord: { lat: 51.351134259738515, lng: 7.119479252760554 },
        translations: {
            ru: {
                name: "Исторический общественный дом Лангенберга ",
                location: "Фельберт-Лангенберг, Германия",
                short_description: "Исторический общественный дом Лангенберга – монументальное историческое здание в районе Лангеберг города Фельберт. Оно было построено как общественный дар для жителей и сегодня используется как культурный центр для концертов, мероприятий и общественных встреч.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Исторический общественный дом Лангенберга (Historisches Bürgerhaus Langenberg)", text: "было задумано как многофункциональное здание для культуры, образования и общественной жизни. Оно расположено в исторической части Лангенберга и является одной из ключевых архитектурных доминант района." },
                        { text: "Здание было построено в монументальном стиле с элементами позднего историзма и региональной архитектуры. Благодаря сложному рельефу участка архитекторы создали многоуровневую структуру, которая органично вписалась в склон холма." },
                        { text: "Сегодня общественный дом Лангенберга активно используется для концертов, театральных постановок, выставок и общественных мероприятий. Оно остаётся важным центром культурной жизни района и одной из самых узнаваемых исторических построек Лангенберга." },
                        { bold: "История", text: "История здания начинается в начале XX века, когда в Лангенберге усилилась роль промышленности и выросло благосостояние местных предпринимателей. В 1913 году супруги Адальберт и Софи Колсман (урождённая Фельдхофф), представители семьи местных фабрикантов, профинансировали строительство здания и передали средства городу с условием создания общественного дома для жителей." },
                        { text: "Проект был разработан архитектором Арно Эугeном Фриче (Arno Fritsche). Строительство началось в 1913 году и завершилось в 1916 году, несмотря на задержки, связанные с Первой мировой войной." },
                        { text: "Во время Второй мировой войны здание использовалось временно как лазарет и было частично повреждено. После войны оно было восстановлено и продолжило функционировать как общественное пространство. В 1982 году объект получил статус памятника архитектуры." },
                        { text: "С 2006 по 2016 год общественный дом Лангенберга находился на масштабной реставрации, после чего было вновь открыто для публики." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "Hauptstraße 64, Langenberg, Velbert" },
                        { bold: "Вход:", text: "зависит от события. Посещение доступно во время мероприятий." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Здание было подарено городу как акт благотворительности семьи Колсман" },
                        { text: "С момента основания задумывалось как центр культуры, спорта и образования" },
                        { text: "Во время войны использовалось как госпиталь" },
                        { text: "Реставрация 2006–2016 годов длилась около 10 лет" },
                        { text: "Сегодня здесь проходят концерты с использованием исторического зала и восстановленной архитектуры" },
                        { text: "Архитектура сочетает монументальный стиль и региональные элементы Рейнской области" }
                    ]
                },
                construction_period: "1913-1916 (строительство) ",
                architects: "Арно Фриче (Arno Fritsche)",
                founder: "супруги Адальберт и Софи Колсман (урождённая Фельдхофф)",
                meta: {
                    title: "Исторический общественный дом Лангенберга (Historisches Bürgerhaus Langenberg in Velbert) ",
                    description: "Исторический общественный дом Лангенберга в Фельберте: построен в 1913–1916 годах, культурный центр с мероприятиями, историей и архитектурным наследием.",
                    ogTitle: "Исторический общественный дом Лангенберга – Фельберт",
                    ogDescription: "Исторический общественный дом Лангенберга: основан как благотворительный проект семьи Колсман, сегодня культурный центр в сердце Фельберта.",
                    keywords: "Исторический общественный дом Лангенберга, Фельберт, история Лангенберга, Арно Фритше, фонд Колсман, культурный центр Велберт, исторические здания NRW, Bürgerhaus Лангенберг, достопримечательность",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/burgerhaus/001.jpg"
                }
            },
            ua: {
                name: "Історичний громадський будинок Лангенберга",
                location: "Фельберт-Лангенберг, Німеччина",
                short_description: "Історичний громадський будинок Лангенберга – монументальна історична будівля в районі Лангенберг міста Фельберт. Вона була побудована як громадський дар для мешканців і сьогодні використовується як культурний центр для концертів, заходів і громадських зустрічей.",
                full_description: {
                    title: "Опис і історія",
                    items: [
                        { bold: "Історичний громадський будинок Лангенберга (Historisches Bürgerhaus Langenberg)", text: "був задуманий як багатофункціональна будівля для культури, освіти та громадського життя. Він розташований в історичній частині Лангенберга і є однією з ключових архітектурних домінант району." },
                        { text: "Будівля була зведена в монументальному стилі з елементами пізнього історизму та регіональної архітектури. Завдяки складному рельєфу ділянки архітектори створили багаторівневу структуру, яка органічно вписалася у схил пагорба." },
                        { text: "Сьогодні громадський будинок Лангенберга активно використовується для концертів, театральних постановок, виставок і громадських заходів. Він залишається важливим центром культурного життя району і однією з найвпізнаваніших історичних будівель Лангенберга." },
                        { bold: "Історія", text: "Історія будівлі починається на початку XX століття, коли в Лангенберзі посилилася роль промисловості та зросло добробут місцевих підприємців. У 1913 році подружжя Адальберт і Софі Колсман (уроджена Фельдхофф), представники родини місцевих фабрикантів, профінансували будівництво будівлі та передали кошти місту з умовою створення громадського будинку для мешканців." },
                        { text: "Проєкт був розроблений архітектором Арно Еугеном Фріче (Arno Fritsche). Будівництво розпочалося у 1913 році та завершилося у 1916 році, попри затримки, пов’язані з Першою світовою війною." },
                        { text: "Під час Другої світової війни будівля тимчасово використовувалася як лазарет і була частково пошкоджена. Після війни її відновили, і вона продовжила функціонувати як громадський простір. У 1982 році об’єкт отримав статус пам’ятки архітектури." },
                        { text: "З 2006 по 2016 рік громадський будинок Лангенберга перебував на масштабній реставрації, після чого був знову відкритий для відвідувачів." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "Hauptstraße 64, Langenberg, Velbert" },
                        { bold: "Вхід:", text: "залежить від події. Відвідування доступне під час заходів." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Будівлю було подаровано місту як акт благодійності родини Колсман" },
                        { text: "З моменту заснування вона задумувалася як центр культури, спорту та освіти" },
                        { text: "Під час війни використовувалася як госпіталь" },
                        { text: "Реставрація 2006–2016 років тривала близько 10 років" },
                        { text: "Сьогодні тут проходять концерти з використанням історичної зали та відновленої архітектури" },
                        { text: "Архітектура поєднує монументальний стиль і регіональні елементи Рейнської області" }
                    ]
                },
                construction_period: "1913-1916 (будівництво)",
                architects: "Арно Фріче (Arno Fritsche)",
                founder: "подружжя Адальберт і Софі Колсман (уроджена Фельдхофф)",
                meta: {
                    title: "Історичний громадський будинок Лангенберга (Historisches Bürgerhaus Langenberg in Velbert)",
                    description: "Історичний громадський будинок Лангенберга у Фельберті: побудований у 1913–1916 роках, культурний центр з подіями, історією та архітектурною спадщиною.",
                    ogTitle: "Історичний громадський будинок Лангенберга – Фельберт",
                    ogDescription: "Історичний громадський будинок Лангенберга: заснований як благодійний проєкт родини Колсман, сьогодні культурний центр у серці Фельберта.",
                    keywords: "Історичний громадський будинок Лангенберга, Фельберт, історія Лангенберга, Арно Фріче, фонд Колсман, культурний центр Велберт, історичні будівлі NRW, Bürgerhaus Лангенберг, визначна пам’ятка",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/burgerhaus/001.jpg"
                }
            },
            de: {
                name: "Historisches Bürgerhaus Langenberg",
                location: "Velbert-Langenberg, Deutschland",
                short_description: "Das Historische Bürgerhaus Langenberg ist ein monumentales historisches Gebäude im Stadtteil Langenberg der Stadt Velbert. Es wurde als Geschenk für die Bürger errichtet und wird heute als Kulturzentrum für Konzerte, Veranstaltungen und gesellschaftliche Treffen genutzt.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Historisches Bürgerhaus Langenberg", text: "wurde als multifunktionales Gebäude für Kultur, Bildung und das gesellschaftliche Leben konzipiert. Es befindet sich im historischen Teil von Langenberg und gehört zu den wichtigsten architektonischen Dominanten des Stadtteils." },
                        { text: "Das Gebäude wurde im monumentalen Stil mit Elementen des späten Historismus und der regionalen Architektur errichtet. Aufgrund der schwierigen Hanglage entwickelten die Architekten eine mehrstufige Struktur, die sich harmonisch in den Hang einfügt." },
                        { text: "Heute wird das Bürgerhaus Langenberg aktiv für Konzerte, Theateraufführungen, Ausstellungen und gesellschaftliche Veranstaltungen genutzt. Es bleibt ein wichtiger Mittelpunkt des kulturellen Lebens und eines der bekanntesten historischen Gebäude in Langenberg." },
                        { bold: "Geschichte", text: "Die Geschichte des Gebäudes beginnt zu Beginn des 20. Jahrhunderts, als in Langenberg die Industrie an Bedeutung gewann und der Wohlstand der lokalen Unternehmer wuchs. Im Jahr 1913 finanzierten die Eheleute Adalbert und Sophie Colsman (geb. Feldhoff), Mitglieder einer lokalen Fabrikantenfamilie, den Bau des Gebäudes und stellten der Stadt Mittel mit der Auflage zur Verfügung, ein Bürgerhaus für die Bevölkerung zu errichten." },
                        { text: "Der Entwurf wurde vom Architekten Arno Eugen Fritsche (Arno Fritsche) erstellt. Der Bau begann 1913 und wurde 1916 trotz Verzögerungen durch den Ersten Weltkrieg abgeschlossen." },
                        { text: "Während des Zweiten Weltkriegs wurde das Gebäude zeitweise als Lazarett genutzt und teilweise beschädigt. Nach dem Krieg wurde es wiederhergestellt und weiterhin als öffentlicher Raum genutzt. Im Jahr 1982 erhielt das Gebäude den Status eines Denkmals." },
                        { text: "Von 2006 bis 2016 wurde das Bürgerhaus Langenberg umfassend restauriert und anschließend wieder für die Öffentlichkeit geöffnet." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "Hauptstraße 64, Langenberg, Velbert" },
                        { bold: "Eintritt:", text: "abhängig von der Veranstaltung. Besuch während der Events möglich." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Das Gebäude wurde der Stadt als Wohltätigkeit der Familie Colsman geschenkt" },
                        { text: "Seit seiner Gründung war es als Zentrum für Kultur, Sport und Bildung geplant" },
                        { text: "Während des Krieges wurde es als Lazarett genutzt" },
                        { text: "Die Restaurierung von 2006 bis 2016 dauerte etwa 10 Jahre" },
                        { text: "Heute finden hier Konzerte im historischen Saal mit restaurierter Architektur statt" },
                        { text: "Die Architektur verbindet monumentalen Stil mit regionalen Elementen des Rheinlands" }
                    ]
                },
                construction_period: "1913-1916 (Bau)",
                architects: "Arno Fritsche (Arno Eugen Fritsche)",
                founder: "Ehepaar Adalbert und Sophie Colsman (geb. Feldhoff)",
                meta: {
                    title: "Historisches Bürgerhaus Langenberg (Velbert)",
                    description: "Historisches Bürgerhaus Langenberg in Velbert: erbaut 1913–1916, Kulturzentrum mit Veranstaltungen, Geschichte und historischer Architektur.",
                    ogTitle: "Historisches Bürgerhaus Langenberg – Velbert",
                    ogDescription: "Historisches Bürgerhaus Langenberg: als wohltätiges Projekt der Familie Colsman gegründet, heute Kulturzentrum im Herzen von Velbert.",
                    keywords: "Historisches Bürgerhaus Langenberg, Velbert, Langenberg Geschichte, Arno Fritsche, Colsman Stiftung, Kulturzentrum Velbert, historische Gebäude NRW, Bürgerhaus Langenberg, Sehenswürdigkeit",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dusseldorf/mettmann/velbert/burgerhaus/001.jpg"
                }
            }
        }
    },

    // округ Köln 
    // koln-city
    {
        id: "fischmarkt_koln",
        type: ["square"], rating: "top",
        path: "fischmarkt_koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
        hiddenFromList: true, showMore: true,
        fotoCard: "Germany/nrw/koln/koln-city/altstadt/fischmarkt/001.jpg",
        coord: { lat: 50.93845, lng: 6.96260 },
        translations: {
            ru: {
                name: "Фишмаркт",
                location: "Кёльн, Германия",
                short_description: "Фишмаркт – историческая площадь Старого города Кёльна с яркими разноцветными домами и атмосферой средневекового рынка. Популярное место для прогулок, фотосессий, кафе и ярмарок, рядом с Кёльнским собором.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Фишмаркт (Fischmarkt)", text: "– это оживлённая площадь в Старом городе Кельна, известная своими яркими разноцветными домами, которые делают её одной из самых фотогеничных точек города. Здесь исторически располагались рыбные рынки, и до сих пор площадь сохраняет атмосферу средневекового торгового центра. Фишмаркт часто посещают туристы и местные жители, особенно в тёплое время года, когда на площади проходят ярмарки и фестивали." },
                        { text: "Площадь окружена узкими улочками Старого города, где можно найти кафе, рестораны и сувенирные магазины. Благодаря живописной архитектуре и историческому окружению, Фишмаркт является популярным местом для фотосессий и прогулок." },
                        { text: "Это место также удобно как точка старта для пешеходных экскурсий по Старому городу и к знаменитому Кёльнскому собору – всего в нескольких минутах ходьбы." },
                        { bold: "История", text: "Фишмаркт возник в Средние века как центр торговли рыбой в Кёльне. С XVI века площадь играла важную роль в снабжении города свежими морепродуктами, привозимыми по реке Рейн. Архитектура домов вокруг площади отражает готические и ренессансные элементы, сохранившиеся до наших дней." },
                        { text: "В XIX веке, с развитием торговли и городской инфраструктуры, Фишмаркт превратился в одно из оживлённых общественных пространств города. После Второй мировой войны площадь была восстановлена, и исторический облик зданий тщательно сохранён." },
                        { text: "Сегодня Фишмаркт служит местом культурных мероприятий и рынков, продолжая традицию средневекового рыночного центра, но теперь с туристической и развлекательной функцией." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "Fischmarkt, 50667 Köln, Германия " },
                        { bold: "Доступность:", text: "пешеходная зона, легко доступна для туристов " },
                        { bold: "Ближайшая станция метро:", text: "Heumarkt (U-Bahn)" },
                        { bold: "Часы работы:", text: "открытая площадь, круглосуточно; рынки и ярмарки по расписанию" }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Фишмаркт часто называют «самой фотогеничной площадью Кёльна» из-за ярких фасадов домов. " },
                        { text: "Раньше здесь проводились настоящие рыбные аукционы. " },
                        { text: "На площади регулярно проходят праздничные ярмарки, в том числе рождественская. " }
                    ]
                },
                construction_period: "XIII–XIV век, Средние века",
                meta: {
                    title: "Фишмаркт Кельн – историческая площадь и фотогеничные дома",
                    description: "Фишмаркт в Старом городе Кёльна – живописная площадь с разноцветными домами, историей средневекового рыбного рынка и популярное место для туристов.",
                    ogTitle: "Фишмаркт Кельн – сердце Старого города",
                    ogDescription: "Яркая площадь Старого города Кёльна с разноцветными домами, атмосферой средневекового рынка и фотогеничными видами для туристов.",
                    keywords: "достопримечательности, рынок, историческое место, Кёльн, музей, прогулка, архитектура, история города, туризм, интересные места",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/fischmarkt/001.jpg"
                }
            },
            ua: {
                name: "Фішмаркт",
                location: "Кельн, Німеччина",
                short_description: "Фішмаркт – історична площа Старого міста Кельна з яскравими різнокольоровими будинками та атмосферою середньовічного ринку. Популярне місце для прогулянок, фотосесій, кафе та ярмарків, поруч з Кельнським собором.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Фішмаркт (Fischmarkt)", text: "– це жвава площа в Старому місті Кельна, відома своїми яскравими різнокольоровими будинками, що роблять її однією з найбільш фотогенічних точок міста. Тут історично розташовувалися рибні ринки, і до сьогодні площа зберігає атмосферу середньовічного торгового центру. Фішмаркт часто відвідують туристи та місцеві жителі, особливо у теплу пору року, коли на площі проходять ярмарки та фестивалі." },
                        { text: "Площа оточена вузькими вуличками Старого міста, де можна знайти кафе, ресторани та сувенірні магазини. Завдяки мальовничій архітектурі та історичному оточенню, Фішмаркт є популярним місцем для фотосесій та прогулянок." },
                        { text: "Це місце також зручно як точка старту для пішохідних екскурсій по Старому місту та до знаменитого Кельнського собору – всього за кілька хвилин ходьби." },
                        { bold: "Історія", text: "Фішмаркт виник у Середні віки як центр торгівлі рибою в Кельні. З XVI століття площа відігравала важливу роль у забезпеченні міста свіжими морепродуктами, які привозилися річкою Рейн. Архітектура будинків навколо площі відображає готичні та ренесансні елементи, що збереглися до наших днів." },
                        { text: "У XIX столітті, з розвитком торгівлі та міської інфраструктури, Фішмаркт перетворився на одне з жвавих громадських просторів міста. Після Другої світової війни площа була відновлена, і історичний вигляд будівель ретельно збережено." },
                        { text: "Сьогодні Фішмаркт слугує місцем культурних заходів та ринків, продовжуючи традицію середньовічного ринкового центру, але тепер з туристичною та розважальною функцією." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "Fischmarkt, 50667 Köln, Німеччина" },
                        { bold: "Доступність:", text: "пішохідна зона, легко доступна для туристів" },
                        { bold: "Найближча станція метро:", text: "Heumarkt (U-Bahn)" },
                        { bold: "Часи роботи:", text: "відкрита площа, цілодобово; ринки та ярмарки за розкладом" }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Фішмаркт часто називають «найфотогенічнішою площею Кельна» через яскраві фасади будинків." },
                        { text: "Раніше тут проводилися справжні рибні аукціони." },
                        { text: "На площі регулярно проходять святкові ярмарки, зокрема різдвяні." }
                    ]
                },
                construction_period: "XIII–XIV століття, Середні віки",
                meta: {
                    title: "Фішмаркт Кельн – історична площа та фотогенічні будинки",
                    description: "Фішмаркт у Старому місті Кельна – мальовнича площа з різнокольоровими будинками, історією середньовічного рибного ринку та популярне місце для туристів.",
                    ogTitle: "Фішмаркт Кельн – серце Старого міста",
                    ogDescription: "Яскрава площа Старого міста Кельна з різнокольоровими будинками, атмосферою середньовічного ринку та фотогенічними видами для туристів.",
                    keywords: "пам'ятки, ринок, історичне місце, Кельн, музей, прогулянка, архітектура, історія міста, туризм, цікаві місця",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/fischmarkt/001.jpg"
                }
            },
            de: {
                name: "Fischmarkt",
                location: "Köln, Deutschland",
                short_description: "Der Fischmarkt ist ein historischer Platz in der Altstadt von Köln mit bunten Häusern und der Atmosphäre eines mittelalterlichen Marktes. Ein beliebter Ort für Spaziergänge, Fotos, Cafés und Märkte, in der Nähe des Kölner Doms.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Fischmarkt (Fischmarkt)", text: "– ist ein lebhafter Platz in der Altstadt von Köln, bekannt für seine bunten Häuser, die ihn zu einem der fotogensten Punkte der Stadt machen. Hier befanden sich historisch Fischmärkte, und bis heute bewahrt der Platz die Atmosphäre eines mittelalterlichen Handelszentrums. Der Fischmarkt wird häufig von Touristen und Einheimischen besucht, besonders in der warmen Jahreszeit, wenn auf dem Platz Märkte und Festivals stattfinden." },
                        { text: "Der Platz ist von engen Gassen der Altstadt umgeben, in denen man Cafés, Restaurants und Souvenirläden finden kann. Dank der malerischen Architektur und der historischen Umgebung ist der Fischmarkt ein beliebter Ort für Fotos und Spaziergänge." },
                        { text: "Dieser Ort eignet sich auch als Startpunkt für Spaziergänge durch die Altstadt und zum berühmten Kölner Dom – nur wenige Gehminuten entfernt." },
                        { bold: "Geschichte", text: "Der Fischmarkt entstand im Mittelalter als Zentrum des Fischhandels in Köln. Ab dem 16. Jahrhundert spielte der Platz eine wichtige Rolle bei der Versorgung der Stadt mit frischen Meeresfrüchten, die über den Rhein geliefert wurden. Die Architektur der Häuser rund um den Platz zeigt gotische und Renaissance-Elemente, die bis heute erhalten geblieben sind." },
                        { text: "Im 19. Jahrhundert, mit der Entwicklung von Handel und städtischer Infrastruktur, wurde der Fischmarkt zu einem der belebten öffentlichen Räume der Stadt. Nach dem Zweiten Weltkrieg wurde der Platz wiederhergestellt und das historische Erscheinungsbild der Gebäude sorgfältig bewahrt." },
                        { text: "Heute dient der Fischmarkt als Ort für kulturelle Veranstaltungen und Märkte und setzt die Tradition des mittelalterlichen Marktzentrums fort, nun jedoch mit touristischer und unterhaltender Funktion." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "Fischmarkt, 50667 Köln, Deutschland" },
                        { bold: "Zugang:", text: "Fußgängerzone, leicht für Touristen zugänglich" },
                        { bold: "Nächste U-Bahn-Station:", text: "Heumarkt (U-Bahn)" },
                        { bold: "Öffnungszeiten:", text: "offener Platz, rund um die Uhr; Märkte und Festivals nach Plan" }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Der Fischmarkt wird oft als der fotogenste Platz von Köln bezeichnet wegen seiner bunten Hausfassaden." },
                        { text: "Früher wurden hier echte Fischauktionen abgehalten." },
                        { text: "Auf dem Platz finden regelmäßig Festmärkte statt, einschließlich Weihnachtsmärkte." }
                    ]
                },
                construction_period: "13.–14. Jahrhundert, Mittelalter",
                meta: {
                    title: "Fischmarkt Köln – historischer Platz und fotogene Häuser",
                    description: "Der Fischmarkt in der Altstadt von Köln – ein malerischer Platz mit bunten Häusern, Geschichte des mittelalterlichen Fischmarktes und ein beliebter Ort für Touristen.",
                    ogTitle: "Fischmarkt Köln – das Herz der Altstadt",
                    ogDescription: "Ein lebhafter Platz in der Altstadt von Köln mit bunten Häusern, mittelalterlichem Marktflair und fotogenen Aussichten für Touristen.",
                    keywords: "Sehenswürdigkeiten, Markt, historischer Ort, Köln, Museum, Spaziergang, Architektur, Stadtgeschichte, Tourismus, interessante Orte",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/fischmarkt/001.jpg"
                }
            }
        }
    },
    {
        id: "st_gereon_koln",
        type: ["cathedral"], rating: "popular",
        path: "st_gereon_koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
        hiddenFromList: true, showMore: true,
        map: "romanische_kirchen_altstadt_koln",
        fotoCard: "Germany/nrw/koln/koln-city/altstadt/romanische_kirchen/st_gereon/001.jpg",
        coord: { lat: 50.94329, lng: 6.94571 },
        translations: {
            ru: {
                name: "Церковь Святого Гереона",
                location: "Кёльн, Германия",
                short_description: "Церковь Святого Гереона (St. Gereon) – одна из знаменитых романских церквей Кёльна, расположенная в Старом городе. Известна своей необычной круглой формой и богатым историческим наследием.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Церковь Святого Гереона", text: "– романская церковь с двенадцатигранным куполом и старинными витражами, расположенная в Старом городе Кёльна. Известна богатым историческим интерьером и уникальной круглой формой, которая выделяет её среди кёльнских соборов." },
                        { text: "Главной архитектурной особенностью является двенадцатигранный купол – одна из крупнейших романских ротонд Европы. Стиль сочетает элементы римской и раннеготической архитектуры, создавая гармоничный образ, сохранившийся на протяжении веков." },
                        { text: "Церковь активно используется для богослужений, концертов и культурных мероприятий, являясь не только памятником архитектуры, но и живым центром религиозной и культурной жизни города." },
                        { bold: "История", text: "Первая церковь на этом месте появилась в IV–V веках и была посвящена мученику Св. Гереону. Современное здание начали строить в XII веке, завершив к XIII веку. Архитектура отражает переход от романского стиля к ранней готике, что видно в фасаде и куполе." },
                        { text: "В XVI–XVII веках церковь претерпела реставрации, включая обновление алтаря и внутреннего убранства. Во время Второй мировой войны здание сильно пострадало, но после войны было тщательно восстановлено, включая уникальные витражи и росписи." },
                        { text: "Сегодня Церковь Святого Гереона входит в маршрут «Романские церкви Кёльна» и охраняется как исторический памятник, привлекая туристов и специалистов по средневековой архитектуре." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практическая информация",
                    items: [
                        { bold: "Адрес:", text: "Gereonsplatz 1, 50670 Köln, Германия" },
                        { bold: "Время работы: ", text: "ежедневно с 10:00 до 18:00 (может меняться в зависимости от мероприятий) " },
                        { bold: "Вход:", text: "свободный для посещения, платные экскурсии доступны" }
                    ]
                },
                relics: {
                    title: "Реликвии и ценности",
                    items: [
                        { bold: "Мощи Св. Гереона", text: "– хранятся в главном алтаре. " },
                        { text: "Античные бронзовые двери с резьбой XIII века. " }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Купол церкви имеет 12 граней и считается одним из крупнейших романских куполов Европы." },
                        { text: "Внутри сохранились старинные витражи XIV-XV веков. " },
                        { text: "Церковь посвящена римским легионерам и мученикам, включая Св. Гереона. " }
                    ]
                },
                construction_period: "IV-V века (первая церковь), современное здание – XII-XIII века",
                meta: {
                    title: "Церковь Святого Гереона – романская церковь в Кёльне",
                    description: "Посетите Церковь Святого Гереона в Кёльне – уникальную романскую церковь с двенадцатигранным куполом, старинными витражами и богатой историей Средневековья.",
                    ogTitle: "Церковь Святого Гереона – Романская церковь",
                    ogDescription: "Уникальная романская церковь в Старом городе Кёльна с двенадцатигранным куполом, старинными витражами и многовековой историей.",
                    keywords: "Кёльн, романская церковь, Церковь Святого Гереона, средневековая архитектура, витражи, купол, исторический памятник, туризм, достопримечательности Кёльна",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/romanische_kirchen/st_gereon/001.jpg"
                }
            },
            ua: {
                name: "Церква Святого Герєона",
                location: "Кельн, Німеччина",
                short_description: "Церква Святого Герєона (St. Gereon) – одна з відомих романських церков Кельна, розташована в Старому місті. Відома своєю незвичайною круглою формою та багатою історичною спадщиною.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Церква Святого Герєона", text: "– романська церква з дванадцятигранним куполом і старовинними вітражами, розташована в Старому місті Кельна. Відома багатим історичним інтер'єром та унікальною круглою формою, яка виділяє її серед кельнських соборів." },
                        { text: "Головною архітектурною особливістю є дванадцятигранний купол – одна з найбільших романських ротонд Європи. Стиль поєднує елементи римської та ранньоготичної архітектури, створюючи гармонійний образ, який зберігся протягом століть." },
                        { text: "Церква активно використовується для богослужінь, концертів та культурних заходів, являючись не лише пам'яткою архітектури, а й живим центром релігійного та культурного життя міста." },
                        { bold: "Історія", text: "Перша церква на цьому місці з'явилася у IV–V століттях і була присвячена мученику Святому Герєону. Сучасну будівлю почали зводити у XII столітті, завершивши у XIII столітті. Архітектура відображає перехід від романського стилю до ранньої готики, що видно у фасаді та куполі." },
                        { text: "У XVI–XVII століттях церква зазнала реставрацій, включно з оновленням вівтаря та внутрішнього оздоблення. Під час Другої світової війни будівля зазнала значних пошкоджень, але після війни була ретельно відновлена, включаючи унікальні вітражі та розписи." },
                        { text: "Сьогодні Церква Святого Герєона входить до маршруту «Романські церкви Кельна» та охороняється як історична пам'ятка, приваблюючи туристів та фахівців зі середньовічної архітектури." }
                    ]
                },
                tickets_and_entry: {
                    title: "Практична інформація",
                    items: [
                        { bold: "Адреса:", text: "Gereonsplatz 1, 50670 Köln, Німеччина" },
                        { bold: "Час роботи: ", text: "щодня з 10:00 до 18:00 (може змінюватися залежно від заходів)" },
                        { bold: "Вхід:", text: "вільний для відвідування, платні екскурсії доступні" }
                    ]
                },
                relics: {
                    title: "Реліквії та цінності",
                    items: [
                        { bold: "Мощі Святого Герєона", text: "– зберігаються у головному вівтарі." },
                        { text: "Античні бронзові двері з різьбленням XIII століття." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Купол церкви має 12 граней і вважається одним із найбільших романських куполів Європи." },
                        { text: "Всередині збереглися старовинні вітражі XIV–XV століть." },
                        { text: "Церква присвячена римським легіонерам та мученикам, зокрема Святому Герєону." }
                    ]
                },
                construction_period: "IV–V століття (перша церква), сучасна будівля – XII–XIII століття",
                meta: {
                    title: "Церква Святого Герєона – романська церква в Кельні",
                    description: "Відвідайте Церкву Святого Герєона в Кельні – унікальну романську церкву з дванадцятигранним куполом, старовинними вітражами та багатою історією середньовіччя.",
                    ogTitle: "Церква Святого Герєона – Романська церква",
                    ogDescription: "Унікальна романська церква в Старому місті Кельна з дванадцятигранним куполом, старовинними вітражами та багатовіковою історією.",
                    keywords: "Кельн, романська церква, Церква Святого Герєона, середньовічна архітектура, вітражі, купол, історична пам'ятка, туризм, визначні місця Кельна",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/romanische_kirchen/st_gereon/001.jpg"
                }
            },
            de: {
                name: "St. Gereon Kirche",
                location: "Köln, Deutschland",
                short_description: "St. Gereon ist eine der bekannten romanischen Kirchen Kölns und befindet sich in der Altstadt. Sie ist bekannt für ihre ungewöhnliche runde Form und das reiche historische Erbe.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "St. Gereon Kirche", text: "– eine romanische Kirche mit einem zwölfeckigen Kuppeldach und alten Glasfenstern, gelegen in der Altstadt von Köln. Bekannt für ihr reiches historisches Interieur und die einzigartige runde Form, die sie unter den Kölner Kirchen besonders hervorhebt." },
                        { text: "Das Hauptmerkmal der Architektur ist die zwölfeckige Kuppel – eine der größten romanischen Rundbauten Europas. Der Stil verbindet Elemente der römischen und frühgotischen Architektur und schafft ein harmonisches Erscheinungsbild, das über Jahrhunderte erhalten blieb." },
                        { text: "Die Kirche wird aktiv für Gottesdienste, Konzerte und kulturelle Veranstaltungen genutzt und ist nicht nur ein architektonisches Denkmal, sondern auch ein lebendiges Zentrum des religiösen und kulturellen Lebens der Stadt." },
                        { bold: "Geschichte", text: "Die erste Kirche an diesem Ort entstand im 4.–5. Jahrhundert und war dem Märtyrer St. Gereon gewidmet. Das heutige Gebäude wurde im 12. Jahrhundert begonnen und im 13. Jahrhundert fertiggestellt. Die Architektur zeigt den Übergang vom romanischen Stil zur frühen Gotik, erkennbar an Fassade und Kuppel." },
                        { text: "Im 16.–17. Jahrhundert wurde die Kirche restauriert, einschließlich der Erneuerung des Altars und der Innenausstattung. Während des Zweiten Weltkriegs wurde das Gebäude stark beschädigt, aber nach dem Krieg sorgfältig wiederhergestellt, einschließlich der einzigartigen Glasfenster und Wandmalereien." },
                        { text: "Heute gehört die St. Gereon Kirche zur Route der „Romanischen Kirchen Kölns“ und ist als historisches Denkmal geschützt, was sowohl Touristen als auch Fachleute für mittelalterliche Architektur anzieht." }
                    ]
                },
                tickets_and_entry: {
                    title: "Praktische Informationen",
                    items: [
                        { bold: "Adresse:", text: "Gereonsplatz 1, 50670 Köln, Deutschland" },
                        { bold: "Öffnungszeiten: ", text: "täglich von 10:00 bis 18:00 Uhr (kann je nach Veranstaltung variieren)" },
                        { bold: "Eintritt:", text: "frei zugänglich, kostenpflichtige Führungen verfügbar" }
                    ]
                },
                relics: {
                    title: "Reliquien und Werte",
                    items: [
                        { bold: "Reliquien des Heiligen Gereon", text: "– befinden sich am Hauptaltar." },
                        { text: "Antike Bronzetüren mit Schnitzereien aus dem 13. Jahrhundert." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Die Kuppel der Kirche hat 12 Seiten und gilt als eine der größten romanischen Kuppeln Europas." },
                        { text: "Im Inneren sind alte Glasfenster aus dem 14.–15. Jahrhundert erhalten." },
                        { text: "Die Kirche ist den römischen Legionären und Märtyrern, einschließlich St. Gereon, gewidmet." }
                    ]
                },
                construction_period: "4.–5. Jahrhundert (erste Kirche), heutiges Gebäude – 12.–13. Jahrhundert",
                meta: {
                    title: "St. Gereon Kirche – romanische Kirche in Köln",
                    description: "Besuchen Sie die St. Gereon Kirche in Köln – eine einzigartige romanische Kirche mit zwölfeckiger Kuppel, alten Glasfenstern und reichem mittelalterlichen Erbe.",
                    ogTitle: "St. Gereon Kirche – Romanische Kirche",
                    ogDescription: "Eine einzigartige romanische Kirche in der Altstadt von Köln mit zwölfeckiger Kuppel, alten Glasfenstern und jahrhundertealter Geschichte.",
                    keywords: "Köln, romanische Kirche, St. Gereon Kirche, mittelalterliche Architektur, Glasfenster, Kuppel, historisches Denkmal, Tourismus, Sehenswürdigkeiten Kölns",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/romanische_kirchen/st_gereon/001.jpg"
                }
            }
        }
    },
    {
        id: "prussian_fortress_system_koln",
        type: ["historical_building"], rating: "local",
        path: "prussian_fortress_system_koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
        fotoCard: "Germany/nrw/koln/koln-city/prussian_fortress_system/010-1.jpg",
        mapOpen: "prussian_fortress_system_koln",
        subObjects: ["fort_I_inner_koln", "fort_II_inner_koln"],
        subObjects2: ["fort_VI_outer_koln",],
        translations: {
            ru: {
                name: "Прусская крепостная система Кёльна",
                location: "Кёльн, Германия",
                short_description: "Прусская крепостная система Кёльна – это комплекс оборонительных сооружений XIX века, включающий два кольца фортов, построенных Пруссией вокруг города для его защиты. Сегодня форты сохранились в разной степени: часть используется как жилые и общественные пространства, часть превращена в зелёные зоны, а часть частично сохранилась или утрачена.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { text: "После включения Кёльна в состав Пруссии в 1815 году город получил стратегическое значение как пограничная крепость на Рейне. На основе более ранних укреплений, включая средневековые и частично римские оборонительные сооружения, была заложена система нового оборонительного кольца." },
                        { text: "В XIX веке эта система была существенно расширена и приобрела двухуровневую структуру. Вокруг города сформировались два пояса укреплений – внутренний и внешний. Внутреннее кольцо, модернизированное в первой половине XIX века на основе более ранних фортификаций, располагалось вблизи городской черты и включало 12 основных фортов." },
                        { text: "В связи с развитием артиллерии и необходимостью вынести линию обороны дальше от города, в период с 1873 по 1886 год было построено внешнее крепостное кольцо длиной около 46 километров. Оно также состояло из 12 основных фортов, размещённых на значительном удалении от центра Кёльна и соединённых между собой дорогами, валами и промежуточными укреплениями." },
                        { text: "Помимо основных фортов, оборонительная система включала многочисленные дополнительные сооружения – редуты, батареи и так называемые промежуточные укрепления (Zwischenwerke). В общей сложности комплекс насчитывал более 180 объектов, образуя одну из крупнейших крепостных систем Пруссии. Форты строились преимущественно из кирпича с земляными насыпями и были рассчитаны на длительную оборону и артиллерийские обстрелы." },
                        { text: "Однако стремительное развитие артиллерии во второй половине XIX века быстро снизило эффективность подобных укреплений, и уже к концу XIX века часть сооружений считалась устаревшей. После Первой мировой войны значительная часть крепостной системы была демонтирована или утратила своё военное значение." },
                        { text: "Сегодня бывшие линии укреплений частично совпадают с зелёным поясом города (Grüngürtel) и трассой Militärringstraße, сохраняя следы прусской оборонительной системы в современном городском ландшафте." },
                    ]
                },
                subObjects_title: "Некоторые форты Кёльна (внутреннее крепостное кольцо)",
                subObjects_title2: "Некоторые форты Кёльна (внешнее крепостное кольцо)",
                // sub_objects: {
                //     title: "Форты Кёльна и их текущее состояние",
                //     items: [
                //         {
                //             bold: "Fort II",
                //             text: "являлся частью внутреннего прусского оборонительного кольца Кёльна, построенного в неопрусском стиле примерно в 500 метрах от существующей городской стены. Строительство форта началось в 1816 году и завершилось в декабре 1821 года, поэтому он относится к первой строительной серии укреплений. <br>В отличие от фортов второй очереди, Форт II получил не только номер, но и почётное имя –  «Великий князь Николай Российский», утверждённое королём Фридрихом Вильгельмом III. Как и у большинства укреплений внутреннего кольца, оригинальные строительные планы не сохранились, однако его устройство частично реконструируется по картам и аналогии с сохранившимися фортами. <br>Форт имел полигональную форму примерно 100×100 метров, окружён сухим рвом глубиной около 4 метров и шириной около 10 метров. В конструкции присутствовали казематированные помещения для гарнизона и боеприпасов, редут с двумя этажами, капониры для фланговой обороны и артиллерийские позиции, а также дополнительные оборонительные сооружения. Гарнизон насчитывал около 250 человек. <br>Форт II располагался на месте современного товарного вокзала Bonntor и был вынесен дальше от городской стены по сравнению с большинством других укреплений, что нарушало симметрию оборонительного кольца. Из-за этого он не был включён в более позднюю систему внутренней модернизации укреплений. <br>Военное использование форта завершилось в 1880-х годах, а окончательный снос произошёл в середине 1930-х годов. В настоящее время на местности не сохранилось видимых следов этого укрепления. <br><b>Состояние:</b> утраченный. <br><b>Где:</b> в районе Bayenthal, в южной части Кёльн."
                //         },
                //         {
                //             bold: "Fort III",
                //             text: "являлся частью внутреннего прусского оборонительного кольца Кёльна, построенного в неопрусском стиле примерно в 500 метрах от существующей городской стены. Строительство первых укреплений началось в 1816 году, однако форты с нечётными номерами, включая Форт III, были реализованы во второй строительной фазе между 1841 и 1847 годами. Работы над Фортом III начались в 1843 году. <br>Форт был рассчитан на гарнизон около 178 солдат. По своей планировке он соответствовал фортификационным сооружениям второй серии и имел менее острые контуры со стороны возможного противника, чем форты первой очереди. <br>Форт III располагался в районе современной улицы Bonner Wall. В отличие от большинства других укреплений, он не был полностью включён в новую городскую оборонительную линию 1882 года и оказался немного позади неё. <br>Позднее форт был переоборудован в тюремное военное сооружение: к редюиту были пристроены блоки камер. Военное использование продолжалось до конца XIX – начала XX века. <br>Окончательный снос Форта III произошёл в 1960-х годах. В настоящее время на местности не сохранилось видимых следов этого укрепления. <br><b>Состояние:</b> утраченный. <br><b>Где:</b> район Neustadt-Süd, в районе улицы Bonner Wall (южная часть Кёльна)"
                //         },

                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/004.jpg", alt: "Fort IV",
                //             bold: "Fort IV",
                //             text: "был построен между 1874 и 1876 годами и являлся одним из крупных фортов внешнего прусского оборонительного кольца Кёльна на левом берегу Рейна. По своим размерам он сопоставим только с фортами V и VII, тогда как остальные укрепления относились к среднему типу. Его параметры составляли около 210 метров в глубину и 330 метров в ширину, при этом форт имел строго симметричную планировку. <br>Форт был спроектирован как артиллерийское укрепление с поддержкой пехоты. В последующие годы он модернизировался: усиливались перекрытия бетоном, устанавливались бронированные наблюдательные купола и укреплялись оборонительные сооружения. <br>С 1909 по 1914 год в форте размещался 3-й Кёльнский батальон дирижаблей, после чего он был переведён в новые казармы в Бикендорфе. <br>После Первой мировой войны, в 1921–1922 годах, большая часть форта была демонтирована в соответствии с Версальским договором, однако часть казарменных зданий сохранилась. Позже территория была перепрофилирована: здесь появились спортивные площадки, учебные и городские службы. <br>Во время Второй мировой войны форт снова использовался в военных целях: в его подземных помещениях располагались командные и защитные сооружения противовоздушной обороны, а часть комплекса служила убежищем для гражданского населения. Сегодня территория используется в основном как спортивный и хозяйственный объект города. <br><b>Состояние:</b> частично сохранившееся / адаптированное. <br><b>Где:</b> западный Grüngürtel."
                //         },

                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/005.jpg",
                //             alt: "Fort V",
                //             bold: "Fort V",
                //             text: "являлся частью внутреннего прусского оборонительного кольца Кёльна, построенного в неопрусском стиле примерно в 500 метрах от существующей городской стены. Первые укрепления начали возводить с 1816 года, однако форты с нечётными номерами, включая Форт V, были построены во второй строительной фазе между 1841 и 1847 годами. Работы над фортом начались в 1843 году и завершились в 1847 году. <br>Форт V не получил дополнительного имени, что было типично для укреплений второй строительной серии. По своей архитектуре он представлял переходный тип: с более сбалансированной геометрией фасов и флангов, в отличие от более острых форм ранних фортов. <br>В отличие от первоначальных планов, новая линия укреплений левого берега, построенная в 1882 году, прошла перед фортом, из-за чего он не был включён в обновлённую оборонительную систему и утратил своё военное значение. <br>В 1880-х годах форт был выведен из военного использования и в 1886 году перешёл в собственность города. Центральное сооружение (редюит) было переоборудовано под административные и лабораторные помещения Августовской больницы. <br>В дальнейшем здание использовалось как столовая, а затем как химический институт. Во время Второй мировой войны форт сильно пострадал от бомбардировок, и от него остались лишь руины. <br>В 2002-2004 годах редюит был полностью восстановлен и сегодня используется Географическим институтом Кёльнского университета, оставаясь одним из немногих сохранившихся элементов этого форта. <br><b>Состояние:</b> частично сохранившееся / адаптированное. <br><b>Где:</b> район Müngersdorf, рядом с зелёным поясом Grüngürtel (западная часть Кёльна)."
                //         },
                //         { img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg", alt: "Fort VI Deckstein", bold: "Fort VI Deckstein", text: "является одним из наиболее хорошо сохранившихся фортов системы. После утраты военного значения он был частично адаптирован под жильё и общественные функции. Сегодня внутри находятся жилые помещения и объединения жителей (Verein), а внутренний двор используется как общественное пространство. <br><b>Состояние:</b> жилой / адаптирован. <br><b>Где:</b> район Deckstein, рядом с Decksteiner Weiher (западный Кёльн)." },
                //         { bold: "Fort VII", text: "– сохранились отдельные фрагменты стен и укреплений, большая часть сооружения утрачена. <br><b>Состояние:</b> руины / фрагменты. <br><b>Где:</b> район Lindenthal, рядом с Grüngürtel (западная часть Кёльна)." },
                //         //                         Форт VI являлся частью внутреннего прусского оборонительного кольца Кёльна, построенного в неопрусском стиле примерно в 500 метрах от существующей городской стены. Строительство форта началось 30 декабря 1818 года и было завершено к концу 1823 года, поэтому он относится к первой строительной серии укреплений.
                //         // Форт получил имя «Принц Фридрих Нидерландский», что было характерно для укреплений первой серии. Архитектурно он отличался более острыми формами валов и рвов, направленных в сторону предполагаемого противника.
                //         // Проект форта был разработан в Берлине под руководством Карла Фридриха Шинкеля, а строительством руководили военные инженеры. Форт располагался в районе современной улицы Aachener Straße.
                //         // В отличие от части других укреплений, Форт VI не был включён в новую линию обороны левого берега, построенную в 1882–1891 годах, из-за чего утратил своё военное значение.
                //         // Окончательный снос форта произошёл в конце 1880-х годов. В настоящее время на местности не сохранилось видимых следов этого укрепления.

                //         { bold: "Fort VIII", text: "– от форта сохранились лишь минимальные элементы, структура практически не читается. <br><b>Состояние:</b> частично утраченный. <br><b>Где:</b> район Sülz, западный сектор крепостного кольца." },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/009.jpg",
                //             alt: "Fort IX",
                //             bold: "Fort IX",
                //             text: "– частично сохранившийся форт с различимыми кирпичными сооружениями и элементами оборонительной структуры. Часть комплекса утрачена или скрыта в ландшафте, однако основные объёмы ещё читаются. <br><b>Состояние:</b> частично сохранился / фрагменты. <br><b>Где:</b> район Zollstock, юго-запад Кёльна."
                //         },
                //         { img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/010.jpg", alt: "Fort X", bold: "Fort X", text: "сохранился лучше многих других фортов и был частично переоборудован. Сегодня он окружён парковой зоной и используется как общественное пространство, сохраняя при этом оригинальную структуру прусского укрепления. <br><b>Состояние:</b> частично переиспользован. <br><b>Где:</b> район Raderberg, южная часть Кёльна." },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/011.jpg",
                //             alt: "Fort XI",
                //             bold: "Fort XI",
                //             text: "– сохранившийся форт с отдельными кирпичными сооружениями и фрагментами оборонительной структуры. Хотя значительная часть комплекса утрачена или перестроена, элементы фортификационной архитектуры остаются хорошо различимыми в ландшафте. <br><b>Состояние:</b> частично сохранился / фрагменты. <br><b>Где:</b> район Bayenthal / Marienburg, южный сектор Кёльна."
                //         },
                //         { bold: "Fort XII", text: "– один из фортов восточного сектора, частично сохранился и используется ограниченно. <br><b>Состояние:</b> частично сохранён / адаптирован. <br><b>Где:</b> район Deutz, правый берег Рейна (восточная часть Кёльна)." },
                //     ]
                // },
                meta: {
                    title: "Прусское крепостное кольцо Кёльна – форты XIX века и оборонительная система города",
                    description: "Прусское крепостное кольцо Кёльна – это система из 12 фортов XIX века, окружавших город. Узнайте историю фортификаций, их современное состояние и где сегодня можно увидеть сохранившиеся укрепления, парковые зоны и переоборудованные форты.",
                    ogTitle: "Прусское крепостное кольцо Кёльна – прогулка по фортам XIX века",
                    ogDescription: "Откройте для себя форты Кёльна: от жилого Fort VI Deckstein до скрытых в парках укреплений. История прусской оборонительной системы и её следы в современном городе.",
                    keywords: "Прусское крепостное кольцо Кёльна, Festung Köln, форты Кёльна, Fort I Köln, Fort II Köln, Fort III Köln, Fort IV Köln, Fort V Köln, Fort VI Deckstein, Fort VII Köln, Fort VIII Köln, Fort IX Köln, Fort X Köln, Fort XI Köln, Fort XII Köln, крепости Кёльна, фортификация Кёльн, военная архитектура Германия, достопримечательности Кёльна, исторические сооружения Кёльна, Grüngürtel Köln",
                    ogImage: "Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg"
                }
            },
            ua: {
                name: "Прусська фортифікаційна система Кельна",
                location: "Кельн, Німеччина",
                short_description: "Прусська фортифікаційна система Кельна – це комплекс оборонних споруд XIX століття, що включає два кільця фортів, збудованих Пруссією навколо міста для його захисту. Сьогодні форти збереглися в різному стані: частина використовується як житлові та громадські простори, частина перетворена на зелені зони, а частина частково збереглася або була втрачена.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { text: "Після включення Кельна до складу Пруссії у 1815 році місто отримало стратегічне значення як прикордонна фортеця на Рейні. На основі більш ранніх укріплень, включаючи середньовічні та частково римські оборонні споруди, було закладено систему нового оборонного кільця." },
                        { text: "У XIX столітті ця система була значно розширена та набула дворівневої структури. Навколо міста сформувалися два пояси укріплень – внутрішній і зовнішній. Внутрішнє кільце, модернізоване у першій половині XIX століття на основі більш ранніх фортифікацій, розташовувалося поблизу міської межі та включало 12 основних фортів." },
                        { text: "У зв’язку з розвитком артилерії та необхідністю винести лінію оборони далі від міста, у період з 1873 по 1886 рік було збудовано зовнішнє фортифікаційне кільце довжиною близько 46 кілометрів. Воно також складалося з 12 основних фортів, розміщених на значній відстані від центру Кельна та з’єднаних між собою дорогами, валами та проміжними укріпленнями." },
                        { text: "Окрім основних фортів, оборонна система включала численні додаткові споруди – редути, батареї та так звані проміжні укріплення (Zwischenwerke). Загалом комплекс налічував понад 180 об’єктів, утворюючи одну з найбільших фортифікаційних систем Пруссії. Форти будувалися переважно з цегли із земляними насипами та були розраховані на тривалу оборону і артилерійські обстріли." },
                        { text: "Однак стрімкий розвиток артилерії у другій половині XIX століття швидко знизив ефективність подібних укріплень, і вже наприкінці XIX століття частина споруд вважалася застарілою. Після Першої світової війни значна частина фортифікаційної системи була демонтована або втратила своє військове значення." },
                        { text: "Сьогодні колишні лінії укріплень частково збігаються із зеленим поясом міста (Grüngürtel) та трасою Militärringstraße, зберігаючи сліди прусської оборонної системи в сучасному міському ландшафті." },
                    ]
                },
                subObjects_title: "Деякі форти Кельна (внутрішнє фортифікаційне кільце)",
                subObjects_title2: "Деякі форти Кельна (зовнішнє фортифікаційне кільце)",
                // sub_objects: {
                //     title: "Форти Кельна та їхній сучасний стан",
                //     items: [
                //         {
                //             bold: "Форт II",
                //             text: "був частиною внутрішнього прусського оборонного кільця Кельна, збудованого в неопрусському стилі приблизно за 500 метрів від існуючої міської стіни. Будівництво форту розпочалося у 1816 році та завершилося у грудні 1821 року, тому він належить до першої будівельної серії укріплень. <br>На відміну від фортів другої черги, Форт II отримав не лише номер, але й почесну назву – «Великий князь Микола Російський», затверджену королем Фрідріхом Вільгельмом III. Як і у більшості укріплень внутрішнього кільця, оригінальні будівельні плани не збереглися, однак його структура частково реконструюється за картами та за аналогією зі збереженими фортами. <br>Форт мав полігональну форму приблизно 100×100 метрів, був оточений сухим ровом глибиною близько 4 метрів і шириною близько 10 метрів. У конструкції були казематовані приміщення для гарнізону та боєприпасів, редут із двома поверхами, капоніри для флангової оборони та артилерійські позиції, а також додаткові оборонні споруди. Гарнізон налічував близько 250 осіб. <br>Форт II розташовувався на місці сучасного товарного вокзалу Bonntor і був винесений далі від міської стіни порівняно з більшістю інших укріплень, що порушувало симетрію оборонного кільця. Через це він не був включений до пізнішої системи внутрішньої модернізації укріплень. <br>Військове використання форту завершилося у 1880-х роках, а остаточний демонтаж відбувся в середині 1930-х років. Сьогодні на місцевості не збереглося видимих слідів цього укріплення. <br><b>Стан:</b> втрачений. <br><b>Де:</b> у районі Bayenthal, у південній частині Кельна."
                //         },
                //         {
                //             bold: "Форт III",
                //             text: "був частиною внутрішнього прусського оборонного кільця Кельна, збудованого в неопрусському стилі приблизно за 500 метрів від існуючої міської стіни. Будівництво перших укріплень розпочалося у 1816 році, однак форти з непарними номерами, включаючи Форт III, були реалізовані на другому етапі будівництва між 1841 і 1847 роками. Роботи над Фортом III розпочалися у 1843 році. <br>Форт був розрахований на гарнізон близько 178 солдатів. За своєю плануванням він відповідав фортифікаційним спорудам другої серії та мав менш гострі контури з боку можливого противника, ніж форти першої черги. <br>Форт III розташовувався в районі сучасної вулиці Bonner Wall. На відміну від більшості інших укріплень, він не був повністю включений до нової міської оборонної лінії 1882 року і опинився трохи позаду неї. <br>Згодом форт був переобладнаний у військову тюремну споруду: до редюїту були добудовані блоки камер. Військове використання тривало до кінця XIX – початку XX століття. <br>Остаточний демонтаж Форту III відбувся у 1960-х роках. Сьогодні на місцевості не збереглося видимих слідів цього укріплення. <br><b>Стан:</b> втрачений. <br><b>Де:</b> район Neustadt-Süd, у районі вулиці Bonner Wall (південна частина Кельна)"
                //         },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/004.jpg", alt: "Fort IV",
                //             bold: "Форт IV",
                //             text: "був збудований між 1874 і 1876 роками та був одним із великих фортів зовнішнього прусського оборонного кільця Кельна на лівому березі Рейну. За своїми розмірами він порівнюється лише з фортами V і VII, тоді як інші укріплення належали до середнього типу. Його параметри становили приблизно 210 метрів у глибину та 330 метрів у ширину, при цьому форт мав строго симетричне планування. <br>Форт був спроєктований як артилерійське укріплення з підтримкою піхоти. У наступні роки він модернізувався: посилювалися перекриття бетоном, встановлювалися броньовані спостережні куполи та зміцнювалися оборонні споруди. <br>З 1909 по 1914 рік у форті розміщувався 3-й Кельнський батальйон дирижаблів, після чого його було переведено до нових казарм у Бікендорфі. <br>Після Першої світової війни, у 1921–1922 роках, більша частина форту була демонтована відповідно до Версальського договору, однак частина казармених будівель збереглася. Згодом територію перепрофілювали: тут з’явилися спортивні майданчики, навчальні та міські служби. <br>Під час Другої світової війни форт знову використовувався у військових цілях: у його підземних приміщеннях розміщувалися командні та захисні споруди протиповітряної оборони, а частина комплексу слугувала укриттям для цивільного населення. Сьогодні територія використовується переважно як спортивний та господарський об’єкт міста. <br><b>Стан:</b> частково збережений / адаптований. <br><b>Розташування:</b> західний Grüngürtel."
                //         },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/005.jpg", alt: "Fort V",
                //             bold: "Форт V",
                //             text: "був частиною внутрішнього прусського оборонного кільця Кельна, збудованого в неопрусському стилі приблизно за 500 метрів від існуючої міської стіни. Перші укріплення почали зводити з 1816 року, однак форти з непарними номерами, включаючи Форт V, були побудовані на другому етапі будівництва між 1841 і 1847 роками. Роботи над фортом розпочалися у 1843 році та завершилися у 1847 році. <br>Форт V не отримав додаткової назви, що було типовим для укріплень другої будівельної серії. За своєю архітектурою він являв перехідний тип: із більш збалансованою геометрією фасів і флангів, на відміну від більш загострених форм ранніх фортів. <br>На відміну від початкових планів, нова лінія укріплень лівого берега, збудована у 1882 році, пройшла перед фортом, через що він не був включений до оновленої оборонної системи та втратив своє військове значення. <br>У 1880-х роках форт був виведений із військового використання і у 1886 році перейшов у власність міста. Центральна споруда (редюїт) була переобладнана під адміністративні та лабораторні приміщення Августівської лікарні. <br>Надалі будівля використовувалася як їдальня, а потім як хімічний інститут. Під час Другої світової війни форт сильно постраждав від бомбардувань, і від нього залишилися лише руїни. <br>У 2002–2004 роках редюїт був повністю відновлений і сьогодні використовується Географічним інститутом Кельнського університету, залишаючись одним із небагатьох збережених елементів цього форту. <br><b>Стан:</b> частково збережений / адаптований. <br><b>Де:</b> район Müngersdorf, поруч із зеленим поясом Grüngürtel (західна частина Кельна)."
                //         },
                //         { img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg", alt: "Fort VI Deckstein", bold: "Fort VI Deckstein", text: "є одним із найкраще збережених фортів системи. Після втрати військового значення був частково адаптований під житло та громадські функції. Сьогодні всередині знаходяться житлові приміщення та об’єднання мешканців (Verein), а внутрішній двір використовується як громадський простір. <br><b>Стан:</b> житловий / адаптований. <br><b>Де:</b> район Deckstein, поруч із Decksteiner Weiher (західний Кельн)." },
                //         { bold: "Fort VII", text: "– збереглися окремі фрагменти стін та укріплень, більша частина споруди втрачена. <br><b>Стан:</b> руїни / фрагменти. <br><b>Де:</b> район Lindenthal, поруч із Grüngürtel (західна частина Кельна)." },
                //         { bold: "Fort VIII", text: "– від форту збереглися лише мінімальні елементи, структура майже не читається. <br><b>Стан:</b> частково втрачений. <br><b>Де:</b> район Sülz, західний сектор фортифікаційного кільця." },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/009.jpg", alt: "Fort IX",
                //             bold: "Fort IX",
                //             text: "– частково збережений форт із розпізнаваними цегляними спорудами та елементами оборонної структури. Частина комплексу втрачена або прихована в ландшафті, однак основні об’єми ще читаються. <br><b>Стан:</b> частково збережений / фрагменти. <br><b>Де:</b> район Zollstock, південний захід Кельна."
                //         },
                //         { img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/010.jpg", alt: "Fort X", bold: "Fort X", text: "зберігся краще за багато інших фортів і був частково переобладнаний. Сьогодні він оточений парковою зоною та використовується як громадський простір, зберігаючи при цьому оригінальну структуру прусського укріплення. <br><b>Стан:</b> частково переобладнаний. <br><b>Де:</b> район Raderberg, південна частина Кельна." },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/011.jpg",
                //             alt: "Fort XI",
                //             bold: "Fort XI",
                //             text: "– збережений форт з окремими цегляними спорудами та фрагментами оборонної структури. Хоча значна частина комплексу втрачена або перебудована, елементи фортифікаційної архітектури залишаються добре впізнаваними в ландшафті. <br><b>Стан:</b> частково збережений / фрагменти. <br><b>Де:</b> район Bayenthal / Marienburg, південний сектор Кельна."
                //         },
                //         { bold: "Fort XII", text: "– один із фортів східного сектора, частково зберігся та використовується обмежено. <br><b>Стан:</b> частково збережений / адаптований. <br><b>Де:</b> район Deutz, правий берег Рейну (східна частина Кельна)." }
                //     ]
                // },
                meta: {
                    title: "Прусське фортифікаційне кільце Кельна – форти XIX століття та оборонна система міста",
                    description: "Прусське фортифікаційне кільце Кельна – це система з 12 фортів XIX століття, що оточували місто. Дізнайтеся історію фортифікацій, їх сучасний стан і де сьогодні можна побачити збережені укріплення, паркові зони та переобладнані форти.",
                    ogTitle: "Прусське фортифікаційне кільце Кельна – подорож фортами XIX століття",
                    ogDescription: "Відкрийте для себе форти Кельна: від житлового Fort VI Deckstein до прихованих у парках укріплень. Історія прусської оборонної системи та її сліди в сучасному місті.",
                    keywords: "Прусське фортифікаційне кільце Кельна, форти Кельна, Fort I Köln, Fort II Köln, Fort III Köln, Fort IV Köln, Fort V Köln, Fort VI Deckstein, Fort VII Köln, Fort VIII Köln, Fort IX Köln, Fort X Köln, Fort XI Köln, Fort XII Köln, фортифікації Кельна, військова архітектура Німеччини, визначні місця Кельна, історичні споруди Кельна, Grüngürtel Köln",
                    ogImage: "Germany/nrw/koln/koln-city/prussian_fortress_system/006.jpg"
                }
            },
            de: {
                name: "Preußisches Festungssystem Köln",
                location: "Köln, Deutschland",
                short_description: "Das preußische Festungssystem von Köln ist ein Komplex von Verteidigungsanlagen des 19. Jahrhunderts, bestehend aus zwei Ringen von Forts, die von Preußen zur Verteidigung der Stadt errichtet wurden. Heute sind die Forts unterschiedlich erhalten: ein Teil wird als Wohn- und öffentliche Räume genutzt, ein Teil wurde zu Grünflächen umgestaltet, und ein Teil ist nur teilweise erhalten oder verloren gegangen.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { text: "Nach der Eingliederung Kölns in das Königreich Preußen im Jahr 1815 erhielt die Stadt eine strategische Bedeutung als Grenzfestung am Rhein. Auf der Grundlage älterer Befestigungen, darunter mittelalterliche und teilweise römische Verteidigungsanlagen, wurde ein neues System eines Befestigungsrings angelegt." },
                        { text: "Im 19. Jahrhundert wurde dieses System erheblich erweitert und erhielt eine zweistufige Struktur. Rund um die Stadt entstanden zwei Befestigungsgürtel – ein innerer und ein äußerer Ring. Der innere Ring, der in der ersten Hälfte des 19. Jahrhunderts auf Basis älterer Befestigungen modernisiert wurde, lag in unmittelbarer Nähe der Stadtgrenze und umfasste 12 Hauptforts." },
                        { text: "Aufgrund der Entwicklung der Artillerie und der Notwendigkeit, die Verteidigungslinie weiter von der Stadt zu verlegen, wurde in den Jahren 1873 bis 1886 ein äußerer Festungsring mit einer Länge von etwa 46 Kilometern errichtet. Dieser bestand ebenfalls aus 12 Hauptforts, die in größerer Entfernung vom Stadtzentrum Kölns lagen und durch Straßen, Wälle sowie Zwischenwerke miteinander verbunden waren." },
                        { text: "Neben den Hauptforts umfasste das Verteidigungssystem zahlreiche zusätzliche Anlagen – Redouten, Batterien sowie sogenannte Zwischenwerke. Insgesamt zählte das System mehr als 180 Objekte und bildete eine der größten Festungsanlagen Preußens. Die Forts wurden überwiegend aus Ziegeln mit Erdaufschüttungen errichtet und waren für eine langfristige Verteidigung sowie für Artilleriebeschuss ausgelegt." },
                        { text: "Die rasante Entwicklung der Artillerie in der zweiten Hälfte des 19. Jahrhunderts verringerte jedoch schnell die Wirksamkeit solcher Befestigungen, sodass ein Teil der Anlagen bereits gegen Ende des 19. Jahrhunderts als veraltet galt. Nach dem Ersten Weltkrieg wurde ein großer Teil der Festungsanlagen abgebaut oder verlor seine militärische Bedeutung." },
                        { text: "Heute verlaufen die ehemaligen Befestigungslinien teilweise entlang des Grüngürtels der Stadt sowie der Militärringstraße und bewahren Spuren der preußischen Verteidigungsanlagen im modernen Stadtbild." },
                    ]
                },
                subObjects_title: "Einige Kölner Forts (innerer Festungsring)",
                subObjects_title2: "Einige Kölner Forts (äußerer Festungsring)",
                // sub_objects: {
                //     title: "Die Kölner Forts und ihr heutiger Zustand",
                //     items: [
                //         {
                //             bold: "Fort II",
                //             text: "war Teil des inneren preußischen Festungsrings von Köln, der im neupreußischen Stil etwa 500 Meter von der bestehenden Stadtmauer entfernt errichtet wurde. Der Bau des Forts begann im Jahr 1816 und wurde im Dezember 1821 abgeschlossen, weshalb es zur ersten Bauphase der Befestigungen gehört. <br>Im Gegensatz zu den Forts der zweiten Bauphase erhielt Fort II nicht nur eine Nummer, sondern auch einen Ehrennamen – „Großfürst Nikolaus von Russland“, der von König Friedrich Wilhelm III. persönlich festgelegt wurde. Wie bei den meisten Befestigungen des inneren Rings sind die ursprünglichen Baupläne nicht erhalten, jedoch lässt sich seine Struktur teilweise anhand von Karten und durch Vergleich mit erhaltenen Forts rekonstruieren. <br>Das Fort hatte einen polygonalen Grundriss von etwa 100×100 Metern und war von einem trockenen Graben mit etwa 4 Metern Tiefe und rund 10 Metern Breite umgeben. Die Anlage umfasste kasemattierte Räume für Garnison und Munition, ein zweigeschossiges Reduit, Kaponniere zur Flankenverteidigung sowie Artilleriestellungen und zusätzliche Verteidigungsanlagen. Die Besatzung betrug etwa 250 Mann. <br>Fort II befand sich an der Stelle des heutigen Güterbahnhofs Bonntor und lag im Vergleich zu den meisten anderen Befestigungen weiter vor der Stadtmauer, wodurch die Symmetrie des Festungsrings in diesem Bereich unterbrochen wurde. Aus diesem Grund wurde es nicht in die spätere innere Modernisierung der Befestigungsanlagen einbezogen. <br>Die militärische Nutzung des Forts endete in den 1880er Jahren, der endgültige Abriss erfolgte Mitte der 1930er Jahre. Heute sind keine sichtbaren Spuren dieser Befestigung im Gelände erhalten. <br><b>Zustand:</b> verloren. <br><b>Lage:</b> im Stadtteil Bayenthal, im südlichen Teil von Köln."
                //         },
                //         {
                //             bold: "Fort III",
                //             text: "war Teil des inneren preußischen Festungsrings von Köln, der im neupreußischen Stil etwa 500 Meter vor der bestehenden Stadtmauer errichtet wurde. Der Bau der ersten Befestigungen begann im Jahr 1816, jedoch wurden die Forts mit ungeraden Nummern, einschließlich Fort III, in der zweiten Bauphase zwischen 1841 und 1847 errichtet. Die Arbeiten am Fort III begannen im Jahr 1843. <br>Das Fort war für eine Besatzung von etwa 178 Soldaten ausgelegt. In seiner Planung entsprach es den Befestigungen der zweiten Baureihe und wies auf der feindseitigen Seite weniger spitz zulaufende Konturen auf als die Forts der ersten Bauphase. <br>Fort III befand sich im Bereich der heutigen Straße Bonner Wall. Im Gegensatz zu den meisten anderen Befestigungen wurde es nicht vollständig in die neue Stadtbefestigungslinie von 1882 integriert und lag etwas hinter dieser zurück. <br>Später wurde das Fort zu einer militärischen Gefängnisanlage umgebaut: An das Reduit wurden Zellblöcke angebaut. Die militärische Nutzung dauerte bis zum Ende des 19. bzw. Anfang des 20. Jahrhunderts. <br>Der endgültige Abriss von Fort III erfolgte in den 1960er Jahren. Heute sind keine sichtbaren Spuren dieser Befestigung im Gelände erhalten. <br><b>Zustand:</b> verloren. <br><b>Lage:</b> Stadtteil Neustadt-Süd, im Bereich der Straße Bonner Wall (südlicher Teil von Köln)."
                //         },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/004.jpg", alt: "Fort IV",
                //             bold: "Fort IV",
                //             text: "wurde zwischen 1874 und 1876 erbaut und war eines der großen Forts des äußeren preußischen Festungsrings von Köln am linken Rheinufer. In seiner Größe ist es nur mit den Forts V und VII vergleichbar, während die übrigen Befestigungen dem mittleren Typ zugeordnet wurden. Seine Abmessungen betrugen etwa 210 Meter in der Tiefe und 330 Meter in der Breite, wobei das Fort eine streng symmetrische Anlage aufwies. <br>Das Fort wurde als Artilleriebefestigung mit Unterstützung durch Infanterie entworfen. In den folgenden Jahren wurde es modernisiert: Decken wurden mit Beton verstärkt, gepanzerte Beobachtungskuppeln installiert und Verteidigungsanlagen ausgebaut. <br>Von 1909 bis 1914 war im Fort das 3. Kölner Luftschifferbataillon stationiert, bevor es in neue Kasernen in Bickendorf verlegt wurde. <br>Nach dem Ersten Weltkrieg wurde der größte Teil des Forts in den Jahren 1921–1922 gemäß dem Versailler Vertrag abgetragen, wobei Teile der Kasernengebäude erhalten blieben. Später wurde das Gelände umgenutzt: Es entstanden Sportanlagen, Ausbildungsstätten und städtische Einrichtungen. <br>Im Zweiten Weltkrieg wurde das Fort erneut militärisch genutzt: In den unterirdischen Räumen befanden sich Kommandostellen und Einrichtungen der Luftverteidigung, außerdem diente ein Teil der Anlage als Schutzraum für die Zivilbevölkerung. Heute wird das Gelände überwiegend als Sport- und Betriebsfläche der Stadt genutzt. <br><b>Zustand:</b> teilweise erhalten / umgenutzt. <br><b>Lage:</b> westlicher Grüngürtel."
                //         },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/005.jpg", alt: "Fort V",
                //             bold: "Fort V",
                //             text: "war Teil des inneren preußischen Festungsrings von Köln, der im neupreußischen Stil etwa 500 Meter vor der bestehenden Stadtmauer errichtet wurde. Die ersten Befestigungen wurden ab 1816 gebaut, jedoch wurden die Forts mit ungeraden Nummern, einschließlich Fort V, erst in der zweiten Bauphase zwischen 1841 und 1847 errichtet. Die Arbeiten am Fort begannen im Jahr 1843 und wurden 1847 abgeschlossen. <br>Fort V erhielt keinen zusätzlichen Namen, was typisch für die Befestigungen der zweiten Baureihe war. In seiner Architektur stellte es einen Übergangstyp dar: mit einer ausgewogeneren Geometrie von Facen und Flanken im Vergleich zu den spitzeren Formen der frühen Forts. <br>Entgegen den ursprünglichen Planungen verlief die neue linksrheinische Befestigungslinie von 1882 vor dem Fort, wodurch es nicht in das modernisierte Verteidigungssystem einbezogen wurde und seine militärische Bedeutung verlor. <br>In den 1880er Jahren wurde das Fort aus der militärischen Nutzung genommen und ging 1886 in städtischen Besitz über. Das zentrale Bauwerk (Reduit) wurde zu Verwaltungs- und Laborräumen des Augustahospitals umgebaut. <br>Später wurde das Gebäude als Mensa und anschließend als chemisches Institut genutzt. Während des Zweiten Weltkriegs wurde das Fort durch Luftangriffe stark beschädigt, sodass nur noch Ruinen übrig blieben. <br>In den Jahren 2002–2004 wurde das Reduit vollständig restauriert und wird heute vom Geographischen Institut der Universität zu Köln genutzt. Es ist eines der wenigen erhaltenen Elemente dieses Forts. <br><b>Zustand:</b> teilweise erhalten / umgenutzt. <br><b>Lage:</b> Stadtteil Müngersdorf, in der Nähe des Grüngürtels (westlicher Teil von Köln)."
                //         },
                //         { img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg", alt: "Fort VI Deckstein", bold: "Fort VI Deckstein", text: "gehört zu den am besten erhaltenen Forts des Systems. Nach dem Verlust seiner militärischen Funktion wurde es teilweise in Wohn- und Gemeinschaftsnutzung umgewandelt. Heute befinden sich dort Wohnungen und ein Verein, der Innenhof wird gemeinschaftlich genutzt. <br><b>Zustand:</b> Wohnnutzung / angepasst. <br><b>Ort:</b> Deckstein, nahe Decksteiner Weiher (Westen Kölns)." },
                //         { bold: "Fort VII", text: "– nur Fragmente von Mauern und Befestigungen erhalten, der Großteil ist verloren. <br><b>Zustand:</b> Ruinen / Fragmente. <br><b>Ort:</b> Lindenthal, nahe Grüngürtel (Westen Kölns)." },
                //         { bold: "Fort VIII", text: "– nur minimale Reste erhalten, die Struktur ist kaum erkennbar. <br><b>Zustand:</b> teilweise verloren. <br><b>Ort:</b> Sülz, westlicher Sektor des Festungsrings." },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/009.jpg",
                //             alt: "Fort IX",
                //             bold: "Fort IX",
                //             text: "– teilweise erhaltenes Fort mit erkennbaren Ziegelbauten und Elementen der Verteidigungsstruktur. Ein Teil des Komplexes ist verloren oder im Gelände verborgen, jedoch sind die Hauptvolumen noch erkennbar. <br><b>Zustand:</b> teilweise erhalten / Fragmente. <br><b>Ort:</b> Stadtteil Zollstock, Südwesten Kölns."
                //         },
                //         { img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/010.jpg", alt: "Fort X", bold: "Fort X", text: "– eines der am besten erhaltenen Forts, teilweise umgebaut und heute öffentlich genutzt. Die ursprüngliche Struktur ist weiterhin sichtbar. <br><b>Zustand:</b> teilweise umgenutzt. <br><b>Ort:</b> Raderberg, Süden Kölns." },
                //         {
                //             img: "Germany/nrw/koln/koln-city/prussian_fortress_ring/011.jpg",
                //             alt: "Fort XI",
                //             bold: "Fort XI",
                //             text: "– erhaltenes Fort mit einzelnen Ziegelbauwerken und Fragmenten der Verteidigungsstruktur. Obwohl ein großer Teil des Komplexes verloren gegangen oder umgebaut wurde, sind Elemente der Festungsarchitektur im Gelände weiterhin gut erkennbar. <br><b>Zustand:</b> teilweise erhalten / Fragmente. <br><b>Ort:</b> Stadtteil Bayenthal / Marienburg, südlicher Sektor Kölns."
                //         },
                //         { bold: "Fort XII", text: "– eines der Forts im östlichen Sektor, teilweise erhalten und eingeschränkt genutzt. <br><b>Zustand:</b> teilweise erhalten / angepasst. <br><b>Ort:</b> Deutz, rechtsrheinisch (Osten Kölns)." }
                //     ]
                // },
                meta: {
                    title: "Preußischer Festungsring Köln – Festungen des 19. Jahrhunderts und Verteidigungssystem der Stadt",
                    description: "Der Preußische Festungsring Köln ist ein System aus 12 Festungen des 19. Jahrhunderts, die die Stadt umgaben. Entdecken Sie die Geschichte der Befestigungen, ihren heutigen Zustand und wo man erhaltene Anlagen, Parkflächen und umgenutzte Forts heute sehen kann.",
                    ogTitle: "Preußischer Festungsring Köln – eine Reise zu den Festungen des 19. Jahrhunderts",
                    ogDescription: "Entdecken Sie die Kölner Forts: vom bewohnten Fort VI Deckstein bis zu versteckten Anlagen im Grüngürtel. Die Geschichte des preußischen Verteidigungssystems und seine Spuren in der heutigen Stadt.",
                    keywords: "Preußischer Festungsring Köln, Festung Köln, Kölner Forts, Fort I Köln, Fort II Köln, Fort III Köln, Fort IV Köln, Fort V Köln, Fort VI Deckstein, Fort VII Köln, Fort VIII Köln, Fort IX Köln, Fort X Köln, Fort XI Köln, Fort XII Köln, Befestigungen Köln, Militärarchitektur Deutschland, Sehenswürdigkeiten Köln, historische Bauwerke Köln, Grüngürtel Köln",
                    ogImage: "Germany/nrw/koln/koln-city/prussian_fortress_system/006.jpg"
                }
            }
        }
    },
    {
        id: "fort_I_inner_koln",
        type: ["historical_building"], rating: "local",
        path: "fort_I_inner_koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
        hiddenFromList: true, showMore: true,
        map: "prussian_fortress_system_koln",
        fotoCard: "Germany/nrw/koln/koln-city/prussian_fortress_system/inner/001.jpg",
        coord: { lat: 50.91769, lng: 6.96764 },
        translations: {
            ru: {
                name: "Fort I (внутреннее крепостное кольцо)",
                short_description: "Fort I (внутреннее крепостное кольцо) – один из фортов внутреннего кольца прусской крепостной системы Кёльна. Состояние: частично сохранившееся / адаптированное.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Fort I (внутреннее крепостное кольцо)", text: " являлся частью внутреннего кольца прусских укреплений Кёльна, построенного в характерной для прусских укреплений XIX века фортификационной архитектуре вблизи прежней городской стены. Первые работы по созданию фортификационной системы начались в 1816 году, однако сам форт был реализован во втором этапе строительства между 1841 и 1847 годами по проекту Генриха Фердинанда Шуберта." },
                        { text: "Предшественником форта был Рейншанце (Рейнский редут), построенный в 1830 году. Он включал массивное тыльное укрепление, которое частично сохранилось до наших дней и часто ошибочно воспринимается как сам Форт I." },
                        { text: "Гарнизон форта насчитывал около 300-400 человек и был вооружён примерно 40 орудиями. Планировка предусматривала фланговую оборону соседних укреплений, а также контроль береговой линии Рейна." },
                        { text: "В 1882-1891 годах форт был интегрирован в в систему укреплений левого берега Рейна и получил почётное название «Наследственный великий герцог Павел Мекленбургский»." },
                        { text: "В 1911 году форт был выведен из состава военных укреплений, так как развитие артиллерии сделало его оборонительную функцию устаревшей." },
                        { text: "С начала XX века территория постепенно получила гражданское назначение: здесь размещались университетская столовая, военный мемориал, зенитные установки во время Второй мировой войны, налоговая служба, городское садоводство и позже молодёжный центр." },
                        { text: "Сегодня территория входит в состав зелёного пояса Кёльна и территории парка Friedenspark и используется как общественный парк с сохранившимися элементами укреплений, включая редут, капониры и оборонительные валы." },
                        { bold: "Состояние:", text: " частично сохранившееся / адаптированное." },
                        { bold: "Где:", text: " район Neustadt-Süd, Friedenspark (южная часть Кёльна)." }
                    ]
                },
                construction_period: "1841–1847 (на месте редута 1830 года)",
                meta: {
                    title: "Fort I (внутреннее крепостное кольцо Кёльна)",
                    description: "Fort I — один из 12 фортов внутреннего крепостного кольца Кёльна, построенный в 1841–1847 годах на месте редута 1830 года в составе прусской оборонительной системы на Рейне. Состояние: частично сохранившееся, адаптированное.",
                    ogTitle: "Fort I (внутреннее крепостное кольцо Кёльна)",
                    ogDescription: "Fort I — исторический форт внутреннего кольца укреплений Кёльна, возведённый в 1841–1847 годах на месте более раннего редута. Часть прусской крепостной системы XIX века.",
                    keywords: "Форт I Кёльн, внутреннее кольцо Кёльна, прусские укрепления Кёльна, крепость Кёльн, форты Кёльна, Fort I Кёльн история, крепостное кольцо Кёльна",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_system/inner/001.jpg"
                }
            },
            ua: {
                name: "Fort I (внутрішнє фортифікаційне кільце)",
                short_description: "Fort I (внутрішнє фортифікаційне кільце) – один із фортів внутрішнього кільця прусської фортифікаційної системи Кельна. Стан: частково збережений / адаптований.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Fort I (внутрішнє фортифікаційне кільце)", text: " був частиною внутрішнього кільця прусських укріплень Кельна, збудованого у характерній для прусських укріплень XIX століття фортифікаційній архітектурі поблизу колишнього міського муру. Перші роботи зі створення фортифікаційної системи розпочалися у 1816 році, однак сам форт був реалізований на другому етапі будівництва між 1841 і 1847 роками за проєктом Генріха Фердинанда Шуберта." },
                        { text: "Попередником форту був Рейншанце (Рейнський редут), збудований у 1830 році. Він включав масивне тилове укріплення, яке частково збереглося до наших днів і часто помилково сприймається як сам Форт I." },
                        { text: "Гарнізон форту налічував близько 300–400 осіб і був озброєний приблизно 40 гарматами. Планування передбачало флангову оборону сусідніх укріплень, а також контроль берегової лінії Рейну." },
                        { text: "У 1882–1891 роках форт був інтегрований у систему укріплень лівого берега Рейну та отримав почесну назву «Спадковий великий герцог Павло Мекленбурзький»." },
                        { text: "У 1911 році форт був виведений зі складу військових укріплень, оскільки розвиток артилерії зробив його оборонну функцію застарілою." },
                        { text: "З початку XX століття територія поступово отримала цивільне призначення: тут розміщувалися університетська їдальня, військовий меморіал, зенітні установки під час Другої світової війни, податкова служба, міське садівництво та пізніше молодіжний центр." },
                        { text: "Сьогодні територія входить до складу зеленого поясу Кельна та території парку Friedenspark і використовується як громадський парк із збереженими елементами укріплень, включаючи редут, капоніри та оборонні вали." },
                        { bold: "Стан:", text: " частково збережений / адаптований." },
                        { bold: "Де:", text: " район Neustadt-Süd, Friedenspark (південна частина Кельна)." }
                    ]
                },
                construction_period: "1841–1847 (на місці редута 1830 року)",
                meta: {
                    title: "Fort I (внутрішнє фортифікаційне кільце Кельна)",
                    description: "Fort I — один із 12 фортів внутрішнього фортифікаційного кільця Кельна, збудований у 1841–1847 роках на місці редута 1830 року в складі прусської оборонної системи на Рейні. Стан: частково збережений, адаптований.",
                    ogTitle: "Fort I внутрішнє фортифікаційне кільце Кельна)",
                    ogDescription: "Fort I — історичний форт внутрішнього кільця укріплень Кельна, зведений у 1841–1847 роках на місці більш раннього редута. Частина прусської фортифікаційної системи XIX століття.",
                    keywords: "Форт I Кельн, внутрішнє кільце Кельна, прусські укріплення Кельна, фортеця Кельн, форти Кельна, Fort I історія, фортифікаційне кільце Кельна",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_system/inner/001.jpg"
                }
            },
            de: {
                name: "Fort I (innerer Festungsring)",
                short_description: "Fort I (innerer Festungsring) – eines der Forts des inneren Rings des preußischen Festungssystems von Köln. Zustand: teilweise erhalten / umgenutzt.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Fort I (innerer Festungsring)", text: " war Teil des inneren Rings der preußischen Befestigungen von Köln, errichtet in der für die preußischen Festungsanlagen des 19. Jahrhunderts typischen Befestigungsarchitektur in der Nähe der ehemaligen Stadtmauer. Die ersten Arbeiten zur Errichtung des Festungssystems begannen im Jahr 1816, das Fort selbst wurde jedoch in der zweiten Bauphase zwischen 1841 und 1847 nach einem Entwurf von Heinrich Ferdinand Schubert ausgeführt." },
                        { text: "Vorgänger des Forts war die Rhein-Schanze (Rheinischer Reduit), die im Jahr 1830 errichtet wurde. Sie umfasste ein massives rückwärtiges Befestigungselement, das teilweise bis heute erhalten ist und häufig fälschlicherweise als das eigentliche Fort I angesehen wird." },
                        { text: "Die Garnison des Forts umfasste etwa 300–400 Mann und war mit rund 40 Geschützen ausgestattet. Die Anlage war so konzipiert, dass sie die Flankierung benachbarter Befestigungen sowie die Kontrolle des Rheinufers ermöglichte." },
                        { text: "In den Jahren 1882–1891 wurde das Fort in das Befestigungssystem des linken Rheinufers integriert und erhielt den Ehrennamen „Erbgroßherzog Paul von Mecklenburg“." },
                        { text: "Im Jahr 1911 wurde das Fort aus dem militärischen Verband entlassen, da die Entwicklung der Artillerie seine Verteidigungsfunktion überholt hatte." },
                        { text: "Seit Beginn des 20. Jahrhunderts erhielt das Gelände schrittweise eine zivile Nutzung: Es befanden sich dort unter anderem eine Mensa, ein Kriegerdenkmal, Flugabwehrstellungen während des Zweiten Weltkriegs, eine Steuerbehörde, eine städtische Gärtnerei und später ein Jugendzentrum." },
                        { text: "Heute gehört das Gelände zum Kölner Grüngürtel sowie zum Friedenspark und wird als öffentlicher Park genutzt, in dem Teile der Befestigungsanlagen wie das Reduit, Kaponniere und Wälle erhalten geblieben sind." },
                        { bold: "Zustand:", text: " teilweise erhalten / umgenutzt." },
                        { bold: "Lage:", text: " Stadtteil Neustadt-Süd, Friedenspark (südlicher Teil von Köln)." }
                    ]
                },
                construction_period: "1841–1847 (auf dem Standort der Schanze von 1830)",
                meta: {
                    title: "Fort I (innerer Festungsring Köln)",
                    description: "Fort I — eines der 12 Forts des inneren Festungsrings von Köln, errichtet in den Jahren 1841–1847 auf dem Standort einer Schanze von 1830 als Teil des preußischen Festungssystems am Rhein. Zustand: teilweise erhalten, umgenutzt.",
                    ogTitle: "Fort I (innerer Festungsring Köln)",
                    ogDescription: "Fort I — historisches Fort des inneren Befestigungsrings von Köln, errichtet 1841–1847 auf dem Standort einer älteren Schanze. Teil des preußischen Festungssystems des 19. Jahrhunderts.",
                    keywords: "Fort I Köln, innerer Festungsring Köln, preußische Befestigungen Köln, Festung Köln, Kölner Forts, Fort I Geschichte, Festungssystem Köln",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_system/inner/001.jpg"
                }
            },
        }
    },
    {
        id: "fort_II_inner_koln",
        type: ["historical_building"], rating: "local",
        path: "fort_II_inner_koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
        hiddenFromList: true, showMore: true,
        map: "prussian_fortress_system_koln",
        coord: { lat: 50.91404, lng: 6.95909 },
        translations: {
            ru: {
                name: "Fort II (внутреннее крепостное кольцо)",
                short_description: "Fort II (внутреннее крепостное кольцо) – один из фортов внутреннего кольца прусской крепостной системы Кёльна. Состояние: утраченный.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Fort II (внутреннее крепостное кольцо)", text: " являлся частью внутреннего прусского оборонительного кольца Кёльна, построенного в начале XIX века в характерной для того времени фортификационной архитектуре примерно в 500 метрах от городской стены. Строительство форта началось в 1816 году и было завершено в декабре 1821 года, что относит его к первой строительной серии укреплений." },
                        { text: "В отличие от фортов последующих этапов, Fort II получил не только номер, но и почётное имя «Великий князь Николай Российский», утверждённое королём Фридрихом Вильгельмом III." },
                        { text: "Форт имел полигональную форму примерно 100×100 метров и был окружён сухим рвом глубиной около 4 метров и шириной около 10 метров. Внутри располагались казематированные помещения для гарнизона и боеприпасов, редут, капониры для фланговой обороны и артиллерийские позиции." },
                        { text: "Гарнизон форта насчитывал около 250 человек. Его планировка включала элементы круговой обороны и автономного функционирования в условиях осады." },
                        { text: "Fort II располагался в районе современного грузового вокзала Bonntor в южной части Кёльна. Его расположение было более удалённым от городской стены по сравнению с другими фортами внутреннего кольца, что нарушало общую симметрию оборонительной системы." },
                        { text: "В связи с этим он не был включён в последующие этапы модернизации внутреннего кольца укреплений." },
                        { text: "Военное использование форта завершилось в 1880-х годах, а окончательный снос был произведён в середине 1930-х годов. В настоящее время на местности не сохранилось видимых следов укрепления." },
                        { bold: "Состояние:", text: " утраченный." },
                        { bold: "Где:", text: " район Bayenthal, южная часть Кёльна." }
                    ]
                },
                construction_period: "1816–1821",
                meta: {
                    title: "Fort II (внутреннее крепостное кольцо Кёльна)",
                    description: "Fort II – один из ранних фортов внутреннего крепостного кольца Кёльна, построенный в 1816–1821 годах в составе прусской оборонительной системы. Получил почётное имя «Великий князь Николай Российский». В настоящее время утраченный.",
                    ogTitle: "Fort II (внутреннее крепостное кольцо Кёльна)",
                    ogDescription: "Fort II – исторический форт внутреннего кольца укреплений Кёльна, построенный в 1816–1821 годах. Один из первых объектов прусской крепостной системы XIX века. Утраченный.",
                    keywords: "Форт II Кёльн, Fort II Köln, внутреннее крепостное кольцо Кёльна, прусская крепость Кёльна, Fort II история, Festung Köln, утраченные форты Кёльна, Великий князь Николай Российский",
                    ogImage: ""
                }
            },
            ua: {
                name: "Fort II (внутрішнє фортифікаційне кільце)",
                short_description: "Fort II (внутрішнє фортифікаційне кільце) – один із фортів внутрішнього кільця прусської фортифікаційної системи Кельна. Стан: втрачений.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Fort II (внутрішнє фортифікаційне кільце)", text: " був частиною внутрішнього прусського оборонного кільця Кельна, збудованого на початку XIX століття у характерній для того часу фортифікаційній архітектурі приблизно за 500 метрів від міського муру. Будівництво форту розпочалося у 1816 році і було завершене у грудні 1821 року, що відносить його до першої будівельної серії укріплень." },
                        { text: "На відміну від фортів наступних етапів, Fort II отримав не лише номер, але й почесну назву «Великий князь Микола Російський», затверджену королем Фрідріхом Вільгельмом III." },
                        { text: "Форт мав полігональну форму приблизно 100×100 метрів і був оточений сухим ровом глибиною близько 4 метрів та шириною близько 10 метрів. Усередині розташовувалися казематовані приміщення для гарнізону та боєприпасів, редут, капоніри для флангової оборони та артилерійські позиції." },
                        { text: "Гарнізон форту налічував близько 250 осіб. Його планування передбачало елементи кругової оборони та автономного функціонування в умовах облоги." },
                        { text: "Fort II розташовувався в районі сучасного вантажного вокзалу Bonntor у південній частині Кельна. Його розташування було більш віддаленим від міського муру порівняно з іншими фортами внутрішнього кільця, що порушувало загальну симетрію оборонної системи." },
                        { text: "У зв’язку з цим він не був включений до наступних етапів модернізації внутрішнього фортифікаційного кільця." },
                        { text: "Військове використання форту завершилося у 1880-х роках, а остаточний демонтаж був здійснений у середині 1930-х років. На сьогодні на місцевості не збереглося видимих слідів укріплення." },
                        { bold: "Стан:", text: " втрачений." },
                        { bold: "Де:", text: " район Bayenthal, південна частина Кельна." }
                    ]
                },
                construction_period: "1816–1821",
                meta: {
                    title: "Fort II (внутрішнє фортифікаційне кільце Кельна)",
                    description: "Fort II – один із ранніх фортів внутрішнього фортифікаційного кільця Кельна, збудований у 1816–1821 роках у складі прусської оборонної системи. Отримав почесну назву «Великий князь Микола Російський». Нині втрачений.",
                    ogTitle: "Fort II (внутрішнє фортифікаційне кільце Кельна)",
                    ogDescription: "Fort II – історичний форт внутрішнього кільця укріплень Кельна, збудований у 1816–1821 роках. Один із перших об’єктів прусської фортифікаційної системи XIX століття. Втрачений.",
                    keywords: "Форт II Кельн, Fort II Köln, внутрішнє фортифікаційне кільце Кельна, прусські укріплення Кельна, Fort II історія, Festung Köln, втрачені форти Кельна, Великий князь Микола Російський",
                    ogImage: ""
                }
            },
            de: {
                name: "Fort II (innerer Festungsring)",
                short_description: "Fort II (innerer Festungsring) – eines der Forts des inneren Rings des preußischen Festungssystems von Köln. Zustand: verloren.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Fort II (innerer Festungsring)", text: " war Teil des inneren preußischen Verteidigungsrings von Köln, der zu Beginn des 19. Jahrhunderts in der für diese Zeit typischen Festungsarchitektur etwa 500 Meter von der Stadtmauer entfernt errichtet wurde. Der Bau des Forts begann im Jahr 1816 und wurde im Dezember 1821 abgeschlossen, wodurch es zur ersten Bauphase der Befestigungsanlagen zählt." },
                        { text: "Im Gegensatz zu später errichteten Forts erhielt Fort II nicht nur eine Nummer, sondern auch den Ehrennamen „Großfürst Nikolai von Russland“, der von König Friedrich Wilhelm III. bestätigt wurde." },
                        { text: "Das Fort hatte eine polygonale Form von etwa 100 × 100 Metern und war von einem trockenen Graben mit einer Tiefe von etwa 4 Metern und einer Breite von etwa 10 Metern umgeben. Innerhalb der Anlage befanden sich kasemattierte Räume für die Garnison und Munition, ein Reduit, Kaponnieren zur Flankenverteidigung sowie Artilleriestellungen." },
                        { text: "Die Garnison des Forts umfasste etwa 250 Mann. Die Anlage war auf eine Rundumverteidigung sowie ein autonomes Verhalten während einer Belagerung ausgelegt." },
                        { text: "Fort II befand sich im Bereich des heutigen Güterbahnhofs Bonntor im südlichen Teil von Köln. Seine Lage war im Vergleich zu anderen Forts des inneren Rings weiter von der Stadtmauer entfernt, was die Symmetrie des Verteidigungssystems störte." },
                        { text: "Aus diesem Grund wurde es nicht in spätere Modernisierungsmaßnahmen des inneren Festungsrings einbezogen." },
                        { text: "Die militärische Nutzung des Forts endete in den 1880er Jahren, und der endgültige Abbruch erfolgte Mitte der 1930er Jahre. Heute sind keine sichtbaren Reste der Anlage erhalten." },
                        { bold: "Zustand:", text: " verloren." },
                        { bold: "Lage:", text: " Stadtteil Bayenthal, südlicher Teil von Köln." }
                    ]
                },
                construction_period: "1816–1821",
                meta: {
                    title: "Fort II (innerer Festungsring Köln)",
                    description: "Fort II — eines der frühen Forts des inneren Festungsrings von Köln, erbaut 1816–1821 im Rahmen des preußischen Verteidigungssystems. Erhielt den Ehrennamen „Großfürst Nikolai von Russland“. Heute verloren.",
                    ogTitle: "Fort II (innerer Festungsring Köln)",
                    ogDescription: "Fort II — historisches Fort des inneren Befestigungsrings von Köln, errichtet 1816–1821. Eines der ersten Objekte des preußischen Festungssystems des 19. Jahrhunderts. Verloren.",
                    keywords: "Fort II Köln, innerer Festungsring Köln, preußische Befestigungen Köln, Festung Köln, Fort II Geschichte, verlorene Forts Köln, Großfürst Nikolai von Russland",
                    ogImage: ""
                }
            }
        }
    },
    //     {
    //         id: "Fort_III_koln",
    //         type: ["historical_building"], rating: "local",
    //         path: "prussian_fortress_ring_koln",
    //         countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
    //         hiddenFromList: true, map: "prussian_fortress_ring_koln",
    //         coord: { lat: 50.91827, lng: 6.95098 },
    //         translations: {
    //             ru: {
    //                 name: "Fort III",
    //                 meta: {
    //                     title: "Fort III – часть Прусского крепостного кольца Кёльна. Состояние: утраченный.",
    //                     ogImage: ""
    //                 }
    //             },
    //             ua: {
    //                 name: "Форт III",
    //                 meta: {
    //                     title: "Форт III – частина прусського фортифікаційного кільця Кельна. Стан: втрачений.",
    //                     ogImage: ""
    //                 }
    //             },
    //             de: {
    //                 name: "Fort III",
    //                 meta: {
    //                     title: "Fort III – Teil des preußischen Festungsrings von Köln. Zustand: verloren.",
    //                     ogImage: ""
    //                 }
    //             },
    //         }
    //     },
    //     {
    //         id: "Fort_IV_koln",
    //         type: ["historical_building"], rating: "local",
    //         path: "prussian_fortress_ring_koln",
    //         countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
    //         hiddenFromList: true, map: "prussian_fortress_ring_koln",
    //         coord: { lat: 50.97152, lng: 6.86036 },
    //         translations: {
    //             ru: {
    //                 name: "Fort IV",
    //                 meta: {
    //                     title: "Fort IV – часть Прусского крепостного кольца Кёльна. Состояние: частично сохранившееся / адаптированное.",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/004.jpg"
    //                 }
    //             },
    //             ua: {
    //                 name: "Форт IV",
    //                 meta: {
    //                     title: "Форт IV – частина прусського фортифікаційного кільця Кельна. Стан: частково збережений / адаптований.",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/004.jpg"
    //                 }
    //             },
    //             de: {
    //                 name: "Fort IV",
    //                 meta: {
    //                     title: "Fort IV – Teil des preußischen Festungsrings von Köln. Zustand: teilweise erhalten / umgenutzt",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/004.jpg"
    //                 }
    //             },
    //         }
    //     },
    //     {
    //         id: "Fort_V_koln",
    //         type: ["historical_building"], rating: "local",
    //         path: "prussian_fortress_ring_koln",
    //         countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
    //         hiddenFromList: true, map: "prussian_fortress_ring_koln",
    //         coord: { lat: 50.9277, lng: 6.93609 },
    //         translations: {
    //             ru: {
    //                 name: "Fort V",
    //                 meta: {
    //                     title: "Fort V – часть Прусского крепостного кольца Кёльна. Состояние: частично сохранившееся / адаптированное.",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/005.jpg"
    //                 }
    //             },
    //             ua: {
    //                 name: "Форт V",
    //                 meta: {
    //                     title: "Форт V – частина прусського фортифікаційного кільця Кельна. Стан: частково збережений / адаптований.",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/005.jpg"
    //                 }
    //             },
    //             de: {
    //                 name: "Fort V",
    //                 meta: {
    //                     title: "Fort V – Teil des preußischen Festungsrings von Köln. Zustand: teilweise erhalten / umgenutzt",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/005.jpg"
    //                 }
    //             },
    //         }
    //     },
    //         {
    //         id: "Fort_VI_koln",
    //         type: ["historical_building"], rating: "local",
    //         path: "prussian_fortress_ring_koln",
    //         countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
    //         hiddenFromList: true, map: "prussian_fortress_ring_koln",
    //         coord: { lat: 50.93542, lng: 6.93064 },
    //         translations: {
    //             ru: {
    //                 name: "Fort VI",
    //                 meta: {
    //                     title: "Fort VI – часть Прусского крепостного кольца Кёльна. Состояние: частично сохранившееся / адаптированное.",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg"
    //                 }
    //             },
    //             ua: {
    //                 name: "Форт VI",
    //                 meta: {
    //                     title: "Форт VI – частина прусського фортифікаційного кільця Кельна. Стан: частково збережений / адаптований.",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg"
    //                 }
    //             },
    //             de: {
    //                 name: "Fort VI",
    //                 meta: {
    //                     title: "Fort VI – Teil des preußischen Festungsrings von Köln. Zustand: teilweise erhalten / umgenutzt",
    //                     ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_ring/006.jpg"
    //                 }
    //             },
    //         }
    //     },
    {
        id: "fort_VI_outer_koln",
        type: ["historical_building"], rating: "local",
        path: "fort_VI_outer_koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city", cityPath: "koln",
        hiddenFromList: true, showMore: true,
        map: "prussian_fortress_system_koln",
        fotoCard: "Germany/nrw/koln/koln-city/prussian_fortress_system/outer/006.jpg",
        coord: { lat: 50.91453, lng: 6.89082 },
        translations: {
            ru: {
                name: "Fort VI (внешнее крепостное кольцо)",
                short_description: "Fort VI (внешнее крепостное кольцо) – один из фортов внешнего кольца прусской крепостной системы Кёльна. Состояние: частично сохранившееся / адаптированное.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Fort VI (внешнее крепостное кольцо)", text: " являлся частью внешнего кольца прусских укреплений Кёльна, сформированного во второй половине XIX века в связи с развитием артиллерии и необходимостью вынести линию обороны на значительное расстояние от города." },
                        { text: "Внешний крепостной пояс был спроектирован в 1872 году примерно в шести километрах от прежней линии обороны. В 1873 году началось строительство Fort VI, который стал первым сооружением внешнего кольца. Работы были завершены в 1876 году." },
                        { text: "Форт был построен как артиллерийский и выполнен преимущественно из кирпича с земляными укреплениями. Он был рассчитан на гарнизон до 900 человек и вооружён примерно 16 орудиями различного калибра. Размеры сооружения составляли около 285 × 165 метров, толщина стен достигала от одного до трёх метров." },
                        { text: "Со временем форт подвергался модернизации и частично был переоборудован для использования в качестве пехотного укрепления." },
                        { text: "В 1921 году, в соответствии с условиями Версальского договора, Fort VI был частично демонтирован. До настоящего времени сохранились казармы тыльной части (Kehlkaserne) и отдельные элементы рва." },
                        { text: "В дальнейшем территория использовалась для различных гражданских нужд: в казармах размещались жилые помещения, обсуждалось создание лесной школы с спортивными площадками, а во время Второй мировой войны здесь находились временные убежища для гражданского населения." },
                        { text: "С 1970-х годов здания использовались городскими службами, спортивными организациями, а также творческими коллективами. В настоящее время территория преобразована в парковую зону с элементами ландшафтного дизайна, включая каменный сад в северной части рва." },
                        { text: "Сегодня Fort VI входит в состав внешнего зелёного пояса Кёльна (Grüngürtel), созданного в 1920-х годах по инициативе обербургомистра Конрада Аденауэра, и используется как общественное пространство." },
                        { bold: "Состояние:", text: " частично сохранившееся / адаптированное." },
                        { bold: "Где:", text: " район Deckstein (западная часть Кёльна)." }
                    ]
                },
                construction_period: "1873–1876",
                meta: {
                    title: "Fort VI (внешнее крепостное кольцо Кёльна)",
                    description: "Fort VI – один из фортов внешнего крепостного кольца Кёльна, построенный в 1873–1876 годах как первое сооружение внешнего прусского оборонительного пояса. Рассчитан на гарнизон до 900 человек. Состояние: частично сохранившееся, адаптированное.",
                    ogTitle: "Fort VI (внешнее крепостное кольцо Кёльна)",
                    ogDescription: "Fort VI – исторический артиллерийский форт внешнего кольца укреплений Кёльна, возведённый в 1873–1876 годах. Один из ключевых объектов прусской крепостной системы XIX века.",
                    keywords: "Форт VI Кёльн, Fort VI Köln, внешнее крепостное кольцо Кёльна, прусская крепость Кёльна, форты Кёльна, Festung Köln, Fort Deckstein, Fort VI история",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_system/outer/006.jpg"
                }
            },
            ua: {
                name: "Fort VI (зовнішнє фортифікаційне кільце)",
                short_description: "Fort VI (зовнішнє фортифікаційне кільце) – один із фортів зовнішнього кільця прусської фортифікаційної системи Кельна. Стан: частково збережений / адаптований.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Fort VI (зовнішнє фортифікаційне кільце)", text: " був частиною зовнішнього кільця прусських укріплень Кельна, сформованого у другій половині XIX століття у зв’язку з розвитком артилерії та необхідністю винести лінію оборони на значну відстань від міста." },
                        { text: "Зовнішній фортифікаційний пояс був спроєктований у 1872 році приблизно за шість кілометрів від попередньої лінії оборони. У 1873 році розпочалося будівництво Fort VI, який став першим об’єктом зовнішнього кільця. Роботи були завершені у 1876 році." },
                        { text: "Форт був збудований як артилерійський і виконаний переважно з цегли із земляними укріпленнями. Він був розрахований на гарнізон до 900 осіб і озброєний приблизно 16 гарматами різного калібру. Розміри споруди становили близько 285 × 165 метрів, товщина стін сягала від одного до трьох метрів." },
                        { text: "З часом форт зазнав модернізацій і частково був переобладнаний для використання як піхотне укріплення." },
                        { text: "У 1921 році, відповідно до умов Версальського договору, Fort VI був частково демонтований. До сьогодні збереглися казарми тилової частини (Kehlkaserne) та окремі елементи рову." },
                        { text: "Надалі територія використовувалася для різних цивільних потреб: у казармах облаштовували житлові приміщення, обговорювалося створення лісової школи зі спортивними майданчиками, а під час Другої світової війни тут розміщувалися тимчасові укриття для цивільного населення." },
                        { text: "З 1970-х років будівлі використовувалися міськими службами, спортивними організаціями, а також творчими колективами. Нині територія перетворена на паркову зону з елементами ландшафтного дизайну, включаючи кам’яний сад у північній частині рову." },
                        { text: "Сьогодні Fort VI входить до складу зовнішнього зеленого поясу Кельна (Grüngürtel), створеного у 1920-х роках за ініціативою обербургомістра Конрада Аденауера, і використовується як громадський простір." },
                        { bold: "Стан:", text: " частково збережений / адаптований." },
                        { bold: "Де:", text: " район Deckstein (західна частина Кельна)." }
                    ]
                },
                construction_period: "1873–1876",
                meta: {
                    title: "Fort VI (зовнішнє фортифікаційне кільце Кельна)",
                    description: "Fort VI — один із фортів зовнішнього фортифікаційного кільця Кельна, збудований у 1873–1876 роках як перший об’єкт зовнішнього прусського оборонного поясу. Розрахований на гарнізон до 900 осіб. Стан: частково збережений, адаптований.",
                    ogTitle: "Fort VI (зовнішнє фортифікаційне кільце Кельна)",
                    ogDescription: "Fort VI — історичний артилерійський форт зовнішнього кільця укріплень Кельна, зведений у 1873–1876 роках. Один із ключових об’єктів прусської фортифікаційної системи XIX століття.",
                    keywords: "Форт VI Кельн, зовнішнє кільце Кельна, прусські укріплення Кельна, фортеця Кельн, форти Кельна, Fort VI історія, фортифікаційне кільце Кельна",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_system/outer/006.jpg"
                }
            },
            de: {
                name: "Fort VI (äußerer Festungsring)",
                short_description: "Fort VI (äußerer Festungsring) – eines der Forts des äußeren Rings des preußischen Festungssystems von Köln. Zustand: teilweise erhalten / umgenutzt.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Fort VI (äußerer Festungsring)", text: " war Teil des äußeren Rings der preußischen Befestigungen von Köln, der in der zweiten Hälfte des 19. Jahrhunderts infolge der Weiterentwicklung der Artillerie und der Notwendigkeit, die Verteidigungslinie weiter vom Stadtgebiet entfernt anzulegen, geschaffen wurde." },
                        { text: "Der äußere Festungsgürtel wurde im Jahr 1872 in einer Entfernung von etwa sechs Kilometern von der bisherigen Verteidigungslinie geplant. Im Jahr 1873 begann der Bau von Fort VI, das als erstes Bauwerk des äußeren Rings errichtet wurde. Die Arbeiten wurden 1876 abgeschlossen." },
                        { text: "Das Fort wurde als Artilleriefort konzipiert und überwiegend in Ziegelbauweise mit Erdaufschüttungen errichtet. Es war für eine Besatzung von bis zu 900 Mann ausgelegt und mit etwa 16 Geschützen unterschiedlicher Kaliber ausgestattet. Die Anlage maß ungefähr 285 × 165 Meter, die Mauerstärken betrugen zwischen einem und drei Metern." },
                        { text: "Im Laufe der Zeit wurde das Fort modernisiert und teilweise zu einem Infanteriefort umgebaut." },
                        { text: "Im Jahr 1921 wurde Fort VI gemäß den Bestimmungen des Versailler Vertrags teilweise geschleift. Bis heute sind die Kehlkaserne sowie Teile des Grabensystems erhalten geblieben." },
                        { text: "In der Folgezeit wurde das Gelände unterschiedlich zivil genutzt: In den Kasernen wurden zeitweise Wohnungen eingerichtet, die Einrichtung einer Waldschule mit Sportanlagen wurde diskutiert, und während des Zweiten Weltkriegs dienten die Anlagen als Notunterkünfte für die Bevölkerung." },
                        { text: "Seit den 1970er Jahren wurden die Gebäude von städtischen Einrichtungen, Sportvereinen sowie von Künstlern genutzt. Heute ist das Gelände in eine Parkanlage mit landschaftsgestalterischen Elementen umgewandelt, darunter ein Felsengarten im nördlichen Grabenbereich." },
                        { text: "Heute ist Fort VI Teil des äußeren Kölner Grüngürtels, der in den 1920er Jahren auf Initiative des Oberbürgermeisters Konrad Adenauer angelegt wurde, und wird als öffentlicher Raum genutzt." },
                        { bold: "Zustand:", text: " teilweise erhalten / umgenutzt." },
                        { bold: "Lage:", text: " Stadtteil Deckstein (westlicher Teil von Köln)." }
                    ]
                },
                construction_period: "1873–1876",
                meta: {
                    title: "Fort VI (äußerer Festungsring Köln)",
                    description: "Fort VI — eines der Forts des äußeren Festungsrings von Köln, errichtet in den Jahren 1873–1876 als erstes Bauwerk des äußeren preußischen Verteidigungsgürtels. Ausgelegt für eine Besatzung von bis zu 900 Mann. Zustand: teilweise erhalten, umgenutzt.",
                    ogTitle: "Fort VI (äußerer Festungsring Köln)",
                    ogDescription: "Fort VI — historisches Artilleriefort des äußeren Befestigungsrings von Köln, erbaut 1873–1876. Einer der bedeutenden Bestandteile des preußischen Festungssystems des 19. Jahrhunderts.",
                    keywords: "Fort VI Köln, äußerer Festungsring Köln, preußische Befestigungen Köln, Festung Köln, Kölner Forts, Fort VI Geschichte, Festungssystem Köln",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/prussian_fortress_system/outer/006.jpg"
                }
            }
        }
    },

    // край аахен
    // моншау
    {
        id: "tuchmacherbrunnen_monschau",
        type: ["monument_or_fountain"], rating: "local",
        path: "tuchmacherbrunnen_monschau",
        countryPath: "germany", regionPath: "nrw", districtPath: "koln", cityPath: "monschau",
        hiddenFromList: true, showMore: true,
        fotoCard: "Germany/nrw/koln/Aachen/monschau/tuchmacherbrunnen/001.jpg",
        coord: { lat: 50.55492, lng: 6.24160 },
        translations: {
            ru: {
                name: "Фонтан ткачей в Моншау",
                location: "Моншау, Германия",
                short_description: "Фонтан ткачей – небольшой тематический фонтан в историческом центре Моншау. Фонтан посвящён традициям ткачества и текстильному прошлому города. Скульптурная композиция показывает ремесленный труд, благодаря которому Моншау стал известным центром производства сукна в XVIII веке. Сегодня фонтан – атмосферный элемент старого города и интересная остановка во время прогулки.",
                full_description: {
                    title: "Описание и история",
                    items: [
                        { bold: "Фонтан ткачей в Моншау (Tuchmacherbrunnen Monschau)", text: "– небольшой тематический фонтан в историческом центре Моншау, отражающий текстильное прошлое города. Он расположен среди фахверковых домов и гармонично вписывается в атмосферу старого города." },
                        { text: "Композиция фонтана посвящена ремеслу ткачества: скульптурные элементы показывают процесс изготовления тканей и труд ремесленников, благодаря которым Моншау в XVIII веке стал известным центром производства сукна." },
                        { text: "Фонтан символизирует промышленную историю города и не является музейной экспозицией. Сегодня это атмосферный элемент старого города и интересная остановка во время прогулки." },
                        { bold: "История", text: "В XVIII веке Моншау переживал экономический расцвет благодаря текстильной промышленности. Производство сукна стало основой благосостояния города, а местные фабриканты и ткачи играли ключевую роль в его развитии." },
                        { text: "Особо известна деятельность семьи Шайблер, которая превратила Моншау в один из значимых центров текстильной индустрии региона." },
                        { text: "Фонтан был создан как символ уважения к этому периоду и людям, чьим трудом формировалась экономика города. Он остаётся визуальным напоминанием о ремесленном прошлом Моншау." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { text: "Фонтан тематически связан с промышленной историей города, а не с религией или политикой, что редкость для старых городов Германии." },
                        { text: "Композиция показывает сцены ручного ткачества, отражая работу ремесленников XVIII века." },
                        { text: "Предположительно, фонтан был установлен в XX веке в рамках благоустройства исторического центра Моншау." }
                    ]
                },
                meta: {
                    title: "Фонтан ткачей в Моншау – текстильная история",
                    description: "Небольшой фонтан в Моншау, символ текстильного прошлого города.",
                    ogTitle: "Фонтан ткачей в Моншау – Tuchmacherbrunnen",
                    ogDescription: "Исторический фонтан в Моншау, посвящённый ткачеству и текстильной индустрии города.",
                    keywords: "моншау достопримечательности, фонтан ткачей, германия, текстильная история, суконное производство, что посмотреть моншау, старый город моншау, достопримечательности германии, туризм моншау",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Aachen/monschau/tuchmacherbrunnen/001.jpg"
                }
            },
            ua: {
                name: "Фонтан ткачів у Моншау",
                location: "Моншау, Німеччина",
                short_description: "Фонтан ткачів – невеликий тематичний фонтан у історичному центрі Моншау. Фонтан присвячений традиціям ткацтва та текстильному минулому міста. Скульптурна композиція показує ремісничу працю, завдяки якій Моншау став відомим центром виробництва сукна у XVIII столітті. Сьогодні фонтан є атмосферним елементом старого міста та цікавою зупинкою під час прогулянки.",
                full_description: {
                    title: "Опис та історія",
                    items: [
                        { bold: "Фонтан ткачів у Моншау (Tuchmacherbrunnen Monschau)", text: "– невеликий тематичний фонтан у історичному центрі Моншау, що відображає текстильне минуле міста. Він розташований серед фахверкових будинків та гармонійно вписується в атмосферу старого міста." },
                        { text: "Композиція фонтану присвячена ремеслу ткацтва: скульптурні елементи показують процес виготовлення тканин та працю ремісників, завдяки яким Моншау у XVIII столітті став відомим центром виробництва сукна." },
                        { text: "Фонтан символізує промислову історію міста і не є музейною експозицією. Сьогодні він слугує атмосферним елементом старого міста та цікавою зупинкою під час прогулянки." },
                        { bold: "Історія", text: "У XVIII столітті Моншау переживав економічний розквіт завдяки текстильній промисловості. Виробництво сукна стало основою добробуту міста, а місцеві фабриканти та ткачі відігравали ключову роль у його розвитку." },
                        { text: "Особливо відома діяльність родини Шайблер, яка перетворила Моншау на один із важливих центрів текстильної індустрії регіону." },
                        { text: "Фонтан було створено як символ пошани до цього періоду та людей, чиєю працею формувалася економіка міста. Він залишається візуальним нагадуванням про ремісниче минуле Моншау." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { text: "Фонтан тематично пов'язаний із промисловою історією міста, а не з релігією чи політикою, що є рідкістю для старих міст Німеччини." },
                        { text: "Композиція показує сцени ручного ткацтва, відображаючи працю ремісників XVIII століття." },
                        { text: "Ймовірно, фонтан було встановлено у XX столітті в рамках благоустрою історичного центру Моншау. (Факт не перевірено)" }
                    ]
                },
                meta: {
                    title: "Фонтан ткачів у Моншау – текстильна історія",
                    description: "Невеликий фонтан у Моншау, символ текстильного минулого міста.",
                    ogTitle: "Фонтан ткачів у Моншау – Tuchmacherbrunnen",
                    ogDescription: "Історичний фонтан у Моншау, присвячений ткацтву та текстильній індустрії міста.",
                    keywords: "моншау визначні місця, фонтан ткачів, німеччина, текстильна історія, виробництво сукна, що подивитися моншау, старе місто моншау, визначні місця німеччини, туризм моншау",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Aachen/monschau/tuchmacherbrunnen/001.jpg"
                }
            },
            de: {
                name: "Tuchmacherbrunnen in Monschau",
                location: "Monschau, Deutschland",
                short_description: "Der Tuchmacherbrunnen ist ein kleiner thematischer Brunnen im historischen Zentrum von Monschau. Der Brunnen ist den Traditionen der Weberei und der textilen Vergangenheit der Stadt gewidmet. Die Skulpturkomposition zeigt die handwerkliche Arbeit, durch die Monschau im 18. Jahrhundert zu einem bekannten Zentrum der Tuchproduktion wurde. Heute ist der Brunnen ein atmosphärisches Element der Altstadt und eine interessante Station während eines Spaziergangs.",
                full_description: {
                    title: "Beschreibung und Geschichte",
                    items: [
                        { bold: "Tuchmacherbrunnen in Monschau (Tuchmacherbrunnen Monschau)", text: "– ein kleiner thematischer Brunnen im historischen Zentrum von Monschau, der die textile Vergangenheit der Stadt widerspiegelt. Er befindet sich zwischen Fachwerkhäusern und fügt sich harmonisch in die Atmosphäre der Altstadt ein." },
                        { text: "Die Komposition des Brunnens ist dem Handwerk der Weberei gewidmet: Skulpturelemente zeigen den Herstellungsprozess von Stoffen und die Arbeit der Handwerker, durch die Monschau im 18. Jahrhundert zu einem bekannten Zentrum der Tuchproduktion wurde." },
                        { text: "Der Brunnen symbolisiert die industrielle Geschichte der Stadt und ist keine Museumsausstellung. Heute dient er als atmosphärisches Element der Altstadt und als interessante Station während eines Spaziergangs." },
                        { bold: "Geschichte", text: "Im 18. Jahrhundert erlebte Monschau dank der Textilindustrie eine wirtschaftliche Blüte. Die Tuchproduktion bildete die Grundlage für den Wohlstand der Stadt, und lokale Fabrikanten und Weber spielten eine Schlüsselrolle in ihrer Entwicklung." },
                        { text: "Besonders bekannt ist die Tätigkeit der Familie Schäibler, die Monschau zu einem der bedeutendsten Zentren der Textilindustrie der Region machte." },
                        { text: "Der Brunnen wurde als Symbol der Wertschätzung für diese Periode und die Menschen, deren Arbeit die Wirtschaft der Stadt prägte, geschaffen. Er bleibt eine visuelle Erinnerung an die handwerkliche Vergangenheit Monschaus." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { text: "Der Brunnen ist thematisch mit der Industriegeschichte der Stadt verbunden und nicht mit Religion oder Politik, was für alte deutsche Städte selten ist." },
                        { text: "Die Komposition zeigt Szenen des Handwebens und reflektiert die Arbeit der Handwerker im 18. Jahrhundert." },
                        { text: "Vermutlich wurde der Brunnen im 20. Jahrhundert im Rahmen der Gestaltung des historischen Stadtzentrums von Monschau aufgestellt. (Fakt nicht geprüft)" }
                    ]
                },
                meta: {
                    title: "Tuchmacherbrunnen in Monschau – Textile Geschichte",
                    description: "Kleiner Brunnen in Monschau, Symbol der textilen Vergangenheit der Stadt.",
                    ogTitle: "Tuchmacherbrunnen in Monschau – Tuchmacherbrunnen",
                    ogDescription: "Historischer Brunnen in Monschau, der dem Handwerk der Weberei und der Textilindustrie der Stadt gewidmet ist.",
                    keywords: "monschau sehenswürdigkeiten, tuchmacherbrunnen, deutschland, textile geschichte, stoffproduktion, was man in monschau sehen kann, altstadt monschau, sehenswürdigkeiten deutschland, tourismus monschau",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Aachen/monschau/tuchmacherbrunnen/001.jpg"
                }
            }
        }
    },


]

export default datas;