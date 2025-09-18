import './App.scss'
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout'
import Home from './page/home/Home'
import Germany from './page/Germany/Germany';
import Ukraine from './page/Ukraine/Ukraine';
import NRW from './page/Germany/NRW/NRW';
import Regions from './page/Germany/NRW/Regions';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='ukraine' element={<Ukraine />} />
          <Route path='germany' element={<Germany />} />
          <Route path='germany/nrw/:regionID' element={<Regions />} />
          <Route path='germany/nrw' element={<NRW />} />
        </Route>
      </Routes>
    </>
  )
}

export default App