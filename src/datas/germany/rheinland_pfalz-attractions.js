const datas = [
  // Кобленц
  {
    id: "ehrenbreitstein_koblenz",
    type: ["palace_or_castle", "museum"], rating: "popular",
    path: "ehrenbreitstein_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "koblenz",
    fotoCard: "Germany/rheinland-pfalz/koblenz/ehrenbreitstein/001.jpg",
    routes: "castles_rhine_valley", showMore: true,
    coord: { lat: 50.36492599012237, lng: 7.615038103887171 },
    translations: {
      ru: {
        name: "Крепость Эренбрайтштайн",
        location: "Кобленц, район Эренбрайтштайн, Германия",
        short_description: "Крепость Эренбрайтштайн – одна из крупнейших сохранившихся крепостей Европы, расположенная на холме над Кобленцем, напротив слияния Рейна и Мозеля. Сегодня она является частью объекта Всемирного наследия ЮНЕСКО «Верхняя Среднерейнская долина» и популярным туристическим центром с музеями, панорамными видами и культурными мероприятиями.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Крепость Эренбрайтштайн", text: "возвышается на скалистом холме высотой около 118 метров над Рейном и занимает стратегически доминирующее положение над Кобленцем. С её территории открываются панорамные виды на слияние Рейна и Мозеля в районе «Deutsches Eck», что исторически делало это место ключевой точкой контроля речных путей. Сегодня крепость представляет собой масштабный комплекс, объединяющий историческую архитектуру, музеи и современные культурные пространства." },
            { text: "История укреплений на этом месте насчитывает более тысячи лет. Первые фортификационные сооружения, вероятно, существовали уже в римский период, однако документированная история начинается в XI веке, когда здесь располагался средневековый замок, контролировавший важный участок Рейна и сбор торговых пошлин. Благодаря своему положению крепость быстро приобрела значение одного из ключевых оборонительных пунктов региона." },
            { text: "В последующие века Эренбрайтштайн неоднократно расширялся и усиливался. В XVI–XVII веках он стал частью системы обороны курфюршества Трирского и выдерживал многочисленные конфликты эпохи религиозных войн. Особенно значимую роль крепость играла во время Тридцатилетней войны, когда контроль над Рейном имел стратегическое значение для всей Центральной Европы." },
            { text: "После разрушений и политических изменений наполеоновского периода территория перешла под контроль Пруссии. В XIX веке крепость была радикально перестроена и превращена в одну из крупнейших фортификационных систем на Рейне. Именно в этот период сформировался её современный облик – массивные бастионы, укреплённые стены и сложная оборонительная структура, рассчитанная на новые виды артиллерии." },
            { text: "Несмотря на высокую военную значимость, в конце XIX века крепость утратила оборонительную функцию и была выведена из активной службы. Однако она не была разрушена, что позволило сохранить её как один из наиболее хорошо сохранившихся фортификационных комплексов Европы. Сегодня Эренбрайтштайн является культурным центром, где проходят выставки, фестивали и образовательные проекты, а сама крепость стала одной из ключевых точек туристического маршрута по Среднему Рейну." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Greiffenklaustraße, 56077 Koblenz, Deutschland" },
            { bold: "Доступ:", text: "фуникулёр из района Deutsches Eck или пешком" },
            { bold: "Вход:", text: "платный (цены зависят от выставок и сезона)" }
          ]
        },
        sub_objects: {
          title: "Экспозиции",
          items: [
            { bold: "Государственный музей Рейнской области (Landesmuseum Koblenz)", text: "Экспозиция, посвящённая истории и культуре региона Рейна от древнейших времён до современности. Здесь представлены археологические находки, предметы быта, артефакты римской эпохи, а также материалы, отражающие развитие городов и торговли вдоль Рейна. Отдельное внимание уделено культурной роли региона как важного исторического коридора Центральной Европы." },
            { bold: "Военная история крепости", text: "Экспозиция раскрывает Эренбрайтштайн как одну из ключевых прусских крепостей XIX века. В залах представлены образцы вооружения, элементы военной инженерии, планы укреплений и реконструкции оборонительных систем. Выставка показывает эволюцию фортификации – от средневековых укреплений до сложной артиллерийской архитектуры Пруссии." },
            { bold: "Современные выставки", text: "В крепости регулярно проходят временные выставки, посвящённые современному искусству, фотографии, культуре и социальным темам. Эти пространства используются для диалога между историческим наследием и современными художественными практиками, благодаря чему крепость остаётся живым культурным центром, а не только историческим памятником." }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Это одна из крупнейших крепостей Европы, сохранившихся в таком состоянии." },
            { text: "Крепость находится на высоте, с которой полностью контролируется слияние Рейна и Мозеля." },
            { text: "В XIX веке она считалась практически неприступной." },
            { text: "Фуникулёр к крепости – один из самых живописных в Германии." },
            { text: "расположена в пределах объекта ЮНЕСКО “Верхняя Средняя долина Рейна”" }
          ]
        },
        construction_period: "XI век (основание), XIX век (прусская реконструкция 1817–1834)",
        meta: {
          title: "Крепость Эренбрайтштайн в Кобленце – история, музей и виды Рейна",
          description: "Крепость Эренбрайтштайн – одна из крупнейших крепостей Европы в Кобленце. История, музеи, выставки и панорамные виды на Рейн и Мозель.",
          ogTitle: "Эренбрайтштайн – крепость над Рейном в Кобленце",
          ogDescription: "Одна из самых впечатляющих крепостей Германии с панорамой Рейна, музеями и богатой историей.",
          keywords: "крепость эренбрайтштайн, крепости германии, кобленц достопримечательности, рейнская долина, средний рейн, замки германии, deutsches eck, фуникулер кобленц, музей крепости, верхняя средняя долина рейна",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/ehrenbreitstein/001.jpg"
        }
      },
      ua: {
        name: "Фортеця Еренбрайтштайн",
        location: "Кобленц, район Еренбрайтштайн, Німеччина",
        short_description: "Фортеця Еренбрайтштайн – одна з найбільших збережених фортець Європи, розташована на пагорбі над Кобленцом, навпроти злиття Рейну та Мозеля. Сьогодні вона є частиною об’єкта Всесвітньої спадщини ЮНЕСКО «Верхня Середня долина Рейну» та популярним туристичним центром з музеями, панорамними видами і культурними заходами.",
        full_description: {
          title: "Опис і історія",
          items: [
            { bold: "Фортеця Еренбрайтштайн", text: "вивищується на скелястому пагорбі висотою близько 118 метрів над Рейном і займає стратегічно домінуюче положення над Кобленцом. З її території відкриваються панорамні види на злиття Рейну та Мозеля в районі «Deutsches Eck», що історично робило це місце ключовою точкою контролю річкових шляхів. Сьогодні фортеця є масштабним комплексом, який об’єднує історичну архітектуру, музеї та сучасні культурні простори." },
            { text: "Історія укріплень на цьому місці налічує понад тисячу років. Перші фортифікаційні споруди, ймовірно, існували ще в римський період, однак документована історія починається в XI столітті, коли тут розташовувався середньовічний замок, що контролював важливу ділянку Рейну та збір торгових мит. Завдяки своєму розташуванню фортеця швидко набула значення одного з ключових оборонних пунктів регіону." },
            { text: "У наступні століття Еренбрайтштайн неодноразово розширювався і посилювався. У XVI–XVII століттях він став частиною системи оборони курфюрства Тріра та витримував численні конфлікти епохи релігійних воєн. Особливо значну роль фортеця відігравала під час Тридцятилітньої війни, коли контроль над Рейном мав стратегічне значення для всієї Центральної Європи." },
            { text: "Після руйнувань і політичних змін наполеонівського періоду територія перейшла під контроль Пруссії. У XIX столітті фортеця була радикально перебудована і перетворена на одну з найбільших фортифікаційних систем на Рейні. Саме в цей період сформувався її сучасний вигляд – масивні бастіони, укріплені стіни та складна оборонна структура, розрахована на нові види артилерії." },
            { text: "Попри високе військове значення, наприкінці XIX століття фортеця втратила оборонну функцію і була виведена з активної служби. Однак вона не була зруйнована, що дозволило зберегти її як один із найкраще збережених фортифікаційних комплексів Європи. Сьогодні Еренбрайтштайн є культурним центром, де проходять виставки, фестивалі та освітні проєкти, а сама фортеця стала однією з ключових точок туристичного маршруту Середнім Рейном." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Greiffenklaustraße, 56077 Koblenz, Німеччина" },
            { bold: "Доступ:", text: "фунікулер із району Deutsches Eck або пішки" },
            { bold: "Вхід:", text: "платний (ціни залежать від виставок і сезону)" }
          ]
        },
        sub_objects: {
          title: "Експозиції",
          items: [
            { bold: "Державний музей Рейнської області (Landesmuseum Koblenz)", text: "Експозиція, присвячена історії та культурі регіону Рейну від найдавніших часів до сучасності. Тут представлені археологічні знахідки, предмети побуту, артефакти римської епохи, а також матеріали, що відображають розвиток міст і торгівлі вздовж Рейну. Окрему увагу приділено культурній ролі регіону як важливого історичного коридору Центральної Європи." },
            { bold: "Військова історія фортеці", text: "Експозиція розкриває Еренбрайтштайн як одну з ключових прусських фортець XIX століття. У залах представлені зразки озброєння, елементи військової інженерії, плани укріплень та реконструкції оборонних систем. Виставка показує еволюцію фортифікації – від середньовічних укріплень до складної артилерійської архітектури Пруссії." },
            { bold: "Сучасні виставки", text: "У фортеці регулярно проходять тимчасові виставки, присвячені сучасному мистецтву, фотографії, культурі та соціальним темам. Ці простори використовуються для діалогу між історичною спадщиною та сучасними художніми практиками, завдяки чому фортеця залишається живим культурним центром, а не лише історичною пам’яткою." }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Це одна з найбільших фортець Європи, що збереглися в такому стані." },
            { text: "Фортеця розташована на висоті, з якої повністю контролюється злиття Рейну та Мозеля." },
            { text: "У XIX столітті вона вважалася практично неприступною." },
            { text: "Фунікулер до фортеці – один із наймальовничіших у Німеччині." },
            { text: "розташована в межах об’єкта ЮНЕСКО “Верхня Середня долина Рейну”" }
          ]
        },
        construction_period: "XI століття (заснування), XIX століття (прусська реконструкція 1817–1834)",
        meta: {
          title: "Фортеця Еренбрайтштайн у Кобленці – історія, музей і види Рейну",
          description: "Фортеця Еренбрайтштайн – одна з найбільших фортець Європи в Кобленці. Історія, музеї, виставки та панорамні види на Рейн і Мозель.",
          ogTitle: "Еренбрайтштайн – фортеця над Рейном у Кобленці",
          ogDescription: "Одна з найвражаючих фортець Німеччини з панорамою Рейну, музеями та багатою історією.",
          keywords: "фортеця еренбрайтштайн, фортеці німеччини, кобленц пам’ятки, рейнська долина, середній рейн, замки німеччини, deutsches eck, фунікулер кобленц, музей фортеці, верхня середня долина рейну",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/ehrenbreitstein/001.jpg"
        }
      },
      de: {
        name: "Festung Ehrenbreitstein",
        location: "Koblenz, Stadtteil Ehrenbreitstein, Deutschland",
        short_description: "Die Festung Ehrenbreitstein ist eine der größten erhaltenen Festungen Europas und liegt auf einem Hügel über Koblenz, gegenüber der Mündung von Rhein und Mosel. Heute ist sie Teil des UNESCO-Welterbes „Oberes Mittelrheintal“ und ein beliebtes touristisches Zentrum mit Museen, Panoramablicken und kulturellen Veranstaltungen.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Die Festung Ehrenbreitstein", text: "erhebt sich auf einem felsigen Hügel in etwa 118 Metern Höhe über dem Rhein und nimmt eine strategisch dominante Position über Koblenz ein. Von ihrem Gelände aus eröffnen sich Panoramablicke auf die Mündung von Rhein und Mosel im Bereich des „Deutschen Ecks“, was diesen Ort historisch zu einem zentralen Kontrollpunkt der Wasserwege machte. Heute ist die Festung ein umfangreicher Komplex, der historische Architektur, Museen und moderne kulturelle Räume vereint." },
            { text: "Die Geschichte der Befestigungen an diesem Ort reicht über tausend Jahre zurück. Erste befestigte Anlagen existierten vermutlich bereits in der Römerzeit, jedoch beginnt die dokumentierte Geschichte im 11. Jahrhundert, als hier eine mittelalterliche Burg bestand, die einen wichtigen Abschnitt des Rheins sowie die Erhebung von Zöllen kontrollierte. Durch ihre Lage gewann die Festung schnell an Bedeutung als einer der wichtigsten Verteidigungspunkte der Region." },
            { text: "In den folgenden Jahrhunderten wurde Ehrenbreitstein mehrfach erweitert und verstärkt. Im 16. und 17. Jahrhundert war sie Teil des Verteidigungssystems des Kurfürstentums Trier und hielt zahlreichen Konflikten der Religionskriege stand. Eine besonders wichtige Rolle spielte die Festung während des Dreißigjährigen Krieges, als die Kontrolle über den Rhein von strategischer Bedeutung für ganz Mitteleuropa war." },
            { text: "Nach den Zerstörungen und politischen Veränderungen der napoleonischen Zeit kam das Gebiet unter preußische Kontrolle. Im 19. Jahrhundert wurde die Festung radikal umgebaut und zu einer der größten Befestigungsanlagen am Rhein ausgebaut. In dieser Zeit entstand ihr heutiges Erscheinungsbild – massive Bastionen, befestigte Mauern und eine komplexe Verteidigungsstruktur für neue Artilleriewaffen." },
            { text: "Trotz ihrer hohen militärischen Bedeutung verlor die Festung Ende des 19. Jahrhunderts ihre Funktion als Verteidigungsanlage und wurde außer Dienst gestellt. Sie wurde jedoch nicht zerstört, wodurch sie als eine der am besten erhaltenen Festungsanlagen Europas bewahrt blieb. Heute ist Ehrenbreitstein ein kulturelles Zentrum mit Ausstellungen, Festivals und Bildungsprojekten und ein wichtiger Bestandteil der touristischen Route entlang des Mittelrheins." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Greiffenklaustraße, 56077 Koblenz, Deutschland" },
            { bold: "Zugang:", text: "Seilbahn aus dem Bereich Deutsches Eck oder zu Fuß" },
            { bold: "Eintritt:", text: "kostenpflichtig (Preise abhängig von Ausstellungen und Saison)" }
          ]
        },
        sub_objects: {
          title: "Ausstellungen",
          items: [
            { bold: "Landesmuseum Koblenz", text: "Eine Ausstellung zur Geschichte und Kultur der Rheinregion von der Antike bis zur Gegenwart. Gezeigt werden archäologische Funde, Alltagsgegenstände, römische Artefakte sowie Materialien zur Entwicklung von Städten und Handel entlang des Rheins. Besonderes Augenmerk gilt der kulturellen Rolle der Region als wichtiger historischer Korridor Mitteleuropas." },
            { bold: "Militärgeschichte der Festung", text: "Diese Ausstellung zeigt Ehrenbreitstein als eine der wichtigsten preußischen Festungen des 19. Jahrhunderts. Präsentiert werden Waffen, Elemente der Militärtechnik, Festungspläne und Rekonstruktionen der Verteidigungssysteme. Sie zeigt die Entwicklung der Befestigungskunst – von mittelalterlichen Anlagen bis zur komplexen Artilleriearchitektur Preußens." },
            { bold: "Zeitgenössische Ausstellungen", text: "In der Festung finden regelmäßig wechselnde Ausstellungen zu zeitgenössischer Kunst, Fotografie, Kultur und gesellschaftlichen Themen statt. Diese Räume schaffen einen Dialog zwischen historischem Erbe und moderner Kunst und machen die Festung zu einem lebendigen Kulturzentrum statt nur zu einem historischen Denkmal." }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Sie ist eine der größten erhaltenen Festungen Europas in diesem Zustand." },
            { text: "Die Festung liegt auf einer Höhe, von der aus die Mündung von Rhein und Mosel vollständig kontrolliert werden kann." },
            { text: "Im 19. Jahrhundert galt sie als nahezu uneinnehmbar." },
            { text: "Die Seilbahn zur Festung gehört zu den landschaftlich schönsten in Deutschland." },
            { text: "Sie liegt innerhalb des UNESCO-Welterbes „Oberes Mittelrheintal“." }
          ]
        },
        construction_period: "11. Jahrhundert (Gründung), 19. Jahrhundert (preußischer Umbau 1817–1834)",
        meta: {
          title: "Festung Ehrenbreitstein in Koblenz – Geschichte, Museum und Rheinblick",
          description: "Die Festung Ehrenbreitstein ist eine der größten Festungen Europas in Koblenz. Geschichte, Museen, Ausstellungen und Panoramablicke auf Rhein und Mosel.",
          ogTitle: "Ehrenbreitstein – Festung über dem Rhein in Koblenz",
          ogDescription: "Eine der beeindruckendsten Festungen Deutschlands mit Rheinpanorama, Museen und reicher Geschichte.",
          keywords: "festung ehrenbreitstein, festungen deutschland, koblenz sehenswürdigkeiten, mittelrheintal, rhein, deutsche burgen, deutsches eck, seilbahn koblenz, festungsmuseum, oberes mittelrheintal",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/ehrenbreitstein/001.jpg"
        }
      }
    }
  },
  {
    id: "stolzenfels_koblenz",
    type: ["palace_or_castle"], rating: "popular",
    path: "stolzenfels_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "koblenz",
    fotoCard: "Germany/rheinland-pfalz/koblenz/stolzenfels/001.jpg",
    routes: "castles_rhine_valley", showMore: true,
    coord: { lat: 50.30323627434961, lng: 7.592053295948548 },
    translations: {
      ru: {
        name: "Замок Штольценфельс",
        location: "Кобленц, район Штольценфельс, Германия",
        officialSite: [
          { bold: "Официальный сайт", link: "https://tor-zum-welterbe.de/stolzenfels/?utm_source=chatgpt.com" }
        ],
        short_description: "Замок Штольценфельс – романтический неоготический дворец на берегу Рейна возле Кобленца, восстановленный в XIX веке на месте средневековой крепости и ставший символом рейнского романтизма.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Замок Штольценфельс", text: "– романтический дворец-крепость XIX века, расположенный на левом берегу Рейна недалеко от Кобленца. Он возвышается над рекой среди лесистых склонов и считается одним из самых известных образцов рейнского романтизма в Германии. Благодаря живописному расположению и архитектуре замок стал одной из символических достопримечательностей долины Среднего Рейна." },
            { text: "Современный вид Штольценфельса появился в эпоху прусского короля Фридриха Вильгельма IV, который превратил руины средневековой крепости в роскошную резиденцию в неоготическом стиле. При реконструкции архитекторы стремились сохранить атмосферу средневекового замка, дополнив её декоративными башнями, рыцарскими залами и террасными садами." },
            { text: "Сегодня Штольценфельс открыт для посетителей как музейный комплекс. Туристы могут осмотреть исторические интерьеры, парадные залы, часовню, сады и смотровые площадки с панорамным видом на Рейн. Замок входит в список объектов культурного ландшафта долины Верхнего Среднего Рейна, включённого в список Всемирного наследия ЮНЕСКО." },
            { bold: "История", text: "Первоначальная крепость Штольценфельс была построена около 1259 года архиепископами Трира для контроля торгового пути по Рейну и защиты своих владений. Благодаря стратегическому положению замок играл важную роль в обороне региона и сборе пошлин с проходящих судов." },
            { text: "Во время Тридцатилетней войны и последующих конфликтов крепость неоднократно подвергалась разрушениям. В 1689 году, в период войны Аугсбургской лиги, французские войска практически полностью уничтожили замок, после чего он долгое время оставался в руинах." },
            { text: "В XIX веке руины приобрёл наследный принц Пруссии Фридрих Вильгельм, будущий король Фридрих Вильгельм IV. По его инициативе в 1836–1842 годах была проведена масштабная реконструкция под руководством архитектора Карла Фридриха Шинкеля и его последователей. После восстановления Штольценфельс стал одной из главных резиденций прусской аристократии на Рейне и важным символом эпохи романтизма." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Schlossweg 11, 56075 Koblenz" },
            { bold: "Стиль:", text: "неоготика, рейнский романтизм" },
            { bold: "Лучшее время для посещения: ", text: "весна, лето и ранняя осень" },
            { bold: "Особенности:", text: "панорамные виды на Рейн, исторические интерьеры, террасные сады" },
            { bold: "Доступ:", text: "часть пути к замку проходит по подъёму пешком" }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Штольценфельс считается одним из важнейших примеров романтической реконструкции средневековых замков в Германии." },
            { text: "В оформлении интерьеров использовались элементы рыцарской символики и исторические декоративные мотивы." },
            { text: "Замок посещали представители европейской аристократии XIX века." },
            { text: "Террасы и сады проектировались как часть единой художественной композиции вместе с архитектурой замка." },
            { text: "Из замка открывается один из самых известных видов на долину Рейна возле Кобленца." }
          ]
        },
        construction_period: "около 1259 года. Реконструкция: 1836–1842 годы",
        architects: "Карл Фридрих Шинкель и последователи",
        founder: "первоначальной крепости – архиепископы Трира",
        meta: {
          title: "Замок Штольценфельс в Кобленце – история, фото и посещение",
          description: "Замок Штольценфельс – романтический неоготический замок на Рейне возле Кобленца. История крепости, интерьеры, сады, интересные факты и информация для посещения.",
          ogTitle: "Замок Штольценфельс – романтический замок на Рейне возле Кобленца",
          ogDescription: "Откройте для себя замок Штольценфельс – одну из самых красивых достопримечательностей долины Среднего Рейна с панорамными видами и историческими интерьерами.",
          keywords: "замок Штольценфельс, Schloss Stolzenfels, Кобленц, замки Рейна, долина Среднего Рейна, достопримечательности Германии, рейнский романтизм, замки Германии, UNESCO Rhine Valley, что посмотреть в Кобленце",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/stolzenfels/001.jpg"
        }
      },
      ua: {
        name: "Замок Штольценфельс",
        location: "Кобленц, район Штольценфельс, Німеччина",
        officialSite: [
          { bold: "Офіційний сайт", link: "https://tor-zum-welterbe.de/stolzenfels/?utm_source=chatgpt.com" }
        ],
        short_description: "Замок Штольценфельс – романтичний неоготичний палац на березі Рейну біля Кобленца, відновлений у XIX столітті на місці середньовічної фортеці та який став символом рейнського романтизму.",
        full_description: {
          title: "Опис і історія",
          items: [
            { bold: "Замок Штольценфельс", text: "– романтичний палац-фортеця XIX століття, розташований на лівому березі Рейну неподалік Кобленца. Він височіє над річкою серед лісистих схилів і вважається одним із найвідоміших зразків рейнського романтизму в Німеччині. Завдяки мальовничому розташуванню та архітектурі замок став однією з символічних пам’яток долини Середнього Рейну." },
            { text: "Сучасний вигляд Штольценфельса з’явився в епоху прусського короля Фрідріха Вільгельма IV, який перетворив руїни середньовічної фортеці на розкішну резиденцію в неоготичному стилі. Під час реконструкції архітектори прагнули зберегти атмосферу середньовічного замку, доповнивши її декоративними вежами, лицарськими залами та терасовими садами." },
            { text: "Сьогодні Штольценфельс відкритий для відвідувачів як музейний комплекс. Туристи можуть оглянути історичні інтер’єри, парадні зали, каплицю, сади та оглядові майданчики з панорамним видом на Рейн. Замок входить до списку об’єктів культурного ландшафту долини Верхнього Середнього Рейну, включеного до списку Світової спадщини ЮНЕСКО." },
            { bold: "Історія", text: "Початкова фортеця Штольценфельс була побудована близько 1259 року архієпископами Тріра для контролю торгового шляху по Рейну та захисту своїх володінь. Завдяки стратегічному розташуванню замок відігравав важливу роль в обороні регіону та зборі мит із суден, що проходили." },
            { text: "Під час Тридцятилітньої війни та наступних конфліктів фортеця неодноразово зазнавала руйнувань. У 1689 році, під час війни Аугсбурзької ліги, французькі війська практично повністю знищили замок, після чого він довгий час залишався в руїнах." },
            { text: "У XIX столітті руїни придбав наслідний принц Пруссії Фрідріх Вільгельм, майбутній король Фрідріх Вільгельм IV. За його ініціативою у 1836–1842 роках була проведена масштабна реконструкція під керівництвом архітектора Карла Фрідріха Шинкеля та його послідовників. Після відновлення Штольценфельс став однією з головних резиденцій прусської аристократії на Рейні та важливим символом епохи романтизму." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Schlossweg 11, 56075 Koblenz" },
            { bold: "Стиль:", text: "неоготика, рейнський романтизм" },
            { bold: "Найкращий час для відвідування: ", text: "весна, літо та початок осені" },
            { bold: "Особливості:", text: "панорамні види на Рейн, історичні інтер’єри, терасові сади" },
            { bold: "Доступ:", text: "частина шляху до замку проходить пішим підйомом" }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Штольценфельс вважається одним із найважливіших прикладів романтичної реконструкції середньовічних замків у Німеччині." },
            { text: "В оформленні інтер’єрів використовувалися елементи лицарської символіки та історичні декоративні мотиви." },
            { text: "Замок відвідували представники європейської аристократії XIX століття." },
            { text: "Тераси та сади проєктувалися як частина єдиної художньої композиції разом з архітектурою замку." },
            { text: "Із замку відкривається один із найвідоміших видів на долину Рейну біля Кобленца." }
          ]
        },
        construction_period: "близько 1259 року. Реконструкція: 1836–1842 роки",
        architects: "Карл Фрідріх Шинкель та послідовники",
        founder: "початкової фортеці – архієпископи Тріра",
        meta: {
          title: "Замок Штольценфельс у Кобленці – історія, фото та відвідування",
          description: "Замок Штольценфельс – романтичний неоготичний замок на Рейні біля Кобленца. Історія фортеці, інтер’єри, сади, цікаві факти та інформація для відвідування.",
          ogTitle: "Замок Штольценфельс – романтичний замок на Рейні біля Кобленца",
          ogDescription: "Відкрийте для себе замок Штольценфельс – одну з найкрасивіших пам’яток долини Середнього Рейну з панорамними видами та історичними інтер’єрами.",
          keywords: "замок Штольценфельс, Schloss Stolzenfels, Кобленц, замки Рейну, долина Середнього Рейну, пам’ятки Німеччини, рейнський романтизм, замки Німеччини, UNESCO Rhine Valley, що подивитися в Кобленці",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/stolzenfels/001.jpg"
        }
      },
      de: {
        name: "Schloss Stolzenfels",
        location: "Koblenz, Stadtteil Stolzenfels, Deutschland",
        officialSite: [
          { bold: "Offizielle Website", link: "https://tor-zum-welterbe.de/stolzenfels/?utm_source=chatgpt.com" }
        ],
        short_description: "Schloss Stolzenfels ist ein romantischer neugotischer Schlossbau am Rhein bei Koblenz, der im 19. Jahrhundert auf den Ruinen einer mittelalterlichen Burg wiederaufgebaut wurde und zu einem Symbol der Rheinromantik wurde.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Schloss Stolzenfels", text: "– ein romantischer Schloss- und Festungsbau des 19. Jahrhunderts am linken Rheinufer nahe Koblenz. Es erhebt sich über dem Fluss inmitten bewaldeter Hänge und gilt als eines der bekanntesten Beispiele der Rheinromantik in Deutschland. Durch seine malerische Lage und Architektur wurde das Schloss zu einem der symbolischen Wahrzeichen des Mittelrheintals." },
            { text: "Das heutige Erscheinungsbild von Stolzenfels entstand in der Zeit des preußischen Königs Friedrich Wilhelm IV., der die Ruinen der mittelalterlichen Burg in eine repräsentative Residenz im neugotischen Stil umgestalten ließ. Bei der Rekonstruktion versuchten die Architekten, die Atmosphäre einer mittelalterlichen Burg zu bewahren und sie durch dekorative Türme, Rittersäle und Terrassengärten zu ergänzen." },
            { text: "Heute ist Schloss Stolzenfels als Museumskomplex für Besucher geöffnet. Touristen können historische Innenräume, Prunksäle, die Kapelle, Gärten und Aussichtsterrassen mit Panoramablick auf den Rhein besichtigen. Das Schloss gehört zum UNESCO-Welterbe Oberes Mittelrheintal." },
            { bold: "Geschichte", text: "Die ursprüngliche Burg Stolzenfels wurde um 1259 von den Erzbischöfen von Trier errichtet, um die Handelsroute am Rhein zu kontrollieren und ihre Gebiete zu schützen. Aufgrund seiner strategischen Lage spielte die Burg eine wichtige Rolle bei der Verteidigung der Region und der Erhebung von Zöllen auf vorbeifahrende Schiffe." },
            { text: "Während des Dreißigjährigen Krieges und späterer Konflikte wurde die Burg mehrfach zerstört. Im Jahr 1689, im Pfälzischen Erbfolgekrieg, zerstörten französische Truppen die Anlage fast vollständig, sodass sie lange Zeit als Ruine bestehen blieb." },
            { text: "Im 19. Jahrhundert erwarb der preußische Kronprinz Friedrich Wilhelm, der spätere König Friedrich Wilhelm IV., die Ruine. Auf seine Initiative wurde zwischen 1836 und 1842 unter der Leitung des Architekten Karl Friedrich Schinkel und seiner Nachfolger eine umfassende Restaurierung durchgeführt. Nach dem Wiederaufbau wurde Stolzenfels zu einer der wichtigsten Residenzen des preußischen Adels am Rhein und zu einem bedeutenden Symbol der Romantik." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Schlossweg 11, 56075 Koblenz" },
            { bold: "Stil:", text: "Neugotik, Rheinromantik" },
            { bold: "Beste Besuchszeit: ", text: "Frühling, Sommer und früher Herbst" },
            { bold: "Besonderheiten:", text: "Panoramablicke auf den Rhein, historische Innenräume, Terrassengärten" },
            { bold: "Zugang:", text: "Ein Teil des Weges zum Schloss führt bergauf zu Fuß" }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Schloss Stolzenfels gilt als eines der wichtigsten Beispiele romantischer Rekonstruktionen mittelalterlicher Burgen in Deutschland." },
            { text: "In der Innenausstattung wurden Elemente der Rittersymbolik und historische dekorative Motive verwendet." },
            { text: "Das Schloss wurde im 19. Jahrhundert von Mitgliedern des europäischen Adels besucht." },
            { text: "Die Terrassen und Gärten wurden als Teil eines einheitlichen künstlerischen Gesamtkonzepts gestaltet." },
            { text: "Vom Schloss aus bietet sich einer der bekanntesten Ausblicke auf das Rheintal bei Koblenz." }
          ]
        },
        construction_period: "um 1259. Rekonstruktion: 1836–1842",
        architects: "Karl Friedrich Schinkel und Nachfolger",
        founder: "ursprüngliche Burg – die Erzbischöfe von Trier",
        meta: {
          title: "Schloss Stolzenfels in Koblenz – Geschichte, Fotos und Besuch",
          description: "Schloss Stolzenfels ist ein romantisches neugotisches Schloss am Rhein bei Koblenz. Geschichte der Burg, Innenräume, Gärten, interessante Fakten und Besucherinformationen.",
          ogTitle: "Schloss Stolzenfels – romantisches Schloss am Rhein bei Koblenz",
          ogDescription: "Entdecken Sie Schloss Stolzenfels – eines der schönsten Wahrzeichen des Mittelrheintals mit Panoramablicken und historischen Innenräumen.",
          keywords: "Schloss Stolzenfels, Koblenz, Rheinburgen, Mittelrheintal, Rheinromantik, Burgen in Deutschland, UNESCO Rheintal, Sehenswürdigkeiten Deutschland, Rhein castles",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/stolzenfels/001.jpg"
        }
      }
    }
  }

];

export default datas;