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
    dusseldorf: { id: 62, ru: 'Административный округ Дюссельдорф', de: 'Regierungsbezirk Düsseldorf', uk: 'Адміністративний округ Дюссельдорф' },
    koln: { id: 63, ru: 'Административный округ Кёльн', de: 'Regierungsbezirk Köln', uk: 'Адміністративний округ Кельн' },
    munster: { id: 64, ru: 'Административный округ Мюнстер', de: 'Regierungsbezirk Münster', uk: 'Адміністративний округ Мюнстер' },
    mayen_koblenz: { id: 114, ru: 'Район Майен‑Кобленц', de: 'Landkreis Mayen-Koblenz', uk: 'Район Маєн-Кобленц' },
    trier_saarburg: { id: 121, ru: 'Район Трир-Саарбург', de: 'Landkreis Trier-Saarburg', uk: 'Район Трір-Саарбург' }
  },
  subRegions: {
    merkischer: { id: 161, parent_id: 60, ru: 'Район Меркиш', de: 'Märkischer Kreis', uk: 'Район Меркіш' },
    hochsauerland: { id: 291, parent_id: 60, ru: 'Район Хохзауэрланд', de: 'Hochsauerlandkreis', uk: 'Район Хохзауэрланд' },
    mettmann: { id: 372, parent_id: 62, ru: 'Район Меттман', de: 'Kreis Mettmann', uk: 'Район Меттман' },
    rhein_erft: { id: 160, parent_id: 63, ru: 'Район Рейн-Эрфт', de: 'Rhein-Erft-Kreis', uk: 'Район Рейн-Ерфт' },
    aachen: { id: 162, parent_id: 63,ru: 'Район Аахен', de: 'Kreis Aachen', uk: 'Район Аахен' },
    rhein_sieg: { id: 166, parent_id: 63,ru: 'Район Рейн-Зиг', de: 'Rhein-Sieg-Kreis', uk: 'Район Рейн-Зиг' },
    recklinghausen: { id: 808, parent_id: 64, ru: 'Район Реклингхаузен', de: 'Kreis Recklinghausen', uk: 'Район Реклінггаузен' },
    steinfurt: { id: 819, parent_id: 64, ru: 'Район Штайнфурт', de: 'Kreis Steinfurt', uk: 'Район Штайнфурт' },
    borken: { id: 844, parent_id: 64, ru: 'Район Боркен', de: 'Kreis Borken', uk: 'Район Боркен' },
    coesfeld: { id: 862, parent_id: 64, ru: 'Район Косфельд', de: 'Kreis Coesfeld', uk: 'Район Косфельд' },
    warendorf: { id: 874, parent_id: 64, ru: 'Район Варендорф', de: 'Kreis Warendorf', uk: 'Район Варендорф' },
    saarburg_kell: { id: 552, parent_id: 121, ru: 'Объединённая община Саарбург-Келль', de: 'Verbandsgemeinde Saarburg-Kell', uk: 'Об’єднана громада Саарбург-Келль' },
  },
  cities: {
    // Germany
    koln_city: { id: 76, ru: 'Город Кёльн', de: 'Stadt Köln', uk: 'Місто Кельн' },
    monschau: { id: 185, ru: 'Город Моншау', de: 'Stadt Monschau', uk: 'Місто Моншау' },
    bruhl: { id: 171, ru: 'Город Брюль', de: 'Stadt Brühl', uk: 'Місто Брюль' },
    frechen: { id: 174, ru: 'Город Фрехен', de: 'Stadt Frechen', uk: 'Місто Фрехен' },
    konigswinter: { id: 247, ru: 'Город Кёнигсвинтер', de: 'Stadt Königswinter', uk: 'Місто Кенігсвінтер' },
    lohmar: { id: 248, ru: 'Город Ломар', de: 'Stadt Lohmar', uk: 'Місто Ломар' },

    velbert: { id: 410, ru: 'Город Фельберт', de: 'Stadt Velbert', uk: 'Місто Фельберт' },

    dorsten: { id: 811, ru: 'Город Дорстен', de: 'Stadt Dorsten', uk: 'Місто Дорстен' },

    dortmund: { id: 72, ru: 'Город Дортмунд', de: 'Stadt Dortmund', uk: 'Місто Дортмунд' },
    luedenscheid: { id: 298, ru: 'Город Люденшайд', de: 'Stadt Lüdenscheid', uk: 'Місто Люденшайд' },
    altena: { id: 293, ru: 'Город Альтена', de: 'Stadt Altena', uk: 'Місто Альтена' },
    iserlohn: { id: 296, ru: 'Город Изерлон', de: 'Stadt Iserlohn', uk: 'Місто Ізерлон' },
    sundern: { id: 354, ru: 'Город Зундерн', de: 'Stadt Sundern', uk: 'Місто Зундерн' },

    koblenz: { id: 89, ru: 'Город Кобленц', de: 'Stadt Koblenz', uk: 'Місто Кобленц' },
    trier: { id: 91, ru: 'Город Трир', de: 'Stadt Trier', uk: 'Місто Трір' },
    saarburg_city: { id: 618, ru: 'Город Саарбург', de: 'Stadt Saarburg', uk: 'Місто Саарбург' },

    //luxembourg
    luxembourg_city: { id: 146, ru: 'Город Люксембург', de: 'Stadt Luxemburg', uk: 'Місто Люксембург' },
    ansembourg: { id: 159, ru: 'Деревня Ансембург', de: 'Dorf Ansembourg', uk: 'Село Ансембург' },
    koerich: { id: 141, ru: 'Деревня Кёрих', de: 'Dorf Koerich', uk: 'Село Керіх' },
    mersch_com: { id: 153, is_active: 0, ru: 'Мерш', de: 'Mersch', uk: 'Мерш' },
    helperknapp: { id: 755, is_active: 0, ru: 'Хелперкенапп', de: 'Helperknapp', uk: 'Хелперкенапп' },
    habscht: { id: 759, is_active: 0, ru: 'Хабшт', de: 'Habscht', uk: 'Хабшт' },

    //Ukraine
    sumy: { id: 125, ru: 'Город Сумы', de: 'Stadt Sumy', uk: 'Місто Суми' }
  },
  cityDistrict: {
    dortmund_innenstadt_nord: { id: 673, parent: 72, ru: 'Центр-Север', de: 'Innenstadt-Nord', uk: 'Центр-Північ' },
    dortmund_innenstadt_ost: { id: 674, parent: 72, ru: 'Центр-Восток', de: 'Innenstadt-Ost', uk: 'Центр-Схід' },
    dortmund_innenstadt_west: { id: 675, parent: 72, ru: 'Центр-Запад', de: 'Innenstadt-West', uk: 'Центр-Захід' },
    dortmund_eving: { id: 676, parent: 72, ru: 'Эвинг', de: 'Eving', uk: 'Евінг' },
    dortmund_scharnhorst: { id: 677, parent: 72, ru: 'Шарнхорст', de: 'Scharnhorst', uk: 'Шарнгорст' },
    dortmund_brackel: { id: 678, parent: 72, ru: 'Бракель', de: 'Brackel', uk: 'Бракель' },
    dortmund_aplerbeck: { id: 679, parent: 72, ru: 'Аплербек', de: 'Aplerbeck', uk: 'Аплербек' },
    dortmund_hoerde: { id: 680, parent: 72, ru: 'Хёрде', de: 'Hoerde', uk: 'Герде' },
    dortmund_hombruch: { id: 681, parent: 72, ru: 'Хомбрук', de: 'Hombruch', uk: 'Хомбрух' },
    dortmund_luetgendortmund: { id: 682, parent: 72, ru: 'Лютгендортмунд', de: 'Luetgendortmund', uk: 'Лютгендортмунд' },
    dortmund_huckarde: { id: 683, parent: 72, ru: 'Хуккарде', de: 'Huckarde', uk: 'Хуккарде' },
    dortmund_mengede: { id: 684, parent: 72, ru: 'Менгеде', de: 'Mengede', uk: 'Менгеде' },

    velbert_langenberg: { id: 738, parent: 410, ru: 'Менгеде', de: 'Mengede', uk: 'Менгеде' },

    sundern_sundern: { id: 685, parent: 354, ru: 'Зундерн', de: 'Sundern', uk: 'Зундерн' },
    sundern_allendorf: { id: 686, parent: 354, ru: 'Аллендорф', de: 'Allendorf', uk: 'Аллендорф' },
    sundern_amecke: { id: 687, parent: 354, ru: 'Амеке', de: 'Amecke', uk: 'Амеке' },
    sundern_endorf: { id: 688, parent: 354, ru: 'Эндорф', de: 'Endorf', uk: 'Ендорф' },
    sundern_hachen: { id: 689, parent: 354, ru: 'Хахен', de: 'Hachen', uk: 'Хахен' },
    sundern_langscheid: { id: 690, parent: 354, ru: 'Лангшеид', de: 'Langscheid', uk: 'Лангшайд' },
    sundern_stemel: { id: 691, parent: 354, ru: 'Штемель', de: 'Stemel', uk: 'Штемель' },
    sundern_stockum: { id: 692, parent: 354, ru: 'Штоккум', de: 'Stockum', uk: 'Штоккум' },
    sundern_westenfeld: { id: 693, parent: 354, ru: 'Вестенфельд', de: 'Westenfeld', uk: 'Вестенфельд' },

    iserlohn_iserlohn: { id: 694, parent: 296, ru: 'Изерлон', de: 'Iserlohn', uk: 'Ізерлон' },
    iserlohn_letmathe: { id: 695, parent: 296, ru: 'Летмате', de: 'Letmathe', uk: 'Летмате' },
    iserlohn_hennen: { id: 696, parent: 296, ru: 'Хеннен', de: 'Hennen', uk: 'Хеннен' },
    iserlohn_suemmern: { id: 697, parent: 296, ru: 'Зюммерн', de: 'Sümmern', uk: 'Зюммерн' },
    iserlohn_oestrich: { id: 698, parent: 296, ru: 'Эстрих', de: 'Oestrich', uk: 'Естріх' },

    luedenscheid_innenstadt: { id: 699, parent: 298, ru: 'Центр города', de: 'Innenstadt', uk: 'Центр міста' },
    luedenscheid_tinsberg_kluse: { id: 700, parent: 298, ru: 'Тинсберг / Клузе', de: 'Tinsberg / Kluse', uk: 'Тінсберг / Клузе' },
    luedenscheid_gruenewald: { id: 701, parent: 298, ru: 'Грюнвальд', de: 'Grünewald', uk: 'Грюнвальд' },
    luedenscheid_honsel_eichholz: { id: 702, parent: 298, ru: 'Хонсель / Айххольц', de: 'Honsel / Eichholz', uk: 'Хонсель / Айхгольц' },
    luedenscheid_oeneking_stuettinghausen: { id: 703, parent: 298, ru: 'Оенекинг / Штюттингхаузен', de: 'Oeneking / Stüttinghausen', uk: 'Оенекінг / Штюттінггаузен' },
    luedenscheid_buckesfeld_othlinghausen: { id: 704, parent: 298, ru: 'Буксфельд / Отлингхаузен', de: 'Buckesfeld / Othlinghausen', uk: 'Буксфельд / Отлінггаузен' },
    luedenscheid_wehberg: { id: 705, parent: 298, ru: 'Вехберг', de: 'Wehberg', uk: 'Вегберг' },
    luedenscheid_kalve_wefelshohl: { id: 706, parent: 298, ru: 'Кальве / Вефельсхоль', de: 'Kalve / Wefelshohl', uk: 'Кальве / Вефельсголь' },
    luedenscheid_gevelndorf_freisenberg: { id: 707, parent: 298, ru: 'Гевельндорф / Фрайзенберг', de: 'Gevelndorf / Freisenberg', uk: 'Гевельндорф / Фрайзенберг' },
    luedenscheid_bruegge: { id: 708, parent: 298, ru: 'Брюгге', de: 'Brügge', uk: 'Брюгге' },
    luedenscheid_ramsberg_hasley_baukloh: { id: 709, parent: 298, ru: 'Рамсберг / Хаслей / Баукloh', de: 'Ramsberg / Hasley / Baukloh', uk: 'Рамсберг / Хаслей / Баукloh' },
    luedenscheid_vogelberg: { id: 710, parent: 298, ru: 'Вогельберг', de: 'Vogelberg', uk: 'Вогельберг' },
    luedenscheid_wettringhof: { id: 711, parent: 298, ru: 'Веттрингhof', de: 'Wettringhof', uk: 'Веттрингhof' },
    luedenscheid_dickenberg_eggenscheid: { id: 712, parent: 298, ru: 'Диккенберг / Эгеншайд', de: 'Dickenberg / Eggenscheid', uk: 'Диккенберг / Егеншайд' },

    monschau_altstadt: { id: 659, parent: 185, ru: 'Исторический центр Моншау', de: 'Altstadt', uk: 'Історичний центр Моншау' },
    monschau_hoefen: { id: 660, parent: 185, ru: 'Хёфен', de: 'Höfen', uk: 'Хьофен' },
    monschau_imgenbroich: { id: 661, parent: 185, ru: 'Имгенбройх', de: 'Imgenbroich', uk: 'Імгенбройх' },
    monschau_kalterherberg: { id: 662, parent: 185, ru: 'Кальтерхерберг', de: 'Kalterherberg', uk: 'Кальтерхерберг' },
    monschau_konzen: { id: 663, parent: 185, ru: 'Концен', de: 'Konzen', uk: 'Концен' },
    monschau_muetzenich: { id: 664, parent: 185, ru: 'Мютцених', de: 'Mützenich', uk: 'Мютценіх' },
    monschau_rohren: { id: 665, parent: 185, ru: 'Рорен', de: 'Rohren', uk: 'Рорен' },

    koeln_lindenthal: { id: 714, parent: 76, ru: 'округ Линденталь (Lindenthal)', de: 'Bezirk Lindenthal', uk: 'округ Лінденталь' },
    koeln_innenstadt: { id: 716, parent: 76, ru: 'Центральный округ (Innenstadt)', de: 'Stadtbezirk Innenstadt', uk: 'Центральний округ (Innenstadt)' },

    frechen_centrum: { id: 666, parent: 174, ru: 'Центральный район Фрехена', de: 'Zentrum', uk: 'Центральний район Фрехена' },
    frechen_bachem: { id: 667, parent: 174, ru: 'Бахем', de: 'Bachem', uk: 'Бахем' },
    frechen_buschbell: { id: 668, parent: 174, ru: 'Бушбель', de: 'Buschbell', uk: 'Бушбель' },
    frechen_habbelrath: { id: 669, parent: 174, ru: 'Хаббелрат', de: 'Habbelrath', uk: 'Хаббелрат' },
    frechen_koenigsdorf: { id: 670, parent: 174, ru: 'Кёнигсдорф', de: 'Königsdorf', uk: 'Кьонігсдорф' },
    frechen_grefrath: { id: 671, parent: 174, ru: 'Грефрат', de: 'Grefrath', uk: 'Грефрат' },
    frechen_huecheln: { id: 672, parent: 174, ru: 'Хюхельн', de: 'Hücheln', uk: 'Хюхельн' },

    bruhl_innenstadt: { id: 788, parent: 171, ru: 'район Инненштадт (Innenstadt)', de: 'Stadtteil Innenstadt', uk: 'район Інненштадт (Innenstadt)' },

    koblenz_ehrenbreitstein: { id: 763, parent: 89, ru: 'район Эренбрайтштайн (Ehrenbreitstein)', de: 'Stadtteil Ehrenbreitstein', uk: 'район Еренбрайтштайн (Ehrenbreitstein)' },
    koblenz_altstadt: { id: 778, parent: 89, ru: ' район Старый город (Altstadt)', de: 'Stadtteil Altstadt', uk: 'район Старе місто (Altstadt)' },
    koblenz_solzenfels: { id: 782, parent: 89, ru: 'район  Штольценфельс (Stolzenfels)', de: 'Stadtteil Stolzenfels', uk: 'район Штольценфельс (Stolzenfels)' },
    koblenz_südliche_vorstadt: { id: 784, parent: 89, ru: 'район  Южный пригород (Südliche Vorstadt)', de: 'Stadtteil Südliche Vorstadt', uk: 'район Південне передмістя (Südliche Vorstadt)' },

    trier_mitte_gartenfeld: { id: 791, parent: 91, ru: 'округ Центр / Гартенфельд (Trier-Mitte/Gartenfeld)', de: 'Ortsbezirk Trier-Mitte/Gartenfeld', uk: 'округ Центр / Гартенфельд (Trier-Mitte/Gartenfeld)' },
    trier_olewig: { id: 805, parent: 91, ru: 'округ Олевиг (Olewig)', de: 'Ortsbezirk Olewig', uk: 'округ Олевіг (Olewig)' },
    trier_sud: { id: 807, parent: 91, ru: 'округ Южный Трир (Trier-Süd)', de: 'Ortsbezirk Trier-Süd', uk: 'округ Південний Трір (Trier-Süd)' },

    sumy_zarichnyi: { id: 723, parent: 125, ru: 'Заречный район', de: 'Zaritschnyj-Bezirk', uk: 'Зарічний район' },
    sumy_kowpak: { id: 795, parent: 125, ru: 'Ковпаковский район', de: 'Kowpakivskyj-Bezirk', uk: 'Ковпаківський район' },
  },
  attractions: {
    // arnsberg округ
    // Dortmund
    westfalenpark: { ru: 'Вестфаленпарк', de: 'Westfalenpark', uk: 'Вестфаленпарк' },

    // Хохзауэрланд Kreis
    // sundern
    sorpesee_sundern: { id: 741, ru: 'Озеро Сорпе', de: 'Sorpesee', uk: 'Озеро Сорпе' },
    ehrenmal_langscheid: { id: 742, ru: 'Мемориал Лангшайд', de: 'Ehrenmal Langscheid', uk: 'Меморіал Лангшайд' },
    burg_amecke: { id: 746, ru: 'Замок Амеке', de: 'Schloss Amecke', uk: 'Замок Амеке' },

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
    langenberg_altstadt_velbert: { id: 737, ru: 'Старый город Лангенберг', de: 'Altstadt Langenberg', uk: 'Старе місто Лангенберг' },
    langenberg_alte_kirche_velbert: { id: 739, ru: 'Старая церковь Лангеберг', de: 'Alte Kirche Langenberg', uk: 'Стара церква Лангенберг' },
    langenberg_burgerhaus_velbert: { ru: 'Исторический общественный дом Лангенберга', de: 'Historisches Bürgerhaus Langenberg', uk: 'Історичний громадський будинок Лангенберга' },

    // Köln okrug
    //Köln-city
    cologne_cathedral: { id: 717, ru: 'Кёльнский собор', de: 'Kölner Dom', uk: 'Кельнський собор' },
    rathaus_koln: { id: 718, ru: 'Кёльнская ратуша', de: 'Kölner Rathaus', uk: 'Кельнська ратуша' },
    roemisch_germanisches_museum: { id: 747, ru: 'Римско-германский музей', de: 'Römisch-Germanisches Museum', uk: 'Римсько-германський музей' },
    farina_duftmuseum: { id: 743, ru: 'Музей духов в доме Фарина', de: 'Duftmuseum im Farina-Haus', uk: 'Музей парфумів у домі Фаріна' },
    museum_ludwig: { id: 735, ru: 'Музей Людвига', de: 'Museum Ludwig', uk: 'Музей Людвіга' },
    schokoladenmuseum: { ru: 'Музей шоколада', de: 'Schokoladenmuseum', uk: 'Музей шоколаду' },
    miqua_koln: { id: 745, ru: 'Музей в археологическом квартале Кёльна – MiQua', de: 'Museum im archäologischen Viertel Köln – MiQua', uk: 'Музей в археологічному кварталі Кельна – MiQua' },
    wallraf_richartz_museum: { id: 736, ru: 'Музей Вальрафа-Рихарца', de: 'Wallraf-Richartz-Museum', uk: 'Музей Вальрафа-Ріхарцa' },
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
    dufthaus_4711_koln: { id: 744, ru: 'Дом одеколона 4711', de: 'Duft-Haus 4711', uk: 'Будинок одеколону 4711' },
    skulpturenpark_koln: { ru: 'Парк скульптур в Кёльне', de: 'Skulpturenpark in Köln', uk: 'Парк скульптур у Кельні' },
    rautenstrauch_joest_museum_koln: { ru: 'Музей Раутенштраух-Йост', de: 'Rautenstrauch-Joest-Museum', uk: 'Музей Раутенштраух-Йост' },
    finkens_garten_koln: { ru: 'Экологический сад Финкенсгартен', de: 'Finkens Garten', uk: 'Екологічний сад Фінкенсгартен' },
    makk_museum_koln: { id: 749, ru: 'Музей прикладного искусства', de: 'Museum für angewandte Kunst', uk: 'Музей прикладного мистецтва' },
    stadtmuseum_koln: { id: 748, ru: 'Кельнский городской музей', de: 'Kölnisches Stadtmuseum', uk: 'Кельнський міський музей' },
    sport_olympia_museum_koln: { ru: 'Немецкий музей спорта и Олимпийских игр', de: 'Deutsches Sport & Olympia Museum', uk: 'Німецький музей спорту та Олімпійських ігор' },
    photographische_sammlung_sk_stiftung_kultur_koln: { ru: 'Фотографическая коллекция культурного фонда SK', de: 'Photographische Sammlung des SK Kulturfonds', uk: 'Фотографічна колекція культурного фонду SK' },
    altstadt_koln: { id: 715, ru: 'Старый город Кёльна', de: 'Altstadt Köln', uk: 'Старе місто Кельна' },
    gross_st_martin_koln: { id: 728, ru: 'Большой Святой Мартин', de: 'Groß St. Martin', uk: 'Великий Святий Мартін' },
    st_maria_himmelfahrt_koln: { id: 732, ru: 'Церковь Успения Пресвятой Девы Марии', de: 'St. Mariä Himmelfahrt', uk: 'Церква Успіння Пресвятої Діви Марії' },
    st_maria_im_kapitol_koln: { id: 730, ru: 'Церковь Святой Марии в Капитолии', de: 'Kirche St. Maria im Kapitol', uk: 'Церква Святої Марії у Капітолії' },
    decksteiner_weiher_koln: { id: 713, ru: 'Озеро Декштайнер Вайер', de: 'Decksteiner Weiher', uk: 'Озеро Декштайнер Вайер' },
    romanische_kirchen_altstadt_koln: { id: 727, ru: 'Романские церкви Старого города Кёльна', de: 'Romanische Kirchen der Altstadt von Köln', uk: 'Романські церкви Старого міста Кельна' },
    old_towers_koln: { ru: 'Старые башни и укрепления Старого Кёльна', de: 'Alte Türme und Befestigungen der Altstadt Kölns', uk: 'Старі башти та укріплення Старого Кельна' },
    rumerturm_koln: { ru: 'Римская башня Römerturm', de: 'Römerturm', uk: 'Римська вежа Römerturm' },
    hahnentorburg_koln: { ru: 'Западные ворота (Hahnentorburg)', de: 'Hahnentorburg (Westtor)', uk: 'Західні ворота (Hahnentorburg)' },
    eigelsteintorburg_koln: { ru: 'Северные ворота (Eigelsteintorburg)', de: 'Eigelsteintorburg (Nordtor)', uk: 'Північні ворота (Eigelsteintorburg)' },
    severinstorburg_koln: { ru: 'Южные ворота (Severinstorburg)', de: 'Severinstorburg (Südtor)', uk: 'Південні ворота (Severinstorburg)' },
    ulrepforte_koln: { ru: 'Южные малые ворота (Ulrepforte)', de: 'Ulrepforte (kleines Südtor)', uk: 'Південні малі ворота (Ulrepforte)' },
    bayenturm_koln: { ru: 'Юго-восточная башня у Рейна (Bayenturm)', de: 'Bayenturm (Südostturm am Rhein)', uk: 'Південно-східна вежа біля Рейну (Bayenturm)' },
    fischmarkt_koln: { id: 720, ru: 'Фишмаркт', de: 'Fischmarkt', uk: 'Фішмаркт' },
    st_gereon_koln: { id: 733, ru: 'Церковь Святого Гереона', de: 'St. Gereon Kirche', uk: 'Церква Святого Герєона' },
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
    st_kunibert_koln: { id: 731, ru: 'Базилика Святого Куниберта', de: 'Basilika St. Kunibert', uk: 'Базиліка Святого Куніберта' },
    st_aposteln_koln: { id: 734, ru: 'Церковь Святого Апостола', de: 'St. Aposteln', uk: 'Церква Святого Апостола' },
    fischweiberbrunnen_koln: { id: 721, ru: 'Фонтан рыбных торговок', de: 'Fischweiberbrunnen', uk: 'Фонтан рибних торговок' },

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
    bruhl_palaces: { id: 787, ru: 'Дворцы Брюля: ансамбль Аугустусбург и Фалькенлюст', de: 'Schlösser Brühl: Augustusburg & Falkenlust', uk: 'Палаци Брюля: ансамбль Аугустусбург і Фалькенлюст' },
    bruehl_augustusburg: { id: 789, ru: 'Дворец Аугустусбург', de: 'Schloss Augustusburg', uk: 'Палац Аугустусбург' },
    bruehl_falkenlust: { id: 790, ru: 'Дворец Фалькенлюст', de: 'Schloss Falkenlust', uk: 'Палац Фалькенлюст' },
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
    portaNigra_trier: { id: 793, ru: 'Порта Нигра («Чёрные ворота»)', de: 'Porta Nigra', uk: 'Порта Нігра («Чорні ворота»)' },
    amphitheater_trier: { id: 804, ru: 'Римский амфитеатр', de: 'Römisches Amphitheater', uk: 'Римський амфітеатр' },
    kaiserthermen_trier: { id: 806, ru: 'Римские императорские бани', de: 'Römische Kaiserthermen', uk: 'Римські імператорські терми' },
    basilica_of_constantine_trier: { id: 800, ru: 'Базилика Константина', de: 'Konstantin-Basilika', uk: 'Базиліка Константина' },
    barbarathermen_trier: { ru: 'Барбарские термы', de: 'Barbarathermen', uk: 'Барбарські терми' },
    roman_bridge_trier: { id: 799, ru: 'Римский мост', de: 'Römerbrücke', uk: 'Римський міст' },
    cathedral_trier: { id: 797, ru: 'Кафедральний собор', de: 'Trierer Dom', uk: 'Кафедральний собор' },
    basilikaStPaulinus_trier: { ru: 'Базилика Святого Паулина', de: 'Basilika St. Paulinus', uk: 'Базиліка Святого Пауліна' },
    liebfrauenkirche_trier: { id: 801, ru: 'Церковь Богоматери', de: 'Liebfrauenkirche', uk: 'Церква Богородиці' },
    altstadt_trier: { id: 792, ru: 'Старый город Трира', de: 'Altstadt Trier', uk: 'Старе місто Тріра' },
    kurfuerstliches_palais_trier: { ru: 'Избирательский (курфюрстский) дворец', de: 'Kurfürstliches Palais', uk: 'Виборчий (курфюрстський) палац' },
    hauptmarkt_trier: { id: 798, ru: 'Главная рыночная площадь', de: 'Hauptmarkt', uk: 'Головна ринкова площа' },
    steipe_trier: { id: 802, ru: 'Штайпе', de: 'Steipe', uk: 'Штайпе' },
    petrusbrunnen_trier: { id: 803, ru: 'Фонтан Святого Петра', de: 'Petrusbrunnen', uk: 'Фонтан Святого Петра' },

    //Saarburg
    altstadt_saarburg: { ru: 'Старый город Саарбурга', de: 'Altstadt Saarburg', uk: 'Старе місто Саарбурга' },
    wasserfall_saarburg: { ru: 'Водопад Саарбурга', de: 'Wasserfall von Saarburg', uk: 'Водоспад Саарбурга' },
    burg_saarburg: { ru: 'Замок Саарбурга', de: 'Burg Saarburg', uk: 'Замок Саарбурга' },
    amuseum_saarburg: { ru: 'Амюзеум Саарбург', de: 'Amüseum Saarburg', uk: 'Амюзеум Саарбург' },

    // Koblenz
    ehrenbreitstein_koblenz: { id: 762, ru: 'Крепость Эренбрайтштайн', de: 'Festung Ehrenbreitstein', uk: 'Фортеця Еренбрайтштайн' }, // routes: 'castles_rhine_valley'
    stolzenfels_koblenz: { id: 781, ru: 'Замок Штольценфельс', de: 'Schloss Stolzenfels', uk: 'Замок Штольценфельс' }, // routes: 'castles_rhine_valley'
    deutsches_eck_koblenz: { id: 777, ru: 'Немецкий угол', de: 'Deutsches Eck', uk: 'Німецький кут' }, // routes: 'castles_rhine_valley'
    kurfuerstliches_schloss_koblenz: { id: 785, ru: 'Курфюрстский дворец', de: 'Kurfürstliches Schloss', uk: 'Курфюрстський палац' },
    altstadt_koblenz: { id: 779, ru: 'Старый город Кобленца', de: 'Altstadt Koblenz', uk: 'Старе місто Кобленца' }, // routes: 'castles_rhine_valley'
    citykirche_koblenz: { id: 780, ru: 'Иезуитская церковь Кобленца (Citykirche)', de: 'Jesuitenkirche Koblenz (Citykirche)', uk: 'Єзуїтська церква Кобленца (Citykirche)' },
    schengelbrunnen: { id: 783, ru: 'Фонтан «Шенгель»', de: 'Schängelbrunnen', uk: 'Фонтан «Шенгель»' },
    marktfrau_und_schutzmann_koblenz: { id: 786, ru: 'Скульптура «Торговка и полицейский»', de: 'Die Figurengruppe «Marktfrau und Schutzmann»', uk: 'Скульптурна група «Ринкова торговка та поліцейський»' },

    lahneck: { id: 766, is_active: 0, ru: 'Замок Ланек', de: 'Burg Lahneck', uk: 'Замок Ланек' }, // routes: 'castles_rhine_valley'
    marksburg: { id: 767, is_active: 0, ru: 'Замок Марксбург', de: 'Burg Marksburg', uk: 'Замок Марксбург' }, // routes: 'castles_rhine_valley'
    katz: { id: 768, is_active: 0, ru: 'Замок Кац', de: 'Burg Katz', uk: 'Замок Кац' }, // routes: 'castles_rhine_valley'
    rheinfels: { id: 769, is_active: 0, ru: 'Замок Райнфельс', de: 'Burg Rheinfels', uk: 'Замок Райнфельс' }, // routes: 'castles_rhine_valley'
    loreley: { id: 765, is_active: 0, ru: 'Лореляй', de: 'Loreley', uk: 'Лореляй' }, // routes: 'castles_rhine_valley'
    maus: { id: 770, is_active: 0, ru: 'Замок Маус', de: 'Burg Maus', uk: 'Замок Маус' }, // routes: 'castles_rhine_valley'
    schonburg: { id: 771, is_active: 0, ru: 'Замок Шёнбург', de: 'Burg Schönburg', uk: 'Замок Шенбург' }, // routes: 'castles_rhine_valley'
    pfalzgrafenstein: { id: 772, is_active: 0, ru: 'Замок Пфальцграфенштайн', de: 'Burg Pfalzgrafenstein', uk: 'Замок Пфальцграфенштайн' }, // routes: 'castles_rhine_valley'
    stahleck: { id: 773, is_active: 0, ru: 'Замок Шталек', de: 'Burg Stahleck', uk: 'Замок Шталек' }, // routes: 'castles_rhine_valley'
    sooneck: { id: 774, is_active: 0, ru: 'Замок Зоонек', de: 'Burg Sooneck', uk: 'Замок Зоонек' }, // routes: 'castles_rhine_valley'
    reichenstein: { id: 775, is_active: 0, ru: 'Замок Райхенштайн', de: 'Burg Reichenstein', uk: 'Замок Райхенштайн' }, // routes: 'castles_rhine_valley'
    rheinstein: { id: 776, is_active: 0, ru: 'Замок Райнштайн', de: 'Burg Rheinstein', uk: 'Замок Райнштайн' }, // routes: 'castles_rhine_valley'

    //luxembourg
    ansembourg_castle: { id: 751, ru: 'Новый замок Ансембург', de: 'Schloss Ansembourg', uk: 'Новий замок Ансембурґ' }, // routes: 'seven_castles'
    koerich_castle: { id: 752, ru: 'Замок Керих', de: 'Burg Koerich', uk: 'Замок Керіх' }, // routes: 'seven_castles'
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

    mersch_castle: { id: 753, is_active: 0, ru: 'Замок Мерш', de: 'Schloss Mersch', uk: 'Замок Мерш' }, // routes: 'seven_castles'
    schoenfels_castle: { id: 754, is_active: 0, ru: 'Замок Шёнфельс', de: 'Schloss Schoenfels', uk: 'Замок Шёнфельс' }, // routes: 'seven_castles'
    hollenfels_castle: { id: 756, is_active: 0, ru: 'Замок Холленфельс', de: 'Schloss Hollenfels', uk: 'Замок Холленфельс' }, // routes: 'seven_castles'
    ansembourg_ruins: { id: 758, is_active: 0, ru: 'Руины старого замка Ансембург', de: 'Ruinen der alten Burg Ansemburg', uk: 'Руїни старого замку Ансембург' }, // routes: 'seven_castles'
    septfontaines_castle: { id: 760, is_active: 0, ru: 'Замок Сетфонтен', de: 'Schloss Septfontaines', uk: 'Замок Сетфонтен' }, // routes: 'seven_castles'

    // Ukraine
    // Sumska oblast
    // Sumy city
    sumy_spaso_preobrazhensky: { id: 726, ru: 'Спасо-Преображенский собор', de: 'Spaso-Preobraschenski-Kathedrale', uk: 'Спасо-Преображенський собор' },
    pokrovska_square_sumy: { id: 722, ru: 'Покровская площадь', de: 'Pokrowska-Platz', uk: 'Покровська площа' },
    sumy_altanka: { id: 724, ru: 'Альтанка', de: 'Der Pavillon', uk: 'Альтанка' },
    onatsky_museum_sumy: { id: 725, ru: 'Сумской областной художественный музей им. Н. Онацкого', de: 'Kunstmuseum der Oblast Sumy N. Onazkyj', uk: 'Сумський обласний художній музей ім. Н. Онацького' },
    sumy_regional_museum: { id: 729, ru: 'Сумской областной краеведческий музей', de: 'Regionalmuseum für Heimatkunde Sumy', uk: 'Сумський обласний краєзнавчий музей' },
    afghan_square_sumy: { id: 794, ru: 'Афганский сквер', de: 'Afghanischer Park', uk: 'Афганський сквер' },
    afghan_memorial_sumy: { id: 796, ru: 'Мемориал погибшим воинам-интернационалистам', de: 'Gedenkstätte für die gefallenen Soldaten-Internationalisten', uk: 'Меморіал загиблим воїнам-інтернаціоналістам' },

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
    mullerthal_trail: { id: 761, ru: "Мюллертальская тропа", uk: "Мюллертальська стежка", de: "Mullerthal Trail" },
    seven_castles: { id: 750, ru: "Долина семи замков", uk: "Долина семи замків", de: "Tal der sieben Schlösser" },
    castles_rhine_valley: { id: 764, ru: "Долина Среднего Рейна", uk: "Долина Середнього Рейну", de: "Mittelrheintal" },
  }
}

export default datas

// Arnsberg — 27
// Düsseldorf — 3
// Köln — 57
// Aachen — 6
// Rhein-Erft-Kreis — 11
// Rhein-Sieg-Kreis — 10
// Rheinland-Pfalz / Trier, Saarburg, Koblenz — 22
// Luxembourg — 15
// Ukraine / Sumy — 4

// Итого: 155.