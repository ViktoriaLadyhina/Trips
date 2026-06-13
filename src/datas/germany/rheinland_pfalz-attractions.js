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
      uk: {
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
      uk: {
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
  },
  {
    id: "deutsches_eck_koblenz",
    type: ["landmark", 'monument_or_fountain', 'viewpoint'], rating: "top",
    path: "deutsches_eck_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz",
    districtPath: "city", cityPath: "koblenz",
    fotoCard: "Germany/rheinland-pfalz/koblenz/deutsches_eck/001.jpg",
    coord: { lat: 50.36407, lng: 7.60564 },
    routes: "castles_rhine_valley", showMore: true,
    translations: {
      ru: {
        name: "Немецкий угол",
        loc: {
          country: "Германия", region: "Рейнланд-Пфальц", district: "Город областного значения", city: "Кобленц", cityDistrict: "район Altstadt"
        },
        short_description: "Немецкий угол (Deutsches Eck) – знаменитый мыс в Кобленце, расположенный в месте слияния рек Рейн и Мозель. Это одна из самых известных исторических и туристических точек Германии, символизирующая объединение немецких земель и значение Кобленца как важного города на Рейне. Главной доминантой комплекса является монументальная конная статуя кайзера Вильгельма I.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Немецкий угол (Deutsches Eck) ", text: "находится в северной части исторического центра Кобленца, где воды Мозеля впадают в Рейн. Благодаря широким набережным, обзорным площадкам и панорамным видам это место стало визитной карточкой города и одной из наиболее посещаемых достопримечательностей федеральной земли Рейнланд-Пфальц" },
            { text: "Сегодня Deutsches Eck представляет собой большой прогулочный комплекс с террасами, флагами федеральных земель Германии, памятными зонами и смотровыми площадками. Отсюда открывается вид на крепость Эренбрайтштайн, мосты через Рейн и Мозель, а также на начало знаменитой долины Верхнего Среднего Рейна, включённой в список Всемирного наследия ЮНЕСКО." },

            { bold: "Атмосфера и значение места" },
            { text: "Deutsches Eck сочетает природный ландшафт, историю, архитектуру и символическое значение. Это место часто используется для городских мероприятий, национальных праздников, туристических экскурсий и речных прогулок по Рейну и Мозелю." },
            { text: "Благодаря расположению у воды Немецкий угол особенно популярен во время закатов и речной навигации. Здесь можно наблюдать круизные суда, прогулочные корабли и характерное разделение оттенков воды двух рек в месте их соединения." },
            { bold: "История" },
            { bold: "Средневековое происхождение", text: "Название «Deutsches Eck» связано с Тевтонским орденом (Deutscher Orden), который в XIII веке получил участок земли рядом с местом слияния рек. Орден построил здесь свою резиденцию и госпиталь, а территория постепенно стала известна как «Немецкий угол»." },
            { text: "В течение столетий Кобленц играл важную роль как торговый и военный центр на Рейне. Расположение между двумя реками делало этот участок стратегически важным для контроля речных путей и торговли." },
            { bold: "Создание памятника", text: "После смерти кайзера Вильгельма I в 1888 году по всей Германии начали появляться памятники в его честь. Для Кобленца выбрали место на мысе у слияния рек, а строительство монумента завершили в 1897 году." },
            { text: "Проект создал архитектор Бруно Шмитц, известный своими национальными монументами эпохи Германской империи. Огромный постамент и конная статуя должны были демонстрировать силу и единство государства." },
            { bold: "XX век и восстановление", text: "Во время Второй мировой войны памятник получил серьёзные повреждения в результате артиллерийских обстрелов. После войны остатки статуи демонтировали, а на постаменте был установлен флаг Германии как символ стремления к будущему объединению страны." },
            { text: "После воссоединения Германии в 1990 году начались дискуссии о восстановлении монумента. В 1993 году новая копия конной статуи была установлена на историческом месте, и сегодня памятник вновь является одним из главных символов Кобленца." }
          ]
        },
        sub_objects: {
          title: "Объекты комплекса",
          items: [
            { bold: "Памятник кайзеру Вильгельму I", text: "<br>Центральным объектом Немецкого угла является огромный конный памятник кайзеру Вильгельму I – первому германскому императору после объединения Германии в XIX веке. Монумент был создан как символ единства Германской империи и национального подъёма после франко-прусской войны. <br>Высота всего комплекса вместе с постаментом составляет около 37 метров. Статуя обращена в сторону Рейна и долгое время считалась символом немецкого национального единства. После разрушений Второй мировой войны памятник долгое время отсутствовал, а его восстановление после объединения Германии в 1993 году стало важным политическим и историческим событием." },
            { bold: "Панорамная площадка", text: "<br>Смотровая зона с видом на слияние Рейна и Мозеля, крепость Эренбрайтштайн и речную долину." },
            { bold: "Памятные таблички", text: "<br>На территории размещены мемориальные плиты и информационные стенды, посвящённые истории Кобленца и объединению Германии." },
            { bold: "Флаги федеральных земель", text: "<br>Вдоль набережной установлены флаги всех земель Германии как символ национального единства." },
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Название города «Кобленц» происходит от латинского слова Confluentes – «слияние рек»." },
            { text: "Немецкий угол считается одним из самых фотографируемых мест на Рейне." },
            { text: "Во время холодной войны на постаменте памятника находился только флаг Германии без статуи." },
            { text: "Высота памятника вместе с постаментом достигает примерно 37 метров." },
            { text: "Во время объединения Германии место стало символом восстановления национального единства." },
            { text: "Отсюда начинается один из самых известных речных туристических маршрутов Германии." }
          ]
        },
        construction_period: "XIII век – появление владений Тевтонского ордена, 1897 год – открытие памятника кайзеру Вильгельму I, 1993 год – восстановление монумента ",
        architects: "Бруно Шмитц (Bruno Schmitz)",
        founder: "Монумент был создан по инициативе властей Германской империи в память о кайзере Вильгельме I.",
        meta: {
          title: "Немецкий угол в Кобленце (Deutsches Eck) – слияние Рейна и Мозеля",
          description: "Немецкий угол в Кобленце — знаменитое место слияния Рейна и Мозеля с памятником кайзеру Вильгельму I и панорамными видами.",
          ogTitle: "Deutsches Eck – главная достопримечательность Кобленца",
          ogDescription: "Узнайте историю Немецкого угла в Кобленце – места слияния Рейна и Мозеля, где расположен знаменитый памятник кайзеру Вильгельму I.",
          keywords: "Deutsches Eck, Немецкий угол, Кобленц, Koblenz, Рейн, Мозель, слияние рек, памятник Вильгельму I, достопримечательности Кобленца, Rhine, Moselle, Kaiser Wilhelm monument, Германия, Rhine Valley, UNESCO Rhine Valley",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/deutsches_eck/001.jpg"
        }
      },
      uk: {
        name: "Німецький кут",
        loc: {
          country: "Німеччина", region: "Рейнланд-Пфальц", district: "Місто обласного значення", city: "Кобленц", cityDistrict: "район Altstadt"
        },
        short_description: "Німецький кут (Deutsches Eck) – знаменитий мис у Кобленці, розташований у місці злиття річок Рейн і Мозель. Це одна з найвідоміших історичних і туристичних точок Німеччини, що символізує об'єднання німецьких земель і значення Кобленца як важливого міста на Рейні. Головною домінантою комплексу є монументальна кінна статуя кайзера Вільгельма I.",
        full_description: {
          title: "Опис і історія",
          items: [
            { bold: "Німецький кут (Deutsches Eck) ", text: "розташований у північній частині історичного центру Кобленца, де води Мозелю впадають у Рейн. Завдяки широким набережним, оглядовим майданчикам і панорамним видам це місце стало візитною карткою міста та однією з найбільш відвідуваних пам’яток федеральної землі Рейнланд-Пфальц" },
            { text: "Сьогодні Deutsches Eck є великим прогулянковим комплексом із терасами, прапорами федеральних земель Німеччини, пам’ятними зонами та оглядовими майданчиками. Звідси відкривається вид на фортецю Еренбрайтштайн, мости через Рейн і Мозель, а також на початок знаменитої долини Верхнього Середнього Рейну, включеної до списку Світової спадщини ЮНЕСКО." },

            { bold: "Атмосфера і значення місця" },
            { text: "Deutsches Eck поєднує природний ландшафт, історію, архітектуру та символічне значення. Це місце часто використовується для міських заходів, національних свят, туристичних екскурсій і річкових прогулянок Рейном і Мозелем." },
            { text: "Завдяки розташуванню біля води Німецький кут особливо популярний під час заходів сонця та річкового руху. Тут можна спостерігати круїзні судна, прогулянкові кораблі та характерне розділення відтінків води двох річок у місці їх злиття." },

            { bold: "Історія" },
            { bold: "Середньовічне походження", text: "Назва «Deutsches Eck» пов’язана з Тевтонським орденом (Deutscher Orden), який у XIII столітті отримав ділянку землі поблизу місця злиття річок. Орден побудував тут свою резиденцію та госпіталь, а територія поступово стала відома як «Німецький кут»." },
            { text: "Протягом століть Кобленц відігравав важливу роль як торговельний і військовий центр на Рейні. Розташування між двома річками робило цю ділянку стратегічно важливою для контролю річкових шляхів і торгівлі." },

            { bold: "Створення пам’ятника", text: "Після смерті кайзера Вільгельма I у 1888 році по всій Німеччині почали з’являтися пам’ятники на його честь. Для Кобленца було обрано місце на мисі біля злиття річок, а будівництво монумента завершили у 1897 році." },
            { text: "Проєкт створив архітектор Бруно Шмітц, відомий своїми національними монументами епохи Німецької імперії. Масивний постамент і кінна статуя мали демонструвати силу та єдність держави." },

            { bold: "XX століття і відновлення", text: "Під час Другої світової війни пам’ятник зазнав серйозних пошкоджень унаслідок артилерійських обстрілів. Після війни залишки статуї було демонтовано, а на постаменті встановили прапор Німеччини як символ прагнення до майбутнього об’єднання країни." },
            { text: "Після возз’єднання Німеччини у 1990 році розпочалися дискусії щодо відновлення монумента. У 1993 році нову копію кінної статуї було встановлено на історичному місці, і сьогодні пам’ятник знову є одним із головних символів Кобленца." }
          ]
        },
        sub_objects: {
          title: "Об’єкти комплексу",
          items: [
            { bold: "Пам’ятник кайзеру Вільгельму I", text: "<br>Центральним об’єктом Німецького кута є величезний кінний пам’ятник кайзеру Вільгельму I – першому німецькому імператору після об’єднання Німеччини у XIX столітті. Монумент був створений як символ єдності Німецької імперії та національного піднесення після франко-прусської війни. <br>Висота всього комплексу разом із постаментом становить близько 37 метрів. Статуя звернена у бік Рейну і тривалий час вважалася символом німецької національної єдності. Після руйнувань Другої світової війни пам’ятник довгий час був відсутній, а його відновлення після об’єднання Німеччини у 1993 році стало важливою політичною та історичною подією." },
            { bold: "Панорамний майданчик", text: "<br>Оглядова зона з видом на злиття Рейну і Мозелю, фортецю Еренбрайтштайн та річкову долину." },
            { bold: "Пам’ятні таблички", text: "<br>На території розміщені меморіальні плити та інформаційні стенди, присвячені історії Кобленца та об’єднанню Німеччини." },
            { bold: "Прапори федеральних земель", text: "<br>Вздовж набережної встановлені прапори всіх земель Німеччини як символ національної єдності." }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Назва міста «Кобленц» походить від латинського слова Confluentes – «злиття річок»." },
            { text: "Німецький кут вважається одним із найбільш фотографованих місць на Рейні." },
            { text: "Під час холодної війни на постаменті пам’ятника був лише прапор Німеччини без статуї." },
            { text: "Висота пам’ятника разом із постаментом становить приблизно 37 метрів." },
            { text: "Під час об’єднання Німеччини місце стало символом відновлення національної єдності." },
            { text: "Звідси починається один із найвідоміших річкових туристичних маршрутів Німеччини." }
          ]
        },
        construction_period: "XIII століття – поява володінь Тевтонського ордену, 1897 рік – відкриття пам’ятника кайзеру Вільгельму I, 1993 рік – відновлення монумента",
        architects: "Бруно Шмітц (Bruno Schmitz)",
        founder: "Монумент був створений з ініціативи влади Німецької імперії на честь кайзера Вільгельма I.",
        meta: {
          title: "Німецький кут у Кобленці (Deutsches Eck) – злиття Рейну і Мозелю",
          description: "Німецький кут у Кобленці — відоме місце злиття Рейну і Мозелю з пам’ятником кайзеру Вільгельму I та панорамними видами.",
          ogTitle: "Deutsches Eck – головна визначна пам’ятка Кобленца",
          ogDescription: "Дізнайтеся історію Німецького кута в Кобленці – місця злиття Рейну і Мозелю, де розташований знаменитий пам’ятник кайзеру Вільгельму I.",
          keywords: "Deutsches Eck, Німецький кут, Кобленц, Koblenz, Рейн, Мозель, злиття річок, пам’ятник Вільгельму I, визначні місця Кобленца, Rhine, Moselle, Kaiser Wilhelm monument, Німеччина, Rhine Valley, UNESCO Rhine Valley",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/deutsches_eck/001.jpg"
        }
      },
      de: {
        name: "Deutsches Eck",
        loc: {
          country: "Deutschland", region: "Rheinland-Pfalz", district: "Stadt von kreisfreier Bedeutung", city: "Koblenz", cityDistrict: "Stadtteil Altstadt"
        },
        short_description: "Das Deutsche Eck ist eine berühmte Landzunge in Koblenz am Zusammenfluss von Rhein und Mosel. Es ist einer der bekanntesten historischen und touristischen Orte Deutschlands und symbolisiert die Einigung der deutschen Länder sowie die Bedeutung von Koblenz als wichtiger Stadt am Rhein. Das zentrale Wahrzeichen ist das monumentale Reiterstandbild von Kaiser Wilhelm I.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Das Deutsche Eck", text: "liegt im nördlichen Teil der historischen Innenstadt von Koblenz, wo die Mosel in den Rhein mündet. Dank breiter Uferpromenaden, Aussichtsplattformen und Panoramablicken ist dieser Ort zu einem Wahrzeichen der Stadt und einer der meistbesuchten Sehenswürdigkeiten des Bundeslandes Rheinland-Pfalz geworden" },
            { text: "Heute ist das Deutsche Eck ein großer Promenadenkomplex mit Terrassen, Fahnen der deutschen Bundesländer, Gedenkbereichen und Aussichtspunkten. Von hier aus hat man einen Blick auf die Festung Ehrenbreitstein, die Brücken über Rhein und Mosel sowie auf den Beginn des berühmten Oberen Mittelrheintals, das zum UNESCO-Welterbe gehört." },

            { bold: "Atmosphäre und Bedeutung" },
            { text: "Das Deutsche Eck verbindet Natur, Geschichte, Architektur und symbolische Bedeutung. Der Ort wird häufig für städtische Veranstaltungen, nationale Feiertage, touristische Ausflüge und Schifffahrten auf Rhein und Mosel genutzt." },
            { text: "Aufgrund der Lage am Wasser ist das Deutsche Eck besonders bei Sonnenuntergang und Schiffsverkehr beliebt. Hier kann man Kreuzfahrtschiffe, Ausflugsboote und den charakteristischen Farbunterschied der beiden Flüsse beobachten." },

            { bold: "Geschichte" },
            { bold: "Mittelalterliche Ursprünge", text: "Der Name „Deutsches Eck“ geht auf den Deutschen Orden zurück, der im 13. Jahrhundert ein Grundstück am Zusammenfluss der Flüsse erhielt. Der Orden errichtete hier seine Niederlassung und ein Hospital, wodurch der Ort als „Deutsches Eck“ bekannt wurde." },
            { text: "Über Jahrhunderte war Koblenz ein wichtiger Handels- und Militärstandort am Rhein. Die Lage zwischen zwei Flüssen machte diesen Bereich strategisch bedeutsam für die Kontrolle der Wasserwege und des Handels." },

            { bold: "Errichtung des Denkmals", text: "Nach dem Tod von Kaiser Wilhelm I. im Jahr 1888 entstanden in ganz Deutschland zahlreiche Denkmäler zu seinen Ehren. Für Koblenz wurde die Landzunge am Zusammenfluss der Flüsse gewählt, und das Monument wurde 1897 fertiggestellt." },
            { text: "Das Projekt wurde vom Architekten Bruno Schmitz entworfen, der für seine nationalen Monumente der Kaiserzeit bekannt ist. Der massive Sockel und das Reiterstandbild sollten Stärke und Einheit des Staates darstellen." },

            { bold: "20. Jahrhundert und Wiederaufbau", text: "Während des Zweiten Weltkriegs wurde das Denkmal durch Artilleriebeschuss schwer beschädigt. Nach dem Krieg wurden die Reste der Statue entfernt und auf dem Sockel die deutsche Flagge als Symbol der Hoffnung auf zukünftige Einheit gesetzt." },
            { text: "Nach der deutschen Wiedervereinigung im Jahr 1990 begann die Diskussion über den Wiederaufbau des Denkmals. 1993 wurde eine neue Kopie des Reiterstandbildes am historischen Standort aufgestellt, und heute ist es erneut eines der wichtigsten Wahrzeichen von Koblenz." }
          ]
        },
        sub_objects: {
          title: "Anlage des Komplexes",
          items: [
            { bold: "Reiterstandbild von Kaiser Wilhelm I", text: "<br>Das zentrale Element des Deutschen Ecks ist das monumentale Reiterstandbild von Kaiser Wilhelm I – dem ersten deutschen Kaiser nach der Einigung Deutschlands im 19. Jahrhundert. Das Denkmal wurde als Symbol der Einheit des Deutschen Reiches und des nationalen Aufschwungs nach dem Deutsch-Französischen Krieg geschaffen. <br>Die Gesamthöhe des Denkmals inklusive Sockel beträgt etwa 37 Meter. Die Statue ist zum Rhein hin ausgerichtet und galt lange als Symbol der deutschen Einheit. Nach den Zerstörungen des Zweiten Weltkriegs war das Denkmal lange Zeit verschwunden, und seine Wiedererrichtung im Jahr 1993 nach der Wiedervereinigung Deutschlands war ein bedeutendes politisches und historisches Ereignis." },
            { bold: "Aussichtsplattform", text: "<br>Aussichtsbereich mit Blick auf den Zusammenfluss von Rhein und Mosel, die Festung Ehrenbreitstein und das Flusstal." },
            { bold: "Gedenktafeln", text: "<br>Auf dem Gelände befinden sich Gedenkplatten und Informationstafeln zur Geschichte von Koblenz und zur deutschen Einheit." },
            { bold: "Fahnen der Bundesländer", text: "<br>Entlang der Uferpromenade sind die Fahnen aller deutschen Bundesländer als Symbol der nationalen Einheit aufgestellt." }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Der Name der Stadt Koblenz stammt vom lateinischen Wort Confluentes – „Zusammenfluss der Flüsse“." },
            { text: "Das Deutsche Eck gehört zu den meistfotografierten Orten am Rhein." },
            { text: "Während des Kalten Krieges stand auf dem Sockel des Denkmals nur die deutsche Flagge ohne Statue." },
            { text: "Die Höhe des Denkmals inklusive Sockel beträgt etwa 37 Meter." },
            { text: "Während der deutschen Wiedervereinigung wurde der Ort zu einem Symbol der nationalen Einheit." },
            { text: "Von hier aus beginnt eine der bekanntesten Fluss-Tourismusrouten Deutschlands." }
          ]
        },
        construction_period: "13. Jahrhundert – Entstehung der Besitzungen des Deutschen Ordens, 1897 – Eröffnung des Denkmals für Kaiser Wilhelm I, 1993 – Wiederaufbau des Monuments",
        architects: "Bruno Schmitz",
        founder: "Das Monument wurde auf Initiative der Behörden des Deutschen Reiches zum Gedenken an Kaiser Wilhelm I errichtet.",
        meta: {
          title: "Deutsches Eck in Koblenz – Zusammenfluss von Rhein und Mosel",
          description: "Das Deutsche Eck in Koblenz ist ein berühmter Ort am Zusammenfluss von Rhein und Mosel mit dem Reiterstandbild von Kaiser Wilhelm I und Panoramablicken.",
          ogTitle: "Deutsches Eck – wichtigste Sehenswürdigkeit von Koblenz",
          ogDescription: "Erfahren Sie die Geschichte des Deutschen Ecks in Koblenz – dem Zusammenfluss von Rhein und Mosel mit dem berühmten Kaiser-Wilhelm-Denkmal.",
          keywords: "Deutsches Eck, Koblenz, Rhein, Mosel, Zusammenfluss, Kaiser Wilhelm Denkmal, Sehenswürdigkeiten Koblenz, Germany, Rhine Valley, Moselle",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/deutsches_eck/001.jpg"
        }
      }
    }
  },
  {
    id: "kurfuerstliches_schloss_koblenz",
    type: ["palace_or_castle"], rating: "popular",
    path: "kurfuerstliches_schloss_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "koblenz",
    fotoCard: "Germany/rheinland-pfalz/koblenz/kurfuerstliches_schloss/001.jpg",
    coord: { lat: 50.355565, lng: 7.602226 },
    routes: "castles_rhine_valley", showMore: true,
    translations: {
      ru: {
        name: "Курфюрстский дворец",
        loc: {
          country: "Германия", region: "Рейнланд-Пфальц", district: "Город областного значения", city: "Кобленц", cityDistrict: "район Mitte"
        },
        short_description: "Курфюрстский дворец – один из главных дворцов города и яркий пример раннего классицизма на Рейне. Он расположен прямо на набережной и формирует один из самых узнаваемых городских ансамблей. Сегодня дворец используется как административное и культурное здание, а его парк открыт для прогулок.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Курфюрстский дворец", text: "был построен в конце XVIII века как резиденция последнего трирского курфюрста Клеменса Венцеслава Саксонского. Архитектура дворца заметно отличается от типичных средневековых замков региона: вместо крепостных башен и оборонительных стен здесь преобладают симметрия, светлые фасады и элементы французского классицизма." },
            { text: "Дворец расположен на берегу Рейна и образует единый ансамбль с дворцовым садом и набережной. Центральное здание соединяется с полукруглыми боковыми корпусами, формируя просторную площадь перед главным входом. Благодаря расположению у воды дворец выглядит особенно эффектно со стороны реки и считается одной из самых узнаваемых панорам Кобленца." },
            { text: "Сегодня внутренние помещения в основном используются для мероприятий, конференций и работы федеральных учреждений. Часть комплекса периодически закрывается на реставрацию и подготовку к BUGA 2029. При этом дворцовый парк и прилегающие территории остаются доступными для прогулок и отдыха. " },
            { bold: "История", text: "Строительство Курфюрстского дворца началось в 1777 году по приказу курфюрста Клеменса Венцеслава Саксонского. Над проектом работали французские архитекторы Пьер-Мишель д’Икснар и Антуан-Франсуа Пейр. Дворец стал одной из последних крупных резиденций, построенных в Германии непосредственно перед Французской революцией. " },
            { text: "После бегства курфюрста в 1794 году дворец переходил под контроль французских, а затем прусских властей. В XIX веке здесь проживали представители прусской королевской семьи, включая будущего императора Вильгельма I и императрицу Августу. В этот период Кобленц получил репутацию «рейнского Потсдама»." },
            { text: "Во время Второй мировой войны дворец почти полностью выгорел после бомбардировок 1944 года. В 1950-х годах его восстановили по историческим чертежам, хотя часть интерьеров была выполнена уже в стиле послевоенной эпохи." },
            { text: "Дворец расположен в пределах культурного ландшафта Верхней долины Среднего Рейна, включённого в список Всемирного наследия ЮНЕСКО." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Neustadt 24, 56068 Koblenz, Germany" },
            { bold: "Режим посещения: ", text: "внутренние помещения обычно недоступны для свободного туристического посещения, так как используются для мероприятий и работы учреждений. Дворцовый парк и территория вокруг замка открыты для прогулок." },
            { bold: "Важно", text: "На момент 2026 года часть комплекса проходит масштабную реставрацию к федеральной садовой выставке BUGA 2029. Некоторые зоны могут быть временно закрыты." }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Курфюрстский дворец считается одним из лучших примеров французского раннего классицизма в юго-западной Германии." },
            { text: "Это одна из последних крупных дворцовых резиденций, построенных в Германии до Французской революции." },
            { text: "После Второй мировой войны дворец пришлось практически полностью восстанавливать заново." },
            { text: "Во время BUGA 2011 территория вокруг замка была полностью обновлена и превращена в современный парк." }
          ]
        },
        construction_period: "1777–1793",
        architects: "Пьер-Мишель д’Икснар (Pierre-Michel d’Ixnard), Антуан-Франсуа Пейр (Antoine-François Peyre) ",
        founder: "Клеменс Венцеслав Саксонский – последний курфюрст Трира",
        meta: {
          title: "Курфюрстский дворец в Кобленце – дворец на берегу Рейна",
          description: "Курфюрстский дворец в Кобленце – один из важнейших дворцов раннего классицизма Германии. История, архитектура, парк, фото и информация для туристов.",
          ogTitle: "Курфюрстский дворец – исторический дворец Кобленца на Рейне",
          ogDescription: "Узнайте историю Курфюрстского дворца в Кобленце – бывшей резиденции курфюрстов Трира, расположенной прямо на берегу Рейна.",
          keywords: "Kurfürstliches Schloss Koblenz, Курфюрстский дворец Кобленц, дворец Кобленц, достопримечательности Кобленца, дворцы Германии, Koblenz palace, Electoral Palace Koblenz, Рейн Кобленц, дворцы Рейнланд-Пфальц, UNESCO Koblenz",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/kurfuerstliches_schloss/001.jpg"
        }
      },
      uk: {
        name: "Курфюрстський палац",
        loc: {
          country: "Німеччина", region: "Рейнланд-Пфальц", district: "Місто обласного значення", city: "Кобленц", cityDistrict: "район Mitte"
        },
        short_description: "Курфюрстський палац – один із головних палаців міста та яскравий приклад раннього класицизму на Рейні. Він розташований прямо на набережній і формує один із найвпізнаваніших міських ансамблів. Сьогодні палац використовується як адміністративна та культурна будівля, а його парк відкритий для прогулянок.",
        full_description: {
          title: "Опис та історія",
          items: [
            { bold: "Курфюрстський палац", text: "був побудований наприкінці XVIII століття як резиденція останнього трірського курфюрста Клеменса Венцеслава Саксонського. Архітектура палацу помітно відрізняється від типових середньовічних замків регіону: замість оборонних веж і фортифікаційних стін тут переважають симетрія, світлі фасади та елементи французького класицизму." },
            { text: "Палац розташований на березі Рейну та утворює єдиний ансамбль із палацовим садом і набережною. Центральна будівля з’єднується з напівкруглими бічними корпусами, формуючи простору площу перед головним входом. Завдяки розташуванню біля води палац виглядає особливо ефектно з боку річки та вважається однією з найвпізнаваніших панорам Кобленца." },
            { text: "Сьогодні внутрішні приміщення переважно використовуються для заходів, конференцій і роботи федеральних установ. Частина комплексу періодично закривається на реставрацію та пíдготовку до BUGA 2029. При цьому палацовий парк і прилеглІ територІї залишаються доступними для прогулянок і вІдпочинку." },
            { bold: "ІсторІя", text: "БудІвництво Курфюрстського палацу розпочалося у 1777 роцІ за наказом курфюрста Клеменса Венцеслава Саксонського. Над проєктом працювали французькІ архІтектори П’єр-МІшель д’Ікснар і Антуан-Франсуа Пейр. Палац став однІєю з останнИх великих резиденцIй, збудованИх у НІмеччинI безпосередньо перед Французькою революцIєю." },
            { text: "ПІсля втечI курфюрста у 1794 роцI палац переходив пIд контроль французької, а згодом прусської влади. У XIX столIттI тут проживали представники прусської королIвської родини, включно з майбутнIм імператором ВIльгельмом I та імператрицею Августою. У цей перIод Кобленц отримав репутацIю «рейнського Потсдама»." },
            { text: "ПІд час Другої свIтової вIйни палац майже повнIстю згорIв пIсля бомбардувань 1944 року. У 1950-х роках його вiдновили за iсторичними кресленнями, хоча частина iнтер’Єрiв була виконана вже у стилi пiслявоєнної епохи. Палац розташований у межах культурного ландшафту Верхньої долини Середнього Рейну, включеного до списку ВсесвIтньої спадщини ЮНЕСКО." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Neustadt 24, 56068 Koblenz, Germany" },
            { bold: "Режим відвідування: ", text: "внутрішні приміщення зазвичай недоступні для вільного туристичного відвідування, оскільки використовуються для заходів і роботи установ. Палацовий парк і територія навколо замку відкриті для прогулянок." },
            { bold: "Важливо", text: "Станом на 2026 рік частина комплексу проходить масштабну реставрацію до федеральної садової виставки BUGA 2029. Деякі зони можуть бути тимчасово закриті." }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Курфюрстський палац вважається одним із найкращих прикладів французького раннього класицизму в південно-західній Німеччині." },
            { text: "Це одна з останніх великих палацових резиденцій, збудованих у Німеччині до Французької революції." },
            { text: "Після Другої світової війни палац довелося практично повністю відбудовувати заново." },
            { text: "Під час BUGA 2011 територія навколо замку була повністю оновлена та перетворена на сучасний парк." }
          ]
        },
        construction_period: "1777–1793",
        architects: "П’єр-Мішель д’Ікснар (Pierre-Michel d’Ixnard), Антуан-Франсуа Пейр (Antoine-François Peyre)",
        founder: "Клеменс Венцеслав Саксонський – останній курфюрст Тріра",
        meta: {
          title: "Курфюрстський палац у Кобленці – палац на березі Рейну",
          description: "Курфюрстський палац у Кобленці – один із найважливіших палаців раннього класицизму Німеччини. Історія, архітектура, парк, фото та інформація для туристів.",
          ogTitle: "Курфюрстський палац – історичний палац Кобленця на Рейні",
          ogDescription: "Дізнайтеся історію Курфюрстського палацу в Кобленці – колишньої резиденції курфюрстів Тріра, розташованої прямо на березі Рейну.",
          keywords: "Kurfürstliches Schloss Koblenz, Курфюрстський палац Кобленц, палац Кобленц, визначні місця Кобленца, палаци Німеччини, Koblenz palace, Electoral Palace Koblenz, Рейн Кобленц, палаци Рейнланд-Пфальц, UNESCO Koblenz",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/kurfuerstliches_schloss/001.jpg"
        }
      },
      de: {
        name: "Kurfürstliches Schloss",
        loc: {
          country: "Deutschland", region: "Rheinland-Pfalz", district: "Stadt mit Kreisstatus", city: "Koblenz", cityDistrict: "Stadtteil Mitte"
        },
        short_description: "Das Kurfürstliche Schloss ist eines der wichtigsten Paläste der Stadt und ein herausragendes Beispiel des frühen Klassizismus am Rhein. Es liegt direkt an der Uferpromenade und prägt eines der bekanntesten städtischen Ensembles. Heute wird das Schloss als Verwaltungs- und Kulturgebäude genutzt, und der Park ist für Spaziergänge geöffnet.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Das Kurfürstliche Schloss", text: "wurde Ende des 18. Jahrhunderts als Residenz des letzten Trierer Kurfürsten Clemens Wenzeslaus von Sachsen erbaut. Die Architektur des Palastes unterscheidet sich deutlich von den typischen mittelalterlichen Burgen der Region: Statt Wehrtürmen und Befestigungsmauern dominieren Symmetrie, helle Fassaden und Elemente des französischen Klassizismus." },
            { text: "Das Schloss liegt am Rheinufer und bildet ein einheitliches Ensemble mit dem Schlossgarten und der Uferpromenade. Der zentrale Bau ist mit halbkreisförmigen Seitenflügeln verbunden und bildet einen großzügigen Platz vor dem Haupteingang. Durch die Lage am Wasser wirkt der Palast besonders eindrucksvoll vom Fluss aus und gilt als eines der bekanntesten Panoramen von Koblenz." },
            { text: "Heute werden die Innenräume hauptsächlich für Veranstaltungen, Konferenzen und die Arbeit von Bundesbehörden genutzt. Teile der Anlage werden regelmäßig restauriert und für die BUGA 2029 vorbereitet. Der Schlosspark und die umliegenden Bereiche sind jedoch für Spaziergänge und Erholung zugänglich." },
            { bold: "Geschichte", text: "Der Bau des Kurfürstlichen Schlosses begann 1777 im Auftrag des Kurfürsten Clemens Wenzeslaus von Sachsen. An dem Projekt arbeiteten die französischen Architekten Pierre-Michel d’Ixnard und Antoine-François Peyre. Das Schloss war eine der letzten großen Residenzen, die in Deutschland unmittelbar vor der Französischen Revolution errichtet wurden." },
            { text: "Nach der Flucht des Kurfürsten im Jahr 1794 kam der Palast unter französische und später preußische Kontrolle. Im 19. Jahrhundert wohnten hier Mitglieder der preußischen Königsfamilie, darunter der spätere Kaiser Wilhelm I. und Kaiserin Augusta. In dieser Zeit erhielt Koblenz den Ruf als „rheinisches Potsdam“." },
            { text: "Während des Zweiten Weltkriegs wurde das Schloss nach den Bombardierungen von 1944 fast vollständig zerstört. In den 1950er Jahren wurde es anhand historischer Pläne wiederaufgebaut, wobei ein Teil der Innenräume im Stil der Nachkriegszeit gestaltet wurde. Das Schloss liegt innerhalb der Kulturlandschaft des Oberen Mittelrheintals, die zum UNESCO-Welterbe gehört." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Neustadt 24, 56068 Koblenz, Deutschland" },
            { bold: "Besuchsregelung: ", text: "Die Innenräume sind in der Regel nicht frei zugänglich, da sie für Veranstaltungen und Behörden genutzt werden. Der Schlosspark und das umliegende Gelände sind jedoch für Spaziergänge geöffnet." },
            { bold: "Wichtig", text: "Stand 2026 befindet sich ein Teil der Anlage im Rahmen der BUGA 2029 in umfangreichen Restaurierungsarbeiten. Einige Bereiche können zeitweise gesperrt sein." }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Das Kurfürstliche Schloss gilt als eines der besten Beispiele des frühen französischen Klassizismus in Südwestdeutschland." },
            { text: "Es ist eine der letzten großen Residenzen, die in Deutschland vor der Französischen Revolution errichtet wurden." },
            { text: "Nach dem Zweiten Weltkrieg musste der Palast nahezu vollständig wiederaufgebaut werden." },
            { text: "Während der BUGA 2011 wurde das Gelände rund um das Schloss umfassend modernisiert und in einen zeitgemäßen Park umgewandelt." }
          ]
        },
        construction_period: "1777–1793",
        architects: "Pierre-Michel d’Ixnard, Antoine-François Peyre",
        founder: "Clemens Wenzeslaus von Sachsen – letzter Trierer Kurfürst",
        meta: {
          title: "Kurfürstliches Schloss in Koblenz – Palast am Rhein",
          description: "Das Kurfürstliche Schloss in Koblenz ist eines der bedeutendsten Paläste des frühen Klassizismus in Deutschland. Geschichte, Architektur, Park und Besucherinformationen.",
          ogTitle: "Kurfürstliches Schloss – historischer Palast in Koblenz am Rhein",
          ogDescription: "Erfahren Sie mehr über das Kurfürstliche Schloss in Koblenz – die ehemalige Residenz der Trierer Kurfürsten direkt am Rheinufer.",
          keywords: "Kurfürstliches Schloss Koblenz, Schloss Koblenz, Sehenswürdigkeiten Koblenz, Schlösser Deutschland, Koblenz palace, Electoral Palace Koblenz, Rhein Koblenz, Rheinland-Pfalz Schlösser, UNESCO Oberes Mittelrheintal",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/kurfuerstliches_schloss/001.jpg"
        }
      }
    }
  },
  {
    id: "altstadt_koblenz",
    type: ["historical_area"], rating: "popular",
    path: "altstadt_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "koblenz",
    fotoCard: "Germany/rheinland-pfalz/koblenz/altstadt/006.jpg",
    subObjects: ["citykirche_koblenz",],
    translations: {
      ru: {
        name: "Старый город Кобленца",
        loc: {
          country: "Германия", region: "Рейнланд-Пфальц", district: "Город областного значения", city: "Кобленц", cityDistrict: "район Altstadt"
        },
        short_description: "Исторический центр Кобленца с узкими улочками, площадями, старинной архитектурой и атмосферой рейнского города.",
        short_description_subObjects: {
          text: "В старом городе Кобленца расположены такие достопримечательности:",
          items: [
            { bold: "Иезуитская церковь Кобленца (Citykirche)", text: "– историческая церковь XVII века на Иезуитов (Jesuitenplatz) в центре старого города Кобленца, сочетающая оригинальный фасад и современное внутреннее пространство." },
          ]
        },
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Старый город Кобленца", text: "– исторический центр одного из старейших городов Германии, расположенный у слияния рек Рейн и Мозель. Узкие мощёные улицы, уютные площади, старинные фасады и многочисленные кафе создают атмосферу типичного рейнского города с богатым прошлым. Здесь сохранились здания разных эпох – от средневековья до барокко и классицизма." },
            { text: "Во время прогулки по Altstadt можно увидеть исторические площади Münzplatz, Jesuitenplatz и Görresplatz, старые фонтаны, церкви и традиционные немецкие дома с декоративными фасадами. Этот район считается одним из самых популярных туристических мест Кобленца и одновременно важным культурным и гастрономическим центром города." },
            { text: "Сегодня исторический центр гармонично сочетает старинную архитектуру и современную городскую жизнь. Здесь регулярно проходят фестивали, рождественские ярмарки, концерты и другие мероприятия, а многочисленные рестораны и винные заведения знакомят гостей с кухней и винной культурой региона Рейнланд-Пфальц." },
            { bold: "История", text: "Кобленца уходит корнями во времена Римской империи. Благодаря стратегическому расположению у слияния двух рек здесь уже в I веке существовали римские укрепления и военные лагеря. Позднее город превратился в важный торговый и религиозный центр региона." },
            { text: "В средние века Кобленц активно развивался под влиянием курфюрстов Трира. В этот период появились церкви, площади, оборонительные сооружения и дома богатых купцов. Несмотря на войны и пожары, значительная часть средневековой планировки улиц сохранилась до наших дней." },
            { text: "Во время Второй мировой войны исторический центр серьёзно пострадал от бомбардировок, однако после войны был восстановлен с сохранением традиционного архитектурного облика. Сегодня Старый город является важной частью культурного наследия региона и входит в территорию объекта Всемирного наследия ЮНЕСКО «Верхняя Средняя долина Рейна»." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Altstadt Koblenz, 56068 Koblenz, Германия" },
            { bold: "Лучшее время для посещения:", text: "весна, лето и период рождественских ярмарок" },
            { bold: "Вход:", text: "свободный" },
            { bold: "Рядом находятся:", text: "Немецкий угол, Базилика Святого Кастора, Курфюрстский дворец" },
            { bold: "Подходит для:", text: "пеших прогулок, фотосъёмки, гастрономического туризма" }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Кобленц считается одним из старейших городов Германии." },
            { text: "Название города происходит от латинского слова Confluentes – «слияние рек»." },
            { text: "Многие улицы Старого города сохранили средневековую планировку." },
            { text: "В этом районе расположено большое количество винных заведений региона Мозель и Рейн." },
            { text: "Старый город особенно популярен во время рождественского рынка Кобленца." }
          ]
        },
        meta: {
          title: "Старый город Кобленца — достопримечательность Кобленца у слияния Рейна и Мозеля",
          description: "Старый город Кобленца – исторический центр у Рейна и Мозеля с площадями, старинной архитектурой, кафе и атмосферой средневекового города.",
          ogTitle: "Старый город Кобленца | Исторический Altstadt",
          ogDescription: "Откройте атмосферу Старого города Кобленца – исторические улицы, площади, рестораны и архитектура у слияния Рейна и Мозеля.",
          keywords: "Старый город Кобленца, Altstadt Koblenz, исторический центр Кобленца, что посмотреть в Кобленце, Koblenz Altstadt, достопримечательности Кобленца, Рейн, Мозель",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/altstadt/006.jpg"
        }
      },
      uk: {
        name: "Старе місто Кобленца",
        loc: {
          country: "Німеччина",
          region: "Рейнланд-Пфальц",
          district: "місто",
          city: "Кобленц",
          cityDistrict: "район Altstadt"
        },
        short_description: "Історичний центр Кобленца з вузькими вуличками, площами, старовинною архітектурою та атмосферою рейнського міста.",
        short_description_subObjects: {
          text: "У старому місті Кобленца розташовані такі визначні пам’ятки:",
          items: [
            { bold: "Єзуїтська церква Кобленца (Citykirche)", text: "– історична церква XVII століття на площі Єзуїтів (Jesuitenplatz) у центрі старого міста Кобленца, що поєднує оригінальний фасад і сучасний внутрішній простір." },
          ]
        },
        full_description: {
          title: "Опис та історія",
          items: [
            { bold: "Старе місто Кобленца", text: "– історичний центр одного з найстаріших міст Німеччини, розташований у місці злиття річок Рейн і Мозель. Вузькі бруковані вулиці, затишні площі, старовинні фасади та численні кафе створюють атмосферу типового рейнського міста з багатовіковою історією. Тут збереглися будівлі різних епох – від середньовіччя до бароко та класицизму." },
            { text: "Під час прогулянки Altstadt можна побачити історичні площі Münzplatz, Jesuitenplatz і Görresplatz, старі фонтани, церкви та традиційні німецькі будинки з декоративними фасадами. Цей район вважається одним із найпопулярніших туристичних місць Кобленца та водночас важливим культурним і гастрономічним центром міста." },
            { text: "Сьогодні історичний центр гармонійно поєднує старовинну архітектуру та сучасне міське життя. Тут регулярно проходять фестивалі, різдвяні ярмарки, концерти та інші заходи, а численні ресторани та винні заклади знайомлять гостей із кухнею та винною культурою регіону Рейнланд-Пфальц." },
            { bold: "Історія", text: "Історія Кобленца сягає часів Римської імперії. Завдяки стратегічному розташуванню в місці злиття двох річок тут уже в I столітті існували римські укріплення та військові табори. Згодом місто перетворилося на важливий торговий і релігійний центр регіону." },
            { text: "У середньовіччі Кобленц активно розвивався під впливом курфюрстів Тріра. У цей період з’явилися церкви, площі, оборонні споруди та будинки заможних купців. Попри війни та пожежі, значна частина середньовічного планування вулиць збереглася до сьогодні." },
            { text: "Під час Другої світової війни історичний центр зазнав серйозних руйнувань унаслідок бомбардувань, однак після війни був відновлений зі збереженням історичного архітектурного вигляду. Сьогодні Старе місто є важливою частиною культурної спадщини регіону та входить до території об’єкта Світової спадщини ЮНЕСКО «Верхня Середня долина Рейну»." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Altstadt Koblenz, 56068 Koblenz, Німеччина" },
            { bold: "Найкращий час для відвідування:", text: "весна, літо та період різдвяних ярмарків" },
            { bold: "Вхід:", text: "безкоштовний" },
            { bold: "Поруч розташовані:", text: "Німецький кут, Базиліка Святого Кастора, Курфюрстський палац" },
            { bold: "Підходить для:", text: "піших прогулянок, фотозйомки, гастрономічного туризму" }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Кобленц вважається одним із найстаріших міст Німеччини." },
            { text: "Назва міста походить від латинського слова Confluentes – «злиття річок»." },
            { text: "Багато вулиць Старого міста зберегли середньовічне планування." },
            { text: "У цьому районі розташовано велику кількість винних закладів регіонів Мозель та Рейн." },
            { text: "Старе місто особливо популярне під час різдвяного ярмарку Кобленца." }
          ]
        },
        meta: {
          title: "Старе місто Кобленца — визначна пам’ятка Кобленца біля злиття Рейну і Мозелю",
          description: "Старе місто Кобленца – історичний центр біля Рейну і Мозелю з площами, старовинною архітектурою, кафе та атмосферою середньовічного міста.",
          ogTitle: "Старе місто Кобленца | Історичний Altstadt",
          ogDescription: "Відкрийте атмосферу Старого міста Кобленца – історичні вулиці, площі, ресторани та архітектура біля злиття Рейну і Мозелю.",
          keywords: "Старе місто Кобленца, Altstadt Koblenz, історичний центр Кобленца, що подивитися в Кобленці, Koblenz Altstadt, визначні місця Кобленца, Рейн, Мозель",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/altstadt/006.jpg"
        }
      },
      de: {
        name: "Altstadt Koblenz",
        loc: {
          country: "Deutschland", region: "Rheinland-Pfalz", city: "Koblenz", cityDistrict: "Stadtteil Altstadt"
        },
        short_description: "Historisches Zentrum von Koblenz mit engen Gassen, Plätzen, historischer Architektur und der Atmosphäre einer rheinischen Stadt.",
        short_description_subObjects: {
          text: "In der Altstadt von Koblenz befinden sich folgende Sehenswürdigkeiten:",
          items: [
            { bold: "Citykirche (Jesuitenkirche)", text: "– historische Kirche aus dem 17. Jahrhundert am Jesuitenplatz im Zentrum der Altstadt von Koblenz, die eine originale Fassade mit einem modernen Innenraum verbindet." },
          ]
        },
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Altstadt Koblenz", text: "– historisches Zentrum einer der ältesten Städte Deutschlands, gelegen am Zusammenfluss von Rhein und Mosel. Enge gepflasterte Gassen, gemütliche Plätze, historische Fassaden und zahlreiche Cafés schaffen die Atmosphäre einer typischen rheinischen Stadt mit jahrhundertealter Geschichte. Hier sind Gebäude aus verschiedenen Epochen erhalten – vom Mittelalter über das Barock bis zum Klassizismus." },
            { text: "Bei einem Spaziergang durch die Altstadt kann man historische Plätze wie den Münzplatz, den Jesuitenplatz und den Görresplatz, alte Brunnen, Kirchen sowie traditionelle deutsche Häuser mit dekorativen Fassaden entdecken. Dieses Viertel gehört zu den beliebtesten touristischen Bereichen von Koblenz und ist zugleich ein wichtiges kulturelles und gastronomisches Zentrum der Stadt." },
            { text: "Heute verbindet die historische Innenstadt auf harmonische Weise alte Architektur mit modernem Stadtleben. Hier finden regelmäßig Festivals, Weihnachtsmärkte, Konzerte und andere Veranstaltungen statt, während zahlreiche Restaurants und Weinstuben die Besucher mit der regionalen Küche und Weinkultur von Rheinland-Pfalz vertraut machen." },
            { bold: "Geschichte", text: "Die Geschichte von Koblenz reicht bis in die Zeit des Römischen Reiches zurück. Aufgrund der strategischen Lage am Zusammenfluss zweier Flüsse existierten hier bereits im 1. Jahrhundert römische Befestigungen und Militärlager. Später entwickelte sich die Stadt zu einem wichtigen Handels- und religiösen Zentrum der Region." },
            { text: "Im Mittelalter wuchs Koblenz unter dem Einfluss der Trierer Kurfürsten. In dieser Zeit entstanden Kirchen, Plätze, Befestigungsanlagen und Häuser wohlhabender Kaufleute. Trotz Kriegen und Bränden blieb ein großer Teil der mittelalterlichen Straßenstruktur bis heute erhalten." },
            { text: "Während des Zweiten Weltkriegs wurde die historische Innenstadt durch Bombardierungen schwer beschädigt, nach dem Krieg jedoch unter Bewahrung des historischen Stadtbildes wiederaufgebaut. Heute ist die Altstadt ein bedeutender Teil des kulturellen Erbes der Region und Teil des UNESCO-Welterbes „Oberes Mittelrheintal“." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Altstadt Koblenz, 56068 Koblenz, Deutschland" },
            { bold: "Beste Besuchszeit:", text: "Frühling, Sommer und Weihnachtsmarktzeit" },
            { bold: "Eintritt:", text: "frei" },
            { bold: "In der Nähe:", text: "Deutsches Eck, Basilika St. Kastor, Kurfürstliches Schloss" },
            { bold: "Geeignet für:", text: "Spaziergänge, Fotografie, kulinarischen Tourismus" }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Koblenz gilt als eine der ältesten Städte Deutschlands." },
            { text: "Der Stadtname stammt vom lateinischen Wort Confluentes – „Zusammenfluss“." },
            { text: "Viele Straßen der Altstadt haben ihren mittelalterlichen Verlauf bis heute bewahrt." },
            { text: "In diesem Viertel gibt es zahlreiche Weinstuben der Mosel- und Rheinregion." },
            { text: "Die Altstadt ist besonders während des Koblenzer Weihnachtsmarktes beliebt." }
          ]
        },
        meta: {
          title: "Altstadt Koblenz — Sehenswürdigkeit in Koblenz am Rhein und Moselzusammenfluss",
          description: "Die Altstadt von Koblenz bietet historische Gassen, Plätze, Architektur, Cafés und die Atmosphäre einer mittelalterlichen Stadt am Rhein und an der Mosel.",
          ogTitle: "Altstadt Koblenz | Historisches Zentrum",
          ogDescription: "Entdecken Sie die Altstadt von Koblenz mit ihren historischen Straßen, Plätzen und der einzigartigen Atmosphäre am Rhein und an der Mosel.",
          keywords: "Altstadt Koblenz, Koblenz Altstadt, historische Innenstadt Koblenz, Sehenswürdigkeiten Koblenz, was sehen in Koblenz, Rhein, Mosel",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/altstadt/006.jpg"
        }
      }
    }
  },
  {
    id: "citykirche_koblenz",
    type: ["cathedral"], rating: "popular",
    path: "citykirche_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "koblenz",
    hiddenFromList: true, showMore: true,
    fotoCard: "Germany/rheinland-pfalz/koblenz/altstadt/citykirche/001.jpg",
    coord: { lat: 50.36032214728197, lng: 7.598783445009036 },
    translations: {
      ru: {
        name: "Иезуитская церковь Кобленца (Citykirche)",
        loc: {
          country: "Германия", region: "Рейнланд-Пфальц", city: "Кобленц", cityDistrict: "район Altstadt"
        },
        officialSite: [
          { bold: "Официальный сайт", link: "https://www.citykirche-koblenz.de" }
        ],
        short_description: "Историческая церковь в центре старого города на площади Иезуитов (Jesuitenplatz). Она была построена в XVII веке как часть комплекса иезуитского ордена. Сегодня здание используется как открытая городская церковь для богослужений, концертов и культурных мероприятий.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Иезуитская церковь Кобленца (Citykirche)", text: "расположена в самом центре старого города на площади Иезуитов (Jesuitenplatz). Это историческое здание связано с деятельностью ордена иезуитов в XVII веке и развитием религиозной жизни города." },
            { text: "Сегодня церковь используется как открытое городское пространство. Здесь проходят богослужения, концерты и культурные мероприятия, поэтому здание выполняет одновременно религиозную и общественную функцию." },
            { text: "Фасад здания сохраняет исторический облик, а внутреннее пространство после послевоенного восстановления оформлено в современном стиле." },
            { bold: "История", text: "Иезуитская церковь в Кобленце была построена в начале XVII века как часть комплекса ордена иезуитов. При церкви действовала школа, которая играла важную роль в образовательной системе города в эпоху Контрреформации." },
            { text: "Здание пережило несколько исторических этапов, оставаясь важным религиозным и образовательным центром Кобленца." },
            { text: "В 1944 году церковь была сильно повреждена во время Второй мировой войны. После восстановления фасад был сохранён, а интерьер полностью переосмыслен и оформлен в современном стиле, что сделало здание примером сочетания исторической архитектуры и современной функции." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Jesuitenplatz 4, 56068 Koblenz, Deutschland" },
            { bold: "Конфессия:", text: "римско-католическая церковь" },
            { bold: "Вход:", text: "обычно свободный (зависит от мероприятий)" }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Изначально входила в комплекс иезуитского монастыря и школы" },
            { text: "После войны интерьер сознательно сделали современным" },
            { text: "Сегодня используется как открытое культурное пространство" },
            { text: "Расположена на одной из центральных площадей старого города" }
          ]
        },
        construction_period: "1613–1617",
        founder: "Орден иезуитов (Societas Jesu)",
        meta: {
          title: "Иезуитская церковь Кобленца (Citykirche) – историческая церковь в центре города",
          description: "Иезуитская церковь Кобленца (Citykirche) – историческая церковь XVII века в центре старого города, сочетающая барочный фасад и современное культурное пространство.",
          ogTitle: "Citykirche Кобленца – история и современность в центре старого города",
          ogDescription: "Бывшая иезуитская церковь XVII века в Кобленце: историческая архитектура, современный интерьер и культурная жизнь города.",
          keywords: "Citykirche Koblenz, Jesuitenkirche Koblenz, Кобленц церковь, старый город Кобленц, Jesuitenplatz, исторические церкви Германии, барочная церковь Кобленца",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/altstadt/citykirche/001.jpg"
        }
      },
      uk: {
        name: "Єзуїтська церква Кобленца (Citykirche)",
        loc: {
          country: "Німеччина", region: "Рейнланд-Пфальц", city: "Кобленц", cityDistrict: "район Altstadt"
        },
        officialSite: [
          { bold: "Офіційний сайт", link: "https://www.citykirche-koblenz.de" }
        ],
        short_description: "Історична церква в центрі старого міста на площі Єзуїтів (Jesuitenplatz). Вона була збудована у XVII столітті як частина комплексу єзуїтського ордену. Сьогодні будівля використовується як відкрита міська церква для богослужінь, концертів і культурних заходів.",
        full_description: {
          title: "Опис та історія",
          items: [
            { bold: "Єзуїтська церква Кобленца (Citykirche)", text: "розташована в самому центрі старого міста на площі Єзуїтів (Jesuitenplatz). Це історична будівля, пов’язана з діяльністю єзуїтського ордену у XVII столітті та розвитком релігійного життя міста." },
            { text: "Сьогодні церква використовується як відкрите міське простір. Тут проходять богослужіння, концерти та культурні заходи, тому будівля виконує одночасно релігійну та громадську функцію." },
            { text: "Фасад будівлі зберігає історичний вигляд, а внутрішній простір після післявоєнної відбудови оформлений у сучасному стилі." },
            { bold: "Історія", text: "Єзуїтська церква в Кобленці була збудована на початку XVII століття як частина комплексу єзуїтського ордену. При церкві діяла школа, яка відігравала важливу роль в освітній системі міста в епоху Контрреформації." },
            { text: "Будівля пережила кілька історичних етапів, залишаючись важливим релігійним та освітнім центром Кобленца." },
            { text: "У 1944 році церква була сильно пошкоджена під час Другої світової війни. Після відновлення фасад було збережено, а інтер’єр повністю переосмислено та оформлено у сучасному стилі, що зробило будівлю прикладом поєднання історичної архітектури та сучасного використання." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Jesuitenplatz 4, 56068 Koblenz, Deutschland" },
            { bold: "Конфесія:", text: "римсько-католицька церква" },
            { bold: "Вхід:", text: "зазвичай вільний (залежить від заходів)" }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Спочатку входила до комплексу єзуїтського монастиря та школи" },
            { text: "Після війни інтер’єр свідомо зробили сучасним" },
            { text: "Сьогодні використовується як відкрите культурне простір" },
            { text: "Розташована на одній із центральних площ старого міста" }
          ]
        },
        construction_period: "1613–1617",
        founder: "Орден єзуїтів (Societas Jesu)",
        meta: {
          title: "Єзуїтська церква Кобленца (Citykirche) – історична церква в центрі міста",
          description: "Єзуїтська церква Кобленца (Citykirche) – історична церква XVII століття в центрі старого міста, що поєднує бароковий фасад і сучасний культурний простір.",
          ogTitle: "Citykirche Кобленца – історія та сучасність у центрі старого міста",
          ogDescription: "Колишня єзуїтська церква XVII століття в Кобленці: історична архітектура, сучасний інтер’єр і культурне життя міста.",
          keywords: "Citykirche Koblenz, Jesuitenkirche Koblenz, Кобленц церква, старе місто Кобленц, Jesuitenplatz, історичні церкви Німеччини, барокова церква Кобленца",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/altstadt/citykirche/001.jpg"
        }
      },
      de: {
        name: "Jesuitenkirche Koblenz (Citykirche)",
        loc: {
          country: "Deutschland", region: "Rheinland-Pfalz", city: "Koblenz", cityDistrict: "Altstadt"
        },
        officialSite: [
          { bold: "Offizielle Website", link: "https://www.citykirche-koblenz.de" }
        ],
        short_description: "Historische Kirche im Zentrum der Altstadt am Jesuitenplatz. Sie wurde im 17. Jahrhundert als Teil eines Komplexes des Jesuitenordens erbaut. Heute wird das Gebäude als offene Stadtkirche für Gottesdienste, Konzerte und kulturelle Veranstaltungen genutzt.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Jesuitenkirche Koblenz (Citykirche)", text: "befindet sich im Zentrum der Altstadt am Jesuitenplatz. Das historische Gebäude steht im Zusammenhang mit der Tätigkeit des Jesuitenordens im 17. Jahrhundert und der religiösen Entwicklung der Stadt." },
            { text: "Heute wird die Kirche als offener städtischer Raum genutzt. Hier finden Gottesdienste, Konzerte und kulturelle Veranstaltungen statt, wodurch das Gebäude sowohl religiöse als auch gesellschaftliche Funktionen erfüllt." },
            { text: "Die Fassade bewahrt ihr historisches Erscheinungsbild, während der Innenraum nach dem Wiederaufbau nach dem Krieg modern gestaltet wurde." },
            { bold: "Geschichte", text: "Die Jesuitenkirche in Koblenz wurde im frühen 17. Jahrhundert als Teil eines Komplexes des Jesuitenordens erbaut. An der Kirche befand sich eine Schule, die eine wichtige Rolle im Bildungssystem der Stadt in der Zeit der Gegenreformation spielte." },
            { text: "Das Gebäude durchlief mehrere historische Phasen und blieb ein bedeutendes religiöses und Bildungszentrum von Koblenz." },
            { text: "Im Jahr 1944 wurde die Kirche im Zweiten Weltkrieg schwer beschädigt. Nach dem Wiederaufbau wurde die Fassade erhalten, während der Innenraum vollständig neu und modern gestaltet wurde, wodurch das Gebäude ein Beispiel für die Verbindung historischer Architektur und moderner Nutzung wurde." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Jesuitenplatz 4, 56068 Koblenz, Deutschland" },
            { bold: "Konfession:", text: "römisch-katholische Kirche" },
            { bold: "Eintritt:", text: "in der Regel frei (abhängig von Veranstaltungen)" }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Ursprünglich Teil eines Jesuitenklosters und einer Schule" },
            { text: "Nach dem Krieg wurde der Innenraum bewusst modern gestaltet" },
            { text: "Heute als offener Kulturraum genutzt" },
            { text: "Liegt an einem der zentralen Plätze der Altstadt" }
          ]
        },
        construction_period: "1613–1617",
        founder: "Societas Jesu",
        meta: {
          title: "Jesuitenkirche Koblenz (Citykirche) – historische Kirche im Stadtzentrum",
          description: "Jesuitenkirche Koblenz (Citykirche) – historische Kirche aus dem 17. Jahrhundert im Zentrum der Altstadt, die barocke Fassade mit modernem Kulturraum verbindet.",
          ogTitle: "Citykirche Koblenz – Geschichte und Moderne im Herzen der Altstadt",
          ogDescription: "Ehemalige Jesuitenkirche aus dem 17. Jahrhundert in Koblenz: historische Architektur, moderner Innenraum und kulturelles Leben der Stadt.",
          keywords: "Citykirche Koblenz, Jesuitenkirche Koblenz, Koblenz Kirche, Altstadt Koblenz, Jesuitenplatz, historische Kirchen Deutschland, Barockkirche Koblenz",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/koblenz/altstadt/citykirche/001.jpg"
        }
      }
    }
  },

  // Trier
  {
    id: "kurfuerstliches_palais_trier",
    type: ["palace_or_castle"], rating: "popular",
    path: "kurfuerstliches_palais_trier",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "trier",
    hiddenFromList: true, showMore: true,
    fotoCard: "Germany/rheinland-pfalz/trier-city/altstadt/kurfuerstliches_palais/001.jpg",
    coord: { lat: 49.7533, lng: 6.6439 },
    translations: {
      ru: {
        name: "Избирательский (курфюрстский) дворец",
        loc: {
          country: "Германия",
          region: "Рейнланд-Пфальц",
          district: "Город областного значения",
          city: "Трир",
          cityDistrict: "округ Trier-Mitte / Gartenfeld, район Altstadt"
        },
        short_description: "Избирательский (курфюрстский) дворец в Трире – элегантный барочный дворец XVIII века, расположенный рядом с Базиликой Константина. Он известен своим розовым фасадом, изящной архитектурой и ухоженными садами в стиле рококо.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Избирательский (курфюрстский) дворец (Kurfürstliches Palais)", text: "в Трире считается одним из самых красивых дворцовых комплексов эпохи барокко в Германии. Он расположен в центре города, непосредственно рядом с древнеримской Базиликой Константина, что создаёт уникальное сочетание античной и барочной архитектуры в одном ансамбле." },
            { text: "Фасад дворца выполнен в мягком розовом цвете и украшен скульптурными деталями, характерными для позднего барокко и раннего рококо. Южное крыло считается наиболее выразительным – именно оно чаще всего встречается на открытках и туристических фото." },
            { text: "Сегодня территория дворца и прилегающий сад открыты для прогулок, а часть помещений используется государственными учреждениями." },
            { bold: "История", text: "дворца начинается в XVIII веке, когда архиепископы-курфюрсты Трира решили создать представительскую резиденцию, соответствующую их статусу в Священной Римской империи." },
            { text: "Строительство началось в 1756 году и велось на месте более ранних построек, включая средневековые и римские сооружения. После секуляризации в начале XIX века дворец утратил свою резиденциальную функцию и начал использоваться административными структурами." },
            { text: "В XX веке здание несколько раз повреждалось во время войн, но было тщательно восстановлено. Сегодня оно является важным архитектурным памятником земли Рейнланд-Пфальц." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Willy-Brandt-Platz 3, 54290 Trier, Deutschland" },
            { bold: "Доступ: ", text: "свободный доступ к садам, внутренние помещения ограниченно доступны " }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Дворец построен вплотную к огромной римской базилике IV века" },
            { text: "Розовый цвет фасада – оригинальное решение эпохи барокко" },
            { text: "Сад дворца выполнен в стиле французского регулярного парка" },
            { text: "Южное крыло считается одной из самых фотографируемых частей Трира" }
          ]
        },
        construction_period: "1756–1761",
        architects: "Johannes Seiz (Йоханнес Зайц)",
        founder: "курфюрст-архиепископ Франц Георг фон Шёнборн",
        meta: {
          title: "Избирательский (курфюрстский) дворец в Трире (Kurfürstliches Palais) – барочный дворец Германии",
          description: "Избирательский (курфюрстский) дворец в Трире – исторический барочный дворец XVIII века рядом с Базиликой Константина. Архитектура, сады и история курфюрстов.",
          ogTitle: "Избирательский (курфюрстский) дворец в Трире – барочная жемчужина Германии",
          ogDescription: "Kurfürstliches Palais, Trier, Избирательский (курфюрстский) дворец, дворец Трир, барокко Германия, достопримечательности Трира, Rheinland-Pfalz, Konstantinbasilika, Trier Palace",
          keywords: "Kurfürstliches Palais, Trier, Избирательский (курфюрстский) дворец, дворец Трир, барокко Германия, достопримечательности Трира, Rheinland-Pfalz, Konstantinbasilika, Trier Palace",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/altstadt/kurfuerstliches_palais/001.jpg"
        }
      },
      uk: {
        name: "Виборчий (курфюрстський) палац",
        loc: {
          country: "Німеччина",
          region: "Рейнланд-Пфальц",
          district: "Місто земельного значення",
          city: "Трір",
          cityDistrict: "округ Trier-Mitte / Gartenfeld, район Altstadt"
        },
        short_description: "Виборчий (курфюрстський) палац у Трірі – елегантний бароковий палац XVIII століття, розташований поруч із Базилікою Костянтина. Він відомий своїм рожевим фасадом, витонченою архітектурою та доглянутими садами у стилі рококо.",
        full_description: {
          title: "Опис та історія",
          items: [
            { bold: "Виборчий (курфюрстський) палац (Kurfürstliches Palais)", text: "у Трірі вважається одним із найкрасивіших палацових комплексів епохи бароко в Німеччині. Він розташований у центрі міста, безпосередньо поруч із давньоримською Базилікою Костянтина, що створює унікальне поєднання античної та барокової архітектури в одному ансамблі." },
            { text: "Фасад палацу виконаний у м’якому рожевому кольорі та прикрашений скульптурними деталями, характерними для пізнього бароко та раннього рококо. Південне крило вважається найбільш виразним – саме його найчастіше можна побачити на листівках і туристичних фотографіях." },
            { text: "Сьогодні територія палацу та прилеглий сад відкриті для прогулянок, а частина приміщень використовується державними установами." },
            { bold: "Історія", text: "палацу починається у XVIII столітті, коли архієпископи-курфюрсти Тріра вирішили створити представницьку резиденцію, що відповідала їхньому статусу у Священній Римській імперії." },
            { text: "Будівництво розпочалося у 1756 році та велося на місці більш ранніх споруд, включно з середньовічними та римськими об’єктами. Після секуляризації на початку XIX століття палац втратив свою резиденційну функцію і почав використовуватися адміністративними структурами." },
            { text: "У XX столітті будівля кілька разів зазнавала пошкоджень під час воєн, але була ретельно відновлена. Сьогодні вона є важливою архітектурною пам’яткою землі Рейнланд-Пфальц." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Willy-Brandt-Platz 3, 54290 Trier, Deutschland" },
            { bold: "Доступ:", text: "вільний доступ до садів, внутрішні приміщення обмежено доступні" }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Палац збудований впритул до величезної римської базиліки IV століття" },
            { text: "Рожевий колір фасаду – оригінальне рішення епохи бароко" },
            { text: "Сад палацу виконаний у стилі французького регулярного парку" },
            { text: "Південне крило вважається однією з найбільш фотографованих частин Тріра" }
          ]
        },
        construction_period: "1756–1761",
        architects: "Johannes Seiz (Йоганнес Зайц)",
        founder: "курфюрст-архієпископ Франц Георг фон Шенборн",
        meta: {
          title: "Виборчий (курфюрстський) палац у Трірі (Kurfürstliches Palais) – бароковий палац Німеччини",
          description: "Виборчий (курфюрстський) палац у Трірі – історичний бароковий палац XVIII століття поруч із Базилікою Костянтина. Архітектура, сади та історія курфюрстів.",
          ogTitle: "Виборчий (курфюрстський) палац у Трірі – барокова перлина Німеччини",
          ogDescription: "Kurfürstliches Palais, Trier, Виборчий (курфюрстський) палац, палац Трір, бароко Німеччина, пам’ятки Тріра, Rheinland-Pfalz, Konstantinbasilika, Trier Palace",
          keywords: "Kurfürstliches Palais, Trier, Виборчий (курфюрстський) палац, палац Трір, бароко Німеччина, пам’ятки Тріра, Rheinland-Pfalz, Konstantinbasilika, Trier Palace",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/altstadt/kurfuerstliches_palais/001.jpg"
        }
      },
      de: {
        name: "Kurfürstliches Palais",
        loc: {
          country: "Deutschland",
          region: "Rheinland-Pfalz",
          district: "Stadt mit Kreisstatus",
          city: "Trier",
          cityDistrict: "Stadtbezirk Trier-Mitte / Gartenfeld, Stadtteil Altstadt"
        },
        short_description: "Das Kurfürstliche Palais in Trier ist ein elegantes barockes Schloss aus dem 18. Jahrhundert, das sich neben der Konstantinbasilika befindet. Es ist bekannt für seine rosafarbene Fassade, seine feine Architektur und seine gepflegten Rokoko-Gärten.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Kurfürstliches Palais", text: "in Trier gilt als eines der schönsten Schlossensembles der Barockzeit in Deutschland. Es liegt im Stadtzentrum, direkt neben der antiken Konstantinbasilika, was eine einzigartige Kombination aus antiker und barocker Architektur in einem Ensemble schafft." },
            { text: "Die Fassade des Palais ist in einem sanften Rosaton gehalten und mit skulpturalen Details verziert, die typisch für das späte Barock und frühe Rokoko sind. Der Südflügel gilt als der markanteste Teil und ist häufig auf Postkarten und touristischen Fotos zu sehen." },
            { text: "Heute sind die Gartenanlagen des Palais für Spaziergänge geöffnet, während Teile des Gebäudes von staatlichen Institutionen genutzt werden." },
            { bold: "Geschichte", text: "des Palais beginnt im 18. Jahrhundert, als die Kurfürst-Erzbischöfe von Trier beschlossen, eine repräsentative Residenz zu schaffen, die ihrem Status im Heiligen Römischen Reich entsprach." },
            { text: "Der Bau begann 1756 an der Stelle früherer Bauwerke, darunter mittelalterliche und römische Strukturen. Nach der Säkularisation zu Beginn des 19. Jahrhunderts verlor das Palais seine Residenzfunktion und wurde von Verwaltungsbehörden genutzt." },
            { text: "Im 20. Jahrhundert wurde das Gebäude mehrfach durch Kriege beschädigt, jedoch sorgfältig wiederhergestellt. Heute ist es ein bedeutendes Architekturdenkmal in Rheinland-Pfalz." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Willy-Brandt-Platz 3, 54290 Trier, Deutschland" },
            { bold: "Zugang:", text: "freier Zugang zu den Gärten, Innenräume nur eingeschränkt zugänglich" }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Das Palais wurde direkt an eine riesige römische Basilika aus dem 4. Jahrhundert angebaut" },
            { text: "Die rosafarbene Fassade ist eine originale Lösung der Barockzeit" },
            { text: "Der Garten ist im Stil eines französischen Barockgartens gestaltet" },
            { text: "Der Südflügel gehört zu den meistfotografierten Teilen von Trier" }
          ]
        },
        construction_period: "1756–1761",
        architects: "Johannes Seiz",
        founder: "Kurfürst-Erzbischof Franz Georg von Schönborn",
        meta: {
          title: "Kurfürstliches Palais in Trier – barockes Schloss in Deutschland",
          description: "Das Kurfürstliche Palais in Trier ist ein historisches barockes Schloss aus dem 18. Jahrhundert neben der Konstantinbasilika. Architektur, Gärten und Geschichte der Kurfürsten.",
          ogTitle: "Kurfürstliches Palais in Trier – barockes Juwel Deutschlands",
          ogDescription: "Kurfürstliches Palais, Trier, barockes Schloss, Sehenswürdigkeiten Trier, Rheinland-Pfalz, Konstantinbasilika",
          keywords: "Kurfürstliches Palais, Trier, barockes Schloss, Sehenswürdigkeiten Trier, Rheinland-Pfalz, Konstantinbasilika, Trier Palace",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/altstadt/kurfuerstliches_palais/001.jpg"
        }
      }
    }
  },
  {
    id: "hauptmarkt_trier",
    type: ["square"], rating: "top",
    path: "hauptmarkt_trier",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "trier",
    hiddenFromList: true, showMore: true,
    fotoCard: "Germany/rheinland-pfalz/trier-city/altstadt/007.jpg",
    coord: { lat: 49.75639, lng: 6.64132 },
    translations: {
      ru: {
        name: "Главная рыночная площадь Трира",
        loc: {
          country: "Германия", region: "Рейнланд-Пфальц", district: "Город областного значения", city: "Трир", cityDistrict: "район Altstadt"
        },
        short_description: "Главная рыночная площадь Трира с фонтаном Святого Петра и историческими зданиями. Центральное место старого города, где проходят рынки и городские события.",
        full_description: {
          title: "Описание и история",
          items: [
            { bold: "Главная рыночная площадь Трира ", text: "– одна из самых красивых и атмосферных площадей Трира. Её окружают яркие фасады средневековых и ренессансных домов, создающие ощущение живого исторического ансамбля. В центре площади находится фонтан Святого Петра (Petrusbrunnen), украшенный фигурами, символизирующими добродетели и важные стороны городской жизни." },
            { text: "Сегодня площадь остаётся главным общественным пространством города. Здесь расположены кафе, магазины и уличные рынки, а также проходят рождественские ярмарки и городские фестивали. Несмотря на туристическую популярность, площадь остаётся местом повседневной жизни жителей Трира." },
            { bold: "История" },
            { text: "Главная рыночная площадь сформировалась в Средние века, когда Трир стал важным торговым и религиозным центром региона. Уже в X–XI веках здесь проходили рынки, а к позднему Средневековью площадь приобрела регулярную планировку и стала центральным торговым узлом города." },
            { text: "Большинство окружающих зданий относится к эпохам поздней готики, ренессанса и барокко. Многие дома принадлежали богатым купцам и ремесленным гильдиям, что отражается в их декоре и архитектуре. Фонтан Святого Петра был установлен в XVI веке и символизировал городскую власть и благополучие." }
          ]
        },
        practical_info: {
          title: "Практическая информация",
          items: [
            { bold: "Адрес:", text: "Hauptmarkt, 54290 Trier, Deutschland" },
            { bold: "Лучшее время:", text: "декабрь (рождественская ярмарка), весна и лето" }
          ]
        },
        interestingFacts: {
          title: "Интересные факты",
          isList: true,
          items: [
            { text: "Площадь считается одной из старейших торговых площадей Германии" },
            { text: "Цветные фасады домов частично восстановлены после разрушений" },
            { text: "Фонтан Святого Петра – один из символов Трира" },
            { text: "На площади проходили средневековые ярмарки и публичные объявления" },
            { text: "Сегодня здесь часто проходят городские концерты и фестивали" }
          ]
        },
        meta: {
          title: "Главная рыночная площадь Трира – сердце старого города",
          description: "Историческая рыночная площадь Трира с фонтаном Святого Петра, яркими фасадами домов, кафе и атмосферой средневекового города.",
          ogTitle: "Главная рыночная площадь Трира – сердце старого города",
          ogDescription: "Главная площадь Трира с фонтаном, историческими домами и атмосферой живого средневекового города.",
          keywords: "Главная рыночная площадь Трира, Трир достопримечательности, старый город Трир, центр Трира, фонтан Святого Петра, Petrusbrunnen, Trier Germany, Rheinland-Pfalz, площади Германии",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/altstadt/007.jpg"
        }
      },
      uk: {
        name: "Головна ринкова площа Тріра",
        loc: {
          country: "Німеччина", region: "Рейнланд-Пфальц", district: "Місто обласного значення", city: "Трір", cityDistrict: "район Altstadt"
        },
        short_description: "Головна ринкова площа Тріра з фонтаном Святого Петра та історичними будівлями. Центральне місце старого міста, де проходять ринки та міські події.",
        full_description: {
          title: "Опис та історія",
          items: [
            { bold: "Головна ринкова площа Тріра ", text: "– одна з найкрасивіших та найатмосферніших площ Тріра. Її оточують яскраві фасади середньовічних і ренесансних будинків, що створюють відчуття живого історичного ансамблю. У центрі площі розташований фонтан Святого Петра (Petrusbrunnen), прикрашений фігурами, що символізують чесноти та важливі сторони міського життя." },
            { text: "Сьогодні площа залишається головним громадським простором міста. Тут розташовані кафе, магазини та вуличні ринки, а також проходять різдвяні ярмарки й міські фестивалі. Попри туристичну популярність, площа залишається місцем повсякденного життя мешканців Тріра." },
            { bold: "Історія" },
            { text: "Головна ринкова площа сформувалася в Середньовіччі, коли Трір став важливим торговим і релігійним центром регіону. Уже в X–XI століттях тут проходили ринки, а до пізнього Середньовіччя площа набула регулярного планування і стала центральним торговим вузлом міста." },
            { text: "Більшість навколишніх будівель належить до епох пізньої готики, ренесансу та бароко. Багато будинків належали заможним купцям і ремісничим гільдіям, що відображається в їхньому декорі та архітектурі. Фонтан Святого Петра був встановлений у XVI столітті та символізував міську владу і добробут." }
          ]
        },
        practical_info: {
          title: "Практична інформація",
          items: [
            { bold: "Адреса:", text: "Hauptmarkt, 54290 Trier, Deutschland" },
            { bold: "Найкращий час:", text: "грудень (різдвяний ярмарок), весна та літо" }
          ]
        },
        interestingFacts: {
          title: "Цікаві факти",
          isList: true,
          items: [
            { text: "Площа вважається однією з найстаріших торгових площ Німеччини" },
            { text: "Кольорові фасади будинків частково відновлені після руйнувань" },
            { text: "Фонтан Святого Петра – один із символів Тріра" },
            { text: "На площі проходили середньовічні ярмарки та публічні оголошення" },
            { text: "Сьогодні тут часто проходять міські концерти та фестивалі" }
          ]
        },
        meta: {
          title: "Головна ринкова площа Тріра – серце старого міста",
          description: "Історична ринкова площа Тріра з фонтаном Святого Петра, яскравими фасадами будинків, кафе та атмосферою середньовічного міста.",
          ogTitle: "Головна ринкова площа Тріра – серце старого міста",
          ogDescription: "Головна площа Тріра з фонтаном, історичними будинками та атмосферою живого середньовічного міста.",
          keywords: "Головна ринкова площа Тріра, Трір визначні місця, старе місто Трір, центр Тріра, фонтан Святого Петра, Petrusbrunnen, Trier Germany, Rheinland-Pfalz, площі Німеччини",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/altstadt/007.jpg"
        }
      },
      de: {
        name: "Hauptmarkt Trier",
        loc: {
          country: "Deutschland", region: "Rheinland-Pfalz", district: "Kreisfreie Stadt", city: "Trier", cityDistrict: "Stadtteil Altstadt"
        },
        short_description: "Der Hauptmarkt in Trier ist ein historischer Marktplatz mit dem Petrusbrunnen und alten Gebäuden. Er ist das zentrale Herz der Altstadt, wo Märkte und städtische Veranstaltungen stattfinden.",
        full_description: {
          title: "Beschreibung und Geschichte",
          items: [
            { bold: "Hauptmarkt Trier ", text: "– einer der schönsten und atmosphärischsten Plätze in Trier. Er ist von farbenfrohen Fassaden mittelalterlicher und Renaissance-Gebäude umgeben, die ein lebendiges historisches Ensemble bilden. Im Zentrum befindet sich der Petrusbrunnen, geschmückt mit Figuren, die Tugenden und wichtige Aspekte des städtischen Lebens symbolisieren." },
            { text: "Heute ist der Platz weiterhin der wichtigste öffentliche Raum der Stadt. Hier befinden sich Cafés, Geschäfte und Wochenmärkte, außerdem finden Weihnachtsmärkte und Stadtfeste statt. Trotz seiner touristischen Bedeutung bleibt der Platz ein Ort des täglichen Lebens der Trierer." },
            { bold: "Geschichte" },
            { text: "Der Hauptmarkt entstand im Mittelalter, als Trier zu einem wichtigen Handels- und religiösen Zentrum der Region wurde. Bereits im 10. und 11. Jahrhundert fanden hier Märkte statt, und im späten Mittelalter entwickelte sich der Platz zu einem zentralen Handelszentrum der Stadt." },
            { text: "Die meisten umliegenden Gebäude stammen aus der Spätgotik, der Renaissance und dem Barock. Viele Häuser gehörten wohlhabenden Kaufleuten und Zunftgemeinschaften, was sich in ihrer Architektur und Dekoration widerspiegelt. Der Petrusbrunnen wurde im 16. Jahrhundert errichtet und symbolisierte städtische Macht und Wohlstand." }
          ]
        },
        practical_info: {
          title: "Praktische Informationen",
          items: [
            { bold: "Adresse:", text: "Hauptmarkt, 54290 Trier, Deutschland" },
            { bold: "Beste Zeit:", text: "Dezember (Weihnachtsmarkt), Frühling und Sommer" }
          ]
        },
        interestingFacts: {
          title: "Interessante Fakten",
          isList: true,
          items: [
            { text: "Der Platz gilt als einer der ältesten Marktplätze Deutschlands" },
            { text: "Die farbigen Fassaden wurden teilweise nach Zerstörungen restauriert" },
            { text: "Der Petrusbrunnen ist eines der Wahrzeichen von Trier" },
            { text: "Auf dem Platz fanden mittelalterliche Märkte und öffentliche Bekanntmachungen statt" },
            { text: "Heute finden hier häufig Konzerte und Stadtfeste statt" }
          ]
        },
        meta: {
          title: "Hauptmarkt Trier – Herz der Altstadt",
          description: "Historischer Marktplatz in Trier mit Petrusbrunnen, farbigen Häuserfassaden, Cafés und mittelalterlicher Atmosphäre.",
          ogTitle: "Hauptmarkt Trier – Herz der Altstadt",
          ogDescription: "Der Hauptmarkt in Trier mit Brunnen, historischen Gebäuden und lebendiger mittelalterlicher Atmosphäre.",
          keywords: "Hauptmarkt Trier, Trier Sehenswürdigkeiten, Altstadt Trier, Trier Stadtzentrum, Petrusbrunnen, Deutschland Plätze, Rheinland-Pfalz, Trier Germany",
          ogImage: "https://our-travels.info/foto/Germany/rheinland-pfalz/trier-city/altstadt/007.jpg"
        }
      }
    }
  }

];

export default datas;