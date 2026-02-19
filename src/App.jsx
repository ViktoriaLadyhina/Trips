import './App.scss'
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout'
import Home from './page/home/Home'
import Country from './page/countries/Country';
import Regions from './page/regions/Regions';
import District from "./page/district/District";
import City from './page/city/City'
import AttractionsList from './page/attractions/AttractionsList';
import Attraction from './page/attraction/Attraction';
import SearchPage from './page/searchPage/SearchPage';
import AttractionForm from './components/forma/AttractionForm';
import Event from './page/events/Events'
import Map from './page/map/Map'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<AttractionForm />} />

          <Route path="/:countryPath" element={<Country />} />
          <Route path="/map" element={<Map />} />

          <Route path="/:countryPath/:regionsPath" element={<Regions />} />

          <Route path="/:countryPath/:regionsPath/:districtPath" element={<District />} />

          <Route path="/:countryPath/:regionsPath/:districtPath/:cityPath" element={<City />} />

          <Route path="/:countryPath/:regionsPath/attractions" element={<AttractionsList />} />
          <Route path="/:countryPath/:regionsPath/:districtPath/attractions" element={<AttractionsList />} />
          <Route path="/:countryPath/:regionsPath/:districtPath/:cityPath/attractions" element={<AttractionsList />} />

          <Route path="/:countryPath/:regionsPath/:districtPath/:cityPath/attractions/:attractionsPath" element={<Attraction />} />

          <Route path="/:countryPath/:regionsPath/:districtPath/:cityPath/events/:eventPath" element={<Event />} />

          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App