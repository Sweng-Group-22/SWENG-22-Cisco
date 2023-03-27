import React from 'react'
import '../styles/Modal.css'
import '../styles/CloseButton.css'
import SubmitTranslation from './Submit'
import '../styles/Modal.css'


export default function Modal(props) {
  return (
    <>
      <div id='t-modal' className='modal-container'>
        <h className='modal-english-phrase'>Add Translation</h>
        <div className='modal-language-container'>
        <label className='modal-label'>Language: 
           
        </label> <select>
            <option>Select Language</option>
            <option>Irish</option>
          </select>
        </div>
        <div className='modal-translation'><label className='modal-label'>Translation:</label>
        <textarea className='modal-textarea' />
        </div>
        
        <div className='modal-buttons'>
          
          {/* <button type='submit'>Submit</button> */}
        </div>
        {/* <center> */}
        <div className='modal-buttons'>'
        

          <button onClick={props.hideModal}>Cancel</button>
          <SubmitTranslation/>
        {/* </center> */}
      </div>
      </div>
    </>
  )
  
}
