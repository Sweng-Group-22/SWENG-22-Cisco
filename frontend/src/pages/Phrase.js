import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AddButton from '../components/AddButton'
import '../styles/Phrase.css'
import LikeDislike from '../components/LikeDislike'

export default function Phrase() {
  return (
    <>
        <Header/>
        <div className='phrase-box'>
            <div className='phrase-title'>Translation 1</div>
            <div className='phrase-content'>
                <div className='phrase-line'></div>
                <div className='phrase-translation'>amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris</div>
            </div>
            <div className='phrase-like-dislike'>
                <LikeDislike/>
            </div>
        </div>
        <div className='phrase-box'>
            <div className='phrase-title'>Translation 2</div>
            <div className='phrase-content'>
                <div className='phrase-line'></div>
                <div className='phrase-translation'>purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam</div>
            </div>
            <div className='phrase-like-dislike'>
                <LikeDislike/>
            </div>
        </div>
        <AddButton/>
        <Footer/>
        
    </>
  )
}
