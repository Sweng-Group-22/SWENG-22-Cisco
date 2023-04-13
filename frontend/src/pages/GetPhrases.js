import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GetPhrasesBox from '../components/GetPhrasesBox'
import '../styles/GetPhrases.css'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getTranslations } from '../api/Translation'

export default function GetPhrases() {

  const [openModal, setOpenModal] = useState(false);
  function showModal() {
    if(openModal===false) setOpenModal(true);
  }
  function hideModal() {
    if(openModal===true) setOpenModal(false);
  }

  // function usePhrases(letter){ return useQuery(['phrases', letter], () => getTranslations(letter))}
  // const {data} = usePhrases('')
  // console.log(data.data)

  return (
    <>
        <Header/>
        <div className='title'>
            <h2>Get Phrases</h2>   {/* Needs to be changed after discussion with backend */}
        </div>
        <div class="row3">
          <div className='column3'>
            <GetPhrasesBox idn={1} openModal={openModal} showModal={showModal} hideModal={hideModal} EnglishPhrase={"People"}/>
            <GetPhrasesBox idn={2} openModal={openModal} showModal={showModal} hideModal={hideModal} EnglishPhrase={"Personal Insights"}/>
          </div>
        
          <div className='column3'>
            <GetPhrasesBox idn={3} openModal={openModal} showModal={showModal} hideModal={hideModal} EnglishPhrase={"Personal Room Invite"}/>
            <GetPhrasesBox idn={4} openModal={openModal} showModal={showModal} hideModal={hideModal} EnglishPhrase={"Pinned Messages"}/>
          </div>
        </div>
        
        <Footer/>
    </>
  )
}
