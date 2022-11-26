import React, {useState} from 'react';
import logo from '../images/logo_yw.png';
// import {Link} from 'react-router-dom';

function Navbar() {

  const [nav,setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false); 
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? "nav active" :"nav"}>
      <Link to = "main" className='logo'>
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label>
        <span className='nav-icon'></span>
      </label>
      <ul>
        <li><Link to = 'main' smooth={true} duartion={1000}>Home</Link></li>
        <li><Link to = 'services' smooth={true} duartion={1000}>Services</Link></li>
        <li><Link to = 'offer' smooth={true} duartion={1000}>Offers</Link></li>
        <li><Link to = 'about' smooth={true} duartion={1000}>About</Link></li>
        <li><Link to = 'contact' smooth={true} duartion={1000}>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
