import React from 'react'
import '../styles/AddButton.css'
import { useState } from 'react'
import Popup from './Popup'

export default function AddButton() {
    const [showPopup, setshowPopup] = useState(false)
    function toggleAddPopup(){
        setshowPopup(!showPopup)
    }

  return (
    <>
        <div className='circle' onClick={toggleAddPopup}>
            <div className='plus'>
                <div className='vertical' />
                <div className='horizontal'/>
            </div>
        </div>
        {showPopup && <Popup/>}
    </>
  )
}
