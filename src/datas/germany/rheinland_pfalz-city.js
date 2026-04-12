const datas = [
    {
        id: "trier",
        path: "trier",
        countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city",
        gerb: "Germany/rheinland-pfalz/trier-city/gerb.png",
        coord: { lat: 49.75565, lng: 6.63935 },
        translations: {
            ru: {
                name: 'Трир',
                countryName: "Германия", regionName: "Рейнланд-Пфальц",
                desc: {
                    general: [
                        { text: 'Трир – старейший город Германии, расположенный на западе страны в федеральной земле Рейнланд-Пфальц, недалеко от границы с Люксембургом. Город был основан римлянами более 2000 лет назад и считается одним из важнейших центров античного наследия в Европе.' },
                        { text: 'Трир является культурным и туристическим центром региона Мозель, известным своими римскими памятниками, винодельческими традициями и университетом.' }
                    ],
                    population: [{ bold: 'Население:', text: ' примерно 112–113 тыс. (данные ~2023-2024).' }],
                    area: [{ bold: 'Площадь:', text: ' ~117 км²' }],
                    postalCode: [{ bold: 'Почтовый индекс:', text: ' 54290-54296' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 0651' }],
                    officialSite: [{ bold: 'Официальный сайт города', link: 'https://www.trier.de/' }
                    ]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Трир расположен в долине реки Мозель, окружён холмами и виноградниками. Близость к Люксембургу, Франции и Бельгии делает город частью трансграничного региона Большой регион (Großregion). Климат умеренно-мягкий, благоприятный для виноградарства.' },
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Трира',
                    isList: true,
                    items: [
                        { bold: 'Карл Маркс', text: ' – философ, экономист и социолог, родился в Трире в 1818 году. Это самый известный уроженец города, его дом сейчас музей' },
                        { bold: 'Антиох Трирский', text: ' – римский государственный деятель поздней античности' },
                        { bold: 'Освальд Маттиас Унгерс', text: ' – известный немецкий архитектор и теоретик архитектуры' },
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { text: 'Трир официально считается старейшим городом Германии' },
                        { text: 'В городе находится Порта Нигра – крупнейшие сохранившиеся римские городские ворота к северу от Альп' },
                        { text: 'Девять римских памятников Трира включены в список Всемирного наследия ЮНЕСКО' },
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Трир считается старейшим городом Германии. Его история насчитывает более двух тысяч лет и начинается задолго до появления германских государств.' },
                        { bold: 'Античность и римский период.', text: 'Город был основан в 16 году до н. э. римлянами под названием Augusta Treverorum – «город Августа у треверов», кельтского племени, населявшего эти земли. Уже в I–II веках н. э. Трир стал важным административным и торговым центром Римской империи к северу от Альп.' },
                        { text: 'В III-IV веках Трир достиг пика своего развития. Он стал одной из резиденций римских императоров и фактически выполнял роль столицы западных провинций империи. В это время в городе проживало до 80 000 человек, что делало его одним из крупнейших городов Европы того времени.' },
                        { text: 'К этому периоду относятся самые известные римские памятники Трира: Порта Нигра, Императорские термы, Амфитеатр, Базилика Константина и Римский мост через Мозель. Многие из этих сооружений сохранились до наших дней и находятся под охраной ЮНЕСКО.' },
                        { bold: 'Раннее христианство.', text: 'Трир сыграл ключевую роль в распространении христианства в регионе. Уже в IV веке здесь находилась одна из старейших епископских кафедр к северу от Альп. По преданию, именно в Трире хранится Святой хитон – реликвия, связанная с Иисусом Христом, что сделало город важным центром паломничества.' },
                        { bold: 'Раннее Средневековье.', text: 'После падения Римской империи Трир пережил периоды упадка и разрушений, но не исчез. В V-VI веках город перешёл под власть франков и постепенно восстановил своё значение как религиозный центр.' },
                        { text: 'В Средние века архиепископ Трира стал курфюрстом Священной Римской империи, что сделало город не только церковным, но и политически влиятельным. Архиепископы Трира обладали огромной властью и контролировали обширные территории вдоль Мозеля.' },
                        { bold: 'Позднее Средневековье и Новое время.', text: 'В XIV-XVII веках Трир неоднократно страдал от войн, эпидемий и экономического спада. Особенно тяжёлыми стали последствия Тридцатилетней войны, когда население города резко сократилось.' },
                        { text: 'В конце XVIII века Трир был оккупирован французскими революционными войсками и включён в состав Франции. В этот период были проведены административные реформы, упразднена церковная власть курфюрстов и секуляризированы монастыри.' },
                        { bold: 'Прусский период и XIX век.', text: 'После Венского конгресса 1815 года Трир вошёл в состав Королевства Пруссия. Город стал провинциальным, но сохранил культурное значение. Именно в этот период, в 1818 году, в Трире родился Карл Маркс, один из самых известных уроженцев города.' },
                        { text: 'XIX век ознаменовался постепенной индустриализацией, развитием инфраструктуры и ростом населения.' },
                        { bold: 'XX век и современность.', text: 'В XX веке Трир пережил обе мировые войны. Во время Второй мировой войны город пострадал от бомбардировок, однако значительная часть исторического наследия уцелела.' },
                        { text: 'После войны Трир вошёл в состав федеральной земли Рейнланд-Пфальц. В послевоенные десятилетия город активно развивался как университетский, туристический и культурный центр.' },
                        { bold: 'Трир сегодня.', text: 'Сегодня Трир – это город, где римское, средневековое и современное наследие сосуществуют в одном пространстве. Его исторический центр и римские памятники привлекают туристов со всего мира, а статус университетского города придаёт ему живую и международную атмосферу.' },
                    ]
                },
                meta: {
                    title: "Трир – старейший город Германии с богатой историей",
                    description: "Трир: история, география, достопримечательности, знаменитые жители и интересные факты о старейшем городе Германии.",
                    ogTitle: "Трир – информация о городе",
                    ogDescription: "Подробная информация о Трире: культура, история, знаменитые жители и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
                }
            },
            ua: {
                name: "Трір",
                countryName: "Німеччина", regionName: "Рейнланд-Пфальц",
                desc: {
                    general: [
                        { text: 'Трір – найстаріше місто Німеччини, розташоване на заході країни в федеральній землі Рейнланд-Пфальц, неподалік від кордону з Люксембургом. Місто було засноване римлянами понад 2000 років тому і вважається одним із найважливіших центрів античної спадщини в Європі.' },
                        { text: 'Трір є культурним та туристичним центром регіону Мозель, відомим своїми римськими пам’ятками, виноробними традиціями та університетом.' }
                    ],
                    population: [{ bold: 'Населення:', text: ' приблизно 112–113 тис. (дані ~2023-2024).' }],
                    area: [{ bold: 'Площа:', text: ' ~117 км²' }],
                    postalCode: [{ bold: 'Поштовий індекс:', text: ' 54290-54296' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 0651' }],
                    officialSite: [{ bold: 'Офіційний сайт міста', link: 'https://www.trier.de/' }]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Трір розташований у долині річки Мозель, оточеній пагорбами та виноградниками. Близькість до Люксембургу, Франції та Бельгії робить місто частиною транскордонного регіону Великий регіон (Großregion). Клімат помірно-м’який, сприятливий для виноградарства.' },
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Тріра',
                    isList: true,
                    items: [
                        { bold: 'Карл Маркс', text: ' – філософ, економіст та соціолог, народився в Трірі у 1818 році. Це найвідоміший уродженець міста, його дім зараз музей.' },
                        { bold: 'Антіох Трірський', text: ' – римський державний діяч пізньої античності.' },
                        { bold: 'Освальд Маттіас Унгерс', text: ' – відомий німецький архітектор і теоретик архітектури.' },
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    isList: true,
                    items: [
                        { text: 'Трір офіційно вважається найстарішим містом Німеччини.' },
                        { text: 'У місті знаходиться Порта Нігра – найбільші збережені римські міські ворота на північ від Альп.' },
                        { text: 'Дев’ять римських пам’яток Тріра включені до списку світової спадщини ЮНЕСКО.' },
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Трір вважається найстарішим містом Німеччини. Його історія налічує понад дві тисячі років і починається задовго до появи германських держав.' },
                        { bold: 'Античність та римський період.', text: 'Місто було засноване у 16 році до н.е. римлянами під назвою Augusta Treverorum – «місто Августа у треверів», кельтського племені, що населяло ці землі. Вже в I–II століттях н.е. Трір став важливим адміністративним та торговим центром Римської імперії на північ від Альп.' },
                        { text: 'У III–IV століттях Трір досяг піку свого розвитку. Він став однією з резиденцій римських імператорів і фактично виконував роль столиці західних провінцій імперії. Тоді в місті проживало до 80 000 осіб, що робило його одним із найбільших міст Європи того часу.' },
                        { text: 'До цього періоду належать найвідоміші римські пам’ятки Тріра: Порта Нігра, Імператорські терми, Амфітеатр, Базиліка Константина та Римський міст через Мозель. Багато з цих споруд збереглися до наших днів і охороняються ЮНЕСКО.' },
                        { bold: 'Ранне християнство.', text: 'Трір зіграв ключову роль у поширенні християнства в регіоні. Уже у IV столітті тут знаходилася одна з найстаріших єпископських кафедр на північ від Альп. За легендою, саме в Трірі зберігається Святе хитон – реліквія, пов’язана з Ісусом Христом, що зробило місто важливим центром паломництва.' },
                        { bold: 'Раннє Середньовіччя.', text: 'Після падіння Римської імперії Трір пережив періоди занепаду та руйнувань, але не зник. У V–VI століттях місто перейшло під владу франків і поступово відновило своє значення як релігійний центр.' },
                        { text: 'У середньовіччі архієпископ Тріра став курфюрстом Священної Римської імперії, що зробило місто не лише церковним, а й політично впливовим. Архієпископи Тріра володіли величезною владою та контролювали обширні території вздовж Мозелю.' },
                        { bold: 'Пізнє Середньовіччя та Новий час.', text: 'У XIV–XVII століттях Трір неодноразово страждав від війн, епідемій та економічного занепаду. Особливо тяжкими були наслідки Тридцятирічної війни, коли населення міста різко скоротилося.' },
                        { text: 'Наприкінці XVIII століття Трір був окупований французькими революційними військами і включений до складу Франції. У цей період були проведені адміністративні реформи, скасовано церковну владу курфюрстів і секуляризовано монастирі.' },
                        { bold: 'Прусський період та XIX століття.', text: 'Після Віденського конгресу 1815 року Трір увійшов до складу Королівства Пруссія. Місто стало провінційним, але зберегло культурне значення. Саме в цей період, у 1818 році, у Трірі народився Карл Маркс, один із найвідоміших уродженців міста.' },
                        { text: 'XIX століття ознаменувалося поступовою індустріалізацією, розвитком інфраструктури та зростанням населення.' },
                        { bold: 'XX століття та сучасність.', text: 'У XX столітті Трір пережив обидві світові війни. Під час Другої світової війни місто постраждало від бомбардувань, однак значна частина історичної спадщини збереглася.' },
                        { text: 'Після війни Трір увійшов до складу федеральної землі Рейнланд-Пфальц. У повоєнні десятиліття місто активно розвивалося як університетський, туристичний та культурний центр.' },
                        { bold: 'Трір сьогодні.', text: 'Сьогодні Трір – це місто, де римська, середньовічна та сучасна спадщина співіснують в одному просторі. Його історичний центр та римські пам’ятки приваблюють туристів з усього світу, а статус університетського міста надає йому живу та міжнародну атмосферу.' },
                    ]
                },
                meta: {
                    title: "Трір – найстаріше місто Німеччини з багатою історією",
                    description: "Трір: історія, географія, пам’ятки, відомі жителі та цікаві факти про найстаріше місто Німеччини.",
                    ogTitle: "Трір – інформація про місто",
                    ogDescription: "Детальна інформація про Трір: культура, історія, відомі жителі та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
                }
            },
            de: {
                name: "Trier",
                countryName: "Deutschland", regionName: "Rheinland-Pfalz",
                desc: {
                    general: [
                        { text: 'Trier ist die älteste Stadt Deutschlands, im Westen des Landes im Bundesland Rheinland-Pfalz gelegen, nahe der Grenze zu Luxemburg. Die Stadt wurde vor über 2000 Jahren von den Römern gegründet und gilt als eines der wichtigsten Zentren des antiken Erbes in Europa.' },
                        { text: 'Trier ist ein kulturelles und touristisches Zentrum der Moselregion, bekannt für seine römischen Denkmäler, Weinanbau-Traditionen und die Universität.' }
                    ],
                    population: [{ bold: 'Bevölkerung:', text: ' etwa 112–113 Tausend (Daten ~2023-2024).' }],
                    area: [{ bold: 'Fläche:', text: ' ~117 km²' }],
                    postalCode: [{ bold: 'Postleitzahl:', text: ' 54290-54296' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 0651' }],
                    officialSite: [{ bold: 'Offizielle Stadtwebseite', link: 'https://www.trier.de/' }]
                },
                geography: {
                    title: 'Geographie',
                    items: [
                        { text: 'Trier liegt im Tal der Mosel, umgeben von Hügeln und Weinbergen. Die Nähe zu Luxemburg, Frankreich und Belgien macht die Stadt Teil der grenzüberschreitenden Großregion (Großregion). Das Klima ist gemäßigt-mild und günstig für den Weinbau.' },
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Trier',
                    isList: true,
                    items: [
                        { bold: 'Karl Marx', text: ' – Philosoph, Ökonom und Soziologe, geboren 1818 in Trier. Er ist der bekannteste Sohn der Stadt, sein Geburtshaus ist heute ein Museum.' },
                        { bold: 'Antiochus von Trier', text: ' – römischer Staatsmann der Spätantike.' },
                        { bold: 'Oswald Matthias Ungers', text: ' – bekannter deutscher Architekt und Architekturtheoretiker.' },
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    isList: true,
                    items: [
                        { text: 'Trier gilt offiziell als die älteste Stadt Deutschlands.' },
                        { text: 'In der Stadt befindet sich die Porta Nigra – das größte erhaltene römische Stadttor nördlich der Alpen.' },
                        { text: 'Neun römische Denkmäler von Trier sind in die UNESCO-Welterbeliste aufgenommen.' },
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Trier gilt als die älteste Stadt Deutschlands. Seine Geschichte umfasst mehr als zweitausend Jahre und beginnt lange vor der Entstehung germanischer Staaten.' },
                        { bold: 'Antike und römische Periode.', text: 'Die Stadt wurde 16 v. Chr. von den Römern unter dem Namen Augusta Treverorum gegründet – „Stadt des Augustus bei den Trevern“, einem keltischen Stamm, der dieses Gebiet bewohnte. Bereits im 1.–2. Jahrhundert n. Chr. wurde Trier zu einem wichtigen Verwaltungs- und Handelszentrum des Römischen Reiches nördlich der Alpen.' },
                        { text: 'Im 3.–4. Jahrhundert erreichte Trier seine Blütezeit. Es wurde zu einer der Residenzen römischer Kaiser und fungierte faktisch als Hauptstadt der westlichen Provinzen des Reiches. Zu dieser Zeit lebten bis zu 80 000 Menschen in der Stadt, was sie zu einer der größten Städte Europas machte.' },
                        { text: 'Zu dieser Zeit gehören die bekanntesten römischen Denkmäler von Trier: Porta Nigra, Kaiserthermen, Amphitheater, Konstantin-Basilika und Römische Brücke über die Mosel. Viele dieser Bauwerke sind bis heute erhalten und stehen unter UNESCO-Schutz.' },
                        { bold: 'Frühes Christentum.', text: 'Trier spielte eine Schlüsselrolle bei der Verbreitung des Christentums in der Region. Bereits im 4. Jahrhundert befand sich hier einer der ältesten Bischofssitze nördlich der Alpen. Der Überlieferung nach wird in Trier der Heilige Rock aufbewahrt – eine Reliquie, die mit Jesus Christus verbunden ist, was die Stadt zu einem wichtigen Wallfahrtsort machte.' },
                        { bold: 'Frühmittelalter.', text: 'Nach dem Fall des Römischen Reiches erlebte Trier Perioden des Niedergangs und der Zerstörung, verschwand aber nicht. Im 5.–6. Jahrhundert kam die Stadt unter die Herrschaft der Franken und erlangte allmählich ihre Bedeutung als religiöses Zentrum zurück.' },
                        { text: 'Im Mittelalter wurde der Erzbischof von Trier Kurfürst des Heiligen Römischen Reiches, was die Stadt nicht nur kirchlich, sondern auch politisch einflussreich machte. Die Erzbischöfe von Trier hatten enorme Macht und kontrollierten weite Gebiete entlang der Mosel.' },
                        { bold: 'Spätmittelalter und Neuzeit.', text: 'Im 14.–17. Jahrhundert litt Trier mehrfach unter Kriegen, Epidemien und wirtschaftlichem Niedergang. Besonders schwer waren die Folgen des Dreißigjährigen Krieges, als die Bevölkerung der Stadt stark schrumpfte.' },
                        { text: 'Ende des 18. Jahrhunderts wurde Trier von französischen Revolutionsarmeen besetzt und Teil Frankreichs. In dieser Zeit wurden Verwaltungsreformen durchgeführt, die kirchliche Macht der Kurfürsten aufgehoben und Klöster säkularisiert.' },
                        { bold: 'Preußische Periode und 19. Jahrhundert.', text: 'Nach dem Wiener Kongress 1815 kam Trier zum Königreich Preußen. Die Stadt wurde provinziell, behielt aber kulturelle Bedeutung. In dieser Zeit wurde 1818 Karl Marx in Trier geboren, einer der bekanntesten Söhne der Stadt.' },
                        { text: 'Das 19. Jahrhundert war geprägt von schrittweiser Industrialisierung, Infrastrukturentwicklung und Bevölkerungswachstum.' },
                        { bold: '20. Jahrhundert und Gegenwart.', text: 'Im 20. Jahrhundert erlebte Trier beide Weltkriege. Während des Zweiten Weltkriegs wurde die Stadt bombardiert, doch ein Großteil des historischen Erbes blieb erhalten.' },
                        { text: 'Nach dem Krieg wurde Trier Teil des Bundeslandes Rheinland-Pfalz. In den Nachkriegsjahrzehnten entwickelte sich die Stadt aktiv als Universitäts-, Tourismus- und Kulturzentrum.' },
                        { bold: 'Trier heute.', text: 'Heute ist Trier eine Stadt, in der römisches, mittelalterliches und modernes Erbe in einem Raum koexistieren. Das historische Zentrum und die römischen Denkmäler ziehen Touristen aus aller Welt an, und der Status einer Universitätsstadt verleiht der Stadt eine lebendige und internationale Atmosphäre.' },
                    ]
                },
                meta: {
                    title: "Trier – älteste Stadt Deutschlands mit reicher Geschichte",
                    description: "Trier: Geschichte, Geographie, Sehenswürdigkeiten, berühmte Einwohner und interessante Fakten über die älteste Stadt Deutschlands.",
                    ogTitle: "Trier – Informationen über die Stadt",
                    ogDescription: "Detaillierte Informationen über Trier: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/portaNigra_trier/001.JPG"
                }
            }
        }
    },
    {
        id: "saarburg",
        path: "saarburg",
        countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "trier_saarburg",
        gerb: "Germany/rheinland-pfalz/trier_saarburg/saarburg_kell/saarburg/gerb.png",
        coord: { lat: 49.6131, lng: 6.5783 },
        translations: {
            ru: {
                name: 'Саарбург',
                countryName: "Германия", regionName: "Рейнланд-Пфальц", districtName: "Трир-Саарбург", subRegionName: "Саарбург-Келль",
                desc: {
                    general: [
                        { text: 'Саарбург – небольшой живописный город на западе Германии в федеральной земле Рейнланд-Пфальц, на реке Саар. Известен своим старым городом с узкими улочками, исторической крепостью и водопадом в центре города.' },
                        { text: ' Город является туристическим центром региона, популярным благодаря исторической архитектуре, винодельческим традициям и живописной природе.' }
                    ],
                    population: [{ bold: 'Население:', text: ' примерно 7–8 тыс. (данные ~2023-2024).' }],
                    area: [{ bold: 'Площадь:', text: ' ~17 км²' }],
                    postalCode: [{ bold: 'Почтовый индекс:', text: ' 54439' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 6581' }],
                    officialSite: [{ bold: 'Официальный сайт города', link: 'https://www.saarburg.de/' }]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Саарбург расположен в долине реки Саар, окружён холмами и виноградниками. Климат умеренно-мягкий, с подходящими условиями для виноделия. Город является частью природного и культурного маршрута Мозеля и Саара.' },
                        { text: 'Рядом с городом проходят популярные туристические маршруты, включая Саарский винный путь, который привлекает любителей пеших прогулок и винных дегустаций.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Саарбурга',
                    isList: true,
                    items: [
                        { bold: 'Иоганн Генрих Винклер', text: ' – немецкий историк и писатель, родился в Саарбурге, автор работ по региональной истории.' },
                        { bold: 'Йоханнес Шталь', text: ' – известный немецкий инженер и архитектор, участвовал в строительстве нескольких исторических зданий в регионе.' },
                        { bold: 'Карл Шмитт', text: ' – политолог и юрист, родился недалеко от Саарбурга и изучал местное право.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { text: 'В центре старого города находится небольшой водопад на реке Саар – один из немногих городских водопадов Германии, высотой около 3 метров.' },
                        { text: 'Саарбург известен своей старой крепостью, впервые упомянутой в XI веке, которая доминирует над городским пейзажем.' },
                        { text: 'Город активно привлекает туристов благодаря винным фестивалям, живописной архитектуре старого города и винодельческим маршрутам вдоль реки Саар.' }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Саарбург возник как небольшой укреплённый город в средние века. Первые упоминания о поселении относятся к XI веку. Город был стратегически расположен на реке Саар, что делало его важным пунктом для контроля торговых путей и переправы через реку.' },
                        { bold: 'Средние века.', text: 'В XI–XIV веках строится крепость Саарбург, которая служила оборонительным и административным центром региона. Крепость неоднократно укреплялась и расширялась, играя ключевую роль в защите земель от вторжений и обеспечивая власть местных князей.' },
                        { text: 'В это время вокруг крепости формируется старый город с узкими улочками, жилыми домами и ремесленными мастерскими. Саарбург постепенно превращается в важный торговый и винодельческий центр, привлекая купцов и ремесленников из окрестных регионов.' },
                        { bold: 'Раннее Новое время.', text: 'В последующие века город часто менял владельцев, подвергался разрушениям во время региональных войн, в том числе Тридцатилетней войны, но сохранял свою экономическую значимость. В XVI–XVII веках здесь развиваются винодельческие традиции, которые продолжаются и по сей день.' },
                        { text: 'В XIX веке Саарбург вошёл в состав Пруссии, что привело к административным реформам и стабилизации городской жизни. Развиваются инфраструктура и торговля, а исторические здания начинают сохраняться как культурное наследие.' },
                        { bold: 'XX век и современность.', text: 'В XX веке Саарбург превращается в туристический центр. Старый город и крепость сохраняются благодаря охране памятников, появляются пешеходные маршруты, винные туры и фестивали. Сегодня Саарбург привлекает туристов своей историей, живописной природой, винодельческими маршрутами и атмосферой средневекового города.' }
                    ]
                },
                meta: {
                    title: "Саарбург – живописный город на реке Саар",
                    description: "Саарбург: история, география, достопримечательности, знаменитые жители и интересные факты о небольшом городе Германии.",
                    ogTitle: "Саарбург – информация о городе",
                    ogDescription: "Подробная информация о Саарбурге: крепость, водопад, культура, история и знаменитые жители.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier_saarburg/saarburg_kell/saarburg/001.jpg"
                }
            },
            ua: {
                name: 'Саарбург',
                countryName: "Германия", regionName: "Рейнланд-Пфальц", districtName: "Трір-Саарбург", subRegionName: "Саарбург-Келль",
                desc: {
                    general: [
                        { text: 'Саарбург – невелике мальовниче місто на заході Німеччини в федеральній землі Рейнланд-Пфальц, на річці Саар. Відоме своїм старим містом із вузькими вуличками, історичною фортецею та водоспадом у центрі міста.' },
                        { text: 'Місто є туристичним центром регіону, популярним завдяки історичній архітектурі, виноробним традиціям і мальовничій природі.' }
                    ],
                    population: [{ bold: 'Населення:', text: ' приблизно 7–8 тис. (дані ~2023-2024).' }],
                    area: [{ bold: 'Площа:', text: ' ~17 км²' }],
                    postalCode: [{ bold: 'Поштовий індекс:', text: ' 54439' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 6581' }],
                    officialSite: [{ bold: 'Офіційний сайт міста', link: 'https://www.saarburg.de/' }]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Саарбург розташований у долині річки Саар, оточений пагорбами та виноградниками. Клімат помірно-м’який, із сприятливими умовами для виноробства. Місто є частиною природного та культурного маршруту Мозель та Саар.' },
                        { text: 'Поруч із містом проходять популярні туристичні маршрути, зокрема Саарський винний шлях, який приваблює любителів піших прогулянок та дегустацій вин.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Саарбурга',
                    items: [
                        { bold: 'Йоганн Генріх Вінклер', text: ' – німецький історик та письменник, народився в Саарбурзі, автор праць з регіональної історії.' },
                        { bold: 'Йоганнес Шталь', text: ' – відомий німецький інженер та архітектор, брав участь у будівництві кількох історичних будівель у регіоні.' },
                        { bold: 'Карл Шмітт', text: ' – політолог і юрист, народився неподалік від Саарбурга та вивчав місцеве право.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    items: [
                        { text: 'У центрі старого міста знаходиться невеликий водоспад на річці Саар – один із небагатьох міських водоспадів у Німеччині, висотою близько 3 метрів.' },
                        { text: 'Саарбург відомий своєю старою фортецею, вперше згаданої в XI столітті, яка домінує над міським пейзажем.' },
                        { text: 'Місто активно приваблює туристів завдяки винним фестивалям, мальовничій архітектурі старого міста та виноробним маршрутам уздовж річки Саар.' }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Саарбург виник як невелике укріплене місто у середні віки. Перші згадки про поселення відносяться до XI століття. Місто було стратегічно розташоване на річці Саар, що робило його важливим пунктом для контролю торгових шляхів і переправи через річку.' },
                        { bold: 'Середні віки.', text: 'У XI–XIV століттях будується фортеця Саарбург, яка слугувала оборонним та адміністративним центром регіону. Фортеця неодноразово зміцнювалася та розширювалася, відіграючи ключову роль у захисті земель від вторгнень та забезпечуючи владу місцевих князів.' },
                        { text: 'У цей час навколо фортеці формуються старе місто з вузькими вуличками, житловими будинками та ремісничими майстернями. Саарбург поступово перетворюється на важливий торговий і виноробний центр, приваблюючи купців і ремісників з прилеглих регіонів.' },
                        { bold: 'Ранній Новий час.', text: 'У наступні століття місто часто змінювало власників, піддавалося руйнуванням під час регіональних війн, зокрема Тридцятилітньої війни, але зберігало свою економічну значущість. У XVI–XVII століттях тут розвиваються виноробні традиції, що тривають до сьогодні.' },
                        { text: 'У XIX столітті Саарбург увійшов до складу Пруссії, що призвело до адміністративних реформ і стабілізації міського життя. Розвиваються інфраструктура і торгівля, а історичні будівлі починають зберігатися як культурна спадщина.' },
                        { bold: 'XX століття та сучасність.', text: 'У XX столітті Саарбург перетворюється на туристичний центр. Старе місто та фортеця зберігаються завдяки охороні пам’яток, з’являються пішохідні маршрути, винні тури та фестивалі. Сьогодні Саарбург приваблює туристів своєю історією, мальовничою природою, виноробними маршрутами та атмосферою середньовічного міста.' }
                    ]
                },
                meta: {
                    title: "Саарбург – мальовниче місто на річці Саар",
                    description: "Саарбург: історія, географія, пам’ятки, відомі жителі та цікаві факти про невелике місто Німеччини.",
                    ogTitle: "Саарбург – інформація про місто",
                    ogDescription: "Докладна інформація про Саарбург: фортеця, водоспад, культура, історія та відомі жителі.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier_saarburg/saarburg_kell/saarburg/001.jpg"
                }
            },
            de: {
                name: 'Saarburg',
                countryName: "Deutschland", regionName: "rheinland_pfalz", districtName: "Trier-Saarburg", subRegionName: "Saarburg-Kell",
                desc: {
                    general: [
                        { text: 'Saarburg ist eine kleine malerische Stadt im Westen Deutschlands im Bundesland Rheinland-Pfalz an der Saar. Sie ist bekannt für ihre Altstadt mit engen Gassen, die historische Burg und den Wasserfall im Stadtzentrum.' },
                        { text: 'Die Stadt ist ein touristisches Zentrum der Region, beliebt wegen der historischen Architektur, der Weinbautraditionen und der malerischen Landschaft.' }
                    ],
                    population: [{ bold: 'Bevölkerung:', text: ' ca. 7–8 Tsd. (Daten ~2023-2024).' }],
                    area: [{ bold: 'Fläche:', text: ' ~17 km²' }],
                    postalCode: [{ bold: 'Postleitzahl:', text: ' 54439' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 6581' }],
                    officialSite: [{ bold: 'Offizielle Webseite', link: 'https://www.saarburg.de/' }]
                },
                geography: {
                    title: 'Geographie',
                    items: [
                        { text: 'Saarburg liegt im Saartal, umgeben von Hügeln und Weinbergen. Das Klima ist gemäßigt-mild, mit günstigen Bedingungen für den Weinbau. Die Stadt ist Teil der Natur- und Kulturroute Mosel und Saar.' },
                        { text: 'In der Nähe der Stadt verlaufen beliebte Wanderwege, darunter der Saarradweg und der Saar-Weinwanderweg, die Wanderer und Weinliebhaber anziehen.' }
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Saarburg',
                    items: [
                        { bold: 'Johann Heinrich Winkler', text: ' – deutscher Historiker und Schriftsteller, geboren in Saarburg, Autor von Arbeiten zur Regionalgeschichte.' },
                        { bold: 'Johannes Stahl', text: ' – bekannter deutscher Ingenieur und Architekt, beteiligt am Bau mehrerer historischer Gebäude in der Region.' },
                        { bold: 'Karl Schmitt', text: ' – Politikwissenschaftler und Jurist, geboren in der Nähe von Saarburg und studierte lokales Recht.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    items: [
                        { text: 'Im Zentrum der Altstadt befindet sich ein kleiner Wasserfall an der Saar – einer der wenigen städtischen Wasserfälle in Deutschland, etwa 3 Meter hoch.' },
                        { text: 'Saarburg ist bekannt für seine alte Burg, erstmals im XI. Jahrhundert erwähnt, die das Stadtbild dominiert.' },
                        { text: 'Die Stadt zieht aktiv Touristen an durch Weinfeste, die malerische Altstadt und die Weinwanderwege entlang der Saar.' }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Saarburg entstand im Mittelalter als kleine befestigte Stadt. Die ersten Erwähnungen der Siedlung stammen aus dem XI. Jahrhundert. Die Stadt lag strategisch an der Saar und war ein wichtiger Punkt zur Kontrolle von Handelswegen und Fährstellen.' },
                        { bold: 'Mittelalter.', text: 'Im XI.–XIV. Jahrhundert wird die Burg Saarburg gebaut, die als Verteidigungs- und Verwaltungszentrum der Region diente. Die Burg wurde mehrfach verstärkt und erweitert und spielte eine Schlüsselrolle beim Schutz der Ländereien vor Invasionen und bei der Sicherung der Macht der lokalen Fürsten.' },
                        { text: 'Zu dieser Zeit entstand rund um die Burg die Altstadt mit engen Gassen, Wohnhäusern und Handwerksbetrieben. Saarburg entwickelte sich allmählich zu einem wichtigen Handels- und Weinbauzentrum und zog Kaufleute und Handwerker aus den umliegenden Regionen an.' },
                        { bold: 'Frühe Neuzeit.', text: 'In den folgenden Jahrhunderten wechselte die Stadt häufig den Besitzer, wurde während regionaler Kriege, einschließlich des Dreißigjährigen Krieges, beschädigt, behielt aber ihre wirtschaftliche Bedeutung. Im XVI.–XVII. Jahrhundert entwickelten sich hier Weinbautraditionen, die bis heute fortbestehen.' },
                        { text: 'Im XIX. Jahrhundert kam Saarburg zu Preußen, was zu Verwaltungsreformen und Stabilisierung des städtischen Lebens führte. Infrastruktur und Handel entwickelten sich, historische Gebäude wurden als Kulturerbe erhalten.' },
                        { bold: '20. Jahrhundert und Gegenwart.', text: 'Im 20. Jahrhundert entwickelte sich Saarburg zu einem touristischen Zentrum. Die Altstadt und die Burg wurden dank Denkmalschutz erhalten, es entstanden Wanderwege, Weintouren und Festivals. Heute zieht Saarburg Touristen mit seiner Geschichte, der malerischen Natur, den Weinwanderwegen und der Atmosphäre einer mittelalterlichen Stadt an.' }
                    ]
                },
                meta: {
                    title: "Saarburg – malerische Stadt an der Saar",
                    description: "Saarburg: Geschichte, Geographie, Sehenswürdigkeiten, berühmte Einwohner und interessante Fakten über eine kleine Stadt in Deutschland.",
                    ogTitle: "Saarburg – Informationen zur Stadt",
                    ogDescription: "Detaillierte Informationen zu Saarburg: Burg, Wasserfall, Kultur, Geschichte und berühmte Einwohner.",
                    ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier_saarburg/saarburg_kell/saarburg/001.jpg"
                }
            }
        }
    }
]

export default datas