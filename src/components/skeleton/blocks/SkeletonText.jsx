import "../Skeleton.scss";

export default function SkeletonText({
    lines = 4,
    hasTitle = false,
    hasPhoto = false,
    photoPosition = "right"
}) {

    const widths = ["100%", "95%", "80%", "60%"];

    const photoLines = hasPhoto
        ? Math.min(lines, 4)
        : lines;

    const renderLines = (count, offset = 0) =>
        Array.from({ length: count }).map((_, index) => (
            <div
                key={`${offset}-${index}`}
                className="skeleton-line"
                style={{
                    width: widths[(index + offset) % widths.length]
                }}
            />
        ));

    return (
        <div className="skeleton-text">

            {hasTitle && (
                <div className="skeleton-subTitle"></div>
            )}

            {hasPhoto ? (
                <>
                    <div
                        className={`skeleton-text-row skeleton-text-row--${photoPosition}`}
                    >

                        {photoPosition === "left" && (
                            <div className="skeleton-photo"></div>
                        )}

                        <div className="skeleton-text-lines">
                            {renderLines(photoLines)}
                        </div>

                        {photoPosition === "right" && (
                            <div className="skeleton-photo"></div>
                        )}

                    </div>

                    {lines > photoLines && (
                        <div className="skeleton-text-bottom">
                            {renderLines(lines - photoLines, photoLines)}
                        </div>
                    )}
                </>
            ) : (
                <div className="skeleton-text-bottom">
                    {renderLines(lines)}
                </div>
            )}

        </div>
    );
}