import './App.scss'
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout'
import Home from './page/home/Home'
import Country from './page/countries/Country';
import Regions from './page/regions/Regions';
import District from "./page/district/District";
import City from './page/city/City'
import AttractionsList from './page/attractions/AttractionsList';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:countryPath" element={<Country />} />
          <Route path="/:countryPath/:regionsPath" element={<Regions />} />
          <Route path="/:countryPath/:regionsPath/:districtPath" element={<District />} />
          <Route path="/:countryPath/:regionsPath/:districtPath/:cityPath" element={<City />} />
          <Route path="/:countryPath/:regionsPath/:districtPath/:cityPath/attractions" element={<AttractionsList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App