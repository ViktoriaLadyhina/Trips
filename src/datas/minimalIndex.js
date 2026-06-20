const datas =

{
  countries: {
    germany: { id: 1, ru: 'Германия', de: 'Deutschland', uk: 'Німеччина' },
    ukraine: { id: 3, ru: 'Украина', de: 'Ukraine', uk: 'Україна' },
    luxembourg: { id: 2, ru: 'Люксембург', de: 'Luxemburg', uk: 'Люксембург' }
  },
  regions: {
    // Germany
    nrw: { id: 13, ru: 'Северный Рейн-Вестфалия', de: 'Nordrhein-Westfalen', uk: 'Північний Рейн-Вестфалія' },
    rheinland_pfalz: { id: 14, ru: 'Рейнланд-Пфальц', de: 'Rheinland-Pfalz', uk: 'Рейнланд-Пфальц' },
    //luxembourg
    mersch: { id: 28, ru: 'Кантон Мерш', de: 'Kanton Mersch', uk: 'Кантон Мерш' },
    capellen: { id: 20, ru: 'Кантон Капеллен', de: 'Kanton Capellen', uk: 'Кантон Капеллен' },
    luxembourg_canton: { id: 26, ru: 'Кантон Люксембург', de: 'Kanton Luxemburg', uk: 'Кантон Люксембург' },

    //Ukraine
    sumska: { id: 49, ru: 'Сумская область', de: 'Sumska Oblast', uk: 'Сумська область' }
  },
  districts: {
    arnsberg: { id: 60, ru: 'Административный округ Арнсберг', de: 'Regierungsbezirk Arnsberg', uk: 'Адміністративний округ Арнсберг' },
    merkischer: { ru: 'Район Меркиш', de: 'Märkischer Kreis', uk: 'Район Меркіш' },
    hochsauerland: { ru: 'Район Хохзауэрланд', de: 'Hochsauerlandkreis', uk: 'Район Хохзауэрланд' },

    dusseldorf: { id: 62, ru: 'Административный округ Дюссельдорф', de: 'Regierungsbezirk Düsseldorf', uk: 'Адміністративний округ Дюссельдорф' },
    mettmann: { ru: 'Район Меттман', de: 'Kreis Mettmann', uk: 'Район Меттман' },

    koln: { id: 63, ru: 'Административный округ Кёльн', de: 'Regierungsbezirk Köln', uk: 'Адміністративний округ Кельн' },
    rheinErft: { ru: 'Район Рейн-Эрфт', de: 'Rhein-Erft-Kreis', uk: 'Район Рейн-Ерфт' },
    aachen: { ru: 'Район Аахен', de: 'Kreis Aachen', uk: 'Район Аахен' },
    rhein_sieg: { ru: 'Район Рейн-Зиг', de: 'Rhein-Sieg-Kreis', uk: 'Район Рейн-Зиг' },

    mayen_koblenz: { id: 114, ru: 'Район Майен‑Кобленц', de: 'Landkreis Mayen-Koblenz', uk: 'Район Маєн-Кобленц' },
    trier_saarburg: { id: 121, ru: 'Район Трир-Саарбург', de: 'Landkreis Trier-Saarburg', uk: 'Район Трір-Саарбург' }
  },
  cities: {
    // Germany
    koln_city: { id: 76, ru: 'Город Кёльн', de: 'Stadt Köln', uk: 'Місто Кельн' },
    monschau: { id: 185, ru: 'Город Моншау', de: 'Stadt Monschau', uk: 'Місто Моншау' },
    bruhl: { id: 171, ru: 'Город Брюль', de: 'Stadt Brühl', uk: 'Місто Брюль' },
    frechen: { id: 174, ru: 'Город Фрехен', de: 'Stadt Frechen', uk: 'Місто Фрехен' },
    konigswinter: { id: 247, ru: 'Город Кёнигсвинтер', de: 'Stadt Königswinter', uk: 'Місто Кенігсвінтер' },
    lohmar: { id: 248, ru: 'Город Ломар', de: 'Stadt Lohmar', uk: 'Місто Ломар' },
    velbert: { ru: 'Город Фельберт', de: 'Stadt Velbert', uk: 'Місто Фельберт' },

    dortmund: { id: 72, ru: 'Город Дортмунд', de: 'Stadt Dortmund', uk: 'Місто Дортмунд' },
    luedenscheid: { id: 298, ru: 'Город Люденшайд', de: 'Stadt Lüdenscheid', uk: 'Місто Люденшайд' },
    altena: { id: 293, ru: 'Город Альтена', de: 'Stadt Altena', uk: 'Місто Альтена' },
    iserlohn: { id: 296, ru: 'Город Изерлон', de: 'Stadt Iserlohn', uk: 'Місто Ізерлон' },
    sundern: { ru: 'Город Зундерн', de: 'Stadt Sundern', uk: 'Місто Зундерн' },

    koblenz: { id: 90, ru: 'Город Кобленц', de: 'Stadt Koblenz', uk: 'Місто Кобленц' },
    trier: { id: 91, ru: 'Город Трир', de: 'Stadt Trier', uk: 'Місто Трір' },
    saarburg_city: { id: 618, ru: 'Город Саарбург', de: 'Stadt Saarburg', uk: 'Місто Саарбург' },

    //luxembourg
    luxembourg_city: { id: 146, ru: 'Город Люксембург', de: 'Stadt Luxemburg', uk: 'Місто Люксембург' },
    ansembourg: { id: 159, ru: 'Деревня Ансембург', de: 'Dorf Ansembourg', uk: 'Село Ансембург' },
    koerich: { id: 141, ru: 'Деревня Кёрих', de: 'Dorf Koerich', uk: 'Село Кьоріх' },

    //Ukraine
    sumy: { id: 125, ru: 'Город Сумы', de: 'Stadt Sumy', uk: 'Місто Суми' }
  },
  attractions: {
    // arnsberg округ
    // Dortmund
    westfalenpark: { ru: 'Вестфаленпарк', de: 'Westfalenpark', uk: 'Вестфаленпарк' },

    // Хохзауэрланд Kreis
    // sundern
    sorpesee_sundern: { ru: 'Озеро Сорпезее', de: 'Sorpesee', uk: 'Озеро Сорпезее' },
    ehrenmal_langscheid: { ru: 'Мемориал Лангшайд', de: 'Ehrenmal Langscheid', uk: 'Меморіал Лангшайд' },

    // Märkischer Kreis
    // Iserlohn
    dechenhohle_iserlohn: { ru: 'Пещера Дехенхёле', de: 'Dechenhöhle', uk: 'Печера Дехенхёле' },

    // Lüdenscheid
    altstadt_luedenscheid: { ru: 'Старый город Люденшайда', de: 'Altstadt Lüdenscheid', uk: 'Старе місто Люденшайда' },
    erloeserkirche_luedenscheid: { ru: 'Церковь Спасителя', de: 'Erlöserkirche', uk: 'Церква Спасителя' },
    rathausplatz_luedenscheid: { ru: 'Центральная площадь Люденшайда', de: 'Rathausplatz von Lüdenscheid', uk: 'Центральна площа Люденшайда' },
    brunnen_altstadt_luedenscheid: { ru: 'Фонтан в старом городе', de: 'Brunnen in der Altstadt', uk: 'Фонтан у старому місті' },
    sternplatz: { ru: 'Площадь Штернплац', de: 'Sternplatz', uk: 'Площа Штернплац' },
    onkel_willi_denkmal_sternplatz_luedenscheid: { ru: 'Памятник дяде Вилли', de: 'Denkmal von Onkel Willi', uk: 'Памятник дядьку Віллі' },
    fontain_sternplatz_luedenscheid: { ru: 'Фонтан на площади Штернплац', de: 'Brunnen auf dem Sternplatz', uk: 'Фонтан на площі Штернплац' },
    history_museum_luedenscheid: { ru: 'Исторический музей Люденшайда', de: 'Geschichtsmuseum Lüdenscheid', uk: 'Історичний музей Люденшайда' },
    christuskirche_luedenscheid: { ru: 'Псевдоготическая церковь Христа', de: 'Pseudogotische Christuskirche', uk: 'Псевдоготична церква Христа' },
    versetalsperre_luedenscheid: { ru: 'Водохранилище Верзе', de: 'Versetalsperre', uk: 'Водосховище Верзе' },
    st_joseph_medardus: { ru: 'Церковь Святого Йозефа и Медарда', de: 'Kirche St. Joseph und Medardus', uk: 'Церква Святого Йосипа та Медарда' },
    schloss_neuenhof_luedenscheid: { ru: 'Замок Нойенхоф', de: 'Schloss Neuenhof', uk: 'Замок Нойенхоф' },
    schloss_oedenthal_luedenscheid: { ru: 'Усадьба Оеденталь', de: 'Schloss Oedenthal', uk: 'Садиба Оеденталь' },
    bremecker_hammer_luedenscheid: { ru: 'Bremecker Hammer – технико-исторический музей кузнечного дела', de: 'Bremecker Hammer', uk: 'Bremecker Hammer – техніко-історичний музей ковальського ремесла' },
    phaenomenta_luedenscheid: { ru: 'Научный центр ФЕНОМЕНТА', de: 'PHÄNOMENTA', uk: 'Науковий центр ФЕНОМЕНТА' },
    stilleking_luedenscheid: { ru: 'Природный заповедник Стиллекинг', de: 'Naturschutzgebiet Stilleking', uk: 'Природний заповідник Стиллекінг' },
    stadtbücherei_lüdenscheid: { ru: 'Городская библиотека', de: 'Stadtbücherei Lüdenscheid', uk: 'Міська бібліотека' },

    // Altena
    burg_altena: { ru: 'Замок Альтена', de: 'Burg Altena', uk: 'Замок Альтена' },
    drahtmuseum_altena: { ru: 'Немецкий музей проволоки', de: 'Deutsches Drahtmuseum', uk: 'Німецький музей дроту' },
    fuelbecketalsperre_altena: { ru: 'Водохранилище Фюльбекке', de: 'Fuelbecketalsperre', uk: 'Водосховище Фюльбекке' },
    lutherkirche_altena: { ru: 'Евангелическо-лютеранская церковь Лютера', de: 'Lutherkirche Altena', uk: 'Євангелічно-лютеранська церква Лютера' },
    gustav_selve_altena: { ru: 'Памятник Густаву Сельве', de: 'Gustav-Selve-Denkmal', uk: 'Пам’ятник Густаву Сельве' },
    st_matthaeus_church_altena: { ru: 'Приходская церковь Святого Матфея', de: 'Katholische Pfarrkirche St. Matthäus', uk: 'Парафіяльна церква Святого Матвія' },

    // Düsseldorf okrug
    // край mettmann 
    // velbert
    langenberg_altstadt_velbert: { ru: 'Старый город Лангенберг', de: 'Altstadt Langenberg', uk: 'Старе місто Лангенберг' },
    langenberg_alte_kirche_velbert: { ru: 'Старая церковь Лангеберг', de: 'Alte Kirche Langenberg', uk: 'Стара церква Лангенберг' },
    langenberg_burgerhaus_velbert: { ru: 'Исторический общественный дом Лангенберга', de: 'Historisches Bürgerhaus Langenberg', uk: 'Історичний громадський будинок Лангенберга' },

    // Köln okrug
    //Köln-city
    cologne_cathedral: { ru: 'Кёльнский собор', de: 'Kölner Dom', uk: 'Кельнський собор' },
    rathaus_koln: { ru: 'Кёльнская ратуша', de: 'Kölner Rathaus', uk: 'Кельнська ратуша' },
    roemisch_germanisches_museum: { ru: 'Римско-германский музей', de: 'Römisch-Germanisches Museum', uk: 'Римсько-германський музей' },
    farina_duftmuseum: { ru: 'Музей духов в доме Фарина', de: 'Duftmuseum im Farina-Haus', uk: 'Музей парфумів у домі Фаріна' },
    museum_ludwig: { ru: 'Музей Людвига', de: 'Museum Ludwig', uk: 'Музей Людвіга' },
    schokoladenmuseum: { ru: 'Музей шоколада', de: 'Schokoladenmuseum', uk: 'Музей шоколаду' },
    miqua: { ru: 'Музей в археологическом квартале Кёльна – MiQua', de: 'Museum im archäologischen Viertel Köln – MiQua', uk: 'Музей в археологічному кварталі Кельна – MiQua' },
    wallraf_richartz_museum: { ru: 'Музей Вальрафа-Рихарца', de: 'Wallraf-Richartz-Museum', uk: 'Музей Вальрафа-Ріхарцa' },
    koln_bridges: { ru: 'Мосты Кёльна через Рейн', de: 'Kölner Rheinbrücken', uk: 'Мости Кельна через Рейн' },
    forstbotanischer_garten: { ru: 'Ботанический сад и лесопарк', de: 'Forstbotanischer Garten', uk: 'Ботанічний сад і лісопарк' },
    flora_garten_koln: { ru: 'Ботанический сад Флора', de: 'Botanischer Garten Flora', uk: 'Ботанічний сад Флора' },
    rheinpark_koln: { ru: 'Рейнский парк', de: 'Rheinpark', uk: 'Рейнський парк' },
    tanzbrunnen: { ru: 'Танцующий фонтан', de: 'Tanzbrunnen', uk: 'Танцюючий фонтан' },
    koln_seilbahn: { ru: 'Кёльнская канатная дорога', de: 'Kölner Seilbahn', uk: 'Кельнська канатна дорога' },
    divitia_koln: { ru: 'Руины римского форта Дивития в Кёльне', de: 'Ruinen des römischen Forts Divitia in Köln', uk: 'Руїни римського форту Дивітія в Кельні' },
    guerzenich_koln: { ru: 'Гюрцених – исторический концертный зал и гильдейский дом в Кёльне', de: 'Gürzenich – historischer Konzertsaal und Zunfthaus in Köln', uk: 'Гюрценіх – історичний концертний зал і гільдійний дім у Кельні' },
    ostasiatische_kunst_koln: { ru: 'Музей восточно‑азиатского искусства', de: 'Museum für Ostasiatische Kunst', uk: 'Музей східноазіатського мистецтва' },
    museum_schnuetgen_koln: { ru: 'Музей Шнютгена', de: 'Museum Schnütgen', uk: 'Музей Шнютгена' },
    zoo_koln: { ru: 'Кёльнский зоопарк', de: 'Kölner Zoo', uk: 'Кельнський зоопарк' },
    dufthaus_4711_koln: { ru: 'Дом одеколона 4711', de: 'Duft-Haus 4711', uk: 'Будинок одеколону 4711' },
    skulpturenpark_koln: { ru: 'Парк скульптур в Кёльне', de: 'Skulpturenpark in Köln', uk: 'Парк скульптур у Кельні' },
    rautenstrauch_joest_museum_koln: { ru: 'Музей Раутенштраух-Йост', de: 'Rautenstrauch-Joest-Museum', uk: 'Музей Раутенштраух-Йост' },
    finkens_garten_koln: { ru: 'Экологический сад Финкенсгартен', de: 'Finkens Garten', uk: 'Екологічний сад Фінкенсгартен' },
    makk_museum_koln: { ru: 'Музей прикладного искусства', de: 'Museum für angewandte Kunst', uk: 'Музей прикладного мистецтва' },
    stadtmuseum_koln: { ru: 'Кельнский городской музей', de: 'Kölnisches Stadtmuseum', uk: 'Кельнський міський музей' },
    sport_olympia_museum_koln: { ru: 'Немецкий музей спорта и Олимпийских игр', de: 'Deutsches Sport & Olympia Museum', uk: 'Німецький музей спорту та Олімпійських ігор' },
    photographische_sammlung_sk_stiftung_kultur_koln: { ru: 'Фотографическая коллекция культурного фонда SK', de: 'Photographische Sammlung des SK Kulturfonds', uk: 'Фотографічна колекція культурного фонду SK' },
    altstadt_koln: { ru: 'Старый город Кёльна', de: 'Altstadt Köln', uk: 'Старе місто Кельна' },
    gross_st_martin_koln: { ru: 'Большой Святой Мартин', de: 'Groß St. Martin', uk: 'Великий Святий Мартін' },
    st_maria_himmelfahrt_koln: { ru: 'Церковь Успения Пресвятой Девы Марии', de: 'St. Mariä Himmelfahrt', uk: 'Церква Успіння Пресвятої Діви Марії' },
    st_maria_im_kapitol_koln: { ru: 'Церковь Святой Марии в Капитолии', de: 'Kirche St. Maria im Kapitol', uk: 'Церква Святої Марії у Капітолії' },
    decksteiner_weiher_koln: { ru: 'Озеро Декштайнер Вайер', de: 'Decksteiner Weiher', uk: 'Озеро Декштайнер Вайер' },
    romanische_kirchen_altstadt_koln: { ru: 'Романские церкви Старого города Кёльна', de: 'Romanische Kirchen der Altstadt von Köln', uk: 'Романські церкви Старого міста Кельна' },
    old_towers_koln: { ru: 'Старые башни и укрепления Старого Кёльна', de: 'Alte Türme und Befestigungen der Altstadt Kölns', uk: 'Старі башти та укріплення Старого Кельна' },
    rumerturm_koln: { ru: 'Римская башня Römerturm', de: 'Römerturm', uk: 'Римська вежа Römerturm' },
    hahnentorburg_koln: { ru: 'Западные ворота (Hahnentorburg)', de: 'Hahnentorburg (Westtor)', uk: 'Західні ворота (Hahnentorburg)' },
    eigelsteintorburg_koln: { ru: 'Северные ворота (Eigelsteintorburg)', de: 'Eigelsteintorburg (Nordtor)', uk: 'Північні ворота (Eigelsteintorburg)' },
    severinstorburg_koln: { ru: 'Южные ворота (Severinstorburg)', de: 'Severinstorburg (Südtor)', uk: 'Південні ворота (Severinstorburg)' },
    ulrepforte_koln: { ru: 'Южные малые ворота (Ulrepforte)', de: 'Ulrepforte (kleines Südtor)', uk: 'Південні малі ворота (Ulrepforte)' },
    bayenturm_koln: { ru: 'Юго-восточная башня у Рейна (Bayenturm)', de: 'Bayenturm (Südostturm am Rhein)', uk: 'Південно-східна вежа біля Рейну (Bayenturm)' },
    fischmarkt_koln: { ru: 'Фишмаркт', de: 'Fischmarkt', uk: 'Фішмаркт' },
    st_gereon_koln: { ru: 'Церковь Святого Гереона', de: 'St. Gereon Kirche', uk: 'Церква Святого Герєона' },
    prussian_fortress_system_koln: { ru: 'Прусская крепостная система Кёльна', de: 'Preußisches Festungssystem Köln', uk: 'Прусська фортифікаційна система Кельна' },
    fort_I_inner_koln: { ru: 'Форт I (внутреннее крепостное кольцо)', de: 'Fort I (innerer Festungsring)', uk: 'Форт I (внутрішнє фортифікаційне кільце)' },
    fort_II_inner_koln: { ru: 'Форт II (внутреннее крепостное кольцо)', de: 'Fort II (innerer Festungsring)', uk: 'Форт II (внутрішнє фортифікаційне кільце)' },
    fort_III_inner_koln: { ru: 'Форт III (внутреннее крепостное кольцо)', de: 'Fort III (innerer Festungsring)', uk: 'Форт III (внутрішнє фортифікаційне кільце)' },
    fort_V_inner_koln: { ru: 'Форт V (внутреннее крепостное кольцо)', de: 'Fort V (innerer Festungsring)', uk: 'Форт V (внутрішнє фортифікаційне кільце)' },
    fort_VI_inner_koln: { ru: 'Форт VI (внутреннее крепостное кольцо)', de: 'Fort VI (innerer Festungsring)', uk: 'Форт VI (внутрішнє фортифікаційне кільце)' },
    fort_IX_inner_koln: { ru: 'Форт IX (внутреннее крепостное кольцо)', de: 'Fort IX (innerer Festungsring)', uk: 'Форт IX (внутрішнє фортифікаційне кільце)' },
    fort_IV_outer_koln: { ru: 'Форт IV (внешнее крепостное кольцо)', de: 'Fort IV (äußerer Festungsring)', uk: 'Форт IV (зовнішнє фортифікаційне кільце)' },
    fort_V_outer_koln: { ru: 'Форт V (внешнее крепостное кольцо)', de: 'Fort V (äußerer Festungsring)', uk: 'Форт V (зовнішнє фортифікаційне кільце)' },
    fort_VI_outer_koln: { ru: 'Форт VI (внешнее крепостное кольцо)', de: 'Fort VI (äußerer Festungsring)', uk: 'Форт VI (зовнішнє фортифікаційне кільце)' },
    fort_IX_outer_koln: { ru: 'Форт IX (внешнее крепостное кольцо)', de: 'Fort IX (äußerer Festungsring)', uk: 'Форт IX (зовнішнє фортифікаційне кільце)' },
    fort_X_outer_koln: { ru: 'Форт X (внешнее крепостное кольцо)', de: 'Fort X (äußerer Festungsring)', uk: 'Форт X (зовнішнє фортифікаційне кільце)' },
    fort_XI_outer_koln: { ru: 'Форт XI (внешнее крепостное кольцо)', de: 'Fort XI (äußerer Festungsring)', uk: 'Форт XI (зовнішнє фортифікаційне кільце)' },
    st_kunibert_koln: { ru: 'Базилика Святого Куниберта', de: 'Basilika St. Kunibert', uk: 'Базиліка Святого Куніберта' },
    st_aposteln_koln: { ru: 'Церковь Святого Апостола', de: 'St. Aposteln', uk: 'Церква Святого Апостола' },

    // Aachen Kreis
    // Monschau
    historic_center_monschau: { ru: 'Старый город Моншау', de: 'Altstadt Monschau', uk: 'Старе місто Моншау' },
    burg_monschau: { ru: 'Замок Моншау', de: 'Burg Monschau', uk: 'Замок Моншау' },
    rotes_haus_monschau: { ru: 'Красный дом', de: 'Rotes Haus', uk: 'Червоний будинок' },
    senfmuehle_monschau: { ru: 'Историческая горчичная мельница', de: 'Historische Senfmühle', uk: 'Історичний гірчичний млин' },
    glashuette_monschau: { ru: 'Стеклодувная мастерская', de: 'Glashütte', uk: 'Майстерня скла' },
    tuchmacherbrunnen_monschau: { ru: 'Фонтан ткачей в Моншау', de: 'Tuchmacherbrunnen in Monschau', uk: 'Фонтан ткачів у Моншау' },

    // Rhein-Erft-Kreis
    // Brühl
    bruhl_palaces: { ru: 'Дворцы Брюля: ансамбль Аугустусбург и Фалькенлюст', de: 'Schlösser Brühl: Augustusburg & Falkenlust', uk: 'Палаци Брюля: ансамбль Аугустусбург і Фалькенлюст' },
    max_ernst_museum: { ru: 'Музей Макса Эрнста', de: 'Max Ernst Museum', uk: 'Музей Макса Ернста' },
    phantasialand: { ru: 'Парк развлечений Phantasialand', de: 'Phantasialand', uk: 'Парк розваг Phantasialand' },

    // Frechen
    burg_bachem_frechen: { ru: 'Крепость Бахем – историческая водяная крепость во Фрехене', de: 'Burg Bachem – historische Wasserburg in Frechen', uk: 'Фортеця Бахем – історична водяна фортеця у Фрехені' },
    keramion: { ru: 'Керамион – Центр современной и исторической керамики', de: 'KERAMION – Zentrum für moderne und historische Keramik', uk: 'Кераміон – Центр сучасної та історичної кераміки' },
    johann_schmitz_platz_frechen: { ru: 'Площадь Йоханна Шмитца («площадь Ратуши»)', de: 'Johann-Schmitz-Platz in Frechen', uk: 'Площа Йоханна Шміця («площа Ратуші»)' },
    altes_rathaus_frechen: { ru: 'Старая ратуша Фрехена', de: 'Altes Rathaus Frechen', uk: 'Стара ратуша Фрехена' },
    rathausbrunnen_frechen: { ru: 'Фонтан перед ратушей', de: 'Brunnen vor dem Rathaus', uk: 'Фонтан перед ратушею' },
    klüttenbrunnen_frechen: { ru: 'Фонтан Клюттенбрюннен', de: 'Klüttenbrunnen', uk: 'Фонтан Клюттенбрюннен' },
    st_audomar_frechen: { ru: 'Церковь Святого Одомара', de: 'Kirche St. Audomar', uk: 'Церква Святого Одомара' },
    evangelischeKirche_frechen: { ru: 'Евангелическая церковь', de: 'Evangelische Kirche', uk: 'Євангелічна церква' },

    // Rhein-Sieg-Kreis
    // Königswinter
    drachenfels: { ru: 'Гора Драхенфельс', de: 'Drachenfels', uk: 'Гора Драхенфельс' },
    drachenfelsbahn: { ru: 'Железная дорога Драхенфельс', de: 'Drachenfelsbahn', uk: 'Залізниця Драхенфельса' },
    schloss_drachenburg: { ru: 'Дворец Драхенбург', de: 'Schloss Drachenburg', uk: 'Палац Драхенбург' },
    drachenfels_ruins: { ru: 'Руины замка Драхенфельс', de: 'Ruinen der Burg Drachenfels', uk: 'Руїни замку Драхенфельс' },
    nibelungenhalle: { ru: 'Зал Нибелунгов', de: 'Nibelungenhalle', uk: 'Зал Нібелунгів' },
    reptile_zoo: { ru: 'Зоопарк рептилий Драхенфельс', de: 'Reptilienzoo Drachenfels', uk: 'Зоопарк рептилій Драхенфельс' },
    heisterbach_konigswinter: { ru: 'Аббатство Хайстербах', de: 'Abtei Heisterbach', uk: 'Абатство Гайстербах' },
    chorruine_heisterbach_konigswinter: { ru: 'Руины хора бывшей монастырской церкви', de: 'Ruinen des Chors der ehemaligen Klosterkirche', uk: 'Руїни хору колишньої монастирської церкви' },
    st_peter_heisterbach_konigswinter: { ru: 'Церковь Святого Петра в Хайстербахе', de: 'Kirche St. Peter in Heisterbach', uk: 'Церковь Святого Петра в Хайстербахе' },

    // Lohmar
    st_johannes_enthauptung_lohmar: { ru: 'Церковь Святого Иоанна Крестителя', de: 'Kirche St. Johannes Enthauptung', uk: 'Церква Святого Іоанна Хрестителя' },

    // rheinland-pfalz
    // Trier
    portaNigra_trier: { ru: 'Порта Нигра («Чёрные ворота»)', de: 'Porta Nigra', uk: 'Порта Нігра («Чорні ворота»)' },
    amphitheater_trier: { ru: 'Римский амфитеатр', de: 'Römisches Amphitheater', uk: 'Римський амфітеатр' },
    kaiserthermen_trier: { ru: 'Римские императорские бани', de: 'Römische Kaiserthermen', uk: 'Римські імператорські терми' },
    basilica_of_constantine_trier: { ru: 'Базилика Константина', de: 'Konstantin-Basilika', uk: 'Базиліка Константина' },
    barbarathermen_trier: { ru: 'Барбарские термы', de: 'Barbarathermen', uk: 'Барбарські терми' },
    roman_bridge_trier: { ru: 'Римский мост', de: 'Römerbrücke', uk: 'Римський міст' },
    cathedral_trier: { ru: 'Кафедральний собор', de: 'Trierer Dom', uk: 'Кафедральний собор' },
    basilikaStPaulinus_trier: { ru: 'Базилика Святого Паулина', de: 'Basilika St. Paulinus', uk: 'Базиліка Святого Пауліна' },
    liebfrauenkirche_trier: { ru: 'Церковь Богоматери', de: 'Liebfrauenkirche', uk: 'Церква Богородиці' },
    altstadt_trier: { ru: 'Старый город Трира', de: 'Altstadt Trier', uk: 'Старе місто Тріра' },
    kurfuerstliches_palais_trier: { ru: 'Избирательский (курфюрстский) дворец', de: 'Kurfürstliches Palais', uk: 'Виборчий (курфюрстський) палац' },
    hauptmarkt_trier: { ru: 'Главная рыночная площадь', de: 'Hauptmarkt', uk: 'Головна ринкова площа' },

    //Saarburg
    altstadt_saarburg: { ru: 'Старый город Саарбурга', de: 'Altstadt Saarburg', uk: 'Старе місто Саарбурга' },
    wasserfall_saarburg: { ru: 'Водопад Саарбурга', de: 'Wasserfall von Saarburg', uk: 'Водоспад Саарбурга' },
    burg_saarburg: { ru: 'Замок Саарбурга', de: 'Burg Saarburg', uk: 'Замок Саарбурга' },
    amuseum_saarburg: { ru: 'Амюзеум Саарбург', de: 'Amüseum Saarburg', uk: 'Амюзеум Саарбург' },

    // Koblenz
    ehrenbreitstein_koblenz: { ru: 'Крепость Эренбрайтштайн', de: 'Festung Ehrenbreitstein', uk: 'Фортеця Еренбрайтштайн' },
    stolzenfels_koblenz: { ru: 'Замок Штольценфельс', de: 'Schloss Stolzenfels', uk: 'Замок Штольценфельс' },
    deutsches_eck_koblenz: { ru: 'Немецкий угол', de: 'Deutsches Eck', uk: 'Німецький кут' },
    kurfuerstliches_schloss_koblenz: { ru: 'Курфюрстский дворец', de: 'Kurfürstliches Schloss', uk: 'Курфюрстський палац' },
    altstadt_koblenz: { ru: 'Старый город Кобленца', de: 'Altstadt Koblenz', uk: 'Старе місто Кобленца' },
    citykirche_koblenz: { ru: 'Иезуитская церковь Кобленца (Citykirche)', de: 'Jesuitenkirche Koblenz (Citykirche)', uk: 'Єзуїтська церква Кобленца (Citykirche)' },

    //luxembourg
    ansembourg_castle: { ru: 'Замок-дворец Ансембург', de: 'Schloss Ansembourg', uk: 'Палац-замок Ансембурґ' },
    koerich_castle: { ru: 'Замок Керих', de: 'Burg Koerich', uk: 'Замок Кьоріх' },
    musee_drai_eechelen_luxembourg: { ru: 'Музей «Три жёлудя»', de: 'Museum „Drei Eicheln“', uk: 'Музей «Три жолуді»' },
    fort_thungen_luxembourg: { ru: 'Форт Тюнген', de: 'Fort Thüngen', uk: 'Форт Тюнген' },
    old_town_luxembourg: { ru: 'Старый город Люксембурга', de: 'Altstadt Luxemburg', uk: 'Старе місто Люксембурга' },
    casemates_du_bock_luxembourg: { ru: 'Казематы Бок', de: 'Bock-Kasematten', uk: 'Каземати Бок' },
    abbey_neumunster_luxembourg: { ru: 'Абатство Неймюнстер', de: 'Abtei Neumünster', uk: 'Абатство Неймюнстер' },
    pont_du_chateau_luxembourg: { ru: 'Мост Понт-дю-Шато', de: 'Pont du Château Brücke', uk: 'Міст Понт-дю-Шато' },
    bridges_luxembourg: { ru: 'Мосты и виадуки Люксембурга', de: 'Brücken und Viadukte von Luxemburg', uk: 'Мости та віадуки Люксембурга' },
    passerelle_luxembourg: { ru: 'Мост Пассерель', de: 'Passerelle-Brücke', uk: 'Міст Пассерель' },
    adolphe_luxembourg: { ru: 'Мост Адольфа', de: 'Adolphe-Brücke', uk: 'Міст Адольфа' },
    notre_dame_cathedral_luxembourg: { ru: 'Собор Люксембургской Богоматери', de: 'Kathedrale Notre-Dame Luxemburg', uk: 'Собор Люксембургської Богоматері' },
    grand_ducal_palace_luxembourg: { ru: 'Дворец Великих герцогов', de: 'Großherzoglicher Palast', uk: 'Палац Великого герцога' },
    hammelsmarsch_luxembourg: { ru: 'Фонтан «Хэммельсмарш»', de: 'Brunnen «Hämmelsmarsch»', uk: 'Фонтан «Хеммельсмарш»' },
    acrobats_luxembourg: { ru: 'Скульптурная группа «Акробаты»', de: 'Skulpturengruppe «Akrobaten»', uk: 'Скульптурна група «Акробати»' },

    // Ukraine
    // Sumska oblast
    // Sumy city
    sumy_spaso_preobrazhensky: { ru: 'Спасо-Преображенский собор', de: 'Spaso-Preobraschenski-Kathedrale', uk: 'Спасо-Преображенський собор' },
    pokrovska_square_sumy: { ru: 'Покровская площадь', de: 'Pokrowska-Platz', uk: 'Покровська площа' },
    sumy_altanka: { ru: 'Альтанка', de: 'Der Pavillon', uk: 'Альтанка' },
    onatsky_museum_sumy: { ru: 'Сумской областной художественный музей им. Н. Онацкого', de: 'Oblastliches Kunstmuseum Sumy N. Onatsky', uk: 'Сумський обласний художній музей ім. Н. Онацького' },

    Unesco_Title: { ru: "Достопримечательности ЮНЕСКО", uk: "Пам’ятки ЮНЕСКО", de: "UNESCO-Welterbestätten" }
  },
  events: {
    karneval_koln: { ru: "Кельнский карнавал", uk: "Кельнський карнавал", de: "Kölner Karneval" },
    karneval_koln_city: { ru: "проходит в Кёльне – неофициальной столице карнавала, а также во многих городах Рейнской области", uk: "відбувається в Кельні – неофіційній столиці карнавалу, а також у багатьох містах Рейнської області", de: "Findet in Köln – der inoffiziellen Karnevalshauptstadt – sowie in zahlreichen Städten des Rheinlandes statt" },
    winterleuchten_dortmund: { ru: "Сад света в Вестфаленпарке", uk: "Сад світла у Вестфаленпарку", de: "Winterleuchten im Westfalenpark" },
    winterleuchten_dortmund_city: { ru: "проходит в Дортмунде, в Вестфаленпарке", uk: "відбувається в Дортмунді, у Вестфаленпарку", de: "Findet in Dortmund, im Westfalenpark statt" },
    christmas_market_dortmund: { ru: "Рождественская ярмарка и главная рождественская ёлка Дортмунда", uk: "Різдвяний ярмарок і головна різдвяна ялинка Дортмунда", de: "Weihnachtsmarkt und der große Weihnachtsbaum in Dortmund" },
  },
  routes: {
    mullerthal_trail: { ru: "Мюллертальская тропа", uk: "Мюллертальська стежка", de: "Mullerthal Trail" },
    seven_castles: { ru: "Долина семи замков", uk: "Долина семи замків", de: "Tal der sieben Schlösser" },
    castles_rhine_valley: { ru: "Долина Среднего Рейна", uk: "Долина Середнього Рейну", de: "Mittelrheintal" },
  }
}

export default datas