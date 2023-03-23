import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddButton from '../components/AddButton'
import LikeDislike from '../components/LikeDislike'
import TranslationBox from '../components/TranslationBox'
import Modal from '../components/Modal'
import { useState } from 'react'

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
        <TranslationBox/>
        <TranslationBox/>
        <AddButton showModal={showModal}/>
        <Footer/>
        {openModal && <Modal hideModal={hideModal}/> }
        
    </>
  )
}
