import React from 'react'
import '../styles/Header.css'

export default function Header(){

  return(
    <> 
      <div class="navbar">
        <b>Translate</b>
          <div class="dropdown">
            <button class="dropbtn">Browse 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <div class="row">
                <div class="column">
                  <a href="#">A</a>
                  <a href="#">E</a>
                  <a href="#">I</a>
                  <a href="#">M</a>
                  <a href="#">Q</a>
                  <a href="#">U</a>
                  <a href="#">Y</a>
                </div>
                <div class="column">
                  <a href="#">B</a>
                  <a href="#">F</a>
                  <a href="#">J</a>
                  <a href="#">N</a>
                  <a href="#">R</a>
                  <a href="#">V</a>
                  <a href="#">Z</a>
                </div>
                <div class="column">
                  <a href="#">C</a>
                  <a href="#">G</a>
                  <a href="#">K</a>
                  <a href="#">O</a>
                  <a href="#">S</a>
                  <a href="#">W</a>
                </div>
                <div class="column">
                  <a href="#">D</a>
                  <a href="#">H</a>
                  <a href="#">L</a>
                  <a href="#">P</a>
                  <a href="#">T</a>
                  <a href="#">X</a>
                </div>
              </div>
            </div>
          </div>
	        <a href="#log">Log In</a>
          <input type="text" placeholder="Search..."/>
        </div>
      </>
  )
}