import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../styles/BrowseLetter.css'
export default function BrowseLetter(Letter) {
  return (
    <>
        
        <Header/>
        <div class='container1'>
           <div className='page-letter'>
              <p>P</p>
           </div>
           <div className='browse-letter-box'>
              <div className='words'>
                   <Link to='/phrase/phrase1'>Phrase 1</Link>
                   <Link to='/404'>Phrase 2</Link>
                   <Link to='/404'>Phrase 3</Link>
                   <Link to='/404'>Phrase 4</Link>
                   
                     
              </div>
           </div>
        </div>
        <Footer/>
    </>
  )
}
