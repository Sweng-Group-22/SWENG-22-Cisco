import React from 'react'
import '../styles/PhraseBox.css'
import LikeDislike from '../components/LikeDislike'
import { useState } from "react"
import Modal from './Modal';

export default function PhraseBox(props) {
    return (
      <>
        <div className='phrase-box'>
          <div class='header'>
            <h1>"Phrase"</h1>   {/* Needs to be changed after discussion with backend */}
          </div>
          <center><LikeDislike/></center>
          <div class='phrase-add-translation' onClick={props.showModal}>
              <h2>Suggest Translation</h2>
          </div>
          {/* <div className='phrase-like-dislike'><LikeDislike/></div> */}
          {/* <div className="close-container">
            <div className="close-circle" onClick={props.showModal}>
              <div className="cross">
                <div className="close-left-diagonal-bar" />
                <div className="close-right-diagonal-bar" />
              </div>
            </div>
          </div> */}
        </div>
        {props.openModal && <Modal hideModal={props.hideModal}/>}
      </>
    )
}



