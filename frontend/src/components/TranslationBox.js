import React from 'react'
import '../styles/TranslationBox.css'
import LikeDislike from '../components/LikeDislike'

export default function Phrase(props) {
    return (
      <>
        <div className='translation-box'>
          <div className='translation-content'>
            <div className='translation-vertical-line'></div> 
            <div className='translation-translation'>
              {props.Translation}
            </div>                           {/* Needs to be changed after discussion with backend */}
            
          </div>
          <div className='translation-like-dislike'><LikeDislike idn={props.idn} likes={props.likes} dislikes={props.dislikes}/></div>
        </div>
      </>
    )
}



