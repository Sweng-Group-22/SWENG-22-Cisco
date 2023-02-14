import React from 'react'
import '../styles/Popup.css'


export default function Popup() {
  return (
    <>
      <div className='container'>
        <h3>English Phrase</h3>
        <label>Language: 
          <select>
            <option>Select Language</option>
            <option>Irish</option>
          </select>
        </label>
        <label>Translation:
          <textarea className='textarea' />
        </label>
        <button>Cancel</button>
        <button type='submit'>Submit</button>
      </div>
      
    
    </>
  )
}
