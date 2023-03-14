import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CloseButton from '../components/CloseButton'
import LikeDislike from '../components/LikeDislike'
import PhraseBox from '../components/PhraseBox'

export default function GetPhrases() {

  return (
    <>
        <Header/>
        
        <PhraseBox/>
        <PhraseBox/>
        <PhraseBox/>

        <Footer/>
    </>
  )
}
