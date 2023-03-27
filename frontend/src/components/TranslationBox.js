import React from 'react'
import '../styles/TranslationBox.css'
import LikeDislike from '../components/LikeDislike'

export default function Phrase() {
    return (
      <>
        <div className='translation-box'>
          <div className='translation-content'>
            <div className='translation-vertical-line'></div>
            <div className='translation-translation'>
              Amet nisl suscipit adipiscing bibendum est ultricies 
              integer quis auctor elit sed vulputate mi sit amet mauris. 
            </div>                           {/* Needs to be changed after discussion with backend */}
            <div className='translation-like-dislike'><LikeDislike/></div>
          </div>
          
        </div>
      </>
    )
}



