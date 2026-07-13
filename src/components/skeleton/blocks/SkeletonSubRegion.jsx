import "../Skeleton.scss";

export default function SkeletonSubRegion({
    cities = 5
}) {

    return (
        <div className="skeleton-subregion">

            <div className="skeleton-subregion-cities">

                {Array.from({ length: cities }).map((_, index) => (
                    <div
                        key={index}
                        className="skeleton-subregion-city"
                    />
                ))}

            </div>


            <div className="skeleton-subregion-content">

                <div className="skeleton-subregion-title"></div>

                <div className="skeleton-subregion-line"></div>
                <div className="skeleton-subregion-line"></div>
                <div className="skeleton-subregion-line short"></div>

            </div>


            <div className="skeleton-subregion-photo"></div>

        </div>
    );
}