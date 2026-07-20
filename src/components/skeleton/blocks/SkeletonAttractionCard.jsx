import "../Skeleton.scss";

export default function SkeletonAttractionCard({
    cards = 5
}) {
    return (
        <div className="skeleton-attractions-list">

            {Array.from({ length: cards }).map((_, index) => (

                <div
                    className="skeleton-attraction-card"
                    key={index}
                >

                    <div className="skeleton-attraction-title"></div>

                    <div className="skeleton-attraction-rating"></div>

                    <div className="skeleton-attraction-content">

                        <div className="skeleton-attraction-photo"></div>

                        <div className="skeleton-attraction-info">

                            <div className="skeleton-attraction-line"></div>
                            <div className="skeleton-attraction-line"></div>
                            <div className="skeleton-attraction-line short"></div>

                            <div className="skeleton-attraction-extra"></div>

                            <div className="skeleton-attraction-more"></div>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
}