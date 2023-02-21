import React, { useState } from 'react'
import '../styles/Popup.css'


export default function Popup() {

  return (
    <>
      <div className='popup-container'>
        <h3 className='english'>English Phrase</h3>
        <label className='popup-label'>Language: 
          <select>
            <option>Select Language</option>
            <option>Irish</option>
          </select>
        </label>
        <label className='popup-label'>Translation:</label>
        <textarea className='popup-textarea' />
        <div className='popup-buttons'>
          <button>Cancel</button>
          <button type='submit'>Submit</button>
        </div>
      </div>
      
    
    </>
  )
  
  return null
}
