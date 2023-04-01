import React from 'react'
import '../styles/Cancel.css'

export default function CancelTranslation(props) {   

    return (
        <>
            <div className = 'CancelTranslation'>
                <button className = 'cancel' onClick = {props.hideModal}>Cancel</button>
            </div>
        </>
    )
    
}