import React from 'react'
import AddButton from '../components/AddButton'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SubmitTranslation from '../components/Submit'
import SelectPhrase from '../components/SelectPhrase';

export default function WordTranslations() {
  return (
    <>
        <Header/>
        <center>
          <br/><br/><br/>
          <SelectPhrase/>
          <br/><br/><br/>
          <div class="translate-box"><input type="text" placeholder="Enter Translation"/></div>
          <br/><br/><br/>
          <SubmitTranslation/>
          <br/><br/><br/>
        </center>
        <Footer/>
    </>
  )
}
