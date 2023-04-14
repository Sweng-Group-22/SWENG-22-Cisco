import React from 'react'
import '../styles/TranslationBox.css'
import LikeDislike from '../components/LikeDislike'

export default function Phrase() {
    return (
      <>
        <div className='phrase-box'>
          <div class='header'>
            <h1>Translated phrase</h1>   {/* Needs to be changed after discussion with backend */}
          </div>
          <div className='phrase-content'>
            <div className='phrase-vertical-line'></div>
            <div className='phrase-translation'>
              Amet nisl suscipit adipiscing bibendum est ultricies 
              integer quis auctor elit sed vulputate mi sit amet mauris.
            </div>                           {/* Needs to be changed after discussion with backend */}
          </div>
          <div className='phrase-like-dislike'><LikeDislike/></div>
        </div>
      </>
    )
}



