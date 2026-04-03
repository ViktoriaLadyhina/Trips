const datas = [
    {
        id: "sumy",
        path: "sumy",
        countryPath: "ukraine", regionsPath: "sumska", districtPath: "city",
        coord: { lat: 50.9216, lng: 34.8003 },
        gerb: "Ukraine/sumska/sumy-city/gerb.png",
        translations: {
            ru: {
                name: 'Сумы',
                countryName: "Украина", regionName: "Сумская область",
                desc: {
                    general: [
                        { text: 'Сумы – город областного подчинения, административный, экономический и культурный центр Сумской области. Основан 26 июля 1655 года. Размещён на берегах реки Псел и её притоков Сумки и Стрелки. Город делится на два административных района – Колпаковский и Заречный, созданные в 1973 году.' },
                        { text: 'Сумы являются ядром экономической и культурной жизни региона.' },
                    ],
                    population: [
                        { bold: 'Население:' },
                        { text: ' примерно 270 000 человек (2025)' }
                    ],
                    area: [
                        { bold: 'Площадь:' },
                        { text: ' около 145 км²' }
                    ],
                    postalCode: [
                        { bold: 'Почтовый индекс:' },
                        { text: ' 40000–40030' }
                    ],
                    phone: [
                        { bold: 'Телефонный код:' },
                        { text: ' +380 542' }
                    ],
                    officialSite: [
                        { bold: 'Официальный сайт города', link: 'https://smr.gov.ua/' }
                    ],
                    geography: [
                        { bold: 'Географическое положение:' },
                        { text: ' Сумы расположены в лесостепной зоне на северо-востоке Украины. Город и его район граничат: на юге с Тростянецким и Лебединским районами; на юго-востоке – с Краснопольским районом; на западе – с Белопольским районом; на севере – с Курской областью Российской Федерации.' },
                    ],
                    culture: [
                        { bold: 'Легенда о названии.' },
                        { text: ' Существует несколько версий происхождения названия города. Одна из них связана с находками древних охотничьих сумок. На гербе города, утверждённом в 1781 году, изображены три черные сумки с перевязками и золотыми пуговицами на прямоугольном щите, что символизирует богатство и торговое значение города.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    items: [
                        { text: 'Сумы называют «городом парков» за большое количество зелёных зон, роз и фонтанов.' },
                        { text: 'День города отмечается 2 сентября, в честь освобождения от немецких захватчиков в 1943 году.' },
                        { text: 'Сумское машиностроительное НПО им. Г.В. Фрунзе, Сумихимпром и другие промышленные предприятия известны в Украине и за её пределами.' },
                        { text: 'В городе действуют театр драмы и музыкальной комедии им. Г.О. Щепкина, театр юного зрителя, филармония, музей А.П. Чехова, областной краеведческий музей.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди',
                    items: [
                        { bold: 'Григорий Сковорода', text: ' – философ и поэт, чьи идеи оставили след в культурной жизни региона' },
                        { bold: 'Петр Ильич Чайковский', text: ' – композитор, имел связь с городом через исторические визиты' },
                        { bold: 'Антон Павлович Чехов', text: ' – писатель, в Сумах находится музей его имени' },
                        { bold: 'Иван Герасимович Харитоненко', text: ' – меценат, основатель сахарного завода, благотворитель города' },
                        { bold: 'Тарас Шевченко', text: ' – поэт и художник, бывал на территории региона' },
                    ]
                },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: 'На берегах Псла люди селились ещё с начала нашей эры.В II–VI веках здесь проживали славянские племена.Остатки их поселений и могильники обнаружены в северо- западной части города, на улице Павлова. ' },
                        { text: 'В VIII–X веках на территории бывшего села Тополье существовало поселение северян, а на Луке сохранились остатки городища Киевской Руси. ' },
                        { text: 'Точной даты основания города нет.Некоторые историки называют 1652 год, когда первые переселенцы прибыли сюда с городка Ставище.Наиболее признанная версия – 1655 год, когда 100 переселенцев под руководством Герасима Кондратьева основали город на реке Сумка. ' },
                        { text: 'Герасим Кондратьев участвовал в боях с татарами, турками и в Крымских походах, одновременно заботясь о духовном развитии города: он учредил мужской Успенский монастырь в селе Имела и женский Иоанно- Предтечинский в селе Лука, а также отстроил деревянные церкви Преображенскую, Николаевскую и Рождества Пресвятой Богородицы. ' },
                        { text: 'Сумский казачий полк(1652–1658 гг.) защищал южные границы России.В 1656–1658 годах под руководством российского воеводы К.Ю.Арсеньева возводилась крепость Сумы из дубовых колод, с подземным ходом к воде, земляными валами и рвами.Перекоп между Пслом и Сумкой завершал оборонительную линию с юга. ' },
                        { text: 'В 1659, 1662 и 1668 годах крепость выдержала осады татар.Сумская крепость стала важным центром военных действий, а позже – сборным пунктом российских войск во время крымских походов. ' },
                        { text: 'В XVIII веке Сумы превращаются в крупный торговый центр.На ярмарках продавали сахар, зерно, ремесленные изделия.В конце XVIII века город уже был известен как населённый пункт с развитыми ремеслами и торговлей, а в 1732 году насчитывалось более 7 700 жителей. ' },
                        { text: 'В XIX веке активно развивалась промышленность и архитектура: открывались заводы(мыловаренный, свечной, кожевенный), строились каменные здания и торговые ряды в стиле зрелого классицизма.В 1878 году Сумы включили в железнодорожную магистраль Люботин – Сумы – Ворожба, что усилило экономические связи. ' },
                        { text: 'XX век отмечен ростом культуры и образования: открыты театры, филармония, музыкальные и художественные школы, парки.Сумы стали «городом парков» благодаря инициативам местных меценатов и городских властей. ' }
                    ]
                },
                meta: {
                    title: "Сумы – город в Сумской области",
                    description: "Сумы: история, легенда о названии, промышленность, культура и интересные факты города.",
                    ogTitle: "Сумы – информация о городе",
                    ogDescription: "Подробная информация о Сумах: история, легенды, знаменитые жители, культура и экономика.",
                    ogImage: "https://our-travels.info/foto/Ukraine/sumska/sumy-city/altanka/009.jpg"
                }
            },
            ua: {
                name: 'Суми',
                countryName: "Україна", regionName: "Сумська область",
                desc: {
                    general: [
                        { text: 'Суми – місто обласного значення, адміністративний, економічний і культурний центр Сумської області. Засноване 26 липня 1655 року. Розташоване на берегах річки Псел та її приток – Сумки й Стрілки. Місто поділяється на два адміністративні райони – Ковпаківський і Зарічний, створені у 1973 році.' },
                        { text: 'Суми є ядром економічного та культурного життя регіону.' },
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' приблизно 270 000 осіб (2025)' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' близько 145 км²' }
                    ],
                    postalCode: [
                        { bold: 'Поштовий індекс:' },
                        { text: ' 40000–40030' }
                    ],
                    phone: [
                        { bold: 'Телефонний код:' },
                        { text: ' +380 542' }
                    ],
                    officialSite: [
                        { bold: 'Офіційний сайт міста', link: 'https://smr.gov.ua/' }
                    ],
                    geography: [
                        { bold: 'Географічне положення:' },
                        { text: ' Суми розташовані в лісостеповій зоні на північному сході України. Місто та його район межують: на півдні — з Тростянецьким і Лебединським районами; на південному сході — з Краснопільським районом; на заході — з Білопільським районом; на півночі — з Курською областю Російської Федерації.' },
                    ],
                    culture: [
                        { bold: 'Легенда про назву.' },
                        { text: ' Існує кілька версій походження назви міста. Одна з них пов’язана зі знахідками давніх мисливських сумок. На гербі міста, затвердженому у 1781 році, зображено три чорні сумки з перев’язками та золотими ґудзиками на прямокутному щиті, що символізує багатство й торговельне значення міста.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    items: [
                        { text: 'Суми називають «містом парків» через велику кількість зелених зон, троянд і фонтанів.' },
                        { text: 'День міста відзначається 2 вересня – на честь визволення від німецьких загарбників у 1943 році.' },
                        { text: 'Сумське машинобудівне НВО ім. Г.В. Фрунзе, «Сумихімпром» та інші промислові підприємства відомі в Україні та за її межами.' },
                        { text: 'У місті діють театр драми та музичної комедії ім. Г.О. Щепкіна, театр юного глядача, філармонія, музей А.П. Чехова, обласний краєзнавчий музей.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди',
                    items: [
                        { bold: 'Григорій Сковорода', text: ' – філософ і поет, чиї ідеї залишили помітний слід у культурному житті регіону' },
                        { bold: 'Петро Ілліч Чайковський', text: ' – композитор, мав зв’язок із містом через історичні візити' },
                        { bold: 'Антон Павлович Чехов', text: ' – письменник, у Сумах розташований музей його імені' },
                        { bold: 'Іван Герасимович Харитоненко', text: ' – меценат, засновник цукрового заводу, благодійник міста' },
                        { bold: 'Тарас Шевченко', text: ' – поет і художник, перебував на території регіону' },
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        { text: 'На берегах Псла люди селилися ще з початку нашої ери. У II–VI століттях тут проживали слов’янські племена. Рештки їхніх поселень і могильники виявлено в північно-західній частині міста, на вулиці Павлова.' },
                        { text: 'У VIII-X століттях на території колишнього села Тополя існувало поселення сіверян, а на Луці збереглися залишки городища Київської Русі.' },
                        { text: 'Точної дати заснування міста немає. Деякі історики називають 1652 рік, коли перші переселенці прибули сюди з містечка Ставище. Найбільш визнана версія – 1655 рік, коли 100 переселенців під керівництвом Герасима Кондратьєва заснували місто на річці Сумка.' },
                        { text: 'Герасим Кондратьєв брав участь у боях із татарами, турками та в Кримських походах, водночас дбаючи про духовний розвиток міста: він заснував чоловічий Успенський монастир у селі Імела та жіночий Іоанно-Предтеченський у селі Лука, а також збудував дерев’яні церкви – Преображенську, Миколаївську та Різдва Пресвятої Богородиці.' },
                        { text: 'Сумський козацький полк (1652–1658 рр.) захищав південні кордони Росії. У 1656–1658 роках під керівництвом російського воєводи К.Ю. Арсеньєва зводилася Сумська фортеця з дубових колод, із підземним ходом до води, земляними валами та ровами. Перекоп між Пслом і Сумкою завершував оборонну лінію з півдня.' },
                        { text: 'У 1659, 1662 і 1668 роках фортеця витримала облоги татар. Сумська фортеця стала важливим центром воєнних дій, а згодом – збірним пунктом російських військ під час Кримських походів.' },
                        { text: 'У XVIII столітті Суми перетворюються на великий торговельний центр. На ярмарках продавали цукор, зерно, ремісничі вироби. Наприкінці XVIII століття місто вже було відоме як населений пункт із розвиненими ремеслами й торгівлею, а у 1732 році налічувало понад 7 700 мешканців.' },
                        { text: 'У XIX столітті активно розвивалися промисловість і архітектура: відкривалися заводи (миловарний, свічковий, шкіряний), зводилися кам’яні будівлі та торгові ряди в стилі зрілого класицизму. У 1878 році Суми включили до залізничної магістралі Люботин – Суми – Ворожба, що посилило економічні зв’язки.' },
                        { text: 'XX століття ознаменувалося зростанням культури й освіти: відкривалися театри, філармонія, музичні та художні школи, парки. Суми стали «містом парків» завдяки ініціативам місцевих меценатів і міської влади.' }
                    ]
                },
                meta: {
                    title: "Суми – місто в Сумській області",
                    description: "Суми: історія, легенда про назву, промисловість, культура та цікаві факти міста.",
                    ogTitle: "Суми – інформація про місто",
                    ogDescription: "Детальна інформація про Суми: історія, легенди, відомі мешканці, культура та економіка.",
                    ogImage: "https://our-travels.info/foto/Ukraine/sumska/sumy-city/altanka/009.jpg"
                }
            },
            de: {
                name: 'Sumy',
                countryName: "Ukraine", regionName: "Oblast Sumy",
                desc: {
                    general: [
                        { text: 'Sumy ist eine Stadt von regionaler Bedeutung sowie das administrative, wirtschaftliche und kulturelle Zentrum der Oblast Sumy. Die Stadt wurde am 26. Juli 1655 gegründet. Sie liegt an den Ufern des Flusses Psel und seiner Nebenflüsse Sumka und Strilka. Administrativ ist die Stadt in zwei Bezirke gegliedert – Kowpakiwskyj und Saritschnyj, die 1973 gegründet wurden.' },
                        { text: 'Sumy bildet das wirtschaftliche und kulturelle Zentrum der Region.' },
                    ],
                    population: [
                        { bold: 'Einwohnerzahl:' },
                        { text: ' ca. 270.000 Menschen (2025)' }
                    ],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' etwa 145 km²' }
                    ],
                    postalCode: [
                        { bold: 'Postleitzahl:' },
                        { text: ' 40000–40030' }
                    ],
                    phone: [
                        { bold: 'Telefonvorwahl:' },
                        { text: ' +380 542' }
                    ],
                    officialSite: [
                        { bold: 'Offizielle Website der Stadt', link: 'https://smr.gov.ua/' }
                    ],
                    geography: [
                        { bold: 'Geografische Lage:' },
                        { text: 'Sumy liegt in der Waldsteppenzone im Nordosten der Ukraine. Die Stadt und ihr Bezirk grenzen: im Süden an die Bezirke Trostjanez und Lebedyn; im Südosten an den Bezirk Krasnopillja; im Westen an den Bezirk Bilopillja; im Norden an die Oblast Kursk der Russischen Föderation.' },
                    ],
                    culture: [
                        { bold: 'Legende zur Namensherkunft.' },
                        { text: 'Es gibt mehrere Versionen zur Herkunft des Stadtnamens. Eine davon ist mit Funden alter Jagdtaschen verbunden. Auf dem Stadtwappen, das 1781 genehmigt wurde, sind drei schwarze Taschen mit Bändern und goldenen Knöpfen auf einem rechteckigen Schild abgebildet, die Reichtum und die handelswirtschaftliche Bedeutung der Stadt symbolisieren.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    items: [
                        { text: 'Sumy wird aufgrund der großen Anzahl an Grünanlagen, Rosen und Springbrunnen als „Stadt der Parks“ bezeichnet.' },
                        { text: 'Der Tag der Stadt wird am 2. September gefeiert – zum Gedenken an die Befreiung von der deutschen Besatzung im Jahr 1943.' },
                        { text: 'Der Maschinenbaukonzern NPO Sumy im. H. W. Frunse, Sumychimprom und andere Industrieunternehmen sind in der Ukraine und darüber hinaus bekannt.' },
                        { text: 'In der Stadt gibt es das Akademische Theater für Drama und musikalische Komödie H. O. Schtschepkin, ein Jugendtheater, eine Philharmonie, das A.-P.-Tschechow-Museum sowie das regionale Heimatmuseum.' }
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten',
                    items: [
                        { bold: 'Hryhorij Skoworoda', text: ' – Philosoph und Dichter, dessen Ideen das kulturelle Leben der Region geprägt haben' },
                        { bold: 'Pjotr Iljitsch Tschaikowski', text: ' – Komponist, der durch historische Besuche mit der Stadt verbunden war' },
                        { bold: 'Anton Pawlowitsch Tschechow', text: ' – Schriftsteller, dem in Sumy ein Museum gewidmet ist' },
                        { bold: 'Iwan Herassymowytsch Charytonenko', text: ' – Mäzen, Gründer einer Zuckerfabrik und Wohltäter der Stadt' },
                        { bold: 'Taras Schewtschenko', text: ' – Dichter und Künstler, der sich zeitweise in der Region aufhielt' },
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: 'An den Ufern des Psel siedelten Menschen bereits seit Beginn unserer Zeitrechnung. Im 2.–6. Jahrhundert lebten hier slawische Stämme. Reste ihrer Siedlungen und Gräber wurden im nordwestlichen Teil der Stadt, in der Pawlowa-Straße, entdeckt.' },
                        { text: 'Im 8.–10. Jahrhundert existierte auf dem Gebiet des ehemaligen Dorfes Topolje eine Siedlung der Sewerjanen, und im Gebiet Luka sind Überreste einer Befestigung aus der Zeit der Kiewer Rus erhalten geblieben.' },
                        { text: 'Ein genaues Gründungsdatum der Stadt ist nicht bekannt. Einige Historiker nennen das Jahr 1652, als die ersten Siedler aus dem Städtchen Stawyschtsche hier ankamen. Die am weitesten anerkannte Version nennt jedoch das Jahr 1655, als 100 Siedler unter der Führung von Herasym Kondratjew die Stadt am Fluss Sumka gründeten.' },
                        { text: 'Herasym Kondratjew nahm an Kämpfen gegen Tataren und Türken sowie an den Krimfeldzügen teil und kümmerte sich zugleich um die geistige Entwicklung der Stadt: Er gründete das männliche Mariä-Entschlafens-Kloster im Dorf Imela und das weibliche Johannes-der-Täufer-Kloster im Dorf Luka sowie mehrere Holzkirchen – die Verklärungskirche, die Nikolaikirche und die Kirche der Geburt der Gottesmutter.' },
                        { text: 'Das Sumyer Kosakenregiment (1652–1658) schützte die südlichen Grenzen Russlands. In den Jahren 1656–1658 wurde unter der Leitung des russischen Wojewoden K. J. Arsenjew die Festung Sumy aus Eichenstämmen errichtet, mit unterirdischem Zugang zum Wasser, Erdwällen und Gräben. Ein Erdwall zwischen Psel und Sumka vervollständigte die Verteidigungslinie im Süden.' },
                        { text: 'In den Jahren 1659, 1662 und 1668 widerstand die Festung den Belagerungen der Tataren. Die Festung Sumy wurde zu einem wichtigen Zentrum militärischer Auseinandersetzungen und später zu einem Sammelpunkt russischer Truppen während der Krimfeldzüge.' },
                        { text: 'Im 18. Jahrhundert entwickelte sich Sumy zu einem bedeutenden Handelszentrum. Auf den Jahrmärkten wurden Zucker, Getreide und handwerkliche Erzeugnisse verkauft. Ende des 18. Jahrhunderts war die Stadt bereits als Ort mit entwickeltem Handwerk und Handel bekannt; 1732 zählte sie über 7.700 Einwohner.' },
                        { text: 'Im 19. Jahrhundert entwickelten sich Industrie und Architektur aktiv weiter: Fabriken (Seifen-, Kerzen- und Lederfabriken) wurden eröffnet, steinerne Gebäude und Marktreihen im Stil des reifen Klassizismus errichtet. 1878 wurde Sumy in die Eisenbahnlinie Ljubotyn – Sumy – Woroshba aufgenommen, was die wirtschaftlichen Verbindungen stärkte.' },
                        { text: 'Das 20. Jahrhundert war geprägt vom Wachstum von Kultur und Bildung: Theater, Philharmonie, Musik- und Kunstschulen sowie Parks wurden eröffnet. Dank der Initiativen lokaler Mäzene und der Stadtverwaltung wurde Sumy zur „Stadt der Parks“.' }
                    ]
                },
                meta: {
                    title: "Sumy – Stadt in der Oblast Sumy",
                    description: "Sumy: Geschichte, Legende zur Namensherkunft, Industrie, Kultur und interessante Fakten.",
                    ogTitle: "Sumy – Informationen über die Stadt",
                    ogDescription: "Detaillierte Informationen über Sumy: Geschichte, Legenden, bekannte Persönlichkeiten, Kultur und Wirtschaft.",
                    ogImage: "https://our-travels.info/foto/Ukraine/sumska/sumy-city/altanka/009.jpg"
                }
            }
        }

    },
]
export default datas