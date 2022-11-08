import React from "react";
import Logo from '../../assets/stackline_logo.svg'

const Header = () => {
    return (
      <div style={{backgroundColor: '#112545', height: '60px'}}>
        <img src={Logo} alt="Stackline Logo" style={{height:'20px', margin: '20px'}}/>
      </div>
    );
  }
  
  export default Header;