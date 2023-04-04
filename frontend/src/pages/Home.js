import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SelectLanguage from '../components/SelectLanguage';
import '../styles/Home.css'

export default function Home() {
  return (
    <>
        <center>
	        <Header/>
          <h1 className="home-title">
            WEBEX<br></br>TRANSLATE
          </h1>
          <a href="https://i.ibb.co/fSf0pbX/Webex-Logo-Txt-Clr.png">
            <img className="img" src="https://i.ibb.co/fSf0pbX/Webex-Logo-Txt-Clr.png" alt="Logo" border="0" />
          </a>
        </center>
        <SelectLanguage/>
        <Footer/>
    </>
  )
}
