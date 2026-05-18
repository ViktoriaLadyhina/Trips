const datas = [
  // Кобленц
  {
    id: "ehrenbreitstein_koblenz",
    type: ["palace_or_castle", "museum"], rating: "popular",
    path: "ehrenbreitstein_koblenz",
    countryPath: "germany", regionPath: "rheinland_pfalz", districtPath: "city", cityPath: "koblenz",
    fotoCard: "Germany/rheinland-pfalz/koblenz/ehrenbreitstein/001.jpg",
    routes: "castles_rhine_valley",
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
        tickets_and_entry: {
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
        tickets_and_entry: {
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
        tickets_and_entry: {
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
  }

];

export default datas;