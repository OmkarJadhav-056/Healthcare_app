import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faPlus } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div>
      <div className="navbar">
        <h2><span id='first'>Health</span><span id='second'>care.</span></h2>
        <div className="input-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search' />
        </div>
        <div id="bell">
          <i> <FontAwesomeIcon icon={faBell} /></i>
        </div>
        <div className="right">
          <div className="img-box">
            <img src='https://static.vecteezy.com/system/resources/previews/059/918/232/non_2x/vibrant-minimalist-three-quarter-portrait-angled-portrait-exclusive-free-png.png' alt="" />
          </div>
          <div className="icon-box">
            <i><FontAwesomeIcon icon={faPlus} /></i>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
