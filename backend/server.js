const express = require("express");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://our-travels.info"
  ],
  methods: ["GET", "POST"]
}));

app.use(express.json());

const searchMysql = require("./routes/searchMysql.js");  
const listCountriesRouter = require("./routes/listCountries.router.js");  
const countryRouter = require("./routes/country.router.js");  
const regionRouter = require("./routes/region.router.js");  
const mapCitiesListRouter = require("./routes/mapCitiesList.router.js");  
const districtRouter = require("./routes/district.router.js");  
const subregionsRoutes = require("./routes/subregions.routes.js");  
const subregionCitiesRouter = require("./routes/subregionCities.router.js"); 


// COUNTRY LIST API
app.use("/api/countries", listCountriesRouter);

// COUNTRY API
app.use("/api/country", countryRouter);

// REGION API
app.use("/api/region", regionRouter);

// MAP CITIES LIST API
app.use("/api/map/cities", mapCitiesListRouter);

// DISTRICT API
app.use("/api/district", districtRouter);

// SUBREGIONS API
app.use("/api/subregions", subregionsRoutes);

// SUBREGION CITIES API 
app.use("/api/subregionCities", subregionCitiesRouter);

// SEARCH API 
app.use("/api/search", searchMysql);

// запуск сервера
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
})