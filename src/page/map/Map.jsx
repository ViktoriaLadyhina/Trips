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
      sumska: { ru: 'Сумская область', de: 'Sumska Oblast', ua: 'Сумська область' }
    },
    districts: {
      arnsberg: { ru: 'Административный округ Арнсберг', de: 'Regierungsbezirk Arnsberg', ua: 'Адміністративний округ Арнсберг' },
      merkischer: { ru: 'Район Меркиш', de: 'Märkischer Kreis', ua: 'Район Меркіш' },

      koln: { ru: 'Административный округ Кёльн', de: 'Regierungsbezirk Köln', ua: 'Адміністративний округ Кельн' },
      rheinErft: { ru: 'Район Рейн-Эрфт', de: 'Rhein-Erft-Kreis', ua: 'Район Рейн-Ерфт' }
    },
    cities: {
      bruhl: { ru: 'Город Брюль', de: 'Stadt Brühl', ua: 'Місто Брюль' },
      frechen: { ru: 'Город Фрехен', de: 'Stadt Frechen', ua: 'Місто Фрехен' },
      koln: { ru: 'Город Кёльн', de: 'Stadt Köln', ua: 'Місто Кельн' },
      luedenscheid: { ru: 'Город Люденшайд', de: 'Stadt Lüdenscheid', ua: 'Місто Люденшайд' }
    },
    attractions: {
      bruhlPalaces: { ru: 'Дворцы Брюля: ансамбль Аугустусбург и Фалькенлюст', de: 'Schlösser Brühl: Augustusburg & Falkenlust', ua: 'Палаци Брюля: ансамбль Аугустусбург і Фалькенлюст' },
      maxErnst: { ru: 'Музей Макса Эрнста', de: 'Max Ernst Museum', ua: 'Музей Макса Ернста' },
      phantasialand: { ru: 'Парк развлечений Phantasialand', de: 'Phantasialand', ua: 'Парк розваг Phantasialand' },
      burgBachem: { ru: 'Крепость Бахем – историческая водяная крепость во Фрехене', de: 'Burg Bachem – historische Wasserburg in Frechen', ua: 'Фортеця Бахем – історична водяна фортеця у Фрехені' },
      keramion: { ru: 'Керамион – Центр современной и исторической керамики', de: 'KERAMION – Zentrum für moderne und historische Keramik', ua: 'Кераміон – Центр сучасної та історичної кераміки' },
      cologneCathedral: { ru: 'Кёльнский собор', de: 'Kölner Dom', ua: 'Кельнський собор' },
      cologneRathaus: { ru: 'Кёльнская ратуша и археологический квартал MiQua', de: 'Kölner Rathaus und archäologisches Viertel MiQua', ua: 'Кельнська ратуша та археологічний квартал MiQua' },
      roemischGermanischesMuseum: { ru: 'Римско-германский музей', de: 'Römisch-Germanisches Museum', ua: 'Римсько-германський музей' },
      farinaDuftmuseum: { ru: 'Музей духов в доме Фарина', de: 'Duftmuseum im Farina-Haus', ua: 'Музей парфумів у домі Фаріна' },
      museumLudwig: { ru: 'Музей Людвига', de: 'Museum Ludwig', ua: 'Музей Людвіга' },
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
          <li><Link to="/germany">{t.countries.germany[lang]}</Link>
            <ul>
              <li><Link to="/germany/nrw">{t.regions.nrw[lang]}</Link>
                <ul>
                  <li><Link to="/germany/nrw/arnsberg">{t.districts.arnsberg[lang]}</Link>
                    <ul>
                      <li><span>{t.districts.merkischer[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/arnsberg/luedenscheid">{t.cities.luedenscheid[lang]}</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><Link to="/germany/nrw/koln">{t.districts.koln[lang]}</Link>
                    <ul>
                      <li><span>{t.districts.rheinErft[lang]}</span>
                        <ul>
                          <li><Link to="/germany/nrw/koln/bruhl">{t.cities.bruhl[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/bruhl-palaces">{t.attractions.bruhlPalaces[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/max-ernst-museum">{t.attractions.maxErnst[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/bruhl/attractions/phantasialand">{t.attractions.phantasialand[lang]}</Link></li>
                            </ul>
                          </li>
                          <li><Link to="/germany/nrw/koln/frechen">{t.cities.frechen[lang]}</Link>
                            <ul>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/burg-bachem">{t.attractions.burgBachem[lang]}</Link></li>
                              <li><Link to="/germany/nrw/koln/frechen/attractions/keramion">{t.attractions.keramion[lang]}</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><Link to="/germany/nrw/city/koln">{t.cities.koln[lang]}</Link>
                        <ul>
                          <li><Link to="/germany/nrw/city/koln/attractions/cologne-cathedral">{t.attractions.cologneCathedral[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/rathaus-koln">{t.attractions.cologneRathaus[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/roemisch-germanisches-museum">{t.attractions.roemischGermanischesMuseum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/farina-duftmuseum">{t.attractions.farinaDuftmuseum[lang]}</Link></li>
                          <li><Link to="/germany/nrw/city/koln/attractions/museum-ludwig">{t.attractions.museumLudwig[lang]}</Link></li>
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
              <li><Link to="/ukraine/sumska">{t.regions.sumska[lang]}</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Map;