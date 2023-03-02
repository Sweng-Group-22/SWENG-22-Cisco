import React from 'react'
import AddButton from '../components/AddButton'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../styles/BrowseLetter.css'
export default function BrowseLetter(Letter) {
  return (
    <>
        
        <Header/>
        <div className='browse-letter-box'>
            <div className='page-letter'>
              <h1>P</h1>
            </div>
            <div className='words'>
              <Link to='/phrase/phrase1'>Phrase 1</Link>
              <Link to='/404'>Phrase 2</Link>
              <Link to='/404'>Phrase 3</Link>
              <Link to='/404'>Phrase 4</Link>
            </div>
        </div>
        <Footer/>
    </>
  )
}
