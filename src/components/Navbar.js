import React from 'react';
// import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
// import { FaInstagram, FaRegQuestionCircle } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { FiPlusSquare } from 'react-icons/fi';
// import Searchbar from './Searchbar'


const Navbar = props => {
    // const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");

    if (!props.userInfo.user) return null;

    return (
      <section className='nav-bar-container'>
        <div className='nav-left'>
        {/* <NavLink className='nav-link-icon' to={`/`}>
          <img src={require("../assets/icon.jpeg")} />
        </NavLink> */}
        <NavLink className='nav-link-logo' to='/home'>Flexagram</NavLink>
        </div>
        <div className='nav-middle'>
            {/* <Searchbar /> */}
        </div>
        <div className='nav-right'>
          <div className='nav-home'>
            <NavLink className='nav-icon' to={'/home'}>
              <IoMdHome />
            </NavLink>
          </div>
          <div className='nav-profile'>
            <NavLink className='nav-icon' to={`/profile/:userId`}>
              <img src={props.userInfo.user.profileimgurl} alt="profile-pic"/>
            </NavLink>
            <NavLink to='/upload'><FiPlusSquare className='nav__upload'/></NavLink>
          </div>
        </div>
      </section>
    )
  }

  export default Navbar;