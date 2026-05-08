const datas = [
    // свободные города
    // Köln-city
    {
        id: "koln",
        path: "koln",
        countryPath: "germany", regionPath: "nrw", districtPath: "city",
        gerb: "Germany/nrw/koln/koln-city/gerb.png",
        coord: { lat: 50.9333, lng: 6.95 },
        translations: {
            ru: {
                name: 'Кёльн',
                desc: {
                    general: [
                        { text: 'Кёльн – крупнейший город земли Северный Рейн-Вестфалия и четвёртый по численности город Германии.' },
                        { text: 'Кёльн является важнейшим экономическим, культурным и транспортным центром Германии: здесь находится крупнейший внутренний порт Европы, а также важнейший железнодорожный и автомобильный узел.' }
                    ],
                    population: [{ bold: 'Население:', text: ' примерно 1 013 684 человек (2025)' }],
                    area: [{ bold: 'Площадь:', text: ' около 405 км²' }],
                    postalCode: [{ bold: 'Почтовый индекс:', text: ' 50667–51149' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 0221' }],
                    officialSite: [{ bold: 'Официальный сайт Кельна', link: 'https://www.stadt-koeln.de/' }]
                },
                admin: {
                    title: 'Кёльн разделён на 9 административных округов (Stadtbezirke) и 86 районов (Stadtteile). Основные округа города:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt', text: '– центральный округ Кёльна. Здесь расположены Кёльнский собор, главные музеи, торговые улицы и исторический центр города (включает районы: Altstadt-Nord, Altstadt-Süd, Neustadt-Nord, Neustadt-Süd, Deutz)' },
                        { bold: 'Rodenkirchen', text: '– южный округ Кёльна с жилыми кварталами, зелёными зонами и районами вдоль Рейна (включает районы: Bayenthal, Marienburg, Raderberg, Raderthal, Zollstock, Rondorf, Hahnwald, Rodenkirchen, Weiß, Sürth, Godorf, Immendorf, Meschenich)' },
                        { bold: 'Lindenthal', text: '– западный округ с университетскими районами, парками и престижной жилой застройкой (включает районы: Klettenberg, Sülz, Lindenthal, Braunsfeld, Müngersdorf, Junkersdorf, Weiden, Lövenich, Widdersdorf)' },
                        { bold: 'Ehrenfeld', text: '– один из самых известных современных округов Кёльна, известный творческой атмосферой, барами, галереями и культурными пространствами (включает районы: Ehrenfeld, Neuehrenfeld, Bickendorf, Vogelsang, Bocklemünd/Mengenich, Ossendorf)' },
                        { bold: 'Nippes', text: '– северный жилой округ с традиционными кварталами, рынками и локальной городской атмосферой (включает районы: Nippes, Mauenheim, Riehl, Niehl, Weidenpesch, Longerich, Bilderstöckchen)' },
                        { bold: 'Chorweiler', text: '– северный округ с крупными жилыми массивами, современными кварталами и пригородными территориями (включает районы: Merkenich, Fühlingen, Seeberg, Heimersdorf, Lindweiler, Pesch, Esch/Auweiler, Volkhoven/Weiler, Chorweiler, Roggendorf/Thenhoven, Blumenberg)' },
                        { bold: 'Porz', text: '– крупнейший округ Кёльна, расположенный на правом берегу Рейна. Включает жилые районы, природные зоны и территорию аэропорта Кёльн/Бонн (включает районы: Poll, Westhoven, Ensen, Gremberghoven, Eil, Porz, Urbach, Elsdorf, Grengel, Wahnheide, Wahn, Lind, Libur, Zündorf, Langel)' },
                        { bold: 'Kalk', text: '– восточный округ с промышленным прошлым, жилыми кварталами и активным городским развитием (включает районы: Humboldt/Gremberg, Kalk, Vingst, Höhenberg, Ostheim, Merheim, Brück, Neubrück, Rath/Heumar)' },
                        { bold: 'Mülheim', text: '– крупный округ на правом берегу Рейна, сочетающий исторические районы, современные жилые зоны и промышленные территории (включает районы: Mülheim, Buchforst, Buchheim, Holweide, Dellbrück, Höhenhaus, Dünnwald, Stammheim, Flittard)' },
                    ]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Город расположен на реке Рейн, которая делит его на левый и правый берега.' },
                        { text: 'Левый берег это исторический центр и жилые кварталы, где сосредоточены старинные улочки, магазины, музеи и кафе, а правый берег – промышленная зона и новые кварталы, включая деловые районы и современную архитектуру.' },
                        { text: 'Набережная Рейна (Rheinpromenade) – одно из любимых мест горожан и туристов: здесь приятно гулять, кататься на велосипедах, отдыхать в кафе и наблюдать панораму города.' },
                        { text: 'Юго-западные районы, такие как Линденталь, Байенталь и Мариенбург, известны своей уютной жилой атмосферой и зелёными улицами. Для прогулок у реки идеально подходит Роденкирхен.' },
                        { text: 'Восточные районы, включая Мюльхайм, Кальк и Дойц, соединены с центром подвесной дорогой, открывающей потрясающий вид на город.' },
                        { text: 'Город расположен в Кёльнской бухте, окружённой возвышенностями: на востоке – Зауэрланд и Бергская земля, на юго-западе – Эйфель, на юго-востоке – Рейнские сланцевые горы.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Кёльна',
                    isList: true,
                    items: [
                        { bold: 'Конрад Аденауэр', text: ' – первый канцлер ФРГ, в 1917–1933 годах занимал пост обербюргермайстера Кёльна.' },
                        { bold: 'Николаус Август Отто', text: ' – инженер, изобретатель первого двигателя внутреннего сгорания (1874), сооснователь завода Kloeckner Humboldt Deutz AG.' },
                        { bold: 'Георг Симон Ом', text: ' – физик, открывший закон электрического сопротивления (1827), преподавал в Кёльне.' },
                        { bold: 'Август Зандер', text: ' – фотограф, автор серии «Люди XX века».' },
                        { bold: 'Карлхайнц Штокхаузен', text: ' – композитор, один из пионеров электронной музыки, работал в студии WDR.' },
                        { bold: 'Макс Эрнст', text: ' – художник-сюрреалист, родился в Кёльне.' },
                        { bold: 'Генрих Бёлль', text: ' – писатель, лауреат Нобелевской премии по литературе (1972), жил и работал в Кёльне.' },
                        { bold: 'Гюнтер Грасс', text: ' – писатель, лауреат Нобелевской премии по литературе (1999), часть жизни был связан с Кёльном.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { text: 'Кёльнский собор – один из крупнейших готических соборов Европы, с башнями, видимыми почти из любой части города.' },
                        { text: 'Кёльнский карнавал – крупнейший в Германии и один из самых ярких в Европе.' },
                        { text: 'Город называют «голубой столицей» Германии за открытость и толерантность жителей.' },
                        { text: 'Кёльн – центр немецкой медиа-индустрии: здесь расположены телеканалы, радиостанции, издательства и студии звукозаписи.' },
                        { text: 'Международные ярмарки Anuga, Photokina и Art Cologne привлекают посетителей со всего мира.' },
                        { text: 'В Кёльне находится крупнейший внутренний порт Европы, а грузовой вокзал Эйфельтор – крупнейший контейнерный терминал Германии.' },
                        { text: 'Подвесная дорога через Рейн в районе Дойц – уникальная достопримечательность и смотровая площадка с панорамой города.' }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Кёльн – самый старый из крупных городов Германии, его история насчитывает более двух тысяч лет. На месте современного города в I веке н. э. существовало небольшое поселение германского племени убиев.' },
                        { text: 'В 50 году н. э. оно было преобразовано в римскую колонию Colonia Agrippina в честь императрицы Агриппины, супруги Клавдия, родившейся на Рейне. Со временем название трансформировалось в «Кёльн». Даже сегодня в центре города можно увидеть следы римской эпохи – фундаменты зданий, части стен и античные улицы.' },
                        { text: 'С римлянами в Кёльн пришло и христианство. В 785 году Карл Великий основал Кёльнское архиепископство и передал его главе светскую власть. Архиепископы стали одними из самых могущественных феодалов Священной Римской империи.' },
                        { text: 'В 1164 году в город привезли мощи Трёх волхвов. Для их хранения началось строительство грандиозного собора, крупнейшего севернее Альп. Первый камень заложили в 1248 году, но завершили стройку лишь в 1880-м. В это же время в центре города появились 12 романских церквей, которые и сегодня формируют облик старого Кёльна.' },
                        { text: 'Горожане, однако, быстро устали от власти архиепископов. В 1288 году они изгнали их из города, и резиденция переместилась в соседний Бонн. В окрестностях Брюля позже возвели замки Августусбург и Фалькенлуст – ныне объекты наследия ЮНЕСКО.' },
                        { text: 'В 1396 году в Кёльне приняли городскую конституцию и создали совет с бургомистром, а в 1475 году город официально получил статус свободного имперского. Средневековый Кёльн пережил расцвет: стал одним из крупнейших и богатейших городов Германии, важным участником Ганзейского союза и центром ярмарочной торговли. В 1388 году здесь открыли второй по возрасту университет страны.' },
                        { text: 'Эпоха свободы завершилась в 1794 году, когда Кёльн без боя сдался французским войскам. Университет закрыли, церковное имущество секуляризировали. В 1815 году Венский конгресс передал город Пруссии. Кёльн сохранял своё значение, став одним из крупнейших городов прусских земель.' },
                        { text: 'В 1822 году через Рейн навели первый мост со времён римлян, а вскоре его заменил постоянный железнодорожный и пешеходный мост. В 1823 году прошёл первый карнавал, ставший впоследствии визитной карточкой города.' },
                        { text: 'XIX век принёс индустриализацию. В Кёльне открывались фабрики, развивалось машиностроение, здесь же зародились важные открытия в области физики и техники. Город становился узлом железнодорожного и речного транспорта. В 1881 году снесли средневековые стены и на их месте проложили бульварное кольцо. А к концу века завершили строительство величественного Кёльнского собора.' },
                        { text: 'Первая мировая война прервала развитие, но уже вскоре город вновь ожил. Вновь открылся университет, началась масштабная градостроительная политика, появился современный ярмарочный комплекс в районе Дойц. В 1920-е годы Кёльн превратился в центр медиа и культуры: здесь появились крупные радиокомпании, выставки и заводы, работали фотографы и художники.' },
                        { text: 'С 1933 по 1945 годы Кёльн находился под властью нацистов и стал центром военного округа. В годы Второй мировой войны город был почти полностью разрушен: более 80% старого центра превратилось в руины. Лишь к 1959 году население вернулось к довоенному уровню, а восстановление города завершилось только в 1980-е.' },
                        { text: 'Во второй половине XX века Кёльн окончательно укрепил свои позиции как культурный и медиа-центр. Здесь проводились международные ярмарки искусства и фотографии, открывались галереи, процветало телевидение и радио. В городе жили и работали выдающиеся писатели, музыканты и художники, а Кёльн стал местом притяжения творческих сил со всего мира.' }
                    ]
                },
                meta: {
                    title: "Кёльн – крупнейший город Северного Рейна-Вестфалии",
                    description: "Кёльн: история, география, достопримечательности, знаменитые жители и интересные факты о крупнейшем городе Северного Рейна-Вестфалии.",
                    ogTitle: "Кёльн – информация о городе",
                    ogDescription: "Подробная информация о Кёльне: культура, история, знаменитые жители и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/001.jpg"
                }
            },
            ua: {
                name: 'Кельн',
                desc: {
                    general: [
                        { text: 'Кельн – найбільше місто землі Північний Рейн-Вестфалія та четверте за чисельністю населення місто Німеччини.' },
                        { text: 'Кельн є важливим економічним, культурним та транспортним центром Німеччини: тут знаходиться найбільший внутрішній порт Європи, а також важливий залізничний та автомобільний вузол.' }
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' приблизно 1 013 684 осіб (2025)' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' близько 405 км²' }
                    ],
                    postalCode: [
                        { bold: 'Поштовий індекс:' },
                        { text: ' 50667–51149' }
                    ],
                    phone: [
                        { bold: 'Телефонний код:' },
                        { text: ' +49 0221' }
                    ],
                    officialSite: [
                        { bold: 'Офіційний сайт Кельна', link: 'https://www.stadt-koeln.de/' }
                    ]
                },
                admin: {
                    title: 'Кельн поділяється на 9 адміністративних округів (Stadtbezirke) та 86 районів (Stadtteile). Основні округи міста:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt', text: '– центральний округ Кельна. Тут розташовані Кельнський собор, головні музеї, торгові вулиці та історичний центр міста (включає райони: Altstadt-Nord, Altstadt-Süd, Neustadt-Nord, Neustadt-Süd, Deutz)' },
                        { bold: 'Rodenkirchen', text: '– південний округ Кельна з житловими кварталами, зеленими зонами та районами вздовж Рейну (включає райони: Bayenthal, Marienburg, Raderberg, Raderthal, Zollstock, Rondorf, Hahnwald, Rodenkirchen, Weiß, Sürth, Godorf, Immendorf, Meschenich)' },
                        { bold: 'Lindenthal', text: '– західний округ з університетськими районами, парками та престижною житловою забудовою (включає райони: Klettenberg, Sülz, Lindenthal, Braunsfeld, Müngersdorf, Junkersdorf, Weiden, Lövenich, Widdersdorf)' },
                        { bold: 'Ehrenfeld', text: '– один із найвідоміших сучасних округів Кельна, відомий творчою атмосферою, барами, галереями та культурними просторами (включає райони: Ehrenfeld, Neuehrenfeld, Bickendorf, Vogelsang, Bocklemünd/Mengenich, Ossendorf)' },
                        { bold: 'Nippes', text: '– північний житловий округ із традиційними кварталами, ринками та локальною міською атмосферою (включає райони: Nippes, Mauenheim, Riehl, Niehl, Weidenpesch, Longerich, Bilderstöckchen)' },
                        { bold: 'Chorweiler', text: '– північний округ із великими житловими масивами, сучасними кварталами та приміськими територіями (включає райони: Merkenich, Fühlingen, Seeberg, Heimersdorf, Lindweiler, Pesch, Esch/Auweiler, Volkhoven/Weiler, Chorweiler, Roggendorf/Thenhoven, Blumenberg)' },
                        { bold: 'Porz', text: '– найбільший округ Кельна, розташований на правому березі Рейну. Включає житлові райони, природні зони та територію аеропорту Кельн/Бонн (включає райони: Poll, Westhoven, Ensen, Gremberghoven, Eil, Porz, Urbach, Elsdorf, Grengel, Wahnheide, Wahn, Lind, Libur, Zündorf, Langel)' },
                        { bold: 'Kalk', text: '– східний округ із промисловим минулим, житловими кварталами та активним міським розвитком (включає райони: Humboldt/Gremberg, Kalk, Vingst, Höhenberg, Ostheim, Merheim, Brück, Neubrück, Rath/Heumar)' },
                        { bold: 'Mülheim', text: '– великий округ на правому березі Рейну, який поєднує історичні райони, сучасні житлові зони та промислові території (включає райони: Mülheim, Buchforst, Buchheim, Holweide, Dellbrück, Höhenhaus, Dünnwald, Stammheim, Flittard)' },
                    ]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Місто розташоване на річці Рейн, яка ділить його на лівий та правий береги.' },
                        { text: 'Лівий берег – це історичний центр та житлові квартали, де зосереджені старовинні вулиці, магазини, музеї та кафе, а правий берег – промислова зона та нові квартали, включаючи ділові райони та сучасну архітектуру.' },
                        { text: 'Набережна Рейну (Rheinpromenade) – одне з улюблених місць мешканців та туристів: тут приємно гуляти, кататися на велосипедах, відпочивати в кафе та милуватися панорамою міста.' },
                        { text: 'Південно-західні райони, такі як Лінденталь, Байенталь та Марієнбург, відомі своєю затишною житловою атмосферою та зеленими вулицями. Для прогулянок біля річки ідеально підходить Роденкірхен.' },
                        { text: 'Східні райони, включаючи Мюльхайм, Кальк та Дойц, з’єднані з центром підвісною дорогою, що відкриває приголомшливий вид на місто.' },
                        { text: 'Місто розташоване в Кельнській затоці, оточеній височинами: на сході – Заурланд та Берзька земля, на південному заході – Ейфель, на південному сході – Рейнські сланцеві гори.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Кельна',
                    isList: true,
                    items: [
                        { bold: 'Конрад Аденауер', text: ' – перший канцлер ФРН, у 1917–1933 роках обіймав посаду обер-бургомістра Кельна.' },
                        { bold: 'Ніколаус Август Отто', text: ' – інженер, винахідник першого двигуна внутрішнього згоряння (1874), співзасновник заводу Kloeckner Humboldt Deutz AG.' },
                        { bold: 'Георг Сімон Ом', text: ' – фізик, відкрив закон електричного опору (1827), викладав у Кельні.' },
                        { bold: 'Август Зандер', text: ' – фотограф, автор серії «Люди XX століття».' },
                        { bold: 'Карлхайнц Штокхаузен', text: ' – композитор, один із піонерів електронної музики, працював у студії WDR.' },
                        { bold: 'Макс Ернст', text: ' – художник-сюрреаліст, народився у Кельні.' },
                        { bold: 'Генріх Бьолль', text: ' – письменник, лауреат Нобелівської премії з літератури (1972), жив і працював у Кельні.' },
                        { bold: 'Ґюнтер Ґрасс', text: ' – письменник, лауреат Нобелівської премії з літератури (1999), частину життя був пов’язаний із Кельном.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    isList: true,
                    items: [
                        { text: 'Кельнський собор – один із найбільших готичних соборів Європи, із вежами, видимими майже з будь-якої частини міста.' },
                        { text: 'Кельнський карнавал – найбільший у Німеччині та один із найяскравіших у Європі.' },
                        { text: 'Місто називають «блакитною столицею» Німеччини за відкритість та толерантність мешканців.' },
                        { text: 'Кельн – центр німецької медіа-індустрії: тут розташовані телеканали, радіостанції, видавництва та студії звукозапису.' },
                        { text: 'Міжнародні ярмарки Anuga, Photokina та Art Cologne приваблюють відвідувачів з усього світу.' },
                        { text: 'У Кельні знаходиться найбільший внутрішній порт Європи, а вантажний вокзал Ейфельтор – найбільший контейнерний термінал Німеччини.' },
                        { text: 'Підвісна дорога через Рейн у районі Дойц – унікальна пам’ятка та оглядовий майданчик із панорамою міста.' }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Кельн – найстаріше з великих міст Німеччини, його історія налічує понад дві тисячі років. На місці сучасного міста в I столітті н. е. існувало невелике поселення германського племені убієв.' },
                        { text: 'У 50 році н. е. його перетворили на римську колонію Colonia Agrippina на честь імператриці Агриппіни, дружини Клавдія, яка народилася на Рейні. Згодом назва трансформувалася у «Кельн». Навіть сьогодні в центрі міста можна побачити сліди римської епохи – фундаменти будівель, частини стін і античні вулиці.' },
                        { text: 'З римлянами до Кельна прийшло християнство. У 785 році Карл Великий заснував Кельнське архієпископство та передав його главі світську владу. Архієпископи стали одними з наймогутніших феодалів Священної Римської імперії.' },
                        { text: 'У 1164 році до міста привезли мощі Трьох волхвів. Для їхнього зберігання почалося будівництво грандіозного собору, найбільшого північніше Альп. Перший камінь заклали у 1248 році, але завершили будівництво лише у 1880-му. У той же час у центрі міста з’явилися 12 романських церков, які й досі формують вигляд старого Кельна.' },
                        { text: 'Мешканці швидко втомилися від влади архієпископів. У 1288 році вони вигнали їх із міста, і резиденція перемістилася в сусідній Бонн. У околицях Брюля пізніше збудували замки Августусбург та Фалькенлуст – нині об’єкти спадщини ЮНЕСКО.' },
                        { text: 'У 1396 році в Кельні прийняли міську конституцію та створили раду з бурмістром, а в 1475 році місто офіційно отримало статус вільного імперського міста. Середньовічний Кельн пережив розквіт: став одним із найбільших і найбагатших міст Німеччини, важливим учасником Ганзейського союзу та центром ярмаркової торгівлі. У 1388 році тут відкрили другий за віком університет країни.' },
                        { text: 'Епоха свободи завершилася у 1794 році, коли Кельн без бою здався французьким військам. Університет закрили, церковне майно секуляризували. У 1815 році Віденський конгрес передав місто Пруссії. Кельн зберігав своє значення, ставши одним із найбільших міст прусських земель.' },
                        { text: 'У 1822 році через Рейн побудували перший міст з часів римлян, а згодом його замінив постійний залізничний та пішохідний міст. У 1823 році пройшов перший карнавал, який згодом став візитівкою міста.' },
                        { text: 'XIX століття принесло індустріалізацію. У Кельні відкривали фабрики, розвивалося машинобудування, тут також з’явилися важливі відкриття у фізиці та техніці. Місто ставало вузлом залізничного та річкового транспорту. У 1881 році знесли середньовічні мури та на їхньому місці проклали бульварне кільце. До кінця століття завершили будівництво величного Кельнського собору.' },
                        { text: 'Перша світова війна перервала розвиток, але незабаром місто знову ожило. Знову відкрився університет, розпочалася масштабна містобудівна політика, з’явився сучасний ярмарковий комплекс у районі Дойц. У 1920-ті роки Кельн перетворився на центр медіа та культури: тут з’явилися великі радіокомпанії, виставки та заводи, працювали фотографи та художники.' },
                        { text: 'З 1933 по 1945 роки Кельн перебував під владою нацистів і став центром військового округу. Під час Другої світової війни місто було майже повністю зруйноване: понад 80 % старого центру перетворилося на руїни. Лише до 1959 року населення повернулося до довоєнного рівня, а відновлення міста завершилося лише у 1980-х.' },
                        { text: 'У другій половині XX століття Кельн остаточно закріпив свої позиції як культурний та медіа-центр. Тут проводили міжнародні ярмарки мистецтва та фотографії, відкривали галереї, процвітало телебачення та радіо. У місті жили та працювали видатні письменники, музиканти та художники, і Кельн став місцем притягання творчих сил зі всього світу.' }
                    ]
                },
                meta: {
                    title: "Кельн – найбільше місто Північного Рейну-Вестфалії",
                    description: "Кельн: історія, географія, пам’ятки, відомі жителі та цікаві факти про найбільше місто Північного Рейну-Вестфалії.",
                    ogTitle: "Кельн – інформація про місто",
                    ogDescription: "Докладна інформація про Кельн: культура, історія, відомі жителі та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/001.jpg"
                }
            },
            de: {
                name: 'Köln',
                desc: {
                    general: [
                        { text: 'Köln ist die größte Stadt des Bundeslandes Nordrhein-Westfalen und die viertgrößte Stadt Deutschlands.' },
                        { text: 'Köln ist ein wichtiger Wirtschafts-, Kultur- und Verkehrszentrum Deutschlands: Hier befindet sich der größte Binnenhafen Europas sowie ein bedeutender Bahn- und Autobahnknotenpunkt.' }
                    ],
                    population: [
                        { bold: 'Einwohnerzahl:' },
                        { text: ' etwa 1.013.684 (2025)' }
                    ],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' ca. 405 km²' }
                    ],
                    postalCode: [
                        { bold: 'Postleitzahlen:' },
                        { text: ' 50667–51149' }
                    ],
                    phone: [
                        { bold: 'Telefonvorwahl:' },
                        { text: ' +49 0221' }
                    ],
                    officialSite: [
                        { bold: 'Offizielle Website von Köln', link: 'https://www.stadt-koeln.de/' }
                    ]
                },
                admin: {
                    title: 'Köln ist in 9 Stadtbezirke und 86 Stadtteile gegliedert. Die wichtigsten Stadtbezirke der Stadt:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt', text: '– der zentrale Stadtbezirk von Köln. Hier befinden sich der Kölner Dom, die wichtigsten Museen, Einkaufsstraßen und das historische Zentrum der Stadt (enthält die Stadtteile: Altstadt-Nord, Altstadt-Süd, Neustadt-Nord, Neustadt-Süd, Deutz)' },
                        { bold: 'Rodenkirchen', text: '– der südliche Stadtbezirk von Köln mit Wohnvierteln, Grünflächen und Stadtteilen entlang des Rheins (enthält die Stadtteile: Bayenthal, Marienburg, Raderberg, Raderthal, Zollstock, Rondorf, Hahnwald, Rodenkirchen, Weiß, Sürth, Godorf, Immendorf, Meschenich)' },
                        { bold: 'Lindenthal', text: '– ein westlicher Stadtbezirk mit Universitätsvierteln, Parks und gehobener Wohnbebauung (enthält die Stadtteile: Klettenberg, Sülz, Lindenthal, Braunsfeld, Müngersdorf, Junkersdorf, Weiden, Lövenich, Widdersdorf)' },
                        { bold: 'Ehrenfeld', text: '– einer der bekanntesten modernen Stadtbezirke Kölns mit kreativer Atmosphäre, Bars, Galerien und kulturellen Einrichtungen (enthält die Stadtteile: Ehrenfeld, Neuehrenfeld, Bickendorf, Vogelsang, Bocklemünd/Mengenich, Ossendorf)' },
                        { bold: 'Nippes', text: '– ein nördlicher Wohnbezirk mit traditionellen Vierteln, Märkten und lokaler urbaner Atmosphäre (enthält die Stadtteile: Nippes, Mauenheim, Riehl, Niehl, Weidenpesch, Longerich, Bilderstöckchen)' },
                        { bold: 'Chorweiler', text: '– ein nördlicher Stadtbezirk mit großen Wohnsiedlungen, modernen Quartieren und Vorstadtgebieten (enthält die Stadtteile: Merkenich, Fühlingen, Seeberg, Heimersdorf, Lindweiler, Pesch, Esch/Auweiler, Volkhoven/Weiler, Chorweiler, Roggendorf/Thenhoven, Blumenberg)' },
                        { bold: 'Porz', text: '– der größte Stadtbezirk Kölns auf der rechten Rheinseite. Er umfasst Wohngebiete, Naturflächen und das Gelände des Flughafens Köln/Bonn (enthält die Stadtteile: Poll, Westhoven, Ensen, Gremberghoven, Eil, Porz, Urbach, Elsdorf, Grengel, Wahnheide, Wahn, Lind, Libur, Zündorf, Langel)' },
                        { bold: 'Kalk', text: '– ein östlicher Stadtbezirk mit industrieller Vergangenheit, Wohnvierteln und aktiver Stadtentwicklung (enthält die Stadtteile: Humboldt/Gremberg, Kalk, Vingst, Höhenberg, Ostheim, Merheim, Brück, Neubrück, Rath/Heumar)' },
                        { bold: 'Mülheim', text: '– ein großer Stadtbezirk auf der rechten Rheinseite mit historischen Vierteln, modernen Wohngebieten und Industrieflächen (enthält die Stadtteile: Mülheim, Buchforst, Buchheim, Holweide, Dellbrück, Höhenhaus, Dünnwald, Stammheim, Flittard)' },
                    ]
                },
                geography: {
                    title: 'Geographie',
                    items: [
                        { text: 'Die Stadt liegt am Rhein, der sie in linkes und rechtes Ufer teilt.' },
                        { text: 'Das linke Ufer ist das historische Zentrum und Wohnviertel mit alten Gassen, Geschäften, Museen und Cafés, das rechte Ufer ist Industriegebiet und neue Viertel einschließlich Geschäftsbereiche und moderne Architektur.' },
                        { text: 'Die Rheinpromenade ist ein beliebter Ort für Bewohner und Touristen: Hier kann man spazieren, Rad fahren, in Cafés entspannen und die Stadtpanorama genießen.' },
                        { text: 'Südwestliche Stadtteile wie Lindenthal, Bayenthal und Marienburg sind bekannt für ihre gemütliche Wohnatmosphäre und grünen Straßen. Für Spaziergänge am Fluss eignet sich Rodenkirchen ideal.' },
                        { text: 'Östliche Stadtteile, einschließlich Mülheim, Kalk und Deutz, sind mit dem Zentrum durch eine Hängebrücke verbunden, die einen atemberaubenden Blick über die Stadt bietet.' },
                        { text: 'Die Stadt liegt in der Kölner Bucht, umgeben von Höhenzügen: im Osten Sauerland und Bergisches Land, im Südwesten Eifel, im Südosten Rheinisches Schiefergebirge.' }
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Köln',
                    isList: true,
                    items: [
                        { bold: 'Konrad Adenauer', text: ' – erster Bundeskanzler der BRD, von 1917–1933 Oberbürgermeister von Köln.' },
                        { bold: 'Nikolaus August Otto', text: ' – Ingenieur, Erfinder des ersten Verbrennungsmotors (1874), Mitbegründer der Fabrik Kloeckner Humboldt Deutz AG.' },
                        { bold: 'Georg Simon Ohm', text: ' – Physiker, entdeckte das Gesetz des elektrischen Widerstands (1827), lehrte in Köln.' },
                        { bold: 'August Sander', text: ' – Fotograf, Autor der Serie „Menschen des 20. Jahrhunderts“.' },
                        { bold: 'Karlheinz Stockhausen', text: ' – Komponist, einer der Pioniere der elektronischen Musik, arbeitete im WDR-Studio.' },
                        { bold: 'Max Ernst', text: ' – surrealistischer Künstler, geboren in Köln.' },
                        { bold: 'Heinrich Böll', text: ' – Schriftsteller, Nobelpreisträger für Literatur (1972), lebte und arbeitete in Köln.' },
                        { bold: 'Günter Grass', text: ' – Schriftsteller, Nobelpreisträger für Literatur (1999), zeitweise mit Köln verbunden.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    isList: true,
                    items: [
                        { text: 'Der Kölner Dom ist eine der größten gotischen Kathedralen Europas, mit Türmen, die fast aus jedem Stadtteil sichtbar sind.' },
                        { text: 'Der Kölner Karneval ist der größte in Deutschland und einer der buntesten in Europa.' },
                        { text: 'Die Stadt wird als „blaue Hauptstadt“ Deutschlands bezeichnet wegen der Offenheit und Toleranz der Einwohner.' },
                        { text: 'Köln ist ein Zentrum der deutschen Medienindustrie: Hier befinden sich Fernsehsender, Radiostationen, Verlage und Tonstudios.' },
                        { text: 'Internationale Messen wie Anuga, Photokina und Art Cologne ziehen Besucher aus aller Welt an.' },
                        { text: 'In Köln befindet sich der größte Binnenhafen Europas, und der Güterbahnhof Eifeltor ist der größte Containerterminal Deutschlands.' },
                        { text: 'Die Hängebrücke über den Rhein im Stadtteil Deutz ist eine einzigartige Sehenswürdigkeit und Aussichtsplattform mit Panoramablick auf die Stadt.' }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Köln ist die älteste der großen Städte Deutschlands, seine Geschichte reicht über zweitausend Jahre zurück. An der Stelle der heutigen Stadt existierte im 1. Jahrhundert n. Chr. eine kleine Siedlung des germanischen Stammes der Ubier.' },
                        { text: 'Im Jahr 50 n. Chr. wurde sie in die römische Kolonie Colonia Agrippina zu Ehren der Kaiserin Agrippina, der Frau von Claudius, die am Rhein geboren wurde, umgewandelt. Der Name entwickelte sich schließlich zu „Köln“. Auch heute sind im Stadtzentrum Spuren der Römerzeit sichtbar – Fundamente von Gebäuden, Teile von Mauern und antike Straßen.' },
                        { text: 'Mit den Römern kam auch das Christentum nach Köln. 785 gründete Karl der Große das Erzbistum Köln und übertrug die weltliche Macht dem Erzbischof. Die Erzbischöfe wurden zu mächtigen Fürsten des Heiligen Römischen Reiches.' },
                        { text: '1164 wurden die Reliquien der Heiligen Drei Könige nach Köln gebracht. Zu deren Aufbewahrung begann der Bau einer grandiosen Kathedrale, der größten nördlich der Alpen. Der Grundstein wurde 1248 gelegt, der Bau erst 1880 abgeschlossen. Gleichzeitig entstanden im Stadtzentrum 12 romanische Kirchen, die noch heute das Bild der Altstadt prägen.' },
                        { text: 'Die Bürger waren jedoch schnell müde von der Herrschaft der Erzbischöfe. 1288 vertrieben sie diese aus der Stadt, und die Residenz verlegte sich nach Bonn. In der Umgebung von Brühl wurden später die Schlösser Augustusburg und Falkenlust errichtet – heute UNESCO-Weltkulturerbe.' },
                        { text: '1396 erhielt Köln eine Stadtverfassung und gründete einen Rat mit Bürgermeister, 1475 erhielt die Stadt offiziell den Status einer Freien Reichsstadt. Das mittelalterliche Köln erlebte eine Blütezeit: es wurde zu einer der größten und reichsten Städte Deutschlands, wichtigen Mitglied der Hanse und Zentrum des Messehandels. 1388 wurde hier die zweitälteste Universität Deutschlands gegründet.' },
                        { text: 'Die Ära der Freiheit endete 1794, als Köln kampflos an französische Truppen übergeben wurde. Die Universität wurde geschlossen, kirchliches Eigentum säkularisiert. 1815 übergab der Wiener Kongress die Stadt an Preußen. Köln behielt seine Bedeutung und wurde zu einer der größten Städte Preußens.' },
                        { text: '1822 wurde die erste Brücke über den Rhein seit römischer Zeit gebaut, bald durch eine dauerhafte Eisenbahn- und Fußgängerbrücke ersetzt. 1823 fand der erste Karneval statt, der später zum Markenzeichen der Stadt wurde.' },
                        { text: 'Das 19. Jahrhundert brachte Industrialisierung. Fabriken wurden eröffnet, Maschinenbau entwickelte sich, wichtige Entdeckungen in Physik und Technik entstanden. Die Stadt wurde zum Knotenpunkt von Bahn- und Schiffsverkehr. 1881 wurden die mittelalterlichen Mauern abgerissen und an ihrer Stelle ein Boulevardsring angelegt. Ende des Jahrhunderts wurde der prächtige Kölner Dom fertiggestellt.' },
                        { text: 'Der Erste Weltkrieg unterbrach die Entwicklung, doch bald erwachte die Stadt wieder. Die Universität öffnete erneut, eine umfassende Stadtplanung begann, ein moderner Messekomplex entstand im Stadtteil Deutz. In den 1920er Jahren wurde Köln zu einem Zentrum für Medien und Kultur: große Rundfunkanstalten, Ausstellungen und Fabriken entstanden, Fotografen und Künstler arbeiteten hier.' },
                        { text: 'Von 1933 bis 1945 stand Köln unter der Herrschaft der Nazis und wurde ein Zentrum des Wehrkreises. Im Zweiten Weltkrieg wurde die Stadt fast vollständig zerstört: über 80 % der Altstadt wurden zu Trümmern. Erst 1959 erreichte die Bevölkerung wieder das Vorkriegsniveau, und die Wiederaufbauarbeiten wurden erst in den 1980er Jahren abgeschlossen.' },
                        { text: 'In der zweiten Hälfte des 20. Jahrhunderts festigte Köln endgültig seine Position als Kultur- und Medienzentrum. Internationale Kunst- und Fotomessen wurden veranstaltet, Galerien eröffnet, Fernsehen und Radio florierten. In der Stadt lebten und arbeiteten bedeutende Schriftsteller, Musiker und Künstler, und Köln wurde zu einem Anziehungspunkt für kreative Kräfte aus der ganzen Welt.' }
                    ]
                },
                meta: {
                    title: "Köln – größte Stadt Nordrhein-Westfalens",
                    description: "Köln: Geschichte, Geographie, Sehenswürdigkeiten, berühmte Persönlichkeiten und interessante Fakten der größten Stadt Nordrhein-Westfalens.",
                    ogTitle: "Köln – Stadtinformation",
                    ogDescription: "Detaillierte Informationen über Köln: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/koln-city/001.jpg"
                }
            }
        }
    },
    // Dortmund-city
    {
        id: "dortmund",
        path: "dortmund",
        countryPath: "germany", regionPath: "nrw", districtPath: "city",
        gerb: "Germany/nrw/arnsberg/dortmund/gerb.png",
        coord: { lat: 51.5136, lng: 7.4653 },
        translations: {
            ru: {
                name: 'Дортмунд',
                desc: {
                    general: [
                        { text: 'Дортмунд – один из крупнейших городов земли Северный Рейн-Вестфалия и один из крупнейших городов Рурской области (Ruhrgebiet) – крупнейшего промышленного региона Германии.' },
                        { text: ' Город известен как важный промышленный, технологический и логистический центр Германии. Сегодня Дортмунд сочетает индустриальное наследие с развитием науки, IT и современных технологий.' }
                    ],
                    population: [{ bold: 'Население:', text: ' примерно 595 000 человек (2025)' }],
                    area: [{ bold: 'Площадь:', text: ' около 280 км²' }],
                    postalCode: [{ bold: 'Почтовый индекс:', text: ' 44135–44388' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 0231' }],
                    officialSite: [{ bold: 'Официальный сайт Дортмунда', link: 'https://www.dortmund.de/' }]
                },
                admin: {
                    title: 'Дортмунд разделён на 12 административных округов (Stadtbezirke) и множество районов (Stadtteile). Основные округа города:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt-Nord', text: '– северная часть центра Дортмунда с многонациональной атмосферой, старой промышленной застройкой и активной городской жизнью (включает районы: Hafen, Nordmarkt, Borsigplatz)' },
                        { bold: 'Innenstadt-Ost', text: '– восточная часть центра города с жилыми кварталами, парками и культурными объектами (включает районы: Kaiserbrunnen, Gartenstadt, Körne)' },
                        { bold: 'Innenstadt-West', text: '– западный центральный округ с торговыми улицами, университетскими объектами и современными жилыми районами (включает районы: Dorstfelder Brücke, Unionviertel, Kreuzviertel)' },
                        { bold: 'Eving', text: '– северный округ с жилыми районами, зелёными зонами и бывшими промышленными территориями (включает районы: Eving, Brechten, Lindenhorst, Kemminghausen)' },
                        { bold: 'Scharnhorst', text: '– северо-восточный округ с жилыми кварталами и пригородными территориями (включает районы: Scharnhorst, Husen, Kurl, Grevel)' },
                        { bold: 'Brackel', text: '– восточный округ с семейными жилыми районами, спортивной инфраструктурой и хорошим транспортным сообщением (включает районы: Brackel, Wambel, Wickede, Asseln)' },
                        { bold: 'Aplerbeck', text: '– юго-восточный округ с сочетанием городских и более спокойных жилых территорий (включает районы: Aplerbeck, Sölde, Schüren, Berghofen)' },
                        { bold: 'Hörde', text: '– южный округ, известный озером Phoenix-See, современной застройкой и бывшими промышленными зонами (включает районы: Hörde, Höchsten, Benninghofen, Wellinghofen)' },
                        { bold: 'Hombruch', text: '– юго-западный округ с университетскими объектами, зелёными районами и престижной жилой застройкой (включает районы: Hombruch, Barop, Kirchhörde, Löttringhausen)' },
                        { bold: 'Lütgendortmund', text: '– западный округ с жилыми кварталами и пригородной атмосферой (включает районы: Lütgendortmund, Bövinghausen, Marten, Oespel)' },
                        { bold: 'Huckarde', text: '– северо-западный округ с промышленным наследием и жилыми районами (включает районы: Huckarde, Kirchlinde, Deusen, Rahm)' },
                        { bold: 'Mengede', text: '– самый северо-западный округ Дортмунда с зелёными зонами, каналами и пригородными территориями (включает районы: Mengede, Nette, Oestrich, Bodelschwingh)' },
                    ]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Дортмунд расположен на востоке Рурской области – одного из крупнейших индустриальных регионов Европы.' },
                        { text: 'Город расположен между равнинными районами Рурской области на севере и холмистыми ландшафтами региона Зауэрланд на юге.' },
                        { text: 'Через Дортмунд проходит канал Дортмунд-Эмс, соединяющий город с Северным морем и крупнейшими портами Европы.' },
                        { text: 'На юге города находится озеро Феникс (Phoenix-See) – искусственное озеро и современный городской район, построенный на месте бывшего металлургического завода.' },
                        { text: 'Дортмунд известен своими зелёными зонами: здесь много парков, лесов и велосипедных маршрутов, особенно популярны Вестфаленпарк и Ромбергпарк.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Дортмунда',
                    isList: true,
                    items: [
                        { bold: 'Райнхольд Шнайдер', text: ' – немецкий писатель и историк, родился в Дортмунде.' },
                        { bold: 'Нильс-Александер Сайдель', text: ' – немецкий актёр и телеведущий.' },
                        { bold: 'Матс Хуммельс', text: ' – немецкий футболист, чемпион мира 2014 года, выступал за Borussia Dortmund.' },
                        { bold: 'Юрген Клопп', text: ' – известный футбольный тренер, работал главным тренером клуба Borussia Dortmund.' },
                        { bold: 'Ханс-Йоахим Вацке', text: ' – футбольный менеджер, генеральный директор Borussia Dortmund.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { text: 'Дортмунд – один из крупнейших футбольных центров Европы: здесь находится стадион Signal Iduna Park – крупнейший футбольный клубный стадион Германии и один из самых известных стадионов Европы.' },
                        { text: 'Футбольный клуб Borussia Dortmund является одним из самых известных и успешных клубов страны.' },
                        { text: 'В XIX и XX веках город был одним из центров угольной и сталелитейной промышленности Германии.' },
                        { text: 'После закрытия шахт и заводов Дортмунд активно развивает сферу технологий, науки и логистики.' },
                        { text: 'Технический университет Дортмунда (TU Dortmund) считается одним из ведущих технических университетов Германии.' },
                        { text: 'В городе проходит множество фестивалей и культурных мероприятий, включая музыкальные фестивали и крупные рождественские ярмарки.' }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'История Дортмунда насчитывает более тысячи лет. Первые упоминания о поселении относятся к IX веку, когда здесь находился небольшой торговый пункт на важном пути между Рейном и восточной Европой.' },
                        { text: 'В Средние века Дортмунд стал свободным имперским городом и важным торговым центром Ганзейского союза. Благодаря торговле и ремеслу город быстро богател и развивался.' },
                        { text: 'В XIX веке началась индустриализация. В регионе открывались шахты и металлургические заводы, что превратило Дортмунд в один из крупнейших промышленных центров Германии.' },
                        { text: 'В годы Второй мировой войны город подвергся сильным бомбардировкам и был значительно разрушен. После войны началось масштабное восстановление и модернизация.' },
                        { text: 'Во второй половине XX века традиционная промышленность постепенно пришла в упадок, и город начал переход к экономике знаний.' },
                        { text: 'Сегодня Дортмунд является важным научным и технологическим центром Германии, где развиваются IT, биотехнологии, логистика и университетские исследования.' }
                    ]
                },
                meta: {
                    title: "Дортмунд – крупный город Рурской области",
                    description: "Дортмунд — крупный город Рурской области (Ruhrgebiet) в Германии: история, география, знаменитые жители и интересные факты.",
                    ogTitle: "Дортмунд – информация о городе",
                    ogDescription: "Подробная информация о Дортмунде: история, культура, известные жители и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dortmund/dortmund-city/phoenix-see/001.jpg"
                }
            },
            ua: {
                name: 'Дортмунд',
                desc: {
                    general: [
                        { text: 'Дортмунд – одне з найбільших міст федеральної землі Північний Рейн-Вестфалія та одне з найбільших міст Рурської області (Ruhrgebiet) – найбільшого промислового регіону Німеччини.' },
                        { text: 'Місто відоме як важливий промисловий, технологічний і логістичний центр Німеччини. Сьогодні Дортмунд поєднує індустріальну спадщину з розвитком науки, інформаційних технологій та сучасних технологій.' }
                    ],
                    population: [{ bold: 'Населення:', text: ' приблизно 595 000 осіб (2025)' }],
                    area: [{ bold: 'Площа:', text: ' близько 280 км²' }],
                    postalCode: [{ bold: 'Поштовий індекс:', text: ' 44135–44388' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 0231' }],
                    officialSite: [{ bold: 'Офіційний сайт Дортмунда', link: 'https://www.dortmund.de/' }]
                },
                admin: {
                    title: 'Дортмунд поділений на 12 адміністративних округів (Stadtbezirke) та численні райони (Stadtteile). Основні округи міста:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt-Nord', text: '– північна частина центру Дортмунда з багатонаціональною атмосферою, старою промисловою забудовою та активним міським життям (включає райони: Hafen, Nordmarkt, Borsigplatz)' },
                        { bold: 'Innenstadt-Ost', text: '– східна частина центру міста з житловими кварталами, парками та культурними об’єктами (включає райони: Kaiserbrunnen, Gartenstadt, Körne)' },
                        { bold: 'Innenstadt-West', text: '– західний центральний округ із торговими вулицями, університетськими об’єктами та сучасними житловими районами (включає райони: Dorstfelder Brücke, Unionviertel, Kreuzviertel)' },
                        { bold: 'Eving', text: '– північний округ із житловими районами, зеленими зонами та колишніми промисловими територіями (включає райони: Eving, Brechten, Lindenhorst, Kemminghausen)' },
                        { bold: 'Scharnhorst', text: '– північно-східний округ із житловими кварталами та приміськими територіями (включає райони: Scharnhorst, Husen, Kurl, Grevel)' },
                        { bold: 'Brackel', text: '– східний округ із сімейними житловими районами, спортивною інфраструктурою та хорошим транспортним сполученням (включає райони: Brackel, Wambel, Wickede, Asseln)' },
                        { bold: 'Aplerbeck', text: '– південно-східний округ із поєднанням міських та більш спокійних житлових територій (включає райони: Aplerbeck, Sölde, Schüren, Berghofen)' },
                        { bold: 'Hörde', text: '– південний округ, відомий озером Phoenix-See, сучасною забудовою та колишніми промисловими зонами (включає райони: Hörde, Höchsten, Benninghofen, Wellinghofen)' },
                        { bold: 'Hombruch', text: '– південно-західний округ з університетськими об’єктами, зеленими районами та престижною житловою забудовою (включає райони: Hombruch, Barop, Kirchhörde, Löttringhausen)' },
                        { bold: 'Lütgendortmund', text: '– західний округ із житловими кварталами та приміською атмосферою (включає райони: Lütgendortmund, Bövinghausen, Marten, Oespel)' },
                        { bold: 'Huckarde', text: '– північно-західний округ із промисловою спадщиною та житловими районами (включає райони: Huckarde, Kirchlinde, Deusen, Rahm)' },
                        { bold: 'Mengede', text: '– найпівнічно-західніший округ Дортмунда із зеленими зонами, каналами та приміськими територіями (включає райони: Mengede, Nette, Oestrich, Bodelschwingh)' },
                    ]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Дортмунд розташований на сході Рурської області – одного з найбільших індустріальних регіонів Європи.' },
                        { text: 'Місто розташоване між рівнинними районами Рурської області на півночі та горбистими ландшафтами регіону Зауерланд на півдні.' },
                        { text: 'Через Дортмунд проходить канал Дортмунд–Емс, який з’єднує місто з Північним морем і найбільшими портами Європи.' },
                        { text: 'На півдні міста знаходиться озеро Фенікс (Phoenix-See) – штучне озеро та сучасний міський район, збудований на місці колишнього металургійного заводу.' },
                        { text: 'Дортмунд відомий своїми зеленими зонами: тут багато парків, лісів і велосипедних маршрутів, особливо популярні Вестфаленпарк і Ромбергпарк.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Дортмунда',
                    isList: true,
                    items: [
                        { bold: 'Райнхольд Шнайдер', text: ' – німецький письменник і історик, народився у Дортмунді.' },
                        { bold: 'Нільс-Александер Зайдель', text: ' – німецький актор і телеведучий.' },
                        { bold: 'Матс Гуммельс', text: ' – німецький футболіст, чемпіон світу 2014 року, виступав за Borussia Dortmund.' },
                        { bold: 'Юрген Клопп', text: ' – відомий футбольний тренер, працював головним тренером клубу Borussia Dortmund.' },
                        { bold: 'Ханс-Йоахім Вацке', text: ' – футбольний менеджер, генеральний директор Borussia Dortmund.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    isList: true,
                    items: [
                        { text: 'Дортмунд — один із найбільших футбольних центрів Європи: тут знаходиться стадіон Signal Iduna Park — найбільший клубний футбольний стадіон Німеччини та один із найвідоміших стадіонів Європи.' },
                        { text: 'Футбольний клуб Borussia Dortmund є одним із найвідоміших і найуспішніших клубів країни.' },
                        { text: 'У XIX і XX століттях місто було одним із центрів вугільної та сталеливарної промисловості Німеччини.' },
                        { text: 'Після закриття шахт і заводів Дортмунд активно розвиває сферу технологій, науки та логістики.' },
                        { text: 'Технічний університет Дортмунда (TU Dortmund) вважається одним із провідних технічних університетів Німеччини.' },
                        { text: 'У місті проходить багато фестивалів і культурних заходів, включно з музичними фестивалями та великими різдвяними ярмарками.' }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Історія Дортмунда налічує понад тисячу років. Перші згадки про поселення відносяться до IX століття, коли тут існував невеликий торговий пункт на важливому шляху між Рейном і Східною Європою.' },
                        { text: 'У Середні віки Дортмунд став вільним імперським містом і важливим торговим центром Ганзейського союзу. Завдяки торгівлі та ремеслам місто швидко багатіло і розвивалося.' },
                        { text: 'У XIX столітті почалася індустріалізація. У регіоні відкривалися шахти та металургійні заводи, що перетворило Дортмунд на один із найбільших промислових центрів Німеччини.' },
                        { text: 'У роки Другої світової війни місто зазнало сильних бомбардувань і було значною мірою зруйноване. Після війни почалося масштабне відновлення та модернізація.' },
                        { text: 'У другій половині XX століття традиційна промисловість поступово занепала, і місто почало перехід до економіки знань.' },
                        { text: 'Сьогодні Дортмунд є важливим науковим і технологічним центром Німеччини, де розвиваються інформаційні технології, біотехнології, логістика та університетські дослідження.' }
                    ]
                },
                meta: {
                    title: "Дортмунд — велике місто Рурської області",
                    description: "Дортмунд — велике місто Рурської області (Ruhrgebiet) у Німеччині: історія, географія, відомі жителі та цікаві факти.",
                    ogTitle: "Дортмунд — інформація про місто",
                    ogDescription: "Детальна інформація про Дортмунд: історія, культура, відомі жителі та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dortmund/dortmund-city/phoenix-see/001.jpg"
                }
            },
            de: {
                name: 'Dortmund',
                desc: {
                    general: [
                        { text: 'Dortmund ist eine der größten Städte des Bundeslandes Nordrhein-Westfalen und eine der größten Städte des Ruhrgebiets (Ruhrgebiet) – der größten Industrieregion Deutschlands.' },
                        { text: 'Die Stadt ist als bedeutendes Industrie-, Technologie- und Logistikzentrum Deutschlands bekannt. Heute verbindet Dortmund sein industrielles Erbe mit der Entwicklung von Wissenschaft, Informationstechnologie und modernen Technologien.' }
                    ],
                    population: [{ bold: 'Einwohnerzahl:', text: ' etwa 595.000 Einwohner (2025)' }],
                    area: [{ bold: 'Fläche:', text: ' etwa 280 km²' }],
                    postalCode: [{ bold: 'Postleitzahl:', text: ' 44135–44388' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 0231' }],
                    officialSite: [{ bold: 'Offizielle Website von Dortmund', link: 'https://www.dortmund.de/' }]
                },
                admin: {
                    title: 'Dortmund ist in 12 Stadtbezirke und zahlreiche Stadtteile gegliedert. Die wichtigsten Stadtbezirke sind:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt-Nord', text: '– der nördliche Teil des Dortmunder Zentrums mit multikultureller Atmosphäre, alter Industriearchitektur und lebendigem Stadtleben (umfasst die Stadtteile: Hafen, Nordmarkt, Borsigplatz)' },
                        { bold: 'Innenstadt-Ost', text: '– der östliche Teil des Stadtzentrums mit Wohnvierteln, Parks und kulturellen Einrichtungen (umfasst die Stadtteile: Kaiserbrunnen, Gartenstadt, Körne)' },
                        { bold: 'Innenstadt-West', text: '– ein westlicher zentraler Bezirk mit Einkaufsstraßen, Universitätseinrichtungen und modernen Wohnvierteln (umfasst die Stadtteile: Dorstfelder Brücke, Unionviertel, Kreuzviertel)' },
                        { bold: 'Eving', text: '– ein nördlicher Bezirk mit Wohngebieten, Grünflächen und ehemaligen Industriearealen (umfasst die Stadtteile: Eving, Brechten, Lindenhorst, Kemminghausen)' },
                        { bold: 'Scharnhorst', text: '– ein nordöstlicher Bezirk mit Wohnvierteln und Vorstadtgebieten (umfasst die Stadtteile: Scharnhorst, Husen, Kurl, Grevel)' },
                        { bold: 'Brackel', text: '– ein östlicher Bezirk mit familienfreundlichen Wohngebieten, Sportinfrastruktur und guter Verkehrsanbindung (umfasst die Stadtteile: Brackel, Wambel, Wickede, Asseln)' },
                        { bold: 'Aplerbeck', text: '– ein südöstlicher Bezirk mit einer Mischung aus städtischen und ruhigeren Wohngebieten (umfasst die Stadtteile: Aplerbeck, Sölde, Schüren, Berghofen)' },
                        { bold: 'Hörde', text: '– ein südlicher Bezirk, bekannt für den Phoenix-See, moderne Bebauung und ehemalige Industrieflächen (umfasst die Stadtteile: Hörde, Höchsten, Benninghofen, Wellinghofen)' },
                        { bold: 'Hombruch', text: '– ein südwestlicher Bezirk mit Universitätseinrichtungen, grünen Wohngebieten und gehobener Bebauung (umfasst die Stadtteile: Hombruch, Barop, Kirchhörde, Löttringhausen)' },
                        { bold: 'Lütgendortmund', text: '– ein westlicher Bezirk mit Wohnvierteln und vorstädtischer Atmosphäre (umfasst die Stadtteile: Lütgendortmund, Bövinghausen, Marten, Oespel)' },
                        { bold: 'Huckarde', text: '– ein nordwestlicher Bezirk mit industriellem Erbe und Wohngebieten (umfasst die Stadtteile: Huckarde, Kirchlinde, Deusen, Rahm)' },
                        { bold: 'Mengede', text: '– der nordwestlichste Bezirk Dortmunds mit Grünflächen, Kanälen und Vorstadtgebieten (umfasst die Stadtteile: Mengede, Nette, Oestrich, Bodelschwingh)' },
                    ]
                },
                geography: {
                    title: 'Geografie',
                    items: [
                        { text: 'Dortmund liegt im Osten des Ruhrgebiets – einer der größten Industrieregionen Europas.' },
                        { text: 'Die Stadt befindet sich zwischen den flachen Landschaften des Ruhrgebiets im Norden und den hügeligen Landschaften der Region Sauerland im Süden.' },
                        { text: 'Durch Dortmund verläuft der Dortmund-Ems-Kanal, der die Stadt mit der Nordsee und den größten Häfen Europas verbindet.' },
                        { text: 'Im Süden der Stadt befindet sich der Phoenix-See – ein künstlicher See und ein modernes Stadtviertel, das auf dem Gelände eines ehemaligen Stahlwerks errichtet wurde.' },
                        { text: 'Dortmund ist für seine Grünflächen bekannt: Es gibt zahlreiche Parks, Wälder und Radwege, besonders beliebt sind der Westfalenpark und der Rombergpark.' }
                    ]
                },
                notablePeople: {
                    title: 'Bekannte Persönlichkeiten aus Dortmund',
                    isList: true,
                    items: [
                        { bold: 'Reinhold Schneider', text: ' – deutscher Schriftsteller und Historiker, wurde in Dortmund geboren.' },
                        { bold: 'Nils-Alexander Seidel', text: ' – deutscher Schauspieler und Fernsehmoderator.' },
                        { bold: 'Mats Hummels', text: ' – deutscher Fußballspieler, Weltmeister von 2014, spielte für Borussia Dortmund.' },
                        { bold: 'Jürgen Klopp', text: ' – bekannter Fußballtrainer, war Cheftrainer des Vereins Borussia Dortmund.' },
                        { bold: 'Hans-Joachim Watzke', text: ' – Fußballmanager und Geschäftsführer von Borussia Dortmund.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    isList: true,
                    items: [
                        { text: 'Dortmund ist eines der größten Fußballzentren Europas: Hier befindet sich das Stadion Signal Iduna Park – das größte Vereinsfußballstadion Deutschlands und eines der bekanntesten Stadien Europas.' },
                        { text: 'Der Fußballverein Borussia Dortmund gehört zu den bekanntesten und erfolgreichsten Vereinen des Landes.' },
                        { text: 'Im 19. und 20. Jahrhundert war die Stadt eines der Zentren der Kohle- und Stahlindustrie in Deutschland.' },
                        { text: 'Nach der Schließung der Bergwerke und Stahlwerke entwickelte Dortmund aktiv die Bereiche Technologie, Wissenschaft und Logistik.' },
                        { text: 'Die Technische Universität Dortmund (TU Dortmund) gilt als eine der führenden technischen Universitäten Deutschlands.' },
                        { text: 'In der Stadt finden zahlreiche Festivals und kulturelle Veranstaltungen statt, darunter Musikfestivals und große Weihnachtsmärkte.' }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Die Geschichte Dortmunds reicht mehr als tausend Jahre zurück. Die ersten Erwähnungen einer Siedlung stammen aus dem 9. Jahrhundert, als sich hier ein kleiner Handelsplatz an einem wichtigen Handelsweg zwischen dem Rhein und Osteuropa befand.' },
                        { text: 'Im Mittelalter wurde Dortmund eine freie Reichsstadt und ein bedeutendes Handelszentrum des Hansebundes. Dank Handel und Handwerk entwickelte sich die Stadt schnell und wurde wohlhabend.' },
                        { text: 'Im 19. Jahrhundert begann die Industrialisierung. In der Region wurden Bergwerke und Stahlwerke eröffnet, wodurch Dortmund zu einem der größten Industriezentren Deutschlands wurde.' },
                        { text: 'Während des Zweiten Weltkriegs wurde die Stadt stark bombardiert und erheblich zerstört. Nach dem Krieg begann ein umfangreicher Wiederaufbau und eine Modernisierung.' },
                        { text: 'In der zweiten Hälfte des 20. Jahrhunderts geriet die traditionelle Industrie allmählich in den Niedergang, und die Stadt begann den Übergang zu einer wissensbasierten Wirtschaft.' },
                        { text: 'Heute ist Dortmund ein bedeutendes wissenschaftliches und technologisches Zentrum Deutschlands, in dem sich Informationstechnologie, Biotechnologie, Logistik und universitäre Forschung entwickeln.' }
                    ]
                },
                coord: { lat: 51.5136, lng: 7.4653 },
                gerb: "Germany/nrw/arnsberg/dortmund/gerb.png",
                meta: {
                    title: "Dortmund – große Stadt im Ruhrgebiet",
                    description: "Dortmund ist eine große Stadt im Ruhrgebiet (Ruhrgebiet) in Deutschland: Geschichte, Geografie, bekannte Persönlichkeiten und interessante Fakten.",
                    ogTitle: "Dortmund – Informationen über die Stadt",
                    ogDescription: "Detaillierte Informationen über Dortmund: Geschichte, Kultur, bekannte Persönlichkeiten und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/dortmund/dortmund-city/phoenix-see/001.jpg"
                }
            }
        }
    },

    // округ arnsberg 
    // Märkischer Kreis
    {
        id: "luedenscheid",
        path: "luedenscheid",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", subRegionPath: "merkischer",
        gerb: "Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/gerb.png",
        coord: { lat: 51.2198, lng: 7.6273 },
        translations: {
            ru: {
                name: 'Люденшайд',
                subRegionName: "Меркиш",
                desc: {
                    general: [
                        { text: 'Люденшайд (нем. Lüdenscheid) расположен в северо-западной части Зауэрланда в земле Северный Рейн-Вестфалия. Административно город входит в состав региона Арнсберг и подчинён округу Меркиш.' },
                    ],
                    population: [
                        { bold: 'Население', text: ' города составляет 71 212 человек (по состоянию на 31 декабря 2024 года).' }],
                    area: [
                        { bold: 'Площадь:' },
                        { text: ' муниципалитета составляет около 86,7 км². Из площади значительная доля занята парко-лесными территориями и зелёными зонами; далее по объёму следуют сельскохозяйственные угодья, застроенные территории, дороги, водная поверхность и прочие земли.' },
                    ],
                    postalCode: [{ bold: 'Почтовые индексы:', text: ' 58507–58515' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 02351' }],
                    officialSite: [{ bold: 'Официальный сайт Люденшайда', link: 'https://www.luedenscheid.de/' }],
                    education: [
                        { bold: 'Система образования' },
                        { text: ' в городе разнообразна: в пределах муниципалитета расположено множество начальных школ, несколько специальных/коррекционных школ, средние школы (Realschulen), профессиональные училища и три гимназии. <b>Zeppelin-Gymnasium</b> – одно из старейших учебных заведений региона: его происхождение восходит к позднему Средневековью (ок. 1450), тогда как главное нынешнее здание главного корпуса датируется концом XIX века (ок. 1890).' },
                        { text: ' Помимо гимназий, в городе есть профессиональные училища для техников, учебные заведения по уходу за больными, вечерняя гимназия, музыкальные школы и отделения высшего образования в рамках специализированных учреждений (например, филиалы Südwestfalen / Fachhochschule). Также в городе функционирует Немецкий институт прикладной светотехники.' }
                    ],
                    culture: [{ bold: 'Культурные активности', text: ' – в городе проходят фестивали, выставки, световые маршруты и активные мероприятия: прогулки с фонариками, световыми инсталляциями и т.д.' }],
                },
                geography: {
                    title: 'Рельеф и высоты',
                    items: [
                        { text: 'В городской и туристической коммуникации широко используются прозвища «Bergstadt» (букв. «горный город») – историческое описание рельефа и традиции ремёсел. Люденшайд действительно – «горный город»: он расположен на седловине водораздела между реками Ленне и Вольме, с глубокими прилегающими долинами. Рельеф пересечённый, улицы часто идут вверх-вниз. Средняя отметка по городу в районе 380-425 м над уровнем моря.' },
                        { bold: 'Геология и древность пород.', text: 'Грунты в регионе имеют девонское происхождение (поздний палеозой, порядка сотен миллионов лет): на выходах пород находят окаменелости морских организмов (раковины, морские лилии), что согласуется с геологическими сведениями о том, что в разные геологические периоды эта территория была морским дном и позднее поднялась вследствие тектонических/вулканических процессов. Ландшафт современного рельефа сформировался в ходе длительных геологических процессов, в том числе в результате ледниковых/постледниковых изменений. ' },
                    ]
                },
                admin: {
                    title: 'Город разделён на 16 статистических районов, вот самые крупные их них:',
                    isList: true,
                    items: [
                        { bold: 'Lüdenscheid-Zentrum (Innenstadt) ', text: '– центральная часть города, где расположены основные административные здания, торговые улицы и вокзал' },
                        { bold: 'Brügge', text: '– исторически сформированный район на северо-западе города с отдельной локальной структурой.' },
                        { bold: 'Gevelndorf', text: '– жилой район в северной части Люденшайда.' },
                        { bold: 'Buckesfeld', text: '– крупный современный жилой район с плотной застройкой.' },
                        { bold: 'Honsel / Oeneking', text: '– северо-восточная часть города, сочетающая жилые зоны и промышленные территории.' },
                        { bold: 'Wehberg', text: '– восточный район с преимущественно жилой застройкой.' },
                        { bold: 'Rathmecke / Dickenberg', text: '– более периферийные районы с жилыми кварталами и природным окружением.' },
                        { bold: 'Wettringhof', text: '– южная часть города, расположенная ближе к зелёным зонам и природным территориям.' },
                        { bold: 'Eveking', text: '– небольшой район на юго-востоке Люденшайда.' },

                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Люденшайда',
                    isList: true,
                    items: [
                        { bold: 'Марианна Розенберг (Marianne Rosenberg, род. 1955)', text: ' – немецкая певица, автор песен и икона поп- и шлягер-сцены 1970–2000-х годов. Родилась в Люденшайде. Известна хитами „Er gehört zu mir“, „Marleen“ и другими.' },
                        { bold: 'Петер Швайцер (Peter Schweitzer, род. 1942)', text: ' – немецкий промышленник, связанный с развитием светотехнической индустрии в регионе, один из пионеров освещения на основе светодиодов (LED).' },
                        { bold: 'Рольф Фитшнер (Rolf Fitschner, род. 1949)', text: ' – немецкий инженер и изобретатель в области технологий освещения, участвовал в создании образовательных программ PHÄNOMENTA.' },
                        { bold: 'Феликс Шютц (Felix Schütz, род. 1987)', text: ' – немецкий хоккеист, нападающий сборной Германии, участник Олимпийских игр и чемпионатов мира, родился в Люденшайде.' },
                        { bold: 'Карл Йозеф Тир (Karl Josef Thiel, 1918–2001)', text: ' – немецкий скульптор и художник, автор ряда общественных скульптур и мемориалов в регионе Зауэрланд.' },
                        { bold: 'Фридрих Хельвиг (Friedrich Hellwig, 1870–1950)', text: ' – историк и краевед, один из первых исследователей промышленного развития Зауэрланда, жил и работал в Люденшайде.' },
                        { bold: 'Герд Йостен (Gerd Josten, 1939–2006)', text: ' – немецкий архитектор и градостроитель, участвовал в реконструкции исторического центра Люденшайда после Второй мировой войны.' },
                        { bold: 'Аннелизе Эберт (Anneliese Ebert, 1924–2010)', text: ' – писательница и педагог, автор книг о быте и традициях региона Мекленбург–Зауэрланд, жила в Люденшайде более 40 лет.' },
                        { bold: 'Вернер Ковальски (Werner Kowalski, 1901-1943))', text: ' – немецкий коммунист, участник сопротивления нацистскому режиму, публицист. Родился 28 декабря 1901 г. в Люденшайде. Умер 1 июля 1943 г. во Франции. На его доме в Люденшайде установлены «памятные камни» (Stolpersteine).' },
                        { bold: 'Карл Берг (Carl Berg, 1851-1906)', text: ' – один из пионеров алюминиевой промышленности; поставлял алюминиевые части для первых дирижаблей «Цеппелин». Родился 4 февраля 1851 г. в Люденшайде.' },
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { bold: '«Город света»', text: ' – Люденшайд носит прозвище Stadt des Lichts («город света») благодаря развитой светотехнической и осветительной промышленности. Для города характерны световые инсталляции, маршрут «Lichtrouten» и световое оформление зданий.' },
                        { bold: 'Наука, техника и интерактивность', text: ' – один из заметных объектов: музей-парк науки PHÄNOMENTA с около 200 интерактивными станциями и знакомой башней с маятником Фуко.' },
                        { bold: 'Кнопочный город', text: ' – в прошлом город был важным центром по производству металлических кнопок, медалей и других мелких металлических изделий. В музее истории города есть коллекции старинных кнопок.' },
                        { bold: 'Уникальная архитектура центра', text: ' – историческая планировка центра с кольцевыми улицами вокруг старой церкви (Erlöserkirche) до сих пор заметна с воздуха.' },
                        { bold: 'Промышленная трансформация', text: ' – территория Люденшайд с давних времён: сначала – металлургия и производство осмунда (особого вида железа) для проволоки, затем – кнопки, затем – светотехника, пластмассы и современные металлоизделия.' },
                        { bold: 'Исторические памятники-технологии', text: ' – например, Bremecker Hammer – старинный молотильный и кузнечный завод-музей, где до сих пор проводят демонстрации работы водяного колеса, кузницы и др. техник XVIII-XIX веков.' },
                        { bold: 'Много лесов и природы рядом', text: ' – хотя это промышленный и технологически развитый город, он окружён лесами, горами Зауэрланда, и предлагает прогулки, треки, природные зоны для отдыха.' },
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Территория была заселена с мезолита; археологические находки показывают наличие множества стоянок (например, поселение Брокхаузен с тысячами кремниевых орудий). В различных местах обнаружены следы неолитических поселений; для бронзового периода находки значимо редки.' },
                        { text: 'Эпоха раннего железа: к периоду около 800-1000 до н. э. на территории имелись кузницы и металлургические занятия; постоянное оседлое население очевидно с I тысячелетия до н. э' },
                        { text: 'Люденшайд упоминается как саксонское поселение уже в IX веке, расположенное на дороге от Кёльна к районам нынешних Випперфюрта, Гальфера, Вердоля и Арнсберга; в этот период возникает первая церковь. Впервые в письменных источниках город отмечен в 1067 году.' },
                        { text: 'В XI-XIII веках здесь строились укрепления; в 1114-1115 гг. упоминается крепость, связанная с императором Генрихом V и дальнейшими конфликтами с местными графами (Арнсберг и архиепископы Кёльна). В 1268 году Люденшайд отмечен как город, далее в 1425 г. получает торговые/рыночные привилегии, а в 1533 – право проводить ярмарки.' },
                        { text: 'В средние века на территории располагалось так называемое судилище Феме (Veme) – с региональным значением.' },
                        { text: 'В XVII-XVIII вв. город переживал пожары (1656, 1723 и др.), оккупации и изменения власти (семилетняя война, Наполеоновская эпоха). После Венского конгресса город окончательно оказался в прусской административной системе.' },
                        { text: 'Индустриализация XIX века привела к росту населения и развитию промышленности: к концу XIX – началу XX века город расширяется; в 1898 году на фабрике Карла Берга производились сборочные работы для дирижаблей «Цеппелин» – заметный эпизод для промышленной истории города XIX в.' },
                        { text: 'В XX веке Люденшайд был вовлечён в события обеих мировых войн, пережил расширение в послевоенный период, миграции беженцев после 1945 г. и период экономического подъёма послевоенной ФРГ. ' },
                        { text: 'С присоединением прилегающих населённых пунктов (например, в 1969 г.) численность населения заметно увеличилась. В 1970-х гг. город был площадкой Международной выставки изделий из пластмасс IKA (1971-1973), что усилило промышленное и культурное значение региона.' },
                        { text: 'В 1975 г. Люденшайд стал центром вновь образованного Märkischer Kreis (результат административных реформ). В период этого экономического процветания было построено большое количество зданий имеющих общественное и культурное значение: дом культуры, новый городской музей, библиотека. В центре города построен большой бассейн с искусственными волнами.' },
                    ]
                },
                meta: {
                    title: "Люденшайд – город света и технологий в сердце Зауэрланда",
                    description: "Люденшайд: история, география, знаменитые жители и интересные факты о «городе света» в земле Северный Рейн-Вестфалия.",
                    ogTitle: "Люденшайд – информация о городе",
                    ogDescription: "Подробная информация о Люденшайде: культура, история, выдающиеся личности и удивительные факты о городе света и инноваций.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/altstadt_luedenscheid/004.jpg"
                }
            },
            ua: {
                name: 'Люденшайд',
                subRegionName: "Меркіш",
                desc: {
                    general: [
                        { text: 'Люденшайд (нім. Lüdenscheid) розташований у північно-західній частині Заурланду в землі Північний Рейн-Вестфалія. Адміністративно місто входить до регіону Арнсберг і підпорядковується округу Меркіш.' },
                    ],
                    population: [{ bold: 'Населення:', text: ' міста становить 71 212 осіб (станом на 31 грудня 2024 року).' }],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' муніципалітету становить близько 86,7 км². Значна частина території зайнята парками, лісами та зеленими зонами; далі за обсягом ідуть сільськогосподарські угіддя, забудовані території, дороги, водна поверхня та інші землі.' },
                    ],
                    postalCode: [{ bold: 'Поштові індекси:', text: ' 58507–58515' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 02351' }],
                    officialSite: [{ bold: 'Офіційний сайт Люденшайда', link: 'https://www.luedenscheid.de/' }],
                    education: [
                        { bold: 'Освітня система' },
                        { text: ' у місті різноманітна: у межах муніципалітету розташовано багато початкових шкіл, кілька спеціальних/корекційних навчальних закладів, середні школи (Realschulen), професійні училища та три гімназії. <b>Zeppelin-Gymnasium</b> – один із найстаріших навчальних закладів регіону: його походження сягає пізнього Середньовіччя (близько 1450 року), тоді як головний корпус сучасної будівлі зведено наприкінці XIX століття (близько 1890).' },
                        { text: ' Крім гімназій, у місті діють професійні училища для техніків, навчальні заклади з догляду за хворими, вечірня гімназія, музичні школи та відділення вищої освіти в межах спеціалізованих установ (наприклад, філії Südwestfalen / Fachhochschule). Також у Люденшайді працює Німецький інститут прикладної світлотехніки.' }
                    ],
                    culture: [{ bold: 'Культурне життя', text: ' – у місті проходять фестивалі, виставки, світлові маршрути та активні події: прогулянки з ліхтариками, світловими інсталяціями тощо.' }],
                },
                admin: {
                    title: 'Місто поділяється на 16 статистичних районів, ось найбільші з них:',
                    isList: true,
                    items: [
                        { bold: 'Lüdenscheid-Zentrum (Innenstadt)', text: '– центральна частина міста, де розташовані основні адміністративні будівлі, торгові вулиці та залізничний вокзал.' },
                        { bold: 'Brügge', text: '– історично сформований район на північному заході міста з окремою локальною структурою.' },
                        { bold: 'Gevelndorf', text: '– житловий район у північній частині Люденшайда.' },
                        { bold: 'Buckesfeld', text: '– великий сучасний житловий район із щільною забудовою.' },
                        { bold: 'Honsel / Oeneking', text: '– північно-східна частина міста, що поєднує житлові зони та промислові території.' },
                        { bold: 'Wehberg', text: '– східний район із переважно житловою забудовою.' },
                        { bold: 'Rathmecke / Dickenberg', text: '– більш периферійні райони з житловими кварталами та природним оточенням.' },
                        { bold: 'Wettringhof', text: '– південна частина міста, розташована ближче до зелених зон і природних територій.' },
                        { bold: 'Eveking', text: '– невеликий район на південному сході Люденшайда.' },
                    ]
                },
                geography: {
                    title: 'Рельєф і висоти',
                    items: [
                        { text: 'У міській та туристичній комунікації широко використовується прізвисько «Bergstadt» (буквально – «гірське місто») – історична характеристика рельєфу та ремісничих традицій. Люденшайд дійсно є «гірським містом»: він розташований на вододілі між річками Ленне та Вольме, з глибокими прилеглими долинами. Рельєф пересічений, вулиці часто мають ухили вгору-вниз. Середня висота в межах міста становить приблизно 380–425 м над рівнем моря.' },
                        { bold: 'Геологія та давність порід.', text: 'Ґрунти регіону мають девонське походження (пізній палеозой, приблизно сотні мільйонів років): у відкритих породах знаходять скам’янілості морських організмів (черепашки, морські лілії), що узгоджується з геологічними даними про те, що в різні геологічні періоди ця територія була морським дном і згодом піднялася внаслідок тектонічних та вулканічних процесів. Сучасний ландшафт сформувався внаслідок тривалих геологічних процесів, зокрема льодовикових і післяльодовикових змін.' },
                    ]
                },
                notablePeople: {
                    title: 'Відомі особистості Люденшайда',
                    isList: true,
                    items: [
                        { bold: 'Маріанна Розенберг (Marianne Rosenberg, нар. 1955)', text: ' – німецька співачка, авторка пісень і ікона поп- та шлягер-сцени 1970–2000-х років. Народилася в Люденшайді. Відома хітами „Er gehört zu mir“, „Marleen“ та іншими.' },
                        { bold: 'Петер Швайцер (Peter Schweitzer, нар. 1942)', text: ' – німецький промисловець, пов’язаний із розвитком світлотехнічної індустрії регіону, один із піонерів освітлення на основі світлодіодів (LED).' },
                        { bold: 'Рольф Фітшнер (Rolf Fitschner, нар. 1949)', text: ' – німецький інженер та винахідник у сфері технологій освітлення, брав участь у створенні освітніх програм PHÄNOMENTA.' },
                        { bold: 'Фелікс Шютц (Felix Schütz, нар. 1987)', text: ' – німецький хокеїст, нападник збірної Німеччини, учасник Олімпійських ігор і чемпіонатів світу, народився в Люденшайді.' },
                        { bold: 'Карл Йозеф Тір (Karl Josef Thiel, 1918–2001)', text: ' – німецький скульптор і художник, автор низки громадських скульптур і меморіалів у регіоні Заурланд.' },
                        { bold: 'Фрідріх Гельвіг (Friedrich Hellwig, 1870–1950)', text: ' – історик і краєзнавець, один із перших дослідників промислового розвитку Заурланду, жив і працював у Люденшайді.' },
                        { bold: 'Герд Йостен (Gerd Josten, 1939–2006)', text: ' – німецький архітектор і містобудівник, брав участь у реконструкції історичного центру Люденшайда після Другої світової війни.' },
                        { bold: 'Аннелізе Еберт (Anneliese Ebert, 1924–2010)', text: ' – письменниця та педагог, авторка книжок про побут і традиції регіону Мекленбург–Заурланд, прожила в Люденшайді понад 40 років.' },
                        { bold: 'Вернер Ковальські (Werner Kowalski, 1901–1943)', text: ' – німецький комуніст, учасник опору нацистському режиму, публіцист. Народився 28 грудня 1901 року в Люденшайді, помер 1 липня 1943 року у Франції. На його будинку в Люденшайді встановлені «каміння спотикання» (Stolpersteine).' },
                        { bold: 'Карл Берг (Carl Berg, 1851–1906)', text: ' – один із піонерів алюмінієвої промисловості; постачав алюмінієві частини для перших дирижаблів «Цепелін». Народився 4 лютого 1851 року в Люденшайді.' },
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    isList: true,
                    items: [
                        { bold: '«Місто світла»', text: ' – Люденшайд має прізвисько Stadt des Lichts («місто світла») завдяки розвиненій світлотехнічній та освітлювальній промисловості. Для міста характерні світлові інсталяції, маршрут «Lichtrouten» та художнє підсвічування будівель.' },
                        { bold: 'Наука, техніка та інтерактивність', text: ' – один із найвідоміших об’єктів: музей-парк науки PHÄNOMENTA з близько 200 інтерактивними станціями та відомою вежею з маятником Фуко.' },
                        { bold: '«Місто ґудзиків»', text: ' – у минулому Люденшайд був важливим центром із виробництва металевих ґудзиків, медалей та інших дрібних металевих виробів. У міському музеї історії зберігається колекція старовинних ґудзиків.' },
                        { bold: 'Унікальна архітектура центру', text: ' – історичне планування центру з кільцевими вулицями навколо старої церкви (Erlöserkirche) досі помітне з повітря.' },
                        { bold: 'Промислова трансформація', text: ' – територія Люденшайда здавна розвивалася: спочатку – металургія та виробництво осмунда (особливого виду заліза) для дроту, потім – ґудзики, далі – світлотехніка, пластмаси та сучасні металеві вироби.' },
                        { bold: 'Історичні технологічні пам’ятки', text: ' – наприклад, Bremecker Hammer – старовинний молотильний і ковальський завод-музей, де досі проводять демонстрації роботи водяного колеса, кузні та інших технік XVIII–XIX століть.' },
                        { bold: 'Багато лісів і природи поруч', text: ' – попри промисловий і технологічно розвинений характер, місто оточене лісами, горами Заурланду та пропонує маршрути для прогулянок і відпочинку на природі.' },
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Територія була заселена ще з мезоліту; археологічні знахідки свідчать про численні стоянки (наприклад, поселення Брокгаузен з тисячами крем’яних знарядь). У різних місцях знайдено сліди неолітичних поселень; для бронзової доби знахідки зустрічаються рідше.' },
                        { text: 'Епоха раннього заліза: приблизно у 800–1000 рр. до н. е. на території існували кузні та металургійні майстерні; постійне осіле населення з’являється з I тисячоліття до н. е.' },
                        { text: 'Люденшайд згадується як саксонське поселення вже у IX столітті, розташоване на дорозі від Кельна до районів сучасних Віпперфюрта, Гальфера, Вердоля та Арнсберга; у цей період з’являється перша церква. Вперше у письмових джерелах місто згадується у 1067 році.' },
                        { text: 'У XI–XIII століттях тут будувалися укріплення; у 1114–1115 рр. згадується фортеця, пов’язана з імператором Генріхом V та конфліктами з місцевими графами (Арнсберг і архієпископи Кельна). У 1268 році Люденшайд позначений як місто, у 1425 р. отримує торгові/ярмаркові привілеї, а у 1533 – право проводити ярмарки.' },
                        { text: 'У середні віки на території міста діяло так зване судилище Феме (Veme) – з регіональним значенням.' },
                        { text: 'У XVII–XVIII ст. місто пережило пожежі (1656, 1723 та ін.), окупації та зміну влади (Семирічна війна, епоха Наполеона). Після Віденського конгресу місто остаточно ввійшло до складу прусської адміністративної системи.' },
                        { text: 'Індустріалізація XIX століття призвела до зростання населення та розвитку промисловості: наприкінці XIX – на початку XX століття місто активно розширюється; у 1898 році на фабриці Карла Берга проводилися збірні роботи для дирижаблів «Цепелін» – важливий епізод промислової історії міста XIX ст.' },
                        { text: 'У XX столітті Люденшайд був залучений у події обох світових воєн, зазнав розширення в післявоєнний період, хвилі біженців після 1945 р. і періоду економічного підйому ФРН.' },
                        { text: 'З приєднанням навколишніх населених пунктів (наприклад, у 1969 р.) чисельність населення значно зросла. У 1970-х рр. місто стало майданчиком Міжнародної виставки виробів із пластику IKA (1971–1973), що посилило промислове й культурне значення регіону.' },
                        { text: 'У 1975 р. Люденшайд став центром новоутвореного Märkischer Kreis (у результаті адміністративних реформ). У цей період економічного процвітання було споруджено багато будівель суспільного та культурного призначення: будинок культури, новий міський музей, бібліотеку. У центрі міста побудовано великий басейн із штучними хвилями.' },
                    ]
                },
                meta: {
                    title: "Люденшайд – місто світла і технологій у серці Заурланду",
                    description: "Люденшайд: історія, географія, відомі мешканці та цікаві факти про «місто світла» у землі Північний Рейн-Вестфалія.",
                    ogTitle: "Люденшайд – інформація про місто",
                    ogDescription: "Докладна інформація про Люденшайд: культура, історія, визначні особистості та вражаючі факти про місто світла та інновацій.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/altstadt_luedenscheid/004.jpg"
                }
            },
            de: {
                name: 'Lüdenscheid',
                subRegionName: "Märkischer",
                desc: {
                    general: [
                        { text: 'Lüdenscheid liegt im Nordwesten des Sauerlandes im Bundesland Nordrhein-Westfalen. Administrativ gehört die Stadt zur Region Arnsberg und untersteht dem Märkischen Kreis.' },
                    ],
                    population: [{ bold: 'Einwohnerzahl:', text: ' Die Stadt zählt 71.212 Einwohner (Stand: 31. Dezember 2024).' }],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' Die Fläche der Kommune beträgt rund 86,7 km². Ein großer Teil davon ist von Park- und Waldflächen sowie Grünzonen bedeckt; danach folgen landwirtschaftliche Flächen, bebaute Gebiete, Straßen, Gewässer und sonstige Flächen.' },
                    ],
                    postalCode: [{ bold: 'Postleitzahlen:', text: ' 58507–58515' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 2351' }],
                    officialSite: [{ bold: 'Offizielle Website der Stadt Lüdenscheid', link: 'https://www.luedenscheid.de/' }],
                    education: [
                        { bold: 'Bildungssystem' },
                        { text: ' in der Stadt ist vielfältig: Innerhalb der Kommune gibt es zahlreiche Grundschulen, mehrere Förder- und Sonderschulen, Realschulen, Berufsschulen sowie drei Gymnasien. <b>Zeppelin-Gymnasium</b> ist eines der ältesten Bildungseinrichtungen der Region: Seine Ursprünge reichen bis ins späte Mittelalter (ca. 1450) zurück, während das heutige Hauptgebäude aus dem späten 19. Jahrhundert (ca. 1890) stammt.' },
                        { text: ' Neben den Gymnasien gibt es in der Stadt Berufsfachschulen für Techniker, Pflegeschulen, ein Abendgymnasium, Musikschulen sowie Zweigstellen von Hochschulen (z. B. Fachhochschule Südwestfalen). Außerdem befindet sich in Lüdenscheid das Deutsche Institut für angewandte Lichttechnik.' }
                    ],
                    culture: [{ bold: 'Kulturelles Leben', text: ' – In der Stadt finden zahlreiche Festivals, Ausstellungen, Licht-Routen und andere Veranstaltungen statt: Laternenwanderungen, Lichtinstallationen und vieles mehr.' }],
                },
                admin: {
                    title: 'Die Stadt ist in 16 statistische Stadtteile gegliedert. Hier sind die größten davon:',
                    isList: true,
                    items: [
                        { bold: 'Lüdenscheid-Zentrum (Innenstadt)', text: '– der zentrale Stadtbereich mit den wichtigsten Verwaltungsgebäuden, Einkaufsstraßen und dem Bahnhof.' },
                        { bold: 'Brügge', text: '– ein historisch gewachsener Stadtteil im Nordwesten der Stadt mit eigener lokaler Struktur.' },
                        { bold: 'Gevelndorf', text: '– ein Wohngebiet im nördlichen Teil von Lüdenscheid.' },
                        { bold: 'Buckesfeld', text: '– ein großes modernes Wohnviertel mit dichter Bebauung.' },
                        { bold: 'Honsel / Oeneking', text: '– der nordöstliche Teil der Stadt mit Wohngebieten und Industrieflächen.' },
                        { bold: 'Wehberg', text: '– ein östlicher Stadtteil mit überwiegend Wohnbebauung.' },
                        { bold: 'Rathmecke / Dickenberg', text: '– eher periphere Stadtteile mit Wohnquartieren und naturnaher Umgebung.' },
                        { bold: 'Wettringhof', text: '– der südliche Teil der Stadt in der Nähe von Grünflächen und Naturgebieten.' },
                        { bold: 'Eveking', text: '– ein kleiner Stadtteil im Südosten von Lüdenscheid.' },
                    ]
                },
                geography: {
                    title: 'Relief und Höhenlage',
                    items: [
                        { text: 'In der städtischen und touristischen Kommunikation wird der Beiname „Bergstadt“ häufig verwendet – eine historische Bezeichnung für die hügelige Landschaft und die handwerkliche Tradition. Lüdenscheid ist tatsächlich eine „Bergstadt“: Sie liegt auf einer Wasserscheide zwischen den Flüssen Lenne und Volme mit tief eingeschnittenen Tälern. Das Gelände ist stark gegliedert, Straßen verlaufen häufig bergauf und bergab. Die durchschnittliche Höhe der Stadt liegt bei etwa 380–425 m über dem Meeresspiegel.' },
                        { bold: 'Geologie und Alter der Gesteine.', text: ' Die Böden der Region stammen aus dem Devon (spätes Paläozoikum, vor mehreren hundert Millionen Jahren): In den Gesteinsschichten findet man Fossilien von Meeresorganismen (Muscheln, Seelilien), was mit geologischen Erkenntnissen übereinstimmt, dass dieses Gebiet in früheren Erdzeitaltern Meeresboden war und sich später durch tektonische bzw. vulkanische Prozesse hob. Die heutige Landschaft entstand im Verlauf langwieriger geologischer Prozesse, einschließlich glazialer und postglazialer Veränderungen.' },
                    ]
                },
                notablePeople: {
                    title: 'Bekannte Persönlichkeiten aus Lüdenscheid',
                    isList: true,
                    items: [
                        { bold: 'Marianne Rosenberg (geb. 1955)', text: ' – Deutsche Sängerin, Songwriterin und Ikone der Pop- und Schlagerszene der 1970er–2000er Jahre. Geboren in Lüdenscheid. Bekannt durch Hits wie „Er gehört zu mir“, „Marleen“ u. a.' },
                        { bold: 'Peter Schweitzer (geb. 1942)', text: ' – Deutscher Industrieller, der mit der Entwicklung der Lichttechnikindustrie in der Region verbunden ist, einer der Pioniere der LED-Beleuchtung.' },
                        { bold: 'Rolf Fitschner (geb. 1949)', text: ' – Deutscher Ingenieur und Erfinder auf dem Gebiet der Lichttechnologien, Mitbegründer der Bildungsinitiativen von PHÄNOMENTA.' },
                        { bold: 'Felix Schütz (geb. 1987)', text: ' – Deutscher Eishockeyspieler, Stürmer der deutschen Nationalmannschaft, Teilnehmer an Olympischen Spielen und Weltmeisterschaften, geboren in Lüdenscheid.' },
                        { bold: 'Karl Josef Thiel (1918–2001)', text: ' – Deutscher Bildhauer und Künstler, Schöpfer zahlreicher öffentlicher Skulpturen und Denkmäler in der Region Sauerland.' },
                        { bold: 'Friedrich Hellwig (1870–1950)', text: ' – Historiker und Heimatforscher, einer der ersten, die die industrielle Entwicklung des Sauerlandes erforschten; lebte und arbeitete in Lüdenscheid.' },
                        { bold: 'Gerd Josten (1939–2006)', text: ' – Deutscher Architekt und Stadtplaner, beteiligte sich am Wiederaufbau des historischen Stadtkerns von Lüdenscheid nach dem Zweiten Weltkrieg.' },
                        { bold: 'Anneliese Ebert (1924–2010)', text: ' – Schriftstellerin und Pädagogin, Autorin von Büchern über Alltagsleben und Traditionen der Region Mecklenburg–Sauerland, lebte über 40 Jahre in Lüdenscheid.' },
                        { bold: 'Werner Kowalski (1901–1943)', text: ' – Deutscher Kommunist, Widerstandskämpfer gegen das NS-Regime und Publizist. Geboren am 28. Dezember 1901 in Lüdenscheid, gestorben am 1. Juli 1943 in Frankreich. An seinem Wohnhaus in Lüdenscheid sind Stolpersteine angebracht.' },
                        { bold: 'Carl Berg (1851–1906)', text: ' – Einer der Pioniere der Aluminiumindustrie; lieferte Aluminiumteile für die ersten „Zeppelin“-Luftschiffe. Geboren am 4. Februar 1851 in Lüdenscheid.' },
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    isList: true,
                    items: [
                        { bold: '„Stadt des Lichts“', text: ' – Lüdenscheid trägt den Beinamen „Stadt des Lichts“ aufgrund seiner stark entwickelten Licht- und Beleuchtungsindustrie. Charakteristisch für die Stadt sind Lichtinstallationen, die „Lichtrouten“ und künstlerische Beleuchtung von Gebäuden.' },
                        { bold: 'Wissenschaft, Technik und Interaktivität', text: ' – Eine der bekanntesten Sehenswürdigkeiten ist der Wissenschafts- und Erlebnispark PHÄNOMENTA mit rund 200 interaktiven Stationen und einem markanten Turm mit Foucaults Pendel.' },
                        { bold: '„Knopfstädten“', text: ' – Früher war Lüdenscheid ein wichtiges Zentrum der Herstellung von Metallknöpfen, Medaillen und anderen kleinen Metallwaren. Im Stadtmuseum sind Sammlungen historischer Knöpfe ausgestellt.' },
                        { bold: 'Einzigartige Stadtarchitektur', text: ' – Der historische Stadtgrundriss mit ringförmigen Straßen um die alte Erlöserkirche (Erlöserkirche) ist aus der Luft noch gut erkennbar.' },
                        { bold: 'Industrielle Transformation', text: ' – Das Gebiet von Lüdenscheid war seit jeher industriell geprägt: zunächst durch Metallurgie und Osmund-Produktion (eine spezielle Eisenart) für Draht, später durch Knopfherstellung, danach Lichttechnik, Kunststoffe und moderne Metallverarbeitung.' },
                        { bold: 'Technikdenkmäler', text: ' – Zum Beispiel der Bremecker Hammer – ein historisches Hammerwerk und Schmiedemuseum, in dem bis heute Vorführungen mit Wasserrad und Schmiedetechniken aus dem 18.–19. Jahrhundert stattfinden.' },
                        { bold: 'Viel Wald und Natur', text: ' – Trotz seiner industriellen und technologischen Prägung ist die Stadt von Wäldern und den Bergen des Sauerlandes umgeben und bietet zahlreiche Wanderwege und Erholungsgebiete.' },
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Das Gebiet war bereits seit dem Mesolithikum besiedelt; archäologische Funde belegen zahlreiche Siedlungsplätze (z. B. die Fundstätte Brockhausen mit Tausenden Feuersteinwerkzeugen). In verschiedenen Teilen wurden Spuren neolithischer Siedlungen gefunden; Funde aus der Bronzezeit sind seltener.' },
                        { text: 'Frühe Eisenzeit: Um 800–1000 v. Chr. gab es in der Region Schmieden und Metallverarbeitung; eine ständige Besiedlung ist ab dem 1. Jahrtausend v. Chr. nachweisbar.' },
                        { text: 'Lüdenscheid wird bereits im 9. Jahrhundert als sächsische Siedlung erwähnt, gelegen an der Straße von Köln zu den heutigen Orten Wipperfürth, Halver, Werdohl und Arnsberg; in dieser Zeit entstand auch die erste Kirche. Erstmals urkundlich erwähnt wurde Lüdenscheid im Jahr 1067.' },
                        { text: 'Im 11.–13. Jahrhundert wurden hier Befestigungsanlagen errichtet; 1114–1115 wird eine Burg erwähnt, die mit Kaiser Heinrich V. und Konflikten mit den Grafen von Arnsberg und den Kölner Erzbischöfen in Verbindung steht. 1268 wird Lüdenscheid als Stadt erwähnt, 1425 erhielt es Marktprivilegien und 1533 das Recht, Jahrmärkte abzuhalten.' },
                        { text: 'Im Mittelalter befand sich auf dem Stadtgebiet ein sogenanntes Femegericht (Veme) mit regionaler Bedeutung.' },
                        { text: 'Im 17.–18. Jahrhundert erlebte die Stadt mehrere Brände (1656, 1723 u. a.), Besetzungen und Machtwechsel (Siebenjähriger Krieg, napoleonische Zeit). Nach dem Wiener Kongress wurde Lüdenscheid endgültig Teil des preußischen Verwaltungssystems.' },
                        { text: 'Die Industrialisierung im 19. Jahrhundert führte zu einem starken Bevölkerungswachstum und industriellen Aufschwung: Ende des 19. und Anfang des 20. Jahrhunderts expandierte die Stadt. 1898 wurden in der Fabrik von Carl Berg Aluminiumteile für die „Zeppelin“-Luftschiffe gefertigt – ein bedeutendes Kapitel der Stadtgeschichte.' },
                        { text: 'Im 20. Jahrhundert war Lüdenscheid in die Ereignisse beider Weltkriege involviert, erlebte nach 1945 Zuwanderung von Flüchtlingen und den wirtschaftlichen Aufschwung der jungen Bundesrepublik Deutschland.' },
                        { text: 'Mit der Eingemeindung umliegender Orte (z. B. 1969) stieg die Bevölkerungszahl deutlich an. In den 1970er Jahren war die Stadt Austragungsort der Internationalen Kunststoffausstellung IKA (1971–1973), was die industrielle und kulturelle Bedeutung der Region stärkte.' },
                        { text: '1975 wurde Lüdenscheid Sitz des neu gebildeten Märkischen Kreises (Ergebnis der Verwaltungsreformen). In dieser Phase des wirtschaftlichen Wohlstands entstanden zahlreiche öffentliche und kulturelle Gebäude: Kulturhaus, neues Stadtmuseum, Bibliothek. Im Stadtzentrum wurde ein großes Wellenbad gebaut.' },
                    ]
                },
                meta: {
                    title: "Lüdenscheid – Stadt des Lichts und der Technologie im Herzen des Sauerlandes",
                    description: "Lüdenscheid: Geschichte, Geografie, bekannte Persönlichkeiten und interessante Fakten über die „Stadt des Lichts“ in Nordrhein-Westfalen.",
                    ogTitle: "Lüdenscheid – Informationen über die Stadt",
                    ogDescription: "Detaillierte Informationen über Lüdenscheid: Kultur, Geschichte, bedeutende Persönlichkeiten und spannende Fakten über die Stadt des Lichts und der Innovation.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/luedenscheid/altstadt_luedenscheid/004.jpg"
                }
            }
        }
    },
    {
        id: "altena",
        path: "altena",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", subRegionPath: "merkischer",
        gerb: "Germany/nrw/arnsberg/Märkischer-Kreis/altena/gerb.jpg",
        coord: { lat: 51.311, lng: 7.689 },
        translations: {
            ru: {
                name: 'Альтена',
                subRegionName: "Меркиш",
                desc: {
                    general: [
                        { text: 'Альтена (нем. Altena) расположен в северной части Зауэрланда в земле Северный Рейн-Вестфалия. Административно город входит в состав региона Арнсберг и подчинён округу Меркиш.' },
                    ],
                    population: [{ bold: 'Население', text: ' города составляет около 18 500 человек (по состоянию на 31 декабря 2024 года).' }],
                    area: [
                        { bold: 'Площадь:', text: ' муниципалитета составляет около 81,6 км². Большая часть территории занята лесами, зелёными зонами и холмистыми ландшафтами; далее идут сельскохозяйственные угодья, жилые и промышленные районы, дороги и водные объекты.' },
                    ],
                    postalCode: [{ bold: 'Почтовые индексы:', text: ' 58762' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 02352' }],
                    officialSite: [{ bold: 'Официальный сайт Альтены', link: 'https://www.altena-notbetrieb.de/' }],
                    education: [{ bold: 'Система образования', text: ' в городе включает несколько начальных школ, средние школы (Haupt- и Realschulen), гимназию (Städtisches Gymnasium Altena) и профессиональные учебные заведения. Также в Альтене работают музыкальные и художественные школы.' }],
                    culture: [{ bold: 'Культурные активности', text: ' – город знаменит крепостью Альтена (Burg Altena), музеями, фестивалями, культурными событиями и прогулочными маршрутами вдоль реки Лене.' }],
                },
                admin: {
                    title: 'Альтена разделена на 7 районов (Stadtteile):',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt', text: '– центральный район Альтены с историческим старым городом, замком Альтена и основными городскими учреждениями' },
                        { bold: 'Dahle', text: '– южный район с жилыми кварталами, лесными территориями и традиционной застройкой' },
                        { bold: 'Evingsen', text: '– более сельский район с деревенской атмосферой и лесными ландшафтами' },
                        { bold: 'Rahmede', text: '– район в долине Рамеде с жилыми кварталами и промышленными объектами' },
                        { bold: 'Knerling', text: '– жилой район с зелёными зонами и панорамными видами на долину' },
                        { bold: 'Pragpaul', text: '– небольшой жилой район на склонах вокруг центра города' },
                        { bold: 'Mühlendorf', text: '– район вдоль реки Ленне с жилыми домами и промышленным прошлым' },
                    ]
                },
                geography: {
                    title: 'Рельеф и высоты',
                    items: [
                        { text: 'Альтена расположен в долине реки Лене, окружённой холмами Зауэрланда. Рельеф пересечённый, улицы и тропы часто идут вверх-вниз. Средняя высота города около 190-350 м над уровнем моря.' },
                        { bold: 'Геология и природа', text: ' Почвы в регионе имеют девонское и карбонатное происхождение; в окрестностях много лесных массивов, живописных долин и природных зон для отдыха.' },
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Альтены',
                    isList: true,
                    items: [
                        { bold: 'Вальтер Флейшман (Walter Fleishmann, 1895-1974)', text: ' – немецкий предприниматель и инженер, участвовал в развитии индустрии Зауэрланда.' },
                        { bold: 'Ганс Дамм (Hans Damm, 1910-1982)', text: ' – известный немецкий политик и меценат региона.' },
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    isList: true,
                    items: [
                        { bold: 'Альтена – «проволочная столица Европы»', text: ' город исторически считается одним из центров проволочной промышленности: уже в средние века здесь производили проволоку, а в XIX веке регион был важнейшим центром её изготовления в Германии и за её пределами. Доказательства этому можно увидеть в специализированном Музее проволоки (Deutsches Drahtmuseum), где показывают, как проволока использовалась от древности до современной техники.' },
                        { bold: 'Производство канатов', text: ' – в XIX-XX веках Альтена был известен как центр канатной промышленности; музей канатов (Deutsches Drahtmuseum) сохраняет эту историю.' },
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Город Альтена первоначально сформировался как поселение в долине реки Лене под защитой крепости XII века, вокруг которой в Средние века постепенно вырос собственно город. Он обладал важным стратегическим положением на торговых путях между Зауэрландом и Рурской областью и уже к 1367 году получил ограниченные городские права (Freiheitsrechte), что укрепило его административное и торговое значение в регионе. ' },
                        { text: 'В позднем Средневековье и раннем Новом времени Альтена развивался в рамках графства Марк и с XII-XIV вв. был связан с местными торговыми и ремесленными сетями. Помимо ремёсел, здесь формировалась и экономическая специализация: благодаря расположению в лесистой долине и близости к источникам железной руды, проволочная промышленность стала важной частью городской экономики. Эта специализация сохранялась и усиливалась вплоть до XIX века. ' },
                        { text: 'В XIX веке индустриальное развитие стало доминирующей силой в жизни Альтены: помимо традиционной проволочной промышленности, здесь начали появляться новые производства, связанные с металлообработкой и механизацией. Городу способствовал промышленный подъём, характерный для всей Северной Вестфалии в эпоху индустриализации. В этот период город укрепил свой экономический профиль как центр металлургического и технического производства. ' },
                        { text: 'XX век принёс Альтене как вызовы, так и изменения. В период между мировыми войнами город, как и остальная Германия, переживал экономические и социальные коллизии, связанные с инфляцией, безработицей и восстановлением после Первой мировой войны. В годы Второй мировой войны сам город не был крупным промышленным центром тяжёлой промышленности и не подвергался масштабным бомбардировкам, характерным для крупных индустриальных районов Рура; тем не менее, регион ощутил экономические и демографические последствия войны. После 1945 года промышленность и экономика претерпели изменения, связанные с перестройкой и переходом к мирному производству, а часть предприятий переориентировалась на гражданские товары. ' },
                        { text: 'Во второй половине XX в. и в XXI веке Альтена стал примером структурных изменений в малых промышленных городах Германии: с конца 1960 х годов население уменьшалось, предприятия закрывались или сокращали производство, что привело к экономическому спаду и оттоку жителей. При этом в 2010 х и 2020 х годах город также стал известен благодаря инициативам по интеграции мигрантов – в 2015 г. муниципалитет добровольно принял больше беженцев, чем требовалось по квоте, что привлекло внимание федеральных СМИ и общественное признание.' },
                    ]
                },
                meta: {
                    title: "Альтена – исторический город крепости и канатов в Зауэрланде",
                    description: "Альтена: история, география, знаменитые жители и интересные факты о городе с крепостью и промышленным наследием.",
                    ogTitle: "Альтена – информация о городе",
                    ogDescription: "Подробная информация о Альтене: культура, история, знаменитые люди и интересные факты о крепости и индустриальном прошлом города.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Burg_Altena_2012.jpg/800px-Burg_Altena_2012.jpg"
                }
            },
            ua: {
                name: 'Альтена',
                subRegionName: "Меркіш",
                desc: {
                    general: [
                        { text: 'Альтена (нім. Altena) розташована у північній частині Зауерланду в землі Північний Рейн-Вестфалія. Адміністративно місто входить до складу регіону Арнсберг і підпорядковане округу Меркіш.' },
                    ],
                    population: [{ bold: 'Населення', text: ' міста становить близько 18 500 осіб (станом на 31 грудня 2024 року).' }],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' муніципалітету становить близько 81,6 км². Велика частина території зайнята лісами, зеленими зонами та пагористими ландшафтами; далі йдуть сільськогосподарські угіддя, житлові та промислові райони, дороги та водні об’єкти.' },
                    ],
                    postalCode: [{ bold: 'Поштові індекси:', text: ' 58762' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 02352' }],
                    officialSite: [{ bold: 'Офіційний сайт Альтени', link: 'https://www.altena-notbetrieb.de/' }],
                    education: [{ bold: 'Освітня система', text: ' у місті включає кілька початкових шкіл, середні школи (Haupt- та Realschulen), гімназію (Städtisches Gymnasium Altena) та професійні навчальні заклади. Також в Альтені працюють музичні та художні школи.' }],
                    culture: [{ bold: 'Культурні активності', text: ' – місто славиться замком Альтена (Burg Altena), музеями, фестивалями, культурними подіями та пішохідними маршрутами вздовж річки Лене.' }],
                },
                admin: {
                    title: 'Альтена поділена на 7 районів (Stadtteile):',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt', text: '– центральний район Альтени з історичним старим містом, замком Альтена та основними міськими установами' },
                        { bold: 'Dahle', text: '– південний район із житловими кварталами, лісовими територіями та традиційною забудовою' },
                        { bold: 'Evingsen', text: '– більш сільський район із сільською атмосферою та лісовими ландшафтами' },
                        { bold: 'Rahmede', text: '– район у долині Рамеде з житловими кварталами та промисловими об’єктами' },
                        { bold: 'Knerling', text: '– житловий район із зеленими зонами та панорамними видами на долину' },
                        { bold: 'Pragpaul', text: '– невеликий житловий район на схилах навколо центру міста' },
                        { bold: 'Mühlendorf', text: '– район уздовж річки Ленне з житловими будинками та промисловим минулим' },
                    ]
                },
                geography: {
                    title: 'Рельєф і висоти',
                    items: [
                        { text: 'Альтена розташована в долині річки Лене, оточеній пагорбами Зауерланду. Рельєф пересічений, вулиці та стежки часто йдуть вгору-вниз. Середня висота міста близько 190-350 м над рівнем моря.' },
                        { bold: 'Геологія та природа', text: ' ґрунти в регіоні мають девонське та карбонатне походження; в околицях багато лісових масивів, мальовничих долин та природних зон для відпочинку.' },
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Альтени',
                    isList: true,
                    items: [
                        { bold: 'Вальтер Фляйшман (Walter Fleishmann, 1895-1974)', text: ' – німецький підприємець та інженер, брав участь у розвитку індустрії Зауерланду.' },
                        { bold: 'Ганс Дамм (Hans Damm, 1910-1982)', text: ' – відомий німецький політик і меценат регіону.' },
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    isList: true,
                    items: [
                        { bold: 'Альтена – «проволочна столиця Європи»', text: ' місто історично вважається одним із центрів виробництва дроту: вже в середні віки тут виробляли дріт, а в XIX столітті регіон був одним із найважливіших центрів його виготовлення в Німеччині та за її межами. Докази цьому можна побачити у спеціалізованому Музеї дроту (Deutsches Drahtmuseum), де демонструють, як дріт використовувався від давнини до сучасних технологій.' },
                        { bold: 'Виробництво канатів', text: ' – у XIX-XX століттях Альтена була відома як центр канатної промисловості; музей канатів (Deutsches Drahtmuseum) зберігає цю історію.' },
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Місто Альтена спочатку сформувалося як поселення в долині річки Лене під захистом замку XII століття, навколо якого в Середні віки поступово виріс власне місто. Воно мало важливе стратегічне положення на торгових шляхах між Зауерландом та Рурською областю і вже до 1367 року отримало обмежені міські права (Freiheitsrechte), що зміцнило його адміністративне та торговельне значення в регіоні.' },
                        { text: 'У пізньому Середньовіччі та на початку Нового часу Альтена розвивався в рамках графства Марк і з XII-XIV століть був пов’язаний із місцевими торговими та ремісничими мережами. Окрім ремесел, тут формувалася економічна спеціалізація: завдяки розташуванню в лісистій долині та близькості до джерел залізної руди проволочна промисловість стала важливою частиною міської економіки. Ця спеціалізація зберігалася та посилювалася до XIX століття.' },
                        { text: 'У XIX столітті індустріальний розвиток став домінуючою силою в житті Альтени: окрім традиційної проволочної промисловості, тут почали з’являтися нові виробництва, пов’язані з обробкою металу та механізацією. Місту сприяв промисловий підйом, характерний для всієї Північної Вестфалії в епоху індустріалізації. У цей період місто зміцнило свій економічний профіль як центр металургійного та технічного виробництва.' },
                        { text: 'XX століття принесло Альтені як виклики, так і зміни. У період між світовими війнами місто, як і решта Німеччини, переживало економічні та соціальні колапси, пов’язані з інфляцією, безробіттям та відновленням після Першої світової війни. Під час Другої світової війни саме місто не було великим промисловим центром важкої промисловості і не зазнало масштабних бомбардувань, характерних для великих промислових районів Рура; проте регіон відчув економічні та демографічні наслідки війни. Після 1945 року промисловість і економіка зазнали змін, пов’язаних із відбудовою та переходом до мирного виробництва, а частина підприємств переорієнтувалася на цивільні товари.' },
                        { text: 'У другій половині XX століття та в XXI столітті Альтена стала прикладом структурних змін у малих промислових містах Німеччини: з кінця 1960-х років населення зменшувалося, підприємства закривалися або скорочували виробництво, що призвело до економічного спаду та відтоку мешканців. При цьому у 2010-х та 2020-х роках місто стало відомим завдяки ініціативам із інтеграції мігрантів – у 2015 році муніципалітет добровільно прийняв більше біженців, ніж вимагалося за квотою, що привернуло увагу федеральних ЗМІ та суспільне визнання.' },
                    ]
                },
                meta: {
                    title: "Альтена – історичне місто замку та канатів у Зауерланді",
                    description: "Альтена: історія, географія, відомі мешканці та цікаві факти про місто з замком та промисловою спадщиною.",
                    ogTitle: "Альтена – інформація про місто",
                    ogDescription: "Детальна інформація про Альтену: культура, історія, відомі люди та цікаві факти про замок та індустріальне минуле міста.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Burg_Altena_2012.jpg/800px-Burg_Altena_2012.jpg"
                }
            },
            de: {
                name: 'Altena',
                subRegionName: "Märkischer",
                desc: {
                    general: [
                        { text: 'Altena liegt im nördlichen Teil des Sauerlands im Bundesland Nordrhein-Westfalen. Administrativ gehört die Stadt zur Region Arnsberg und untersteht dem Märkischen Kreis.' },
                    ],
                    population: [{ bold: 'Einwohnerzahl', text: ' der Stadt beträgt etwa 18.500 Menschen (Stand 31. Dezember 2024).' }],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' die Gemeinde erstreckt sich über etwa 81,6 km². Ein Großteil der Fläche besteht aus Wäldern, Grünflächen und hügeliger Landschaft; gefolgt von landwirtschaftlichen Flächen, Wohn- und Industriegebieten, Straßen und Gewässern.' },
                    ],
                    postalCode: [{ bold: 'Postleitzahlen:', text: ' 58762' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 02352' }],
                    officialSite: [{ bold: 'Offizielle Website von Altena', link: 'https://www.altena-notbetrieb.de/' }],
                    education: [{ bold: 'Bildungssystem', text: ' in der Stadt umfasst mehrere Grundschulen, weiterführende Schulen (Haupt- und Realschulen), ein Gymnasium (Städtisches Gymnasium Altena) und berufliche Bildungseinrichtungen. In Altena gibt es außerdem Musik- und Kunstschulen.' }],
                    culture: [{ bold: 'Kulturelle Aktivitäten', text: ' – die Stadt ist bekannt für die Burg Altena, Museen, Festivals, kulturelle Veranstaltungen und Spazierwege entlang der Lenne.' }],
                },
                admin: {
                    title: 'Altena ist in 7 Stadtteile gegliedert:',
                    isList: true,
                    items: [
                        { bold: 'Innenstadt', text: '– der zentrale Stadtteil Altenas mit der historischen Altstadt, der Burg Altena und den wichtigsten städtischen Einrichtungen' },
                        { bold: 'Dahle', text: '– ein südlicher Stadtteil mit Wohnvierteln, Waldgebieten und traditioneller Bebauung' },
                        { bold: 'Evingsen', text: '– ein eher ländlicher Stadtteil mit dörflicher Atmosphäre und Waldlandschaften' },
                        { bold: 'Rahmede', text: '– ein Stadtteil im Rahmedetal mit Wohnvierteln und Industrieanlagen' },
                        { bold: 'Knerling', text: '– ein Wohngebiet mit Grünflächen und Panoramablicken über das Tal' },
                        { bold: 'Pragpaul', text: '– ein kleiner Wohnstadtteil an den Hängen rund um das Stadtzentrum' },
                        { bold: 'Mühlendorf', text: '– ein Stadtteil entlang der Lenne mit Wohnhäusern und industrieller Vergangenheit' },
                    ]
                },
                geography: {
                    title: 'Relief und Höhen',
                    items: [
                        { text: 'Altena liegt im Tal der Lenne, umgeben von Hügeln des Sauerlands. Das Relief ist uneben, Straßen und Pfade verlaufen oft auf und ab. Die durchschnittliche Höhe der Stadt beträgt etwa 190-350 m über dem Meeresspiegel.' },
                        { bold: 'Geologie und Natur', text: ' Die Böden der Region sind devonischen und karbonatischen Ursprungs; in der Umgebung gibt es viele Waldgebiete, malerische Täler und Naturschutzgebiete.' },
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Altena',
                    items: [
                        { bold: 'Walter Fleishmann (1895-1974)', text: ' – deutscher Unternehmer und Ingenieur, beteiligt an der Entwicklung der Industrie im Sauerland.' },
                        { bold: 'Hans Damm (1910-1982)', text: ' – bekannter deutscher Politiker und Mäzen der Region.' },
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    items: [
                        { bold: 'Altena – „Drahthauptstadt Europas“', text: ' die Stadt gilt historisch als eines der Zentren der Drahtproduktion: bereits im Mittelalter wurde hier Draht hergestellt, und im 19. Jahrhundert war die Region eines der wichtigsten Zentren seiner Herstellung in Deutschland und darüber hinaus. Beweise dafür finden sich im spezialisierten Drahtmuseum (Deutsches Drahtmuseum), wo gezeigt wird, wie Draht von der Antike bis zur modernen Technik verwendet wurde.' },
                        { bold: 'Seilproduktion', text: ' – im 19. und 20. Jahrhundert war Altena als Zentrum der Seilproduktion bekannt; das Seilmuseum (Deutsches Drahtmuseum) bewahrt diese Geschichte.' },
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Die Stadt Altena entstand ursprünglich als Siedlung im Tal der Lenne unter dem Schutz der Burg aus dem 12. Jahrhundert, um die sich im Mittelalter allmählich die eigentliche Stadt entwickelte. Sie hatte eine wichtige strategische Lage an den Handelswegen zwischen dem Sauerland und dem Ruhrgebiet und erhielt bereits 1367 begrenzte Stadtrechte (Freiheitsrechte), was ihre administrative und wirtschaftliche Bedeutung in der Region stärkte.' },
                        { text: 'Im Spätmittelalter und in der frühen Neuzeit entwickelte sich Altena im Rahmen der Grafschaft Mark und war vom 12. bis 14. Jahrhundert mit lokalen Handels- und Handwerksnetzwerken verbunden. Neben Handwerk bildete sich hier eine wirtschaftliche Spezialisierung: aufgrund der Lage im waldreichen Tal und der Nähe zu Eisenerzvorkommen wurde die Drahtindustrie ein wichtiger Bestandteil der städtischen Wirtschaft. Diese Spezialisierung hielt bis ins 19. Jahrhundert an.' },
                        { text: 'Im 19. Jahrhundert wurde die industrielle Entwicklung zur dominierenden Kraft im Leben Altenas: neben der traditionellen Drahtindustrie entstanden neue Produktionsstätten, die mit Metallbearbeitung und Mechanisierung verbunden waren. Der Stadt half der industrielle Aufschwung, der für das gesamte Nordrhein-Westfalen in der Zeit der Industrialisierung typisch war. In dieser Zeit festigte die Stadt ihr wirtschaftliches Profil als Zentrum für metallverarbeitende und technische Produktion.' },
                        { text: 'Das 20. Jahrhundert brachte Altena sowohl Herausforderungen als auch Veränderungen. In der Zeit zwischen den Weltkriegen erlebte die Stadt, wie der Rest Deutschlands, wirtschaftliche und soziale Krisen im Zusammenhang mit Inflation, Arbeitslosigkeit und Wiederaufbau nach dem Ersten Weltkrieg. Während des Zweiten Weltkriegs war die Stadt selbst kein großes industrielles Zentrum der Schwerindustrie und wurde nicht wie die großen Industriegebiete des Ruhrgebiets stark bombardiert; dennoch spürte die Region die wirtschaftlichen und demografischen Folgen des Krieges. Nach 1945 erfuhren Industrie und Wirtschaft Veränderungen im Zusammenhang mit dem Wiederaufbau und der Umstellung auf zivile Produktion, wobei ein Teil der Unternehmen auf zivile Güter umgestellt wurde.' },
                        { text: 'In der zweiten Hälfte des 20. Jahrhunderts und im 21. Jahrhundert wurde Altena zu einem Beispiel für strukturelle Veränderungen in kleinen Industriestädten Deutschlands: seit Ende der 1960er Jahre nahm die Bevölkerung ab, Unternehmen schlossen oder reduzierten die Produktion, was zu einem wirtschaftlichen Rückgang und Abwanderung der Einwohner führte. Gleichzeitig wurde die Stadt in den 2010er und 2020er Jahren durch Integrationsinitiativen für Migranten bekannt – 2015 nahm die Kommune freiwillig mehr Flüchtlinge auf, als die Quote vorsah, was bundesweites Medieninteresse und öffentliche Anerkennung hervorrief.' },
                    ]
                },
                meta: {
                    title: "Altena – historische Stadt der Burg und Seile im Sauerland",
                    description: "Altena: Geschichte, Geographie, berühmte Bewohner und interessante Fakten über die Stadt mit Burg und industriellem Erbe.",
                    ogTitle: "Altena – Informationen zur Stadt",
                    ogDescription: "Detaillierte Informationen über Altena: Kultur, Geschichte, berühmte Persönlichkeiten und interessante Fakten über die Burg und die industrielle Vergangenheit der Stadt.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Burg_Altena_2012.jpg/800px-Burg_Altena_2012.jpg"
                }
            }
        }
    },
    {
        id: "iserlohn",
        path: "iserlohn",
        countryPath: "germany", regionPath: "nrw", districtPath: "arnsberg", subRegionPath: "merkischer",
        gerb: "Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/gerb.png",
        coord: { lat: 51.3755, lng: 7.7028 },
        translations: {
            ru: {
                name: "Изерлон",
                subRegionName: "Меркиш",
                desc: {
                    general: [
                        { text: "Изерлон (нем. Iserlohn) – крупнейший город округа Меркиш в регионе Арнсберг, федеральная земля Северный Рейн-Вестфалия. Расположен на северной окраине Зауэрланда и исторически известен как важный центр металлургии и обработки металлов." }
                    ],
                    population: [{ bold: "Население", text: " города составляет около 92 000 человек (по состоянию на 2024 год)." }],
                    area: [
                        { bold: "Площадь:", text: " территория города занимает примерно 125,5 км². Значительную часть занимают леса и природные зоны, что делает Изерлон одним из наиболее «зелёных» городов региона." },
                    ],
                    postalCode: [{ bold: "Почтовые индексы:", text: " 58636–58644" }],
                    phone: [{ bold: "Телефонный код:", text: " +49 02371" }],
                    officialSite: [{ bold: "Официальный сайт Изерлона", link: "https://www.iserlohn.de/" }],
                    education: [
                        { bold: "Система образования" },
                        { text: " в городе представлена широким спектром учебных заведений: начальные школы, Realschulen, Gesamtschulen, гимназии, а также профессиональные колледжи." },
                        { text: " Изерлон является частью образовательной сети Fachhochschule Südwestfalen, где предлагаются технические и инженерные направления." },
                        { text: " Также в городе действуют музыкальные школы, учреждения дополнительного образования и центры профессиональной подготовки." }
                    ],
                    culture: [
                        { bold: "Культурные активности", text: " – в городе работают музеи, театры и концертные площадки. Особую известность имеет природный объект – пещера Dechenhöhle, а также многочисленные маршруты для пешего туризма и отдыха в лесных зонах." }
                    ]
                },
                admin: {
                    title: 'Изерлон разделён на 5 городских округов (Stadtbezirke):',
                    isList: true,
                    items: [
                        { bold: 'Iserlohn', text: '– центральный округ с историческим центром, административными учреждениями и торговыми зонами' },
                        { bold: 'Letmathe', text: '– крупный округ с отдельным центром, жилыми кварталами и развитой инфраструктурой' },
                        { bold: 'Hennen', text: '– спокойный жилой округ с деревенской структурой и зелёными территориями' },
                        { bold: 'Sümmern', text: '– северный округ с жилыми районами и сельскими окрестностями' },
                        { bold: 'Oestrich', text: '– округ с жилой застройкой, природными зонами и спокойной атмосферой' },
                    ]
                },
                geography: {
                    title: "Рельеф и высоты",
                    items: [
                        { text: "Изерлон расположен на переходе между равнинными территориями Рурской области и холмистым Зауэрландом. Рельеф города разнообразный: от более пологих участков на севере до холмов и лесистых возвышенностей на юге." },
                        { text: "Средняя высота составляет около 250–300 метров над уровнем моря, однако перепады высот в пределах города могут быть значительными." },
                        { bold: "Геология.", text: " Регион сформирован известняковыми породами девонского периода, что привело к развитию карстового рельефа. Именно этим объясняется наличие пещер, включая Dechenhöhle, и подземных водных систем." }
                    ]
                },
                notablePeople: {
                    title: "Знаменитые люди Изерлона",
                    isList: true,
                    items: [
                        { bold: "Ники Адлер (Nikki Adler, род. 1986)", text: " – немецкая профессиональная боксёрша, чемпионка мира по версиям WBC и WBO." },
                        { bold: "Райнер Шаллер (Rainer Schaller, 1969–2022)", text: " – немецкий предприниматель, основатель сети фитнес-клубов McFit." },
                        { bold: "Фридрих Зёрн (Friedrich Söhn, 19 век)", text: " – промышленник, связанный с развитием металлообрабатывающей промышленности региона." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { bold: "Пещера Dechenhöhle", text: " – одна из самых известных и хорошо оборудованных сталактитовых пещер Германии, открытая в XIX веке." },
                        { bold: "Центр проволочной промышленности", text: " – Изерлон на протяжении столетий был одним из ключевых центров производства проволоки в Европе." },
                        { bold: "Зелёный город", text: " – значительная часть территории покрыта лесами, что делает его одним из самых природно ориентированных городов региона." },
                        { bold: "Географический переход", text: " – город находится на границе индустриальной Рурской области и природного Зауэрланда, сочетая промышленность и природу." }
                    ]
                },
                briefHistory: {
                    title: "История",
                    items: [
                        { text: "Территория современного Изерлона была заселена уже в раннем Средневековье. Первые упоминания относятся к IX–XI векам, когда здесь существовали небольшие поселения и ремесленные центры. Благодаря расположению на пересечении торговых путей регион постепенно развивался." },
                        { text: "Городские права Изерлон получил в XIII веке (около 1237 года). В этот период он входил в сферу влияния графов Марка и становился важным локальным центром торговли и ремёсел." },
                        { text: "С позднего Средневековья Изерлон начал активно развиваться как центр металлургии. Особую известность приобрело производство проволоки: благодаря местным залежам руды и наличию водных ресурсов для привода механизмов город стал одним из ведущих центров этой отрасли в Европе." },
                        { text: "В XVI–XVIII веках промышленность продолжала расти, несмотря на войны, эпидемии и пожары. Производство металлических изделий и проволоки стало основой экономики города и сформировало его ремесленную и индустриальную идентичность." },
                        { text: "В XIX веке индустриализация привела к значительному росту города. Были построены фабрики, развивалась транспортная инфраструктура, включая железные дороги. Изерлон окончательно закрепился как промышленный центр региона." },
                        { text: "В период Второй мировой войны город подвергался бомбардировкам, что привело к разрушениям. После 1945 года началось восстановление и модернизация промышленности, а также рост населения за счёт переселенцев." },
                        { text: "Во второй половине XX века Изерлон стал частью индустриального пояса Северного Рейна-Вестфалии, сохранив при этом связь с природным ландшафтом Зауэрланда. В ходе административной реформы 1975 года к городу были присоединены близлежащие населённые пункты, что значительно увеличило его территорию и население." },
                        { text: "Сегодня Изерлон сочетает промышленное наследие с развитой инфраструктурой и туристическими объектами, включая природные достопримечательности и исторические памятники." }
                    ]
                },
                meta: {
                    title: "Изерлон – пещеры, природа и индустриальное наследие NRW",
                    description: "Изерлон: крупнейший город Меркишского округа с известной пещерой Dechenhöhle, богатой историей металлургии и живописной природой Зауэрланда.",
                    ogTitle: "Изерлон – город пещер и промышленности",
                    ogDescription: "Узнайте об Изерлоне: пещеры, история проволочной промышленности и природа на границе Рура и Зауэрланда.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhoehle/001.jpg"
                }
            },
            ua: {
                name: "Ізерлон",
                subRegionName: "Меркіш",
                desc: {
                    general: [
                        { text: "Ізерлон (нім. Iserlohn) – найбільше місто округу Меркіш у регіоні Арнсберг, федеральна земля Північний Рейн-Вестфалія. Розташоване на північній околиці Зауерланду та історично відоме як важливий центр металургії та обробки металів." }
                    ],
                    population: [{ bold: "Населення", text: " міста становить близько 92 000 осіб (станом на 2024 рік)." }],
                    area: [
                        { bold: "Площа:", text: " територія міста становить приблизно 125,5 км². Значну частину займають ліси та природні зони, що робить Ізерлон одним із найбільш «зелених» міст регіону." }
                    ],
                    postalCode: [{ bold: "Поштові індекси:", text: " 58636–58644" }],
                    phone: [{ bold: "Телефонний код:", text: " +49 02371" }],
                    officialSite: [{ bold: "Офіційний сайт Ізерлона", link: "https://www.iserlohn.de/" }],
                    education: [
                        { bold: "Система освіти" },
                        { text: " у місті представлена широким спектром навчальних закладів: початкові школи, Realschulen, Gesamtschulen, гімназії, а також професійні коледжі." },
                        { text: " Ізерлон є частиною освітньої мережі Fachhochschule Südwestfalen, де пропонуються технічні та інженерні напрямки." },
                        { text: " Також у місті функціонують музичні школи, заклади додаткової освіти та центри професійної підготовки." }
                    ],
                    culture: [
                        { bold: "Культурні активності", text: " – у місті працюють музеї, театри та концертні майданчики. Особливу популярність має природний об'єкт – печера Dechenhöhle, а також численні маршрути для піших прогулянок і відпочинку в лісових зонах." }
                    ]
                },
                admin: {
                    title: 'Ізерлон поділений на 5 міських округів (Stadtbezirke):',
                    isList: true,
                    items: [
                        { bold: 'Iserlohn', text: '– центральний округ з історичним центром, адміністративними установами та торговими зонами' },
                        { bold: 'Letmathe', text: '– великий округ з окремим центром, житловими кварталами та розвиненою інфраструктурою' },
                        { bold: 'Hennen', text: '– спокійний житловий округ із сільською структурою та зеленими територіями' },
                        { bold: 'Sümmern', text: '– північний округ із житловими районами та сільськими околицями' },
                        { bold: 'Oestrich', text: '– округ із житловою забудовою, природними зонами та спокійною атмосферою' },
                    ]
                },
                geography: {
                    title: "Рельєф і висоти",
                    items: [
                        { text: "Ізерлон розташований на переході між рівнинними територіями Рурської області та горбистим Зауерландом. Рельєф міста різноманітний: від більш пологих ділянок на півночі до пагорбів і лісистих височин на півдні." },
                        { text: "Середня висота становить близько 250–300 метрів над рівнем моря, однак перепади висот у межах міста можуть бути значними." },
                        { bold: "Геологія.", text: " Регіон сформований вапняковими породами девонського періоду, що призвело до утворення карстового рельєфу. Саме цим пояснюється наявність печер, включаючи Dechenhöhle, та підземних водних систем." }
                    ]
                },
                notablePeople: {
                    title: "Відомі люди Ізерлона",
                    isList: true,
                    items: [
                        { bold: "Ніккі Адлер (Nikki Adler, нар. 1986)", text: " – німецька професійна боксерка, чемпіонка світу за версіями WBC та WBO." },
                        { bold: "Райнер Шаллер (Rainer Schaller, 1969–2022)", text: " – німецький підприємець, засновник мережі фітнес-клубів McFit." },
                        { bold: "Фрідріх Зьон (Friedrich Söhn, XIX століття)", text: " – промисловець, пов’язаний із розвитком металообробної промисловості регіону." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { bold: "Печера Dechenhöhle", text: " – одна з найвідоміших і добре обладнаних сталактитових печер Німеччини, відкрита у XIX столітті." },
                        { bold: "Центр дротової промисловості", text: " – Ізерлон протягом століть був одним із ключових центрів виробництва дроту в Європі." },
                        { bold: "Зелене місто", text: " – значна частина території вкрита лісами, що робить його одним із найбільш природно орієнтованих міст регіону." },
                        { bold: "Географічний перехід", text: " – місто розташоване на межі індустріальної Рурської області та природного Зауерланду, поєднуючи промисловість і природу." }
                    ]
                },
                briefHistory: {
                    title: "Історія",
                    items: [
                        { text: "Територія сучасного Ізерлона була заселена вже в ранньому середньовіччі. Перші згадки датуються IX–XI століттями." },
                        { text: "Міські права Ізерлон отримав у XIII столітті (близько 1237 року)." },
                        { text: "З пізнього середньовіччя місто стало центром металургії, зокрема виробництва дроту." },
                        { text: "У XIX столітті індустріалізація сприяла значному розвитку міста." },
                        { text: "Після Другої світової війни місто було відбудоване та модернізоване." },
                        { text: "У 1975 році після адміністративної реформи територія міста значно розширилася." }
                    ]
                },
                meta: {
                    title: "Ізерлон – печери, природа та індустріальна спадщина NRW",
                    description: "Ізерлон: найбільше місто округу Меркіш із відомою печерою Dechenhöhle, багатою історією металургії та мальовничою природою Зауерланду.",
                    ogTitle: "Ізерлон – місто печер і промисловості",
                    ogDescription: "Дізнайтеся про Ізерлон: печери, історію дротової промисловості та природу на межі Руру і Зауерланду.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhoehle/001.jpg"
                }
            },
            de: {
                name: "Iserlohn",
                subRegionName: "Märkischer",
                desc: {
                    general: [
                        { text: "Iserlohn ist die größte Stadt des Märkischen Kreises im Regierungsbezirk Arnsberg im Bundesland Nordrhein-Westfalen. Die Stadt liegt am nördlichen Rand des Sauerlandes und ist historisch als bedeutendes Zentrum der Metallverarbeitung und Industrie bekannt." }
                    ],
                    population: [{ bold: "Einwohnerzahl", text: " beträgt etwa 92.000 Personen (Stand: 2024)." }],
                    area: [
                        { bold: "Fläche:", text: " Das Stadtgebiet umfasst etwa 125,5 km². Ein großer Teil besteht aus Wäldern und Naturflächen, wodurch Iserlohn zu den grünsten Städten der Region zählt." },
                    ],
                    postalCode: [{ bold: "Postleitzahlen:", text: " 58636–58644" }],
                    phone: [{ bold: "Vorwahl:", text: " +49 02371" }],
                    officialSite: [{ bold: "Offizielle Website von Iserlohn", link: "https://www.iserlohn.de/" }],
                    education: [
                        { bold: "Bildungssystem" },
                        { text: " umfasst ein breites Spektrum an Bildungseinrichtungen: Grundschulen, Realschulen, Gesamtschulen, Gymnasien sowie berufliche Schulen." },
                        { text: " Iserlohn ist Teil des Bildungsnetzwerks der Fachhochschule Südwestfalen mit technischen und ingenieurwissenschaftlichen Studiengängen." },
                        { text: " Darüber hinaus gibt es Musikschulen, Weiterbildungseinrichtungen und Zentren für berufliche Qualifizierung." }
                    ],
                    culture: [
                        { bold: "Kulturelle Aktivitäten", text: " – die Stadt bietet Museen, Theater und Veranstaltungsorte. Besonders bekannt ist die Dechenhöhle sowie zahlreiche Wanderwege und Naherholungsgebiete." }
                    ]
                },
                admin: {
                    title: 'Iserlohn ist in 5 Stadtbezirke gegliedert:',
                    isList: true,
                    items: [
                        { bold: 'Iserlohn', text: '– der zentrale Bezirk mit historischer Innenstadt, Verwaltungsgebäuden und Einkaufsbereichen' },
                        { bold: 'Letmathe', text: '– ein großer Bezirk mit eigenem Zentrum, Wohngebieten und guter Infrastruktur' },
                        { bold: 'Hennen', text: '– ein ruhiger Wohnbezirk mit dörflicher Struktur und viel Grün' },
                        { bold: 'Sümmern', text: '– ein nördlicher Bezirk mit Wohngebieten und ländlicher Umgebung' },
                        { bold: 'Oestrich', text: '– ein Wohnbezirk mit Naturflächen und ruhiger Atmosphäre' },
                    ]
                },
                geography: {
                    title: "Relief und Höhenlage",
                    items: [
                        { text: "Iserlohn liegt im Übergangsbereich zwischen der flacheren Ruhrregion und dem hügeligen Sauerland." },
                        { text: "Die durchschnittliche Höhe beträgt etwa 250–300 Meter über dem Meeresspiegel, mit teils deutlichen Höhenunterschieden." },
                        { bold: "Geologie.", text: " Die Region ist durch Kalksteinformationen aus dem Devon geprägt, was zur Bildung von Karstlandschaften und Höhlen wie der Dechenhöhle geführt hat." }
                    ]
                },
                notablePeople: {
                    title: "Bekannte Persönlichkeiten aus Iserlohn",
                    isList: true,
                    items: [
                        { bold: "Nikki Adler (*1986)", text: " – deutsche Profiboxerin und Weltmeisterin." },
                        { bold: "Rainer Schaller (1969–2022)", text: " – deutscher Unternehmer und Gründer von McFit." },
                        { bold: "Friedrich Söhn (19. Jahrhundert)", text: " – Industrieller im Bereich Metallverarbeitung." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { bold: "Dechenhöhle", text: " – eine der bekanntesten Tropfsteinhöhlen Deutschlands." },
                        { bold: "Drahtindustrie", text: " – Iserlohn war über Jahrhunderte ein bedeutendes Zentrum der Drahtproduktion in Europa." },
                        { bold: "Grüne Stadt", text: " – große Teile des Stadtgebiets sind bewaldet." },
                        { bold: "Geografische Lage", text: " – Übergang zwischen Industriegebiet und Naturregion." }
                    ]
                },
                briefHistory: {
                    title: "Geschichte",
                    items: [
                        { text: "Die Region war bereits im frühen Mittelalter besiedelt." },
                        { text: "Im 13. Jahrhundert erhielt Iserlohn Stadtrechte." },
                        { text: "Im Laufe der Zeit entwickelte sich die Stadt zu einem Zentrum der Metallverarbeitung." },
                        { text: "Im 19. Jahrhundert brachte die Industrialisierung wirtschaftliches Wachstum." },
                        { text: "Nach dem Zweiten Weltkrieg wurde die Stadt wieder aufgebaut." },
                        { text: "Seit der Gebietsreform 1975 gehört Iserlohn zu den größten Städten der Region." }
                    ]
                },
                meta: {
                    title: "Iserlohn – Höhlen, Natur und Industriegeschichte in NRW",
                    description: "Iserlohn: größte Stadt im Märkischen Kreis mit der bekannten Dechenhöhle und einer langen Industriegeschichte.",
                    ogTitle: "Iserlohn – Stadt der Höhlen und Industrie",
                    ogDescription: "Entdecken Sie Iserlohn: Natur, Höhlen und industrielle Entwicklung.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/arnsberg/Märkischer-Kreis/iserlohn/dechenhoehle/001.jpg"
                }
            }
        }
    },

    // округ dusseldorf 
    // край mettmann 
    {
        id: "velbert",
        path: "velbert",
        countryPath: "germany", regionPath: "nrw", districtPath: "dusseldorf", subRegionPath: "mettmann",
        gerb: "Germany/nrw/dusseldorf/mettmann/velbert/gerb.png",
        coord: { lat: 51.3387, lng: 7.0436 },
        translations: {
            ru: {
                name: "Фельберт",
                subRegionName: "Меттман",
                desc: {
                    general: [{ text: "Фельберт (нем. Velbert) – крупный город в районе Меттман административного округа Дюссельдорф, федеральная земля Северный Рейн-Вестфалия. Город расположен между Рурской областью и регионом Бергишес-Ланд и исторически известен как центр производства замков и фурнитуры." }],
                    population: [{ bold: "Население", text: " составляет около 81 000 человек (по состоянию на 2024 год)." }],
                    area: [
                        { bold: "Площадь:", text: " около 74,9 км². Город расположен на холмистой местности региона Бергишес-Ланд, значительную часть территории занимают леса и зелёные зоны." },
                    ],
                    postalCode: [{ bold: "Почтовые индексы:", text: " 42549–42555" }],
                    phone: [{ bold: "Телефонный код:", text: " +49 02051" }],
                    officialSite: [{ bold: "Официальный сайт Фельберта", link: "https://www.velbert.de/" }],
                    culture: [{ bold: "Культурные особенности", text: " – город известен музеем замков и фурнитуры (Deutsches Schloss- und Beschlägemuseum), который отражает его многовековую промышленную специализацию." }]
                },
                admin: {
                    title: 'Фельберт разделён на 3 городских района (Stadtteile):',
                    isList: true,
                    items: [
                        { bold: 'Фельберт-Митте (Velbert-Mitte)', text: '– центральный район города с административными учреждениями, торговыми зонами и современными жилыми кварталами' },
                        { bold: 'Невигес (Neviges)', text: '– исторический район, известный паломническим собором Mariendom Neviges и старой застройкой' },
                        { bold: 'Лангенберг (Langenberg)', text: '– исторический район с хорошо сохранившимся старым городом, фахверковыми домами и культурным наследием' },
                    ]
                },
                geography: {
                    title: "Рельеф и расположение",
                    items: [
                        { text: "Фельберт расположен на юго-востоке округа Меттман в холмистой зоне Бергишес-Ланд." },
                        { text: "Город имеет выраженный рельеф с перепадами высот и большим количеством лесных массивов." },
                        { bold: "География.", text: " Фельберт находится в переходной зоне между Рурской агломерацией и природными ландшафтами западной Германии." }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { bold: "Центр производства замков", text: " – Фельберт является одним из ключевых центров производства замков, ключей и систем безопасности в Европе. Здесь исторически сосредоточены десятки предприятий этой отрасли." },
                        { bold: "Город из трёх частей", text: " – современный Фельберт сформирован в 1975 году путём объединения трёх городов: Velbert, Neviges и Langenberg, каждый из которых сохраняет свою историческую идентичность." },
                        { bold: "Расположение между регионами", text: " – город находится на границе индустриальной Рурской области и природного региона Бергишес-Ланд, сочетая промышленную историю и зелёные ландшафты." },
                        { bold: "Зелёная среда", text: " – значительная часть территории города покрыта лесами и холмами, что делает Фельберт менее индустриальным по внешнему виду по сравнению с соседними городами Рура." },
                        { bold: "Экономика Mittelstand", text: " – экономика города основана преимущественно на средних и семейных предприятиях (так называемый Mittelstand), а не на крупных концернах." },
                        { bold: "Транспортная особенность", text: " – несмотря на близость к Руру, Фельберт исторически имеет менее развитое железнодорожное сообщение и в большей степени зависит от автобусной сети." }
                    ]
                },
                briefHistory: {
                    title: "История",
                    items: [
                        { text: "Территория современного Фельберта была заселена ещё в раннем Средневековье и входила в состав владений графов Берга, находясь на границе сельских и ремесленных поселений региона Бергишес-Ланд." },
                        { text: "Первые письменные упоминания отдельных поселений относятся к IX–XII векам, когда здесь существовали небольшие фермерские хозяйства, мельницы и церковные общины." },
                        { text: "В течение позднего Средневековья регион постепенно развивался как ремесленный центр, особенно в сфере обработки металла, что стало основой будущей экономики города." },
                        { text: "С XVI–XVIII веков в районе Фельберта активно развивалось производство замков, ключей и металлической фурнитуры, чему способствовали наличие воды для механизмов и доступ к сырью." },
                        { text: "В XIX веке началась индустриализация, и Фельберт превратился в один из ключевых центров замочной промышленности в Европе, где возникли сотни небольших фабрик и мастерских." },
                        { text: "Развитие железнодорожной сети во второй половине XIX века ускорило рост города и усилило его экономические связи с Рурской областью и Рейнским регионом." },
                        { text: "В начале XX века Фельберт уже был плотным индустриальным городом, ориентированным на экспорт металлических изделий и технических компонентов." },
                        { text: "Во время Второй мировой войны город не был полностью разрушен, однако подвергался авиационным налётам, в результате которых пострадали промышленные предприятия и часть жилой застройки, но разрушения были умеренными по сравнению с крупными городами Рура." },
                        { text: "После 1945 года Фельберт быстро восстановился благодаря спросу на промышленную продукцию и стал частью экономического восстановления Западной Германии (Wirtschaftswunder)." },
                        { text: "Современный Фельберт сформировался в 1975 году в результате объединения трёх ранее самостоятельных городов: Velbert, Neviges и Langenberg." },
                        { text: "Во второй половине XX века город постепенно снизил зависимость от тяжёлой промышленности и перешёл к более диверсифицированной экономике, включая машиностроение и высокоточную механику." },
                        { text: "Сегодня Фельберт сохраняет индустриальное наследие, но одновременно позиционируется как зелёный жилой город между Руром и Бергишес-Ландом." }
                    ]
                },
                meta: {
                    title: "Фельберт – город замков и промышленности в Северном Рейне-Вестфалии",
                    description: "Фельберт: крупный город округа Меттман, известный производством замков, музеем фурнитуры и зелёным ландшафтом Бергишес-Ланд.",
                    ogTitle: "Фельберт – город замков и металла",
                    ogDescription: "История и современность Фельберта: промышленность, культура и природа NRW.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/..."
                }
            },
            ua: {
                name: "Фельберт",
                subRegionName: "Меттман",
                desc: {
                    general: [{ text: "Фельберт (нім. Velbert) – велике місто в районі Меттман адміністративного округу Дюссельдорф, федеральна земля Північний Рейн-Вестфалія. Місто розташоване між Рурською областю та регіоном Бергішес-Ланд і історично відоме як центр виробництва замків і фурнітури." }],
                    population: [{ bold: "Населення", text: " становить близько 81 000 жителів (станом на 2024 рік)." }],
                    area: [
                        { bold: "Площа:", text: " близько 74,9 км². Місто розташоване на горбистій місцевості регіону Бергішес-Ланд, значну частину території займають ліси та зелені зони." },
                    ],
                    postalCode: [{ bold: "Поштові індекси:", text: " 42549–42555" }],
                    phone: [{ bold: "Телефонний код:", text: " +49 02051" }],
                    officialSite: [{ bold: "Офіційний сайт Фельберта", link: "https://www.velbert.de/" }],
                    culture: [{ bold: "Культурні особливості", text: " – місто відоме музеєм замків і фурнітури (Deutsches Schloss- und Beschlägemuseum), який відображає його багатовікову промислову спеціалізацію." }]
                },
                admin: {
                    title: 'Фельберт поділений на 3 міські райони (Stadtteile):',
                    isList: true,
                    items: [
                        { bold: 'Фельберт-Мітте (Velbert-Mitte)', text: '– центральний район міста з адміністративними установами, торговими зонами та сучасними житловими кварталами' },
                        { bold: 'Невігес (Neviges)', text: '– історичний район, відомий паломницьким собором Mariendom Neviges та старою забудовою' },
                        { bold: 'Лангенберг (Langenberg)', text: '– історичний район із добре збереженим старим містом, фахверковими будинками та культурною спадщиною' },
                    ]
                },
                geography: {
                    title: "Рельєф і розташування",
                    items: [
                        { text: "Фельберт розташований на південному сході округу Меттман у горбистій зоні Бергішес-Ланд." },
                        { text: "Місто має виражений рельєф із перепадами висот і великою кількістю лісових масивів." },
                        { bold: "Географія:", text: " Фельберт знаходиться в перехідній зоні між Рурською агломерацією та природними ландшафтами західної Німеччини." }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { bold: "Центр виробництва замків", text: " – Фельберт є одним із ключових центрів виробництва замків, ключів і систем безпеки в Європі. Тут історично зосереджені десятки підприємств цієї галузі." },
                        { bold: "Місто з трьох частин", text: " – сучасний Фельберт сформувався у 1975 році шляхом об’єднання трьох міст: Velbert, Neviges і Langenberg, кожне з яких зберігає свою історичну ідентичність." },
                        { bold: "Розташування між регіонами", text: " – місто знаходиться на межі індустріальної Рурської області та природного регіону Бергішес-Ланд, поєднуючи промислову історію та зелені ландшафти." },
                        { bold: "Зелене середовище", text: " – значна частина території міста вкрита лісами та пагорбами, що робить Фельберт менш індустріальним за виглядом порівняно з сусідніми містами Рура." },
                        { bold: "Економіка Mittelstand", text: " – економіка міста базується переважно на середніх і сімейних підприємствах (так званий Mittelstand), а не на великих концернах." },
                        { bold: "Транспортна особливість", text: " – незважаючи на близькість до Руру, Фельберт історично має менш розвинене залізничне сполучення та більшою мірою залежить від автобусної мережі." }
                    ]
                },
                briefHistory: {
                    title: "Історія",
                    items: [
                        { text: "Територія сучасного Фельберта була заселена ще в ранньому середньовіччі та входила до володінь графів Берга, перебуваючи на межі сільських і ремісничих поселень регіону Бергішес-Ланд." },
                        { text: "Перші письмові згадки окремих поселень датуються IX–XII століттями, коли тут існували невеликі фермерські господарства, млини та церковні громади." },
                        { text: "Упродовж пізнього середньовіччя регіон поступово розвивався як ремісничий центр, особливо у сфері обробки металу, що стало основою майбутньої економіки міста." },
                        { text: "З XVI–XVIII століть у районі Фельберта активно розвивалося виробництво замків, ключів і металевої фурнітури, чому сприяли наявність води для механізмів і доступ до сировини." },
                        { text: "У XIX столітті розпочалася індустріалізація, і Фельберт перетворився на один із ключових центрів замкової промисловості в Європі, де виникли сотні невеликих фабрик і майстерень." },
                        { text: "Розвиток залізничної мережі у другій половині XIX століття прискорив зростання міста та посилив його економічні зв’язки з Рурською областю та Рейнським регіоном." },
                        { text: "На початку XX століття Фельберт уже був щільним індустріальним містом, орієнтованим на експорт металевих виробів і технічних компонентів." },
                        { text: "Під час Другої світової війни місто не було повністю зруйноване, однак зазнавало авіаційних нальотів, унаслідок яких постраждали промислові підприємства та частина житлової забудови, проте руйнування були помірними порівняно з великими містами Рура." },
                        { text: "Після 1945 року Фельберт швидко відновився завдяки попиту на промислову продукцію та став частиною економічного відродження Західної Німеччини (Wirtschaftswunder)." },
                        { text: "Сучасний Фельберт сформувався у 1975 році в результаті об’єднання трьох раніше самостійних міст: Velbert, Neviges і Langenberg." },
                        { text: "У другій половині XX століття місто поступово зменшило залежність від важкої промисловості та перейшло до більш диверсифікованої економіки, включаючи машинобудування та високоточну механіку." },
                        { text: "Сьогодні Фельберт зберігає індустріальну спадщину, але водночас позиціонується як зелений житловий місто між Руром і Бергішес-Ландом." }
                    ]
                },
                meta: {
                    title: "Фельберт – місто замків і промисловості в Північному Рейні-Вестфалії",
                    description: "Фельберт: велике місто округу Меттман, відоме виробництвом замків, музеєм фурнітури та зеленими ландшафтами Бергішес-Ланд.",
                    ogTitle: "Фельберт – місто замків і металу",
                    ogDescription: "Історія та сучасність Фельберта: промисловість, культура і природа NRW.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/..."
                }
            },
            de: {
                name: "Velbert",
                subRegionName: "Mettmann",
                desc: {
                    general: [{ text: "Velbert ist eine größere Stadt im Kreis Mettmann im Regierungsbezirk Düsseldorf im Bundesland Nordrhein-Westfalen. Die Stadt liegt zwischen dem Ruhrgebiet und der Region Bergisches Land und ist historisch als Zentrum der Schloss- und Beschlagindustrie bekannt." }],
                    population: [{ bold: "Einwohnerzahl", text: " beträgt etwa 81.000 Einwohner (Stand: 2024)." }],
                    area: [
                        { bold: "Fläche:", text: " etwa 74,9 km². Die Stadt liegt in einer hügeligen Landschaft der Region Bergisches Land, große Teile des Gebiets bestehen aus Wäldern und Grünflächen." },
                    ],
                    postalCode: [{ bold: "Postleitzahlen:", text: " 42549–42555" }],
                    phone: [{ bold: "Vorwahl:", text: " +49 02051" }],
                    officialSite: [{ bold: "Offizielle Website von Velbert", link: "https://www.velbert.de/" }],
                    culture: [{ bold: "Kulturelle Besonderheiten", text: " – die Stadt ist bekannt für das Deutsche Schloss- und Beschlägemuseum, das ihre jahrhundertealte industrielle Spezialisierung widerspiegelt." }]
                },
                admin: {
                    title: 'Velbert ist in 3 Stadtteile gegliedert:',
                    isList: true,
                    items: [
                        { bold: 'Velbert-Mitte', text: '– der zentrale Stadtteil mit Verwaltungsgebäuden, Einkaufsbereichen und modernen Wohnvierteln' },
                        { bold: 'Neviges', text: '– ein historischer Stadtteil, bekannt für den Wallfahrtsdom Mariendom Neviges und die alte Bebauung' },
                        { bold: 'Langenberg', text: '– ein historischer Stadtteil mit gut erhaltener Altstadt, Fachwerkhäusern und kulturellem Erbe' },
                    ]
                },
                geography: {
                    title: "Relief und Lage",
                    items: [
                        { text: "Velbert liegt im Südosten des Kreises Mettmann in der hügeligen Landschaft des Bergischen Landes." },
                        { text: "Die Stadt weist ein ausgeprägtes Relief mit Höhenunterschieden und großen Waldflächen auf." },
                        { bold: "Geografie:", text: " Velbert befindet sich in einer Übergangszone zwischen der Ruhrmetropole und den naturnahen Landschaften Westdeutschlands." }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { bold: "Zentrum der Schlossindustrie", text: " – Velbert gehört zu den wichtigsten Standorten für die Herstellung von Schlössern, Schlüsseln und Sicherheitssystemen in Europa." },
                        { bold: "Stadt aus drei Teilen", text: " – das heutige Velbert entstand 1975 durch den Zusammenschluss der Städte Velbert, Neviges und Langenberg." },
                        { bold: "Lage zwischen Regionen", text: " – die Stadt liegt zwischen dem industriellen Ruhrgebiet und der naturnahen Region Bergisches Land." },
                        { bold: "Grüne Umgebung", text: " – große Teile des Stadtgebiets sind bewaldet und von Hügeln geprägt." },
                        { bold: "Mittelstand geprägt", text: " – die Wirtschaft basiert überwiegend auf mittelständischen und familiengeführten Unternehmen." },
                        { bold: "Verkehrsstruktur", text: " – trotz der Nähe zum Ruhrgebiet ist die Stadt weniger stark an den Schienenverkehr angebunden und stärker vom Busverkehr abhängig." }
                    ]
                },
                briefHistory: {
                    title: "Geschichte",
                    items: [
                        { text: "Das Gebiet des heutigen Velbert war bereits im frühen Mittelalter besiedelt und gehörte zum Herrschaftsgebiet der Grafen von Berg, an der Grenze zwischen ländlichen und handwerklich geprägten Siedlungen des Bergischen Landes." },
                        { text: "Erste schriftliche Erwähnungen einzelner Siedlungen stammen aus dem 9. bis 12. Jahrhundert, als hier kleine landwirtschaftliche Betriebe, Mühlen und kirchliche Gemeinschaften existierten." },
                        { text: "Im Laufe des Spätmittelalters entwickelte sich die Region zunehmend zu einem Zentrum des Handwerks, insbesondere der Metallverarbeitung, was die Grundlage für die spätere wirtschaftliche Entwicklung bildete." },
                        { text: "Vom 16. bis 18. Jahrhundert entwickelte sich im Raum Velbert intensiv die Herstellung von Schlössern, Schlüsseln und Metallbeschlägen, begünstigt durch Wasserkräfte und den Zugang zu Rohstoffen." },
                        { text: "Im 19. Jahrhundert setzte die Industrialisierung ein, und Velbert entwickelte sich zu einem der wichtigsten Zentren der Schlossindustrie in Europa, in dem zahlreiche kleine Fabriken und Werkstätten entstanden." },
                        { text: "Der Ausbau des Eisenbahnnetzes in der zweiten Hälfte des 19. Jahrhunderts beschleunigte das Wachstum der Stadt und stärkte ihre wirtschaftlichen Verbindungen zur Ruhrregion und zum Rheinland." },
                        { text: "Zu Beginn des 20. Jahrhunderts war Velbert bereits eine dicht besiedelte Industriestadt, die stark auf den Export von Metallwaren und technischen Komponenten ausgerichtet war." },
                        { text: "Während des Zweiten Weltkriegs wurde die Stadt nicht vollständig zerstört, war jedoch Ziel von Luftangriffen, bei denen Industrieanlagen und Teile der Wohnbebauung beschädigt wurden; die Zerstörungen blieben im Vergleich zu großen Städten des Ruhrgebiets jedoch moderat." },
                        { text: "Nach 1945 erholte sich Velbert schnell infolge der hohen Nachfrage nach Industrieprodukten und wurde Teil des wirtschaftlichen Aufschwungs der Bundesrepublik Deutschland (Wirtschaftswunder)." },
                        { text: "Das heutige Velbert entstand im Jahr 1975 durch den Zusammenschluss der zuvor selbstständigen Städte Velbert, Neviges und Langenberg im Zuge der Gebietsreform." },
                        { text: "In der zweiten Hälfte des 20. Jahrhunderts verringerte die Stadt ihre Abhängigkeit von der Schwerindustrie und entwickelte eine stärker diversifizierte Wirtschaft, unter anderem im Maschinenbau und in der Feinmechanik." },
                        { text: "Heute verbindet Velbert sein industrielles Erbe mit einer zunehmend als grün wahrgenommenen Wohnlage zwischen dem Ruhrgebiet und dem Bergischen Land." }
                    ]
                },
                meta: {
                    title: "Velbert – Stadt der Schlösser und Industrie in Nordrhein-Westfalen",
                    description: "Velbert: eine Stadt im Kreis Mettmann, bekannt für Schlossindustrie, Museum und grüne Landschaften im Bergischen Land.",
                    ogTitle: "Velbert – Stadt der Schlösser und Metallindustrie",
                    ogDescription: "Entdecken Sie Velbert: Geschichte, Industrie und Natur.",
                    ogImage: "https://upload.wikimedia.org/wikipedia/commons/..."
                }
            }
        }
    },

    // округ Köln 
    // край аахен
    {
        id: "monschau",
        path: "monschau",
        countryPath: "germany", regionPath: "nrw", districtPath: "koln", subRegionPath: "aachen",
        gerb: "Germany/nrw/koln/Aachen/monschau/gerb.png",
        coord: { lat: 50.5545, lng: 6.2408 },
        translations: {
            ru: {
                name: 'Моншау',
                subRegionName: "Аахен",
                desc: {
                    general: [{ text: 'Моншау (нем. Monschau) расположен в западной части Германии, в регионе Айфель земли Северный Рейн-Вестфалия, недалеко от границы с Бельгией. Город известен своей исторической архитектурой, уютными улочками с фахверковыми домами и живописными видами на реку Рур.' },],
                    population: [{ bold: 'Население', text: ' города составляет около 13 000 человек (по состоянию на 31 декабря 2024 года).' }],
                    area: [{ bold: 'Площадь:', text: ' муниципалитета составляет около 110 км². Значительная часть территории занята лесами, природными парками и реками.' }],
                    postalCode: [{ bold: 'Почтовые индексы:', text: ' 52156' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 2472' }],
                    officialSite: [{ bold: 'Официальный сайт Моншау', link: 'https://www.monschau.de/' }],
                    education: [{ bold: 'Система образования', text: ' – в городе есть начальные школы, одна средняя школа (Gesamtschule) и специализированные учебные заведения в округе. Для получения высшего образования жители обычно обращаются в университеты и высшие школы прикладных наук (Fachhochschule) соседних городов.' }],
                    culture: [{ bold: 'Культурные активности', text: ' – Моншау славится фестивалями, рождественскими ярмарками, выставками и мероприятиями на свежем воздухе. Туристов привлекают мастерские ремесленников, музеи и прогулки вдоль старинных улиц.' }],
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Моншау расположен в долине реки Рур и окружён холмами Айфеля. Рельеф пересечённый, улицы извилистые, перепады высот заметны в историческом центре. Средняя отметка города около 300 м над уровнем моря.' },
                        { bold: 'Природа и геология', text: 'Регион характеризуется породами девонского периода, многочисленными лесными массивами и реками, формирующими живописный ландшафт. Район богат на природные тропы и пешеходные маршруты.' },
                        { bold: 'Близость к границе', text: 'Моншау находится в непосредственной близости от границы с Бельгией, что исторически влияло на торговлю и культурные связи. Туристы могут легко совершать поездки и походы в соседние бельгийские города и лесные массивы Айфеля.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Моншау',
                    items: [
                        { bold: 'Анна Вирц (Anna Wirtz, 1901-1985)', text: ' – местная художница, работавшая в стиле натурализма, чьи работы часто изображали пейзажи Айфеля.' },
                        { bold: 'Йоханнес Кох (Johannes Koch, 1942-2010)', text: ' – историк региона, автор книг о культуре и ремёслах Моншау.' },
                        { bold: 'Генрих Штейн (Heinrich Stein, 1870-1952)', text: ' – мастер фахверковой архитектуры, принимавший участие в реставрации исторических домов Моншау.' },
                        { bold: 'Мария Кляйн (Maria Klein, 1912-1990)', text: ' – местная художница и ремесленница, известная изделиями из дерева и традиционной росписью фасадов фахверковых домов.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    items: [
                        { bold: 'Фахверковые дома', text: ' – исторический центр Моншау известен своими деревянными фахверковыми домами XVII-XVIII веков, которые сохраняются до сих пор.' },
                        { bold: 'Рождественская ярмарка', text: ' – ежегодное событие, собирающее туристов со всей Германии и соседних стран.' },
                        { bold: 'Малый, но туристически значимый город', text: ' – несмотря на небольшое население, Моншау привлекает множество туристов благодаря своей живописной архитектуре, музеям и природным маршрутам.' },
                        { bold: 'Природные маршруты', text: ' – Моншау является отправной точкой для многочисленных пешеходных и велосипедных маршрутов по холмам Айфеля, включая живописные тропы вдоль реки Рур и лесные тропы, которые привлекают любителей активного отдыха.' },
                        { bold: 'Заповедные зоны', text: ' – рядом с городом находятся природные парки и охраняемые территории, где можно наблюдать местную флору и фауну, устраивать пикники и короткие прогулки на свежем воздухе.' }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Моншау впервые упоминается в XI веке как небольшое саксонское поселение в долине Рура. Благодаря удобному расположению на торговых путях между Рейном и регионами Айфеля, город постепенно стал центром местной торговли и ремёсел.' },
                        { text: 'В средние века Моншау славился ткацкой промышленностью и производством шерсти: городские мастерские поставляли текстиль по всей Западной Германии. Для поддержки торговли строились складские помещения, мосты и узкие мощёные улицы, которые сохранились до наших дней.' },
                        { text: 'XVII–XVIII века были непростыми: город переживал военные конфликты и эпидемии, но историческая застройка в центре осталась почти нетронутой. Многие фахверковые дома того времени до сих пор активно используются, а их черепичные крыши и резные фасады стали символом Моншау.' },
                        { text: 'С XIX века город постепенно превращается в туристический центр: живописные улочки, старинные мосты и близость к природным тропам Айфеля привлекали отдыхающих. В этот период открываются гостиницы, кофейни и мастерские ремесленников, формируя туристическую инфраструктуру.' },
                        { text: 'В XX веке Моншау пережил события Второй мировой войны. Хотя город не был крупным промышленным центром, через регион проходили пути отступления немецкой армии и продвижения союзников. Город подвергался воздушным налётам и артиллерийским обстрелам, но большинство исторических зданий осталось неповреждённым. После войны Моншау быстро восстановился и развился как туристический центр, сохранив культурное наследие и старинную архитектуру.' },
                        { text: 'Сегодня Моншау сочетает богатую историю с природной красотой: старинная архитектура, музеи, мастерские ремесленников и окружающие леса делают город уникальным примером гармонии культуры и природы в Айфеле. Рождественские ярмарки, фестивали и туристические маршруты привлекают гостей круглый год.' }
                    ]
                },
                meta: {
                    title: "Моншау – исторический город с фахверковыми домами и природой Айфеля",
                    description: "Моншау: история, география, знаменитые жители и интересные факты о живописном городе Айфеля в земле Северный Рейн-Вестфалия.",
                    ogTitle: "Моншау – информация о городе",
                    ogDescription: "Подробная информация о Моншау: культура, история, выдающиеся личности и уникальная архитектура исторического центра.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Aachen/monschau/002.jpg"
                }
            },
            ua: {
                name: 'Моншау',
                subRegionName: "Аахен",
                desc: {
                    general: [{ text: 'Моншау (нім. Monschau) розташований у західній частині Німеччини, у регіоні Айфель землі Північний Рейн-Вестфалія, недалеко від кордону з Бельгією. Місто відоме своєю історичною архітектурою, затишними вуличками з фахверковими будинками та мальовничими видами на річку Рур.' }],
                    population: [{ bold: 'Населення', text: ' міста становить близько 13 000 осіб (станом на 31 грудня 2024 року).' }],
                    area: [{ bold: 'Площа:', text: ' муніципалітету становить близько 110 км². Значну частину території займають ліси, природні парки та річки.' }],
                    postalCode: [{ bold: 'Поштові індекси:', text: ' 52156' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 2472' }],
                    officialSite: [{ bold: 'Офіційний сайт Моншау', link: 'https://www.monschau.de/' }],
                    education: [{ bold: 'Освітня система', text: ' – у місті є початкові школи, одна середня школа (Gesamtschule) та спеціалізовані навчальні заклади в окрузі. Для отримання вищої освіти мешканці зазвичай звертаються до університетів та вищих шкіл прикладних наук (Fachhochschule) сусідніх міст.' }],
                    culture: [{ bold: 'Культурні активності', text: ' – Моншау славиться фестивалями, різдвяними ярмарками, виставками та заходами на свіжому повітрі. Туристів приваблюють майстерні ремісників, музеї та прогулянки старовинними вулицями.' }],
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Моншау розташований у долині річки Рур та оточений пагорбами Айфеля. Рельєф пересічений, вулиці звивисті, перепади висот помітні в історичному центрі. Середня відмітка міста близько 300 м над рівнем моря.' },
                        { bold: 'Природа та геологія', text: 'Регіон характеризується породами девонського періоду, численними лісовими масивами та річками, які формують мальовничий ландшафт. Район багатий на природні стежки та пішохідні маршрути.' },
                        { bold: 'Близькість до кордону', text: 'Моншау знаходиться в безпосередній близькості до кордону з Бельгією, що історично впливало на торгівлю та культурні зв’язки. Туристи можуть легко здійснювати поїздки та походи у сусідні бельгійські міста та лісові масиви Айфеля.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Моншау',
                    items: [
                        { bold: 'Анна Вірц (Anna Wirtz, 1901-1985)', text: ' – місцева художниця, що працювала у стилі натуралізму, чиї роботи часто зображували пейзажі Айфеля.' },
                        { bold: 'Йоганнес Кох (Johannes Koch, 1942-2010)', text: ' – історик регіону, автор книг про культуру та ремесла Моншау.' },
                        { bold: 'Генріх Штайн (Heinrich Stein, 1870-1952)', text: ' – майстер фахверкової архітектури, який брав участь у реставрації історичних будинків Моншау.' },
                        { bold: 'Марія Кляйн (Maria Klein, 1912-1990)', text: ' – місцева художниця та ремісниця, відома виробами з дерева та традиційним розписом фасадів фахверкових будинків.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    items: [
                        { bold: 'Фахверкові будинки', text: ' – історичний центр Моншау відомий своїми дерев’яними фахверковими будинками XVII-XVIII століть, які збереглися до наших днів.' },
                        { bold: 'Різдвяний ярмарок', text: ' – щорічна подія, що збирає туристів з усієї Німеччини та сусідніх країн.' },
                        { bold: 'Малий, але туристично значущий місто', text: ' – незважаючи на невелике населення, Моншау приваблює безліч туристів завдяки мальовничій архітектурі, музеям та природним маршрутам.' },
                        { bold: 'Природні маршрути', text: ' – Моншау є відправною точкою для численних пішохідних та велосипедних маршрутів по пагорбах Айфеля, включаючи мальовничі стежки вздовж річки Рур та лісові маршрути, що приваблюють любителів активного відпочинку.' },
                        { bold: 'Заповідні зони', text: ' – поруч із містом розташовані природні парки та охоронювані території, де можна спостерігати місцеву флору та фауну, влаштовувати пікніки та короткі прогулянки на свіжому повітрі.' }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Моншау вперше згадується у XI столітті як невелике саксонське поселення в долині Рура. Завдяки зручному розташуванню на торгових шляхах між Рейном та регіонами Айфеля, місто поступово стало центром місцевої торгівлі та ремесел.' },
                        { text: 'У середні віки Моншау славився ткацькою промисловістю та виробництвом вовни: міські майстерні постачали текстиль по всій Західній Німеччині. Для підтримки торгівлі будувалися складські приміщення, мости та вузькі мощені вулиці, які збереглися до наших днів.' },
                        { text: 'XVII–XVIII століття були непростими: місто переживало військові конфлікти та епідемії, але історична забудова в центрі залишилася майже непошкодженою. Багато фахверкових будинків того часу досі активно використовуються, а їх черепичні дахи та різьблені фасади стали символом Моншау.' },
                        { text: 'З XIX століття місто поступово перетворюється на туристичний центр: мальовничі вулички, старовинні мости та близькість до природних стежок Айфеля приваблювали відпочивальників. У цей період відкриваються готелі, кав’ярні та майстерні ремісників, формуючи туристичну інфраструктуру.' },
                        { text: 'У XX столітті Моншау пережив події Другої світової війни. Хоча місто не було великим промисловим центром, через регіон проходили шляхи відступу німецької армії та просування союзників. Місто піддавалося повітряним нальотам та артилерійським обстрілам, але більшість історичних будівель залишилася неушкодженою. Після війни Моншау швидко відновився та розвинувся як туристичний центр, зберігши культурну спадщину та старовинну архітектуру.' },
                        { text: 'Сьогодні Моншау поєднує багату історію з природною красою: старовинна архітектура, музеї, майстерні ремісників та навколишні ліси роблять місто унікальним прикладом гармонії культури та природи в Айфелі. Різдвяні ярмарки, фестивалі та туристичні маршрути приваблюють гостей цілий рік.' }
                    ]
                },
                meta: {
                    title: "Моншау – історичне місто з фахверковими будинками та природою Айфеля",
                    description: "Моншау: історія, географія, відомі жителі та цікаві факти про мальовниче місто Айфеля в землі Північний Рейн-Вестфалія.",
                    ogTitle: "Моншау – інформація про місто",
                    ogDescription: "Детальна інформація про Моншау: культура, історія, видатні особистості та унікальна архітектура історичного центру.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Aachen/monschau/002.jpg"
                }
            },
            de: {
                name: 'Monschau',
                subRegionName: "Aachen",
                desc: {
                    general: [{ text: 'Monschau (dt. Monschau) liegt im Westen Deutschlands, in der Region Eifel des Bundeslandes Nordrhein-Westfalen, in der Nähe der Grenze zu Belgien. Die Stadt ist bekannt für ihre historische Architektur, gemütliche Straßen mit Fachwerkhäusern und malerische Ausblicke auf die Rur.' }],
                    population: [{ bold: 'Einwohnerzahl', text: ' der Stadt beträgt etwa 13.000 Personen (Stand 31. Dezember 2024).' }],
                    area: [{ bold: 'Fläche:', text: ' der Gemeinde beträgt etwa 110 km². Ein großer Teil der Fläche ist von Wäldern, Naturparks und Flüssen bedeckt.' }],
                    postalCode: [{ bold: 'Postleitzahlen:', text: ' 52156' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 2472' }],
                    officialSite: [{ bold: 'Offizielle Webseite von Monschau', link: 'https://www.monschau.de/' }],
                    education: [{ bold: 'Bildungssystem', text: ' – In der Stadt gibt es Grundschulen, eine Gesamtschule und spezialisierte Bildungseinrichtungen im Kreis. Für ein Hochschulstudium wenden sich die Bewohner in der Regel an Universitäten und Fachhochschulen der Nachbarstädte.' }],
                    culture: [{ bold: 'Kulturelle Aktivitäten', text: ' – Monschau ist bekannt für Festivals, Weihnachtsmärkte, Ausstellungen und Veranstaltungen im Freien. Touristen werden von Handwerkswerkstätten, Museen und Spaziergängen durch die historischen Straßen angezogen.' }],
                },
                geography: {
                    title: 'Geografie',
                    items: [
                        { text: 'Monschau liegt im Tal der Rur und ist von den Hügeln der Eifel umgeben. Das Gelände ist hügelig, die Straßen sind verwinkelt, und die Höhenunterschiede im historischen Zentrum sind deutlich sichtbar. Die durchschnittliche Höhe der Stadt beträgt etwa 300 m über dem Meeresspiegel.' },
                        { bold: 'Natur und Geologie', text: 'Die Region ist durch Gesteine des Devon-Zeitalters, zahlreiche Waldgebiete und Flüsse geprägt, die eine malerische Landschaft bilden. Das Gebiet ist reich an Naturpfaden und Wanderwegen.' },
                        { bold: 'Grenznähe', text: 'Monschau liegt in unmittelbarer Nähe zur Grenze zu Belgien, was historisch den Handel und kulturelle Verbindungen beeinflusste. Touristen können leicht Ausflüge und Wanderungen in die benachbarten belgischen Städte und Waldgebiete der Eifel unternehmen.' }
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Monschau',
                    items: [
                        { bold: 'Anna Wirtz (1901-1985)', text: ' – lokale Künstlerin, die im Stil des Naturalismus arbeitete und deren Werke oft Landschaften der Eifel darstellen.' },
                        { bold: 'Johannes Koch (1942-2010)', text: ' – Regionalhistoriker, Autor von Büchern über die Kultur und das Handwerk von Monschau.' },
                        { bold: 'Heinrich Stein (1870-1952)', text: ' – Fachwerkarchitekt, der an der Restaurierung historischer Häuser in Monschau beteiligt war.' },
                        { bold: 'Maria Klein (1912-1990)', text: ' – lokale Künstlerin und Handwerkerin, bekannt für Holzarbeiten und traditionelle Fassadenmalerei an Fachwerkhäusern.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    items: [
                        { bold: 'Fachwerkhäuser', text: ' – Das historische Zentrum von Monschau ist bekannt für seine hölzernen Fachwerkhäuser aus dem 17.–18. Jahrhundert, die bis heute erhalten sind.' },
                        { bold: 'Weihnachtsmarkt', text: ' – Jährliches Ereignis, das Touristen aus ganz Deutschland und den Nachbarländern anzieht.' },
                        { bold: 'Kleine, aber touristisch bedeutende Stadt', text: ' – Trotz der geringen Einwohnerzahl zieht Monschau viele Touristen durch seine malerische Architektur, Museen und Naturwege an.' },
                        { bold: 'Naturpfade', text: ' – Monschau ist Ausgangspunkt zahlreicher Wander- und Radwege durch die Hügel der Eifel, einschließlich malerischer Pfade entlang der Rur und Waldwege, die Naturliebhaber anziehen.' },
                        { bold: 'Naturschutzgebiete', text: ' – In der Nähe der Stadt befinden sich Naturparks und geschützte Gebiete, in denen man die lokale Flora und Fauna beobachten, Picknicks veranstalten und kurze Spaziergänge an der frischen Luft unternehmen kann.' }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Monschau wird erstmals im 11. Jahrhundert als kleines sächsisches Dorf im Rurtal erwähnt. Aufgrund der günstigen Lage an Handelswegen zwischen dem Rhein und den Regionen der Eifel entwickelte sich die Stadt allmählich zum Zentrum des lokalen Handels und Handwerks.' },
                        { text: 'Im Mittelalter war Monschau für seine Weberei und Wollproduktion bekannt: Die städtischen Werkstätten lieferten Textilien in ganz Westdeutschland. Zur Unterstützung des Handels wurden Lagerhäuser, Brücken und enge gepflasterte Straßen gebaut, die bis heute erhalten sind.' },
                        { text: 'Die Jahrhunderte XVII–XVIII waren schwierig: Die Stadt erlebte militärische Konflikte und Epidemien, aber die historische Bebauung im Zentrum blieb nahezu unversehrt. Viele Fachwerkhäuser aus dieser Zeit werden noch aktiv genutzt, und ihre Ziegeldächer und geschnitzten Fassaden sind ein Symbol für Monschau.' },
                        { text: 'Ab dem 19. Jahrhundert verwandelt sich die Stadt allmählich in ein Touristenzentrum: malerische Gassen, alte Brücken und die Nähe zu Naturpfaden der Eifel zogen Urlauber an. In dieser Zeit eröffneten Hotels, Cafés und Handwerkswerkstätten, wodurch die touristische Infrastruktur entstand.' },
                        { text: 'Im 20. Jahrhundert erlebte Monschau die Ereignisse des Zweiten Weltkriegs. Obwohl die Stadt kein bedeutendes Industriezentrum war, führten Truppenrückzüge der deutschen Armee und das Vorrücken der Alliierten durch die Region. Die Stadt wurde Luftangriffen und Artilleriebeschuss ausgesetzt, aber die meisten historischen Gebäude blieben unbeschädigt. Nach dem Krieg erholte sich Monschau schnell und entwickelte sich als Touristenzentrum weiter, wobei das kulturelle Erbe und die historische Architektur erhalten blieben.' },
                        { text: 'Heute verbindet Monschau reiche Geschichte mit natürlicher Schönheit: historische Architektur, Museen, Handwerkswerkstätten und die umliegenden Wälder machen die Stadt zu einem einzigartigen Beispiel für die Harmonie von Kultur und Natur in der Eifel. Weihnachtsmärkte, Festivals und Wanderwege ziehen das ganze Jahr über Besucher an.' }
                    ]
                },
                meta: {
                    title: "Monschau – historische Stadt mit Fachwerkhäusern und Natur der Eifel",
                    description: "Monschau: Geschichte, Geografie, bekannte Bewohner und interessante Fakten über die malerische Stadt in der Eifel, Bundesland Nordrhein-Westfalen.",
                    ogTitle: "Monschau – Informationen über die Stadt",
                    ogDescription: "Detaillierte Informationen über Monschau: Kultur, Geschichte, herausragende Persönlichkeiten und die einzigartige Architektur des historischen Zentrums.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Aachen/monschau/002.jpg"
                }
            }
        }
    },

    // Rhein-Erft-Kreis
    {
        id: "bruhl",
        path: "bruhl",
        countryPath: "germany", regionPath: "nrw", districtPath: "koln", subRegionPath: "rhein_erft",
        gerb: "Germany/nrw/koln/Rhein-Erft-Kreis/bruhl/gerb.png",
        coord: { lat: 50.8293, lng: 6.9050 },
        translations: {
            ru: {
                name: 'Брюль',
                subRegionName: "Рейн-Эрфт",
                desc: {
                    general: [
                        { text: 'Город в земле Северный Рейн-Вестфалия' }
                    ],
                    population: [
                        { bold: 'Население:' },
                        { text: ' 44 260 человек (2010)' }
                    ],
                    area: [
                        { bold: 'Площадь:' },
                        { text: ' 36,12 км²' }
                    ],
                    postalCode: [
                        { bold: 'Почтовый индекс:' },
                        { text: ' 50321' }
                    ],
                    phone: [
                        { bold: 'Телефонный код:' },
                        { text: ' +49 2232' }
                    ],
                    officialSite: [
                        { bold: 'Официальный сайт Брюля', link: 'https://www.bruehl.de' }
                    ],
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    items: [
                        { text: 'Брюль называют "Bruhl bei Köln", так как город находится всего в 15 км от Кёльна.' },
                        { text: 'Лёгкая доступность: трамвай №18 и пригородные поезда связывают Брюль с Кёльном и Бонном.' },
                        { text: 'Фантазиаленд – один из крупнейших парков Германии, расположен в Брюле.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди',
                    items: [
                        { bold: 'Штеффи Граф', text: ' знаменитая теннисистка, родилась в Брюле. В 1988 году стала почётным гражданином города.' },
                        { bold: 'Макс Эрнст', text: ' сюрреалистический художник, родившийся в Брюле.' }
                    ]
                },
                briefHistory: {
                    title: 'Краткая история',
                    items: [
                        { text: 'Первое упоминание о Брюле датируется 1180 годом, когда архиепископ Кёльнский Филипп фон Хайнсберг построил манор.' },
                        { text: 'В 1285 году город получил права города от архиепископа Зигфрида фон Вестербурга.' },
                        { text: 'С 1469 года Брюль стал официальной резиденцией архиепископов Кёльнских на более чем 150 лет.' }
                    ]
                },
                meta: {
                    title: "Брюль – город в земле Северный Рейн-Вестфалия",
                    description: "Брюль: история, достопримечательности, известные люди и интересные факты города.",
                    ogTitle: "Брюль – информация о городе",
                    ogDescription: "Подробная информация о Брюле: культура, история, знаменитые жители и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Erft-Kreis/bruhl/bruhel_palaces/001.jpg"
                }
            },
            ua: {
                name: 'Брюль',
                subRegionName: "Рейн-Ерфт",
                desc: {
                    general: [
                        { text: 'Місто в землі Північний Рейн-Вестфалія' }
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' 44 260 осіб (2010)' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' 36,12 км²' }
                    ],
                    postalCode: [
                        { bold: 'Поштовий індекс:' },
                        { text: ' 50321' }
                    ],
                    phone: [
                        { bold: 'Телефонний код:' },
                        { text: ' +49 2232' }
                    ],
                    officialSite: [
                        { bold: 'Офіційний сайт Брюля', link: 'https://www.bruehl.de' }
                    ],
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    items: [
                        { text: 'Брюль називають "Bruhl bei Köln", оскільки місто розташоване всього за 15 км від Кельна.' },
                        { text: 'Зручна доступність: трамвай №18 та приміські потяги з’єднують Брюль із Кельном і Бонном.' },
                        { text: 'Фантазіяленд – один із найбільших парків Німеччини, розташований у Брюлі.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди',
                    items: [
                        { bold: 'Штеффі Граф', text: ' знаменита тенісистка, народилася у Брюлі. У 1988 році стала почесною громадянкою міста.' },
                        { bold: 'Макс Ернст', text: ' сюрреалістичний художник, який народився у Брюлі.' }
                    ]
                },
                briefHistory: {
                    title: 'Коротка історія',
                    items: [
                        { text: 'Перша згадка про Брюль датується 1180 роком, коли кельнський архієпископ Філіп фон Хайнсберг збудував маєток.' },
                        { text: 'У 1285 році місто отримало міські права від архієпископа Зігфріда фон Вестербурга.' },
                        { text: 'З 1469 року Брюль став офіційною резиденцією кельнських архієпископів більш ніж на 150 років.' }
                    ]
                },
                meta: {
                    title: "Брюль – місто у землі Північний Рейн-Вестфалія",
                    description: "Брюль: історія, визначні місця, відомі люди та цікаві факти міста.",
                    ogTitle: "Брюль – інформація про місто",
                    ogDescription: "Детальна інформація про Брюль: культура, історія, відомі мешканці та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Erft-Kreis/bruhl/bruhel_palaces/001.jpg"
                }
            },
            de: {
                name: 'Brühl',
                subRegionName: "Rhein-Erft",
                desc: {
                    general: [
                        { text: 'Stadt im Bundesland Nordrhein-Westfalen' }
                    ],
                    population: [
                        { bold: 'Einwohnerzahl:' },
                        { text: ' 44.260 Menschen (2010)' }
                    ],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' 36,12 km²' }
                    ],
                    postalCode: [
                        { bold: 'Postleitzahl:' },
                        { text: ' 50321' }
                    ],
                    phone: [
                        { bold: 'Telefonvorwahl:' },
                        { text: ' +49 2232' }
                    ],
                    officialSite: [
                        { bold: 'Offizielle Website von Brühl', link: 'https://www.bruehl.de' }
                    ],
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    items: [
                        { text: 'Brühl wird „Brühl bei Köln“ genannt, da die Stadt nur 15 km von Köln entfernt liegt.' },
                        { text: 'Gute Erreichbarkeit: Die Straßenbahn Nr. 18 und Regionalzüge verbinden Brühl mit Köln und Bonn.' },
                        { text: 'Phantasialand – einer der größten Freizeitparks Deutschlands, befindet sich in Brühl.' }
                    ]
                },
                notablePeople: {
                    title: 'Bekannte Persönlichkeiten',
                    items: [
                        { bold: 'Steffi Graf', text: ' berühmte Tennisspielerin, geboren in Brühl. 1988 wurde sie Ehrenbürgerin der Stadt.' },
                        { bold: 'Max Ernst', text: ' surrealistischer Maler, der in Brühl geboren wurde.' }
                    ]
                },
                briefHistory: {
                    title: 'Kurze Geschichte',
                    items: [
                        { text: 'Die erste Erwähnung von Brühl stammt aus dem Jahr 1180, als der Kölner Erzbischof Philipp von Heinsberg ein Herrenhaus errichtete.' },
                        { text: 'Im Jahr 1285 erhielt die Stadt Stadtrechte vom Erzbischof Siegfried von Westerburg.' },
                        { text: 'Ab 1469 wurde Brühl für mehr als 150 Jahre zur offiziellen Residenz der Kölner Erzbischöfe.' }
                    ]
                },
                meta: {
                    title: "Brühl – Stadt in Nordrhein-Westfalen",
                    description: "Brühl: Geschichte, Sehenswürdigkeiten, berühmte Persönlichkeiten und interessante Fakten der Stadt.",
                    ogTitle: "Brühl – Informationen zur Stadt",
                    ogDescription: "Detaillierte Informationen über Brühl: Kultur, Geschichte, berühmte Einwohner und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Erft-Kreis/bruhl/bruhel_palaces/001.jpg"
                }
            }
        }
    },
    {
        id: "frechen",
        path: "frechen",
        countryPath: "germany", regionPath: "nrw", districtPath: "koln", subRegionPath: "rhein_erft",
        gerb: "Germany/nrw/koln/Rhein-Erft-Kreis/frechen/gerb.png",
        coord: { lat: 50.9167, lng: 6.8167 },
        translations: {
            ru: {
                name: 'Фрехен',
                subRegionName: "Рейн-Эрфт",
                desc: {
                    general: [
                        { text: 'Фрехен – город в земле Северный Рейн-Вестфалия, входящий в район Рейн-Эрфт и расположенный всего в 10 км к западу от Кёльна.' },
                        { text: ' Город известен своим историческим гончарным производством, промышленным развитием и близостью к Рейнско-Рурскому региону.' }
                    ],
                    population: [{ bold: 'Население:', text: ' около 52 000 человек (2025)' }],
                    area: [
                        { bold: 'Площадь:', text: ' примерно 45,1 км²' },
                        { text: " Город административно делится на следующие районы: Фрехен-центр (Frechen), Бахем (Bachem), Бушбель (Buschbell), Хаббельрат (Habbelrath), Кёнигсдорф (Königsdorf), Грёфрат (Grefrath) и Хюхельн (Hücheln)." }
                    ],
                    postalCode: [{ bold: 'Почтовый индекс:', text: ' 50226' }],
                    phone: [{ bold: 'Телефонный код:', text: ' +49 02234' }],
                    officialSite: [{ bold: 'Официальный сайт Фрехена', link: 'https://www.frechen.de/' }]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Фрехен расположен на западной окраине Кёльна и является частью агломерации Рейнско-Рурского региона.' },
                        { text: 'Высота над уровнем моря варьируется от 58 до 158 метров, город находится на склонах возвышенности Вилле (Ville).' },
                        { text: 'Через город проходят важные транспортные артерии: автомагистрали A1, A4 и A61, что обеспечивает хорошую связь с Кёльном, Бонном и Аахеном.' },
                        { text: 'Город окружён зелёными зонами и небольшими лесами, а также старыми промышленными карьерами, некоторые из которых превращены в зоны отдыха.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Фрехена',
                    isList: true,
                    items: [
                        { bold: 'Айо', text: ' – немецко-нигерийская певица и автор песен, родившаяся во Фрехене.' },
                        { bold: 'Кирстен Болм', text: ' – легкоатлетка, чемпионка Германии в беге с барьерами.' },
                        { bold: 'Уэйн Карпендейл', text: ' – актёр и телеведущий.' },
                        { bold: 'Пьер Фогель', text: ' – известный исламский проповедник, выросший во Фрехене.' },
                        { bold: 'Ханна Мойль', text: ' – профессиональная скалолазка, представительница Германии на международных соревнованиях.' },
                        { bold: 'Марсель Хеллер', text: ' – немецкий футболист, игравший в Бундеслиге.' },
                        { bold: 'Зоня Бертрам', text: ' – актриса театра и телевидения.' }
                    ]
                },
                interestingFacts: {
                    title: "Интересные факты",
                    isList: true,
                    items: [
                        { bold: "Город керамики", text: " – Фрехен исторически известен как один из центров производства керамики и каменной посуды (Steinzeug) в Европе. Изделия из Фрехена экспортировались в разные страны ещё в раннее Новое время." },
                        { bold: "Бартманские кувшины", text: " – именно здесь производились знаменитые «Bartmannkrüge» (кувшины с лицом бородатого мужчины), которые стали символом рейнской керамики XVI–XVII веков." },
                        { bold: "Добыча бурого угля", text: " – в XX веке регион активно развивался благодаря добыче бурого угля (Braunkohle), что оказало значительное влияние на экономику и ландшафт города." },
                        { bold: "Переход к рекультивации", text: " – после сокращения добычи угля бывшие карьеры были частично рекультивированы и превращены в зелёные зоны и места отдыха." },
                        { bold: "Близость к Кёльну", text: " – Фрехен расположен непосредственно на западной границе Кёльна и фактически входит в его агломерацию, что делает город привлекательным для проживания при работе в мегаполисе." },
                        { bold: "Транспортная доступность", text: " – город имеет хорошее сообщение с Кёльном благодаря линии Stadtbahn (трамвай-метро), что обеспечивает быстрый доступ к центру города." },
                        { bold: "Современная экономика", text: " – сегодня Фрехен сочетает промышленное наследие с развитием логистики, торговли и сервисного сектора." }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Фрехен впервые упоминается в документах в 877 году, что делает его одним из старейших населённых пунктов региона.' },
                        { text: 'В средневековье, в 1257 году, в Фрехене произошло сражение между Конрадом фон Хохштаденом (архиепископом Кёльна) и жителями города. Это показывает, что Фрехен уже тогда был важным местом с политическим и стратегическим значением.' },
                        { text: 'С XVI века город стал известен благодаря развитию гончарного производства – особенно производству «бородатых кувшинов» (Bartmannskrüge), которые экспортировались по всей Европе.' },
                        { text: 'В XVIII–XIX веках в окрестностях Фрехена началась добыча бурого угля, что превратило город в промышленный центр.' },
                        { text: 'После Второй мировой войны Фрехен активно развивался как промышленный и жилой пригород Кёльна.' },
                        { text: '2 сентября 1951 года Фрехен получил официальный статус города, после чего к нему были присоединены деревни Бахем, Хюхельн и Бушбелль.' },
                        { text: 'В 1975 году в результате административной реформы к Фрехену были присоединены соседние посёлки Грефрат, Хаббелрат, Кёнигсдорф и Нойфраймерсдорф.' },
                        { text: 'Сегодня Фрехен – современный город с историческим центром, музеем керамики и развитой инфраструктурой, популярный среди жителей Кёльна как место для жизни и отдыха.' }
                    ]
                },
                meta: {
                    title: "Фрехен – город керамики у западных ворот Кёльна",
                    description: "Фрехен: история, география, знаменитые жители и интересные факты о городе керамики в земле Северный Рейн-Вестфалия.",
                    ogTitle: "Фрехен – информация о городе",
                    ogDescription: "Подробная информация о Фрехене: культура, история, знаменитые жители и интересные факты.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Erft-Kreis/frechen/johann_schmitz_platz_frechen/006.jpg"
                }
            },
            ua: {
                name: 'Фрехен',
                subRegionName: "Рейн-Ерфт",
                desc: {
                    general: [
                        { text: 'Фрехен – місто в землі Північний Рейн-Вестфалія, що входить до району Рейн-Ерфт і розташоване всього за 10 км на захід від Кельна.' },
                        { text: ' Місто відоме своєю історією гончарного виробництва, промисловим розвитком і близькістю до Рейнсько-Рурського регіону.' }
                    ],
                    population: [{ bold: 'Населення:', text: ' близько 52 000 осіб (2025)' }],
                    area: [
                        { bold: 'Площа:', text: ' приблизно 45,1 км²' },
                        { text: " Місто адміністративно поділяється на такі райони: центральний Фрехен (Frechen), Бахем (Bachem), Бушбель (Buschbell), Хаббельрат (Habbelrath), Кенігсдорф (Königsdorf), Грефрат (Grefrath) і Хюхельн (Hücheln)." }
                    ],
                    postalCode: [{ bold: 'Поштовий індекс:', text: ' 50226' }],
                    phone: [{ bold: 'Телефонний код:', text: ' +49 02234' }],
                    officialSite: [{ bold: 'Офіційний сайт Фрехена', link: 'https://www.frechen.de/' }]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Фрехен розташований на західній околиці Кельна і є частиною агломерації Рейнсько-Рурського регіону.' },
                        { text: 'Висота над рівнем моря коливається від 58 до 158 метрів, місто лежить на схилах височини Вілле (Ville).' },
                        { text: 'Через місто проходять важливі транспортні магістралі: автомагістралі A1, A4 та A61, що забезпечує добрий зв’язок із Кельном, Бонном і Аахеном.' },
                        { text: 'Місто оточене зеленими зонами та невеликими лісами, а також колишніми промисловими кар’єрами, деякі з яких перетворено на зони відпочинку.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Фрехена',
                    isList: true,
                    items: [
                        { bold: 'Айо', text: ' – німецько-нігерійська співачка та авторка пісень, народжена у Фрехені.' },
                        { bold: 'Кірстен Болм', text: ' – легкоатлетка, чемпіонка Німеччини з бігу з бар’єрами.' },
                        { bold: 'Уейн Карпендейл', text: ' – актор і телеведучий.' },
                        { bold: 'П’єр Фогель', text: ' – відомий ісламський проповідник, який виріс у Фрехені.' },
                        { bold: 'Ганна Мойль', text: ' – професійна скелелазка, представниця Німеччини на міжнародних змаганнях.' },
                        { bold: 'Марсель Геллер', text: ' – німецький футболіст, який грав у Бундеслізі.' },
                        { bold: 'Зоня Бертрам', text: ' – акторка театру та телебачення.' }
                    ]
                },
                interestingFacts: {
                    title: "Цікаві факти",
                    isList: true,
                    items: [
                        { bold: "Місто кераміки", text: " – Фрехен історично відомий як один із центрів виробництва кераміки та кам’яного посуду (Steinzeug) в Європі. Вироби з Фрехена експортувалися до різних країн ще в ранній новий час." },
                        { bold: "Бартманські глечики", text: " – саме тут виготовляли знамениті «Bartmannkrüge» (глечики з обличчям бородатого чоловіка), які стали символом рейнської кераміки XVI–XVII століть." },
                        { bold: "Видобуток бурого вугілля", text: " – у XX столітті регіон активно розвивався завдяки видобутку бурого вугілля (Braunkohle), що суттєво вплинуло на економіку та ландшафт міста." },
                        { bold: "Перехід до рекультивації", text: " – після скорочення видобутку вугілля колишні кар’єри були частково рекультивовані та перетворені на зелені зони і місця відпочинку." },
                        { bold: "Близькість до Кельна", text: " – Фрехен розташований безпосередньо на західному кордоні Кельна і фактично входить до його агломерації, що робить місто привабливим для проживання при роботі в мегаполісі." },
                        { bold: "Транспортна доступність", text: " – місто має хороше сполучення з Кельном завдяки лінії міської залізниці (Stadtbahn), що забезпечує швидкий доступ до центру міста." },
                        { bold: "Сучасна економіка", text: " – сьогодні Фрехен поєднує промислову спадщину з розвитком логістики, торгівлі та сфери послуг." }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Фрехен уперше згадується в документах у 877 році, що робить його одним із найстаріших населених пунктів регіону.' },
                        { text: 'У середньовіччі, у 1257 році, у Фрехені відбулася битва між Конрадом фон Хохштаденом (архієпископом Кельна) та мешканцями міста. Це показує, що Фрехен уже тоді був важливим місцем із політичним і стратегічним значенням.' },
                        { text: 'Із XVI століття місто стало відомим завдяки розвитку гончарного виробництва – особливо виготовленню «бородатих глечиків» (Bartmannskrüge), які експортувалися по всій Європі.' },
                        { text: 'У XVIII–XIX століттях у передмістях Фрехена почалася розробка бурого вугілля, що перетворило місто на промисловий центр.' },
                        { text: 'Після Другої світової війни Фрехен активно розвивався як промислове та житлове передмістя Кельна.' },
                        { text: '2 вересня 1951 року Фрехен отримав офіційний статус міста, після чого до нього були приєднані села Бахем, Хюхельн та Бушбель.' },
                        { text: 'У 1975 році в результаті адміністративної реформи до Фрехена приєднано сусідні поселення Грефрат, Хаббелрат, Кенігсдорф і Нойфраймерсдорф.' },
                        { text: 'Сьогодні Фрехен – сучасне місто з історичним центром, музеєм кераміки та розвиненою інфраструктурою, популярне серед мешканців Кельна як місце для життя й відпочинку.' }
                    ]
                },
                meta: {
                    title: "Фрехен – місто кераміки біля західних воріт Кельна",
                    description: "Фрехен: історія, географія, відомі мешканці та цікаві факти про місто кераміки в землі Північний Рейн-Вестфалія.",
                    ogTitle: "Фрехен – інформація про місто",
                    ogDescription: "Детальна інформація про Фрехен: культура, історія, відомі жителі та цікаві факти.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Erft-Kreis/frechen/johann_schmitz_platz_frechen/006.jpg"
                }
            },
            de: {
                name: 'Frechen',
                subRegionName: "Rhein-Erft",
                desc: {
                    general: [
                        { text: 'Frechen ist eine Stadt im Bundesland Nordrhein-Westfalen, die zum Rhein-Erft-Kreis gehört und nur etwa 10 km westlich von Köln liegt.' },
                        { text: 'Die Stadt ist bekannt für ihre historische Töpfertradition, industrielle Entwicklung und ihre Nähe zur Rhein-Ruhr-Region.' }
                    ],
                    population: [{ bold: 'Einwohnerzahl:', text: ' etwa 52.000 Menschen (2025)' }],
                    area: [
                        { bold: 'Fläche:', text: ' ca. 45,1 km²' },
                        { text: " Die Stadt ist administrativ in folgende Stadtteile gegliedert: Frechen-Zentrum (Frechen), Bachem, Buschbell, Habbelrath, Königsdorf, Grefrath und Hücheln." }
                    ],
                    postalCode: [{ bold: 'Postleitzahl:', text: ' 50226' }],
                    phone: [{ bold: 'Telefonvorwahl:', text: ' +49 02234' }],
                    officialSite: [{ bold: 'Offizielle Website der Stadt Frechen', link: 'https://www.frechen.de/' }]
                },
                geography: {
                    title: 'Geografie',
                    items: [
                        { text: 'Frechen liegt am westlichen Stadtrand von Köln und ist Teil der Metropolregion Rhein-Ruhr.' },
                        { text: 'Die Höhe über dem Meeresspiegel variiert zwischen 58 und 158 Metern, die Stadt befindet sich an den Hängen der Ville-Höhen.' },
                        { text: 'Wichtige Verkehrsachsen wie die Autobahnen A1, A4 und A61 verlaufen in der Nähe und verbinden Frechen mit Köln, Bonn und Aachen.' },
                        { text: 'Die Stadt ist von Grünflächen, kleinen Wäldern und ehemaligen Industriegruben umgeben, die teilweise zu Naherholungsgebieten umgestaltet wurden.' }
                    ]
                },
                notablePeople: {
                    title: 'Bekannte Persönlichkeiten aus Frechen',
                    isList: true,
                    items: [
                        { bold: 'Ayo', text: ' – deutsch-nigerianische Sängerin und Songwriterin, geboren in Frechen.' },
                        { bold: 'Kirsten Bolm', text: ' – Leichtathletin und deutsche Meisterin im Hürdenlauf.' },
                        { bold: 'Wayne Carpendale', text: ' – Schauspieler und Fernsehmoderator.' },
                        { bold: 'Pierre Vogel', text: ' – bekannter islamischer Prediger, aufgewachsen in Frechen.' },
                        { bold: 'Hannah Meul', text: ' – Profikletterin und Mitglied des deutschen Nationalteams.' },
                        { bold: 'Marcel Heller', text: ' – deutscher Fußballspieler, der in der Bundesliga aktiv war.' },
                        { bold: 'Sonja Bertram', text: ' – Theater- und Fernsehschauspielerin.' }
                    ]
                },
                interestingFacts: {
                    title: "Interessante Fakten",
                    isList: true,
                    items: [
                        { bold: "Stadt der Keramik", text: " – Frechen ist historisch als eines der wichtigsten Zentren der Keramik- und Steinzeugproduktion in Europa bekannt. Produkte aus Frechen wurden bereits in der frühen Neuzeit in viele Länder exportiert." },
                        { bold: "Bärtmannkrüge", text: " – hier wurden die berühmten „Bartmannkrüge“ hergestellt, Krüge mit einem bärtigen Gesicht, die im 16. und 17. Jahrhundert zu einem Symbol der rheinischen Keramik wurden." },
                        { bold: "Braunkohleabbau", text: " – im 20. Jahrhundert entwickelte sich die Region stark durch den Braunkohleabbau, der die Wirtschaft und die Landschaft der Stadt erheblich beeinflusste." },
                        { bold: "Übergang zur Rekultivierung", text: " – nach dem Rückgang des Braunkohleabbaus wurden ehemalige Tagebaue teilweise rekultiviert und in Grünflächen sowie Erholungsgebiete umgewandelt." },
                        { bold: "Nähe zu Köln", text: " – Frechen liegt direkt an der westlichen Grenze von Köln und gehört faktisch zur Kölner Agglomeration, was die Stadt für Pendler sehr attraktiv macht." },
                        { bold: "Verkehrsanbindung", text: " – die Stadt ist gut an Köln angebunden durch die Stadtbahnlinie, die eine schnelle Verbindung ins Stadtzentrum ermöglicht." },
                        { bold: "Moderne Wirtschaft", text: " – heute verbindet Frechen sein industrielles Erbe mit Logistik, Handel und Dienstleistungen." }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Frechen wurde erstmals im Jahr 877 urkundlich erwähnt und ist damit einer der ältesten Orte der Region.' },
                        { text: 'Im Mittelalter, im Jahr 1257, fand in Frechen eine Schlacht zwischen Konrad von Hochstaden (Erzbischof von Köln) und den Bewohnern der Stadt statt. Dies zeigt, dass Frechen schon damals ein wichtiger Ort mit politischer und strategischer Bedeutung war.' },
                        { text: 'Seit dem 16. Jahrhundert ist die Stadt für ihre Töpferproduktion bekannt – insbesondere für die Herstellung der „Bartmannskrüge“, die in ganz Europa exportiert wurden.' },
                        { text: 'Im 18. und 19. Jahrhundert begann der Braunkohleabbau in der Umgebung, wodurch Frechen zu einem industriellen Zentrum wurde.' },
                        { text: 'Nach dem Zweiten Weltkrieg entwickelte sich Frechen zu einem wichtigen Industrie- und Wohnvorort von Köln.' },
                        { text: 'Am 2. September 1951 erhielt Frechen das offizielle Stadtrecht, woraufhin die Dörfer Bachem, Hücheln und Buschbell eingemeindet wurden.' },
                        { text: 'Im Jahr 1975 wurden im Zuge der kommunalen Neugliederung die Ortsteile Grefrath, Habbelrath, Königsdorf und Neufreimersdorf eingemeindet.' },
                        { text: 'Heute ist Frechen eine moderne Stadt mit historischem Stadtkern, Keramikmuseum und guter Infrastruktur – ein beliebter Wohnort für Kölner.' }
                    ]
                },
                meta: {
                    title: "Frechen – die Stadt der Keramik vor den westlichen Toren Kölns",
                    description: "Frechen: Geschichte, Geografie, bekannte Persönlichkeiten und interessante Fakten über die Keramikstadt in Nordrhein-Westfalen.",
                    ogTitle: "Frechen – Stadtinformationen",
                    ogDescription: "Detaillierte Informationen über Frechen: Kultur, Geschichte, bekannte Persönlichkeiten und interessante Fakten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Erft-Kreis/frechen/johann_schmitz_platz_frechen/006.jpg"
                }
            }
        }

    },

    //Rhein-Sieg-Kreis
    {
        id: "konigswinter",
        path: "konigswinter",
        countryPath: "germany", regionPath: "nrw", districtPath: "koln", subRegionPath: "rhein_sieg",
        gerb: "Germany/nrw/koln/Rhein-Sieg-Kreis/konigswinter/gerb.png",
        coord: { lat: 50.6838, lng: 7.1868 },
        translations: {
            ru: {
                name: 'Кёнигсвинтер',
                subRegionName: "Рейн-Зиг",
                desc: {
                    general: [
                        { text: 'Кёнигсвинтер – город в земле Северный Рейн-Вестфалия, входящий в район Рейн-Зиг и расположенный на правом берегу Рейна напротив Бонна.' },
                        { text: ' Город известен живописными пейзажами Семигорья (Siebengebirge), замком Драхенбург и горой Драхенфельс – одним из самых посещаемых природных объектов Германии.' }
                    ],
                    population: [
                        { bold: 'Население:' },
                        { text: ' около 41 000 человек (2025)' }
                    ],
                    area: [
                        { bold: 'Площадь:' },
                        { text: ' примерно 76,2 км²' }
                    ],
                    postalCode: [
                        { bold: 'Почтовый индекс:' },
                        { text: ' 53639' }
                    ],
                    phone: [
                        { bold: 'Телефонный код:' },
                        { text: ' +49 02223' }
                    ],
                    officialSite: [
                        { bold: 'Официальный сайт Кёнигсвинтера', link: 'https://www.koenigswinter.de/' }
                    ]
                },
                geography: {
                    title: 'География',
                    items: [
                        { text: 'Кёнигсвинтер расположен на правом берегу Рейна у подножия горного массива Зибенгебирге и является частью агломерации Бонна.' },
                        { text: 'Высота над уровнем моря варьируется примерно от 60 до 461 метров; самая высокая точка – гора Эльберг (Ölberg).' },
                        { text: 'Через город проходят федеральная трасса B42 и железнодорожная линия вдоль Рейна, обеспечивая удобное сообщение с Бонном, Кёльном и Кобленцем.' },
                        { text: 'Территория города включает леса, виноградники, речные набережные и природный парк Siebengebirge – один из старейших природных парков Германии.' }
                    ]
                },
                notablePeople: {
                    title: 'Знаменитые люди Кёнигсвинтера',
                    items: [
                        { bold: 'Конрад Аденауэр', text: ' – первый федеральный канцлер Германии, жил в районе Рёндорф; его дом сегодня является музеем.' },
                        { bold: 'Петер Шолль-Латур', text: ' – известный немецкий журналист и публицист, долгое время жил в городе.' },
                        { bold: 'Вольфганг Оверат', text: ' – легендарный футболист сборной Германии и «Кёльна», проживал в Кёнигсвинтере.' },
                        { bold: 'Фердинанд Фрейлиграт', text: ' – немецкий поэт эпохи романтизма, некоторое время жил в окрестностях города.' }
                    ]
                },
                interestingFacts: {
                    title: 'Интересные факты',
                    items: [
                        { text: 'Гора Драхенфельс является одной из самых известных туристических точек на Рейне и связана с легендой о драконе, побеждённом героем Зигфридом.' },
                        { text: 'Замок Драхенбург – не средневековая крепость, а роскошная вилла XIX века, построенная в стиле историзма и напоминающая сказочный дворец.' },
                        { text: 'Гостиница Petersberg в Кёнигсвинтере долгое время служила официальной резиденцией для государственных гостей Германии.' },
                        { text: 'Зибенгебирге считается одним из старейших охраняемых природных регионов страны и популярным местом для хайкинга.' },
                        { text: 'Город часто называют «воротами в романтический Рейн» благодаря панорамным видам на реку и долину.' }
                    ]
                },
                briefHistory: {
                    title: 'История',
                    items: [
                        { text: 'Поселение на месте современного Кёнигсвинтера впервые упоминается в документах около 1015 года под названием Winetre.' },
                        { text: 'В Средние века регион развивался благодаря виноделию, добыче камня в горах Зибенгебирге и торговле по Рейну.' },
                        { text: 'В XIX веке город стал популярным курортом и туристическим направлением эпохи романтизма, привлекая художников и путешественников.' },
                        { text: 'В 1889 году Кёнигсвинтер получил официальные городские права.' },
                        { text: 'После Второй мировой войны район Петерсберг играл важную дипломатическую роль: здесь размещались государственные делегации и проходили международные встречи.' },
                        { text: 'В 1969 году в ходе административной реформы к городу были присоединены несколько окрестных населённых пунктов, что значительно расширило его территорию.' },
                        { text: 'Сегодня Кёнигсвинтер – популярный туристический центр региона Рейн-Зиг, сочетающий природные достопримечательности, исторические объекты и развитую инфраструктуру отдыха.' }
                    ]
                },
                meta: {
                    title: "Кёнигсвинтер – город у подножия Драхенфельса на Рейне",
                    description: "Кёнигсвинтер: история, география, знаменитые жители и интересные факты о живописном городе региона Рейн-Зиг.",
                    ogTitle: "Кёнигсвинтер – информация о городе",
                    ogDescription: "Подробная информация о Кёнигсвинтере: достопримечательности, природа, история и известные жители.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Sieg-Kreis/konigswinter/drachenfels/007.jpg"
                }
            },
            ua: {
                name: 'Кенігсвінтер',
                subRegionName: "Рейн-Зіг",
                desc: {
                    general: [
                        { text: 'Кенігсвінтер – місто в землі Північний Рейн-Вестфалія, що входить до району Рейн-Зіг і розташоване на правому березі Рейну навпроти Бонна.' },
                        { text: ' Місто відоме мальовничими пейзажами Семигір’я (Siebengebirge), замком Драхенбург та горою Драхенфельс – одним із найвідвідуваніших природних об’єктів Німеччини.' }
                    ],
                    population: [
                        { bold: 'Населення:' },
                        { text: ' близько 41 000 осіб (2025)' }
                    ],
                    area: [
                        { bold: 'Площа:' },
                        { text: ' приблизно 76,2 км²' }
                    ],
                    postalCode: [
                        { bold: 'Поштовий індекс:' },
                        { text: ' 53639' }
                    ],
                    phone: [
                        { bold: 'Телефонний код:' },
                        { text: ' +49 02223' }
                    ],
                    officialSite: [
                        { bold: 'Офіційний сайт Кенігсвінтера', link: 'https://www.koenigswinter.de/' }
                    ]
                },
                geography: {
                    title: 'Географія',
                    items: [
                        { text: 'Кенігсвінтер розташований на правому березі Рейну біля підніжжя гірського масиву Зібенгебірге і є частиною агломерації Бонна.' },
                        { text: 'Висота над рівнем моря варіюється приблизно від 60 до 461 метрів; найвища точка – гора Ельберг (Ölberg).' },
                        { text: 'Через місто проходять федеральна траса B42 і залізнична лінія вздовж Рейну, що забезпечує зручне сполучення з Бонном, Кельном і Кобленцем.' },
                        { text: 'Територія міста включає ліси, виноградники, річкові набережні та природний парк Siebengebirge – один із найстаріших природних парків Німеччини.' }
                    ]
                },
                notablePeople: {
                    title: 'Відомі люди Кенігсвінтера',
                    items: [
                        { bold: 'Конрад Аденауер', text: ' – перший федеральний канцлер Німеччини, жив у районі Рьондорф; його дім сьогодні є музеєм.' },
                        { bold: 'Петер Шоль-Латур', text: ' – відомий німецький журналіст і публіцист, тривалий час мешкав у місті.' },
                        { bold: 'Вольфганг Оверат', text: ' – легендарний футболіст збірної Німеччини та «Кельна», проживав у Кенігсвінтері.' },
                        { bold: 'Фердинанд Фрейліграт', text: ' – німецький поет епохи романтизму, деякий час жив в околицях міста.' }
                    ]
                },
                interestingFacts: {
                    title: 'Цікаві факти',
                    items: [
                        { text: 'Гора Драхенфельс є однією з найвідоміших туристичних точок на Рейні і пов’язана з легендою про дракона, переможеного героєм Зігфрідом.' },
                        { text: 'Замок Драхенбург – не середньовічна фортеця, а розкішна вілла XIX століття, побудована в стилі історизму і нагадує казковий палац.' },
                        { text: 'Готель Petersberg у Кенігсвінтері довгий час слугував офіційною резиденцією для державних гостей Німеччини.' },
                        { text: 'Зібенгебірге вважається одним із найстаріших охоронюваних природних регіонів країни і популярним місцем для хайкінгу.' },
                        { text: 'Місто часто називають «воротами в романтичний Рейн» завдяки панорамним видам на річку і долину.' }
                    ]
                },
                briefHistory: {
                    title: 'Історія',
                    items: [
                        { text: 'Поселення на місці сучасного Кенігсвінтера вперше згадується в документах близько 1015 року під назвою Winetre.' },
                        { text: 'У середні віки регіон розвивався завдяки виноробству, видобутку каменю в горах Зібенгебірге та торгівлі по Рейну.' },
                        { text: 'У XIX столітті місто стало популярним курортом і туристичним напрямком епохи романтизму, приваблюючи художників і мандрівників.' },
                        { text: 'У 1889 році Кенігсвінтер отримав офіційні міські права.' },
                        { text: 'Після Другої світової війни район Петерсберг грав важливу дипломатичну роль: тут розміщувалися державні делегації і проводилися міжнародні зустрічі.' },
                        { text: 'У 1969 році в ході адміністративної реформи до міста було приєднано кілька навколишніх населених пунктів, що значно розширило його територію.' },
                        { text: 'Сьогодні Кенігсвінтер – популярний туристичний центр регіону Рейн-Зіг, що поєднує природні пам’ятки, історичні об’єкти та розвинену інфраструктуру відпочинку.' }
                    ]
                },
                meta: {
                    title: "Кенігсвінтер – місто біля підніжжя Драхенфельса на Рейні",
                    description: "Кенігсвінтер: історія, географія, відомі мешканці та цікаві факти про мальовниче місто регіону Рейн-Зіг.",
                    ogTitle: "Кенігсвінтер – інформація про місто",
                    ogDescription: "Детальна інформація про Кенігсвінтер: визначні пам’ятки, природа, історія та відомі мешканці.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Sieg-Kreis/konigswinter/drachenfels/007.jpg"
                }
            },
            de: {
                name: 'Königswinter',
                subRegionName: "Rhein-Sieg",
                desc: {
                    general: [
                        { text: 'Königswinter ist eine Stadt im Bundesland Nordrhein-Westfalen, die zum Rhein-Sieg-Kreis gehört und am rechten Rheinufer gegenüber von Bonn liegt.' },
                        { text: ' Die Stadt ist bekannt für die malerische Landschaft des Siebengebirges, das Schloss Drachenburg und den Drachenfels – eines der meistbesuchten Naturziele Deutschlands.' }
                    ],
                    population: [
                        { bold: 'Einwohnerzahl:' },
                        { text: ' etwa 41.000 Menschen (2025)' }
                    ],
                    area: [
                        { bold: 'Fläche:' },
                        { text: ' ca. 76,2 km²' }
                    ],
                    postalCode: [
                        { bold: 'Postleitzahl:' },
                        { text: ' 53639' }
                    ],
                    phone: [
                        { bold: 'Telefonvorwahl:' },
                        { text: ' +49 02223' }
                    ],
                    officialSite: [
                        { bold: 'Offizielle Website von Königswinter', link: 'https://www.koenigswinter.de/' }
                    ]
                },
                geography: {
                    title: 'Geographie',
                    items: [
                        { text: 'Königswinter liegt am rechten Rheinufer am Fuße des Siebengebirges und ist Teil der Agglomeration Bonn.' },
                        { text: 'Die Höhe über dem Meeresspiegel variiert zwischen etwa 60 und 461 Metern; der höchste Punkt ist der Ölberg.' },
                        { text: 'Durch die Stadt verlaufen die Bundesstraße B42 und die Eisenbahnlinie am Rhein, die eine gute Verbindung nach Bonn, Köln und Koblenz gewährleisten.' },
                        { text: 'Das Stadtgebiet umfasst Wälder, Weinberge, Rheinpromenaden und den Naturpark Siebengebirge – einen der ältesten Naturparks Deutschlands.' }
                    ]
                },
                notablePeople: {
                    title: 'Berühmte Persönlichkeiten aus Königswinter',
                    items: [
                        { bold: 'Konrad Adenauer', text: ' – erster Bundeskanzler Deutschlands, lebte im Stadtteil Rüngsdorf; sein Haus ist heute ein Museum.' },
                        { bold: 'Peter Scholl-Latour', text: ' – bekannter deutscher Journalist und Publizist, lebte lange Zeit in der Stadt.' },
                        { bold: 'Wolfgang Overath', text: ' – legendärer Fußballspieler der deutschen Nationalmannschaft und von „Köln“, wohnte in Königswinter.' },
                        { bold: 'Ferdinand Freiligrath', text: ' – deutscher Dichter der Romantik, lebte zeitweise in der Umgebung der Stadt.' }
                    ]
                },
                interestingFacts: {
                    title: 'Interessante Fakten',
                    items: [
                        { text: 'Der Drachenfels ist einer der bekanntesten touristischen Punkte am Rhein und mit der Legende des von Siegfried besiegten Drachen verbunden.' },
                        { text: 'Schloss Drachenburg ist keine mittelalterliche Burg, sondern eine luxuriöse Villa des 19. Jahrhunderts im Historismus-Stil, die an ein Märchenschloss erinnert.' },
                        { text: 'Das Hotel Petersberg in Königswinter diente lange Zeit als offizielle Residenz für staatliche Gäste Deutschlands.' },
                        { text: 'Das Siebengebirge gilt als eines der ältesten geschützten Naturgebiete des Landes und ist ein beliebtes Ziel für Wanderungen.' },
                        { text: 'Die Stadt wird oft als „Tor zum romantischen Rhein“ bezeichnet, dank der Panoramablicke auf den Fluss und das Tal.' }
                    ]
                },
                briefHistory: {
                    title: 'Geschichte',
                    items: [
                        { text: 'Die Siedlung an der Stelle des heutigen Königswinter wird erstmals um 1015 unter dem Namen Winetre erwähnt.' },
                        { text: 'Im Mittelalter entwickelte sich die Region durch Weinbau, Steinabbau im Siebengebirge und den Handel am Rhein.' },
                        { text: 'Im 19. Jahrhundert wurde die Stadt zu einem beliebten Kur- und Reiseziel der Romantik, das Künstler und Reisende anzog.' },
                        { text: '1889 erhielt Königswinter die offiziellen Stadtrechte.' },
                        { text: 'Nach dem Zweiten Weltkrieg spielte der Petersberg eine wichtige diplomatische Rolle: Hier waren staatliche Delegationen untergebracht und internationale Treffen fanden statt.' },
                        { text: '1969 wurden im Rahmen einer Verwaltungsreform mehrere umliegende Orte in die Stadt eingegliedert, wodurch sich das Stadtgebiet erheblich vergrößerte.' },
                        { text: 'Heute ist Königswinter ein beliebtes Touristenzentrum im Rhein-Sieg-Kreis, das Naturattraktionen, historische Sehenswürdigkeiten und eine gut ausgebaute Infrastruktur für Erholung verbindet.' }
                    ]
                },
                meta: {
                    title: "Königswinter – Stadt am Fuße des Drachenfels am Rhein",
                    description: "Königswinter: Geschichte, Geographie, berühmte Persönlichkeiten und interessante Fakten über die malerische Stadt im Rhein-Sieg-Kreis.",
                    ogTitle: "Königswinter – Informationen über die Stadt",
                    ogDescription: "Detaillierte Informationen über Königswinter: Sehenswürdigkeiten, Natur, Geschichte und bekannte Persönlichkeiten.",
                    ogImage: "https://our-travels.info/foto/Germany/nrw/koln/Rhein-Sieg-Kreis/konigswinter/drachenfels/007.jpg"
                }
            }
        }
    },
]

export default datas