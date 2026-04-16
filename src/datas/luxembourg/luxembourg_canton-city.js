const datas = [
    // Люксембург
    {
        id: "luxembourg_city",
        path: "luxembourg_city",
        countryPath: "luxembourg", regionPath: "luxembourg_canton", districtPath: "city",
        gerb: "Luxembourg/luxembourg_canton/luxembourg_city/gerb.png",
        coord: { lat: 49.6116, lng: 6.1319 },
        translations: {
            ru: {
                name: "Люксембург",
                desc: {
                    general: [{ text: "Люксембург (фр. Luxembourg, нем. Luxemburg) – столица и крупнейший город Великого Герцогства Люксембург. Город является важным финансовым и административным центром Европы и одним из официальных центров Европейского союза." }],
                    population: [{ bold: "Население", text: " составляет около 130 000 человек (по состоянию на 2024 год)." }],
                    area: [
                        { bold: "Площадь:", text: " около 51,5 км². Город расположен в холмистой местности с глубокими долинами рек Альзетт и Петрюс." },
                        { text: " Люксембург отличается многоязычной средой: широко используются люксембургский, французский и немецкий языки." }
                    ],
                    postalCode: [{ bold: "Почтовые индексы:", text: " L-1000 – L-2999" }],
                    phone: [{ bold: "Телефонный код:", text: " +352" }],
                    officialSite: [{ bold: "Официальный сайт Люксембурга", link: "https://www.vdl.lu/" }],
                    culture: [{ bold: "Культурные особенности", text: " – город известен историческими крепостями, старым городом, включённым в список ЮНЕСКО, а также как один из ключевых финансовых центров Европы." }]
                },
                geography: {
                    title: "Рельеф и расположение",
                    items: [
                        { text: "Люксембург расположен в южной части страны и стоит на пересечении глубоких долин рек Альзетт и Петрюс." },
                        { text: "Город имеет сложный рельеф с мостами, обрывами и зелёными зонами, соединяющими верхний и нижний город." },
                        { bold: "География.", text: " Благодаря своему расположению город исторически имел стратегическое оборонительное значение." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { bold: "Крепость Европы", text: " – Люксембург долгое время считался одной из самых мощных крепостей Европы благодаря своей системе укреплений." },
                        { bold: "Объект ЮНЕСКО", text: " – старый город и фортификации Люксембурга включены в список Всемирного наследия ЮНЕСКО." },
                        { bold: "Финансовый центр", text: " – город является одним из крупнейших финансовых центров мира, особенно в сфере инвестиционных фондов." },
                        { bold: "Многоязычие", text: " – жители ежедневно используют сразу несколько языков: люксембургский, французский и немецкий." },
                        { bold: "Европейские институты", text: " – в городе расположены учреждения Европейского союза, включая Европейский суд и Европейский инвестиционный банк." },
                        { bold: "Высокий уровень жизни", text: " – Люксембург стабильно входит в число городов с самым высоким уровнем жизни в мире." }
                    ]
                },
                briefHistory: {
                    title: "История города Люксембург",
                    items: [
                        { text: "История города Люксембург начинается в 963 году, когда граф Зигфрид приобрёл скалу Бок (Bockfelsen) и построил на ней укрепление Люцилинбург, ставшее ядром будущего города." },
                        { text: "Благодаря своему стратегическому положению на пересечении торговых и военных путей город быстро превратился в мощную крепость и оказался в центре противостояния европейских держав." },
                        { text: "В разные исторические периоды Люксембург находился под властью Бургундии, Испании, Франции и Австрии, что сформировало его многоуровневое культурное и архитектурное наследие." },
                        { text: "В XVII веке французский военный инженер Вобан значительно укрепил крепость, превратив Люксембург в одну из самых мощных фортификационных систем Европы, за что город получил прозвище «Северный Гибралтар»." },
                        { text: "В 1867 году после Люксембургского кризиса Лондонский договор закрепил нейтралитет страны, а крепость города была частично демонтирована, что открыло путь к его мирному развитию и расширению." },
                        { text: "В XX веке город пережил оккупации во время обеих мировых войн, однако после 1945 года Люксембург стал одним из центров европейской интеграции и международного сотрудничества." },
                        { text: "Сегодня город Люксембург является столицей Великого Герцогства и важным политическим, финансовым и административным центром Европы, где расположены институты ЕС и международные организации." }
                    ]
                },
                meta: {
                    title: "Люксембург – столица и финансовый центр Европы",
                    description: "Люксембург: столица Великого Герцогства, исторический город с крепостями ЮНЕСКО и один из ключевых финансовых центров мира.",
                    ogTitle: "Люксембург – сердце Европы",
                    ogDescription: "История, культура и экономика столицы Люксембурга.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/..."
                }
            },
            ua: {
                name: "Люксембург",
                desc: {
                    general: [{ text: "Люксембург (фр. Luxembourg, нім. Luxemburg) – столиця і найбільше місто Великого Герцогства Люксембург. Місто є важливим фінансовим і адміністративним центром Європи та одним з офіційних центрів Європейського союзу." }],
                    population: [{ bold: "Населення", text: " становить близько 130 000 осіб (станом на 2024 рік)." }],
                    area: [
                        { bold: "Площа:", text: " близько 51,5 км². Місто розташоване в горбистій місцевості з глибокими долинами річок Альзетт і Петрюс." },
                        { text: " Люксембург відзначається багатомовним середовищем: широко використовуються люксембурзька, французька та німецька мови." }
                    ],
                    postalCode: [{ bold: "Поштові індекси:", text: " L-1000 – L-2999" }],
                    phone: [{ bold: "Телефонний код:", text: " +352" }],
                    officialSite: [{ bold: "Офіційний сайт Люксембурга", link: "https://www.vdl.lu/" }],
                    culture: [{ bold: "Культурні особливості", text: " – місто відоме історичними фортифікаціями, старим містом, включеним до списку ЮНЕСКО, а також як один із ключових фінансових центрів Європи." }]
                },
                geography: {
                    title: "Рельєф і розташування",
                    items: [
                        { text: "Люксембург розташований у південній частині країни та знаходиться на перетині глибоких долин річок Альзетт і Петрюс." },
                        { text: "Місто має складний рельєф із мостами, урвищами та зеленими зонами, що з'єднують верхнє і нижнє місто." },
                        { bold: "Географія.", text: " Завдяки своєму розташуванню місто історично мало стратегічне оборонне значення." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { bold: "Фортеця Європи", text: " – Люксембург тривалий час вважався однією з найпотужніших фортець Європи завдяки своїй системі укріплень." },
                        { bold: "Об'єкт ЮНЕСКО", text: " – старе місто та фортифікації Люксембурга внесені до списку Світової спадщини ЮНЕСКО." },
                        { bold: "Фінансовий центр", text: " – місто є одним із найбільших фінансових центрів світу, особливо у сфері інвестиційних фондів." },
                        { bold: "Багатомовність", text: " – мешканці щодня використовують кілька мов: люксембурзьку, французьку та німецьку." },
                        { bold: "Європейські інституції", text: " – у місті розташовані установи Європейського союзу, включаючи Європейський суд та Європейський інвестиційний банк." },
                        { bold: "Високий рівень життя", text: " – Люксембург стабільно входить до числа міст із найвищим рівнем життя у світі." }
                    ]
                },
                briefHistory: {
                    title: "Історія міста Люксембург",
                    items: [
                        { text: "Історія міста Люксембург починається у 963 році, коли граф Зиґфрід придбав скелю Бок (Bockfelsen) і збудував на ній укріплення Люцілінбург, яке стало ядром майбутнього міста." },
                        { text: "Завдяки стратегічному розташуванню на перехресті торгових і військових шляхів місто швидко перетворилося на потужну фортецю і стало об’єктом боротьби європейських держав." },
                        { text: "У різні історичні періоди Люксембург перебував під владою Бургундії, Іспанії, Франції та Австрії, що сформувало його багатошарову культурну та архітектурну спадщину." },
                        { text: "У XVII столітті французький військовий інженер Вобан значно укріпив фортецю, перетворивши Люксембург на одну з найпотужніших фортифікаційних систем Європи, за що місто отримало прізвисько «Північний Гібралтар»." },
                        { text: "У 1867 році після Люксембурзької кризи Лондонський договір закріпив нейтралітет країни, а фортецю міста було частково демонтовано, що відкрило шлях до його мирного розвитку та розширення." },
                        { text: "У XX столітті місто пережило окупації під час обох світових воєн, однак після 1945 року Люксембург став одним із центрів європейської інтеграції та міжнародного співробітництва." },
                        { text: "Сьогодні місто Люксембург є столицею Великого Герцогства та важливим політичним, фінансовим і адміністративним центром Європи, де розташовані інституції ЄС та міжнародні організації." }
                    ]
                },
                meta: {
                    title: "Люксембург – столиця та фінансовий центр Європи",
                    description: "Люксембург: столиця Великого Герцогства, історичне місто з фортецями ЮНЕСКО та один із ключових фінансових центрів світу.",
                    ogTitle: "Люксембург – серце Європи",
                    ogDescription: "Історія, культура та економіка столиці Люксембурга.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/..."
                }
            },
            de: {
                name: "Luxemburg",
                desc: {
                    general: [{ text: "Luxemburg (frz. Luxembourg) ist die Hauptstadt und größte Stadt des Großherzogtums Luxemburg. Die Stadt ist ein bedeutendes Finanz- und Verwaltungszentrum Europas und einer der offiziellen Sitze der Europäischen Union." }],
                    population: [{ bold: "Einwohnerzahl", text: " beträgt etwa 130.000 Einwohner (Stand: 2024)." }],
                    area: [
                        { bold: "Fläche:", text: " etwa 51,5 km². Die Stadt liegt in einer hügeligen Landschaft mit tiefen Tälern der Flüsse Alzette und Pétrusse." },
                        { text: " Luxemburg zeichnet sich durch ein mehrsprachiges Umfeld aus: Luxemburgisch, Französisch und Deutsch werden широко verwendet." }
                    ],
                    postalCode: [{ bold: "Postleitzahlen:", text: " L-1000 – L-2999" }],
                    phone: [{ bold: "Vorwahl:", text: " +352" }],
                    officialSite: [{ bold: "Offizielle Website Luxemburgs", link: "https://www.vdl.lu/" }],
                    culture: [{ bold: "Kulturelle Besonderheiten", text: " – die Stadt ist bekannt für ihre historischen Befestigungsanlagen, die Altstadt (UNESCO-Welterbe) sowie als einer der wichtigsten Finanzstandorte Europas." }]
                },
                geography: {
                    title: "Relief und Lage",
                    items: [
                        { text: "Luxemburg liegt im Süden des Landes und befindet sich an der Kreuzung tiefer Täler der Flüsse Alzette und Pétrusse." },
                        { text: "Die Stadt hat ein komplexes Relief mit Brücken, Felsen und Grünflächen, die Ober- und Unterstadt verbinden." },
                        { bold: "Geografie.", text: " Aufgrund ihrer Lage hatte die Stadt historisch eine große strategische Bedeutung." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { bold: "Festung Europas", text: " – Luxemburg galt lange als eine der stärksten Festungen Europas." },
                        { bold: "UNESCO-Welterbe", text: " – die Altstadt und Befestigungen gehören zum UNESCO-Weltkulturerbe." },
                        { bold: "Finanzzentrum", text: " – die Stadt ist eines der wichtigsten Finanzzentren der Welt." },
                        { bold: "Mehrsprachigkeit", text: " – mehrere Sprachen werden täglich verwendet: Luxemburgisch, Französisch und Deutsch." },
                        { bold: "EU-Institutionen", text: " – wichtige Institutionen der Europäischen Union befinden sich hier." },
                        { bold: "Hoher Lebensstandard", text: " – Luxemburg gehört zu den Städten mit sehr hoher Lebensqualität." }
                    ]
                },
                briefHistory: {
                    title: "Geschichte der Stadt Luxemburg",
                    items: [
                        { text: "Die Geschichte der Stadt Luxemburg beginnt im Jahr 963, als Graf Siegfried den Bockfelsen erwarb und dort die Festung Lucilinburhuc errichten ließ, die den Kern der späteren Stadt bildete." },
                        { text: "Aufgrund ihrer strategischen Lage an wichtigen Handels- und Militärwegen entwickelte sich die Stadt schnell zu einer mächtigen Festung und wurde zum Schauplatz europäischer Machtkämpfe." },
                        { text: "Im Laufe der Jahrhunderte stand Luxemburg unter der Herrschaft Burgunds, Spaniens, Frankreichs und Österreichs, was sein vielschichtiges kulturelles und architektonisches Erbe prägte." },
                        { text: "Im 17. Jahrhundert befestigte der französische Militäringenieur Vauban die Stadt erheblich und machte Luxemburg zu einem der stärksten Festungssysteme Europas, weshalb sie den Beinamen „Gibraltar des Nordens“ erhielt." },
                        { text: "Im Jahr 1867 wurde nach der Luxemburger Krise durch den Londoner Vertrag die Neutralität des Landes festgelegt, und die Festung der Stadt wurde teilweise abgetragen, was ihre zivile Entwicklung ermöglichte." },
                        { text: "Im 20. Jahrhundert erlebte die Stadt Besetzungen während beider Weltkriege, entwickelte sich jedoch nach 1945 zu einem Zentrum der europäischen Integration und internationalen Zusammenarbeit." },
                        { text: "Heute ist die Stadt Luxemburg die Hauptstadt des Großherzogtums und ein bedeutendes politisches, finanzielles und administratives Zentrum Europas mit Institutionen der EU und internationalen Organisationen." }
                    ]
                },
                meta: {
                    title: "Luxemburg – Hauptstadt und Finanzzentrum Europas",
                    description: "Luxemburg: Hauptstadt des Großherzogtums, historisches UNESCO-Erbe und eines der wichtigsten Finanzzentren der Welt.",
                    ogTitle: "Luxemburg – Herz Europas",
                    ogDescription: "Geschichte, Kultur und Wirtschaft Luxemburgs.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/..."
                }
            }
        }
    }
]

export default datas