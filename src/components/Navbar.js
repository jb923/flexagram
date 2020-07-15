import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import Searchbar from './Searchbar'


const Navbar = props => {
 
    return (
      <section className='nav-bar-container'>
        <div className='nav-left'>
        <NavLink className='nav-link-logo' to={`/`}>
          <FaInstagram/>Flexagram</NavLink>
        </div>
        <div classNmae='nav-middle'>
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
          </div>
        </div>
      </section>
    )
  }

  export default Navbar;