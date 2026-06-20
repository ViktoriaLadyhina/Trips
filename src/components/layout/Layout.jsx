import { Outlet } from 'react-router';
import { Header } from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

const Layout = () => {
  return (
    <div>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

export default Layout