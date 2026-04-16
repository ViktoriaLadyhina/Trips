const datas = [
  {
    id: 'de',
    path: 'germany',
    translations: {
      ru: {
        country: 'Германия',
        desc: {
          capital: [{ bold: 'Столица:', text: ' Берлин' }],
          geography: [
            { text: 'Федеративная Республика Германия расположена в центре Европы. После объединения двух немецких государств в 1990 году страна граничит с девятью государствами: Францией, Швейцарией, Австрией, Чехией, Польшей, Данией, Нидерландами, Бельгией и Люксембургом.' },
            { text: 'Территория Германии составляет около 357 000 км², протяженность с севера на юг – около 876 км, с запада на восток – около 640 км. Омывается Северным и Балтийским морями.' },
            { text: 'Германия является членом Европейского союза.' }
          ],
          population: [{ bold: 'Население:', text: ' около 83 млн человек. Национальный состав: немцы, турки, итальянцы, а также другие этнические группы и иностранные граждане. Среди официально признанных национальных меньшинств – лужицкие сербы, датчане, фризы и цыгане.' }],
          languages: [{ bold: 'Язык:', text: ' немецкий (государственный).' }],
          administrative: [{ bold: 'Административное деление:', text: ' Германия состоит из 16 земель, каждая из которых имеет собственную конституцию, парламент и правительство.' }],
          government: [{ bold: 'Государственное устройство:', text: ' Официальное название – Федеративная Республика Германия. Глава государства – федеральный президент, избираемый сроком на 5 лет. Глава правительства – федеральный канцлер. Законодательная власть осуществляется парламентом, состоящим из двух палат: Бундестага и Бундесрата.' }],
          currency: [{ bold: 'Валюта:', text: ' евро (EUR), делится на 100 центов.' }],
          transport: [
            { bold: 'Транспорт:' },
            { text: ' В городах Германии развит городской транспорт: автобусы, трамваи, метро (U-Bahn) и пригородные поезда (S-Bahn). Билеты действуют на все виды транспорта с пересадками. Существуют специальные проездные и туристические билеты, позволяющие экономить при частых поездках.' }
          ],
          climate: [
            { bold: 'Климат:' },
            { text: ' умеренный. На севере преобладает морской климат, на остальной территории – переходный от морского к континентальному. Большую часть года господствуют западные ветры, зимой и осенью бывают циклоны, лето и ранняя осень могут определяться влиянием Атлантики. Средняя температура января – около 0°С, июля – около 17-20°С. Осадков больше на юге, меньше на севере.' }
          ],
          tourism: [
            { bold: 'Туризм и отдых:' },
            { text: ' Германия славится богатой историей и архитектурой. Почти каждый город является достопримечательностью: древние здания соседствуют с современными кварталами, старые улицы ухожены. Для велоспорта, пеших прогулок, лыжного спорта, парусного спорта и виндсерфинга в стране есть множество возможностей. Популярны круизы по Рейну и туристические маршруты по живописным регионам, например, Шварцвальду и Баварским Альпам.' },
            { text: ' Самым популярным сувениром считается щелкунчик, который изготавливают в специализированных мастерских.' }
          ]
        },
        symbols: {
          title: "Геральдика",
          items: [
            {
              bold: "Герб:",
              text: " малый герб Германии представляет собой черного орла на золотом фоне. Орёл является символом власти и государственности с времен Священной Римской империи. Он встречался в геральдике различных немецких княжеств и городов на протяжении веков и использовался как знак государственной и военной власти. Современный орёл был официально утверждён после объединения Германии в 1950-х годах и стал основой большого герба страны.",
              img: "Germany/Gerb.gif"
            },
            {
              bold: "Флаг:",
              text: " национальный флаг Германии представляет собой прямоугольное полотнище с тремя равными горизонтальными полосами: верхняя – черная, средняя – красная, нижняя – золотая. Эти цвета имеют историческое значение и связаны с национально-освободительными движениями XIX века, символизируя единство и свободу страны.",
              img: "Germany/flag.jpg"
            }
          ]
        },
        briefHistory: {
          title: "Краткая история",
          items: [
            { text: "История Германии насчитывает многовековой период. В раннем Средневековье германские племена формировали свои государства, а с эпохи франков и Карла Великого началось христианское влияние на культуру и политику страны. Тогда столицей империи Карла Великого был Аахен, ставший важным духовным и политическим центром Европы." },
            { text: "В XI–XV веках существовала Священная Римская империя германской нации, где король избирался высшим дворянством. В это время значительную роль играл Нюрнберг, где проходили рейхстаги и коронации императоров. Города и замки того периода до сих пор привлекают туристов своей архитектурой и историей." },
            { text: "С XVI века началась Реформация: Мартин Лютер, Ульрих Цвингли и Иоганнес Кальвин внесли революционные изменения в религиозную жизнь, что сформировало современный религиозный ландшафт Германии и традицию открытого обсуждения веры." },
            { text: "В XVIII–XIX веках формировались крупные немецкие государства, развивались культура и экономика. Германская империя была создана в 1871 году после объединения северогерманских земель под руководством Отто фон Бисмарка. Её столицей стал Берлин, превратившийся в один из самых влиятельных городов Европы." },
            { text: "XX век стал временем испытаний: Первая мировая война, Веймарская республика, национал-социалистическая диктатура и Вторая мировая война. Германия несёт ответственность за эти трагические события, сохраняя память через музеи, мемориалы и образовательные проекты." },
            { text: "После поражения во Второй мировой войне в 1945 году Германия была разделена на четыре оккупационные зоны: американскую, британскую, французскую и советскую." },
            { text: "Американская зона включала южные земли – Баварию, Гессен и часть Вюртемберга. Административный центр находился в Мюнхене." },
            { text: "Британская зона охватывала северо-запад: Шлезвиг-Гольштейн, Нижнюю Саксонию, Северный Рейн-Вестфалию и Гамбург. Штаб-квартира британской администрации располагалась в Гамбурге." },
            { text: "Французская зона располагалась на юго-западе – Рейнланд-Пфальц, Саар и часть Вюртемберга. Административный центр – в Баден-Бадене." },
            { text: "Советская зона занимала восток страны: Бранденбург, Мекленбург-Переднюю Померанию, Саксонию, Саксонию-Анхальт и Тюрингию. Здесь столицей стал Берлин, разделённый на четыре сектора между союзниками." },
            { text: "Берлин, находившийся внутри советской зоны, также был разделён между четырьмя державами. Эти зоны сыграли огромную роль в послевоенном восстановлении страны. Каждая часть развивалась под влиянием своей оккупационной администрации, и это отразилось на культуре, архитектуре и даже языке." },
            { text: "На западе – в зонах под управлением США, Великобритании и Франции – активнее внедрялись демократические институты, рыночная экономика и американский стиль жизни. Архитектура западных городов после войны стремилась к модернизму и функциональности, а в языке появились многочисленные англицизмы (например, Job, Computer, Team)." },
            { text: "На востоке, под влиянием СССР, формировалась социалистическая модель общества. Городская застройка приобрела черты советского монументализма, акцент делался на равенстве и коллективизме, а в языке появилось больше русизмов и официальных терминов, свойственных идеологической лексике (например, Genosse, Kollektiv)." },
            { text: "Такое различие в развитии привело к формированию двух разных культурных идентичностей – западной и восточной, которые даже после объединения в 1990 году ещё долго ощущались в повседневной жизни." },
            { text: "В 1949 году три западные зоны объединились в Федеративную Республику Германия (ФРГ) со столицей в Бонне, а на территории советской зоны была образована Германская Демократическая Республика (ГДР) со столицей в Восточном Берлине." },
            { text: "Разделение страны стало символом противостояния Востока и Запада во времена «холодной войны». В 1961 году была построена Берлинская стена, разделившая город и семьи почти на тридцать лет." },
            { text: "В 1989 году стена пала – это событие стало началом объединения Германии, официально завершившегося 3 октября 1990 года. Этот день отмечается как День немецкого единства (Tag der Deutschen Einheit) – главный государственный праздник страны. После объединения Берлин вновь стал столицей, что символизировало восстановление исторической справедливости и национального единства." },
            { text: "Современная Федеративная Республика Германия – это федеративное государство из 16 земель, с парламентской демократией, развитой экономикой, богатой культурой и стремлением помнить уроки своей истории, чтобы строить мирное будущее." }
          ]
        },
        regions: {
          title: "Земли Германии",
          items: [
            { id: 1, name: 'Баден-Вюртемберг', hasInfo: false, path: 'baden-wuerttemberg', svgId: "bw" },
            { id: 2, name: 'Бавария', hasInfo: false, path: 'bavaria', svgId: "by" },
            { id: 3, name: 'Берлин', hasInfo: false, path: 'berlin', svgId: "be" },
            { id: 4, name: 'Бранденбург', hasInfo: false, path: 'brandenburg', svgId: "bb" },
            { id: 5, name: 'Бремен', hasInfo: false, path: 'bremen', svgId: "hb" },
            { id: 6, name: 'Гамбург', hasInfo: false, path: 'hamburg', svgId: "hh" },
            { id: 7, name: 'Гессен', hasInfo: false, path: 'hessen', svgId: "he" },
            { id: 8, name: 'Мекленбург-Передняя Померания', hasInfo: false, path: 'mecklenburg-vorpommern', svgId: "mv" },
            { id: 9, name: 'Нижняя Саксония', hasInfo: false, path: 'lower-saxony', svgId: "ni" },
            { id: 10, name: 'Северный Рейн-Вестфалия', hasInfo: true, path: 'nrw', svgId: "nw" },
            { id: 11, name: 'Рейнланд-Пфальц', hasInfo: true, path: 'rheinland_pfalz', svgId: "rp" },
            { id: 12, name: 'Саар', hasInfo: false, path: 'saarland', svgId: "sl" },
            { id: 13, name: 'Саксония', hasInfo: false, path: 'saxony', svgId: "sn" },
            { id: 14, name: 'Саксония-Анхальт', hasInfo: false, path: 'saxony-anhalt', svgId: "st" },
            { id: 15, name: 'Шлезвиг-Гольштейн', hasInfo: false, path: 'schleswig-holstein', svgId: "sh" },
            { id: 16, name: 'Тюрингия', hasInfo: false, path: 'thuringia', svgId: "th" }
          ]
        },
        meta: {
          title: "Германия — информация о стране, достопримечательности и культура",
          description: "Все о стране Германия: столица Берлин, география, население, языки, кухня, символы, история и регионы.",
          ogTitle: "Германия — информация о стране и достопримечательности",
          ogDescription: "Подробная информация о стране Германия: культура, символы, история, регионы и интересные факты.",
          ogImage: "https://our-travels.info/foto/Germany/Flag.jpg"
        }
      },
      ua: {
        country: 'Німеччина',
        desc: {
          capital: [{ bold: 'Столиця:', text: ' Берлін' }],
          geography: [
            { text: 'Федеративна Республіка Німеччина розташована в центрі Європи. Після об’єднання двох німецьких держав у 1990 році країна межує з дев’ятьма державами: Францією, Швейцарією, Австрією, Чехією, Польщею, Данією, Нідерландами, Бельгією та Люксембургом.' },
            { text: 'Територія Німеччини становить близько 357 000 км², протяжність з півночі на південь – близько 876 км, зі заходу на схід – близько 640 км. Омивається Північним і Балтійським морями.' },
            { text: 'Німеччина є членом Європейського Союзу.' }
          ],
          population: [{ bold: 'Населення:', text: ' близько 83 млн осіб. Національний склад: німці, турки, італійці та інші етнічні групи і іноземні громадяни. Серед офіційно визнаних національних меншин — лужицькі серби, данці, фризи та цигани.' }],
          languages: [{ bold: 'Мова:', text: ' німецька (державна).' }],
          administrative: [{ bold: 'Адміністративний поділ:', text: ' Німеччина складається з 16 земель, кожна з яких має власну конституцію, парламент та уряд.' }],
          government: [{ bold: 'Державний устрій:', text: ' Офіційна назва – Федеративна Республіка Німеччина. Голова держави – федеральний президент, обирається на 5 років. Голова уряду – федеральний канцлер. Законодавча влада здійснюється парламентом, що складається з двох палат: Бундестагу та Бундесрату.' }],
          currency: [{ bold: 'Валюта:', text: ' євро (EUR), ділиться на 100 центів.' }],
          transport: [
            { bold: 'Транспорт:' },
            { text: ' У містах Німеччини розвинений міський транспорт: автобуси, трамваї, метро (U-Bahn) та приміські поїзди (S-Bahn). Квитки дійсні на всі види транспорту з пересадками. Є спеціальні проїзні та туристичні квитки, що дозволяють економити при частих поїздках.' }
          ],
          climate: [
            { bold: 'Клімат:' },
            { text: ' помірний. На півночі переважає морський клімат, на решті території – перехідний від морського до континентального. Більшість року панують західні вітри, взимку та восени трапляються циклони, літо та рання осінь можуть визначатися впливом Атлантики. Середня температура у січні – близько 0°С, у липні – близько 17-20°С. Опадів більше на півдні, менше на півночі.' }
          ],
          tourism: [
            { bold: 'Туризм та відпочинок:' },
            { text: ' Німеччина славиться багатою історією та архітектурою. Майже кожне місто є пам\'яткою: старовинні будівлі сусідять із сучасними кварталами, старі вулиці доглянуті. Для велоспорту, піших прогулянок, лижного спорту, вітрильного спорту та віндсерфінгу в країні є безліч можливостей. Популярні круїзи по Рейну та туристичні маршрути живописними регіонами, наприклад, Шварцвальдом і Баварськими Альпами.' },
            { text: ' Найпопулярніший сувенір – лускунчик, який виготовляють у спеціалізованих майстернях.' }
          ]
        },
        symbols: {
          title: "Геральдика",
          items: [
            {
              bold: "Герб:",
              text: " малий герб Німеччини представляє собою чорного орла на золотому тлі. Орел є символом влади та державності з часів Священної Римської імперії. Він зустрічався в геральдиці різних німецьких князівств і міст протягом століть та використовувався як знак державної і військової влади. Сучасний орел був офіційно затверджений після об’єднання Німеччини у 1950-х роках і став основою великого герба країни.",
              img: "Germany/Gerb.gif"
            },
            {
              bold: "Прапор:",
              text: " національний прапор Німеччини – прямокутне полотнище з трьома рівними горизонтальними смугами: верхня – чорна, середня – червона, нижня – золота. Ці кольори мають історичне значення і пов’язані з національно-визвольними рухами XIX століття, символізуючи єдність і свободу країни.",
              img: "Germany/flag.jpg"
            }
          ]
        },
        briefHistory: {
          title: "Коротка історія",
          items: [
            { text: "Історія Німеччини нараховує багатовіковий період. У ранньому Середньовіччі германські племена формували власні держави, а з епохи франків і Карла Великого почався християнський вплив на культуру та політику країни. Тоді столицею імперії Карла Великого був Ахен, який став важливим духовним та політичним центром Європи." },
            { text: "У XI–XV століттях існувала Священна Римська імперія німецької нації, де король обирався вищим дворянством. У цей час значну роль відігравав Нюрнберг, де проходили рейхстаґи та коронації імператорів. Міста та замки того періоду досі приваблюють туристів своєю архітектурою та історією." },
            { text: "З XVI століття почалася Реформація: Мартін Лютер, Ульріх Цвінглі та Йоганнес Кальвін внесли революційні зміни в релігійне життя, що сформувало сучасний релігійний ландшафт Німеччини та традицію відкритого обговорення віри." },
            { text: "У XVIII–XIX століттях формувалися великі німецькі держави, розвивалися культура та економіка. Німецька імперія була створена у 1871 році після об'єднання північнонімецьких земель під керівництвом Отто фон Бісмарка. Її столицею став Берлін, який перетворився на одне з найвпливовіших міст Європи." },
            { text: "XX століття стало часом випробувань: Перша світова війна, Веймарська республіка, націонал-соціалістична диктатура та Друга світова війна. Німеччина несе відповідальність за ці трагічні події, зберігаючи пам’ять через музеї, меморіали та освітні проєкти." },
            { text: "Після поразки у Другій світовій війні в 1945 році Німеччину було поділено на чотири окупаційні зони: американську, британську, французьку та радянську." },
            { text: "Американська зона включала південні землі – Баварію, Гессен та частину Вюртемберга. Адміністративний центр знаходився в Мюнхені." },
            { text: "Британська зона охоплювала північний захід: Шлезвіг-Гольштейн, Нижню Саксонію, Північний Рейн-Вестфалію та Гамбург. Штаб-квартира британської адміністрації розташовувалася в Гамбурзі." },
            { text: "Французька зона розташовувалася на південному заході – Рейнланд-Пфальц, Саар та частина Вюртемберга. Адміністративний центр – у Баден-Бадені." },
            { text: "Радянська зона займала схід країни: Бранденбург, Мекленбург-Передня Померанія, Саксонія, Саксонія-Ангальт та Тюрінгія. Тут столицею став Берлін, поділений на чотири сектори між союзниками." },
            { text: "Берлін, що знаходився всередині радянської зони, також був поділений між чотирма державами. Ці зони відіграли величезну роль у післявоєнному відновленні країни. Кожна частина розвивалася під впливом своєї окупаційної адміністрації, і це відобразилося на культурі, архітектурі та навіть мові." },
            { text: "На заході – у зонах під управлінням США, Великобританії та Франції – активніше впроваджувалися демократичні інститути, ринкова економіка та американський стиль життя. Архітектура західних міст після війни прагнула модернізму та функціональності, а в мові з’явилося багато англіцизмів (наприклад, Job, Computer, Team)." },
            { text: "На сході, під впливом СРСР, формувалася соціалістична модель суспільства. Міська забудова набрала рис радянського монументалізму, робився акцент на рівності та колективізмі, а в мові з’явилося більше русизмів та офіційних термінів, властивих ідеологічній лексиці (наприклад, Genosse, Kollektiv)." },
            { text: "Таке розходження у розвитку призвело до формування двох різних культурних ідентичностей – західної та східної, які навіть після об’єднання у 1990 році ще довго відчувалися в повсякденному житті." },
            { text: "У 1949 році три західні зони об’єдналися у Федеративну Республіку Німеччини (ФРН) зі столицею у Бонні, а на території радянської зони було утворено Німецьку Демократичну Республіку (НДР) зі столицею у Східному Берліні." },
            { text: "Поділ країни став символом протистояння Сходу та Заходу в часи «холодної війни». У 1961 році була побудована Берлінська стіна, що розділила місто та родини майже на тридцять років." },
            { text: "У 1989 році стіна впала – ця подія стала початком об’єднання Німеччини, офіційно завершеного 3 жовтня 1990 року. Цей день відзначається як День німецької єдності (Tag der Deutschen Einheit) – головне державне свято країни. Після об’єднання Берлін знову став столицею, що символізувало відновлення історичної справедливості та національної єдності." },
            { text: "Сучасна Федеративна Республіка Німеччина – це федеративна держава з 16 земель, з парламентською демократією, розвиненою економікою, багатою культурою та прагненням пам’ятати уроки своєї історії, щоб будувати мирне майбутнє." }
          ]
        },
        regions: {
          title: "Землі Німеччини",
          items: [
            { id: 1, name: 'Баден-Вюртемберг', hasInfo: false, path: 'baden-wuerttemberg', svgId: 'bw' },
            { id: 2, name: 'Баварія', hasInfo: false, path: 'bavaria', svgId: 'by' },
            { id: 3, name: 'Берлін', hasInfo: false, path: 'berlin', svgId: 'be' },
            { id: 4, name: 'Бранденбург', hasInfo: false, path: 'brandenburg', svgId: 'bb' },
            { id: 5, name: 'Бремен', hasInfo: false, path: 'bremen', svgId: 'hb' },
            { id: 6, name: 'Гамбург', hasInfo: false, path: 'hamburg', svgId: 'hh' },
            { id: 7, name: 'Гессен', hasInfo: false, path: 'hessen', svgId: 'he' },
            { id: 8, name: 'Мекленбург-Передня Померанія', hasInfo: false, path: 'mecklenburg-vorpommern', svgId: 'mv' },
            { id: 9, name: 'Нижня Саксонія', hasInfo: false, path: 'lower-saxony', svgId: 'ni' },
            { id: 10, name: 'Північний Рейн-Вестфалія', hasInfo: true, path: 'nrw', svgId: 'nw' },
            { id: 11, name: 'Рейнланд-Пфальц', hasInfo: true, path: 'rheinland_pfalz', svgId: 'rp' },
            { id: 12, name: 'Саар', hasInfo: false, path: 'saarland', svgId: 'sl' },
            { id: 13, name: 'Саксонія', hasInfo: false, path: 'saxony', svgId: 'sn' },
            { id: 14, name: 'Саксонія-Ангальт', hasInfo: false, path: 'saxony-anhalt', svgId: 'st' },
            { id: 15, name: 'Шлезвіг-Гольштейн', hasInfo: false, path: 'schleswig-holstein', svgId: 'sh' },
            { id: 16, name: 'Тюрингія', hasInfo: false, path: 'thuringia', svgId: 'th' }
          ]
        },
        meta: {
          title: "Німеччина — інформація про країну, визначні місця та культура",
          description: "Усе про країну Німеччина: столиця Берлін, географія, населення, мови, кухня, символи, історія та регіони.",
          ogTitle: "Німеччина — інформація про країну та визначні місця",
          ogDescription: "Детальна інформація про Німеччину: культура, символи, історія, регіони та цікаві факти.",
          ogImage: "https://our-travels.info/foto/Germany/Flag.jpg"
        }
      },
      de: {
        country: 'Deutschland',
        desc: {
          capital: [{ bold: 'Hauptstadt:', text: ' Berlin' }],
          geography: [
            { text: 'Die Bundesrepublik Deutschland liegt im Zentrum Europas. Nach der Vereinigung der beiden deutschen Staaten im Jahr 1990 grenzt das Land an neun Staaten: Frankreich, die Schweiz, Österreich, Tschechien, Polen, Dänemark, die Niederlande, Belgien und Luxemburg.' },
            { text: 'Die Fläche Deutschlands beträgt etwa 357.000 km², die Nord-Süd-Ausdehnung etwa 876 km, die West-Ost-Ausdehnung etwa 640 km. Deutschland wird von der Nord- und Ostsee umspült.' },
            { text: 'Deutschland ist Mitglied der Europäischen Union.' }
          ],
          population: [{ bold: 'Bevölkerung:', text: ' etwa 83 Mio. Menschen. Ethnische Zusammensetzung: Deutsche, Türken, Italiener sowie weitere ethnische Gruppen und ausländische Staatsangehörige. Zu den offiziell anerkannten nationalen Minderheiten zählen Sorben, Dänen, Friesen und Sinti und Roma.' }],
          languages: [{ bold: 'Sprache:', text: ' Deutsch (Amtssprache).' }],
          administrative: [{ bold: 'Verwaltungsgliederung:', text: ' Deutschland besteht aus 16 Bundesländern, von denen jedes eine eigene Verfassung, ein Parlament und eine Regierung hat.' }],
          government: [{ bold: 'Staatsform:', text: ' Offizieller Name – Bundesrepublik Deutschland. Staatsoberhaupt ist der Bundespräsident, gewählt für eine Amtszeit von 5 Jahren. Regierungschef ist der Bundeskanzler. Die gesetzgebende Gewalt wird durch das Parlament ausgeübt, das aus zwei Kammern besteht: Bundestag und Bundesrat.' }],
          currency: [{ bold: 'Währung:', text: ' Euro (EUR), unterteilt in 100 Cent.' }],
          transport: [
            { bold: 'Verkehr:' },
            { text: ' In den deutschen Städten ist der öffentliche Nahverkehr gut ausgebaut: Busse, Straßenbahnen, U-Bahn und S-Bahn. Fahrkarten gelten für alle Verkehrsmittel mit Umstieg. Es gibt spezielle Abos und Touristentickets, die bei häufigen Fahrten Kosten sparen.' }
          ],
          climate: [
            { bold: 'Klima:' },
            { text: ' gemäßigt. Im Norden herrscht Seeklima, im übrigen Land ein Übergang vom See- zum Kontinentalklima. Meistens wehen Westwinde, im Winter und Herbst treten Zyklone auf, Sommer und Frühherbst können von atlantischem Einfluss geprägt sein. Durchschnittstemperatur im Januar etwa 0°C, im Juli etwa 17–20°C. Niederschläge sind im Süden höher, im Norden geringer.' }
          ],
          tourism: [
            { bold: 'Tourismus und Freizeit:' },
            { text: ' Deutschland ist bekannt für seine reiche Geschichte und Architektur. Fast jede Stadt ist eine Sehenswürdigkeit: alte Gebäude stehen neben modernen Vierteln, alte Straßen sind gepflegt. Für Radsport, Wandern, Skisport, Segeln und Windsurfen gibt es zahlreiche Möglichkeiten. Beliebt sind Rheinkreuzfahrten und touristische Routen durch malerische Regionen wie den Schwarzwald und die Bayerischen Alpen.' },
            { text: ' Das beliebteste Souvenir ist der Nussknacker, der in spezialisierten Werkstätten hergestellt wird.' }
          ]
        },
        symbols: {
          title: "Heraldik",
          items: [
            {
              bold: "Wappen:",
              text: " das kleine Wappen Deutschlands zeigt einen schwarzen Adler auf goldenem Hintergrund. Der Adler ist seit der Zeit des Heiligen Römischen Reiches ein Symbol von Macht und Staatlichkeit. Er tauchte in der Heraldik verschiedener deutscher Fürstentümer und Städte über Jahrhunderte auf und diente als Zeichen staatlicher und militärischer Autorität. Der heutige Adler wurde nach der Wiedervereinigung Deutschlands in den 1950er Jahren offiziell eingeführt und bildet die Grundlage des großen Wappens.",
              img: "Germany/Gerb.gif"
            },
            {
              bold: "Flagge:",
              text: " die Nationalflagge Deutschlands ist ein rechteckiges Tuch mit drei gleich breiten horizontalen Streifen: oben – schwarz, Mitte – rot, unten – gold. Diese Farben haben historische Bedeutung und stehen im Zusammenhang mit den nationalen Befreiungsbewegungen des 19. Jahrhunderts und symbolisieren Einheit und Freiheit des Landes.",
              img: "Germany/flag.jpg"
            }
          ]
        },
        briefHistory: {
          title: 'Kurze Geschichte',
          items: [
            { text: "Die Geschichte Deutschlands erstreckt sich über viele Jahrhunderte. Im frühen Mittelalter bildeten die germanischen Stämme eigene Staaten, und seit der Zeit der Franken und Karls des Großen begann der christliche Einfluss auf Kultur und Politik des Landes. Die Hauptstadt des Reiches Karls des Großen war damals Aachen, das ein bedeutendes geistliches und politisches Zentrum Europas wurde." },
            { text: "Im 11.–15. Jahrhundert existierte das Heilige Römische Reich Deutscher Nation, in dem der König vom hohen Adel gewählt wurde. In dieser Zeit spielte Nürnberg eine bedeutende Rolle, wo Reichstage und Kaiserkrönungen stattfanden. Städte und Burgen jener Zeit ziehen bis heute Touristen mit ihrer Architektur und Geschichte an." },
            { text: "Ab dem 16. Jahrhundert begann die Reformation: Martin Luther, Ulrich Zwingli und Johannes Calvin brachten revolutionäre Veränderungen in das religiöse Leben, was die moderne religiöse Landschaft Deutschlands und die Tradition offener Glaubensdiskussionen prägte." },
            { text: "Im 18.–19. Jahrhundert bildeten sich große deutsche Staaten, Kultur und Wirtschaft entwickelten sich. Das Deutsche Reich wurde 1871 nach der Vereinigung der norddeutschen Länder unter der Führung von Otto von Bismarck gegründet. Seine Hauptstadt wurde Berlin, das zu einer der einflussreichsten Städte Europas wurde." },
            { text: "Das 20. Jahrhundert war eine Zeit der Prüfungen: Erster Weltkrieg, Weimarer Republik, nationalsozialistische Diktatur und Zweiter Weltkrieg. Deutschland trägt Verantwortung für diese tragischen Ereignisse und bewahrt die Erinnerung durch Museen, Denkmäler und Bildungsprojekte." },
            { text: "Nach der Niederlage im Zweiten Weltkrieg 1945 wurde Deutschland in vier Besatzungszonen aufgeteilt: amerikanische, britische, französische und sowjetische." },
            { text: "Die amerikanische Zone umfasste die südlichen Länder – Bayern, Hessen und Teile Württembergs. Das Verwaltungszentrum befand sich in München." },
            { text: "Die britische Zone deckte den Nordwesten ab: Schleswig-Holstein, Niedersachsen, Nordrhein-Westfalen und Hamburg. Der Sitz der britischen Verwaltung befand sich in Hamburg." },
            { text: "Die französische Zone lag im Südwesten – Rheinland-Pfalz, Saar und Teile Württembergs. Das Verwaltungszentrum war in Baden-Baden." },
            { text: "Die sowjetische Zone umfasste den Osten des Landes: Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen. Hier wurde Berlin zur Hauptstadt, die in vier Sektoren zwischen den Alliierten aufgeteilt war." },
            { text: "Berlin, das innerhalb der sowjetischen Zone lag, wurde ebenfalls zwischen vier Mächten geteilt. Diese Zonen spielten eine enorme Rolle beim Wiederaufbau des Landes nach dem Krieg. Jeder Teil entwickelte sich unter dem Einfluss seiner Besatzungsverwaltung, was sich in Kultur, Architektur und sogar Sprache widerspiegelte." },
            { text: "Im Westen – in den von den USA, Großbritannien und Frankreich verwalteten Zonen – wurden demokratische Institutionen, Marktwirtschaft und amerikanischer Lebensstil stärker eingeführt. Die Architektur der westlichen Städte strebte nach dem Krieg nach Modernismus und Funktionalität, und in der Sprache tauchten zahlreiche Anglizismen auf (z. B. Job, Computer, Team)." },
            { text: "Im Osten, unter dem Einfluss der UdSSR, entwickelte sich ein sozialistisches Gesellschaftsmodell. Die städtische Bebauung erhielt Merkmale des sowjetischen Monumentalismus, der Fokus lag auf Gleichheit und Kollektivismus, und in der Sprache tauchten mehr Russismen und offizielle Begriffe der ideologischen Lexik auf (z. B. Genosse, Kollektiv)." },
            { text: "Diese Unterschiede in der Entwicklung führten zur Entstehung zweier verschiedener kultureller Identitäten – westlich und östlich –, die auch nach der Wiedervereinigung 1990 noch lange im Alltag spürbar waren." },
            { text: "1949 vereinigten sich die drei westlichen Zonen zur Bundesrepublik Deutschland (BRD) mit der Hauptstadt Bonn, während in der sowjetischen Zone die Deutsche Demokratische Republik (DDR) mit der Hauptstadt Ost-Berlin gegründet wurde." },
            { text: "Die Teilung des Landes wurde zum Symbol der Konfrontation von Ost und West während des Kalten Krieges. 1961 wurde die Berliner Mauer gebaut, die Stadt und Familien fast dreißig Jahre lang teilte." },
            { text: "1989 fiel die Mauer – dieses Ereignis markierte den Beginn der deutschen Wiedervereinigung, die am 3. Oktober 1990 offiziell abgeschlossen wurde. Dieser Tag wird als Tag der Deutschen Einheit (Tag der Deutschen Einheit) gefeiert – der wichtigste Nationalfeiertag des Landes. Nach der Wiedervereinigung wurde Berlin erneut zur Hauptstadt, was die Wiederherstellung historischer Gerechtigkeit und nationaler Einheit symbolisierte." },
            { text: "Die heutige Bundesrepublik Deutschland ist ein föderaler Staat aus 16 Bundesländern, mit parlamentarischer Demokratie, entwickelter Wirtschaft, reicher Kultur und dem Bestreben, die Lehren ihrer Geschichte zu bewahren, um eine friedliche Zukunft zu gestalten." }
          ]
        },
        regions: {
          title: "Bundesländer Deutschlands",
          items: [
            { id: 1, name: 'Baden-Württemberg', hasInfo: false, path: 'baden-wuerttemberg', svgId: 'bw' },
            { id: 2, name: 'Bayern', hasInfo: false, path: 'bavaria', svgId: 'by' },
            { id: 3, name: 'Berlin', hasInfo: false, path: 'berlin', svgId: 'be' },
            { id: 4, name: 'Brandenburg', hasInfo: false, path: 'brandenburg', svgId: 'bb' },
            { id: 5, name: 'Bremen', hasInfo: false, path: 'bremen', svgId: 'hb' },
            { id: 6, name: 'Hamburg', hasInfo: false, path: 'hamburg', svgId: 'hh' },
            { id: 7, name: 'Hessen', hasInfo: false, path: 'hessen', svgId: 'he' },
            { id: 8, name: 'Mecklenburg-Vorpommern', hasInfo: false, path: 'mecklenburg-vorpommern', svgId: 'mv' },
            { id: 9, name: 'Niedersachsen', hasInfo: false, path: 'lower-saxony', svgId: 'ni' },
            { id: 10, name: 'Nordrhein-Westfalen', hasInfo: true, path: 'nrw', svgId: 'nw' },
            { id: 11, name: 'Rheinland-Pfalz', hasInfo: true, path: 'rheinland_pfalz', svgId: 'rp' },
            { id: 12, name: 'Saarland', hasInfo: false, path: 'saarland', svgId: 'sl' },
            { id: 13, name: 'Sachsen', hasInfo: false, path: 'saxony', svgId: 'sn' },
            { id: 14, name: 'Sachsen-Anhalt', hasInfo: false, path: 'saxony-anhalt', svgId: 'st' },
            { id: 15, name: 'Schleswig-Holstein', hasInfo: false, path: 'schleswig-holstein', svgId: 'sh' },
            { id: 16, name: 'Thüringen', hasInfo: false, path: 'thuringia', svgId: 'th' }
          ]
        },
        meta: {
          title: "Deutschland — Informationen über das Land, Sehenswürdigkeiten und Kultur",
          description: "Alles über Deutschland: Hauptstadt Berlin, Geografie, Bevölkerung, Sprachen, Küche, Symbole, Geschichte und Regionen.",
          ogTitle: "Deutschland — Informationen über das Land und Sehenswürdigkeiten",
          ogDescription: "Detaillierte Informationen über Deutschland: Kultur, Symbole, Geschichte, Regionen und interessante Fakten.",
          ogImage: "https://our-travels.info/foto/Germany/Flag.jpg"
        }
      }
    }
  },
  {
    id: 'lu',
    path: 'luxembourg',
    translations: {
      ru: {
        country: 'Люксембург',
        desc: {
          capital: [{ bold: 'Столица:', text: ' Люксембург' }],
          geography: [
            { text: 'Великое Герцогство Люксембург расположено в Западной Европе. Граничит с Бельгией, Францией и Германией.' },
            { text: 'Территория страны составляет около 2 586 км², протяженность с севера на юг – около 82 км, с запада на восток – около 57 км.' },
            { text: 'Люксембург является членом Европейского союза, Шенгенской зоны и НАТО.' }
          ],
          population: [{ bold: 'Население:', text: ' около 660 тыс. человек. Национальный состав: люксембуржцы, португальцы, французы, итальянцы и другие иностранцы.' }],
          languages: [{ bold: 'Языки:', text: ' люксембургский (государственный), французский и немецкий (официальные).' }],
          administrative: [{ bold: 'Административное деление:', text: ' Люксембург делится на 12 кантонов и 102 коммуны.' }],
          government: [{ bold: 'Государственное устройство:', text: ' Конституционная монархия с парламентской системой. Глава государства – великий герцог. Законодательная власть осуществляется двухпалатным парламентом (Штатсрат и Палата депутатов).' }],
          currency: [{ bold: 'Валюта:', text: ' евро (EUR), делится на 100 центов.' }],
          transport: [{ bold: 'Транспорт:', text: ' В Люксембурге развит городской и междугородний транспорт: автобусы, поезда и трамваи. С 2020 года <b>общественный транспорт в Люксембурге стал полностью бесплатным</b> для пассажиров (автобусы, трамваи и поезда 2 класса). Оплата сохраняется только для 1 класса и отдельных международных направлений.' }],
          climate: [
            { bold: 'Климат:' },
            { text: ' умеренный океанический. Зимы мягкие, лето тёплое. Средняя температура января – около 1°С, июля – около 18–20°С. Осадков распределено равномерно в течение года.' }
          ],
          tourism: [
            { bold: 'Туризм и отдых:' },
            { text: ' Люксембург славится средневековыми замками, историческим центром столицы и живописными долинами рек. Популярны пешие прогулки, велотуризм и экскурсии по винодельческим регионам.' },
            { text: ' Основным сувениром считаются изделия из кружева, шоколад и вино местного производства.' }
          ]
        },
        symbols: {
          title: "Геральдика",
          items: [
            {
              bold: "Герб:",
              text: " Герб Великого Герцогства Люксембург представляет собой красного льва с золотыми когтями и языком на полосатом серебряно-синем фоне. Символизирует государственность и историческую независимость страны.",
              img: "Luxembourg/gerb.png"
            },
            {
              bold: "Флаг:",
              text: " Национальный флаг Люксембурга – горизонтальное триколорное полотнище: красная, белая и светло-голубая полосы. Цвета символизируют независимость и историческое наследие герцогства.",
              img: "Luxembourg/flag.png"
            }
          ]
        },
        briefHistory: {
          title: "Краткая история",
          items: [
            { text: "Люксембург был основан в 963 году, когда граф Зигфрид Люксембургский приобрёл укрепление Люцилинбург (Lucilinburhuc), вокруг которого постепенно вырос город и государство." },
            { text: "В Средние века Люксембург превратился в важное графство, а затем герцогство, играя заметную роль в европейской политике. Представители Люксембургской династии занимали престолы Священной Римской империи, включая императора Карла IV." },
            { text: "В последующие столетия территория Люксембурга неоднократно переходила под контроль крупных держав – Испании, Франции и Австрии, из-за своего стратегического положения в центре Европы. Город Люксембург считался одной из самых мощных крепостей континента и получил прозвище «Северный Гибралтар»." },
            { text: "Ключевым поворотным моментом стал 1867 год, когда после Люксембургского кризиса был подписан Лондонский договор. Согласно его условиям, крепость Люксембурга была демонтирована, а страна получила статус нейтрального государства, гарантированного международными соглашениями." },
            { text: "В XIX веке после решений Венского конгресса Люксембург стал Великим герцогством. В 1890 году установилась династия Нассау-Вейльбург, которая правит страной до сих пор." },
            { text: "Во время Первой и Второй мировых войн Люксембург был оккупирован Германией. Во Вторую мировую войну страна была фактически аннексирована нацистской Германией, подвергалась насильственной германизации, а часть населения была депортирована и мобилизована. После освобождения в 1944 году Люксембург окончательно отказался от политики нейтралитета." },
            { text: "С середины XX века Люксембург стал одним из основателей европейской интеграции, участвуя в создании Европейского союза и других международных структур. Страна активно развивала финансовый сектор и превратилась в один из крупнейших банковских центров мира." },
            { text: "Сегодня Люксембург – стабильное и экономически развитое государство с высоким уровнем жизни, сильной экономикой и важной ролью в европейской политике." }
          ]
        },
        regions: {
          title: "Кантоны Люксембурга",
          items: [
            { id: 1, name: 'Капеллен', hasInfo: true, path: 'capellen' },
            { id: 2, name: 'Клерво', hasInfo: false, path: 'clervaux' },
            { id: 3, name: 'Дикирх', hasInfo: false, path: 'diekirch' },
            { id: 4, name: 'Эхтернах', hasInfo: false, path: 'echternach' },
            { id: 5, name: 'Эш-сюр-Альзетт', hasInfo: false, path: 'esch_sur_alzette' },
            { id: 6, name: 'Гревенмахер', hasInfo: false, path: 'grevenmacher' },
            { id: 7, name: 'Люксембург', hasInfo: true, path: 'luxembourg_canton' },
            { id: 8, name: 'Мерш', hasInfo: false, path: 'mersch' },
            { id: 9, name: 'Реданж', hasInfo: false, path: 'redange' },
            { id: 10, name: 'Ремих', hasInfo: false, path: 'remich' },
            { id: 11, name: 'Вианден', hasInfo: false, path: 'vianden' },
            { id: 12, name: 'Вильц', hasInfo: false, path: 'wiltz' }
          ]
        },
        routes: {
          title: "Маршруты",
          items: [
            { id: 1, name: "Мюллертальская тропа", type: "hiking", path: "mullerthal-trail" },
            { id: 2, name: "Долина семи замков", type: "castle-route", path: "valley-seven-castles" }
          ]
        },
        meta: {
          title: "Люксембург — информация о стране, достопримечательности и культура",
          description: "Все о стране Люксембург: столица Люксембург, география, население, языки, культура, символы, история и регионы.",
          ogTitle: "Люксембург — информация о стране и достопримечательности",
          ogDescription: "Подробная информация о Люксембурге: культура, символы, история, регионы и интересные факты.",
          ogImage: "https://our-travels.info/foto/Luxembourg/flag.png"
        }
      },
      ua: {
        country: 'Люксембург',
        desc: {
          capital: [{ bold: 'Столиця:', text: ' Люксембург' }],
          geography: [
            { text: 'Велике Герцогство Люксембург розташоване у Західній Європі. Межує з Бельгією, Францією та Німеччиною.' },
            { text: 'Територія країни становить близько 2 586 км², протяжність з півночі на південь – близько 82 км, зі заходу на схід – близько 57 км.' },
            { text: 'Люксембург є членом Європейського Союзу, Шенгенської зони та НАТО.' }
          ],
          population: [{ bold: 'Населення:', text: ' близько 660 тис. осіб. Національний склад: люксембуржці, португальці, французи, італійці та інші іноземці.' }],
          languages: [{ bold: 'Мови:', text: ' люксембурзька (державна), французька та німецька (офіційні).' }],
          administrative: [{ bold: 'Адміністративний поділ:', text: ' Люксембург поділяється на 12 кантонів та 102 комуни.' }],
          government: [{ bold: 'Державний устрій:', text: ' Конституційна монархія з парламентською системою. Голова держави – великий герцог. Законодавча влада здійснюється двопалатним парламентом (Штатсрат і Палата депутатів).' }],
          currency: [{ bold: 'Валюта:', text: ' євро (EUR), ділиться на 100 центів.' }],
          transport: [{ bold: 'Транспорт:', text: ' У Люксембурзі розвинений міський та міжміський транспорт: автобуси, потяги та трамваї. З 2020 року громадський транспорт у Люксембурзі став повністю безкоштовним для пасажирів (автобуси, трамваї та потяги 2 класу). Оплата зберігається лише для 1 класу та окремих міжнародних напрямків.' }],
          climate: [{ bold: 'Клімат:', text: ' помірний океанічний. Зими м’які, літо тепле. Середня температура січня – близько 1°С, липня – близько 18–20°С. Опадів розподілено рівномірно протягом року.' }],
          tourism: [
            { bold: 'Туризм та відпочинок:' },
            { text: ' Люксембург славиться середньовічними замками, історичним центром столиці та мальовничими долинами річок. Популярні піші прогулянки, велотуризм та екскурсії виноробними регіонами.' },
            { text: ' Основним сувеніром вважаються вироби з мережива, шоколад та вино місцевого виробництва.' }
          ]
        },
        symbols: {
          title: "Геральдика",
          items: [
            {
              bold: "Герб:",
              text: " Герб Великого Герцогства Люксембург представляє собою червоного лева з золотими кігтями та язиком на смугастому срібно-синьому тлі. Символізує державність та історичну незалежність країни.",
              img: "Luxembourg/gerb.png"
            },
            {
              bold: "Прапор:",
              text: " Національний прапор Люксембургу – горизонтальне триколірне полотно: червона, біла та світло-блакитна смуги. Кольори символізують незалежність та історичну спадщину герцогства.",
              img: "Luxembourg/flag.png"
            }
          ]
        },
        briefHistory: {
          title: "Коротка історія",
          items: [
            { text: "Люксембург був заснований у 963 році, коли граф Зиґфрід Люксембурзький придбав укріплення Люцілінбург (Lucilinburhuc), навколо якого поступово виросло місто і держава." },
            { text: "У Середньовіччі Люксембург перетворився на важливе графство, а згодом герцогство, відіграючи помітну роль в європейській політиці. Представники Люксембурзької династії займали престоли Священної Римської імперії, включаючи імператора Карла IV." },
            { text: "У наступні століття територія Люксембургу неодноразово переходила під контроль великих держав – Іспанії, Франції та Австрії через своє стратегічне розташування в центрі Європи. Місто Люксембург вважалося однією з найпотужніших фортець континенту і отримало прізвисько «Північний Гібралтар»." },
            { text: "Ключовим поворотним моментом став 1867 рік, коли після Люксембурзької кризи був підписаний Лондонський договір. Згідно з його умовами, фортецю Люксембурга було демонтовано, а країна отримала статус нейтральної держави, гарантований міжнародними угодами." },
            { text: "У XIX столітті після рішень Віденського конгресу Люксембург став Великим герцогством. У 1890 році встановилася династія Нассау-Вайльбург, яка править країною до сьогодні." },
            { text: "Під час Першої та Другої світових воєн Люксембург був окупований Німеччиною. Під час Другої світової війни країна була фактично анексована нацистською Німеччиною, зазнала насильницької германізації, а частину населення було депортовано і мобілізовано. Після звільнення у 1944 році Люксембург остаточно відмовився від політики нейтралітету." },
            { text: "З середини XX століття Люксембург став одним із засновників європейської інтеграції, беручи участь у створенні Європейського Союзу та інших міжнародних структур. Країна активно розвивала фінансовий сектор і перетворилася на один із найбільших банківських центрів світу." },
            { text: "Сьогодні Люксембург – стабільна та економічно розвинена держава з високим рівнем життя, сильною економікою та важливою роллю в європейській політиці." }
          ]
        },
        regions: {
          title: "Кантони Люксембургу",
          items: [
            { id: 1, name: 'Капеллен', hasInfo: true, path: 'capellen' },
            { id: 2, name: 'Клерво', hasInfo: false, path: 'clervaux' },
            { id: 3, name: 'Дікріх', hasInfo: false, path: 'diekirch' },
            { id: 4, name: 'Ехтернах', hasInfo: false, path: 'echternach' },
            { id: 5, name: 'Еш-сюр-Альзетт', hasInfo: false, path: 'esch_sur_alzette' },
            { id: 6, name: 'Гревенмахер', hasInfo: false, path: 'grevenmacher' },
            { id: 7, name: 'Люксембург', hasInfo: true, path: 'luxembourg_canton' },
            { id: 8, name: 'Мерш', hasInfo: false, path: 'mersch' },
            { id: 9, name: 'Реданж', hasInfo: false, path: 'redange' },
            { id: 10, name: 'Реміх', hasInfo: false, path: 'remich' },
            { id: 11, name: 'Віанден', hasInfo: false, path: 'vianden' },
            { id: 12, name: 'Вільц', hasInfo: false, path: 'wiltz' }
          ]
        },
        routes: {
          title: "Маршрути",
          items: [
            { id: 1, name: "Мюллертальська стежка", type: "hiking", path: "mullerthal-trail" },
            { id: 2, name: "Долина семи замків", type: "castle-route", path: "valley-seven-castles" }
          ]
        },
        meta: {
          title: "Люксембург — інформація про країну, природа та культура",
          description: "Все про країну Люксембург: столиця Люксембург, географія, населення, мови, культура, символи, історія та ключові міста.",
          ogTitle: "Люксембург — інформація про країну та цікаві місця",
          ogDescription: "Детальна інформація про Люксембург: культура, символи, історія, ключові міста та цікаві факти.",
          ogImage: "https://our-travels.info/foto/Luxembourg/flag.png"
        }
      },
      de: {
        country: 'Luxemburg',
        desc: {
          capital: [{ bold: 'Hauptstadt:', text: ' Luxemburg' }],
          geography: [
            { text: 'Das Großherzogtum Luxemburg liegt in Westeuropa. Es grenzt an Belgien, Frankreich und Deutschland.' },
            { text: 'Die Fläche des Landes beträgt etwa 2.586 km², die Nord-Süd-Ausdehnung ca. 82 km, die West-Ost-Ausdehnung ca. 57 km.' },
            { text: 'Luxemburg ist Mitglied der Europäischen Union, des Schengen-Raums und der NATO.' }
          ],
          population: [{ bold: 'Bevölkerung:', text: ' etwa 660.000 Menschen. Ethnische Zusammensetzung: Luxemburger, Portugiesen, Franzosen, Italiener und andere Ausländer.' }],
          languages: [{ bold: 'Sprachen:', text: ' Luxemburgisch (staatlich), Französisch und Deutsch (offiziell).' }],
          administrative: [{ bold: 'Verwaltungsgliederung:', text: ' Luxemburg ist in 12 Kantone und 102 Gemeinden unterteilt.' }],
          government: [{ bold: 'Staatsform:', text: ' Konstitutionelle Monarchie mit parlamentarischem System. Staatsoberhaupt ist der Großherzog. Die legislative Gewalt wird durch ein Zweikammerparlament (Staatsrat und Abgeordnetenkammer) ausgeübt.' }],
          currency: [{ bold: 'Währung:', text: ' Euro (EUR), unterteilt in 100 Cent.' }],
          transport: [{ bold: 'Verkehr:', text: ' In Luxemburg gibt es gut ausgebaute Stadt- und Überlandverkehrsmittel: Busse, Züge und Straßenbahnen. Seit 2020 ist der öffentliche Verkehr in Luxemburg für Fahrgäste vollständig kostenlos (Busse, Straßenbahnen und Züge 2. Klasse). Bezahlt wird nur für die 1. Klasse und bestimmte internationale Strecken.' }],
          climate: [{ bold: 'Klima:', text: ' gemäßigt ozeanisch. Winter mild, Sommer warm. Durchschnittstemperatur im Januar etwa 1°C, im Juli etwa 18–20°C. Niederschläge sind über das Jahr gleichmäßig verteilt.' }],
          tourism: [
            { bold: 'Tourismus und Freizeit:' },
            { text: ' Luxemburg ist bekannt für mittelalterliche Schlösser, das historische Stadtzentrum und malerische Flusstäler. Beliebt sind Wandern, Radtourismus und Ausflüge in Weinregionen.' },
            { text: ' Typische Souvenirs sind Spitzenarbeiten, Schokolade und Wein aus lokaler Produktion.' }
          ]
        },
        symbols: {
          title: "Heraldik",
          items: [
            {
              bold: "Wappen:",
              text: " Das Wappen des Großherzogtums Luxemburg zeigt einen roten Löwen mit goldenen Krallen und Zunge auf silber-blau gestreiftem Hintergrund. Es symbolisiert Staatlichkeit und historische Unabhängigkeit des Landes.",
              img: "Luxembourg/gerb.png"
            },
            {
              bold: "Flagge:",
              text: " Die Nationalflagge Luxemburgs ist ein horizontales Trikolor-Banner: rot, weiß und hellblau. Die Farben symbolisieren Unabhängigkeit und historisches Erbe des Herzogtums.",
              img: "Luxembourg/flag.png"
            }
          ]
        },
        briefHistory: {
          title: "Kurze Geschichte",
          items: [
            { text: "Luxemburg wurde im Jahr 963 gegründet, als Graf Siegfried von Luxemburg die Festung Lucilinburhuc erwarb, um die sich nach und nach eine Stadt und ein Staat entwickelten." },
            { text: "Im Mittelalter entwickelte sich Luxemburg zu einer wichtigen Grafschaft und später zu einem Herzogtum und spielte eine bedeutende Rolle in der europäischen Politik. Vertreter der Luxemburger Dynastie besetzten den Thron des Heiligen Römischen Reiches, darunter Kaiser Karl IV." },
            { text: "In den folgenden Jahrhunderten stand das Gebiet Luxemburgs aufgrund seiner strategischen Lage im Zentrum Europas mehrfach unter der Kontrolle großer Mächte – Spanien, Frankreich und Österreich. Die Stadt Luxemburg galt als eine der stärksten Festungen des Kontinents und erhielt den Beinamen „Gibraltar des Nordens“." },
            { text: "Ein entscheidender Wendepunkt war das Jahr 1867, als nach der Luxemburger Krise der Londoner Vertrag unterzeichnet wurde. Die Festung Luxemburg wurde abgebaut, und das Land erhielt den Status eines neutralen Staates, der durch internationale Verträge garantiert wurde." },
            { text: "Im 19. Jahrhundert wurde Luxemburg nach den Beschlüssen des Wiener Kongresses zum Großherzogtum. Im Jahr 1890 begann die Herrschaft der Dynastie Nassau-Weilburg, die bis heute andauert." },
            { text: "Während des Ersten und Zweiten Weltkriegs wurde Luxemburg von Deutschland besetzt. Im Zweiten Weltkrieg wurde das Land faktisch vom nationalsozialistischen Deutschland annektiert, zwangsweise germanisiert, und ein Teil der Bevölkerung wurde deportiert und mobilisiert. Nach der Befreiung im Jahr 1944 gab Luxemburg seine Neutralitätspolitik endgültig auf." },
            { text: "Seit der Mitte des 20. Jahrhunderts gehört Luxemburg zu den Gründungsmitgliedern der europäischen Integration und beteiligte sich an der Entstehung der Europäischen Union und anderer internationaler Organisationen. Das Land entwickelte sich zu einem der größten Finanzzentren der Welt." },
            { text: "Heute ist Luxemburg ein stabiles und wirtschaftlich stark entwickeltes Land mit hoher Lebensqualität, einer starken Wirtschaft und einer wichtigen Rolle in der europäischen Politik." }
          ]
        },
        regions: {
          title: "Kantone Luxemburgs",
          items: [
            { id: 1, name: 'Capellen', hasInfo: true, path: 'capellen' },
            { id: 2, name: 'Clervaux', hasInfo: false, path: 'clervaux' },
            { id: 3, name: 'Diekirch', hasInfo: false, path: 'diekirch' },
            { id: 4, name: 'Echternach', hasInfo: false, path: 'echternach' },
            { id: 5, name: 'Esch-sur-Alzette', hasInfo: false, path: 'esch_sur_alzette' },
            { id: 6, name: 'Grevenmacher', hasInfo: false, path: 'grevenmacher' },
            { id: 7, name: 'Luxemburg', hasInfo: true, path: 'luxembourg_canton' },
            { id: 8, name: 'Mersch', hasInfo: false, path: 'mersch' },
            { id: 9, name: 'Redange', hasInfo: false, path: 'redange' },
            { id: 10, name: 'Remich', hasInfo: false, path: 'remich' },
            { id: 11, name: 'Vianden', hasInfo: false, path: 'vianden' },
            { id: 12, name: 'Wiltz', hasInfo: false, path: 'wiltz' }
          ]
        },
        routes: {
          title: "Routen",
          items: [
            { id: 1, name: "Müllerthal-Trail", type: "hiking", path: "mullerthal-trail" },
            { id: 2, name: "Tal der sieben Schlösser", type: "castle-route", path: "valley-seven-castles" }
          ]
        },
        meta: {
          title: "Luxemburg — Informationen über das Land, Natur und Kultur",
          description: "Alles über das Land Luxemburg: Hauptstadt Luxemburg, Geographie, Bevölkerung, Sprachen, Kultur, Symbole, Geschichte und wichtige Städte.",
          ogTitle: "Luxemburg — Informationen über das Land und Sehenswürdigkeiten",
          ogDescription: "Detaillierte Informationen über Luxemburg: Kultur, Symbole, Geschichte, wichtige Städte und interessante Fakten.",
          ogImage: "https://our-travels.info/foto/Luxembourg/flag.png"
        }
      }
    }
  },
  {
    id: 'ua',
    path: 'ukraine',
    translations: {
      ru: {
        country: 'Украина',
        desc: {
          capital: [{ bold: 'Столица:', text: ' Киев' }],
          geography: [
            { text: 'Украина — государство в Восточной Европе. На востоке и севере граничит с Россией, на северо-западе — с Белоруссией, на западе — с Польшей, Словакией, Венгрией и Румынией. На юге омывается Черным морем, на юго-востоке — Азовским морем.' }
          ],
          population: [{ bold: 'Численность населения:', text: ' около 39 млн человек (2025), с учётом территорий, контролируемых украинской властью. Большая часть населения проживает в городах.' }],
          languages: [{ bold: 'Языки:', text: ' украинский (государственный), а также языки этнических меньшинств — крымскотатарский, венгерский, румынский, польский и др.' }],
          cuisine: [{ bold: 'Кухня:', text: ' визитная карточка страны — борщ с пампушками, различные котлеты, печеня, битки, голубцы, шашлык, сало.' }],
          entry: [{ bold: 'Въезд в Украину:', text: ' иностранные граждане проходят паспортный и таможенный контроль. Для граждан большинства стран требуется виза или другие разрешительные документы согласно действующему законодательству.' }]
        },
        symbols: {
          title: "Геральдика",
          items: [
            {
              bold: "Герб:",
              text: ' 28 июня 1996 года статьей 20 Конституции Украины утвержден малый герб государства – золотой трезубец на голубом фоне. Когда-то трезубец был государственной эмблемой Киевской Руси во времена правления Рюриковичей. Существует несколько версий происхождения символа: некоторые связывают его с Посейдоном, богом моря в греческой мифологии. Подобные эмблемы встречались у Византии, Скандинавии и у сарматов. Трезубец использовался как религиозный, государственный, военный или геральдический символ, а иногда – декоративный элемент. Поздние экземпляры трезубца (I тыс. н.э.) найдены на территории Украины. Малый герб является частью большого герба.',
              img: "Ukraine/gerb.gif"
            },
            {
              bold: "Флаг:",
              text: " 28 января 1992 года Верховный Совет Украины утвердил государственный флаг: прямоугольное полотнище с двумя равными горизонтальными полосами – верхняя синяя, нижняя жёлтая.",
              img: "Ukraine/flag.jpg"
            }
          ]
        },
        holidays: {
          title: "Праздники",
          items: [
            { bold: "1 января", text: " – Новый год" },
            { bold: "25 декабря", text: " – Рождество (по новому стилю)" },
            { bold: "8 марта", text: " – Международный женский день" },
            { bold: "Пасха", text: " – отмечается в один из дней между 4 апреля и 8 мая (дата плавающая)" },
            { bold: "1 мая", text: " – День труда" },
            { bold: "9 мая", text: " – День победы над нацизмом во Второй мировой войне" },
            { bold: "28 июня", text: " – День Конституции Украины" },
            { bold: "15 июля", text: " – День Украинской государственности" },
            { bold: "1 октября", text: " – День защитников и защитниц Украины" },
            { bold: "24 августа", text: " – День Независимости Украины" }
          ]
        },
        briefHistory: {
          title: "Краткая история",
          items: [
            { text: 'История территории Украины начинается с Трипольской культуры в эпоху неолита. В VII веке до н.э. здесь жили скифы. В IX–X веках формируется Киевская Русь. В 988–989 годах произошло Крещение Руси князем Владимиром Великим. В XII–XIII веках Киевская Русь ослабла под натиском междоусобиц и монголо-татарского нашествия.' },
            { text: 'В XVI–XVII веках украинские земли находились под властью Польши, Литвы и Османской империи. В 1648–1654 годах развернулась национально-освободительная война под руководством Богдана Хмельницкого, что привело к созданию автономии в союзе с Московским царством.' },
            { text: 'В XX веке Украина пережила революцию 1917 года, вхождение в состав СССР, Голодомор 1932–1933 годов, Вторую мировую войну и послевоенное восстановление. В 1986 году произошла авария на Чернобыльской АЭС.' },
            { text: '24 августа 1991 года Украина провозгласила независимость. В 2004 году состоялась Оранжевая революция, в 2013–2014 годах – Революция достоинства. В 2014 году Россия аннексировала Крым, начался вооружённый конфликт на востоке страны.' },
            { text: 'С февраля 2022 года продолжается полномасштабная война с Россией.' },
            { text: 'Современная Украина – президентско-парламентская республика. Президент с 2019 года – Владимир Зеленский. Гривна (UAH) – официальная валюта. Премьер-министр с июля 2025 года – Юлия Свириденко.' }
          ]
        },
        regions: {
          title: "Области Украины",
          items: [
            { id: 1, name: 'Винницкая область', path: 'vinnytska', hasInfo: false, svgId: "vinnytsia" },
            { id: 2, name: 'Волынская область', path: 'volynska', hasInfo: false, svgId: "volyn" },
            { id: 3, name: 'Днепропетровская область', path: 'dnepropetrovska', hasInfo: false, svgId: "dnipropetrovsk" },
            { id: 4, name: 'Донецкая область', path: 'donetska', hasInfo: false, svgId: "donetsk" },
            { id: 5, name: 'Житомирская область', path: 'zhytomyrska', hasInfo: false, svgId: "zhytomyr" },
            { id: 6, name: 'Закарпатская область', path: 'zakarpatska', hasInfo: false, svgId: "zakarpattia" },
            { id: 7, name: 'Запорожская область', path: 'zaporizka', hasInfo: false, svgId: "zaporizhia" },
            { id: 8, name: 'Ивано-Франковская область', path: 'ivano-frankivska', hasInfo: false, svgId: "ivano-frankivsk" },
            { id: 9, name: 'Киевская область', path: 'kyivska', hasInfo: false, svgId: "kyiv" },
            { id: 10, name: 'Кировоградская область', path: 'kirovohradska', hasInfo: false, svgId: "kirovohrad" },
            { id: 11, name: 'Луганская область', path: 'luganska', hasInfo: false, svgId: "luhansk" },
            { id: 12, name: 'Львовская область', path: 'lvivska', hasInfo: false, svgId: "lviv" },
            { id: 13, name: 'Николаевская область', path: 'mykolaivska', hasInfo: false, svgId: "mykolaiv" },
            { id: 14, name: 'Одесская область', path: 'odeska', hasInfo: false, svgId: "odessa" },
            { id: 15, name: 'Полтавская область', path: 'poltavska', hasInfo: false, svgId: "poltava" },
            { id: 16, name: 'Ровенская область', path: 'rovenska', hasInfo: false, svgId: "rivne" },
            { id: 17, name: 'Сумская область', path: 'sumska', hasInfo: true, svgId: "sumy" },
            { id: 18, name: 'Тернопольская область', path: 'ternopilska', hasInfo: false, svgId: "ternopil" },
            { id: 19, name: 'Харьковская область', path: 'kharkivska', hasInfo: false, svgId: "kharkiv" },
            { id: 20, name: 'Херсонская область', path: 'khersonska', hasInfo: false, svgId: "kherson" },
            { id: 21, name: 'Хмельницкая область', path: 'khmelnytska', hasInfo: false, svgId: "khmelnytskyi" },
            { id: 22, name: 'Черкасская область', path: 'cherkaska', hasInfo: false, svgId: "cherkasy" },
            { id: 23, name: 'Черниговская область', path: 'chernihivska', hasInfo: false, svgId: "chernihiv" },
            { id: 24, name: 'Черновицкая область', path: 'chernivetska', hasInfo: false, svgId: "chernivtsi" },
            { id: 25, name: 'Киев', path: 'kyiv', hasInfo: false, svgId: "kyiv-city" },
            { id: 26, name: 'Севастополь', path: 'sevastopol', hasInfo: false, svgId: "sevastopol" },
            { id: 27, name: 'Автономная Республика Крым', path: 'crimea', hasInfo: false, svgId: "crimea" }
          ]
        },
        meta: {
          title: "Украина — информация о стране, достопримечательности и культура",
          description: "Все о стране Украина: столица Киев, география, население, языки, кухня, праздники и краткая история.",
          ogTitle: "Украина — информация о стране и достопримечательности",
          ogDescription: "Подробная информация о стране Украина: культура, символы, история, регионы и интересные факты.",
          ogImage: "https://our-travels.info/foto/Ukraine/Flag.svg"
        }
      },
      ua: {
        country: 'Україна',
        desc: {
          capital: [{ bold: 'Столиця:', text: ' Київ' }],
          geography: [
            { text: 'Україна — держава у Східній Європі. На сході та півночі межує з Росією, на північному заході — з Білоруссю, на заході — з Польщею, Словаччиною, Угорщиною та Румунією. На півдні омивається Чорним морем, на південному сході — Азовським морем.' }
          ],
          population: [{ bold: 'Населення:', text: ' близько 39 млн осіб (2025), з урахуванням територій, контрольованих українською владою. Більшість населення проживає у містах.' }],
          languages: [{ bold: 'Мови:', text: ' українська (державна), а також мови національних меншин — кримськотатарська, угорська, румунська, польська та ін.' }],
          cuisine: [{ bold: 'Кухня:', text: ' візитівка країни — борщ із пампушками, різні котлети, печеня, битки, голубці, шашлик, сало. ' }],
          entry: [{ bold: 'В’їзд в Україну:', text: ' іноземні громадяни проходять паспортний і митний контроль. Для громадян більшості країн потрібна віза або інші дозвільні документи згідно з чинним законодавством.' }]
        },
        symbols: {
          title: "Геральдика",
          items: [
            {
              bold: 'Герб:',
              text: ' 28 червня 1996 року статтею 20 Конституції України затверджено малий герб держави – золотий тризуб на блакитному фоні. Колись тризуб був державною емблемою Київської Русі за часів правління Рюриковичів. Існує кілька версій походження символу: деякі дослідники пов’язують його з Посейдоном, богом моря у грецькій міфології. Подібні емблеми зустрічалися у Візантії, Скандинавії та у сарматів. Тризуб використовувався як релігійний, державний, військовий або геральдичний символ, а іноді – декоративний елемент. Пізні екземпляри тризуба (I тис. н.е.) знайдено на території України. Малий герб є частиною великого герба.',
              img: "Ukraine/gerb.gif"
            },
            {
              bold: 'Прапор:',
              text: ' 28 січня 1992 року Верховна Рада України затвердила державний прапор: прямокутне полотнище з двох рівних горизонтальних смуг – верхня синя, нижня жовта.',
              img: "Ukraine/flag.jpg"
            }
          ]
        },
        holidays: {
          title: "Свята",
          items: [
            { bold: "1 січня", text: " – Новий рік" },
            { bold: "25 грудня", text: " – Різдво (за новим стилем)" },
            { bold: "8 березня", text: " – Міжнародний жіночий день" },
            { bold: "Великдень", text: " – відзначається в один із днів між 4 квітня і 8 травня (плаваюча дата)" },
            { bold: "1 травня", text: " – День праці" },
            { bold: "9 травня", text: " – День перемоги над нацизмом у Другій світовій війні" },
            { bold: "28 червня", text: " – День Конституції України" },
            { bold: "15 липня", text: " – День Української державності" },
            { bold: "1 жовтня", text: " – День захисників і захисниць України" },
            { bold: "24 серпня", text: " – День Незалежності України" }
          ]
        },
        briefHistory: {
          title: "Коротка історія",
          items: [
            { text: 'Історія території України починається з Трипільської культури в епоху неоліту. У VII столітті до н. е. тут жили скіфи. У IX–X століттях формується Київська Русь. У 988–989 роках відбулося Хрещення Русі князем Володимиром Великим. У XII–XIII століттях Київська Русь ослабла через міжусобиці та монголо-татарську навалу.' },
            { text: 'У XVI–XVII століттях українські землі перебували під владою Польщі, Литви й Османської імперії. У 1648–1654 роках відбулася національно-визвольна війна під проводом Богдана Хмельницького, що призвела до створення автономії в союзі з Московським царством.' },
            { text: 'У XX столітті Україна пережила революцію 1917 року, входження до складу СРСР, Голодомор 1932–1933 років, Другу світову війну та післявоєнну відбудову. У 1986 році сталася аварія на Чорнобильській АЕС.' },
            { text: '24 серпня 1991 року Україна проголосила незалежність. У 2004 році відбулася Помаранчева революція, у 2013–2014 роках – Революція гідності. У 2014 році Росія анексувала Крим, почався збройний конфлікт на сході країни.' },
            { text: 'З лютого 2022 року триває повномасштабна війна з Росією.' },
            { text: 'Сучасна Україна – президентсько-парламентська республіка. Президент з 2019 року – Володимир Зеленський. Гривня (UAH) – офіційна валюта. Прем’єр-міністр з липня 2025 року – Юлія Свириденко.' }
          ]
        },
        regions: {
          title: "Області України",
          items: [
            { id: 1, name: 'Вінницька область', path: 'vinnytska', hasInfo: false, svgId: "vinnytsia" },
            { id: 2, name: 'Волинська область', path: 'volynska', hasInfo: false, svgId: "volyn" },
            { id: 3, name: 'Дніпропетровська область', path: 'dnepropetrovska', hasInfo: false, svgId: "dnipropetrovsk" },
            { id: 4, name: 'Донецька область', path: 'donetska', hasInfo: false, svgId: "donetsk" },
            { id: 5, name: 'Житомирська область', path: 'zhytomyrska', hasInfo: false, svgId: "zhytomyr" },
            { id: 6, name: 'Закарпатська область', path: 'zakarpatska', hasInfo: false, svgId: "zakarpattia" },
            { id: 7, name: 'Запорізька область', path: 'zaporizka', hasInfo: false, svgId: "zaporizhia" },
            { id: 8, name: 'Івано-Франківська область', path: 'ivano-frankivska', hasInfo: false, svgId: "ivano-frankivsk" },
            { id: 9, name: 'Київська область', path: 'kyivska', hasInfo: false, svgId: "kyiv" },
            { id: 10, name: 'Кіровоградська область', path: 'kirovohradska', hasInfo: false, svgId: "kirovohrad" },
            { id: 11, name: 'Луганська область', path: 'luganska', hasInfo: false, svgId: "luhansk" },
            { id: 12, name: 'Львівська область', path: 'lvivska', hasInfo: false, svgId: "lviv" },
            { id: 13, name: 'Миколаївська область', path: 'mykolaivska', hasInfo: false, svgId: "mykolaiv" },
            { id: 14, name: 'Одеська область', path: 'odeska', hasInfo: false, svgId: "odessa" },
            { id: 15, name: 'Полтавська область', path: 'poltavska', hasInfo: false, svgId: "poltava" },
            { id: 16, name: 'Рівненська область', path: 'rovenska', hasInfo: false, svgId: "rivne" },
            { id: 17, name: 'Сумська область', path: 'sumska', hasInfo: true, svgId: "sumy" },
            { id: 18, name: 'Тернопільська область', path: 'ternopilska', hasInfo: false, svgId: "ternopil" },
            { id: 19, name: 'Харківська область', path: 'kharkivska', hasInfo: false, svgId: "kharkiv" },
            { id: 20, name: 'Херсонська область', path: 'khersonska', hasInfo: false, svgId: "kherson" },
            { id: 21, name: 'Хмельницька область', path: 'khmelnytska', hasInfo: false, svgId: "khmelnytskyi" },
            { id: 22, name: 'Черкаська область', path: 'cherkaska', hasInfo: false, svgId: "cherkasy" },
            { id: 23, name: 'Чернігівська область', path: 'chernihivska', hasInfo: false, svgId: "chernihiv" },
            { id: 24, name: 'Чернівецька область', path: 'chernivetska', hasInfo: false, svgId: "chernivtsi" },
            { id: 25, name: 'Київ', path: 'kyiv', hasInfo: false, svgId: "kyiv-city" },
            { id: 26, name: 'Севастополь', path: 'sevastopol', hasInfo: false, svgId: "sevastopol" },
            { id: 27, name: 'Автономна Республіка Крим', path: 'crimea', hasInfo: false, svgId: "crimea" }
          ]
        },
        meta: {
          title: "Україна — інформація про країну, визначні місця та культура",
          description: "Усе про країну Україна: столиця Київ, географія, населення, мови, кухня, свята та коротка історія.",
          ogTitle: "Україна — інформація про країну та визначні місця",
          ogDescription: "Детальна інформація про Україну: культура, символи, історія, регіони та цікаві факти.",
          ogImage: "https://our-travels.info/foto/Ukraine/Flag.svg"
        }
      },
      de: {
        country: 'Ukraine',
        desc: {
          capital: [{ bold: 'Hauptstadt:', text: ' Kiew' }],
          geography: [
            { text: 'Die Ukraine ist ein Staat in Osteuropa. Im Osten und Norden grenzt sie an Russland, im Nordwesten an Belarus, im Westen an Polen, die Slowakei, Ungarn und Rumänien. Im Süden wird sie vom Schwarzen Meer, im Südosten vom Asowschen Meer umspült.' }
          ],
          population: [{ bold: 'Einwohnerzahl:', text: ' etwa 39 Millionen Menschen (2025), bezogen auf die von der ukrainischen Regierung kontrollierten Gebiete. Die Mehrheit lebt in Städten.' }],
          languages: [{ bold: 'Sprachen:', text: ' Ukrainisch (Amtssprache) sowie Sprachen nationaler Minderheiten — Krimtatarisch, Ungarisch, Rumänisch, Polnisch u.a.' }],
          cuisine: [{ bold: 'Küche:', text: ' Das kulinarische Aushängeschild ist der Borschtsch mit Pampuschki, dazu verschiedene Koteletts, Schmorgerichte, Kohlrouladen, Schaschlik und Speck.' }],
          entry: [{ bold: 'Einreise in die Ukraine:', text: ' Ausländische Staatsbürger durchlaufen Pass- und Zollkontrolle. Für die meisten Länder ist ein Visum oder ein anderes Einreisedokument gemäß den geltenden Vorschriften erforderlich.' }]
        },
        symbols: {
          title: "Heraldik",
          items: [
            {
              bold: 'Wappen:',
              text: ' am 28. Juni 1996 wurde durch Artikel 20 der ukrainischen Verfassung das kleine Wappen des Staates – ein goldener Dreizack auf blauem Hintergrund – offiziell bestätigt. Der Dreizack war einst das Staatssymbol der Kiewer Rus zur Zeit der Herrschaft der Rurikiden. Es gibt mehrere Theorien zur Herkunft des Symbols: Einige Forscher verbinden es mit Poseidon, dem Meeresgott der griechischen Mythologie. Ähnliche Embleme traten in Byzanz, Skandinavien und bei den Sarmaten auf. Der Dreizack wurde als religiöses, staatliches, militärisches oder heraldisches Symbol verwendet, manchmal auch nur als dekoratives Element. Späte Exemplare des Dreizacks (1. Jahrtausend n. Chr.) wurden auf dem Gebiet der Ukraine gefunden. Das kleine Wappen ist Teil des großen Wappens.',
              img: "Ukraine/gerb.gif"
            },
            {
              bold: 'Flagge:',
              text: ' am 28. Januar 1992 beschloss die Werchowna Rada der Ukraine die nationale Flagge: ein rechteckiges Tuch mit zwei gleich breiten horizontalen Streifen – oben blau, unten gelb.',
              img: "Ukraine/flag.jpg"
            }
          ]
        },
        holidays: {
          title: "Feiertage",
          items: [
            { bold: "1. Januar", text: " – Neujahr" },
            { bold: "25. Dezember", text: " – Weihnachten (nach neuem Stil)" },
            { bold: "8. März", text: " – Internationaler Frauentag" },
            { bold: "Ostern", text: " – wird an einem Tag zwischen 4. April und 8. Mai gefeiert (bewegliches Datum)" },
            { bold: "1. Mai", text: " – Tag der Arbeit" },
            { bold: "9. Mai", text: " – Tag des Sieges über den Nationalsozialismus im Zweiten Weltkrieg" },
            { bold: "28. Juni", text: " – Tag der Verfassung der Ukraine" },
            { bold: "15. Juli", text: " – Tag der ukrainischen Staatlichkeit" },
            { bold: "1. Oktober", text: " – Tag der Verteidigerinnen und Verteidiger der Ukraine" },
            { bold: "24. August", text: " – Unabhängigkeitstag der Ukraine" }
          ]
        },
        briefHistory: {
          title: 'Kurze Geschichte',
          items: [
            { text: 'Die Geschichte der heutigen Ukraine beginnt mit der Tripolje-Kultur in der Jungsteinzeit. Im 7. Jahrhundert v. Chr. lebten hier die Skythen. Im 9.–10. Jahrhundert entstand die Kiewer Rus. 988–989 fand die Christianisierung der Rus durch Fürst Wladimir den Großen statt. Im 12.–13. Jahrhundert wurde die Kiewer Rus durch innere Konflikte und die mongolisch-tatarische Invasion geschwächt.' },
            { text: 'Im 16.–17. Jahrhundert standen ukrainische Gebiete unter der Herrschaft Polens, Litauens und des Osmanischen Reiches. 1648–1654 führte Bohdan Chmelnyzkyj den nationalen Befreiungskrieg, der zu einer Autonomie in Verbindung mit dem Moskauer Zarenreich führte.' },
            { text: 'Im 20. Jahrhundert erlebte die Ukraine die Revolution von 1917, den Eintritt in die UdSSR, die Hungersnot (Holodomor) 1932–1933, den Zweiten Weltkrieg und den Wiederaufbau. 1986 ereignete sich die Katastrophe im Kernkraftwerk Tschernobyl.' },
            { text: 'Am 24. August 1991 erklärte die Ukraine ihre Unabhängigkeit. 2004 fand die Orange Revolution statt, 2013–2014 die Revolution der Würde. 2014 annektierte Russland die Krim, im Osten begann ein bewaffneter Konflikt.' },
            { text: 'Seit Februar 2022 führt Russland einen groß angelegten Krieg gegen die Ukraine.' },
            { text: 'Die heutige Ukraine ist eine präsidentiell-parlamentarische Republik. Präsident seit 2019 ist Wolodymyr Selenskyj. Die offizielle Währung ist die Hrywnja (UAH). Premierministerin seit Juli 2025 ist Julia Swyrydenko.' }
          ]
        },
        regions: {
          title: "Regionen der Ukraine",
          items: [
            { id: 1, name: 'Oblast Winnyzja', path: 'vinnytska', hasInfo: false, svgId: "vinnytsia" },
            { id: 2, name: 'Oblast Wolhynien', path: 'volynska', hasInfo: false, svgId: "volyn" },
            { id: 3, name: 'Oblast Dnipropetrowsk', path: 'dnepropetrovska', hasInfo: false, svgId: "dnipropetrovsk" },
            { id: 4, name: 'Oblast Donezk', path: 'donetska', hasInfo: false, svgId: "donetsk" },
            { id: 5, name: 'Oblast Schytomyr', path: 'zhytomyrska', hasInfo: false, svgId: "zhytomyr" },
            { id: 6, name: 'Oblast Transkarpatien', path: 'zakarpatska', hasInfo: false, svgId: "zakarpattia" },
            { id: 7, name: 'Oblast Saporischschja', path: 'zaporizka', hasInfo: false, svgId: "zaporizhia" },
            { id: 8, name: 'Oblast Iwano-Frankiwsk', path: 'ivano-frankivska', hasInfo: false, svgId: "ivano-frankivsk" },
            { id: 9, name: 'Oblast Kiew', path: 'kyivska', hasInfo: false, svgId: "kyiv" },
            { id: 10, name: 'Oblast Kirovohrad', path: 'kirovohradska', hasInfo: false, svgId: "kirovohrad" },
            { id: 11, name: 'Oblast Luhansk', path: 'luganska', hasInfo: false, svgId: "luhansk" },
            { id: 12, name: 'Oblast Lwiw', path: 'lvivska', hasInfo: false, svgId: "lviv" },
            { id: 13, name: 'Oblast Mykolajiw', path: 'mykolaivska', hasInfo: false, svgId: "mykolaiv" },
            { id: 14, name: 'Oblast Odessa', path: 'odeska', hasInfo: false, svgId: "odessa" },
            { id: 15, name: 'Oblast Poltawa', path: 'poltavska', hasInfo: false, svgId: "poltava" },
            { id: 16, name: 'Oblast Riwne', path: 'rovenska', hasInfo: false, svgId: "rivne" },
            { id: 17, name: 'Oblast Sumy', path: 'sumska', hasInfo: true, svgId: "sumy" },
            { id: 18, name: 'Oblast Ternopil', path: 'ternopilska', hasInfo: false, svgId: "ternopil" },
            { id: 19, name: 'Oblast Charkiw', path: 'kharkivska', hasInfo: false, svgId: "kharkiv" },
            { id: 20, name: 'Oblast Cherson', path: 'khersonska', hasInfo: false, svgId: "kherson" },
            { id: 21, name: 'Oblast Chmelnyzkyj', path: 'khmelnytska', hasInfo: false, svgId: "khmelnytskyi" },
            { id: 22, name: 'Oblast Tscherkassy', path: 'cherkaska', hasInfo: false, svgId: "cherkasy" },
            { id: 23, name: 'Oblast Tschernihiw', path: 'chernihivska', hasInfo: false, svgId: "chernihiv" },
            { id: 24, name: 'Oblast Tscherniwzi', path: 'chernivetska', hasInfo: false, svgId: "chernivtsi" },
            { id: 25, name: 'Kiew', path: 'kyiv', hasInfo: false, svgId: "kyiv-city" },
            { id: 26, name: 'Sewastopol', path: 'sevastopol', hasInfo: false, svgId: "sevastopol" },
            { id: 27, name: 'Autonome Republik Krim', path: 'crimea', hasInfo: false, svgId: "crimea" }
          ]
        },
        meta: {
          title: "Ukraine — Informationen über das Land, Sehenswürdigkeiten und Kultur",
          description: "Alles über das Land Ukraine: Hauptstadt Kiew, Geografie, Bevölkerung, Sprachen, Küche, Feiertage und kurze Geschichte.",
          ogTitle: "Ukraine — Informationen über das Land und Sehenswürdigkeiten",
          ogDescription: "Detaillierte Informationen über die Ukraine: Kultur, Symbole, Geschichte, Regionen und interessante Fakten.",
          ogImage: "https://our-travels.info/foto/Ukraine/Flag.svg"
        }
      }
    }
  }
]
export default datas;