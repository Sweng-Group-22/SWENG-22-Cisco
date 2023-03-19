import React from 'react'
import '../styles/PhraseBox.css'
import { useState } from "react"
import Modal from './Modal';

export default function PhraseBox() {
    const [displayPopup, setshowPopup] = useState(false);
    function toggleAddPopup(value) {
      setshowPopup(value);
    }
    return (
      <>
        <div className='phrase-box'>
          <div class='header'>
            <h1>"Phrase"</h1>   {/* Needs to be changed after discussion with backend */}
          </div>
          <div class='phrase-add-translation' onClick={()=>{toggleAddPopup(true)}}>
              <h2>Offer Translation</h2>
          </div>
          {/* <div className='phrase-like-dislike'><LikeDislike/></div> */}
          <div className="close-container">
            <div className="close-circle" onClick={()=>{toggleAddPopup(false)}}>
              <div className="cross">
                <div className="close-left-diagonal-bar" />
                <div className="close-right-diagonal-bar" />
              </div>
            </div>
          </div>
        </div>
        {displayPopup && <Modal hideModal={toggleAddPopup}/>}
      </>
    )
}



