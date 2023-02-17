import React, {useState} from 'react'
import '../styles/Submit.css'

export default function SubmitTranslation() {   

    const [submitted, setSubmit] = useState(false)

    function submitFunction() {
        //TODO: Integrate with text type feature
        if(!submitted) {
            setSubmit(true)
        }
    }

    return (
        <>
            <div classname = 'SubmitTranslation'>
                <button classname = 'submit' onClick = {submitFunction}/>
            </div>
        </>
    )
    
}