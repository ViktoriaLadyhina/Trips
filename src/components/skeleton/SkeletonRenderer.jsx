import SkeletonMap from "./blocks/SkeletonMap";
import SkeletonTitle from "./blocks/SkeletonTitle";
import SkeletonText from "./blocks/SkeletonText";
import SkeletonCountries from "./blocks/SkeletonCountries";
import SkeletonSidebar from "./blocks/SkeletonSidebar";
import SkeletonContent from "./blocks/SkeletonContent";
import SkeletonSubRegion from "./blocks/SkeletonSubRegion";
import SkeletonAttractionCard from "./blocks/SkeletonAttractionCard";


const skeletonBlocks = {
    title: SkeletonTitle,
    map: SkeletonMap,
    countries: SkeletonCountries,
    text: SkeletonText,
    sidebar: SkeletonSidebar,
    content: SkeletonContent,
    subregion: SkeletonSubRegion,
    attractionCards: SkeletonAttractionCard,
};


export default function SkeletonRenderer({ blocks, layout = "column" }) {

    return (
        <div className={`skeleton-page skeleton-page--${layout}`}>
            {
                blocks.map(({ type, props = {} }, index) => {

                    const Component = skeletonBlocks[type];

                    return Component
                        ? <Component key={`${type}-${index}`} {...props} />
                        : null;
                })
            }
        </div>
    );
}