import { Link } from 'react-router'
import './Footer.scss'

const Footer = () => {

    
  return (
    <div className='footer'>
      <div className='footer_founders'>our.travels1979@gmail.com</div>
      <div className='fooer_map'>
        <Link to={`/map`}>Карта сайта</Link>
        </div>
    </div>
  )
}

export default Footer