import React from 'react'
import '../styles/GetPhrasesBox.css'
import { Link } from 'react-router-dom'
import Modal from './Modal';

export default function GetPhrasesBox(props) {
  
  return (
    <>
      <div className='get-phrases-box'>
        <div className='get-phrases-box-content'>
          <div className='get-phrases-box-eng-phrase'>
            English Phrase
          </div>
          <hr class='horizontal-line'/> {/* The Thematic Break (Horizontal Rule) element. */}
          <div className='get-phrases-box-view-suggest'>

            <div className='get-phrases-box-view'>
              <Link style={{textDecoration: 'none'}} class='view' to='/phrase/phrase1'>View existing translations</Link>
            </div>

            <div className='get-phrases-box-suggest' onClick={props.showModal}>
              <h>Suggest a translation</h>
            </div>

          </div>                           
        </div>
      </div>
      {props.openModal && <Modal hideModal={props.hideModal}/>}
    </>
  )
}


