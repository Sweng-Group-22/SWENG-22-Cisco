import React from 'react'
import '../styles/Popup.css'


export default function Popup(showFunc) {
 
  return (
    <>
      <div className='popup-container'>
        <h3 className='popup-english-phrase'>PlaceHolder 1</h3>
        <label className='popup-label'>Language: 
          <select>
            <option>Select Language</option>
            <option>Irish</option>
          </select>
        </label> 
        <div className='popup-translation'><label className='popup-label'>Translation:</label>
        <textarea className='popup-textarea' />
        </div>
        
        <div className='popup-buttons'>
          <button onClick={showFunc}>Cancel</button>
          <button type='submit'>Submit</button>
        </div>
      </div>
      
    
    </>
  )
  
}
