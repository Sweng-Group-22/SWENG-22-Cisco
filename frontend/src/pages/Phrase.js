import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddButton from '../components/AddButton'
import LikeDislike from '../components/LikeDislike'
import TranslationBox from '../components/TranslationBox'

export default function Phrase() {
  return (
    <>
        <Header/>
        <TranslationBox/>
        <TranslationBox/>
        <AddButton/>
        <Footer/>
        
    </>
  )
}
