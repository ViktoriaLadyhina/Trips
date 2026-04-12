const datas =

{
    countries: {
    germany: { ru: 'Германия', de: 'Deutschland', ua: 'Німеччина' },
    ukraine: { ru: 'Украина', de: 'Ukraine', ua: 'Україна' },
    luxembourg: { ru: 'Люксембург', de: 'Luxemburg', ua: 'Люксембург' }
  },
  regions: {
    nrw: { ru: 'Северный Рейн-Вестфалия', de: 'Nordrhein-Westfalen', ua: 'Північний Рейн-Вестфалія' },
    rheinland_pfalz: { ru: 'Рейнланд-Пфальц', de: 'Rheinland-Pfalz', ua: 'Рейнланд-Пфальц' },
    sumska: { ru: 'Сумская область', de: 'Sumska Oblast', ua: 'Сумська область' }
  },
  districts: {
    arnsberg: { ru: 'Административный округ Арнсберг', de: 'Regierungsbezirk Arnsberg', ua: 'Адміністративний округ Арнсберг' },
    merkischer: { ru: 'Район Меркиш', de: 'Märkischer Kreis', ua: 'Район Меркіш' },

    koln: { ru: 'Административный округ Кёльн', de: 'Regierungsbezirk Köln', ua: 'Адміністративний округ Кельн' },
    rheinErft: { ru: 'Район Рейн-Эрфт', de: 'Rhein-Erft-Kreis', ua: 'Район Рейн-Ерфт' },
    aachen: { ru: 'Район Аахен', de: 'Kreis Aachen', ua: 'Район Аахен' },
    rhein_sieg: { ru: 'Район Рейн-Зиг', de: 'Rhein-Sieg-Kreis', ua: 'Район Рейн-Зиг' },

    mayen_koblenz: { ru: 'Район Майен‑Кобленц', de: 'Landkreis Mayen-Koblenz', ua: 'Район Маєн-Кобленц' },
    trier_saarburg: { ru: 'Район Трир-Саарбург', de: 'Landkreis Trier-Saarburg', ua: 'Район Трір-Саарбург' }
  },
  cities: {
    koln: { ru: 'Город Кёльн', de: 'Stadt Köln', ua: 'Місто Кельн' },
    monschau: { ru: 'Город Моншау', de: 'Stadt Monschau', ua: 'Місто Моншау' },
    bruhl: { ru: 'Город Брюль', de: 'Stadt Brühl', ua: 'Місто Брюль' },
    frechen: { ru: 'Город Фрехен', de: 'Stadt Frechen', ua: 'Місто Фрехен' },
    konigswinter: { ru: 'Город Кёнигсвинтер', de: 'Stadt Königswinter', ua: 'Місто Кенігсвінтер' },
    dortmund: { ru: 'Город Дортмунд', de: 'Stadt Dortmund', ua: 'Місто Дортмунд' },
    luedenscheid: { ru: 'Город Люденшайд', de: 'Stadt Lüdenscheid', ua: 'Місто Люденшайд' },
    altena: { ru: 'Город Альтена', de: 'Stadt Altena', ua: 'Місто Альтена' },
    iserlohn: { ru: 'Город Изерлон', de: 'Stadt Iserlohn', ua: 'Місто Ізерлон' },

    trier: { ru: 'Город Трир', de: 'Stadt Trier', ua: 'Місто Трір' },
    saarburg: { ru: 'Город Саарбург', de: 'Stadt Saarburg', ua: 'Місто Саарбург' },

    sumy: { ru: 'Город Сумы', de: 'Stadt Sumy', ua: 'Місто Суми' }
  },
  attractions: {
    // arnsberg округ
    // Dortmund
    westfalenpark: { ru: 'Вестфаленпарк', de: 'Westfalenpark', ua: 'Вестфаленпарк' },

    // Märkischer Kreis
    // Iserlohn
    dechenhohle_iserlohn: { ru: 'Пещера Дехенхёле', de: 'Dechenhöhle', ua: 'Печера Дехенхёле' },

    // Lüdenscheid
    altstadt_luedenscheid: { ru: 'Старый город Люденшайда', de: 'Altstadt Lüdenscheid', ua: 'Старе місто Люденшайда' },
    erloeserkirche_luedenscheid: { ru: 'Церковь Спасителя', de: 'Erlöserkirche', ua: 'Церква Спасителя' },
    rathausplatz_luedenscheid: { ru: 'Центральная площадь Люденшайда', de: 'Rathausplatz von Lüdenscheid', ua: 'Центральна площа Люденшайда' },
    brunnen_altstadt_luedenscheid: { ru: 'Фонтан в старом городе', de: 'Brunnen in der Altstadt', ua: 'Фонтан у старому місті' },
    sternplatz: { ru: 'Площадь Штернплац', de: 'Sternplatz', ua: 'Площа Штернплац' },
    onkel_willi_denkmal_sternplatz_luedenscheid: { ru: 'Памятник дяде Вилли', de: 'Denkmal von Onkel Willi', ua: 'Памятник дядьку Віллі' },
    fontain_sternplatz_luedenscheid: { ru: 'Фонтан на площади Штернплац', de: 'Brunnen auf dem Sternplatz', ua: 'Фонтан на площі Штернплац' },
    history_museum_luedenscheid: { ru: 'Исторический музей Люденшайда', de: 'Geschichtsmuseum Lüdenscheid', ua: 'Історичний музей Люденшайда' },
    christuskirche_luedenscheid: { ru: 'Псевдоготическая церковь Христа', de: 'Pseudogotische Christuskirche', ua: 'Псевдоготична церква Христа' },
    versetalsperre_luedenscheid: { ru: 'Водохранилище Верзе', de: 'Versetalsperre', ua: 'Водосховище Верзе' },
    st_joseph_medardus: { ru: 'Церковь Святого Йозефа и Медарда', de: 'Kirche St. Joseph und Medardus', ua: 'Церква Святого Йосипа та Медарда' },
    schloss_neuenhof_luedenscheid: { ru: 'Замок Нойенхоф', de: 'Schloss Neuenhof', ua: 'Замок Нойенхоф' },
    schloss_oedenthal_luedenscheid: { ru: 'Усадьба Оеденталь', de: 'Schloss Oedenthal', ua: 'Садиба Оеденталь' },

    // Altena
    burg_altena: { ru: 'Замок Альтена', de: 'Burg Altena', ua: 'Замок Альтена' },
    drahtmuseum_altena: { ru: 'Немецкий музей проволоки', de: 'Deutsches Drahtmuseum', ua: 'Німецький музей дроту' },
    fuelbecketalsperre_altena: { ru: 'Водохранилище Фюльбекке', de: 'Fuelbecketalsperre', ua: 'Водосховище Фюльбекке' },
    lutherkirche_altena: { ru: 'Евангелическо-лютеранская церковь Лютера', de: 'Lutherkirche Altena', ua: 'Євангелічно-лютеранська церква Лютера' },
    gustav_selve_altena: { ru: 'Памятник Густаву Сельве', de: 'Gustav-Selve-Denkmal', ua: 'Пам’ятник Густаву Сельве' },
    st_matthaeus_church_altena: { ru: 'Приходская церковь Святого Матфея', de: 'Katholische Pfarrkirche St. Matthäus', ua: 'Парафіяльна церква Святого Матвія' },

    //Köln-city
    cologne_cathedral: { ru: 'Кёльнский собор', de: 'Kölner Dom', ua: 'Кельнський собор' },
    rathaus_koln: { ru: 'Кёльнская ратуша', de: 'Kölner Rathaus', ua: 'Кельнська ратуша' },
    roemisch_germanisches_museum: { ru: 'Римско-германский музей', de: 'Römisch-Germanisches Museum', ua: 'Римсько-германський музей' },
    farina_duftmuseum: { ru: 'Музей духов в доме Фарина', de: 'Duftmuseum im Farina-Haus', ua: 'Музей парфумів у домі Фаріна' },
    museum_ludwig: { ru: 'Музей Людвига', de: 'Museum Ludwig', ua: 'Музей Людвіга' },
    schokoladenmuseum: { ru: 'Музей шоколада', de: 'Schokoladenmuseum', ua: 'Музей шоколаду' },
    miqua: { ru: 'Музей в археологическом квартале Кёльна – MiQua', de: 'Museum im archäologischen Viertel Köln – MiQua', ua: 'Музей в археологічному кварталі Кельна – MiQua' },
    wallraf_richartz_museum: { ru: 'Музей Вальрафа-Рихарца', de: 'Wallraf-Richartz-Museum', ua: 'Музей Вальрафа-Ріхарцa' },
    koln_bridges: { ru: 'Мосты Кёльна через Рейн', de: 'Kölner Rheinbrücken', ua: 'Мости Кельна через Рейн' },
    forstbotanischer_garten: { ru: 'Ботанический сад и лесопарк', de: 'Forstbotanischer Garten', ua: 'Ботанічний сад і лісопарк' },
    flora_garten_koln: { ru: 'Ботанический сад Флора', de: 'Botanischer Garten Flora', ua: 'Ботанічний сад Флора' },
    rheinpark_koln: { ru: 'Рейнский парк', de: 'Rheinpark', ua: 'Рейнський парк' },
    tanzbrunnen: { ru: 'Танцующий фонтан', de: 'Tanzbrunnen', ua: 'Танцюючий фонтан' },
    koln_seilbahn: { ru: 'Кёльнская канатная дорога', de: 'Kölner Seilbahn', ua: 'Кельнська канатна дорога' },
    divitia_koln: { ru: 'Руины римского форта Дивития в Кёльне', de: 'Ruinen des römischen Forts Divitia in Köln', ua: 'Руїни римського форту Дивітія в Кельні' },
    guerzenich_koln: { ru: 'Гюрцених – исторический концертный зал и гильдейский дом в Кёльне', de: 'Gürzenich – historischer Konzertsaal und Zunfthaus in Köln', ua: 'Гюрценіх – історичний концертний зал і гільдійний дім у Кельні' },
    ostasiatische_kunst_koln: { ru: 'Музей восточно‑азиатского искусства', de: 'Museum für Ostasiatische Kunst', ua: 'Музей східноазіатського мистецтва' },
    museum_schnuetgen_koln: { ru: 'Музей Шнютгена', de: 'Museum Schnütgen', ua: 'Музей Шнютгена' },
    zoo_koln: { ru: 'Кёльнский зоопарк', de: 'Kölner Zoo', ua: 'Кельнський зоопарк' },
    dufthaus_4711_koln: { ru: 'Дом одеколона 4711', de: 'Duft-Haus 4711', ua: 'Будинок одеколону 4711' },
    skulpturenpark_koln: { ru: 'Парк скульптур в Кёльне', de: 'Skulpturenpark in Köln', ua: 'Парк скульптур у Кельні' },
    rautenstrauch_joest_museum_koln: { ru: 'Музей Раутенштраух-Йост', de: 'Rautenstrauch-Joest-Museum', ua: 'Музей Раутенштраух-Йост' },
    finkens_garten_koln: { ru: 'Экологический сад Финкенсгартен', de: 'Finkens Garten', ua: 'Екологічний сад Фінкенсгартен' },
    makk_museum_koln: { ru: 'Музей прикладного искусства', de: 'Museum für angewandte Kunst', ua: 'Музей прикладного мистецтва' },
    stadtmuseum_koln: { ru: 'Кельнский городской музей', de: 'Kölnisches Stadtmuseum', ua: 'Кельнський міський музей' },
    sport_olympia_museum_koln: { ru: 'Немецкий музей спорта и Олимпийских игр', de: 'Deutsches Sport & Olympia Museum', ua: 'Німецький музей спорту та Олімпійських ігор' },
    photographische_sammlung_sk_stiftung_kultur_koln: { ru: 'Фотографическая коллекция культурного фонда SK', de: 'Photographische Sammlung des SK Kulturfonds', ua: 'Фотографічна колекція культурного фонду SK' },
    altstadt_koln: { ru: 'Старый город Кёльна', de: 'Altstadt Köln', ua: 'Старе місто Кельна' },
    gross_st_martin_koln: { ru: 'Большой Святой Мартин', de: 'Groß St. Martin', ua: 'Великий Святий Мартін' },
    st_maria_himmelfahrt_koln: { ru: 'Церковь Успения Пресвятой Девы Марии', de: 'St. Mariä Himmelfahrt', ua: 'Церква Успіння Пресвятої Діви Марії' },
    st_maria_im_kapitol_koln: { ru: 'Церковь Святой Марии в Капитолии', de: 'Kirche St. Maria im Kapitol', ua: 'Церква Святої Марії у Капітолії' },
    decksteiner_weiher_koln: { ru: 'Декштайнер Вайер', de: 'Decksteiner Weiher', ua: 'Декштайнер Вайер' },
    romanische_kirchen_altstadt_koln: { ru: 'Романские церкви Старого города Кёльна', de: 'Romanische Kirchen der Altstadt von Köln', ua: 'Романські церкви Старого міста Кельна' },
    old_towers_koln: { ru: 'Старые башни и укрепления Старого Кёльна', de: 'Alte Türme und Befestigungen der Altstadt Kölns', ua: 'Старі башти та укріплення Старого Кельна' },
    fischmarkt_koln: { ru: 'Фишмаркт', de: 'Fischmarkt', ua: 'Фішмаркт' },
    st_gereon_koln: { ru: 'Церковь Святого Гереона', de: 'St. Gereon Kirche', ua: 'Церква Святого Герєона' },

    // Köln okrug
    // Aachen Kreis
    // Monschau
    historic_center_monschau: { ru: 'Старый город Моншау', de: 'Altstadt Monschau', ua: 'Старе місто Моншау' },
    burg_monschau: { ru: 'Замок Моншау', de: 'Burg Monschau', ua: 'Замок Моншау' },
    rotes_haus_monschau: { ru: 'Красный дом', de: 'Rotes Haus', ua: 'Червоний будинок' },
    senfmuehle_monschau: { ru: 'Историческая горчичная мельница', de: 'Historische Senfmühle', ua: 'Історичний гірчичний млин' },
    glashuette_monschau: { ru: 'Стеклодувная мастерская', de: 'Glashütte', ua: 'Майстерня скла' },
    tuchmacherbrunnen_monschau: { ru: 'Фонтан ткачей в Моншау', de: 'Tuchmacherbrunnen in Monschau', ua: 'Фонтан ткачів у Моншау' },

    // Rhein-Erft-Kreis
    // Brühl
    bruhl_palaces: { ru: 'Дворцы Брюля: ансамбль Аугустусбург и Фалькенлюст', de: 'Schlösser Brühl: Augustusburg & Falkenlust', ua: 'Палаци Брюля: ансамбль Аугустусбург і Фалькенлюст' },
    max_ernst_museum: { ru: 'Музей Макса Эрнста', de: 'Max Ernst Museum', ua: 'Музей Макса Ернста' },
    phantasialand: { ru: 'Парк развлечений Phantasialand', de: 'Phantasialand', ua: 'Парк розваг Phantasialand' },

    // Frechen
    burg_bachem_frechen: { ru: 'Крепость Бахем – историческая водяная крепость во Фрехене', de: 'Burg Bachem – historische Wasserburg in Frechen', ua: 'Фортеця Бахем – історична водяна фортеця у Фрехені' },
    keramion: { ru: 'Керамион – Центр современной и исторической керамики', de: 'KERAMION – Zentrum für moderne und historische Keramik', ua: 'Кераміон – Центр сучасної та історичної кераміки' },
    johann_schmitz_platz_frechen: { ru: 'Площадь Йоханна Шмитца («площадь Ратуши»)', de: 'Johann-Schmitz-Platz in Frechen', ua: 'Площа Йоханна Шміця («площа Ратуші»)' },
    altes_rathaus_frechen: { ru: 'Старая ратуша Фрехена', de: 'Altes Rathaus Frechen', ua: 'Стара ратуша Фрехена' },
    rathausbrunnen_frechen: { ru: 'Фонтан перед ратушей', de: 'Brunnen vor dem Rathaus', ua: 'Фонтан перед ратушею' },
    klüttenbrunnen_frechen: { ru: 'Фонтан Клюттенбрюннен', de: 'Klüttenbrunnen', ua: 'Фонтан Клюттенбрюннен' },
    st_audomar_frechen: { ru: 'Церковь Святого Одомара', de: 'Kirche St. Audomar', ua: 'Церква Святого Одомара' },
    evangelischeKirche_frechen: { ru: 'Евангелическая церковь', de: 'Evangelische Kirche', ua: 'Євангелічна церква' },

    // Rhein-Sieg-Kreis
    // Königswinter
    drachenfels: { ru: 'Гора Драхенфельс', de: 'Drachenfels', ua: 'Гора Драхенфельс' },
    drachenfelsbahn: { ru: 'Железная дорога Драхенфельс', de: 'Drachenfelsbahn', ua: 'Залізниця Драхенфельса' },
    schloss_drachenburg: { ru: 'Дворец Драхенбург', de: 'Schloss Drachenburg', ua: 'Палац Драхенбург' },
    drachenfels_ruins: { ru: 'Руины замка Драхенфельс', de: 'Ruinen der Burg Drachenfels', ua: 'Руїни замку Драхенфельс' },
    nibelungenhalle: { ru: 'Зал Нибелунгов', de: 'Nibelungenhalle', ua: 'Зал Нібелунгів' },
    reptile_zoo: { ru: 'Зоопарк рептилий Драхенфельс', de: 'Reptilienzoo Drachenfels', ua: 'Зоопарк рептилій Драхенфельс' },
    heisterbach_konigswinter: { ru: 'Аббатство Хайстербах', de: 'Abtei Heisterbach', ua: 'Абатство Гайстербах' },
    chorruine_heisterbach_konigswinter: { ru: 'Руины хора бывшей монастырской церкви', de: 'Ruinen des Chors der ehemaligen Klosterkirche', ua: 'Руїни хору колишньої монастирської церкви' },
    st_peter_heisterbach_konigswinter: { ru: 'Церковь Святого Петра в Хайстербахе', de: 'Kirche St. Peter in Heisterbach', ua: 'Церковь Святого Петра в Хайстербахе' },

    // rheinland-pfalz
    // Trier
    portaNigra_trier: { ru: 'Порта Нигра («Чёрные ворота»)', de: 'Porta Nigra', ua: 'Порта Нігра («Чорні ворота»)' },
    amphitheater_trier: { ru: 'Римский амфитеатр', de: 'Römisches Amphitheater', ua: 'Римський амфітеатр' },
    kaiserthermen_trier: { ru: 'Римские императорские бани', de: 'Römische Kaiserthermen', ua: 'Римські імператорські терми' },
    basilica_of_constantine_trier: { ru: 'Базилика Константина', de: 'Konstantin-Basilika', ua: 'Базиліка Константина' },
    barbarathermen_trier: { ru: 'Барбарские термы', de: 'Barbarathermen', ua: 'Барбарські терми' },
    roman_bridge_trier: { ru: 'Римский мост', de: 'Römerbrücke', ua: 'Римський міст' },
    cathedral_trier: { ru: 'Кафедральний собор', de: 'Trierer Dom', ua: 'Кафедральний собор' },
    basilikaStPaulinus_trier: { ru: 'Базилика Святого Паулина', de: 'Basilika St. Paulinus', ua: 'Базиліка Святого Пауліна' },
    liebfrauenkirche_trier: { ru: 'Церковь Богоматери', de: 'Liebfrauenkirche', ua: 'Церква Богородиці' },
    altstadt_trier: { ru: 'Старый город Трира', de: 'Altstadt Trier', ua: 'Старе місто Тріра' },

    //Saarburg
    altstadt_saarburg: { ru: 'Старый город Саарбурга', de: 'Altstadt Saarburg', ua: 'Старе місто Саарбурга' },
    wasserfall_saarburg: { ru: 'Водопад Саарбурга', de: 'Wasserfall von Saarburg', ua: 'Водоспад Саарбурга' },
    burg_saarburg: { ru: 'Замок Саарбурга', de: 'Burg Saarburg', ua: 'Замок Саарбурга' },
    amuseum_saarburg: { ru: 'Амюзеум Саарбург', de: 'Amüseum Saarburg', ua: 'Амюзеум Саарбург' },

    // Ukraine
    // Sumska oblast
    // Sumy city
    sumy_spaso_preobrazhensky: { ru: 'Спасо-Преображенский собор', de: 'Spaso-Preobraschenski-Kathedrale', ua: 'Спасо-Преображенський собор' },
    pokrovska_square_sumy: { ru: 'Покровская площадь', de: 'Pokrowska-Platz', ua: 'Покровська площа' },
    sumy_altanka: { ru: 'Альтанка', de: 'Der Pavillon', ua: 'Альтанка' },
    onatsky_museum_sumy: { ru: 'Сумской областной художественный музей им. Н. Онацкого', de: 'Oblastliches Kunstmuseum Sumy N. Onatsky', ua: 'Сумський обласний художній музей ім. Н. Онацького' },

    Unesco_Title: { ru: "Достопримечательности ЮНЕСКО", ua: "Пам’ятки ЮНЕСКО", de: "UNESCO-Welterbestätten" }
  },
  events: {
    karneval_koln: { ru: "Кельнский карнавал", ua: "Кельнський карнавал", de: "Kölner Karneval" },
    karneval_koln_city: { ru: "проходит в Кёльне – неофициальной столице карнавала, а также во многих городах Рейнской области", ua: "відбувається в Кельні – неофіційній столиці карнавалу, а також у багатьох містах Рейнської області", de: "Findet in Köln – der inoffiziellen Karnevalshauptstadt – sowie in zahlreichen Städten des Rheinlandes statt" },
    winterleuchten_dortmund: { ru: "Сад света в Вестфаленпарке", ua: "Сад світла у Вестфаленпарку", de: "Winterleuchten im Westfalenpark" },
    winterleuchten_dortmund_city: { ru: "проходит в Дортмунде, в Вестфаленпарке", ua: "відбувається в Дортмунді, у Вестфаленпарку", de: "Findet in Dortmund, im Westfalenpark statt" },
    christmas_market_dortmund: { ru: "Рождественская ярмарка и главная рождественская ёлка Дортмунда", ua: "Різдвяний ярмарок і головна різдвяна ялинка Дортмунда", de: "Weihnachtsmarkt und der große Weihnachtsbaum in Dortmund" },
  },
  routes: {
    mullerthal_trail: { ru: "Мюллертальская тропа", ua: "Мюллертальська стежка", de: "Mullerthal Trail" },
    seven_castles: { ru: "Долина семи замков", ua: "Долина семи замків", de: "Tal der sieben Schlösser" },
  }
}

export default datas