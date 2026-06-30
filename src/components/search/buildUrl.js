export function buildUrl(item) {
    if (!item) return "#";

    const {
        type,
        countryPath,
        regionPath,
        districtPath,
        cityPath,
        path
    } = item;

    switch (type) {

        // 🌍 страна
        case "country":
            return `/${countryPath}`;

        // 🗺️ земля / регион
        case "region":
            return `/${countryPath}/${regionPath}`;

        // 🏘️ район
        case "district":
            return `/${countryPath}/${regionPath}/${districtPath}`;

        // 🏙️ город
        case "city":
            // город земельного подчинения
            if (!districtPath) {
                return `/${countryPath}/${regionPath}/city/${path}`;
            }

            return `/${countryPath}/${regionPath}/${districtPath}/${path}`;

        // 🎯 достопримечательность
        case "attraction":
            // районный город
            if (districtPath && districtPath !== "city") {
                return `/${countryPath}/${regionPath}/${districtPath}/${cityPath}/attractions/${path}`;
            }

            // city-level
            return `/${countryPath}/${regionPath}/city/${cityPath}/attractions/${path}`;

        // 🎉 события
        case "event":
            if (cityPath && districtPath) {
                return `/${countryPath}/${regionPath}/${districtPath}/${cityPath}/events/${path}`;
            }

            if (cityPath) {
                return `/${countryPath}/${regionPath}/city/${cityPath}/events/${path}`;
            }

            return `/${countryPath}/${regionPath}/events/${path}`;

        // 🛣️ маршруты
        case "routes":
            return `/${countryPath}/routes/${path}`;

        default:
            console.warn("Unknown type in buildUrl:", item);
            return "#";
    }
}
