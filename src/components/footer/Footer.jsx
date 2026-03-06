import { Link } from 'react-router'
import './Footer.scss'
import { useSelector } from 'react-redux';

const Footer = () => {
  const { lang } = useSelector((state) => state.language);

  const Sitemap = { ru: "Карта сайта", ua: "Карта сайту", de: "Sitemap" }
  const Unesco = { ru: "Достопримечательности ЮНЕСКО", ua: "Пам’ятки ЮНЕСКО", de: "UNESCO-Welterbestätten" }

  return (
    <div className='footer'>
      <div className='footer_founders'>our.travels1979@gmail.com</div>
      <div className='footer_unesco'><Link to={`./unesco`}>🌍 {Unesco[lang]}</Link></div>
      <div className='footer_map'><Link to={`/map`}>{Sitemap[lang]}</Link></div>
    </div>
  )
}

export default Footer