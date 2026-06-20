import { useSelector } from 'react-redux';

import LangSelector from '../langSelector/LangSelector.jsx'
import Search from '../search/Search.jsx'
import ThemeToggle from '../themeToggle/ThemeToggle.jsx'
import './Header.scss'

const titleMap = {
  ru: "Наши путешествия",
  uk: "Наші подорожі",
  de: "Unsere Reisen"
};

export const Header = () => {
  const { lang } = useSelector((state) => state.language);
  const homeTitle = titleMap[lang];

  return (
    <div className='header'>
      <div className='header__title'>{homeTitle}</div>
      <div className='header__image'><img src="/header.jpg" alt="" /></div>
      <div className='header__menu'>
        <div className='header__menu-theme'><ThemeToggle /></div>
        <div className='header__menu-lang'><LangSelector /></div>
        <div className='header__menu-search'><Search lang={lang} /></div>
      </div>
    </div>
  )
}
