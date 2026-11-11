const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://our-travels.info"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
const sessionStore = new MySQLStore({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: Number(process.env.MYSQLPORT || 3306)
});

app.set("trust proxy", 1);

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 8 * 60 * 60 * 1000
  }
}));

const searchMysql = require("./routes/searchMysql.js");  
const listCountriesRouter = require("./routes/listCountries.router.js");  
const countryRouter = require("./routes/country.router.js");  
const regionRouter = require("./routes/region.router.js");  
const mapCitiesListRouter = require("./routes/mapCitiesList.router.js");  
const districtRouter = require("./routes/district.router.js");  
const subregionsRoutes = require("./routes/subregions.routes.js");  
const subregionCitiesRouter = require("./routes/subregionCities.router.js"); 
const cityRouter = require("./routes/city.router.js"); 
const attractionsListRouter = require("./routes/attrList.router.js");
const allAttractionsRouter = require("./routes/allAttr.router.js")
const attractionRouter = require("./routes/attraction.router.js")
const routRouter = require("./routes/rout.router.js")
const unescoRouter = require("./routes/unesco.roter.js")
const eventRouter = require("./routes/event.router.js")
const addRouter = require("./routes/addAttraction.router.js")
const authRouter = require("./routes/auth.router.js");

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

// CITY API 
app.use("/api/city", cityRouter);

// ATTRACTIONS lIST
app.use("/api/attractions", attractionsListRouter);

// All ATTRACTIONS
app.use("/api/attractions", allAttractionsRouter);

// ATTRACTION
app.use("/api/attraction", attractionRouter);

// ROUTE
app.use("/api/route", routRouter);

// UNESCO
app.use("/api/unesco", unescoRouter);

// EVENT
app.use("/api/event", eventRouter);

//forma
app.use("/api/add", addRouter);
app.use("/api/auth", authRouter); // защита маршрута добавления достопримечательности


// запуск сервера
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
})