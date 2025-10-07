import { useSelector } from 'react-redux';

import { datas as datasUa } from '../../datas/ua/home'
import { datas as datasRu } from '../../datas/ru/home'
import { datas as datasDe } from '../../datas/de/home'

import LangSelector from '../langSelector/LangSelector'
import Search from '../search/Search'
import ThemeToggle from '../themeToggle/ThemeToggle'
import './Header.scss'

export const Header = () => {
  const { lang } = useSelector((state) => state.language);
  const homeData = lang === 'ua' ? datasUa : lang === 'de' ? datasDe : datasRu;

  return (
    <div className='header'>
      <div className='header__title'>{homeData?.title}</div>
      <div className='header__image'><img src="/header.jpg" alt="" /></div>
      <div className='header__menu'>
        <div className='header__menu-theme'><ThemeToggle /></div>
        <div className='header__menu-lang'><LangSelector /></div>
        <div className='header__menu-search'><Search lang={lang} /></div>
      </div>
    </div>
  )
}
