import './Region.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { forwardRef } from "react";
import { getSubregionCities } from "../../api/api.js";
import { prepareEntityBlocks } from '../../utils/entityHelpers.js';
import { TextBlock } from '../renders/TextBlock.jsx';
import { PhotoBlock } from '../renders/PhotoBlock.jsx';


const BASE_PHOTO_URL = import.meta.env.VITE_BASE_PHOTO_URL;

const Region = forwardRef(({ data, countryPath, regionPath, districtPath, subregionId }, ref) => {
  const { lang } = useSelector((state) => state.language);
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(null);
  const { blocks, langData } = prepareEntityBlocks(data?.blocks);

useEffect(() => {
  if (!subregionId) return;

  setError(null);

  getSubregionCities(subregionId, lang)
    .then(data => { setCities(data || []) })
    .catch(err => { setError(err.message) });
}, [subregionId, lang]);

  const communityText = {
    ru: `Район подразделяется на ${cities.length} общин:`,
    uk: `Район поділяється на ${cities.length} громад:`,
    de: `Der Landkreis ist in ${cities.length} Gemeinden unterteilt:`,
  };


const sortedCities = [...(cities || [])].sort((a, b) =>
  (a.name || "").localeCompare(b.name || "")
);

  const photo = data?.emblem;

    const context = {
      lang,
      langData,
      photo,
      className: "region__photo",
      classPrefix: "region__block region__block",
    };
  
    const blockRegistry = {
      name: TextBlock,
      capital: TextBlock,
      geography: TextBlock,
      population: TextBlock,
      area: TextBlock,
      code: TextBlock,
  
      photo: PhotoBlock,
    };
  
    const renderBlock = (block) => {
      const Renderer = blockRegistry[block.block_key];
  
      if (!Renderer) return null;
  
      return <Renderer block={block} {...context} />;
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
