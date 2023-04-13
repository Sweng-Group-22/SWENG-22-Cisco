import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../styles/BrowseLetter.css'
import {useQuery} from 'react-query'
import { searchTranslation } from '../api/Translation'


export default function BrowseLetter(props) {
   const {data} = useQuery(['browse',props.Letter],()=>searchTranslation(props.Letter))
   console.log(data)

   return (
    <>
        
        <Header/>
        <div class='container1'>
           <div className='page-letter'>
              <p>{props.Letter}</p>
           </div>
           <div className='browse-letter-box'>
              <div className='words'>{
               data.data.map(listItem =>{
                  return <Link to='/phrase/phrase1'>{listItem.englishPhrase}</Link>
               })
              }
                   
                   
              </div>
           </div>
        </div>
        <Footer/>
    </>
  )
}
