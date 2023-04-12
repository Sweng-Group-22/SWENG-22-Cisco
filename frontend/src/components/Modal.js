import React, { useState } from 'react'
import '../styles/Modal.css'
import '../styles/CloseButton.css'
import SubmitTranslation from './Submit'
import CancelTranslation from './Cancel'
import '../styles/Modal.css'
import { useMutation } from 'react-query'
import { addTranslation } from '../api/Translation'

export default function Modal(props) {
  const [newTranslation, setNewTranslation] = useState('')
  
  function handleChange(result){
    setNewTranslation(result)
  }
  const addNewTranslationMutation = useMutation({
    mutationFn: addTranslation
  })
  function sumitTranslation(){
   addTranslation(299,'German',newTranslation)
  } 
  if(addNewTranslationMutation.isError){console.log(addNewTranslationMutation.error)}
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
        <textarea className='modal-textarea' onChange={(e)=>handleChange(e.target.value)}/>
        </div>
        
        <div className='modal-buttons'>
          
          {/* <button type='submit'>Submit</button> */}
        </div>
        {/* <center> */}
        <div className='modal-buttons'>'
        

          {/* <button onClick={props.hideModal}>Cancel</button> */}
          <CancelTranslation hideModal={sumitTranslation}/>
          <SubmitTranslation/>
        {/* </center> */}
      </div>
      </div>
    </>
  )
  
}
