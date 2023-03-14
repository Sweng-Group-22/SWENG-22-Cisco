import React from 'react'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

export default function Header(){

  return(
    <> 
      <div class="navbar">
        <Link to='/'>Translate</Link>
          <div class="dropdown">
            <button class="dropbtn">Browse 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <div class="row">
                <div class="column">
                  <Link to="/browse/A">A</Link>
                  <Link to="/browse/E">E</Link>
                  <Link to="/browse/I">I</Link>
                  <Link to="/browse/M">M</Link>
                  <Link to="/browse/Q">Q</Link>
                  <Link to="/browse/U">U</Link>
                  <Link to="/browse/Y">Y</Link>
                </div>
                <div class="column">
                  <Link to="/browse/B">B</Link>
                  <Link to="/browse/F">F</Link>
                  <Link to="/browse/J">J</Link>
                  <Link to="/browse/N">N</Link>
                  <Link to="/browse/R">R</Link>
                  <Link to="/browse/V">V</Link>
                  <Link to="/browse/Z">Z</Link>
                </div>
                <div class="column">
                  <Link to="/browse/C">C</Link>
                  <Link to="/browse/G">G</Link>
                  <Link to="/browse/K">K</Link>
                  <Link to="/browse/O">O</Link>
                  <Link to="/browse/S">S</Link>
                  <Link to="/browse/W">W</Link>
                </div>
                <div class="column">
                  <Link to="/browse/D">D</Link>
                  <Link to="/browse/H">H</Link>
                  <Link to="/browse/L">L</Link>
                  <Link to="/browse/P">P</Link>
                  <Link to="/browse/T">T</Link>
                  <Link to="/browse/X">X</Link>
                </div>
              </div>
            </div>
          </div>
          <Link to='/phrase/get'>Get Phrases</Link>
	        {/* <Link to="log">Log In</Link> */}
          <input type="text" placeholder="Search..."/>
        </div>
      </>
  )
}