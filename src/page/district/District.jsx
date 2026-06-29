import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../components/region/Region.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx'

import './District.scss'
import CountryMap from '../../components/maps/CountryMap.jsx';
import BtnAttr from "../../components/btn-attr/BtnAttr.jsx";
import { useSelector } from "react-redux";
import datas from '../../datas/minimalIndex.js'
import { toFullUrl } from "../../utils/photo.js";
import { getDistrict, getMapCities, getSubregions } from "../../api/api.js";
import { getEntityName, prepareEntityBlocks } from "../../utils/entityHelpers.js";
import { TextBlock } from "../../components/renders/TextBlock.jsx";
import { PhotoBlock } from "../../components/renders/PhotoBlock.jsx";
import { MapBlock } from "../../components/renders/MapBlock.jsx";

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;
const loadingDistrict = { ru: "Загрузка района...", de: "Region wird geladen...", uk: "Завантаження району..." };

const District = () => {
  const { countryPath, regionPath, districtPath } = useParams();
  const { lang } = useSelector((state) => state.language);

  const [district, setDistrict] = useState(null);
  const [subRegions, setSubRegions] = useState(null);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const meta = district?.meta;
  const { blocks, langData } = prepareEntityBlocks(district?.blocks);

  const subRegionRefs = useRef({});

  useEffect(() => {
    if (!districtPath || !regionPath) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const [districtData, citiesData, subRegionsData] =
          await Promise.all([
            getDistrict(districtPath, lang, controller.signal),
            getMapCities(regionPath, lang, controller.signal),
            getSubregions(districtPath, lang, controller.signal),
          ]);

        setDistrict(districtData);
        setCities(citiesData?.cities || []);
        setSubRegions(subRegionsData || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [districtPath, regionPath, lang]);

  if (error) return <p>{error}</p>;
  if (!district) return <p>{loadingDistrict[lang]}</p>;
  if (loading) return <div>Loading...</div>;

  // Функция клика по субрегиону
  const scrollToSubRegion = (reg) => {
    const el = subRegionRefs.current[reg.id];

    el?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const sortedSubRegion = [...(subRegions || [])]
    .sort((a, b) =>
      getEntityName(a).localeCompare(getEntityName(b))
    );

  const mapData = {
    districtPath,
    district,
    subRegions,
    cities,
    scrollToSubRegion
  };

  const photo = district?.mainPhoto;

  const context = {
    lang,
    langData,
    countryPath, regionPath,
    mapRegions: mapData,
    photo,
    path: `/${countryPath}/${regionPath}/${districtPath}/attractions`,
    classPrefix: "district",
    className: "district__photo"
  };

  const blockRegistry = {
    name: TextBlock,
    capital: TextBlock,
    geography: TextBlock,
    population: TextBlock,
    area: TextBlock,
    cities: TextBlock,
    districts: TextBlock,

    photo: PhotoBlock,

    map: MapBlock
  };

  const renderBlock = (block) => {
    const Renderer = blockRegistry[block.block_key];

    if (!Renderer) return null;

    return <Renderer block={block} {...context} />;
  };

  if (error) return <p>{error}</p>;
  if (!district) return <p>{loadingDistrict[lang]}</p>;
  if (loading) return <div>Loading...</div>;

  const crumbs = [
    { label: lang === "ru" ? "Главная" : lang === "de" ? "Startseite" : "Головна", path: "/" },
    { label: datas.countries[countryPath][lang], path: `/${countryPath}` },
    { label: datas.regions[regionPath][lang], path: `/${countryPath}/${regionPath}` },
    { label: datas.districts[districtPath][lang] }
  ];

  return (
    <div className='district'>

      {meta && (
        <Helmet>
          <title>{meta.title}</title>
          <meta name="title" content={meta.title} />
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.og_title} />
          <meta property="og:description" content={meta.og_description} />
          <meta property="og:image" content={toFullUrl(meta.og_image)} />
        </Helmet>
      )}

      <section className="district__container">
        <BreadCrumbs crumbs={crumbs} />

        {blocks?.length > 0 && blocks.map(block => (
          <div key={block.block_key}>
            {renderBlock(block)}
          </div>
        ))}

        {sortedSubRegion?.length > 0 && (
          <div className="district__list">
            {(sortedSubRegion || [])
              .map((sub) => (
                <div
                  key={sub.id}
                  ref={(el) => {
                    if (el) subRegionRefs.current[sub.id] = el;
                  }}
                >
                  <Region
                    data={sub}
                    countryPath={countryPath}
                    regionPath={regionPath}
                    districtPath={districtPath}
                    subregionId={sub.id}
                  />
                </div>
              ))}
          </div>
        )}
      </section>
    </div>

  )
}

export default District