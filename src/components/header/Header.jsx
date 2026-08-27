import { useSelector } from 'react-redux';

import LangSelector from '../langSelector/LangSelector.jsx'
import Search from '../search/Search.jsx'
import ThemeToggle from '../themeToggle/ThemeToggle.jsx'
import './Header.scss'

const headerImages = {
  ru: {
    light: "/header_ru_l.png",
    dark: "/header_ru_d.png",
  },
  uk: {
    light: "/header_uk_l.png",
    dark: "/header_uk_d.png",
  },
  de: {
    light: "/header_de_l.png",
    dark: "/header_de_d.png",
  },
};

const languages = { ru: 'Язык', uk: 'Мовa', de: 'Sprache'}

export const Header = () => {
  const { lang } = useSelector((state) => state.language);
  const { theme } = useSelector((state) => state.theme);
  
  const image = headerImages[lang][theme];

  return (
    <div className='header'>
      <div className='header__topMenu'>
        <div className='header__topMenu-theme'><ThemeToggle /></div>
        <div className='header__topMenu-lang'><span>{languages[lang]}</span> <LangSelector /></div>
      </div>
      <div className='header__image'><img src={image} alt="" /></div>
      <div className='header__lowerMenu'>
        <div className='header__lowerMenu-search'><Search lang={lang} /></div>
      </div>
    </div>
  )
}
