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
              <img src='https://avatars3.githubusercontent.com/u/60685723?s=400&u=8906bc06047d2374252904e393c4acb11358be6d&v=4'/>
            </NavLink>
          </div>
        </div>
      </section>
    )
  }

  export default Navbar;