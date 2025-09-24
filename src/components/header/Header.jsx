import LangSelector from '../langSelector/LangSelector'
import Search from '../search/Search'
import ThemeToggle from '../themeToggle/ThemeToggle'

export const Header = () => {

  return (
    <div className='header'>
        <img src="/title.gif" alt="" />
        <ThemeToggle />
        <LangSelector />
        <Search />
    </div>
  )
}
