import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CloseButton from '../components/CloseButton'
import PhraseBox from '../components/PhraseBox'
import { useState } from 'react'

export default function GetPhrases() {

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
        
        <PhraseBox idn={1} openModal={openModal} showModal={showModal} hideModal={hideModal}/>
        <PhraseBox idn={2} openModal={openModal} showModal={showModal} hideModal={hideModal}/>
        <PhraseBox idn={3} openModal={openModal} showModal={showModal} hideModal={hideModal}/>

        <Footer/>
    </>
  )
}
