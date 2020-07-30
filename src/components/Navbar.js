import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaRegQuestionCircle } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { FiPlusSquare } from 'react-icons/fi';
import Searchbar from './Searchbar'


const Navbar = props => {
 
    return (
      <section className='nav-bar-container'>
        <div className='nav-left'>
        <NavLink className='nav-link-icon' to={`/`}>
          <img src={require("../assets/icon.jpeg")} />
        </NavLink>
        <NavLink className='nav-link-logo' to='/'>Flexagram</NavLink>
        </div>
        <div className='nav-middle'>
            {/* <Searchbar /> */}
        </div>
        <div className='nav-right'>
          <div className='nav-home'>
            <NavLink className='nav-icon' to={'/'}>
              <IoMdHome />
            </NavLink>
          </div>
          <div className='nav-profile'>
            <NavLink className='nav-icon' to={`/profile`}>
              <img src='https://i.etsystatic.com/7745761/r/il/eb07f8/1384972180/il_570xN.1384972180_mly2.jpg'/>
            </NavLink>
            <NavLink to='/upload'><FiPlusSquare className='nav__upload'/></NavLink>
          </div>
        </div>
      </section>
    )
  }

  export default Navbar;