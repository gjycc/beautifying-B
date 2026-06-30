import { Link } from 'react-router-dom'
import logo from '../../assets/loguito.png'
import './Header.css'
import { Nav } from '../nav/nav'
export const Header = () => {
  return (
    <header >
      <div className='logo-container'>
        <Link to='/'>
          <img src={logo} alt="Logo"/>
          <span>GJY</span>
        </Link>
      </div>
      <Nav />
    </header>
  ) 
}
    