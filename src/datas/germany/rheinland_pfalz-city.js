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
                admin: {
                    title: 'Трир разделён на 19 местных округов (Ortsbezirke), каждый из которых имеет собственный местный совет. Основные округа города:',
                    isList: true,
                    items: [
                        { bold: 'Trier-Mitte/Gartenfeld', text: '– центральный округ города, включающий исторический центр, римские памятники, площади, торговые улицы и административные здания (включает районы: Altstadt, Gartenfeld).' },
                        { bold: 'Trier-Nord', text: '– северный округ с жилыми кварталами, промышленными зонами и городской инфраструктурой.' },
                        { bold: 'Trier-Süd', text: '– южный округ с жилыми районами и винодельческими зонами на склонах долины Мозеля.' },
                        { bold: 'Trier-West/Pallien', text: '– западный округ на левом берегу Мозеля с жилой застройкой и промышленными территориями.' },
                        { bold: 'Trier-Ost', text: '– восточный округ города с университетом, жилыми районами и зелёными зонами.' },
                        { bold: 'Ehrang-Quint', text: '– северный округ на Мозеле, включающий жилые районы и промышленную инфраструктуру.' },
                        { bold: 'Ruwer/Eitelsbach', text: '– винодельческий округ в долине Рувер с сельскими территориями и виноградниками.' },
                        { bold: 'Irsch', text: '– жилой округ на юго-востоке города с пригородной застройкой.' },
                        { bold: 'Filsch', text: '– небольшой жилой округ с деревенской структурой и зелёными зонами.' },
                        { bold: 'Zewen', text: '– юго-западный округ с жилыми кварталами и близостью к Люксембургскому направлению.' },
                        { bold: 'Kürenz', text: '– округ у подножия Трирского университета с жилой и студенческой застройкой.' },
                        { bold: 'Olewig', text: '– винодельческий округ, известный виноградниками и винными фестивалями.' },
                        { bold: 'Tarforst', text: '– современный жилой округ рядом с университетом Трира.' },
                        { bold: 'Feyen-Weismark', text: '– южный округ с жилыми кварталами и зелёными холмами.' },
                        { bold: 'Pfalzel', text: '– исторический округ на Мозеле с древней застройкой и средневековой структурой.' },
                        { bold: 'Biewer', text: '– северный округ с жилой застройкой вдоль Мозеля.' },
                        { bold: 'Euren', text: '– западный округ с промышленными зонами и жилыми кварталами.' },
                        { bold: 'Quint', text: '– небольшой округ на Мозеле с промышленно-жилым характером.' },
                        { bold: 'Heiligkreuz', text: '– южный округ с плотной жилой застройкой и городской инфраструктурой.' }
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
                admin: {
                    title: 'Трір поділений на 19 місцевих округів (Ortsbezirke), кожен з яких має власну місцеву раду. Основні округи міста:',
                    isList: true,
                    items: [
                        { bold: 'Trier-Mitte/Gartenfeld', text: '– центральний округ міста, що включає історичний центр, римські пам’ятки, площі, торгові вулиці та адміністративні будівлі (включає райони: Altstadt, Gartenfeld).' },
                        { bold: 'Trier-Nord', text: '– північний округ із житловими кварталами, промисловими зонами та міською інфраструктурою.' },
                        { bold: 'Trier-Süd', text: '– південний округ із житловими районами та виноробними зонами на схилах долини Мозелю.' },
                        { bold: 'Trier-West/Pallien', text: '– західний округ на лівому березі Мозелю з житловою забудовою та промисловими територіями.' },
                        { bold: 'Trier-Ost', text: '– східний округ міста з університетом, житловими районами та зеленими зонами.' },
                        { bold: 'Ehrang-Quint', text: '– північний округ на Мозелі, що включає житлові райони та промислову інфраструктуру.' },
                        { bold: 'Ruwer/Eitelsbach', text: '– виноробний округ у долині Рувер із сільськими територіями та виноградниками.' },
                        { bold: 'Irsch', text: '– житловий округ на південному сході міста з передміською забудовою.' },
                        { bold: 'Filsch', text: '– невеликий житловий округ із сільською структурою та зеленими зонами.' },
                        { bold: 'Zewen', text: '– південно-західний округ із житловими кварталами та близькістю до напрямку Люксембурга.' },
                        { bold: 'Kürenz', text: '– округ біля Трірського університету з житловою та студентською забудовою.' },
                        { bold: 'Olewig', text: '– виноробний округ, відомий виноградниками та винними фестивалями.' },
                        { bold: 'Tarforst', text: '– сучасний житловий округ поруч із університетом Тріра.' },
                        { bold: 'Feyen-Weismark', text: '– південний округ із житловими кварталами та зеленими пагорбами.' },
                        { bold: 'Pfalzel', text: '– історичний округ на Мозелі з давньою забудовою та середньовічною структурою.' },
                        { bold: 'Biewer', text: '– північний округ із житловою забудовою вздовж Мозелю.' },
                        { bold: 'Euren', text: '– західний округ із промисловими зонами та житловими кварталами.' },
                        { bold: 'Quint', text: '– невеликий округ на Мозелі з промислово-житловим характером.' },
                        { bold: 'Heiligkreuz', text: '– південний округ із щільною житловою забудовою та міською інфраструктурою.' }
                    ]
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
                admin: {
                    title: 'Trier ist in 19 Ortsbezirke gegliedert, von denen jeder einen eigenen Ortsbeirat hat. Die wichtigsten Stadtteile sind:',
                    isList: true,
                    items: [
                        { bold: 'Trier-Mitte/Gartenfeld', text: '– zentraler Stadtbezirk mit historischem Zentrum, römischen Denkmälern, Plätzen, Einkaufsstraßen und Verwaltungsgebäuden (einschließlich der Stadtteile: Altstadt, Gartenfeld).' },
                        { bold: 'Trier-Nord', text: '– nördlicher Bezirk mit Wohngebieten, Industrieflächen und städtischer Infrastruktur.' },
                        { bold: 'Trier-Süd', text: '– südlicher Bezirk mit Wohngebieten und Weinbauflächen an den Hängen des Moseltals.' },
                        { bold: 'Trier-West/Pallien', text: '– westlicher Bezirk am linken Moselufer mit Wohnbebauung und Industrieflächen.' },
                        { bold: 'Trier-Ost', text: '– östlicher Stadtbezirk mit Universität, Wohngebieten und Grünflächen.' },
                        { bold: 'Ehrang-Quint', text: '– nördlicher Bezirk an der Mosel mit Wohngebieten und Industrieinfrastruktur.' },
                        { bold: 'Ruwer/Eitelsbach', text: '– weinbaulich geprägter Bezirk im Ruwertal mit ländlichen Gebieten und Weinbergen.' },
                        { bold: 'Irsch', text: '– Wohnbezirk im Südosten der Stadt mit vorstädtischer Bebauung.' },
                        { bold: 'Filsch', text: '– kleiner Wohnbezirk mit dörflicher Struktur und Grünflächen.' },
                        { bold: 'Zewen', text: '– südwestlicher Bezirk mit Wohngebieten und Nähe zur Luxemburg-Route.' },
                        { bold: 'Kürenz', text: '– Bezirk am Fuße der Universität Trier mit Wohn- und Studentenwohngebieten.' },
                        { bold: 'Olewig', text: '– weinbaulich geprägter Bezirk, bekannt für Weinberge und Weinfeste.' },
                        { bold: 'Tarforst', text: '– moderner Wohnbezirk in der Nähe der Universität Trier.' },
                        { bold: 'Feyen-Weismark', text: '– südlicher Bezirk mit Wohngebieten und grünen Hügellandschaften.' },
                        { bold: 'Pfalzel', text: '– historischer Bezirk an der Mosel mit alter Bebauung und mittelalterlicher Struktur.' },
                        { bold: 'Biewer', text: '– nördlicher Bezirk mit Wohnbebauung entlang der Mosel.' },
                        { bold: 'Euren', text: '– westlicher Bezirk mit Industrieflächen und Wohngebieten.' },
                        { bold: 'Quint', text: '– kleiner Bezirk an der Mosel mit industriell-wohnlichem Charakter.' },
                        { bold: 'Heiligkreuz', text: '– südlicher Bezirk mit dichter Wohnbebauung und städtischer Infrastruktur.' }
                    ]
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
    },
    {
        id: "koblenz",
        path: "koblenz",
        countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city",
        gerb: "Germany/rheinland-pfalz/koblenz/gerb.png",
        coord: { lat: 50.3569, lng: 7.5889 },
        translations: {
            ru: {
                name: 'Кобленц',
                desc: {
                    general: [
                        { text: 'Кобленц – один из старейших городов Германии, расположенный у места слияния рек Рейн и Мозель.' },
                        { text: 'Город известен своей римской историей, крепостью Эренбрайтштайн, живописными набережными и статусом важного туристического центра региона Верхняя долина Среднего Рейна.' }
                    ],
                    population: [{ bold: 'Население:', text: ' около 115 000 человек (2025)' }],
                    area: [{ bold: 'Площадь:', text: ' около 105 км²' }],
                    postalCode: [{ bold: 'Почтовые индексы:', text: ' 56068–56077' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 0261' }],
                    officialSite: [{ bold: 'Официальный сайт Кобленца', link: 'https://www.koblenz.de/' }]
                },
                admin: {
                    title: 'Кобленц разделён на 30 районов (Stadtteile). Наиболее известные районы города:',
                    isList: true,
                    items: [
                        { bold: 'Altstadt', text: ' – исторический центр города с площадями, старинными зданиями, ресторанами и туристическими улицами.' },
                        { bold: 'Mitte', text: ' – центральный административный район города, включающий современные кварталы, набережные Рейна и Курфюрстский дворец.' },
                        { bold: 'Ehrenbreitstein', text: ' – район на правом берегу Рейна, известный одноимённой крепостью и панорамными видами.' },
                        { bold: 'Metternich', text: ' – крупный жилой и университетский район на западе города.' },
                        { bold: 'Karthause', text: ' – возвышенный район с жилыми кварталами и зелёными зонами.' },
                        { bold: 'Güls', text: ' – винодельческий район на берегу Мозеля с традиционной атмосферой.' },
                        { bold: 'Moselweiß', text: ' – старинный район вдоль Мозеля, известный виноградниками и спокойной жилой застройкой.' },
                        { bold: 'Stolzenfels', text: ' – южный район города с одноимённым замком на берегу Рейна.' }
                    ]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Кобленц расположен в северной части федеральной земли Рейнланд-Пфальц у места слияния рек Рейн и Мозель.' },
                        { text: 'Место соединения двух рек называется Deutsches Eck («Немецкий угол») и является одной из самых известных достопримечательностей Германии.' },
                        { text: 'Город окружён холмами, виноградниками и лесистыми возвышенностями Рейнского сланцевого массива.' },
                        { text: 'Кобленц считается воротами в Верхнюю долину Среднего Рейна – живописный регион замков, виноградников и средневековых городов, включённый в список Всемирного наследия ЮНЕСКО.' },
                        { text: 'По обоим берегам Рейна и Мозеля проходят прогулочные набережные, велосипедные маршруты и смотровые площадки.' },
                        { text: 'Крепость Эренбрайтштайн на высоком берегу Рейна соединена с центром города канатной дорогой.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Кобленца',
                    isList: true,
                    items: [
                        { bold: 'Клеменс Венцель фон Меттерних', text: ' – австрийский государственный деятель, родился в Кобленце.' },
                        { bold: 'Макс фон Шенкендорф', text: ' – немецкий поэт эпохи романтизма, связанный с регионом Рейна.' },
                        { bold: 'Йозеф Горрес', text: ' – публицист, писатель и политический мыслитель, работал в Кобленце.' },
                        { bold: 'Император Вильгельм I', text: ' – его конный памятник установлен на Deutsches Eck и стал символом города.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { text: 'Кобленц был основан римлянами около 8 года до н. э. и считается одним из старейших городов Германии.' },
                        { text: 'Название города происходит от латинского слова Confluentes, что означает «слияние рек».' },
                        { text: 'Deutsches Eck – место слияния Рейна и Мозеля – является символом немецкого единства.' },
                        { text: 'Крепость Эренбрайтштайн считается одной из крупнейших сохранившихся крепостей Европы.' },
                        { text: 'Канатная дорога через Рейн была построена к федеральной садовой выставке 2011 года и быстро стала популярной достопримечательностью.' },
                        { text: 'Регион вокруг Кобленца известен виноделием, особенно белыми рейнскими и мозельскими винами.' },
                        { text: 'Исторический центр города сохранил множество зданий в стилях барокко, классицизма и романтизма.' }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Кобленц считается одним из старейших городов Германии. Его история начинается ещё в римскую эпоху: около 8 года до н. э. римляне основали здесь военный пост у места слияния Рейна и Мозеля. Поселение получило название Confluentes, что в переводе с латинского означает «слияние рек».' },
                        { text: 'Благодаря выгодному расположению Кобленц быстро превратился в важный торговый и военный центр Римской империи. Через город проходили дороги вдоль Рейна и Мозеля, а на берегах строились укрепления, мосты и гавани.' },
                        { text: 'После ухода римлян город вошёл в состав Франкского государства. В Средние века Кобленц стал владением архиепископов Трира и важным религиозным центром региона. В это время здесь строились церкви, монастыри и укрепления, многие из которых сохранились до наших дней.' },
                        { text: 'В XII–XIII веках на высоком правом берегу Рейна была значительно укреплена крепость Эренбрайтштайн, контролировавшая речные пути и торговлю. Со временем она превратилась в одну из самых мощных крепостей региона.' },
                        { text: 'В эпоху позднего Средневековья и Ренессанса Кобленц развивался как торговый город на пересечении речных маршрутов. Здесь активно велась торговля вином, древесиной и товарами, перевозимыми по Рейну.' },
                        { text: 'В конце XVIII века город был занят французскими революционными войсками. В период французского правления Кобленц стал частью наполеоновской системы управления, а многие церковные владения были секуляризированы.' },
                        { text: 'После Венского конгресса 1815 года Кобленц вошёл в состав Пруссии. Город получил большое военное значение: прусские власти перестроили и расширили крепость Эренбрайтштайн, а сам Кобленц стал одним из важнейших гарнизонных центров Рейнской области.' },
                        { text: 'В XIX веке город активно рос благодаря развитию речного судоходства, железных дорог и торговли. В это же время на месте слияния Рейна и Мозеля появился монумент Deutsches Eck с памятником императору Вильгельму I.' },
                        { text: 'Во время Второй мировой войны Кобленц серьёзно пострадал от бомбардировок. Значительная часть исторического центра была разрушена, однако многие важные памятники позднее восстановили.' },
                        { text: 'После войны город вошёл в состав федеральной земли Рейнланд-Пфальц. Во второй половине XX века Кобленц постепенно превратился в крупный туристический и культурный центр региона.' },
                        { text: 'Сегодня Кобленц известен своими историческими кварталами, крепостью Эренбрайтштайн, речными набережными и расположением у входа в Верхнюю долину Среднего Рейна – объекта Всемирного наследия ЮНЕСКО.' }
                    ]
                },
                meta: {
                    title: 'Кобленц – город на слиянии Рейна и Мозеля',
                    description: 'Кобленц: история, крепости, набережные, достопримечательности и интересные факты об одном из старейших городов Германии.',
                    ogTitle: 'Кобленц – информация о городе',
                    ogDescription: 'Подробная информация о Кобленце: история, Рейн, Мозель, крепость Эренбрайтштайн и знаменитые места города.',
                    ogImage: 'https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/koblenz-city/001.jpg'
                }
            },
            ua: {
                name: 'Кобленц',
                desc: {
                    general: [
                        { text: 'Кобленц – одне з найстаріших міст Німеччини, розташоване в місці злиття річок Рейн і Мозель.' },
                        { text: 'Місто відоме своєю римською історією, фортецею Еренбрайтштайн, мальовничими набережними та статусом важливого туристичного центру регіону Верхня долина Середнього Рейну.' }
                    ],
                    population: [{ bold: 'Населення:', text: ' близько 115 000 осіб (2025)' }],
                    area: [{ bold: 'Площа:', text: ' близько 105 км²' }],
                    postalCode: [{ bold: 'Поштові індекси:', text: ' 56068–56077' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 0261' }],
                    officialSite: [{ bold: 'Офіційний сайт Кобленца', link: 'https://www.koblenz.de/' }]
                },
                admin: {
                    title: 'Кобленц поділяється на 30 районів (Stadtteile). Найвідоміші райони міста:',
                    isList: true,
                    items: [
                        { bold: 'Altstadt', text: ' – історичний центр міста з площами, старовинними будівлями, ресторанами та туристичними вулицями.' },
                        { bold: 'Mitte', text: ' – центральний адміністративний район міста, що включає сучасні квартали, набережні Рейну та Курфюрстський палац.' },
                        { bold: 'Ehrenbreitstein', text: ' – район на правому березі Рейну, відомий однойменною фортецею та панорамними краєвидами.' },
                        { bold: 'Metternich', text: ' – великий житловий та університетський район на заході міста.' },
                        { bold: 'Karthause', text: ' – підвищений район із житловими кварталами та зеленими зонами.' },
                        { bold: 'Güls', text: ' – виноробний район на березі Мозеля з традиційною атмосферою.' },
                        { bold: 'Moselweiß', text: ' – старовинний район уздовж Мозеля, відомий виноградниками та спокійною житловою забудовою.' },
                        { bold: 'Stolzenfels', text: ' – південний район міста з однойменним замком на березі Рейну.' }
                    ]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Кобленц розташований у північній частині федеральної землі Рейнланд-Пфальц у місці злиття річок Рейн і Мозель.' },
                        { text: 'Місце з’єднання двох річок називається Deutsches Eck («Німецький кут») і є однією з найвідоміших пам’яток Німеччини.' },
                        { text: 'Місто оточене пагорбами, виноградниками та лісистими височинами Рейнського сланцевого масиву.' },
                        { text: 'Кобленц вважається воротами до Верхньої долини Середнього Рейну – мальовничого регіону замків, виноградників і середньовічних міст, включеного до списку Світової спадщини ЮНЕСКО.' },
                        { text: 'Обабіч Рейну та Мозеля проходять прогулянкові набережні, велосипедні маршрути та оглядові майданчики.' },
                        { text: 'Фортеця Еренбрайтштайн на високому березі Рейну з’єднана з центром міста канатною дорогою.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Кобленца',
                    isList: true,
                    items: [
                        { bold: 'Клеменс Венцель фон Меттерніх', text: ' – австрійський державний діяч, народився у Кобленці.' },
                        { bold: 'Макс фон Шенкендорф', text: ' – німецький поет епохи романтизму, пов’язаний із регіоном Рейну.' },
                        { bold: 'Йозеф Ґеррес', text: ' – публіцист, письменник і політичний мислитель, працював у Кобленці.' },
                        { bold: 'Імператор Вільгельм I', text: ' – його кінний пам’ятник встановлений на Deutsches Eck і став символом міста.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    isList: true,
                    items: [
                        { text: 'Кобленц був заснований римлянами близько 8 року до н. е. і вважається одним із найстаріших міст Німеччини.' },
                        { text: 'Назва міста походить від латинського слова Confluentes, що означає «злиття річок».' },
                        { text: 'Deutsches Eck – місце злиття Рейну та Мозеля – є символом німецької єдності.' },
                        { text: 'Фортеця Еренбрайтштайн вважається однією з найбільших збережених фортець Європи.' },
                        { text: 'Канатна дорога через Рейн була побудована до Федеральної садової виставки 2011 року та швидко стала популярною пам’яткою.' },
                        { text: 'Регіон навколо Кобленца відомий виноробством, особливо білими рейнськими та мозельськими винами.' },
                        { text: 'Історичний центр міста зберіг багато будівель у стилях бароко, класицизму та романтизму.' }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Кобленц вважається одним із найстаріших міст Німеччини. Його історія починається ще в римську епоху: близько 8 року до н. е. римляни заснували тут військовий пост у місці злиття Рейну та Мозеля. Поселення отримало назву Confluentes, що в перекладі з латини означає «злиття річок».' },
                        { text: 'Завдяки вигідному розташуванню Кобленц швидко перетворився на важливий торговий і військовий центр Римської імперії. Через місто проходили дороги вздовж Рейну та Мозеля, а на берегах будувалися укріплення, мости та гавані.' },
                        { text: 'Після відходу римлян місто увійшло до складу Франкської держави. У Середньовіччі Кобленц став володінням архієпископів Тріра та важливим релігійним центром регіону. У цей час тут будувалися церкви, монастирі та укріплення, багато з яких збереглися до наших днів.' },
                        { text: 'У XII–XIII століттях на високому правому березі Рейну була значно укріплена фортеця Еренбрайтштайн, яка контролювала річкові шляхи та торгівлю. Згодом вона перетворилася на одну з найпотужніших фортець регіону.' },
                        { text: 'У добу пізнього Середньовіччя та Ренесансу Кобленц розвивався як торгове місто на перетині річкових маршрутів. Тут активно велася торгівля вином, деревиною та товарами, які перевозилися Рейном.' },
                        { text: 'Наприкінці XVIII століття місто було зайняте французькими революційними військами. У період французького правління Кобленц став частиною наполеонівської системи управління, а багато церковних володінь були секуляризовані.' },
                        { text: 'Після Віденського конгресу 1815 року Кобленц увійшов до складу Пруссії. Місто отримало велике військове значення: прусська влада перебудувала та розширила фортецю Еренбрайтштайн, а сам Кобленц став одним із найважливіших гарнізонних центрів Рейнської області.' },
                        { text: 'У XIX столітті місто активно зростало завдяки розвитку річкового судноплавства, залізниць і торгівлі. У цей же час у місці злиття Рейну та Мозеля з’явився монумент Deutsches Eck із пам’ятником імператору Вільгельму I.' },
                        { text: 'Під час Другої світової війни Кобленц серйозно постраждав від бомбардувань. Значна частина історичного центру була зруйнована, однак багато важливих пам’яток пізніше відновили.' },
                        { text: 'Після війни місто увійшло до складу федеральної землі Рейнланд-Пфальц. У другій половині XX століття Кобленц поступово перетворився на великий туристичний і культурний центр регіону.' },
                        { text: 'Сьогодні Кобленц відомий своїми історичними кварталами, фортецею Еренбрайтштайн, річковими набережними та розташуванням біля входу до Верхньої долини Середнього Рейну – об’єкта Світової спадщини ЮНЕСКО.' }
                    ]
                },
                meta: {
                    title: 'Кобленц – місто на злитті Рейну та Мозеля',
                    description: 'Кобленц: історія, фортеці, набережні, пам’ятки та цікаві факти про одне з найстаріших міст Німеччини.',
                    ogTitle: 'Кобленц – інформація про місто',
                    ogDescription: 'Докладна інформація про Кобленц: історія, Рейн, Мозель, фортеця Еренбрайтштайн і знамениті місця міста.',
                    ogImage: 'https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/koblenz-city/001.jpg'
                }
            },
            de: {
                name: 'Koblenz',
                desc: {
                    general: [
                        { text: 'Koblenz ist eine der ältesten Städte Deutschlands und liegt am Zusammenfluss von Rhein und Mosel.' },
                        { text: 'Die Stadt ist bekannt für ihre römische Geschichte, die Festung Ehrenbreitstein, ihre malerischen Uferpromenaden und ihren Status als wichtiges touristisches Zentrum der Region Oberes Mittelrheintal.' }
                    ],
                    population: [{ bold: 'Einwohnerzahl:', text: ' etwa 115.000 (2025)' }],
                    area: [{ bold: 'Fläche:', text: ' etwa 105 km²' }],
                    postalCode: [{ bold: 'Postleitzahlen:', text: ' 56068–56077' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 0261' }],
                    officialSite: [{ bold: 'Offizielle Website von Koblenz', link: 'https://www.koblenz.de/' }]
                },
                admin: {
                    title: 'Koblenz ist in 30 Stadtteile gegliedert. Die bekanntesten Stadtteile der Stadt:',
                    isList: true,
                    items: [
                        { bold: 'Altstadt', text: ' – das historische Zentrum der Stadt mit Plätzen, historischen Gebäuden, Restaurants und touristischen Straßen.' },
                        { bold: 'Mitte', text: ' – zentraler Verwaltungsbezirk der Stadt mit modernen Vierteln, Rheinpromenaden und dem Kurfürstlichen Schloss.' },
                        { bold: 'Ehrenbreitstein', text: ' – Stadtteil am rechten Rheinufer, bekannt für die gleichnamige Festung und Panoramablicke.' },
                        { bold: 'Metternich', text: ' – ein großer Wohn- und Universitätsstadtteil im Westen der Stadt.' },
                        { bold: 'Karthause', text: ' – ein höher gelegener Stadtteil mit Wohngebieten und Grünflächen.' },
                        { bold: 'Güls', text: ' – ein Weinanbaugebiet am Moselufer mit traditioneller Atmosphäre.' },
                        { bold: 'Moselweiß', text: ' – ein alter Stadtteil entlang der Mosel, bekannt für Weinberge und ruhige Wohngebiete.' },
                        { bold: 'Stolzenfels', text: ' – ein südlicher Stadtteil mit dem gleichnamigen Schloss am Rheinufer.' }
                    ]
                },
                geography: {
                    title: 'Geografie',
                    items: [
                        { text: 'Koblenz liegt im nördlichen Teil des Bundeslandes Rheinland-Pfalz am Zusammenfluss von Rhein und Mosel.' },
                        { text: 'Die Stelle, an der die beiden Flüsse zusammenfließen, heißt Deutsches Eck und gehört zu den bekanntesten Sehenswürdigkeiten Deutschlands.' },
                        { text: 'Die Stadt ist von Hügeln, Weinbergen und bewaldeten Höhen des Rheinischen Schiefergebirges umgeben.' },
                        { text: 'Koblenz gilt als Tor zum Oberen Mittelrheintal – einer malerischen Region mit Burgen, Weinbergen und mittelalterlichen Städten, die zum UNESCO-Welterbe gehört.' },
                        { text: 'Entlang von Rhein und Mosel verlaufen Uferpromenaden, Radwege und Aussichtspunkte.' },
                        { text: 'Die Festung Ehrenbreitstein auf dem hohen Rheinufer ist durch eine Seilbahn mit dem Stadtzentrum verbunden.' }
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Koblenz',
                    isList: true,
                    items: [
                        { bold: 'Klemens Wenzel von Metternich', text: ' – österreichischer Staatsmann, in Koblenz geboren.' },
                        { bold: 'Max von Schenkendorf', text: ' – deutscher Dichter der Romantik, mit der Rheinregion verbunden.' },
                        { bold: 'Joseph Görres', text: ' – Publizist, Schriftsteller und politischer Denker, arbeitete in Koblenz.' },
                        { bold: 'Kaiser Wilhelm I.', text: ' – sein Reiterstandbild am Deutschen Eck ist ein Wahrzeichen der Stadt.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    isList: true,
                    items: [
                        { text: 'Koblenz wurde von den Römern um 8 v. Chr. gegründet und zählt zu den ältesten Städten Deutschlands.' },
                        { text: 'Der Name der Stadt stammt vom lateinischen Wort Confluentes und bedeutet „Zusammenfluss der Flüsse“.' },
                        { text: 'Das Deutsche Eck, der Zusammenfluss von Rhein und Mosel, gilt als Symbol der deutschen Einheit.' },
                        { text: 'Die Festung Ehrenbreitstein ist eine der größten erhaltenen Festungen Europas.' },
                        { text: 'Die Seilbahn über den Rhein wurde zur Bundesgartenschau 2011 gebaut und ist heute eine beliebte Attraktion.' },
                        { text: 'Die Region um Koblenz ist für den Weinbau bekannt, insbesondere für Rhein- und Moselweine.' },
                        { text: 'Die historische Altstadt bewahrt viele Gebäude im Stil von Barock, Klassizismus und Romantik.' }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Koblenz zählt zu den ältesten Städten Deutschlands. Seine Geschichte beginnt bereits in der Römerzeit: Um 8 v. Chr. errichteten die Römer hier einen Militärposten am Zusammenfluss von Rhein und Mosel. Die Siedlung erhielt den Namen Confluentes, was „Zusammenfluss der Flüsse“ bedeutet.' },
                        { text: 'Aufgrund seiner strategisch günstigen Lage entwickelte sich Koblenz schnell zu einem wichtigen Handels- und Militärzentrum des Römischen Reiches. Straßen entlang von Rhein und Mosel kreuzten sich hier, und an den Ufern entstanden Befestigungen, Brücken und Häfen.' },
                        { text: 'Nach dem Abzug der Römer wurde die Stadt Teil des Frankenreichs. Im Mittelalter gehörte Koblenz den Erzbischöfen von Trier und entwickelte sich zu einem bedeutenden religiösen Zentrum der Region. In dieser Zeit entstanden zahlreiche Kirchen, Klöster und Befestigungen, von denen viele bis heute erhalten sind.' },
                        { text: 'Im 12. und 13. Jahrhundert wurde die Festung Ehrenbreitstein auf dem hohen rechten Rheinufer stark ausgebaut. Sie kontrollierte die Handels- und Verkehrswege auf dem Fluss und entwickelte sich zu einer der mächtigsten Festungen der Region.' },
                        { text: 'Im späten Mittelalter und in der Renaissance entwickelte sich Koblenz zu einer Handelsstadt am Schnittpunkt wichtiger Flussrouten. Besonders der Handel mit Wein, Holz und Waren entlang des Rheins spielte eine große Rolle.' },
                        { text: 'Ende des 18. Jahrhunderts wurde die Stadt von französischen Revolutionstruppen besetzt. In der napoleonischen Zeit wurde Koblenz Teil des französischen Verwaltungssystems, und viele kirchliche Besitztümer wurden säkularisiert.' },
                        { text: 'Nach dem Wiener Kongress 1815 kam Koblenz zu Preußen. Die Stadt erhielt große militärische Bedeutung: Die preußische Verwaltung erweiterte die Festung Ehrenbreitstein, und Koblenz wurde zu einem wichtigen Garnisonsstandort im Rheinland.' },
                        { text: 'Im 19. Jahrhundert wuchs die Stadt stark durch Schifffahrt, Eisenbahn und Handel. In dieser Zeit entstand am Deutschen Eck das Denkmal von Kaiser Wilhelm I.' },
                        { text: 'Im Zweiten Weltkrieg wurde Koblenz durch Bombenangriffe stark zerstört. Große Teile der Altstadt gingen verloren, viele bedeutende Bauwerke wurden später jedoch wieder aufgebaut.' },
                        { text: 'Nach dem Krieg wurde Koblenz Teil des Bundeslandes Rheinland-Pfalz. In der zweiten Hälfte des 20. Jahrhunderts entwickelte sich die Stadt zunehmend zu einem touristischen und kulturellen Zentrum der Region.' },
                        { text: 'Heute ist Koblenz bekannt für seine historische Altstadt, die Festung Ehrenbreitstein, seine Uferpromenaden und seine Lage am Eingang zum Oberen Mittelrheintal – einem UNESCO-Welterbe.' }
                    ]
                },
                meta: {
                    title: 'Koblenz – Stadt am Zusammenfluss von Rhein und Mosel',
                    description: 'Koblenz: Geschichte, Festungen, Uferpromenaden, Sehenswürdigkeiten und interessante Fakten über eine der ältesten Städte Deutschlands.',
                    ogTitle: 'Koblenz – Stadtinformationen',
                    ogDescription: 'Detaillierte Informationen über Koblenz: Geschichte, Rhein, Mosel, Festung Ehrenbreitstein und berühmte Orte der Stadt.',
                    ogImage: 'https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/koblenz-city/001.jpg'
                }
            }
        }
    }
]

export default datas