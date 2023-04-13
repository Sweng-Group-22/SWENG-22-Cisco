import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddButton from '../components/AddButton'
import TranslationBox from '../components/TranslationBox'
import Modal from '../components/Modal'
import { useState } from 'react'
import '../styles/Phrase.css'

export default function Phrase(props) {
  const [openModal, setOpenModal] = useState(false);
  function showModal() {
    if(openModal===false) setOpenModal(true);
  }
  function hideModal() {
    if(openModal===true) setOpenModal(false);
  }

  return (
    <>
        <Header/>
        <div className='title'>
            <h2>{props.phrase.englishPhrase}</h2>   {/* Needs to be changed after discussion with backend */}
        </div>
        <div class="row2">
          
            {props.phrase.voteList.map(translation=>
              {return <TranslationBox idn={translation?.id} Translation={translation?.translation} 
                      likes={translation?.likes} dislikes={translation?.dislikes}/>})}
            
        
        </div>
        
        <AddButton showModal={showModal}/>
        <Footer/>
        {openModal && <Modal hideModal={hideModal}/> }
        
    </>
  )
}
