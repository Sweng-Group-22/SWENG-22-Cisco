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
              <h1>P :</h1>
            </div>
            <div className='words'>
              <Link to='/phrase/placeholder1'>PlaceHolder 1</Link>
              <Link to=''>PlaceHolder 2</Link>
              <Link to=''>PlaceHolder 3</Link>
              <Link to=''>PlaceHolder 4</Link>
            </div>
        </div>
        <Footer/>
    </>
  )
}
