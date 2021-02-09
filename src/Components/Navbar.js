import React from 'react';
import '../Stylesheets/Navbar.css'

const Navbar = () => {
    return (
        <div className = 'navbar nav__black'>
        <div className="nav__contents">
         <img src="https://www.citypng.com/public/uploads/preview/-11594685687yk7qshpthg.png" alt="" className = 'nav__logo'/> 
        <img src="https://www.whats-on-netflix.com/wp-content/uploads/2019/04/avatar-the-last-airbender-original-animated-series.jpg" alt="" className = 'nav__avatar'/>
        </div>
        </div>
    )
}

export default Navbar
