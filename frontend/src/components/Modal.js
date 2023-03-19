import React from 'react'
import '../styles/Modal.css'
import '../styles/CloseButton.css'
import SubmitTranslation from './Submit'


export default function Modal(props) {
  return (
    <>
      <div id='t-modal' className='modal-container'>
        <h3 className='modal-english-phrase'>Add Translation</h3>
        <label className='modal-label'>Language: 
          <select>
            <option>Select Language</option>
            <option>Irish</option>
          </select>
        </label> 
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