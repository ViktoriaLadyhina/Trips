import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Map.scss';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import datas from '../../datas/minimalIndex'


const Map = () => {
  const { lang } = useSelector((state) => state.language);

  const t = datas

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
              <li>{lang === 'ru' ? 'Мероприятия/События' : lang === 'de' ? 'Veranstaltungen' : 'Заходи'}
                <ul>
                  <li><Link to="/germany/nrw/city/koln/events/karneval_koln">{t.events.karneval_koln[lang]}</Link> <span className="smaller-text"> ({t.events.karneval_koln_city[lang]})</span></li>
                  <li><Link to="/germany/nrw/city/dortmund/events/christmas_market_dortmund">{t.events.christmas_market_dortmund[lang]}</Link> </li>
                  <li><Link to="/germany/nrw/city/dortmund/events/winterleuchten_dortmund">{t.events.winterleuchten_dortmund[lang]}</Link> <span className="smaller-text"> ({t.events.winterleuchten_dortmund_city[lang]})</span></li>
                </ul>
              </li>

              {/* Рейнланд-Пфальц */}<br></br>
              <li><Link to="/germany/rheinland_pfalz">{t.regions.rheinland_pfalz[lang]}</Link>
                <ul>

                  {/* Район Майен‑Кобленц */}
                  <li><Link to="/germany/rheinland_pfalz/mayen_koblenz">{t.districts.mayen_koblenz[lang]}</Link></li>

                  {/* Район Трир-Саарбург */}
                  <li><Link to="/germany/rheinland_pfalz/trier_saarburg">{t.districts.trier_saarburg[lang]}</Link>
                    <ul>

                      {/* Саарбург - город */}
                      <li><Link to="/germany/rheinland_pfalz/trier_saarburg/saarburg">{t.cities.saarburg[lang]}</Link>
                        <ul>
                          <li><Link to="/germany/rheinland_pfalz/trier_saarburg/saarburg/attractions/altstadt_saarburg">{t.attractions.altstadt_saarburg[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/rheinland_pfalz/trier_saarburg/saarburg/attractions/wasserfall_saarburg">{t.attractions.wasserfall_saarburg[lang]}</Link></li>
                              <li><Link to="/germany/rheinland_pfalz/trier_saarburg/saarburg/attractions/amuseum_saarburg">{t.attractions.amuseum_saarburg[lang]}</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/germany/rheinland_pfalz/trier_saarburg/saarburg/attractions/burg_saarburg">{t.attractions.burg_saarburg[lang]}</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Трир - город */}
                  <li><Link to="/germany/rheinland_pfalz/city/trier">{t.cities.trier[lang]}</Link>
                    <ul>
                      <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/altstadt_trier">{t.attractions.altstadt_trier[lang]}</Link>
                        <ul>
                          <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/portaNigra_trier">{t.attractions.portaNigra_trier[lang]}</Link></li>
                          <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/cathedral_trier">{t.attractions.cathedral_trier[lang]}</Link></li>
                          <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/liebfrauenkirche_trier">{t.attractions.liebfrauenkirche_trier[lang]}</Link></li>
                          <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/basilica_of_constantine_trier">{t.attractions.basilica_of_constantine_trier[lang]}</Link></li>
                          <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/basilikaStPaulinus_trier">{t.attractions.basilikaStPaulinus_trier[lang]}</Link></li>
                          <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/roman_bridge_trier">{t.attractions.roman_bridge_trier[lang]}</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/kaiserthermen_trier">{t.attractions.kaiserthermen_trier[lang]}</Link></li>
                      <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/amphitheater_trier">{t.attractions.amphitheater_trier[lang]}</Link></li>
                      <li><Link to="/germany/rheinland_pfalz/city/trier/attractions/barbarathermen_trier">{t.attractions.barbarathermen_trier[lang]}</Link></li>

                    </ul>
                  </li>
                </ul>
              </li>

              {/* НРВ */}<br></br>
              <li><Link to="/germany/nrw">{t.regions.nrw[lang]}</Link>
                <ul>

                  {/* Arnsberg */}
                  <li><Link to="/germany/nrw/arnsberg">{t.districts.arnsberg[lang]}</Link>
                    <ul>

                      {/* Dortmund город */}
                      <li><Link to="/germany/nrw/city/dortmund">{t.cities.dortmund[lang]}</Link>
                        <ul>
                          <li><Link to="/germany/nrw/city/dortmund/attractions/westfalenpark">{t.attractions.westfalenpark[lang]}</Link></li>
                        </ul>
                      </li>
                    </ul>

                    <ul>
                      <li><span>{t.districts.merkischer[lang]}</span>

                        {/* Lüdenscheid */}
                        <ul>
                          <li><Link to="/germany/nrw/arnsberg/iserlohn">{t.cities.iserlohn[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/arnsberg/iserlohn/attractions/dechenhohle_iserlohn">{t.attractions.dechenhohle_iserlohn[lang]}</Link></li>
                            </ul>
                          </li>
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
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/christuskirche_luedenscheid">{t.attractions.christuskirche_luedenscheid[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/st_joseph_medardus">{t.attractions.st_joseph_medardus[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/luedenscheid/attractions/versetalsperre_luedenscheid">{t.attractions.versetalsperre_luedenscheid[lang]}</Link></li>
                            </ul>
                          </li>
                          {/* Altena */}
                          <li><Link to="/germany/nrw/arnsberg/altena">{t.cities.altena[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/arnsberg/altena/attractions/burg_altena">{t.attractions.burg_altena[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/altena/attractions/drahtmuseum_altena">{t.attractions.drahtmuseum_altena[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/altena/attractions/lutherkirche_altena">{t.attractions.lutherkirche_altena[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/altena/attractions/gustav_selve_altena">{t.attractions.gustav_selve_altena[lang]}</Link></li>
                              <li><Link to="/germany/nrw/arnsberg/altena/attractions/fuelbecketalsperre_altena">{t.attractions.fuelbecketalsperre_altena[lang]}</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* Köln */}
                  <li><Link to="/germany/nrw/koln">{t.districts.koln[lang]}</Link>
                    <ul>

                      {/* Köln город */}
                      <li><Link to="/germany/nrw/city/koln">{t.cities.koln[lang]}</Link>
                        <ul>
                          <li><Link to="/germany/nrw/city/koln/attractions/altstadt_koln">{t.attractions.altstadt_koln[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/city/koln/attractions/cologne_cathedral">{t.attractions.cologne_cathedral[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/fischmarkt_koln">{t.attractions.fischmarkt_koln[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/rathaus_koln">{t.attractions.rathaus_koln[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/romanische_kirchen_altstadt_koln">{t.attractions.romanische_kirchen_altstadt_koln[lang]}:</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/city/koln/attractions/gross_st_martin_koln">{t.attractions.gross_st_martin_koln[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/city/koln/attractions/st_maria_im_kapitol_koln">{t.attractions.st_maria_im_kapitol_koln[lang]}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/germany/nrw/city/koln/attractions/st_maria_himmelfahrt_koln">{t.attractions.st_maria_himmelfahrt_koln[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/guerzenich_koln">{t.attractions.guerzenich_koln[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/miqua">{t.attractions.miqua[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/roemisch_germanisches_museum">{t.attractions.roemisch_germanisches_museum[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/farina_duftmuseum">{t.attractions.farina_duftmuseum[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/dufthaus_4711_koln">{t.attractions.dufthaus_4711_koln[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/wallraf_richartz_museum">{t.attractions.wallraf_richartz_museum[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/museum_ludwig">{t.attractions.museum_ludwig[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/stadtmuseum_koln">{t.attractions.stadtmuseum_koln[lang]}</Link></li>
                              <li><Link to="/germany/nrw/city/koln/attractions/old_towers_koln">{t.attractions.old_towers_koln[lang]}</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/germany/nrw/city/koln/attractions/schokoladenmuseum">{t.attractions.schokoladenmuseum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/ostasiatische_kunst_koln">{t.attractions.ostasiatische_kunst_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/makk_museum_koln">{t.attractions.makk_museum_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/museum_schnuetgen_koln">{t.attractions.museum_schnuetgen_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/rautenstrauch_joest_museum_koln">{t.attractions.rautenstrauch_joest_museum_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/sport_olympia_museum_koln">{t.attractions.sport_olympia_museum_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/photographische_sammlung_sk_stiftung_kultur_koln">{t.attractions.photographische_sammlung_sk_stiftung_kultur_koln[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/koln_bridges">{t.attractions.koln_bridges[lang]}</Link></li>
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
                          <li><Link to="/germany/nrw/city/koln/attractions/decksteiner_weiher_koln">{t.attractions.decksteiner_weiher_koln[lang]}</Link></li>
                        </ul>
                      </li>

                      {/* aachen */}
                      <li><span>{t.districts.aachen[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/koln/monschau">{t.cities.monschau[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/monschau/attractions/historic_center_monschau">{t.attractions.historic_center_monschau[lang]}</Link>
                                <ul>
                                  <li><Link to="/germany/nrw/koln/monschau/attractions/rotes_haus_monschau">{t.attractions.rotes_haus_monschau[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/monschau/attractions/senfmuehle_monschau">{t.attractions.senfmuehle_monschau[lang]}</Link></li>
                                  <li><Link to="/germany/nrw/koln/monschau/attractions/glashuette_monschau">{t.attractions.glashuette_monschau[lang]}</Link></li>
                                </ul>
                              </li>
                              <li><Link to="/germany/nrw/koln/monschau/attractions/burg_monschau">{t.attractions.burg_monschau[lang]}</Link></li>
                            </ul>
                          </li>
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

                      {/* Rhein-Erft */}
                      <li><span>{t.districts.rheinErft[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/koln/bruhl">{t.cities.bruhl[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/bruhl_palaces">{t.attractions.bruhl_palaces[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/max_ernst_museum">{t.attractions.max_ernst_museum[lang]}</Link></li>
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
                              <li><Link to="/germany/nrw/koln/frechen/attractions/burg_bachem_frechen">{t.attractions.burg_bachem_frechen[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/keramion">{t.attractions.keramion[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/st_audomar_frechen">{t.attractions.st_audomar_frechen[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/evangelischeKirche_frechen">{t.attractions.evangelischeKirche_frechen[lang]}</Link></li>
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

          {/* Люксембург */}<br></br><br></br>
          <li><Link to="/luxembourg">{t.countries.luxembourg[lang]}</Link>
            <ul>
              <li>{lang === 'ru' ? 'Маршруты' : lang === 'de' ? 'Routen' : 'Маршрути'}
                <ul>
                  <li><Link to="/luxembourg/routes/mullerthal_trail">{t.routes.mullerthal_trail[lang]}</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Украина */}<br></br><br></br>
          <li><Link to="/ukraine">{t.countries.ukraine[lang]}</Link>
            <ul>
              <li><Link to="/ukraine/sumska">{t.regions.sumska[lang]}</Link>
                <ul>
                  <li><Link to="/ukraine/sumska/city/sumy">{t.cities.sumy[lang]}</Link>
                    <ul>
                      <li><Link to="/ukraine/sumska/city/sumy/attractions/sumy_spaso_preobrazhensky">{t.attractions.sumy_spaso_preobrazhensky[lang]}</Link></li>
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

          {/* Юнеско */}<br></br><br></br>
          <li><Link to="/unesco">{t.attractions.Unesco_Title[lang]}</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Map;