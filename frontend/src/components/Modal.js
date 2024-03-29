import React, { useState } from 'react'
import '../styles/Modal.css'
import SubmitTranslation from './Submit'
import CancelTranslation from './Cancel'
import '../styles/Modal.css'
import { useMutation } from 'react-query'
import { addTranslation } from '../api/Translation'

export default function Modal({hideModal}) {
  const [newTranslation, setNewTranslation] = useState('')
  
  function handleChange(result){
    setNewTranslation(result)
  }
  const addNewTranslationMutation = useMutation({
    mutationFn: addTranslation
  })
  function sumitTranslation(e){
    e.preventDefault()
    addNewTranslationMutation.mutate({
      segment:898,
      language:"Yourba",
      translation:newTranslation
    })
    hideModal()
  } 
  if(addNewTranslationMutation.isError){console.log(addNewTranslationMutation.error)}
  return (
    <> <form onSubmit={(e)=>sumitTranslation(e)}>
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
        
        <div className='modal-buttons'>'
          {/* <button onClick={props.hideModal}>Cancel</button> */}
          <CancelTranslation hideModal={hideModal}/>
          <SubmitTranslation />
        </div>
      </div></form>
    </>
  )
  
}
