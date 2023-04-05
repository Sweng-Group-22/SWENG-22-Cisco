import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddButton from '../components/AddButton'
import TranslationBox from '../components/TranslationBox'
import Modal from '../components/Modal'
import { useState } from 'react'
import '../styles/Phrase.css'

export default function Phrase() {
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
            <p>Translated phrase</p>   {/* Needs to be changed after discussion with backend */}
        </div>
        <div class="row2">
          <div className='column2'>
            <TranslationBox idn={1}/>
            <TranslationBox idn={2}/>
          </div>
          
          <div className='column2'>
            <TranslationBox idn={3}/>
            <TranslationBox idn={4}/>
          </div>
        </div>
        
        <AddButton showModal={showModal}/>
        <Footer/>
        {openModal && <Modal hideModal={hideModal}/> }
        
    </>
  )
}
