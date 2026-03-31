const datas = [
    // koln
    {
        id: "fischmarkt_koln",
        type: ["square"], rating: "top",
        path: "fischmarkt_koln",
        countryPath: "germany", regionsPath: "nrw", districtPath: "city", cityPath: "koln",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/altstadt/fischmarkt/001.jpg"
                }
            }
        }
    },

    //altena
    {
        id: "lutherkirche_altena",
        type: ["cathedral"], rating: "local",
        path: "lutherkirche_altena",
        countryPath: "germany", regionsPath: "nrw", districtPath: "arnsberg", cityPath: "altena",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/lutherkirche/001.jpg"
                }
            },
        }
    },
    {
        id: "st_matthaeus_church_altena",
        type: ["cathedral"], rating: "local",
        path: "st_matthaeus_church_altena",
        countryPath: "germany", regionsPath: "nrw", districtPath: "arnsberg", cityPath: "altena",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/st_matthaeus_church/001.jpg"
                }
            }
        }
    },
    {
        id: "gustav_selve_altena",
        type: ["monument_or_fountain"], rating: "local",
        path: "gustav_selve_altena",
        countryPath: "germany", regionsPath: "nrw", districtPath: "arnsberg", cityPath: "altena",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/altena/gustav_selve/001.jpg"
                }
            }
        }
    },

    //iserlohn
    {
        id: "dechenhohle_iserlohn",
        type: ["nature"], rating: "popular",
        path: "dechenhohle_iserlohn",
        countryPath: "germany", regionsPath: "nrw", districtPath: "arnsberg", cityPath: "iserlohn",
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
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhohle/001.jpg"
                }
            }
        }
    },
]

export default datas;