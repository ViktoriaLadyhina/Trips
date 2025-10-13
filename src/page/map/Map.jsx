import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Map.scss';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

const Map = () => {
  const { lang } = useSelector((state) => state.language);

  // Простейший словарь для перевода
  const t = {
    countries: {
      germany: { ru: 'Германия', de: 'Deutschland', ua: 'Німеччина' },
      ukraine: { ru: 'Украина', de: 'Ukraine', ua: 'Україна' }
    },
    regions: {
      nrw: { ru: 'Северный Рейн-Вестфалия', de: 'Nordrhein-Westfalen', ua: 'Північний Рейн-Вестфалія' }
    },
    districts: {
      arnsberg: { ru: 'Административный округ Арнсберг', de: 'Regierungsbezirk Arnsberg', ua: 'Адміністративний округ Арнсберг' },
      koln: { ru: 'Административный округ Кёльн', de: 'Regierungsbezirk Köln', ua: 'Адміністративний округ Кельн' }
    },
    cities: {
      bruhl: { ru: 'Город Брюль', de: 'Stadt Brühl', ua: 'Місто Брюль' },
      frechen: { ru: 'Город Фрехен', de: 'Stadt Frechen', ua: 'Місто Фрехен' },
      koln: { ru: 'Город Кёльн', de: 'Stadt Köln', ua: 'Місто Кельн' }
    },
    attractions: {
      bruhlPalaces: { ru: 'Дворцы Брюля: ансамбль Аугустусбург и Фалькенлюст', de: 'Schlösser Brühl: Augustusburg & Falkenlust', ua: 'Палаци Брюля: ансамбль Аугустусбург і Фалькенлюст' },
      maxErnst: { ru: 'Музей Макса Эрнста', de: 'Max Ernst Museum', ua: 'Музей Макса Ернста' },
      phantasialand: { ru: 'Phantasialand', de: 'Phantasialand', ua: 'Phantasialand' },
      burgBachem: { ru: 'Burg Bachem – историческая водяная крепость во Фрехене', de: 'Burg Bachem – historische Wasserburg in Frechen', ua: 'Burg Bachem – історична водяна фортеця у Фрехені' },
      keramion: { ru: 'KERAMION – Центр современной и исторической керамики', de: 'KERAMION – Zentrum für moderne und historische Keramik', ua: 'KERAMION – Центр сучасної та історичної кераміки' },
      cologneCathedral: { ru: 'Кёльнский собор', de: 'Kölner Dom', ua: 'Кельнський собор' },
      cologneRathaus: { ru: 'Кёльнская ратуша и археологический квартал MiQua', de: 'Kölner Rathaus und archäologisches Viertel MiQua', ua: 'Кельнська ратуша та археологічний квартал MiQua' }
    }
  };

  // BreadCrumbs
  const crumbs = [
    {
      label: lang === 'ru' ? 'Главная' : lang === 'de' ? 'Startseite' : 'Головна',
      path: '/'
    },
    { label: 'Карта' }
  ];

  return (
    <div className='map'>
      <BreadCrumbs crumbs={crumbs} />
      <div className='map__pages'>
        <ul>
          <li>
            <Link to="/germany">{t.countries.germany[lang]}</Link>
            <ul>
              <li>
                <Link to="/germany/nrw">{t.regions.nrw[lang]}</Link>
                <ul>
                  <li>
                    <Link to="/germany/nrw/arnsberg">{t.districts.arnsberg[lang]}</Link>
                  </li>
                  <li>
                    <Link to="/germany/nrw/koln">{t.districts.koln[lang]}</Link>
                    <ul>
                      <li>
                        <span>Рейн-Эрфт</span>
                        <ul>
                          <li>
                            <Link to="/germany/nrw/koln/bruhl">{t.cities.bruhl[lang]}</Link>
                            <ul>
                              <li>
                                <Link to="/germany/nrw/koln/bruhl/attractions/bruhl-palaces">
                                  {t.attractions.bruhlPalaces[lang]}
                                </Link>
                              </li>
                              <li>
                                <Link to="/germany/nrw/koln/bruhl/attractions/max-ernst-museum">
                                  {t.attractions.maxErnst[lang]}
                                </Link>
                              </li>
                              <li>
                                <Link to="/germany/nrw/koln/bruhl/attractions/phantasialand">
                                  {t.attractions.phantasialand[lang]}
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/germany/nrw/koln/frechen">{t.cities.frechen[lang]}</Link>
                            <ul>
                              <li>
                                <Link to="/germany/nrw/koln/frechen/attractions/burg-bachem">
                                  {t.attractions.burgBachem[lang]}
                                </Link>
                              </li>
                              <li>
                                <Link to="/germany/nrw/koln/frechen/attractions/keramion">
                                  {t.attractions.keramion[lang]}
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/germany/nrw/city/koln">{t.cities.koln[lang]}</Link>
                        <ul>
                          <li>
                            <Link to="/germany/nrw/city/koln/attractions/cologne-cathedral">
                              {t.attractions.cologneCathedral[lang]}
                            </Link>
                          </li>
                          <li>
                            <Link to="/germany/nrw/city/koln/attractions/rathaus-koln">
                              {t.attractions.cologneRathaus[lang]}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/ukraine">{t.countries.ukraine[lang]}</Link>
            <ul>
              <li>
                <Link to="/ukraine/sumska">{lang === 'ru' ? 'Сумская область' : lang === 'de' ? 'Sumska Oblast' : 'Сумська область'}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Map;