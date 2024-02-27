import {React, useState}  from 'react'
import { Link } from "react-router-dom";
import logo from './blinkfeed-high-resolution-logo-transparent (2).png'
import './Navbar.css'


const Navbar = ()=> {
  const [activeItem, setActiveItem] = useState('general');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <img style={{width: '150px' , marginRight: '10px'}} src={logo} alt="BlinkFeed" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"5px"}}>
                    <li className={`nav-item ${activeItem === 'general' ? 'active' : ''}`}>
                      <Link className="nav-link" aria-current="page" to="/general" onClick={() => handleItemClick('general')}>Home</Link>
                    </li>
                      <li className={`nav-item ${activeItem === 'entertainment' ? 'active' : ''}`}> 
                    <Link to='/entertainment' className="nav-link" onClick={() => handleItemClick('entertainment')}>Entertainment</Link></li>

                      <li className={`nav-item ${activeItem === 'business' ? 'active' : ''}`}> 
                    <Link className="nav-link" to="/business" onClick={() => handleItemClick('business')}>Business</Link></li>
                    
                      <li className={`nav-item ${activeItem === 'health' ? 'active' : ''}`}> 
                    <Link className="nav-link" to="/health" onClick={() => handleItemClick('health')}>Health</Link></li>

                      <li className={`nav-item ${activeItem === 'science' ? 'active' : ''}`}> 
                    <Link className="nav-link" to="/science" onClick={() => handleItemClick('science')}>Science</Link></li>

                      <li className={`nav-item ${activeItem === 'sports' ? 'active' : ''}`}> 
                    <Link className="nav-link" to="/sports" onClick={() => handleItemClick('sports')}>Sports</Link></li>

                      <li className={`nav-item ${activeItem === 'technology' ? 'active' : ''}`}> 
                    <Link className="nav-link" to="/technology" onClick={() => handleItemClick('technology')}>Technology</Link></li>
                </ul>
                <ul className="navbar-nav me-left mb-2 mb-lg-0" style={{backgroundColor:"#213109" , borderRadius:"15px" , paddingLeft:"10px" , paddingRight:"10px" ,color:"white"}}>
                    <li className={`nav-item ${activeItem === 'about' ? 'active' : ''}`}>
                      <Link className="nav-link" to="/about" onClick={() => handleItemClick('about')}>About Me</Link></li>
                </ul>
                </div>
            </div>
            </nav>
      </div>
    )
  
}

export default Navbar
