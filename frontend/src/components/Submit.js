import React, {useState} from 'react'
import '../styles/Submit.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SubmitTranslation(props) {   

    const [submitted, setSubmit] = useState(false)

    function submitFunction() {
        if (!submitted) {
            setSubmit(true)
            toast("Translation Submitted!")
        } else {
            toast("Already Submitted")
        }
    }

    return (
        <>
            <div className = 'SubmitTranslation'>
                <button className = 'submit' disabled={!props.disable} onClick = {submitFunction}>Submit</button>
                <ToastContainer />
            </div>
        </>
    )
    
}