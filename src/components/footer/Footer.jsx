import { Link } from 'react-router'
import './Footer.scss'
import { useSelector } from 'react-redux';

const Footer = () => {
  const { lang } = useSelector((state) => state.language);

  const Sitemap = { ru: "Карта сайта", ua: "Карта сайту", de: "Sitemap" }

  return (
    <div className='footer'>
      <div className='footer_founders'>our.travels1979@gmail.com</div>
      <div className='fooer_map'>
        <Link to={`/map`}>{Sitemap[lang]}</Link>
        </div>
    </div>
  )
}

export default Footer