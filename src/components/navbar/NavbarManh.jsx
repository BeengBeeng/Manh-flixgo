import React from 'react'
import  './NavbarManh.scss'
const NavbarManh = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar-1'>
          <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
        </div>
        <div className='navbar-2'>
          <ul>
            <li>HOME <i class="fa-solid fa-chevron-down"></i></li>
            <li>CATALOG <i class="fa-solid fa-chevron-down"></i></li>
            <li>PRICING PLAN</li>
            <li>HELP</li>
            <li>...</li>
          </ul>
        </div>
        <div className='navbar-3'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>EN</p>
          <p className='sign-in'>SIGN IN</p>
        </div>
      </div>
    </div>
  )
}

export default NavbarManh
