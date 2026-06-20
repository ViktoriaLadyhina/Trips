import './App.scss'
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout.jsx'
import Home from './page/home/Home.jsx'
import Country from './page/countries/Country.jsx';
import Regions from './page/regions/Regions.jsx';
import District from "./page/district/District.jsx";
import City from './page/city/City.jsx'
import AttractionsList from './page/attractions/AttractionsList.jsx';
import Attraction from './page/attraction/Attraction.jsx';
import SearchPage from './page/searchPage/SearchPage.jsx';
import AttractionForm from './components/forma/AttractionForm.jsx';
import Event from './page/events/Events.jsx'
import Map from './page/map/Map.jsx'
import Unesco from './page/unesco/Unesco.jsx'
import Rout from './page/routes/Routes.jsx';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<AttractionForm />} />

          <Route path="/:countryPath" element={<Country />} />
          <Route path="/map" element={<Map />} />
          <Route path="/unesco" element={<Unesco />} />

          <Route path="/:countryPath/:regionPath" element={<Regions />} />

          <Route path="/:countryPath/routes/:routesPath" element={<Rout />} />

          <Route path="/:countryPath/:regionPath/:districtPath" element={<District />} />

          <Route path="/:countryPath/:regionPath/:districtPath/:cityPath" element={<City />} />

          <Route path="/:countryPath/attractions" element={<AttractionsList />} />
          <Route path="/:countryPath/:regionPath/attractions" element={<AttractionsList />} />
          <Route path="/:countryPath/:regionPath/:districtPath/attractions" element={<AttractionsList />} />
          <Route path="/:countryPath/:regionPath/:districtPath/:cityPath/attractions" element={<AttractionsList />} />

          <Route path="/:countryPath/:regionPath/:districtPath/:cityPath/attractions/:attractionsPath" element={<Attraction />} />

          <Route path="/:countryPath/:regionPath/:districtPath/:cityPath/events/:eventPath" element={<Event />} />

          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App