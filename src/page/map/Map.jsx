import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Map.scss';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

const Map = () => {
  const { lang } = useSelector((state) => state.language);

  // словарь для перевода
  const t = {
    countries: {
      germany: { ru: 'Германия', de: 'Deutschland', ua: 'Німеччина' },
      ukraine: { ru: 'Украина', de: 'Ukraine', ua: 'Україна' }
    },
    regions: {
      nrw: { ru: 'Северный Рейн-Вестфалия', de: 'Nordrhein-Westfalen', ua: 'Північний Рейн-Вестфалія' },
      rheinlandPfalz: { ru: 'Рейнланд-Пфальц', de: 'Rheinland-Pfalz', ua: 'Рейнланд-Пфальц' },
      sumska: { ru: 'Сумская область', de: 'Sumska Oblast', ua: 'Сумська область' }
    },
    districts: {
      arnsberg: { ru: 'Административный округ Арнсберг', de: 'Regierungsbezirk Arnsberg', ua: 'Адміністративний округ Арнсберг' },
      merkischer: { ru: 'Район Меркиш', de: 'Märkischer Kreis', ua: 'Район Меркіш' },

      koln: { ru: 'Административный округ Кёльн', de: 'Regierungsbezirk Köln', ua: 'Адміністративний округ Кельн' },
      rheinErft: { ru: 'Район Рейн-Эрфт', de: 'Rhein-Erft-Kreis', ua: 'Район Рейн-Ерфт' },
      rhein_sieg: { ru: 'Район Рейн-Зиг', de: 'Rhein-Sieg-Kreis', ua: 'Район Рейн-Зиг' },

      mayen_koblenz: { ru: 'Район Майен‑Кобленц', de: 'Landkreis Mayen-Koblenz', ua: 'Район Маєн-Кобленц' }
    },
    cities: {
      bruhl: { ru: 'Город Брюль', de: 'Stadt Brühl', ua: 'Місто Брюль' },
      frechen: { ru: 'Город Фрехен', de: 'Stadt Frechen', ua: 'Місто Фрехен' },
      koln: { ru: 'Город Кёльн', de: 'Stadt Köln', ua: 'Місто Кельн' },
      luedenscheid: { ru: 'Город Люденшайд', de: 'Stadt Lüdenscheid', ua: 'Місто Люденшайд' },
      konigswinter: { ru: 'Город Кёнигсвинтер', de: 'Stadt Königswinter', ua: 'Місто Кенігсвінтер' },
      trier: { ru: 'Город Трир', de: 'Stadt Trier', ua: 'Місто Трір' },

      sumy: { ru: 'Город Сумы', de: 'Stadt Sumy', ua: 'Місто Суми' }
    },
    attractions: {
      // arnsberg округ
      // Märkischer Kreis
      // Lüdenscheid
      altstadt_luedenscheid: { ru: 'Старый город Люденшайда', de: 'Altstadt Lüdenscheid', ua: 'Старе місто Люденшайда' },
      erloeserkirche_luedenscheid: { ru: 'Церковь Спасителя', de: 'Erlöserkirche', ua: 'Церква Спасителя' },
      rathausplatz_luedenscheid: { ru: 'Центральная площадь Люденшайда', de: 'Rathausplatz von Lüdenscheid', ua: 'Центральна площа Люденшайда' },
      brunnen_altstadt_luedenscheid: { ru: 'Фонтан в старом городе', de: 'Brunnen in der Altstadt', ua: 'Фонтан у старому місті' },
      sternplatz: { ru: 'Площадь Штернплац', de: 'Sternplatz', ua: 'Площа Штернплац' },
      onkel_willi_denkmal_sternplatz_luedenscheid: { ru: 'Памятник дяде Вилли', de: 'Denkmal von Onkel Willi', ua: 'Памятник дядьку Віллі' },
      fontain_sternplatz_luedenscheid: { ru: 'Фонтан на площади Штернплац', de: 'Brunnen auf dem Sternplatz', ua: 'Фонтан на площі Штернплац' },
      history_museum_luedenscheid: { ru: 'Исторический музей Люденшайда', de: 'Geschichtsmuseum Lüdenscheid', ua: 'Історичний музей Люденшайда' },

      //Köln-city
      cologneCathedral: { ru: 'Кёльнский собор', de: 'Kölner Dom', ua: 'Кельнський собор' },
      cologneRathaus: { ru: 'Кёльнская ратуша', de: 'Kölner Rathaus', ua: 'Кельнська ратуша' },
      roemischGermanischesMuseum: { ru: 'Римско-германский музей', de: 'Römisch-Germanisches Museum', ua: 'Римсько-германський музей' },
      farinaDuftmuseum: { ru: 'Музей духов в доме Фарина', de: 'Duftmuseum im Farina-Haus', ua: 'Музей парфумів у домі Фаріна' },
      museumLudwig: { ru: 'Музей Людвига', de: 'Museum Ludwig', ua: 'Музей Людвіга' },
      schokoladenmuseum: { ru: 'Музей шоколада', de: 'Schokoladenmuseum', ua: 'Музей шоколаду' },
      miqua: { ru: 'Музей в археологическом квартале Кёльна – MiQua', de: 'Museum im archäologischen Viertel Köln – MiQua', ua: 'Музей в археологічному кварталі Кельна – MiQua' },
      wallraf_richartz_museum: { ru: 'Музей Вальрафа-Рихарца', de: 'Wallraf-Richartz-Museum', ua: 'Музей Вальрафа-Ріхарцa' },
      koeln_bridges: { ru: 'Мосты Кёльна через Рейн', de: 'Kölner Rheinbrücken', ua: 'Мости Кельна через Рейн' },
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

      // Köln okrug
      // Rhein-Erft-Kreis
      // Brühl
      bruhlPalaces: { ru: 'Дворцы Брюля: ансамбль Аугустусбург и Фалькенлюст', de: 'Schlösser Brühl: Augustusburg & Falkenlust', ua: 'Палаци Брюля: ансамбль Аугустусбург і Фалькенлюст' },
      maxErnst: { ru: 'Музей Макса Эрнста', de: 'Max Ernst Museum', ua: 'Музей Макса Ернста' },
      phantasialand: { ru: 'Парк развлечений Phantasialand', de: 'Phantasialand', ua: 'Парк розваг Phantasialand' },

      // Frechen
      burgBachem: { ru: 'Крепость Бахем – историческая водяная крепость во Фрехене', de: 'Burg Bachem – historische Wasserburg in Frechen', ua: 'Фортеця Бахем – історична водяна фортеця у Фрехені' },
      keramion: { ru: 'Керамион – Центр современной и исторической керамики', de: 'KERAMION – Zentrum für moderne und historische Keramik', ua: 'Кераміон – Центр сучасної та історичної кераміки' },
      johann_schmitz_platz_frechen: { ru: 'Площадь Йоханна Шмитца («площадь Ратуши»)', de: 'Johann-Schmitz-Platz in Frechen', ua: 'Площа Йоханна Шміця («площа Ратуші»)' },
      altes_rathaus_frechen: { ru: 'Старая ратуша Фрехена', de: 'Altes Rathaus Frechen', ua: 'Стара ратуша Фрехена' },
      rathausbrunnen_frechen: { ru: 'Фонтан перед ратушей', de: 'Brunnen vor dem Rathaus', ua: 'Фонтан перед ратушею' },
      klüttenbrunnen_frechen: { ru: 'Фонтан Клюттенбрюннен', de: 'Klüttenbrunnen', ua: 'Фонтан Клюттенбрюннен' },

      // Rhein-Sieg-Kreis
      // Königswinter
      drachenfels: { ru: 'Гора Драхенфельс', de: 'Drachenfels', ua: 'Гора Драхенфельс' },
      drachenfelsbahn: { ru: 'Железная дорога Драхенфельс', de: 'Drachenfelsbahn', ua: 'Залізниця Драхенфельса' },
      schloss_drachenburg: { ru: 'Дворец Драхенбург', de: 'Schloss Drachenburg', ua: 'Палац Драхенбург' },
      drachenfels_ruins: { ru: 'Руины замка Драхенфельс', de: 'Ruinen der Burg Drachenfels', ua: 'Руїни замку Драхенфельс' },
      nibelungenhalle: { ru: 'Зал Нибеленгов', de: 'Nibelungenhalle', ua: 'Зал Нібеленгов' },
      reptile_zoo: { ru: 'Зоопарк рептилий Драхенфельс', de: 'Reptilienzoo Drachenfels', ua: 'Зоопарк рептилій Драхенфельс' },
      heisterbach_konigswinter: { ru: 'Аббатство Хайстербах', de: 'Abtei Heisterbach', ua: 'Абатство Гайстербах' },
      chorruine_heisterbach_konigswinter: { ru: 'Руины хора бывшей монастырской церкви', de: 'Ruinen des Chors der ehemaligen Klosterkirche', ua: 'Руїни хору колишньої монастирської церкви' },
      st_peter_heisterbach_konigswinter: { ru: 'Церковь Святого Петра в Хайстербахе', de: 'Kirche St. Peter in Heisterbach', ua: 'Церковь Святого Петра в Хайстербахе' },

      // rheinland-pfalz
      // Trier
      portaNigra_trier: { ru: 'Порта Нигра («Чёрные ворота»)', de: 'Porta Nigra', ua: 'Порта Нігра («Чорні ворота»)' },
      amphitheater_trier: { ru: 'Римский амфитеатр', de: 'Römisches Amphitheater', ua: 'Римський амфітеатр' },

      // Ukraine
      // Sumska oblast
      // Sumy city
      sumySpasoPreobrazhensky: { ru: 'Спасо-Преображенский собор', de: 'Spaso-Preobraschenski-Kathedrale', ua: 'Спасо-Преображенський собор' },
      pokrovska_square_sumy: { ru: 'Покровская площадь', de: 'Pokrowska-Platz', ua: 'Покровська площа' },
      sumy_altanka: { ru: 'Альтанка', de: 'Der Pavillon', ua: 'Альтанка' },
    }
  };

  // BreadCrumbs
  const crumbs = [
    {
      label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
      path: '/'
    },
    { label: lang === 'ru' ? 'Карта сайта' : lang === 'de' ? 'Sitemap' : 'Мапа сайту' }
  ];

  return (
    <div className='map'>
      <BreadCrumbs crumbs={crumbs} />
      <div className='map__pages'>
        <ul>
          {/* Германия */}
          <li>
            <Link to="/germany">{t.countries.germany[lang]}</Link>
            <ul>
              <li>{ lang === 'ru' ? 'Мероприятия/События' : lang === 'de' ? 'Veranstaltungen' : 'Заходи' }
                <ul>
                  <li><Link to="/germany/nrw/city/koln/events/karneval_koln">{ lang === 'ru' ? 'Кельнский карнавал' : lang === 'de' ? 'Kölner Karneval' : 'Кельнський карнавал' }</Link></li>
                </ul>
              </li>

              {/* НРВ */}
              <li><Link to="/germany/nrw">{t.regions.nrw[lang]}</Link>
                <ul>

                  {/* Arnsberg */}
                  <li><Link to="/germany/nrw/arnsberg">{t.districts.arnsberg[lang]}</Link>
                    <ul>
                      <li><span>{t.districts.merkischer[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/arnsberg/luedenscheid">{t.cities.luedenscheid[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/altstadt_luedenscheid">{t.attractions.altstadt_luedenscheid[lang]}</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/erloeserkirche_luedenscheid">{t.attractions.erloeserkirche_luedenscheid[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/brunnen_altstadt_luedenscheid">{t.attractions.brunnen_altstadt_luedenscheid[lang]}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/rathausplatz_luedenscheid">{t.attractions.rathausplatz_luedenscheid[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/sternplatz">{t.attractions.sternplatz[lang]}</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/onkel_willi_denkmal_sternplatz_luedenscheid">{t.attractions.onkel_willi_denkmal_sternplatz_luedenscheid[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/fontain_sternplatz_luedenscheid">{t.attractions.fontain_sternplatz_luedenscheid[lang]}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/history_museum_luedenscheid">{t.attractions.history_museum_luedenscheid[lang]}</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Köln */}
                  <li><Link to="/germany/nrw/koln">{t.districts.koln[lang]}</Link>
                    <ul>
                      {/* Rhein-Erft */}
                      <li><span>{t.districts.rheinErft[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/koln/bruhl">{t.cities.bruhl[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/bruhl_palaces">{t.attractions.bruhlPalaces[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/max-ernst-museum">{t.attractions.maxErnst[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/phantasialand">{t.attractions.phantasialand[lang]}</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/germany/nrw/koln/frechen">{t.cities.frechen[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/johann_schmitz_platz_frechen">{t.attractions.johann_schmitz_platz_frechen[lang]}</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/koln/frechen/attractions/altes_rathaus_frechen">{t.attractions.altes_rathaus_frechen[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/frechen/attractions/rathausbrunnen_frechen">{t.attractions.rathausbrunnen_frechen[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/frechen/attractions/klüttenbrunnen_frechen">{t.attractions.klüttenbrunnen_frechen[lang]}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/burg-bachem">{t.attractions.burgBachem[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/keramion">{t.attractions.keramion[lang]}</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      {/* Köln город */}
                      <li><Link to="/germany/nrw/city/koln">{t.cities.koln[lang]}</Link>
                        <ul>
                          <li><Link to="/germany/nrw/city/koln/attractions/cologne-cathedral">{t.attractions.cologneCathedral[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/rathaus">{t.attractions.cologneRathaus[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/guerzenich_koln">{t.attractions.guerzenich_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/miqua">{t.attractions.miqua[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/roemisch-germanisches-museum">{t.attractions.roemischGermanischesMuseum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/farina-duftmuseum">{t.attractions.farinaDuftmuseum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/dufthaus_4711_koln">{t.attractions.dufthaus_4711_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/schokoladenmuseum">{t.attractions.schokoladenmuseum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/wallraf_richartz_museum">{t.attractions.wallraf_richartz_museum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/museum-ludwig">{t.attractions.museumLudwig[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/ostasiatische_kunst_koln">{t.attractions.ostasiatische_kunst_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/museum_schnuetgen_koln">{t.attractions.museum_schnuetgen_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/makk_museum_koln">{t.attractions.makk_museum_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/rautenstrauch_joest_museum_koln">{t.attractions.rautenstrauch_joest_museum_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/koln_bridges">{t.attractions.koeln_bridges[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/skulpturenpark_koln">{t.attractions.skulpturenpark_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/zoo_koln">{t.attractions.zoo_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/forstbotanischer_garten">{t.attractions.forstbotanischer_garten[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/flora_garten_koln">{t.attractions.flora_garten_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/rheinpark_koln">{t.attractions.rheinpark_koln[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/city/koln/attractions/tanzbrunnen">{t.attractions.tanzbrunnen[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/koln_seilbahn">{t.attractions.koln_seilbahn[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/divitia_koln">{t.attractions.divitia_koln[lang]}</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/germany/nrw/city/koln/attractions/finkens_garten_koln">{t.attractions.finkens_garten_koln[lang]}</Link></li>
                        </ul>
                      </li>

                      {/* Rhein-Sieg */}
                      <li><span>{t.districts.rhein_sieg[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/koln/konigswinter"> {t.cities.konigswinter[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/konigswinter/attractions/drachenfels">{t.attractions.drachenfels[lang]}</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/drachenfelsbahn">{t.attractions.drachenfelsbahn[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/schloss_drachenburg">{t.attractions.schloss_drachenburg[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/drachenfels_ruins">{t.attractions.drachenfels_ruins[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/nibelungenhalle">{t.attractions.nibelungenhalle[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/reptile_zoo">{t.attractions.reptile_zoo[lang]}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/germany/nrw/koln/konigswinter/attractions/heisterbach_konigswinter">{t.attractions.heisterbach_konigswinter[lang]}</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/chorruine_heisterbach_konigswinter">{t.attractions.chorruine_heisterbach_konigswinter[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/konigswinter/attractions/st_peter_heisterbach_konigswinter">{t.attractions.st_peter_heisterbach_konigswinter[lang]}</Link></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </li>
                </ul>
              </li>

              {/* Рейнланд-Пфальц */}
              <li><Link to="/germany/rheinland-pfalz">{t.regions.rheinlandPfalz[lang]}</Link>
                <ul>

                  {/* Район Майен‑Кобленц */}
                  <li><Link to="/germany/rheinland-pfalz/mayen-koblenz">{t.districts.mayen_koblenz[lang]}</Link></li>

                  {/* Трир - город */}
                  <li><Link to="/germany/rheinland-pfalz/city/trier">{t.cities.trier[lang]}</Link>
                    <ul>
                      <li><Link to="/germany/rheinland-pfalz/city/trier/attractions/portaNigra_trier">{t.attractions.portaNigra_trier[lang]}</Link></li>
                      <li><Link to="/germany/rheinland-pfalz/city/trier/attractions/amphitheater_trier">{t.attractions.amphitheater_trier[lang]}</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Украина */}
          <li><Link to="/ukraine">{t.countries.ukraine[lang]}</Link>
            <ul>
              <li><Link to="/ukraine/sumska">{t.regions.sumska[lang]}</Link>
                <ul>
                  <li><Link to="/ukraine/sumska/city/sumy">{t.cities.sumy[lang]}</Link>
                    <ul>
                      <li><Link to="/ukraine/sumska/city/sumy/attractions/sumy_spaso_preobrazhensky">{t.attractions.sumySpasoPreobrazhensky[lang]}</Link></li>
                      <li><Link to="/ukraine/sumska/city/sumy/attractions/pokrovska_square_sumy">{t.attractions.pokrovska_square_sumy[lang]}</Link>
                        <ul>
                          <li><Link to="/ukraine/sumska/city/sumy/attractions/sumy_altanka">{t.attractions.sumy_altanka[lang]}</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Map;