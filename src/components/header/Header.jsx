import LangSelector from '../langSelector/LangSelector'
import ThemeToggle from '../themeToggle/ThemeToggle'

export const Header = () => {

  return (
    <div className='header'>
        <img src="/title.gif" alt="" />
        <ThemeToggle />
        <LangSelector />
    </div>
  )
}
