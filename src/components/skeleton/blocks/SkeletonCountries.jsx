export default function SkeletonCountries({
    count = 3
}) {

    return (
        <ul className="skeleton-countries">

            {Array.from({ length: count }).map((_, index) => (
                <li key={index}>
                    <div className="skeleton-country-card">

                        <div className="skeleton-country-image"></div>

                        <div className="skeleton-country-title"></div>

                    </div>
                </li>
            ))}

        </ul>
    );
}