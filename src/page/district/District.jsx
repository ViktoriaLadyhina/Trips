import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs.jsx';
import Region from '../../components/region/Region.jsx';
import InfoBlock from '../../components/InfoBlock/InfoBlock.jsx'

import './District.scss'
import CountryMap from '../../components/maps/CountryMap.jsx';
import BtnAttr from "../../components/btn-attr/BtnAttr.jsx";
import { useSelector } from "react-redux";
import datas from '../../datas/minimalIndex'
import { toFullUrl, fixHtmlImages } from "../../utils/photo";

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const District = () => {
  const { countryPath, regionPath, districtPath } = useParams();
  const { lang } = useSelector((state) => state.language);

  const [district, setDistrict] = useState(null);
  const [subRegions, setSubRegions] = useState(null);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  const meta = district?.meta;

  const subRegionRefs = useRef({});

useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      setError(null);

      const [districtRes, citiesRes, subRegionsRes] = await Promise.all([
        fetch(`${import.meta.env.VITE_API_URL}/api/district/${districtPath}?lang=${lang}`, { signal: controller.signal }),
        fetch(`${import.meta.env.VITE_API_URL}/api/map/cities/${regionPath}?lang=${lang}`, { signal: controller.signal }),
        fetch(`${import.meta.env.VITE_API_URL}/api/subregions/${districtPath}?lang=${lang}`, { signal: controller.signal }),
      ]);

      const districtData = await districtRes.json();
      const citiesData = await citiesRes.json();
      const subRegionsData = await subRegionsRes.json();

      setDistrict(districtData);
      setCities(citiesData.cities || []);
      setSubRegions(subRegionsData || []);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    }
  };

  fetchData();

  return () => controller.abort();
}, [districtPath, regionPath, lang]);

  // Функция клика по субрегиону
  const scrollToSubRegion = (reg) => {
    const el = subRegionRefs.current[reg.id];

    el?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const blocks = useMemo(() => {
    return (district?.blocks || [])
      .slice()
      .sort((a, b) => a.sort_order - b.sort_order);
  }, [district]);

  const langData = useMemo(() => {
    if (!district?.blocks) return {};

    return district.blocks.reduce((acc, b) => {
      acc[b.block_key] = b.content;
      return acc;
    }, {});
  }, [district]);

  const sortedSubRegion = useMemo(() => {
    if (!subRegions?.length) return [];

    const getRegionName = (region) => {
      return (
        region.blocks?.find(
          (block) => block.block_key === "name"
        )?.content || ""
      );
    };

    return [...subRegions].sort((a, b) =>
      getRegionName(a).localeCompare(getRegionName(b))
    );
  }, [subRegions]);

  const renderBlock = (block) => {
    switch (block.block_key) {

      // ===== TEXT BLOCKS =====
      case "name":
      case "capital":
      case "geography":
      case "area":
      case "cities":
      case "districts":
      case "population":
        return langData?.[block.block_key] ? (
          <section
            className={`district__${block.block_key}`}
            dangerouslySetInnerHTML={{
              __html: fixHtmlImages(langData[block.block_key])
            }}
          />
        ) : null;

      // ===== MAP =====
      case "map":

        return (
          <div className='district__map'>
            <CountryMap
              countryKey={countryPath}
              regionKey={regionPath}
              districtKey={districtPath}
              regions={district}
              subRegion={subRegions}
              cities={cities}
              scrollToSubRegion={scrollToSubRegion}
            />
          </div>
        );

      // ===== PHOTO =====
      case "photo": {
        const photo = district.mainPhoto;

        if (!photo) return null;

        return (
          <img
            src={`${BASE_PHOTO_URL}${photo.path}`}
            className="district__photo"
            alt={photo.title?.[lang] || ""}
          />
        );
      }

      default:
        return null;
    }
  };

  if (error) return <p>{error}</p>;
  if (!district) return <p>District not found</p>;

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