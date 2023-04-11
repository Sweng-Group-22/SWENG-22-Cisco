import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../styles/BrowseLetter.css'
export default function BrowseLetter(props) {
  return (
    <>
        
        <Header/>
        <div class='container1'>
           <div className='page-letter'>
              <p>{props.Letter}</p>
           </div>
           <div className='browse-letter-box'>
              <div className='words'>
                   <Link to='/phrase/phrase1'>{props.Phrase1}</Link>
                   <Link to='/phrase/phrase2'>{props.Phrase2}</Link>
                   <Link to='/phrase/phrase3'>{props.Phrase3}</Link>
                   <Link to='/phrase/phrase4'>{props.Phrase4}</Link>
              </div>
           </div>
        </div>
        <Footer/>
    </>
  )
}
