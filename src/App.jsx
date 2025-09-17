import './App.scss'
import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout'
import Home from './page/home/Home'
import Germany from './page/Germany/Germany';
import Ukraine from './page/Ukraine/Ukraine';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country/ukraine' element={<Ukraine />} />
          <Route path='country/germany' element={<Germany />} />
        </Route>
      </Routes>
    </>
  )
}

export default App