import './Region.scss'
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { fixHtmlImages } from "../../utils/photo.js";
import { forwardRef } from "react";

const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Region = forwardRef(({ data, countryPath, regionPath, districtPath, subregionId }, ref) => {
  const { lang } = useSelector((state) => state.language);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/subregionCities/${subregionId}?lang=${lang}`)
      .then(res => res.json())
      .then(data => setCities(data || []))
      .catch(err => setError(err.message));
  }, [subregionId, lang]);

  const communityText = {
    ru: `Район подразделяется на ${cities.length} общин:`,
    uk: `Район поділяється на ${cities.length} громад:`,
    de: `Der Landkreis ist in ${cities.length} Gemeinden unterteilt:`,
  };
  const langData = useMemo(() => {
    if (!data?.blocks) return {};

    return data.blocks.reduce((acc, b) => {
      acc[b.block_key] = b.content;
      return acc;
    }, {});
  }, [data]);

  const blocks = useMemo(() => {
    return (data?.blocks || [])
      .slice()
      .sort((a, b) => a.sort_order - b.sort_order);
  }, [data]);

  const sortedCities = useMemo(() => {
    if (!cities?.length) return [];

    return [...cities].sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );
  }, [cities]);

  const photo = data?.emblem;

  const renderBlock = (block) => {
    switch (block.block_key) {

      case "name":
      case "capital":
      case "geography":
      case "area":
      case "code":
      case "population":
        return langData?.[block.block_key] ? (
          <section
            className={`region__block region__block--${block.block_key}`}
            dangerouslySetInnerHTML={{
              __html: fixHtmlImages(langData[block.block_key])
            }}
          />
        ) : null;

      case "photo":
        return (
          <div className='region__container_desc-img'>
            <img
              src={`${BASE_PHOTO_URL}${photo?.path}`}
              className="region__photo"
              alt={photo?.title?.[lang] || ""}
            />
          </div>
        );

      default:
        return null;
    }
  };

  if (error) return <p>{error}</p>;

  const hasCommunities =
    data?.type?.toLowerCase() === "subregion" &&
    sortedCities.length > 0;


  return (
    <div className='region' ref={ref}>

      <div className={`region__container ${!hasCommunities ? "region__container--full" : ""}`}>

        {data?.type === "subRegion" && sortedCities.length > 0 && (

          <div className='region__container-list'>
            <span className="region__container_desc-text-com">{communityText[lang]}</span>
            <ul>
              {sortedCities.map((reg) => (
                <li key={reg.id} className="region__container-list__item">
                  {reg.is_active ? (
                    <Link
                      to={`/${countryPath}/${regionPath}/${districtPath}/${reg.path}`}
                      className="region__container-list__link"
                    >
                      {reg.name}
                    </Link>
                  ) : (
                    <span className="region__container-list__link region__container-list__link--disabled">
                      {reg.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='region__container_desc'>
          <div className='region__container_desc-text'>
            {blocks?.length > 0 && blocks.map(block => (
              <div key={block.block_key}>
                {renderBlock(block)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Region;
