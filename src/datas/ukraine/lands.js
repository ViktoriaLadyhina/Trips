const datas = [
    {
        id: 17,
        hasInfo: true,
        path: 'sumska',
        translations: {
            ru: {
                name: 'Сумская область',
                countryName: "Украина",
                desc: {
                    capital: [
                        { bold: 'Административный центр:', text: ' город Сумы. Здесь сосредоточена значительная часть промышленного потенциала региона: производится большая часть промышленной продукции области. Сумы – один из старейших городов Слободской Украины с богатой историей и традициями. Горожане гордятся архитектурными памятниками, театрами и музеями, а сам город известен как «город фонтанов».' }],
                    geography: [
                        { bold: 'Географическое положение:' },
                        { text: ' Сумская область расположена на северо-востоке Украины: на севере и востоке граничит с Брянской, Курской и Белгородской областями России, на юге и юго-востоке – с Полтавской и Харьковской областями Украины, на западе – с Черниговской областью.' },
                        { text: ' Площадь региона составляет 23,8 тыс. км². С запада на восток область простирается на 170 км, с севера на юг – на 200 км.' }
                    ],
                    population: [
                        { bold: 'Население:' },
                        { text: ' По данным на 2023 год, в области проживает около 1 034 000 человек. Основное население – украинцы; также здесь живут русские, белорусы и представители других национальностей.' }
                    ],
                    economy: [
                        { bold: 'Экономика:' },
                        { text: ' Сумщина обладает развитой промышленностью:' },
                        { text: 'Машиностроение – одно из ведущих направлений промышленности региона, представленное предприятием «Сумское НПО».' },
                        { text: 'Химическая промышленность – завод «СумыХимПром».' },
                        { text: 'Пищевая промышленность и сельское хозяйство также играют важную роль.' },
                        { text: 'В Шостке работает один из старейших в Европе пороховых заводов.' },
                        { text: 'В Сумах есть завод по производству газовых турбин, один из значимых в стране.' }
                    ],
                    notablePeople: {
                        title: 'Известные личности',
                        items: [
                            { bold: 'Пантелеймон Кулиш', text: ' – писатель.' },
                            { bold: 'Александр Довженко', text: ' – кинорежиссёр.' },
                            { bold: 'Валерий Чкалов', text: ' – лётчик-испытатель.' }
                        ]
                    },
                    interestingFacts: {
                        title: 'Интересные факты',
                        items: [
                            { text: 'Город Сумы был основан в 1655 году казаками, бежавшими от польской власти.' },
                            { text: 'На территории области протекает самая длинная река Левобережной Украины – Сейм.' },
                            { text: 'В 1659 году в Конотопе произошла знаменитая Конотопская битва, где казаки разбили московское войско.' },
                            { text: 'В Ахтырке сохранилась необычная церковь, построенная в форме восьмиугольника.' },
                            { text: 'В XVIII веке Екатерина II посещала Кролевецкий дворец.' },
                            { text: 'Регион известен своими глиняными карьерами, где добывается высококачественная керамическая глина.' },
                            { text: 'Сумская область считается одной из самых экологически чистых в Украине.' }
                        ]
                    }
                    ,
                    culture: [
                        { bold: 'Культура и традиции:' },
                        { text: ' Сумщина богата не только историческими событиями, но и народными легендами. Особое место занимает образ конотопских ведьм – персонажей украинского фольклора, окружённых множеством преданий, которые нашли отражение в повести Григория Квитки-Основьяненко «Конотопская ведьма». Эти истории, наполненные юмором и мистикой, стали частью культурной памяти и символом самобытности региона.' }
                    ]
                },
                symbols: {
                    title: "Геральдика",
                    items: [
                        {
                            bold: "Герб:",
                            text: `
        Элементы герба расположены на геральдическом щите с синим полем и жёлтой окантовкой. Синий цвет рядом с жёлтым издавна традиционен для Сумщины.<br>
        В синем поле расположен золотой шлем со серебряными деталями, под ним геральдически выгнутый золотой колос с 25 зернышками, слева – золотой охтырский крест.<br>
        Золотой шлем в верхней части герба символизирует историческое начало наших земель со времён Киевской Руси.<br>
        Золотой колос, согнутый в виде буквы «С» с 25 зернами, символизирует исторический путь формирования Сумской области, а также хлебопашество – основное занятие жителей и черты характера: трудолюбие, гостеприимность, домовитость, любовь к родной земле.<br>
        Золотой крест указывает на духовность, которая передаётся из поколения в поколение.<br>
        Расположение этих элементов под золотым шлемом символизирует готовность и способность жителей области защищать родную землю, духовные и материальные ценности, что на протяжении всей истории проявлялось – от битв с кочевыми племенами до героических страниц Второй мировой войны.<br>
        Эти три элемента также символизируют три составные части Сумской области: шлем – земли, отошедшие от Черниговской области; колос – земли, отошедшие от Харьковской области; крест – земли, отошедшие от Полтавской области.<br>
        Сине-жёлтые цвета подчеркивают, что область является неотъемлемой частью государства Украина.
      `,
                            img: "Ukraine/sumska/gerb.gif"
                        },
                        {
                            bold: "Флаг:",
                            text: `
        Флаг Сумской области представляет собой синее полотнище с соотношением ширины к длине 2:3.<br>
        В центре размещён герб области, размер которого соотносится с высотой флага как 2:3.
      `,
                            img: "Ukraine/sumska/flag.gif"
                        }
                    ]
                },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { bold: 'Древнейшие времена:' },
                        { text: ' Заселение территории современной Сумщины началось около 15 тысяч лет назад. Археологические находки вблизи Шостки, Конотопа и Сум свидетельствуют о жизни первобытных охотников на мамонтов. В эпоху бронзы и раннего железа здесь жили земледельческо-скотоводческие племена, оставившие многочисленные поселения и курганы. Позднее на этих землях сформировались раннеславянские культуры, а в VII–X веках Сумщину населяли северяне.' },
                        { bold: 'Киевская Русь:' },
                        { text: ' В этот период территория области входила в состав одного из самых могущественных государств Европы. Несмотря на постоянные набеги кочевников, край был густо заселён и имел свыше 80 городищ и поселений. Среди них — Ромны, Вирь, Путивль, Глухов. Именно о событиях, происходивших на этих землях, рассказывает «Слово о полку Игореве».' },
                        { bold: 'XVI–XVII века:' },
                        { text: ' Сумщина неоднократно становилась ареной борьбы разных государств. В 1606 году в Путивле началась крестьянская война под руководством Ивана Болотникова, одним из ближайших соратников которого был путивлянин Юрий Беззубцев. Позже эти земли вошли в состав Гетманщины. В 1659 году под Конотопом состоялась знаменитая битва, в которой войска гетмана Ивана Выговского разбили российскую армию.' },
                        { bold: 'Начало XVIII века:' },
                        { text: ' В годы Северной войны население Сумщины оказалось в центре борьбы гетмана Ивана Мазепы с царём Петром І. Трагедия народа заключалась в том, что часть жителей поддержала гетмана, а другие — царя. Это привело к жестоким репрессиям: в Лебедине были казнены сторонники Мазепы, в Сумах провозглашён манифест с его осуждением. После разрушения Батурина новой столицей Гетманской Украины стал Глухов, что сделало Сумщину важным политическим центром.' },
                        { bold: 'XIX век:' },
                        { text: ' Регион стал одним из центров промышленного развития. Особое значение имело сахароварение: Сумы называли «сахарной столицей», а фамилии Терещенко и Харитоненко стали символами успешного предпринимательства. Сумщина также отличалась высоким уровнем образования и культурной жизни: в Сумах, Глухове и других городах открывались школы, библиотеки и народные училища.' },
                        { bold: 'XX век:' },
                        { text: ' В 1932–1933 годах область тяжело пострадала от голодомора, унёсшего жизни тысяч людей. Во время Второй мировой войны Сумщина оказалась в зоне ожесточённых боёв и нацистской оккупации. Погибли десятки тысяч мирных жителей, тысячи были угнаны в Германию. Но именно здесь развернулось мощное партизанское движение. Отряды Сидора Ковпака, Александра Сабурова и многих других действовали по всей области, проводили рейды в тылу врага, разрушали коммуникации и железные дороги. Их борьба стала символом мужества и сопротивления. Сегодня в Сумах, Путивле, Кролевце, Шостке и других городах установлены памятники и созданы музеи в честь героических партизан.' },
                        { bold: 'Современность:' },
                        { text: ' Сумщина продолжает сохранять богатое историческое наследие, а память о героическом прошлом – от древних славянских городищ до партизанской борьбы – является важной частью культурной идентичности области.' },
                        { bold: 'Наши дни:' },
                        { text: 'В феврале 2022 года Сумщина одной из первых приняла на себя удар полномасштабного вторжения России. Пограничные города и сёла подверглись ожесточённым обстрелам и разрушениям, многие населённые пункты, расположенные всего в нескольких километрах от границы, оказались почти стёрты с лица земли.' },
                        { text: 'Жители были вынуждены покидать свои дома, спасаясь от постоянной угрозы. Несмотря на трагедию и огромные потери, область проявила удивительную стойкость: местные общины сплотились, чтобы выстоять и сохранить жизнь.' },
                        { text: 'Особое упоминание заслуживает город Ахтырка, который в 2022 году был удостоен звания «Город-Герой Украины» за массовый героизм жителей и стойкость в обороне города.' },
                        { text: 'Эта новейшая страница истории Сумщины стала символом мужества и несокрушимости её народа.' }
                    ]
                },
                discriptRegions:
                {
                    title: "Районы Сумской области",
                    items: [
                        { id: 1, name: "Сумский", hasInfo: false, path: "sumskyi" },
                        { id: 2, name: "Ахтырский", hasInfo: false, path: "akhtyrskyi" },
                        { id: 3, name: "Конотопский", hasInfo: false, path: "konotopskyi" },
                        { id: 4, name: "Роменский", hasInfo: false, path: "romenskyi" },
                        { id: 5, name: "Шосткинский", hasInfo: false, path: "shostkynskyi" }
                    ]
                },
                cities: {
                    title: "Города с областным подчинением",
                    items: [
                        { id: 1, name: "Сумы", hasInfo: true, path: "sumy" },
                        { id: 2, name: "Лебедин", hasInfo: false, path: "lebedyn" },
                        { id: 3, name: "Ромны", hasInfo: false, path: "romny" },
                        { id: 4, name: "Шостка", hasInfo: false, path: "shostka" },
                        { id: 5, name: "Ахтырка", hasInfo: false, path: "akhtyrka" },
                        { id: 6, name: "Глухов", hasInfo: false, path: "gluhov" },
                        { id: 7, name: "Конотоп", hasInfo: false, path: "konotop" }
                    ]
                },
                meta: {
                    title: "Сумская область – информация о регионе",
                    description: "Сумская область: города, история, культура, экономика и интересные факты.",
                    ogTitle: "Сумская область – информация о регионе",
                    ogDescription: "Подробная информация о Сумской области: история, культура, города и достопримечательности.",
                    ogImage: "https://our-travels.info/foto/Ukraine/Sumy/sumy-map.jpg"
                }
            },
            ua: {
                name: 'Сумська область',
                countryName: "Україна",
                desc: {
                    capital: [{ bold: 'Адміністративний центр:', text: ' місто Суми. Тут зосереджена значна частина промислового потенціалу регіону: виробляється більшість промислової продукції області. Суми – одне з найстаріших міст Слобідської України з багатою історією та традиціями. Мешканці пишаються архітектурними пам’ятками, театрами та музеями, а саме місто відоме як «місто фонтанів».' }],
                    geography: [
                        { bold: 'Географічне положення:' },
                        { text: ' Сумська область розташована на північному сході України: на півночі та сході межує з Брянською, Курською та Бєлгородською областями Росії, на півдні та південному сході – з Полтавською та Харківською областями України, на заході – з Чернігівською областю.' },
                        { text: ' Площа регіону становить 23,8 тис. км². З заходу на схід область простягається на 170 км, з півночі на південь – на 200 км.' }
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' За даними на 2023 рік, в області проживає близько 1 034 000 осіб. Основне населення – українці; також тут живуть росіяни, білоруси та представники інших національностей.' }
                    ],
                    economy: [
                        { bold: 'Економіка:' },
                        { text: ' Сумщина має розвинену промисловість:' },
                        { text: 'Машинобудування – один з провідних напрямів промисловості регіону, представлений підприємством «Сумське НВО».' },
                        { text: 'Хімічна промисловість – завод «СумиХімПром».' },
                        { text: 'Харчова промисловість та сільське господарство також відіграють важливу роль.' },
                        { text: 'У Шостці працює один із найстаріших у Європі порохових заводів.' },
                        { text: 'У Сумах є завод з виробництва газових турбін, один із значущих у країні.' }
                    ],
                    notablePeople: {
                        title: 'Відомі особистості',
                        items: [
                            { bold: 'Пантелеймон Куліш', text: ' – письменник.' },
                            { bold: 'Олександр Довженко', text: ' – кінорежисер.' },
                            { bold: 'Валерій Чкалов', text: ' – льотчик-випробувач.' }
                        ]
                    },
                    interestingFacts: {
                        title: 'Цікаві факти',
                        items: [
                            { text: 'Місто Суми було засноване в 1655 році козаками, що втекли від польської влади.' },
                            { text: 'На території області протікає найдовша річка Лівобережної України – Сейм.' },
                            { text: 'У 1659 році в Конотопі відбулася знаменита Конотопська битва, де козаки розбили московське військо.' },
                            { text: 'В Ахтирці збереглася незвичайна церква, побудована у формі восьмикутника.' },
                            { text: 'У XVIII столітті Катерина II відвідувала Кролевецький палац.' },
                            { text: 'Регіон відомий своїми глиняними кар’єрами, де видобувається високоякісна керамічна глина.' },
                            { text: 'Сумська область вважається однією з найекологічніших в Україні.' }
                        ]
                    },
                    culture: [
                        { bold: 'Культура та традиції:' },
                        { text: ' Сумщина багата не тільки історичними подіями, а й народними легендами. Особливе місце займає образ конотопських відьом – персонажів українського фольклору, оточених численними переказами, що знайшли відображення в повісті Григорія Квітки-Основ’яненка «Конотопська відьма». Ці історії, сповнені гумору та містики, стали частиною культурної пам’яті та символом самобутності регіону.' }
                    ]
                },
                symbols: {
                    title: "Геральдика",
                    items: [
                        {
                            bold: "Герб:",
                            text: `
        Елементи герба розташовані на геральдичному щиті з синім полем та жовтою окантовкою. Синій колір поруч із жовтим здавна традиційний для Сумщини.<br>
        У синьому полі розташований золотий шолом із срібними деталями, під ним геральдично вигнутий золотий колос із 25 зернятками, зліва – золотий охтирський хрест.<br>
        Золотий шолом у верхній частині герба символізує історичне походження наших земель ще з часів Київської Русі.<br>
        Золотий колос, зігнутий у вигляді букви «С» із 25 зернами, символізує історичний шлях формування Сумської області, а також хліборобство – основне заняття жителів та риси характеру: працьовитість, гостинність, домовитість, любов до рідної землі.<br>
        Золотий хрест вказує на духовність, яка передається з покоління в покоління.<br>
        Розташування цих елементів під золотим шоломом символізує готовність і здатність жителів області захищати рідну землю, духовні та матеріальні цінності, що протягом усієї історії проявлялося – від битв із кочовими племенами до героїчних сторінок Другої світової війни.<br>
        Ці три елементи також символізують три складові частини Сумської області: шолом – землі, що відійшли від Чернігівської області; колос – землі, що відійшли від Харківської області; хрест – землі, що відійшли від Полтавської області.<br>
        Сине-жовті кольори підкреслюють, що область є невід’ємною частиною держави Україна.
      `,
                            img: "Ukraine/sumska/gerb.gif"
                        },
                        {
                            bold: "Прапор:",
                            text: `
        Прапор Сумської області являє собою синє полотнище із співвідношенням ширини до довжини 2:3.<br>
        У центрі розміщений герб області, розмір якого співвідноситься з висотою прапора як 2:3.
      `,
                            img: "Ukraine/sumska/flag.gif"
                        }
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        { bold: 'Давні часи:' },
                        { text: ' Заселення території сучасної Сумщини розпочалося близько 15 тисяч років тому. Археологічні знахідки поблизу Шостки, Конотопа та Сум свідчать про життя первісних мисливців на мамонтів. У добу бронзи та раннього заліза тут жили землеробсько-скотарські племена, залишивши численні поселення та кургани. Пізніше на цих землях сформувалися ранньослов’янські культури, а в VII–X століттях Сумщину населяли сіверяни.' },
                        { bold: 'Київська Русь:' },
                        { text: ' У цей період територія області входила до складу одного з наймогутніших держав Європи. Незважаючи на постійні набіги кочівників, край був густо заселений і мав понад 80 городищ і поселень. Серед них – Ромни, Вирь, Путивль, Глухів. Саме про події, що відбувалися на цих землях, розповідає «Слово о полку Ігоревім».' },
                        { bold: 'XVI–XVII століття:' },
                        { text: ' Сумщина неодноразово ставала ареною боротьби різних держав. У 1606 році в Путивлі почалася селянська війна під проводом Івана Болотникова, одним із найближчих соратників якого був путивлянин Юрій Беззубцев. Пізніше ці землі увійшли до складу Гетьманщини. У 1659 році під Конотопом відбулася знаменита битва, в якій війська гетьмана Івана Виговського розбили російську армію.' },
                        { bold: 'Початок XVIII століття:' },
                        { text: ' У роки Північної війни населення Сумщини опинилося в центрі боротьби гетьмана Івана Мазепи з царем Петром І. Трагедія народу полягала в тому, що частина жителів підтримала гетьмана, а інші – царя. Це призвело до жорстоких репресій: у Лебедині були страчені прихильники Мазепи, у Сумах проголошено маніфест із його засудженням. Після руйнування Батурина новою столицею Гетьманської України став Глухів, що зробило Сумщину важливим політичним центром.' },
                        { bold: 'XIX століття:' },
                        { text: ' Регіон став одним із центрів промислового розвитку. Особливе значення мало цукроваріння: Суми називали «цукровою столицею», а прізвища Терещенко та Харитоненко стали символами успішного підприємництва. Сумщина також відзначалася високим рівнем освіти та культурного життя: у Сумах, Глухові та інших містах відкривалися школи, бібліотеки та народні училища.' },
                        { bold: 'XX століття:' },
                        { text: ' У 1932–1933 роках область сильно постраждала від голодомору, що забрав життя тисяч людей. Під час Другої світової війни Сумщина опинилася в зоні запеклих боїв та нацистської окупації. Загинули десятки тисяч мирних жителів, тисячі були вивезені до Німеччини. Але саме тут розгорнулося потужне партизанське рух. Загін Сидора Ковпака, Олександра Сабурова та багатьох інших діяли по всій області, проводили рейди в тилу ворога, руйнували комунікації та залізниці. Їхня боротьба стала символом мужності та опору.' },
                        { bold: 'Сучасність:' },
                        { text: ' Сумщина продовжує зберігати багату історичну спадщину, а пам’ять про героїчне минуле – від давніх слов’янських городищ до партизанської боротьби – є важливою частиною культурної ідентичності області.' },
                        { bold: 'Наші дні:' },
                        { text: 'У лютому 2022 року Сумщина однією з перших прийняла на себе удар повномасштабного вторгнення Росії. Прикордонні міста та села зазнали жорстоких обстрілів і руйнувань, багато населених пунктів, розташованих всього за кілька кілометрів від кордону, опинилися майже стерті з лиця землі.' },
                        { text: 'Мешканці були змушені покидати свої домівки, рятуючись від постійної загрози. Незважаючи на трагедію та величезні втрати, область проявила дивовижну стійкість: місцеві громади об’єдналися, щоб вистояти та зберегти життя.' },
                        { text: 'Особливо слід відзначити місто Ахтирка, яке у 2022 році отримало звання «Місто-герой України» за масовий героїзм мешканців та стійкість у обороні міста.' },
                        { text: 'Ця новітня сторінка історії Сумщини стала символом мужності та непохитності її народу.' }

                    ]
                },
                discriptRegions:
                {
                    title: "Райони Сумської області",
                    items: [
                        { id: 1, name: "Сумський", hasInfo: false, path: "sumskyi" },
                        { id: 2, name: "Ахтирський", hasInfo: false, path: "akhtyrskyi" },
                        { id: 3, name: "Конотопський", hasInfo: false, path: "konotopskyi" },
                        { id: 4, name: "Роменський", hasInfo: false, path: "romenskyi" },
                        { id: 5, name: "Шосткинський", hasInfo: false, path: "shostkynskyi" }
                    ]
                },
                cities: {
                    title: "Міста обласного підпорядкування",
                    items: [
                        { id: 1, name: "Суми", hasInfo: true, path: "sumy" },
                        { id: 2, name: "Лебедин", hasInfo: false, path: "lebedyn" },
                        { id: 3, name: "Ромни", hasInfo: false, path: "romny" },
                        { id: 4, name: "Шостка", hasInfo: false, path: "shostka" },
                        { id: 5, name: "Ахтирка", hasInfo: false, path: "akhtyrka" },
                        { id: 6, name: "Глухів", hasInfo: false, path: "gluhov" },
                        { id: 7, name: "Конотоп", hasInfo: false, path: "konotop" }
                    ]
                },
                meta: {
                    title: "Сумська область – інформація про регіон",
                    description: "Сумська область: міста, історія, культура, економіка та цікаві факти.",
                    ogTitle: "Сумська область – інформація про регіон",
                    ogDescription: "Детальна інформація про Сумську область: історія, культура, міста та визначні місця.",
                    ogImage: "https://our-travels.info/foto/Ukraine/Sumy/sumy-map.jpg"
                }
            },
            de: {
                name: 'Oblast Sumy',
                countryName: "Ukraine",
                desc: {
                    capital: [{ bold: 'Verwaltungszentrum:', text: ' die Stadt Sumy. Hier konzentriert sich ein großer Teil des industriellen Potenzials der Region: ein Großteil der Industrieproduktion der Oblast wird hier hergestellt. Sumy ist eine der ältesten Städte Slobodschukrains mit reicher Geschichte und Traditionen. Die Einwohner sind stolz auf architektonische Denkmäler, Theater und Museen, und die Stadt selbst ist als „Stadt der Brunnen“ bekannt.' }],
                    geography: [
                        { bold: 'Geographische Lage:' },
                        { text: ' Die Oblast Sumy liegt im Nordosten der Ukraine: im Norden und Osten grenzt sie an die Regionen Brjansk, Kursk und Belgorod in Russland, im Süden und Südosten an die Regionen Poltawa und Charkiw der Ukraine, im Westen an die Region Tschernihiw.' },
                        { text: ' Die Fläche der Region beträgt 23,8 Tsd. km². Von Westen nach Osten erstreckt sich die Oblast über 170 km, von Norden nach Süden über 200 km.' }
                    ],
                    population: [
                        { bold: 'Bevölkerung:' },
                        { text: ' Nach Angaben von 2023 leben etwa 1.034.000 Menschen in der Region. Die Mehrheit sind Ukrainer; es gibt auch Russen, Weißrussen und Vertreter anderer Nationalitäten.' }
                    ],
                    economy: [
                        { bold: 'Wirtschaft:' },
                        { text: ' Die Region Sumy verfügt über eine entwickelte Industrie:' },
                        { text: 'Maschinenbau — einer der führenden Industriezweige, vertreten durch das Unternehmen „Sumy NPO“.' },
                        { text: 'Chemische Industrie — Fabrik „SumyKhimProm“.' },
                        { text: 'Lebensmittelindustrie und Landwirtschaft spielen ebenfalls eine wichtige Rolle.' },
                        { text: 'In Schostka arbeitet eine der ältesten Schießpulverfabriken Europas.' },
                        { text: 'In Sumy gibt es eine Fabrik zur Herstellung von Gasturbinen, eine der bedeutendsten im Land.' }
                    ],
                    notablePeople: {
                        title: 'Bekannte Persönlichkeiten',
                        items: [
                            { bold: 'Pantelejmon Kulisch', text: ' – Schriftsteller.' },
                            { bold: 'Alexander Dowshenko', text: ' – Filmregisseur.' },
                            { bold: 'Walerij Tschkalow', text: ' – Testpilot.' }
                        ]
                    },
                    interestingFacts: {
                        title: 'Interessante Fakten',
                        items: [
                            { text: 'Die Stadt Sumy wurde 1655 von Kosaken gegründet, die vor der polnischen Herrschaft flohen.' },
                            { text: 'Im Gebiet fließt der längste Fluss des Linken Ufers der Ukraine – der Sejm.' },
                            { text: '1659 fand in Konotop die berühmte Schlacht von Konotop statt, in der die Kosaken die russische Armee besiegten.' },
                            { text: 'In Achtyrka ist eine ungewöhnliche achteckige Kirche erhalten geblieben.' },
                            { text: 'Im 18. Jahrhundert besuchte Katharina II. den Palast von Krolewets.' },
                            { text: 'Die Region ist für ihre Tonbergwerke bekannt, in denen hochwertige Keramikton abgebaut wird.' },
                            { text: 'Die Oblast Sumy gilt als eine der ökologisch saubersten Regionen der Ukraine.' }
                        ]
                    },
                    culture: [
                        { bold: 'Kultur und Traditionen:' },
                        { text: ' Sumy ist reich an historischen Ereignissen und Volkslegenden. Besonders bekannt ist das Bild der Konotoper Hexen – Figuren der ukrainischen Folklore, umgeben von zahlreichen Überlieferungen, die in der Erzählung von Hryhorij Kvitka-Osnovjanenko „Die Hexe von Konotop“ dargestellt werden. Diese Geschichten, voller Humor und Mystik, sind Teil des kulturellen Gedächtnisses und ein Symbol der Eigenständigkeit der Region.' }
                    ]
                },
                symbols: {
                    title: "Heraldik",
                    items: [
                        {
                            bold: "Wappen:",
                            text: `
        Die Elemente des Wappens sind auf einem heraldischen Schild mit blauem Feld und gelbem Rand angeordnet. Blau neben Gelb ist in Sumy traditionell.<br>
        Im blauen Feld befindet sich ein goldener Helm mit silbernen Details, darunter ein heraldisch gebogener goldener Ährenkolben mit 25 Körnern, links ein goldenes Achtyrka-Kreuz.<br>
        Der goldene Helm im oberen Teil des Wappens symbolisiert den historischen Ursprung unserer Länder seit der Kiewer Rus.<br>
        Der goldene Ährenkolben, gebogen in Form des Buchstabens „S“ mit 25 Körnern, symbolisiert den historischen Weg der Bildung der Oblast Sumy sowie die Landwirtschaft – die Haupttätigkeit der Einwohner und Charakterzüge: Fleiß, Gastfreundschaft, Häuslichkeit, Liebe zum Heimatland.<br>
        Das goldene Kreuz weist auf Spiritualität hin, die von Generation zu Generation weitergegeben wird.<br>
        Die Anordnung dieser Elemente unter dem goldenen Helm symbolisiert die Bereitschaft und Fähigkeit der Bewohner, ihr Heimatland und die geistigen sowie materiellen Werte zu schützen, was sich in der gesamten Geschichte gezeigt hat – von Kämpfen gegen Nomadenstämme bis zu heldenhaften Kapiteln des Zweiten Weltkriegs.<br>
        Diese drei Elemente symbolisieren auch die drei Teile der Oblast Sumy: Helm – Gebiete, die von der Oblast Tschernihiw abgetrennt wurden; Ähre – Gebiete, die von der Oblast Charkiw abgetrennt wurden; Kreuz – Gebiete, die von der Oblast Poltawa abgetrennt wurden.<br>
        Die blau-gelben Farben unterstreichen, dass die Region ein integraler Bestandteil des Staates Ukraine ist.
      `,
                            img: "Ukraine/sumska/gerb.gif"
                        },
                        {
                            bold: "Flagge:",
                            text: `
        Die Flagge der Oblast Sumy ist ein blaues Tuch mit dem Verhältnis von Breite zu Länge 2:3.<br>
        Im Zentrum befindet sich das Wappen der Region, dessen Größe in Höhe des Flaggentuchs im Verhältnis 2:3 steht.
      `,
                            img: "Ukraine/sumska/flag.gif"
                        }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { bold: 'Urzeiten:' },
                        { text: ' Die Besiedlung des heutigen Gebiets der Oblast Sumy begann vor etwa 15.000 Jahren. Archäologische Funde in der Nähe von Schostka, Konotop und Sumy zeugen vom Leben der prähistorischen Mammutjäger. In der Bronze- und frühen Eisenzeit lebten hier landwirtschaftlich und viehzuchtlich orientierte Stämme, die zahlreiche Siedlungen und Grabhügel hinterließen. Später entwickelten sich auf diesen Gebieten frühslawische Kulturen, und im 7.–10. Jahrhundert lebten die Seweren in Sumy.' },
                        { bold: 'Kiewer Rus:' },
                        { text: ' In dieser Zeit gehörte das Gebiet zur mächtigsten Staaten Europas. Trotz ständiger Überfälle von Nomaden war das Gebiet dicht besiedelt und hatte über 80 Städte und Siedlungen, darunter Romny, Vyr, Putivl und Hluchiw. Über die Ereignisse auf diesen Gebieten berichtet das „Wort vom Fürsten Igor“. ' },
                        { bold: '16.–17. Jahrhundert:' },
                        { text: ' Sumy war mehrfach Schauplatz von Kämpfen verschiedener Staaten. 1606 begann in Putivl der Bauernaufstand unter der Führung von Iwan Bolotnikow, einer der engsten Gefährten war der Putivler Jurij Beszubzew. Später gehörten diese Gebiete zur Hetmanat. 1659 fand bei Konotop die berühmte Schlacht statt, in der die Truppen des Hetmans Iwan Wyhowski die russische Armee besiegten.' },
                        { bold: 'Anfang 18. Jahrhundert:' },
                        { text: ' Während des Nordischen Krieges befand sich die Bevölkerung von Sumy im Zentrum des Konflikts zwischen Hetman Iwan Mazepa und Zar Peter I. Die Tragödie bestand darin, dass ein Teil der Bevölkerung den Hetman unterstützte, andere den Zar. Dies führte zu grausamen Repressionen: in Lebedyn wurden Mazepas Anhänger hingerichtet, in Sumy wurde ein Manifest zu seiner Verurteilung verkündet. Nach der Zerstörung von Baturyn wurde Hluchiw neue Hauptstadt der Hetmanat-Ukraine, was Sumy zu einem wichtigen politischen Zentrum machte.' },
                        { bold: '19. Jahrhundert:' },
                        { text: ' Die Region wurde zu einem Zentrum der industriellen Entwicklung. Besonders bedeutend war die Zuckerproduktion: Sumy wurde als „Zuckerhauptstadt“ bezeichnet, die Namen Tereschtschenko und Charitonenko wurden zum Symbol erfolgreichen Unternehmertums. Sumy zeichnete sich auch durch ein hohes Bildungs- und Kulturlevel aus: in Sumy, Hluchiw und anderen Städten wurden Schulen, Bibliotheken und Volksschulen eröffnet.' },
                        { bold: '20. Jahrhundert:' },
                        { text: ' 1932–1933 erlitt die Region stark unter dem Holodomor, der Tausende Menschenleben forderte. Während des Zweiten Weltkriegs befand sich Sumy in der Zone heftiger Kämpfe und der Nazi-Besatzung. Zehntausende Zivilisten starben, Tausende wurden nach Deutschland verschleppt. Aber hier entwickelte sich eine starke Partisanenbewegung. Die Truppen von Sydor Kowpak, Alexander Saburov und vielen anderen operierten in der ganzen Region, führten Überfälle hinter feindlichen Linien durch und zerstörten Kommunikation und Eisenbahnen. Ihr Kampf wurde zum Symbol von Mut und Widerstand.' },
                        { bold: 'Gegenwart:' },
                        { text: ' Sumy bewahrt weiterhin ein reiches historisches Erbe, und das Gedenken an die heldenhafte Vergangenheit – von den alten slawischen Städten bis zum Partisanenkampf – ist ein wichtiger Teil der kulturellen Identität der Region.' },
                        { bold: 'Heute:' },
                        { text: 'Im Februar 2022 erlebte die Region Sumy als eine der ersten den Angriff der umfassenden Invasion Russlands. Grenzstädte und Dörfer wurden heftig beschossen und zerstört, viele Siedlungen, die nur wenige Kilometer von der Grenze entfernt liegen, wurden nahezu dem Erdboden gleichgemacht.' },
                        { text: 'Die Bewohner waren gezwungen, ihre Häuser zu verlassen, um sich vor der ständigen Bedrohung zu retten. Trotz der Tragödie und enormer Verluste zeigte die Region eine erstaunliche Standhaftigkeit: die lokalen Gemeinden schlossen sich zusammen, um durchzuhalten und Leben zu bewahren.' },
                        { text: 'Besondere Erwähnung verdient die Stadt Achtyrka, die 2022 den Titel „Stadt-Held der Ukraine“ erhielt für den massenhaften Heldenmut der Einwohner und die Standhaftigkeit bei der Verteidigung der Stadt.' },
                        { text: 'Diese neueste Seite der Geschichte der Region Sumy ist ein Symbol für den Mut und die Unerschütterlichkeit ihres Volkes.' }]
                },
                discriptRegions:
                {
                    title: "Landkreise der Oblast Sumy",
                    items: [
                        { id: 1, name: "Sumsky", hasInfo: false, path: "sumskyi" },
                        { id: 2, name: "Akhtyrsky", hasInfo: false, path: "akhtyrskyi" },
                        { id: 3, name: "Konotopsky", hasInfo: false, path: "konotopskyi" },
                        { id: 4, name: "Romensky", hasInfo: false, path: "romenskyi" },
                        { id: 5, name: "Shostkynsky", hasInfo: false, path: "shostkynskyi" }
                    ]
                },
                cities: {
                    title: "Städte mit regionaler Unterstellung",
                    items: [
                        { id: 1, name: "Sumy", hasInfo: true, path: "sumy" },
                        { id: 2, name: "Lebedyn", hasInfo: false, path: "lebedyn" },
                        { id: 3, name: "Romny", hasInfo: false, path: "romny" },
                        { id: 4, name: "Shostka", hasInfo: false, path: "shostka" },
                        { id: 5, name: "Akhtyrka", hasInfo: false, path: "akhtyrka" },
                        { id: 6, name: "Glukhiv", hasInfo: false, path: "gluhov" },
                        { id: 7, name: "Konotop", hasInfo: false, path: "konotop" }
                    ]
                },
                meta: {
                    title: "Oblast Sumy – Informationen über die Region",
                    description: "Oblast Sumy: Städte, Geschichte, Kultur, Wirtschaft und interessante Fakten.",
                    ogTitle: "Oblast Sumy – Informationen über die Region",
                    ogDescription: "Detaillierte Informationen über die Oblast Sumy: Geschichte, Kultur, Städte und Sehenswürdigkeiten.",
                    ogImage: "https://our-travels.info/foto/Ukraine/Sumy/sumy-map.jpg"
                }
            }
        }
    }
]
export default datas